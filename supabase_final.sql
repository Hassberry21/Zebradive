-- Zebra: live rarity updates + final overnight rescoring.
-- Run once, AFTER supabase_setup.sql and supabase_rarity.sql:
-- Supabase Dashboard -> SQL Editor -> New query -> paste -> Run.  Safe to run again.

-- 1) Each logged answer also keeps its STARTING points, so it can be rescored later.
alter table public.zebra_answers add column if not exists base int check (base between 0 and 99);

-- 2) Final scores, set overnight. One row per player per day per ranking group.
create table if not exists public.zebra_final (
  day    date not null,
  kind   text not null check (kind in ('daily','stampede')),
  grp    text not null,                 -- e.g. 'nurse', 'board-pa' (same groups as the rankings)
  player uuid not null,
  total  int  not null,
  primary key (day, kind, grp, player));
alter table public.zebra_final enable row level security;
revoke all on public.zebra_final from anon, authenticated;

-- 3) Rescore one finished day with the latest rarity numbers (everyone that day on the same scale).
create or replace function public.zebra_finalize(p_day date)
returns void language sql security definer set search_path = public as $$
  delete from zebra_final where day = p_day;
  insert into zebra_final (day, kind, grp, player, total)
  select p_day,
         case when mode = 'stampede' then 'stampede' else 'daily' end,
         case when mode = 'board' then 'board-' || field else field end,
         player, sum(fpts)
  from (
    select a.mode, a.field, a.player,
      greatest(5, least(99, round(
        case when coalesce(t.attempts,0) = 0 then a.b
             else (1 - t.attempts::numeric/(t.attempts+50)) * a.b
                + (t.attempts::numeric/(t.attempts+50))
                  * greatest(5, least(99, round(99 - 60*log(1 + 100.0*coalesce(r.n,0)/t.attempts))))
        end)))::int as fpts
    from (select distinct on (mode, player, prompt, answer) mode, field, player, prompt, answer, coalesce(base, pts) as b
          from zebra_answers
          where day = p_day and ok and answer is not null and mode in ('daily','board','stampede')) a
    left join zebra_prompt_totals t on t.prompt = a.prompt
    left join zebra_rarity r on r.prompt = a.prompt and r.answer = a.answer
  ) x
  group by 2, 3, player;
$$;
revoke all on function public.zebra_finalize(date) from public, anon, authenticated;

-- 4) Rankings: once a day is final, the bell curve uses final scores; until then, the live ones.
create or replace function public.score_histogram(p_day date, p_field text)
returns table (bucket int, n bigint)
language sql stable security definer set search_path = public as $$
  select least(total / 25, 28) as bucket, count(*) as n from (
    select total from zebra_final where day = p_day and kind = 'daily' and grp = p_field
    union all
    select total from zebra_scores where day = p_day and field = p_field
      and not exists (select 1 from zebra_final where day = p_day and kind = 'daily' and grp = p_field)
  ) x group by 1 order by 1;
$$;
create or replace function public.stampede_histogram(p_day date, p_field text)
returns table (bucket int, n bigint)
language sql stable security definer set search_path = public as $$
  select least(total / 50, 60) as bucket, count(*) as n from (
    select total from zebra_final where day = p_day and kind = 'stampede' and grp = p_field
    union all
    select total from zebra_stampede where day = p_day and field = p_field
      and not exists (select 1 from zebra_final where day = p_day and kind = 'stampede' and grp = p_field)
  ) x group by 1 order by 1;
$$;
grant execute on function public.score_histogram(date, text) to anon, authenticated;
grant execute on function public.stampede_histogram(date, text) to anon, authenticated;

-- 5) A player can look up only their OWN final scores (by their private browser id).
create or replace function public.zebra_my_final(p_day date, p_player uuid)
returns table (kind text, grp text, total int)
language sql stable security definer set search_path = public as $$
  select kind, grp, total from zebra_final where day = p_day and player = p_player;
$$;
revoke all on function public.zebra_my_final(date, uuid) from public;
grant execute on function public.zebra_my_final(date, uuid) to anon, authenticated;

-- 6) Schedules (times are UTC):
--    every 10 minutes: refresh rarity with everything so far, including today
--    05:05 UTC (~1 AM Eastern): first final rescore of yesterday
--    11:05 UTC (~7 AM Eastern): final rescore again, once the West Coast has finished playing
select cron.unschedule(jobname) from cron.job where jobname in ('zebra-nightly','zebra-live','zebra-final-1','zebra-final-2');
select cron.schedule('zebra-live',    '*/10 * * * *', 'select public.zebra_nightly()');
select cron.schedule('zebra-final-1', '5 5 * * *',    'select public.zebra_nightly(); select public.zebra_finalize(current_date - 1)');
select cron.schedule('zebra-final-2', '5 11 * * *',   'select public.zebra_nightly(); select public.zebra_finalize(current_date - 1)');

-- Handy: rescore a day by hand  ->  select public.zebra_finalize('2026-10-31');
