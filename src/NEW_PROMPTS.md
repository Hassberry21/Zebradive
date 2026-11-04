# Adding new standard daily prompts

Goal: a prompt bank so large that by the time a prompt repeats, players have long forgotten it.
Each field (Medicine, Nursing, Pharmacy, Dental) plays **7 new daily prompts every day = 49 a week**,
so every batch must add **more than 49 prompts per field per week** for the bank to grow.
Board Prep prompts are off limits for now (a future premium feature); never add or change them.

## Where and how

Append a new block in `src/bank.js` directly above the marker line
`/* ==== NEW DAILY PROMPT BATCHES GO DIRECTLY ABOVE THIS LINE ... ==== */`, with a header comment like
`/* ---- NEW STANDARD DAILY PROMPTS: NURSING (batch YYYY-MM-DD) ---- */`. One call per prompt:

```js
P("Name a cause of chest pain","clinical","",`
heart attack|myocardial infarction|mi
anxiety|panic attack
...
tietze syndrome
`, "2026-11-06");
```

- Arguments: prompt text, category, strip words (usually `""`), the answer list, and the **added date**.
- **Category sets the field:** Medicine uses `clinical`, `body`, `science`, `micro`, `tests` or `care`
  (spread a batch across them, since at most 3 of one category play per day); Nursing `nursing`;
  Pharmacy `pharm`; Dental `dental`.
- **Answer list:** one answer per line, `display name|alias|alias`. Order matters: points come from
  list position, so put the **most common answers first and the rarest last**.
- **Lists must be EXHAUSTIVE: include every single correct answer you can find, with NO upper limit.**
  Players lose trust when a correct answer is marked wrong, so keep going past the obvious answers
  into the long tail: rare diseases, eponyms, obscure drugs, regional/brand names, subspecialty items.
  A finished list is usually 150 to 400+ answers; stop only when you genuinely cannot think of another
  correct answer. A prompt that can't reach about 80 good answers is a bad prompt; replace it.
  Fewer, complete prompts beat many thin ones.
- Put every common spelling of the SAME answer on one line as aliases (abbreviations, brand/generic,
  plain English vs medical term, UK/Australian terms such as paracetamol, adrenaline, sats, nil by mouth).
  Never list a synonym as its own line; that creates unfair point gaps.
- Lowercase display names, no trailing punctuation.
- **Added date must be at least 2 days in the future** (relative to when you push). A prompt joins the
  schedule on its added day, so a future date guarantees no player anywhere (including Australia) has
  already played a day whose schedule would change.

## Quality bar (this is a medical education game)

- Every answer must be correct for the exact prompt by standard references (textbooks, guidelines,
  FDA labeling, standard anatomy) and fit its literal scope (a "sign" prompt needs signs, not causes).
- Prompts must be open-ended "Name a ..." prompts that a working professional in that field can answer
  from everyday knowledge, with a long tail of rare-but-correct answers (the zebras).
- **No duplicates or near-duplicates** of any existing prompt in ANY mode (daily, practice, Stampede,
  board). Before writing, dump every existing prompt text:
  `node -e "const fs=require('fs');eval(fs.readFileSync('src/.logic.js','utf8')+';console.log([...BANK,...STAMP].map(p=>p.q).join(\"\\n\"))')" > /tmp/existing.txt`
  and check each new prompt against it (also by meaning, e.g. "Name a cause of vomiting" duplicates
  "Name a cause of nausea and vomiting").
- Practice-only prompts live in `PRACTICE_ONLY`; never add new prompts there.

## Safety steps (every run)

1. `python3 src/build.py && node src/check.js` must print OK before you start.
2. `node src/schedule_snapshot.js <today+1> > /tmp/before.json` (today+1 as YYYY-MM-DD).
3. Add prompts in chunks of about 10. After each chunk: `python3 src/build.py && node src/check.js`
   (must print OK), then `node src/schedule_snapshot.js <today+1> > /tmp/after.json && cmp /tmp/before.json /tmp/after.json`
   (must be identical: past and current days never change), then commit and push to main.
   Pushing in chunks keeps finished work safe if the run is cut short.
4. At the end, `node src/schedule_snapshot.js --repeats 2027-06-30` shows how far each field now
   runs before a public repeat; include that in the report.
