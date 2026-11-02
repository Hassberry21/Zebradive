/* ===== CROWD-SOURCED ANSWERS =====
   Answers players suggested ("We missed an answer?") or commonly guessed, checked for accuracy
   and added by the daily review. One line each:
     crowd("<exact prompt text>", <points 5-99>, "<answer>|<alias>|...");  // date · players · why
   Points: share = players who suggested/guessed it ÷ plays of that prompt;
   with 30+ plays  -> round(99 - 60*log10(1 + 100*share)), kept within 5-99;
   with fewer plays -> 5+ players: 40 · 2-4 players: 65 · 1 player: 85.
   Never edit or remove existing lines here except to fix a mistake. */
const CROWD=[], CROWD_ALIAS=[];
function crowd(q, pts, names){ pts=Math.max(5,Math.min(99,Math.round(pts))); CROWD.push({q,pts,names}); addExtra({[q]: pts+" "+names}); }
/* another way to say an answer that is ALREADY on the list (same answer, same points):
     crowdAlias("<prompt>", "<existing answer as listed>", "<new spelling>|<another>"); */
function crowdAlias(q, existing, names){ CROWD_ALIAS.push({q,existing,names}); }

// --- additions (newest at the bottom) ---
