# Board-content audit of existing prompts

**Owner's rule (Hassan):** every answer that is testable on the field's licensing exams must be on a
prompt's answer list BEFORE anything else. Players learn and recall board material; an obscure item
(e.g. a lysosomal storage disease the boards never test) matters far less than a missing board classic.
Existing prompts are audited first; new prompts are written only once a field's audit is complete.
Fewer prompts with complete answer banks beats many prompts with thin ones.

| Field | Exams to cover | Prompts audited |
|---|---|---|
| medicine | USMLE Step 1, Step 2 CK, Step 3, COMLEX Levels 1-3 (incl. OMM terms where relevant) | daily + practice prompts of the medicine pool |
| nursing | NCLEX-RN and NCLEX-PN | nursing pool |
| pharmacy | NAPLEX (plus top-200 drugs and common OTC products) | pharmacy pool |
| dental | INBDE / NBDE Parts I-II | dental pool |
| stampede | all of the above (Stampede prompts are open to every field) | the Stampede prompts in src/stampede.js |

Board Prep prompts (b_* pools) are NOT part of this audit; leave them alone.

## Procedure (each run)

1. `python3 src/build.py && node src/check.js` must print OK.
2. `node src/dump_prompts.js <field> --todo` lists the not-yet-audited prompts with every answer they
   currently accept, in priority order (the daily prompts players will see soonest come first).
3. For each prompt, in that order:
   a. Write out, from your knowledge of the exam blueprints and the standard review sources
      (First Aid, UWorld-style content, Pathoma, Sketchy, OnlineMedEd, Saunders/Kaplan NCLEX, RxPrep,
      Dental Decks, etc.), EVERY board-testable correct answer to the exact prompt: classic causes,
      eponymous signs and syndromes, buzzword associations, high-yield drugs, named tests. Then add the
      remaining common real-world correct answers. Then the long tail of other correct answers.
   b. Check each candidate against the current list with `node src/triage.js <file>` (JSON
      `[{"prompt":"...","guess":"..."}]`). ALREADY = counted; skip. SUGGEST = probably the same answer
      spelled differently: add a `crowdAlias(...)` in src/crowd.js only if it truly is the same thing.
      NEW = missing.
   c. Add every missing correct answer as one line at the bottom of `src/board_audit.js`:
      `board("<exact prompt>", <points>, "<name>|<alias>|...");  // YYYY-MM-DD · USMLE · why`
      using the points guide in that file's header. Put all common spellings, abbreviations,
      brand/generic names and UK/Australian terms on the same line. Never add a synonym of an answer
      that is already on the list as its own line (use crowdAlias instead).
   d. Wrong entries you notice on the existing list (clearly incorrect for the prompt): remove that
      line from src/bank.js or src/stampede.js and note it in the commit message. Do not remove
      correct-but-obscure answers.
   e. Record the prompt in `src/board_audit_done.json` under "done" with today's date.
4. Every ~10 prompts: `python3 src/build.py && node src/check.js` (must print OK), then
   `node src/schedule_snapshot.js <tomorrow> > /tmp/a.json` and compare with a snapshot taken before you
   started (`cmp` must be identical: audits never change schedules), then commit and push to main with
   message "Board audit <field>: N prompts, +A answers". If a push is rejected because another run
   pushed first: `git pull --rebase`, rebuild, re-check, push.
5. When `node src/dump_prompts.js <field> --todo` prints nothing, that field's audit is complete.
