-- Zebra: crowd-sourced answer suggestions ("We missed an answer?").
-- Already applied to the live project; kept here so the database can be rebuilt.
create table if not exists public.zebra_suggestions (
  id         bigint generated always as identity primary key,
  day        date        not null,
  mode       text        not null check (mode in ('daily','practice','board','board-practice','stampede')),
  field      text        not null check (field ~ '^(physician|pa|np|nurse|pharmacist|dentist|other)$'),
  player     uuid        not null,
  prompt     text        not null check (length(prompt) <= 200),
  suggestion text        not null check (length(trim(suggestion)) between 2 and 80),
  status     text        not null default 'new' check (status in ('new','added','already','rejected')),
  note       text,
  created_at timestamptz not null default now()
);
create index if not exists zebra_suggestions_status_idx on public.zebra_suggestions (status, prompt);
alter table public.zebra_suggestions enable row level security;
drop policy if exists "suggest answers" on public.zebra_suggestions;
create policy "suggest answers" on public.zebra_suggestions for insert to anon, authenticated
  with check ( day between current_date - 1 and current_date + 1 and status = 'new' and note is null );
grant insert on public.zebra_suggestions to anon, authenticated;
revoke select, update, delete on public.zebra_suggestions from anon, authenticated;

-- Review queue (run in the SQL Editor): suggestions plus wrong guesses, most common first
--   select prompt, lower(trim(suggestion)) s, count(distinct player) players
--   from zebra_suggestions where status='new' group by 1,2 order by players desc;
