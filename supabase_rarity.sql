-- Zebra: answer log + player-based rarity (run once, after supabase_setup.sql).
-- Supabase Dashboard -> SQL Editor -> New query -> paste -> Run.
-- It is safe to run again later; it only creates things that are missing and replaces functions.

-- 1) ANSWER LOG: one row per guess, from every mode. Anonymous: only a random browser id.
create table if not exists public.zebra_answers (
  id         bigint generated always as identity primary key,
  day        date        not null,
  mode       text        not null check (mode in ('daily','practice','board','board-practice','stampede')),
  field      text        not null check (field ~ '^(physician|pa|np|nurse|pharmacist|dentist|other)$'),
  player     uuid        not null,
  prompt     text        not null check (length(prompt) <= 200),
  answer     text                 check (length(answer) <= 120),   -- the answer it matched, or null if it didn't count
  guess      text        not null check (length(guess) <= 80),     -- what the player actually typed
  pts        int         not null default 0 check (pts between 0 and 99),
  ok         boolean     not null default false,
  ms         int                  check (ms between 0 and 600000),  -- milliseconds into the round
  created_at timestamptz not null default now()
);
create index if not exists zebra_answers_day_idx on public.zebra_answers (day);

alter table public.zebra_answers enable row level security;
drop policy if exists "log answers" on public.zebra_answers;
create policy "log answers" on public.zebra_answers for insert to anon, authenticated
  with check ( day between current_date - 1 and current_date + 1 );
grant insert on public.zebra_answers to anon, authenticated;
revoke select, update, delete on public.zebra_answers from anon, authenticated;

-- 2) DAILY SUMMARIES (kept forever, tiny). Raw rows are deleted after 60 days.
--    attempts = distinct player-plays of a prompt; n = how many of those plays gave this answer.
create table if not exists public.zebra_prompt_daily (
  day date not null, prompt text not null, attempts int not null,
  primary key (day, prompt));
create table if not exists public.zebra_answer_daily (
  day date not null, prompt text not null, answer text not null, n int not null,
  primary key (day, prompt, answer));
create table if not exists public.zebra_miss_daily (            -- guesses that weren't on the chart
  day date not null, prompt text not null, guess text not null, n int not null,
  primary key (day, prompt, guess));

-- 3) THE RARITY SNAPSHOT the game reads. Rebuilt once a night, so a whole day is scored the same way.
create table if not exists public.zebra_rarity (
  prompt text not null, answer text not null, n int not null, attempts int not null,
  primary key (prompt, answer));
create table if not exists public.zebra_prompt_totals (
  prompt text primary key, attempts int not null);

alter table public.zebra_prompt_daily  enable row level security;
alter table public.zebra_answer_daily  enable row level security;
alter table public.zebra_miss_daily    enable row level security;
alter table public.zebra_rarity        enable row level security;
alter table public.zebra_prompt_totals enable row level security;
revoke all on public.zebra_prompt_daily, public.zebra_answer_daily, public.zebra_miss_daily,
              public.zebra_rarity, public.zebra_prompt_totals from anon, authenticated;

-- 4) NIGHTLY JOB: summarise the last few days, rebuild the snapshot, prune old raw rows.
create or replace function public.zebra_nightly()
returns void language plpgsql security definer set search_path = public as $$
begin
  -- re-summarise the last 3 days (late or time-zone-shifted rows are picked up)
  delete from zebra_prompt_daily where day >= current_date - 3;
  delete from zebra_answer_daily where day >= current_date - 3;
  delete from zebra_miss_daily   where day >= current_date - 3;

  insert into zebra_prompt_daily (day, prompt, attempts)
    select day, prompt, count(distinct (player, mode))
    from zebra_answers where day >= current_date - 3 group by day, prompt;

  insert into zebra_answer_daily (day, prompt, answer, n)
    select day, prompt, answer, count(distinct (player, mode))
    from zebra_answers where day >= current_date - 3 and ok and answer is not null
    group by day, prompt, answer;

  insert into zebra_miss_daily (day, prompt, guess, n)
    select day, prompt, lower(trim(guess)), count(distinct (player, mode))
    from zebra_answers where day >= current_date - 3 and not ok and length(trim(guess)) > 1
    group by day, prompt, lower(trim(guess));

  -- rebuild the snapshot from all summaries
  truncate zebra_prompt_totals;
  insert into zebra_prompt_totals (prompt, attempts)
    select prompt, sum(attempts) from zebra_prompt_daily group by prompt;
  truncate zebra_rarity;
  insert into zebra_rarity (prompt, answer, n, attempts)
    select a.prompt, a.answer, sum(a.n), t.attempts
    from zebra_answer_daily a join zebra_prompt_totals t using (prompt)
    group by a.prompt, a.answer, t.attempts;

  delete from zebra_answers where day < current_date - 60;
end $$;
revoke all on function public.zebra_nightly() from public, anon, authenticated;

-- 5) READ: the game asks for the snapshot of today's prompts only (max 20 at a time).
create or replace function public.zebra_rarity_for(p_prompts text[])
returns table (prompt text, answer text, n int, attempts int)
language sql stable security definer set search_path = public as $$
  select t.prompt, coalesce(r.answer, ''), coalesce(r.n, 0), t.attempts
  from zebra_prompt_totals t
  left join zebra_rarity r on r.prompt = t.prompt
  where t.prompt = any (p_prompts[1:20]);
$$;
revoke all on function public.zebra_rarity_for(text[]) from public;
grant execute on function public.zebra_rarity_for(text[]) to anon, authenticated;

-- 6) SCHEDULE: every night at 05:05 UTC (about 1 AM Eastern in summer, midnight in winter).
create extension if not exists pg_cron with schema pg_catalog;
select cron.unschedule('zebra-nightly') where exists (select 1 from cron.job where jobname = 'zebra-nightly');
select cron.schedule('zebra-nightly', '5 5 * * *', 'select public.zebra_nightly()');

-- ============================================================================
-- HANDY QUERIES (run these yourself in the SQL Editor any time; players can't see them)
--
-- Refresh the snapshot right now instead of waiting for tonight:
--   select public.zebra_nightly();
--
-- Most common guesses that WEREN'T on the chart (answers you may want to add):
--   select prompt, guess, sum(n) as players from zebra_miss_daily
--   group by prompt, guess order by players desc limit 50;
--
-- How often each answer is given for one prompt:
--   select answer, n, attempts, round(100.0*n/attempts,1) as pct from zebra_rarity
--   where prompt = 'Name a cause of chest pain' order by n desc;
--
-- Plays per prompt (most played first):
--   select * from zebra_prompt_totals order by attempts desc;
-- ============================================================================
