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
board("Name something included in a nursing handoff report", 30, "situation|background|assessment|recommendation");  // 2026-11-04 · NCLEX · SBAR components
board("Name something included in a nursing handoff report", 55, "ipass|i pass");  // 2026-11-04 · NCLEX · standardized handoff tool
board("Name something included in a nursing handoff report", 50, "bedside report|bedside handoff");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 50, "vte prophylaxis|dvt prophylaxis");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 55, "last pain assessment|last pain med");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 50, "neuro status|neuro checks|neurological status");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 45, "cardiac rhythm|heart rhythm");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 45, "lung sounds|respiratory status");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 50, "skin assessment|braden score");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 55, "morse score|fall score");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 45, "glucose|accuchecks|fingersticks");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 55, "prn medications|prn meds");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 60, "iv fluids|iv fluid rate|drips|infusions");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 55, "heparin drip|insulin drip");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 50, "urine output|voiding");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 45, "weight|daily weight");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 60, "precautions|contact precautions|droplet precautions|airborne precautions");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 55, "advance directives|power of attorney|healthcare proxy");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 50, "admitting physician|provider");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 55, "room number|bed number");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 60, "admission date|date of admission");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 50, "dressing|wound care");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 60, "incisions|incision");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 50, "psychosocial needs|psychosocial");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 55, "education needs|patient teaching");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 60, "language|interpreter needs");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 55, "cultural or religious needs|religious preferences");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 60, "sitter|one to one sitter");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 60, "alarms|bed alarm");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 55, "central line|picc line|port");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 60, "ng tube|feeding tube");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 60, "chest tube");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 65, "tube feeding|enteral feeding");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 55, "blood transfusion");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 50, "critical lab values|critical values");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 60, "pending orders|new orders");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 55, "patient goals|goals for shift");  // 2026-11-04 · NCLEX
board("Name something included in a nursing handoff report", 60, "suicide risk|suicide precautions");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 50, "hand rub|alcohol based hand rub|abhr");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 55, "soap and water");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 55, "private room");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 60, "dedicated equipment|disposable stethoscope|dedicated stethoscope");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 65, "sterile gown");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 65, "surgical cap");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 70, "n95 fit check|seal check");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 60, "ppe");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 60, "sterile drapes");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 70, "laminar airflow");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 65, "chemotherapy gown");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 70, "needlestick prevention");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 55, "ventilation");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 60, "tb screening|ppd test");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 75, "screening for symptoms");  // 2026-11-04 · NCLEX
board("Name a piece of PPE or infection control measure", 70, "vector control");  // 2026-11-04 · NCLEX
board("Name a patient position", 60, "semi prone|three quarters prone");  // 2026-11-04 · NCLEX
board("Name a patient position", 75, "flat");  // 2026-11-04 · NCLEX
board("Name a patient position", 80, "elevated legs|legs elevated");  // 2026-11-04 · NCLEX
board("Name a patient position", 85, "head elevated 30 degrees|hob 30");  // 2026-11-04 · NCLEX
board("Name a patient position", 75, "seated");  // 2026-11-04 · NCLEX
board("Name a warning sign of stroke", 40, "facial asymmetry|uneven smile");  // 2026-11-04 · NCLEX
board("Name a warning sign of stroke", 50, "vision problems");  // 2026-11-04 · NCLEX
board("Name a warning sign of stroke", 70, "hemiplegia|paralysis");  // 2026-11-04 · NCLEX
board("Name a warning sign of stroke", 75, "ptosis");  // 2026-11-04 · NCLEX
board("Name a warning sign of stroke", 80, "tongue deviation");  // 2026-11-04 · NCLEX
board("Name a warning sign of stroke", 75, "amaurosis fugax");  // 2026-11-04 · NCLEX
board("Name a warning sign of stroke", 85, "vertical gaze palsy");  // 2026-11-04 · NCLEX
board("Name a warning sign of stroke", 85, "dysmetria");  // 2026-11-04 · NCLEX
board("Name a warning sign of stroke", 80, "stiff neck");  // 2026-11-04 · NCLEX
board("Name a warning sign of stroke", 85, "decreased level of consciousness");  // 2026-11-04 · NCLEX
board("Name a warning sign of stroke", 85, "incontinence");  // 2026-11-04 · NCLEX
board("Name a hospital emergency code", 60, "code violet|violent patient");  // 2026-11-04 · NCLEX
board("Name a hospital emergency code", 70, "code 66");  // 2026-11-04 · NCLEX
board("Name a hospital emergency code", 70, "code omega");  // 2026-11-04 · NCLEX
board("Name a hospital emergency code", 75, "code atlas");  // 2026-11-04 · NCLEX
board("Name a hospital emergency code", 80, "code mrt");  // 2026-11-04 · NCLEX
board("Name a hospital emergency code", 85, "code lockdown|lockdown");  // 2026-11-04 · NCLEX
board("Name a hospital emergency code", 85, "shelter in place");  // 2026-11-04 · NCLEX
board("Name a hospital emergency code", 85, "code gold");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 60, "abnormal abg|respiratory acidosis");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 60, "decreased spo2");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 70, "prolonged expiration");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 70, "abdominal breathing");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 70, "irregular breathing");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 75, "gasping");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 75, "air hunger");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 80, "mottling");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 80, "decreased level of consciousness");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 80, "somnolence");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 75, "fatigue");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 70, "tracheal deviation");  // 2026-11-04 · NCLEX
board("Name a sign of respiratory distress", 75, "asymmetric chest rise|unequal chest expansion");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 45, "black eyes");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 55, "burns in a glove or stocking pattern|immersion burns|stocking glove burns");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 60, "inconsistent history|story doesn't match injuries");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 55, "frequent er visits");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 60, "depression");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 65, "anxiety");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 65, "sleep disturbance|nightmares");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 70, "sexual behavior inappropriate for age|sexualized behavior");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 65, "avoids eye contact");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 70, "substance abuse");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 70, "school absences|truancy");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 70, "dirty clothes");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 75, "head injury|abusive head trauma|shaken baby syndrome");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 70, "welts");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 70, "rope burns|ligature marks");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 75, "pressure ulcers");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 70, "untreated wounds");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 75, "unsanitary living conditions");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 80, "abdominal injury");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 80, "bruises on ears or neck|teten");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 80, "bruising in non mobile infant");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 85, "metaphyseal fractures|corner fractures|bucket handle fractures");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 75, "lack of supervision");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 75, "hunger|hoarding food");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 75, "overly compliant|passive behavior");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 80, "changes in power of attorney");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 85, "doesn't want to go home");  // 2026-11-04 · NCLEX
board("Name a sign of abuse or neglect", 75, "dental neglect|untreated cavities");  // 2026-11-04 · NCLEX
board("Name an activity of daily living", 55, "hygiene|personal hygiene");  // 2026-11-04 · NCLEX
board("Name an activity of daily living", 60, "bed mobility|turning in bed");  // 2026-11-04 · NCLEX
board("Name an activity of daily living", 65, "bladder control|bowel control");  // 2026-11-04 · NCLEX
board("Name an activity of daily living", 70, "using the bathroom");  // 2026-11-04 · NCLEX
board("Name an activity of daily living", 70, "instrumental activities of daily living|iadls");  // 2026-11-04 · NCLEX
board("Name an activity of daily living", 75, "household chores");  // 2026-11-04 · NCLEX
board("Name an activity of daily living", 75, "washing dishes");  // 2026-11-04 · NCLEX
board("Name an activity of daily living", 85, "bed making");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 80, "marilyn anne ray|ray");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 85, "lillian wald|wald");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 80, "mary seacole|seacole");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 85, "clara barton|barton");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 85, "nancy roper|roper");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 85, "lorraine olszewski walker|lorraine walker");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 85, "jacqueline fawcett|fawcett");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 85, "marjory gordon|gordon");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 85, "mary breckinridge|breckinridge");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 85, "isabel hampton robb|robb");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 85, "evelyn adam");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 90, "marlaine smith");  // 2026-11-04 · NCLEX
board("Name a nursing theorist", 90, "barbara carper|carper");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 55, "staff nurse");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 55, "bedside nurse");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 60, "nurse aide");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 55, "midwife");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 60, "clinical instructor");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 65, "nurse coordinator");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 60, "utilization review nurse");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 65, "quality nurse");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 70, "nurse recruiter");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 70, "occupational health nurse");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 65, "lactation consultant");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 70, "wound care nurse|wocn");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 70, "sane nurse|sexual assault nurse examiner");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 70, "transplant coordinator");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 70, "research nurse");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 70, "triage nurse");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 70, "circulating nurse|circulator");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 70, "scrub nurse");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 75, "first assist|rnfa");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 75, "assistant nurse manager");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 75, "clinical nurse leader|cnl");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 80, "pacu nurse");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 75, "med aide|medication aide|cma");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 80, "home care aide");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 80, "sitter|patient sitter");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 80, "discharge planner");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 80, "aesthetic nurse");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 80, "camp nurse");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 80, "correctional nurse");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 80, "nurse consultant");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 85, "nurse coach");  // 2026-11-04 · NCLEX
board("Name a nursing job title or role", 85, "parish nurse|faith community nurse");  // 2026-11-04 · NCLEX
