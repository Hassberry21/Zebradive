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
board("Name a diet order", 55, "low purine");  // 2026-11-04 · NCLEX
board("Name a diet order", 55, "high calorie");  // 2026-11-04 · NCLEX
board("Name a diet order", 55, "high potassium");  // 2026-11-04 · NCLEX
board("Name a diet order", 60, "low protein");  // 2026-11-04 · NCLEX
board("Name a diet order", 60, "sodium restricted");  // 2026-11-04 · NCLEX
board("Name a diet order", 60, "minced and moist");  // 2026-11-04 · NCLEX
board("Name a diet order", 60, "low tyramine");  // 2026-11-04 · NCLEX · MAOI teaching
board("Name a diet order", 65, "low carb|low carbohydrate");  // 2026-11-04 · NCLEX
board("Name a diet order", 55, "high iron");  // 2026-11-04 · NCLEX
board("Name a diet order", 65, "high calcium");  // 2026-11-04 · NCLEX
board("Name a diet order", 65, "gluten restricted");  // 2026-11-04 · NCLEX
board("Name a diet order", 60, "phenylalanine free|low phenylalanine");  // 2026-11-04 · NCLEX · PKU
board("Name a diet order", 65, "low vitamin k|consistent vitamin k");  // 2026-11-04 · NCLEX · warfarin teaching
board("Name a diet order", 70, "low oxalate");  // 2026-11-04 · NCLEX
board("Name a diet order", 70, "high residue");  // 2026-11-04 · NCLEX
board("Name a diet order", 65, "clear liquid to full liquid|advance diet");  // 2026-11-04 · NCLEX
board("Name a diet order", 70, "trophic feeds");  // 2026-11-04 · NCLEX
board("Name a diet order", 70, "pudding thick liquids");  // 2026-11-04 · NCLEX
board("Name a diet order", 65, "thin liquids");  // 2026-11-04 · NCLEX
board("Name a diet order", 75, "ground diet");  // 2026-11-04 · NCLEX
board("Name a diet order", 70, "small frequent meals");  // 2026-11-04 · NCLEX
board("Name a diet order", 70, "low iodine");  // 2026-11-04 · NCLEX
board("Name a diet order", 75, "elemental diet");  // 2026-11-04 · NCLEX
board("Name a diet order", 75, "1800 calorie ada diet|ada diet");  // 2026-11-04 · NCLEX
board("Name a diet order", 70, "low copper");  // 2026-11-04 · NCLEX · Wilson disease
board("Name a diet order", 65, "high carbohydrate");  // 2026-11-04 · NCLEX
board("Name a diet order", 70, "no added salt|nas");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 55, "maternal child|maternity");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 55, "obstetrics");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 60, "womens health");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 60, "gynecology");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 60, "pulmonary|respiratory");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 60, "endocrine");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 65, "urology");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 60, "infusion|iv therapy");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 65, "vascular access");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 60, "ostomy");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 65, "hospital at home");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 60, "nurse leadership|nursing administration|nurse management");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 65, "quality improvement");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "utilization review");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 65, "neurology");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 65, "stroke");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "bariatric");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "plastic surgery");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "dermatology");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "ophthalmology");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "ent|otolaryngology");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "allergy and immunology");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "rheumatology");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "hepatology");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "infectious disease");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 65, "addiction|substance use");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 65, "bone marrow transplant");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 65, "pediatric oncology");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "hiv");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "cardiothoracic");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "vascular");  // 2026-11-04 · NCLEX
board("Name a nursing specialty", 70, "dental");  // 2026-11-04 · NCLEX
board("Name a common body site for pressure injuries", 55, "sacral area");  // 2026-11-04 · NCLEX
board("Name a common body site for pressure injuries", 60, "lateral knee|medial knee|knee condyles");  // 2026-11-04 · NCLEX
board("Name a common body site for pressure injuries", 60, "bony prominences");  // 2026-11-04 · NCLEX
board("Name a common body site for pressure injuries", 70, "pinna");  // 2026-11-04 · NCLEX
board("Name a common body site for pressure injuries", 65, "heels of feet");  // 2026-11-04 · NCLEX
board("Name a common body site for pressure injuries", 75, "skin folds|under breasts|under pannus");  // 2026-11-04 · NCLEX
board("Name a common body site for pressure injuries", 80, "under oxygen tubing");  // 2026-11-04 · NCLEX
board("Name a common body site for pressure injuries", 75, "scrotum");  // 2026-11-04 · NCLEX
board("Name a common body site for pressure injuries", 75, "labia");  // 2026-11-04 · NCLEX
board("Name a common body site for pressure injuries", 80, "clavicle");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 60, "frequent toileting");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 55, "keep floor dry|dry floors");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 60, "non slip mats");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 55, "room near nurses station");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 55, "hourly checks");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 55, "orient to room|orientation to room");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 60, "restraints as last resort|avoid restraints");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 65, "treat orthostatic hypotension");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 55, "call before getting up|call dont fall");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 60, "keep bed locked");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 60, "lighting");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 60, "eyeglasses");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 65, "hearing aids");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 65, "slip resistant footwear");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 70, "sit to stand lift");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 65, "encourage fluids");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 70, "pt and ot");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 75, "tai chi");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 70, "remove throw rugs");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 70, "handrails");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 80, "gait training");  // 2026-11-04 · NCLEX
board("Name a nursing intervention to prevent falls", 80, "balance training");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 50, "alcohol intoxication");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 55, "drug intoxication");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 55, "hyperglycemia");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 60, "hypernatremia");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 60, "electrolyte imbalance");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 60, "hypothermia");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 60, "hyperthermia|heat stroke");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 60, "pulmonary embolism");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 60, "sundowning");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 65, "sedatives");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 60, "sedative hypnotics");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 65, "antihistamines");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 65, "hip fracture");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 60, "dic");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 65, "shock");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 65, "hypotension");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 65, "subdural hematoma");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "brain tumor");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "hypothyroidism");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "hyperthyroidism|thyroid storm");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "adrenal insufficiency");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "dka");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "hhs");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "ammonia|hyperammonemia");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "hypomagnesemia");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "hypocalcemia");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 75, "cushings");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "hiv");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "syphilis|neurosyphilis");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 75, "lyme");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 75, "meningoencephalitis");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 75, "nsaids");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "tricyclic antidepressants");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "muscle relaxants");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 75, "h2 blockers");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 75, "fluoroquinolones");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "antiepileptics");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "dopamine agonists|levodopa");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 75, "delirium tremens");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "benzodiazepine withdrawal");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 75, "sleep apnea");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "fecal impaction");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 75, "hearing impairment");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 75, "vision impairment");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "icu delirium");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 75, "frequent room changes");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 70, "noise");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 75, "cardiac surgery");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 80, "ammonia toxicity");  // 2026-11-04 · NCLEX
board("Name a cause of delirium", 80, "posterior reversible encephalopathy syndrome|pres");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 55, "thrombosis");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 55, "catheter related thrombosis");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 55, "electrolyte imbalance");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 60, "hypervolemia");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 65, "pulmonary edema");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 55, "vein irritation");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 60, "vesicant injury");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 65, "skin sloughing");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 70, "catheter tip migration");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 70, "venous spasm");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 70, "local site reaction");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 75, "needle stick injury");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 70, "drug incompatibility|precipitate");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 75, "hemolysis");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 65, "medication error");  // 2026-11-04 · NCLEX
board("Name a complication of an IV", 70, "free flow");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 50, "dic");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 55, "boggy uterus");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 55, "thrombophlebitis");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 55, "uti|urinary tract infection");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 60, "cystitis");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 60, "pyelonephritis");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 55, "bladder distension");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 55, "hypovolemic shock");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 55, "retained products of conception");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 60, "placenta accreta");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 60, "incision dehiscence|wound dehiscence");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 65, "parametritis");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 65, "peritonitis");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 60, "septic pelvic thrombophlebitis");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 60, "postpartum hypertension");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 65, "postpartum ocd|postpartum obsessive compulsive disorder");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 70, "stroke");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 70, "seizure");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 70, "post dural puncture headache");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 75, "epidural hematoma");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 75, "bowel injury");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 75, "bladder injury");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 60, "rh sensitization|rh isoimmunization");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 65, "rubella susceptibility");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 65, "lactation failure|low milk supply");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 65, "breast abscess");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 70, "postpartum fever");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 70, "cervical laceration");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 70, "third degree tear");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 70, "fourth degree tear");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 70, "obstetric anal sphincter injury|oasis");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 70, "pelvic organ prolapse|uterine prolapse");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 70, "dyspareunia");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 75, "ovarian vein thrombosis");  // 2026-11-04 · NCLEX
board("Name a postpartum complication", 75, "mood disorder");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 55, "polyuria polydipsia polyphagia|3 ps|three ps");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 55, "hyperglycemia");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 55, "glucose above 180|glucose over 200");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 55, "nocturia");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 60, "weakness");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 60, "drowsiness");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 60, "poor skin turgor");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 60, "yeast infections");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 65, "orthostatic hypotension");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 60, "decreased level of consciousness");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 65, "bedwetting");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 65, "numbness in feet");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 60, "acetone breath");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 70, "low sodium");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 70, "high osmolality|hyperosmolality");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 75, "anion gap");  // 2026-11-04 · NCLEX
board("Name a sign of high blood sugar", 75, "elevated bun");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 55, "neurovascular check|cms|circulation movement sensation");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 55, "6 ps|six ps");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 55, "lochia");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 55, "fundus|fundal check|fundal massage");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 55, "bubble he|bubbleshe");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 60, "bladder scan|post void residual");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 60, "cough");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 60, "swallow screen|bedside swallow");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 60, "peak flow");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 65, "gag");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 60, "allen test");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 60, "pulse pressure");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 60, "pulse deficit");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 65, "pain reassessment");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 65, "sedation scale|pasero opioid sedation scale|poss");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 65, "ankle brachial index");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "abdominal girth");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "fetal movement|kick counts");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "respiratory effort");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "oxygen requirement");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "lung expansion");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "nutritional status");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "blood alcohol");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 75, "pressure ulcer staging");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "pulsus paradoxus");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 75, "kernig sign");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 75, "brudzinski sign");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "tympany");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "murphy sign");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "mcburney point|rebound tenderness");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 65, "cvd tenderness|cva tenderness");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 65, "doll eyes");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "babinski");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "romberg");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 75, "pronator drift");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 75, "temp of skin|skin temperature");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 75, "moisture");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "urine color");  // 2026-11-04 · NCLEX
board("Name a vital sign or bedside assessment", 70, "sputum");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 55, "dry sterile dressing|dsd");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 55, "wet to moist");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 55, "4x4|4 by 4");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 60, "2x2");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 60, "packing strips|iodoform packing|plain packing");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 60, "zinc oxide|zinc paste");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 65, "occlusive dressing for chest wound|three sided dressing|vaseline occlusive");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 60, "chest seal");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 60, "sling");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 60, "split|splint");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 65, "cast");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 65, "gelfoam");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 65, "surgicel");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 65, "quikclot|hemostatic dressing");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 70, "polyurethane foam");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 70, "sorbact");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 70, "silver sulfadiazine|silvadene");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 65, "bacitracin");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 70, "skin barrier|cavilon|no sting barrier");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 70, "montgomery straps");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 70, "tubigrip");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 70, "tubular bandage");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 70, "triangular bandage");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 75, "eye patch");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 75, "nonstick pad");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 75, "islanded dressing|island dressing");  // 2026-11-04 · NCLEX
board("Name a type of wound dressing", 75, "burn gel|water jel");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 55, "impaired tissue integrity");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 50, "risk for deficient fluid volume");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for imbalanced fluid volume");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 55, "ineffective peripheral tissue perfusion");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for decreased cardiac tissue perfusion");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for ineffective cerebral tissue perfusion");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 65, "impaired spontaneous ventilation");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "functional urinary incontinence");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "urge urinary incontinence");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "overflow urinary incontinence");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "reflex urinary incontinence");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "perceived constipation");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 60, "risk for constipation");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 60, "impaired oral mucous membrane");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 60, "impaired walking");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "impaired transfer ability");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "impaired bed mobility");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "impaired wheelchair mobility");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for adult pressure injury");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for sudden infant death");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 65, "risk for poisoning");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 65, "risk for suffocation");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for latex allergy reaction");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 65, "ineffective denial");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "compromised family coping");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "disabled family coping");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "defensive coping");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 65, "impaired social interaction");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "chronic sorrow");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 60, "complicated grieving");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "disturbed personal identity");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 65, "chronic low self esteem");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "ineffective role performance");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "parental role conflict");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "impaired parenting");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for impaired parenting");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "ineffective sexuality pattern");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "sexual dysfunction");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 65, "decisional conflict");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 60, "impaired comfort");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 60, "sleep deprivation");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "disturbed thought processes");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "impaired home maintenance");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "ineffective health self management");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for loneliness");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for hypothermia");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for perioperative positioning injury");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "delayed surgical recovery");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for surgical site infection");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "ineffective infant feeding pattern");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "interrupted breastfeeding");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "insufficient breast milk production");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for disturbed maternal fetal dyad");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 60, "labor pain");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for neonatal hyperbilirubinemia");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "neonatal abstinence syndrome");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for delayed development");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for disproportionate growth");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "frail elderly syndrome");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "impaired resilience");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for complicated immigration transition");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "contamination");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "impaired emancipated decision making");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "readiness for enhanced self care");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "ineffective activity planning");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for acute confusion");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for dry eye");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for corneal injury");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "dentition impaired|impaired dentition");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for unstable blood pressure");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for thrombosis");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for allergy reaction");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for ineffective gastrointestinal perfusion");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for ineffective renal perfusion");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for decreased cardiac output");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "ineffective lymphedema self management");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "risk for metabolic syndrome");  // 2026-11-04 · NCLEX
board("Name a nursing diagnosis", 75, "dysfunctional gastrointestinal motility");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 55, "cortrak");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 55, "nasal trumpet");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 55, "ostomy");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 55, "cecostomy");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "cholecystostomy tube");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "percutaneous drain|ir drain");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "pigtail catheter|pigtail drain");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "hemodialysis catheter");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "bladder irrigation catheter");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "sump drain");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "mini vac");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 65, "ureteral catheter");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 65, "temporary pacemaker wires|epicardial pacing wires");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 65, "mediastinal tube|mediastinal drain");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "pericardial drain");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "intracranial pressure monitor|icp bolt|camino bolt");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 65, "subdural drain");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "intrathecal catheter|pain pump");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "nerve block catheter|on q pump");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "tunneled catheter");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "groshong");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 65, "cordis|introducer sheath");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 65, "femoral line");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "subclavian line");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 60, "internal jugular line|ij line");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 65, "double lumen et tube");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 70, "transpyloric tube");  // 2026-11-04 · NCLEX
board("Name a tube, drain or catheter", 70, "nasojejunal tube|nj tube");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 50, "rhinorrhea");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 55, "lacrimation");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 55, "mydriasis");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 55, "delirium");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 55, "disorientation");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 60, "hyperreflexia");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 70, "low mood");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 65, "hyperthermia");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 65, "hyperactivity");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 60, "jitteriness");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 65, "sleep disturbance");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 70, "vivid dreams");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 70, "muscle spasms|leg kicks");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 70, "hypersensitivity to light and sound");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 75, "stomach cramps");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 75, "flu like symptoms");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 75, "hyperalgesia");  // 2026-11-04 · NCLEX
board("Name a symptom of alcohol or opioid withdrawal", 75, "increased respiratory rate");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 55, "head lag gone|no head lag");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 55, "grasp reflex disappears");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 55, "moro reflex disappears");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 55, "rolls front to back");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 55, "rolls back to front");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 55, "sits with support");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "sits unsupported");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 55, "stands alone");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 55, "walks independently");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "walks backward");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "walks up stairs");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "jumps in place");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "throws overhand");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "catches a ball");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "balances on one foot");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "builds tower of 2 blocks");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "builds tower of 6 blocks");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "scribbling");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "imitates sounds");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "says 3 words");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "vocabulary of 50 words");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "three word sentences");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "knows name|says own name");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "identifies body parts");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "recognizes parents");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "social referencing");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "temper tantrums");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "imaginary friends");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "dresses with help");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "brushes teeth with help");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "uses fork");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "rides bicycle with training wheels");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 60, "copies circle");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "copies square");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "copies triangle");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "copies diamond");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "prints letters");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "knows left and right");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "tells time");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "first period");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "voice changes");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "breast development|thelarche");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "pubic hair|pubarche");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "growth spurt");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "abstract thinking");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "identity vs role confusion");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "trust vs mistrust");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "autonomy vs shame and doubt");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "initiative vs guilt");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "industry vs inferiority");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "doubles birth weight");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "triples birth weight");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "anterior fontanel closes");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "posterior fontanel closes");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 65, "first tooth|teething");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 70, "sleeping through the night");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 70, "bladder control");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 70, "bowel control");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 70, "self feeding");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 70, "finger feeding");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 70, "turn taking");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 70, "sharing");  // 2026-11-04 · NCLEX
board("Name a developmental milestone", 70, "joint attention");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 50, "medication reconciliation");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 45, "iv start");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "iv pump programming");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "hanging iv fluids");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "priming iv tubing");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "flushing an iv|saline flush");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "heparin flush");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "blood culture collection");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "bladder scan");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "straight catheterization|in and out cath");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "ng tube removal");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "checking tube placement");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "gastric residual check");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "ostomy bag change");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "wound packing");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "wound vac change");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "wound assessment");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "pressure injury staging");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 55, "skin assessment");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "measuring intake and output");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "weighing patients");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "orthostatic vital signs");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "apical pulse");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 50, "manual blood pressure");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "pulse oximetry");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "lung auscultation");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "bowel sounds assessment");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "heart sounds auscultation");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "nasal cannula");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "non rebreather mask");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "peak flow");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "sputum collection");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "stool sample");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "hemoccult");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "sitz bath");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 50, "perineal care|peri care");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 50, "foley care|catheter care");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "shaving a patient");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "feeding a patient");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "aspiration precautions");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "seizure precautions");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "isolation precautions");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "denture care");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "nail care");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "hair care");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "hoyer lift");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "gait belt use");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "logrolling");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "ted hose");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "cast care");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "traction care");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "pin site care");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "post op care");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "pre op teaching");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "code cart check");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "defibrillation");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 50, "aed");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 55, "heimlich maneuver|abdominal thrusts");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "newborn assessment");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "apgar scoring");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "fundal assessment");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "vitamin k injection");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "erythromycin eye ointment");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "breastfeeding support");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "safe patient handling");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 55, "delegation");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 55, "prioritization");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 50, "care planning|nursing care plan");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "time management");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "nasal medication");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "inhaler teaching");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "transdermal patch application");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "buccal medication");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "sublingual medication");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 65, "crushing medications");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 40, "medication rights|5 rights|rights of medication administration");  // 2026-11-04 · NCLEX
board("Name a nursing skill learned in school", 50, "two identifiers|patient identification");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 55, "fetal heart tones|fhr");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 55, "uteroplacental insufficiency");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 55, "cord compression");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 55, "head compression");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 60, "intrauterine resuscitation");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 60, "fetal distress");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 60, "non reassuring fetal status");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 60, "external fetal monitoring");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 60, "internal fetal monitoring");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 60, "intermittent auscultation");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 60, "doppler");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 60, "contraction frequency");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 60, "contraction duration");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 60, "contraction intensity");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 60, "resting tone");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 60, "hypertonus");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "nonreactive");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "fetal acoustic stimulation|vibroacoustic stimulation");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "scalp stimulation");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "oxytocin challenge test");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "negative contraction stress test");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "positive contraction stress test");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "fetal arrhythmia");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "wandering baseline");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "lambda pattern");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "overshoot");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "shoulders|shouldering");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "biphasic deceleration");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "recurrent decelerations");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "episodic decelerations");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "periodic changes");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 65, "amnioinfusion");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 70, "fetal scalp ph");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 70, "fetal pulse oximetry");  // 2026-11-04 · NCLEX
board("Name a fetal heart rate pattern or monitoring term", 70, "stan|st analysis");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "giving information|informing");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 55, "accepting");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "acknowledging");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "offering general leads");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "sitting with the patient");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "attending behavior");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "sitting at eye level");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "open posture");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "soler");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 60, "i statements");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "encouraging expression of feelings");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "verbalizing the implied");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "formulating a plan of action");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 55, "limit setting|setting limits");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "confrontation");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "humor");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "self disclosure");  // 2026-11-04 · NCLEX
board("Name a therapeutic communication technique", 65, "clarification");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 55, "progressive muscle relaxation");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 55, "mindfulness");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 60, "cognitive behavioral therapy|cbt");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "reiki");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "cutaneous stimulation");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "vibration");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "bracing");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "immobilization|splint");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "hydrotherapy|warm shower");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 60, "birthing ball");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 60, "counterpressure");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 60, "effleurage");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "hydrotherapy in labor|tub");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "doula support");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 65, "nonnutritive sucking");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "facilitated tucking");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "breastfeeding during procedure");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "white noise");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 60, "companionship|family presence");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "spiritual care");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "ultrasound therapy");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "manual therapy");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "occupational therapy");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "support groups");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "epsom salt bath");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "cupping");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "tai chi");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "dry needling");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "water immersion");  // 2026-11-04 · NCLEX
board("Name a nonmedication comfort measure for pain", 70, "ice massage");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 65, "minimization");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 65, "withdrawal");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 75, "anticipation");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 75, "affiliation");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 75, "self assertion");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 75, "self observation");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 75, "distortion");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 75, "hypochondriasis");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 75, "omnipotence");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 75, "symbolization");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 75, "substitution");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 75, "fixation");  // 2026-11-04 · NCLEX
board("Name a defense mechanism", 75, "incorporation");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 45, "first stage");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 50, "active phase");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 55, "false labor");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 55, "true labor");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "fully dilated|10 centimeters");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "station 0|zero station");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "presentation");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "cephalic presentation");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "face presentation");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "brow presentation");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "shoulder presentation|transverse lie");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "lie");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "attitude");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "flexion");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "position");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "occiput anterior|loa|roa");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "occiput posterior|back labor");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "descent");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "internal rotation");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "extension");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "external rotation|restitution");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "expulsion");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "schultze");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "duncan");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "placental separation");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 55, "placenta previa");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 55, "placental abruption");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 55, "cord prolapse");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 55, "meconium");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "amniotic fluid");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "premature rupture of membranes|prom");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 55, "preterm labor");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "term");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "tocolytics");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 60, "magnesium sulfate");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "terbutaline");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "betamethasone");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 60, "forceps");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 60, "vacuum extraction|vacuum");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "bishop score");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "prostaglandins|cervidil|misoprostol|cytotec");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "foley bulb");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "membrane sweep|stripping membranes");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "labor augmentation");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "tachysystole");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "hyperstimulation");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 60, "doula");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 55, "midwife");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "water birth");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 60, "birth plan");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 60, "spinal block");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "pudendal block");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "nitrous oxide");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "natural birth|unmedicated birth");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "delayed cord clamping");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 55, "skin to skin");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "golden hour");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "cord blood");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 55, "umbilical cord");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 50, "placenta|afterbirth");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "uterine atony");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "fundal massage");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "postpartum hemorrhage");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "dystocia");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "macrosomia");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "cephalopelvic disproportion|cpd");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "failure to progress");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "arrest of descent");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "arrest of dilation");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "laboring down");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "purple pushing");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "open glottis pushing");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "mcroberts maneuver");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "suprapubic pressure");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 60, "gravida");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 60, "para");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "gtpal");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 55, "estimated due date|edd|due date");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "naegeles rule");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "gestational age");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "amniotic sac|bag of waters");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "operative vaginal delivery");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "tolac");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "primigravida");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "multipara");  // 2026-11-04 · NCLEX
board("Name a stage of labor or labor and delivery term", 65, "nulliparous");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 45, "decreased level of consciousness");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 50, "terminal secretions");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 50, "dysphagia|difficulty swallowing");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 55, "tachycardia");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 55, "bradycardia");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 55, "cool skin");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 60, "skin color changes|pallor");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 60, "kussmaul breathing");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 55, "shallow breathing");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 60, "labored breathing");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 60, "loss of bowel and bladder control");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 65, "anuria");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 60, "muscle weakness");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 60, "sunken eyes");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 60, "decreased responsiveness");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 65, "loss of gag reflex");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 60, "hearing is last sense");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 65, "hypothermia");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 70, "dry mouth");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 65, "nasal flaring");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 70, "weight loss");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 70, "restless movements");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 70, "visions");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 75, "reduced pain response");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 75, "talking about going home|saying goodbye|talking about travel");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 70, "hiccups");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 75, "cachexia");  // 2026-11-04 · NCLEX
board("Name a sign that a patient is close to death", 75, "pupils not reacting");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 50, "consistent caregivers");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 50, "orientation board");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 55, "short simple sentences");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 55, "one step instructions");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 55, "approach from the front");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 55, "eye contact");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 55, "gentle touch");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 55, "distraction");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 55, "avoid restraints");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 55, "safe environment");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "remove hazards");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "lock up medications");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "secure exits|locked unit");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "gps tracker|tracking device");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "adequate lighting");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "avoid overstimulation");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "structured activities");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "meaningful activities");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "art therapy");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "aromatherapy");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "doll therapy");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "sensory stimulation");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "bright light therapy");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "adequate hydration");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "finger foods");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "assist with adls");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "do not quiz|avoid testing memory");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "offer choices");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "use names");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "photos");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "sleep hygiene");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "reduce naps");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "consistent environment");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "bed alarm");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 60, "low bed");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 65, "medications review");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 65, "advance care planning");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 65, "power of attorney");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 65, "caregiver education");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 65, "adult day care");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 65, "memory care unit");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 65, "family involvement");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 65, "humor");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 70, "montessori activities");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 70, "snoezelen|multisensory room");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 70, "simulated presence therapy");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 70, "cueing");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 70, "hand under hand");  // 2026-11-04 · NCLEX
board("Name a dementia care strategy", 70, "positive physical approach");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 40, "age over 65");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 45, "impaired mobility");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 40, "balance problems");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 35, "previous falls");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 55, "urinary frequency");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 55, "nocturia");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "frequent toileting");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "vertigo");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 55, "syncope");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "arrhythmias");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 60, "antidepressants");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 60, "antipsychotics");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "anticonvulsants");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 55, "sleeping pills");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "muscle relaxants");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "antihistamines");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "laxatives");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "insulin");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 60, "anticoagulants");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 55, "hearing loss");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 60, "cataracts");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "glaucoma");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "macular degeneration");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "bifocals");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "diabetes");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 55, "dehydration");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "malnutrition");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "obesity");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "multiple sclerosis");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "seizures");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "heart failure");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "copd");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "sedentary lifestyle");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 60, "deconditioning");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "bed rest");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "foot problems");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "amputation");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 55, "restraints");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "bed rails");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "lack of handrails");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "slippery bathroom");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "hospitalization");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "pain");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 55, "sensory deficits");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "frailty");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "sarcopenia");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "female sex");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "living alone");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "low bmi");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "anesthesia");  // 2026-11-04 · NCLEX
board("Name a risk factor for falls", 65, "epidural");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 50, "wheezes");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 55, "friction rub");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 55, "silent chest");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 60, "sonorous wheeze");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 60, "sibilant wheeze");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 60, "polyphonic wheeze");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 60, "monophonic wheeze");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 60, "gurgles");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 60, "adventitious breath sounds");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 65, "crepitations");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 65, "dullness");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 65, "hyperresonance");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 65, "resonance");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 65, "tympany");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 65, "flatness");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 65, "agonal");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 70, "whoop|whooping");  // 2026-11-04 · NCLEX
board("Name a lung or breath sound", 70, "barking cough");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 45, "respiratory syncytial virus");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "bronchitis");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 50, "otitis media|ear infection");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "tonsillitis|strep throat");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 50, "sepsis");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "neonatal sepsis");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 45, "type 1 diabetes");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 45, "febrile seizure");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "epilepsy");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "status epilepticus");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "status asthmaticus");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "hyperbilirubinemia");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "vomiting");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "diarrhea");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "rotavirus");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "hirschsprung disease");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "volvulus|malrotation");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "congenital heart disease|heart defect|chd");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "tetralogy of fallot");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "vsd|ventricular septal defect");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "asd");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "coarctation of the aorta");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "hypoplastic left heart");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "nephrotic syndrome");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "glomerulonephritis");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 65, "hus|hemolytic uremic syndrome");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "pyelonephritis");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "wilms tumor");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "neuroblastoma");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "brain tumor");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "all|acute lymphoblastic leukemia");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "hemophilia");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "itp");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "anemia");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "lead poisoning");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "acetaminophen overdose");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "suicide attempt");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "eating disorder|anorexia");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "depression");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "cerebral palsy");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "hydrocephalus");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "vp shunt malfunction");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "spina bifida");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "cleft lip|cleft palate");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "epiglottitis");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "pertussis|whooping cough");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "measles");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "covid");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "hand foot and mouth disease");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "periorbital cellulitis|orbital cellulitis");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "abscess");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "septic arthritis");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "slipped capital femoral epiphysis|scfe");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "legg calve perthes");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "scoliosis");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "clubfoot");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "developmental dysplasia of the hip|ddh");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "supracondylar fracture");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "burns");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "near drowning|drowning");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "concussion");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "tbi|traumatic brain injury");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "shaken baby syndrome");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "brue|alte");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "sids");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "apnea");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "prematurity|preterm");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "neonatal abstinence syndrome");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 55, "hypoglycemia");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "hyperthyroidism");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "inflammatory bowel disease|crohns");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "celiac disease");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "gerd|reflux");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "constipation");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "foreign body aspiration");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 60, "anaphylaxis");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "rheumatic fever");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "reye syndrome");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "lupus");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "juvenile idiopathic arthritis");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "duchenne muscular dystrophy");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "guillain barre");  // 2026-11-04 · NCLEX
board("Name a common pediatric hospital diagnosis", 70, "encephalitis");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "follow up labs");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 45, "diet restrictions");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 45, "low sodium diet");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 50, "diabetic diet");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "heart healthy diet");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "blood pressure monitoring");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 50, "warfarin|coumadin teaching|inr monitoring");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "vitamin k foods");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 50, "signs of bleeding");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "dvt prevention");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 45, "incentive spirometer");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 50, "coughing and deep breathing");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "splinting incision");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 50, "ostomy care");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "trach care");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "tube feeding");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "oxygen safety|home oxygen");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "nitroglycerin use");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "chest pain");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "heart failure symptoms");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "stroke signs");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 50, "hypoglycemia signs");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "hyperglycemia");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 50, "foot care");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "skin care");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "pressure injury prevention");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "hand hygiene");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "use of walker|use of crutches|assistive devices");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "crutch walking");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "cast care");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "hip precautions");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 60, "sternal precautions");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "home health");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "community resources");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "support groups");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "durable medical equipment|dme");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "advance directives");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "emergency plan");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 40, "when to go to the er|when to seek emergency care");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "opioid safety");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "constipation prevention|stool softeners");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 50, "hydration|fluid intake");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "peritoneal dialysis");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "av fistula care");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "picc care");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "epipen use|epinephrine auto injector");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "inhaler use");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "peak flow monitoring");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "asthma action plan");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "seizure precautions");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "newborn care");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "cord care");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "circumcision care");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "jaundice");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "postpartum bleeding|lochia");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "perineal care");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "postpartum depression");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "contraception|birth control");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 55, "immunizations|vaccines");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "weight loss");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "potassium foods");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "compression stockings");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "lifestyle modifications");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "cardiac rehab");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "physical therapy");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "when to resume driving");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 65, "diet advancement");  // 2026-11-04 · NCLEX
board("Name a discharge teaching topic", 60, "orthostatic precautions|rise slowly");  // 2026-11-04 · NCLEX
board("Name a type of wound", 50, "open wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 55, "closed wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 55, "acute wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 55, "chronic wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 55, "unstageable pressure injury");  // 2026-11-04 · NCLEX
board("Name a type of wound", 50, "deep tissue injury|deep tissue pressure injury");  // 2026-11-04 · NCLEX
board("Name a type of wound", 60, "partial thickness wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 60, "full thickness wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "superficial wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "penetrating wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "perforating wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "incised wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "clean wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "clean contaminated wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "contaminated wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "dirty wound|infected wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 60, "neuropathic ulcer");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "mixed ulcer");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "traumatic wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 45, "first degree burn|superficial burn");  // 2026-11-04 · NCLEX
board("Name a type of wound", 45, "second degree burn|partial thickness burn");  // 2026-11-04 · NCLEX
board("Name a type of wound", 45, "third degree burn|full thickness burn");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "fourth degree burn");  // 2026-11-04 · NCLEX
board("Name a type of wound", 55, "chemical burn");  // 2026-11-04 · NCLEX
board("Name a type of wound", 55, "electrical burn");  // 2026-11-04 · NCLEX
board("Name a type of wound", 55, "thermal burn");  // 2026-11-04 · NCLEX
board("Name a type of wound", 55, "scald");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "friction burn");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "road rash");  // 2026-11-04 · NCLEX
board("Name a type of wound", 55, "dog bite");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "human bite");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "insect bite");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "snake bite");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "shear injury");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "degloving");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "sinus tract");  // 2026-11-04 · NCLEX
board("Name a type of wound", 65, "tunneling");  // 2026-11-04 · NCLEX
board("Name a type of wound", 65, "undermining");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "malignant wound|fungating wound");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "skin graft");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "donor site");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "pilonidal sinus|pilonidal cyst");  // 2026-11-04 · NCLEX
board("Name a type of wound", 55, "abscess");  // 2026-11-04 · NCLEX
board("Name a type of wound", 60, "cellulitis");  // 2026-11-04 · NCLEX
board("Name a type of wound", 65, "necrotizing fasciitis");  // 2026-11-04 · NCLEX
board("Name a type of wound", 60, "gangrene");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "intertrigo");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "hematoma");  // 2026-11-04 · NCLEX
board("Name a type of wound", 70, "medical device related pressure injury");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 35, "cardiovascular");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 40, "gastrointestinal|gi");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 45, "integumentary");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 45, "general survey|general appearance");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 50, "height and weight");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 50, "cranial nerves");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 45, "heent");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "chest");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "back");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 50, "extremities");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 50, "inspection");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 50, "palpation");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 50, "auscultation");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "percussion");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "breast exam");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "rectal exam");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 60, "genitals");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "psychosocial");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "nutrition");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "sleep");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "hygiene");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "mood|affect");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "cognition");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "hearing");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "vision");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "teeth");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "tongue");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "throat");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "sinuses");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "trachea");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "abdominal palpation");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "bladder");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "urine color");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "stool");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 50, "muscle strength");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 60, "coordination");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 60, "balance");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 60, "posture");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "rashes");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "lesions");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 65, "bruising");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "drains|tubes|lines");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "incisions|dressings");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "fall risk");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "braden scale");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 60, "homan sign|homans sign|calf tenderness");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 60, "clubbing");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "cyanosis");  // 2026-11-04 · NCLEX
board("Name a part of a head-to-toe assessment", 55, "neurovascular checks");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 55, "forearm|inner forearm|volar forearm");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "intralesional");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "intraperitoneal");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "intrauterine");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "intraocular");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "caudal");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "nerve block");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "trigger point injection");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "steroid injection|cortisone shot");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "botox");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 50, "vaccine|vaccination|flu shot|tetanus shot|immunization");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 65, "penicillin injection");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 55, "heparin injection");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 55, "enoxaparin|lovenox");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 60, "vitamin b12 shot");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 55, "vitamin k shot");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 60, "depo provera");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 55, "epinephrine auto injector|epipen");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 60, "glucagon");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "testosterone injection");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 55, "insulin pen");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "hypodermoclysis|subcutaneous infusion");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "intraarterial");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 55, "iv bolus");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 55, "iv piggyback");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "iv infusion");  // 2026-11-04 · NCLEX
board("Name an injection type or injection site", 70, "long acting injectable|depot injection");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 55, "forearm crutches|lofstrand crutches");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "tilt in space wheelchair");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 60, "gerichair|geri chair");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 65, "lift chair");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 65, "ceiling lift");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "standing frame");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "parallel bars");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 60, "orthotics");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 60, "afo|ankle foot orthosis");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 60, "cervical collar");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 55, "sling");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 60, "walking boot|cam boot");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 65, "compression stockings");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 55, "handrails");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 60, "ramp");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 60, "tub transfer bench");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "toilet safety frame");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "bed rail");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "bed cane");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "leg lifter");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "long handled shoe horn");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "button hook");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "dressing stick");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "adaptive utensils");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "plate guard");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "rocker knife");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 55, "hearing aid");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 55, "glasses");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 60, "white cane");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 55, "guide dog|service dog");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "personal emergency response system|life alert");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "exoskeleton");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "gait trainer");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "stander");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "pivot disc|turning disc");  // 2026-11-04 · NCLEX
board("Name a mobility aid or assistive device", 70, "transport chair");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 40, "respiratory rate under 12|respiratory rate below 10");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 50, "shallow breathing");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 50, "decreased level of consciousness|stupor");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 55, "hypoxia");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 55, "sedation|somnolence");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 60, "unarousable");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 60, "no response to sternal rub");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 60, "slurred speech");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 60, "dizziness");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 65, "constipation");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 65, "urinary retention");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 65, "aspiration");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 65, "respiratory arrest");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 65, "coma");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 65, "hypercapnia|respiratory acidosis");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 70, "limp muscles|flaccid");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 70, "dark lips|purple fingernails|blue fingernails");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 70, "decreased bowel sounds");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 75, "pulmonary edema");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 75, "rhabdomyolysis");  // 2026-11-04 · NCLEX
board("Name a sign of opioid overdose", 75, "compartment syndrome");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "rubra serosa alba");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "nipples");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "breast engorgement");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "latch");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "urinary output|void");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "perineal integrity|reeda");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "hematoma");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "epidural site");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "sensation return|leg movement after epidural");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "ambulation");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "orthostatic hypotension");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "tdap");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "contraception plan");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "nutrition");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "fatigue");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "support system");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 55, "safe sleep teaching");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 60, "signs of infection");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 60, "intimate partner violence screening");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 60, "deviated uterus|boggy uterus");  // 2026-11-04 · NCLEX
board("Name a postpartum assessment", 60, "clots");  // 2026-11-04 · NCLEX
board("Name a patient right", 45, "right to information");  // 2026-11-04 · NCLEX
board("Name a patient right", 55, "right to know diagnosis");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to know treatment options");  // 2026-11-04 · NCLEX
board("Name a patient right", 55, "freedom from abuse");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "freedom from discrimination|nondiscrimination");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "freedom from seclusion");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to personal belongings");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to communicate");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to vote");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to make a will");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to refuse research|participate in research");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to appeal discharge");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to discharge planning");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to accommodations|ada accommodations");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to a chaperone");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to access to an advocate|patient advocate");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to have family notified");  // 2026-11-04 · NCLEX
board("Name a patient right", 55, "right to least restrictive environment");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to die with dignity|death with dignity");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to amend records");  // 2026-11-04 · NCLEX
board("Name a patient right", 55, "patient bill of rights");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to safe staffing");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to hospice");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to telephone");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to mail");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to be informed of rights");  // 2026-11-04 · NCLEX
board("Name a patient right", 65, "right to know medications");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 50, "pyuria");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 55, "positive urine culture");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 55, "feeling of incomplete emptying");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "pelvic pressure");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "urinary retention");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "lethargy");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "irritability");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "hypothermia in infants");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "jaundice in newborns");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 65, "decreased appetite");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "agitation");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "malaise");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "dark urine");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "elevated wbc");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "sepsis");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "hypotension");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "tachycardia");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "abdominal pain in children");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "dribbling");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "dyspareunia");  // 2026-11-04 · NCLEX
board("Name a sign of a urinary tract infection", 60, "hesitancy");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 45, "cardiac monitor");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 55, "ekg leads");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 50, "suction catheter|yankauer");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "suction canister");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 50, "non rebreather mask|nasal cannula|oxygen mask");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 55, "nasopharyngeal airway");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 55, "stylet");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "bougie");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "ett holder");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 55, "end tidal co2 detector|co2 detector");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "lubricant");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "tape");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 50, "iv catheters");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 50, "iv tubing");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "tourniquet");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "alcohol pads");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "needles");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 50, "saline flushes");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "lactated ringers");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "pressure bag");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "blood tubes");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "abg kit");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "central line kit");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "face shield");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "gowns");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "masks");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 55, "diphenhydramine|benadryl");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "methylprednisolone|solumedrol");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 55, "flumazenil");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 55, "nitroglycerin");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 55, "norepinephrine|levophed");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "vecuronium");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 55, "succinylcholine");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "rocuronium");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "etomidate");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "ketamine");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "propofol");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "midazolam|versed");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "diltiazem");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "metoprolol");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "verapamil");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "digoxin");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "furosemide|lasix");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "aspirin");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "albuterol");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "lorazepam|ativan");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "phenylephrine");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "dobutamine");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "isoproterenol");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 55, "transcutaneous pacer|pacing pads");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "code sheet|code record");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "sharps container");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "scissors");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "flashlight|penlight");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 60, "thermometer");  // 2026-11-04 · NCLEX
board("Name an item on a crash cart", 55, "glucometer");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "equality");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "trustworthiness");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 55, "responsibility");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "professionalism");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "competence");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 55, "nursing code of ethics|ana code of ethics");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "deontology");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 65, "virtue ethics");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "consequentialism");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "solidarity");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "transparency");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "professional boundaries");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 65, "conscientious objection");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 65, "double effect|principle of double effect");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 65, "sanctity of life");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 65, "quality of life");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "equity");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "distributive justice");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "standard of care");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "stewardship");  // 2026-11-04 · NCLEX
board("Name a nursing ethical principle", 60, "trust");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 40, "assisting with adls|adls");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 45, "bed bath");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 50, "peri care");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 55, "foley catheter care|catheter care");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 55, "denture care");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "nail care");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 65, "hemoccult");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 55, "applying scds|sequential compression devices");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 50, "assisting with meals");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 55, "setting up meal trays");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 55, "encouraging fluids");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 55, "passive range of motion");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 55, "fall precautions");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 65, "bed alarm");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "cleaning equipment");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "cleaning rooms");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "bladder scan");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "incentive spirometer reminder");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "sitz bath");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "enema|tap water enema");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "ice packs");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "warm compress");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "ekg");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "pulse oximetry");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "restraint checks");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "suctioning oral");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "comfort measures");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "companionship");  // 2026-11-04 · NCLEX
board("Name a task an RN can delegate to a nursing assistant", 60, "back rub");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 50, "meningitis");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 60, "scarlet fever");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "rhinovirus");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 60, "common cold");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 60, "hand foot and mouth disease");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "enterovirus");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "salmonella");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "shigella");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "e coli o157|e coli");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "hepatitis e");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "neonatal herpes");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 55, "bronchiolitis");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "croup|parainfluenza");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "metapneumovirus");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "pinworms");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 70, "bed bugs");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "crusted scabies|norwegian scabies");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 60, "wound infection");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 55, "draining abscess");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 60, "diarrhea");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 60, "gastroenteritis");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 55, "multidrug resistant organism|mdro");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "crkp|klebsiella");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "acinetobacter");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "vrsa");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 60, "avian flu|bird flu|h5n1");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 60, "h1n1|swine flu");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "hemorrhagic fever|lassa fever|marburg");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 60, "epiglottitis");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "fifth disease|erythema infectiosum");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "ringworm|tinea");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "body lice");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "cholera");  // 2026-11-04 · NCLEX
board("Name a disease that needs airborne, droplet or contact precautions", 65, "typhoid");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 50, "diabetic foot");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 50, "coronary artery disease|cad");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 50, "myocardial infarction|heart attack");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 50, "atherosclerosis");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 50, "macrovascular complications");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 50, "microvascular complications");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "heart failure");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "cardiomyopathy|diabetic cardiomyopathy");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "osteomyelitis");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "gangrene");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "cellulitis");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "periodontal disease|periodontitis");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "hyperlipidemia|dyslipidemia");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "urinary tract infections");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "yeast infections|candidiasis");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "sexual dysfunction");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "orthostatic hypotension");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "diabetic diarrhea");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "constipation");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "hypoglycemia unawareness");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "lipohypertrophy");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 55, "osteoporosis");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "diabetic amyotrophy");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "mononeuropathy");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "carpal tunnel syndrome");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "trigger finger");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "dupuytren contracture");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "diabetic dermopathy|shin spots");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "limited joint mobility|diabetic cheiroarthropathy");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "alzheimer disease");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "papillary necrosis");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "emphysematous pyelonephritis");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "malignant otitis externa");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "mucormycosis");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "tuberculosis");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 60, "pancreatic cancer");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 65, "diabetic bullae");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 65, "cranial nerve palsy|third nerve palsy");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 65, "sudomotor dysfunction|anhidrosis");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 65, "resting tachycardia");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 65, "painless mi");  // 2026-11-04 · NCLEX
board("Name a long-term complication of diabetes", 65, "gustatory sweating");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 50, "hypoperfusion");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 50, "altered level of consciousness");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 50, "lethargy");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 50, "agitation");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "anuria");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "urine output less than 30 ml");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "decreased pulse pressure");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "widened pulse pressure");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "map less than 65|low map");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "low cardiac output");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "bradycardia");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "jugular vein distension|jvd");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "flat neck veins");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "crackles");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "chest pain");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "arrhythmias");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "hives|urticaria");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "angioedema");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "wheezing");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "stridor");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "bounding pulses");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "weakness");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 55, "fatigue");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "sense of impending doom");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "hypoxia");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "hyperglycemia");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "hypoglycemia");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "elevated bun");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "dic");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "bleeding");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "respiratory alkalosis");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "decreased svr");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "increased svr");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "decreased cardiac output");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "cardiac arrest");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "cyanotic lips");  // 2026-11-04 · NCLEX
board("Name a sign of shock", 60, "sunken eyes");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "agpcnp|adult gerontology primary care np");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 55, "pnp|pediatric nurse practitioner");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 60, "whnp|womens health np");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 60, "nnp|neonatal nurse practitioner");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "enp|emergency nurse practitioner");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 60, "acnp|acute care np");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cmc");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "csc");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 60, "pccn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 65, "tcrn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 65, "cpen");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cfrn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "ctrn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "sane a|sane p");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cwon");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cws");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 65, "chpn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 60, "cne|certified nurse educator");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "nea bc");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "ne bc");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cphq");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cic");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cnn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "crrn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cgrn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "chse");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cpnp");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "nrcme");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "mbe");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "rnfa|crnfa");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cnrn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "scrn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cpps");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "lnc");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cvrn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "aocn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cpon");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cbcn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "c efm|efm");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "rnc ob");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "rnc nic");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "rnc mnn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "gerontological nursing certification|gero bc");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 65, "pmh bc");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "phn|public health nurse");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 55, "bsn rn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 55, "nclex rn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 60, "nclex pn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 60, "compact license|multistate license|nlc");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "cpr certification");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 60, "certified medication aide|cma");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "edd");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "dns|dnsc");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "nd");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "lpn to rn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 60, "rn to bsn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "accelerated bsn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "diploma in nursing|diploma rn");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "graduate certificate");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "post masters certificate");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "enpc");  // 2026-11-04 · NCLEX
board("Name a nursing degree, license or credential", 75, "stable");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 45, "nrb");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 45, "simple mask");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 45, "bvm");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 50, "noninvasive ventilation|niv");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "aerosol mask");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "oxyhood|head box");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "oxygen tent");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "isolette oxygen");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 55, "blow by oxygen");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "transtracheal catheter");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 65, "oxymizer|reservoir cannula");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "pulse dose oxygen");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 55, "oxygen cylinder|e cylinder");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "liquid oxygen");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 55, "wall oxygen|oxygen flowmeter");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "humidifier|bubble humidifier");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "heated humidified high flow");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "ecmo");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "jet ventilation");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "oscillator|hfov");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "cuirass ventilator|iron lung");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 55, "laryngoscope");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "surgical airway");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "needle cricothyroidotomy");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "fenestrated trach");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "passy muir valve|speaking valve");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "cuffed trach");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "peep valve");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "bain circuit|mapleson circuit");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "jackson rees");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "pocket mask");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "face shield cpr barrier");  // 2026-11-04 · NCLEX
board("Name an oxygen delivery or airway device", 60, "heat moisture exchanger|hme|artificial nose");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 45, "pt|prothrombin time");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 55, "vancomycin peak");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "tobramycin level");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 55, "valproic acid level|depakote level");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "carbamazepine level|tegretol level");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "theophylline level");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 50, "cbc|complete blood count");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 55, "hematocrit");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "neutrophils");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 65, "cd4 count");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "viral load");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 65, "bilirubin");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "albumin");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "ammonia");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "lipase|amylase");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "lipid panel|cholesterol");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "creatine kinase|ck|cpk");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "uric acid");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "phosphorus|phosphate");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 55, "a1c|hemoglobin a1c");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "t4|free t4");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "cortisol");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "serum osmolality");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "abg|arterial blood gas");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 55, "hcg|beta hcg");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 55, "blood type|type and crossmatch|type and screen");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 55, "culture results|blood cultures");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 50, "drug levels|therapeutic drug levels");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 45, "peak and trough");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "fibrinogen");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "d dimer");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "iron|ferritin");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "b12");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "folate");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "bnp");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "troponin");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "lactate");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "urinalysis");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "urine specific gravity");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "tacrolimus level");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "cyclosporine level");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "methotrexate level");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "salicylate level");  // 2026-11-04 · NCLEX
board("Name a lab value nurses check before giving a medication", 60, "acetaminophen level");  // 2026-11-04 · NCLEX
board("Name a sign of dehydration", 45, "concentrated urine");  // 2026-11-04 · NCLEX
board("Name a sign of dehydration", 55, "increased serum osmolality");  // 2026-11-04 · NCLEX
board("Name a sign of dehydration", 55, "decreased cvp");  // 2026-11-04 · NCLEX
board("Name a sign of dehydration", 55, "sticky mucous membranes");  // 2026-11-04 · NCLEX
board("Name a sign of dehydration", 55, "dry eyes");  // 2026-11-04 · NCLEX
board("Name a sign of dehydration", 55, "weak cry");  // 2026-11-04 · NCLEX
board("Name a sign of dehydration", 55, "dry diaper");  // 2026-11-04 · NCLEX
board("Name a sign of dehydration", 55, "restlessness");  // 2026-11-04 · NCLEX
board("Name a sign of dehydration", 55, "heat intolerance");  // 2026-11-04 · NCLEX
board("Name a sign of dehydration", 55, "hypovolemia");  // 2026-11-04 · NCLEX
board("Name a sign of dehydration", 55, "longitudinal tongue furrows|furrowed tongue");  // 2026-11-04 · NCLEX
board("Name a sign of dehydration", 55, "hemoconcentration");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 45, "sirs");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 45, "temperature above 38|temperature over 100.4");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "heart rate above 90");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "respiratory rate above 20|respiratory rate over 22");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "systolic below 100");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "wbc above 12000|wbc below 4000");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "lactate above 2|lactate above 4");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "hypoperfusion");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 50, "organ dysfunction");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 45, "septic shock");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 50, "acute kidney injury");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "ards");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "elevated liver enzymes");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "jaundice");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "hyperbilirubinemia");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "coagulopathy");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "decreased gcs");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "malaise");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "hypoglycemia");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "edema");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "positive fluid balance");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "poor feeding in infants");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "apnea in infants");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "temperature instability");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "bulging fontanelle");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "refusal to feed");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "respiratory alkalosis");  // 2026-11-04 · NCLEX
board("Name a sign of sepsis", 55, "elevated anion gap");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 45, "blood glucose below 70");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "blood glucose below 54");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "restlessness");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "numbness|paresthesia|pins and needles");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "lethargy");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "weak cry in infants|poor feeding in infants|jitteriness in newborns");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "hypothermia");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "cyanosis");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "apnea");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "bradycardia");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "hypotonia");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "unresponsiveness");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "psychosis");  // 2026-11-04 · NCLEX
board("Name a symptom of low blood sugar", 55, "hemiparesis");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 50, "visual analog scale|vas");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 55, "pasero opioid induced sedation scale|poss");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 55, "aims|abnormal involuntary movement scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 60, "beck depression inventory");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 60, "geriatric depression scale|gds");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "hamilton depression");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 60, "columbia suicide severity|c ssrs");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 60, "sad persons");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "asq|ask suicide screening");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "brief psychiatric rating scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "young mania rating scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "ciwa b");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "dast");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "slums");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 60, "mini cog");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 65, "clock drawing test");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "cdr|clinical dementia rating");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "global deterioration scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "fast scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "nutritional risk screening|nrs 2002");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "snaq");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 70, "brief pain inventory");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 70, "mcgill pain questionnaire");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "cries pain scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "n pass");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "pipp");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 65, "oucher");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "poker chip tool");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 70, "abbey pain scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 65, "pain in advanced dementia");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "nursing delirium screening|nu desc");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "4at");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "dds");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "ashworth scale|modified ashworth");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 65, "fim|functional independence measure");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 60, "oxford scale|muscle strength scale|0 to 5 muscle strength");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 60, "deep tendon reflex scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 55, "pitting edema scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 60, "pulse scale|0 to 4 pulse");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 55, "bristol stool chart|bristol stool scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 70, "iddsi");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "bedside swallow screen|yale swallow");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 65, "stopbang|stop bang");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "epworth sleepiness");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "asthma control test");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "mrc dyspnea scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 65, "borg scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 60, "nyha classification");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "killip");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "dubowitz");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "downes score");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "westley croup score");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "pram");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "pediatric assessment triangle");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 55, "esi|emergency severity index");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "ctas");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "manchester triage");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 60, "start triage");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "jumpstart");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "gcs p");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "rts|revised trauma score");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "iss|injury severity score");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "abcd2");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 60, "cincinnati stroke scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "lams");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "race scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "van");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 70, "caprini");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "padua");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "wells criteria");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "revised cardiac risk index");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "meld");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "child pugh");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "ranson");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "esas|edmonton symptom assessment");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "zarit burden");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 70, "hurt|hits");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 70, "ace score|adverse childhood experiences");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 65, "m chat");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 55, "denver ii|denver developmental");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 70, "ages and stages|asq 3");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 55, "tanner stages");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 55, "snellen");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "rinne|weber");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "whisper test");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "ankle brachial index|abi");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "lace index");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "frail scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 70, "clinical frailty scale");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "vulnerable elders survey|ves 13");  // 2026-11-04 · NCLEX
board("Name a nursing scale or assessment tool", 75, "spict");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "trauma icu");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "burn icu");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "intermediate care");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "high dependency unit|hdu");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "acute care");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "geriatric psychiatry");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "detox unit|chemical dependency");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "eating disorder unit");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "adolescent unit");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "pediatric er");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 55, "urgent care");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "fast track");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 55, "triage");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "clinical decision unit");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "discharge lounge");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "transfer center");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "bed management");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "patient access");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "patient transport");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "interpreter services");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "patient relations|patient advocate");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "volunteer services");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "foundation");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "marketing");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "finance");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "purchasing|supply chain");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "materials management");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 65, "biomedical engineering|biomed");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "facilities|maintenance|engineering");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "laundry|linen services");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "food services|kitchen");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 55, "speech therapy|speech language pathology");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "audiology");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 55, "ultrasound");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 55, "ct|ct scan");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 55, "mri");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 55, "x ray");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "echo lab|echocardiography");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "ekg department");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "eeg lab");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "vascular lab");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "pulmonary function lab");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "electrophysiology lab|ep lab");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 55, "cardiac rehab");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "pulmonary rehab");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "anticoagulation clinic");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "wound ostomy");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "ostomy clinic");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "lactation");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "child life");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "ethics committee");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "education department");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "staff development");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "employee health");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "occupational health");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "credentialing");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "medical staff office");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "compliance");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "legal");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "utilization review");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "telehealth|tele icu|eicu");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "command center");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "dental");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "ophthalmology");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "ent");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "dermatology");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "plastics");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "vascular surgery");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "cardiothoracic surgery");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "neurosurgery");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 55, "obstetrics");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "reproductive endocrinology|ivf");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "perinatology|maternal fetal medicine");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "genetics");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "allergy");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "endocrinology");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "rheumatology");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "infectious disease");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "geriatrics");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "hospitalist");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "chapel");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "parking");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "information desk");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "lobby");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "waiting room");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "loading dock");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "decontamination");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "isolation unit|biocontainment");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "covid unit");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "seclusion room");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "apheresis");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "transfusion service");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "histology");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "cytology");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 60, "microbiology");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "chemistry lab");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "point of care testing");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "central sterile");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 55, "anesthesia");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "pain management");  // 2026-11-04 · NCLEX
board("Name a hospital unit or department", 70, "interventional cardiology");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 55, "whole blood");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "potassium phosphate");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 70, "sodium phosphate");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 60, "calcium gluconate");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "d5 with 20 kcl");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 55, "maintenance fluids");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "resuscitation fluids");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "multivitamin infusion|mvi");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "clinimix");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "kabiven|smofkabiven");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "smoflipid");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "omegaven");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "d12.5");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "d15");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 70, "d25");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "d40");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "5% sodium chloride");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "0.33% saline|1 3 ns");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "sodium lactate");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "sodium acetate");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "tham solution");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 60, "glucose saline|dextrose saline");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "4% dextrose 0.18% saline|dextrose 4% saline 0.18%");  // 2026-11-04 · NCLEX
board("Name a type of IV fluid", 65, "plasma protein fraction|plasmanate");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "hob|head of bed");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "bm|bowel movement");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "bs|blood sugar|bowel sounds");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "fsbs|fingerstick blood sugar");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cbg");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ns|normal saline");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "lr|lactated ringers");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "d5w");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "kcl");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "nacl");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "abx|antibiotics");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "nsaid");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "asa|aspirin");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "apap|acetaminophen");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ssi|sliding scale insulin");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "dka");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hhs");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "aki");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ckd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "esrd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ards");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "sirs");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "dic");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "tia");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "sah");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ich");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "tbi");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ms|multiple sclerosis");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "als");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ra|rheumatoid arthritis");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "oa|osteoarthritis");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "sle|lupus");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "hiv");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "aids");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "tb");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hbv");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hcv");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "std|sti");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "pid");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "bph");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "psa");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "cabg");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pci");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ptca");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "stemi");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "nstemi");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "acs");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "afib|a fib");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "vtach|v tach|vt");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "vfib|v fib|vf");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "pea");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "svt");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "nsr|normal sinus rhythm");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "pvc");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pac");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "aaa");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pad|pvd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "jvd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "cvp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "map");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "spo2");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "etco2");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "fio2");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "peep");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "cpap");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "bipap");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hfnc");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "nc|nasal cannula");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "nrb|non rebreather");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "bvm");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ett|et tube");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "lma");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "trach");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "vap");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cauti");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "clabsi");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hai");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "mdro");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "esbl");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cre");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "vte");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "scd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ted");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "prom");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pprom");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "srom");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "arom");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "lmp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "edd|edc");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ga|gestational age");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "g p|gtpal");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "iugr");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "sga");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "lga");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "nst");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "bpp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cst");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ctg|efm");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "iupc");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "fhr|fht");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "svd|nsvd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "vbac");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "tolac");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "c section|cs|lscs");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "pph");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "pih");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "hellp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "gdm");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "nas");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "sids");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "rsv");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "brue");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ttn");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "rds");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "nec");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pda");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "asd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "vsd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "tof");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ddh");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ptsd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ocd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "mdd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "gad");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "bpd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "etoh|alcohol");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ciwa");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cows");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "si|suicidal ideation");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hi|homicidal ideation");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "avh|auditory visual hallucinations");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ect");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "nms");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "eps");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "td|tardive dyskinesia");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ssri");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "snri");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "maoi");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "tca");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ace inhibitor|acei");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "arb");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ccb");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ppi");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "lmwh");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ufh");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "doac|noac");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "tpa|alteplase");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ffp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "prbc");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "plt transfusion");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ivig");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "sq");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "id|intradermal");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "io");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pr|per rectum");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pv|per vagina");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "og");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "gt|g tube");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "jt");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pcn|penicillin");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "nkfa");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "dnar");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cmo|comfort measures only");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "poa");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hcp|healthcare proxy");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "lob|loss of balance");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "sba|standby assist");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cga|contact guard assist");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "mod a|moderate assist");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "max a|maximum assist");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "nwb|non weight bearing");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pwb|partial weight bearing");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "wbat|weight bearing as tolerated");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "twb|toe touch weight bearing");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "obs");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ed");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pcu");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "sicu");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "micu");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ccu");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cvicu");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "snf");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ltc|long term care");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "alf|assisted living");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hh|home health");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "dme");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "pcp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "aprn");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "rrt");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "lvn");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cnl");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cns");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "dnp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "bsn");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "adn");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "msn");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "nclex");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ana");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "aacn");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "qi");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ebp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "rca|root cause analysis");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hcahps");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "mar|medication administration record");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "emar");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "bcma");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cpoe");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "vo|verbal order");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "to|telephone order");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "dc|discontinue|discharge");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "dtrs");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "rlq");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ruq");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "llq");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "luq");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ble|bilateral lower extremities");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "bue");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "lle");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "rle");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "lue");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "rue");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "cxr|chest x ray");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "kub");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "us|ultrasound");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "echo");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "eeg");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "emg");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "lp|lumbar puncture");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "egd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ercp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "tee");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pft");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ptt");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "pt inr");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "esr");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "crp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "bnp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ck");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ldh");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ast");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "alt");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "alp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ggt");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "hct");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "mcv");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "anc");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "rdw");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "tibc");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hba1c");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ft4");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "acth");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "adh");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "gfr");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ua c and s|c and s|culture and sensitivity");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "o and p");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "rpr");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "vdrl");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ppd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "igra");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hpv");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hsv");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cmv");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ebv");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "vzv");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "mmr");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "dtap");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "tdap");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ipv");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hib");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pcv");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "flu|influenza");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "covid");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "r o|rule out");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "s p|status post");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "qam");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "qpm");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "q2h");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "q6h");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "q8h");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "q12h");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "tiw");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "aka|above knee amputation");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "bka|below knee amputation");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "orif");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "tka|total knee");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "tha|total hip");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "lap chole");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "appy");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "tah");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "bso");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "d and c");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "turp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ivf|iv fluids");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "mvi");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "nebs");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "mdi");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "dpi");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "inh");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "uri");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "omt");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "ent");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "gi");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "gu");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pns");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ans");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "csf");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "icp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cpp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "evd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "vp shunt");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ivc");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "svc");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ivc filter");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "avf|av fistula");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "hd|hemodialysis");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pd|peritoneal dialysis");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "crrt");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "cvvhd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ecmo");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "iabp");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "lvad");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "aicd|icd");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ppm|pacemaker");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "tavr");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "qol");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "los|length of stay");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "adt");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "asap");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "n v|nausea and vomiting");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "n v d");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "abd|abdomen");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 45, "nad|no acute distress");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "rrr|regular rate and rhythm");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "ctab|clear to auscultation bilaterally");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "nt nd|nontender nondistended");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "b l|bilateral");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "mae|moves all extremities");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "eomi");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "nkma");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "pta|prior to admission");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "fhx|family history");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "shx|social history");  // 2026-11-04 · NCLEX
board("Name a medical abbreviation", 70, "psh");  // 2026-11-04 · NCLEX
board("Name an electrolyte imbalance", 60, "anion gap metabolic acidosis|high anion gap acidosis");  // 2026-11-04 · NCLEX
board("Name an electrolyte imbalance", 60, "non anion gap metabolic acidosis|hyperchloremic acidosis");  // 2026-11-04 · NCLEX
board("Name an electrolyte imbalance", 60, "mixed acid base disorder");  // 2026-11-04 · NCLEX
board("Name an electrolyte imbalance", 60, "contraction alkalosis");  // 2026-11-04 · NCLEX
board("Name an electrolyte imbalance", 60, "cerebral salt wasting");  // 2026-11-04 · NCLEX
board("Name an electrolyte imbalance", 65, "hypoaldosteronism");  // 2026-11-04 · NCLEX
board("Name an electrolyte imbalance", 65, "hyperaldosteronism");  // 2026-11-04 · NCLEX
board("Name an electrolyte imbalance", 65, "pseudohyperkalemia");  // 2026-11-04 · NCLEX
board("Name an electrolyte imbalance", 60, "hyperosmolality");  // 2026-11-04 · NCLEX
board("Name an electrolyte imbalance", 60, "hypoosmolality");  // 2026-11-04 · NCLEX
board("Name an electrolyte imbalance", 60, "third spacing");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 40, "vital signs");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 50, "cord clamping");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 45, "suctioning|bulb syringe");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 50, "drying and stimulating");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 50, "thermoregulation|radiant warmer");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 55, "rooming in");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 45, "head to toe exam|newborn exam|physical exam");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "dubowitz");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 60, "sutures|molding");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "harlequin sign");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "kramer rule");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 50, "cord vessels|three vessel cord|2 arteries 1 vein");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 60, "femoral pulses");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "heart murmur");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "respiratory effort");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "retractions");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "grunting");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "nasal flaring");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "epstein pearls");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "ear placement|low set ears");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "simian crease");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "polydactyly");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "syndactyly");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "clubfoot check");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "spine dimple|sacral dimple");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "testes descended|undescended testes");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "hypospadias");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "pseudomenstruation");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "breast engorgement in newborn|witch milk");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "meconium aspiration");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "neonatal abstinence scoring|finnegan");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 55, "glucose monitoring|hypoglycemia screening");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 60, "cord blood type|coombs test|dat");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "blood type");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "sepsis screening|sepsis calculator");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 55, "diaper count|wet diapers");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "stool count");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 55, "sleep position");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "bonding assessment");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 55, "infant security|matching bands");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "newborn photos");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "birth certificate");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 55, "discharge teaching");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "pediatrician follow up");  // 2026-11-04 · NCLEX
board("Name a newborn assessment or procedure", 65, "exchange transfusion");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 50, "venous stasis");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 55, "thrombophlebitis");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 55, "decreased lung expansion");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "respiratory infection");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 50, "urinary stasis");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "decreased endurance");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 55, "activity intolerance");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "dizziness");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 55, "tachycardia");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "anorexia");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 55, "weight loss");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "hypoproteinemia");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "decreased metabolism");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "glucose intolerance");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "anxiety");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 70, "sensory overload");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "learned helplessness");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "body image changes");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "role changes");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "hostility");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "regression");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "cognitive decline");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "sleep pattern disturbance");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "back pain");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "spasticity");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "heterotopic bone");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "ankylosis");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "wrist drop");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "nerve compression|peroneal nerve palsy");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "compartment syndrome");  // 2026-11-04 · NCLEX
board("Name a complication of immobility", 60, "muscle shortening");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "bedside cabinet|nightstand");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 45, "stethoscope");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 45, "linens|sheets");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 50, "towels");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "washcloths");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 50, "toothbrush");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "toothpaste");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 50, "soap");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "lotion");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "comb");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "razor");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "mouthwash");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "dentures cup");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 55, "urine hat|specimen hat");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "graduated cylinder");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "slippers");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "robe");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 50, "wristband|id band");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 55, "allergy band");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 55, "fall risk band");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 45, "incentive spirometer");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "nebulizer");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "inhaler");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "heating pad");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "ice pack");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 60, "trapeze");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 45, "side rails");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 55, "bed controls");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 55, "light switch");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "nightlight");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "paper towels");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "soap dispenser");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "ppe cart");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "mask dispenser");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "disinfectant wipes|sani wipes");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "biohazard bin");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "red bag");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "laundry bag");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "ekg machine");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 60, "defibrillator");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 55, "oxygen tank");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 50, "nasal cannula");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 50, "mask");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "ventilator");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "dialysis machine");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "syringe pump");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 55, "pca pump");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "kangaroo pump");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "bladder scanner");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "doppler");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 50, "vitals machine|dinamap");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "scale|bed scale");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "lift sling");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "slide board");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "hand rail");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "grab bar");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 55, "emergency pull cord");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 50, "shower");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 45, "toilet");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 55, "mirror");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 55, "closet|wardrobe");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "locker");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "safe");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 45, "dry erase board");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "calendar");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 60, "menu");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "pain scale chart");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "patient education materials");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 50, "food tray|meal tray");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 55, "cup");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 60, "straw");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "ice water");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "bed sensor");  // 2026-11-04 · NCLEX
board("Name something found in a hospital room", 65, "camera");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 55, "levine sign|clenched fist");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 55, "tachycardia");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "bradycardia");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 55, "hypertension");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "restlessness");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 55, "pain unrelieved by rest");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 55, "pain unrelieved by nitroglycerin");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "pain lasting more than 20 minutes");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "pain between shoulder blades");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "cyanosis");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 55, "crackles");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "s3|s4|extra heart sounds");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "new murmur");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 55, "jvd");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "decreased urine output");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "cardiogenic shock");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "cardiac arrest|sudden cardiac death");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "st depression");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "t wave inversion");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "q waves");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "elevated ck mb");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "low grade fever");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "heart failure");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "loss of appetite");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "feeling of fullness");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 55, "throat tightness");  // 2026-11-04 · NCLEX
board("Name a symptom of a heart attack", 60, "choking sensation");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 50, "tachypnea");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "diaphoresis");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "bradycardia");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 55, "angioedema|facial swelling|lip swelling");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 55, "throat tightness");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 55, "stridor");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "laryngeal edema");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "cyanosis");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "frothy sputum");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 55, "jvd");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "bounding pulse");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "widened pulse pressure");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "weight gain");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "edema");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "abdominal pain");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "diarrhea");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "muscle aches|myalgia");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "malaise");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "confusion");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "shock");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "cardiac arrest");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "tingling|paresthesias");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "muscle cramps");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "tetany");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "arrhythmia");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "elevated bilirubin");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "positive direct coombs");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "decreased haptoglobin");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "elevated ldh");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 50, "allergic reaction");  // 2026-11-04 · NCLEX
board("Name a sign of a blood transfusion reaction", 60, "post transfusion purpura");  // 2026-11-04 · NCLEX
board("Name a right of medication administration", 45, "right drug drug interaction|right drug interaction");  // 2026-11-04 · NCLEX
board("Name a right of medication administration", 50, "right label");  // 2026-11-04 · NCLEX
board("Name a right of medication administration", 55, "right storage");  // 2026-11-04 · NCLEX
board("Name a right of medication administration", 55, "right technique");  // 2026-11-04 · NCLEX
board("Name a right of medication administration", 55, "right speed|right rate");  // 2026-11-04 · NCLEX
board("Name a right of medication administration", 55, "right prescription|right order");  // 2026-11-04 · NCLEX
board("Name a right of medication administration", 55, "right allergy check|right allergy");  // 2026-11-04 · NCLEX
board("Name a right of medication administration", 55, "right drug compatibility");  // 2026-11-04 · NCLEX
board("Name a right of medication administration", 55, "right duration");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 45, "physical restraints|mechanical restraints");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "belt restraint|gait belt restraint");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "freedom splint");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "lap tray");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "tray table");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "tilted chair");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "bean bag chair");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 55, "two point restraints");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "leather restraints");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "locked restraints");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "transport restraints");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 60, "emergency hold|physical hold");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "therapeutic hold");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 55, "time out");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "olanzapine");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "diphenhydramine");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "ketamine");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 45, "chair alarm");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "pressure sensor alarm");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "door alarm");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 60, "wander guard|wanderguard");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "locked unit");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 50, "room near nurses station");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 55, "camouflage lines|hide lines|long sleeves");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "stockinette over iv");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 60, "iv site protector");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 55, "fidget blanket|busy blanket|fidget toys");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 55, "reality orientation");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "validation");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 50, "redirection");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "limit setting");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 55, "meet basic needs");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "hunger and thirst");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "comfort items");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "consistent caregivers");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "medication review");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 55, "treat pain");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "remove unnecessary lines|discontinue tubes early");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "early mobility");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "exercise");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "therapeutic touch");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "massage");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "pet therapy");  // 2026-11-04 · NCLEX
board("Name a restraint or restraint alternative", 65, "family photos");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 40, "pe");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 50, "hypoxia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "hypoxemia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "bronchospasm");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 55, "pneumothorax");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "pleural effusion");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "ards");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "pulmonary edema");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 55, "hypertension");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 55, "tachycardia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "bradycardia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 50, "hypovolemia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "cardiac arrest");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "heart failure");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 55, "fluid overload");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 55, "dehydration");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "hyponatremia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "hypokalemia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "oliguria");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "bladder distension");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 55, "bowel obstruction");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "small bowel obstruction");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "gastric distension");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 60, "hiccups");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "diarrhea");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "abscess");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "cellulitis");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "necrotizing fasciitis");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "keloid");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "hypertrophic scar");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "stitch abscess");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "incisional pain");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "phantom limb pain");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "chronic pain");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "shoulder pain after laparoscopy");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 55, "spinal headache|post dural puncture headache");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "epidural hematoma");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "nerve damage");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "peripheral neuropathy");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "corneal abrasion");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "dental injury");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "awareness under anesthesia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "emergence delirium");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 60, "shivering");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "hyperthermia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "serotonin syndrome");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "transfusion reaction");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 55, "thrombophlebitis");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "iv infiltration");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 60, "falls");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "deconditioning");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "depression");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "dumping syndrome");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "lymphedema");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "graft failure");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "graft rejection");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "anastomotic stricture");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "bile leak");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "pancreatitis");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 55, "cauti");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "clabsi");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 55, "vap");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 55, "aspiration pneumonia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 55, "airway obstruction");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "laryngeal edema");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "hoarseness");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "vocal cord paralysis");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "hypocalcemia after thyroidectomy");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "thyroid storm");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "hypothyroidism");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "adrenal crisis");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "dic");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "hit|heparin induced thrombocytopenia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "air embolism");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "limb ischemia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "rhabdomyolysis");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "propofol infusion syndrome");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "opioid overdose");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "hypercapnia");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "respiratory acidosis");  // 2026-11-04 · NCLEX
board("Name a postoperative complication", 65, "metabolic acidosis");  // 2026-11-04 · NCLEX
board("Name a reason a filling or crown fails", 40, "occlusal overload|excessive occlusal forces");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 45, "inadequate tooth preparation|improper preparation");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "insufficient convergence angle|excessive taper|over tapered preparation");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "short clinical crown|inadequate preparation height|short preparation");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 50, "inadequate resistance form");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 45, "marginal breakdown|marginal ditching");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 45, "marginal gap|marginal discrepancy");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 40, "overhang|overhanging margin");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 45, "porcelain fracture|chipping|ceramic chipping");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 50, "cohesive failure");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 50, "adhesive failure|bond failure|bonding failure");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "delamination");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 60, "galvanic corrosion|corrosion");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 60, "creep|amalgam creep");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 60, "delayed expansion|zinc contamination");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "inadequate condensation");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 50, "improper occlusal contacts|occlusal interference");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "inadequate isthmus width|thin isthmus");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "sharp internal line angles");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 50, "vertical root fracture");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "post perforation|root perforation");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 50, "periodontal disease|gum disease");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "biologic width violation|supracrestal tissue attachment violation");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 50, "saliva contamination|blood contamination");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "inadequate etching|incomplete etch");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "over drying dentin|desiccated dentin");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "incomplete cement removal|excess cement");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "improper cement selection|wrong cement");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 50, "uncured composite|undercured composite");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "c factor|high c factor|configuration factor");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 50, "white line|enamel crazing");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 50, "poor contact|open contact");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 50, "water sorption");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 60, "hydrolytic degradation|hybrid layer degradation");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 60, "mmp degradation|matrix metalloproteinases");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 50, "thermal cycling|thermal expansion mismatch");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 60, "parafunction");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "pulp necrosis|tooth nerve died");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "inadequate ferrule|no ferrule|lack of ferrule effect");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 60, "post dislodgement|post failure");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "fatigue failure|material fatigue");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "poor marginal adaptation");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 60, "xerostomia|dry mouth");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 55, "high caries risk");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 60, "poor patient compliance");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 60, "cusp fracture");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 60, "tooth fracture|fractured tooth");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 60, "loss of vitality");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 65, "ill fitting temporary|provisional leakage");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 65, "impression error|inaccurate impression");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 65, "lab error|casting defect");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 65, "porosity|voids");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 70, "gingival recession exposing margin|exposed margin");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 70, "cyclic loading");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 70, "improper shade|esthetic failure");  // 2026-11-04 · INBDE
board("Name a reason a filling or crown fails", 75, "allergy|metal allergy");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 40, "communication|communicative management");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 50, "enhancing control|stop signal");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 45, "ask tell ask");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 55, "euphemisms|child friendly language");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 40, "nitrous oxide sedation|n2o|laughing gas|inhalation sedation");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 50, "conscious sedation|oral sedation|minimal sedation|moderate sedation|iv sedation");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 55, "parental absence|parent presence absence|pp a");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 60, "active restraint|passive restraint|papoose board|papoose");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 60, "mouth prop|bite block");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 60, "contingency management");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 65, "retraining");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 55, "flooding|implosion therapy");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 60, "operant conditioning");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 60, "classical conditioning");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 55, "negative reinforcement");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 55, "positive pre visit imagery");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 60, "pre appointment letter|previsit information");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 60, "role playing");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 60, "empathy");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 60, "active listening");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 60, "tell show feel do");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 65, "behavior shaping|shaping");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 65, "token economy");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 70, "biofeedback");  // 2026-11-04 · INBDE
board("Name a dental behavior management technique", 70, "acupuncture");  // 2026-11-04 · INBDE
board("Name a dental specialty", 60, "endodontology");  // 2026-11-04 · INBDE
board("Name a dental specialty", 55, "periodontology");  // 2026-11-04 · INBDE
board("Name a dental specialty", 70, "maxillofacial surgeon|omfs");  // 2026-11-04 · INBDE
board("Name a dental specialty", 70, "special care dentistry");  // 2026-11-04 · INBDE
board("Name a dental specialty", 70, "craniofacial surgery");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 40, "fluoride gel|apf gel");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 50, "stannous fluoride toothpaste|stannous fluoride");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 50, "potassium nitrate toothpaste|potassium nitrate");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 55, "triclosan toothpaste|colgate total");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 55, "cetylpyridinium chloride|cpc mouthwash|crest pro health");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 55, "essential oil mouthwash");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 55, "tartar control toothpaste|pyrophosphate toothpaste");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 55, "arginine toothpaste|pro argin");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 55, "novamin|calcium sodium phosphosilicate");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 55, "mi paste|cpp acp|recaldent");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 60, "1.1% sodium fluoride|high fluoride toothpaste|5000 ppm fluoride|prescription toothpaste");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 55, "fluoride varnish");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 60, "silver diamine fluoride");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 60, "fluoride tray");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 55, "retainer cleaner");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 55, "orthodontic wax|dental wax");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 60, "interproximal brush");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 60, "wooden wedges|stimudents|toothpicks");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 50, "hydrogen peroxide rinse");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 55, "saltwater rinse|salt water rinse");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 55, "saliva substitute|artificial saliva");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 60, "xylitol spray");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 60, "oral irrigator");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 60, "power flosser|air flosser");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 60, "toothpaste tablets");  // 2026-11-04 · INBDE
board("Name an oral hygiene product", 60, "bamboo toothbrush");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 55, "second division block");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 55, "high tuberosity approach");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 55, "greater palatine canal approach");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 55, "closed mouth technique");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 65, "superior alveolar nerves");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 65, "dental plexus|superior dental plexus");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 65, "zygomatic nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 70, "zygomaticofacial nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 70, "zygomaticotemporal nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 70, "pterygopalatine nerves");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 70, "posterior nasal nerves");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 70, "nerve to medial pterygoid");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 70, "nerve to lateral pterygoid");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 70, "buccal branch of facial nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 70, "marginal mandibular nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 70, "great auricular nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 70, "greater petrosal nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 75, "anterior ethmoidal nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 75, "nasociliary nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 75, "frontal nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 75, "supraorbital nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 75, "supratrochlear nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 75, "lacrimal nerve");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 70, "intraseptal injection");  // 2026-11-04 · INBDE
board("Name a nerve or nerve block used in dentistry", 70, "computer controlled local anesthetic delivery|the wand|stav");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 50, "pepsodent");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 50, "close up");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 50, "signal");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 50, "elmex");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 50, "meridol");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 45, "tom's");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 50, "scope");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 50, "dentyne");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 55, "trident");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 55, "orbit gum");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 55, "altoids");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 55, "rembrandt");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 55, "vivera");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 55, "sure smile");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "osstell");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "biohorizons");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "megagen");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "osstem");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "neodent");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "astra tech");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "camlog");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "keystone dental");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "bicon");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "mis implants");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "planet dds");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "dentrix");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "eaglesoft");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "open dental");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "curve dental");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "dexis");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "vatech");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "j morita|morita");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "nsk");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "w&h");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "bien air");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "midmark");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "pelton crane");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "belmont");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "parkell");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "dentatus");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "garrison dental");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "danaher");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "envista");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "ormco");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "american orthodontics");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "rocky mountain orthodontics");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "tp orthodontics");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "dentaurum");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "forestadent");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "g&h orthodontics");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 60, "clearpath");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 65, "angel align");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 65, "spark aligners");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 65, "brius");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 65, "smile brands");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 65, "pacific dental services");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 65, "western dental");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 65, "bright now dental");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 65, "delta dental");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 65, "metlife dental");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 65, "cigna dental");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 65, "guardian dental");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 65, "aetna dental");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "benco");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "darby dental");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "net32");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "safco");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "burkhart");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "dental city");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "gc america");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "kuraray");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "tokuyama");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "dmg");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "heraeus kulzer|kulzer");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "vita zahnfabrik|vita");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "zest anchors|locator");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "brasseler");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "sybronendo");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "vdw");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "micro mega");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "fkg dentaire");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "brasseler komet|komet");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "mani");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "young dental|young innovations");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "zila");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "kor whitening");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "glo science");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "snow teeth whitening");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "auraglow");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "moon oral care");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "marvis");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "spry");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "xylimelts");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "risewell");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "boka");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "bite toothpaste bits");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "davids natural toothpaste");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "schmidt's");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "jason");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "jack n jill");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "firefly");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "dr fresh");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "reach");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "glide");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "gum soft picks");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "tepe");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "piksters");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "curaprox");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "interplak");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "ultreo");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "panasonic");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "fairywill");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "aquasonic");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "oclean");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "suri");  // 2026-11-04 · INBDE
board("Name a dental brand or company", 70, "smileactives");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 40, "extraoral radiograph");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 40, "intraoral radiograph");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 50, "hand wrist radiograph|hand wrist film");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 55, "arthrography|tmj arthrography");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 55, "scintigraphy|bone scan|technetium scan");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 55, "pet scan|pet ct");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 55, "lateral oblique|lateral oblique jaw radiograph");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 55, "lateral skull");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 50, "caldwell view");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 55, "transcranial view|transcranial radiograph");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 55, "transpharyngeal view");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 55, "transorbital view");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 55, "buccal object rule|slob rule|clark's rule|tube shift technique");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 50, "paralleling technique|long cone technique");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 50, "bisecting angle technique|bisecting technique");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 55, "localization radiograph");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 60, "d speed film|e speed film|f speed film");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 60, "ultrasonography");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 65, "thermography");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 65, "nuclear medicine");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 70, "fluoroscopy");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 65, "videofluoroscopy|modified barium swallow");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 65, "clinical photography");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 70, "qlf|quantitative light induced fluorescence");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 70, "near infrared transillumination|diagnocam");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 70, "fiber optic transillumination|foti");  // 2026-11-04 · INBDE
board("Name a type of dental X-ray or imaging", 70, "electrical caries monitor");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 45, "aggressive periodontitis|juvenile periodontitis|localized aggressive periodontitis");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 50, "necrotizing periodontitis");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 50, "avulsion|knocked out tooth");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 55, "root fracture|vertical root fracture");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 55, "internal resorption");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 55, "failed implant");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 55, "trauma from occlusion");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 55, "osteomyelitis");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 55, "bisphosphonates|mronj");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 55, "osteoradionecrosis");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "hyperparathyroidism|brown tumor");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "down syndrome");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "chediak higashi syndrome");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "cyclic neutropenia");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "agranulocytosis");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "leukemia");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "hypophosphatemic rickets|vitamin d resistant rickets");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "ehlers danlos syndrome");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "haim munk syndrome");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "scleroderma");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "dentin dysplasia");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "regional odontodysplasia");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "dentinogenesis imperfecta");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "amelogenesis imperfecta");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 60, "cleidocranial dysplasia");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 65, "ameloblastoma");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 65, "odontogenic keratocyst");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 65, "squamous cell carcinoma|oral cancer");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 65, "histiocytosis x|eosinophilic granuloma");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 65, "multiple myeloma");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 65, "osteosarcoma");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 65, "hiv periodontitis");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 65, "alcoholism|alcohol abuse");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 65, "eating disorders|anorexia");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 65, "gastroesophageal reflux|gerd");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 65, "tooth erosion");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 65, "crown fracture");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 70, "orthodontic treatment|orthodontic root resorption");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 70, "malnutrition");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 70, "poverty|lack of dental access");  // 2026-11-04 · INBDE
board("Name a cause of tooth loss", 70, "dental anxiety|avoiding the dentist");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 40, "full veneer crown|full coverage crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 45, "partial veneer crown|partial coverage crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 50, "seven eighths crown|7/8 crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 50, "reverse three quarter crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 55, "polycarbonate crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 55, "open face stainless steel crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 55, "prefabricated crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 55, "pressed ceramic crown|pressed crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 55, "glass ceramic crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 55, "alumina crown|procera");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 55, "in ceram");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 60, "richmond crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 60, "davis crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 60, "dowel crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 60, "thimble crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 60, "abutment crown|retainer crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 60, "porcelain butt margin crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 60, "collarless metal ceramic crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 60, "gold alloy crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 60, "semi precious crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 60, "cast crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 65, "acrylic crown|acrylic temporary crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 65, "celluloid crown form");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 65, "bis acryl temporary crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 65, "veneered stainless steel crown|preveneered crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 70, "pinledge");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 70, "proximal half crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 70, "hybrid ceramic crown|resin nano ceramic crown");  // 2026-11-04 · INBDE
board("Name a type of dental crown", 70, "lava|cercon|bruxzir");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "class ii subdivision|subdivision");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "pseudo class iii");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "unilateral crossbite");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "bilateral crossbite");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "buccal crossbite|brodie bite");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "lingual crossbite");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "functional crossbite");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "skeletal crossbite");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "dental crossbite");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 45, "skeletal open bite");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "dental open bite");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 45, "skeletal class ii");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 45, "skeletal class iii");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "mandibular retrognathism|retrognathic mandible");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "maxillary protrusion");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 50, "maxillary deficiency|maxillary hypoplasia");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 55, "long face syndrome|vertical maxillary excess");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 55, "short face syndrome");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 55, "bimaxillary retrusion");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 55, "end to end bite");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 55, "tooth size discrepancy|bolton discrepancy");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 55, "ectopic canine");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 55, "infraocclusion|ankylosed primary molar");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 55, "curve of spee|deep curve of spee");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 55, "canted occlusal plane");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 55, "facial asymmetry|mandibular asymmetry");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 60, "cusp to cusp");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 60, "tipped teeth|tipping");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 60, "supraeruption|overeruption");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 60, "drifting");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 60, "thumb sucking malocclusion");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 65, "open contacts");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 65, "linguoversion|lingual version");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 65, "labioversion|labial version");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 65, "buccoversion");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 65, "infraversion");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 65, "supraversion");  // 2026-11-04 · INBDE
board("Name a type of malocclusion", 65, "torsiversion");  // 2026-11-04 · INBDE
board("Name a type of tooth", 59, "primary molar|deciduous molar|baby molar");  // 2026-11-04 · INBDE
board("Name a type of tooth", 60, "primary canine|deciduous canine");  // 2026-11-04 · INBDE
board("Name a type of tooth", 61, "primary incisor|deciduous incisor");  // 2026-11-04 · INBDE
board("Name a type of tooth", 62, "primary first molar");  // 2026-11-04 · INBDE
board("Name a type of tooth", 63, "primary second molar");  // 2026-11-04 · INBDE
board("Name a type of tooth", 63, "succedaneous tooth|successional tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 64, "nonsuccedaneous tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 65, "anterior tooth|anterior teeth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 66, "posterior tooth|posterior teeth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 67, "multirooted tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 68, "single rooted tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 69, "abutment tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 70, "ankylosed tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 70, "dead tooth|nonvital tooth|devitalized tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 71, "unerupted tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 72, "embedded tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 73, "retained primary tooth|over retained baby tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 74, "microdont|microdontia");  // 2026-11-04 · INBDE
board("Name a type of tooth", 75, "macrodont|macrodontia");  // 2026-11-04 · INBDE
board("Name a type of tooth", 76, "conical tooth|peg shaped tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 77, "carabelli cusp|cusp of carabelli");  // 2026-11-04 · INBDE
board("Name a type of tooth", 78, "supplemental tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 79, "rudimentary tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 80, "fused tooth|fusion");  // 2026-11-04 · INBDE
board("Name a type of tooth", 81, "geminated tooth|gemination");  // 2026-11-04 · INBDE
board("Name a type of tooth", 82, "concrescent tooth|concrescence");  // 2026-11-04 · INBDE
board("Name a type of tooth", 83, "dilacerated tooth|dilaceration");  // 2026-11-04 · INBDE
board("Name a type of tooth", 84, "bulbous tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 84, "shell tooth|shell teeth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 85, "rootless tooth|rootless teeth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 86, "pink tooth of mummery");  // 2026-11-04 · INBDE
board("Name a type of tooth", 87, "fluorosed tooth");  // 2026-11-04 · INBDE
board("Name a type of tooth", 88, "tetracycline stained tooth");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 45, "gingival recession");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 45, "aggressive periodontitis|localized aggressive periodontitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 45, "necrotizing ulcerative periodontitis|nup|necrotizing periodontitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 46, "pericoronal abscess|periodontal abscess");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 46, "irreversible pulpitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 46, "reversible pulpitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 46, "pulp necrosis|necrotic pulp");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 47, "apical periodontitis|symptomatic apical periodontitis|asymptomatic apical periodontitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 47, "condensing osteitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 47, "phoenix abscess");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 47, "cellulitis|facial cellulitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 48, "osteomyelitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 48, "vertical root fracture");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 48, "fractured tooth|broken tooth|chipped tooth");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 49, "avulsion|knocked out tooth");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 49, "luxation|intrusion|extrusion|lateral luxation");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 49, "concussion|subluxation");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 49, "primary herpetic gingivostomatitis|herpetic gingivostomatitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 50, "herpes zoster|shingles");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 50, "hand foot mouth");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 50, "irritation fibroma|fibroma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 50, "papilloma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 51, "hemangioma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 51, "lymphangioma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 51, "exostosis|buccal exostosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 51, "nasopalatine duct cyst|incisive canal cyst");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 52, "lateral periodontal cyst");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 52, "botryoid odontogenic cyst");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 52, "calcifying odontogenic cyst|gorlin cyst");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 52, "glandular odontogenic cyst");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 53, "residual cyst");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 53, "buccal bifurcation cyst");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 53, "eruption cyst|eruption hematoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 53, "traumatic bone cyst|simple bone cyst");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 54, "aneurysmal bone cyst");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 54, "stafne defect|static bone cyst");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 54, "focal cemento osseous dysplasia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 54, "periapical cemento osseous dysplasia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 55, "florid cemento osseous dysplasia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 55, "fibrous dysplasia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 55, "paget disease of bone");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 55, "central giant cell granuloma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 56, "odontoma|compound odontoma|complex odontoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 56, "adenomatoid odontogenic tumor");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 56, "calcifying epithelial odontogenic tumor|pindborg tumor");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 56, "ameloblastic fibroma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 57, "odontogenic myxoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 57, "cementoblastoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 57, "ossifying fibroma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 57, "osteosarcoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 57, "squamous cell carcinoma|oral squamous cell carcinoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 58, "verrucous carcinoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 58, "basal cell carcinoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 58, "melanoma|oral melanoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 58, "kaposi sarcoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 59, "lymphoma|burkitt lymphoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 59, "multiple myeloma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 59, "pleomorphic adenoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 59, "warthin tumor");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 60, "mucoepidermoid carcinoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 60, "adenoid cystic carcinoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 60, "acinic cell carcinoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 60, "polymorphous adenocarcinoma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 61, "necrotizing sialometaplasia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 61, "mumps|parotitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 61, "sialadenitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 61, "recurrent aphthous stomatitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 62, "erythema multiforme|stevens johnson syndrome");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 62, "lupus|discoid lupus");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 62, "bullous pemphigoid");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 62, "lichenoid reaction");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 63, "frictional keratosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 63, "nicotine stomatitis|smoker's palate");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 63, "leukoedema");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 63, "linea alba");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 63, "morsicatio buccarum|cheek biting");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 64, "traumatic ulcer");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 64, "denture stomatitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 64, "epulis fissuratum");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 64, "median rhomboid glossitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 65, "hairy leukoplakia|oral hairy leukoplakia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 65, "candidiasis|pseudomembranous candidiasis|erythematous candidiasis|hyperplastic candidiasis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 65, "actinic cheilitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 65, "exfoliative cheilitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 66, "cheilitis glandularis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 66, "macroglossia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 66, "microglossia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 66, "benign migratory glossitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 67, "atrophic glossitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 67, "amalgam tattoo");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 67, "melanotic macule");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 67, "physiologic pigmentation");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 68, "smoker's melanosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 68, "fordyce granules");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 68, "peripheral giant cell granuloma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 68, "peripheral ossifying fibroma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 69, "pregnancy gingivitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 69, "hereditary gingival fibromatosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 69, "desquamative gingivitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 70, "plasma cell gingivitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 70, "peri implantitis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 70, "peri implant mucositis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 70, "furcation involvement");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 70, "trauma from occlusion|occlusal trauma");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 71, "bone loss");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 71, "tooth mobility|loose tooth");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 71, "food impaction");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 71, "hypoplasia|enamel hypoplasia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 72, "hypomineralization");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 72, "hypocalcification");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 72, "regional odontodysplasia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 72, "dentin dysplasia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 73, "taurodontism");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 73, "dens invaginatus|dens in dente");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 73, "dens evaginatus");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 73, "talon cusp");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 74, "enamel pearl");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 74, "supernumerary teeth|hyperdontia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 74, "microdontia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 74, "macrodontia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 75, "pulp stones|denticles");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 75, "calcific metamorphosis|pulp canal obliteration");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 76, "cervical resorption");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 76, "cleidocranial dysplasia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 76, "ectodermal dysplasia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 77, "gardner syndrome");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 77, "basal cell nevus syndrome|gorlin syndrome");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 77, "pierre robin sequence");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 77, "treacher collins syndrome");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 78, "hemifacial microsomia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 78, "congenital syphilis|hutchinson incisors");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 78, "osteogenesis imperfecta");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 78, "hypophosphatasia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 79, "papillon lefevre");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 79, "trismus");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 79, "tmj dislocation");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 79, "tmj ankylosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 80, "myofascial pain");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 80, "disc displacement");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 80, "osteoarthritis of tmj");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 80, "trigeminal neuralgia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 81, "bell's palsy");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 81, "atypical odontalgia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 81, "dysgeusia|altered taste");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 81, "sialorrhea|excessive saliva");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 82, "oral submucous fibrosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 82, "proliferative verrucous leukoplakia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 82, "scarlet fever|strawberry tongue");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 83, "syphilis|chancre");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 83, "gonorrhea");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 83, "hpv");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 83, "tuberculosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 84, "histoplasmosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 84, "mucormycosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 84, "actinomycosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 84, "infectious mononucleosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 85, "cytomegalovirus");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 85, "crohn disease|pyostomatitis vegetans");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 85, "celiac disease");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 85, "addison disease");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 86, "neurofibromatosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 86, "tuberous sclerosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 86, "sturge weber syndrome");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 86, "hereditary hemorrhagic telangiectasia");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 87, "white sponge nevus");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 87, "smokeless tobacco keratosis|snuff pouch");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 87, "lead poisoning|burton line");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 87, "bisphosphonate osteonecrosis");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 88, "root caries");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 88, "recurrent caries|secondary caries");  // 2026-11-04 · INBDE
board("Name an oral or dental condition", 88, "arrested caries");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 50, "superior pharyngeal constrictor");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 50, "middle pharyngeal constrictor");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 50, "inferior pharyngeal constrictor");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 50, "intrinsic tongue muscles");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 55, "superior longitudinal");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 55, "inferior longitudinal");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 55, "transverse muscle of tongue");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 55, "vertical muscle of tongue");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 55, "levator labii superioris alaeque nasi");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 57, "depressor septi");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 58, "transverse arytenoid|oblique arytenoid|arytenoid");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 59, "aryepiglottic");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 60, "thyroepiglottic");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 61, "cricopharyngeus|upper esophageal sphincter");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 62, "anterior scalene");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 63, "middle scalene");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 64, "posterior scalene");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 65, "semispinalis capitis");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 66, "splenius cervicis");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 67, "longissimus capitis");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 68, "rectus capitis posterior major");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 69, "rectus capitis posterior minor");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 70, "obliquus capitis superior");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 71, "obliquus capitis inferior");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 72, "rectus capitis anterior");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 73, "rectus capitis lateralis");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 74, "inferior rectus");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 75, "medial rectus");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 76, "superior oblique");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 78, "inferior oblique");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 80, "depressor supercilii");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 81, "anterior auricular|superior auricular|posterior auricular");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 82, "epicranius|occipitofrontalis");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 83, "superior tarsal muscle|muller muscle");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 84, "ciliary muscle");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 85, "sphincter pupillae");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 86, "dilator pupillae");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 87, "infrahyoid muscles|strap muscles");  // 2026-11-04 · INBDE
board("Name a muscle of the head or neck", 88, "suprahyoid muscles");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 46, "lip biting");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 47, "pencil biting|biting objects");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 48, "pipe smoking|pipe stem");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 49, "cigar smoking");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 51, "sucking on cough drops|cough drops");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 51, "frequent sugar exposure");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 52, "drinking sweetened coffee|sweet tea");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 53, "fruit juice in bottle");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 54, "nursing to sleep|prolonged breastfeeding at night");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 55, "sippy cup with juice");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 55, "prolonged pacifier use|pacifier");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 56, "finger sucking");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 57, "lip sucking");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 60, "alcohol|heavy drinking");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 61, "binge drinking");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 62, "marijuana|cannabis");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 63, "cocaine use");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 63, "ecstasy|mdma");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 64, "heroin|opioid use");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 66, "sour candy|acidic candy");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 66, "citrus fruit|eating lemons");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 67, "kombucha");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 68, "sparkling water|carbonated water");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 69, "holding drinks in mouth|swishing soda");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 70, "brushing with hard toothbrush");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 70, "horizontal scrubbing");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 71, "abrasive toothpaste");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 72, "overbrushing");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 73, "flossing too hard");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 74, "toothpick use");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 74, "biting thread|holding pins in mouth|holding nails in teeth");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 76, "not replacing toothbrush");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 77, "not drinking water|dehydration");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 78, "not using fluoride");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 78, "skipping night brushing");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 79, "eating before bed|snacking at night");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 80, "chewing sunflower seeds|cracking seeds with teeth");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 81, "cracking nuts with teeth");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 82, "gum chewing with sugar|sugary gum");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 82, "tearing tape with teeth|tearing packages with teeth");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 83, "lollipops");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 84, "mints with sugar");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 85, "khat chewing|qat");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 86, "gutka");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 86, "bidi smoking");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 87, "hookah|water pipe");  // 2026-11-04 · INBDE
board("Name a habit that harms teeth", 88, "reverse smoking");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 46, "mucous retention cyst");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 47, "exostosis");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 48, "lymphangioma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 48, "vascular malformation");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 49, "varix|varicosity|lingual varicosities");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 49, "venous lake");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 50, "leukoedema");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 50, "frictional keratosis");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 51, "smokeless tobacco keratosis");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 51, "proliferative verrucous leukoplakia");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 52, "speckled leukoplakia|erythroleukoplakia");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 52, "carcinoma in situ");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 52, "epithelial dysplasia");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 53, "basal cell carcinoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 53, "lymphoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 54, "osteosarcoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 54, "chondrosarcoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 55, "metastatic tumor");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 55, "leukemic infiltrate");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 56, "plasmacytoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 56, "rhabdomyosarcoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 57, "giant cell fibroma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 57, "peripheral odontogenic fibroma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 58, "parulis|gum boil");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 59, "abscess");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 59, "aphthous major|major aphthous ulcer");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 59, "herpetiform aphthae");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 60, "herpes zoster lesions");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 60, "primary herpetic gingivostomatitis");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 61, "recurrent intraoral herpes");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 61, "syphilitic chancre|chancre");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 62, "mucous patch|condyloma latum");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 62, "gumma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 63, "tuberculous ulcer");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 63, "histoplasmosis ulcer");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 64, "deep fungal infection");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 64, "erythematous candidiasis");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 65, "hyperplastic candidiasis");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 66, "lichenoid lesion");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 66, "lupus erythematosus");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 67, "white sponge nevus");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 67, "geographic stomatitis");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 68, "traumatic neuroma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 69, "palisaded encapsulated neuroma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 69, "mucosal neuroma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 70, "congenital epulis");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 71, "melanotic neuroectodermal tumor of infancy");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 71, "dental lamina cyst");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 72, "gingival cyst");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 72, "nasolabial cyst");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 73, "nasopalatine duct cyst");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 73, "dermoid cyst");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 74, "epidermoid cyst");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 74, "thyroglossal duct cyst");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 74, "lingual thyroid");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 75, "warthin tumor");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 75, "canalicular adenoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 76, "basal cell adenoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 76, "acinic cell carcinoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 77, "polymorphous adenocarcinoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 77, "mucous escape reaction");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 78, "oral melanoacanthoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 78, "smoker's melanosis");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 79, "drug induced pigmentation");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 79, "oral focal mucinosis");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 80, "verruciform xanthoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 80, "multifocal epithelial hyperplasia|heck disease");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 81, "focal epithelial hyperplasia");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 81, "ossifying fibroma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 81, "central giant cell granuloma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 82, "keratoacanthoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 82, "inflammatory papillary hyperplasia");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 84, "leiomyoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 84, "rhabdomyoma");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 85, "hereditary hemorrhagic telangiectasia|telangiectasia");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 85, "ulcer|oral ulcer");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 86, "blister|bulla|vesicle");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 86, "nodule");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 87, "plaque");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 87, "macule");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 88, "papule");  // 2026-11-04 · INBDE
board("Name an oral lesion or growth", 88, "ecchymosis|bruise");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 45, "crown screw|prosthetic screw");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 46, "retaining screw");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 47, "implant shoulder");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 48, "implant neck");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 49, "apex|implant apex");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 50, "apical portion");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 51, "crestal module");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 52, "implant surface|sla surface|sandblasted acid etched surface");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 53, "hydroxyapatite coating");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 54, "titanium plasma spray");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 55, "machined surface");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 56, "microthreads");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 57, "self tapping threads");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 58, "cutting flutes");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 59, "platform switching");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 60, "anti rotational feature");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 61, "tri channel|trilobe");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 62, "conical connection");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 63, "tissue level implant");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 64, "bone level implant");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 65, "one piece implant");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 66, "two piece implant");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 67, "transmucosal abutment");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 68, "ucla abutment|castable abutment");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 69, "zirconia abutment");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 70, "titanium abutment");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 71, "prepable abutment");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 72, "temporary abutment");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 73, "transfer coping");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 74, "open tray coping|pick up coping");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 75, "closed tray coping");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 76, "access hole|screw access channel");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 77, "screw access filling|teflon tape|ptfe tape");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 78, "composite plug");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 79, "cement");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 80, "o ring");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 81, "housing|metal housing");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 82, "nylon insert|locator insert");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 83, "hader bar|bar clip");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 84, "dolder bar");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 85, "magnet attachment");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 86, "implant mount|fixture mount");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 87, "peri implant mucosa");  // 2026-11-04 · INBDE
board("Name a part of a dental implant", 88, "grade 4 titanium|grade 5 titanium|titanium alloy|ti6al4v");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 45, "surgical extraction");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 46, "simple extraction");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 47, "incisional biopsy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 47, "excisional biopsy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 48, "brush biopsy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 48, "fine needle aspiration");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 49, "marsupialization");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 49, "enucleation");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 50, "curettage");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 50, "decompression");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 51, "peripheral ostectomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 52, "marginal mandibulectomy|segmental mandibulectomy|mandibulectomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 52, "maxillectomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 53, "glossectomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 53, "neck dissection");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 54, "sagittal split osteotomy|bilateral sagittal split osteotomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 54, "le fort ii");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 55, "le fort iii");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 55, "segmental osteotomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 56, "surgically assisted rapid palatal expansion|sarpe");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 56, "mandibular advancement");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 57, "maxillary advancement");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 58, "maxillomandibular advancement|mma");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 58, "vertical ramus osteotomy|ivro");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 59, "condylectomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 59, "tmj replacement|total joint replacement");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 60, "discectomy|disc repositioning");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 60, "open reduction internal fixation|orif");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 61, "closed reduction");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 61, "maxillomandibular fixation|mmf|wiring jaw shut");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 62, "arch bars");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 62, "zygoma fracture repair");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 63, "orbital floor repair");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 64, "nasal fracture reduction");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 64, "mandible fracture repair");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 65, "reduction of tmj dislocation");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 65, "block graft");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 66, "autogenous bone graft");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 66, "allograft");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 67, "xenograft");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 67, "guided bone regeneration");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 68, "ridge split");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 68, "onlay graft");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 69, "iliac crest graft");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 69, "lateral window sinus lift");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 70, "osteotome sinus lift|crestal sinus lift");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 71, "implant removal");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 71, "immediate implant");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 72, "sinus closure|oroantral fistula repair|oroantral communication closure");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 72, "caldwell luc");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 73, "salivary gland excision|parotidectomy|submandibular gland excision");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 73, "ranula excision");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 74, "mucocele excision");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 74, "fibroma excision");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 75, "lesion excision");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 75, "tooth reimplantation");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 76, "autotransplantation|tooth transplantation");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 77, "intentional replantation");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 77, "hemisection");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 78, "root amputation");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 78, "crown lengthening");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 79, "gingivectomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 79, "flap surgery");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 80, "alveolectomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 80, "tuberosity reduction");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 81, "frenuloplasty");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 81, "cleft alveolar bone graft");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 82, "pharyngeal flap");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 83, "tracheostomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 83, "cricothyrotomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 84, "sequestrectomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 84, "debridement");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 85, "laser surgery");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 85, "botox injections|botulinum toxin");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 86, "fat grafting");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 86, "rhinoplasty");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 87, "blepharoplasty");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 87, "facelift|rhytidectomy");  // 2026-11-04 · INBDE
board("Name an oral surgery procedure", 88, "chin implant");  // 2026-11-04 · INBDE
board("Name a dental instrument", 45, "mouth prop");  // 2026-11-04 · INBDE
board("Name a dental instrument", 45, "nabers probe|furcation probe");  // 2026-11-04 · INBDE
board("Name a dental instrument", 46, "universal curette");  // 2026-11-04 · INBDE
board("Name a dental instrument", 46, "columbia curette");  // 2026-11-04 · INBDE
board("Name a dental instrument", 46, "area specific curette");  // 2026-11-04 · INBDE
board("Name a dental instrument", 47, "langer curette");  // 2026-11-04 · INBDE
board("Name a dental instrument", 47, "after five curette|mini five");  // 2026-11-04 · INBDE
board("Name a dental instrument", 47, "jacquette scaler");  // 2026-11-04 · INBDE
board("Name a dental instrument", 47, "file scaler");  // 2026-11-04 · INBDE
board("Name a dental instrument", 48, "piezoelectric scaler|piezo");  // 2026-11-04 · INBDE
board("Name a dental instrument", 48, "sonic scaler");  // 2026-11-04 · INBDE
board("Name a dental instrument", 48, "air polisher|prophy jet");  // 2026-11-04 · INBDE
board("Name a dental instrument", 49, "ultrasonic insert");  // 2026-11-04 · INBDE
board("Name a dental instrument", 49, "shepherd's hook|11/12 explorer|odu 11/12");  // 2026-11-04 · INBDE
board("Name a dental instrument", 49, "cowhorn explorer|pigtail explorer");  // 2026-11-04 · INBDE
board("Name a dental instrument", 50, "plastic filling instrument|pfi");  // 2026-11-04 · INBDE
board("Name a dental instrument", 50, "ball burnisher");  // 2026-11-04 · INBDE
board("Name a dental instrument", 51, "beavertail burnisher");  // 2026-11-04 · INBDE
board("Name a dental instrument", 51, "enamel hatchet");  // 2026-11-04 · INBDE
board("Name a dental instrument", 51, "gingival margin trimmer");  // 2026-11-04 · INBDE
board("Name a dental instrument", 52, "hoe");  // 2026-11-04 · INBDE
board("Name a dental instrument", 52, "angle former");  // 2026-11-04 · INBDE
board("Name a dental instrument", 52, "wedelstaedt chisel");  // 2026-11-04 · INBDE
board("Name a dental instrument", 52, "binangle chisel");  // 2026-11-04 · INBDE
board("Name a dental instrument", 53, "interproximal carver");  // 2026-11-04 · INBDE
board("Name a dental instrument", 53, "amalgam well");  // 2026-11-04 · INBDE
board("Name a dental instrument", 54, "amalgamator|triturator");  // 2026-11-04 · INBDE
board("Name a dental instrument", 54, "composite gun");  // 2026-11-04 · INBDE
board("Name a dental instrument", 54, "matrix retainer");  // 2026-11-04 · INBDE
board("Name a dental instrument", 55, "sectional matrix");  // 2026-11-04 · INBDE
board("Name a dental instrument", 55, "bitewing holder|rinn holder|xcp");  // 2026-11-04 · INBDE
board("Name a dental instrument", 55, "high speed handpiece");  // 2026-11-04 · INBDE
board("Name a dental instrument", 56, "slow speed handpiece|low speed handpiece");  // 2026-11-04 · INBDE
board("Name a dental instrument", 56, "contra angle");  // 2026-11-04 · INBDE
board("Name a dental instrument", 56, "straight handpiece");  // 2026-11-04 · INBDE
board("Name a dental instrument", 57, "electric handpiece");  // 2026-11-04 · INBDE
board("Name a dental instrument", 57, "surgical handpiece");  // 2026-11-04 · INBDE
board("Name a dental instrument", 57, "diamond bur");  // 2026-11-04 · INBDE
board("Name a dental instrument", 57, "carbide bur");  // 2026-11-04 · INBDE
board("Name a dental instrument", 58, "round bur");  // 2026-11-04 · INBDE
board("Name a dental instrument", 58, "inverted cone bur");  // 2026-11-04 · INBDE
board("Name a dental instrument", 58, "pear bur|330 bur");  // 2026-11-04 · INBDE
board("Name a dental instrument", 59, "fissure bur");  // 2026-11-04 · INBDE
board("Name a dental instrument", 59, "finishing bur");  // 2026-11-04 · INBDE
board("Name a dental instrument", 59, "surgical bur");  // 2026-11-04 · INBDE
board("Name a dental instrument", 60, "lindemann bur");  // 2026-11-04 · INBDE
board("Name a dental instrument", 60, "polishing cup|prophy cup");  // 2026-11-04 · INBDE
board("Name a dental instrument", 60, "polishing disc|sof lex");  // 2026-11-04 · INBDE
board("Name a dental instrument", 61, "polishing strip");  // 2026-11-04 · INBDE
board("Name a dental instrument", 61, "abrasive strip");  // 2026-11-04 · INBDE
board("Name a dental instrument", 61, "finishing strip");  // 2026-11-04 · INBDE
board("Name a dental instrument", 62, "dappen dish");  // 2026-11-04 · INBDE
board("Name a dental instrument", 62, "mixing pad");  // 2026-11-04 · INBDE
board("Name a dental instrument", 62, "mixing bowl");  // 2026-11-04 · INBDE
board("Name a dental instrument", 62, "alginate spatula");  // 2026-11-04 · INBDE
board("Name a dental instrument", 63, "vibrator|lab vibrator");  // 2026-11-04 · INBDE
board("Name a dental instrument", 63, "bunsen burner");  // 2026-11-04 · INBDE
board("Name a dental instrument", 63, "wax spatula");  // 2026-11-04 · INBDE
board("Name a dental instrument", 64, "pkt instruments");  // 2026-11-04 · INBDE
board("Name a dental instrument", 64, "face bow");  // 2026-11-04 · INBDE
board("Name a dental instrument", 64, "shade guide");  // 2026-11-04 · INBDE
board("Name a dental instrument", 65, "caliper");  // 2026-11-04 · INBDE
board("Name a dental instrument", 65, "boley gauge");  // 2026-11-04 · INBDE
board("Name a dental instrument", 65, "dividers");  // 2026-11-04 · INBDE
board("Name a dental instrument", 66, "crown scissors");  // 2026-11-04 · INBDE
board("Name a dental instrument", 66, "suture scissors");  // 2026-11-04 · INBDE
board("Name a dental instrument", 66, "tissue forceps|adson forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 66, "allis forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 67, "mosquito forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 67, "kelly forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 67, "tongue retractor");  // 2026-11-04 · INBDE
board("Name a dental instrument", 68, "lip retractor");  // 2026-11-04 · INBDE
board("Name a dental instrument", 68, "aspirator tip|yankauer");  // 2026-11-04 · INBDE
board("Name a dental instrument", 68, "surgical suction|frazier suction");  // 2026-11-04 · INBDE
board("Name a dental instrument", 69, "molt mouth gag");  // 2026-11-04 · INBDE
board("Name a dental instrument", 69, "potts elevator");  // 2026-11-04 · INBDE
board("Name a dental instrument", 69, "root tip pick");  // 2026-11-04 · INBDE
board("Name a dental instrument", 70, "apical elevator");  // 2026-11-04 · INBDE
board("Name a dental instrument", 70, "150 forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 70, "151 forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 71, "23 forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 71, "88r forceps|88l forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 71, "53r forceps|53l forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 71, "10s forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 72, "ash forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 72, "bayonet forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 72, "universal forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 73, "physics forceps");  // 2026-11-04 · INBDE
board("Name a dental instrument", 73, "bone rongeur");  // 2026-11-04 · INBDE
board("Name a dental instrument", 73, "bone chisel|osteotome");  // 2026-11-04 · INBDE
board("Name a dental instrument", 74, "mallet");  // 2026-11-04 · INBDE
board("Name a dental instrument", 74, "bone curette");  // 2026-11-04 · INBDE
board("Name a dental instrument", 75, "austin retractor");  // 2026-11-04 · INBDE
board("Name a dental instrument", 75, "obwegeser retractor");  // 2026-11-04 · INBDE
board("Name a dental instrument", 76, "weider retractor");  // 2026-11-04 · INBDE
board("Name a dental instrument", 76, "sweetheart retractor");  // 2026-11-04 · INBDE
board("Name a dental instrument", 76, "endodontic explorer|dg16");  // 2026-11-04 · INBDE
board("Name a dental instrument", 76, "endo spoon");  // 2026-11-04 · INBDE
board("Name a dental instrument", 77, "glick 1");  // 2026-11-04 · INBDE
board("Name a dental instrument", 77, "hedstrom file");  // 2026-11-04 · INBDE
board("Name a dental instrument", 77, "reamer");  // 2026-11-04 · INBDE
board("Name a dental instrument", 78, "stainless steel file");  // 2026-11-04 · INBDE
board("Name a dental instrument", 78, "nickel titanium file|niti file");  // 2026-11-04 · INBDE
board("Name a dental instrument", 78, "protaper");  // 2026-11-04 · INBDE
board("Name a dental instrument", 79, "waveone");  // 2026-11-04 · INBDE
board("Name a dental instrument", 79, "reciproc");  // 2026-11-04 · INBDE
board("Name a dental instrument", 79, "endo motor");  // 2026-11-04 · INBDE
board("Name a dental instrument", 80, "electric pulp tester|ept|pulp tester|vitality tester");  // 2026-11-04 · INBDE
board("Name a dental instrument", 80, "endo ice|cold test");  // 2026-11-04 · INBDE
board("Name a dental instrument", 80, "warm vertical condensation|system b");  // 2026-11-04 · INBDE
board("Name a dental instrument", 81, "obturation gun|obtura");  // 2026-11-04 · INBDE
board("Name a dental instrument", 81, "finger spreader");  // 2026-11-04 · INBDE
board("Name a dental instrument", 81, "finger plugger");  // 2026-11-04 · INBDE
board("Name a dental instrument", 81, "endodontic ruler");  // 2026-11-04 · INBDE
board("Name a dental instrument", 82, "endo ring");  // 2026-11-04 · INBDE
board("Name a dental instrument", 82, "paper points");  // 2026-11-04 · INBDE
board("Name a dental instrument", 82, "microscope|dental operating microscope");  // 2026-11-04 · INBDE
board("Name a dental instrument", 83, "loupes");  // 2026-11-04 · INBDE
board("Name a dental instrument", 83, "headlamp");  // 2026-11-04 · INBDE
board("Name a dental instrument", 83, "laser");  // 2026-11-04 · INBDE
board("Name a dental instrument", 84, "electrosurge|electrocautery");  // 2026-11-04 · INBDE
board("Name a dental instrument", 84, "piezosurgery");  // 2026-11-04 · INBDE
board("Name a dental instrument", 84, "implant motor");  // 2026-11-04 · INBDE
board("Name a dental instrument", 85, "torque driver");  // 2026-11-04 · INBDE
board("Name a dental instrument", 85, "orthodontic pliers");  // 2026-11-04 · INBDE
board("Name a dental instrument", 85, "bird beak pliers|how pliers|weingart pliers");  // 2026-11-04 · INBDE
board("Name a dental instrument", 86, "ligature cutter|distal end cutter");  // 2026-11-04 · INBDE
board("Name a dental instrument", 86, "bracket tweezers");  // 2026-11-04 · INBDE
board("Name a dental instrument", 86, "band pusher");  // 2026-11-04 · INBDE
board("Name a dental instrument", 86, "band seater|bite stick");  // 2026-11-04 · INBDE
board("Name a dental instrument", 87, "bracket height gauge");  // 2026-11-04 · INBDE
board("Name a dental instrument", 87, "band remover");  // 2026-11-04 · INBDE
board("Name a dental instrument", 87, "bracket remover|debonding pliers");  // 2026-11-04 · INBDE
board("Name a dental instrument", 88, "crown and collar scissors");  // 2026-11-04 · INBDE
board("Name a dental instrument", 88, "tongue depressor");  // 2026-11-04 · INBDE
board("Name a dental material", 45, "high copper amalgam");  // 2026-11-04 · INBDE
board("Name a dental material", 46, "admixed amalgam");  // 2026-11-04 · INBDE
board("Name a dental material", 46, "spherical amalgam");  // 2026-11-04 · INBDE
board("Name a dental material", 46, "lathe cut amalgam");  // 2026-11-04 · INBDE
board("Name a dental material", 47, "gallium alloy");  // 2026-11-04 · INBDE
board("Name a dental material", 47, "microhybrid composite");  // 2026-11-04 · INBDE
board("Name a dental material", 47, "nanofill composite");  // 2026-11-04 · INBDE
board("Name a dental material", 48, "packable composite");  // 2026-11-04 · INBDE
board("Name a dental material", 48, "macrofill composite");  // 2026-11-04 · INBDE
board("Name a dental material", 48, "giomer");  // 2026-11-04 · INBDE
board("Name a dental material", 49, "ormocer");  // 2026-11-04 · INBDE
board("Name a dental material", 49, "silorane");  // 2026-11-04 · INBDE
board("Name a dental material", 49, "self etch adhesive|self etch primer");  // 2026-11-04 · INBDE
board("Name a dental material", 50, "total etch|etch and rinse");  // 2026-11-04 · INBDE
board("Name a dental material", 50, "universal adhesive");  // 2026-11-04 · INBDE
board("Name a dental material", 50, "primer");  // 2026-11-04 · INBDE
board("Name a dental material", 51, "hema");  // 2026-11-04 · INBDE
board("Name a dental material", 51, "glutaraldehyde|gluma");  // 2026-11-04 · INBDE
board("Name a dental material", 51, "desensitizer");  // 2026-11-04 · INBDE
board("Name a dental material", 52, "cavity liner");  // 2026-11-04 · INBDE
board("Name a dental material", 52, "cavity varnish|copalite");  // 2026-11-04 · INBDE
board("Name a dental material", 52, "base");  // 2026-11-04 · INBDE
board("Name a dental material", 53, "polycarboxylate cement");  // 2026-11-04 · INBDE
board("Name a dental material", 53, "self adhesive resin cement");  // 2026-11-04 · INBDE
board("Name a dental material", 53, "dual cure cement");  // 2026-11-04 · INBDE
board("Name a dental material", 54, "glass ceramic");  // 2026-11-04 · INBDE
board("Name a dental material", 54, "leucite reinforced ceramic");  // 2026-11-04 · INBDE
board("Name a dental material", 54, "alumina");  // 2026-11-04 · INBDE
board("Name a dental material", 55, "hybrid ceramic|polymer infiltrated ceramic network");  // 2026-11-04 · INBDE
board("Name a dental material", 55, "resin nano ceramic");  // 2026-11-04 · INBDE
board("Name a dental material", 56, "base metal alloy");  // 2026-11-04 · INBDE
board("Name a dental material", 56, "noble metal alloy");  // 2026-11-04 · INBDE
board("Name a dental material", 57, "high noble alloy");  // 2026-11-04 · INBDE
board("Name a dental material", 57, "type iii gold");  // 2026-11-04 · INBDE
board("Name a dental material", 57, "type iv gold");  // 2026-11-04 · INBDE
board("Name a dental material", 58, "nickel chromium");  // 2026-11-04 · INBDE
board("Name a dental material", 58, "beryllium");  // 2026-11-04 · INBDE
board("Name a dental material", 58, "titanium alloy");  // 2026-11-04 · INBDE
board("Name a dental material", 59, "tma|beta titanium");  // 2026-11-04 · INBDE
board("Name a dental material", 59, "copper niti");  // 2026-11-04 · INBDE
board("Name a dental material", 59, "stainless steel wire");  // 2026-11-04 · INBDE
board("Name a dental material", 60, "elgiloy");  // 2026-11-04 · INBDE
board("Name a dental material", 60, "elastic|elastomeric");  // 2026-11-04 · INBDE
board("Name a dental material", 60, "rubber dam material|latex");  // 2026-11-04 · INBDE
board("Name a dental material", 61, "investment|gypsum bonded investment|phosphate bonded investment");  // 2026-11-04 · INBDE
board("Name a dental material", 61, "die stone");  // 2026-11-04 · INBDE
board("Name a dental material", 61, "type iv stone|type v stone");  // 2026-11-04 · INBDE
board("Name a dental material", 62, "impression plaster");  // 2026-11-04 · INBDE
board("Name a dental material", 63, "condensation silicone");  // 2026-11-04 · INBDE
board("Name a dental material", 64, "polysulfide|rubber base");  // 2026-11-04 · INBDE
board("Name a dental material", 64, "zinc oxide eugenol impression paste");  // 2026-11-04 · INBDE
board("Name a dental material", 64, "tray material");  // 2026-11-04 · INBDE
board("Name a dental material", 65, "custom tray acrylic");  // 2026-11-04 · INBDE
board("Name a dental material", 65, "self cure acrylic|cold cure acrylic");  // 2026-11-04 · INBDE
board("Name a dental material", 65, "heat cure acrylic");  // 2026-11-04 · INBDE
board("Name a dental material", 66, "denture base resin");  // 2026-11-04 · INBDE
board("Name a dental material", 66, "denture teeth");  // 2026-11-04 · INBDE
board("Name a dental material", 66, "soft liner|tissue conditioner");  // 2026-11-04 · INBDE
board("Name a dental material", 67, "hard reline");  // 2026-11-04 · INBDE
board("Name a dental material", 67, "baseplate wax");  // 2026-11-04 · INBDE
board("Name a dental material", 67, "inlay wax");  // 2026-11-04 · INBDE
board("Name a dental material", 68, "casting wax");  // 2026-11-04 · INBDE
board("Name a dental material", 68, "sticky wax");  // 2026-11-04 · INBDE
board("Name a dental material", 68, "utility wax");  // 2026-11-04 · INBDE
board("Name a dental material", 69, "boxing wax");  // 2026-11-04 · INBDE
board("Name a dental material", 69, "carding wax");  // 2026-11-04 · INBDE
board("Name a dental material", 69, "flux");  // 2026-11-04 · INBDE
board("Name a dental material", 70, "solder");  // 2026-11-04 · INBDE
board("Name a dental material", 70, "separating medium");  // 2026-11-04 · INBDE
board("Name a dental material", 70, "pumice slurry");  // 2026-11-04 · INBDE
board("Name a dental material", 71, "polishing paste");  // 2026-11-04 · INBDE
board("Name a dental material", 71, "diamond paste");  // 2026-11-04 · INBDE
board("Name a dental material", 71, "aluminum oxide");  // 2026-11-04 · INBDE
board("Name a dental material", 72, "silica");  // 2026-11-04 · INBDE
board("Name a dental material", 72, "barium glass");  // 2026-11-04 · INBDE
board("Name a dental material", 72, "camphorquinone");  // 2026-11-04 · INBDE
board("Name a dental material", 73, "photoinitiator");  // 2026-11-04 · INBDE
board("Name a dental material", 73, "tegdma");  // 2026-11-04 · INBDE
board("Name a dental material", 73, "udma");  // 2026-11-04 · INBDE
board("Name a dental material", 74, "monomer");  // 2026-11-04 · INBDE
board("Name a dental material", 74, "methyl methacrylate|mma");  // 2026-11-04 · INBDE
board("Name a dental material", 74, "eugenol");  // 2026-11-04 · INBDE
board("Name a dental material", 75, "calcium silicate cement");  // 2026-11-04 · INBDE
board("Name a dental material", 75, "theracal");  // 2026-11-04 · INBDE
board("Name a dental material", 75, "portland cement");  // 2026-11-04 · INBDE
board("Name a dental material", 76, "resilon");  // 2026-11-04 · INBDE
board("Name a dental material", 76, "ah plus|epoxy resin sealer");  // 2026-11-04 · INBDE
board("Name a dental material", 76, "root canal sealer");  // 2026-11-04 · INBDE
board("Name a dental material", 77, "grossman sealer");  // 2026-11-04 · INBDE
board("Name a dental material", 77, "bc sealer|bioceramic sealer");  // 2026-11-04 · INBDE
board("Name a dental material", 78, "calcium hydroxide paste");  // 2026-11-04 · INBDE
board("Name a dental material", 78, "triple antibiotic paste");  // 2026-11-04 · INBDE
board("Name a dental material", 78, "ledermix");  // 2026-11-04 · INBDE
board("Name a dental material", 79, "iodoform paste|vitapex|kri paste");  // 2026-11-04 · INBDE
board("Name a dental material", 79, "zinc oxide|zno");  // 2026-11-04 · INBDE
board("Name a dental material", 79, "stannous fluoride");  // 2026-11-04 · INBDE
board("Name a dental material", 80, "sodium fluoride");  // 2026-11-04 · INBDE
board("Name a dental material", 80, "apf|acidulated phosphate fluoride");  // 2026-11-04 · INBDE
board("Name a dental material", 80, "fluoride gel");  // 2026-11-04 · INBDE
board("Name a dental material", 81, "cpp acp");  // 2026-11-04 · INBDE
board("Name a dental material", 81, "bioactive glass");  // 2026-11-04 · INBDE
board("Name a dental material", 81, "resin infiltration|icon");  // 2026-11-04 · INBDE
board("Name a dental material", 82, "fiber post|glass fiber post");  // 2026-11-04 · INBDE
board("Name a dental material", 82, "cast post");  // 2026-11-04 · INBDE
board("Name a dental material", 82, "prefabricated post");  // 2026-11-04 · INBDE
board("Name a dental material", 83, "core build up material");  // 2026-11-04 · INBDE
board("Name a dental material", 83, "composite core");  // 2026-11-04 · INBDE
board("Name a dental material", 83, "amalgam core");  // 2026-11-04 · INBDE
board("Name a dental material", 84, "retraction paste|expasyl");  // 2026-11-04 · INBDE
board("Name a dental material", 84, "hemostatic agent|aluminum chloride");  // 2026-11-04 · INBDE
board("Name a dental material", 84, "epinephrine cord");  // 2026-11-04 · INBDE
board("Name a dental material", 85, "gingival barrier");  // 2026-11-04 · INBDE
board("Name a dental material", 85, "surgicel|gelfoam|oxidized cellulose");  // 2026-11-04 · INBDE
board("Name a dental material", 85, "bone wax");  // 2026-11-04 · INBDE
board("Name a dental material", 86, "allograft");  // 2026-11-04 · INBDE
board("Name a dental material", 86, "xenograft|bio oss");  // 2026-11-04 · INBDE
board("Name a dental material", 86, "alloplast|beta tcp|tricalcium phosphate");  // 2026-11-04 · INBDE
board("Name a dental material", 87, "emdogain|enamel matrix derivative");  // 2026-11-04 · INBDE
board("Name a dental material", 87, "prgf|prp|platelet rich plasma");  // 2026-11-04 · INBDE
board("Name a dental material", 87, "suture material|silk suture|vicryl|chromic gut");  // 2026-11-04 · INBDE
board("Name a dental material", 88, "ptfe membrane|dptfe");  // 2026-11-04 · INBDE
board("Name a dental material", 88, "resorbable membrane");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 46, "maxillary arch|upper arch");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 47, "mandibular arch|lower arch");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 47, "dorsum of tongue");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 48, "ventral surface of tongue|underside of tongue");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 49, "tip of tongue|apex of tongue");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 50, "lateral border of tongue");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 50, "base of tongue");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 51, "lingual tonsil");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 53, "mucosa|oral mucosa");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 53, "masticatory mucosa");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 54, "lining mucosa");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 55, "specialized mucosa");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 56, "free gingiva|marginal gingiva");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 57, "gingival sulcus");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 57, "junctional epithelium");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 58, "alveolar mucosa");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 59, "keratinized gingiva");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 60, "gingival margin");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 60, "col");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 61, "labial mucosa");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 62, "oral cavity proper");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 63, "mucobuccal fold|vestibular fornix");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 64, "buccal frenum");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 66, "maxillary labial frenum");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 66, "mandibular labial frenum");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 67, "parotid papilla");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 68, "parotid gland");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 69, "submandibular gland");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 70, "sublingual gland");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 70, "minor salivary glands");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 71, "von ebner glands");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 72, "plica sublingualis");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 73, "median sulcus|median lingual sulcus");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 76, "tubercle of upper lip");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 77, "tonsillar fossa");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 78, "posterior pharyngeal wall");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 79, "median palatine raphe");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 82, "alveolar process");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 83, "alveolar bone");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 83, "retromolar triangle");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 84, "pterygomandibular fold");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 85, "external oblique ridge");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 86, "internal oblique ridge");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 86, "post dam|vibrating line");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 87, "lingual gingiva");  // 2026-11-04 · INBDE
board("Name a part of the mouth", 88, "palatal gingiva");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 47, "interim partial denture|treatment partial");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 47, "transitional denture");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 48, "single denture|single complete denture");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 49, "tooth supported overdenture");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 50, "implant supported fixed prosthesis");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 51, "kennedy class i partial|distal extension partial");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 52, "unilateral partial denture");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 53, "swing lock partial");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 53, "attachment retained partial");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 54, "rotational path partial");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 55, "copy denture|duplicate denture");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 56, "surgical obturator");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 57, "interim obturator");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 57, "definitive obturator");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 58, "feeding plate|feeding obturator");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 59, "nasoalveolar molding|nam");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 60, "surgical stent|surgical guide");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 60, "radiation stent|radiation carrier");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 61, "occlusal splint|occlusal guard|bite splint");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 62, "anterior repositioning splint");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 63, "michigan splint|stabilization splint");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 63, "nti");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 65, "space maintainer");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 66, "pediatric partial denture|pedo partial|groper appliance");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 67, "fixed movable bridge|stress breaker bridge");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 68, "spring cantilever bridge");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 69, "inlay bridge|inlay retained bridge");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 70, "fiber reinforced bridge");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 70, "pfm bridge");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 71, "gold bridge");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 72, "composite bridge");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 73, "all on 6");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 74, "teeth in a day");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 76, "cu sil denture");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 76, "soft denture|soft liner denture");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 77, "bps denture|biofunctional prosthetic system");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 78, "suction denture");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 80, "post crown");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 82, "endocrown");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 83, "facial prosthesis");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 83, "orbital prosthesis");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 84, "cranial prosthesis|cranial implant");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 85, "mandibular resection prosthesis|guide flange prosthesis");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 86, "palatal augmentation prosthesis");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 86, "tongue prosthesis");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 87, "lip plumper");  // 2026-11-04 · INBDE
board("Name a type of denture or dental prosthesis", 88, "cosmetic snap on teeth|snap on smile");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 46, "iced tea");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 46, "chai");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 48, "grape soda|orange soda");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 49, "red sauce|pasta sauce|ketchup");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 49, "soy|teriyaki sauce");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 50, "worcestershire sauce");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 51, "beet juice");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 52, "carrot juice");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 52, "blackcurrant|ribena");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 53, "raspberries");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 54, "mulberries");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 55, "acai bowl");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 55, "purple grapes|grapes");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 56, "plums");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 57, "red cabbage");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 58, "eggplant");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 58, "black olives");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 60, "berry smoothie");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 61, "cherry juice");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 62, "tomato juice");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 63, "v8");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 64, "bloody mary");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 64, "red wine vinegar");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 65, "port wine");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 66, "rose wine");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 66, "dark rum|cocktails");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 67, "whiskey|bourbon");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 68, "cocoa|hot chocolate");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 69, "chocolate");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 69, "licorice|black licorice");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 70, "blue candy|blue dye");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 71, "frosting|colored icing");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 72, "slushies|slurpee");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 73, "jello|gelatin");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 74, "candy with food dye");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 75, "turmeric latte|golden milk");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 75, "curry sauce");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 77, "chili");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 78, "harissa");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 78, "betel leaf|betel nut|paan");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 80, "marijuana smoking");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 81, "cigars");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 81, "soda with caramel coloring");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 82, "yerba mate");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 83, "earl grey");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 84, "herbal tea|hibiscus tea");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 84, "rooibos");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 85, "vinegar");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 86, "squid ink");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 87, "blue spirulina");  // 2026-11-04 · INBDE
board("Name a food or drink that stains teeth", 88, "cappuccino|latte");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 45, "reduced range of motion");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 46, "deflection on opening");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 47, "closed lock");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 48, "open lock");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 49, "disc displacement with reduction|reciprocal clicking");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 50, "disc displacement without reduction");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 51, "pain on palpation");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 52, "myofascial pain");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 53, "trigger points");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 54, "muscle tenderness");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 55, "toothache without cause|phantom toothache");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 57, "eye pain|pain behind the eyes");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 58, "vertigo");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 60, "hearing loss");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 62, "pain when talking");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 63, "pain when yawning");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 64, "pain when opening wide");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 65, "difficulty opening mouth");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 66, "jaw gets stuck");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 68, "asymmetric jaw movement");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 70, "posterior open bite");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 71, "anterior open bite");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 73, "facial swelling");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 74, "masseter hypertrophy|enlarged masseter");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 75, "cracked teeth");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 76, "scalloped tongue");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 78, "cheek ridging|linea alba");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 79, "throat pain|sore throat");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 80, "difficulty swallowing");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 81, "upper back pain");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 82, "shoulder tension");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 83, "fatigue");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 84, "tingling in face");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 85, "burning sensation");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 86, "dull ache");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 87, "sharp pain");  // 2026-11-04 · INBDE
board("Name a symptom of a TMJ disorder", 88, "chronic pain");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 45, "bleaching");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 46, "enamel loss");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 47, "soda|carbonated drinks");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 48, "citrus fruits");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 48, "wine");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 49, "sports drinks");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 50, "tooth wear|attrition");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 50, "abrasion");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 51, "toothbrush abrasion");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 52, "aggressive flossing");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 52, "periodontal surgery");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 53, "scaling and root planing|deep cleaning");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 53, "periodontal therapy");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 54, "root exposure");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 55, "cementum loss");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 55, "open dentinal tubules");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 56, "fractured filling");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 57, "leaking filling|microleakage");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 57, "composite shrinkage|polymerization shrinkage");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 58, "postoperative sensitivity");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 59, "deep filling");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 59, "amalgam filling|metal filling");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 60, "galvanic shock");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 62, "vertical root fracture");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 63, "chipped tooth");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 63, "tooth trauma");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 64, "orthodontic treatment|braces");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 65, "temporary crown");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 65, "crown preparation");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 66, "loose crown");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 66, "failing crown");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 67, "root canal needed");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 68, "reversible pulpitis");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 68, "irreversible pulpitis");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 69, "dying nerve|pulp necrosis");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 70, "pericoronitis");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 70, "wisdom tooth eruption");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 71, "clenching");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 72, "parafunction");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 72, "occlusal trauma");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 73, "maxillary sinusitis");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 74, "cold weather");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 74, "hot foods");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 75, "cold drinks|ice cream");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 76, "vomiting");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 78, "frequent swimming|chlorine");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 78, "tartar control toothpaste");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 79, "alcohol mouthwash");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 80, "hydrogen peroxide");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 80, "smoking");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 81, "dry mouth");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 81, "dentinogenesis imperfecta");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 82, "amelogenesis imperfecta");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 83, "enamel hypoplasia");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 83, "molar incisor hypomineralization|mih");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 84, "fluorosis");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 85, "cervical lesions");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 86, "root caries");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 87, "gingivitis");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 87, "referred pain");  // 2026-11-04 · INBDE
board("Name a cause of tooth sensitivity", 88, "barodontalgia|altitude change|scuba diving");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 46, "edward hartley angle|father of orthodontics");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 47, "alfred civilion fones|father of dental hygiene");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 47, "irene newman|first dental hygienist");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 48, "wilhelm roentgen|roentgen");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 49, "otto walkhoff");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 50, "gardner quincy colton");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 50, "william thomas green morton|w t g morton");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 51, "charles jackson");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 51, "crawford long");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 52, "alfred einhorn|novocaine inventor");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 53, "heinrich braun");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 53, "nils lofgren|lidocaine");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 54, "james beall morrison|foot treadle drill");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 54, "george f green|electric drill");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 55, "john borden|air turbine handpiece");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 55, "robert nelsen");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 56, "john walsh|high speed drill");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 57, "bernhard gottlieb");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 57, "harold loe");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 58, "sigmund socransky");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 58, "jens waerhaug");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 59, "per axelsson");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 60, "joseph muhler");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 61, "samuel stockton white|s s white");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 61, "claudius ash");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 62, "john tomes");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 62, "charles tomes");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 63, "james snell");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 64, "john hunter");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 64, "ambroise pare");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 65, "abulcasis|al zahrawi");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 65, "hippocrates");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 66, "aristotle");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 66, "galen");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 67, "bartolomeo eustachi|eustachius");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 68, "andreas vesalius");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 68, "philip pfaff");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 69, "nicolas dubois de chemant");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 69, "alexis duchateau");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 70, "charles goodyear");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 71, "thomas evans");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 71, "norman kingsley");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 72, "calvin case");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 72, "charles tweed");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 73, "lawrence andrews|straight wire appliance");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 73, "robert ricketts");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 74, "cecil steiner");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 75, "b holly broadbent|broadbent");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 75, "william proffit");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 76, "leonard linkow");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 76, "andre schroeder");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 78, "alan wilson|glass ionomer");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 78, "john mclean");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 79, "takao fusayama");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 79, "nakabayashi|hybrid layer");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 80, "mahmoud torabinejad|mta");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 80, "herbert schilder");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 81, "stephen cohen");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 82, "louis grossman");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 82, "edgar coolidge");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 83, "john ingle");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 83, "weston price");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 84, "emeline roberts jones|first female dentist practicing in us");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 85, "charles c bass|bass technique");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 86, "f w stillman");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 86, "w j charters");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 87, "hermann prinz");  // 2026-11-04 · INBDE
board("Name a famous person in dental history", 88, "oscar amoedo|father of forensic odontology");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 46, "in office bleaching|power bleaching");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 47, "at home whitening|tray whitening");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 47, "internal bleaching|walking bleach");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 48, "resin infiltration|icon");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 50, "edge bonding");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 40, "no prep veneers|minimal prep veneers|prepless veneers");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 53, "indirect composite veneers");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 54, "veneer replacement");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 54, "all ceramic crowns");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 55, "porcelain crowns");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 56, "emax crowns");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 57, "replace amalgam with composite|amalgam removal");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 58, "white fillings");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 58, "ceramic inlay");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 59, "cosmetic contouring");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 60, "recontouring");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 60, "macroabrasion");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 62, "gingivectomy");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 63, "gingivoplasty");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 65, "depigmentation|gum bleaching");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 66, "connective tissue graft");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 67, "pinhole surgery|chao technique");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 68, "lip repositioning");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 69, "black triangle closure");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 70, "implant supported crown");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 71, "bridge");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 72, "orthodontics");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 72, "clear braces|ceramic braces");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 73, "lingual braces");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 74, "accelerated orthodontics");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 75, "six month smiles|short term orthodontics");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 75, "smile design|digital smile design");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 76, "mock up|trial smile");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 77, "wax up");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 78, "orthognathic surgery|jaw surgery");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 79, "genioplasty");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 79, "chin augmentation");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 80, "dermal fillers");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 81, "facial esthetics");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 83, "tooth tattoos");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 83, "gold caps|gold teeth");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 84, "diamond tooth");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 85, "teeth filing|tooth filing");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 86, "full mouth rehabilitation");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 86, "denture makeover");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 87, "implant supported dentures");  // 2026-11-04 · INBDE
board("Name a cosmetic dental procedure", 88, "zirconia bridge");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 47, "dental hygiene assistant");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 48, "orthodontic assistant");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 48, "surgical assistant|oral surgery assistant");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 49, "chairside assistant");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 50, "lead assistant");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 50, "dental nurse");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 51, "oral health therapist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 52, "dental hygiene therapist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 52, "dental health aide therapist|dhat");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 53, "community dental health coordinator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 54, "oral and maxillofacial radiologist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 55, "oral pathologist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 56, "nurse anesthetist|crna");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 57, "registered nurse");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 57, "cosmetic dentist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 58, "implant dentist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 59, "dental resident");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 59, "dental student");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 60, "dental intern");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 61, "dental hygiene student");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 61, "denturist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 62, "dental ceramist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 63, "cad cam technician");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 63, "lab manager");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 65, "financial coordinator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 65, "billing coordinator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 66, "collections specialist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 66, "insurance biller");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 67, "patient coordinator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 68, "new patient coordinator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 68, "scheduling coordinator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 69, "call center agent");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 70, "regional manager");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 70, "clinical director");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 71, "practice administrator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 72, "chief dental officer");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 72, "dental consultant");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 73, "equipment technician|repair technician");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 74, "hr manager");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 74, "accountant|bookkeeper");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 75, "it specialist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 76, "social media manager");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 76, "translator|interpreter");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 77, "cleaner|cleaning staff");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 78, "volunteer");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 78, "dental educator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 79, "dental hygiene educator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 80, "public health dentist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 80, "forensic odontologist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 81, "dental photographer");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 81, "radiology technician|x ray tech");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 82, "sterilization coordinator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 83, "infection control coordinator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 83, "safety officer|osha coordinator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 84, "compliance coordinator");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 85, "credentialing specialist");  // 2026-11-04 · INBDE
board("Name a job in a dental office", 85, "recall coordinator");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 45, "dairy|dairy products");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 47, "kefir");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 48, "plain milk|cow's milk");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 48, "fortified soy milk|almond milk");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 49, "kale");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 49, "lettuce");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 50, "collard greens");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 50, "bok choy");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 51, "arugula");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 51, "swiss chard");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 52, "cauliflower");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 52, "brussels sprouts");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 53, "asparagus");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 53, "crunchy vegetables");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 54, "raw vegetables");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 55, "pears");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 56, "melon|watermelon");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 56, "cantaloupe");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 57, "banana");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 57, "cranberries|unsweetened cranberries");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 58, "cocoa nibs|cacao");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 58, "black tea");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 60, "cashews");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 60, "brazil nuts");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 61, "walnuts");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 61, "peanuts");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 62, "pistachios");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 63, "chia seeds");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 63, "sunflower seeds");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 64, "pumpkin seeds");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 64, "flax seeds");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 65, "quinoa");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 65, "whole grains");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 66, "brown rice");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 66, "oatmeal");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 67, "lean meat|beef");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 67, "turkey");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 68, "pork");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 68, "sardines");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 69, "tuna");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 69, "mackerel");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 70, "shrimp|shellfish");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 70, "oysters");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 71, "lentils");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 72, "chickpeas");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 72, "edamame");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 73, "avocado");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 73, "olive oil");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 74, "coconut oil");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 74, "ginger");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 75, "mint|parsley");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 75, "basil");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 76, "cloves");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 76, "cinnamon");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 77, "turmeric");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 77, "seaweed");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 78, "xylitol candy");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 79, "sugar free candy");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 80, "stevia");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 80, "vitamin d foods");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 81, "calcium rich foods");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 81, "phosphorus rich foods");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 82, "vitamin c foods");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 82, "fiber rich foods");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 83, "probiotics");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 83, "mushrooms");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 84, "tomatoes");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 84, "zucchini");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 85, "radishes");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 85, "jicama");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 86, "snap peas");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 70, "green beans");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 87, "hard boiled eggs");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 87, "peanut butter");  // 2026-11-04 · INBDE
board("Name a food that is good for your teeth", 88, "hummus");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 45, "sulcular brushing");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 46, "vertical technique");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 46, "horizontal technique");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 47, "roll technique");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 47, "smith bell technique|physiologic technique");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 48, "hand over hand flossing");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 49, "spool method|loop method");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 49, "wrap around method");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 50, "slide floss up and down");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 50, "hug each tooth");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 51, "use 18 inches of floss");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 51, "clean below the gumline");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 52, "floss once a day|floss daily");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 53, "brush after meals");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 53, "brush before bed");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 54, "wait 30 minutes after eating");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 54, "dont brush after acidic food");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 55, "gentle pressure|dont press too hard");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 56, "small circles");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 56, "short strokes");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 57, "pea sized amount");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 57, "rice sized smear for babies");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 58, "supervise children");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 59, "brush for 2 minutes");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 59, "divide into quadrants");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 60, "30 seconds per quadrant");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 60, "brush all surfaces");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 61, "brush the gumline");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 61, "brush the chewing surfaces");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 62, "brush inside surfaces");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 63, "vertical strokes for front teeth");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 63, "toothbrush at 45 degrees to gumline");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 64, "rinse toothbrush");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 64, "let toothbrush air dry");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 65, "store toothbrush upright");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 66, "dont share toothbrush");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 66, "replace after illness");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 67, "frayed bristles");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 67, "use a timer|two minute timer");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 68, "pressure sensor");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 69, "sonic toothbrush");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 69, "oscillating rotating brush");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 70, "use mouthwash");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 70, "use fluoride mouthwash");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 71, "dont rinse after brushing");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 72, "chew sugar free gum");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 72, "brush your gums");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 73, "clean around braces");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 73, "orthodontic flossing");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 74, "super floss for bridges");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 74, "clean under bridge");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 75, "clean implants");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 76, "denture brushing|clean dentures daily");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 76, "soak dentures overnight");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 77, "remove dentures at night");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 77, "single tufted brush");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 78, "floss picks");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 79, "waxed floss");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 79, "unwaxed floss");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 80, "dental tape");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 80, "ptfe floss|glide");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 81, "tongue cleaning");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 82, "disclosing tablets");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 82, "brush the back teeth");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 83, "start in the same place");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 83, "systematic brushing");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 84, "brush tongue back to front");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 84, "rubber tip stimulator");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 85, "toothpicks");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 86, "interdental cleaning");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 86, "soft toothbrush");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 87, "hold brush like a pencil");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 87, "brush with fluoride");  // 2026-11-04 · INBDE
board("Name a toothbrushing or flossing technique or tip", 88, "low abrasion toothpaste");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 45, "halitosis|oral malodor");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 45, "plaque");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 46, "tartar|calculus");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 46, "periodontitis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 47, "gingivitis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 47, "anug|trench mouth");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 48, "pericoronitis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 48, "peri implantitis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 49, "dry socket");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 49, "tooth extraction");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 50, "open contacts|food impaction");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 50, "leaky fillings");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 51, "ill fitting crowns");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 52, "retainers|aligners");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 52, "braces");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 53, "tongue piercing");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 53, "volatile sulfur compounds|hydrogen sulfide|methyl mercaptan");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 54, "anaerobic bacteria");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 55, "sjogren syndrome");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 56, "snoring");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 56, "sleep apnea");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 57, "tonsillitis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 58, "chronic sinusitis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 58, "nasal foreign body");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 59, "rhinitis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 59, "adenoiditis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 60, "pharyngitis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 60, "bronchitis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 61, "bronchiectasis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 61, "lung abscess");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 62, "pneumonia");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 62, "lung cancer");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 63, "tuberculosis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 63, "zenker diverticulum");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 64, "esophageal cancer");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 64, "achalasia");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 65, "hiatal hernia");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 65, "gastroparesis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 66, "stomach cancer");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 66, "small intestinal bacterial overgrowth|sibo");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 66, "constipation");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 67, "diabetic ketoacidosis|fruity breath");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 67, "uremia|ammonia breath|fishy breath");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 68, "cirrhosis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 69, "trimethylaminuria|fish odor syndrome");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 69, "ketosis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 70, "hunger");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 70, "skipping meals");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 71, "high protein diet");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 72, "cigarettes|tobacco");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 72, "cigars");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 73, "vaping");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 73, "cannabis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 74, "chewing tobacco");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 74, "spicy food");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 75, "curry");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 75, "cheese");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 76, "meat");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 76, "eggs");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 77, "canned fish|tuna");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 77, "sugar");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 78, "milk");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 78, "antihistamines");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 79, "antidepressants");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 79, "chemotherapy");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 80, "radiation therapy");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 80, "dimethyl sulfoxide");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 81, "disulfiram");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 81, "nitrates");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 82, "vitamin supplements");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 82, "stress");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 83, "menstruation");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 83, "pregnancy");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 84, "oral cancer");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 84, "necrotic tumor");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 85, "ulcers");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 85, "thrush|oral candidiasis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 86, "herpes");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 86, "mononucleosis");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 87, "scurvy");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 87, "poor flossing");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 88, "not brushing tongue");  // 2026-11-04 · INBDE
board("Name a cause of bad breath", 88, "psychogenic halitosis|halitophobia");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 45, "prophylaxis|prophy|dental prophylaxis");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 46, "calculus removal");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 48, "extraoral exam|head and neck exam");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 48, "intraoral exam");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 49, "lymph node palpation");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 49, "tmj exam");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 50, "soft tissue exam");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 51, "periodontal screening|psr");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 51, "bleeding on probing");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 52, "recession measurement");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 53, "mobility check");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 53, "furcation check");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 54, "caries detection");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 55, "hard tissue charting|dental charting");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 55, "update medications|medication review");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 56, "vital signs");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 57, "pulse");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 57, "consent");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 58, "patient greeting|seating the patient");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 58, "bib|patient napkin");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 59, "protective eyewear");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 62, "review x rays");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 63, "treatment plan");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 64, "discuss findings");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 66, "nutritional counseling");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 66, "tobacco cessation counseling");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 67, "desensitizer");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 69, "local anesthesia");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 69, "topical anesthetic");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 70, "irrigation");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 71, "suction");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 71, "calculus detection");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 72, "deplaquing");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 73, "stain removal");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 75, "interdental cleaning");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 75, "subgingival scaling");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 76, "gross debridement|full mouth debridement");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 78, "arestin|local antibiotic");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 78, "recall interval");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 79, "checkout|payment");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 80, "insurance verification");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 80, "sterilize instruments");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 81, "set up the room");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 82, "disinfect the room");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 82, "chart notes|documentation");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 83, "smile photos");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 84, "perio risk");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 85, "orthodontic check");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 85, "occlusion check");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 86, "wear facets check");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 87, "check restorations");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 87, "check dentures");  // 2026-11-04 · INBDE
board("Name a step in a dental cleaning visit", 88, "oral hygiene index|plaque score");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 45, "cone cutting");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 46, "partial image");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 46, "horizontal overlap");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 47, "vertical angulation error");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 47, "horizontal angulation error");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 48, "incorrect angulation");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 48, "film placement error");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 49, "apices not shown");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 50, "crown not shown|occlusal edge cut off");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 50, "film placed backwards|embossed dot wrong");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 51, "tire track pattern");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 51, "bent film|creased film");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 52, "crimped film|crimp marks");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 53, "film fog|fogging");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 53, "light exposure");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 54, "developer contamination");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 54, "fixer contamination");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 55, "stained film");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 55, "yellow brown film");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 56, "film not fixed|unfixed film");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 57, "underdeveloped film");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 57, "overdeveloped film");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 58, "wrong temperature");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 59, "air bubbles");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 60, "torn film");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 60, "fingerprints on film");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 61, "lost image");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 61, "blank film|clear film");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 62, "black film");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 62, "thin image|light image");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 63, "dark image");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 64, "unsharpness|penumbra");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 64, "magnification");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 65, "distortion");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 65, "image burnout");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 66, "metal artifact");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 66, "eyeglasses artifact");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 67, "earrings artifact");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 68, "necklace artifact");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 68, "denture artifact|removable appliance artifact");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 69, "tongue piercing artifact");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 69, "thyroid collar artifact");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 70, "phosphor plate scratch|scratched plate");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 71, "plate artifact");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 71, "sensor cable artifact");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 72, "saturation");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 72, "noise|graininess");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 73, "pixelation");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 73, "wrong patient|mislabeled image");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 74, "wrong tooth");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 75, "mounting error");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 75, "wrong exposure setting");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 76, "wrong kvp");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 76, "wrong ma");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 77, "exposure time error");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 78, "tube head drift|tubehead movement");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 79, "frown|exaggerated smile line|smile line too curved");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 80, "reverse smile|smile line too flat|flat occlusal plane");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 80, "teeth too wide|wide anterior teeth");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 81, "teeth too narrow|narrow anterior teeth");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 82, "blurry anterior teeth");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 82, "spine in middle|spine shadow|ghost spine");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 83, "palatoglossal air space|dark shadow over maxillary apices");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 83, "tongue not on palate");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 84, "hyoid shadow");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 85, "head tilted|head tipped");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 85, "head rotated|head turned");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 86, "midsagittal plane not centered");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 86, "frankfort plane error");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 87, "lips open");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 87, "slumped posture");  // 2026-11-04 · INBDE
board("Name a dental X-ray error", 88, "not removing jewelry");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 46, "take home whitening");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 48, "kor whitening");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 48, "philips zoom");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 49, "boost");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 50, "pola");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 50, "nite white");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 51, "day white");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 53, "crest 3d white");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 54, "colgate optic white");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 55, "colgate visible white");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 55, "sensodyne whitening");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 56, "arm and hammer advance white");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 57, "rembrandt");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 57, "plus white");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 58, "auraglow");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 59, "snow teeth whitening");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 59, "lumineux");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 60, "crest whitening emulsions");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 61, "paint on whitener");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 62, "whitening gum");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 63, "whitening floss");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 63, "whitening mouth rinse");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 64, "purple toothpaste|color corrector toothpaste");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 65, "blue covarine");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 65, "pap whitening|phthalimidoperoxycaproic acid");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 66, "enzyme whitening|papain|bromelain");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 67, "activated charcoal");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 68, "lemon juice");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 69, "banana peel");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 70, "turmeric");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 70, "salt");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 71, "thermocatalytic bleaching");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 72, "sodium perborate");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 73, "inside outside bleaching");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 74, "closed chamber bleaching");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 75, "vital bleaching");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 76, "resin infiltration");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 78, "crowns");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 79, "professional cleaning");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 80, "polishing");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 80, "air polishing");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 81, "led whitening kit");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 82, "uv light whitening");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 83, "plasma arc light");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 83, "halogen light");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 84, "diode laser whitening");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 85, "dentist supervised whitening");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 86, "whitening powder");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 87, "tooth powder");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 87, "baking soda and peroxide");  // 2026-11-04 · INBDE
board("Name a teeth whitening method or product", 88, "silica toothpaste");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 45, "attrition|tooth attrition");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 46, "wear facets");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 48, "shortened teeth");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 48, "exposed dentin");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 49, "cupping");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 50, "enamel cracks|craze lines");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 51, "cracked tooth syndrome");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 52, "fractured restorations");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 53, "fractured crowns");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 54, "chipped veneers");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 55, "non carious cervical lesions");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 56, "gingival recession");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 57, "tooth hypermobility");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 58, "widened pdl space");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 59, "fremitus");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 60, "exostoses");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 61, "buccal exostosis");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 62, "linea alba");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 63, "scalloped tongue|crenated tongue");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 64, "masseter hypertrophy");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 65, "square jaw");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 66, "temporalis hypertrophy");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 66, "jaw muscle fatigue");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 68, "limited mouth opening");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 69, "tmj pain");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 70, "ear pain");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 71, "tinnitus");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 72, "neck stiffness");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 76, "facial muscle pain");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 77, "myofascial pain");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 78, "tooth pain");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 79, "hot cold sensitivity");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 79, "pulpitis");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 80, "bed partner hears grinding");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 81, "daytime clenching");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 82, "fatigue|tiredness");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 83, "poor sleep");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 84, "broken night guard");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 85, "worn night guard");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 85, "hypercementosis");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 86, "thickened lamina dura");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 87, "cheek ridging");  // 2026-11-04 · INBDE
board("Name a sign of teeth grinding (bruxism)", 88, "tongue indentations");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 45, "primary dentition");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 45, "permanent dentition");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 46, "deciduous teeth");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 46, "eruption sequence");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 46, "eruption chart");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 47, "exfoliation");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 47, "primate space");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 47, "flush terminal plane");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 48, "mesial step");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 48, "distal step");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 48, "ugly duckling stage");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 49, "neonatal teeth");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 49, "riga fede disease");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 50, "bohn nodules");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 50, "epstein pearls");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 50, "dental lamina cysts");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 51, "eruption hematoma");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 51, "ectopic eruption");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 51, "ankylosed primary molar|infraocclusion");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 51, "over retained primary tooth");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 52, "mesiodens");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 52, "hypodontia");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 52, "supernumerary teeth");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 53, "molar incisor hypomineralization|mih");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 53, "enamel hypoplasia");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 53, "turner tooth");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 54, "nursing caries|bottle caries");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 54, "rampant caries");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 54, "caries risk assessment|cambra");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 55, "caries management by risk assessment");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 55, "fluoride supplements");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 55, "community water fluoridation");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 55, "fluorosis");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 56, "smear of toothpaste|rice sized toothpaste");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 56, "pea sized toothpaste");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 56, "age one dental visit");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 57, "well baby exam|well child visit");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 57, "lap to lap exam");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 58, "non nutritive sucking");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 58, "finger habit");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 59, "habit appliance|tongue crib");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 59, "palatal crib");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 59, "bluegrass appliance");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 59, "rapid palatal expander|rpe");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 60, "interceptive orthodontics");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 60, "phase 1 orthodontics");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 60, "serial extraction");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 61, "space maintenance");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 61, "band and loop");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 61, "crown and loop");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 62, "distal shoe");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 62, "nance appliance");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 62, "lingual holding arch|lingual arch");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 63, "transpalatal arch");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 63, "pediatric partial denture");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 63, "primary tooth extraction");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 63, "direct pulp cap");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 64, "indirect pulp treatment");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 65, "vitapex");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 66, "apexification");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 66, "apexogenesis");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 66, "regenerative endodontics|revascularization");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 66, "traumatic dental injury");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 67, "avulsion");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 67, "intrusion");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 67, "extrusion");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 68, "lateral luxation");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 68, "concussion");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 68, "subluxation");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 69, "splinting");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 69, "crown fracture");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 69, "ellis fracture|ellis classification");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 70, "hall technique");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 70, "preformed metal crown");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 70, "pedo crown");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 71, "open face crown");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 71, "art|atraumatic restorative treatment");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 71, "glass ionomer restoration");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 72, "resin infiltration");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 72, "preventive resin restoration|prr");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 73, "fluoride gel");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 73, "fluoride foam");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 73, "fluoride mouthrinse program");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 74, "school sealant program");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 74, "xylitol");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 74, "chlorhexidine varnish");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 74, "disclosing agent");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 75, "toothbrushing instruction");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 75, "parent education");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 75, "diet diary");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 76, "sugar counseling");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 76, "behavior guidance");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 76, "frankl scale");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 77, "positive reinforcement");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 77, "voice control");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 77, "distraction");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 78, "modeling");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 78, "hand over mouth exercise|home");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 78, "parental presence absence");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 78, "oral sedation");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 79, "general anesthesia");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 79, "operating room dentistry");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 79, "mouth prop|molt mouth prop");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 80, "rubber dam");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 80, "special health care needs");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 80, "child abuse");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 81, "neglect");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 81, "teething gel|benzocaine warning");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 81, "methemoglobinemia");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 82, "max lidocaine dose|weight based dosing");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 82, "young's rule|clark's rule");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 83, "primary molar");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 83, "e space");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 83, "deep bite");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 84, "anterior crossbite");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 84, "posterior crossbite");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 84, "open bite");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 85, "mixed dentition analysis|moyers analysis|tanaka johnston");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 85, "space analysis");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 86, "dental age");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 86, "chronological age");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 86, "cleft lip and palate");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 86, "nasoalveolar molding");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 87, "feeding obturator");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 87, "ectodermal dysplasia");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 87, "down syndrome");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 88, "cerebral palsy");  // 2026-11-04 · INBDE
board("Name a pediatric dentistry term or procedure", 88, "autism");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 46, "failure to osseointegrate|failed osseointegration");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 47, "implant mobility");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 47, "fibrous encapsulation");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 48, "inferior alveolar nerve injury");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 49, "lingual nerve injury");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 50, "paresthesia|numbness");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 50, "dysesthesia");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 51, "anesthesia of lip");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 51, "mental nerve injury");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 52, "sinus membrane perforation|schneiderian membrane perforation");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 53, "sinusitis");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 53, "oroantral fistula");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 54, "nasal floor perforation");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 54, "lingual cortical plate perforation");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 55, "sublingual hematoma");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 55, "floor of mouth hemorrhage");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 56, "airway obstruction");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 57, "hemorrhage");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 57, "hematoma");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 58, "wound dehiscence|incision line opening");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 58, "exposed implant|cover screw exposure");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 59, "thread exposure");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 60, "soft tissue recession");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 60, "black triangle");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 61, "papilla loss");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 61, "thin biotype");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 62, "malposition|poor angulation");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 62, "implant too close to adjacent tooth");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 63, "root damage");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 64, "adjacent tooth devitalization");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 64, "overheating bone|thermal necrosis");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 65, "osteomyelitis");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 65, "osteonecrosis");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 66, "mronj");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 66, "abutment screw fracture");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 68, "abutment fracture");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 68, "porcelain chipping");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 69, "denture fracture");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 69, "attachment wear");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 70, "occlusal overload");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 71, "cement induced peri implantitis|residual cement");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 71, "retrograde peri implantitis");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 72, "implant periapical lesion");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 72, "suppuration|pus");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 73, "fistula");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 73, "bleeding on probing");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 74, "deep pockets");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 75, "halitosis");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 75, "food trapping");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 76, "open contact");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 76, "phonetic problems");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 77, "esthetic failure");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 78, "gray show through|metal show through");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 78, "cheek biting");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 79, "tongue biting");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 79, "fractured mandible");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 80, "aspiration of implant parts");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 80, "swallowing a screw|ingestion");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 81, "emphysema");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 82, "infection of graft");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 82, "graft failure");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 83, "membrane exposure");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 83, "corrosion");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 84, "titanium particles");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 85, "galvanic reaction");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 87, "trismus");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 87, "postoperative pain");  // 2026-11-04 · INBDE
board("Name a complication of dental implants", 88, "ecchymosis");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 45, "heredity|hereditary");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 46, "jaw size discrepancy|tooth jaw size mismatch");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 47, "large teeth small jaw");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 48, "small teeth|microdontia");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 48, "macrodontia");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 51, "ankylosed primary tooth");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 52, "tooth loss");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 53, "missing permanent teeth|hypodontia");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 53, "mesiodens");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 54, "ectopic eruption");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 55, "impacted canine");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 56, "third molars pushing");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 57, "abnormal eruption path");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 58, "lip habit|lip sucking");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 58, "finger sucking");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 60, "prolonged bottle use");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 62, "low tongue posture");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 63, "enlarged tonsils|enlarged adenoids");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 64, "allergies|nasal obstruction");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 64, "sleep apnea");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 65, "soft diet");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 66, "evolution|modern diet");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 67, "facial trauma");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 68, "jaw fracture");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 69, "poorly fitting crowns");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 69, "poorly fitting fillings");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 70, "periodontal disease");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 71, "bone loss");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 72, "tooth drifting");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 73, "age related drift|mesial drift");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 74, "relapse after braces");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 75, "condylar hyperplasia");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 75, "cleft palate");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 76, "down syndrome");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 77, "cleidocranial dysplasia");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 78, "craniosynostosis");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 79, "pierre robin sequence");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 80, "acromegaly");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 80, "hemifacial microsomia");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 81, "cysts");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 82, "odontoma");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 83, "ankylosis");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 84, "frenum|high frenum attachment");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 85, "tongue tie");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 85, "vitamin d deficiency|rickets");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 86, "thumbsucking past age 4");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 87, "class ii skeletal pattern");  // 2026-11-04 · INBDE
board("Name a cause of crooked teeth", 88, "class iii skeletal pattern");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 46, "oral histology|oral histology and embryology");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 46, "embryology");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 47, "cell biology");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 48, "molecular biology");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 49, "genetics");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 49, "nutrition");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 50, "biostatistics");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 51, "epidemiology");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 51, "evidence based dentistry|research methods");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 53, "oral diagnosis");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 54, "treatment planning");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 55, "oral and maxillofacial surgery");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 57, "anesthesiology|pain control");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 58, "sedation");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 59, "medical emergencies");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 59, "bls|cpr");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 60, "physical diagnosis");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 61, "internal medicine");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 61, "special care dentistry");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 62, "geriatric dentistry");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 63, "fixed prosthodontics");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 64, "removable prosthodontics");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 64, "complete dentures");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 65, "removable partial dentures");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 66, "implantology");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 66, "esthetic dentistry|cosmetic dentistry");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 67, "restorative dentistry");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 69, "tooth morphology");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 69, "waxing");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 71, "orofacial pain");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 72, "digital dentistry|cad cam");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 72, "infection control");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 73, "radiation safety");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 74, "jurisprudence|dental law");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 74, "professionalism");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 75, "cultural competency");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 76, "communication skills");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 77, "dental informatics");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 77, "clinical rotations");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 78, "preclinical lab|sim lab");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 79, "board review|inbde prep");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 79, "dental hygiene");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 80, "preventive dentistry");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 82, "periodontology");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 83, "forensic dentistry");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 84, "community outreach");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 84, "integrated biomedical sciences");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 85, "neuroanatomy");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 86, "endocrinology");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 87, "cardiology");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 87, "hematology");  // 2026-11-04 · INBDE
board("Name a course or subject in dental school", 88, "infectious disease");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 45, "alcohol hand rub");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 46, "surgical hand scrub");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 47, "utility gloves");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 48, "n95 respirator");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 48, "surgical mask");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 49, "level 3 mask");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 49, "safety glasses");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 50, "lab coat");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 50, "ppe");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 51, "donning and doffing");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 51, "instrument cleaning");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 51, "instrument washer|thermal disinfector");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 52, "holding solution");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 52, "instrument inspection");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 53, "pouch|sterilization pouches");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 53, "indicator tape");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 54, "class 5 integrator");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 54, "bowie dick test");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 55, "autoclave log");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 56, "unsaturated chemical vapor|chemiclave");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 57, "ethylene oxide");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 57, "glutaraldehyde");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 57, "high level disinfection");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 58, "intermediate level disinfectant");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 58, "epa registered disinfectant");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 59, "tuberculocidal disinfectant");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 59, "spray wipe spray");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 60, "clean dirty zones|workflow");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 60, "clinical contact surfaces");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 61, "housekeeping surfaces");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 62, "light handle covers");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 63, "handpiece sterilization");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 63, "heat sterilize handpieces");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 63, "flush waterlines|flushing lines");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 64, "waterline testing");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 64, "dental unit waterlines");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 65, "independent water reservoir");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 65, "sterile water for surgery");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 66, "anti retraction valves");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 66, "saliva ejector backflow prevention");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 67, "preprocedural mouthrinse");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 68, "aerosol reduction");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 68, "extraoral suction");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 69, "air filtration");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 69, "ventilation");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 70, "respiratory hygiene|cough etiquette");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 70, "patient screening");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 70, "temperature checks");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 71, "immunization|flu shot");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 71, "tb testing");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 72, "post exposure protocol|bloodborne pathogen exposure");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 72, "needlestick protocol");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 73, "one handed scoop technique");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 73, "recapping devices");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 74, "safety needles");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 74, "engineering controls");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 75, "work practice controls");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 75, "exposure control plan");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 76, "osha training");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 76, "sds|safety data sheets");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 76, "medical waste disposal|biohazard bags");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 77, "amalgam separator");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 77, "lab case disinfection");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 78, "impression disinfection");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 78, "disinfect prosthetic devices");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 79, "radiography barriers|sensor sleeves");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 79, "disposable prophy angles");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 80, "disposable items");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 80, "single use needles");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 81, "cdc checklist");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 81, "infection control coordinator");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 82, "universal precautions");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 82, "transmission based precautions");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 82, "isolation");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 83, "aseptic technique");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 83, "sterile field");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 84, "no touch technique");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 84, "nail hygiene|no artificial nails");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 85, "no jewelry");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 85, "hair tied back");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 86, "cover cuts");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 87, "change mask");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 87, "laundry of ppe");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 88, "eyewash station");  // 2026-11-04 · INBDE
board("Name an infection control step in a dental office", 88, "hepatitis b titer");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 45, "toothache from decay|carious lesion");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 46, "irreversible pulpitis");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 47, "reversible pulpitis");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 47, "pulp necrosis|dead nerve");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 48, "acute apical periodontitis");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 49, "symptomatic apical periodontitis");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 50, "phoenix abscess");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 50, "cellulitis");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 52, "vertical root fracture");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 53, "chipped tooth");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 54, "loose crown|lost crown");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 55, "high filling|high spot");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 55, "occlusal trauma");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 56, "clenching");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 56, "dentin hypersensitivity");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 57, "gum recession");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 58, "food impaction");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 59, "popcorn hull");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 59, "periodontitis");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 60, "acute necrotizing ulcerative gingivitis|anug");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 61, "gingival abscess");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 61, "pericoronal abscess");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 62, "wisdom tooth eruption");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 63, "impacted canine");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 64, "post extraction pain");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 64, "after root canal|post endodontic pain");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 65, "crown preparation");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 66, "whitening");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 66, "orthodontic movement");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 68, "luxation");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 68, "internal resorption");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 69, "external resorption");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 69, "maxillary sinusitis");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 70, "barodontalgia|altitude change");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 72, "myofascial pain|referred muscle pain");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 72, "temporomandibular disorder");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 73, "migraine");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 74, "postherpetic neuralgia");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 75, "shingles|herpes zoster");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 75, "atypical odontalgia|persistent dentoalveolar pain");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 76, "burning mouth");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 77, "neuropathic pain");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 77, "tumor|jaw tumor");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 78, "osteomyelitis");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 78, "osteonecrosis");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 79, "sickle cell crisis");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 80, "leukemia");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 80, "lymphoma");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 81, "parotitis");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 82, "psychogenic pain");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 83, "galvanic pain");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 83, "hot or cold food");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 84, "sweets");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 84, "acid erosion");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 85, "abrasion");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 86, "abfraction");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 87, "tooth wear");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 87, "exposed dentin");  // 2026-11-04 · INBDE
board("Name a cause of a toothache", 88, "thin enamel");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 46, "brown spot lesion");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 47, "stained fissure");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 48, "soft dentin|leathery dentin");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 49, "explorer stick|catch with explorer");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 50, "cavitation");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 51, "shadow under enamel|gray shadow");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 52, "marginal ridge breakdown");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 53, "loss of translucency");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 54, "opaque enamel");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 55, "radiolucency at contact point");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 56, "interproximal radiolucency");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 56, "radiolucency under filling");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 57, "occlusal radiolucency");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 58, "cervical radiolucency");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 59, "recurrent decay around filling");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 60, "discolored margin");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 61, "ditched margin");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 62, "lingering pain");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 63, "pain with cold that lingers");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 65, "sharp pain when eating");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 67, "tooth sensitivity");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 68, "dull ache");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 70, "pain on percussion");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 71, "abscess|gum boil");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 72, "fistula|sinus tract");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 74, "tooth discoloration|darkened tooth");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 75, "gray tooth");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 76, "tooth crumbling");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 77, "tooth breaking apart");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 77, "chip in tooth");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 78, "rough spot");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 79, "floss shredding|floss tearing");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 80, "floss catching");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 81, "food trap");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 83, "halitosis");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 84, "positive diagnodent|high laser fluorescence reading");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 85, "transillumination shadow");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 86, "icdas score");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 87, "root surface softening");  // 2026-11-04 · INBDE
board("Name a sign of a cavity", 88, "yellow brown root lesion");  // 2026-11-04 · INBDE
board("Name a tongue condition", 45, "glossodynia|burning tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 46, "glossopyrosis");  // 2026-11-04 · INBDE
board("Name a tongue condition", 47, "lingua plicata|scrotal tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 47, "lingua villosa nigra");  // 2026-11-04 · INBDE
board("Name a tongue condition", 48, "hairy tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 49, "red tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 49, "beefy red tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 50, "smooth tongue|bald tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 51, "iron deficiency anemia");  // 2026-11-04 · INBDE
board("Name a tongue condition", 51, "folate deficiency");  // 2026-11-04 · INBDE
board("Name a tongue condition", 52, "riboflavin deficiency|b2 deficiency");  // 2026-11-04 · INBDE
board("Name a tongue condition", 52, "niacin deficiency|pellagra");  // 2026-11-04 · INBDE
board("Name a tongue condition", 53, "plummer vinson syndrome");  // 2026-11-04 · INBDE
board("Name a tongue condition", 53, "celiac disease");  // 2026-11-04 · INBDE
board("Name a tongue condition", 54, "xerostomia");  // 2026-11-04 · INBDE
board("Name a tongue condition", 54, "sjogren syndrome");  // 2026-11-04 · INBDE
board("Name a tongue condition", 55, "magenta tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 55, "raspberry tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 56, "white strawberry tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 57, "toxic shock syndrome");  // 2026-11-04 · INBDE
board("Name a tongue condition", 57, "acromegaly");  // 2026-11-04 · INBDE
board("Name a tongue condition", 58, "down syndrome");  // 2026-11-04 · INBDE
board("Name a tongue condition", 58, "beckwith wiedemann syndrome");  // 2026-11-04 · INBDE
board("Name a tongue condition", 59, "cretinism|congenital hypothyroidism");  // 2026-11-04 · INBDE
board("Name a tongue condition", 59, "mucopolysaccharidosis|hurler syndrome");  // 2026-11-04 · INBDE
board("Name a tongue condition", 60, "lymphangioma");  // 2026-11-04 · INBDE
board("Name a tongue condition", 60, "hemangioma");  // 2026-11-04 · INBDE
board("Name a tongue condition", 61, "lingual thyroid");  // 2026-11-04 · INBDE
board("Name a tongue condition", 61, "granular cell tumor");  // 2026-11-04 · INBDE
board("Name a tongue condition", 62, "squamous cell carcinoma of tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 62, "traumatic ulcer");  // 2026-11-04 · INBDE
board("Name a tongue condition", 63, "eosinophilic ulcer|traumatic ulcerative granuloma");  // 2026-11-04 · INBDE
board("Name a tongue condition", 63, "tongue biting");  // 2026-11-04 · INBDE
board("Name a tongue condition", 64, "tongue thrust");  // 2026-11-04 · INBDE
board("Name a tongue condition", 65, "tongue edema|swollen tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 65, "angioedema");  // 2026-11-04 · INBDE
board("Name a tongue condition", 66, "ludwig angina");  // 2026-11-04 · INBDE
board("Name a tongue condition", 66, "tongue abscess");  // 2026-11-04 · INBDE
board("Name a tongue condition", 67, "herpes simplex");  // 2026-11-04 · INBDE
board("Name a tongue condition", 67, "syphilis|syphilitic glossitis");  // 2026-11-04 · INBDE
board("Name a tongue condition", 68, "interstitial glossitis");  // 2026-11-04 · INBDE
board("Name a tongue condition", 68, "tuberculosis");  // 2026-11-04 · INBDE
board("Name a tongue condition", 69, "histoplasmosis");  // 2026-11-04 · INBDE
board("Name a tongue condition", 70, "candidiasis");  // 2026-11-04 · INBDE
board("Name a tongue condition", 70, "erythematous candidiasis");  // 2026-11-04 · INBDE
board("Name a tongue condition", 71, "pseudomembranous candidiasis");  // 2026-11-04 · INBDE
board("Name a tongue condition", 72, "pemphigus vulgaris");  // 2026-11-04 · INBDE
board("Name a tongue condition", 72, "erythema multiforme");  // 2026-11-04 · INBDE
board("Name a tongue condition", 73, "aphthous ulcer");  // 2026-11-04 · INBDE
board("Name a tongue condition", 73, "fibroma");  // 2026-11-04 · INBDE
board("Name a tongue condition", 74, "papilloma");  // 2026-11-04 · INBDE
board("Name a tongue condition", 74, "neurofibroma");  // 2026-11-04 · INBDE
board("Name a tongue condition", 75, "schwannoma");  // 2026-11-04 · INBDE
board("Name a tongue condition", 75, "rhabdomyoma");  // 2026-11-04 · INBDE
board("Name a tongue condition", 76, "lipoma");  // 2026-11-04 · INBDE
board("Name a tongue condition", 76, "varicosities|caviar tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 77, "hypoglossal nerve palsy|tongue deviation");  // 2026-11-04 · INBDE
board("Name a tongue condition", 77, "tongue fasciculations|als");  // 2026-11-04 · INBDE
board("Name a tongue condition", 78, "myasthenia gravis");  // 2026-11-04 · INBDE
board("Name a tongue condition", 78, "dysgeusia|taste disturbance");  // 2026-11-04 · INBDE
board("Name a tongue condition", 79, "ageusia|loss of taste");  // 2026-11-04 · INBDE
board("Name a tongue condition", 79, "hypogeusia");  // 2026-11-04 · INBDE
board("Name a tongue condition", 80, "phantogeusia");  // 2026-11-04 · INBDE
board("Name a tongue condition", 80, "covid tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 81, "transient lingual papillitis|lie bumps");  // 2026-11-04 · INBDE
board("Name a tongue condition", 81, "enlarged papillae");  // 2026-11-04 · INBDE
board("Name a tongue condition", 82, "foliate papillitis");  // 2026-11-04 · INBDE
board("Name a tongue condition", 82, "bifid tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 83, "aglossia");  // 2026-11-04 · INBDE
board("Name a tongue condition", 83, "microglossia");  // 2026-11-04 · INBDE
board("Name a tongue condition", 84, "cleft tongue");  // 2026-11-04 · INBDE
board("Name a tongue condition", 85, "ankyloglossia superior");  // 2026-11-04 · INBDE
board("Name a tongue condition", 85, "glossoptosis");  // 2026-11-04 · INBDE
board("Name a tongue condition", 86, "tongue tremor");  // 2026-11-04 · INBDE
board("Name a tongue condition", 86, "orofacial granulomatosis");  // 2026-11-04 · INBDE
board("Name a tongue condition", 88, "erythroplakia");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 45, "sugary drinks|sugar sweetened beverages");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 45, "regular soda");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 46, "fruit punch");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 46, "kool aid");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 47, "frappuccino|sugary coffee drinks");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 48, "bubble tea|boba");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 48, "milkshakes");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 49, "chocolate milk");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 49, "flavored milk");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 50, "smoothies");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 50, "sweetened yogurt");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 51, "condensed milk");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 51, "baby formula at bedtime");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 55, "cereal bars");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 56, "muffins");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 56, "pancakes with syrup");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 57, "waffles");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 57, "french toast");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 58, "bagels");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 58, "pretzels");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 59, "potato chips");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 59, "french fries");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 60, "goldfish crackers");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 61, "white rice");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 61, "pizza");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 62, "bread");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 62, "tortilla chips");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 63, "popcorn");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 63, "starchy foods");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 64, "fruit snacks");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 64, "fruit leather");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 65, "dried apricots");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 65, "dates");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 66, "figs");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 66, "bananas");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 66, "grapes");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 67, "jam|jelly");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 67, "peanut butter and jelly");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 68, "nutella");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 68, "marshmallows");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 69, "toffee");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 69, "taffy");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 70, "jelly beans");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 70, "licorice");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 71, "sour gummies|sour patch kids");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 72, "hard candies");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 72, "cotton candy");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 73, "candy canes");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 73, "chewing gum with sugar");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 74, "mints");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 74, "brownies");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 75, "cupcakes");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 75, "pie");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 76, "ice pops|popsicles");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 77, "sherbet");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 77, "frozen yogurt");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 78, "sweetened condiments|ketchup");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 78, "barbecue sauce");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 79, "agave");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 79, "maple syrup");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 81, "molasses");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 82, "glucose");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 82, "fructose");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 83, "maltose");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 83, "beer");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 84, "cider");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 84, "mixed drinks|cocktails");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 85, "wine coolers");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 85, "sports gels|energy chews");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 86, "protein bars");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 86, "sweetened oatmeal");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 87, "cough syrup");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 87, "liquid medicines with sugar");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 88, "vitamin gummies");  // 2026-11-04 · INBDE
board("Name a food or drink that causes cavities", 88, "lemon drops");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 45, "amine fluoride|olaflur");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 45, "stannous chloride");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 46, "zinc chloride");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 46, "zinc oxide");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 47, "zinc lactate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 47, "potassium citrate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 48, "potassium chloride");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 48, "strontium acetate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 49, "cpp acp|recaldent");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 49, "calcium phosphate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 50, "tricalcium phosphate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 50, "calcium glycerophosphate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 51, "sodium trimetaphosphate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 51, "sodium hexametaphosphate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 52, "sodium tripolyphosphate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 52, "tetrapotassium pyrophosphate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 53, "pyrophosphates");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 53, "gantrez|pvm ma copolymer");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 53, "cetylpyridinium chloride|cpc");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 54, "chlorhexidine");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 54, "essential oils");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 55, "eucalyptol");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 55, "thymol");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 56, "methyl salicylate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 56, "spearmint oil");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 57, "wintergreen");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 57, "cinnamon|cinnamaldehyde");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 57, "clove oil|eugenol");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 58, "tea tree oil");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 58, "neem");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 59, "miswak extract");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 59, "aloe vera");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 60, "propolis");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 60, "enzymes|papain|bromelain");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 61, "lactoperoxidase|biotene enzymes");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 61, "lysozyme");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 61, "glucose oxidase");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 62, "probiotics");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 62, "carbamide peroxide");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 63, "calcium peroxide");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 63, "pap|phthalimidoperoxycaproic acid");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 64, "blue covarine");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 64, "perlite");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 65, "alumina|aluminum oxide");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 65, "aluminum hydroxide");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 66, "sodium metaphosphate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 66, "magnesium carbonate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 67, "bentonite clay");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 67, "kaolin");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 68, "pumice");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 68, "diamond powder");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 68, "humectants");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 69, "propylene glycol");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 69, "polyethylene glycol|peg");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 70, "binders|thickeners");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 70, "carbomer");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 71, "sodium carboxymethylcellulose|carboxymethylcellulose");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 71, "hydroxyethyl cellulose");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 72, "guar gum");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 72, "sodium alginate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 72, "gum arabic");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 73, "detergent|surfactant");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 73, "sodium lauroyl sarcosinate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 74, "poloxamer 407");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 74, "sodium methyl cocoyl taurate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 75, "sodium benzoate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 75, "parabens|methylparaben");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 76, "potassium sorbate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 76, "sweeteners");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 76, "sucralose");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 77, "acesulfame potassium");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 77, "aspartame");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 78, "erythritol");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 78, "monk fruit");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 79, "sodium hydroxide");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 80, "trisodium phosphate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 80, "sodium phosphate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 80, "citric acid");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 81, "preservatives");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 82, "mica");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 82, "limonene");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 83, "anethole");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 83, "vanilla");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 84, "coconut oil");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 85, "bioactive glass");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 85, "vitamin e");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 86, "green tea extract");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 86, "cocoa extract|theobromine");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 87, "salt|sodium chloride");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 87, "aloe barbadensis");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 88, "polysorbate");  // 2026-11-04 · INBDE
board("Name an ingredient in toothpaste", 88, "silicon dioxide");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 46, "calculus|tartar");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 46, "poor oral hygiene");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 47, "hard toothbrush");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 48, "overhanging fillings");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 49, "ill fitting crown");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 50, "food impaction");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 50, "orthodontic appliances");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 51, "mouth breathing");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 51, "necrotizing gingivitis|anug|trench mouth");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 52, "pregnancy tumor");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 54, "menstrual cycle");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 54, "oral contraceptives");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 55, "menopause");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 56, "warfarin|coumadin");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 56, "heparin");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 57, "apixaban|eliquis");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 58, "rivaroxaban|xarelto");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 58, "clopidogrel|plavix");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 59, "fish oil");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 59, "ginkgo");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 60, "vitamin e supplements");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 60, "chemotherapy");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 61, "radiation");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 63, "aplastic anemia");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 64, "idiopathic thrombocytopenic purpura|itp");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 64, "thrombotic thrombocytopenic purpura|ttp");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 65, "dic|disseminated intravascular coagulation");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 66, "hemophilia a");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 66, "hemophilia b");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 67, "factor deficiency");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 67, "liver cirrhosis");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 68, "alcoholism");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 69, "malnutrition");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 70, "vitamin b12 deficiency");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 70, "folate deficiency");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 71, "iron deficiency anemia");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 71, "hiv associated gingivitis");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 72, "linear gingival erythema");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 73, "herpetic gingivostomatitis");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 73, "candidiasis");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 74, "desquamative gingivitis");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 74, "lichen planus");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 75, "mucous membrane pemphigoid");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 75, "pemphigus vulgaris");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 76, "lupus");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 77, "crohn disease");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 77, "wegener granulomatosis|granulomatosis with polyangiitis|strawberry gingivitis");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 78, "sarcoidosis");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 78, "hereditary hemorrhagic telangiectasia");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 79, "ehlers danlos");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 79, "cushing syndrome|steroids");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 80, "kidney disease");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 81, "gingival enlargement");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 81, "cyclosporine");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 82, "nifedipine|calcium channel blockers");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 83, "trauma|injury to gums");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 83, "tongue piercing");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 84, "peri implantitis");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 85, "pericoronitis");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 85, "after dental cleaning");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 86, "after extraction");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 86, "chewing tobacco");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 87, "oral cancer");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 87, "kaposi sarcoma");  // 2026-11-04 · INBDE
board("Name a cause of bleeding gums", 88, "pyogenic granuloma");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 45, "xerostomia");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 46, "polypharmacy");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 46, "tricyclic antidepressants|amitriptyline");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 47, "ssris");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 47, "benzodiazepines");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 48, "anticonvulsants");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 49, "beta blockers");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 49, "clonidine");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 50, "ace inhibitors");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 50, "calcium channel blockers");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 51, "atropine");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 51, "scopolamine");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 52, "oxybutynin");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 52, "tolterodine");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 53, "diphenhydramine|benadryl");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 53, "pseudoephedrine");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 54, "amphetamines|adderall");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 55, "isotretinoin|accutane");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 55, "bupropion");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 56, "lithium");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 56, "tramadol");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 57, "cyclobenzaprine");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 57, "benztropine");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 58, "glycopyrrolate");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 59, "head and neck radiation");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 59, "radioactive iodine");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 60, "surgery on salivary glands");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 60, "sialadenitis");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 61, "mumps");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 61, "sarcoidosis");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 62, "amyloidosis");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 63, "lupus");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 63, "rheumatoid arthritis");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 64, "scleroderma");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 64, "primary biliary cholangitis");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 65, "hepatitis c");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 65, "ectodermal dysplasia");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 66, "salivary gland aplasia");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 66, "cystic fibrosis");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 67, "hypothyroidism");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 68, "diabetes insipidus");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 68, "kidney failure|dialysis");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 69, "fever");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 69, "vomiting");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 70, "diarrhea");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 70, "burns");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 71, "blood loss|hemorrhage");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 72, "heat exhaustion");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 72, "depression");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 73, "stress");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 73, "panic attack");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 74, "eating disorders");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 74, "tobacco|chewing tobacco");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 75, "vaping");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 75, "cocaine");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 76, "ecstasy|mdma");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 76, "heroin");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 77, "alcohol based mouthwash");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 77, "salty foods");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 78, "caffeinated drinks|coffee");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 78, "energy drinks");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 79, "nasal congestion");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 80, "deviated septum");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 80, "allergies");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 81, "sleep apnea");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 82, "oxygen therapy");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 82, "high altitude");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 83, "dry climate|low humidity");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 83, "air conditioning");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 84, "old age");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 84, "pregnancy");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 85, "dementia");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 85, "multiple sclerosis");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 86, "botox injections");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 86, "covid 19");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 87, "hiv salivary gland disease");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 87, "sialolithiasis");  // 2026-11-04 · INBDE
board("Name a cause of dry mouth", 88, "tumor of salivary gland");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 45, "recent heart attack|myocardial infarction");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 46, "unstable angina");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 46, "angina");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 47, "congestive heart failure");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 47, "arrhythmia|atrial fibrillation");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 47, "implanted defibrillator|icd");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 48, "congenital heart disease");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 48, "cardiac transplant");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 48, "rheumatic heart disease");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 49, "hypertrophic cardiomyopathy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 49, "mitral valve prolapse");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 50, "hypotension|orthostatic hypotension");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 51, "seizure disorder");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 51, "warfarin therapy|inr");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 52, "doacs|novel anticoagulants");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 52, "antiplatelet therapy|aspirin therapy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 52, "hemophilia");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 53, "von willebrand");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 53, "thrombocytopenia");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 53, "anemia");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 54, "neutropenia");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 55, "lymphoma");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 55, "multiple myeloma");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 55, "head and neck cancer");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 56, "chemotherapy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 56, "bisphosphonate therapy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 57, "denosumab|prolia");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 57, "antiresorptive therapy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 57, "osteonecrosis risk");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 58, "kidney failure|dialysis");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 58, "cirrhosis");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 59, "hepatitis b");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 59, "hepatitis c");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 60, "alcohol use disorder");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 60, "substance abuse|opioid use disorder");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 60, "methamphetamine use");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 61, "cocaine use");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 61, "tuberculosis");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 62, "covid 19");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 62, "measles");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 62, "influenza");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 63, "immunocompromised");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 63, "transplant recipient");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 63, "chronic steroid use");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 64, "addison disease");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 64, "cushing syndrome");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 65, "hyperthyroidism|thyrotoxicosis");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 65, "hypothyroidism");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 65, "pheochromocytoma");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 66, "hyperparathyroidism");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 66, "third trimester|supine hypotensive syndrome");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 67, "breastfeeding");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 68, "sleep apnea");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 68, "cystic fibrosis");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 69, "g6pd deficiency");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 69, "methemoglobinemia");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 70, "pseudocholinesterase deficiency");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 70, "porphyria");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 71, "penicillin allergy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 71, "local anesthetic allergy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 71, "sulfite allergy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 72, "nsaid allergy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 72, "codeine allergy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 73, "nickel allergy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 73, "acrylic allergy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 73, "parkinson disease");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 74, "alzheimer disease");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 74, "multiple sclerosis");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 75, "myasthenia gravis");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 75, "cerebral palsy");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 75, "intellectual disability");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 76, "adhd");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 76, "anxiety disorder|dental phobia");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 76, "depression|maoi use");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 77, "bipolar disorder");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 77, "schizophrenia");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 78, "eating disorders|bulimia");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 78, "glaucoma");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 78, "sjogren syndrome");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 79, "lupus");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 79, "rheumatoid arthritis");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 80, "scleroderma");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 80, "ehlers danlos syndrome");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 80, "marfan syndrome");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 81, "osteogenesis imperfecta");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 81, "hemochromatosis");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 81, "obesity");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 82, "sickle cell anemia");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 82, "thalassemia");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 83, "radiation to jaws");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 83, "cochlear implant");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 83, "ventriculoperitoneal shunt");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 84, "cardiac stent");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 85, "hiv/aids");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 85, "kidney transplant");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 85, "liver transplant");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 86, "bone marrow transplant");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 86, "wheelchair user");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 87, "tmj disorder");  // 2026-11-04 · INBDE
board("Name a medical condition that changes dental treatment", 88, "prosthetic joint");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 45, "brush twice daily");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 46, "floss daily");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 47, "interdental brushes");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 47, "tongue cleaning");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 48, "fluoride mouth rinse");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 49, "fluoride varnish");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 49, "fluoride gel|fluoride foam");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 50, "fluoride supplements|fluoride drops");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 51, "community water fluoridation");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 52, "salt fluoridation");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 52, "milk fluoridation");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 54, "preventive resin restoration");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 54, "resin infiltration");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 55, "arginine toothpaste");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 56, "cpp acp|mi paste");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 56, "stannous fluoride");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 57, "nano hydroxyapatite toothpaste");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 57, "xylitol mints");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 58, "limit snacks");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 59, "limit frequency of sugar");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 59, "eat sweets with meals");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 60, "avoid sticky foods");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 61, "rinse with water after eating");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 62, "avoid juice");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 62, "avoid sugary drinks at bedtime");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 63, "no bottle in bed");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 64, "wipe infant gums");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 64, "first dental visit by age 1");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 66, "dental x rays|bitewings");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 67, "caries risk assessment");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 67, "treat dry mouth");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 68, "saliva stimulation");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 69, "stop smoking");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 69, "use a straw");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 71, "crunchy vegetables");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 71, "healthy snacks");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 72, "less acidic drinks");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 72, "wait to brush after acid");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 73, "manage acid reflux");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 74, "replace toothbrush");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 74, "supervise kids brushing");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 75, "parents not sharing spoons|avoid saliva sharing");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 76, "treat parents' cavities");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 76, "chlorhexidine varnish");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 77, "povidone iodine");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 79, "vitamin d");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 79, "calcium");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 80, "arginine");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 81, "interim therapeutic restorations");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 82, "remineralization");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 82, "oral hygiene instruction");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 83, "diet counseling");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 84, "motivational interviewing");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 85, "maintain orthodontic hygiene");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 86, "sugar alcohols");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 87, "chew gum after meals");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 87, "brush before bed");  // 2026-11-04 · INBDE
board("Name a way to prevent cavities", 88, "spit dont rinse");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 45, "recurrent aphthous stomatitis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 46, "major aphthous ulcer");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 46, "herpetiform ulcers");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 47, "primary herpetic gingivostomatitis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 48, "varicella|chickenpox");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 49, "coxsackie virus");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 50, "cytomegalovirus");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 50, "epstein barr virus|mononucleosis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 51, "measles");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 51, "gonorrhea");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 52, "histoplasmosis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 52, "blastomycosis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 53, "mucormycosis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 53, "aspergillosis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 54, "necrotizing gingivitis|anug");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 54, "noma");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 56, "cheek biting");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 56, "tongue biting");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 57, "toothbrush injury");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 57, "hot pizza burn");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 58, "chemical burn|aspirin burn");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 58, "hydrogen peroxide burn");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 59, "mouthwash irritation");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 59, "cinnamon allergy");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 59, "food allergies");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 60, "contact allergy|allergic contact stomatitis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 60, "nickel allergy");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 61, "citrus fruits");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 61, "tomatoes");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 62, "pineapple");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 62, "nuts");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 63, "chocolate");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 63, "coffee");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 64, "sodium lauryl sulfate");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 64, "menstruation|hormonal changes");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 65, "vitamin deficiency");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 65, "zinc deficiency");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 66, "vitamin b deficiency");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 66, "anemia");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 67, "ulcerative colitis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 67, "inflammatory bowel disease");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 68, "pfapa syndrome");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 68, "cyclic neutropenia");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 69, "neutropenia");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 69, "leukemia");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 70, "agranulocytosis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 70, "reactive arthritis|reiter syndrome");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 71, "sweet syndrome");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 71, "magic syndrome");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 72, "lichenoid drug reaction");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 72, "methotrexate");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 73, "nicorandil");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 73, "nsaids");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 74, "beta blockers");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 74, "radiation mucositis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 75, "graft versus host disease");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 75, "bullous pemphigoid");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 77, "paraneoplastic pemphigus");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 77, "linear iga disease");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 78, "dermatitis herpetiformis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 78, "epidermolysis bullosa");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 79, "discoid lupus");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 79, "traumatic ulcerative granuloma");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 80, "necrotizing sialometaplasia");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 80, "squamous cell carcinoma");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 81, "lymphoma");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 81, "histiocytosis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 82, "wegener granulomatosis");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 82, "smoking cessation");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 83, "tobacco");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 83, "alcohol");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 84, "cocaine");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 84, "self injury|factitial injury");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 85, "sharp food|chips");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 85, "dental work injury");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 86, "local anesthetic biting|post anesthesia lip biting");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 86, "cotton roll injury");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 87, "hiv ulcers");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 87, "immune deficiency");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 88, "covid 19");  // 2026-11-04 · INBDE
board("Name a cause of mouth sores", 88, "monkeypox|mpox");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 45, "cdt");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 46, "icd 10 code|diagnosis code");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 46, "attachment");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 46, "narrative");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 47, "x ray attachment");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 47, "clean claim");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 48, "claim denial|denied claim");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 48, "appeal");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 48, "resubmission");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 49, "electronic claim|edi");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 49, "clearinghouse");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 49, "npi number");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 50, "tax id|tin");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 50, "subscriber");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 51, "dependent");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 51, "policyholder");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 51, "member id");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 52, "group number");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 52, "plan year");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 52, "benefit year");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 53, "calendar year maximum");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 53, "lifetime maximum");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 54, "orthodontic lifetime maximum");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 54, "family deductible");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 55, "100 80 50 coverage");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 55, "preventive coverage");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 55, "basic services");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 56, "major services");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 56, "downgrade|alternate benefit");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 56, "least expensive alternative treatment|leat");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 57, "age limit");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 58, "exclusion");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 58, "pre existing condition");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 58, "replacement clause|5 year replacement");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 59, "benefits verification|eligibility verification");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 59, "breakdown of benefits");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 59, "treatment estimate");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 60, "patient portion");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 60, "insurance portion");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 61, "allowed amount");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 61, "maximum allowable charge|mac");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 61, "contracted fee");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 62, "full fee|office fee");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 62, "ucr fee");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 62, "non covered service");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 63, "adjustment");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 63, "courtesy discount");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 64, "refund");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 64, "overpayment");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 64, "credit balance");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 65, "accounts receivable|ar");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 65, "aging report");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 65, "collections");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 66, "payment plan");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 66, "third party financing|carecredit");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 66, "in house membership plan");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 67, "fee for service");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 68, "epo");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 68, "medicare advantage dental");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 69, "tricare dental");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 69, "fehb dental|fedvip");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 70, "secondary insurance");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 70, "primary insurance");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 71, "birthday rule");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 71, "non duplication of benefits");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 71, "standard coordination|carve out");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 72, "assignment of benefits");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 72, "signature on file");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 72, "hipaa");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 73, "coding audit");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 73, "upcoding");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 74, "unbundling");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 74, "insurance fraud");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 74, "medical necessity");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 75, "narrative report");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 75, "claim form|ada claim form");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 75, "cms 1500");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 76, "remittance");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 76, "era|electronic remittance advice");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 77, "eft|electronic funds transfer");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 77, "posting payments");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 77, "day sheet");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 78, "production");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 78, "collections ratio");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 78, "treatment plan acceptance");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 79, "case acceptance");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 79, "annual max rollover");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 79, "waiting period waiver");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 80, "missing tooth exclusion");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 80, "alternate benefit clause");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 81, "open enrollment");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 81, "cobra");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 82, "hsa|health savings account");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 82, "fsa|flexible spending account");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 82, "hra");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 83, "out of pocket maximum");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 83, "credentialing");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 84, "provider network");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 84, "participating provider");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 84, "non participating provider");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 85, "reimbursement");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 85, "claim number");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 85, "date of service");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 86, "tooth number");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 86, "surface code");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 87, "quadrant code");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 87, "d0120|periodic exam code");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 87, "d1110|adult prophy code");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 88, "d4341|srp code");  // 2026-11-04 · INBDE
board("Name a dental insurance or billing term", 88, "d2740|crown code");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 45, "bull shark");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 45, "tiger shark");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 46, "megalodon");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 46, "mako shark");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 47, "goblin shark");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 47, "cookiecutter shark");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 48, "barracuda");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 48, "moray eel");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 48, "viperfish");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 49, "anglerfish");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 49, "fangtooth fish");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 50, "sheepshead fish");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 50, "pacu");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 51, "wolf fish|atlantic wolffish");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 51, "payara|vampire fish");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 51, "gar|alligator gar");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 52, "tigerfish");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 52, "killer whale|orca");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 53, "sperm whale");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 53, "beluga");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 54, "dolphin");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 54, "leopard seal");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 54, "sea lion");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 55, "mammoth|woolly mammoth");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 55, "mastodon");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 56, "babirusa");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 56, "bushpig");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 56, "peccary|javelina");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 57, "musk deer");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 57, "water deer|chinese water deer");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 58, "muntjac");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 58, "dugong");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 59, "manatee");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 59, "aardvark");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 59, "naked mole rat");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 60, "mole rat");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 60, "gopher");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 61, "porcupine");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 61, "capybara");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 62, "chipmunk");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 62, "hamster");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 62, "guinea pig");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 63, "mouse");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 63, "groundhog|woodchuck");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 64, "prairie dog");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 64, "nutria|coypu");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 65, "hare");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 65, "tyrannosaurus rex|t rex");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 65, "velociraptor");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 66, "spinosaurus");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 66, "komodo dragon");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 67, "gila monster");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 67, "cobra");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 68, "rattlesnake");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 68, "viper|gaboon viper");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 68, "black mamba");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 69, "python");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 69, "anaconda");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 70, "caiman");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 70, "gharial");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 71, "snapping turtle");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 71, "jaguar");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 71, "leopard");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 72, "cheetah");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 72, "cougar|mountain lion");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 73, "lynx");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 73, "bobcat");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 74, "bear|grizzly bear");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 74, "polar bear");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 74, "tasmanian devil");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 75, "wolverine");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 75, "honey badger");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 76, "fox");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 76, "coyote");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 77, "jackal");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 77, "african wild dog");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 77, "dingo");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 78, "hippopotamus");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 78, "gelada");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 79, "llama");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 79, "bat");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 80, "saber toothed cat|smilodon");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 80, "dire wolf");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 81, "sea urchin|aristotle's lantern");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 81, "leech");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 82, "lamprey");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 82, "snail");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 82, "slug");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 83, "opossum");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 83, "wombat");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 84, "elephant seal");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 86, "crabeater seal");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 87, "bluefish");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 87, "triggerfish");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 88, "parrotfish");  // 2026-11-04 · INBDE
board("Name an animal known for its teeth or tusks", 88, "pufferfish");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 45, "biting a fork|biting utensils");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 46, "biting pen caps");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 46, "cracking nuts");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 47, "jawbreakers");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 48, "corn nuts");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 48, "unpopped popcorn");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 49, "cherry pits");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 49, "fruit pits");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 50, "bones in meat");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 51, "fish bones");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 51, "shells|crab shells|lobster shells");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 52, "pistachio shells");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 52, "sunflower seeds");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 53, "hard bread|crusty bread");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 53, "bagels");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 54, "ice cubes");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 54, "frozen candy bars");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 55, "large amalgam filling");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 57, "cuspal flexure");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 57, "thermal stress");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 58, "occlusal overload");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 59, "malocclusion");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 59, "edge to edge bite");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 60, "deep overbite");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 60, "crowded teeth");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 61, "enamel hypoplasia");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 62, "fluorosis");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 62, "molar incisor hypomineralization");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 63, "eating disorders");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 63, "acid reflux|gerd");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 64, "soda");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 64, "sports drinks");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 65, "contact sports|hockey|football");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 65, "basketball");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 66, "boxing|martial arts");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 66, "skateboarding");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 67, "bike accident|bicycle accident");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 68, "trampoline");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 68, "playground fall");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 69, "diving board");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 69, "swimming pool wall");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 70, "assault");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 70, "domestic violence");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 71, "child abuse");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 72, "syncope|fainting");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 73, "intubation|laryngoscope");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 73, "endoscopy");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 74, "electroconvulsive therapy|ect");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 75, "meth use");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 75, "ecstasy jaw clenching");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 76, "tongue piercing jewelry");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 76, "lip piercing jewelry");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 77, "biting fingernails");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 78, "chewing pencils");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 78, "opening bottles");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 79, "tearing packages");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 79, "holding objects in teeth");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 80, "bobby pins");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 80, "eyeglass arms|chewing glasses");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 81, "beer bottle");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 81, "microphone");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 82, "drinking fountain");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 82, "water bottle");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 83, "toothbrush accident");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 84, "dental instrument");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 84, "orthodontic debonding");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 85, "crown prep");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 86, "craze lines");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 86, "age related brittleness");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 87, "weak teeth");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 87, "dentin dysplasia");  // 2026-11-04 · INBDE
board("Name a cause of a chipped or broken tooth", 88, "vitamin d deficiency");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 45, "anatomical crown");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 45, "clinical crown");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 46, "anatomical root");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 46, "clinical root");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 47, "mesial root");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 48, "distal root");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 48, "palatal root");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 48, "mesiobuccal root");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 49, "distobuccal root");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 49, "lingual root");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 50, "mesiobuccal canal|mb1");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 50, "mb2");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 50, "distal canal");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 51, "cervical line");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 51, "cervical third");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 52, "middle third");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 52, "incisal third|occlusal third");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 52, "apical third");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 55, "facial surface");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 55, "palatal surface");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 55, "proximal surface");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 56, "contact area|contact point");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 56, "embrasure");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 57, "height of contour");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 57, "cusp tip");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 57, "cusp ridge");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 58, "triangular ridge");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 58, "transverse ridge");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 59, "oblique ridge");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 59, "cervical ridge");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 59, "buccal ridge");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 60, "labial ridge");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 60, "lingual ridge");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 60, "central groove");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 61, "developmental groove");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 61, "supplemental groove");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 62, "buccal groove");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 62, "lingual groove");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 62, "central fossa");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 63, "triangular fossa");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 63, "lingual fossa");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 64, "mesial fossa");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 64, "distal fossa");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 64, "central pit");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 65, "lingual pit");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 65, "buccal pit");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 66, "mesial pit");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 66, "distal pit");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 67, "tubercle");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 67, "lobe");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 68, "marginal groove");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 69, "root concavity");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 69, "root depression");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 70, "root trifurcation|trifurcation");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 70, "furcation entrance");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 71, "pulp core");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 71, "cell rich zone");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 71, "cell free zone|zone of weil");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 72, "odontoblastic layer");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 72, "pulp fibroblasts");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 73, "blood vessels");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 73, "plexus of raschkow");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 74, "lymphatics");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 74, "primary dentin");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 74, "peritubular dentin");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 75, "intertubular dentin");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 75, "circumpulpal dentin");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 76, "mantle dentin");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 76, "predentin");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 76, "incremental lines of von ebner");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 77, "contour lines of owen");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 77, "dead tracts");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 78, "enamel cuticle|nasmyth membrane");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 78, "reduced enamel epithelium");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 79, "acellular cementum");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 79, "cellular cementum");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 79, "cementocytes");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 80, "sharpey fibers");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 80, "cementoblasts");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 81, "ameloblasts");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 81, "enamel crystals|hydroxyapatite crystals");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 81, "aprismatic enamel");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 82, "enamel rod sheath");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 82, "interrod enamel");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 83, "gnarled enamel");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 83, "cross striations");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 83, "incisal angle");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 84, "mesioincisal angle");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 84, "distoincisal angle");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 85, "line angle");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 85, "point angle");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 85, "apical delta");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 86, "minor diameter");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 86, "major diameter");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 86, "apical constriction");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 87, "pulp floor");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 87, "pulp roof");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 88, "canal orifice");  // 2026-11-04 · INBDE
board("Name a part of a tooth", 88, "isthmus");  // 2026-11-04 · INBDE
board("Name a dental procedure", 45, "exam|dental exam|periodic exam");  // 2026-11-04 · INBDE
board("Name a dental procedure", 45, "comprehensive exam");  // 2026-11-04 · INBDE
board("Name a dental procedure", 46, "limited exam|emergency exam");  // 2026-11-04 · INBDE
board("Name a dental procedure", 46, "oral cancer screening");  // 2026-11-04 · INBDE
board("Name a dental procedure", 47, "periodontal charting");  // 2026-11-04 · INBDE
board("Name a dental procedure", 47, "full mouth x rays");  // 2026-11-04 · INBDE
board("Name a dental procedure", 47, "panoramic x ray");  // 2026-11-04 · INBDE
board("Name a dental procedure", 48, "cbct scan");  // 2026-11-04 · INBDE
board("Name a dental procedure", 48, "impressions");  // 2026-11-04 · INBDE
board("Name a dental procedure", 49, "digital scan");  // 2026-11-04 · INBDE
board("Name a dental procedure", 49, "study models");  // 2026-11-04 · INBDE
board("Name a dental procedure", 49, "bite registration");  // 2026-11-04 · INBDE
board("Name a dental procedure", 50, "composite filling|white filling");  // 2026-11-04 · INBDE
board("Name a dental procedure", 50, "amalgam filling|silver filling");  // 2026-11-04 · INBDE
board("Name a dental procedure", 51, "glass ionomer filling");  // 2026-11-04 · INBDE
board("Name a dental procedure", 51, "temporary filling");  // 2026-11-04 · INBDE
board("Name a dental procedure", 51, "preventive resin restoration");  // 2026-11-04 · INBDE
board("Name a dental procedure", 52, "silver diamine fluoride application");  // 2026-11-04 · INBDE
board("Name a dental procedure", 52, "resin infiltration");  // 2026-11-04 · INBDE
board("Name a dental procedure", 53, "desensitizing treatment");  // 2026-11-04 · INBDE
board("Name a dental procedure", 53, "onlay restoration");  // 2026-11-04 · INBDE
board("Name a dental procedure", 53, "porcelain crown");  // 2026-11-04 · INBDE
board("Name a dental procedure", 54, "same day crown|cerec crown");  // 2026-11-04 · INBDE
board("Name a dental procedure", 54, "temporary crown");  // 2026-11-04 · INBDE
board("Name a dental procedure", 55, "crown recementation");  // 2026-11-04 · INBDE
board("Name a dental procedure", 55, "crown removal");  // 2026-11-04 · INBDE
board("Name a dental procedure", 55, "implant crown");  // 2026-11-04 · INBDE
board("Name a dental procedure", 56, "implant abutment placement");  // 2026-11-04 · INBDE
board("Name a dental procedure", 57, "immediate implant placement");  // 2026-11-04 · INBDE
board("Name a dental procedure", 57, "implant uncovery|second stage surgery");  // 2026-11-04 · INBDE
board("Name a dental procedure", 57, "ridge preservation");  // 2026-11-04 · INBDE
board("Name a dental procedure", 58, "sinus augmentation");  // 2026-11-04 · INBDE
board("Name a dental procedure", 59, "guided bone regeneration");  // 2026-11-04 · INBDE
board("Name a dental procedure", 59, "connective tissue graft");  // 2026-11-04 · INBDE
board("Name a dental procedure", 60, "pinhole surgical technique");  // 2026-11-04 · INBDE
board("Name a dental procedure", 60, "osseous surgery");  // 2026-11-04 · INBDE
board("Name a dental procedure", 61, "pocket reduction surgery");  // 2026-11-04 · INBDE
board("Name a dental procedure", 61, "gingivoplasty");  // 2026-11-04 · INBDE
board("Name a dental procedure", 61, "lanap|laser periodontal therapy");  // 2026-11-04 · INBDE
board("Name a dental procedure", 62, "periodontal maintenance");  // 2026-11-04 · INBDE
board("Name a dental procedure", 62, "localized antibiotic delivery|arestin");  // 2026-11-04 · INBDE
board("Name a dental procedure", 63, "gross debridement");  // 2026-11-04 · INBDE
board("Name a dental procedure", 63, "root canal retreatment");  // 2026-11-04 · INBDE
board("Name a dental procedure", 64, "apexification");  // 2026-11-04 · INBDE
board("Name a dental procedure", 65, "apexogenesis");  // 2026-11-04 · INBDE
board("Name a dental procedure", 65, "incision and drainage");  // 2026-11-04 · INBDE
board("Name a dental procedure", 65, "surgical extraction");  // 2026-11-04 · INBDE
board("Name a dental procedure", 66, "simple extraction");  // 2026-11-04 · INBDE
board("Name a dental procedure", 66, "dry socket treatment");  // 2026-11-04 · INBDE
board("Name a dental procedure", 66, "biopsy");  // 2026-11-04 · INBDE
board("Name a dental procedure", 67, "brush biopsy");  // 2026-11-04 · INBDE
board("Name a dental procedure", 67, "tori removal");  // 2026-11-04 · INBDE
board("Name a dental procedure", 68, "cyst enucleation");  // 2026-11-04 · INBDE
board("Name a dental procedure", 68, "tmj arthrocentesis");  // 2026-11-04 · INBDE
board("Name a dental procedure", 68, "botox for tmj");  // 2026-11-04 · INBDE
board("Name a dental procedure", 69, "occlusal splint");  // 2026-11-04 · INBDE
board("Name a dental procedure", 69, "sleep apnea appliance");  // 2026-11-04 · INBDE
board("Name a dental procedure", 70, "complete denture");  // 2026-11-04 · INBDE
board("Name a dental procedure", 70, "partial denture");  // 2026-11-04 · INBDE
board("Name a dental procedure", 70, "denture reline");  // 2026-11-04 · INBDE
board("Name a dental procedure", 71, "denture repair");  // 2026-11-04 · INBDE
board("Name a dental procedure", 71, "immediate denture");  // 2026-11-04 · INBDE
board("Name a dental procedure", 72, "implant supported denture");  // 2026-11-04 · INBDE
board("Name a dental procedure", 72, "maryland bridge");  // 2026-11-04 · INBDE
board("Name a dental procedure", 72, "cantilever bridge");  // 2026-11-04 · INBDE
board("Name a dental procedure", 73, "fixed bridge");  // 2026-11-04 · INBDE
board("Name a dental procedure", 74, "composite veneer");  // 2026-11-04 · INBDE
board("Name a dental procedure", 74, "tooth contouring");  // 2026-11-04 · INBDE
board("Name a dental procedure", 74, "gum contouring");  // 2026-11-04 · INBDE
board("Name a dental procedure", 75, "microabrasion");  // 2026-11-04 · INBDE
board("Name a dental procedure", 75, "internal bleaching");  // 2026-11-04 · INBDE
board("Name a dental procedure", 76, "take home trays");  // 2026-11-04 · INBDE
board("Name a dental procedure", 76, "orthodontic consult");  // 2026-11-04 · INBDE
board("Name a dental procedure", 77, "bracket placement");  // 2026-11-04 · INBDE
board("Name a dental procedure", 77, "band placement");  // 2026-11-04 · INBDE
board("Name a dental procedure", 78, "wire change");  // 2026-11-04 · INBDE
board("Name a dental procedure", 78, "braces removal|debonding");  // 2026-11-04 · INBDE
board("Name a dental procedure", 79, "interproximal reduction|ipr");  // 2026-11-04 · INBDE
board("Name a dental procedure", 79, "tad placement");  // 2026-11-04 · INBDE
board("Name a dental procedure", 80, "expander placement");  // 2026-11-04 · INBDE
board("Name a dental procedure", 80, "habit appliance");  // 2026-11-04 · INBDE
board("Name a dental procedure", 81, "frenuloplasty");  // 2026-11-04 · INBDE
board("Name a dental procedure", 81, "lip tie release");  // 2026-11-04 · INBDE
board("Name a dental procedure", 82, "tongue tie release");  // 2026-11-04 · INBDE
board("Name a dental procedure", 82, "sports mouthguard");  // 2026-11-04 · INBDE
board("Name a dental procedure", 82, "tooth splinting");  // 2026-11-04 · INBDE
board("Name a dental procedure", 83, "replantation of avulsed tooth");  // 2026-11-04 · INBDE
board("Name a dental procedure", 83, "reattachment of fractured fragment");  // 2026-11-04 · INBDE
board("Name a dental procedure", 84, "enameloplasty");  // 2026-11-04 · INBDE
board("Name a dental procedure", 84, "odontoplasty");  // 2026-11-04 · INBDE
board("Name a dental procedure", 85, "caries removal");  // 2026-11-04 · INBDE
board("Name a dental procedure", 85, "pulp vitality testing");  // 2026-11-04 · INBDE
board("Name a dental procedure", 86, "anesthesia");  // 2026-11-04 · INBDE
board("Name a dental procedure", 86, "nitrous oxide sedation");  // 2026-11-04 · INBDE
board("Name a dental procedure", 86, "iv sedation");  // 2026-11-04 · INBDE
board("Name a dental procedure", 87, "general anesthesia");  // 2026-11-04 · INBDE
board("Name a dental procedure", 88, "air polishing");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 45, "gold braces");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 46, "spark aligners");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 47, "clearcorrect");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 47, "suresmile");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 48, "incognito");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 48, "lingual retainer");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 49, "vivera retainer");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 49, "wraparound retainer");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 49, "begg retainer");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 50, "zachrisson retainer");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 51, "edgewise appliance");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 51, "straight wire appliance");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 52, "begg appliance");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 52, "tip edge");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 53, "roth prescription");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 53, "mbt");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 53, "self ligating brackets");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 54, "in ovation");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 54, "ceramic brackets");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 55, "sapphire brackets");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 55, "molar bands");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 56, "molar tubes");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 56, "buccal tubes");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 57, "bondable tubes");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 57, "niti wire");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 57, "stainless steel wire");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 58, "tma wire|beta titanium wire");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 58, "copper niti");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 59, "rectangular wire");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 59, "round wire");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 60, "utility arch");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 60, "reverse curve wire");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 61, "loop wire");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 61, "t loop");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 61, "closing loop");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 62, "open coil spring");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 62, "closed coil spring");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 64, "steel ligatures");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 64, "kobayashi hooks");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 65, "crimpable hooks");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 65, "power arm");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 65, "class ii elastics");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 66, "class iii elastics");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 66, "box elastics");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 67, "triangle elastics");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 67, "crossbite elastics");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 68, "interarch elastics");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 68, "separators|spacers");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 68, "bite plate");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 69, "anterior bite plane");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 69, "posterior bite plane");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 70, "crib");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 70, "bluegrass");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 71, "tongue spikes|tongue rake");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 72, "wilson appliance");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 72, "jasper jumper");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 72, "twin force");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 73, "powerscope");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 73, "advansync");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 74, "xbow");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 74, "eureka spring");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 75, "sabbagh universal spring");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 75, "frankel functional regulator|fr ii");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 76, "monoblock");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 77, "bimler");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 77, "vertical holding appliance");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 78, "w arch");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 78, "porter appliance");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 79, "schwarz appliance");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 79, "removable expander");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 80, "bonded expander");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 80, "mini screw assisted expander|marpe");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 81, "bone anchored maxillary protraction|bamp");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 81, "miniplates");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 82, "interlandi headgear");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 82, "kloehn headgear");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 83, "j hook headgear");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 83, "delaire facemask");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 84, "petit facemask");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 84, "mandibular advancement device");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 85, "propel");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 85, "acceledent");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 86, "orthopulse");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 86, "vibration device");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 87, "clear aligner attachments");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 87, "buttons");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 88, "precision cuts");  // 2026-11-04 · INBDE
board("Name an orthodontic appliance", 88, "mandibular advancement wings");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 45, "amoxicillin clavulanate|augmentin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 46, "cefadroxil");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 46, "erythromycin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 46, "clarithromycin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 47, "ciprofloxacin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 47, "levofloxacin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 47, "moxifloxacin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 48, "vancomycin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 48, "cetylpyridinium chloride");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 49, "listerine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 49, "hydrogen peroxide rinse");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 49, "povidone iodine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 50, "sodium fluoride varnish");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 50, "stannous fluoride");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 50, "acidulated phosphate fluoride");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 51, "prescription fluoride toothpaste|prevident");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 51, "potassium nitrate");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 51, "codeine|tylenol 3");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 52, "morphine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 53, "meperidine|demerol");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 53, "nalbuphine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 53, "butorphanol");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 54, "naloxone|narcan");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 54, "flumazenil");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 54, "aspirin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 55, "celecoxib");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 55, "meloxicam");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 55, "diclofenac");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 56, "etodolac");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 56, "diflunisal");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 56, "ibuprofen acetaminophen combination");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 57, "prednisone");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 57, "methylprednisolone|medrol dose pack");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 57, "clobetasol");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 58, "fluocinonide");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 58, "betamethasone");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 58, "lorazepam|ativan");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 59, "alprazolam|xanax");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 59, "zolpidem");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 59, "chloral hydrate");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 60, "dexmedetomidine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 60, "etomidate");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 60, "methohexital|brevital");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 61, "remifentanil");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 61, "sevoflurane");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 61, "desflurane");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 62, "isoflurane");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 62, "succinylcholine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 62, "rocuronium");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 63, "neostigmine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 63, "sugammadex");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 63, "ondansetron|zofran");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 64, "scopolamine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 64, "diphenhydramine|benadryl");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 64, "cetirizine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 65, "epinephrine autoinjector|epipen");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 65, "albuterol");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 65, "nitroglycerin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 66, "oxygen");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 66, "glucose|oral glucose");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 66, "glucagon");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 67, "ammonia inhalants|smelling salts");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 67, "ephedrine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 67, "amiodarone");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 68, "adenosine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 68, "magnesium sulfate");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 68, "levonordefrin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 69, "felypressin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 69, "sodium bicarbonate buffer|onset");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 69, "hyaluronidase");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 70, "dyclonine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 71, "cetacaine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 71, "ethyl chloride");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 71, "eugenol|clove oil");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 72, "alvogyl");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 72, "dry socket paste");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 72, "amlexanox|aphthasol");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 73, "docosanol|abreva");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 73, "penciclovir|denavir");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 73, "famciclovir");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 74, "miconazole|oravig");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 74, "amphotericin b");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 74, "posaconazole");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 75, "ketoconazole");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 75, "chlorhexidine chip|periochip");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 75, "doxycycline gel|atridox");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 76, "enamel matrix derivative|emdogain");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 76, "rhpdgf|gem 21s");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 77, "bmp|bone morphogenetic protein");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 77, "platelet rich fibrin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 77, "thrombin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 78, "collagen plug");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 78, "oxidized cellulose|surgicel");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 78, "bone wax");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 79, "vitamin k");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 79, "desmopressin|ddavp");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 79, "factor viii");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 80, "botulinum toxin|botox");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 80, "hyaluronic acid filler");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 80, "carbamide peroxide");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 81, "hydrogen peroxide");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 81, "sodium perborate");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 81, "camphorated parachlorophenol|cmcp");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 82, "cresatin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 82, "iodoform");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 82, "xylitol");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 83, "saliva substitutes");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 83, "bethanechol");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 83, "artificial saliva");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 84, "sucralfate");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 84, "benzydamine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 84, "doxepin rinse");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 85, "gabapentin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 85, "pregabalin");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 85, "carbamazepine|tegretol");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 86, "oxcarbazepine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 86, "amitriptyline");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 86, "nortriptyline");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 87, "clonazepam");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 87, "cyclobenzaprine|flexeril");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 87, "baclofen");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 88, "tizanidine");  // 2026-11-04 · INBDE
board("Name a drug used in dentistry", 88, "methocarbamol");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 45, "cranium|skull");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 45, "neurocranium");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 46, "viscerocranium|facial skeleton");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 46, "calvaria");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 51, "middle nasal concha");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 51, "superior nasal concha");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 51, "ossicles");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 52, "malleus");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 52, "incus");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 52, "stapes");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 53, "wormian bones");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 53, "metopic suture");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 53, "intermaxillary suture|midpalatal suture");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 54, "transverse palatine suture");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 54, "frontonasal suture");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 54, "zygomaticotemporal suture");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 55, "zygomaticomaxillary suture");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 55, "sphenooccipital synchondrosis");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 55, "anterior fontanelle");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 56, "posterior fontanelle");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 56, "sphenoidal fontanelle");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 56, "mastoid fontanelle");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 56, "asterion");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 57, "vertex");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 57, "opisthion");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 57, "basion");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 58, "porion");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 58, "orbitale");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 59, "articulare");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 59, "gonion");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 59, "point a|subspinale");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 60, "point b|supramentale");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 60, "posterior nasal spine|pns");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 61, "prosthion");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 61, "infradentale");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 61, "frankfort horizontal plane");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 62, "occlusal plane");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 62, "mandibular plane");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 62, "sn line");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 63, "superior orbital fissure");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 63, "inferior orbital fissure");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 63, "optic canal");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 64, "foramen lacerum");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 64, "stylomastoid foramen");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 64, "hypoglossal canal");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 65, "condylar canal");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 65, "pterygoid canal|vidian canal");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 65, "pterygopalatine fossa");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 66, "infratemporal fossa");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 66, "temporal fossa");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 66, "anterior cranial fossa");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 67, "middle cranial fossa");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 67, "posterior cranial fossa");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 67, "pituitary fossa|hypophyseal fossa");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 68, "dorsum sellae");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 68, "clinoid processes");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 68, "greater wing of sphenoid");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 69, "lesser wing of sphenoid");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 69, "lateral pterygoid plate");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 69, "medial pterygoid plate");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 70, "pterygomaxillary fissure");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 70, "perpendicular plate of ethmoid");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 71, "petrous part of temporal bone|petrous ridge");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 71, "squamous part of temporal");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 71, "tympanic part");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 72, "zygomatic process");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 72, "articular tubercle");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 72, "postglenoid process");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 73, "petrotympanic fissure");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 73, "mandibular notch|sigmoid notch");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 73, "condylar neck");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 74, "pterygoid fovea");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 74, "mandibular canal");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 74, "mylohyoid groove");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 75, "submandibular fossa");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 75, "sublingual fossa");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 75, "digastric fossa");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 76, "mental protuberance");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 76, "mental tubercle");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 76, "symphysis|mandibular symphysis");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 77, "retromolar triangle");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 77, "alveolar crest");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 77, "incisive canal");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 78, "lesser palatine foramen");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 78, "posterior superior alveolar foramina");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 78, "infraorbital canal");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 79, "infraorbital groove");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 79, "nasolacrimal canal");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 79, "frontal process of maxilla");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 80, "palatine process of maxilla");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 80, "zygomatic process of maxilla");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 80, "canine fossa");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 81, "incisive fossa");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 81, "key ridge|zygomatic buttress");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 81, "piriform aperture");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 82, "sphenoidal process");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 82, "occipital condyles");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 82, "superior nuchal line");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 83, "inferior nuchal line");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 83, "internal occipital protuberance");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 83, "foramen cecum");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 84, "sulcus for sigmoid sinus");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 84, "arcuate eminence");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 84, "tegmen tympani");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 85, "frontal crest");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 85, "supraorbital margin|supraorbital ridge");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 85, "superciliary arch|brow ridge");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 86, "temporal line");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 86, "parietal eminence");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 86, "zygomaticofacial foramen");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 87, "zygomaticotemporal foramen");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 87, "mental spine|genial spine");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 87, "antegonial notch");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 88, "torus mandibularis");  // 2026-11-04 · INBDE
board("Name a bone or landmark of the skull", 88, "torus palatinus");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 45, "gingival index");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 45, "plaque index");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 46, "o'leary plaque score");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 46, "psr|periodontal screening and recording");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 46, "cpitn");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 47, "relative attachment level");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 47, "gingival margin level");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 47, "mucogingival junction");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 47, "attached gingiva");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 48, "free gingiva");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 48, "interdental col");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 48, "gingival sulcus");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 49, "sulcular fluid|gcf|gingival crevicular fluid");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 49, "suprabony pocket");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 49, "infrabony pocket|intrabony defect");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 49, "pseudopocket|gingival pocket");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 50, "horizontal bone loss");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 50, "vertical bone loss|angular defect");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 50, "crater|osseous crater");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 51, "one wall defect");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 51, "two wall defect");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 51, "three wall defect");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 51, "dehiscence");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 52, "fenestration");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 52, "exostosis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 52, "furcation grade i|grade ii furcation|grade iii furcation|class iii furcation");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 52, "glickman classification");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 53, "hamp classification");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 53, "miller classification");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 53, "cairo classification");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 54, "miller mobility index");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 54, "tooth mobility class");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 54, "primary occlusal trauma");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 54, "secondary occlusal trauma");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 55, "pathologic migration");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 55, "flaring");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 55, "non plaque induced gingivitis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 56, "puberty gingivitis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 56, "leukemic gingivitis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 56, "linear gingival erythema");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 57, "plasma cell gingivitis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 57, "hereditary gingival fibromatosis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 57, "phenytoin induced gingival enlargement");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 57, "cyclosporine induced gingival enlargement");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 58, "calcium channel blocker gingival enlargement");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 58, "gingival abscess");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 58, "pericoronal abscess");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 59, "periodontal endodontic lesion|endo perio lesion");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 59, "necrotizing periodontal diseases");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 59, "necrotizing stomatitis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 59, "periodontitis as manifestation of systemic disease");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 60, "localized periodontitis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 60, "generalized periodontitis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 60, "molar incisor pattern");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 60, "refractory periodontitis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 61, "2017 classification");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 61, "periodontal health");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 61, "reduced periodontium");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 62, "gingival biotype|phenotype");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 62, "thick biotype");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 62, "thin biotype");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 62, "recession type 1|rt1");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 63, "gingival cleft");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 63, "creeping attachment");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 63, "long junctional epithelium");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 64, "new attachment");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 64, "reattachment");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 64, "regeneration");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 65, "repair");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 65, "osseous surgery|resective surgery");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 65, "osteoplasty");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 65, "ostectomy");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 66, "apically positioned flap");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 66, "coronally advanced flap");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 66, "laterally positioned flap");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 66, "modified widman flap");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 67, "envelope flap");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 67, "full thickness flap");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 67, "partial thickness flap");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 68, "gingivectomy");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 68, "gingivoplasty");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 68, "tunneling technique");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 68, "alloderm|acellular dermal matrix");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 69, "enamel matrix derivative|emdogain");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 69, "platelet rich fibrin|prf");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 69, "tetracycline root conditioning");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 70, "edta root conditioning");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 70, "root planing");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 70, "debridement");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 71, "ultrasonic instrumentation");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 71, "curettage");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 71, "full mouth disinfection");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 71, "host modulation|periostat");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 72, "systemic antibiotics");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 72, "amoxicillin and metronidazole");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 72, "chlorhexidine");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 73, "supportive periodontal therapy");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 73, "re evaluation");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 73, "prognosis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 73, "risk factors");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 74, "genetic polymorphism|il 1 polymorphism");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 74, "crevicular epithelium");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 74, "oral epithelium");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 74, "stippling");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 75, "gingival fibers");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 75, "dentogingival fibers");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 75, "transseptal fibers");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 76, "alveolar crest fibers");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 76, "horizontal fibers");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 76, "oblique fibers");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 76, "apical fibers");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 77, "interradicular fibers");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 77, "sharpey fibers");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 77, "cribriform plate|lamina dura");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 78, "bundle bone");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 78, "socransky complexes");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 78, "orange complex");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 78, "prevotella intermedia");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 79, "fusobacterium nucleatum");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 79, "eikenella corrodens");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 79, "campylobacter rectus");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 79, "capnocytophaga");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 80, "spirochetes");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 80, "streptococcus sanguinis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 80, "actinomyces");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 81, "keystone pathogen");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 81, "dysbiosis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 81, "pellicle");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 81, "materia alba");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 82, "subgingival calculus");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 82, "supragingival calculus");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 82, "serumal calculus");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 82, "calculus bridge");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 83, "gingival enlargement");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 83, "recession class i|class ii recession|class iii recession|class iv recession");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 83, "periodontal splint");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 84, "occlusal adjustment");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 84, "bite guard");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 84, "perio chart");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 84, "periodontal disease index");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 85, "russell periodontal index");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 85, "community periodontal index");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 85, "marginal bone level");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 86, "crown to root ratio");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 86, "root proximity");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 86, "enamel projections");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 86, "palatogingival groove");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 87, "cervical enamel projection");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 87, "overhanging restoration");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 87, "food impaction");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 87, "mouth breathing gingivitis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 88, "halitosis");  // 2026-11-04 · INBDE
board("Name a periodontal term or condition", 88, "bone fill");  // 2026-11-04 · INBDE
board("Name a dental emergency", 45, "irreversible pulpitis");  // 2026-11-04 · INBDE
board("Name a dental emergency", 46, "acute apical abscess");  // 2026-11-04 · INBDE
board("Name a dental emergency", 46, "periodontal abscess");  // 2026-11-04 · INBDE
board("Name a dental emergency", 47, "pericoronal abscess");  // 2026-11-04 · INBDE
board("Name a dental emergency", 48, "deep space infection");  // 2026-11-04 · INBDE
board("Name a dental emergency", 48, "cavernous sinus thrombosis");  // 2026-11-04 · INBDE
board("Name a dental emergency", 49, "airway compromise");  // 2026-11-04 · INBDE
board("Name a dental emergency", 50, "alveolar osteitis");  // 2026-11-04 · INBDE
board("Name a dental emergency", 51, "avulsed primary tooth");  // 2026-11-04 · INBDE
board("Name a dental emergency", 52, "crown fracture with pulp exposure|complicated crown fracture");  // 2026-11-04 · INBDE
board("Name a dental emergency", 53, "uncomplicated crown fracture");  // 2026-11-04 · INBDE
board("Name a dental emergency", 53, "crown root fracture");  // 2026-11-04 · INBDE
board("Name a dental emergency", 54, "alveolar fracture");  // 2026-11-04 · INBDE
board("Name a dental emergency", 54, "concussion");  // 2026-11-04 · INBDE
board("Name a dental emergency", 55, "subluxation");  // 2026-11-04 · INBDE
board("Name a dental emergency", 55, "mandible fracture");  // 2026-11-04 · INBDE
board("Name a dental emergency", 56, "zygomatic fracture");  // 2026-11-04 · INBDE
board("Name a dental emergency", 57, "le fort fracture");  // 2026-11-04 · INBDE
board("Name a dental emergency", 57, "condylar fracture");  // 2026-11-04 · INBDE
board("Name a dental emergency", 58, "tmj dislocation|open lock");  // 2026-11-04 · INBDE
board("Name a dental emergency", 58, "closed lock");  // 2026-11-04 · INBDE
board("Name a dental emergency", 59, "lip laceration");  // 2026-11-04 · INBDE
board("Name a dental emergency", 60, "tongue laceration");  // 2026-11-04 · INBDE
board("Name a dental emergency", 60, "gingival laceration");  // 2026-11-04 · INBDE
board("Name a dental emergency", 61, "electrical burn of lip");  // 2026-11-04 · INBDE
board("Name a dental emergency", 61, "necrotizing gingivitis|anug");  // 2026-11-04 · INBDE
board("Name a dental emergency", 62, "herpetic gingivostomatitis");  // 2026-11-04 · INBDE
board("Name a dental emergency", 63, "lost temporary crown");  // 2026-11-04 · INBDE
board("Name a dental emergency", 64, "broken temporary");  // 2026-11-04 · INBDE
board("Name a dental emergency", 64, "loose orthodontic band");  // 2026-11-04 · INBDE
board("Name a dental emergency", 65, "loose bracket");  // 2026-11-04 · INBDE
board("Name a dental emergency", 65, "lost retainer");  // 2026-11-04 · INBDE
board("Name a dental emergency", 66, "broken retainer");  // 2026-11-04 · INBDE
board("Name a dental emergency", 66, "implant fracture");  // 2026-11-04 · INBDE
board("Name a dental emergency", 67, "loose implant crown");  // 2026-11-04 · INBDE
board("Name a dental emergency", 68, "swallowed object");  // 2026-11-04 · INBDE
board("Name a dental emergency", 68, "aspirated tooth");  // 2026-11-04 · INBDE
board("Name a dental emergency", 69, "inhaled instrument");  // 2026-11-04 · INBDE
board("Name a dental emergency", 69, "syncope in chair");  // 2026-11-04 · INBDE
board("Name a dental emergency", 70, "anaphylaxis");  // 2026-11-04 · INBDE
board("Name a dental emergency", 71, "angioedema");  // 2026-11-04 · INBDE
board("Name a dental emergency", 71, "asthma attack");  // 2026-11-04 · INBDE
board("Name a dental emergency", 72, "hypoglycemia");  // 2026-11-04 · INBDE
board("Name a dental emergency", 72, "seizure in chair");  // 2026-11-04 · INBDE
board("Name a dental emergency", 73, "chest pain|angina");  // 2026-11-04 · INBDE
board("Name a dental emergency", 73, "heart attack");  // 2026-11-04 · INBDE
board("Name a dental emergency", 74, "hyperventilation");  // 2026-11-04 · INBDE
board("Name a dental emergency", 75, "local anesthetic toxicity");  // 2026-11-04 · INBDE
board("Name a dental emergency", 75, "epinephrine overdose");  // 2026-11-04 · INBDE
board("Name a dental emergency", 76, "airway obstruction|choking");  // 2026-11-04 · INBDE
board("Name a dental emergency", 76, "cardiac arrest");  // 2026-11-04 · INBDE
board("Name a dental emergency", 77, "hypertensive crisis");  // 2026-11-04 · INBDE
board("Name a dental emergency", 78, "adrenal crisis");  // 2026-11-04 · INBDE
board("Name a dental emergency", 78, "bisphosphonate necrosis");  // 2026-11-04 · INBDE
board("Name a dental emergency", 79, "osteomyelitis");  // 2026-11-04 · INBDE
board("Name a dental emergency", 79, "post op infection");  // 2026-11-04 · INBDE
board("Name a dental emergency", 80, "sinus communication");  // 2026-11-04 · INBDE
board("Name a dental emergency", 80, "nerve injury");  // 2026-11-04 · INBDE
board("Name a dental emergency", 81, "cracked tooth pain");  // 2026-11-04 · INBDE
board("Name a dental emergency", 82, "fractured cusp");  // 2026-11-04 · INBDE
board("Name a dental emergency", 82, "food impaction pain");  // 2026-11-04 · INBDE
board("Name a dental emergency", 83, "orthodontic wire poking");  // 2026-11-04 · INBDE
board("Name a dental emergency", 83, "denture sore");  // 2026-11-04 · INBDE
board("Name a dental emergency", 84, "swollen jaw");  // 2026-11-04 · INBDE
board("Name a dental emergency", 85, "hematoma after injection");  // 2026-11-04 · INBDE
board("Name a dental emergency", 86, "broken needle");  // 2026-11-04 · INBDE
board("Name a dental emergency", 86, "fistula|draining sinus");  // 2026-11-04 · INBDE
board("Name a dental emergency", 87, "fever with tooth pain");  // 2026-11-04 · INBDE
board("Name a dental emergency", 87, "difficulty swallowing");  // 2026-11-04 · INBDE
board("Name a dental emergency", 88, "difficulty breathing");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 46, "hiv associated periodontitis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 46, "kaposi sarcoma");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 46, "oral hairy leukoplakia");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 47, "acute myeloid leukemia");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 47, "acute lymphoblastic leukemia");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 47, "lymphoma");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 47, "langerhans cell histiocytosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 48, "agranulocytosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 48, "aplastic anemia");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 49, "folate deficiency");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 49, "riboflavin deficiency");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 50, "niacin deficiency");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 50, "vitamin d deficiency|rickets");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 50, "vitamin a deficiency");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 51, "zinc deficiency");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 51, "ulcerative colitis|pyostomatitis vegetans");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 51, "orofacial granulomatosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 52, "melkersson rosenthal syndrome");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 52, "reactive arthritis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 52, "rheumatoid arthritis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 52, "juvenile idiopathic arthritis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 53, "psoriasis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 53, "dermatomyositis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 53, "mixed connective tissue disease");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 54, "discoid lupus");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 54, "systemic sclerosis|crest syndrome");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 54, "graft versus host disease");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 55, "erythema multiforme");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 55, "stevens johnson syndrome|toxic epidermal necrolysis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 56, "mucous membrane pemphigoid");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 56, "bullous pemphigoid");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 56, "epidermolysis bullosa");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 57, "psoriasiform lesions");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 57, "chickenpox|varicella");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 57, "shingles|herpes zoster");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 58, "cytomegalovirus");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 58, "mumps");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 58, "rubella");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 59, "herpangina");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 59, "coxsackie");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 60, "covid 19");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 60, "mpox|monkeypox");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 60, "candidiasis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 61, "blastomycosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 61, "coccidioidomycosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 62, "aspergillosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 62, "mucormycosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 62, "actinomycosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 62, "leprosy");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 63, "diphtheria");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 63, "primary syphilis|chancre");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 64, "secondary syphilis|mucous patches");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 64, "tertiary syphilis|gumma");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 64, "hyperthyroidism");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 65, "congenital hypothyroidism|cretinism");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 65, "hypoparathyroidism");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 65, "pseudohypoparathyroidism");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 66, "hypophosphatasia");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 66, "vitamin d resistant rickets|x linked hypophosphatemia");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 66, "pituitary gigantism");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 66, "hypopituitarism");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 67, "diabetes insipidus");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 67, "pheochromocytoma|men 2b");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 68, "multiple endocrine neoplasia");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 68, "chronic kidney disease|renal osteodystrophy");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 68, "uremic stomatitis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 69, "cirrhosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 69, "hepatitis c");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 69, "hemochromatosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 70, "wilson disease");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 70, "alcoholism");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 71, "thalassemia");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 71, "von willebrand disease");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 71, "idiopathic thrombocytopenic purpura");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 71, "polycythemia vera");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 72, "plasma cell disorders");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 72, "metastatic cancer");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 73, "osteosarcoma");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 73, "marfan syndrome");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 73, "ehlers danlos syndrome");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 74, "incontinentia pigmenti");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 74, "basal cell nevus syndrome|gorlin");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 75, "cherubism");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 75, "fibrous dysplasia|mccune albright");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 75, "crouzon syndrome");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 76, "apert syndrome");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 76, "treacher collins");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 76, "pierre robin");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 76, "williams syndrome");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 77, "turner syndrome");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 77, "klinefelter syndrome");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 77, "papillon lefevre syndrome");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 78, "chediak higashi syndrome");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 78, "leukocyte adhesion deficiency");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 78, "hurler syndrome");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 79, "gaucher disease");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 79, "fabry disease");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 79, "cerebral palsy");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 80, "parkinson disease");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 80, "epilepsy|phenytoin hyperplasia");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 80, "bell's palsy");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 81, "trigeminal neuralgia");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 81, "myasthenia gravis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 81, "als");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 81, "multiple sclerosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 82, "hypertension|calcium channel blocker hyperplasia");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 82, "cyclosporine therapy");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 82, "organ transplant");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 83, "asthma|inhaled steroid thrush");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 83, "cystic fibrosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 83, "anorexia nervosa");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 84, "methamphetamine addiction");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 84, "cocaine addiction");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 85, "opioid use disorder");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 85, "osteopetrosis");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 86, "osteomalacia");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 87, "scarlatina");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 87, "silver poisoning|argyria");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 88, "arsenic poisoning");  // 2026-11-04 · INBDE
board("Name a systemic disease with oral signs", 88, "heavy metal poisoning");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 45, "dental exam");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 46, "annual exam");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 46, "new patient visit");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 47, "recall visit");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 47, "periodontal maintenance");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 48, "tooth decay");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 49, "filling replacement");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 50, "broken filling");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 50, "sore gums");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 50, "swollen gums");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 51, "gum recession|receding gums");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 52, "missing teeth");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 52, "tooth replacement");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 54, "partial denture");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 55, "denture reline");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 55, "denture repair");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 56, "broken denture");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 56, "crown replacement");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 57, "temporary crown fell out");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 57, "veneer fell off");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 58, "bonding repair");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 58, "tooth discoloration");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 58, "yellow teeth");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 59, "smile makeover");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 59, "cosmetic dentistry");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 59, "gummy smile");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 60, "uneven teeth");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 60, "underbite");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 61, "crossbite");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 61, "spacing");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 61, "aligners");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 62, "clear aligner check");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 63, "orthodontic emergency");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 64, "pulling a tooth");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 64, "impacted tooth");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 65, "pericoronitis");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 65, "dry socket");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 65, "post op check");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 66, "suture removal");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 66, "biopsy");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 66, "lump in mouth");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 67, "white patch");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 67, "ulcer that won't heal");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 68, "cold sores");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 68, "burning mouth");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 68, "taste changes");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 69, "jaw clicking");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 69, "headaches");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 70, "ear pain");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 70, "sleep apnea");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 71, "clenching");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 71, "worn teeth");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 72, "cracked tooth");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 72, "sensitivity to cold");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 73, "sensitivity to sweets");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 73, "pain when biting");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 74, "tooth infection");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 75, "trauma");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 75, "sports injury");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 75, "child's first visit");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 76, "teething");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 76, "baby bottle decay");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 77, "thumb sucking");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 77, "space maintainer");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 78, "prescription refill");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 79, "pre radiation exam");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 79, "pre transplant clearance");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 79, "pre cardiac surgery clearance");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 80, "bisphosphonate clearance");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 80, "pregnancy dental check");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 81, "diabetes dental check");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 81, "insurance benefits");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 81, "referral");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 82, "consultation");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 82, "treatment plan");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 83, "employment physical|military dental");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 83, "school requirement");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 83, "forensic identification");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 84, "dental records");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 84, "mouthguard for sports");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 84, "whitening touch up");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 85, "halitosis");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 85, "smoker stains");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 86, "oral piercing problems");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 86, "bump on gums");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 86, "tongue problems");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 87, "teeth shifting");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 87, "wisdom tooth pain");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 88, "implant check");  // 2026-11-04 · INBDE
board("Name a reason people visit the dentist", 88, "crown lengthening");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 46, "mid|mesio incisal distal");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 47, "bl|buccolingual");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 47, "mesiolingual");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 47, "distobuccal");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 48, "mesiobuccal");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 48, "distolingual");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 49, "line angle");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 49, "point angle");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 49, "interproximal");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 50, "cervical third");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 50, "middle third");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 51, "occlusal third");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 51, "incisal third");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 51, "gingival");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 52, "subgingival");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 52, "supragingival");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 53, "root surface");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 54, "bleeding points");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 54, "suppuration");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 54, "plaque score");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 55, "calculus");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 55, "gingival margin");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 56, "clinical attachment level|cal");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 56, "mucogingival defect");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 56, "keratinized tissue width");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 57, "probing depth");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 57, "six point probing");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 58, "primary teeth letters");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 60, "maxillary arch");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 61, "mandibular arch");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 62, "g v black classification|black's classification");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 64, "incipient caries");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 64, "recurrent caries");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 65, "root caries");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 65, "arrested caries");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 66, "caries icdas");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 66, "amalgam restoration");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 66, "composite restoration");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 67, "gold crown");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 67, "full gold crown|fgc");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 68, "full cast crown");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 68, "porcelain crown");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 69, "zirconia crown");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 69, "veneer");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 69, "inlay");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 70, "onlay");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 71, "fpd|fixed partial denture");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 71, "rpd|removable partial denture");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 72, "complete denture|cd");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 72, "implant crown");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 73, "post");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 73, "core build up");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 73, "endodontically treated");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 74, "extraction indicated|to be extracted");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 74, "extracted");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 75, "edentulous");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 75, "edentulous space");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 76, "partially erupted");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 77, "retained root|root tip");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 77, "fractured tooth");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 77, "cracked tooth");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 78, "fremitus");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 79, "temporary restoration");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 80, "defective restoration");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 80, "open margin");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 81, "recurrent decay");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 81, "drifting");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 82, "tipped tooth");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 82, "rotation");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 82, "crossbite");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 84, "overjet");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 84, "overbite");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 85, "midline");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 85, "wear facet");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 86, "existing treatment");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 86, "proposed treatment");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 86, "completed treatment");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 87, "tooth surface codes");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 87, "haderup system");  // 2026-11-04 · INBDE
board("Name a dental charting term or tooth surface", 88, "fdi two digit system");  // 2026-11-04 · INBDE
board("Name an endodontic term", 45, "pulp chamber");  // 2026-11-04 · INBDE
board("Name an endodontic term", 45, "pulp horn");  // 2026-11-04 · INBDE
board("Name an endodontic term", 45, "pulp stones");  // 2026-11-04 · INBDE
board("Name an endodontic term", 46, "calcified canal|calcification");  // 2026-11-04 · INBDE
board("Name an endodontic term", 46, "canal orifice");  // 2026-11-04 · INBDE
board("Name an endodontic term", 46, "root canal anatomy");  // 2026-11-04 · INBDE
board("Name an endodontic term", 46, "vertucci classification");  // 2026-11-04 · INBDE
board("Name an endodontic term", 47, "c shaped canal");  // 2026-11-04 · INBDE
board("Name an endodontic term", 47, "mesiobuccal canal|mb1");  // 2026-11-04 · INBDE
board("Name an endodontic term", 47, "mesiolingual canal");  // 2026-11-04 · INBDE
board("Name an endodontic term", 47, "distolingual canal");  // 2026-11-04 · INBDE
board("Name an endodontic term", 48, "middle mesial canal");  // 2026-11-04 · INBDE
board("Name an endodontic term", 48, "apical delta");  // 2026-11-04 · INBDE
board("Name an endodontic term", 48, "apical third");  // 2026-11-04 · INBDE
board("Name an endodontic term", 48, "minor diameter");  // 2026-11-04 · INBDE
board("Name an endodontic term", 49, "radiographic apex");  // 2026-11-04 · INBDE
board("Name an endodontic term", 49, "cdj|cementodentinal junction");  // 2026-11-04 · INBDE
board("Name an endodontic term", 49, "endodontic access|access cavity");  // 2026-11-04 · INBDE
board("Name an endodontic term", 49, "straight line access");  // 2026-11-04 · INBDE
board("Name an endodontic term", 50, "unroofing");  // 2026-11-04 · INBDE
board("Name an endodontic term", 50, "deroofing");  // 2026-11-04 · INBDE
board("Name an endodontic term", 50, "orifice enlargement");  // 2026-11-04 · INBDE
board("Name an endodontic term", 50, "coronal flaring");  // 2026-11-04 · INBDE
board("Name an endodontic term", 50, "negotiation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 51, "scouting");  // 2026-11-04 · INBDE
board("Name an endodontic term", 51, "recapitulation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 51, "apical gauging");  // 2026-11-04 · INBDE
board("Name an endodontic term", 51, "master apical file|maf");  // 2026-11-04 · INBDE
board("Name an endodontic term", 52, "master cone");  // 2026-11-04 · INBDE
board("Name an endodontic term", 52, "tug back");  // 2026-11-04 · INBDE
board("Name an endodontic term", 52, "cone fit");  // 2026-11-04 · INBDE
board("Name an endodontic term", 52, "cone fit radiograph");  // 2026-11-04 · INBDE
board("Name an endodontic term", 53, "working length radiograph");  // 2026-11-04 · INBDE
board("Name an endodontic term", 53, "balanced force technique");  // 2026-11-04 · INBDE
board("Name an endodontic term", 53, "watch winding");  // 2026-11-04 · INBDE
board("Name an endodontic term", 54, "filing");  // 2026-11-04 · INBDE
board("Name an endodontic term", 54, "reaming");  // 2026-11-04 · INBDE
board("Name an endodontic term", 54, "k file");  // 2026-11-04 · INBDE
board("Name an endodontic term", 54, "h file|hedstrom");  // 2026-11-04 · INBDE
board("Name an endodontic term", 55, "reamer");  // 2026-11-04 · INBDE
board("Name an endodontic term", 55, "c file|c+ file");  // 2026-11-04 · INBDE
board("Name an endodontic term", 55, "barbed broach");  // 2026-11-04 · INBDE
board("Name an endodontic term", 55, "gates glidden drill");  // 2026-11-04 · INBDE
board("Name an endodontic term", 56, "peeso reamer");  // 2026-11-04 · INBDE
board("Name an endodontic term", 56, "lentulo spiral");  // 2026-11-04 · INBDE
board("Name an endodontic term", 56, "protaper");  // 2026-11-04 · INBDE
board("Name an endodontic term", 56, "waveone gold");  // 2026-11-04 · INBDE
board("Name an endodontic term", 57, "reciproc blue");  // 2026-11-04 · INBDE
board("Name an endodontic term", 57, "vortex blue");  // 2026-11-04 · INBDE
board("Name an endodontic term", 57, "edgefile");  // 2026-11-04 · INBDE
board("Name an endodontic term", 57, "xp endo finisher");  // 2026-11-04 · INBDE
board("Name an endodontic term", 58, "self adjusting file");  // 2026-11-04 · INBDE
board("Name an endodontic term", 58, "taper");  // 2026-11-04 · INBDE
board("Name an endodontic term", 58, "iso standardization");  // 2026-11-04 · INBDE
board("Name an endodontic term", 58, "0.02 taper");  // 2026-11-04 · INBDE
board("Name an endodontic term", 59, "file size");  // 2026-11-04 · INBDE
board("Name an endodontic term", 59, "irrigant");  // 2026-11-04 · INBDE
board("Name an endodontic term", 59, "17% edta");  // 2026-11-04 · INBDE
board("Name an endodontic term", 60, "qmix");  // 2026-11-04 · INBDE
board("Name an endodontic term", 60, "saline");  // 2026-11-04 · INBDE
board("Name an endodontic term", 60, "passive ultrasonic irrigation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 60, "sonic irrigation|endoactivator");  // 2026-11-04 · INBDE
board("Name an endodontic term", 61, "negative pressure irrigation|endovac");  // 2026-11-04 · INBDE
board("Name an endodontic term", 61, "side vented needle");  // 2026-11-04 · INBDE
board("Name an endodontic term", 61, "hypochlorite accident");  // 2026-11-04 · INBDE
board("Name an endodontic term", 61, "intracanal medicament");  // 2026-11-04 · INBDE
board("Name an endodontic term", 62, "triple antibiotic paste");  // 2026-11-04 · INBDE
board("Name an endodontic term", 62, "interappointment pain");  // 2026-11-04 · INBDE
board("Name an endodontic term", 62, "single visit endodontics");  // 2026-11-04 · INBDE
board("Name an endodontic term", 62, "multiple visit endodontics");  // 2026-11-04 · INBDE
board("Name an endodontic term", 63, "temporary restoration|cavit");  // 2026-11-04 · INBDE
board("Name an endodontic term", 63, "coronal leakage");  // 2026-11-04 · INBDE
board("Name an endodontic term", 63, "apical seal");  // 2026-11-04 · INBDE
board("Name an endodontic term", 63, "obturation materials");  // 2026-11-04 · INBDE
board("Name an endodontic term", 64, "accessory cones");  // 2026-11-04 · INBDE
board("Name an endodontic term", 64, "spreader");  // 2026-11-04 · INBDE
board("Name an endodontic term", 64, "plugger");  // 2026-11-04 · INBDE
board("Name an endodontic term", 64, "continuous wave of condensation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 65, "system b|downpack");  // 2026-11-04 · INBDE
board("Name an endodontic term", 65, "backfill|obtura");  // 2026-11-04 · INBDE
board("Name an endodontic term", 65, "carrier based obturation|thermafil");  // 2026-11-04 · INBDE
board("Name an endodontic term", 65, "bioceramic sealer");  // 2026-11-04 · INBDE
board("Name an endodontic term", 66, "ah plus");  // 2026-11-04 · INBDE
board("Name an endodontic term", 66, "resilon");  // 2026-11-04 · INBDE
board("Name an endodontic term", 66, "overfill|overextension");  // 2026-11-04 · INBDE
board("Name an endodontic term", 66, "underfill");  // 2026-11-04 · INBDE
board("Name an endodontic term", 66, "voids");  // 2026-11-04 · INBDE
board("Name an endodontic term", 67, "extrusion of sealer");  // 2026-11-04 · INBDE
board("Name an endodontic term", 67, "post placement");  // 2026-11-04 · INBDE
board("Name an endodontic term", 67, "fiber post");  // 2026-11-04 · INBDE
board("Name an endodontic term", 67, "ferrule");  // 2026-11-04 · INBDE
board("Name an endodontic term", 68, "cuspal coverage");  // 2026-11-04 · INBDE
board("Name an endodontic term", 68, "access restoration");  // 2026-11-04 · INBDE
board("Name an endodontic term", 68, "healing|periapical healing");  // 2026-11-04 · INBDE
board("Name an endodontic term", 68, "follow up radiograph");  // 2026-11-04 · INBDE
board("Name an endodontic term", 69, "periapical index|pai");  // 2026-11-04 · INBDE
board("Name an endodontic term", 69, "periapical lesion");  // 2026-11-04 · INBDE
board("Name an endodontic term", 69, "periapical granuloma");  // 2026-11-04 · INBDE
board("Name an endodontic term", 69, "radicular cyst");  // 2026-11-04 · INBDE
board("Name an endodontic term", 70, "true cyst|pocket cyst");  // 2026-11-04 · INBDE
board("Name an endodontic term", 70, "chronic apical abscess");  // 2026-11-04 · INBDE
board("Name an endodontic term", 70, "acute apical abscess");  // 2026-11-04 · INBDE
board("Name an endodontic term", 70, "symptomatic apical periodontitis");  // 2026-11-04 · INBDE
board("Name an endodontic term", 71, "asymptomatic apical periodontitis");  // 2026-11-04 · INBDE
board("Name an endodontic term", 71, "normal pulp");  // 2026-11-04 · INBDE
board("Name an endodontic term", 71, "previously treated");  // 2026-11-04 · INBDE
board("Name an endodontic term", 72, "previously initiated therapy");  // 2026-11-04 · INBDE
board("Name an endodontic term", 72, "normal apical tissues");  // 2026-11-04 · INBDE
board("Name an endodontic term", 72, "hyperemia");  // 2026-11-04 · INBDE
board("Name an endodontic term", 72, "hyperplastic pulpitis|pulp polyp");  // 2026-11-04 · INBDE
board("Name an endodontic term", 73, "external cervical resorption");  // 2026-11-04 · INBDE
board("Name an endodontic term", 73, "replacement resorption");  // 2026-11-04 · INBDE
board("Name an endodontic term", 73, "inflammatory resorption");  // 2026-11-04 · INBDE
board("Name an endodontic term", 73, "pulp canal obliteration");  // 2026-11-04 · INBDE
board("Name an endodontic term", 74, "split tooth");  // 2026-11-04 · INBDE
board("Name an endodontic term", 74, "craze line");  // 2026-11-04 · INBDE
board("Name an endodontic term", 74, "fractured cusp");  // 2026-11-04 · INBDE
board("Name an endodontic term", 75, "bite test|tooth slooth");  // 2026-11-04 · INBDE
board("Name an endodontic term", 75, "transillumination");  // 2026-11-04 · INBDE
board("Name an endodontic term", 75, "thermal test");  // 2026-11-04 · INBDE
board("Name an endodontic term", 75, "heat test");  // 2026-11-04 · INBDE
board("Name an endodontic term", 76, "ept");  // 2026-11-04 · INBDE
board("Name an endodontic term", 76, "laser doppler flowmetry");  // 2026-11-04 · INBDE
board("Name an endodontic term", 76, "pulse oximetry test");  // 2026-11-04 · INBDE
board("Name an endodontic term", 76, "test cavity");  // 2026-11-04 · INBDE
board("Name an endodontic term", 77, "selective anesthesia");  // 2026-11-04 · INBDE
board("Name an endodontic term", 77, "referred pain");  // 2026-11-04 · INBDE
board("Name an endodontic term", 77, "non odontogenic pain");  // 2026-11-04 · INBDE
board("Name an endodontic term", 77, "endodontic surgery");  // 2026-11-04 · INBDE
board("Name an endodontic term", 77, "root end resection");  // 2026-11-04 · INBDE
board("Name an endodontic term", 78, "root end filling|retrofill");  // 2026-11-04 · INBDE
board("Name an endodontic term", 78, "root end preparation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 78, "ultrasonic retropreparation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 78, "guided endodontics");  // 2026-11-04 · INBDE
board("Name an endodontic term", 79, "hemisection");  // 2026-11-04 · INBDE
board("Name an endodontic term", 79, "root amputation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 79, "bicuspidization");  // 2026-11-04 · INBDE
board("Name an endodontic term", 79, "intentional replantation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 80, "perio endo lesion");  // 2026-11-04 · INBDE
board("Name an endodontic term", 80, "instrument separation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 80, "zip|elbow");  // 2026-11-04 · INBDE
board("Name an endodontic term", 81, "apical transportation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 81, "strip perforation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 81, "furcal perforation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 81, "blockage");  // 2026-11-04 · INBDE
board("Name an endodontic term", 82, "ledging");  // 2026-11-04 · INBDE
board("Name an endodontic term", 82, "bypass");  // 2026-11-04 · INBDE
board("Name an endodontic term", 82, "subcutaneous emphysema");  // 2026-11-04 · INBDE
board("Name an endodontic term", 82, "paresthesia");  // 2026-11-04 · INBDE
board("Name an endodontic term", 83, "gutta percha removal");  // 2026-11-04 · INBDE
board("Name an endodontic term", 83, "solvent|chloroform|eucalyptol");  // 2026-11-04 · INBDE
board("Name an endodontic term", 83, "post removal");  // 2026-11-04 · INBDE
board("Name an endodontic term", 84, "dental dam clamp");  // 2026-11-04 · INBDE
board("Name an endodontic term", 84, "access through crown");  // 2026-11-04 · INBDE
board("Name an endodontic term", 84, "pulpal floor map");  // 2026-11-04 · INBDE
board("Name an endodontic term", 84, "dentinal map");  // 2026-11-04 · INBDE
board("Name an endodontic term", 85, "calcium silicate");  // 2026-11-04 · INBDE
board("Name an endodontic term", 85, "biodentine");  // 2026-11-04 · INBDE
board("Name an endodontic term", 85, "pulp regeneration");  // 2026-11-04 · INBDE
board("Name an endodontic term", 85, "vital pulp therapy");  // 2026-11-04 · INBDE
board("Name an endodontic term", 86, "partial pulpotomy|cvek pulpotomy");  // 2026-11-04 · INBDE
board("Name an endodontic term", 87, "stepwise excavation");  // 2026-11-04 · INBDE
board("Name an endodontic term", 87, "selective caries removal");  // 2026-11-04 · INBDE
board("Name an endodontic term", 87, "dentin bridge");  // 2026-11-04 · INBDE
board("Name an endodontic term", 87, "reparative dentin");  // 2026-11-04 · INBDE
board("Name an endodontic term", 88, "endodontic prognosis");  // 2026-11-04 · INBDE
board("Name an endodontic term", 88, "endodontic success");  // 2026-11-04 · INBDE
board("Name an endodontic term", 88, "endodontic failure");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 46, "pus drainage");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 46, "swollen face");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 47, "swollen cheek");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 47, "swollen jaw");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 48, "swollen gums");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 49, "red swollen gums");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 49, "warm skin");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 50, "redness of skin");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 50, "lymphadenopathy");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 51, "tender lymph nodes");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 52, "submandibular swelling");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 52, "neck swelling");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 53, "eye swelling|periorbital swelling");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 53, "chills");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 54, "sweats|night sweats");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 55, "tachycardia");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 55, "elevated temperature");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 56, "dehydration");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 57, "drooling");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 58, "voice change|hot potato voice");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 58, "stridor");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 59, "airway compromise");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 59, "raised tongue");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 60, "floor of mouth swelling");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 61, "bad odor");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 61, "foul taste");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 62, "salty taste");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 62, "pain on biting");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 63, "tender to touch");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 64, "tooth feels high|tooth feels long");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 64, "extruded tooth");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 65, "mobility");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 65, "tooth discoloration");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 66, "dark gray tooth");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 66, "lingering cold pain");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 67, "heat sensitivity relieved by cold");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 68, "spontaneous pain");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 68, "night pain");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 69, "pain radiating to jaw");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 70, "toothache that suddenly stops");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 71, "pain when lying down");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 72, "pressure feeling");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 72, "widened pdl space");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 73, "loss of lamina dura");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 74, "radiolucent lesion");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 74, "condensing osteitis");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 75, "bone destruction");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 75, "periapical lesion on x ray");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 76, "sinus congestion");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 77, "sinusitis");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 78, "eye pain");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 79, "confusion");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 80, "altered mental status");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 80, "low blood pressure");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 81, "high white blood cell count|leukocytosis");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 81, "elevated crp");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 82, "positive culture");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 83, "fistulous tract");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 83, "draining sinus on skin|cutaneous sinus tract");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 84, "limited opening");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 85, "facial asymmetry");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 86, "cheek redness");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 86, "swollen lip");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 87, "necrotic tissue");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 87, "ulceration");  // 2026-11-04 · INBDE
board("Name a sign of a dental infection", 88, "feeling sick");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 45, "needle stick injury");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 47, "cardiovascular collapse");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 47, "arrhythmia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 48, "bradycardia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 49, "cns depression");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 49, "cns excitation");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 49, "tremors");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 50, "perioral numbness");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 50, "metallic taste");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 51, "tinnitus");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 51, "dizziness");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 51, "drowsiness");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 52, "loss of consciousness");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 52, "respiratory depression");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 53, "respiratory arrest");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 53, "cardiac arrest");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 54, "anaphylaxis");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 54, "urticaria|hives");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 54, "angioedema");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 55, "rash");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 55, "bronchospasm");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 56, "sulfite allergy");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 56, "paraben allergy");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 56, "ester allergy");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 57, "panic attack");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 58, "nausea");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 58, "vomiting");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 58, "headache");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 59, "chest pain");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 60, "stroke");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 60, "epinephrine sensitivity");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 60, "interaction with beta blockers");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 61, "interaction with tricyclics");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 61, "interaction with cocaine");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 62, "interaction with mao inhibitors");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 62, "transient facial nerve palsy");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 62, "bell palsy");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 63, "horner syndrome");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 64, "ptosis");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 64, "strabismus");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 65, "ophthalmoplegia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 65, "hoarseness");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 66, "difficulty swallowing");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 66, "airway obstruction");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 66, "tissue necrosis");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 67, "palatal necrosis");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 67, "ulcer at injection site");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 68, "sloughing");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 68, "edema|swelling");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 69, "ecchymosis");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 70, "muscle soreness");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 71, "lingual nerve paresthesia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 71, "inferior alveolar nerve paresthesia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 71, "dysesthesia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 72, "hypoesthesia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 72, "hyperesthesia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 73, "dysgeusia|taste change");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 73, "neuritis");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 73, "neuroma");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 74, "self inflicted injury");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 74, "lip chewing in children");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 75, "cheek chewing");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 75, "tongue biting");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 75, "incomplete anesthesia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 76, "delayed onset");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 76, "short duration");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 77, "anesthetic failure due to infection");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 78, "cyanosis");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 79, "aspiration pneumonia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 79, "laryngospasm");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 79, "oversedation");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 80, "postoperative nausea");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 80, "emergence delirium");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 81, "paradoxical reaction to midazolam");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 81, "nitrous oxide diffusion hypoxia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 82, "nitrous oxide nausea");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 82, "b12 inactivation by nitrous");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 82, "hypoxia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 83, "hypercarbia");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 84, "burning on injection");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 84, "electric shock sensation");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 85, "epinephrine in finger|accidental digital injection");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 86, "cartridge breakage");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 86, "cartridge contamination|alcohol in cartridge");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 86, "wrong solution injected");  // 2026-11-04 · INBDE
board("Name a complication of dental anesthesia", 87, "expired anesthetic");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 45, "patient chair");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 46, "assistant stool");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 46, "operatory light");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 46, "led headlight");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 47, "loupes");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 47, "dental microscope");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 47, "delivery system|rear delivery|side delivery");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 48, "saliva ejector");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 49, "central vacuum");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 50, "amalgam separator");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 51, "vacuum former");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 51, "pressure former");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 51, "pressure pot");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 52, "curing oven");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 52, "porcelain furnace");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 52, "casting machine");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 53, "burnout oven");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 53, "investment vibrator");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 54, "bench engine");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 54, "steam cleaner");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 54, "sandblaster");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 55, "articulator");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 55, "face bow");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 55, "lab handpiece");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 56, "digital x ray sensor");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 56, "phosphor plate scanner");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 56, "x ray film processor|automatic processor");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 57, "darkroom");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 57, "daylight loader");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 57, "panoramic machine");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 58, "cephalometric unit");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 58, "cone beam ct");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 59, "handheld x ray|nomad");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 59, "thyroid collar");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 60, "x ray viewbox");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 61, "cad cam mill|cerec mill");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 61, "sintering furnace");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 62, "shade matching device");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 62, "caries detection device|diagnodent");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 63, "velscope|oral cancer screening light");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 63, "electric pulp tester");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 64, "obturation unit");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 65, "ultrasonic unit");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 65, "piezo surgery unit");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 65, "electrosurgery unit");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 66, "soft tissue laser");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 66, "hard tissue laser");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 67, "implant motor|surgical motor");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 67, "physiodispenser");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 67, "bone mill");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 68, "centrifuge|prf centrifuge");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 68, "nitrous oxide unit|flowmeter");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 68, "scavenging system");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 69, "pulse oximeter");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 69, "blood pressure cuff");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 70, "emergency oxygen");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 70, "ambu bag|bag valve mask");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 70, "crash cart");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 71, "defibrillator");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 71, "glucometer");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 72, "thermometer");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 72, "statim");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 73, "dry heat sterilizer");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 73, "chemiclave");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 73, "ultrasonic bath");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 74, "instrument washer");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 74, "sterilization pouches");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 74, "sealer for pouches");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 75, "instrument cassettes");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 75, "biological monitoring|spore test");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 76, "waterline cleaner");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 76, "eyewash station");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 76, "fire extinguisher");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 77, "hand sanitizer");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 78, "composite warmer");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 78, "anesthetic warmer");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 78, "cartridge warmer");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 79, "wand|computer controlled anesthesia");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 79, "vibrating device|dentalvibe");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 79, "bite block");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 80, "mouth prop");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 80, "rubber dam frame");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 81, "isolite|dryshield");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 81, "prophy angle");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 81, "handpiece lubricator");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 82, "handpiece maintenance system");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 83, "hydraulic chair");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 83, "foot control|rheostat");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 84, "bracket table");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 84, "sink");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 85, "biohazard container");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 86, "practice management software");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 86, "noise cancelling headphones");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 87, "safety glasses");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 87, "bib");  // 2026-11-04 · INBDE
board("Name a piece of equipment in a dental office", 88, "toy box|treasure chest");  // 2026-11-04 · INBDE
board("Name a word ending in -itis", 46, "osteoarthritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 48, "enterocolitis|necrotizing enterocolitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 51, "polyarteritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 53, "poliomyelitis|polio");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 53, "encephalomyelitis|acute disseminated encephalomyelitis|adem");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 57, "chorioamnionitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 58, "endomyometritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 58, "adnexitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 58, "parametritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 58, "funisitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 59, "posthitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 59, "balanoposthitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 59, "proctocolitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 59, "ileocolitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 60, "pancolitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 61, "pericoronitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 61, "osteochondritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 62, "apophysitis|calcaneal apophysitis|tibial tubercle apophysitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 62, "tracheobronchitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 63, "laryngotracheobronchitis|croup");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 63, "rhinosinusitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 63, "pansinusitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 63, "ethmoiditis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 64, "otitis media");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 64, "otitis externa|swimmer's ear");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 64, "malignant otitis externa");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 64, "myringitis|bullous myringitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 65, "petrositis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 65, "endophthalmitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 65, "panophthalmitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 65, "blepharoconjunctivitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 66, "keratoconjunctivitis|vernal keratoconjunctivitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 66, "neuroretinitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 66, "papillitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 66, "cyclitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 67, "iridocyclitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 67, "vitritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 68, "pyelitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 68, "ureteritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 68, "glomerulitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 68, "capillaritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 69, "endarteritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 69, "endophlebitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 69, "periarteritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 70, "myopericarditis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 70, "endomyocarditis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 70, "carditis|rheumatic carditis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 70, "pleuropericarditis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 71, "serositis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 71, "polyserositis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 72, "gastroduodenitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 72, "antritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 73, "hepatitis a");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 73, "hepatitis b");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 73, "hepatitis c");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 74, "hepatitis d");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 74, "hepatitis e");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 74, "steatohepatitis|nash");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 74, "cholangiohepatitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 74, "perihepatitis|fitz hugh curtis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 75, "pylephlebitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 75, "splenitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 75, "pyonephritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 76, "spondylodiscitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 76, "arachnoiditis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 76, "ependymitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 76, "leptomeningitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 76, "pachymeningitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 77, "meningoencephalitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 77, "rhombencephalitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 78, "panencephalitis|subacute sclerosing panencephalitis|sspe");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 78, "leukoencephalitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 78, "polioencephalitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 78, "ganglionitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 78, "polyneuritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 79, "mononeuritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 79, "plexitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 79, "neuromyelitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 80, "fibromyositis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 80, "pyomyositis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 80, "tendovaginitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 80, "onychitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 81, "dactylitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 81, "sesamoiditis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 81, "carpitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 82, "polychondritis|relapsing polychondritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 82, "chondrodermatitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 82, "canaliculitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 83, "tonsillopharyngitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 83, "adenoiditis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 83, "uvulitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 83, "nasopharyngitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 84, "rhinopharyngitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 85, "cryptitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 85, "omentitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 86, "adenitis|mesenteric adenitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 86, "thelitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 86, "funiculitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 87, "deferentitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 87, "vesiculitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 87, "prostatovesiculitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 87, "colpitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 88, "bartholinitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 88, "perineuritis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -itis", 88, "osteoperiostitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 45, "upper arms");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 45, "forearms");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 46, "palms");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 46, "soles");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 46, "index fingers");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 47, "pinky fingers");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 47, "ring fingers");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 47, "middle fingers");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 48, "pinky toes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 48, "eyeballs");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 48, "eye sockets|orbits");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 49, "pupils");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 49, "irises");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 50, "retinas");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 50, "lenses");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 50, "corneas");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 51, "eyelashes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 51, "earlobes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 51, "ear canals");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 52, "middle ears");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 52, "inner ears");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 52, "eustachian tubes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 53, "semicircular canals");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 53, "nasal cavities");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 53, "sinuses|maxillary sinuses");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 54, "frontal sinuses");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 54, "nasal passages");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 54, "cheekbones|zygomatic bones");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 55, "corners of the mouth");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 55, "parietal bones");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 55, "temporal bones");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 56, "nasal bones");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 56, "lacrimal bones");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 57, "palatine bones");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 57, "mandibular condyles");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 57, "sternocleidomastoids");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 58, "trapezius");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 58, "deltoids");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 58, "rotator cuffs");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 59, "latissimus dorsi");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 59, "glutes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 60, "calf muscles|gastrocnemius");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 60, "soleus");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 60, "achilles tendons");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 61, "menisci");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 61, "hip joints");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 61, "sacroiliac joints");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 62, "ribs");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 62, "true ribs");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 62, "floating ribs");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 63, "pleura");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 64, "pulmonary arteries");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 64, "pulmonary veins");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 64, "atria");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 65, "ventricles");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 65, "coronary arteries");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 65, "subclavian arteries");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 66, "axillary arteries");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 66, "brachial arteries");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 66, "radial arteries");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 67, "ulnar arteries");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 67, "renal arteries");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 67, "renal veins");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 68, "ovarian arteries");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 68, "testicular arteries");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 68, "internal carotids");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 69, "vertebral arteries");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 69, "popliteal arteries");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 69, "saphenous veins");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 70, "cephalic veins");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 70, "basilic veins");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 71, "spermatic cords");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 71, "epididymis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 71, "labia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 72, "bartholin glands");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 72, "mammary glands");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 72, "areolas");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 73, "axillary lymph nodes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 73, "inguinal lymph nodes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 73, "groins");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 74, "flanks");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 74, "hip flexors");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 74, "psoas muscles");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 75, "cerebellar hemispheres");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 75, "temporal lobes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 75, "frontal lobes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 76, "parietal lobes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 76, "occipital lobes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 76, "hippocampi");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 77, "amygdalae");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 77, "thalami");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 78, "basal ganglia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 78, "lateral ventricles");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 78, "cranial nerves");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 79, "spinal nerves");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 79, "phrenic nerves");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 79, "median nerves");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 80, "ulnar nerves");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 80, "radial nerves");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 80, "femoral nerves");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 81, "recurrent laryngeal nerves");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 81, "olfactory bulbs");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 81, "cerebral peduncles");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 82, "cerebellar tonsils");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 82, "mammillary bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 83, "arytenoid cartilages");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 83, "false vocal cords");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 84, "thyroid lobes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 84, "salivary glands");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 85, "sublingual glands");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 86, "radii");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 87, "ischium");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 87, "pubic bones");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 88, "condyles");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a body part that comes in pairs", 88, "malleoli|ankle bones");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 45, "addisonian crisis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 45, "arnold chiari malformation|chiari malformation");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 45, "baker cyst");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 45, "bartter syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 46, "gitelman syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 46, "liddle syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 46, "bernard soulier syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 46, "glanzmann thrombasthenia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 46, "wiskott aldrich syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 46, "chediak higashi syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 46, "bruton agammaglobulinemia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 46, "digeorge syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 47, "job syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 47, "kartagener syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 47, "budd chiari syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 47, "caplan syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 47, "felty syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 47, "still disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 47, "horner syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 47, "brown sequard syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 48, "parinaud syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 48, "wallenberg syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 48, "weber syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 48, "benedikt syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 48, "millard gubler syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 48, "gerstmann syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 48, "kluver bucy syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 48, "anton syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 49, "balint syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 49, "wernicke aphasia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 49, "broca aphasia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 49, "todd paralysis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 49, "erb palsy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 49, "klumpke palsy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 49, "volkmann contracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 49, "colles fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 50, "smith fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 50, "bennett fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 50, "rolando fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 50, "jones fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 50, "monteggia fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 50, "galeazzi fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 50, "maisonneuve fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 50, "lisfranc injury");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 51, "chance fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 51, "jefferson fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 51, "salter harris fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 51, "barton fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 51, "pott disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 51, "scheuermann disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 51, "kienbock disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 51, "sever disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 52, "morton neuroma");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 52, "ledderhose disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 52, "sudeck atrophy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 52, "charcot joint");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 52, "charcot triad");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 52, "reynolds pentad");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 52, "whipple triad");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 52, "virchow node");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 53, "sister mary joseph nodule");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 53, "krukenberg tumor");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 53, "blumer shelf");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 53, "courvoisier sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 53, "kehr sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 53, "rovsing sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 53, "psoas sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 54, "obturator sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 54, "boas sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 54, "carnett sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 54, "kayser fleischer rings");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 54, "mallory weiss tear");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 54, "boerhaave syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 54, "zenker diverticulum");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 54, "meckel diverticulum");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 55, "plummer vinson syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 55, "menetrier disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 55, "zollinger ellison syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 55, "curling ulcer");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 55, "cushing ulcer");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 55, "dubin johnson syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 55, "rotor syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 55, "gilbert syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 56, "crigler najjar syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 56, "reye syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 56, "caroli disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 56, "klatskin tumor");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 56, "ogilvie syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 56, "peutz jeghers syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 56, "gardner syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 56, "turcot syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 57, "lynch syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 57, "cowden syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 57, "li fraumeni syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 57, "von hippel lindau disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 57, "sturge weber syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 57, "bourneville disease|tuberous sclerosis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 57, "von recklinghausen disease|neurofibromatosis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 57, "osler weber rendu syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 58, "ehlers danlos syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 58, "kasabach merritt syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 58, "eisenmenger syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 58, "ebstein anomaly");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 58, "lutembacher syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 58, "dressler syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 58, "prinzmetal angina");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 58, "takotsubo cardiomyopathy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 59, "kussmaul sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 59, "quincke pulse");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 59, "de musset sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 59, "corrigan pulse");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 59, "duroziez sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 59, "traube sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 59, "graham steell murmur");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 59, "carey coombs murmur");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 60, "levine sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 60, "trendelenburg sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 60, "trendelenburg gait");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 60, "gower sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 60, "hoffmann sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 60, "lhermitte sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 60, "uhthoff phenomenon");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 60, "marcus gunn pupil");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 61, "argyll robertson pupil");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 61, "adie pupil");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 61, "battle sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 61, "cushing reflex");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 61, "westermark sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 61, "hampton hump");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 61, "kerley b lines");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 61, "fothergill sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 62, "chadwick sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 62, "goodell sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 62, "hegar sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 62, "braxton hicks contractions");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 62, "asherman syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 62, "meigs syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 62, "stein leventhal syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 62, "mayer rokitansky kuster hauser syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 63, "nelson syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 63, "waterhouse friderichsen syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 63, "hamman rich syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 63, "loffler syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 63, "pancoast tumor");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 63, "merkel cell carcinoma");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 63, "hutchinson freckle|hutchinson sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 63, "darier sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 64, "darier disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 64, "bowen disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 64, "paget disease of the breast");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 64, "henoch schonlein purpura|iga vasculitis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 64, "bechterew disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 64, "forestier disease|dish");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 64, "libman sacks endocarditis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 64, "aschoff bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 65, "anitschkow cells");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 65, "reed sternberg cells");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 65, "auer rods");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 65, "howell jolly bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 65, "heinz bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 65, "pappenheimer bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 65, "russell bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 65, "councilman bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 66, "mallory bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 66, "negri bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 66, "lewy body dementia|lewy bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 66, "pick disease|pick bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 66, "hirano bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 66, "cowdry bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 66, "call exner bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 66, "schiller duval bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 67, "michaelis gutmann bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 67, "donovan bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 67, "birbeck granules");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 67, "charcot leyden crystals");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 67, "curschmann spirals");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 67, "schaumann bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 67, "weibel palade bodies");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 68, "barr body");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 68, "kimmelstiel wilson nodules");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 68, "armanni ebstein");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 68, "wernicke korsakoff syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 68, "ganser syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 68, "fregoli delusion");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 68, "cotard delusion");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 68, "de clerambault syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 69, "othello syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 69, "lesch nyhan syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 69, "hartnup disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 69, "menkes disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 69, "refsum disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 69, "krabbe disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 69, "canavan disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 69, "alexander disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 70, "zellweger syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 70, "mcardle disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 70, "von gierke disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 70, "cori disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 70, "andersen disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 70, "hers disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 70, "tarui disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 70, "sanfilippo syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 71, "morquio syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 71, "scheie syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 71, "maroteaux lamy syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 71, "sly syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 71, "edwards syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 71, "patau syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 71, "noonan syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 71, "beckwith wiedemann syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 72, "potter sequence");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 72, "pierre robin sequence");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 72, "treacher collins syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 72, "crouzon syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 72, "apert syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 72, "waardenburg syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 72, "usher syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 72, "kearns sayre syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 73, "leigh syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 73, "leber hereditary optic neuropathy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 73, "stargardt disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 73, "coats disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 73, "best disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 73, "fuchs dystrophy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 73, "vogt koyanagi harada");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 73, "eales disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 74, "hashimoto encephalopathy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 74, "de quervain thyroiditis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 74, "riedel thyroiditis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 74, "plummer disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 74, "jod basedow phenomenon");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 74, "wolff chaikoff effect");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 74, "somogyi effect");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 74, "ludwig angina");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 75, "vincent angina");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 75, "paul bunnell test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 75, "weil felix test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 75, "widal test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 75, "mantoux test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 75, "schilling test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 75, "coombs test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 75, "kleihauer betke test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 76, "weber test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 76, "rinne test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 76, "dix hallpike maneuver");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 76, "kussmaul respiration");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 76, "biot breathing");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 76, "moro reflex");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 76, "landau reflex");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 76, "galant reflex");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 77, "ortolani maneuver");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 77, "barlow maneuver");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 77, "galeazzi sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 77, "thompson test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 77, "drawer test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 77, "hawkins test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 77, "neer test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 77, "speed test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 78, "yergason test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 78, "spurling test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 78, "patrick test|faber test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 78, "thomas test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 78, "ober test");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 78, "pemberton sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 78, "chaddock sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 78, "oppenheim sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 79, "gordon sign");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 79, "hutchinson triad");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 79, "hutchinson teeth");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 79, "charcot marie tooth disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 79, "dejerine sottas disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 79, "lambert eaton syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 79, "miller fisher syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 79, "devic disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 80, "marchiafava bignami disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 80, "binswanger disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 80, "gerstmann straussler scheinker");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 80, "sydenham chorea");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 80, "huntington chorea");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 80, "hallervorden spatz disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 80, "shy drager syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 80, "steele richardson olszewski syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 81, "machado joseph disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 81, "kennedy disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 81, "werdnig hoffmann disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 81, "kugelberg welander disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 81, "dandy walker malformation");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 81, "klippel feil syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 81, "klippel trenaunay syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 81, "parkes weber syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 82, "proteus syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 82, "mccune albright syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 82, "albright hereditary osteodystrophy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 82, "paget von schroetter syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 82, "leriche syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 82, "raynaud disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 82, "cogan syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 82, "susac syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 83, "jarisch herxheimer reaction");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 83, "chagas disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 83, "carrion disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 83, "weil disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 83, "brill zinsser disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 83, "hansen disease|leprosy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 83, "pott fracture");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 83, "lyell syndrome|toxic epidermal necrolysis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 84, "ritter disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 84, "hailey hailey disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 84, "letterer siwe disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 84, "hand schuller christian disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 84, "waldenstrom macroglobulinemia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 84, "castleman disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 84, "rosai dorfman disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 84, "kikuchi disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 85, "evans syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 85, "kostmann syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 85, "shwachman diamond syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 85, "fanconi syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 85, "gordon syndrome");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 85, "dent disease");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 85, "grawitz tumor");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 85, "brenner tumor");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 86, "sertoli leydig tumor");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 86, "leydig cell tumor");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 86, "sertoli cell tumor");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 86, "warthin tumor");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 86, "pindborg tumor");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 86, "spitz nevus");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 86, "becker nevus");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 86, "ota nevus|nevus of ota");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 87, "fordyce spots");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 87, "forchheimer spots");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 87, "bitot spots");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 87, "brushfield spots");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 87, "lisch nodules");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 87, "heberden nodes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 87, "bouchard nodes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 87, "terry nails");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 88, "beau lines");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 88, "muehrcke lines");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 88, "mees lines");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a disease or sign named after a person", 88, "lindsay nails");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 45, "malaise");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 45, "lethargy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 45, "somnolence|drowsiness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 46, "polyphagia|increased hunger");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 46, "nocturia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 47, "urgency");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 47, "hesitancy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 47, "weak urine stream");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 47, "urinary retention");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 48, "hematochezia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 49, "orthopnea");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 49, "paroxysmal nocturnal dyspnea|pnd");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 49, "exertional dyspnea");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 49, "tachypnea");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 50, "apnea");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 50, "stridor");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 50, "odynophagia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 50, "dyspepsia|indigestion");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 51, "early satiety");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 51, "regurgitation");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 51, "tenesmus");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 51, "fecal urgency");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 51, "steatorrhea|greasy stools");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 52, "pale stools|clay colored stools");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 52, "abdominal distension");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 52, "rectal pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 52, "rectal bleeding");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 52, "anal itching");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 53, "presyncope|lightheadedness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 53, "claudication");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 53, "leg pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 53, "cold extremities");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 54, "cold hands and feet");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 54, "chest tightness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 54, "chest pressure");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 54, "racing heart|tachycardia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 54, "skipped beats");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 55, "exercise intolerance");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 55, "aphasia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 55, "dysarthria");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 55, "ataxia|unsteady gait");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 56, "clumsiness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 56, "weakness on one side|hemiparesis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 56, "paralysis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 56, "paresthesia|pins and needles");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 56, "burning pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 57, "shooting pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 57, "neck pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 57, "shoulder pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 57, "hip pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 58, "knee pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 58, "foot pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 58, "heel pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 58, "wrist pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 58, "jaw pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 58, "toothache");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 59, "facial pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 59, "eye pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 59, "red eye");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 59, "itchy eyes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 59, "watery eyes|tearing");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 60, "dry eyes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 60, "floaters");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 60, "flashes of light");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 60, "vision loss");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 60, "tunnel vision");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 61, "halos around lights");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 61, "eye discharge");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 61, "ear discharge|otorrhea");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 61, "ear fullness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 61, "nasal discharge|rhinorrhea");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 62, "postnasal drip");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 62, "facial pressure|sinus pressure");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 62, "loss of voice|aphonia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 62, "lump in throat|globus");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 62, "bad breath|halitosis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 63, "mouth sores");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 63, "bleeding gums");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 63, "sore tongue");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 63, "metallic taste");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 63, "excessive salivation");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 64, "swollen glands|swollen lymph nodes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 64, "neck mass");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 64, "breast lump");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 64, "breast pain|mastalgia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 64, "nipple discharge");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 64, "vaginal discharge");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 65, "vaginal bleeding");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 65, "vaginal itching");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 65, "painful intercourse|dyspareunia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 65, "painful periods|dysmenorrhea");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 65, "missed period|amenorrhea");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 66, "spotting");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 66, "testicular pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 66, "scrotal swelling");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 66, "erectile dysfunction");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 66, "low libido");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 67, "feeling cold");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 67, "feeling hot");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 67, "clammy skin");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 68, "flushing");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 68, "hives|urticaria");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 68, "blisters");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 68, "skin peeling");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 68, "dry skin");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 69, "skin discoloration");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 69, "petechiae");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 69, "yellow eyes");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 69, "brittle nails");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 69, "thinning hair");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 70, "excess hair growth|hirsutism");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 70, "acne");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 70, "body aches|myalgia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 70, "arthralgia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 71, "muscle spasms");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 71, "joint swelling");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 71, "stiff joints");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 72, "reduced range of motion");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 72, "gait disturbance");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 72, "involuntary movements");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 72, "tics");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 73, "spasticity");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 73, "loss of balance");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 73, "lightheaded");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 73, "spinning sensation");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 73, "brain fog");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 74, "difficulty concentrating");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 74, "forgetfulness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 74, "disorientation");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 74, "delirium");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 74, "agitation");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 75, "restlessness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 75, "depression|depressed mood");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 75, "sadness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 75, "apathy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 75, "anhedonia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 75, "panic attacks");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 76, "nervousness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 76, "feeling of doom|sense of impending doom");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 76, "suicidal thoughts");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 76, "delusions");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 76, "nightmares");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 77, "snoring");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 77, "daytime sleepiness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 77, "sleepwalking");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 77, "night terrors");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 77, "bedwetting|enuresis");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 78, "teeth grinding");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 78, "loss of consciousness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 78, "convulsions");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 78, "aura");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 79, "phonophobia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 79, "neck rigidity");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 79, "nuchal rigidity");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 79, "back stiffness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 79, "sciatica");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 80, "groin pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 80, "flank pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 80, "side pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 80, "stomach ache");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 80, "epigastric pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 80, "right upper quadrant pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 81, "right lower quadrant pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 81, "left lower quadrant pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 81, "periumbilical pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 81, "suprapubic pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 81, "colicky pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 82, "gas pain");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 82, "belching|eructation");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 82, "vomiting coffee grounds");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 82, "projectile vomiting");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 83, "bilious vomiting");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 83, "morning sickness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 83, "motion sickness");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 83, "feeling full");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 83, "slow healing wounds");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 84, "cold sweats");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 84, "anosmia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 84, "ageusia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 85, "dysgeusia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 85, "xerophthalmia");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 85, "jaundiced skin");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 85, "cyanotic lips");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 86, "pallor");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 86, "pitting edema");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 86, "ascites|abdominal swelling");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 87, "sputum production");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 88, "rusty sputum");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 88, "frothy sputum");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a symptom", 88, "coughing at night");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 45, "hemicolectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 45, "sigmoidectomy|sigmoid colectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 46, "proctocolectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 46, "proctectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 47, "antrectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 48, "duodenectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 48, "ileectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 48, "jejunectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 48, "enterectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 49, "cecectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 49, "fistulectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 50, "fissurectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 50, "sphincterectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 51, "choledochectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 52, "metastasectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 52, "wedgectomy|wedge resection");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 52, "bilobectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 53, "thoracectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 53, "sternectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 53, "costectomy|rib resection");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 54, "valvectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 54, "ventriculectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 55, "aneurysmectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 55, "atriectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 57, "ovariectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 57, "clitoridectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 58, "labiectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 58, "hymenectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 58, "posthectomy|circumcision");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 59, "cystoprostatectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 60, "nephroureterectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 61, "pyelectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 61, "vesiculectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 62, "spermatocelectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 62, "hydrocelectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 64, "quadrantectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 65, "hemithyroidectomy|thyroid lobectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 66, "isthmusectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 66, "submandibulectomy|submandibular gland excision");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 66, "sialadenectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 67, "maxillectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 67, "mandibulectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 68, "orbitectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 68, "lensectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 68, "capsulectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 68, "cyclectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 69, "dacryoadenectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 69, "canaliculectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 69, "tarsectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 70, "stapedectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 70, "ossiculectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 70, "labyrinthectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 70, "cochleectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 71, "tympanectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 71, "hemipelvectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 71, "hemicorporectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 72, "hemilaminectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 72, "microdiscectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 72, "vertebrectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 72, "coccygectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 73, "sacrectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 73, "costotransversectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 73, "ostectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 74, "condylectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 74, "coronoidectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 74, "alveolectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 74, "patellectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 75, "sesamoidectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 75, "phalangectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 75, "metatarsectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 76, "carpectomy|proximal row carpectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 76, "trapeziectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 76, "acromionectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 76, "claviculectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 77, "bursectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 77, "ganglionectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 77, "neurectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 78, "topectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 78, "lesionectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 78, "amygdalectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 79, "pinealectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 79, "lipectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 79, "panniculectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 80, "dermatectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 80, "blepharectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 80, "rhytidectomy|facelift");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 80, "platysmectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 81, "onychectomy|nail removal");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 81, "matrixectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 81, "tenectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 81, "myectomy|septal myectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 82, "aponeurectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 82, "varicectomy|vein stripping");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 83, "phlebectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 83, "arteriectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 83, "vagectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 84, "esophagogastrectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 84, "diverticulectomy|meckel diverticulectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 85, "hemiglossectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 85, "laryngopharyngectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 86, "cordectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 86, "arytenoidectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 86, "epiglottectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 87, "mucosectomy|endoscopic mucosal resection");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 87, "papillectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 87, "ampullectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 87, "duodenopancreatectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 88, "splenopancreatectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
board("Name a word ending in -ectomy (surgical removal)", 88, "urethrectomy");  // 2026-11-04 · USMLE/NCLEX/INBDE
