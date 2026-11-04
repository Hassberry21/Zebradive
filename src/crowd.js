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

// ===== 2026-11-03 full audit of every unrecognized guess (Oct 30 - Nov 3) =====
// biopsy / tests
crowd("Name a biopsy or tissue sampling procedure", 85, "endomyocardial biopsy|endocardial biopsy|heart biopsy");
crowd("Name a biopsy or tissue sampling procedure", 65, "dilation and curettage|dilatation and curettage|d and c|d&c");
crowdAlias("Name a biopsy or tissue sampling procedure", "cone biopsy", "lletz|large loop excision of the transformation zone|lower loop zone excision");
crowd("Name a biopsy or tissue sampling procedure", 85, "cryobiopsy|transbronchial cryobiopsy");
crowd("Name a blood test", 85, "galactomannan|galactomannan antigen|aspergillus antigen");
crowdAlias("Name a blood test", "serum protein electrophoresis", "myeloma screen");
crowdAlias("Name a heart test or cardiac study", "calcium score", "calcium artery score|coronary calcium score|cac score");
crowdAlias("Name a heart test or cardiac study", "ekg", "15 lead ecg|12 lead ecg|posterior ecg");
crowd("Name a heart test or cardiac study", 65, "bubble study|bubble test|agitated saline echo|bubble echo");
crowdAlias("Name a heart test or cardiac study", "cardiac mri", "cmri|cmr");
crowdAlias("Name a heart test or cardiac study", "bnp", "nt pro bnp|ntprobnp|nt probnp");
crowdAlias("Name a heart test or cardiac study", "stress test", "exercise test|exercise stress test|exercise tolerance test|exercise stress");
crowdAlias("Name a heart test or cardiac study", "ck mb", "creatine kinase|creatinine kinase|ck");
crowdAlias("Name a heart test or cardiac study", "ct coronary angiography", "coronary ct|ctca");
crowdAlias("Name a heart test or cardiac study", "coronary angiogram", "invasive coronary angiography|invasive cardiac angiography");
crowdAlias("Name a heart test or cardiac study", "implantable loop recorder", "ilr");
crowd("Name a heart test or cardiac study", 85, "myoglobin");
crowdAlias("Name a lab value nurses check before giving a medication", "liver enzymes", "alt|ast|alp|ggt|alanine transaminase|alanine aminotransferase|lfts|liver function tests");
crowdAlias("Name a urine test or finding on a urinalysis", "glucose", "glucosuria|glycosuria");
crowdAlias("Name a urine test or finding on a urinalysis", "cystine crystals", "cystine stones");
crowd("Name a urine test or finding on a urinalysis", 85, "pneumococcal urine antigen|streptococcal urinary antigen|urinary streptococcal antigen|strep pneumoniae urine antigen");
crowd("Name a preventive screening test", 85, "diabetic foot exam|foot screening|foot exam");
crowd("Name a preventive screening test", 85, "cell free dna|cfdna|nipt|noninvasive prenatal testing|cell free fetal dna");
crowdAlias("Name a preventive screening test", "bone density", "dexa scan|dxa scan");
crowdAlias("Name a preventive screening test", "pap smear", "cervical screening test|cervical screening|cst|smear test");
crowd("Name a preventive screening test", 65, "digital rectal exam|prostate exam|dre");
crowdAlias("Name a preventive screening test", "aaa ultrasound", "abdominal ultrasound for aaa");
crowd("Name a medical imaging test", 85, "dacryocystography|dacrocystography");
crowdAlias("Name a medical imaging test", "mri", "diffusion mri|dwi");
crowdAlias("Name a medical imaging test", "angiogram", "runoff angiogram|runoff");
crowdAlias("Name a nursing scale or assessment tool", "nihss", "nih|nih scale|nih stroke scale");
// causes / conditions
crowdAlias("Name a cause of a toothache", "sensitivity", "cold water|cold drinks|cold sensitivity");
crowdAlias("Name a cause of a toothache", "gum disease", "gingivitis");
crowdAlias("Name a cause of a toothache", "cavity", "dental caries|caries");
crowdAlias("Name a cause of anion gap metabolic acidosis", "iron", "iron toxicity|iron poisoning|iron overdose");
crowdAlias("Name a cause of blood in the urine", "granulomatosis with polyangiitis", "gpa|wegener granulomatosis|wegeners|wegener");
crowdAlias("Name a cause of blood in the urine", "bladder cancer", "cancer|malignancy");
crowdAlias("Name a cause of blood in the urine", "blood thinners", "anticoagulants|anticoagulant|doac|doacs|apixaban|rivaroxaban");
crowdAlias("Name a cause of blood in the urine", "catheter", "traumatic catheterization|traumatic catheter insertion|traumatic idc insertion");
crowd("Name a cause of blood in the urine", 85, "c3 glomerulopathy");
crowd("Name a cause of blood in the urine", 85, "acute interstitial nephritis|interstitial nephritis|drug induced interstitial nephritis");
crowd("Name a cause of blood in the urine", 85, "microscopic polyangiitis|mpa");
crowd("Name a cause of chronic cough", 65, "primary ciliary dyskinesia|pcd|kartagener syndrome|kartagener");
crowd("Name a cause of chronic cough", 85, "lung abscess");
crowd("Name a cause of chronic cough", 85, "bronchiolitis obliterans|popcorn lung");
crowdAlias("Name a cause of chronic cough", "heart failure", "ccf|congestive cardiac failure");
crowdAlias("Name a cause of dry mouth", "medications", "drugs");
crowdAlias("Name a cause of eosinophilia", "parasites", "dracunculus|guinea worm");
crowdAlias("Name a cause of hemolytic anemia", "mechanical heart valve", "aortic valve replacement|prosthetic heart valve|valve prosthesis");
crowdAlias("Name a cause of hypercalcemia", "bone metastases", "bony mets|bone mets|bony metastases");
crowdAlias("Name a cause of hypercalcemia", "squamous cell lung cancer", "squamous cell carcinoma of lung|squamous cell carcinoma");
crowdAlias("Name a cause of hypercalcemia", "milk alkali syndrome", "tums|antacids");
crowdAlias("Name a cause of hypercalcemia", "calcium supplements", "calcium pills|calcium tablets");
crowdAlias("Name a cause of jaundice", "breastfeeding jaundice", "milk jaundice");
crowd("Name a cause of nausea and vomiting", 65, "duodenal atresia");
crowd("Name a cause of nausea and vomiting", 65, "glp 1 agonists|glp1 agonists|semaglutide|ozempic|wegovy");
crowd("Name a cause of nausea and vomiting", 65, "constipation");
crowd("Name a cause of nausea and vomiting", 65, "giardiasis|giardia");
crowd("Name a cause of nausea and vomiting", 65, "achalasia");
crowd("Name a cause of nausea and vomiting", 85, "hyponatremia|low sodium");
crowd("Name a cause of nausea and vomiting", 85, "acetaminophen overdose|paracetamol overdose|tylenol overdose");
crowd("Name a cause of nausea and vomiting", 85, "serotonin syndrome");
crowd("Name a cause of nausea and vomiting", 85, "carbon monoxide poisoning|co poisoning");
crowd("Name a cause of nausea and vomiting", 85, "malaria");
crowd("Name a cause of nausea and vomiting", 85, "influenza|flu");
crowd("Name a cause of nausea and vomiting", 85, "opioid withdrawal|withdrawal");
crowd("Name a cause of nausea and vomiting", 85, "preeclampsia|pre eclampsia|eclampsia");
crowd("Name a cause of nausea and vomiting", 85, "cholangitis|ascending cholangitis");
crowd("Name a cause of nausea and vomiting", 85, "crohn disease|crohns");
crowd("Name a cause of nausea and vomiting", 85, "brain bleed|intracerebral hemorrhage|intracranial hemorrhage");
crowdAlias("Name a cause of nausea and vomiting", "increased intracranial pressure", "medulloblastoma");
crowdAlias("Name a cause of nausea and vomiting", "vertigo", "bppv|benign paroxysmal positional vertigo");
crowdAlias("Name a cause of nausea and vomiting", "concussion", "brain trauma|traumatic brain injury");
crowdAlias("Name a cause of nausea and vomiting", "food poisoning", "cyclospora|cyclosporiasis|enterotoxigenic e coli|bacillus cereus|shiga toxin");
crowd("Name a cause of seizures", 65, "cephalosporins|cefepime|cephalosporin");
crowdAlias("Name a cause of seizures", "brain tumor", "brain mets|brain metastases");
crowd("Name a cause of seizures", 85, "melas|mitochondrial disease");
crowd("Name a cause of seizures", 85, "carbapenem valproate interaction|meropenem");
crowd("Name a cause of seizures", 85, "hydrocephalus");
crowd("Name a cause of seizures", 85, "refeeding syndrome");
crowd("Name a cause of seizures", 85, "acute intermittent porphyria|porphyria");
crowd("Name a cause of seizures", 85, "functional seizures|psychogenic nonepileptic seizures|pnes|functional neurological disorder|fnd");
crowd("Name a cause of seizures", 85, "electroconvulsive therapy|ect");
crowd("Name a cause of seizures", 85, "neurofibromatosis");
crowdAlias("Name a cause of seizures", "brain bleed", "hemorrhage|intracranial hemorrhage");
crowdAlias("Name a cause of seizures", "flashing lights", "light flash|lights");
crowdAlias("Name a cause of unintentional weight loss", "cancer", "adenocarcinoma|colorectal cancer|colorectal adenocarcinoma|head and neck cancer|hnscc|malignancy|glioblastoma");
crowd("Name a cause of unintentional weight loss", 65, "achalasia");
crowdAlias("Name a cause of unintentional weight loss", "chronic infection", "infection");
crowdAlias("Name a cause of unintentional weight loss", "hyperthyroidism", "thyrotoxicosis|toxic multinodular goiter");
crowd("Name a cause of unintentional weight loss", 85, "pulmonary fibrosis|ipf");
crowd("Name a cause of unintentional weight loss", 85, "mycobacterium avium complex|mac");
crowd("Name a cause of unintentional weight loss", 85, "malnutrition");
crowd("Name a cause of unintentional weight loss", 85, "diuretics");
crowdAlias("Name a common reason for a primary care visit", "medication refill", "prescription|prescription refill");
crowd("Name a common reason for a primary care visit", 85, "blood in urine|hematuria");
// infectious
crowd("Name a bacterium that causes disease in humans", 65, "mycobacterium|mycobacteria");
crowdAlias("Name a disease spread by mosquitoes or ticks", "lymphatic filariasis", "wuchereria|wuchereria bancrofti");
crowdAlias("Name a disease spread by mosquitoes or ticks", "ehrlichiosis", "ehrlichia chaffeensis|ehrlichia");
crowdAlias("Name a disease spread by mosquitoes or ticks", "malaria", "plasmodium falciparum|falciparum malaria");
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "strep throat", "strep a");
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "c diff", "c difficile|clostridium difficile");
crowd("Name a sexually transmitted infection", 85, "lymphogranuloma venereum|lgv");
crowdAlias("Name a sexually transmitted infection", "syphilis", "chancre");
crowdAlias("Name a virus that infects humans", "influenza", "h1n1|h3n2|swine flu");
// drugs
crowdAlias("Name a drug best taken on an empty stomach", "alendronate", "alendronic acid|bisphosphonates");
crowd("Name a drug pulled from the market", 85, "diethylstilbestrol|des");
crowd("Name a drug that comes from a plant or natural source", 85, "oxycodone|thebaine");
crowd("Name a drug that interacts with warfarin", 85, "enoxaparin|heparin|lmwh");
crowdAlias("Name a hormone therapy or sex hormone drug", "estrogen", "ethinylestradiol|ethinyl estradiol|ethinyloestradiol");
crowdAlias("Name a hormone therapy or sex hormone drug", "ulipristal", "ellaone");
crowdAlias("Name a medication that comes as a nasal spray", "neffy", "adrenaline nasal|adrenaline");
crowd("Name a medication that comes as a nasal spray", 85, "cocaine|topical cocaine");
crowdAlias("Name a nephrotoxic drug", "contrast dye", "iodine|iodinated contrast");
crowdAlias("Name a nephrotoxic drug", "ace inhibitors", "ramipril|lisinopril|enalapril");
crowd("Name a prodrug", 85, "diamorphine|heroin");
crowd("Name a top-selling brand-name drug", 85, "keppra");
crowd("Name a restraint or restraint alternative", 65, "chemical restraint|lorazepam|ativan|haloperidol");
crowdAlias("Name an item on a crash cart", "calcium chloride", "calcium gluconate");
crowdAlias("Name an item on a crash cart", "pads", "electrodes");
crowdAlias("Name an item on a crash cart", "epinephrine", "epi|adrenaline");
// anatomy / cells
crowd("Name a ligament or tendon", 85, "chordae tendineae|chordae tendinae");
crowd("Name a ligament or tendon", 85, "ligamentum venosum");
crowd("Name a muscle", 85, "papillary muscle|papillary muscles");
crowd("Name a part of the brain", 85, "infundibulum|pituitary stalk");
crowd("Name a part of the brain", 85, "lateral lemniscus");
crowd("Name a part of the brain", 85, "meyer loop|meyers loop");
crowdAlias("Name a part of the eye", "cones", "cone cells");
crowdAlias("Name a part of the eye", "extraocular muscles", "superior rectus|inferior rectus|lateral rectus|medial rectus|superior oblique|inferior oblique");
crowd("Name a part of the eye", 85, "superior tarsal muscle|muller muscle");
crowd("Name a part of the eye", 85, "sphincter pupillae|iris sphincter");
crowdAlias("Name a part of the kidney or urinary tract", "mesangial cells", "mesangium");
crowd("Name a part of the kidney or urinary tract", 85, "urothelium|transitional epithelium");
crowd("Name a part of the kidney or urinary tract", 85, "principal cells");
crowd("Name a part of the kidney or urinary tract", 85, "glomerular basement membrane|gbm");
crowdAlias("Name a part of the kidney or urinary tract", "renal pelvis", "pelvis");
crowdAlias("Name a part of the kidney or urinary tract", "loop of henle", "descending loop|ascending loop|descending limb|thick ascending limb");
crowdAlias("Name a part of the kidney or urinary tract", "renal papilla", "papillae|papilla");
crowd("Name a component or cell of the blood", 85, "myelocyte|myelocytes");
crowd("Name a type of cell in the human body", 40, "squamous cell|squamous epithelial cell|squamous");
crowd("Name a type of cell in the human body", 65, "juxtaglomerular cell|juxtaglomerular");
crowd("Name a type of cell in the human body", 65, "anterior horn cell|motor neuron");
crowd("Name a type of cell in the human body", 65, "regulatory t cell|treg|t regulatory cells");
crowd("Name a type of cell in the human body", 85, "langerhans cell");
crowd("Name a type of cell in the human body", 85, "hurthle cell");
crowd("Name a type of cell in the human body", 85, "merkel cell");
crowd("Name a type of cell in the human body", 85, "corticotroph");
crowd("Name a type of cell in the human body", 85, "g cell");
crowd("Name a type of cell in the human body", 85, "chromaffin cell");
crowd("Name a type of cell in the human body", 85, "cuboidal epithelial cell|cuboidal epithelium");
crowd("Name a type of cell in the human body", 85, "endometrial cell");
crowdAlias("Name a type of cell in the human body", "egg", "ova");
crowdAlias("Name a type of cell in the human body", "fat cell", "adipose cell");
// heart / lungs / genetics
crowdAlias("Name a heart condition", "transposition of the great arteries", "transposition of the great vessels");
crowd("Name a heart condition", 85, "total anomalous pulmonary venous return|tapvr|total anomalous venous return");
crowdAlias("Name a heart condition", "supraventricular tachycardia", "avnrt|orthodromic avnrt|avrt");
crowd("Name a lung disease", 85, "eosinophilic granulomatosis with polyangiitis|egpa|churg strauss");
crowd("Name a lung disease", 85, "primary ciliary dyskinesia|pcd");
crowdAlias("Name a lung disease", "pulmonary fibrosis", "idiopathic fibrosis");
crowd("Name a genetic disorder", 85, "mcad deficiency|mcadd");
crowdAlias("Name a genetic disorder", "sickle cell", "scd");
crowd("Name an autosomal dominant disease", 85, "ehlers danlos syndrome|eds");
crowdAlias("Name a rare disease (a true zebra diagnosis)", "ehlers danlos syndrome", "eds");
crowd("Name an eye disease or condition", 85, "ophthalmoplegia");
crowd("Name a mental health disorder", 85, "othello syndrome|delusional jealousy");
crowd("Name a mental health disorder", 85, "acute stress disorder");
crowdAlias("Name a nutrient deficiency disease", "pernicious anemia", "b12 deficiency|b12");
// clinical signs / nursing
crowdAlias("Name a reason someone goes to the ER", "high fever", "fever");
crowdAlias("Name a reason someone goes to the ER", "broken bone", "fracture");
crowdAlias("Name a reason someone goes to the ER", "car accident", "car crash|car wreck|mvc|motor vehicle collision|motor vehicle accident|accident");
crowdAlias("Name a reason someone goes to the ER", "head injury", "brain injury|brain bleed|fall with head strike|head strike");
crowdAlias("Name a reason someone goes to the ER", "severe headache", "migraine");
crowdAlias("Name a reason someone goes to the ER", "testicular pain", "testicular torsion");
crowdAlias("Name a reason someone goes to the ER", "dizziness", "vertigo");
crowdAlias("Name a reason someone goes to the ER", "abdominal pain", "acute abdomen|acute abdo");
crowdAlias("Name a reason someone goes to the ER", "blood clot", "pulmonary embolism|embolism|dvt");
crowdAlias("Name a reason someone goes to the ER", "shortness of breath", "tachypnea");
crowdAlias("Name a reason someone goes to the ER", "vomiting", "nausea");
crowdAlias("Name a reason someone goes to the ER", "psychosis", "delusion|delusions");
crowdAlias("Name a reason someone goes to the ER", "dehydration", "hypovolemia|volume loss");
crowdAlias("Name a reason someone goes to the ER", "foreign object", "foreign body|nail in foot");
crowdAlias("Name a reason someone goes to the ER", "suicidal thoughts", "suicide|suicidal");
crowd("Name a reason someone goes to the ER", 40, "pain");
crowd("Name a reason someone goes to the ER", 40, "cough");
crowd("Name a reason someone goes to the ER", 65, "withdrawal|alcohol withdrawal");
crowd("Name a reason someone goes to the ER", 65, "hypertensive crisis|hypertensive emergency");
crowd("Name a reason someone goes to the ER", 85, "peritonsillar abscess|quinsy");
crowd("Name a reason someone goes to the ER", 85, "meningitis");
crowd("Name a reason someone goes to the ER", 85, "cauda equina syndrome|cauda equina");
crowd("Name a reason someone goes to the ER", 85, "serotonin syndrome");
crowd("Name a reason someone goes to the ER", 85, "copd exacerbation|copd");
crowd("Name a reason someone goes to the ER", 85, "diarrhea");
crowd("Name a reason someone goes to the ER", 85, "weakness");
crowd("Name a reason someone goes to the ER", 85, "jaundice");
crowd("Name a sign of a blood transfusion reaction", 85, "sense of impending doom|impending doom|feeling like you will die");
crowdAlias("Name a sign of a blood transfusion reaction", "back pain", "kidney pain|cva tenderness|loin pain");
crowdAlias("Name a sign of a urinary tract infection", "confusion in elderly", "altered mental status|ams|altered loc");
crowdAlias("Name a sign of a urinary tract infection", "cloudy urine", "discolored urine");
crowdAlias("Name a sign of dehydration", "decreased urine output", "anuria");
crowdAlias("Name a sign of opioid overdose", "unresponsive", "unresponsiveness|unconscious");
crowdAlias("Name a sign of opioid overdose", "clammy skin", "sweating");
crowd("Name a sign of opioid overdose", 85, "cardiac arrest");
crowdAlias("Name a sign of sepsis", "fever", "hyperthermia");
crowdAlias("Name a sign of shock", "lactic acidosis", "lactate|hyperlactatemia");
crowdAlias("Name a sign of shock", "pale skin", "pallor");
crowdAlias("Name a sign of shock", "altered mental status", "unconscious|unresponsive");
crowdAlias("Name a sleep disorder", "sleep apnea", "osa");
crowdAlias("Name a symptom of a heart attack", "sweating", "clammy|clamminess|clammy skin");
crowd("Name a symptom of a heart attack", 65, "sense of impending doom|impending doom|feeling like you will die");
crowdAlias("Name a symptom of diabetes", "slow healing", "ulcer|ulcers");
crowdAlias("Name a symptom of major depression", "sleep changes", "somnolence");
crowdAlias("Name a symptom of major depression", "sadness", "sad");
crowdAlias("Name a task an RN can delegate to a nursing assistant", "fingerstick blood sugar", "blood sugar|blood glucose|blood glucose monitoring|glucose check|bgl|bgl check|bsl");
crowdAlias("Name a task an RN can delegate to a nursing assistant", "vital signs", "obs|observations|vitals|sats");
crowdAlias("Name a task an RN can delegate to a nursing assistant", "collecting specimens", "urine sample|specimen collection");
crowdAlias("Name a task an RN can delegate to a nursing assistant", "emptying foley bag", "empty catheter bag|emptying catheter bag");
crowdAlias("Name a task an RN can delegate to a nursing assistant", "toileting", "bedpan");
crowd("Name a task an RN can delegate to a nursing assistant", 65, "ostomy care|stoma care|stoma bag change|stoma change");
crowd("Name a task an RN can delegate to a nursing assistant", 85, "incontinence care|pad change");
crowdAlias("Name a postpartum assessment", "postpartum depression screening", "mental health screen|depression screen|mental health|depression");
crowd("Name a postoperative complication", 85, "postoperative cognitive dysfunction|pocd|post operative cognitive decline");
crowdAlias("Name a postoperative complication", "pressure injury", "skin breakdown");
crowdAlias("Name a pulpal or periapical diagnosis", "acute apical abscess", "abscess");
crowdAlias("Name a nursing degree, license or credential", "msn", "master of clinical nursing|masters of nursing");
crowd("Name a nursing degree, license or credential", 85, "nmc registration|nmc pin|nmc");
crowd("Name a nursing ethical principle", 85, "duty of care|duty to care");
crowd("Name a patient right", 40, "autonomy|self determination|free will");
crowd("Name a medical ethics or legal concept", 85, "gillick competence|fraser guidelines");
crowd("Name a medical ethics or legal concept", 85, "human tissue act");
crowd("Name a healthcare profession", 85, "porter|hospital porter");
crowdAlias("Name a healthcare profession", "physical therapist", "physiotherapist|physio");
crowd("Name a hospital unit or department", 85, "outpatient clinic|outpatients|outpatient");
crowdAlias("Name a hospital unit or department", "rehab", "neurorehab|neuro rehab");
crowdAlias("Name a hospital unit or department", "nephrology", "renal|renal unit");
crowdAlias("Name a medical emergency", "asthma attack", "bronchospasm");
crowdAlias("Name a mobility aid or assistive device", "platform walker", "forearm support frame|gutter frame");
crowdAlias("Name an injection type or injection site", "upper arm", "arm");
crowdAlias("Name an oxygen delivery or airway device", "oral airway", "opa|guedel|guedel airway");
crowdAlias("Name an oxygen delivery or airway device", "nasal airway", "npa");
crowdAlias("Name an oxygen delivery or airway device", "high flow nasal cannula", "airvo|optiflow");
crowdAlias("Name an oxygen delivery or airway device", "nasal cannula", "nasal prongs");
crowdAlias("Name an oxygen delivery or airway device", "simple face mask", "hudson mask");
crowd("Name an oxygen delivery or airway device", 65, "i gel|igel|supraglottic airway");
crowdAlias("Name something found in a hospital room", "call light", "call bell|callbell");
crowd("Name a medical condition that changes dental treatment", 85, "cleft lip and palate|cleft palate|cleft lip");
crowd("Name a medical condition that changes dental treatment", 85, "down syndrome");
crowdAlias("Name a medical condition that changes dental treatment", "heart valve problems", "prosthetic heart valve|infective endocarditis|history of endocarditis");
crowdAlias("Name a food or drink that causes cavities", "soda", "coca cola|coke|pepsi");
crowdAlias("Name a famous person in medical history", "joseph lister", "lister");
crowd("Name a famous person in medical history", 85, "theodor schwann|schwann");
crowd("Name a physical exam sign named after a person", 85, "dix hallpike|dix hallpike maneuver");
// sports injuries
crowd("Name a sports injury", 40, "unhappy triad|terrible triad|odonoghue triad");
crowdAlias("Name a sports injury", "dislocated shoulder", "shoulder dislocation");
crowdAlias("Name a sports injury", "acl tear", "acl rupture|torn acl");
crowd("Name a sports injury", 65, "pes anserine bursitis");
crowd("Name a sports injury", 65, "degloving injury|degloving");
crowd("Name a sports injury", 85, "splenic rupture|spleen injury|spleen rupture");
crowdAlias("Name a sports injury", "spondylolysis", "pars defect|pars fracture|pars injury|pars");
crowd("Name a sports injury", 85, "tendinitis|tendonitis");
crowd("Name a sports injury", 65, "lcl tear|torn lcl|lcl sprain");
crowdAlias("Name a sports injury", "skier's thumb", "gamekeeper's thumb|gamekeepers thumb");
crowd("Name a sports injury", 85, "hill sachs lesion");
crowdAlias("Name a sports injury", "groin pull", "groin sprain|sprained groin");
crowdAlias("Name a sports injury", "pcl tear", "pcl rupture|torn pcl");
crowd("Name a sports injury", 85, "bursitis");
crowdAlias("Name a sports injury", "lisfranc injury", "lisfranc");
crowd("Name a sports injury", 85, "brachial plexus injury|brachial plexus avulsion");
crowd("Name a sports injury", 85, "baxter neuropathy|baxters neuropathy");
// misc
crowd("Name a teeth whitening method or product", 25, "bleaching|tooth bleaching");
crowd("Name a type of bone fracture", 65, "weber fracture|weber b|weber c|weber a|weber");
crowd("Name a type of bone fracture", 85, "complete fracture|complete");
crowd("Name a major medical discovery or invention", 65, "proton beam therapy");
crowdAlias("Name a major medical discovery or invention", "dna structure", "dna|double stranded dna");
crowd("Name a major medical discovery or invention", 65, "diathermy|electrosurgery");
crowd("Name a major medical discovery or invention", 85, "laser surgery|laser|laser therapy");
crowd("Name a major medical discovery or invention", 85, "tyrosine kinase inhibitors|tkis");
crowd("Name a major medical discovery or invention", 85, "hela cells|hela");
crowd("Name a major medical discovery or invention", 85, "sglt2 inhibitors|sglt2|flozins");
crowd("Name a major medical discovery or invention", 85, "glp 1 agonists|glp1|glp 1");
crowd("Name a major medical discovery or invention", 85, "syringe|hypodermic needle");
crowd("Name a major medical discovery or invention", 85, "tranexamic acid|txa");
crowd("Name a major medical discovery or invention", 85, "endotracheal tube|ett");
crowd("Name a major medical discovery or invention", 85, "nuclear medicine|technetium scan|datscan");
crowd("Name a major medical discovery or invention", 85, "quinine|antimalarials");
crowd("Name a major medical discovery or invention", 85, "hearing aids");
crowd("Name a major medical discovery or invention", 85, "intraocular lens|cataract surgery");
crowd("Name a major medical discovery or invention", 85, "speculum");
crowd("Name a major medical discovery or invention", 85, "propofol");
crowdAlias("Name a major medical discovery or invention", "monoclonal antibodies", "biologics|biologic|infliximab");
crowdAlias("Name a major medical discovery or invention", "robotic surgery", "da vinci|davinci");
crowd("Name a medical abbreviation", 85, "d50");
// stampede: colors
crowd("Name a medical term with a color in it", 65, "apple green birefringence");
crowd("Name a medical term with a color in it", 65, "congo red stain|congo red");
crowd("Name a medical term with a color in it", 85, "erythrocyte");
crowd("Name a medical term with a color in it", 85, "melanocyte");
crowd("Name a medical term with a color in it", 85, "red neurons");
crowd("Name a medical term with a color in it", 85, "blue cervix|chadwick sign");
crowd("Name a medical term with a color in it", 85, "rosacea");
crowdAlias("Name a medical term with a color in it", "black death", "black plague");
crowdAlias("Name a type of cell in the human body", "delta cell", "d cell|d cells");
crowdAlias("Name an antibiotic", "penicillin", "benzylpenicillin|benzyl penicillin|pen g");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a blood pressure medication", "hydrochlorothiazide", "bendroflumethiazide|bendrofluazide");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name an antidote", "n acetylcysteine", "paracetamol overdose|acetaminophen overdose|parvolex");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a medical emergency", "heart attack", "mi|stemi|ami");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a medical emergency", "anaphylaxis", "anaphylactic shock");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a medical emergency", "stroke", "cva");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a medical emergency", "pulmonary embolism", "pe");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name an artery", "carotid", "ica|eca");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a cause of jaundice", "pregnancy cholestasis", "obstetric cholestasis|icp");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a sign of shock", "delayed capillary refill", "cap refill|prolonged capillary refill|slow cap refill|crt");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a postpartum complication", "postpartum depression", "ppd|post natal depression|postnatal depression|pnd");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a postpartum complication", "pulmonary embolism", "pe");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a stage of labor or labor and delivery term", "fetal monitoring", "ctg|cardiotocography|efm");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a stage of labor or labor and delivery term", "pitocin", "syntocinon");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a stage of labor or labor and delivery term", "bloody show", "show");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a chronic disease", "kidney disease", "ckd|chronic kidney disease");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a chronic disease", "heart failure", "chf|congestive heart failure");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a chronic disease", "arthritis", "ra|rheumatoid arthritis|oa|osteoarthritis");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a chronic disease", "diabetes", "t2dm|t1dm|type 2 diabetes|type 1 diabetes|dm");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a cause of abdominal pain", "bowel obstruction", "sbo|small bowel obstruction|lbo|large bowel obstruction");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a neurological disorder", "als", "mnd|motor neurone disease");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a nursing job title or role", "patient care tech", "healthcare assistant|hca|health care assistant");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a nursing job title or role", "charge nurse", "sister|ward sister");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a nursing job title or role", "nurse manager", "matron|ward manager|nurse unit manager|num");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a vital sign or bedside assessment", "oxygen saturation", "sats");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a vital sign or bedside assessment", "blood glucose", "bgl|bsl|bm|cbg");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a vital sign or bedside assessment", "level of consciousness", "avpu|acvpu");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a surgical procedure", "gallbladder removal", "lap chole|laparoscopic cholecystectomy");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a surgical procedure", "knee replacement", "tkr|total knee replacement");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a surgical procedure", "hip replacement", "thr|total hip replacement");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a cause of shortness of breath", "pneumothorax", "ptx");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a cause of heart palpitations", "atrial fibrillation", "af|a fib");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a cause of heart palpitations", "premature ventricular contractions", "ectopics|ectopic beats|ventricular ectopics");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a cause of heart palpitations", "hyperthyroidism", "thyrotoxicosis|graves disease");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a cause of numbness or tingling", "vitamin b12 deficiency", "b12 deficiency|b12|pernicious anemia");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a cause of numbness or tingling", "guillain barre syndrome", "gbs");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a cause of numbness or tingling", "diabetes", "peripheral neuropathy|neuropathy");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a vaccine-preventable disease", "hepatitis b", "hep b|hbv");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a medical instrument or tool", "bag valve mask", "bvm");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a medical instrument or tool", "endotracheal tube", "ett");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a medical instrument or tool", "nasogastric tube", "ngt");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a medical instrument or tool", "ecg machine", "ecg|ekg machine");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name an endocrine disorder", "type 1 diabetes", "t1dm|t1d");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a sign of shock", "cold clammy skin", "clammy|clammy skin");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a sign of respiratory distress", "retractions", "intercostal recession|subcostal recession|recession|tracheal tug|intercostal retractions");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name something included in a nursing handoff report", "code status", "dnr|dnr status|resus status|resuscitation status|dnacpr");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name something included in a nursing handoff report", "intake and output", "fluid balance|ins and outs");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name something included in a nursing handoff report", "vital signs", "obs|observations");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a piece of PPE or infection control measure", "n95", "ffp3|ffp2");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a piece of PPE or infection control measure", "face shield", "visor");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a diet order", "npo", "nil by mouth|nbm");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a diet order", "regular", "free fluids|normal diet|full diet|ward diet");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a diet order", "tube feeding", "ng feed|enteral feeding|peg feed");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a warning sign of stroke", "face drooping", "fast|befast");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a warning sign of stroke", "slurred speech", "dysarthria");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name an activity of daily living", "walking", "mobilising|mobilizing");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name an eye drop medication", "artificial tears", "hypromellose|lubricating drops");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name an antihistamine", "chlorpheniramine", "piriton|chlorphenamine");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a migraine medication", "sumatriptan", "triptans|triptan");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a drug with a boxed (black box) warning", "warfarin", "coumadin|jantoven");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a drug patients inject themselves at home", "enoxaparin", "clexane");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a birth control method", "the pill", "ocp|combined oral contraceptive|coc");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a birth control method", "iud", "coil|iucd");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a birth control method", "tubal ligation", "sterilization|sterilisation|female sterilization");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a birth control method", "mini pill", "pop|progesterone only pill");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "pantoprazole", "ppi|ppis|proton pump inhibitor");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a topical skin medication", "clotrimazole", "canesten");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a topical skin medication", "miconazole", "daktarin");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a topical skin medication", "terbinafine", "lamisil");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a high-alert medication", "doacs", "anticoagulants");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a high-alert medication", "magnesium sulfate", "mag sulfate|mag sulphate|magnesium sulphate");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a high-alert medication", "opioids", "pca|patient controlled analgesia");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a drug best taken on an empty stomach", "levothyroxine", "thyroxine|eltroxin");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a drug for thyroid disease", "liothyronine", "t3");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a drug for thyroid disease", "radioactive iodine", "rai|i 131");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a drug for osteoporosis", "alendronate", "bisphosphonates|bisphosphonate");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a drug for osteoporosis", "zoledronic acid", "aclasta");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a drug for osteoporosis", "estrogen", "hrt");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a drug for smoking cessation or addiction treatment", "nicotine patch", "nrt|nicotine replacement therapy");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a drug for smoking cessation or addiction treatment", "buprenorphine", "subutex");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a drug for smoking cessation or addiction treatment", "acamprosate", "campral");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a sign of opioid overdose", "pinpoint pupils", "miosis|constricted pupils");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a sign of opioid overdose", "slow breathing", "respiratory depression|bradypnoea");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a sign of opioid overdose", "not breathing", "apnea|apnoea");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a medication that comes as a skin patch", "estrogen patch", "hrt patch|evorel");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a medication that comes as a skin patch", "nitroglycerin patch", "gtn patch");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a risk factor for falls", "medications", "polypharmacy");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a risk factor for falls", "poor vision", "visual impairment");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a risk factor for falls", "dementia", "cognitive impairment");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a nursing intervention to prevent falls", "sitter", "1:1|one to one|1 to 1|enhanced observation");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a nursing intervention to prevent falls", "hourly rounding", "rounding|intentional rounding");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a complication of an IV", "infiltration", "tissued|tissuing");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a sign of high blood sugar", "glucose in urine", "glycosuria");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a sign of high blood sugar", "ketones in urine", "ketonuria");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a type of wound dressing", "negative pressure", "vac");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a type of wound dressing", "petrolatum gauze", "jelonet");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a type of wound dressing", "silver", "acticoat");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a nursing diagnosis", "impaired physical mobility", "impaired mobility");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a nursing diagnosis", "acute pain", "pain");  // 2026-11-03 · audit · alternate name / UK-AU term
crowdAlias("Name a nursing degree, license or credential", "rn", "rgn|registered general nurse");  // 2026-11-03 · audit · alternate name / UK-AU term
crowd("Name a chronic disease", 65, "high cholesterol|hyperlipidemia|hypercholesterolemia|dyslipidemia");  // 2026-11-03 · audit · valid answer missing
crowd("Name a nursing degree, license or credential", 85, "rmn|registered mental health nurse");  // 2026-11-03 · audit · valid answer missing
crowd("Name a nursing degree, license or credential", 65, "aprn");  // 2026-11-03 · audit · valid answer missing
crowd("Name a nursing degree, license or credential", 85, "enrolled nurse|en|epn");  // 2026-11-03 · audit · valid answer missing
crowd("Name a vital sign or bedside assessment", 65, "news2|news|early warning score|mews|pews");  // 2026-11-03 · audit · valid answer missing
crowd("Name a surgical procedure", 65, "ercp");  // 2026-11-03 · audit · valid answer missing
crowd("Name a GI medication (nausea, reflux or bowel)", 85, "gaviscon|alginate");  // 2026-11-03 · audit · valid answer missing
crowd("Name a GI medication (nausea, reflux or bowel)", 85, "movicol|macrogol");  // 2026-11-03 · audit · valid answer missing
crowd("Name a GI medication (nausea, reflux or bowel)", 85, "buscopan|hyoscine butylbromide");  // 2026-11-03 · audit · valid answer missing
crowd("Name a topical skin medication", 85, "fucidin|fusidic acid");  // 2026-11-03 · audit · valid answer missing
crowd("Name an eye drop medication", 85, "chloramphenicol drops|chloramphenicol");  // 2026-11-03 · audit · valid answer missing

// ===== 2026-11-04 nightly review =====
crowd("Name a sports injury", 44, "commotio cordis|comotio cordis");  // 2026-11-04 · 8 players · chest-impact arrhythmia in sports
crowdAlias("Name a cause of chronic cough", "post viral cough", "long covid|post covid cough");  // 2026-11-04 · 1 player · post-COVID cough is post-viral cough
crowd("Name a cause of nausea and vomiting", 83, "bezoar");  // 2026-11-04 · 1 player · gastric outlet obstruction
crowdAlias("Name a cause of nausea and vomiting", "increased intracranial pressure", "brain mets|brain metastases");  // 2026-11-04 · 1 player · raised ICP from tumor
crowdAlias("Name a cause of nausea and vomiting", "medication side effect", "drugs|drug side effect");  // 2026-11-04 · 3 players · same as medication side effect
crowd("Name a cause of nausea and vomiting", 66, "h pylori|helicobacter pylori|h pylori gastritis|gastritis");  // 2026-11-04 · 3 players · H. pylori gastritis
crowd("Name a cause of nausea and vomiting", 83, "altitude sickness|high altitude|acute mountain sickness");  // 2026-11-04 · 1 player · AMS causes nausea/vomiting
crowd("Name a cause of nausea and vomiting", 83, "ipecac|syrup of ipecac");  // 2026-11-04 · 1 player · classic emetic
crowdAlias("Name a cause of nausea and vomiting", "food poisoning", "preformed toxin|performed toxin");  // 2026-11-04 · 1 player · preformed-toxin food poisoning
crowd("Name a cause of nausea and vomiting", 83, "pneumonia");  // 2026-11-04 · 1 player · vomiting in pediatric/lower-lobe pneumonia, Legionella
crowdAlias("Name a cause of nausea and vomiting", "food poisoning", "salmonella|salmonela");  // 2026-11-04 · 1 player · salmonella food poisoning
crowdAlias("Name a cause of nausea and vomiting", "brain bleed", "subarachnoid hemorrhage|sah");  // 2026-11-04 · 1 player · intracranial hemorrhage
crowdAlias("Name a cause of nausea and vomiting", "labyrinthitis", "viral labyrinthitis|viral labyrynthitis");  // 2026-11-04 · 1 player · same condition
crowdAlias("Name a cause of unintentional weight loss", "cancer", "angiosarcoma");  // 2026-11-04 · 1 player · a cancer
crowdAlias("Name a cause of unintentional weight loss", "parasites", "ascaris|ascariasis|roundworm");  // 2026-11-04 · 1 player · parasite
crowdAlias("Name a cause of unintentional weight loss", "parasites", "chagas disease|chagas");  // 2026-11-04 · 1 player · parasitic; megaesophagus
crowdAlias("Name a cause of unintentional weight loss", "peptic ulcer", "gastric ulcer|stomach ulcer");  // 2026-11-04 · 1 player · peptic ulcer
crowdAlias("Name a cause of unintentional weight loss", "cancer", "mesothelioma");  // 2026-11-04 · 1 player · a cancer
crowd("Name a cause of unintentional weight loss", 83, "superior mesenteric artery syndrome|sma syndrome|wilkie syndrome");  // 2026-11-04 · 1 player · postprandial vomiting, early satiety
crowdAlias("Name a cause of unintentional weight loss", "hyperthyroidism", "thyroid storm|thyrotoxic storm");  // 2026-11-04 · 1 player · severe hyperthyroidism
crowd("Name a compounding term or piece of compounding equipment", 85, "unguator|electronic mortar and pestle");  // 2026-11-04 · 1 player · electronic mortar and pestle mixer
crowd("Name a discharge teaching topic", 85, "sick day rules|sick day management");  // 2026-11-04 · 1 player · diabetes/steroid sick-day teaching
crowdAlias("Name a drug patients inject themselves at home", "fertility drugs", "progesterone|progesterone in oil");  // 2026-11-04 · 1 player · IVF progesterone injections
crowd("Name a famous person in medical history", 85, "james young simpson|james simpson");  // 2026-11-04 · 1 player · chloroform anesthesia pioneer
crowdAlias("Name a famous person in medical history", "ignaz semmelweis", "semmelweis");  // 2026-11-04 · 1 player · same person
crowd("Name a genetic disorder", 62, "wolf hirschhorn syndrome|4p deletion syndrome|4p minus syndrome");  // 2026-11-04 · 1 player · 4p deletion
crowd("Name a healthcare profession", 62, "perinatologist|maternal fetal medicine|maternal fetal medicine specialist|mfm");  // 2026-11-04 · 1 player · high-risk obstetrics specialist
crowd("Name a heart condition", 85, "double inlet left ventricle|dilv");  // 2026-11-04 · 1 player · single-ventricle congenital defect
crowdAlias("Name a heart test or cardiac study", "bnp", "brain natriuretic peptide|b type natriuretic peptide");  // 2026-11-04 · 1 player · same test
crowd("Name a heart test or cardiac study", 82, "pyp scan|cardiac amyloid scan|technetium pyrophosphate scan|tc 99m pyp");  // 2026-11-04 · 1 player · ATTR amyloid scintigraphy
crowdAlias("Name a heart test or cardiac study", "cardiopulmonary exercise test", "cpex|cpet|cpx");  // 2026-11-04 · 1 player · same test
crowd("Name a major medical discovery or invention", 82, "artemisinin|artemisinins");  // 2026-11-04 · 1 player · Nobel 2015 antimalarial
crowd("Name a major medical discovery or invention", 82, "blalock taussig shunt|blalock taussig thomas shunt|bt shunt");  // 2026-11-04 · 1 player · first surgery for cyanotic heart disease
crowd("Name a major medical discovery or invention", 82, "coronary artery bypass graft|cabg|bypass surgery|coronary bypass");  // 2026-11-04 · 1 player · landmark cardiac surgery
crowd("Name a major medical discovery or invention", 82, "cardiac catheterization|catheter|catheterization");  // 2026-11-04 · 1 player · Forssmann, Nobel 1956
crowdAlias("Name a major medical discovery or invention", "ct scan", "ct|computed tomography");  // 2026-11-04 · 3 players · same invention
crowd("Name a major medical discovery or invention", 82, "antibodies|immunoglobulins|antitoxin|serum therapy");  // 2026-11-04 · 1 player · Behring serum therapy, Nobel 1901
crowd("Name a major medical discovery or invention", 82, "bone marrow transplant|stem cell transplant|hematopoietic stem cell transplant");  // 2026-11-04 · 1 player · E. Donnall Thomas, Nobel 1990
crowd("Name a major medical discovery or invention", 82, "coronary stent|stent|angioplasty|pci");  // 2026-11-04 · 1 player · interventional cardiology
crowd("Name a major medical discovery or invention", 82, "sterilization|autoclave");  // 2026-11-04 · 1 player · surgical instrument sterilization
crowdAlias("Name a major medical discovery or invention", "organ transplant", "transplant");  // 2026-11-04 · 3 players · same
crowdAlias("Name a medical condition that changes dental treatment", "cancer", "leukemia|leukaemia");  // 2026-11-04 · 1 player · a cancer
crowd("Name a medical emergency", 85, "copd exacerbation|acute exacerbation of copd|aecopd");  // 2026-11-04 · 1 player · severe exacerbation is an emergency
crowdAlias("Name a medical instrument or tool", "ventilator", "respirator");  // 2026-11-04 · 1 player · older name for ventilator
crowd("Name a type of cell in the human body", 64, "ependymal cell|ependymal cells|ependymal|ependymocyte");  // 2026-11-04 · 3 players · glial cell lining ventricles
crowdAlias("Name a medical term with a color in it", "yellow jaundice", "jaundice");  // 2026-11-04 · 4 players · jaundice = yellow (jaune)
crowdAlias("Name a major medical discovery or invention", "heart lung machine", "ecmo");  // 2026-11-04 · 2 players · extracorporeal circulation
crowd("Name a drug patients inject themselves at home", 65, "estradiol injection|estrogen|estradiol|estradiol valerate|estradiol cypionate");  // 2026-11-04 · 2 players · self-injected estradiol (HRT/IVF)
crowdAlias("Name a heart test or cardiac study", "cardiac mri", "mri");  // 2026-11-04 · 2 players · cardiac MRI in context
crowdAlias("Name a healthcare profession", "radiologic technologist", "radiographer");  // 2026-11-04 · 2 players · UK name for rad tech
crowdAlias("Name a common reason for a primary care visit", "erectile dysfunction", "ed");  // 2026-11-04 · 2 players · abbreviation
crowdAlias("Name a major medical discovery or invention", "blood transfusion", "transfusion");  // 2026-11-04 · 2 players · same
crowd("Name a medical term with a color in it", 52, "red reflex");  // 2026-11-04 · 2 players · eye exam finding
crowdAlias("Name a heart test or cardiac study", "echocardiogram", "tte|transthoracic echo|transthoracic echocardiogram");  // 2026-11-04 · 2 players · same test
crowdAlias("Name a medical term with a color in it", "red blood cell", "red cell|red cells");  // 2026-11-04 · 2 players · same
crowdAlias("Name a type of cell in the human body", "natural killer cell", "nk cell|nk cells");  // 2026-11-04 · 2 players · same
crowd("Name a heart condition", 65, "dextrocardia");  // 2026-11-04 · 2 players · cardiac malposition
crowd("Name a part of the eye", 71, "uvea|uveal tract");  // 2026-11-04 · 2 players · iris+ciliary body+choroid
crowdAlias("Name a lung disease", "pneumocystis", "pjp|pneumocystis jirovecii|pneumocystis pneumonia");  // 2026-11-04 · 2 players · same infection
crowd("Name a cause of nausea and vomiting", 73, "metformin");  // 2026-11-04 · 2 players · common GI side effect
crowdAlias("Name something included in a nursing handoff report", "mental status", "cognitive status|baseline mental status");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a piece of PPE or infection control measure", "isolation", "isolation precautions|transmission based precautions");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient position", "lateral", "lateral recumbent");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient position", "left lateral", "left side lying");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a warning sign of stroke", "slurred speech", "expressive aphasia|brocas aphasia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a warning sign of stroke", "trouble understanding speech", "receptive aphasia|wernickes aphasia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a warning sign of stroke", "visual field cut", "homonymous hemianopia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a hospital emergency code", "code gray", "code grey");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing theorist", "betty neuman", "betty newman");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing theorist", "kolcaba", "kolcaba comfort theory");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing theorist", "hildegard peplau", "hildegard e peplau");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing theorist", "helen erickson", "erickson tomlin swain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing job title or role", "case manager", "nurse case manager");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a diet order", "npo", "nothing by mouth after midnight|npo after midnight");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a diet order", "thickened liquids", "nectar thick liquids");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a diet order", "thickened liquids", "honey thick liquids");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing specialty", "nicu", "neonatal intensive care");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing specialty", "ambulatory", "ambulatory care");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing specialty", "picu", "pediatric intensive care");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common body site for pressure injuries", "back of the head", "occipital bone");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common body site for pressure injuries", "elbows", "olecranon");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of delirium", "anticholinergics", "anticholinergic medications");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of delirium", "lithium toxicity", "lithium");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of delirium", "catheters", "urinary catheter|foley catheter");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of an IV", "infection", "iv site infection|local infection");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of an IV", "occlusion", "catheter occlusion");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum complication", "hematoma", "vaginal hematoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum complication", "postpartum hemorrhage", "secondary postpartum hemorrhage|late postpartum hemorrhage");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum complication", "infection", "endomyometritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of high blood sugar", "dry skin", "warm dry skin|flushed dry skin");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of high blood sugar", "infections", "frequent infections");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of high blood sugar", "abdominal pain", "abdominal cramps");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a vital sign or bedside assessment", "heart rate", "apical pulse|radial pulse|brachial pulse");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of wound dressing", "gauze", "sterile gauze");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of wound dressing", "pressure dressing", "pressure bandage");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of wound dressing", "xeroform", "xeroform petrolatum");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing diagnosis", "self care deficit", "bathing self care deficit");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing diagnosis", "self care deficit", "feeding self care deficit");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing diagnosis", "self care deficit", "toileting self care deficit");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing diagnosis", "self care deficit", "dressing self care deficit");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a tube, drain or catheter", "foley", "indwelling urinary catheter|indwelling catheter");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a tube, drain or catheter", "straight cath", "intermittent catheter");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a tube, drain or catheter", "shunt", "vp shunt|ventriculoperitoneal shunt");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a tube, drain or catheter", "central line", "non tunneled central line");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of alcohol or opioid withdrawal", "vomiting", "nausea and vomiting");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of alcohol or opioid withdrawal", "hallucinations", "visual hallucinations");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of alcohol or opioid withdrawal", "hallucinations", "auditory hallucinations");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of alcohol or opioid withdrawal", "seizures", "alcohol withdrawal seizures|withdrawal seizures");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing skill learned in school", "wound care", "sterile dressing change");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing skill learned in school", "suctioning", "trach suctioning|oral suctioning|nasotracheal suctioning");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing skill learned in school", "tube feeding", "g tube feeding");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing skill learned in school", "oral care", "mouth care");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a fetal heart rate pattern or monitoring term", "late deceleration", "late decels");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a fetal heart rate pattern or monitoring term", "acceleration", "accels");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a fetal heart rate pattern or monitoring term", "reactive non stress test", "reactive");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nonmedication comfort measure for pain", "ice", "cold therapy|cryotherapy|cold compress");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nonmedication comfort measure for pain", "heat", "heat therapy|warm compress|hot water bottle");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nonmedication comfort measure for pain", "massage", "back rub");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nonmedication comfort measure for pain", "deep breathing", "breathing exercises");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nonmedication comfort measure for pain", "pillows", "positioning with pillows");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nonmedication comfort measure for pain", "rest", "sleep");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nonmedication comfort measure for pain", "distraction", "reading|tv|watching tv|video games|bubbles");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nonmedication comfort measure for pain", "aromatherapy", "essential oils|lavender|peppermint oil");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a defense mechanism", "isolation of affect", "isolation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a defense mechanism", "passive aggression", "passive aggressive behavior");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a defense mechanism", "undoing", "restitution");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a stage of labor or labor and delivery term", "transition", "transition phase");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a stage of labor or labor and delivery term", "pushing", "second stage of labor");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a stage of labor or labor and delivery term", "delivery of placenta", "third stage of labor");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a stage of labor or labor and delivery term", "fourth stage", "fourth stage of labor");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a stage of labor or labor and delivery term", "water breaking", "spontaneous rupture of membranes|srom");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a stage of labor or labor and delivery term", "amniotomy", "artificial rupture of membranes|arom");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign that a patient is close to death", "apnea", "periods of apnea");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dementia care strategy", "routine", "structured routine|daily routine");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dementia care strategy", "exercise", "regular exercise");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a risk factor for falls", "weakness", "muscle weakness");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lung or breath sound", "rhonchi", "coarse rhonchi");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lung or breath sound", "diminished breath sounds", "diminished");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lung or breath sound", "bronchial", "bronchial breath sounds");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lung or breath sound", "vesicular", "vesicular breath sounds");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lung or breath sound", "stridor", "inspiratory stridor|expiratory stridor|biphasic stridor|crowing");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lung or breath sound", "fine crackles", "velcro crackles");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lung or breath sound", "crackles", "bibasilar crackles");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lung or breath sound", "gurgling", "bubbling");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common pediatric hospital diagnosis", "abuse", "child abuse|non accidental trauma|nat");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common pediatric hospital diagnosis", "ingestion", "foreign body ingestion|button battery");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a discharge teaching topic", "medications", "medication schedule|medication side effects");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a discharge teaching topic", "activity restrictions", "activity");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a discharge teaching topic", "daily weights", "weight monitoring");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a discharge teaching topic", "pain management", "pain medication");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a discharge teaching topic", "catheter care", "urinary catheter care");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a discharge teaching topic", "smoking cessation", "tobacco cessation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a discharge teaching topic", "exercise", "home exercise program");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of wound", "surgical wound", "surgical incision");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of wound", "pressure injury", "stage 1 pressure injury|stage 2 pressure injury|stage 3 pressure injury|stage 4 pressure injury|stage 1|stage 2|stage 3|stage 4");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of wound", "abrasion", "graze");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a head-to-toe assessment", "neurological assessment", "neuro");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a head-to-toe assessment", "pulses", "apical pulse|peripheral pulses|pedal pulses|radial pulse");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a head-to-toe assessment", "skin", "skin color|skin integrity");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a head-to-toe assessment", "pupils", "pupils equal round reactive|perrla");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a head-to-toe assessment", "sensation", "sensation in extremities");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an injection type or injection site", "intramuscular", "intramuscular injection");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an injection type or injection site", "subcutaneous", "subcutaneous injection");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an injection type or injection site", "intravenous", "intravenous injection");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an injection type or injection site", "intradermal", "intradermal injection");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an injection type or injection site", "vastus lateralis", "anterolateral thigh");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an injection type or injection site", "thigh", "lateral thigh|outer thigh");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an injection type or injection site", "back of arm", "back of upper arm|posterior arm");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an injection type or injection site", "abdomen", "periumbilical|around the belly button");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an injection type or injection site", "buttocks", "upper buttock|gluteal");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an injection type or injection site", "ventrogluteal", "hip");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an injection type or injection site", "intracavernosal", "intracavernous");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a mobility aid or assistive device", "walker", "standard walker|zimmer frame|front wheeled walker|two wheeled walker");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a mobility aid or assistive device", "rollator", "four wheeled walker|trolley walker");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a mobility aid or assistive device", "crutches", "axillary crutches");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a mobility aid or assistive device", "wheelchair", "manual wheelchair");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a mobility aid or assistive device", "power wheelchair", "electric wheelchair");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a mobility aid or assistive device", "gait belt", "transfer belt");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a mobility aid or assistive device", "sliding board", "slide board");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a mobility aid or assistive device", "brace", "knee brace|back brace");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a mobility aid or assistive device", "cane", "walking stick|single point cane");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a mobility aid or assistive device", "quad cane", "tripod cane|wide based quad cane");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a mobility aid or assistive device", "mechanical lift", "hoist|patient lift");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a mobility aid or assistive device", "sit to stand lift", "standing lift");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum assessment", "fundus", "fundal position|fundal location|position of fundus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum assessment", "lochia", "lochia color|lochia amount|lochia odor");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum assessment", "bowel", "bowel movement|bowel sounds|flatus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum assessment", "incision", "incision site");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum assessment", "homans sign", "calf tenderness");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum assessment", "vital signs", "temperature");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum assessment", "vital signs", "blood pressure");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum assessment", "pain", "pain level");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum assessment", "bonding", "maternal infant bonding|attachment");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum assessment", "postpartum depression screening", "epds|edinburgh postnatal depression scale");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postpartum assessment", "rh status", "rhogam eligibility");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "refuse treatment", "right to refuse");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "privacy", "right to privacy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "respect", "right to be treated with respect");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "safe environment", "right to a safe environment");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "pain management", "right to pain management");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "interpreter", "right to an interpreter");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "refuse treatment", "right to refuse medication");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "advance directive", "right to dnr");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "access to medical records", "right to a copy of records");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "emergency care", "right to emergency treatment");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "leave against medical advice", "right to leave");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "visitors", "right to visitors");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a patient right", "designate a surrogate", "right to medical power of attorney");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a urinary tract infection", "burning with urination", "dysuria");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a urinary tract infection", "blood in urine", "hematuria");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a urinary tract infection", "bacteria in urine", "bacteriuria");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a urinary tract infection", "leukocytes in urine", "positive leukocyte esterase");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a urinary tract infection", "foul smelling urine", "malodorous urine|strong smelling urine");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a urinary tract infection", "suprapubic tenderness", "suprapubic pain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a urinary tract infection", "nausea", "nausea and vomiting");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a urinary tract infection", "fever", "fever in infants|low grade fever");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an item on a crash cart", "pads", "defibrillator pads");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an item on a crash cart", "dextrose", "dextrose 50|d50w");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an item on a crash cart", "epinephrine", "epinephrine 1 mg|epinephrine 1:10000");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing ethical principle", "veracity", "truthfulness");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing ethical principle", "fidelity", "keeping promises|loyalty");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing ethical principle", "justice", "fairness");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing ethical principle", "autonomy", "respect for autonomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing ethical principle", "advocacy", "patient advocacy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing ethical principle", "dignity", "human dignity|respect for human dignity");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "vital signs", "vital signs on stable patients|temperature|pulse|respirations|blood pressure");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "hygiene care", "hygiene");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "ambulating", "ambulation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "turning and repositioning", "repositioning|positioning");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "bed making", "occupied bed making|changing linens");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "intake and output", "measuring intake");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "measuring output", "recording output");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "weighing patients", "daily weights|height and weight");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "collecting specimens", "urine specimen|stool specimen|sputum specimen");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "transporting patients", "transporting stable patients|discharge transport");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "stocking supplies", "restocking");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "toileting", "urinal|bedpan|helping patients to the bathroom|toilet assistance");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a task an RN can delegate to a nursing assistant", "shaving", "shaving patients");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "covid", "coronavirus|sars cov 2");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "measles", "rubeola");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "rubella", "german measles");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "shingles", "herpes zoster");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "influenza", "influenza a|influenza b");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "meningococcal meningitis", "neisseria meningitidis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "mycoplasma pneumonia", "mycoplasma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "strep throat", "group a streptococcus|streptococcal pharyngitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "hib", "haemophilus influenzae type b");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "conjunctivitis", "viral conjunctivitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "lice", "head lice|pediculosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "vre", "vancomycin resistant enterococcus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "esbl", "extended spectrum beta lactamase");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "cre", "carbapenem resistant enterobacteriaceae");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease that needs airborne, droplet or contact precautions", "c diff", "c diff colitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a long-term complication of diabetes", "neuropathy", "peripheral neuropathy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a long-term complication of diabetes", "kidney disease", "diabetic nephropathy|end stage renal disease|esrd|dialysis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a long-term complication of diabetes", "retinopathy", "diabetic retinopathy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a long-term complication of diabetes", "fatty liver", "nonalcoholic fatty liver disease|nafld|masld");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of shock", "cold clammy skin", "cool clammy skin");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of shock", "warm flushed skin", "warm skin");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "rn", "registered nurse");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "bsn", "bachelor of science in nursing");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "lpn", "licensed practical nurse|licensed vocational nurse");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "cna", "certified nursing assistant");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "adn", "associate degree in nursing");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "msn", "master of science in nursing");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "np", "nurse practitioner");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "dnp", "doctor of nursing practice");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "crna", "certified registered nurse anesthetist");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "cnm", "certified nurse midwife");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "fnp", "family nurse practitioner");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "aprn", "advanced practice registered nurse");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing degree, license or credential", "ccrn", "ccrn k|ccrn p|ccrn neonatal");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oxygen delivery or airway device", "ventilator", "mechanical ventilator");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oxygen delivery or airway device", "trach collar", "trach mask|tracheostomy mask");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oxygen delivery or airway device", "nebulizer", "nebulizer mask");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oxygen delivery or airway device", "oxygen concentrator", "portable oxygen concentrator");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oxygen delivery or airway device", "tracheostomy", "tracheostomy tube");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oxygen delivery or airway device", "t piece", "neopuff|t piece resuscitator");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lab value nurses check before giving a medication", "blood sugar", "blood glucose before insulin");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lab value nurses check before giving a medication", "inr", "inr before warfarin|pt inr");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lab value nurses check before giving a medication", "ptt", "ptt before heparin");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lab value nurses check before giving a medication", "potassium", "potassium before digoxin|potassium before furosemide");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lab value nurses check before giving a medication", "creatinine", "serum creatinine");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lab value nurses check before giving a medication", "gentamicin level", "aminoglycoside trough|gentamicin trough");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lab value nurses check before giving a medication", "lithium level", "lithium");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a lab value nurses check before giving a medication", "respiratory rate", "respiratory rate before opioids");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of dehydration", "sticky saliva", "thick saliva");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of dehydration", "fever", "low grade fever");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of dehydration", "thirst", "increased thirst");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of dehydration", "weight loss", "weight loss of 2 percent|rapid weight loss");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of dehydration", "orthostatic hypotension", "postural hypotension");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of dehydration", "bun to creatinine ratio above 20", "elevated bun to creatinine ratio");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of dehydration", "kidney injury", "acute kidney injury");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of sepsis", "confusion", "delirium");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of sepsis", "chills", "rigors");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of sepsis", "clammy skin", "diaphoresis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of sepsis", "hyperglycemia", "hyperglycemia without diabetes");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of sepsis", "lethargy", "lethargy in infants");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of low blood sugar", "shaking", "jitteriness");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of low blood sugar", "clammy skin", "cool clammy skin");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of low blood sugar", "sweaty", "sweaty palms");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of low blood sugar", "behavior changes", "personality change|unusual behavior");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of low blood sugar", "combativeness", "aggression");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of low blood sugar", "hunger", "hunger pangs");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of low blood sugar", "drowsiness", "sleepiness");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of low blood sugar", "confusion", "disorientation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of low blood sugar", "blurred vision", "vision changes|seeing spots");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of low blood sugar", "slurred speech", "trouble speaking");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of low blood sugar", "clumsiness", "incoordination|unsteady gait|staggering|appears drunk");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing scale or assessment tool", "pain scale", "numeric pain scale");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing scale or assessment tool", "glasgow coma", "coma scale");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing scale or assessment tool", "cows", "clinical opiate withdrawal scale");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing scale or assessment tool", "audit", "audit test");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing scale or assessment tool", "mmse", "mmse 2");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing scale or assessment tool", "ballard", "new ballard");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing scale or assessment tool", "apache", "apache ii");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing scale or assessment tool", "karnofsky", "kps");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nursing scale or assessment tool", "palliative performance scale", "ppsv2");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a hospital unit or department", "nicu", "neonatal icu");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a hospital unit or department", "picu", "pediatric icu");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a hospital unit or department", "sicu", "surgical icu");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a hospital unit or department", "micu", "medical icu");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a hospital unit or department", "ccu", "coronary care unit");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a hospital unit or department", "psych", "inpatient psychiatry|psych ward");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a hospital unit or department", "nutrition", "clinical nutrition");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a hospital unit or department", "gyn", "gynecology");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a hospital unit or department", "cath lab", "catheterization laboratory");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of IV fluid", "d5 1 2 ns", "d5 0.45 ns|d5 half ns");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of IV fluid", "normal saline", "isotonic saline");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of IV fluid", "half normal saline", "0.45 sodium chloride");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of IV fluid", "d5ns", "d5 0.9 ns");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of IV fluid", "ringers solution", "ringers");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of IV fluid", "blood", "packed cells");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of IV fluid", "fresh frozen plasma", "plasma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of IV fluid", "potassium chloride", "kcl infusion");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of IV fluid", "gelofusine", "gelatin solution");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of IV fluid", "hypertonic saline", "hyperosmolar saline");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of IV fluid", "albumin", "albumin 20%");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of IV fluid", "sodium bicarbonate", "bicarbonate drip");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical abbreviation", "aox3", "a and o x 4|aox4");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical abbreviation", "pmh", "pmhx");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "apgar score", "apgar at 1 and 5 minutes");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "heel stick", "newborn screening|state newborn screen|guthrie test|pku screening|sickle cell screening|cystic fibrosis screening|galactosemia screening|congenital hypothyroidism screen");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "bilirubin check", "transcutaneous bilirubin|tcb|serum bilirubin|jaundice assessment");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "vitamin k shot", "vitamin k injection");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "hepatitis b vaccine", "hep b shot|hepatitis b immunization");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "cord care", "umbilical cord care");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "skin to skin", "skin to skin contact");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "breastfeeding assessment", "breastfeeding");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "weight", "weight check|daily weight|weight loss check");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "length", "length measurement");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "ballard score", "gestational age");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "reflexes", "rooting reflex|sucking reflex|palmar grasp|plantar grasp|babinski reflex|stepping reflex|tonic neck reflex|fencing reflex|galant reflex");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "fontanelles", "anterior fontanelle|posterior fontanelle");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "caput", "caput succedaneum");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "palate check", "cleft palate check");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "ortolani", "hip click");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "circumcision", "circumcision care");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "hearing screen", "hearing screening|hearing test|oae|abr");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a newborn assessment or procedure", "cchd screen", "pulse oximetry screening|critical congenital heart disease screening");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of immobility", "weakness", "muscle weakness|decreased muscle strength");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of immobility", "kidney stones", "renal calculi");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of immobility", "incontinence", "urinary incontinence|bowel incontinence");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of immobility", "osteoporosis", "disuse osteoporosis|bone demineralization");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of immobility", "muscle atrophy", "disuse atrophy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of immobility", "orthostatic hypotension", "orthostasis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of immobility", "edema", "dependent edema");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of immobility", "contractures", "joint contractures|hip flexion contracture|plantar flexion contracture");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something found in a hospital room", "call light", "nurse call button");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something found in a hospital room", "suction", "wall suction|suction machine|suction catheter|yankauer");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something found in a hospital room", "oxygen outlet", "oxygen flowmeter");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something found in a hospital room", "commode", "bedside commode");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something found in a hospital room", "gown", "patient gown|hospital gown");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something found in a hospital room", "pillows", "pillows for positioning|wedge");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something found in a hospital room", "gloves", "glove box");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something found in a hospital room", "monitor", "cardiac monitor|telemetry monitor");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something found in a hospital room", "iv pump", "infusion pump");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something found in a hospital room", "curtain", "privacy screen");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something found in a hospital room", "get well card", "cards");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a heart attack", "chest pain", "crushing chest pain|substernal chest pain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a heart attack", "chest pressure", "chest heaviness|elephant on chest|elephant sitting on chest");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a heart attack", "sweating", "cool clammy skin|sweaty");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a heart attack", "sense of impending doom", "feeling of doom");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a heart attack", "arm pain", "right arm pain|both arms pain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a heart attack", "epigastric pain", "stomach pain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a heart attack", "vomiting", "nausea and vomiting");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a heart attack", "fatigue", "unexplained fatigue");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a heart attack", "arrhythmia", "vfib|heart block");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a blood transfusion reaction", "hives", "urticaria");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a blood transfusion reaction", "kidney failure", "acute kidney injury");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a blood transfusion reaction", "febrile non hemolytic reaction", "febrile reaction");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a blood transfusion reaction", "high temperature", "temperature increase of 1 degree|temp rise of 1 c");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a blood transfusion reaction", "chills", "rigors");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a blood transfusion reaction", "flushing", "facial flushing");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a blood transfusion reaction", "hemoglobin drop", "failure of hemoglobin to rise");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a blood transfusion reaction", "anaphylaxis", "anaphylactic reaction");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a blood transfusion reaction", "hemolytic reaction", "acute hemolytic transfusion reaction|ahtr|hemolysis|abo incompatibility");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a blood transfusion reaction", "gvhd", "transfusion associated graft versus host disease|ta gvhd");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a blood transfusion reaction", "pain at iv site", "burning at iv site");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right patient", "right person");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right drug", "right med");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right dose", "right dosage");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right route", "right route of administration");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right time", "right time and frequency");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right to refuse", "right to refuse medication");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right education", "right patient education|right client education");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right documentation", "right documentation and reporting");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right form", "right formulation|right dosage form");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right indication", "right indication for use|right diagnosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right reason", "right reason for administration");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right response", "right response and evaluation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a right of medication administration", "right preparation", "right reconstitution");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "vest restraint", "jacket restraint");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "mitts", "mittens");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "elbow immobilizers", "elbow restraints|arm immobilizers");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "lap belt", "wheelchair lap belt");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "bed rails", "full side rails|all 4 side rails");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "low stimulation room", "quiet room");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "chemical restraint", "emergency medication|prn sedation|b52|haldol ativan benadryl");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "sitter", "one to one observation|constant observation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "video monitoring", "tele sitter|virtual sitter");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "bed alarm", "bed exit alarm");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "diversion", "sensory activities|distraction");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "de escalation", "verbal de escalation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "toileting schedule", "toileting");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a restraint or restraint alternative", "calm environment", "dim lights|reduce noise");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postoperative complication", "respiratory depression", "respiratory depression from opioids");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postoperative complication", "shock", "hypovolemic shock|septic shock");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postoperative complication", "acute kidney injury", "renal failure");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postoperative complication", "ileus", "paralytic ileus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postoperative complication", "delirium", "postoperative delirium");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postoperative complication", "post op cognitive dysfunction", "cognitive dysfunction");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postoperative complication", "uti", "urinary tract infection");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postoperative complication", "pneumonia", "hospital acquired pneumonia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a postoperative complication", "constipation", "opioid induced constipation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason a filling or crown fails", "inadequate retention", "inadequate retention form|lack of retention");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental behavior management technique", "desensitization", "systematic desensitization");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental specialty", "dental anesthesiology", "anesthesiology");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental specialty", "pediatric", "pedodontist|pediatric dentist");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental specialty", "implant dentistry", "oral implantology");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental specialty", "orthodontics", "dentofacial orthopedics|orthodontics and dentofacial orthopedics");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental specialty", "dental public health", "community dentistry");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral hygiene product", "baking soda toothpaste", "baking soda");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral hygiene product", "toothbrush", "manual toothbrush");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral hygiene product", "toothbrush", "soft bristle toothbrush");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nerve or nerve block used in dentistry", "trigeminal", "cranial nerve v|cn v|fifth cranial nerve");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a nerve or nerve block used in dentistry", "facial", "cn vii");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental brand or company", "oral b", "braun");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental brand or company", "crest", "crest pro health");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental brand or company", "coltene", "coltene whaledent");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental brand or company", "premier dental", "premier");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental brand or company", "zoom whitening", "philips zoom");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental brand or company", "hello", "hello products");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental X-ray or imaging", "cephalometric", "lateral cephalometric");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental X-ray or imaging", "posteroanterior skull", "pa cephalometric|frontal ceph");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental X-ray or imaging", "tomography", "tmj tomography");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental X-ray or imaging", "reverse towne", "reverse towne view|towne view");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental X-ray or imaging", "submentovertex", "submentovertex view|jug handle view");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental X-ray or imaging", "sensor", "ccd sensor|cmos sensor");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental X-ray or imaging", "occlusal", "mandibular occlusal|maxillary occlusal|cross sectional occlusal|topographic occlusal");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental X-ray or imaging", "periapical", "anterior periapical|posterior periapical");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of tooth loss", "abscess", "periapical abscess|periodontal abscess");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of tooth loss", "root resorption", "external root resorption");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of tooth loss", "bone loss", "periodontal bone loss");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of tooth loss", "dry mouth", "medication induced dry mouth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental crown", "metal", "full metal crown|fmc|full cast crown|all metal crown");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental crown", "jacket crown", "porcelain jacket crown|pjc");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental crown", "porcelain fused to metal", "metal ceramic crown");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental crown", "pediatric zirconia", "nusmile");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of dental crown", "milled crown", "fully milled crown");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of malocclusion", "class i", "angle class i|angle class 1");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of malocclusion", "class ii", "angle class ii|angle class 2");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of malocclusion", "class iii", "angle class iii|angle class 3");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of malocclusion", "division 1", "class ii division 1|class 2 division 1");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of malocclusion", "division 2", "class ii division 2|class 2 division 2");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of malocclusion", "prognathism", "mandibular prognathism");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of malocclusion", "underbite", "reverse overjet|negative overjet");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of malocclusion", "overjet", "excessive overjet|increased overjet");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of malocclusion", "deep bite", "anterior deep bite|impinging overbite|traumatic deep bite");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of malocclusion", "gap", "midline diastema");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of malocclusion", "crowding", "crowding of incisors");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of malocclusion", "transposition", "transversion|transposition of teeth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of tooth", "canine", "eyetooth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of tooth", "central incisor", "maxillary central incisor|mandibular central incisor");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of tooth", "lateral incisor", "maxillary lateral incisor|mandibular lateral incisor");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of tooth", "upper canine", "maxillary canine");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of tooth", "lower canine", "mandibular canine");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of tooth", "first premolar", "maxillary first premolar|mandibular first premolar");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of tooth", "second premolar", "maxillary second premolar|mandibular second premolar");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of tooth", "first molar", "maxillary first molar|mandibular first molar");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of tooth", "second molar", "maxillary second molar|mandibular second molar");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of tooth", "wisdom tooth", "maxillary third molar|mandibular third molar");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of tooth", "turner tooth", "turner hypoplasia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of tooth", "hutchinson incisors", "hutchinsonian teeth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral or dental condition", "epulis", "pregnancy tumor");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral or dental condition", "gingival hyperplasia", "drug induced gingival enlargement|phenytoin gingival hyperplasia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral or dental condition", "koplik spots", "measles");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral or dental condition", "tooth erosion", "erosion|dental erosion");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral or dental condition", "fluorosis", "dental fluorosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a muscle of the head or neck", "digastric", "anterior digastric|posterior digastric");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a muscle of the head or neck", "platysma", "platysma myoides");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a habit that harms teeth", "grinding", "bruxism while awake|daytime clenching");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a habit that harms teeth", "hard candy", "chewing hard candy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a habit that harms teeth", "nail biting", "onychophagia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a habit that harms teeth", "vomiting", "frequent vomiting|self induced vomiting");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral lesion or growth", "fibroma", "traumatic fibroma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral lesion or growth", "torus", "torus palatinus|torus mandibularis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral lesion or growth", "pyogenic granuloma", "pregnancy tumor|granuloma gravidarum");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral lesion or growth", "hairy leukoplakia", "oral hairy leukoplakia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a dental implant", "abutment", "implant abutment");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a dental implant", "crown", "implant crown");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a dental implant", "implant analog", "lab analog");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral surgery procedure", "canine exposure", "impacted canine exposure");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an oral surgery procedure", "frenectomy", "tongue tie release");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental instrument", "periodontal probe", "marquis probe|ufc probe|williams probe|who probe");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental instrument", "matrix band", "tofflemire retainer");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental instrument", "cryer elevator", "east west elevator|cryer");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental material", "amalgam", "silver amalgam|dental amalgam");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental material", "zirconia", "y tzp|yttria stabilized zirconia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental material", "gypsum", "plaster of paris|type ii plaster");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental material", "alginate", "irreversible hydrocolloid");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental material", "agar", "reversible hydrocolloid");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental material", "polyvinyl siloxane", "addition silicone|vinyl polysiloxane|vps");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the mouth", "teeth", "tooth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the mouth", "tonsils", "palatine tonsils");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the mouth", "vestibule", "oral vestibule|buccal vestibule|labial vestibule");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the mouth", "lips", "upper lip|lower lip");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the mouth", "commissure", "labial commissure|corner of mouth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the mouth", "vermilion border", "vermilion zone");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the mouth", "fauces", "isthmus of fauces");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the mouth", "tori", "torus palatinus|torus mandibularis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of denture or dental prosthesis", "partial denture", "removable partial denture|rpd");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of denture or dental prosthesis", "bridge", "fixed partial denture|fpd|fixed bridge");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of denture or dental prosthesis", "essix", "essix retainer|clear retainer");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of denture or dental prosthesis", "fixed hybrid denture", "hybrid denture|fixed detachable|prettau bridge");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of denture or dental prosthesis", "implant supported denture", "implant overdenture|implant retained overdenture");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of denture or dental prosthesis", "dentures", "false teeth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a type of denture or dental prosthesis", "maryland bridge", "resin bonded prosthesis|rochette bridge");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that stains teeth", "coffee", "black coffee|espresso");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that stains teeth", "soda", "dark soda|root beer");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that stains teeth", "berries", "dark berries");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that stains teeth", "pomegranate", "pomegranate juice");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that stains teeth", "mustard", "yellow mustard");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that stains teeth", "tobacco", "tobacco chewing|chewing tobacco");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that stains teeth", "matcha", "matcha latte");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a TMJ disorder", "pain in front of ear", "preauricular pain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a TMJ disorder", "jaw deviation", "deviation on opening");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a TMJ disorder", "ear fullness", "plugged ear");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a TMJ disorder", "clenching", "clenching during day");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a TMJ disorder", "jaw fatigue", "jaw fatigue after eating");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a TMJ disorder", "bite feels off", "sudden bite change|acute malocclusion");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a TMJ disorder", "swelling", "jaw swelling");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a TMJ disorder", "neck pain", "stiff neck");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom of a TMJ disorder", "headache", "tension headache");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of tooth sensitivity", "enamel erosion", "acid erosion|dental erosion");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of tooth sensitivity", "cavity", "recurrent decay");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of tooth sensitivity", "high filling", "high spot");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of tooth sensitivity", "sugary foods", "sweets|sugar");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of tooth sensitivity", "bulimia", "bulimia nervosa");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of tooth sensitivity", "abfraction", "abfraction lesion");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of tooth sensitivity", "gum disease", "periodontitis|periodontal disease");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a famous person in dental history", "g v black", "father of operative dentistry");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a famous person in dental history", "pierre fauchard", "father of modern dentistry");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a famous person in dental history", "c edmund kells", "first dental x ray");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a famous person in dental history", "trendley dean", "henry trendley dean|h trendley dean");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a famous person in dental history", "per ingvar branemark", "branemark");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a famous person in dental history", "rafael bowen", "rafael l bowen");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a famous person in dental history", "robert tanner freeman", "first african american dental graduate");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a famous person in dental history", "lucy hobbs taylor", "lucy beaman hobbs|lucy hobbs");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a famous person in dental history", "paul revere", "forensic dentistry identification");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cosmetic dental procedure", "teeth whitening", "teeth bleaching");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cosmetic dental procedure", "bonding", "composite bonding|direct composite");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cosmetic dental procedure", "porcelain veneers", "ceramic veneers|emax veneers");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cosmetic dental procedure", "microabrasion", "enamel microabrasion");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cosmetic dental procedure", "gum contouring", "laser gum contouring");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cosmetic dental procedure", "crown lengthening", "esthetic crown lengthening");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cosmetic dental procedure", "botox for gummy smile", "botox");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cosmetic dental procedure", "lip filler", "lip augmentation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cosmetic dental procedure", "tooth reshaping", "teeth shaping");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cosmetic dental procedure", "grillz", "grills|grill");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a job in a dental office", "dental hygienist", "registered dental hygienist|rdh");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a job in a dental office", "dental assistant", "registered dental assistant|rda");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a job in a dental office", "dental assistant", "certified dental assistant|cda");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a job in a dental office", "dentist", "general dentist|dental surgeon");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a job in a dental office", "anesthesiologist", "dental anesthesiologist");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a job in a dental office", "office manager", "front office manager");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a job in a dental office", "receptionist", "dental office receptionist");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a job in a dental office", "practice owner", "dentist owner");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food that is good for your teeth", "cheese", "cottage cheese|cheddar cheese");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food that is good for your teeth", "yogurt", "greek yogurt");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food that is good for your teeth", "water", "fluoridated water|tap water|mineral water");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bad breath", "dentures", "dirty dentures");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bad breath", "mouth breathing", "mouth breathing at night");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bad breath", "tonsil stones", "tonsilloliths");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bad breath", "liver failure", "fetor hepaticus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bad breath", "alcohol", "alcoholism");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "scaling", "hand scaling");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "polishing", "coronal polishing");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "rinse", "pre procedural mouth rinse");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "x rays", "bitewing x rays");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "x rays", "panoramic x ray");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "x rays", "full mouth x rays");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "oral hygiene instructions", "brushing instructions");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "oral hygiene instructions", "flossing instructions");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "fluoride", "fluoride varnish");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "rinse", "chlorhexidine rinse");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "polishing", "selective polishing");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "polishing", "polishing with prophy paste");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "scaling", "supragingival scaling");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a step in a dental cleaning visit", "caries risk assessment", "caries risk");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental X-ray error", "reticulation", "reticulation of emulsion");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental X-ray error", "blurry image", "patient movement|motion blur");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "custom trays", "bleaching trays");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "in office whitening", "power bleaching|chairside whitening");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "in office whitening", "in office bleaching");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "opalescence", "opalescence go");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "opalescence", "opalescence boost");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "whitening pens", "teeth whitening pen");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "oil pulling", "coconut oil pulling");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "internal bleaching", "walking bleach technique");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "custom trays", "nightguard vital bleaching");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "microabrasion", "enamel microabrasion");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "veneers", "porcelain veneers");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "veneers", "composite veneers");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a teeth whitening method or product", "whitening toothpaste", "whitening toothpaste with peroxide");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of teeth grinding (bruxism)", "flat teeth", "flattened cusps");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of teeth grinding (bruxism)", "abfraction", "abfraction lesions");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of teeth grinding (bruxism)", "bone thickening", "torus mandibularis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of teeth grinding (bruxism)", "tmj clicking", "jaw clicking");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of teeth grinding (bruxism)", "jaw pain", "morning jaw pain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of teeth grinding (bruxism)", "headache", "tension headache");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of teeth grinding (bruxism)", "headache", "temporal headache");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a pediatric dentistry term or procedure", "pulpotomy", "pulpotomy with mta");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a pediatric dentistry term or procedure", "pulpotomy", "formocresol pulpotomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a pediatric dentistry term or procedure", "pulpotomy", "ferric sulfate pulpotomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a pediatric dentistry term or procedure", "pulpectomy", "pulpectomy with zinc oxide eugenol");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a pediatric dentistry term or procedure", "stainless steel crown", "ssc");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a pediatric dentistry term or procedure", "sealants", "fissure sealant");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a pediatric dentistry term or procedure", "nitrous oxide", "nitrous oxide sedation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a pediatric dentistry term or procedure", "papoose board", "papoose");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental implants", "implant failure", "early implant failure");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental implants", "implant failure", "late implant failure");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental implants", "bone loss", "marginal bone loss|crestal bone loss");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental implants", "screw loosening", "prosthetic screw loosening");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental implants", "fractured implant", "implant fracture");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental implants", "implant failure", "loss of implant");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental implants", "bruising", "swelling and bruising");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of crooked teeth", "losing baby teeth early", "premature loss of primary teeth|early loss of baby teeth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of crooked teeth", "late loss of baby teeth", "prolonged retention of primary teeth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of crooked teeth", "pacifier use", "prolonged pacifier use");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a course or subject in dental school", "anatomy", "gross anatomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a course or subject in dental school", "public health", "community dentistry|dental public health");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a course or subject in dental school", "radiology", "oral radiology");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a course or subject in dental school", "oral pathology", "oral and maxillofacial pathology");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a course or subject in dental school", "pathology", "general pathology");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a course or subject in dental school", "dental materials", "dental biomaterials");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a course or subject in dental school", "occlusion", "occlusion and tmj");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an infection control step in a dental office", "hand washing", "hand washing before and after gloves");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an infection control step in a dental office", "gloves", "nitrile gloves");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an infection control step in a dental office", "gloves", "sterile gloves");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an infection control step in a dental office", "spore testing", "spore test log");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an infection control step in a dental office", "sterilization", "steam sterilization");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an infection control step in a dental office", "barriers", "surface barriers");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an infection control step in a dental office", "barriers", "chair barrier");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an infection control step in a dental office", "rubber dam", "rubber dam isolation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an infection control step in a dental office", "gloves", "change gloves between patients");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a toothache", "cavity", "deep cavity");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a toothache", "periapical abscess", "apical abscess|tooth abscess");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a toothache", "tooth fracture", "crown fracture");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a toothache", "cracked filling", "broken filling");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a toothache", "cavity", "root caries");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a toothache", "teething", "erupting tooth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a toothache", "recent dental work", "new filling|post operative sensitivity");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a toothache", "trauma", "tooth trauma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a toothache", "angina", "unstable angina");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a toothache", "ear infection", "otitis media");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a cavity", "white spot", "white spot lesion|chalky white spot");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a cavity", "pain when biting", "pain when chewing");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a cavity", "throbbing pain", "throbbing toothache");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a cavity", "swelling", "facial swelling");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of a cavity", "bad taste", "bad taste in mouth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a tongue condition", "geographic tongue", "benign migratory glossitis|erythema migrans");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a tongue condition", "coated tongue", "white coated tongue|white tongue");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a tongue condition", "vitamin b12 deficiency", "pernicious anemia|hunter glossitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a tongue condition", "scalloped tongue", "crenated tongue");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a tongue condition", "oral hairy leukoplakia", "hairy leukoplakia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that causes cavities", "juice", "juice boxes");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that causes cavities", "juice", "apple juice");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that causes cavities", "juice", "orange juice");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that causes cavities", "juice", "grape juice");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that causes cavities", "cereal", "sugary cereal");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that causes cavities", "pastries", "toaster pastries|pop tarts");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that causes cavities", "candy", "candy bars");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that causes cavities", "syrup", "corn syrup|high fructose corn syrup");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that causes cavities", "sugar", "brown sugar");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a food or drink that causes cavities", "sugar", "sucrose|table sugar");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an ingredient in toothpaste", "arginine", "arginine bicarbonate|pro argin");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an ingredient in toothpaste", "dicalcium phosphate", "dicalcium phosphate dihydrate");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an ingredient in toothpaste", "saccharin", "sodium saccharin");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an ingredient in toothpaste", "dyes", "colorants");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an ingredient in toothpaste", "charcoal", "activated charcoal");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an ingredient in toothpaste", "hydroxyapatite", "hydroxyapatite microcrystals");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bleeding gums", "gingivitis", "plaque induced gingivitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bleeding gums", "flossing", "improper flossing");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bleeding gums", "dentures", "ill fitting dentures");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bleeding gums", "pregnancy", "pregnancy gingivitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bleeding gums", "puberty", "puberty gingivitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bleeding gums", "diabetes", "uncontrolled diabetes");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bleeding gums", "nsaids", "ibuprofen|naproxen");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bleeding gums", "leukemia", "acute myeloid leukemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bleeding gums", "leukemia", "acute lymphoblastic leukemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of bleeding gums", "leukemia", "chronic leukemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of dry mouth", "antipsychotics", "antipsychotic medications");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of dry mouth", "chemotherapy", "chemotherapy induced");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of dry mouth", "diabetes", "uncontrolled diabetes|polyuria");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical condition that changes dental treatment", "diabetes", "uncontrolled diabetes|hypoglycemia risk");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical condition that changes dental treatment", "high blood pressure", "uncontrolled hypertension");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical condition that changes dental treatment", "stroke", "stroke history|tia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical condition that changes dental treatment", "kidney disease", "chronic kidney disease");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical condition that changes dental treatment", "pregnancy", "pregnancy first trimester");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical condition that changes dental treatment", "asthma", "asthma attack risk");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical condition that changes dental treatment", "copd", "emphysema");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a way to prevent cavities", "fluoride toothpaste", "brush with fluoride toothpaste");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a way to prevent cavities", "prescription fluoride toothpaste", "high fluoride toothpaste");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a way to prevent cavities", "sealants", "pit and fissure sealants");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a way to prevent cavities", "fluoridated water", "drink tap water");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a way to prevent cavities", "dental checkups", "regular dental checkups|six month checkups");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a way to prevent cavities", "cleanings", "professional cleanings");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a way to prevent cavities", "cheese after meals", "cheese|dairy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a way to prevent cavities", "mouthwash", "antibacterial mouthwash");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a way to prevent cavities", "probiotics", "probiotic lozenges");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a way to prevent cavities", "silver diamine fluoride", "silver diamine fluoride on early lesions");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a way to prevent cavities", "sugar substitutes", "stevia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a way to prevent cavities", "avoid snacking", "avoid grazing");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of mouth sores", "canker sores", "minor aphthous ulcer");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of mouth sores", "cold sores", "herpes simplex virus|hsv 1");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of mouth sores", "cold sores", "recurrent herpes labialis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of mouth sores", "shingles", "herpes zoster");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of mouth sores", "dentures", "denture sores|ill fitting denture");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of mouth sores", "braces", "orthodontic wires|braces poking");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of mouth sores", "chemotherapy", "chemotherapy induced mucositis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of mouth sores", "pemphigoid", "mucous membrane pemphigoid");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of mouth sores", "pemphigus", "pemphigus vulgaris");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental insurance or billing term", "cdt code", "ada code|procedure code");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental insurance or billing term", "deductible", "annual deductible");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental insurance or billing term", "hmo", "dhmo");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental insurance or billing term", "ppo", "dppo");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental insurance or billing term", "medicaid", "medicaid dental|denti cal");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental insurance or billing term", "pre authorization", "predetermination of benefits");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an animal known for its teeth or tusks", "warthog", "warthog tusks");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an animal known for its teeth or tusks", "elephant", "indian elephant|asian elephant");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an animal known for its teeth or tusks", "elephant", "african elephant");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an animal known for its teeth or tusks", "elephant", "forest elephant");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an animal known for its teeth or tusks", "piranha", "piranha fish");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a chipped or broken tooth", "hard candy", "hard candy biting");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a chipped or broken tooth", "cavities", "tooth decay weakening");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a chipped or broken tooth", "root canal treated tooth", "brittle tooth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a chipped or broken tooth", "clenching", "clenching at night");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a chipped or broken tooth", "seizure", "epileptic seizure");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a cause of a chipped or broken tooth", "grinding", "bruxism from stress");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a tooth", "apex", "apices");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a tooth", "root canal", "root canal space");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a tooth", "mesial", "buccal surface");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a tooth", "mesial", "lingual surface");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a tooth", "mesial", "labial surface");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a tooth", "mesial", "mesial surface");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a tooth", "mesial", "distal surface");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a tooth", "cingulum", "lingual crest");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a tooth", "furcation", "root bifurcation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of a tooth", "pulp", "nerve fibers|a delta fibers|c fibers");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental procedure", "implant", "implant placement");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental procedure", "bone graft", "bone grafting");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental procedure", "gum graft", "free gingival graft");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental procedure", "veneers", "veneer placement");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental procedure", "whitening", "in office whitening");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental procedure", "retainer", "retainer fitting");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental procedure", "space maintainer", "space maintainer placement");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental procedure", "occlusal adjustment", "occlusal equilibration");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental procedure", "fluoride treatment", "fluoride varnish application");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental procedure", "whitening", "teeth bleaching");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an orthodontic appliance", "braces", "traditional braces");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an orthodontic appliance", "positioner", "tooth positioner");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an orthodontic appliance", "power chain", "elastic chain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an orthodontic appliance", "o rings", "elastomeric ligatures");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an orthodontic appliance", "twin block", "clark twin block");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an orthodontic appliance", "activator", "andresen activator");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an orthodontic appliance", "hyrax", "hyrax expander");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a drug used in dentistry", "penicillin", "penicillin v potassium");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a drug used in dentistry", "chlorhexidine", "chlorhexidine gluconate rinse");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a drug used in dentistry", "hydrocodone", "hydrocodone acetaminophen|vicodin|norco");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a drug used in dentistry", "oxycodone", "oxycodone acetaminophen|percocet");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a drug used in dentistry", "benzocaine", "benzocaine gel");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a drug used in dentistry", "lidocaine", "lidocaine ointment");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a drug used in dentistry", "doxycycline", "subantimicrobial doxycycline");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a bone or landmark of the skull", "maxilla", "maxillary bone");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a bone or landmark of the skull", "mandible", "mandibular bone");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a bone or landmark of the skull", "inferior nasal concha", "inferior nasal conchae");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a bone or landmark of the skull", "sella turcica", "sella");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a bone or landmark of the skull", "anterior nasal spine", "ans");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a bone or landmark of the skull", "hamulus", "pterygoid hamulus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a periodontal term or condition", "probing depth", "pocket depth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a periodontal term or condition", "gingivitis", "plaque induced gingivitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a periodontal term or condition", "scaling and root planing", "scaling");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental emergency", "cellulitis", "facial cellulitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental emergency", "bleeding after extraction", "post extraction bleeding|post op hemorrhage");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental emergency", "knocked out tooth", "avulsion of permanent tooth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental emergency", "pericoronitis", "acute pericoronitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental emergency", "trismus", "trismus after injection");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "diabetes", "type 1 diabetes");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "diabetes", "type 2 diabetes");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "iron deficiency", "iron deficiency anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "b12 deficiency", "pernicious anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "pemphigus", "pemphigus vulgaris");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "mononucleosis", "infectious mononucleosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "addison disease", "bronze pigmentation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "sickle cell disease", "sickle cell anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "amyloidosis", "amyloidosis macroglossia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "ectodermal dysplasia", "hypohidrotic ectodermal dysplasia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "bulimia", "bulimia nervosa");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "pregnancy", "pregnancy granuloma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "hyperparathyroidism", "brown tumor");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "vitamin c deficiency", "scurvy gingivitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a systemic disease with oral signs", "kawasaki disease", "kawasaki");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "cleaning", "routine checkup");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "cleaning", "teeth cleaning");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "cleaning", "dental cleaning");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "cavity", "cavities");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "implant consultation", "implant");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "implant consultation", "dental implants");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "bridge", "bridge work");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "dentures", "full dentures");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "lost crown", "crown came off");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "braces", "braces adjustment");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "retainer", "retainer fitting");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "extraction", "tooth extraction");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "snoring", "snoring appliance");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "toothache", "toothache at night");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "swelling", "facial swelling");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "sealants", "pediatric sealants");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason people visit the dentist", "fluoride", "fluoride varnish");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "mo", "mesio occlusal");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "do", "disto occlusal");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "mod", "mesio occluso distal");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "furcation", "furcation involvement");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "quadrant", "quadrant 1|upper right");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "quadrant", "quadrant 2|upper left");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "quadrant", "quadrant 3|lower left");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "quadrant", "quadrant 4|lower right");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "sextant", "anterior sextant");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "sextant", "posterior sextant");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "class i", "class i caries");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "class ii", "class ii caries");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "class iii", "class iii caries");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "class iv", "class iv caries");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "class v", "class v caries");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "class vi", "class vi caries");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "abutment", "bridge abutment");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "missing tooth", "missing");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "impacted", "impacted tooth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "mobility", "mobility grade");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "watch", "watch area");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "sealant", "sealant present");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a dental charting term or tooth surface", "palmer notation", "zsigmondy system|palmer");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an endodontic term", "apex locator", "electronic apex locator");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an endodontic term", "rotary", "nickel titanium rotary");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an endodontic term", "sodium hypochlorite", "naocl|bleach irrigation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an endodontic term", "calcium hydroxide", "calcium hydroxide dressing");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an endodontic term", "necrotic pulp", "pulp necrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an endodontic term", "flare up", "endodontic flare up");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an endodontic term", "retreatment", "endodontic retreatment");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an endodontic term", "microscope", "endodontic microscope");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an endodontic term", "pulpotomy", "full pulpotomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an endodontic term", "pulp capping", "direct pulp capping");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an endodontic term", "pulp capping", "indirect pulp capping");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "needle breakage", "needle breakage in tissue");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "positive aspiration", "intravascular injection");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "toxicity", "local anesthetic overdose");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "toxicity", "lidocaine toxicity");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "fainting", "psychogenic reaction|vasovagal syncope");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "temporary blindness", "double vision");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "temporary blindness", "amaurosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "infection", "infection at injection site");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "trismus", "limited opening");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "paresthesia", "persistent paresthesia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "methemoglobinemia", "methemoglobinemia from prilocaine");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "methemoglobinemia", "methemoglobinemia from benzocaine");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "malignant hyperthermia", "malignant hyperthermia from general anesthesia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "seizure", "seizure from toxicity");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "blanching", "blanching of skin");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "hematoma", "hematoma from psa block");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "hematoma", "hematoma from ian block");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a complication of dental anesthesia", "facial nerve paralysis", "parotid gland injection");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a piece of equipment in a dental office", "stool", "operator stool");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a piece of equipment in a dental office", "suction", "high volume suction");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a piece of equipment in a dental office", "compressor", "dental air compressor");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a piece of equipment in a dental office", "lathe", "dental lathe");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a piece of equipment in a dental office", "scanner", "itero|trios|primescan");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a piece of equipment in a dental office", "laser", "dental laser");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a piece of equipment in a dental office", "drill", "fiber optic handpiece");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a piece of equipment in a dental office", "drill", "electric handpiece");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a piece of equipment in a dental office", "drill", "air driven handpiece");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a piece of equipment in a dental office", "bib clip", "bib chain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a piece of equipment in a dental office", "waiting room", "waiting room chairs");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "fasciitis", "plantar fasciitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "fasciitis", "necrotizing fasciitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "arthritis", "rheumatoid arthritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "arthritis", "psoriatic arthritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "arthritis", "septic arthritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "arthritis", "gouty arthritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "arthritis", "reactive arthritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "spondylitis", "ankylosing spondylitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "colitis", "ulcerative colitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "colitis", "pseudomembranous colitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "colitis", "microscopic colitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "colitis", "ischemic colitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "esophagitis", "eosinophilic esophagitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "esophagitis", "reflux esophagitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "hepatitis", "autoimmune hepatitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "hepatitis", "alcoholic hepatitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "hepatitis", "viral hepatitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "nephritis", "interstitial nephritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "nephritis", "lupus nephritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "cystitis", "interstitial cystitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "cystitis", "hemorrhagic cystitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "arteritis", "giant cell arteritis|temporal arteritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "vaginitis", "atrophic vaginitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "rhinitis", "allergic rhinitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "dermatitis", "atopic dermatitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "dermatitis", "contact dermatitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "dermatitis", "seborrheic dermatitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "dermatitis", "stasis dermatitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "dermatitis", "diaper dermatitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "dermatitis", "perioral dermatitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "neuritis", "optic neuritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "neuritis", "vestibular neuritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "myelitis", "transverse myelitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "pneumonitis", "hypersensitivity pneumonitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "pneumonitis", "radiation pneumonitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "pneumonitis", "aspiration pneumonitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "thyroiditis", "subacute thyroiditis|de quervain thyroiditis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "thyroiditis", "postpartum thyroiditis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "tenosynovitis", "de quervain tenosynovitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "epicondylitis", "lateral epicondylitis|tennis elbow");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "epicondylitis", "medial epicondylitis|golfer's elbow");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "capsulitis", "adhesive capsulitis|frozen shoulder");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "tendinitis", "achilles tendinitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "tendinitis", "patellar tendinitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "tendinitis", "rotator cuff tendinitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "bursitis", "olecranon bursitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "bursitis", "prepatellar bursitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "bursitis", "trochanteric bursitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "bursitis", "pes anserine bursitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "urethritis", "gonococcal urethritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "cholangitis", "primary sclerosing cholangitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "cholangitis", "ascending cholangitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "cholecystitis", "emphysematous cholecystitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "cholecystitis", "acalculous cholecystitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "osteitis", "alveolar osteitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "osteitis", "condensing osteitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "sinusitis", "frontal sinusitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "cellulitis", "orbital cellulitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "cellulitis", "periorbital cellulitis|preseptal cellulitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "vasculitis", "leukocytoclastic vasculitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "vasculitis", "cutaneous vasculitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "colitis", "lymphocytic colitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "colitis", "collagenous colitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "gastritis", "fundic gastritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "gastritis", "atrophic gastritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "gastritis", "h pylori gastritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "gastritis", "erosive gastritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "osteomyelitis", "vertebral osteomyelitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "encephalitis", "limbic encephalitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "encephalitis", "anti nmda receptor encephalitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "neuritis", "brachial neuritis|parsonage turner");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "myositis", "inclusion body myositis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "bursitis", "septic bursitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "hidradenitis", "hidradenitis suppurativa");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "sialadenitis", "submandibular sialadenitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "esophagitis", "candida esophagitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "esophagitis", "pill esophagitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "proctitis", "radiation proctitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "enteritis", "radiation enteritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "peritonitis", "spontaneous bacterial peritonitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -itis", "mastitis", "periductal mastitis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body part that comes in pairs", "hamstrings", "hamstring muscles");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body part that comes in pairs", "bronchi", "main bronchi");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body part that comes in pairs", "tonsils", "palatine tonsils");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body part that comes in pairs", "humerus", "humeri");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease or sign named after a person", "legg calve perthes disease", "perthes disease");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease or sign named after a person", "capgras delusion", "capgras syndrome");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease or sign named after a person", "babinski sign", "babinski reflex");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "loss of appetite", "anorexia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "thirst", "polydipsia|excessive thirst");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "frequent urination", "excessive urination");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "swelling", "leg swelling");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "fainting", "fainting spells");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "chills", "chills and rigors|rigors");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "bruising", "easy bruising");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "cramps", "muscle cramps");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "weakness", "muscle weakness");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "stiffness", "morning stiffness");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "abdominal pain", "cramping abdominal pain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "weight loss", "unexplained weight loss");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "swelling", "edema of ankles");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "cough", "productive cough");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "cough", "dry cough");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "cough", "barking cough");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a symptom", "congestion", "chest congestion");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "colectomy", "total colectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "colectomy", "subtotal colectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "gastrectomy", "partial gastrectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "gastrectomy", "sleeve gastrectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "cystectomy", "pilonidal cystectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "cholecystectomy", "laparoscopic cholecystectomy|lap chole");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "pancreatectomy", "distal pancreatectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "pancreatectomy", "total pancreatectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "hepatectomy", "partial hepatectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "lobectomy", "sleeve lobectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "hysterectomy", "total hysterectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "hysterectomy", "radical hysterectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "hysterectomy", "supracervical hysterectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "hysterectomy", "vaginal hysterectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "hysterectomy", "abdominal hysterectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "oophorectomy", "salpingo oophorectomy|bso");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "laminectomy", "colpectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "prostatectomy", "radical prostatectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "prostatectomy", "simple prostatectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "cystectomy", "radical cystectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "cystectomy", "partial cystectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "nephrectomy", "partial nephrectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "nephrectomy", "radical nephrectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "nephrectomy", "donor nephrectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "orchiectomy", "inguinal orchiectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "mastectomy", "simple mastectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "mastectomy", "radical mastectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "mastectomy", "modified radical mastectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "mastectomy", "double mastectomy|bilateral mastectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "mastectomy", "nipple sparing mastectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "mastectomy", "subcutaneous mastectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "mastectomy", "segmental mastectomy|partial mastectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "thyroidectomy", "total thyroidectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "thyroidectomy", "subtotal thyroidectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "cystectomy", "thyroglossal duct cystectomy|sistrunk");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "adenoidectomy", "tonsillectomy and adenoidectomy|t and a");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "hypophysectomy", "transsphenoidal hypophysectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "endarterectomy", "carotid endarterectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -ectomy (surgical removal)", "laryngectomy", "supraglottic laryngectomy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypercalcemia", "hypercalcemia of malignancy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hyperinsulinemia", "hyperinsulinism");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hyperemesis", "hyperemesis gravidarum");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypertonic", "hypertonic saline");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypotonic", "hypotonic saline");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypertonic", "hypertonic solution");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypotonic", "hypotonic solution");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hyperosmolar", "hyperosmolality");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypoosmolar", "hypoosmolality");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypersensitivity", "hypersensitivity reaction");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hyperbaric", "hyperbaric oxygen");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypoventilation", "obesity hypoventilation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hyperactivity", "hyperactivity disorder|adhd");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypogastric", "hypogastric plexus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hyperopia", "hypermetropia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypertrophy", "hypertrophied");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypoperfusion", "hypoperfused");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "anemia", "aplastic anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "anemia", "iron deficiency anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "anemia", "pernicious anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "anemia", "sickle cell anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "anemia", "hemolytic anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "anemia", "megaloblastic anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "anemia", "macrocytic anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "anemia", "microcytic anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "anemia", "normocytic anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "anemia", "sideroblastic anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "anemia", "anemia of chronic disease");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "anemia", "fanconi anemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "leukemia", "acute myeloid leukemia|aml");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "leukemia", "acute lymphoblastic leukemia|all");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "leukemia", "chronic myeloid leukemia|cml");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "leukemia", "chronic lymphocytic leukemia|cll");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "leukemia", "hairy cell leukemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "leukemia", "promyelocytic leukemia|apl");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "thalassemia", "alpha thalassemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "thalassemia", "beta thalassemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "ischemia", "myocardial ischemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "ischemia", "mesenteric ischemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "ischemia", "limb ischemia|critical limb ischemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "ischemia", "cerebral ischemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "acidemia", "organic acidemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "acidemia", "propionic acidemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "acidemia", "methylmalonic acidemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "acidemia", "isovaleric acidemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "hypercholesterolemia", "familial hypercholesterolemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "hypercalcemia", "hypercalcemia of malignancy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "polycythemia", "polycythemia vera");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "polycythemia", "secondary polycythemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "viremia", "hiv viremia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "viremia", "hepatitis b viremia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "azotemia", "prerenal azotemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "azotemia", "postrenal azotemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "azotemia", "intrarenal azotemia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -emia (a blood condition)", "toxemia", "toxemia of pregnancy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "radiation", "radiation therapy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "sun exposure", "uv radiation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "radiation", "ionizing radiation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "asbestos", "asbestos exposure|mesothelioma risk");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "silica", "crystalline silica");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "betel nut", "betel quid|areca nut");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "hepatitis b", "hepatitis b virus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "hepatitis c", "hepatitis c virus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "immunosuppression", "immunosuppressants");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "arsenic", "arsenic in water");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "salted fish", "chinese style salted fish");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "diabetes", "diabetes type 2");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "radiation", "prior radiation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "chemotherapy", "prior chemotherapy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "dense breasts", "dense breast tissue");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "radiation", "chest radiation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "obesity", "postmenopausal obesity");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises your cancer risk", "tamoxifen", "tamoxifen endometrial");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "heart disease", "ischemic heart disease|coronary artery disease");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "stroke", "hemorrhagic stroke");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "stroke", "ischemic stroke");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "liver disease", "chronic liver disease");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "poisoning", "unintentional poisoning");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "overdose", "drug overdose");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "overdose", "opioid overdose");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "homicide", "assault");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "fire", "burns");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "neonatal conditions", "perinatal conditions");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "pregnancy complications", "childbirth");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "diarrheal disease", "diarrhea");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "malnutrition", "protein energy malnutrition");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "diabetes", "diabetes complications");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "alcohol", "alcohol use disorder");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "parkinson disease", "parkinsons");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "covid", "covid 19");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a leading cause of death", "war", "armed conflict");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "band aids", "adhesive bandages");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "gauze", "sterile gauze pads");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "antibiotic ointment", "triple antibiotic ointment");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "cold pack", "instant cold pack");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "elastic bandage", "crepe bandage");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "elastic bandage", "compression bandage");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "gloves", "nitrile gloves");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "gloves", "latex gloves");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "scissors", "bandage scissors");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "tick remover", "tick tweezers");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "hydrocortisone cream", "hydrocortisone 1%");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "calamine lotion", "calamine");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "emergency blanket", "space blanket|mylar blanket");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "whistle", "emergency whistle");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "tourniquet", "tourniquet cat|combat application tourniquet");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "hemostatic gauze", "quikclot gauze");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "eye pads", "eye patch");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "thermometer", "thermometer strips");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something in a first aid kit", "thermometer", "disposable thermometer");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an infection", "mycoplasma", "walking pneumonia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name an infection", "leprosy", "hansen disease");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body fluid or secretion", "blood", "whole blood");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body fluid or secretion", "blood", "venous blood");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body fluid or secretion", "blood", "arterial blood");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body fluid or secretion", "menstrual blood", "menses|menstrual fluid");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body fluid or secretion", "semen", "sperm");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body fluid or secretion", "sweat", "sweat apocrine|apocrine sweat");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body fluid or secretion", "sweat", "eccrine sweat");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body fluid or secretion", "snot", "nasal mucus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body fluid or secretion", "saliva", "drool|spit");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body fluid or secretion", "stomach acid", "hydrochloric acid");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body fluid or secretion", "plasma", "blood plasma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a body fluid or secretion", "surfactant", "surfactant fluid");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason someone goes to the ER", "heart attack", "mi");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason someone goes to the ER", "drowning", "near drowning");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason someone goes to the ER", "sprain", "ankle sprain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason someone goes to the ER", "broken bone", "hip fracture");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason someone goes to the ER", "broken bone", "wrist fracture");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason someone goes to the ER", "broken bone", "rib fracture");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason someone goes to the ER", "bleeding", "bleeding that won't stop");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason someone goes to the ER", "overdose", "opioid overdose");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason someone goes to the ER", "blood clot", "leg swelling");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason someone goes to the ER", "kidney stones", "kidney stone pain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason someone goes to the ER", "dehydration", "dehydration in child");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a reason someone goes to the ER", "cuts", "lacerations needing stitches");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a condition with \"syndrome\" in its name", "edwards syndrome", "trisomy 18");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a condition with \"syndrome\" in its name", "patau syndrome", "trisomy 13");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term with a color in it", "red blood cell", "rbcs");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term with a color in it", "white blood cell", "wbcs");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term with a color in it", "black box warning", "black box");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term with a color in it", "black eye", "periorbital ecchymosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term with a color in it", "black widow bite", "black widow spider");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term with a color in it", "black lung", "black lung disease|coal workers pneumoconiosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term with a color in it", "rubella", "rubella german measles");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term with a color in it", "cyanosis", "cyanotic|cyanosis central");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term with a color in it", "yellow card", "yellow card reporting");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term with a color in it", "red reflex", "red reflex test");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term with a color in it", "red reflex", "red eye reflex");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical term with a color in it", "erythroplakia", "red patch");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after a food", "onion skin", "onion skin fibrosis|onion skin lesion");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after a food", "cherry angioma", "cherry hemangioma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after a food", "anchovy paste abscess", "anchovy sauce pus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after a food", "cafe au lait spots", "cafe au lait macules");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after a food", "oat cell carcinoma", "oat cell");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after a food", "grape like cysts", "grape cluster|bunch of grapes");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after a food", "lemon sign", "lemon shaped skull");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after a food", "peau d orange", "orange skin|peau d'orange|orange peel mammogram");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after a food", "olive sign", "olive shaped mass");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after a food", "sausage digit", "sausage fingers");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after an animal", "crow's feet", "crow's feet wrinkles");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after an animal", "pigeon chest", "pigeon breast|pectus carinatum");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after an animal", "cri du chat", "cat cry syndrome");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after an animal", "panda sign", "panda eyes");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a medical sign or term named after an animal", "tiger striping", "tiger stripes");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "pasteurella", "pasteurellosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "salmonella", "salmonellosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "salmonella", "turtle salmonella");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "salmonella", "reptile salmonella");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "e coli", "e coli o157|hemolytic uremic syndrome");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "e coli", "shiga toxin e coli");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "roundworm", "visceral larva migrans");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "echinococcus", "dog tapeworm|echinococcus granulosus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "trichinosis", "trichinellosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "toxoplasmosis", "congenital toxoplasmosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "giardia", "giardiasis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "cryptosporidium", "cryptosporidiosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "hantavirus", "hantavirus pulmonary syndrome");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "mpox", "monkeypox virus");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "swine flu", "swine flu h1n1");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a disease you can catch from animals", "roundworm", "toxocara canis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something measured at a checkup", "blood pressure", "systolic blood pressure");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something measured at a checkup", "blood pressure", "diastolic blood pressure");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something measured at a checkup", "oxygen saturation", "pulse oximetry|spo2");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something measured at a checkup", "weight", "weight change");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something measured at a checkup", "hearing", "hearing test|audiogram");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something measured at a checkup", "cholesterol", "total cholesterol");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something measured at a checkup", "hearing", "newborn hearing screen");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something measured at a checkup", "temperature", "body temperature");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something measured at a checkup", "heart rate", "apical pulse");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something measured at a checkup", "vision", "vision screening");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a healthy habit", "sleep", "good sleep hygiene");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a healthy habit", "posture", "good posture");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "sclerosis", "amyotrophic lateral sclerosis|als");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "sclerosis", "systemic sclerosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "sclerosis", "tuberous sclerosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "sclerosis", "primary lateral sclerosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "sclerosis", "mesial temporal sclerosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "fibrosis", "hepatic fibrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "fibrosis", "pulmonary fibrosis|idiopathic pulmonary fibrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "fibrosis", "retroperitoneal fibrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "fibrosis", "nephrogenic systemic fibrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "fibrosis", "submucous fibrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "fibrosis", "progressive massive fibrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "fibrosis", "endomyocardial fibrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "thrombosis", "deep vein thrombosis|dvt");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "thrombosis", "cerebral venous sinus thrombosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "thrombosis", "portal vein thrombosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "thrombosis", "renal vein thrombosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "thrombosis", "cavernous sinus thrombosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "thrombosis", "stent thrombosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "necrosis", "avascular necrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "necrosis", "acute tubular necrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "necrosis", "fat necrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "necrosis", "caseous necrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "necrosis", "liquefactive necrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "necrosis", "coagulative necrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "necrosis", "fibrinoid necrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "necrosis", "papillary necrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "stenosis", "aortic stenosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "stenosis", "mitral stenosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "stenosis", "pulmonary stenosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "stenosis", "tricuspid stenosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "stenosis", "spinal stenosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "stenosis", "pyloric stenosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "stenosis", "renal artery stenosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "stenosis", "carotid stenosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "stenosis", "tracheal stenosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "stenosis", "subglottic stenosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "acidosis", "metabolic acidosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "acidosis", "respiratory acidosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "acidosis", "lactic acidosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "ketoacidosis", "diabetic ketoacidosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "acidosis", "renal tubular acidosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "alkalosis", "metabolic alkalosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "alkalosis", "respiratory alkalosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "alkalosis", "contraction alkalosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "ketoacidosis", "alcoholic ketoacidosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "ketosis", "starvation ketosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "keratosis", "actinic keratosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "keratosis", "seborrheic keratosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "steatosis", "nonalcoholic steatosis|hepatic steatosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "cirrhosis", "primary biliary cirrhosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "cirrhosis", "alcoholic cirrhosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "cirrhosis", "cardiac cirrhosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "spherocytosis", "hereditary spherocytosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "ptosis", "breast ptosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "spondylosis", "cervical spondylosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "spondylosis", "lumbar spondylosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "histiocytosis", "histiocytosis x");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "histiocytosis", "langerhans cell histiocytosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "fibromatosis", "desmoid fibromatosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "fibromatosis", "aggressive fibromatosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "nephrosis", "lipoid nephrosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "anastomosis", "arteriovenous anastomosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -osis", "ichthyosis", "lamellar ichthyosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "basal cell carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "squamous cell carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "ductal carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "lobular carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "transitional cell carcinoma|urothelial carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "renal cell carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "hepatocellular carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "small cell carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "large cell carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "medullary carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "papillary carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "follicular carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "anaplastic carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "nasopharyngeal carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "merkel cell carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "embryonal carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "adrenocortical carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "lymphoma", "hodgkin lymphoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "lymphoma", "non hodgkin lymphoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "lymphoma", "burkitt lymphoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "lymphoma", "diffuse large b cell lymphoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "lymphoma", "follicular lymphoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "lymphoma", "mantle cell lymphoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "lymphoma", "marginal zone lymphoma|malt lymphoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "lymphoma", "t cell lymphoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "sarcoma", "ewing sarcoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "sarcoma", "kaposi sarcoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "sarcoma", "synovial sarcoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "sarcoma", "undifferentiated pleomorphic sarcoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "glioma", "optic glioma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "astrocytoma", "pilocytic astrocytoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "astrocytoma", "anaplastic astrocytoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "papilloma", "choroid plexus papilloma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "schwannoma", "vestibular schwannoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "neurofibroma", "plexiform neurofibroma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "neuroma", "traumatic neuroma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "neuroma", "morton neuroma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "osteoma", "osteoid osteoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "hemangioma", "cavernous hemangioma|cavernoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "hemangioma", "capillary hemangioma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "granuloma", "pyogenic granuloma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "granuloma", "eosinophilic granuloma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "granuloma", "swimming pool granuloma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "granuloma", "sarcoid granuloma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "granuloma", "caseating granuloma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "granuloma", "cholesterol granuloma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "granuloma", "giant cell granuloma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "carcinoma", "thymic carcinoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "pituitary adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "toxic adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "follicular adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "parathyroid adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "adrenal adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "hepatic adenoma|hepatocellular adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "villous adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "tubular adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "tubulovillous adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "serrated adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "pleomorphic adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "bronchial adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "nephrogenic adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "cystadenoma", "serous cystadenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "cystadenoma", "mucinous cystadenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "papilloma", "intraductal papilloma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "papilloma", "inverted papilloma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "papilloma", "squamous papilloma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "syringoma", "chondroid syringoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "melanoma", "lentigo maligna melanoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "melanoma", "acral lentiginous melanoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "melanoma", "nodular melanoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "melanoma", "superficial spreading melanoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "melanoma", "amelanotic melanoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "melanoma", "uveal melanoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "melanoma", "mucosal melanoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "hematoma", "subdural hematoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "hematoma", "epidural hematoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "hematoma", "intracerebral hematoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "hematoma", "retroperitoneal hematoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "hematoma", "septal hematoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "hematoma", "auricular hematoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "hematoma", "retroplacental hematoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "hematoma", "subungual hematoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "hematoma", "rectus sheath hematoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "cortisol producing adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "teratoma", "mature teratoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "teratoma", "immature teratoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "seminoma", "spermatocytic seminoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "ameloblastoma", "unicystic ameloblastoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "fibroma", "ameloblastic fibroma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "odontoma", "ameloblastic fibro odontoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "odontoma", "compound odontoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "odontoma", "complex odontoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "fibroma", "cementifying fibroma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "fibroma", "ossifying fibroma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "fibroma", "irritation fibroma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "fibroma", "giant cell fibroma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "fibroma", "peripheral ossifying fibroma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "rhabdomyosarcoma", "embryonal rhabdomyosarcoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "rhabdomyosarcoma", "alveolar rhabdomyosarcoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "astrocytoma", "subependymal giant cell astrocytoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "glioblastoma", "glioblastoma multiforme|gbm");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "lymphoma", "primary cns lymphoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "macroadenoma", "pituitary macroadenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "somatotroph adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "corticotroph adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -oma (a growth or tumor)", "adenoma", "null cell adenoma");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "endoscopy", "upper endoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "endoscopy", "capsule endoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "enteroscopy", "push enteroscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "enteroscopy", "double balloon enteroscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "colonoscopy", "virtual colonoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "sigmoidoscopy", "flexible sigmoidoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "bronchoscopy", "rigid bronchoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "bronchoscopy", "flexible bronchoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "bronchoscopy", "navigational bronchoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "laryngoscopy", "direct laryngoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "laryngoscopy", "indirect laryngoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "laryngoscopy", "video laryngoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "laryngoscopy", "fiberoptic laryngoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "endoscopy", "nasal endoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "endoscopy", "periodontal endoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "microscopy", "dental microscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "microscopy", "electron microscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "microscopy", "light microscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "microscopy", "fluorescence microscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "microscopy", "confocal microscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "microscopy", "darkfield microscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "microscopy", "phase contrast microscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "microscopy", "polarized light microscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "microscopy", "immunofluorescence microscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "microscopy", "epiluminescence microscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "capillaroscopy", "nailfold capillaroscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "ophthalmoscopy", "funduscopy|fundoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "ophthalmoscopy", "direct ophthalmoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "ophthalmoscopy", "indirect ophthalmoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "otoscopy", "pneumatic otoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "anoscopy", "high resolution anoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a word ending in -scopy (a look inside)", "endoscopy", "vascular endoscopy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common allergy or allergen", "peanuts", "peanut allergy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common allergy or allergen", "tree nuts", "tree nut allergy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common allergy or allergen", "grass", "grass pollen");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common allergy or allergen", "iodine contrast", "contrast media");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common allergy or allergen", "latex", "latex gloves");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common allergy or allergen", "perfume", "fragrance mix");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common allergy or allergen", "ragweed", "ragweed pollen");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common allergy or allergen", "adhesive tape", "medical tape");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a common allergy or allergen", "chlorhexidine", "chlorhexidine gluconate");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of aging", "gray hair", "white hair|grey hair");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of aging", "hair loss", "thinning hair");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of aging", "vision changes", "needing reading glasses");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of aging", "thinning skin", "thinner skin");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of aging", "macular degeneration", "age related macular degeneration");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a sign of aging", "vision changes", "reading glasses|bifocals");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "obesity", "weight gain");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "lack of exercise", "sedentary lifestyle");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "lack of exercise", "physical inactivity");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "alcohol", "heavy drinking");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "smoking", "tobacco");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "smoking", "nicotine");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "caffeine", "coffee");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "licorice", "black licorice|glycyrrhizin");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "kidney disease", "chronic kidney disease");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "hyperaldosteronism", "primary aldosteronism|conn syndrome");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "cushing syndrome", "cushing disease");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "sleep apnea", "obstructive sleep apnea");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "white coat syndrome", "white coat effect");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "genetics", "family history");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "age", "older age");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "birth control pills", "oral contraceptives");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "steroids", "corticosteroids");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "erythropoietin", "esa|epoetin");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "anger", "anger outbursts");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "stress", "work stress");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that raises blood pressure", "stress", "financial stress");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "lack of sleep", "sleep deprivation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "stress", "chronic stress");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "loneliness", "social isolation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "alcohol", "heavy drinking");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "smoking", "tobacco smoke");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "aging", "old age|immunosenescence");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "hiv", "aids");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "chemotherapy", "cancer treatment");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "radiation", "radiation therapy");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "steroids", "corticosteroids");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "splenectomy", "asplenia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "kidney failure", "uremia");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "liver cirrhosis", "cirrhosis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "diabetes", "uncontrolled diabetes");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "scid", "severe combined immunodeficiency");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "loneliness", "loneliness and isolation");  // 2026-11-04 · board audit · same answer
crowdAlias("Name something that weakens the immune system", "stress", "caregiver stress");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the head or face", "eyes", "eyeball");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the head or face", "eye sockets", "orbit");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the head or face", "eyebrows", "brow");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the head or face", "eyelids", "upper eyelid");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the head or face", "eyelids", "lower eyelid");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the head or face", "bridge of nose", "nasal bridge");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the head or face", "septum", "nasal septum");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the head or face", "earlobe", "lobule");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the head or face", "crown", "crown of head|vertex");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the head or face", "brain", "cerebrum");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the head or face", "fontanelle", "soft spot");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a part of the head or face", "nasolabial fold", "laugh lines|smile lines");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a chronic disease", "migraine", "chronic migraine");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a chronic disease", "gout", "gouty arthritis");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a chronic disease", "hiv", "hiv aids|aids");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a chronic disease", "chronic fatigue syndrome", "me cfs");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a chronic disease", "hepatitis b", "chronic hepatitis b");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a chronic disease", "hepatitis c", "chronic hepatitis c");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a chronic disease", "copd", "chronic obstructive pulmonary disease");  // 2026-11-04 · board audit · same answer
crowdAlias("Name a chronic disease", "high blood pressure", "htn");  // 2026-11-04 · board audit · same answer
