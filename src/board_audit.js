/* ===== BOARD-CONTENT AUDIT OF EXISTING PROMPTS =====
   Goal: every answer that is testable on the field's licensing exams is on each prompt's list FIRST,
   before the obscure long tail. Exams: Medicine = USMLE Step 1/2/3 and COMLEX; Nursing = NCLEX-RN/PN;
   Pharmacy = NAPLEX; Dental = INBDE/NBDE. See src/BOARD_AUDIT.md for the procedure.
   One line per missing answer (same format and dedupe rules as crowd.js):
     board("<exact prompt text>", <points 5-99>, "<answer>|<alias>|...");  // YYYY-MM-DD · exam · why
   Points = estimated rarity among players of that field (player data refines it after 30 plays):
     answer most players would think of 15-35 · moderately common 40-60 · uncommon 65-85 · obscure 88-99.
   Never edit or remove existing lines except to fix a mistake. */
function board(q, pts, names){ crowd(q, pts, names); }

// --- additions (newest at the bottom) ---
