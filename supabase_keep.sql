-- Zebra: stop deleting raw answer data after 60 days (keep it for research).
-- Run once in the Supabase SQL Editor.

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

  -- raw answers are kept (needed for research); no automatic deletion
end $$;
revoke all on function public.zebra_nightly() from public, anon, authenticated;
