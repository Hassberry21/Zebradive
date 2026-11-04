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
