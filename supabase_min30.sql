-- Zebra: require 30 plays of a prompt before player data changes its final scores.
-- Run once in the SQL Editor (after supabase_final.sql).

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
        case when coalesce(t.attempts,0) < 30 then a.b          -- minimum: 30 plays before player data counts
             else (1 - (t.attempts-30)::numeric/(t.attempts-30+50)) * a.b
                + ((t.attempts-30)::numeric/(t.attempts-30+50))
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
