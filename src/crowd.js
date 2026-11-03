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
crowdAlias("Name a cause of blood in the urine", "kidney cancer", "renal cell carcinoma|rcc|renal cell carcnioma");  // 2026-11-03 · 1 player · RCC = kidney cancer
crowdAlias("Name a cause of blood in the urine", "bladder cancer", "urothelial carcinoma|transitional cell carcinoma");  // 2026-11-03 · 1 player · same entity
crowdAlias("Name a cause of chronic cough", "copd", "emphysema");  // 2026-11-03 · 1 player · COPD subtype
crowd("Name a cause of seizures", 85, "acute disseminated encephalomyelitis|adem");  // 2026-11-03 · 1 player · seizures common in ADEM
crowdAlias("Name a cause of seizures", "brain tumor", "glioblastoma|gbm|meningioma|parasagittal meningioma");  // 2026-11-03 · 1 player each · brain tumor types
crowd("Name a cause of seizures", 65, "medications|medication|drug induced");  // 2026-11-03 · 2 players · drug-induced seizures
crowd("Name a cause of unintentional weight loss", 85, "multiple myeloma|myeloma");  // 2026-11-03 · 1 player · constitutional symptom of myeloma
crowd("Name a cause of unintentional weight loss", 85, "renal cell carcinoma|kidney cancer|rcc");  // 2026-11-03 · 1 player · classic constitutional sx of RCC
crowd("Name a common reason for a primary care visit", 85, "abscess|skin abscess|boil");  // 2026-11-03 · 1 player · common office problem
crowdAlias("Name a disease spread by mosquitoes or ticks", "ross river virus", "ross river fever");  // 2026-11-03 · 1 player · same disease
crowd("Name a medical imaging test", 85, "fast exam|fast|fast scan|focused assessment with sonography for trauma");  // 2026-11-03 · 1 player · standard trauma ultrasound
crowd("Name a medical term with a color in it", 85, "gray baby syndrome|grey baby syndrome");  // 2026-11-03 · 1 player · chloramphenicol toxicity
crowdAlias("Name a mobility aid or assistive device", "sit to stand lift", "stedy|sara stedy");  // 2026-11-03 · 1 player · brand of standing aid
crowdAlias("Name a parasite that infects humans", "cysticercosis", "t solium");  // 2026-11-03 · 1 player · abbreviation of taenia solium (already an answer here)
crowd("Name a part of the eye", 85, "fundus|fundi");  // 2026-11-03 · 1 player · posterior interior of the eye
crowd("Name a part of the heart", 85, "coronary ostia|coronary ostium");  // 2026-11-03 · 1 player · coronary openings in aortic root
crowdAlias("Name a part of the heart", "annulus", "tricuspid annulus|mitral annulus");  // 2026-11-03 · 1 player · valve annulus
crowd("Name a part of the heart", 85, "cavotricuspid isthmus|tricuspid isthmus|cti");  // 2026-11-03 · 1 player · RA anatomy, flutter ablation site
crowd("Name a part of the kidney or urinary tract", 85, "glomerular basement membrane|gbm");  // 2026-11-03 · 1 player · glomerular filtration barrier
crowd("Name a reason someone goes to the ER", 65, "trauma|major trauma");  // 2026-11-03 · 3 players · standard ED category
crowd("Name a reason someone goes to the ER", 65, "suicide attempt|suicidal attempt|attempted suicide");  // 2026-11-03 · 2 players · distinct from suicidal thoughts
crowdAlias("Name a reason someone goes to the ER", "suicidal thoughts", "suicidal ideation|si");  // 2026-11-03 · 1 player · same thing
crowdAlias("Name a reason someone goes to the ER", "psychosis", "schizophrenia");  // 2026-11-03 · 2 players · presents as psychosis
crowdAlias("Name a sexually transmitted infection", "donovanosis", "klebsiella granulomatis|granuloma inguinale");  // 2026-11-03 · 1 player · causative organism
crowdAlias("Name a sleep disorder", "circadian rhythm disorder", "circadian sleep wake cycle disorder|circadian rhythm sleep wake disorder");  // 2026-11-03 · 1 player · DSM name
crowdAlias("Name a sports injury", "acl tear", "acl|acl injury");  // 2026-11-03 · 1 player · same injury
crowd("Name a sports injury", 85, "lcl tear|lcl|lcl sprain");  // 2026-11-03 · 1 player · like mcl/pcl tear
crowd("Name a sports injury", 85, "lisfranc injury|lisfranc fracture");  // 2026-11-03 · 1 player · midfoot sports injury
crowdAlias("Name a sports injury", "torn meniscus", "meniscal tear|meniscus tear");  // 2026-11-03 · 1 player · same injury
crowdAlias("Name a type of cell in the human body", "t cell", "cd4 t cell|helper t cell|cd8 t cell");  // 2026-11-03 · 1 player · T cell subtype
crowd("Name a type of cell in the human body", 85, "delta cell|delta cells");  // 2026-11-03 · 1 player · somatostatin-secreting islet cell
crowdAlias("Name a urine test or finding on a urinalysis", "red blood cells", "rbc|rbcs");  // 2026-11-03 · 1 player · abbreviation
crowdAlias("Name a urine test or finding on a urinalysis", "white blood cells", "wbc|wbcs");  // 2026-11-03 · 1 player · abbreviation
crowd("Name a ligament or tendon", 65, "ligamentum arteriosum");  // 2026-11-03 · 2 players · fibrous remnant of ductus arteriosus
