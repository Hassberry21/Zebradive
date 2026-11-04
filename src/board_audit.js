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
