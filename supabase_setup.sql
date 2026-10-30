-- Zebra: shared daily scores for the ranking bell curve.
-- Run this once in your Supabase project: Dashboard -> SQL Editor -> New query -> paste -> Run.

-- 1) One row per player, per day, per ranking group.
--    "field" is the profession + mode the player picked, e.g. "nurse", "physician", "board-pharmacist".
--    Rankings are exclusive to each group: nurses are only compared with nurses, and so on.
create table if not exists public.zebra_scores (
  id         bigint generated always as identity primary key,
  day        date        not null,
  field      text        not null check (field ~ '^(board-)?(physician|pa|np|nurse|pharmacist|dentist|other)$'),
  player     uuid        not null,              -- random id stored in the player's browser
  total      int         not null check (total between 0 and 700),
  created_at timestamptz not null default now(),
  unique (day, field, player)                   -- each browser counts once per day per group
);

-- 2) Lock the table down: browsers may only ADD a score for (roughly) today.
--    They cannot read, change or delete rows.
alter table public.zebra_scores enable row level security;

drop policy if exists "submit today's score" on public.zebra_scores;
create policy "submit today's score"
  on public.zebra_scores
  for insert
  to anon, authenticated
  with check (
    total between 0 and 700
    and day between current_date - 1 and current_date + 1   -- allows for time zones
  );

grant usage on schema public to anon, authenticated;
grant insert on public.zebra_scores to anon, authenticated;
revoke select, update, delete on public.zebra_scores from anon, authenticated;

-- 3) The bell curve reads only bucket counts (25-point buckets) for ONE group, never raw rows.
create or replace function public.score_histogram(p_day date, p_field text)
returns table (bucket int, n bigint)
language sql
stable
security definer
set search_path = public
as $$
  select least(total / 25, 28) as bucket, count(*) as n
  from public.zebra_scores
  where day = p_day and field = p_field
  group by 1
  order by 1;
$$;

revoke all on function public.score_histogram(date, text) from public;
grant execute on function public.score_histogram(date, text) to anon, authenticated;

-- Optional: delete scores older than 90 days (run occasionally, or schedule with pg_cron).
-- delete from public.zebra_scores where day < current_date - 90;
