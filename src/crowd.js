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

// ===== 2026-11-05 nightly answer review =====
crowdAlias("Name a bacterium that causes disease in humans", "haemophilus influenzae", "h flu|h influenzae");  // 2026-11-05 · 1 player · abbreviation
crowd("Name a blood pressure medication", 85, "baxdrostat|baxfendy");  // 2026-11-05 · 1 player · aldosterone synthase inhibitor, FDA-approved 2026 for uncontrolled hypertension
crowdAlias("Name a blood pressure medication", "sacubitril valsartan", "sacubitril");  // 2026-11-05 · 1 player · component of Entresto
crowdAlias("Name a blood test", "anti scl 70", "anti topoisomerase|anti tropisomerase|anti topoisomerase i");  // 2026-11-05 · 1 player · same antibody
crowd("Name a blood test", 72, "clozapine level|clozapine levels");  // 2026-11-05 · 1 player · therapeutic drug monitoring, like other drug levels listed
crowd("Name a cause of abdominal pain", 85, "annular pancreas");  // 2026-11-05 · 1 player · causes duodenal obstruction/pancreatitis pain
crowdAlias("Name a cause of acute pancreatitis", "scorpion sting", "scorpion venom");  // 2026-11-05 · 3 players · same thing
crowdAlias("Name a cause of chronic cough", "scleroderma lung", "limited scleroderma|systemic sclerosis");  // 2026-11-05 · 1 player · scleroderma ILD
crowdAlias("Name a cause of dizziness or vertigo", "mal de debarquement", "maldebarquement syndrome|mal de debarquement syndrome");  // 2026-11-05 · 1 player · spelling
crowdAlias("Name a cause of heart palpitations", "arrhythmogenic right ventricular cardiomyopathy", "arythmogenic right ventricle|arrhythmogenic right ventricle|arvc|arvd");  // 2026-11-05 · 1 player · same disease
crowdAlias("Name a cause of heart palpitations", "digoxin toxicity", "digoxin");  // 2026-11-05 · 2 players · same answer
crowdAlias("Name a cause of heart palpitations", "theophylline", "methylxanthine|methylxanthines|aminophylline");  // 2026-11-05 · 1 player · drug class of theophylline
crowd("Name a cause of heart palpitations", 55, "serotonin syndrome|seratonin syndrome");  // 2026-11-05 · 5 players · tachycardia is a core feature
crowd("Name a cause of heart palpitations", 83, "neuroleptic malignant syndrome|nms");  // 2026-11-05 · 1 player · autonomic instability with tachycardia
crowdAlias("Name a cause of numbness or tingling", "cervical radiculopathy", "c4 radiculopathy|c5 radiculopathy|c6 radiculopathy|c7 radiculopathy");  // 2026-11-05 · 1 player · level-specific
crowd("Name a cause of numbness or tingling", 82, "central cord syndrome|cebtral cord sundrome");  // 2026-11-05 · 1 player · upper-limb sensory loss/dysesthesia
crowd("Name a cause of numbness or tingling", 82, "cocaine");  // 2026-11-05 · 1 player · local anesthetic, causes numbness
crowdAlias("Name a cause of numbness or tingling", "compartment syndrome", "compartment disease");  // 2026-11-05 · 1 player · same thing
crowdAlias("Name a cause of numbness or tingling", "radial nerve palsy", "crutch palsy|saturday night palsy");  // 2026-11-05 · 1 player · radial nerve compression
crowdAlias("Name a cause of numbness or tingling", "guillain barre syndrome", "gullian barre|guillian barre|gbs");  // 2026-11-05 · 2 players · spelling
crowd("Name a cause of numbness or tingling", 72, "pancoast tumor|pancoast tumour|superior sulcus tumor");  // 2026-11-05 · 2 players · brachial plexus invasion, ulnar paresthesia
crowd("Name a cause of numbness or tingling", 82, "phantom limb sensation|phantom limb|phantom limb syndrome");  // 2026-11-05 · 1 player · tingling phantom sensations after amputation
crowdAlias("Name a cause of numbness or tingling", "pinched nerve", "radiculopathy");  // 2026-11-05 · 4 players · medical term for pinched nerve root
crowdAlias("Name a cause of numbness or tingling", "subacute combined degeneration", "subacute combined degeneration of spinal cord|subacute combined degeneration of the spinal cord|subacute degeneration");  // 2026-11-05 · 3 players · same answer
crowd("Name a cause of thrombocytopenia", 85, "methotrexate");  // 2026-11-05 · 1 player · myelosuppression
crowdAlias("Name a chronic disease", "alzheimer disease", "alzheimers|alzheimer's");  // 2026-11-05 · 1 player · spelling
crowdAlias("Name a common reason for a primary care visit", "heart palpitations", "palpitations");  // 2026-11-05 · 1 player · same answer
crowdAlias("Name a common reason for a primary care visit", "pap smear", "smear test|cervical smear");  // 2026-11-05 · 1 player · UK term
crowdAlias("Name a compounding term or piece of compounding equipment", "ointment slab", "slab");  // 2026-11-05 · 1 player · same item
crowdAlias("Name a drug that causes SIADH", "vasopressin", "adh|antidiuretic hormone");  // 2026-11-05 · 2 players · same drug
crowdAlias("Name a heart test or cardiac study", "troponin", "cardiac troponin|cardiac troponin i|cardiac troponin t");  // 2026-11-05 · 1 player · same test
crowdAlias("Name a heart test or cardiac study", "nuclear stress test", "mibi|sestamibi|mibi scan");  // 2026-11-05 · 2 players · sestamibi perfusion scan
crowdAlias("Name a lung disease", "pulmonary fibrosis", "fibrosis|lung fibrosis");  // 2026-11-05 · 3 players · same answer
crowdAlias("Name a major medical discovery or invention", "cochlear implant", "bionic ear");  // 2026-11-05 · 1 player · same invention
crowdAlias("Name a major medical discovery or invention", "immunotherapy", "pd-1 inhibitors|pd 1 inhibitors|checkpoint inhibitors|immune checkpoint inhibitors");  // 2026-11-05 · 1 player · checkpoint immunotherapy
crowdAlias("Name a medical imaging test", "white blood cell scan", "white cell scan|labelled white cell scan|leukocyte scan");  // 2026-11-05 · 4 players · same test
crowdAlias("Name a medical instrument or tool", "rongeur", "bone nibbler|bone nibblers");  // 2026-11-05 · 3 players · UK name for rongeur
crowdAlias("Name a medical instrument or tool", "traction device", "braun frame|braun splint|bohler braun frame");  // 2026-11-05 · 1 player · leg traction frame
crowdAlias("Name a medical instrument or tool", "magill forceps", "mcgills|magills|mcgill forceps");  // 2026-11-05 · 1 player · spelling
crowd("Name a medical instrument or tool", 82, "orchidometer|orchidometre|prader orchidometer");  // 2026-11-05 · 1 player · testicular volume beads
crowdAlias("Name a medical instrument or tool", "sponge forceps", "rampley's forcep|rampley's forceps|rampley forceps|rampleys forceps");  // 2026-11-05 · 1 player · Rampley = sponge-holding forceps
crowdAlias("Name a medical instrument or tool", "reflex hammer", "tendon hammer");  // 2026-11-05 · 2 players · same tool
crowd("Name a medical term with a color in it", 67, "muddy brown casts|muddy brown granular casts");  // 2026-11-05 · 1 player · ATN urine finding
crowd("Name a medical term with a color in it", 67, "ragged red fibers|red ragged fibers|ragged red fibres");  // 2026-11-05 · 1 player · mitochondrial myopathy biopsy
crowdAlias("Name a muscle", "orbicularis oris", "oris obicularis|oris orbicularis");  // 2026-11-05 · 1 player · word order/spelling
crowdAlias("Name a neurological disorder", "myasthenia gravis", "ocular myasthenia gravis|occular myaesthenia gravis|ocular myasthenia");  // 2026-11-05 · 1 player · subtype
crowd("Name a newborn assessment or procedure", 85, "rop exam|rop screening|retinopathy of prematurity screening|retinopathy of prematurity exam");  // 2026-11-05 · 1 player · standard preterm screening
crowdAlias("Name a part of the brain", "paraventricular nucleus", "paraventral nucleus|pvn");  // 2026-11-05 · 1 player · spelling
crowdAlias("Name a part of the eye", "zonules", "zonular fibers|zonular fibres|zonules of zinn");  // 2026-11-05 · 1 player · same structure
crowdAlias("Name a part of the eye", "uveoscleral outflow", "uveoscleral outflow tract|uveoscleral pathway");  // 2026-11-05 · 1 player · same answer
crowdAlias("Name a part of the heart", "trabeculae carneae", "teniae carnae|trabecula carnea");  // 2026-11-05 · 1 player · misspelling
crowd("Name a physical exam sign named after a person", 71, "moro reflex|moro");  // 2026-11-05 · 1 player · Ernst Moro, newborn exam
crowdAlias("Name a physical exam sign named after a person", "hertoghe sign", "queen anne's sign|queen anne sign|queen annes sign");  // 2026-11-05 · 1 player · same sign
crowdAlias("Name a piece of PPE or infection control measure", "hand sanitizer", "hand sanitization|hand sanitisation");  // 2026-11-05 · 1 player · same measure
crowdAlias("Name a piece of PPE or infection control measure", "n95", "n95 mask|n95 respirator");  // 2026-11-05 · 1 player · same item
crowdAlias("Name a preventive screening test", "aaa ultrasound", "aortic aneurysm|aortic aneurysm screening|aaa screening");  // 2026-11-05 · 1 player · same screen
crowdAlias("Name a preventive screening test", "hemoccult", "fecal occult blood test|fobt|gfobt|guaiac test");  // 2026-11-05 · 1 player · same test
crowdAlias("Name a preventive screening test", "tb test", "mantoux|mantoux test|tuberculin skin test");  // 2026-11-05 · 1 player · same test
crowdAlias("Name a reason a filling or crown fails", "recurrent decay", "cavity|recurrent caries|secondary caries");  // 2026-11-05 · 2 players · same thing
crowdAlias("Name a reflex", "achilles", "achilles tendon reflex|achilies tendon reflex|achilles reflex|ankle reflex|ankle jerk");  // 2026-11-05 · 1 player · same reflex
crowdAlias("Name a reflex", "diving", "dive reflex|diving reflex");  // 2026-11-05 · 4 players · same reflex
crowdAlias("Name a reflex", "jaw jerk", "jaw reflex|jaw jerk reflex");  // 2026-11-05 · 3 players · same reflex
crowdAlias("Name a sign of abuse or neglect", "sexually transmitted infection", "std|sti");  // 2026-11-05 · 1 player · abbreviation
crowdAlias("Name a sign of preeclampsia", "visual changes", "blurred vision|blurred visiin|blurry vision");  // 2026-11-05 · 1 player · visual disturbance
crowdAlias("Name a sports injury", "avulsion fracture", "5th metatarsal avulsion|fifth metatarsal avulsion|pseudo jones fracture");  // 2026-11-05 · 1 player · subtype
crowdAlias("Name a sports injury", "it band syndrome", "iliotibial band syndrome|itbs");  // 2026-11-05 · 1 player · same injury
crowdAlias("Name a sports injury", "tennis elbow", "lateral epicondylitis|lateral epicodylitis");  // 2026-11-05 · 1 player · medical name
crowdAlias("Name a sports injury", "osgood schlatter disease", "osgood schlater|osgood schlatter");  // 2026-11-05 · 1 player · spelling
crowdAlias("Name a sports injury", "herniated disc", "slipped disc|slipped disk");  // 2026-11-05 · 1 player · lay term
crowdAlias("Name a surgical procedure", "esophagectomy", "ivor lewis oesophagectomy|ivor lewis esophagectomy|ivor lewis");  // 2026-11-05 · 1 player · esophagectomy type
crowdAlias("Name a surgical procedure", "pilonidal cyst excision", "karydakis procedure|karydakis flap");  // 2026-11-05 · 1 player · pilonidal sinus operation
crowd("Name a surgical procedure", 85, "tracheoesophageal puncture|tep");  // 2026-11-05 · 1 player · voice restoration after laryngectomy
crowdAlias("Name a task an RN can delegate to a nursing assistant", "weighing patients", "weight|daily weight|daily weights");  // 2026-11-05 · 1 player · same task
crowd("Name a type of cell in the human body", 82, "neural crest cell|neural crest cells|neural crest");  // 2026-11-05 · 1 player · embryonic multipotent cell
crowdAlias("Name an endocrine disorder", "precocious puberty", "central precocious puberty");  // 2026-11-05 · 1 player · subtype
crowdAlias("Name an endocrine disorder", "androgen insensitivity syndrome", "congenital androgen insensitivity|complete androgen insensitivity syndrome|cais");  // 2026-11-05 · 1 player · same disorder
crowdAlias("Name an endocrine disorder", "hyperaldosteronism", "conn's disease|conns disease|conn syndrome|conn's syndrome|primary hyperaldosteronism");  // 2026-11-05 · 2 players · same disorder
crowd("Name an endocrine disorder", 59, "digeorge syndrome|di george syndrome|22q11 deletion syndrome");  // 2026-11-05 · 4 players · parathyroid aplasia, congenital hypoparathyroidism
crowdAlias("Name an endocrine disorder", "lymphocytic hypophysitis", "hypophysitis");  // 2026-11-05 · 1 player · same disorder
crowdAlias("Name an endocrine disorder", "de quervain thyroiditis", "subacute granulomatous thyroiditis|subacture granamlotous thyroidtisi|subacute thyroiditis");  // 2026-11-05 · 1 player · same disorder
crowd("Name an endocrine disorder", 72, "waterhouse friderichsen syndrome|waterhouse-friderichsen syndrome|waterhouse friedrishson");  // 2026-11-05 · 2 players · bilateral adrenal hemorrhage, adrenal crisis
crowd("Name an eye disease or condition", 68, "keratoglobus");  // 2026-11-05 · 1 player · corneal ectasia
crowdAlias("Name an eye disease or condition", "ischemic optic neuropathy", "non-arteritic ischaemic optic neuropathy|non arteritic ischemic optic neuropathy|naion");  // 2026-11-05 · 1 player · subtype
crowd("Name an eye disease or condition", 68, "orbital compartment syndrome|ocular compartment syndrome");  // 2026-11-05 · 1 player · ophthalmic emergency
crowd("Name an occupational lung exposure or disease", 85, "pneumoconiosis|pneumoconioses");  // 2026-11-05 · 1 player · dust lung disease
crowd("Name an organ of the human body", 58, "organ of corti|spiral organ");  // 2026-11-05 · 4 players · sensory organ of hearing; ear/cochlea listed
crowd("Name an organ of the human body", 82, "organum vasculosum of the lamina terminalis|ovlt|organ vasculosum of lamina terminalis|organ vasculosom of lamina terminalis");  // 2026-11-05 · 1 player · circumventricular organ
crowdAlias("Name something included in a nursing handoff report", "vital signs", "heart rate");  // 2026-11-05 · 1 player · a vital sign
crowdAlias("Name a drug with a boxed (black box) warning", "natalizumab", "tysabri");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antibiotic", "cefazolin", "kefzol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antibiotic", "doxycycline", "doxycycline hyclate|vibramycin|doryx|acticlate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antibiotic", "minocycline", "minocin|solodyn");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antibiotic", "vancomycin", "oral vancomycin|firvanq|vancocin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antibiotic", "tobramycin", "tobramycin inhaled|tobi");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antibiotic", "amikacin", "amikacin liposome|arikayce");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antibiotic", "penicillin", "penicillin g potassium|pfizerpen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antibiotic", "cefuroxime", "cefuroxime axetil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antibiotic", "sulbactam durlobactam", "xacduro");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "doxylamine pyridoxine", "doxylamine|unisom");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "scopolamine patch", "transderm scop|transdermal scopolamine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "pepto bismol", "bismuth");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "sodium phosphate", "osmoprep|sodium phosphate tablets");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "golytely", "plenvu|moviprep|nulytely|trilyte");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "octreotide", "sandostatin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "cholestyramine", "questran");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "mesalamine", "mesalamine suppository|canasa|rowasa|mesalamine enema");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "omeprazole", "omeprazole sodium bicarbonate|zegerid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "metoclopramide", "metoclopramide nasal|gimoti");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "budesonide", "budesonide oral suspension|eohilia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "ursodiol", "ursodeoxycholic acid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "docusate", "stool softener|stool softeners");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "famotidine", "h2 blocker|h2 blockers|h2 receptor antagonist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "ondansetron", "5 ht3 antagonist|5ht3 antagonist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "aprepitant", "nk1 antagonist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a GI medication (nausea, reflux or bowel)", "psyllium", "fiber supplement|bulk forming laxative");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "ace inhibitors", "zestril|prinivil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "isotretinoin", "absorica|claravis");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "tetracycline", "vibramycin|minocycline");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "methimazole", "tapazole");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "arbs", "sacubitril valsartan|entresto");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "nsaids", "naproxen|aleve|indomethacin|ketorolac|diclofenac|celecoxib|meloxicam");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "vitamin a", "vitamin a high dose|retinol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "tazarotene", "tazorac");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "methotrexate", "trexall");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "cyclophosphamide", "cytoxan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "dutasteride", "avodart");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "mifepristone", "mifeprex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "dihydroergotamine", "dhe");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "warfarin", "jantoven");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "statins", "simvastatin|rosuvastatin|lovastatin|pravastatin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "lomitapide", "juxtapid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "amiodarone", "cordarone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "dronedarone", "multaq");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "riociguat", "adempas");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "macitentan", "opsumit");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "ambrisentan", "letairis");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "bosentan", "tracleer");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "ribavirin", "rebetol|copegus");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "miltefosine", "impavido");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "quinine", "qualaquin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "thalidomide", "thalomid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "lenalidomide", "revlimid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "pomalidomide", "pomalyst");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "penicillamine", "cuprimine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "fluoroquinolones", "levofloxacin|moxifloxacin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "sulfonamides", "bactrim|tmp smx");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "lithium", "lithobid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "valproate", "divalproex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "carbamazepine", "tegretol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "phenytoin", "dilantin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "topiramate", "topamax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "benzodiazepines", "alprazolam|xanax|diazepam");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "estrogens", "estradiol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "testosterone", "androgens|anabolic steroids");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "danazol", "danocrine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "clomiphene", "clomid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "letrozole", "femara");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "raloxifene", "evista");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "mycophenolate", "myfortic");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "radioactive iodine", "i 131");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "alcohol", "ethanol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "tobacco", "smoking|cigarettes");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "marijuana", "thc");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "opioids", "oxycodone|morphine|hydrocodone|fentanyl|codeine|tramadol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "glp 1 agonists", "wegovy|liraglutide|tirzepatide|mounjaro");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "sglt2 inhibitors", "empagliflozin|dapagliflozin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "phentermine", "adipex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "orlistat", "xenical");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "vismodegib", "erivedge");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "sonidegib", "odomzo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "hydroxyurea", "hydrea");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "tetracycline", "sumycin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "ace inhibitors", "captopril|ramipril");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug to avoid in pregnancy", "arbs", "irbesartan|olmesartan|telmisartan|candesartan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "hydrocortisone", "cortisone cream|cortaid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "triamcinolone", "triamcinolone acetonide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "betamethasone", "betamethasone dipropionate|diprolene|betamethasone valerate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "clobetasol", "clobex|olux");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "ciclopirox", "penlac|loprox");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "nystatin", "mycostatin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "neosporin", "polysporin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "ivermectin cream", "ivermectin lotion|sklice");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "tretinoin", "renova|altreno|atralin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "lidocaine", "xylocaine|lmx 4");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "capsaicin", "zostrix|qutenza");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "menthol", "biofreeze|icy hot|bengay");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "diclofenac gel", "pennsaid|flector");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "aloe vera gel", "aloe");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "permethrin", "nix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "fluorouracil", "carac");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "imiquimod", "zyclara");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "trichloroacetic acid", "tca");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "cantharidin", "cantharone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "hydroquinone", "tri luma");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "azelaic acid", "azelex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "urea cream", "carmol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "doxepin cream", "prudoxin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "nitroglycerin ointment", "nitro paste");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "mupirocin", "centany");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "silver sulfadiazine", "ssd");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "metronidazole gel", "metrocream|noritate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "clindamycin gel", "clindagel|evoclin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "tazarotene", "arazlo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "salicylic acid", "stridex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "selenium sulfide", "selsun");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a topical skin medication", "coal tar", "t gel|neutrogena t gel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diuretic", "hydrochlorothiazide", "esidrix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diuretic", "metolazone", "mykrox");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diuretic", "spironolactone", "carospir");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diuretic", "maxzide", "triamterene hctz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diuretic", "conivaptan", "vaprisol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diuretic", "tolvaptan", "samsca|jynarque");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diuretic", "methazolamide", "neptazane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diuretic", "thiazide diuretic", "thiazides");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diuretic", "urea", "ure na");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diuretic", "mannitol", "osmitrol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diuretic", "chlorthalidone", "thalitone|hygroton");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diuretic", "indapamide", "lozol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "sumatriptan", "onzetra|tosymra|zembrace");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "rizatriptan", "maxalt mlt");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "naproxen", "aleve|anaprox");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "aspirin", "bayer");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "ketorolac", "toradol|sprix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "metoclopramide", "reglan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "prochlorperazine", "compazine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "magnesium", "magnesium sulfate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "dexamethasone", "decadron");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "dihydroergotamine", "migranal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "ergotamine", "ergomar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "topiramate", "trokendi|qudexy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "propranolol", "inderal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "amitriptyline", "elavil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "nortriptyline", "pamelor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "venlafaxine", "effexor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "verapamil", "calan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "candesartan", "atacand");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "riboflavin", "vitamin b2");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "coq10", "coenzyme q10");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "butterbur", "petasites");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "botox", "onabotulinumtoxina");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "almotriptan", "axert");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "cefaly", "gammacore|vagus nerve stimulator|neuromodulation device");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a migraine medication", "symbravo", "meloxicam rizatriptan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a muscle relaxant", "baclofen", "fleqsuvy|gablofen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a muscle relaxant", "skelaxin", "metaxall");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a muscle relaxant", "dantrolene", "ryanodex|revonto");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a muscle relaxant", "botox", "botulinum toxin|onabotulinumtoxina|dysport|xeomin|myobloc|rimabotulinumtoxinb|daxxify");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a muscle relaxant", "succinylcholine", "quelicin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a muscle relaxant", "pancuronium", "pavulon");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a muscle relaxant", "mivacurium", "mivacron");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "lantus", "semglee|rezvoglar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "humalog", "admelog|lyumjev");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "nph insulin", "humulin n|novolin n|isophane insulin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "regular insulin", "humulin r|novolin r|u 500|humulin r u 500");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "tolbutamide", "orinase");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "chlorpropamide", "diabinese");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "gliclazide", "diamicron");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "glucagon", "zegalogue|dasiglucagon");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "vildagliptin", "galvus");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "miglitol", "glyset");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "soliqua", "insulin glargine lixisenatide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "xultophy", "insulin degludec liraglutide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a diabetes medication", "ozempic", "oral semaglutide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a kinase inhibitor (many end in -tinib)", "imatinib", "glivec");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "keppra", "spritam|elepsia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "dilantin", "phenytek");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "depakote", "depakene|depacon|sodium valproate|epilim");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "lamictal", "subvenite");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "tegretol", "carbatrol|equetro|epitol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "topamax", "trokendi|qudexy|eprontia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "trileptal", "oxtellar xr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "phenobarbital", "luminal|sezaby");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "clonazepam", "rivotril");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "midazolam", "seizalam");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "diazepam", "libervant");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "methsuximide", "celontin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "lacosamide", "motpoly");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "vigabatrin", "vigadrone|vigafyde");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "everolimus", "afinitor|afinitor disperz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "rufinamide", "inovelon");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "zonisamide", "zonisade");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "ezogabine", "potiga");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiepileptic (antiseizure) drug", "sulthiame", "ospolot");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "insulin", "iv insulin|subcutaneous insulin|insulin drip|u 500 insulin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "heparin", "unfractionated heparin|heparin drip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "opioids", "dilaudid|oxycodone|hydrocodone|meperidine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "potassium chloride", "potassium phosphate|iv potassium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "chemotherapy", "antineoplastics|chemo|oral chemotherapy|cytotoxic drugs");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "methotrexate", "oral methotrexate|weekly methotrexate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "digoxin", "lanoxin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "warfarin", "coumadin|jantoven");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "doacs", "blood thinners|dabigatran|edoxaban");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "enoxaparin", "lovenox|dalteparin|fragmin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "tpa", "tenecteplase|tnkase|reteplase");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "epinephrine", "adrenaline");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "iv adrenergic agonists", "vasopressors|pressors|epinephrine drip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "iv adrenergic antagonists", "propranolol iv|metoprolol iv|labetalol iv");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "amiodarone", "antiarrhythmics|iv antiarrhythmics");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "benzodiazepines iv", "lorazepam iv|diazepam iv");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "midazolam", "versed");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "chloral hydrate", "oral moderate sedation for children");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "propofol", "diprivan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "ketamine", "ketalar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "neuromuscular blockers", "cisatracurium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "hypertonic saline", "sodium chloride greater than 0.9%|concentrated sodium chloride|23.4% sodium chloride");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "sterile water for injection", "sterile water");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "dextrose 20% or higher", "dextrose 50%|concentrated dextrose");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "tpn", "total parenteral nutrition|ppn");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "epidural medications", "epidural");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "intrathecal medications", "intrathecal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "oxytocin", "iv oxytocin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "vasopressin", "vasostrict");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "nitroprusside", "nipride");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "sulfonylureas", "glimepiride|oral hypoglycemics");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "liposomal amphotericin", "ambisome");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "conventional amphotericin", "amphotericin b deoxycholate|fungizone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "promethazine iv", "phenergan iv");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "esmolol", "brevibloc");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "argatroban", "direct thrombin inhibitors");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "bivalirudin", "angiomax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "eptifibatide", "glycoprotein iib iiia inhibitors|integrilin|tirofiban|abciximab");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "doacs", "factor xa inhibitors|eliquis|xarelto");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "barbiturates", "pentobarbital|phenobarbital");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "radiocontrast", "contrast media|iv contrast");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "methadone", "dolophine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "local anesthetics", "bupivacaine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a high-alert medication", "digoxin immune fab", "digifab");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "ambien", "ambien cr|edluar|intermezzo|zolpimist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "unisom", "unisom sleeptabs");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "benadryl", "sominex|nytol|unisom sleepgels");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "tylenol pm", "acetaminophen diphenhydramine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "advil pm", "ibuprofen diphenhydramine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "trazodone", "desyrel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "amitriptyline", "elavil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "hydroxyzine", "vistaril|atarax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "gabapentin", "neurontin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "clonidine", "catapres");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "prazosin", "minipress");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "butabarbital", "butisol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "valerian", "valerian root");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "magnesium", "magnesium glycinate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "cbd", "cannabidiol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "cannabis", "marijuana|thc");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "tryptophan", "l tryptophan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a sleep medication", "lavender oil", "lavender");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "artificial tears", "carboxymethylcellulose|refresh tears|genteal|blink|thera tears|theratears|polyvinyl alcohol|soothe");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "naphazoline", "clear eyes|opcon a|visine a");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "ketotifen", "claritin eye");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "pataday", "patanol|pazeo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "latanoprost", "xelpros");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "timolol", "betimol|istalol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "vyzulta", "latanoprostene bunod");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "omlonti", "omidenepag");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "atropine", "isopto atropine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "phenylephrine", "mydfrin|neo synephrine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "ryzumvi", "phentolamine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "pilocarpine", "qlosi|isopto carpine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "miebo", "perfluorohexyloctane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "tyrvaya", "varenicline nasal spray");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "loteprednol", "alrex|inveltys");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "prednisolone acetate", "prednisolone|pred mild|omnipred|prednisolone phosphate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "dexamethasone", "dexycu|ozurdex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "fluorometholone", "flarex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "tobradex", "tobramycin dexamethasone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "maxitrol", "neomycin polymyxin dexamethasone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "polytrim", "polymyxin trimethoprim");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "erythromycin ointment", "ilotycin|erythromycin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "moxifloxacin", "moxeza");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "gatifloxacin", "zymar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "natamycin", "natacyn");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "cromolyn", "crolom|opticrom");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "ketorolac", "acuvail");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "bromfenac", "bromsite|prolensa|xibrom");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "nepafenac", "ilevro");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "proparacaine", "alcaine|ophthaine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "tetracaine", "altacaine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "fluorescein", "ak fluor|fluress");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "brimonidine", "alphagan p");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "cosopt", "dorzolamide timolol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "combigan", "brimonidine timolol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "simbrinza", "brinzolamide brimonidine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "rocklatan", "netarsudil latanoprost");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "travatan", "travatan z|izba");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "durysta", "bimatoprost implant");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "idose", "travoprost implant");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "hypochlorous acid", "avenova");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "muro 128", "sodium chloride 5%");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "serum tears", "autologous serum tears");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an eye drop medication", "mitomycin", "mitosol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "prednisone", "rayos|prednisone intensol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "prednisolone", "millipred|pediapred|prelone|pred forte");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "methylprednisolone", "depo medrol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "dexamethasone", "hemady|dexamethasone intensol|ozurdex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "hydrocortisone", "solu cortef|alkindi|cortisol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "triamcinolone", "nasacort|zilretta|triesence|xipere|aristocort");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "betamethasone", "celestone soluspan|diprolene|betamethasone valerate|luxiq");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "budesonide", "uceris|rhinocort|tarpeyo|eohilia|ortikos");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "fluticasone", "arnuity|armonair|cutivate|xhance");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "mometasone", "asmanex|elocon|sinuva");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "beclomethasone", "beconase|qnasl");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "ciclesonide", "alvesco|omnaris|zetonna");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "flunisolide", "aerospan|nasarel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "clobetasol", "temovate|clobex|olux|impoyz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "deoxycorticosterone", "doca|desoxycorticosterone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "loteprednol", "lotemax|alrex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "difluprednate", "durezol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "fluorometholone", "fml|flarex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "rimexolone", "vexol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "desonide", "desowen|verdeso");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "fluocinonide", "lidex|vanos");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "halobetasol", "ultravate|bryhali|lexette");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "desoximetasone", "topicort");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "amcinonide", "cyclocort");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "alclometasone", "aclovate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a corticosteroid", "prednicarbate", "dermatop");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug class", "antibiotics", "antibacterials|antimicrobials");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug class", "anthelmintics", "antiparasitics");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug class", "alpha blockers", "alpha 1 blockers");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug class", "antiandrogens", "androgen receptor inhibitors");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug class", "vaccines", "toxoids");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug class", "general anesthetics", "inhaled anesthetics");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "oral", "per os|enteral oral");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "intravenous", "iv push|iv piggyback|iv infusion|iv bolus");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "intramuscular", "im injection");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "subcutaneous", "subcut|hypodermic");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "sublingual", "under the tongue");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "buccal", "cheek");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "rectal", "per rectum");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "vaginal", "pv|per vagina|intravaginal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "transdermal", "td");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "topical", "cutaneous|dermal|on the skin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "inhaled", "inh|pulmonary");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "intranasal", "in");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "ophthalmic", "ocular|topical ophthalmic");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "otic", "auricular");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "intrathecal", "it|subarachnoid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "intra articular", "ia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "intravitreal", "ivt");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "intraperitoneal", "ip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "endotracheal", "et|via ett");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "enteral", "ng");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "enteral", "gastrostomy|peg tube");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "jejunostomy", "j tube");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "intravesical", "bladder instillation");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "urethral", "intraurethral");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "intracavernosal", "intracavernous");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "intracerebroventricular", "icv|intraventricular");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "perineural", "regional anesthesia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "periodontal", "intragingival");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "dental", "dental intracanal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "nebulized", "nebulizer|aerosol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a route of drug administration", "implant", "subcutaneous implant");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "acyclovir", "sitavig");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "amantadine", "symmetrel|gocovri");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "paxlovid", "nirmatrelvir ritonavir");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "ribavirin", "virazole|rebetol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "tenofovir alafenamide", "taf");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "telbivudine", "tyzeka");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "lamivudine", "epivir hbv");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "truvada", "emtricitabine tenofovir");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "descovy", "emtricitabine tenofovir alafenamide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "biktarvy", "bictegravir emtricitabine tenofovir alafenamide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "dovato", "dolutegravir lamivudine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "juluca", "dolutegravir rilpivirine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "triumeq", "abacavir dolutegravir lamivudine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "cabenuva", "cabotegravir rilpivirine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "lopinavir ritonavir", "lopinavir");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "enfuvirtide", "t 20");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiviral drug", "ganciclovir", "zirgan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "albuterol", "accuneb|proair respiclick|proair digihaler");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "advair", "advair diskus|advair hfa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "airduo", "airduo respiclick|airduo digihaler");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "symbicort", "breyna");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "dulera", "mometasone formoterol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "breo", "fluticasone furoate vilanterol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "trelegy", "trelegy ellipta|fluticasone umeclidinium vilanterol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "breztri", "budesonide glycopyrrolate formoterol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "anoro", "anoro ellipta|umeclidinium vilanterol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "stiolto", "stiolto respimat|tiotropium olodaterol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "duoneb", "combivent respimat|ipratropium albuterol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "airsupra", "albuterol budesonide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "spiriva", "spiriva handihaler|spiriva respimat");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "seebri", "lonhala magnair");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "incruse", "incruse ellipta");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "tudorza", "tudorza pressair");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "serevent", "serevent diskus");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "flovent", "flovent hfa|flovent diskus|arnuity ellipta|armonair digihaler");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "pulmicort", "pulmicort flexhaler|pulmicort respules");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "qvar", "qvar redihaler");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "asmanex", "asmanex twisthaler|asmanex hfa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "theophylline", "elixophyllin|theochron");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "nedocromil", "tilade");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "prednisone", "oral steroids");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "dexamethasone", "decadron");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "epinephrine", "adrenaline|epipen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "terbutaline", "brethine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "metaproterenol", "alupent");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "bitolterol", "tornalate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "magnesium sulfate", "iv magnesium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an inhaler or asthma/COPD medication", "azithromycin", "zithromax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "levofloxacin", "levaquin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "dronedarone", "multaq");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "cisapride", "propulsid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "oxytocin", "pitocin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "vardenafil", "levitra");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "vandetanib", "caprelsa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "fingolimod", "gilenya");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "iloperidone", "fanapt");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "ketoconazole", "nizoral");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "erythromycin", "ery tab");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "arsenic trioxide", "arsenic|trisenox");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "ribociclib", "kisqali");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "artemether lumefantrine", "lumefantrine|coartem");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "chloroquine", "aralen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "quinine", "qualaquin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "pentamidine", "pentam");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "bedaquiline", "sirturo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "tacrolimus", "prograf");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "nilotinib", "tasigna");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "escitalopram", "lexapro");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "methadone", "dolophine|methadose");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "venlafaxine", "effexor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "trazodone", "desyrel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "mirtazapine", "remeron");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "droperidol", "inapsine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "thioridazine", "mellaril");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "pimozide", "orap");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "chlorpromazine", "thorazine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "olanzapine", "zyprexa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "risperidone", "risperdal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "paliperidone", "invega");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "domperidone", "motilium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "metoclopramide", "reglan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "sotalol", "betapace");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "ibutilide", "corvert");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "amiodarone", "cordarone|pacerone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "disopyramide", "norpace");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "flecainide", "tambocor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "propafenone", "rythmol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "ranolazine", "ranexa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "loperamide", "imodium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "famotidine", "pepcid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "donepezil", "aricept");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "solifenacin", "vesicare");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "mirabegron", "myrbetriq");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "tizanidine", "zanaflex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "terfenadine", "seldane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "astemizole", "hismanal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "eribulin", "halaven");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "fluconazole", "diflucan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "voriconazole", "vfend");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "posaconazole", "noxafil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "azithromycin", "z pak");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "clarithromycin", "biaxin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "moxifloxacin", "avelox");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "ciprofloxacin", "cipro");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "amitriptyline", "elavil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "nortriptyline", "pamelor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "imipramine", "tofranil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "desipramine", "norpramin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that prolongs the QT interval", "doxepin", "sinequan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "morphine", "ms contin|kadian|roxanol|morphine sulfate|duramorph|infumorph|mitigo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "oxycodone", "oxaydo|xtampza|endocet|percodan|oxycodone acetaminophen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "hydrocodone", "hydrocodone acetaminophen|hycodan|tussionex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "codeine", "tylenol with codeine|tylenol 3|tylenol #3|codeine phosphate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "tramadol", "conzip|ultracet|tramadol acetaminophen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "fentanyl", "actiq|fentora|abstral|subsys|lazanda|fentanyl patch");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "buprenorphine", "zubsolv|brixadi|buprenex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "methadone", "methadose");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "hydromorphone", "exalgo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "opium", "opium tincture");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "dihydrocodeine", "synalgos dc");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "alfentanil", "alfenta");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "nitazenes", "metonitazene");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "heroin", "diamorphine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "kratom", "7 hydroxymitragynine|7 oh");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "loperamide", "imodium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "diphenoxylate", "difenoxin|motofen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "eluxadoline", "viberzi");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "propoxyphene", "darvocet");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "dezocine", "dalgan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an opioid", "etorphine", "m99");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "sanofi", "sanofi aventis|aventis|sanofi pasteur|sanofi genzyme");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "sun pharma", "sun pharmaceutical");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "hikma", "hikma pharmaceuticals");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "fresenius kabi", "fresenius");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "baxter", "baxter international");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "astellas", "astellas pharma");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "sumitomo", "sumitomo pharma|sumitomo dainippon");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "takeda", "takeda pharmaceutical");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "otsuka", "otsuka pharmaceutical");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "ono", "ono pharmaceutical");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "chugai", "chugai pharmaceutical");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "boehringer ingelheim", "boehringer");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "hengrui", "jiangsu hengrui");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "wuxi", "wuxi apptec|wuxi biologics");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "jazz pharmaceuticals", "jazz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "neurocrine", "neurocrine biosciences");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "alnylam", "alnylam pharmaceuticals");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "moderna", "moderna therapeutics");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "sarepta", "sarepta therapeutics");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "incyte", "incyte corporation");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmaceutical company", "bayer", "bayer healthcare|bayer consumer");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacokinetics or pharmacology term", "half life", "t1/2|t half|elimination half life");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacokinetics or pharmacology term", "bioavailability", "f");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacokinetics or pharmacology term", "first pass effect", "first pass metabolism|presystemic metabolism");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "nicotine patch", "nicoderm|nicoderm cq|habitrol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "nicotine gum", "nicorette|nicorette gum");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "nicotine lozenge", "nicorette lozenge|commit lozenge");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "nicotine inhaler", "nicotrol inhaler|nicotrol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "nicotine nasal spray", "nicotrol ns");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "varenicline", "champix|apo varenicline");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "bupropion", "bupropion sr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "buprenorphine", "buprenex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "suboxone", "zubsolv|bunavail");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "methadone", "dolophine|methadose|diskets");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "naltrexone", "revia|depade");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "naloxone", "kloxxado|zimhi|rextovy|evzio");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "nalmefene", "selincro|zurnai");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "clonidine", "catapres|kapvay");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "gabapentin", "neurontin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "topiramate", "topamax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "baclofen", "lioresal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "cytisine", "cytisinicline|tabex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "nortriptyline", "pamelor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for smoking cessation or addiction treatment", "oxazepam", "serax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "levothyroxine", "levo t|thyquidity|ermeza|eltroxin|t4|l thyroxine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "liothyronine", "triostat");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "armour thyroid", "np thyroid|nature throid|thyroid usp|porcine thyroid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "propranolol", "inderal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "potassium iodide", "thyroshield|iosat|thyrosafe");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "lugol solution", "lugol's iodine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "radioactive iodine", "sodium iodide i 131");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "cholestyramine", "colestipol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "lenvatinib", "lenvima");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "sorafenib", "nexavar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "cabozantinib", "cabometyx");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "vandetanib", "caprelsa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "selpercatinib", "retevmo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "carbimazole", "neo mercazole");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "methimazole", "northyx");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for thyroid disease", "liotrix", "thyrolar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "propofol", "diprivan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "lidocaine", "xylocaine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "fentanyl", "sublimaze");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "ketamine", "ketalar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "sevoflurane", "ultane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "desflurane", "suprane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "isoflurane", "forane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "nitrous oxide", "laughing gas|n2o");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "etomidate", "amidate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "methohexital", "brevital");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "dexmedetomidine", "precedex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "succinylcholine", "anectine|quelicin|suxamethonium|sux");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "rocuronium", "zemuron");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "vecuronium", "norcuron");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "cisatracurium", "nimbex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "neostigmine", "bloxiverz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "glycopyrrolate", "robinul");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "scopolamine patch", "scopolamine|transderm scop");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "morphine", "duramorph");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "hydromorphone", "dilaudid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "remifentanil", "ultiva");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "bupivacaine", "marcaine|sensorcaine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "ropivacaine", "naropin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "phenylephrine", "neo synephrine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "ephedrine", "akovaz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "ondansetron", "zofran");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "dexamethasone", "decadron");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "tranexamic acid", "cyklokapron");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used in anesthesia or surgery", "dantrolene", "dantrium|ryanodex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a skin patch", "nicotine patch", "nicoderm|nicoderm cq|habitrol|nicotrol patch");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a skin patch", "fentanyl patch", "transdermal fentanyl");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a skin patch", "lidocaine patch", "ztlido|lidocaine 4% patch|aspercreme lidocaine patch");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a skin patch", "birth control patch", "zafemy|contraceptive patch|norelgestromin ethinyl estradiol patch");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a skin patch", "scopolamine patch", "motion sickness patch|hyoscine patch");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a skin patch", "nitroglycerin patch", "nitro dur|minitran|transdermal nitroglycerin|glyceryl trinitrate patch");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a skin patch", "estrogen patch", "vivelle dot|alora|minivelle|menostar|dotti|lyllana|estraderm");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a skin patch", "diclofenac patch", "licart");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a skin patch", "salonpas", "icy hot patch|tiger balm patch|bengay patch");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "carbidopa levodopa", "dhivy|crexont|parcopa|l dopa|co careldopa|madopar|benserazide levodopa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "pramipexole", "mirapex er");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "ropinirole", "requip xl");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "apomorphine", "apokyn|kynmobi|onapgo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "bromocriptine", "parlodel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "cabergoline", "dostinex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "selegiline", "eldepryl|zelapar|emsam");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "safinamide", "xadago");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "entacapone", "comtan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "tolcapone", "tasmar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "opicapone", "ongentys");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "istradefylline", "nourianz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "amantadine", "gocovri|osmolex|symmetrel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "trihexyphenidyl", "artane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "pimavanserin", "nuplazid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "rivastigmine", "exelon patch");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "donepezil", "adlarity");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "galantamine", "reminyl");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "memantine", "namenda xr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "namzaric", "donepezil memantine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "iron", "iron supplements|feosol|slow fe|fer in sol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "ferrous gluconate", "fergon");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "ferrous fumarate", "ferretts|hemocyte");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "ferric carboxymaltose", "ferinject");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "iron dextran", "infed|dexferrum|cosmofer");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "iron isomaltoside", "ferric derisomaltose");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "vitamin b12", "b12 injection|nascobal|hydroxocobalamin|methylcobalamin|cobalamin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "folic acid", "folvite|l methylfolate|deplin|5 mthf");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "epoetin", "epoetin alfa|retacrit");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "daprodustat", "hif ph inhibitors|jesduvroq");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "vadadustat", "vafseo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "blood transfusion", "prbcs|packed red blood cells|red blood cell transfusion");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "vitamin c", "ascorbic acid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "prednisone", "corticosteroids|steroids");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "eculizumab", "soliris");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "hydroxyurea", "droxia|siklos");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "voxelotor", "oxbryta");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "crizanlizumab", "adakveo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "deferoxamine", "desferal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug or supplement that treats anemia", "deferasirox", "exjade|jadenu");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "furosemide", "furoscix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "lisinopril", "zestril|prinivil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "enalapril", "vasotec|enalaprilat");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "metoprolol succinate", "metoprolol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "carvedilol", "coreg cr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "bisoprolol", "zebeta");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "losartan", "cozaar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "valsartan", "diovan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "spironolactone", "aldactone|carospir");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "eplerenone", "inspra");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "finerenone", "kerendia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "sotagliflozin", "inpefa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "digoxin", "lanoxin|digitalis");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "hydralazine", "apresoline");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "isosorbide dinitrate", "isordil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "bidil", "isosorbide dinitrate hydralazine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "bumetanide", "bumex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "torsemide", "demadex|soaanz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "metolazone", "zaroxolyn");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "milrinone", "primacor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "dobutamine", "dobutrex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for heart failure", "tafamidis", "vyndaqel|vyndamax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "methotrexate", "trexall|otrexup|rasuvo|reditrex|rheumatrex|mtx");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "prednisone", "deltasone|glucocorticoids|steroids|corticosteroids");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "humira", "amjevita|hadlima|hyrimoz|cyltezo|yusimry|idacio|hulio|yuflyma|simlandi|abrilada");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "enbrel", "erelzi|eticovo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "infliximab", "inflectra|renflexis|avsola|zymfentra");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "golimumab", "simponi aria");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "sulfasalazine", "azulfidine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "rituximab", "truxima|ruxience|riabni");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "tocilizumab", "tofidence|tyenne");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "naproxen", "aleve|naprosyn");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "celecoxib", "celebrex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "azathioprine", "imuran");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "cyclosporine", "neoral|gengraf");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "gold", "ridaura|gold sodium thiomalate|myochrysine|aurothioglucose|gold salts");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for rheumatoid arthritis", "minocycline", "minocin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "nyquil", "vicks nyquil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "dayquil", "vicks dayquil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "robitussin", "robitussin dm|tussin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "mucinex", "mucinex dm|mucinex d|mucinex fast max|humibid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "dextromethorphan", "dxm");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "sudafed", "sudafed 12 hour");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "phenylephrine", "sudafed pe");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "tylenol cold", "tylenol cold and flu|tylenol sinus");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "coricidin", "coricidin hbp");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "vicks vaporub", "vaporub|vicks");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "cough drops", "halls|halls cough drops|lozenges|throat lozenges");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "zinc lozenges", "cold eeze");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "emergen c", "vitamin c");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "saline nasal spray", "ocean spray|simply saline|ayr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "neti pot", "nasal irrigation|sinus rinse|neilmed");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "afrin", "vicks sinex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "humidifier", "vaporizer");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "claritin d", "loratadine pseudoephedrine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "zyrtec d", "cetirizine pseudoephedrine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "chlorpheniramine", "chlor trimeton");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "benzonatate", "tessalon perles");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "codeine cough syrup", "guaifenesin codeine|cheratussin ac|robitussin ac|tussi organidin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "promethazine dm", "promethazine codeine|phenergan with codeine|promethazine vc");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cough or cold product", "hycodan", "tussionex|hydromet|tussicaps");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "benzoyl peroxide", "bpo|panoxyl|clearasil|oxy|proactiv|clean and clear");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "salicylic acid", "stridex|neutrogena oil free acne wash");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "tretinoin", "retin a micro|atralin|altreno|avita|renova");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "isotretinoin", "absorica|claravis|amnesteem|myorisan|zenatane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "doxycycline", "vibramycin|doryx|acticlate|targadox|oracea");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "minocycline", "minocin|solodyn|ximino|minolira");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "clindamycin", "cleocin t|clindagel|evoclin|clindesse");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "erythromycin", "erygel|erythromycin topical");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "spironolactone", "aldactone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "birth control pills", "oral contraceptives|combined oral contraceptives");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "azelaic acid", "finacea|azelex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "tazarotene", "tazorac|arazlo|fabior");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "dapsone gel", "dapsone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "sulfur", "sulfur wash|sodium sulfacetamide sulfur|plexion|sumadan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "sodium sulfacetamide", "klaron|ovace");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "trifarotene", "aklief");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "epiduo", "epiduo forte|adapalene benzoyl peroxide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "benzaclin", "clindamycin benzoyl peroxide|acanya|neuac");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "amzeeq", "minocycline foam|zilxi");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for acne", "glycolic acid", "alpha hydroxy acids|aha");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a weight-loss drug", "semaglutide", "rybelsus|oral wegovy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a weight-loss drug", "phentermine", "adipex p|lomaira|ionamin|fastin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a weight-loss drug", "liraglutide", "victoza");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a weight-loss drug", "contrave", "mysimba");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a weight-loss drug", "metformin", "glucophage");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a weight-loss drug", "diethylpropion", "tenuate|amfepramone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a weight-loss drug", "phendimetrazine", "bontril");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a weight-loss drug", "benzphetamine", "didrex|regimex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a weight-loss drug", "plenity", "cellulose citric acid hydrogel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a weight-loss drug", "topiramate", "topamax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "alendronate", "binosto|fosamax plus d");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "risedronate", "atelvia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "zoledronic acid", "zometa|zoledronate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "calcium", "calcium carbonate|calcium citrate|citracal|caltrate|os cal|tums");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "vitamin d", "cholecalciferol|vitamin d3|ergocalciferol|vitamin d2");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "denosumab", "jubbonti|ospomyv|stoboclo|conexxence|xgeva");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "teriparatide", "bonsity");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "calcitonin", "miacalcin|fortical|calcitonin salmon");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "estrogen", "estradiol|premarin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "tibolone", "livial");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "strontium ranelate", "protelos");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "etidronate", "didronel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "pamidronate", "aredia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for osteoporosis", "calcitriol", "rocaltrol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that commonly causes drowsiness", "benzodiazepines", "benzos|alprazolam|diazepam|lorazepam|klonopin|clonazepam|temazepam|restoril");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that commonly causes drowsiness", "opioids", "morphine|codeine|fentanyl|tramadol|hydromorphone|methadone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that commonly causes drowsiness", "suvorexant", "lemborexant|dayvigo|daridorexant|quviviq");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that commonly causes drowsiness", "doxepin", "silenor|sinequan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that commonly causes drowsiness", "metoclopramide", "reglan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that commonly causes drowsiness", "doxylamine", "nyquil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that commonly causes drowsiness", "meclizine", "antivert|bonine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that commonly causes drowsiness", "clonidine", "catapres|kapvay");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug pulled from the market", "fen phen", "pondimin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug pulled from the market", "darvon", "darvocet");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug pulled from the market", "thalidomide", "kevadon|contergan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug pulled from the market", "xigris", "drotrecogin alfa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug pulled from the market", "phenylpropanolamine", "dexatrim");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug pulled from the market", "ephedra", "ma huang");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug pulled from the market", "opana er", "oxymorphone er");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug pulled from the market", "makena", "hydroxyprogesterone caproate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "amiodarone", "cordarone|pacerone|nexterone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "metoprolol", "lopressor|toprol xl");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "diltiazem", "cardizem");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "digoxin", "lanoxin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "adenosine", "adenocard|adenoscan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "lidocaine", "xylocaine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "sotalol", "betapace|sotylize");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "flecainide", "tambocor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "propafenone", "rythmol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "verapamil", "calan|isoptin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "procainamide", "pronestyl|procan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "quinidine", "quinidine gluconate|quinidine sulfate|quinaglute");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "esmolol", "brevibloc");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "ibutilide", "corvert");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "mexiletine", "mexitil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "disopyramide", "norpace");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "magnesium sulfate", "magnesium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "propranolol", "inderal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "carvedilol", "coreg");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "nadolol", "corgard");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiarrhythmic drug", "bisoprolol", "zebeta");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "controlled substances act", "csa|comprehensive drug abuse prevention and control act");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "hipaa", "health insurance portability and accountability act|privacy rule");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "food drug and cosmetic act", "fdca|fd&c act|federal food drug and cosmetic act");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "kefauver harris amendment", "drug efficacy amendment");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "obra 90", "omnibus budget reconciliation act");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "poison prevention packaging act", "ppa|pppa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "combat methamphetamine epidemic act", "cmea|pseudoephedrine limits");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "drug supply chain security act", "drug quality and security act|dqsa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "hatch waxman act", "drug price competition and patent term restoration act");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "dshea", "dietary supplement health and education act");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "ryan haight act", "ryan haight online pharmacy consumer protection act");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "medicare part d", "medicare modernization act");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "340b program", "340b drug pricing program");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "dea registration", "dea number");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "dea form 222", "csos");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "dea form 106", "theft or loss report");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "partial fill rules", "partial fills");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "transfer rules", "prescription transfers");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "prescription monitoring program", "pmp");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "patient counseling requirement", "offer to counsel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "rems", "risk evaluation and mitigation strategies");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "orange book", "approved drug products with therapeutic equivalence evaluations");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "usp 795", "nonsterile compounding");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "usp 797", "sterile compounding");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "usp 800", "hazardous drugs");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy law or regulation", "board of pharmacy", "state board of pharmacy|state pharmacy practice act");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "norepinephrine", "norepi|noradrenaline");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "epinephrine", "adrenaline|epi drip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "vasopressin", "vasostrict|pitressin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "phenylephrine", "neo synephrine|neo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "dopamine", "intropin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "dobutamine", "dobutrex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "milrinone", "primacor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "propofol", "diprivan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "midazolam", "versed|midazolam drip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "lorazepam drip", "ativan drip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "ketamine", "ketamine drip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "fentanyl", "fentanyl drip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "hydromorphone drip", "dilaudid drip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "cisatracurium", "nimbex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "heparin drip", "heparin|unfractionated heparin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "insulin drip", "regular insulin infusion|insulin infusion");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "nitroglycerin drip", "nitroglycerin|tridil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "nitroprusside", "nipride|nitropress");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "nicardipine", "cardene");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "clevidipine", "cleviprex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "labetalol drip", "labetalol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "esmolol", "brevibloc");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "diltiazem drip", "diltiazem|cardizem drip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vasopressor or ICU drip", "amiodarone drip", "amiodarone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "allopurinol", "aloprim|xanthine oxidase inhibitors");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "colchicine", "mitigare|gloperba|lodoco");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "indomethacin", "indocin|tivorbex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "naproxen", "aleve|naprosyn|anaprox");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "probenecid", "benemid|probalan|col probenecid|colchicine probenecid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "prednisone", "corticosteroids|steroids|glucocorticoids");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "lesinurad", "zurampic|duzallo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "sulfinpyrazone", "anturane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "rasburicase", "elitek");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "anakinra", "kineret");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "canakinumab", "ilaris");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "triamcinolone injection", "triamcinolone|kenalog|intra articular steroid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "methylprednisolone", "medrol|depo medrol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "corticotropin", "acthar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "losartan", "cozaar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "fenofibrate", "tricor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "vitamin c", "ascorbic acid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug used to treat gout", "cherry extract", "tart cherry|cherries");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "fluticasone", "flonase sensimist|fluticasone furoate nasal|veramyst|xhance");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "afrin", "vicks sinex|zicam nasal|dristan 12 hour|mucinex nasal spray");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "naloxone", "kloxxado|rextovy|naloxone nasal spray");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "saline", "saline nasal spray|ocean|simply saline|ayr|sodium chloride nasal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "budesonide", "rhinocort allergy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "triamcinolone", "nasacort allergy 24hr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "azelastine", "astepro");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "ryaltris", "olopatadine mometasone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "beclomethasone nasal", "beconase aq");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "ciclesonide", "zetonna");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "phenylephrine nasal", "neo synephrine nasal|4 way");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "sumatriptan nasal", "onzetra xsail|tosymra");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "zolmitriptan nasal", "zomig nasal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "dihydroergotamine nasal", "trudhesa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "butorphanol nasal", "stadol ns");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "desmopressin", "ddavp nasal|noctiva|stimate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "calcitonin nasal", "miacalcin nasal|fortical");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "nicotine nasal spray", "nicotrol ns");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "flumist", "live attenuated influenza vaccine|laiv");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "mupirocin nasal", "bactroban nasal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication that comes as a nasal spray", "cocaine", "goprelto|numbrino");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "aspirin", "asa|salicylates");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "ibuprofen", "meloxicam|diclofenac|ketorolac|celecoxib");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "naproxen", "aleve");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "amiodarone", "cordarone|pacerone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "fluconazole", "diflucan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "bactrim", "tmp smx|septra|sulfamethoxazole");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "vitamin k", "phytonadione|mephyton");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "rifampin", "rifampicin|rifadin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "clopidogrel", "plavix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "fish oil", "omega 3|omega 3 fatty acids");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "ginkgo", "ginkgo biloba");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "st john's wort", "hypericum");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "cranberry juice", "cranberry");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "green leafy vegetables", "vitamin k rich foods|kale|spinach|broccoli");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "alcohol", "ethanol|binge drinking");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "carbamazepine", "tegretol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "phenytoin", "dilantin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "levofloxacin", "levaquin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "ciprofloxacin", "cipro");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "clarithromycin", "biaxin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "voriconazole", "vfend");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "omeprazole", "prilosec");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "simvastatin", "zocor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "fenofibrate", "tricor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "sertraline", "zoloft");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "fluoxetine", "prozac");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "propafenone", "rythmol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "tamoxifen", "nolvadex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "capecitabine", "xeloda");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "allopurinol", "zyloprim");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "levothyroxine", "synthroid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that interacts with warfarin", "enoxaparin", "lovenox");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "levothyroxine", "levoxyl|unithroid|tirosint|euthyrox");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "risedronate", "actonel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "ibandronate", "boniva");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "omeprazole", "prilosec|proton pump inhibitors");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "pantoprazole", "protonix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "esomeprazole", "nexium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "lansoprazole", "prevacid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "penicillin v", "pen vk|penicillin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "rifampin", "rifadin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "isoniazid", "inh");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "didanosine", "videx");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "sucralfate", "carafate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "captopril", "capoten");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "zafirlukast", "accolate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "iron supplements", "ferrous sulfate|iron");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "nilotinib", "tasigna");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "abiraterone", "zytiga");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "lapatinib", "tykerb");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "erlotinib", "tarceva");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "pazopanib", "votrient");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "mercaptopurine", "purixan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug best taken on an empty stomach", "efavirenz", "sustiva");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "mortar and pestle", "mortar|pestle|wedgwood mortar|glass mortar|porcelain mortar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "spatula", "stainless steel spatula|plastic spatula");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "graduated cylinder", "graduate|conical graduate|cylindrical graduate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "balance", "class a balance|class iii prescription balance|torsion balance|electronic balance|analytical balance");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "ointment slab", "pill tile|ointment paper|parchment paper");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "capsule machine", "capsule filling machine|profill");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "laminar flow hood", "laminar airflow workbench|lafw|horizontal laminar flow hood|vertical laminar flow hood");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "isolator", "bsc|class ii bsc");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "iso class 5", "iso 5");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "anteroom", "ante area");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "buffer room", "buffer area");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "media fill test", "aseptic technique validation");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "garbing", "donning and doffing|ppe");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "base", "vehicle");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "geometric dilution", "geometric mixing");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "beyond use date", "bud");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "gelatin capsule", "capsule|vegetable capsule|capsule sizes|size 0 capsule");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a compounding term or piece of compounding equipment", "hazardous drug", "niosh list|niosh hazardous drug list");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "estrogen", "estrace|vivelle|climara|divigel|estrogel|evamist|vagifem|estring|femring|imvexxy|yuvafem");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "testosterone", "androgel|testim|fortesta|axiron|vogelxo|natesto|androderm|aveed|xyosted|jatenzo|tlando|kyzatrex|testosterone cypionate|depo testosterone|testosterone enanthate|testosterone undecanoate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "prasterone", "dhea|intrarosa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "progesterone", "prometrium|crinone|endometrin|progesterone in oil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "medroxyprogesterone", "depo subq provera 104");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "norethindrone", "aygestin|camila|errin|nora be|micronor|norethisterone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "levonorgestrel", "plan b|mirena|kyleena|liletta|skyla");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "dienogest", "natazia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "megestrol", "megace");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "ospemifene", "osphena");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "tamoxifen", "nolvadex|soltamox");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "raloxifene", "evista");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "clomiphene", "serophene");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "exemestane", "aromasin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "leuprolide", "lupron depot|eligard|fensolvi|camcevi");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "degarelix", "firmagon");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "relugolix", "orgovyx|myfembree|relugolix estradiol norethindrone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "elagolix", "oriahnn");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "bicalutamide", "casodex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "enzalutamide", "xtandi");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "abiraterone", "zytiga|yonsa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "spironolactone", "aldactone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "finasteride", "proscar|propecia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "danazol", "danocrine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "oxandrolone", "oxandrin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "nandrolone", "deca durabolin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "hcg", "novarel|pregnyl|ovidrel|choriogonadotropin alfa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "menotropins", "menopur|hmg");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "mifepristone", "mifeprex|korlym");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a hormone therapy or sex hormone drug", "estrogen", "estradiol valerate|delestrogen");  // 2026-11-05 · NAPLEX · same drug
crowdAlias("Name a hormone therapy or sex hormone drug", "estrogen", "estradiol cypionate|depo estradiol");  // 2026-11-05 · NAPLEX · same drug
crowdAlias("Name a hormone therapy or sex hormone drug", "norethindrone", "norethindrone acetate");  // 2026-11-05 · NAPLEX · same drug
crowdAlias("Name a drug patients inject themselves at home", "insulin", "insulin pen|lantus|humalog|novolog|tresiba|basaglar|levemir|toujeo|insulin glargine|insulin lispro|insulin aspart");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "epipen", "auvi q|adrenaclick|symjepi|epinephrine auto injector");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "mounjaro", "zepbound");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "humira", "amjevita|hadlima|hyrimoz|cyltezo|yusimry|simlandi");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "skyrizi", "risankizumab");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "stelara", "ustekinumab|wezlana|selarsdi");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "methotrexate injection", "otrexup|rasuvo|reditrex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "testosterone", "testosterone cypionate|xyosted|testosterone enanthate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "glucagon", "gvoke|zegalogue|glucagon emergency kit");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "sumatriptan injection", "zembrace");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "emgality", "galcanezumab");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "ajovy", "fremanezumab");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "copaxone", "glatopa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "kesimpta", "ofatumumab");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "neupogen", "zarxio|nivestym");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "neulasta", "udenyca|fulphila");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "fertility drugs", "follitropin|menopur|ovidrel|cetrotide|ganirelix|leuprolide|lupron");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "octreotide", "sandostatin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "somatropin", "genotropin|norditropin|humatrope|omnitrope|nutropin|zomacton|sogroya|skytrofa|ngenla");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug patients inject themselves at home", "apomorphine", "apokyn");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "ivermectin", "stromectol|sklice|soolantra");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "metronidazole", "flagyl");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "albendazole", "albenza");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "mebendazole", "vermox|emverm");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "praziquantel", "biltricide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "chloroquine", "aralen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "hydroxychloroquine", "plaquenil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "permethrin", "elimite|nix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "pyrantel pamoate", "pin x|reese's pinworm|pyrantel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "nitazoxanide", "alinia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "tinidazole", "tindamax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "mefloquine", "lariam");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "tafenoquine", "krintafel|arakoda");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "quinine", "qualaquin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "pyrimethamine", "daraprim");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "paromomycin", "humatin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "miltefosine", "impavido");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "nifurtimox", "lampit");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "diethylcarbamazine", "dec|hetrazan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "spinosad", "natroba");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antiparasitic drug", "malathion", "ovide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "aspirin", "salicin|salicylic acid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "morphine", "papaver somniferum|opium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "digoxin", "digitalis|digitoxin|digitalis lanata");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "quinine", "cinchona");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "penicillin", "penicillium|penicillium notatum");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "paclitaxel", "pacific yew|docetaxel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "caffeine", "coffee|tea|coffea");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "nicotine", "tobacco");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "atropine", "deadly nightshade|atropa belladonna");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "vincristine", "madagascar periwinkle|vinblastine|vinca");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "artemisinin", "qinghaosu|artemisia annua");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "cocaine", "coca plant");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "ephedrine", "ma huang");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "metformin", "galega officinalis|goat's rue");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "colchicine", "colchicum");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "warfarin", "dicoumarol|spoiled sweet clover");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "insulin", "pig pancreas|bovine insulin|porcine insulin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "premarin", "pregnant mare urine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "exenatide", "exendin 4");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "botox", "botulinum toxin|clostridium botulinum");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "cyclosporine", "tolypocladium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "lovastatin", "aspergillus terreus|mevastatin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "reserpine", "rauwolfia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "galantamine", "daffodil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "capsaicin", "capsicum");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "menthol", "peppermint");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "senna", "sennosides");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "cannabidiol", "marijuana|thc|dronabinol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "psilocybin", "magic mushrooms|psilocybe");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "ziconotide", "prialt");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "captopril", "brazilian pit viper|bothrops jararaca");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "streptomycin", "streptomyces");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "scopolamine", "jimsonweed|datura|hyoscine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug that comes from a plant or natural source", "etoposide", "podophyllotoxin|podophyllum|teniposide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "sildenafil", "revatio");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "tadalafil", "adcirca|entadfi");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "oxybutynin", "ditropan xl|oxytrol|gelnique");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "tolterodine", "detrol la");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "trospium", "sanctura");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "darifenacin", "enablex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "solifenacin", "vesicare ls");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "jalyn", "dutasteride tamsulosin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "alprostadil", "caverject|edex|muse");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "trimix", "papaverine phentolamine alprostadil|bimix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "desmopressin", "noctiva|nocdurna|ddavp");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "imipramine", "tofranil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "flavoxate", "urispas");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a drug for BPH, overactive bladder or erectile dysfunction", "saw palmetto", "serenoa repens");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "metoprolol", "metoprolol tartrate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "labetalol", "trandate|normodyne");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "bisoprolol", "zebeta");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "nadolol", "corgard");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "pindolol", "visken");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "acebutolol", "sectral");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "betaxolol", "kerlone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "timolol", "blocadren");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "felodipine", "plendil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "isradipine", "dynacirc");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "nicardipine", "cardene");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "nisoldipine", "sular");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "lercanidipine", "zanidip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "captopril", "capoten");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "enalapril", "epaned");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "fosinopril", "monopril");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "moexipril", "univasc");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "perindopril", "aceon");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "trandolapril", "mavik");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "irbesartan", "avalide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "eprosartan", "teveten");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "hydrochlorothiazide", "microzide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "chlorthalidone", "thalitone|hygroton");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "indapamide", "lozol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "metolazone", "zaroxolyn");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "bumetanide", "bumex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "torsemide", "demadex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "spironolactone", "carospir");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "amiloride", "midamor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "triamterene", "dyrenium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "clonidine", "catapres tts|kapvay");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "guanfacine", "tenex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "methyldopa", "aldomet");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "terazosin", "hytrin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "phenoxybenzamine", "dibenzyline");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "hydralazine", "apresoline");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "minoxidil", "loniten");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "sodium nitroprusside", "nipride");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "fenoldopam", "corlopam");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "clevidipine", "cleviprex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "aprocitentan", "tryvio");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a blood pressure medication", "esmolol", "brevibloc");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "aripiprazole", "aripiprazole lauroxil|aristada");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "aripiprazole", "abilify maintena|abilify asimtufii");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "risperidone", "risperdal consta|perseris|uzedy|rykindo|risvan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "paliperidone", "invega sustenna|invega trinza|invega hafyera|paliperidone palmitate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "haloperidol", "haloperidol decanoate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "fluphenazine", "fluphenazine decanoate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "olanzapine", "olanzapine pamoate|zyprexa relprevv");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "lithium", "lithium carbonate|lithobid|eskalith|lithium citrate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "valproate", "depakote er");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "adderall", "adderall xr|amphetamine salts");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "ritalin", "metadate|methylin|quillivant|aptensio|jornay pm|cotempla|relexxii");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "clonidine", "clonidine er");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "guanfacine", "guanfacine er");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "bupropion", "bupropion xl|wellbutrin xl|aplenzin|forfivo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "xanax", "alprazolam xr|xanax xr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "doxepin", "doxepin low dose|silenor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "aripiprazole", "abilify mycite");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "asenapine", "asenapine patch|secuado");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "loxapine", "loxapine inhaled|adasuve");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "olanzapine", "olanzapine odt|zyprexa zydis");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "venlafaxine", "venlafaxine er|effexor xr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "trazodone", "trazodone er|oleptro");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "clozapine", "clozapine odt|fazaclo|versacloz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a psychiatric medication", "dexmethylphenidate", "dexmethylphenidate xr|focalin xr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "naloxone", "evzio|kloxxado|zimhi|rextovy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "n acetylcysteine", "acetadote");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "flumazenil", "romazicon");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "atropine", "atropen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "pralidoxime", "protopam|duodote|atnaa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "physostigmine", "antilirium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "vitamin k", "aquamephyton|mephyton");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "prothrombin complex concentrate", "4 factor pcc|balfaxar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "fomepizole", "antizol|4 mp");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "ethanol", "alcohol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "methylene blue", "provayblue");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "deferoxamine", "desferal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "dimercaprol", "british anti lewisite");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "edta", "calcium edta");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "succimer", "chemet");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "prussian blue", "radiogardase");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "potassium iodide", "thyrosafe|iosat");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "dtpa", "pentetate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "dantrolene", "dantrium|ryanodex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "cyproheptadine", "periactin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "benzodiazepines", "midazolam");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "lipid emulsion", "ilet");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "insulin", "hyperinsulinemia euglycemia therapy|hiet");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "octreotide", "sandostatin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "thiamine", "vitamin b1");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "glucarpidase", "voraxaze");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "uridine triacetate", "vistogard");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "levocarnitine", "carnitor|l carnitine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "dexrazoxane", "zinecard|totect");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "mesna", "mesnex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "amifostine", "ethyol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "activated charcoal", "actidose");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "whole bowel irrigation", "golytely");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "oxygen", "100% oxygen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "antivenom", "crotalidae polyvalent immune fab|anavip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "sugammadex", "bridion");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "neostigmine", "bloxiverz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "phentolamine", "regitine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "silibinin", "legalon sil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "cyanide antidote kit", "lilly kit|nithiodote");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidote", "ipecac", "syrup of ipecac");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "condom", "male condom|external condom");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "paragard", "copper t");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "tubal ligation", "bilateral tubal ligation|btl");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "vasectomy", "no scalpel vasectomy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "salpingectomy", "bilateral salpingectomy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "plan b", "plan b one step|levonorgestrel emergency contraception|my way|take action|aftera");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "depo provera", "dmpa|medroxyprogesterone injection");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "implant", "implanon|etonogestrel implant|the rod");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "patch", "zafemy|contraceptive patch");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "nuvaring", "ethinyl estradiol etonogestrel ring|ekyra|haloette");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "mini pill", "camila|errin|heather|jencycla");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "opill", "norgestrel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "slynd", "drospirenone only pill");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "seasonique", "extended cycle pills|amethyst|lybrel|quartette");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "yaz", "ocella|gianvi|loryna|nikki");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "sprintec", "mononessa|estarylla");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "tri sprintec", "ortho tri cyclen|tri estarylla");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "diaphragm", "caya");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "sponge", "contraceptive sponge");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "spermicide", "vcf|spermicidal gel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "phexxi", "vaginal ph modulator");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "female condom", "fc2");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "withdrawal", "coitus interruptus");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "fertility awareness", "calendar method|standard days method");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "cervical mucus method", "billings method");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "natural cycles app", "fertility app");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a birth control method", "lactational amenorrhea", "lam|breastfeeding");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "benadryl", "sominex|nytol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "claritin", "alavert");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "zyrtec", "reactine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "allegra", "telfast");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "clarinex", "aerius|neoclarityn");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "meclizine", "bonine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "dramamine", "gravol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "brompheniramine", "dimetane|lodrane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "carbinoxamine", "karbinal|arbinoxa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "triprolidine", "actifed|zymine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "dexchlorpheniramine", "polaramine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "olopatadine", "pazeo|patanase");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "azelastine", "astepro");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "ketotifen", "alaway|zaditen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "epinastine", "elestat");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "bepotastine", "bepreve");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "alcaftadine", "lastacaft");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "emedastine", "emadine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "bilastine", "blexten");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "acrivastine", "semprex d");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "zyrtec d", "cetirizine pseudoephedrine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "claritin d", "loratadine pseudoephedrine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "allegra d", "fexofenadine pseudoephedrine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "h1 blocker", "h1 antihistamines|h1 receptor antagonist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "h2 blocker", "h2 antihistamines|h2 receptor antagonist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "cimetidine", "tagamet");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "ranitidine", "zantac");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antihistamine", "nizatidine", "axid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ADHD medication", "non stimulant", "nonstimulant");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ADHD medication", "adderall", "mixed amphetamine salts|amphetamine dextroamphetamine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ADHD medication", "ritalin", "ritalin sr|metadate cd");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ADHD medication", "concerta", "methylphenidate er|osmotic release methylphenidate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ADHD medication", "vyvanse", "elvanse");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ADHD medication", "intuniv", "guanfacine er");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ADHD medication", "kapvay", "clonidine er");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ADHD medication", "evekeo", "amphetamine sulfate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ADHD medication", "azstarys", "serdexmethylphenidate dexmethylphenidate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ADHD medication", "quillichew er", "quillivant xr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ADHD medication", "modafinil", "provigil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ADHD medication", "onyda xr", "clonidine oral suspension");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "hydrocodone", "hydrocodone acetaminophen|lortab");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "oxycodone", "oxycodone acetaminophen|endocet");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "codeine", "tylenol with codeine|tylenol 3|acetaminophen codeine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "tramadol", "ultracet|tramadol acetaminophen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "naproxen", "naproxen sodium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "aspirin", "bayer|ecotrin|bufferin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "diclofenac", "voltaren gel|diclofenac gel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "lidocaine", "lidoderm|lidocaine patch");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "morphine", "morphine sulfate|ms contin|kadian");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "fentanyl", "fentanyl patch|duragesic");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "buprenorphine", "butrans|buprenorphine patch|belbuca");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "sufentanil", "sufentanil sublingual|dsuvia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "ketorolac", "ketorolac nasal|sprix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "meloxicam", "meloxicam iv|anjeso");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "bupivacaine", "liposomal bupivacaine|exparel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "tramadol", "tramadol er|conzip");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "hydrocodone", "hydrocodone er|hysingla|zohydro");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "acetaminophen", "acetaminophen iv|ofirmev");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a painkiller", "ibuprofen", "ibuprofen iv|caldolor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "advil", "motrin ib|advil liqui gels");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "tylenol", "tylenol extra strength");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "aspirin", "bayer aspirin|baby aspirin|ecotrin|bufferin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "aleve", "naproxen sodium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "excedrin", "excedrin migraine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "claritin", "claritin reditabs");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "tylenol", "children's tylenol|infant tylenol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "advil", "children's motrin|infant motrin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "benadryl", "children's benadryl");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "claritin", "children's claritin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "zyrtec", "children's zyrtec");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "hydrocortisone cream", "cortaid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "zaditor", "alaway");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "artificial tears", "refresh|systane|genteal|blink tears");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "mucinex", "mucinex dm|mucinex d|mucinex fast max");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "robitussin", "robitussin dm");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "phenylephrine", "sudafed pe");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "nasacort", "nasacort allergy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "flonase", "flonase sensimist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "nexium", "nexium 24hr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "lansoprazole", "prevacid 24hr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "pepcid", "pepcid ac|pepcid complete");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "cimetidine", "tagamet hb");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "milk of magnesia", "phillips milk of magnesia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "imodium", "imodium a d");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "unisom", "unisom sleeptabs");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "nicorette", "nicoderm cq");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "nicorette", "nicorette gum");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "plan b", "plan b one step|my way|take action|aftera|option 2");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "monistat", "monistat 1|monistat 3|monistat 7");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "lotrimin", "gyne lotrimin|clotrimazole vaginal");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "azo", "azo standard");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "lamisil", "terbinafine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "lotrimin", "lotrimin af");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "gold bond", "gold bond powder");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "cortizone", "cortizone 10");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "benadryl", "benadryl itch cream");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "differin", "differin gel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "benzoyl peroxide", "panoxyl");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "salicylic acid", "stridex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "compound w", "salicylic acid wart remover");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "carmex", "chapstick|blistex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "voltaren gel", "voltaren arthritis gel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "lidocaine patch", "aspercreme lidocaine|salonpas lidocaine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "preparation h", "phenylephrine hemorrhoid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "swim ear", "isopropyl alcohol ear drops");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "head lice treatment", "pyrethrins");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "narcan", "narcan nasal spray|naloxone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "glucose tablets", "glucose gel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "multivitamin", "centrum|one a day");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an over-the-counter medication", "iron supplements", "iron|slow fe|feosol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication dosage form", "capsule", "hard gelatin capsule");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication dosage form", "gel cap", "soft gelatin capsule");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a medication dosage form", "lollipop", "oral transmucosal lozenge");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a common medication side effect", "dizziness", "lightheadedness");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a common medication side effect", "yeast infection", "thrush|oral candidiasis");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a common medication side effect", "dependence", "abuse potential");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a common medication side effect", "dry cough", "bradykinin cough");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a common medication side effect", "low blood pressure", "first dose hypotension");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a common medication side effect", "swelling", "ankle swelling|peripheral edema");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "adderall", "stimulants");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "tapentadol", "nucynta");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "oxymorphone", "opana");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "morphine", "ms contin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "codeine", "tylenol 3|tylenol with codeine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "fentanyl", "duragesic|sublimaze");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "sufentanil", "dsuvia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "remifentanil", "ultiva");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "methadone", "dolophine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "suboxone", "subutex|sublocade|butrans|belbuca");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "butorphanol", "stadol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "pentazocine", "talwin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "tramadol", "ultram");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "cocaine", "coca");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "ritalin", "concerta");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "adderall", "evekeo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "dextroamphetamine", "dexedrine|zenzedi");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "methamphetamine", "desoxyn|crystal meth");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "phentermine", "adipex|lomaira");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "modafinil", "provigil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "armodafinil", "nuvigil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "chlordiazepoxide", "librium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "temazepam", "restoril");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "eszopiclone", "lunesta");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "zaleplon", "sonata");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "suvorexant", "belsomra");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "xyrem", "xywav|lumryz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "ketamine", "special k");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "cenobamate", "xcopri");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "marijuana", "weed");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "dronabinol", "syndros");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "nabilone", "cesamet");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "lsd", "acid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "cathinone", "synthetic cathinones|mephedrone|alpha pvp|flakka");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "cathinone", "khat");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "testosterone", "androgel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "nandrolone", "deca durabolin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "oxandrolone", "oxandrin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a controlled substance", "promethazine with codeine", "cheratussin ac|robitussin ac");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a beta blocker (ends in -olol)", "metoprolol", "metoprolol succinate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a beta blocker (ends in -olol)", "metoprolol", "metoprolol tartrate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a beta blocker (ends in -olol)", "timolol", "timolol ophthalmic|betimol|istalol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a beta blocker (ends in -olol)", "landiolol", "rapiblyk");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ACE inhibitor (ends in -pril)", "zestoretic", "lisinopril hctz|prinzide");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ACE inhibitor (ends in -pril)", "vaseretic", "enalapril hctz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ACE inhibitor (ends in -pril)", "lotrel", "benazepril amlodipine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ACE inhibitor (ends in -pril)", "tarka", "trandolapril verapamil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ACE inhibitor (ends in -pril)", "lisinopril", "lisinopril oral solution|qbrelis");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ACE inhibitor (ends in -pril)", "enalapril", "enalapril oral solution|epaned");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ACE inhibitor (ends in -pril)", "enalaprilat", "vasotec iv");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ARB (ends in -sartan)", "hyzaar", "losartan hctz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ARB (ends in -sartan)", "exforge", "amlodipine valsartan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ARB (ends in -sartan)", "azor", "amlodipine olmesartan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ARB (ends in -sartan)", "twynsta", "amlodipine telmisartan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an ARB (ends in -sartan)", "tribenzor", "olmesartan amlodipine hctz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "amphotericin b", "amphotericin b deoxycholate|fungizone|conventional amphotericin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "amphotericin b", "liposomal amphotericin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "abelcet", "amphotericin lipid complex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "nystatin", "mycostatin|nystop|bio statin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "clotrimazole", "clotrimazole troche|mycelex troche");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "miconazole", "miconazole buccal|oravig");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "ketoconazole", "ketoconazole shampoo|nizoral shampoo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "terbinafine", "terbinex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "econazole", "spectazole|ecoza");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "sertaconazole", "ertaczo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "oxiconazole", "oxistat");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "sulconazole", "exelderm");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "luliconazole", "luzu");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "ciclopirox", "loprox|ciclodan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "naftifine", "naftin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "butenafine", "mentax|lotrimin ultra");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "tolnaftate", "tinactin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "undecylenic acid", "fungi nail|desenex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "griseofulvin", "gris peg|grifulvin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "flucytosine", "ancobon|5 flucytosine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "posaconazole", "posaconazole dr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "itraconazole", "tolsura|onmel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "terconazole", "terazol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "tioconazole", "vagistat|monistat 1");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antifungal drug (often ends in -azole)", "butoconazole", "gynazole|femstat");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an anticoagulant or antiplatelet drug", "heparin", "unfractionated heparin|ufh|heparin sodium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an anticoagulant or antiplatelet drug", "lovenox", "clexane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an anticoagulant or antiplatelet drug", "tinzaparin", "innohep");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an anticoagulant or antiplatelet drug", "betrixaban", "bevyxxa");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an anticoagulant or antiplatelet drug", "aspirin", "asa|baby aspirin|ecotrin|durlaza");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an anticoagulant or antiplatelet drug", "aggrenox", "aspirin dipyridamole");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an anticoagulant or antiplatelet drug", "ticlopidine", "ticlid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an anticoagulant or antiplatelet drug", "anagrelide", "agrylin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an anticoagulant or antiplatelet drug", "tpa", "cathflo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an anticoagulant or antiplatelet drug", "defibrotide", "defitelio");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "statin", "hmg coa reductase inhibitors");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "bile acid sequestrant", "bile acid resins");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "crestor", "ezallor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "simvastatin", "flolipid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "lovastatin", "altoprev");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "fluvastatin", "lescol xl");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "vytorin", "ezetimibe simvastatin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "roszet", "ezetimibe rosuvastatin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "caduet", "amlodipine atorvastatin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "niacin", "niacor|nicotinic acid|vitamin b3|slo niacin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "fenofibrate", "fenoglide|lipofen|antara|fibricor|triglide|fenofibric acid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "clofibrate", "atromid s");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "fish oil", "omega 3 acid ethyl esters|omtryg");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "nexlizet", "bempedoic acid ezetimibe");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "volanesorsen", "waylivra");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "cholestyramine", "locholest");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "colestipol", "flavored colestid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "plant sterols", "plant stanols|benecol|take control");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "red yeast rice", "monacolin k");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "psyllium", "metamucil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cholesterol-lowering drug", "fish oil", "krill oil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "nivolumab", "nivolumab hyaluronidase|opdivo qvantig");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "pembrolizumab", "pembrolizumab berahyaluronidase|keytruda qlex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "atezolizumab", "atezolizumab hyaluronidase|tecentriq hybreza");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "trastuzumab", "trastuzumab hyaluronidase|herceptin hylecta");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "rituximab", "rituximab hyaluronidase|rituxan hycela");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "daratumumab", "daratumumab hyaluronidase|darzalex faspro");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "bevacizumab", "bevacizumab awwb|mvasi|zirabev");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "trastuzumab", "trastuzumab biosimilar|ogivri|kanjinti|herzuma|trazimera|ontruzant");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "tocilizumab", "tocilizumab biosimilar|tofidence|tyenne");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "natalizumab", "natalizumab biosimilar|tyruko");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "nipocalimab", "imaavy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "eculizumab", "eculizumab biosimilar|bkemv|epysqli");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "garadacimab", "andembry");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "infliximab", "infliximab dyyb|inflectra|renflexis|avsola|ixifi|zymfentra");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "adalimumab", "adalimumab biosimilar|amjevita|hadlima|hyrimoz|cyltezo|yusimry|simlandi|idacio|hulio|yuflyma|abrilada");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "ustekinumab", "ustekinumab biosimilar|wezlana|selarsdi|pyzchiva|otulfi|imuldosa|yesintek|steqeyma");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "denosumab", "denosumab biosimilar|jubbonti|wyost|ospomyv|xbryk|stoboclo|osenvelt|conexxence|bomyntra");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "omalizumab", "omalizumab biosimilar|omlyclo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "lecanemab", "lecanemab subq|leqembi iqlik");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "sotrovimab", "xevudy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "obiltoxaximab", "anthim");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a monoclonal antibody (ends in -mab)", "golimumab", "simponi aria");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "cyclophosphamide", "neosar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "cisplatin", "platinol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "carboplatin", "paraplatin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "doxorubicin", "liposomal doxorubicin|doxil|caelyx");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "epirubicin", "ellence");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "idarubicin", "idamycin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "mitoxantrone", "novantrone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "vincristine", "vincasar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "vincristine", "liposomal vincristine|marqibo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "vinblastine", "velban");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "etoposide", "vepesid|toposar|etopophos");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "irinotecan", "liposomal irinotecan|onivyde");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "gemcitabine", "infugem");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "5 fluorouracil", "adrucil|efudex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "methotrexate", "trexall");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "pemetrexed", "pemfexy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "pralatrexate", "folotyn");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "cytarabine", "cytosar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "azacitidine", "onureg");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "fludarabine", "fludara");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "cladribine", "leustatin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "clofarabine", "clolar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "nelarabine", "arranon");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "mercaptopurine", "purixan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "thioguanine", "tabloid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "hydroxyurea", "droxia");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "melphalan", "evomela|hepzato");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "bendamustine", "bendeka|belrapzo|vivimusta");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "busulfan", "busulfex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "thiotepa", "tepadina");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "carmustine", "bicnu|gliadel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "lomustine", "ceenu|gleostine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "streptozocin", "zanosar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "dacarbazine", "dtic");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "procarbazine", "matulane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "altretamine", "hexalen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "trabectedin", "yondelis");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "lurbinectedin", "zepzelca");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "mechlorethamine", "mustargen|valchlor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "bleomycin", "blenoxane");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "dactinomycin", "cosmegen");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "mitomycin", "mutamycin|jelmyto|zusduri");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "asparaginase", "elspar|erwinaze|rylaze");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "asparaginase", "oncaspar");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "tretinoin", "vesanoid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "ixabepilone", "ixempra");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "omacetaxine", "synribo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "romidepsin", "istodax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "vorinostat", "zolinza");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "belinostat", "beleodaq");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "thalidomide", "thalomid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "pomalidomide", "pomalyst");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a chemotherapy drug", "niraparib", "zejula");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an herbal supplement", "st johns wort", "hypericum");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an herbal supplement", "ginseng", "korean ginseng|panax ginseng|red ginseng");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an herbal supplement", "kanna", "sceletium");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an herbal supplement", "garlic", "aged garlic extract");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "flu shot", "fluzone|flucelvax|afluria|fluarix|flulaval|fluzone quadrivalent");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "covid", "comirnaty|spikevax|mnexspike|nuvaxovid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "tetanus", "daptacel|infanrix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "tetanus", "tenivac|tdvax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "tetanus", "tetanus toxoid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "tetanus", "diphtheria|diphtheria vaccine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "tetanus", "pertussis|whooping cough vaccine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "mmr", "measles|measles vaccine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "mmr", "mumps|mumps vaccine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "mmr", "rubella|rubella vaccine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "hepatitis b", "engerix b|recombivax hb");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "hpv", "gardasil 9");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "polio", "ipol");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "shingles", "recombinant zoster vaccine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "pneumonia", "prevnar 20");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "pcv13", "prevnar 13");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "ppsv23", "pneumovax 23");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "meningococcal", "meningococcal conjugate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "men b", "menb");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "men abcwy", "penmenvy|menabcwy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "hib", "pedvaxhib|acthib|hiberix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "rabies", "imovax|rabavert");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "yellow fever", "stamaril");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "typhoid", "ty21a");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "cholera", "dukoral");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "smallpox", "monkeypox vaccine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "malaria", "rts s|r21 matrix m");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "pediarix", "dtap hepb ipv");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "pentacel", "dtap ipv hib");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "vaxelis", "dtap ipv hib hepb");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "kinrix", "dtap ipv");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "flumist", "laiv");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "fluzone high dose", "high dose flu vaccine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "fluad", "adjuvanted flu vaccine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "flublok", "recombinant flu vaccine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "flu shot", "cell based flu vaccine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "oral polio", "sabin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a vaccine", "polio", "salk");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cephalosporin", "cefaclor", "ceclor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cephalosporin", "cefuroxime", "cefuroxime axetil|zinacef");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cephalosporin", "cefditoren", "spectracef");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cephalosporin", "cefotetan", "cefotan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cephalosporin", "cefmetazole", "zefazone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cephalosporin", "ceftizoxime", "cefizox");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cephalosporin", "cefoperazone", "cefobid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cephalosporin", "moxalactam", "latamoxef");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cephalosporin", "ceftazidime", "tazicef");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cephalosporin", "cephalothin", "cefalotin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cephalosporin", "cephapirin", "cefapirin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a cephalosporin", "cephradine", "cefradine");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "xanax", "xanax xr|niravam");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "valium", "diastat|valtoco|libervant");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "ativan", "loreev xr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "klonopin", "rivotril");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "versed", "nayzilam|seizalam");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "onfi", "sympazan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "etizolam", "etilaam");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "bromazepam", "lexotan|lexomil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "nitrazepam", "mogadon");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "lormetazepam", "noctamid");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "rohypnol", "roofies");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "brotizolam", "lendormin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "prazepam", "centrax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "halazepam", "paxipam");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a benzodiazepine", "tofisopam", "grandaxin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antipsychotic", "seroquel", "quetiapine xr|seroquel xr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antipsychotic", "abilify", "aripiprazole odt|abilify discmelt|abilify mycite");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antipsychotic", "abilify", "abilify asimtufii");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antipsychotic", "risperdal", "risperidone odt|risperdal m tab");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antipsychotic", "zyprexa", "olanzapine odt|zyprexa zydis");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antipsychotic", "clozaril", "clozapine odt|fazaclo|versacloz");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antipsychotic", "invega", "paliperidone er");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antipsychotic", "loxapine", "loxapine inhaled|adasuve");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antipsychotic", "haldol", "haloperidol lactate");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "retail", "chain pharmacy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "hospital", "inpatient pharmacy|health system pharmacy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "ambulatory care", "clinic pharmacist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "nuclear", "radiopharmacy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "long term care", "nursing home pharmacy|ltc pharmacy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "emergency medicine", "ed pharmacist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "infectious disease", "antimicrobial stewardship pharmacist|id pharmacist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "oncology", "hematology oncology pharmacist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "transplant", "solid organ transplant pharmacist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "psychiatric", "bcpp");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "pediatric", "nicu pharmacist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "drug information", "drug information center");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "poison control", "poison control center|poison information specialist|spi");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "research", "investigational drug pharmacist|investigational drug service");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "pharmacy manager", "pharmacy supervisor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "pharmacy director", "chief pharmacy officer|cpo");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "independent pharmacy", "pharmacy owner|independent pharmacy owner");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "floater", "relief pharmacist|per diem pharmacist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "overnight pharmacist", "night pharmacist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "resident", "residency");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "pharmacy technician", "cpht");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "telepharmacy", "remote pharmacist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "managed care", "pharmacy benefit manager");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "fda", "fda reviewer");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "public health service", "public health pharmacist|usphs|commissioned corps");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "indian health service", "ihs");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "military", "army pharmacist|navy pharmacist|air force pharmacist");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "veterinary pharmacy", "vet pharmacy");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "academia", "faculty");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name a pharmacy job or setting", "sterile compounding", "cleanroom");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "zoloft", "lustral");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "prozac", "sarafem|prozac weekly");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "lexapro", "cipralex");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "celexa", "cipramil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "paxil", "paxil cr|pexeva|brisdelle|seroxat");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "luvox", "luvox cr|faverin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "effexor", "effexor xr");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "pristiq", "khedezla");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "cymbalta", "drizalma");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "milnacipran", "ixel");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "wellbutrin", "wellbutrin sr|wellbutrin xl|aplenzin|forfivo|zyban");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "remeron", "remeron soltab");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "trazodone", "desyrel|oleptro");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "nefazodone", "serzone");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "trintellix", "brintellix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "nortriptyline", "aventyl");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "desipramine", "norpramin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "doxepin", "sinequan|silenor");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "trimipramine", "surmontil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "protriptyline", "vivactil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "amoxapine", "asendin");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "maprotiline", "ludiomil");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "moclobemide", "manerix");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "auvelity", "dextromethorphan bupropion");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "agomelatine", "valdoxan");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "tianeptine", "stablon");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "reboxetine", "edronax");  // 2026-11-05 · NAPLEX · same answer
crowdAlias("Name an antidepressant", "emsam", "selegiline transdermal");  // 2026-11-05 · NAPLEX · same answer

// ===== 2026-11-06 nightly answer review =====
crowd("Name a blood test", 76, "vitamin b2|riboflavin|b2 level|b2");  // 2026-11-06 · 1 player · plasma riboflavin test, like other vitamin levels
crowd("Name a blood test", 76, "vitamin b3|niacin|b3 level|b3");  // 2026-11-06 · 1 player · niacin level, orderable reference-lab test
crowd("Name a blood test", 76, "vitamin b5|pantothenic acid|b5 level|b5");  // 2026-11-06 · 1 player · pantothenic acid level, orderable reference-lab test
crowdAlias("Name a blood test", "blood sugar", "fingerstick glucose|finger stick glucose|figner stick glucose|fsbg");  // 2026-11-06 · 1 player · same test
crowdAlias("Name a cause of abdominal pain", "kidney stones", "nephrolithiasis|urolithiasis");  // 2026-11-06 · 1 player · same thing
crowd("Name a cause of abdominal pain", 88, "schistosomiasis|bilharzia");  // 2026-11-06 · 1 player · intestinal/hepatosplenic schistosomiasis causes abdominal pain
crowd("Name a cause of abdominal pain", 88, "septic pelvic thrombophlebitis|ovarian vein thrombosis");  // 2026-11-06 · 1 player · postpartum fever with lower abdominal pain
crowdAlias("Name a cause of abdominal pain", "yersinia", "yersinia enterocolitica|yersenia entericolitica|yersiniosis");  // 2026-11-06 · 1 player · same organism
crowdAlias("Name a cause of chronic cough", "tuberculosis", "primary progressive tuberculosis|pulmonary tuberculosis");  // 2026-11-06 · 1 player · TB form
crowdAlias("Name a cause of dizziness or vertigo", "bppv", "benign paroxysmal vertigo|benign paroxysmal positional vertigo|benign paroxysmal vertifo");  // 2026-11-06 · 1 player · same thing
crowdAlias("Name a cause of dizziness or vertigo", "cerebellar tumor", "medulloblastoma");  // 2026-11-06 · 1 player · cerebellar tumor type
crowdAlias("Name a cause of dizziness or vertigo", "menieres disease", "merniers|menierres|meniers");  // 2026-11-06 · 1 player · spelling
crowd("Name a cause of dizziness or vertigo", 87, "nsaids|nsaid|nsaid usage|nsaid use");  // 2026-11-06 · 1 player · dizziness is a labeled NSAID adverse effect
crowdAlias("Name a cause of meningitis or encephalitis", "anti nmda receptor encephalitis", "anti nmda");  // 2026-11-06 · 1 player · abbreviation
crowdAlias("Name a cause of non-anion gap metabolic acidosis", "diarrhea", "cholera");  // 2026-11-06 · 1 player · cause via diarrhea (same mechanism)
crowdAlias("Name a cause of numbness or tingling", "brachial plexus injury", "brachial plexopathy");  // 2026-11-06 · 1 player · same thing
crowd("Name a cause of secondary hypertension", 85, "clonidine withdrawal|clonidine rebound|rebound hypertension");  // 2026-11-06 · 1 player · recognized drug-withdrawal hypertension
crowdAlias("Name a cause of swollen lymph nodes", "conjunctivitis", "viral conjunctivitis|viral conjuntivitis");  // 2026-11-06 · 1 player · preauricular node; conjunctivitis already counts
crowdAlias("Name a cause or type of dementia", "frontotemporal dementia", "pick body|pick bodies|picks disease");  // 2026-11-06 · 1 player · histology of pick disease (already an alias)
crowd("Name a chronic disease", 69, "bartter syndrome|bartter");  // 2026-11-06 · 1 player · inherited chronic tubulopathy
crowd("Name a chronic disease", 69, "fanconi anemia|fanconi|fanconi syndrome");  // 2026-11-06 · 1 player · chronic inherited disease (either meaning)
crowd("Name a chronic disease", 69, "gitelman syndrome|gitelmans syndrome|gittelmans syndrome|gittelman syndrome");  // 2026-11-06 · 1 player · inherited chronic tubulopathy
crowd("Name a chronic disease", 69, "hypoplastic left heart syndrome|hlhs");  // 2026-11-06 · 1 player · lifelong single-ventricle disease
crowd("Name a chronic disease", 69, "menieres disease|meniere disease|menieres");  // 2026-11-06 · 1 player · chronic inner-ear disease
crowd("Name a chronic disease", 69, "personality disorder|personality disorders");  // 2026-11-06 · 1 player · chronic psychiatric condition
crowd("Name a chronic disease", 40, "pots|postural orthostatic tachycardia syndrome");  // 2026-11-06 · 4 players · chronic dysautonomia
crowdAlias("Name a chronic disease", "chronic venous insufficiency", "venous insufficiency");  // 2026-11-06 · 1 player · same thing
crowdAlias("Name a drug that causes hyperkalemia", "ace inhibitors", "quinapril");  // 2026-11-06 · 1 player · ACE inhibitor (lisinopril already an alias)
crowdAlias("Name a drug with a boxed (black box) warning", "nsaids", "ibuprofen|naproxen");  // 2026-11-06 · 1 player · NSAID boxed warning
crowdAlias("Name a genetic disorder", "carnitine deficiency", "carnitine shuttle deficiency|cpt deficiency|carnitine palmitoyltransferase deficiency");  // 2026-11-06 · 1 player · same group
crowdAlias("Name a healthcare profession", "radiologic technologist", "radiology technician|radiology tech|radiology technologist");  // 2026-11-06 · 1 player · same job
crowd("Name a heart condition", 74, "ectopia cordis");  // 2026-11-06 · 1 player · congenital heart displacement outside the chest
crowdAlias("Name a lab stain or culture medium", "nnn medium", "novy nicolle|novy macneal nicolle medium|nnn");  // 2026-11-06 · 1 player · same medium
crowdAlias("Name a lung disease", "organizing pneumonia", "cryptogenic organizing pneumonia");  // 2026-11-06 · 1 player · full name (cop already counts)
crowdAlias("Name a medical imaging test", "ct chest", "high resolution ct chest|hrct|high resolution ct");  // 2026-11-06 · 1 player · CT chest protocol
crowdAlias("Name a medical imaging test", "low dose ct", "low dose radiation ct");  // 2026-11-06 · 1 player · same test
crowdAlias("Name a chronic disease", "multiple sclerosis", "ms");  // 2026-11-06 · 4 players · abbreviation
crowdAlias("Name a chronic disease", "als", "motor neuron disease|mnd");  // 2026-11-06 · 3 players · UK term for ALS
crowdAlias("Name a chronic disease", "lupus", "sle|systemic lupus erythematosus");  // 2026-11-06 · 3 players · abbreviation
crowdAlias("Name a chronic disease", "inflammatory bowel disease", "ibd");  // 2026-11-06 · 3 players · abbreviation
crowdAlias("Name a healthcare profession", "medical coder", "billing|medical billing|billing specialist");  // 2026-11-06 · 2 players · medical biller already counts
crowd("Name a gland in the body", 79, "anal glands|anal gland|anal crypt glands");  // 2026-11-06 · 2 players · real glands (cryptoglandular fistula)
crowdAlias("Name a cause of dizziness or vertigo", "menieres disease", "menierres|merniers|meniers");  // 2026-11-06 · 2 players · spelling
crowdAlias("Name a cause of abdominal pain", "crohns disease", "ibd|inflammatory bowel disease");  // 2026-11-06 · 2 players · umbrella of crohns/UC
crowdAlias("Name a common reason for a primary care visit", "std testing", "sexually transmitted infection|sti|std|sti testing");  // 2026-11-06 · 2 players · same visit reason
crowd("Name a cause of abdominal pain", 80, "abdominal trauma|trauma|blunt abdominal trauma");  // 2026-11-06 · 2 players · standard cause
crowdAlias("Name an endocrine disorder", "congenital adrenal hyperplasia", "cah");  // 2026-11-06 · 2 players · abbreviation
crowdAlias("Name a cause of heart palpitations", "heart attack", "mi|myocardial infarction");  // 2026-11-06 · 2 players · abbreviation
crowdAlias("Name a cause of chronic cough", "interstitial lung disease", "ild");  // 2026-11-06 · 2 players · abbreviation
crowdAlias("Name a gland in the body", "sebaceous", "sebbhoreic|seborrheic");  // 2026-11-06 · 2 players · misnamed sebaceous gland
crowdAlias("Name a chronic disease", "primary sclerosing cholangitis", "psc");  // 2026-11-06 · 2 players · abbreviation
crowd("Name a cause of abdominal pain", 80, "ascites|tense ascites");  // 2026-11-06 · 2 players · distension discomfort, SBP
crowdAlias("Name a chronic disease", "ulcerative colitis", "uc");  // 2026-11-06 · 2 players · abbreviation
crowdAlias("Name a chronic disease", "heart failure", "hfref|hfpef");  // 2026-11-06 · 2 players · heart failure subtype
crowdAlias("Name a common reason for a primary care visit", "foot pain", "toe pain");  // 2026-11-06 · 2 players · part of foot pain
crowdAlias("Name a cause of abdominal pain", "pregnancy", "childbirth|labour");  // 2026-11-06 · 2 players · labor pain (labor already an alias)
crowd("Name a chronic disease", 56, "atherosclerosis|atherosclerotic disease");  // 2026-11-06 · 2 players · chronic arterial disease
crowdAlias("Name a chronic disease", "macular degeneration", "amd|age related macular degeneration|armd");  // 2026-11-06 · 2 players · abbreviation
crowd("Name a chronic disease", 56, "ehlers danlos syndrome|eds|ehlers danlos");  // 2026-11-06 · 2 players · chronic inherited connective tissue disorder
crowd("Name a chronic disease", 69, "primary aldosteronism|conn syndrome|conns syndrome|hyperaldosteronism");  // 2026-11-06 · 1 player · chronic endocrine disease; "conns syndrome" was auto-correcting to down syndrome
crowdAlias("Name a cause of meningitis or encephalitis", "hib", "h flu|h. flu");  // 2026-11-06 · 2 players · common shorthand for Haemophilus influenzae

// ===== 2026-11-07 nightly review =====
crowdAlias("Name a disease you can catch from animals", "mad cow disease", "cjd|variant cjd|vcjd|bse|bovine spongiform encephalopathy");  // 2026-11-07 · 7 players · vCJD from BSE beef (sporadic CJD is not zoonotic)
crowdAlias("Name a disease you can catch from animals", "brucellosis", "brucella");  // 2026-11-07 · 4 players · organism name
crowd("Name a disease you can catch from animals", 42, "leprosy|hansen disease|hansens disease");  // 2026-11-07 · 3 players · armadillo-acquired M. leprae (NEJM 2011)
crowdAlias("Name a disease you can catch from animals", "covid", "coronavirus|corona");  // 2026-11-07 · 5 players · same answer
crowdAlias("Name a disease you can catch from animals", "yersiniosis", "yersinia");  // 2026-11-07 · 2 players · organism name
crowdAlias("Name a skin or soft tissue infection", "cutaneous tuberculosis", "tuberculosis|tb|skin tuberculosis");  // 2026-11-07 · 3 players · TB of skin is on list
crowdAlias("Name a cause of meningitis or encephalitis", "tuberculosis", "tb|tb meningitis|tuberculous meningitis");  // 2026-11-07 · 3 players · abbreviation
crowdAlias("Name a cause of meningitis or encephalitis", "anti nmda receptor encephalitis", "nmda encephalitis|nmda receptor encephalitis|nmda autoimmune|nmda receptor negative encephalitis");  // 2026-11-07 · 4 players · same disease
crowdAlias("Name a cause of meningitis or encephalitis", "viral meningitis", "viral infection|virus");  // 2026-11-07 · 3 players · same category
crowdAlias("Name a lab stain or culture medium", "macconkey agar", "mcconkey|mconkey|mcconkey agar|macconkey");  // 2026-11-07 · 7 players · misspelling
crowdAlias("Name a metabolic pathway or cycle", "krebs cycle", "krebb|krebbs|krebbs cycle|citric acid");  // 2026-11-07 · 5 players · misspellings
crowdAlias("Name a metabolic pathway or cycle", "pentose phosphate pathway", "ppp");  // 2026-11-07 · 4 players · abbreviation
crowd("Name a metabolic pathway or cycle", 89, "randle cycle|randle|glucose fatty acid cycle");  // 2026-11-07 · 1 player · named glucose-fatty acid substrate cycle
crowd("Name a cause of swollen lymph nodes", 88, "prostate cancer|prostatic adenocarcinoma|prostate adenocarcinoma");  // 2026-11-07 · 1 player · nodal metastasis
crowdAlias("Name a risk factor for falls", "old age", "age|advanced age|older age");  // 2026-11-07 · 5 players · same factor
crowd("Name a risk factor for falls", 85, "neurosyphilis|tabes dorsalis");  // 2026-11-07 · 1 player · sensory ataxia from dorsal column loss
crowd("Name a neurological disorder", 74, "mogad|mog antibody disease|mog antibody associated disease|myelin oligodendrocyte glycoprotein antibody associated disease");  // 2026-11-07 · 3 players · distinct CNS demyelinating disease
crowdAlias("Name a neurological disorder", "posterior reversible encephalopathy syndrome", "reversible posterior leukoencephalopathy syndrome|rpls");  // 2026-11-07 · 1 player · older name of PRES
crowdAlias("Name a neurological disorder", "stiff person syndrome", "stiff man syndrome");  // 2026-11-07 · 1 player · older name
crowd("Name a surgical procedure", 69, "pelvic exenteration|anterior exenteration|posterior exenteration|total pelvic exenteration");  // 2026-11-07 · 4 players · radical pelvic surgery
crowd("Name a surgical procedure", 73, "hipec|hyperthermic intraperitoneal chemotherapy|cytoreductive surgery");  // 2026-11-07 · 3 players · CRS-HIPEC
crowd("Name a surgical procedure", 87, "holep|holmium laser enucleation of the prostate");  // 2026-11-07 · 1 player · BPH surgery
crowd("Name a surgical procedure", 87, "lymphovenous anastomosis|lymphovenous bypass|lymph node vein anastomosis|lymph node vein anastamoses");  // 2026-11-07 · 1 player · lymphedema microsurgery
crowd("Name a surgical procedure", 87, "mpfl reconstruction|medial patellofemoral ligament reconstruction");  // 2026-11-07 · 1 player · patellar instability surgery
crowd("Name a surgical procedure", 87, "salpingotomy|linear salpingotomy");  // 2026-11-07 · 1 player · tubal-sparing ectopic surgery
crowd("Name a surgical procedure", 87, "prostatic urethral lift|urolift");  // 2026-11-07 · 1 player · BPH procedure
crowd("Name a surgical procedure", 87, "amniotic membrane transplantation|amniotic membrane graft");  // 2026-11-07 · 1 player · ocular surface surgery
crowd("Name a common reason for a primary care visit", 58, "thrush|oral thrush|oral candidiasis");  // 2026-11-07 · 3 players · common in infants/inhaler users
crowdAlias("Name a cause or type of dementia", "lewy body dementia", "lewy bodies|lewy body");  // 2026-11-07 · 3 players · same
crowd("Name a cause or type of dementia", 89, "sanfilippo syndrome|sanfillipo syndrome|mps iii|mucopolysaccharidosis type iii");  // 2026-11-07 · 1 player · classic childhood dementia
crowdAlias("Name a structure in the neck", "cricoid cartilage", "circoid|cricoid");  // 2026-11-07 · 3 players · misspelling
crowdAlias("Name a structure in the neck", "cervical vertebrae", "spine");  // 2026-11-07 · 3 players · cervical spine
crowdAlias("Name a structure in the neck", "sympathetic trunk", "sympathetic chain");  // 2026-11-07 · 1 player · same
crowd("Name a structure in the neck", 88, "tubercle of zuckerkandl|zuckerkandl tubercle|zuckerkandl-tubercle");  // 2026-11-07 · 1 player · thyroid landmark near RLN
crowd("Name a structure in the neck", 88, "killian triangle|killian's triangle|killians triangle|killian dehiscence");  // 2026-11-07 · 1 player · Zenker diverticulum site
crowd("Name a chronic disease", 58, "functional neurological disorder|fnd|conversion disorder");  // 2026-11-07 · 2 players · chronic neuropsychiatric condition
crowd("Name a chronic disease", 58, "marfan syndrome|marfans|marfan");  // 2026-11-07 · 2 players · chronic inherited connective tissue disorder
crowdAlias("Name a chronic disease", "heart disease", "cvd|cardiovascular disease");  // 2026-11-07 · 2 players · same
crowd("Name a preventive screening test", 69, "breast ultrasound|screening breast ultrasound");  // 2026-11-07 · 2 players · supplemental screening, dense breasts
crowd("Name a medical imaging test", 69, "ct kub|ctkub|ct stone protocol|stone protocol ct");  // 2026-11-07 · 2 players · noncontrast CT for stones
crowdAlias("Name a cause of chronic cough", "copd", "bronchitis");  // 2026-11-07 · 2 players · chronic bronchitis listed here
crowdAlias("Name a tumor marker", "ca 19 9", "ca19.9|ca19 9|ca 19.9|ca199");  // 2026-11-07 · 2 players · punctuation
crowdAlias("Name a cause of abdominal pain", "ovarian cyst", "teratoma|ovarian teratoma|dermoid cyst");  // 2026-11-07 · 2 players · dermoid = ovarian cyst type
crowdAlias("Name a complication of pregnancy", "gestational diabetes", "diabetes");  // 2026-11-07 · 2 players · same
crowdAlias("Name a cause of jaundice", "alcoholic liver disease", "alcoholism|alcohol");  // 2026-11-07 · 2 players · same
crowd("Name a cause of thrombocytopenia", 46, "lymphoma");  // 2026-11-07 · 2 players · marrow infiltration, hypersplenism, immune ITP
crowdAlias("Name a food high in purines (avoid with gout)", "red meat", "steak");  // 2026-11-07 · 2 players · same
crowd("Name an oncogene or tumor suppressor gene", 85, "p21|cdkn1a|p21 cip1|waf1");  // 2026-11-07 · 1 player · CDK inhibitor tumor suppressor
crowd("Name a warning sign of oral cancer", 85, "odynophagia|painful swallowing|oduynophagia");  // 2026-11-07 · 1 player · painful swallowing
crowd("Name an eye disease or condition", 78, "chorioretinitis");  // 2026-11-07 · 1 player · e.g. toxoplasma, CMV
crowd("Name an eye disease or condition", 78, "urrets zavalia syndrome|urretts zavalia syndrome");  // 2026-11-07 · 1 player · fixed dilated pupil after keratoplasty
crowdAlias("Name a mental health disorder", "munchausen", "factitious disorder imposed on another");  // 2026-11-07 · 1 player · DSM-5 name for MbP
crowdAlias("Name a healthcare profession", "speech therapist", "speech and language therapy|speech and language therapist|salt");  // 2026-11-07 · 1 player · UK name
crowd("Name an artery", 88, "sampson artery|sampson's|sampsons artery|artery of the round ligament");  // 2026-11-07 · 1 player · round ligament artery
crowdAlias("Name a muscle relaxant", "succinylcholine", "suxamethonium|sux");  // 2026-11-07 · 1 player · UK name
crowd("Name a drug that commonly causes constipation", 85, "amiodarone|cordarone|pacerone");  // 2026-11-07 · 1 player · GI effects incl constipation in label
crowd("Name a medical ethics or legal concept", 85, "clinical equipoise|equipoise");  // 2026-11-07 · 1 player · RCT ethics principle
crowd("Name a nursing job title or role", 85, "advanced critical care practitioner|accp");  // 2026-11-07 · 1 player · UK advanced practice role
crowd("Name an autoantibody", 85, "anti caspr1|caspr1");  // 2026-11-07 · 1 player · autoimmune nodopathy
crowdAlias("Name a blood test", "acth stimulation test", "short synacthen test|short synacthen|synacthen test|short synthacten");  // 2026-11-07 · 1 player · UK name

// ===== 2026-11-08 nightly answer review =====
crowdAlias("Name a bacterium that causes disease in humans", "streptococcus pneumoniae", "s pneumoniae|s pnuemoniae");  // 2026-11-08 · 1 player · abbreviation of S. pneumoniae
crowdAlias("Name a bedside procedure", "intraosseous line", "interosseous|interosseous line|interosseous access");  // 2026-11-08 · 1 player · misspelling of intraosseous
crowd("Name a bedside procedure", 60, "venous blood gas|vbg");  // 2026-11-08 · 4 players · bedside venous sample, like ABG on list
crowdAlias("Name a body fluid or secretion", "semen", "cum");  // 2026-11-08 · 3 players · slang for semen (pre cum already listed)
crowdAlias("Name a body fluid or secretion", "urine", "pee");  // 2026-11-08 · 3 players · plain-English urine
crowdAlias("Name a body fluid or secretion", "feces", "poo");  // 2026-11-08 · 2 players · plain-English feces
crowdAlias("Name a body fluid or secretion", "vaginal fluid", "vaginal secretions");  // 2026-11-08 · 2 players · same as vaginal fluid
crowdAlias("Name a cause of acute pancreatitis", "gallstones", "cholelithiasis|choltheylsiths");  // 2026-11-08 · 1 player · cholelithiasis = gallstones
crowdAlias("Name a cause of difficulty swallowing", "cmv esophagitis", "cmv|cytomegalovirus");  // 2026-11-08 · 1 player · CMV causes dysphagia via CMV esophagitis
crowdAlias("Name a cause of difficulty swallowing", "als", "mnd|motor neuron disease|motor neurone disease");  // 2026-11-08 · 2 players · MND (ALS) bulbar dysphagia
crowdAlias("Name a cause of difficulty swallowing", "vocal cord paralysis", "recurrent laryngeal nerve|recurrent laryngeal nerve palsy|recurrent laryngeal nerve injury");  // 2026-11-08 · 2 players · RLN palsy = vocal cord paralysis
crowdAlias("Name a cause of digital clubbing", "lung cancer", "lung adenocarcinoma");  // 2026-11-08 · 1 player · lung cancer subtype
crowdAlias("Name a cause of eosinophilia", "filariasis", "onchocerca|onchocerciasis|river blindness");  // 2026-11-08 · 1 player · filarial infection
crowdAlias("Name a cause of jaundice", "hemolysis", "aiha");  // 2026-11-08 · 1 player · autoimmune hemolytic anemia already under hemolysis
crowdAlias("Name a cause of pancytopenia", "chemotherapy", "cisplatin");  // 2026-11-08 · 1 player · myelosuppressive chemo drug
crowd("Name a cause of secondary hypertension", 85, "polyarteritis nodosa|pan");  // 2026-11-08 · 1 player · renal artery vasculitis -> renin-mediated HTN
crowdAlias("Name a cause of ST elevation", "stemi", "mi|infarction|myocardial infarction");  // 2026-11-08 · 4 players · same as STEMI
crowdAlias("Name a cause of ST elevation", "pericarditis", "dressler|dressler syndrome");  // 2026-11-08 · 1 player · post-MI pericarditis
crowdAlias("Name a cause of swollen lymph nodes", "histoplasmosis", "histoplasma");  // 2026-11-08 · 1 player · organism name
crowdAlias("Name a cause of swollen lymph nodes", "stomach cancer", "gastric adenocarcinoma|intestinal gastric adenocarcinoma");  // 2026-11-08 · 1 player · gastric cancer subtype
crowdAlias("Name a cause of swollen lymph nodes", "cancer", "malignancy");  // 2026-11-08 · 1 player · same as cancer
crowdAlias("Name a cause of swollen lymph nodes", "hodgkin lymphoma", "nodular sclerosing|nodular sclerosis|nodular sclerosing hodgkin lymphoma");  // 2026-11-08 · 1 player · Hodgkin subtype
crowdAlias("Name a cause or type of dementia", "cerebral amyloid angiopathy", "caa");  // 2026-11-08 · 1 player · abbreviation
crowdAlias("Name a cause or type of dementia", "creutzfeldt jakob disease", "creutzfeld jakob|creutzfeld jakob disease");  // 2026-11-08 · 2 players · misspelling
crowdAlias("Name a cause or type of dementia", "medications", "drugs");  // 2026-11-08 · 1 player · same as medications
crowdAlias("Name a cause or type of dementia", "frontotemporal dementia", "frontotemporal atrophy");  // 2026-11-08 · 1 player · FTD
crowdAlias("Name a cause or type of dementia", "semantic dementia", "semantic aphasia");  // 2026-11-08 · 1 player · semantic variant PPA
crowdAlias("Name a clinical scoring system or decision rule", "news score", "news");  // 2026-11-08 · 5 players · NEWS
crowd("Name a clinical scoring system or decision rule", 83, "pediatric asthma severity score|pass");  // 2026-11-08 · 1 player · validated pediatric asthma score (PASS)
crowd("Name a clinical scoring system or decision rule", 83, "rotterdam criteria");  // 2026-11-08 · 1 player · PCOS diagnostic criteria
crowd("Name a clinical scoring system or decision rule", 83, "swansea criteria");  // 2026-11-08 · 1 player · AFLP diagnostic criteria
crowd("Name a clinical scoring system or decision rule", 66, "twist score|twist");  // 2026-11-08 · 3 players · testicular torsion risk score
crowd("Name a clinical scoring system or decision rule", 73, "prevent equations|prevent|prevent score|prevent calculator");  // 2026-11-08 · 2 players · AHA PREVENT CVD risk equations
crowd("Name a clinical scoring system or decision rule", 83, "abbreviated mental test|amt|amt 10|amt-10");  // 2026-11-08 · 1 player · AMT-10 cognitive screening score
crowd("Name a clinical scoring system or decision rule", 83, "nafld activity score|masld activity score|nash activity score");  // 2026-11-08 · 1 player · NAS histologic score
crowdAlias("Name a complication of pregnancy", "peripartum cardiomyopathy", "cardiomyopathy");  // 2026-11-08 · 2 players · peripartum cardiomyopathy
crowdAlias("Name a complication of pregnancy", "gestational hypertension", "hypertension|high blood pressure");  // 2026-11-08 · 3 players · gestational HTN
crowdAlias("Name a complication of pregnancy", "eclampsia", "seizures|seizure");  // 2026-11-08 · 2 players · seizures in pregnancy = eclampsia
crowdAlias("Name a complication of pregnancy", "acute fatty liver of pregnancy", "fatty liver");  // 2026-11-08 · 2 players · AFLP
crowd("Name a complication of pregnancy", 82, "adnexal torsion|ovarian torsion");  // 2026-11-08 · 1 player · increased risk in pregnancy (ACOG)
crowdAlias("Name a congenital heart defect", "bicuspid aortic valve", "bicuspid valve");  // 2026-11-08 · 2 players · BAV
crowd("Name a congenital heart defect", 83, "pentalogy of fallot|pentology of fallot|pentology of falloty");  // 2026-11-08 · 1 player · TOF + ASD
crowd("Name a dental organization or professional association", 85, "bsdht|british society of dental hygiene and therapy");  // 2026-11-08 · 1 player · UK dental hygiene body
crowdAlias("Name a disease you can catch from animals", "babesiosis", "babesia");  // 2026-11-08 · 2 players · organism
crowd("Name a medical ethics or legal concept", 61, "involuntary commitment|involuntary psychiatric admission|involuntary admission|civil commitment|sectioning");  // 2026-11-08 · 1 player · core mental-health law concept
crowdAlias("Name a patient safety or quality improvement term", "incident report", "datix|riskman");  // 2026-11-08 · 4 players · incident reporting systems
crowdAlias("Name a patient safety or quality improvement term", "patient experience", "satisfaction");  // 2026-11-08 · 2 players · patient satisfaction
crowd("Name a patient safety or quality improvement term", 84, "cqc|care quality commission");  // 2026-11-08 · 1 player · UK regulator, like Joint Commission
crowd("Name a patient safety or quality improvement term", 74, "manual handling|safe patient handling|manual handling training");  // 2026-11-08 · 2 players · safe patient handling
crowd("Name a patient safety or quality improvement term", 74, "ppe|personal protective equipment");  // 2026-11-08 · 2 players · infection prevention
crowd("Name a patient safety or quality improvement term", 84, "right patient right blood");  // 2026-11-08 · 1 player · NPSA transfusion safety initiative
crowd("Name a patient safety or quality improvement term", 84, "safeguarding");  // 2026-11-08 · 1 player · protecting vulnerable patients
crowd("Name a patient safety or quality improvement term", 84, "door to balloon time|time to stent");  // 2026-11-08 · 1 player · STEMI quality metric
crowd("Name a protein in the human body", 85, "haptocorrin|transcobalamin i|r binder");  // 2026-11-08 · 1 player · B12-binding protein
crowdAlias("Name a sleep disorder", "sleep apnea", "apnea|apnoea");  // 2026-11-08 · 3 players · sleep apnea
crowd("Name a virus that infects humans", 81, "california encephalitis virus");  // 2026-11-08 · 1 player · orthobunyavirus
crowdAlias("Name an autoantibody", "anti ccp", "ccp");  // 2026-11-08 · 4 players · anti-CCP
crowdAlias("Name an autoantibody", "anti tissue transglutaminase", "ttg|anti ttg");  // 2026-11-08 · 5 players · anti-tTG
crowd("Name an autoantibody", 83, "anti endothelial cell antibody|anti-endothelial cell|aeca");  // 2026-11-08 · 1 player · AECA in vasculitis
crowd("Name an opportunistic infection", 65, "klebsiella|klebsiella pneumoniae");  // 2026-11-08 · 2 players · opportunistic nosocomial pathogen

// ===== 2026-11-10 nightly answer review =====
crowd("Name a biostatistics or epidemiology term", 85, "base rate fallacy|base rate neglect");  // 2026-11-10 · 1 player · classic diagnostic-reasoning/stats error
crowd("Name a biostatistics or epidemiology term", 85, "decile|deciles");  // 2026-11-10 · 1 player · quantile, like quartile/percentile
crowd("Name a biostatistics or epidemiology term", 85, "likert scale|likert");  // 2026-11-10 · 1 player · standard ordinal rating scale
crowd("Name a biostatistics or epidemiology term", 85, "paired data|paired samples");  // 2026-11-10 · 1 player · dependent-samples design
crowd("Name a body cavity or anatomical space", 81, "interventricular foramen|foramen of monro");  // 2026-11-10 · 1 player · CSF passage between ventricles
crowd("Name a cause of digital clubbing", 85, "kartagener syndrome|kartageners|kartagener|primary ciliary dyskinesia");  // 2026-11-10 · 1 player · PCD with bronchiectasis
crowd("Name a cause of pancytopenia", 80, "lamotrigine");  // 2026-11-10 · 1 player · label: blood dyscrasias incl pancytopenia/HLH
crowd("Name a common allergy or allergen", 22, "pet dander|dander|animal dander|fur|pet fur");  // 2026-11-10 · 6 players · standard aeroallergen
crowd("Name a common reason for a primary care visit", 81, "runny nose|rhinorrhea|rhinorrhoea|rhinorhoea");  // 2026-11-10 · 1 player · common URI symptom visit
crowd("Name a cytokine or immune signaling molecule", 61, "pd-l1|pdl1|programmed death ligand 1");  // 2026-11-10 · 3 players · immune checkpoint ligand
crowd("Name a drug given by intramuscular (IM) injection", 85, "zuclopenthixol acetate|clopixol acuphase|zuclopenthixol");  // 2026-11-10 · 1 player · short-acting IM antipsychotic
crowd("Name a drug that causes peripheral neuropathy", 85, "vinblastine");  // 2026-11-10 · 1 player · vinca alkaloid; label neurotoxicity
crowd("Name a drug that causes Stevens-Johnson syndrome", 85, "febuxostat");  // 2026-11-10 · 1 player · label: postmarketing SJS/TEN
crowd("Name a drug used in pregnancy, labor or delivery", 85, "ergometrine|ergonovine");  // 2026-11-10 · 1 player · uterotonic for PPH
crowd("Name a food high in saturated fat or cholesterol", 65, "chicharron|chicharon|pork rinds");  // 2026-11-10 · 3 players · fried pork skin
crowd("Name a food high in vitamin C", 65, "calamansi|calamondin");  // 2026-11-10 · 2 players · citrus fruit
crowd("Name a genetic disorder", 81, "dravet syndrome|dravet");  // 2026-11-10 · 1 player · SCN1A epileptic encephalopathy
crowd("Name a heart condition", 70, "cardiomegaly|enlarged heart");  // 2026-11-10 · 2 players · enlarged heart
crowd("Name a part of the heart", 72, "oblique vein of the left atrium|oblique vein|oblique vein of marshall|vein of marshall");  // 2026-11-10 · 2 players · cardiac vein to coronary sinus
crowd("Name a part of the immune system", 68, "mantle zone|mantle");  // 2026-11-10 · 3 players · lymphoid follicle zone
crowd("Name a protein in the human body", 80, "fkbp11|fk506 binding protein 11");  // 2026-11-10 · 1 player · FK506-binding protein
crowd("Name a protein in the human body", 80, "myelin oligodendrocyte glycoprotein|mog");  // 2026-11-10 · 1 player · CNS myelin protein
crowd("Name a protein in the human body", 61, "sonic hedgehog|sonic hedgehog protein|shh");  // 2026-11-10 · 3 players · morphogen protein
crowd("Name a protein in the human body", 69, "tyrosine kinases|tyrosine kinase");  // 2026-11-10 · 2 players · enzyme protein family
crowd("Name a symptom of multiple sclerosis", 85, "oscillopsia");  // 2026-11-10 · 1 player · from acquired nystagmus
crowd("Name an artery", 88, "medial circumflex femoral|medial circumflex|medial cirucumflex|medial femoral circumflex");  // 2026-11-10 · 1 player · femoral head supply
crowd("Name something that weakens the immune system", 65, "t cell deficiency|t cell immunodeficiency");  // 2026-11-10 · 3 players · cellular immunodeficiency
crowdAlias("Name a biostatistics or epidemiology term", "effective reproduction number", "r number|rt|r value");  // 2026-11-10 · 2 players · R number = effective R
crowdAlias("Name a biostatistics or epidemiology term", "wilcoxon signed rank test", "wilcoxon paired rank sum|wilcoxon paired");  // 2026-11-10 · 1 player · paired Wilcoxon
crowdAlias("Name a body cavity or anatomical space", "anatomical snuffbox", "snuffbox|snuff box");  // 2026-11-10 · 2 players · same space
crowdAlias("Name a body cavity or anatomical space", "subphrenic space", "subphrenic recess");  // 2026-11-10 · 1 player · same space
crowdAlias("Name a cause of an enlarged spleen", "alcoholic liver disease", "alcoholism|alcohol");  // 2026-11-10 · 2 players · via cirrhosis/portal HTN
crowdAlias("Name a cause of an enlarged spleen", "splenic vein thrombosis", "pancreatitis|chronic pancreatitis");  // 2026-11-10 · 3 players · via splenic vein thrombosis
crowdAlias("Name a cause of coughing up blood", "lung cancer", "cancer|oat cell carcinoma|squamous cell carcinoma|squamous cell lung cancer|small cell lung cancer");  // 2026-11-10 · 7 players · lung cancer types
crowdAlias("Name a cause of muscle weakness", "guillain barre syndrome", "gullain barre");  // 2026-11-10 · 1 player · misspelling
crowdAlias("Name a cause of pancytopenia", "visceral leishmaniasis", "leishmania donovani|l donovani");  // 2026-11-10 · 1 player · causative organism
crowdAlias("Name a cause of stroke", "brain aneurysm", "aneurysm|ruptured aneurysm");  // 2026-11-10 · 3 players · same
crowdAlias("Name a cause of stroke", "arteriovenous malformation", "av malformation");  // 2026-11-10 · 1 player · same
crowdAlias("Name a cause of stroke", "blood clot", "clot");  // 2026-11-10 · 2 players · same
crowdAlias("Name a cause of stroke", "arterial dissection", "dissection");  // 2026-11-10 · 3 players · same
crowdAlias("Name a cause of stroke", "intracerebral hemorrhage", "hemorrhage|haemorrhage|brain bleed");  // 2026-11-10 · 6 players · hemorrhagic stroke
crowdAlias("Name a cause of stroke", "high blood pressure", "htn");  // 2026-11-10 · 2 players · abbreviation
crowdAlias("Name a cause or type of dementia", "variant creutzfeldt jakob disease", "variant cjd|vcjd");  // 2026-11-10 · 1 player · abbreviation
crowdAlias("Name a childproofing or home safety measure for young children", "cabinet locks", "childlock|child lock|child locks");  // 2026-11-10 · 1 player · same
crowdAlias("Name a childproofing or home safety measure for young children", "lock up medications", "medicine cabinet locked|locked medicine cabinet");  // 2026-11-10 · 1 player · same
crowdAlias("Name a clinical scoring system or decision rule", "rockall score", "rockfall|rockall");  // 2026-11-10 · 1 player · misspelling
crowdAlias("Name a common allergy or allergen", "tree nuts", "nuts|nut");  // 2026-11-10 · 11 players · plain-English nut allergy
crowdAlias("Name a common allergy or allergen", "bee stings", "bee|bees|bee venom|venom|insect venom");  // 2026-11-10 · 11 players · same
crowdAlias("Name a common allergy or allergen", "grass", "hay");  // 2026-11-10 · 5 players · hay = dried grass pollen
crowdAlias("Name a common allergy or allergen", "pollen", "seasonal|seasonal allergies");  // 2026-11-10 · 3 players · seasonal = pollen
crowdAlias("Name a common allergy or allergen", "shellfish", "seafood");  // 2026-11-10 · 4 players · seafood allergy
crowdAlias("Name a common allergy or allergen", "wheat", "bread|flour");  // 2026-11-10 · 5 players · wheat allergy
crowdAlias("Name a common allergy or allergen", "milk", "cheese|dairy");  // 2026-11-10 · 2 players · cow's milk allergy
crowdAlias("Name a common reason for a primary care visit", "prenatal care", "prenatal consult|prenatal visit");  // 2026-11-10 · 1 player · same
crowdAlias("Name a complication of pregnancy", "group b strep infection", "gbs infection|gbs");  // 2026-11-10 · 1 player · abbreviation
crowdAlias("Name a complication of pregnancy", "placenta previa", "previa");  // 2026-11-10 · 1 player · short form
crowdAlias("Name a congenital heart defect", "atrioventricular septal defect", "atrioventricular defect|av canal|av canal defect");  // 2026-11-10 · 1 player · same
crowdAlias("Name a congenital heart defect", "patent ductus arteriosus", "ductus arterious|ductus arteriosus");  // 2026-11-10 · 1 player · misspelling
crowdAlias("Name a congenital heart defect", "patent foramen ovale", "foramen ovale");  // 2026-11-10 · 1 player · same
crowdAlias("Name a congenital heart defect", "polysplenia syndrome", "left atrial isomerisation|left atrial isomerism|left isomerism");  // 2026-11-10 · 1 player · left isomerism = polysplenia
crowdAlias("Name a congenital heart defect", "ostium secundum asd", "osteom secondum|ostium secundum");  // 2026-11-10 · 1 player · misspelling
crowdAlias("Name a congenital heart defect", "transposition of the great arteries", "tranposition of great arteries|transposition of great arteries");  // 2026-11-10 · 1 player · misspelling
crowdAlias("Name a dementia care strategy", "pet therapy", "therapy animal|therapy animals|animal assisted therapy");  // 2026-11-10 · 1 player · same
crowdAlias("Name a dental impression material", "zinc oxide eugenol paste", "zoe|zinc oxide eugenol");  // 2026-11-10 · 1 player · abbreviation
crowdAlias("Name a disease linked to an HLA type", "celiac disease", "coeliac|coeliac disease");  // 2026-11-10 · 2 players · UK spelling
crowdAlias("Name a disease you can catch from animals", "tularemia", "francisella|francisella tularensis|francesillia");  // 2026-11-10 · 1 player · causative organism
crowdAlias("Name a disease you can catch from animals", "plague", "yersinia pestis|y pestis");  // 2026-11-10 · 1 player · causative organism
crowdAlias("Name a finding on a peripheral blood smear", "poikilocytosis", "anisopoikilocytosis|poikilocytes");  // 2026-11-10 · 9 players · same finding
crowdAlias("Name a finding on a peripheral blood smear", "teardrop cells", "tear drop poikilocytes|teardrop poikilocytes");  // 2026-11-10 · 1 player · dacrocytes
crowdAlias("Name a finding on a peripheral blood smear", "malaria parasites", "schizonts|malarial schizonts");  // 2026-11-10 · 3 players · Plasmodium stage
crowdAlias("Name a finding on a peripheral blood smear", "trypanosomes", "trypomastigotes");  // 2026-11-10 · 1 player · trypanosome stage
crowdAlias("Name a finding on a peripheral blood smear", "hemoglobin c crystals", "hbc crystals|hb c crystals");  // 2026-11-10 · 3 players · abbreviation
crowdAlias("Name a finding on a peripheral blood smear", "reticulocytosis", "reticulocytes");  // 2026-11-10 · 2 players · same
crowdAlias("Name a food high in purines (avoid with gout)", "shellfish", "seafood");  // 2026-11-10 · 1 player · seafood
crowdAlias("Name a genetic or molecular lab technique", "western blot", "western protein analysis");  // 2026-11-10 · 1 player · same
crowdAlias("Name a genetic or molecular lab technique", "immunohistochemistry", "immunostain|immunostaining");  // 2026-11-10 · 1 player · same
crowdAlias("Name a genetic or molecular lab technique", "plasmid prep", "plasmid amplification");  // 2026-11-10 · 1 player · same
crowdAlias("Name a healthcare profession", "speech therapist", "speech pathologist|speech language pathologist|slp");  // 2026-11-10 · 1 player · same
crowdAlias("Name a healthcare profession", "dietitian", "parenteral nutritionist");  // 2026-11-10 · 1 player · nutrition support dietitian
crowdAlias("Name a healthcare profession", "hospital administrator", "hospital manager");  // 2026-11-10 · 1 player · same
crowdAlias("Name a lab stain or culture medium", "hematoxylin and eosin", "haemoxylin|hematoxylin|haematoxylin");  // 2026-11-10 · 1 player · H&E
crowdAlias("Name a lab stain or culture medium", "acid fast stain", "ziehl neelsen|zeil neissen|zn stain");  // 2026-11-10 · 1 player · Ziehl-Neelsen
crowdAlias("Name a law or equation of physiology", "henderson hasselbalch equation", "henderson hassenlbach");  // 2026-11-10 · 1 player · misspelling
crowdAlias("Name a law or equation of physiology", "poiseuille law", "pouiselle|poiseuille");  // 2026-11-10 · 2 players · misspelling
crowdAlias("Name a lung disease", "alpha 1 antitrypsin deficiency", "a1 antitrypsin|a1at|aatd");  // 2026-11-10 · 2 players · abbreviation
crowdAlias("Name a lung disease", "silicosis", "pneumonoultramicroscopicsilicovolcanoconiosis");  // 2026-11-10 · 1 player · dictionary term for silicosis
crowdAlias("Name a medical imaging test", "fetal ultrasound", "morphology scan|anomaly scan|anatomy scan");  // 2026-11-10 · 1 player · 20-week scan
crowdAlias("Name a neurological disorder", "b12 deficiency neuropathy", "b12 demyelination|subacute combined degeneration");  // 2026-11-10 · 1 player · B12 demyelination
crowdAlias("Name a neurological disorder", "cidp", "chronic inflammatory demyelinating polyneuritis");  // 2026-11-10 · 1 player · same
crowdAlias("Name a neurological disorder", "lyme neuroborreliosis", "neuroborrealis|neuroborreliosis");  // 2026-11-10 · 1 player · misspelling
crowdAlias("Name a neurological disorder", "autoimmune encephalitis", "nmda encephalitis|anti nmda receptor encephalitis|anti nmda encephalitis");  // 2026-11-10 · 1 player · subtype
crowdAlias("Name a neurological disorder", "serotonin syndrome", "serotonin storm");  // 2026-11-10 · 1 player · same
crowdAlias("Name a neurological disorder", "wernicke encephalopathy", "wernicke korsakoff syndrome|wernivkes and korkoffs");  // 2026-11-10 · 1 player · Wernicke-Korsakoff
crowdAlias("Name a neurotransmitter", "2 ag", "2ag|2-arachidonoylglycerol");  // 2026-11-10 · 2 players · spelling
crowdAlias("Name a neurotransmitter", "acetylcholine", "ach");  // 2026-11-10 · 3 players · abbreviation
crowdAlias("Name a nursing action during a seizure", "time the seizure", "count seizure duration");  // 2026-11-10 · 1 player · same
crowdAlias("Name a nursing action during a seizure", "turn on side", "turn patient to the side");  // 2026-11-10 · 1 player · same
crowdAlias("Name a nursing job title or role", "icu nurse", "cvicu rn|cvicu nurse");  // 2026-11-10 · 1 player · ICU subtype
crowdAlias("Name a nursing specialty", "nurse anesthetist", "anaesthesia|anesthesia|anaesthetic nursing");  // 2026-11-10 · 1 player · anesthesia nursing
crowdAlias("Name a paraneoplastic syndrome", "anti hu", "anti-hu encephalitis|anti hu encephalitis");  // 2026-11-10 · 1 player · same
crowdAlias("Name a paraneoplastic syndrome", "erythrocytosis", "epo|epo secretion|ectopic epo");  // 2026-11-10 · 1 player · ectopic EPO
crowdAlias("Name a parasite that infects humans", "ascaris lumbricoides", "lumbricoides");  // 2026-11-10 · 1 player · species name
crowdAlias("Name a part of the brain", "cerebral aqueduct", "aquaduct|aqueduct");  // 2026-11-10 · 2 players · misspelling
crowdAlias("Name a part of the brain", "amygdala", "basolateral amygdala");  // 2026-11-10 · 1 player · subregion
crowdAlias("Name a patient safety or quality improvement term", "ssi", "postoperative infection|surgical site infection");  // 2026-11-10 · 1 player · same
crowdAlias("Name a postoperative complication", "blood clot", "vte|venous thromboembolism");  // 2026-11-10 · 1 player · same
crowdAlias("Name a preventive screening test", "aaa ultrasound", "triple a");  // 2026-11-10 · 1 player · same
crowdAlias("Name a preventive screening test", "cystic fibrosis screening", "cf|cf screening");  // 2026-11-10 · 1 player · abbreviation
crowdAlias("Name a protein in the human body", "amyloid", "amyloid precursor protein|app");  // 2026-11-10 · 1 player · precursor of amyloid beta
crowdAlias("Name a protein in the human body", "heat shock proteins", "hsbp90|hsp90|heat shock protein 90");  // 2026-11-10 · 1 player · HSP90
crowdAlias("Name a radiolucent jaw lesion", "odontogenic keratocyst", "okc");  // 2026-11-10 · 1 player · abbreviation
crowdAlias("Name a right of medication administration", "right education", "information|right information|right to information");  // 2026-11-10 · 1 player · right to information
crowdAlias("Name a risk factor for osteoporosis", "menopause", "estrogen deficiency|oestrogen deficiency");  // 2026-11-10 · 1 player · same mechanism
crowdAlias("Name a sign of aging", "muscle weakness", "weakness");  // 2026-11-10 · 4 players · same
crowdAlias("Name a sign of aging", "vision changes", "vision loss");  // 2026-11-10 · 3 players · same
crowdAlias("Name a sign of aging", "shuffling gait", "gait|gait changes");  // 2026-11-10 · 2 players · gait change
crowdAlias("Name a sign of liver failure or cirrhosis", "confusion", "encephalopathy|hepatic encephalopathy");  // 2026-11-10 · 1 player · hepatic encephalopathy
crowdAlias("Name a structure of the hand or wrist", "radiocarpal joint", "ellipsoid joint");  // 2026-11-10 · 1 player · wrist is ellipsoid joint
crowdAlias("Name a surgical procedure", "bilateral salpingo oophorectomy", "salpingooopherectomy|salpingo oophorectomy|salpingo-oophorectomy");  // 2026-11-10 · 1 player · misspelling
crowdAlias("Name a surgical procedure", "carotid stenting", "transcarotid artery revascularization|tcar");  // 2026-11-10 · 1 player · TCAR stenting
crowdAlias("Name a symptom of multiple sclerosis", "heat sensitivity", "heat intolerance");  // 2026-11-10 · 2 players · same
crowdAlias("Name a task an RN can delegate to a nursing assistant", "bed bath", "bedside washing");  // 2026-11-10 · 1 player · same
crowdAlias("Name a virus that infects humans", "colorado tick fever", "coltivirus");  // 2026-11-10 · 1 player · genus of CTF virus
crowdAlias("Name a virus that infects humans", "herpes", "hhv");  // 2026-11-10 · 2 players · human herpesvirus
crowdAlias("Name an artery", "iliac", "hypogastric|hypogastric artery");  // 2026-11-10 · 1 player · = internal iliac
crowdAlias("Name an artery", "superior pancreaticoduodenal", "pancreatoduodebal|pancreaticoduodenal");  // 2026-11-10 · 1 player · misspelling
crowdAlias("Name an artery", "popliteal", "popetial");  // 2026-11-10 · 1 player · misspelling
crowdAlias("Name an artery", "short posterior ciliary", "posterior cilliary|posterior ciliary");  // 2026-11-10 · 1 player · misspelling
crowdAlias("Name an autoantibody", "anti jo 1", "anti-jo|anti jo");  // 2026-11-10 · 1 player · same
crowdAlias("Name an autoantibody", "zinc transporter 8", "zinc transporter antibody|znt8");  // 2026-11-10 · 1 player · anti-ZnT8
crowdAlias("Name an autoantibody", "anti adamts13", "vwf metalloproteinase");  // 2026-11-10 · 1 player · anti-ADAMTS13 target
crowdAlias("Name an endocrine disorder", "diabetes insipidus", "water diabetes");  // 2026-11-10 · 1 player · plain English
crowdAlias("Name an eye disease or condition", "posterior vitreous detachment", "vitreous detachment");  // 2026-11-10 · 1 player · same
crowdAlias("Name an eye disease or condition", "behcet uveitis", "bechets|behcets");  // 2026-11-10 · 1 player · misspelling
crowdAlias("Name an infection a traveler could bring home", "enterotoxigenic e coli", "e coli");  // 2026-11-10 · 1 player · ETEC
crowdAlias("Name something found in a hospital room", "patient lift", "hoyer lift");  // 2026-11-10 · 1 player · brand

// ===== 2026-11-11 nightly review =====
crowd("Name a cause of infertility", 47, "hysterectomy");  // 2026-11-11 · 7 players · surgical sterility (like vasectomy)
crowdAlias("Name a cause of infertility", "anorexia nervosa", "annorexia|anorexia");  // 2026-11-11 · 1 player · misspelling
crowdAlias("Name a cause of infertility", "smoking", "nicotine");  // 2026-11-11 · 1 player · tobacco smoking
crowdAlias("Name a cause of infertility", "anabolic steroids", "steroids|sterioids");  // 2026-11-11 · 1 player · lay term/misspelling
crowd("Name a cause of muscle weakness", 59, "compartment syndrome");  // 2026-11-11 · 4 players · weakness/paralysis of compartment muscles
crowd("Name a cause of muscle weakness", 65, "acute disseminated encephalomyelitis|adem|acute disseminated encephalomyopathy");  // 2026-11-11 · 3 players · CNS demyelination with motor deficits
crowd("Name a cause of muscle weakness", 82, "anorexia nervosa|anorexia");  // 2026-11-11 · 1 player · proximal myopathy, electrolyte loss
crowd("Name a cause of muscle weakness", 82, "mixed connective tissue disease|mctd");  // 2026-11-11 · 1 player · inflammatory myositis is a feature
crowd("Name a cause of muscle weakness", 82, "pancoast tumor|pancoast tumour|superior sulcus tumor");  // 2026-11-11 · 1 player · C8-T1 plexus invasion, hand weakness
crowdAlias("Name a cause of muscle weakness", "malnutrition", "starvation syndrome|starvation");  // 2026-11-11 · 1 player · same thing
crowdAlias("Name a cause of muscle weakness", "spinal cord infarction", "spinal infarct|spinal cord infarct");  // 2026-11-11 · 2 players · same
crowdAlias("Name a law or equation of physiology", "ohm law", "ohm|ohms law|ohm's law");  // 2026-11-11 · 5 players · short form
crowdAlias("Name a law or equation of physiology", "le chatelier principle", "le chatlier|le chatelier");  // 2026-11-11 · 2 players · misspelling
crowdAlias("Name a law or equation of physiology", "bernoulli principle", "bernouli|bernoulli");  // 2026-11-11 · 2 players · misspelling
crowd("Name a cause of bleeding or easy bruising", 82, "anticoagulants|anticoagulant|blood thinner|blood thinners");  // 2026-11-11 · 1 player · drug class (like DOACs)
crowdAlias("Name a cause of bleeding or easy bruising", "senile purpura", "age|old age|aging");  // 2026-11-11 · 2 players · age-related skin fragility
crowdAlias("Name something that weakens the immune system", "tuberculosis", "tb");  // 2026-11-11 · 3 players · abbreviation
crowdAlias("Name something that weakens the immune system", "organ transplant drugs", "transplant|organ transplant");  // 2026-11-11 · 3 players · via immunosuppression
crowdAlias("Name something that weakens the immune system", "radiation", "radiotherapy");  // 2026-11-11 · 2 players · same
crowdAlias("Name something that weakens the immune system", "influenza", "flu");  // 2026-11-11 · 2 players · same
crowdAlias("Name something that weakens the immune system", "aging", "age|old age");  // 2026-11-11 · 2 players · immunosenescence
crowdAlias("Name something that raises blood pressure", "epinephrine", "adrenaline");  // 2026-11-11 · 3 players · same drug
crowdAlias("Name a structure of the hand or wrist", "flexor digitorum profundus", "digitorium profundus");  // 2026-11-11 · 1 player · misspelling
crowdAlias("Name a structure of the hand or wrist", "flexor retinaculum", "retinaculum");  // 2026-11-11 · 1 player · short form
crowdAlias("Name a structure of the hand or wrist", "scapholunate ligament", "schapolunate|scapholunate");  // 2026-11-11 · 1 player · misspelling
crowdAlias("Name a structure of the hand or wrist", "distal interphalangeal joints", "dip|dipj");  // 2026-11-11 · 2 players · abbreviation
crowdAlias("Name a sexually transmitted infection", "chancroid", "ducreyi|haemophilus ducreyi|h ducreyi");  // 2026-11-11 · 3 players · causative organism
crowd("Name a healthcare system or insurance term", 59, "hse|health service executive");  // 2026-11-11 · 4 players · Ireland's public health service
crowd("Name a healthcare system or insurance term", 72, "quality improvement|qi");  // 2026-11-11 · 2 players · core health-system term
crowd("Name a healthcare system or insurance term", 72, "nhs trust|trust|foundation trust");  // 2026-11-11 · 2 players · NHS organisational unit
crowd("Name a healthcare system or insurance term", 82, "beneficiary|beneficiaries");  // 2026-11-11 · 1 player · insured person (e.g. Medicare beneficiary)
crowdAlias("Name a healthcare system or insurance term", "primary care provider", "gp|general practitioner");  // 2026-11-11 · 2 players · UK term for PCP
crowdAlias("Name a symptom of PTSD", "aggression", "aggressive behaviors|aggressive behavior|aggressive behaviour");  // 2026-11-11 · 1 player · same
crowdAlias("Name a nonmedication comfort measure for pain", "tens unit", "electric stimulation|electrical stimulation|electrical nerve stimulation");  // 2026-11-11 · 1 player · same
crowd("Name a postoperative complication", 85, "vocal cord injury|vocal cord trauma|laryngeal injury|vocal cord trauma post extubation");  // 2026-11-11 · 1 player · intubation injury
crowdAlias("Name an infection a traveler could bring home", "schistosomiasis", "schistosoma japonicum|schistosomas japonia|s japonicum");  // 2026-11-11 · 1 player · species
crowdAlias("Name a genetic disorder", "bruton agammaglobulinemia", "xla|x linked agammaglobulinemia");  // 2026-11-11 · 2 players · same disease
crowdAlias("Name a blood test", "cmv serology", "cmv|cytomegalovirus");  // 2026-11-11 · 2 players · short form
crowdAlias("Name a component or cell of the blood", "b cells", "mature b cells");  // 2026-11-11 · 1 player · same

// ===== 2026-11-12 nightly review =====
crowdAlias("Name a cause of abnormal vaginal bleeding", "spontaneous abortion", "abortion");  // 2026-11-12 · 4 players · same entity
crowdAlias("Name a cause of abnormal vaginal bleeding", "cervical ectropion", "ectropion");  // 2026-11-12 · 4 players · same entity
crowdAlias("Name a cause of abnormal vaginal bleeding", "endometrial polyps", "polyps|polyp");  // 2026-11-12 · 5 players · same entity
crowdAlias("Name a cause of abnormal vaginal bleeding", "hemophilia carrier", "hemophilia|hemophila");  // 2026-11-12 · 1 player · same entity
crowd("Name a cause of abnormal vaginal bleeding", 66, "pregnancy|pregnancy related bleeding");  // 2026-11-12 · 3 players · first thing excluded in AUB workup
crowd("Name a cause of abnormal vaginal bleeding", 73, "sexually transmitted infection|sti|std|sexually transmitted disease");  // 2026-11-12 · 2 players · cervicitis-related bleeding
crowdAlias("Name a cause of erectile dysfunction", "ssris", "fluoxetine|prozac");  // 2026-11-12 · 4 players · SSRI
crowdAlias("Name a cause of erectile dysfunction", "depression", "mdd|major depressive disorder");  // 2026-11-12 · 1 player · same entity
crowdAlias("Name a cause of erectile dysfunction", "opioids", "tramadol");  // 2026-11-12 · 1 player · opioid
crowdAlias("Name a cause of erectile dysfunction", "atherosclerosis", "cardiovascular disease|cvd");  // 2026-11-12 · 1 player · vascular ED
crowd("Name a cause of erectile dysfunction", 83, "autonomic neuropathy|diabetic autonomic neuropathy");  // 2026-11-12 · 1 player · neurogenic ED
crowd("Name a cause of erectile dysfunction", 67, "medications|medication|drug induced");  // 2026-11-12 · 3 players · drug-induced ED
crowdAlias("Name something that raises blood pressure", "salt", "sodium");  // 2026-11-12 · 5 players · same thing
crowdAlias("Name something that raises blood pressure", "exercise", "workout|running");  // 2026-11-12 · 3 players · same thing
crowdAlias("Name something that raises blood pressure", "hyperaldosteronism", "aldosterone");  // 2026-11-12 · 5 players · aldosterone excess
crowdAlias("Name something that raises blood pressure", "cushing syndrome", "cortisol");  // 2026-11-12 · 4 players · cortisol excess
crowdAlias("Name something that raises blood pressure", "vasopressin", "adh|antidiuretic hormone");  // 2026-11-12 · 2 players · same hormone
crowdAlias("Name something that raises blood pressure", "hyperthyroidism", "graves|graves disease");  // 2026-11-12 · 2 players · cause of hyperthyroidism
crowdAlias("Name something that raises blood pressure", "kidney disease", "ckd|chronic kidney disease");  // 2026-11-12 · 2 players · same entity
crowd("Name something that raises blood pressure", 22, "renin angiotensin aldosterone system|raas|angiotensin|angiotensin ii|renin");  // 2026-11-12 · 7 players · core BP regulation
crowd("Name something that raises blood pressure", 26, "medications|medication|drug induced");  // 2026-11-12 · 6 players · drug-induced hypertension
crowd("Name something that raises blood pressure", 30, "stroke|acute stroke");  // 2026-11-12 · 5 players · acute hypertensive response in stroke
crowd("Name something that raises blood pressure", 65, "pyridostigmine|mestinon");  // 2026-11-12 · 1 player · used for neurogenic orthostatic hypotension
crowdAlias("Name a movement disorder", "drug induced parkinsonism", "pseudoparkinsonism");  // 2026-11-12 · 1 player · same entity
crowd("Name a section or element of a history and physical (H&P)", 66, "legal history|forensic history");  // 2026-11-12 · 3 players · psychiatric H&P element
crowdAlias("Name a foramen, canal or opening in the body", "foramen spinosum", "spinosum");  // 2026-11-12 · 3 players · same structure
crowdAlias("Name a foramen, canal or opening in the body", "external os", "cervical os");  // 2026-11-12 · 1 player · os of the cervix
crowd("Name a foramen, canal or opening in the body", 83, "saphenous opening|saphenous hiatus|fossa ovalis of the thigh");  // 2026-11-12 · 1 player · opening in fascia lata
crowdAlias("Name an ion channel, pump or transporter", "calcium-activated potassium channel", "bk channel|bigk|big k|maxi k channel");  // 2026-11-12 · 1 player · BK channel
crowdAlias("Name an ion channel, pump or transporter", "hcn channel", "funny channel|funny na|inward funny|funny current");  // 2026-11-12 · 3 players · If channel
crowdAlias("Name an ion channel, pump or transporter", "nkcc2", "nak2cl|na/k/cl|na k 2cl");  // 2026-11-12 · 3 players · Na-K-2Cl cotransporter
crowdAlias("Name an ion channel, pump or transporter", "clc chloride channel", "chloride channel");  // 2026-11-12 · 1 player · generic chloride channel
crowdAlias("Name an ion channel, pump or transporter", "cftr", "cystic fibrosis transport receptor");  // 2026-11-12 · 1 player · misnamed CFTR
crowdAlias("Name a cause of a neck mass", "thyroglossal duct cyst", "thyroglossal cyst");  // 2026-11-12 · 1 player · same entity
crowdAlias("Name a cause of a neck mass", "squamous cell carcinoma of the head and neck", "metastatic scc|metastatic squamous cell carcinoma");  // 2026-11-12 · 2 players · same entity
crowdAlias("Name a cause of chronic cough", "lung cancer", "adenocarcinoma|lung adenocarcinoma");  // 2026-11-12 · 2 players · lung cancer type
crowdAlias("Name a medical imaging test", "transvaginal ultrasound", "trans-vaginal us|transvaginal us|tvus");  // 2026-11-12 · 1 player · abbreviation
crowdAlias("Name a preventive screening test", "low dose ct", "lung ct|lung cancer screening ct");  // 2026-11-12 · 2 players · same test
crowdAlias("Name a common reason for a primary care visit", "birth control", "mirena coil|iud insertion|mirena");  // 2026-11-12 · 1 player · contraception visit
crowdAlias("Name a cause of heart failure", "tachycardia induced cardiomyopathy", "rate related|rate related cardiomyopathy");  // 2026-11-12 · 1 player · same entity
crowdAlias("Name a drug that causes tachycardia", "vilanterol", "anoro|anoro ellipta");  // 2026-11-12 · 1 player · brand containing vilanterol
crowdAlias("Name a healthcare profession", "tobacco treatment specialist", "smoking cessation counselor");  // 2026-11-12 · 1 player · same role
crowdAlias("Name a medical ethics or legal concept", "power of attorney", "poa");  // 2026-11-12 · 1 player · abbreviation
crowd("Name a genetic disorder", 65, "refsum disease|refsum");  // 2026-11-12 · 3 players · AR peroxisomal disorder (PHYH)
crowd("Name a genetics or inheritance term", 83, "haploid");  // 2026-11-12 · 1 player · single chromosome set
crowd("Name a heart condition", 82, "endocardial fibroelastosis");  // 2026-11-12 · 1 player · infantile cardiomyopathy
crowd("Name a medical ethics or legal concept", 68, "captain of the ship doctrine|captain of the ship");  // 2026-11-12 · 1 player · surgeon vicarious liability doctrine
crowd("Name a prodrug", 65, "irinotecan");  // 2026-11-12 · 2 players · converted to SN-38
crowd("Name a blood test", 84, "sflt-1/plgf ratio|soluble flt-1|sflt-1|sflt1 plgf ratio");  // 2026-11-12 · 1 player · FDA-cleared preeclampsia test
crowdAlias("Name a structure of the foot or ankle", "lateral malleolus", "malleolus");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a structure of the foot or ankle", "anterior talofibular ligament", "talofibular ligament|fibulotalar ligament");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a structure of the foot or ankle", "anterior inferior tibiofibular ligament", "anterior tibiofibular ligament");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a structure of the foot or ankle", "superior peroneal retinaculum", "fibular retinaculum");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a structure of the foot or ankle", "sesamoid bones of the foot", "sesame bones|sesmoid bones|sesamoid bones|sesamoids");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a structure of the foot or ankle", 93, "plantar veins|plantar vein");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a structure of the foot or ankle", "phalanges of the foot", "digit|digits");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a trigger of an asthma attack", "cigarette smoke", "smoke");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a trigger of an asthma attack", "stress", "anxiety");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a trigger of an asthma attack", "cockroaches", "cockroach feces");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a trigger of an asthma attack", "exercise", "activity");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a trigger of an asthma attack", "pollution", "bad air quality|poor air quality");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a trigger of an asthma attack", "beta blockers", "labetolol|labetalol");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a general pathology term", 88, "pedunculated|pedunculated polyp");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "anisopoikilocytosis");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "basophilic stippling");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a general pathology term", "apple-green birefringence", "birefringence");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a general pathology term", 93, "dacrocytes|dacrocyte|teardrop cells|teardrop cell");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "desquamation|desqaumization");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "herringbone pattern|herringbone");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "keratinization|keratinised|keratinized|keratinisation");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "leukopenia|leucopenia");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "pseudo pelger huet anomaly|pseudo-pelger-huet|pseudo pelger huet");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "schistocytes|schistocyte");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "sequestration");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "plexiform");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "vesicle");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a general pathology term", "differentiation", "well differentiated");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a general pathology term", 93, "tortuous|torturous|tortuosity");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "pathogenesis");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a general pathology term", 93, "gross pathology|gross|gross examination");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a receptor in the human body", "nicotinic acetylcholine receptor", "acetylcholine|acetylcholine receptor|acetylcholine recetor|aceytlcholine|acetycholine|ach receptor|achr");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a receptor in the human body", "cb1 cannabinoid receptor", "cannabinoid|canabinoid|cannabinoid receptor");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a receptor in the human body", 93, "g protein coupled receptor|gpcr|g protein-coupled receptor|gcouple protein receptor");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a receptor in the human body", 93, "mrgprx2");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a receptor in the human body", "nk1 receptor", "nk1");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a receptor in the human body", 93, "receptor tyrosine kinase|tyrosine kinase|rtk|tyrosine kinase receptor");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a receptor in the human body", "serotonin receptor", "serotonin");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a receptor in the human body", "beta-3 adrenergic receptor", "b3");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a cause of hypokalemia", "distal renal tubular acidosis", "renal tubular acidosis|rta");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a cause of hypokalemia", "primary hyperaldosteronism", "hyperaldosteronism");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a cause of hypokalemia", 93, "abiraterone");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a cause of hypokalemia", "vitamin b12 therapy", "b12 administration");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a cause of hypokalemia", "diabetic ketoacidosis", "ketoacidosis");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a cause of hypokalemia", "hypokalemic periodic paralysis", "periodic paralysis");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a cause of respiratory acidosis or alkalosis", "guillain barre syndrome", "guillane barre");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a cause of respiratory acidosis or alkalosis", 81, "increased intracranial pressure|increased icp|raised icp|elevated icp");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a complication of preterm birth", 83, "low birth weight|lbw|low weight|underweight");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a complication of preterm birth", "respiratory distress syndrome", "lung immaturity|underdeveloped lungs|lack of surfactant");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a complication of preterm birth", 83, "transient tachypnea of the newborn|ttn|transient tachypnea|ttnb");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a complication of obesity", "high blood pressure", "htn");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a complication of obesity", "heart failure", "chf");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a complication of obesity", "heart disease", "athersclerosis|atherosclerosis");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a complication of obesity", "venous stasis", "stasis dermatitis");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a complication of obesity", "cirrhosis", "liver failure");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a complication of a burn injury", 81, "third spacing|3rd spacing|fluid shifts|capillary leak");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a complication of a burn injury", 81, "electrolyte imbalance|electrolyte abnormalities");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a complication of a burn injury", 81, "immunosuppression|lower immunity|immune suppression");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a course or subject in dental school", "radiology", "dental radiography");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a course or subject in dental school", "anatomy", "cadaver lab");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a drug metabolized by CYP3A4", 63, "suzetrigine|journavx");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a drug that causes anemia", 85, "cladribine");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a drug that causes dry mouth", 85, "amphetamine|adderall|amphetamines");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a drug that causes dry mouth", 85, "methylphenidate|ritalin|concerta");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a drug that causes gynecomastia", "anabolic steroids", "testosterone|exogenous testosterone");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a drug that causes hyperkalemia", "ace inhibitors", "enalapril");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a drug that causes vision problems", 85, "eltrombopag|promacta");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a drug that comes as an oral liquid", 61, "pantoprazole|protonix");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a drug that comes as an oral liquid", 61, "edaravone|radicava ors");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a food high in potassium", 85, "asparagus");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a food high in potassium", "spinach", "leafy greens");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a medical abbreviation", 63, "ac hs|achs");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a medical abbreviation", 63, "all");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a medical abbreviation", 63, "lbbb");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a medical abbreviation", 63, "rbbb");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a medical abbreviation", 63, "mcl");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a medical abbreviation", 63, "moca");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a medical sign or term named after a food", 80, "beefy red tongue|beefy tongue");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a medical sign or term named after a food", "cherry red spot", "cherry red macula");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a medical sign or term named after a food", 80, "hot cross bun sign|hot cross bun");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a mental health disorder", "histrionic personality", "histronic personality disorder");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a microbiology identification test", "koh prep", "koh");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a microbiology identification test", "h pylori stool antigen", "h pylori antigen|stool antigen test");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a nutrient deficiency disease", "iron deficiency", "low iron");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a painkiller", "oxycodone", "oxy");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a part of the brain", "habenula", "lateral habenula|lateral habnecula");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a poisoning or toxic exposure", 93, "amanita mushroom poisoning|amanitin|alpha amanitin|alpha amantin|amantin|death cap mushroom");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a poisoning or toxic exposure", 93, "asbestos|absestos");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a poisoning or toxic exposure", 93, "benzene");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a poisoning or toxic exposure", 93, "beryllium|berylliosis");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a poisoning or toxic exposure", "botulism", "botox");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a poisoning or toxic exposure", "organophosphate poisoning", "pesticide|pesticides");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a poisoning or toxic exposure", "pufferfish poisoning", "pufferfish toxin|ttx");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a poisoning or toxic exposure", 93, "radon");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a poisoning or toxic exposure", 93, "silver|argyria");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a poisoning or toxic exposure", "aspirin overdose", "asa");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a poisoning or toxic exposure", "acetaminophen overdose", "nap qi|napqi");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a postoperative complication", "wound dehiscence", "dehiscence");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a sign of a concussion or traumatic brain injury", "confusion", "ams|altered mental status");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a sign of a concussion or traumatic brain injury", "sensitivity to light", "photosensitivity");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a sign of a concussion or traumatic brain injury", "slurred speech", "sluring|slurring");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a sign of a concussion or traumatic brain injury", 81, "impaired judgment|impaired judgement|poor judgment");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a sign of a concussion or traumatic brain injury", "blurred vision", "vision loss");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a sign of a concussion or traumatic brain injury", "dilated pupil", "pupil dialation|pupil dilation");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a sign of a urinary tract infection", "foul smelling urine", "smell|smelly urine");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a sign of dehydration", "poor skin turgor", "decreased skin turgor|tugor|turgor");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a sign of sepsis", "respiratory rate above 20", "increased respiratory rate");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a symptom of low blood sugar", "confusion", "change in loc");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a type of wound", "pressure injury", "ulcer|sacral wound");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a type of wound", "dirty wound", "septic wound");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a type of wound", "abrasion", "corneal abrasion");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name an anatomical landmark used in physical exams or procedures", "inion", "occipital protuberance");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name an anatomical landmark used in physical exams or procedures", 81, "lateral process of the malleus|lateral process of malleus|short process of the malleus");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name an endodontic term", 85, "parulis|gum boil");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name an eye disease or condition", "herpes simplex keratitis", "ocular herpes|herpes keratitis|hsv keratitis");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name an eye disease or condition", 85, "bietti crystalline dystrophy|bietti");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name an eye disease or condition", "diabetic retinopathy", "diabetes eye disease");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name an instruction given after a tooth extraction", "bite on a tea bag", "apply tea bag");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name an instruction given after a tooth extraction", "avoid carbonated drinks", "no bubbly drinks");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name an item on a crash cart", "endotracheal tube", "intubation tube");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name an item on a crash cart", "intubation supplies", "airway box");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name an oral surgery procedure", "bone graft", "graft");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name an orthopedic or musculoskeletal exam test", "empty can test", "beer can|empty beer can");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name an orthopedic or musculoskeletal exam test", "neer test", "neer hawkins");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name an orthopedic or musculoskeletal exam test", "valgus stress test", "valgus test");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name an osteopathic (OMM/OMT) technique or term", "layer by layer palpation", "palpation");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name an osteopathic (OMM/OMT) technique or term", 93, "perpendicular stretch|perpendicular traction");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name an osteopathic (OMM/OMT) technique or term", 93, "creep|myofascial creep");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name something found in a hospital room", "bedpan", "bathpan");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name something found in a hospital room", 63, "pill crusher");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a cause of a neck mass", "virchow node", "supraclavicular lymph adenopathy|supraclavicular lymphadenopathy");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a cause of acute pancreatitis", "glp 1 agonists", "glp-1 analogs|glp 1 analogs");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a cause of bad breath", "periodontitis", "peridontal desise");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a cause of bad breath", "alcohol", "beer");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a cause of constipation", "opioids", "opiates");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a cause of eosinophilia", 85, "hyper ige syndrome|job syndrome|hyper ige");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a sexually transmitted infection", "chlamydia", "climayda");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a nursing intervention to prevent postoperative complications", "early ambulation", "walking");  // 2026-11-13 · TikTok-day review · same answer
crowd("Name a restraint or restraint alternative", 61, "therapeutic communication");  // 2026-11-13 · TikTok-day review · player suggestion
crowd("Name a ligament or tendon", 87, "cuboideonavicular ligament|navicular cuboid ligament");  // 2026-11-13 · TikTok-day review · player suggestion
crowdAlias("Name a parasite that infects humans", "dirofilaria", "heartworm|hearworm");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a danger sign in pregnancy", "vaginal bleeding", "hemorrhage");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a drug or supplement that treats anemia", "iron", "iron pill");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a classic histopathology finding", "perivascular pseudorosettes", "pseudorosettes");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a classic histopathology finding", "owl's eye inclusions", "owl sign");  // 2026-11-13 · TikTok-day review · same answer
crowdAlias("Name a classic histopathology finding", "podocyte effacement", "effacement of the podocyte foot processes");  // 2026-11-13 · TikTok-day review · same answer

// ===== 2026-11-14 nightly review =====
crowdAlias("Name a bacterium that causes disease in humans", "clostridium difficile", "cdif");  // 2026-11-14 · 1 player · misspelling of C. diff
crowdAlias("Name a blood test", "beta hydroxybutyrate", "beta hydroxybutyric acid|beta-hydroxybutyric acid");  // 2026-11-14 · 1 player · same answer
crowdAlias("Name a blood test", "crp", "cardiac reactive protien|cardiac c reactive protein|cardiac crp");  // 2026-11-14 · 1 player · cardio CRP = hs-CRP
crowd("Name a cardiovascular physiology term", 67, "vo2 max|vo2max|maximal oxygen consumption");  // 2026-11-14 · 1 player · exercise cardiovascular physiology (Fick)
crowdAlias("Name a cause of ST elevation", "prinzmetal angina", "vasospastic angina|variant angina");  // 2026-11-14 · 3 players · same answer
crowdAlias("Name a cause of a neck mass", "non hodgkin lymphoma", "lymphoma");  // 2026-11-14 · 4 players · generic lymphoma
crowdAlias("Name a cause of acute pancreatitis", "pancreas divisum", "pacreatic divisium|pancreatic divisum");  // 2026-11-14 · 1 player · misspelling
crowdAlias("Name a cause of chronic cough", "lung cancer", "cancer");  // 2026-11-14 · 6 players · cancer causing chronic cough = lung cancer
crowdAlias("Name a cause of constipation", "bowel obstruction", "blockage|obstruction|intestinal blockage|intestinal obstruction|bowel blockage");  // 2026-11-14 · 8 players · same answer
crowdAlias("Name a cause of constipation", "low fiber diet", "lack of fiber|lack of fiber in diet|not enough fiber");  // 2026-11-14 · 6 players · same answer
crowdAlias("Name a cause of constipation", "fecal impaction", "impaction");  // 2026-11-14 · 4 players · same answer
crowdAlias("Name a cause of constipation", "opioids", "opiod misuse|opioid misuse|opioid use");  // 2026-11-14 · 1 player · same answer
crowd("Name a cause of constipation", 86, "glp-1 agonists|glp 1 agonists|glp-1 receptor agonists|semaglutide|ozempic|tirzepatide|glp-1");  // 2026-11-14 · 1 player · constipation in GLP-1 RA labeling
crowdAlias("Name a cause of eosinophilia", "eosinophilic esophagitis", "eospihnlei esphagiits");  // 2026-11-14 · 1 player · misspelling
crowdAlias("Name a cause of eosinophilia", "allergies", "type 1 hypersensitivity|type i hypersensitivity");  // 2026-11-14 · 1 player · allergy = type I hypersensitivity
crowdAlias("Name a cause of hemolytic anemia", "hereditary spherocytosis", "spherocytosis");  // 2026-11-14 · 3 players · same answer
crowdAlias("Name a cause of hypokalemia", "recovery phase of acute tubular necrosis", "acute tubular necrosis|atn");  // 2026-11-14 · 3 players · polyuric ATN recovery
crowdAlias("Name a cause of hypokalemia", "osmotic diuresis", "hhs|hyperosmolar hyperglycemic state");  // 2026-11-14 · 3 players · K loss via osmotic diuresis
crowd("Name a cause of hypokalemia", 68, "myocardial infarction|mi|heart attack|acute coronary ischemia");  // 2026-11-14 · 13 players · stress catecholamine shift (Harrison table)
crowdAlias("Name a complication of immobility", "muscle atrophy", "atrophy");  // 2026-11-14 · 4 players · same answer
crowdAlias("Name a complication of obesity", "sleep apnea", "osa|obstructive sleep apnea");  // 2026-11-14 · 4 players · same answer
crowd("Name a complication of obesity", 61, "edema|leg swelling|lower extremity edema");  // 2026-11-14 · 6 players · dependent edema of obesity
crowd("Name a general pathology term", 84, "eosinophilia");  // 2026-11-14 · 5 players · hematologic pathology term like leukocytosis
crowd("Name a general pathology term", 89, "etiology|aetiology");  // 2026-11-14 · 3 players · core general pathology term
crowdAlias("Name a medical sign or term named after a food", "beefy red tongue", "beef|beefy tongue");  // 2026-11-14 · 5 players · same answer
crowdAlias("Name a medical sign or term named after a food", "doughnut sign", "donut|donut sign");  // 2026-11-14 · 4 players · same answer
crowd("Name a medical sign or term named after a food", 49, "carrot stick fracture|carrot stick|carrot");  // 2026-11-14 · 9 players · ankylosing spondylitis spine fracture sign
crowd("Name a medical sign or term named after a food", 57, "pizza pie retinopathy|pizza pie fundus|pizza pie appearance|pizza");  // 2026-11-14 · 6 players · CMV retinitis appearance
crowd("Name a medical sign or term named after a food", 61, "adam's apple|adams apple|laryngeal prominence");  // 2026-11-14 · 5 players · named after the apple
crowd("Name a medical sign or term named after a food", 71, "botulism");  // 2026-11-14 · 3 players · botulus = Latin sausage
crowd("Name a medical sign or term named after a food", 71, "fried egg appearance|fried egg cells|fried egg");  // 2026-11-14 · 3 players · oligodendroglioma/seminoma histology
crowd("Name a medical sign or term named after a food", 71, "sandwich vertebra|sandwich sign|sandwich vertebrae|sandwich");  // 2026-11-14 · 3 players · osteopetrosis / mesenteric lymphoma signs
crowdAlias("Name a nursing intervention to prevent postoperative complications", "early ambulation", "mobility|mobilization");  // 2026-11-14 · 4 players · same answer
crowdAlias("Name a nursing intervention to prevent postoperative complications", "encourage fluids", "fluids");  // 2026-11-14 · 3 players · same answer
crowdAlias("Name a nursing intervention to prevent postoperative complications", "turning and repositioning", "positioning|q2 turns");  // 2026-11-14 · 2 players · same answer
crowdAlias("Name a poisoning or toxic exposure", "dioxin", "agent orange");  // 2026-11-14 · 5 players · same answer
crowdAlias("Name a poisoning or toxic exposure", "amanita mushroom poisoning", "mushroom|mushroom poisoning");  // 2026-11-14 · 4 players · same answer
crowdAlias("Name a poisoning or toxic exposure", "asbestos", "asbestosis");  // 2026-11-14 · 3 players · same answer
crowd("Name a poisoning or toxic exposure", 79, "simple asphyxiant|nitrogen|argon|nitrogen asphyxiation|helium");  // 2026-11-14 · 7 players · simple asphyxiant gases
crowd("Name a poisoning or toxic exposure", 83, "carbon dioxide poisoning|co2 poisoning|co2|carbon dioxide");  // 2026-11-14 · 5 players · CO2 toxicity/asphyxia
crowd("Name a poisoning or toxic exposure", 83, "silica|crystalline silica|silica dust|quartz");  // 2026-11-14 · 5 players · occupational silica exposure
crowd("Name a poisoning or toxic exposure", 88, "cholinergic toxicity|cholinergic toxidrome|cholinergic crisis|cholinergic");  // 2026-11-14 · 3 players · cholinergic toxidrome
crowd("Name a poisoning or toxic exposure", 88, "oxygen toxicity|oxygen");  // 2026-11-14 · 3 players · pulmonary/CNS oxygen toxicity
crowdAlias("Name a receptor in the human body", "nicotinic acetylcholine receptor", "ach|ach receptor");  // 2026-11-14 · 6 players · same answer
crowdAlias("Name a receptor in the human body", "ldl receptor", "ldl");  // 2026-11-14 · 4 players · same answer
crowdAlias("Name a receptor in the human body", "glp-1 receptor", "glp|glp1");  // 2026-11-14 · 3 players · same answer
crowdAlias("Name a sign of a concussion or traumatic brain injury", "increased intracranial pressure", "icp|increased icp");  // 2026-11-14 · 8 players · same answer
crowdAlias("Name a structure of the foot or ankle", "phalanges of the foot", "toe|toes");  // 2026-11-14 · 6 players · same answer
crowdAlias("Name a structure of the knee", "prepatellar bursa", "bursa");  // 2026-11-14 · 4 players · same answer
crowdAlias("Name a trigger of an asthma attack", "cold air", "cold weather");  // 2026-11-14 · 5 players · same answer
crowdAlias("Name a type of IV fluid", "half normal saline", "ns .45|0.45% nss|0.45 ns|0.45% ns");  // 2026-11-14 · 2 players · same answer
crowdAlias("Name a type of wound", "pressure injury", "decubitus ulcer|satge four prssue sore|stage four prssue sour|decubitus");  // 2026-11-14 · 5 players · same answer
crowdAlias("Name an item on a crash cart", "ekg leads", "ekg");  // 2026-11-14 · 4 players · same answer
crowdAlias("Name an item on a crash cart", "epinephrine", "epipen");  // 2026-11-14 · 3 players · same answer
crowdAlias("Name an orthopedic or musculoskeletal exam test", "anterior drawer test", "drawer|drawer test");  // 2026-11-14 · 5 players · same answer
crowdAlias("Name an orthopedic or musculoskeletal exam test", "romberg test", "rhomberg");  // 2026-11-14 · 3 players · same answer
crowd("Name an orthopedic or musculoskeletal exam test", 49, "deep tendon reflexes|reflexes|reflex|dtr|patellar reflex|knee jerk|knee reflex|brachioradialis reflex");  // 2026-11-14 · 38 players · reflex testing in MSK/neuro exam
crowd("Name an orthopedic or musculoskeletal exam test", 89, "manual muscle testing|strength testing|strength");  // 2026-11-14 · 3 players · standard MSK exam
crowdAlias("Name an osteopathic (OMM/OMT) technique or term", "lymphatic pump", "lymphatic drainage");  // 2026-11-14 · 4 players · same answer
crowd("Name an osteopathic (OMM/OMT) technique or term", 83, "percussion vibrator|percussion|fulford percussion");  // 2026-11-14 · 5 players · Fulford percussion vibrator technique

// ===== 2026-11-15 nightly review =====
crowdAlias("Name a trigger of a migraine", "bright lights", "light|lights");  // 2026-11-15 · 20 players · same trigger
crowdAlias("Name a complication of mechanical ventilation", "ventilator associated pneumonia", "pneumonia|pneomonia|pnuemonia");  // 2026-11-15 · 13 players · = VAP
crowd("Name a medical sign or term named after an animal", 31, "cauda equina|horse tail|horses tail");  // 2026-11-15 · 13 players · Latin 'horse tail'
crowd("Name an obstetric or gynecologic procedure", 64, "transvaginal ultrasound|transvaginal ultrasonography|transvaginal sonography|tvus|ultrasound|pelvic ultrasound|obstetric ultrasound");  // 2026-11-15 · 12 players · standard OB/GYN procedure
crowdAlias("Name a cause of crooked teeth", "injury", "trauma|dental trauma");  // 2026-11-15 · 11 players · same cause
crowdAlias("Name a structure of the knee", "medial meniscus", "meniscus|menisci");  // 2026-11-15 · 11 players · umbrella term
crowdAlias("Name a side effect of antidepressants", "suicidal thoughts", "suicidal ideation|suicide");  // 2026-11-15 · 10 players · boxed-warning suicidality
crowdAlias("Name a healthcare profession", "anesthesiologist assistant", "anesthesia assistant|caa|certified anesthesiology assistant|certified anesthesiologist assistant");  // 2026-11-15 · 9 players · same profession
crowdAlias("Name a cell signaling pathway or second messenger", "jak-stat pathway", "jak");  // 2026-11-15 · 8 players · JAK = JAK-STAT
crowd("Name a cause of eosinophilia", 16, "acute interstitial nephritis|ain|interstitial nephritis|allergic interstitial nephritis");  // 2026-11-15 · 8 players · classic drug-induced eosinophilia
crowdAlias("Name a trigger of a migraine", "strong smells", "smell|scent|scents");  // 2026-11-15 · 6 players · same trigger
crowdAlias("Name an obstetric or gynecologic procedure", "ovarian cystectomy", "teratoma removal|teratoma excision|ovarian cyst removal|dermoid cyst removal");  // 2026-11-15 · 6 players · cystectomy
crowdAlias("Name a poisoning or toxic exposure", "carbon monoxide poisoning", "monoxide|co");  // 2026-11-15 · 6 players · CO poisoning
crowdAlias("Name a complication of dental implants", "peri implant mucositis", "gingivitis");  // 2026-11-15 · 5 players · implant analogue of gingivitis
crowdAlias("Name an obstetric or gynecologic procedure", "iud insertion", "iud");  // 2026-11-15 · 5 players · same procedure
crowd("Name a resuscitation step, drug or term (BLS, ACLS, PALS or ATLS)", 77, "scene safety|ensure scene safety|verify scene safety|scene safe|safety");  // 2026-11-15 · 5 players · first BLS step
crowdAlias("Name a cell signaling pathway or second messenger", "ras pathway", "kras|k-ras");  // 2026-11-15 · 4 players · KRAS is a RAS protein
crowdAlias("Name an obstetric or gynecologic procedure", "pap smear", "pap");  // 2026-11-15 · 4 players · same procedure
crowdAlias("Name an obstetric or gynecologic procedure", "colporrhaphy", "prolapse repair|pelvic organ prolapse repair");  // 2026-11-15 · 4 players · anterior/posterior repair
crowdAlias("Name a risk factor for infection", "older age", "age|advanced age");  // 2026-11-15 · 4 players · age extremes
crowdAlias("Name a cause of hypokalemia", "insulin", "hyperinsulinemia");  // 2026-11-15 · 4 players · insulin shifts K into cells
crowdAlias("Name a complication of high blood pressure", "stroke", "cva");  // 2026-11-15 · 4 players · CVA = stroke
crowdAlias("Name a complication of high blood pressure", "kidney disease", "ckd");  // 2026-11-15 · 4 players · abbreviation
crowdAlias("Name a cause of low oxygen saturation", "airway obstruction", "obstruction");  // 2026-11-15 · 4 players · airway obstruction
crowdAlias("Name a preventive screening test", "std testing", "std");  // 2026-11-15 · 4 players · same test
crowdAlias("Name a complication of immobility", "pressure injury", "ulcers|sores");  // 2026-11-15 · 4 players · pressure ulcers
crowd("Name a medical sign or term named after an animal", 58, "dog ear|dog ear deformity|dog ears|dog-ear");  // 2026-11-15 · 4 players · surgical dog-ear deformity
crowdAlias("Name a cause of granulomatous inflammation", "granulomatosis with polyangiitis", "polyangitis|polyangiitis");  // 2026-11-15 · 3 players · misspelling/short form of GPA
crowdAlias("Name a cause of granulomatous inflammation", "foreign body reaction", "splinter|wood splinter");  // 2026-11-15 · 3 players · splinter = foreign body granuloma
crowdAlias("Name an obstetric or gynecologic procedure", "endometrial biopsy", "uterine biopsy");  // 2026-11-15 · 3 players · same procedure
crowdAlias("Name a complication of high blood pressure", "left ventricular hypertrophy", "hypertrophy|heart hypertrophy");  // 2026-11-15 · 3 players · LVH
crowdAlias("Name a structure of the hip or thigh", "superior gemellus", "gemelli|gemellus");  // 2026-11-15 · 3 players · gemelli muscles
crowdAlias("Name a structure of the hip or thigh", "acetabulum", "socket");  // 2026-11-15 · 3 players · hip socket
crowdAlias("Name a drug given by IV push", "epinephrine", "epi");  // 2026-11-15 · 3 players · abbreviation
crowdAlias("Name a sign of a concussion or traumatic brain injury", "unequal pupils", "uneven pupils");  // 2026-11-15 · 3 players · anisocoria
crowdAlias("Name a newborn assessment or procedure", "rsv antibody", "rsv|rsv immunization");  // 2026-11-15 · 3 players · RSV prophylaxis
crowdAlias("Name a medical document or form", "dnr order", "dnr");  // 2026-11-15 · 3 players · same form
crowdAlias("Name a disease linked to an HLA type", "acute anterior uveitis", "anterior uveitis");  // 2026-11-15 · 3 players · HLA-B27
crowdAlias("Name a symptom of a heart attack", "shortness of breath", "sob");  // 2026-11-15 · 3 players · abbreviation
crowdAlias("Name something in a first aid kit", "epinephrine", "adrenaline");  // 2026-11-15 · 3 players · same item
crowdAlias("Name something in a first aid kit", "cpr mask", "mask");  // 2026-11-15 · 3 players · CPR mask
crowdAlias("Name something in a first aid kit", "elastic bandage", "wrap|elastic wrap");  // 2026-11-15 · 3 players · same item
crowdAlias("Name a right of medication administration", "right to refuse", "refusal");  // 2026-11-15 · 3 players · same right
crowdAlias("Name a sign of sepsis", "high white count", "high wbc");  // 2026-11-15 · 3 players · leukocytosis
crowdAlias("Name a cause of nephrotic syndrome", "lupus", "sle");  // 2026-11-15 · 3 players · lupus nephritis
crowdAlias("Name a cause of neutropenia", "viral infection", "infection");  // 2026-11-15 · 3 players · infection
crowdAlias("Name a medical sign or term named after an animal", "cat scratch fever", "cat scratch disease");  // 2026-11-15 · 3 players · same
crowd("Name a medical sign or term named after an animal", 64, "pes anserinus|pes anserine|goose foot|pes ansinus");  // 2026-11-15 · 3 players · Latin 'goose foot'
crowd("Name a poisoning or toxic exposure", 88, "bleach|sodium hypochlorite|hypochlorite|bleach ingestion");  // 2026-11-15 · 3 players · common household poisoning
crowdAlias("Name a complication of mechanical ventilation", "vocal cord damage", "vocal cord trauma|vocal chord|vocal cord injury");  // 2026-11-15 · 2 players · same complication
crowdAlias("Name an obstetric or gynecologic procedure", "dilation and curettage", "curetage|curettage|dnc");  // 2026-11-15 · 2 players · same procedure
crowdAlias("Name a risk factor for infection", "indwelling urinary catheter", "catheter|indwelling catheter");  // 2026-11-15 · 2 players · indwelling device
crowdAlias("Name a cause of hypokalemia", "gitelman syndrome", "gittleman");  // 2026-11-15 · 2 players · misspelling
crowdAlias("Name a postpartum assessment", "postpartum depression screening", "ppd|9hpq|phq-9|phq9|epds");  // 2026-11-15 · 2 players · PPD/PHQ-9 screening
crowdAlias("Name a preventive screening test", "clinical breast exam", "breast exam");  // 2026-11-15 · 2 players · same test
crowdAlias("Name a preventive screening test", "skin check", "total body skin checks|total body skin chec|total body skin check");  // 2026-11-15 · 2 players · same test
crowdAlias("Name a resuscitation step, drug or term (BLS, ACLS, PALS or ATLS)", "sodium bicarbonate", "bicarbonate");  // 2026-11-15 · 2 players · same drug
crowdAlias("Name a structure of the knee", "medial patellofemoral ligament", "patellofemoral ligament");  // 2026-11-15 · 2 players · same ligament
crowdAlias("Name a poisoning or toxic exposure", "boric acid", "boron|boron poisoning");  // 2026-11-15 · 2 players · boric acid/borate
crowdAlias("Name something in a first aid kit", "pain reliever", "pain killer|painkiller|painkillers");  // 2026-11-15 · 2 players · same item

// ===== 2026-11-16 nightly review =====
crowdAlias("Name a bacterial toxin or virulence factor", "botulinum neurotoxin", "botulinum|botox");  // 2026-11-16 · 4 players · same toxin
crowdAlias("Name a bacterial toxin or virulence factor", "toxin b of c difficile", "cytotoxin b");  // 2026-11-16 · 1 player · C. diff toxin B
crowdAlias("Name a bacterial toxin or virulence factor", "tracheal cytotoxin", "tracheal toxin");  // 2026-11-16 · 1 player · same toxin
crowdAlias("Name a blood test", "peripheral blood smear", "peripheral smear");  // 2026-11-16 · 1 player · same test
crowdAlias("Name a blood test", "von willebrand", "ristocetin|ristocetin test|ristocetin cofactor");  // 2026-11-16 · 2 players · vWF activity assay
crowdAlias("Name a cardiovascular physiology term", "funny current", "funny ion channel|funny channel");  // 2026-11-16 · 1 player · same term
crowdAlias("Name a cardiovascular physiology term", "subendocardial perfusion", "sevr|subendocardial viability ratio");  // 2026-11-16 · 1 player · index of subendocardial perfusion
crowdAlias("Name a cardiovascular physiology term", "phase 0", "depolarization");  // 2026-11-16 · 1 player · rapid depolarization
crowdAlias("Name a cause of acute pancreatitis", "pancreas divisum", "divisum");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of bradycardia", "athletic heart", "exercise|athletic training");  // 2026-11-16 · 2 players · athletic conditioning
crowdAlias("Name a cause of bradycardia", "sick sinus syndrome", "tachy brady syndrome|tachy-brady syndrome|tachycardia bradycardia syndrome");  // 2026-11-16 · 1 player · SSS variant
crowdAlias("Name a cause of bradycardia", "opioids", "opioid overdose");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of chronic cough", "heart failure", "chf");  // 2026-11-16 · 2 players · same
crowdAlias("Name a cause of crooked teeth", "wisdom teeth", "erupting wisdom teeth");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of eosinophilia", "acute interstitial nephritis", "drug induced allergic nephritis");  // 2026-11-16 · 1 player · same entity
crowdAlias("Name a cause of eosinophilia", "allergies", "type 1 allergic reaction");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of granulomatous inflammation", "crohn disease", "crohn'd");  // 2026-11-16 · 1 player · typo
crowdAlias("Name a cause of hearing loss", "ototoxic drugs", "ototoxic med|ototoxic meds");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of heart failure", "atrial septal defect", "atrial defect");  // 2026-11-16 · 2 players · same
crowdAlias("Name a cause of heart failure", "dilated cardiomyopathy", "cardiomyopathy");  // 2026-11-16 · 2 players · generic -> commonest type
crowdAlias("Name a cause of hemolytic anemia", "babesia", "babesiosis");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of high blood sugar", "steroids", "methylyprednisolone|methylprednisolone");  // 2026-11-16 · 1 player · steroid
crowdAlias("Name a cause of hypokalemia", "loop diuretics", "diuretic use|diuretics");  // 2026-11-16 · 1 player · diuretics
crowdAlias("Name a cause of hypokalemia", "liddle syndrome", "liddel");  // 2026-11-16 · 1 player · typo
crowdAlias("Name a cause of hyponatremia", "adrenal insufficiency", "addisons disease|addison disease");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of hypotension", "atrial fibrillation with rvr", "afib with rvr");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of hypotension", "cardiac tamponade", "free wall rupture|ventricular free wall rupture");  // 2026-11-16 · 1 player · causes tamponade
crowdAlias("Name a cause of hypotension", "burns", "second-degree burn|second degree burn");  // 2026-11-16 · 1 player · burn
crowdAlias("Name a cause of low blood sugar", "npo status", "npo");  // 2026-11-16 · 3 players · same
crowdAlias("Name a cause of low blood sugar", "skipping meals", "decreased intake");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of low blood sugar", "too much insulin", "insilin");  // 2026-11-16 · 1 player · typo
crowdAlias("Name a cause of low oxygen saturation", "anaphylaxis", "allergic reaction");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of low oxygen saturation", "hypoventilation", "respiratory depression");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of nephrotic syndrome", "hepatitis c", "hcv");  // 2026-11-16 · 1 player · abbreviation
crowdAlias("Name a cause of neutropenia", "acute myeloid leukemia", "leukemia");  // 2026-11-16 · 17 players · generic leukemia
crowdAlias("Name a cause of neutropenia", "bone marrow infiltration", "bone marrow cancer");  // 2026-11-16 · 1 player · same mechanism
crowdAlias("Name a cause of neutropenia", "chronic idiopathic neutropenia", "idiopathic");  // 2026-11-16 · 4 players · same
crowdAlias("Name a cause of neutropenia", "viral infection", "postviral|post viral");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of neutropenia", "autoimmune neutropenia", "immune|immune mediated");  // 2026-11-16 · 2 players · same
crowdAlias("Name a cause of pulmonary hypertension", "idiopathic pulmonary fibrosis", "fibrosis");  // 2026-11-16 · 6 players · same
crowdAlias("Name a cause of pulmonary hypertension", "chronic thromboembolic pulmonary hypertension", "embolism|clots");  // 2026-11-16 · 6 players · thromboembolic PH
crowdAlias("Name a cause of pulmonary hypertension", "heritable pulmonary arterial hypertension", "genetic");  // 2026-11-16 · 3 players · same
crowdAlias("Name a cause of pulmonary hypertension", "eisenmenger syndrome", "shunt");  // 2026-11-16 · 3 players · shunt-related PAH
crowdAlias("Name a cause of pulmonary hypertension", "transposition of the great arteries", "transposition of greater arteries");  // 2026-11-16 · 1 player · typo
crowdAlias("Name a cause of pulmonary hypertension", "left heart failure", "hf");  // 2026-11-16 · 3 players · same
crowdAlias("Name a cause of pulmonary hypertension", "bronchopulmonary dysplasia", "prematurity");  // 2026-11-16 · 4 players · PH of prematurity is BPD-related
crowdAlias("Name a cause of respiratory acidosis or alkalosis", "sedatives", "cns depressants");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of respiratory acidosis or alkalosis", "salicylate toxicity early", "salicylate overdose");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of short stature", "achondroplasia", "dwarfism");  // 2026-11-16 · 2 players · commonest dwarfism
crowdAlias("Name a cause of ST elevation", "stemi", "septal infarct");  // 2026-11-16 · 1 player · STEMI territory
crowdAlias("Name a cause of ST elevation", "tricyclic overdose", "tca toxicity");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of tachycardia", "shock", "hypovolemic shock");  // 2026-11-16 · 1 player · shock
crowdAlias("Name a cause of thrombocytopenia", "cirrhosis", "liver dysfunction");  // 2026-11-16 · 1 player · liver disease
crowdAlias("Name a cause of tooth sensitivity", "cracked tooth", "broken");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of tooth sensitivity", "enamel hypoplasia", "hypoplasia");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of tooth sensitivity", "gum disease", "gum inflammation");  // 2026-11-16 · 1 player · same
crowdAlias("Name a cause of unintentional weight loss", "leukemia", "acute myleoid leukemia|acute myeloid leukemia");  // 2026-11-16 · 1 player · leukemia type
crowdAlias("Name a cell signaling pathway or second messenger", "gq pathway", "gnaq");  // 2026-11-16 · 1 player · Gq alpha subunit
crowdAlias("Name a common reason for a primary care visit", "urinary tract infection", "cystitis");  // 2026-11-16 · 1 player · same
crowdAlias("Name a common reason for a primary care visit", "ear wax", "earwax drainage");  // 2026-11-16 · 1 player · same
crowdAlias("Name a common reason for a primary care visit", "abscess", "furuncle");  // 2026-11-16 · 1 player · boil
crowdAlias("Name a common reason for a primary care visit", "high cholesterol", "hypercholesterolemia");  // 2026-11-16 · 1 player · same
crowdAlias("Name a common reason for a primary care visit", "vaccines", "vaccination");  // 2026-11-16 · 1 player · same
crowdAlias("Name a complication of a burn injury", "hypovolemic shock", "hypotension");  // 2026-11-16 · 2 players · burn shock
crowdAlias("Name a complication of a spinal cord injury", "urinary incontinence", "incontinence");  // 2026-11-16 · 8 players · same
crowdAlias("Name a complication of a spinal cord injury", "paralytic ileus", "intestinal paralysis");  // 2026-11-16 · 1 player · same
crowdAlias("Name a complication of cancer", "neutropenic fever", "neutropenia");  // 2026-11-16 · 3 players · same
crowdAlias("Name a complication of dental anesthesia", "b12 inactivation by nitrous", "b12 depletion");  // 2026-11-16 · 1 player · same
crowdAlias("Name a complication of dental implants", "infection", "abscessation");  // 2026-11-16 · 1 player · implant infection
crowdAlias("Name a complication of high blood pressure", "kidney disease", "acute kidney injury");  // 2026-11-16 · 3 players · hypertensive renal injury
crowdAlias("Name a complication of high blood pressure", "atherosclerosis", "artherscolosis");  // 2026-11-16 · 1 player · typo
crowdAlias("Name a complication of immobility", "skin breakdown", "breakdown");  // 2026-11-16 · 1 player · same
crowdAlias("Name a complication of immobility", "pulmonary embolism", "emboli");  // 2026-11-16 · 1 player · same
crowdAlias("Name a complication of mechanical ventilation", "oxygen toxicity", "hyperoxygenation|hyperoxia");  // 2026-11-16 · 1 player · same
crowdAlias("Name a complication of obesity", "high cholesterol", "high triglycerides|hypertriglyceridemia");  // 2026-11-16 · 1 player · dyslipidemia
crowdAlias("Name a complication of obesity", "heart attack", "mi");  // 2026-11-16 · 1 player · same
crowdAlias("Name a complication of obesity", "peripheral artery disease", "peripheral vascular disease|pvd");  // 2026-11-16 · 1 player · same
crowdAlias("Name a complication of obesity", "type 2 diabetes", "t2dm");  // 2026-11-16 · 1 player · same
crowdAlias("Name a complication of preterm birth", "growth delay", "growth restriction");  // 2026-11-16 · 1 player · same
crowdAlias("Name a complication of sickle cell disease", "infection", "immunosuppression");  // 2026-11-16 · 1 player · functional asplenia -> infection
crowdAlias("Name a component or cell of the blood", "complement", "c4");  // 2026-11-16 · 1 player · complement protein
crowdAlias("Name a condition needing antibiotic prophylaxis before dental work", "prosthetic heart valve", "heart valve replacement");  // 2026-11-16 · 1 player · same
crowdAlias("Name a contraindication for an MRI", "body piercings", "piercings");  // 2026-11-16 · 2 players · same
crowdAlias("Name a cough or cold product", "sudafed", "pseudophin");  // 2026-11-16 · 1 player · pseudoephedrine typo
crowdAlias("Name a course or subject in dental school", "prosthodontics", "prosthetics");  // 2026-11-16 · 2 players · same
crowdAlias("Name a course or subject in dental school", "complete dentures", "dentures");  // 2026-11-16 · 2 players · same
crowdAlias("Name a danger sign in pregnancy", "thoughts of self harm", "suicidal thoughts");  // 2026-11-16 · 1 player · same
crowdAlias("Name a dental emergency", "abscess", "submandibular abcess|submandibular abscess");  // 2026-11-16 · 1 player · abscess
crowdAlias("Name a dental instrument", "hoe", "bi bevel hoe");  // 2026-11-16 · 1 player · hoe type
crowdAlias("Name a developmental red flag in a child", "speech delay", "mute");  // 2026-11-16 · 1 player · no speech
crowdAlias("Name a digital dentistry term or technology", "digital smile design", "smile design");  // 2026-11-16 · 2 players · same
crowdAlias("Name a disease linked to an HLA type", "ankylosing spondylitis", "ankylising spondlthiss");  // 2026-11-16 · 1 player · typo
crowdAlias("Name a drug class", "nk1 antagonists", "neurokinin-1 receptor antagonists");  // 2026-11-16 · 1 player · same
crowdAlias("Name a drug that causes gynecomastia", "haloperidol", "haldol");  // 2026-11-16 · 1 player · brand
crowdAlias("Name a drug that causes SIADH", "mdma", "molly");  // 2026-11-16 · 1 player · street name
crowdAlias("Name a drug that commonly causes allergic reactions or anaphylaxis", "antithymocyte globulin", "hatg");  // 2026-11-16 · 1 player · horse ATG
crowdAlias("Name a food or drink that stains teeth", "candy", "jolly ranchers");  // 2026-11-16 · 1 player · candy
crowdAlias("Name a general pathology term", "liquefactive necrosis", "liquifaction|liquefaction");  // 2026-11-16 · 1 player · same
crowdAlias("Name a general pathology term", "fatty change", "hepatic lipidosis");  // 2026-11-16 · 1 player · steatosis
crowdAlias("Name a general pathology term", "cellular swelling", "vacuolization|vacuolation|vacuolar degeneration");  // 2026-11-16 · 2 players · hydropic change
crowdAlias("Name a genetic disorder", "xyy syndrome", "jacob's syndrome|jacobs syndrome");  // 2026-11-16 · 1 player · same
crowdAlias("Name a genetic disorder", "lynch syndrome", "muir torre|muir-torre syndrome");  // 2026-11-16 · 1 player · Lynch variant
crowdAlias("Name a health effect of smoking", "gum disease", "gingivitis");  // 2026-11-16 · 1 player · same
crowdAlias("Name a health effect of smoking", "hoarseness", "raspy voice");  // 2026-11-16 · 1 player · same
crowdAlias("Name a healthcare profession", "lab technician", "medical lab scientist|medical laboratory scientist");  // 2026-11-16 · 2 players · lab professional
crowdAlias("Name a healthcare profession", "hospital administrator", "healthcare admin|healthcare administrator");  // 2026-11-16 · 1 player · same
crowdAlias("Name a healthcare profession", "physician assistant", "pa-c");  // 2026-11-16 · 1 player · credential
crowdAlias("Name a healthcare profession", "respiratory therapist", "respiratory technician");  // 2026-11-16 · 1 player · same
crowdAlias("Name a hip replacement precaution", "don't bend over", "bending at the waist");  // 2026-11-16 · 1 player · same
crowdAlias("Name a ligament or tendon", "calcaneofibular", "cfl");  // 2026-11-16 · 1 player · abbreviation
crowdAlias("Name a ligament or tendon", "deltoid ligament", "talustibial|tibiotalar ligament");  // 2026-11-16 · 1 player · tibiotalar = deltoid part
crowdAlias("Name a lung disease", "atelectasis", "alveolar collaps|alveolar collapse");  // 2026-11-16 · 1 player · same
crowdAlias("Name a lung disease", "black lung", "anthracosis");  // 2026-11-16 · 1 player · coal pigment lung
crowdAlias("Name a lung disease", "bronchogenic cyst", "bronchocyst");  // 2026-11-16 · 1 player · same
crowdAlias("Name a medical condition that changes dental treatment", "heart valve problems", "endocarditis");  // 2026-11-16 · 4 players · history of IE
crowdAlias("Name a medical document or form", "health care power of attorney", "power of attorney");  // 2026-11-16 · 12 players · same
crowdAlias("Name a medical document or form", "hipaa authorization", "hippa|medical release form|privacy health release");  // 2026-11-16 · 11 players · same
crowdAlias("Name a medical document or form", "dnr order", "dna cpr|dnacpr");  // 2026-11-16 · 2 players · same
crowdAlias("Name a medical document or form", "advance directive", "advanced care directive|advanced care planning");  // 2026-11-16 · 2 players · same
crowdAlias("Name a medical document or form", "fmla paperwork", "medical leave");  // 2026-11-16 · 1 player · same
crowdAlias("Name a medical ethics or legal concept", "hipaa", "phi|protected health information");  // 2026-11-16 · 1 player · HIPAA concept
crowdAlias("Name a medical imaging test", "ct", "ct without contrast|high dose chest ct|iodine constat ct|pelvic ct");  // 2026-11-16 · 4 players · CT
crowdAlias("Name a medical imaging test", "fast exam", "efast us|efast");  // 2026-11-16 · 1 player · same
crowdAlias("Name a medical sign or term named after a food", "blueberry muffin baby", "blueberry rash");  // 2026-11-16 · 2 players · same
crowdAlias("Name a medical sign or term named after an animal", "scottie dog sign", "scotty dog");  // 2026-11-16 · 3 players · same
crowdAlias("Name a mental health disorder", "schizophrenia", "schixo");  // 2026-11-16 · 1 player · typo
crowdAlias("Name a newborn assessment or procedure", "cchd screen", "spo2");  // 2026-11-16 · 3 players · pulse ox screen
crowdAlias("Name a newborn assessment or procedure", "reflexes", "babibski|babinski");  // 2026-11-16 · 1 player · reflex
crowdAlias("Name a newborn assessment or procedure", "respiratory rate", "respirations");  // 2026-11-16 · 1 player · same
crowdAlias("Name a nursing intervention to prevent postoperative complications", "early ambulation", "early mobility");  // 2026-11-16 · 2 players · same
crowdAlias("Name a nursing intervention to prevent postoperative complications", "antiemetics", "zofran");  // 2026-11-16 · 1 player · antiemetic
crowdAlias("Name a nutrient deficiency disease", "pellagra", "pellagra sine pellagra");  // 2026-11-16 · 1 player · pellagra form
crowdAlias("Name a paraneoplastic syndrome", "anti nmda receptor encephalitis", "nmda encephalitis");  // 2026-11-16 · 1 player · same
crowdAlias("Name a parasite that infects humans", "necator americanus", "americanus");  // 2026-11-16 · 3 players · same
crowdAlias("Name a parasite that infects humans", "enterobius vermicularis", "vermicularis");  // 2026-11-16 · 2 players · same
crowdAlias("Name a part of the brain", "cingulate", "anterior cingulate cortex");  // 2026-11-16 · 1 player · same
crowdAlias("Name a part of the brain", "cerebral peduncles", "peduncle");  // 2026-11-16 · 1 player · same
crowdAlias("Name a part of the heart", "left ventricular outflow tract", "aortic outflow tract");  // 2026-11-16 · 1 player · same
crowdAlias("Name a part of the heart", "purkinje fibers", "his perkinjie fibers");  // 2026-11-16 · 1 player · typo
crowdAlias("Name a part of the mouth", "median palatine raphe", "raphe");  // 2026-11-16 · 1 player · same
crowdAlias("Name a periodontal term or condition", "trench mouth", "necrotizing ulcerative gingivitid");  // 2026-11-16 · 1 player · NUG typo
crowdAlias("Name a physical exam sign named after a person", "brudzinski", "brudziky");  // 2026-11-16 · 1 player · typo
crowdAlias("Name a physical exam sign named after a person", "courvoisier", "courseviers");  // 2026-11-16 · 1 player · typo
crowdAlias("Name a poisoning or toxic exposure", "cadmium", "dimethylcadmium");  // 2026-11-16 · 1 player · cadmium compound
crowdAlias("Name a preventive screening test", "vdrl", "vldr");  // 2026-11-16 · 2 players · typo
crowdAlias("Name a preventive screening test", "low dose ct", "ct scan of chest");  // 2026-11-16 · 1 player · lung screening
crowdAlias("Name a preventive screening test", "diabetes screening", "hba1c");  // 2026-11-16 · 1 player · same
crowdAlias("Name a preventive screening test", "tb test", "tb skin test");  // 2026-11-16 · 1 player · same
crowdAlias("Name a preventive screening test", "lipid screening", "triglycerides");  // 2026-11-16 · 1 player · lipid panel
crowdAlias("Name a reason a filling or crown fails", "recurrent decay", "decay");  // 2026-11-16 · 2 players · same
crowdAlias("Name a reason a filling or crown fails", "adhesive failure", "adhesion");  // 2026-11-16 · 2 players · bond failure
crowdAlias("Name a receptor in the human body", "nicotinic nm receptor", "nm");  // 2026-11-16 · 2 players · same
crowdAlias("Name a receptor in the human body", "pd-1", "pd1");  // 2026-11-16 · 2 players · same
crowdAlias("Name a receptor in the human body", "alpha-1 adrenergic receptor", "a1");  // 2026-11-16 · 1 player · alpha-1
crowdAlias("Name a receptor in the human body", "beta-1 adrenergic receptor", "beta adrenergic");  // 2026-11-16 · 1 player · beta receptor
crowdAlias("Name a resuscitation step, drug or term (BLS, ACLS, PALS or ATLS)", "synchronized cardioversion", "cardiovert");  // 2026-11-16 · 1 player · same
crowdAlias("Name a resuscitation step, drug or term (BLS, ACLS, PALS or ATLS)", "breathing", "check breath|check breathing");  // 2026-11-16 · 1 player · same
crowdAlias("Name a risk factor for heart disease", "high cholesterol", "cholesterol");  // 2026-11-16 · 1 player · same
crowdAlias("Name a risk factor for infection", "neutropenia", "bone marrow suppression");  // 2026-11-16 · 1 player · same
crowdAlias("Name a risk factor for infection", "needlestick injury", "dirty needle stick");  // 2026-11-16 · 1 player · same
crowdAlias("Name a risk factor for infection", "poor hand hygiene", "hygeine|poor hygiene");  // 2026-11-16 · 1 player · same
crowdAlias("Name a salivary gland disorder", "sjogren syndrome", "sjrogren's disease");  // 2026-11-16 · 1 player · typo
crowdAlias("Name a sexually transmitted infection", "hpv", "hpv11|hpv16");  // 2026-11-16 · 2 players · HPV types
crowdAlias("Name a sexually transmitted infection", "syphilis", "siphillis|siphillys");  // 2026-11-16 · 2 players · typo
crowdAlias("Name a sexually transmitted infection", "gonorrhea", "gonorea");  // 2026-11-16 · 1 player · typo
crowdAlias("Name a side effect of antidepressants", "sexual dysfunction", "decrease sex drive");  // 2026-11-16 · 1 player · same
crowdAlias("Name a side effect of antidepressants", "qt prolongation", "qtc prolonged");  // 2026-11-16 · 1 player · same
crowdAlias("Name a side effect of antiseizure medications", "birth defects", "congenital defect|fetal deformities");  // 2026-11-16 · 2 players · same
crowdAlias("Name a sign of a concussion or traumatic brain injury", "double vision", "diplopia");  // 2026-11-16 · 2 players · same
crowdAlias("Name a sign of a concussion or traumatic brain injury", "clear fluid from nose", "cerebral spinal fluid leak|csf leak");  // 2026-11-16 · 1 player · CSF rhinorrhea
crowdAlias("Name a sign of dehydration", "dark urine", "dark pee|orange pee");  // 2026-11-16 · 2 players · same
crowdAlias("Name a sign of dehydration", "decreased urine output", "infrequent urination");  // 2026-11-16 · 1 player · same
crowdAlias("Name a sign of digoxin toxicity", "visual changes", "green halo|yellow halo");  // 2026-11-16 · 2 players · same
crowdAlias("Name a sign of meningitis", "photophobia", "photosensitivity");  // 2026-11-16 · 3 players · same
crowdAlias("Name a sign of thyroid storm or hyperthyroidism", "fine hair", "hair loss|hair thinning");  // 2026-11-16 · 1 player · hair thinning
crowdAlias("Name a sign of thyroid storm or hyperthyroidism", "fever", "hyperthermia");  // 2026-11-16 · 1 player · same
crowdAlias("Name a structure of the elbow or forearm", "ulnar nerve", "funny bone");  // 2026-11-16 · 5 players · same
crowdAlias("Name a structure of the elbow or forearm", "olecranon bursa", "bursa");  // 2026-11-16 · 3 players · elbow bursa
crowdAlias("Name a structure of the elbow or forearm", "sublime tubercle", "ulnar tubercle");  // 2026-11-16 · 1 player · same
crowdAlias("Name a structure of the foot or ankle", "flexor hallucis brevis", "hallicus brevis");  // 2026-11-16 · 2 players · typo
crowdAlias("Name a structure of the foot or ankle", "peroneus longus", "perineal tendon|peroneal tendon");  // 2026-11-16 · 2 players · peroneal tendon
crowdAlias("Name a structure of the foot or ankle", "dorsalis pedis artery", "pedal artery");  // 2026-11-16 · 1 player · same
crowdAlias("Name a structure of the hip or thigh", "medial circumflex femoral artery", "circumflex femoral vessels");  // 2026-11-16 · 1 player · same
crowdAlias("Name a structure of the hip or thigh", "superior pubic ramus", "pubic ramus");  // 2026-11-16 · 1 player · same
crowdAlias("Name a structure of the knee", "infrapatellar fat pad", "fat pad");  // 2026-11-16 · 2 players · same
crowdAlias("Name a structure of the knee", "patella", "patellar");  // 2026-11-16 · 1 player · same
crowdAlias("Name a structure of the knee", "common fibular nerve", "peroneal nerve");  // 2026-11-16 · 1 player · same
crowdAlias("Name a structure seen on a panoramic radiograph", "maxillary sinus", "sinus");  // 2026-11-16 · 1 player · same
crowdAlias("Name a symptom of autism spectrum disorder", "intense interests", "hyperfixtaion|hyperfixation");  // 2026-11-16 · 1 player · same
crowdAlias("Name a teratogen", "retinoids", "retinoic acid");  // 2026-11-16 · 1 player · same
crowdAlias("Name a term from medical school or residency", "post-call", "postpostcall|post post call");  // 2026-11-16 · 1 player · same
crowdAlias("Name a tract, nucleus or pathway in the nervous system", "spinothalamic tract", "spinothalamix");  // 2026-11-16 · 2 players · typo
crowdAlias("Name a treatment for a TMJ disorder", "open joint surgery", "surgery");  // 2026-11-16 · 4 players · TMJ surgery
crowdAlias("Name a trigger of a migraine", "dehydration", "dehydrated");  // 2026-11-16 · 1 player · same
crowdAlias("Name a trigger of an asthma attack", "respiratory infection", "infection");  // 2026-11-16 · 2 players · same
crowdAlias("Name a trigger of an asthma attack", "hot humid air", "hot weather");  // 2026-11-16 · 1 player · same
crowdAlias("Name a type of IV fluid", "3% sodium chloride", "3% ns");  // 2026-11-16 · 1 player · same
crowdAlias("Name a type of wound", "gunshot", "gsw");  // 2026-11-16 · 2 players · same
crowdAlias("Name a type of wound", "degloving", "deglove");  // 2026-11-16 · 1 player · same
crowdAlias("Name a type of wound", "abrasion", "excoriation");  // 2026-11-16 · 1 player · same
crowdAlias("Name a warning sign of oral cancer", "sore that doesn't heal", "ulcerations");  // 2026-11-16 · 1 player · same
crowdAlias("Name a word ending in -oma (a growth or tumor)", "osteosarcoma", "chrondoblastic oseteosarcoma|chondroblastic osteosarcoma");  // 2026-11-16 · 1 player · osteosarcoma subtype
crowdAlias("Name an implant surgery or osseointegration term", "pilot drill", "pilot hole");  // 2026-11-16 · 2 players · same
crowdAlias("Name an inborn error of metabolism", "ornithine transcarbamylase deficiency", "urea cycle defect|urea cycle disorder");  // 2026-11-16 · 3 players · commonest urea cycle disorder
crowdAlias("Name an infection acquired from water, soil or the environment", "clostridium botulinum wound botulism", "botulism");  // 2026-11-16 · 13 players · soil spores
crowdAlias("Name an infection acquired from water, soil or the environment", "naegleria fowleri", "amoeba");  // 2026-11-16 · 3 players · free-living amoeba
crowdAlias("Name an infection acquired from water, soil or the environment", "clostridium perfringens wound infection", "clostridium perfergines|clostridium perfringens");  // 2026-11-16 · 1 player · typo
crowdAlias("Name an infection acquired from water, soil or the environment", "pseudomonas aeruginosa", "kpseudomonas|pseudomonas");  // 2026-11-16 · 1 player · typo
crowdAlias("Name an infection acquired from water, soil or the environment", "legionellosis", "legionnaries");  // 2026-11-16 · 1 player · typo
crowdAlias("Name an instruction given after a tooth extraction", "use moist heat after 48 hours", "moist heat");  // 2026-11-16 · 1 player · same
crowdAlias("Name an obstetric or gynecologic procedure", "cold knife conization", "cold knife cone");  // 2026-11-16 · 1 player · same
crowdAlias("Name an obstetric or gynecologic procedure", "oocyte retrieval", "egg harvesting");  // 2026-11-16 · 1 player · same
crowdAlias("Name an obstetric or gynecologic procedure", "contraceptive implant insertion", "implant placement");  // 2026-11-16 · 1 player · same
crowdAlias("Name an obstetric or gynecologic procedure", "leep", "loop exicision|loop excision");  // 2026-11-16 · 1 player · same
crowdAlias("Name an obstetric or gynecologic procedure", "oophorectomy", "ovariandctomy|ovariectomy");  // 2026-11-16 · 1 player · same
crowdAlias("Name an obstetric or gynecologic procedure", "midurethral sling", "urologic sling");  // 2026-11-16 · 1 player · same
crowdAlias("Name an odontogenic cyst", "periapical", "periradicular cyst");  // 2026-11-16 · 1 player · radicular cyst
crowdAlias("Name an orthopedic or musculoskeletal exam test", "reverse phalen test", "reverse phalen");  // 2026-11-16 · 1 player · same
crowdAlias("Name an osteopathic (OMM/OMT) technique or term", "suboccipital release", "occipital release");  // 2026-11-16 · 1 player · same
crowdAlias("Name an X-linked recessive disease", "bruton agammaglobulinemia", "agammaglobulinemia");  // 2026-11-16 · 1 player · same
crowdAlias("Name an X-linked recessive disease", "duchenne muscular dystrophy", "dmd");  // 2026-11-16 · 1 player · same
crowdAlias("Name an X-linked recessive disease", "x linked scid", "scid");  // 2026-11-16 · 1 player · X-linked SCID
crowdAlias("Name something in a first aid kit", "antibiotic ointment", "ointment");  // 2026-11-16 · 16 players · same
crowdAlias("Name something in a first aid kit", "elastic bandage", "ace wrap");  // 2026-11-16 · 11 players · same
crowdAlias("Name something in a first aid kit", "skin glue", "glue");  // 2026-11-16 · 7 players · same
crowdAlias("Name something in a first aid kit", "ice pack", "ice");  // 2026-11-16 · 6 players · same
crowdAlias("Name something in a first aid kit", "q tips", "swabs|swab");  // 2026-11-16 · 9 players · cotton swabs
crowdAlias("Name something in a first aid kit", "antiseptic wipes", "wipes|wipe");  // 2026-11-16 · 8 players · same
crowdAlias("Name something in a first aid kit", "hydrocortisone cream", "cream");  // 2026-11-16 · 4 players · same
crowdAlias("Name something in a first aid kit", "antiseptic solution", "disinfectant|antibacterial");  // 2026-11-16 · 7 players · same
crowdAlias("Name something in a first aid kit", "epinephrine", "epi");  // 2026-11-16 · 4 players · same
crowdAlias("Name something in a first aid kit", "povidone iodine", "iodine");  // 2026-11-16 · 4 players · same
crowdAlias("Name something in a first aid kit", "alcohol wipes", "alcohol pad|isopropyl");  // 2026-11-16 · 4 players · same
crowdAlias("Name something in a first aid kit", "gauze", "pad");  // 2026-11-16 · 3 players · gauze pad
crowdAlias("Name something in a first aid kit", "burn gel", "gel");  // 2026-11-16 · 2 players · same
crowdAlias("Name something in a first aid kit", "suture kit", "stitches");  // 2026-11-16 · 3 players · same
crowdAlias("Name something in a first aid kit", "aed", "defibrillator|defib");  // 2026-11-16 · 8 players · same
crowdAlias("Name something included in a nursing handoff report", "vital signs", "blood pressure");  // 2026-11-16 · 5 players · vitals
crowdAlias("Name something included in a nursing handoff report", "diet", "last oral intake");  // 2026-11-16 · 1 player · diet/NPO status
crowd("Name a cause of GI bleeding", 85, "heyde syndrome|heyde's syndrome");  // 2026-11-16 · 1 player · aortic stenosis + angiodysplasia bleeding
crowd("Name a common reason for a primary care visit", 90, "seborrheic dermatitis|dandruff|flaky scalp");  // 2026-11-16 · 1 player · common office complaint
crowd("Name a drug that causes confusion or delirium", 65, "amphetamines|amphetamine|adderall|dextroamphetamine");  // 2026-11-16 · 2 players · stimulant intoxication delirium
crowd("Name a drug that comes as an oral liquid", 75, "eltrombopag|promacta");  // 2026-11-16 · 1 player · Promacta for oral suspension
crowd("Name a general pathology term", 95, "mitotic index|meitotic index");  // 2026-11-16 · 1 player · standard tumor grading term
crowd("Name a general pathology term", 92, "idiopathic");  // 2026-11-16 · 2 players · cause unknown; standard term
crowd("Name a genetic disorder", 90, "fatal familial insomnia|ffi");  // 2026-11-16 · 1 player · PRNP prion disease
crowd("Name a hepatotoxic drug", 85, "naltrexone");  // 2026-11-16 · 1 player · label warns of hepatotoxicity
crowd("Name a medical abbreviation", 76, "fx");  // 2026-11-16 · 1 player · fracture
crowd("Name a medical abbreviation", 76, "pots");  // 2026-11-16 · 1 player · postural orthostatic tachycardia syndrome
crowd("Name a medical abbreviation", 76, "t1d");  // 2026-11-16 · 1 player · type 1 diabetes
crowd("Name a medical abbreviation", 76, "txa");  // 2026-11-16 · 1 player · tranexamic acid
crowd("Name a medical document or form", 79, "moca|montreal cognitive assessment");  // 2026-11-16 · 4 players · cognitive screening form (like phq-9)
crowd("Name a medical document or form", 87, "respect form|recommended summary plan for emergency care and treatment");  // 2026-11-16 · 2 players · UK emergency care plan form
crowd("Name a medical ethics or legal concept", 67, "euthanasia");  // 2026-11-16 · 2 players · distinct from assisted death
crowd("Name a medical imaging test", 84, "b scan|b-scan|ocular ultrasound");  // 2026-11-16 · 2 players · ophthalmic ultrasound
crowd("Name a mental health disorder", 90, "pseudocyesis|false pregnancy");  // 2026-11-16 · 1 player · DSM-5 other specified somatic symptom
crowd("Name a part of the mouth", 64, "retromylohyoid fossa|retromylohyoid space|retromylo hyoid fossa");  // 2026-11-16 · 1 player · lingual denture landmark
crowd("Name a physical exam sign named after a person", 90, "prehn sign|prehn's sign");  // 2026-11-16 · 1 player · epididymitis vs torsion
crowd("Name a physical exam sign named after a person", 90, "winterbottom sign|winterbottom's sign|winterborthons sign");  // 2026-11-16 · 1 player · trypanosomiasis lymphadenopathy
crowd("Name a piece of equipment in a dental office", 85, "curette|11/12 curette|gracey curette");  // 2026-11-16 · 1 player · periodontal instrument
crowd("Name a poisoning or toxic exposure", 95, "formaldehyde");  // 2026-11-16 · 1 player · toxic exposure
crowd("Name a resuscitation step, drug or term (BLS, ACLS, PALS or ATLS)", 93, "suction|suctioning|airway suction");  // 2026-11-16 · 1 player · airway clearance step
crowd("Name a structure of the hip or thigh", 93, "posterior inferior iliac spine|piis");  // 2026-11-16 · 1 player · pelvic landmark
crowd("Name a structure seen on a panoramic radiograph", 85, "angle of the mandible|mandibular angle");  // 2026-11-16 · 1 player · panoramic landmark
crowd("Name a structure seen on a panoramic radiograph", 85, "body of the mandible|mandibular body");  // 2026-11-16 · 1 player · panoramic landmark
crowd("Name an eye disease or condition", 90, "ocular gvhd|ocular graft versus host disease");  // 2026-11-16 · 1 player · post-transplant eye disease
crowd("Name a smile design or dental esthetics term", 65, "veneer|veneers|porcelain veneers");  // 2026-11-16 · 4 players · core esthetic restoration
crowd("Name an implant surgery or osseointegration term", 65, "bone graft|bone grafting|graft");  // 2026-11-16 · 3 players · core implant site term
crowd("Name an implant surgery or osseointegration term", 85, "external hex|external hex connection");  // 2026-11-16 · 1 player · implant-abutment connection
crowd("Name an autosomal dominant disease", 67, "cadasil");  // 2026-11-16 · 1 player · NOTCH3, AD
crowd("Name something in a first aid kit", 70, "transparent film dressing|tegaderm|transparent dressing");  // 2026-11-16 · 2 players · common dressing
crowd("Name a word ending in -oma (a growth or tumor)", 40, "endometrioma|endometriomas|chocolate cyst");  // 2026-11-17 · 13 players · ovarian endometriotic cyst
crowd("Name a word ending in -oma (a growth or tumor)", 70, "incidentaloma|incidentalomas|adrenal incidentaloma");  // 2026-11-17 · 3 players · incidentally found mass
crowd("Name a structure of the pelvis or perineum", 59, "gubernaculum|goobernaculum");  // 2026-11-17 · 13 players · guides gonadal descent; inguinal/pelvic
crowd("Name a structure of the pelvis or perineum", 83, "superior rectal vein");  // 2026-11-17 · 3 players · drains rectum to IMV
crowd("Name a structure of the pelvis or perineum", 83, "fimbriae|fimbria|fimbriae of the fallopian tube|uterine fimbrae|uterine fimbriae");  // 2026-11-17 · 3 players · distal tubal structure
crowd("Name a structure of the pelvis or perineum", 93, "cremaster|cremaster muscle");  // 2026-11-17 · 1 player · spermatic cord muscle
crowd("Name a structure of the pelvis or perineum", 93, "urachus|urachal remnant");  // 2026-11-17 · 1 player · bladder dome remnant
crowd("Name a structure in the thorax or mediastinum", 81, "long thoracic nerve");  // 2026-11-17 · 4 players · runs on lateral thoracic wall
crowd("Name a structure in the thorax or mediastinum", 93, "rami communicantes|rami communicans|gray rami communicantes|white rami communicantes");  // 2026-11-17 · 1 player · thoracic sympathetic connections
crowd("Name a symptom or complication of inflammatory bowel disease", 31, "intestinal ulcers|ulcer|ulcers|ulceration|colonic ulcers");  // 2026-11-17 · 10 players · mucosal ulceration, hallmark of IBD
crowd("Name a symptom or complication of inflammatory bowel disease", 44, "constipation");  // 2026-11-17 · 6 players · proctitis/strictures cause constipation
crowd("Name a symptom or complication of inflammatory bowel disease", 59, "pseudopolyps|polyps|inflammatory polyps|polyp");  // 2026-11-17 · 3 players · post-inflammatory polyps in IBD
crowd("Name a term from medical school or residency", 64, "high yield|high-yield|low yield|low-yield");  // 2026-11-17 · 11 players · core study-culture term
crowd("Name a term from medical school or residency", 93, "case based learning|cbl|collaborative case based learning");  // 2026-11-17 · 1 player · curriculum format
crowd("Name a term from medical school or residency", 93, "competency based medical education|cbme|competency based learning");  // 2026-11-17 · 1 player · curriculum framework
crowd("Name a term from medical school or residency", 93, "differential diagnosis|differential|ddx|differerntial diagnosis");  // 2026-11-17 · 1 player · core clinical-reasoning term
crowd("Name a term from medical school or residency", 93, "drinking from a fire hose|drinking from a firehose");  // 2026-11-17 · 1 player · common med school idiom
crowd("Name a term from medical school or residency", 93, "golden weekend");  // 2026-11-17 · 1 player · residency term, weekend off
crowd("Name a term from medical school or residency", 93, "simulation lab|sim lab|simulation center");  // 2026-11-17 · 1 player · training setting
crowd("Name a term from medical school or residency", 93, "zebra|zebras");  // 2026-11-17 · 1 player · rare diagnosis term
crowd("Name a cardiovascular physiology term", 88, "perfusion|tissue perfusion");  // 2026-11-17 · 2 players · core physiology term
crowd("Name a cause of anion gap metabolic acidosis", 82, "von gierke disease|glycogen storage disease type 1|von gierkes|von gierke|gsd i");  // 2026-11-17 · 1 player · lactic acidosis
crowd("Name a drug that causes orthostatic hypotension", 65, "guanfacine");  // 2026-11-17 · 2 players · alpha-2 agonist, hypotension on label
crowd("Name a drug that causes peripheral neuropathy", 65, "metformin");  // 2026-11-17 · 3 players · via B12 deficiency (labeling)
crowd("Name a drug that depletes a vitamin or mineral", 73, "tebipenem|tebipenem pivoxil");  // 2026-11-17 · 1 player · pivalate prodrug depletes carnitine
crowd("Name a drug that needs renal dose adjustment", 85, "sulbactam-durlobactam|sulbactam/durlobactam|xacduro");  // 2026-11-17 · 1 player · renally adjusted per label
crowd("Name a general pathology term", 86, "spindle cell|spindle cells|spindle");  // 2026-11-17 · 4 players · standard histology term
crowd("Name a genetic disorder", 91, "jarcho-levin syndrome|jarcho levin|jarco levin|spondylocostal dysostosis");  // 2026-11-17 · 1 player · genetic skeletal disorder
crowd("Name a health effect of smoking", 49, "vasoconstriction");  // 2026-11-17 · 5 players · nicotine effect
crowd("Name a landmark of tooth morphology", 46, "crown|anatomic crown|clinical crown");  // 2026-11-17 · 3 players · major tooth division
crowd("Name a medical abbreviation", 79, "px");  // 2026-11-17 · 1 player · physical exam/prognosis
crowd("Name a molecular biology term (DNA, RNA or protein synthesis)", 87, "integrase");  // 2026-11-17 · 2 players · inserts DNA into genome
crowd("Name a molecular biology term (DNA, RNA or protein synthesis)", 87, "nucleolus|nucleoulus|nucleoli");  // 2026-11-17 · 2 players · rRNA synthesis site
crowd("Name a molecular biology term (DNA, RNA or protein synthesis)", 76, "p53|tp53");  // 2026-11-17 · 5 players · DNA damage response transcription factor
crowd("Name a pharmacy insurance or billing term", 85, "third party payer|third party|third-party payer");  // 2026-11-17 · 1 player · billing term
crowd("Name a pharmacy organization or regulatory agency", 73, "medical products agency|mpa|lakemedelsverket");  // 2026-11-17 · 1 player · Swedish regulator
crowd("Name a pharmacy organization or regulatory agency", 73, "national association of specialty pharmacy|nasp");  // 2026-11-17 · 1 player · US specialty pharmacy org
crowd("Name a piece of equipment in a dental office", 85, "scaler|scalers|hand scaler");  // 2026-11-17 · 1 player · periodontal instrument
crowd("Name a type of bone fracture", 91, "chalkstick fracture|chalk stick fracture");  // 2026-11-17 · 1 player · ankylosing spondylitis spine fracture
crowd("Name an interventional radiology procedure", 65, "fiducial marker insertion|fiducial marker placement|fiducial placement");  // 2026-11-17 · 1 player · IR-placed markers
crowd("Name an antifungal drug (often ends in -azole)", 67, "fosravuconazole");  // 2026-11-17 · 1 player · approved azole (Japan)
crowdAlias("Name a symptom or complication of inflammatory bowel disease", "bloody diarrhea", "bleeding|gi bleeding|hematochezia");  // 2026-11-17 · 6 players · same (rectal bleeding already counts here)
crowdAlias("Name a complication of a stroke", "homonymous hemianopia", "blindness|blind|cortical blindness");  // 2026-11-17 · 6 players · vision loss already counts here
crowdAlias("Name a structure of the shoulder", "subacromial bursa", "bursa|bursae");  // 2026-11-17 · 8 players · main shoulder bursa
crowdAlias("Name a structure of the shoulder", "inferior glenohumeral ligament", "glenohumeral ligament|glenohumeral ligaments");  // 2026-11-17 · 1 player · GH ligament complex
crowdAlias("Name a structure of the shoulder", "posterior circumflex humeral artery", "posterior cirfumfex humoral artery");  // 2026-11-17 · 1 player · spelling
crowdAlias("Name a structure of the shoulder", "brachial plexus", "superior trunk of brachial plexus|upper trunk of brachial plexus");  // 2026-11-17 · 1 player · part of plexus
crowdAlias("Name a structure of the hip or thigh", "trochanteric bursa", "bursa");  // 2026-11-17 · 2 players · main hip bursa
crowdAlias("Name a structure in the thorax or mediastinum", "mediastinal lymph nodes", "lymph node|lymph nodes");  // 2026-11-17 · 5 players · same
crowdAlias("Name a structure in the thorax or mediastinum", "ligamentum arteriosum", "ductus arteriosus");  // 2026-11-17 · 3 players · fetal form of same
crowdAlias("Name a structure in the thorax or mediastinum", "fossa ovalis", "foramen ovale");  // 2026-11-17 · 3 players · fetal form of same
crowdAlias("Name a structure in the thorax or mediastinum", "alveoli", "alveolar sac|alveolar sacs");  // 2026-11-17 · 1 player · same
crowdAlias("Name a structure in the thorax or mediastinum", "right crus of the diaphragm", "diaphragmatic crus|crus of the diaphragm");  // 2026-11-17 · 1 player · same
crowdAlias("Name a structure in the thorax or mediastinum", "hemiazygos vein", "hemiazygous|hemiazygos");  // 2026-11-17 · 1 player · spelling
crowdAlias("Name a structure in the thorax or mediastinum", "external intercostal muscles", "intercoastal muscles|intercostal muscles");  // 2026-11-17 · 1 player · same
crowdAlias("Name a structure in the thorax or mediastinum", "costal cartilage", "intercostal cartialge|intercostal cartilage");  // 2026-11-17 · 1 player · same
crowdAlias("Name a structure in the thorax or mediastinum", "subcarinal lymph nodes", "subcarinal nodes");  // 2026-11-17 · 1 player · same
crowdAlias("Name a structure in the thorax or mediastinum", "tricuspid valve", "triscuspid annulus|tricuspid annulus");  // 2026-11-17 · 1 player · part of valve
crowdAlias("Name a structure of the pelvis or perineum", "anococcygeal ligament", "anococcygeal raphe");  // 2026-11-17 · 1 player · same
crowdAlias("Name a symptom or complication of inflammatory bowel disease", "abdominal pain", "pain");  // 2026-11-17 · 4 players · same
crowdAlias("Name a symptom or complication of inflammatory bowel disease", "colon cancer", "cancer|colorectal cancer");  // 2026-11-17 · 3 players · same
crowdAlias("Name a term from medical school or residency", "pgy-1", "pgy|pgy 4|pgy-4");  // 2026-11-17 · 6 players · PGY level
crowdAlias("Name a term from medical school or residency", "rotation", "placement|clinical placement|placements");  // 2026-11-17 · 5 players · UK term
crowdAlias("Name a term from medical school or residency", "call", "24 hour call|24-hour call");  // 2026-11-17 · 1 player · same
crowdAlias("Name a term from medical school or residency", "alpha omega alpha", "aoa");  // 2026-11-17 · 2 players · abbreviation
crowdAlias("Name a biosimilar (a copy of a biologic drug)", "semglee", "glargine-yfgn|insulin glargine-yfgn");  // 2026-11-17 · 1 player · same product
crowdAlias("Name a cause of anion gap metabolic acidosis", "isoniazid", "isinozid");  // 2026-11-17 · 1 player · spelling
crowdAlias("Name a cause of bad breath", "plaque", "biofilm|dental biofilm|oral biofilm");  // 2026-11-17 · 3 players · same
crowdAlias("Name a cause of chronic cough", "interstitial lung disease", "fibrosis|pulmonary fibrosis");  // 2026-11-17 · 3 players · same
crowdAlias("Name a cause of chronic cough", "lung cancer", "tumor|lung tumor");  // 2026-11-17 · 2 players · same
crowdAlias("Name a cause of digital clubbing", "pulmonary fibrosis", "ild|interstitial lung disease");  // 2026-11-17 · 2 players · same
crowdAlias("Name a cause of digital clubbing", "cystic fibrosis", "cf");  // 2026-11-17 · 2 players · abbreviation
crowdAlias("Name a cause of digital clubbing", "lung cancer", "adenocarcinoma|lung adenocarcinoma");  // 2026-11-17 · 2 players · lung cancer subtype
crowdAlias("Name a cause of eosinophilia", "acute interstitial nephritis", "interstitial aki|inerstitial aki");  // 2026-11-17 · 1 player · same
crowdAlias("Name a cause of heart failure", "coronary artery disease", "ischemia|ischemic heart disease");  // 2026-11-17 · 2 players · same
crowdAlias("Name a cause of hypercalcemia", "pthrp", "pseudohyperparathyroidism|pseudohyperparathyroid");  // 2026-11-17 · 1 player · old term for humoral hypercalcemia
crowdAlias("Name a cause of hypokalemia", "low potassium intake", "dietary|dietary deficiency|poor dietary intake");  // 2026-11-17 · 2 players · same
crowdAlias("Name a cause of mouth sores", "hiv", "aids");  // 2026-11-17 · 1 player · same
crowdAlias("Name a cause of mouth sores", "chemotherapy", "cisplatin");  // 2026-11-17 · 1 player · chemo agent
crowdAlias("Name a cause of secondary amenorrhea", "premature ovarian insufficiency", "poi");  // 2026-11-17 · 1 player · abbreviation
crowdAlias("Name a cause of secondary hypertension", "renal artery stenosis", "renal stenosis");  // 2026-11-17 · 2 players · same
crowdAlias("Name a cause of short stature", "glycogen storage disease", "von girke|von gierke|von gierke disease");  // 2026-11-17 · 3 players · GSD type I
crowdAlias("Name a cause of short stature", "growth hormone deficiency", "gh insufficiency|gh deficiency");  // 2026-11-17 · 1 player · same
crowdAlias("Name a cause of short stature", "osteogenesis imperfecta", "oi");  // 2026-11-17 · 1 player · abbreviation
crowdAlias("Name a cause of thrombocytopenia", "ttp", "adamts13 deficiency");  // 2026-11-17 · 1 player · same
crowdAlias("Name a cause of thrombocytopenia", "chemotherapy", "carboplatin");  // 2026-11-17 · 1 player · chemo agent
crowdAlias("Name a complication of a stroke", "paralysis", "facial droop|facial paralysis");  // 2026-11-17 · 3 players · facial weakness
crowdAlias("Name a complication of a stroke", "hemorrhagic transformation", "hemmorage|hemorrhage");  // 2026-11-17 · 2 players · same
crowdAlias("Name a complication of high blood pressure", "kidney disease", "aki|acute kidney injury");  // 2026-11-17 · 2 players · hypertensive kidney injury
crowdAlias("Name a complication of sickle cell disease", "blood clots", "clot|clots");  // 2026-11-17 · 4 players · same
crowdAlias("Name a complication of sickle cell disease", "jaundice", "hyperbilirubin|hyperbilirubinemia");  // 2026-11-17 · 1 player · same
crowdAlias("Name a complication of sickle cell disease", "pain crisis", "occlusive crisis|vaso-occlusive crisis|vaso occlusive crisis");  // 2026-11-17 · 1 player · same
crowdAlias("Name a component or cell of the blood", "von willebrand factor", "vwf");  // 2026-11-17 · 1 player · abbreviation
crowdAlias("Name a condition needing antibiotic prophylaxis before dental work", "previous endocarditis", "endocarditis|bacterial endocarditis|subacute bacterial endocarditis|infective endocarditis");  // 2026-11-17 · 6 players · history of IE
crowdAlias("Name a diagnostic test for an infectious disease", "tuberculin skin test", "skin test");  // 2026-11-17 · 1 player · same
crowdAlias("Name a diagnostic test for an infectious disease", "c difficile toxin test", "toxin assay");  // 2026-11-17 · 1 player · same
crowdAlias("Name a diagnostic test for an infectious disease", "wood's lamp exam", "woodlamp test|wood lamp test");  // 2026-11-17 · 1 player · same
crowdAlias("Name a dosage form that should not be crushed", "osmotic tablets", "osmotic delivery");  // 2026-11-17 · 1 player · same
crowdAlias("Name a drug dosed in units", "insulin glargine", "glargine");  // 2026-11-17 · 5 players · same
crowdAlias("Name a drug given rectally or vaginally", "conjugated estrogens vaginal cream", "estrogen|vaginal estrogen");  // 2026-11-17 · 1 player · vaginal estrogen
crowdAlias("Name a drug on the Beers list", "benzodiazepines", "lorazepam");  // 2026-11-17 · 3 players · member of class
crowdAlias("Name a food that is good for your teeth", "cheese", "brie");  // 2026-11-17 · 1 player · type of cheese
crowdAlias("Name a genetic disorder", "muscular dystrophy", "duchenne muscular dystrophy|duchenes dystophy|duchenne");  // 2026-11-17 · 1 player · DMD
crowdAlias("Name a health effect of smoking", "lung cancer", "cancer");  // 2026-11-17 · 5 players · same
crowdAlias("Name a health effect of smoking", "spontaneous pneumothorax", "pneumothorax");  // 2026-11-17 · 3 players · same
crowdAlias("Name a health effect of smoking", "chronic bronchitis", "bronchitis");  // 2026-11-17 · 2 players · same
crowdAlias("Name a healthcare profession", "orthopedic technician", "orthopedic cast technician|cast technician");  // 2026-11-17 · 1 player · same
crowdAlias("Name a hospital unit or department", "oncology", "heme/onc|heme onc");  // 2026-11-17 · 1 player · same
crowdAlias("Name a hospital-acquired infection or pathogen", "hospital-acquired pneumonia", "pneumonia");  // 2026-11-17 · 7 players · same
crowdAlias("Name a hospital-acquired infection or pathogen", "carbapenem-resistant enterobacteriaceae", "cpe|carbapenemase producing enterobacterales");  // 2026-11-17 · 5 players · CRE subset
crowdAlias("Name a hospital-acquired infection or pathogen", "influenza", "flu");  // 2026-11-17 · 4 players · same
crowdAlias("Name a hospital-acquired infection or pathogen", "ventilator-associated pneumonia", "ventalor acquired pnemonia");  // 2026-11-17 · 1 player · spelling
crowdAlias("Name a job in a dental office", "dental hygienist", "hygeinist|hygenist|hygienist");  // 2026-11-17 · 2 players · spelling
crowdAlias("Name a job in a dental office", "receptionist", "secretary");  // 2026-11-17 · 1 player · same role
crowdAlias("Name a job in a dental office", "sterilization technician", "sterile technician");  // 2026-11-17 · 1 player · same
crowdAlias("Name a medical ethics or legal concept", "informed consent", "consent");  // 2026-11-17 · 4 players · same
crowdAlias("Name a medical imaging test", "nuclear medicine", "nuclear scintigraphy|nuclear scinitgraphy|nuclear scintigraphu|scintigraphy");  // 2026-11-17 · 2 players · same
crowdAlias("Name a nutrient deficiency disease", "rickets", "ricadus");  // 2026-11-17 · 1 player · spelling
crowdAlias("Name a palliative or hospice care term", "symptom management", "pain management");  // 2026-11-17 · 3 players · same
crowdAlias("Name a part of the heart", "left atrial appendage", "appendage|atrial appendage");  // 2026-11-17 · 2 players · same
crowdAlias("Name a part of the heart", "trabeculae carneae", "carnae trabeculae");  // 2026-11-17 · 1 player · spelling
crowdAlias("Name a pharmacy job or setting", "critical care", "neuro icu");  // 2026-11-17 · 1 player · ICU setting
crowdAlias("Name a preventive screening test", "psa", "prostate specific antigen");  // 2026-11-17 · 2 players · same
crowdAlias("Name a primary immunodeficiency", "selective iga deficiency", "iga|iga deficiency");  // 2026-11-17 · 3 players · same
crowdAlias("Name a pulpal or periapical diagnosis", "condensing osteitis", "sclerosing osteitis");  // 2026-11-17 · 1 player · same
crowdAlias("Name a reason people visit the dentist", "gum disease", "gingivitis");  // 2026-11-17 · 1 player · same
crowdAlias("Name a restraint or restraint alternative", "chemical restraint", "benzo");  // 2026-11-17 · 2 players · same
crowdAlias("Name a resuscitation step, drug or term (BLS, ACLS, PALS or ATLS)", "rescue breaths", "mouth to mouth");  // 2026-11-17 · 2 players · same
crowdAlias("Name a sexually transmitted infection", "gonorrhea", "ghonnera");  // 2026-11-17 · 2 players · spelling
crowdAlias("Name a side effect of antibiotics", "nausea", "gi upset");  // 2026-11-17 · 3 players · same
crowdAlias("Name a side effect of antibiotics", "disulfiram like reaction", "decreased alcohol tolerance");  // 2026-11-17 · 1 player · same
crowdAlias("Name a sign of a blood transfusion reaction", "flushing", "redness");  // 2026-11-17 · 3 players · same
crowdAlias("Name a sign of anaphylaxis", "hives", "rash");  // 2026-11-17 · 1 player · urticarial rash
crowdAlias("Name a sign of dehydration", "thirst", "polydipsia");  // 2026-11-17 · 1 player · same
crowdAlias("Name a sign of high potassium", "peaked t waves", "increased t wave");  // 2026-11-17 · 1 player · same
crowdAlias("Name a structure of the elbow or forearm", "anterior fat pad", "fat pad");  // 2026-11-17 · 2 players · same
crowdAlias("Name a suicide warning sign or risk factor", "social isolation", "isolation");  // 2026-11-17 · 3 players · same
crowdAlias("Name a suicide warning sign or risk factor", "giving away possessions", "giving away personal items");  // 2026-11-17 · 1 player · same
crowdAlias("Name a symptom of a heart attack", "chest pain", "angina");  // 2026-11-17 · 1 player · same
crowdAlias("Name a symptom of autism spectrum disorder", "delayed speech", "nonverbal");  // 2026-11-17 · 4 players · same
crowdAlias("Name a symptom of autism spectrum disorder", "hand flapping", "flapping");  // 2026-11-17 · 2 players · same
crowdAlias("Name a symptom of autism spectrum disorder", "sensory sensitivity", "sensory overload");  // 2026-11-17 · 1 player · same
crowdAlias("Name a symptom of dementia", "aggression", "anger");  // 2026-11-17 · 2 players · same
crowdAlias("Name a symptom of dementia", "difficulty with daily tasks", "loss of adl|loss of adls");  // 2026-11-17 · 2 players · same
crowdAlias("Name a teratogen", "isotretinoin", "accutane");  // 2026-11-17 · 3 players · brand
crowdAlias("Name a teratogen", "methimazole", "thionamide");  // 2026-11-17 · 1 player · drug class
crowdAlias("Name a toothbrushing or flossing technique or tip", "small circles", "circles");  // 2026-11-17 · 3 players · same
crowdAlias("Name a toothbrushing or flossing technique or tip", "water flossing", "water pick|waterpik|water flosser");  // 2026-11-17 · 2 players · same
crowdAlias("Name a toothbrushing or flossing technique or tip", "divide into quadrants", "brush in 4 regions");  // 2026-11-17 · 1 player · same
crowdAlias("Name a trigger of an asthma attack", "pet dander", "dander");  // 2026-11-17 · 2 players · same
crowdAlias("Name a type of IV fluid", "d5w", "d5");  // 2026-11-17 · 1 player · same
crowdAlias("Name a type of vasculitis", "eosinophilic granulomatosis with polyangiitis", "eosinophilic granulomatous polyangitis");  // 2026-11-17 · 1 player · spelling
crowdAlias("Name a type of vasculitis", "microscopic polyangiitis", "mpa");  // 2026-11-17 · 1 player · abbreviation
crowdAlias("Name an eye disease or condition", "ocular melanoma", "melanoma of the eye");  // 2026-11-17 · 2 players · same
crowdAlias("Name an infection during pregnancy or in a newborn", "gonococcal conjunctivitis", "gonnorhea conjuctivitis");  // 2026-11-17 · 1 player · spelling
crowdAlias("Name an osteopathic (OMM/OMT) technique or term", "myofascial release", "fascia release");  // 2026-11-17 · 2 players · same
crowdAlias("Name a cardiac procedure or intervention", "pulmonary vein isolation", "albation pulmonary vein|pulmonary vein ablation");  // 2026-11-17 · 1 player · same
crowdAlias("Name a cardiac procedure or intervention", "septal myectomy", "myectomy for hocm|myectomy");  // 2026-11-17 · 1 player · same
crowdAlias("Name a word ending in -oma (a growth or tumor)", "esthesioneuroblastoma", "esthesioblastoma");  // 2026-11-17 · 1 player · spelling
crowd("Name a cardiac procedure or intervention", 94, "ozaki procedure|aortic valve neocuspidization|aortic valve reconstruction with autologous pericardium");  // 2026-11-18 · 1 player · aortic valve neocuspidization
crowd("Name a cardiac procedure or intervention", 82, "thoracic endovascular aortic repair|tevar");  // 2026-11-18 · 4 players · endovascular thoracic aortic repair
crowd("Name a cause of acute pancreatitis", 63, "pancreatic cancer|pancreatic adenocarcinoma|pancreatic tumor|malignancy|cancer");  // 2026-11-18 · 5 players · ductal obstruction by tumor
crowd("Name a blood test", 92, "tsh receptor antibodies|trab|tsh receptor antibody|thyrotropin receptor antibody");  // 2026-11-18 · 1 player · Graves disease test
crowd("Name a chemotherapy drug", 74, "ripretinib|qinlock");  // 2026-11-18 · 1 player · KIT/PDGFRA TKI for GIST
crowd("Name a clinical scoring system or decision rule", 83, "alsfrs-r|alsfrs‑r|alsfrs|als functional rating scale");  // 2026-11-18 · 1 player · ALS functional rating scale
crowd("Name a common reason for a primary care visit", 92, "rectal pain|anal pain|proctalgia");  // 2026-11-18 · 1 player · common anorectal complaint
crowd("Name a drug that activates a receptor (receptor agonist)", 76, "aripiprazole|abilify");  // 2026-11-18 · 1 player · D2/5-HT1A partial agonist
crowd("Name a drug that blocks a receptor (receptor antagonist)", 76, "elinzanetant|lynkuet|elinuzenant");  // 2026-11-18 · 1 player · NK1/NK3 receptor antagonist
crowd("Name a diagnostic test for an infectious disease", 94, "mrsa nasal pcr|mrsa nasal swab|mrsa nares pcr|mrsa nares screen");  // 2026-11-18 · 1 player · MRSA nares PCR
crowd("Name a gastrointestinal physiology term", 64, "retroperistalsis|retroperistalis|antiperistalsis|reverse peristalsis");  // 2026-11-18 · 1 player · reverse peristalsis in vomiting
crowd("Name a healthcare profession", 92, "aboriginal health worker|aboriginal health liaison officer|aboriginal health liason|aboriginal health practitioner");  // 2026-11-18 · 1 player · registered profession in Australia
crowd("Name a healthcare profession", 92, "cardiac physiologist|cardiac scientist|clinical physiologist");  // 2026-11-18 · 1 player · UK/AU cardiac diagnostics profession
crowd("Name a medical abbreviation", 81, "sbo|small bowel obstruction");  // 2026-11-18 · 1 player · small bowel obstruction
crowd("Name a medical abbreviation", 81, "tte|transthoracic echocardiogram");  // 2026-11-18 · 1 player · transthoracic echo
crowd("Name a medical imaging test", 92, "pneumoencephalogram|pneumoencephalography");  // 2026-11-18 · 1 player · historical neuroimaging test
crowd("Name a medical prefix, suffix or word root", 64, "acantho|acanth|acanth-");  // 2026-11-18 · 1 player · root meaning thorny (acanthosis)
crowd("Name a palliative or hospice care term", 76, "syringe driver|syringe pump|continuous subcutaneous infusion");  // 2026-11-18 · 6 players · CSCI pump in palliative care
crowd("Name a pediatric orthopedic condition", 65, "rickets|nutritional rickets");  // 2026-11-18 · 4 players · bowing deformities in children
crowd("Name a pharmacy calculation or formula", 77, "calvert formula|calvert equation");  // 2026-11-18 · 1 player · carboplatin AUC dosing
crowd("Name a pharmacy insurance or billing term", 75, "chronic care management|ccm|chronic care managemrnt");  // 2026-11-18 · 1 player · CMS billing service
crowd("Name a phobia", 85, "katsaridaphobia|katsariddophobia|fear of cockroaches");  // 2026-11-18 · 1 player · fear of cockroaches
crowd("Name a preventive screening test", 92, "lipoprotein(a)|lipoprotein a|lp(a)");  // 2026-11-18 · 1 player · once-in-lifetime CV risk screen
crowd("Name a primary immunodeficiency", 86, "congenital asplenia|isolated congenital asplenia|asplenia");  // 2026-11-18 · 3 players · IUIS-listed innate defect
crowd("Name a restraint or restraint alternative", 62, "straitjacket|straight jacket|straightjacket|strait jacket");  // 2026-11-18 · 3 players · restraint garment
crowd("Name a risk factor for osteoporosis", 85, "cirrhosis|chronic liver disease|liver cirrhosis");  // 2026-11-18 · 1 player · hepatic osteodystrophy
crowd("Name a sign of Addison disease or adrenal crisis", 45, "tachycardia|fast heart rate|rapid heart rate");  // 2026-11-18 · 3 players · with hypotension in crisis
crowd("Name a sign of meningitis", 61, "raised intracranial pressure|increased intracranial pressure|intracranial pressure|intrcranial pressure|raised icp");  // 2026-11-18 · 1 player · raised ICP in meningitis
crowd("Name a sign of thyroid storm or hyperthyroidism", 41, "hypertension|systolic hypertension|high blood pressure");  // 2026-11-18 · 3 players · systolic HTN in hyperthyroidism
crowd("Name an oral surgery procedure", 47, "jaw reconstruction|mandibular reconstruction|maxillary reconstruction");  // 2026-11-18 · 2 players · OMFS reconstruction
crowd("Name something found in a hospital room", 80, "otoscope|wall otoscope|diagnostic set");  // 2026-11-18 · 1 player · wall-mounted diagnostic set
crowd("Name a term from medical school or residency", 88, "pathology");  // 2026-11-18 · 2 players · core preclinical subject
crowd("Name an interventional radiology procedure", 94, "genicular nerve ablation|genicular nerve radiofrequency ablation|genicular nerve rfa");  // 2026-11-18 · 1 player · IR knee pain procedure
crowdAlias("Name a cardiac procedure or intervention", "cardiac catheterization", "angiogram|angiography|coronary angiogram|coronary angiography");  // 2026-11-18 · 8 players · same as cardiac catheterization
crowdAlias("Name a cardiac procedure or intervention", "surgical aortic valve replacement", "valve replacement|valve replavement|bovine valve replacement");  // 2026-11-18 · 14 players · same as surgical aortic valve replacement
crowdAlias("Name a cardiac procedure or intervention", "mitral valve repair", "valve repair");  // 2026-11-18 · 5 players · same as mitral valve repair
crowdAlias("Name a cardiac procedure or intervention", "coronary artery bypass graft", "triple bypass|quadruple bypass|triple bypass graft|double bypass");  // 2026-11-18 · 9 players · same as coronary artery bypass graft
crowdAlias("Name a cardiac procedure or intervention", "heart transplant", "transplant|xenotransplant|cardiac xenotransplant");  // 2026-11-18 · 4 players · same as heart transplant
crowdAlias("Name a cardiac procedure or intervention", "cardiopulmonary resuscitation", "cardiac massage");  // 2026-11-18 · 1 player · same as cardiopulmonary resuscitation
crowdAlias("Name a cardiac procedure or intervention", "aspiration thrombectomy", "thrombectomy|angiovac");  // 2026-11-18 · 3 players · same as aspiration thrombectomy
crowdAlias("Name a cause of sudden cardiac death", "ventricular fibrillation", "arrhythmia|arrythmia|ventricular arrhythmia");  // 2026-11-18 · 5 players · same as ventricular fibrillation
crowdAlias("Name a cause of sudden cardiac death", "arrhythmogenic right ventricular cardiomyopathy", "arrythmogenic right ventricle");  // 2026-11-18 · 1 player · same as arrhythmogenic right ventricular cardiomyopathy
crowdAlias("Name a cause of sudden cardiac death", "hypertrophic cardiomyopathy", "cardiomyopathy|hypertrophy");  // 2026-11-18 · 8 players · same as hypertrophic cardiomyopathy
crowdAlias("Name a cause of sudden cardiac death", "coronary artery disease", "ischemia|ischaemia");  // 2026-11-18 · 5 players · same as coronary artery disease
crowdAlias("Name a cause of sudden cardiac death", "acute myocardial infarction", "plaque rupture");  // 2026-11-18 · 1 player · same as acute myocardial infarction
crowdAlias("Name a cause of sudden cardiac death", "aortic dissection", "dissection");  // 2026-11-18 · 1 player · same as aortic dissection
crowdAlias("Name a cause of sudden cardiac death", "cardiac tamponade", "tamponade");  // 2026-11-18 · 4 players · same as cardiac tamponade
crowdAlias("Name a cause of sudden cardiac death", "long qt syndrome", "prolonged qt");  // 2026-11-18 · 1 player · same as long qt syndrome
crowdAlias("Name a cause of sudden cardiac death", "takotsubo cardiomyopathy", "takutsobu");  // 2026-11-18 · 1 player · same as takotsubo cardiomyopathy
crowdAlias("Name a cause of sudden cardiac death", "pulmonary embolism", "embolism|clot|blood clot");  // 2026-11-18 · 11 players · same as pulmonary embolism
crowdAlias("Name an interventional radiology procedure", "radiofrequency ablation", "ablation|heptatic ablation|hepatic ablation");  // 2026-11-18 · 11 players · same as radiofrequency ablation
crowdAlias("Name an interventional radiology procedure", "ct-guided biopsy", "biopsy|image guided biopsy");  // 2026-11-18 · 4 players · same as ct-guided biopsy
crowdAlias("Name an interventional radiology procedure", "radioembolization", "y90|y-90");  // 2026-11-18 · 3 players · same as radioembolization
crowdAlias("Name an interventional radiology procedure", "percutaneous cholecystostomy", "chole tube|cholecystostomy tube");  // 2026-11-18 · 1 player · same as percutaneous cholecystostomy
crowdAlias("Name an interventional radiology procedure", "percutaneous abscess drainage", "drainage of a colic abscess|aspiration and drainage");  // 2026-11-18 · 2 players · same as percutaneous abscess drainage
crowdAlias("Name an interventional radiology procedure", "embolization", "tumor embolisation|tumor embolization");  // 2026-11-18 · 1 player · same as embolization
crowdAlias("Name an interventional radiology procedure", "ureteral stent placement", "ureter stent");  // 2026-11-18 · 1 player · same as ureteral stent placement
crowdAlias("Name an interventional radiology procedure", "lumbar puncture", "spinal tap");  // 2026-11-18 · 1 player · same as lumbar puncture
crowdAlias("Name an interventional radiology procedure", "cyst aspiration and sclerosis", "cyst aspiration");  // 2026-11-18 · 1 player · same as cyst aspiration and sclerosis
crowdAlias("Name a diagnostic test for an infectious disease", "afb smear", "afb");  // 2026-11-18 · 4 players · same as afb smear
crowdAlias("Name a diagnostic test for an infectious disease", "latex agglutination", "agglutination");  // 2026-11-18 · 1 player · same as latex agglutination
crowdAlias("Name a diagnostic test for an infectious disease", "aso titer", "aso|asot");  // 2026-11-18 · 5 players · same as aso titer
crowdAlias("Name a diagnostic test for an infectious disease", "c difficile toxin test", "c diff");  // 2026-11-18 · 1 player · same as c difficile toxin test
crowdAlias("Name a diagnostic test for an infectious disease", "legionella culture", "charcoal used in diagnosing legionella|bcye agar");  // 2026-11-18 · 1 player · same as legionella culture
crowdAlias("Name a diagnostic test for an infectious disease", "coccidioides serology", "coccidioides antibody test");  // 2026-11-18 · 1 player · same as coccidioides serology
crowdAlias("Name a diagnostic test for an infectious disease", "covid-19 pcr", "covid test");  // 2026-11-18 · 6 players · same as covid-19 pcr
crowdAlias("Name a diagnostic test for an infectious disease", "csf analysis", "csf");  // 2026-11-18 · 5 players · same as csf analysis
crowdAlias("Name a diagnostic test for an infectious disease", "fta-abs", "flourescent antibody absorption|fluorescent treponemal antibody absorption");  // 2026-11-18 · 1 player · same as fta-abs
crowdAlias("Name a diagnostic test for an infectious disease", "16s rrna sequencing", "16s pcr");  // 2026-11-18 · 1 player · same as 16s rrna sequencing
crowdAlias("Name a diagnostic test for an infectious disease", "hiv 4th generation test", "4th generation hiv|hiv|hiv test");  // 2026-11-18 · 4 players · same as hiv 4th generation test
crowdAlias("Name a diagnostic test for an infectious disease", "india ink stain", "india blue stain");  // 2026-11-18 · 1 player · same as india ink stain
crowdAlias("Name a diagnostic test for an infectious disease", "bronchoalveolar lavage", "lavage");  // 2026-11-18 · 1 player · same as bronchoalveolar lavage
crowdAlias("Name a diagnostic test for an infectious disease", "urine culture", "mid stream urine|midstream urine");  // 2026-11-18 · 1 player · same as urine culture
crowdAlias("Name a diagnostic test for an infectious disease", "respiratory viral panel", "respiratory panel");  // 2026-11-18 · 1 player · same as respiratory viral panel
crowdAlias("Name a diagnostic test for an infectious disease", "rpr", "syphilis serology");  // 2026-11-18 · 1 player · same as rpr
crowdAlias("Name a diagnostic test for an infectious disease", "tuberculin skin test", "tb test|tb");  // 2026-11-18 · 8 players · same as tuberculin skin test
crowdAlias("Name a diagnostic test for an infectious disease", "vdrl", "vldr");  // 2026-11-18 · 1 player · same as vdrl
crowdAlias("Name a diagnostic test for an infectious disease", "tzanck smear", "zanck spere");  // 2026-11-18 · 1 player · same as tzanck smear
crowdAlias("Name a palliative or hospice care term", "end of life care", "eol");  // 2026-11-18 · 4 players · same as end of life care
crowdAlias("Name a palliative or hospice care term", "health care proxy", "power of attorney|healthcare power of attorney");  // 2026-11-18 · 4 players · same as health care proxy
crowdAlias("Name a palliative or hospice care term", "death rattle", "secretion|secretions|terminal secretions");  // 2026-11-18 · 8 players · same as death rattle
crowdAlias("Name a palliative or hospice care term", "symptom management", "pain control");  // 2026-11-18 · 3 players · same as symptom management
crowdAlias("Name a palliative or hospice care term", "palliative care", "supportive care");  // 2026-11-18 · 3 players · same as palliative care
crowdAlias("Name a palliative or hospice care term", "do not resuscitate", "dnacpr");  // 2026-11-18 · 1 player · same as do not resuscitate
crowdAlias("Name a palliative or hospice care term", "interdisciplinary team", "idg|interdisciplinary group");  // 2026-11-18 · 1 player · same as interdisciplinary team
crowdAlias("Name a palliative or hospice care term", "comfort feeding", "pleasure po|pleasure feeds");  // 2026-11-18 · 1 player · same as comfort feeding
crowdAlias("Name a palliative or hospice care term", "air hunger", "breath hunger");  // 2026-11-18 · 1 player · same as air hunger
crowdAlias("Name a blood test", "antiphospholipid antibodies", "antiphosphlipid");  // 2026-11-18 · 1 player · same as antiphospholipid antibodies
crowdAlias("Name a blood test", "anti ttg iga", "ttg-iga");  // 2026-11-18 · 1 player · same as anti ttg iga
crowdAlias("Name a blood test", "white blood cell count", "wcc");  // 2026-11-18 · 1 player · same as white blood cell count
crowdAlias("Name a cause of acute pancreatitis", "alcohol", "etoh");  // 2026-11-18 · 3 players · same as alcohol
crowdAlias("Name a cause of bad breath", "tongue coating", "white tongue");  // 2026-11-18 · 2 players · same as tongue coating
crowdAlias("Name a cause of chronic cough", "ace inhibitors", "acei");  // 2026-11-18 · 2 players · same as ace inhibitors
crowdAlias("Name a cause of chronic cough", "zenker diverticulum", "pharyngeal pouch");  // 2026-11-18 · 1 player · same as zenker diverticulum
crowdAlias("Name a cause of chronic cough", "interstitial lung disease", "uip|usual interstitial pneumonia");  // 2026-11-18 · 2 players · same as interstitial lung disease
crowdAlias("Name a cause of eosinophilia", "parasites", "parasitic infection");  // 2026-11-18 · 2 players · same as parasites
crowdAlias("Name a cause of eosinophilia", "cysticercosis", "taenia solium");  // 2026-11-18 · 1 player · same as cysticercosis
crowdAlias("Name a cause of hyperkalemia", "high potassium diet", "banana|bananas");  // 2026-11-18 · 1 player · same as high potassium diet
crowdAlias("Name a cause of hypotension", "blood pressure medications", "medication|medications");  // 2026-11-18 · 2 players · same as blood pressure medications
crowdAlias("Name a cause of loose teeth (tooth mobility)", "bone loss", "bone recession");  // 2026-11-18 · 1 player · same as bone loss
crowdAlias("Name a cause of loose teeth (tooth mobility)", "root fracture", "broken tooth");  // 2026-11-18 · 1 player · same as root fracture
crowdAlias("Name a cause of loose teeth (tooth mobility)", "squamous cell carcinoma", "cancer|oral cancer");  // 2026-11-18 · 1 player · same as squamous cell carcinoma
crowdAlias("Name a cause of loose teeth (tooth mobility)", "occlusal trauma", "tfo|trauma from occlusion|poorly fitting rpd");  // 2026-11-18 · 2 players · same as occlusal trauma
crowdAlias("Name a cause of rhabdomyolysis", "strenuous exercise", "exercise");  // 2026-11-18 · 6 players · same as strenuous exercise
crowdAlias("Name a cause of swollen lymph nodes", "lymphoma", "malt|malt lymphoma");  // 2026-11-18 · 1 player · same as lymphoma
crowdAlias("Name a complication of immobility", "pressure injury", "pressure wounds");  // 2026-11-18 · 2 players · same as pressure injury
crowdAlias("Name a complication of pregnancy", "gestational gingivitis", "gum disease|pregnancy gingivitis");  // 2026-11-18 · 1 player · same as gestational gingivitis
crowdAlias("Name a course or subject in dental school", "oral surgery", "extractions");  // 2026-11-18 · 2 players · same as oral surgery
crowdAlias("Name a dental bur or handpiece", "pear shaped bur", "330|330 bur");  // 2026-11-18 · 6 players · same as pear shaped bur
crowdAlias("Name a dental bur or handpiece", "245 bur", "245");  // 2026-11-18 · 1 player · same as 245 bur
crowdAlias("Name a disease linked to an HLA type", "type 1 diabetes", "diabetes");  // 2026-11-18 · 3 players · same as type 1 diabetes
crowdAlias("Name a disease linked to an HLA type", "hla b27 uveitis", "uveitis");  // 2026-11-18 · 3 players · same as hla b27 uveitis
crowdAlias("Name a disease linked to an HLA type", "inflammatory bowel disease arthritis", "enteric arthritis|enteropathic arthritis");  // 2026-11-18 · 2 players · same as inflammatory bowel disease arthritis
crowdAlias("Name a drug that causes hypoglycemia", "beta blockers", "carvedilol");  // 2026-11-18 · 1 player · same as beta blockers
crowdAlias("Name a drug that causes orthostatic hypotension", "diuretics", "furosemide");  // 2026-11-18 · 3 players · same as diuretics
crowdAlias("Name a drug that causes orthostatic hypotension", "calcium channel blockers", "amlodipine");  // 2026-11-18 · 3 players · same as calcium channel blockers
crowdAlias("Name a drug that causes orthostatic hypotension", "beta blockers", "propranolol");  // 2026-11-18 · 2 players · same as beta blockers
crowdAlias("Name a drug that causes SIADH", "sertraline", "zoloft");  // 2026-11-18 · 2 players · same as sertraline
crowdAlias("Name a drug that causes SIADH", "ace inhibitors", "lisinopril");  // 2026-11-18 · 3 players · same as ace inhibitors
crowdAlias("Name a factor that delays wound healing", "diabetes", "blood sugar|high blood sugar|hyperglycemia");  // 2026-11-18 · 4 players · same as diabetes
crowdAlias("Name a feature of Down syndrome", "single palmar crease", "palmar crease");  // 2026-11-18 · 1 player · same as single palmar crease
crowdAlias("Name a food high in sodium", "cured fish", "salted cod|salt cod");  // 2026-11-18 · 1 player · same as cured fish
crowdAlias("Name a food that causes gas or bloating", "wheat", "gluten");  // 2026-11-18 · 3 players · same as wheat
crowdAlias("Name a food that causes gas or bloating", "fatty foods", "grease|greasy food");  // 2026-11-18 · 1 player · same as fatty foods
crowdAlias("Name a gastrointestinal or liver infection", "amebiasis", "histolitica|histolytica");  // 2026-11-18 · 1 player · same as amebiasis
crowdAlias("Name a healthcare profession", "pain management specialist", "pain specialist");  // 2026-11-18 · 1 player · same as pain management specialist
crowdAlias("Name a healthcare profession", "physical therapist", "pelvic floor physio|pelvic floor physiotherapist");  // 2026-11-18 · 1 player · same as physical therapist
crowdAlias("Name a healthcare profession", "porter", "patient transporter");  // 2026-11-18 · 3 players · same as porter
crowdAlias("Name a healthcare profession", "sonographer", "ultrasound technician");  // 2026-11-18 · 1 player · same as sonographer
crowdAlias("Name a hepatotoxic drug", "valproate", "valproic acid");  // 2026-11-18 · 2 players · same as valproate
crowdAlias("Name a hospital unit or department", "human resources", "hr");  // 2026-11-18 · 3 players · same as human resources
crowdAlias("Name a hospital unit or department", "operating room", "ot");  // 2026-11-18 · 1 player · same as operating room
crowdAlias("Name a ligament or tendon", "conjoint tendon", "coracobrachialis tendon");  // 2026-11-18 · 1 player · same as conjoint tendon
crowdAlias("Name a lung disease", "granulomatosis with polyangiitis", "gpa");  // 2026-11-18 · 2 players · same as granulomatosis with polyangiitis
crowdAlias("Name a lysosomal storage disease", "mucopolysaccharidosis", "muccopolysaccharides|mucopolysaccharides");  // 2026-11-18 · 1 player · same as mucopolysaccharidosis
crowdAlias("Name a medical sign or term named after an animal", "owl eye inclusions", "owl");  // 2026-11-18 · 2 players · same as owl eye inclusions
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypertrophic cardiomyopathy", "hocm");  // 2026-11-18 · 3 players · same as hypertrophic cardiomyopathy
crowdAlias("Name a medical term that starts with hyper- or hypo-", "hypocoagulable", "hypocoaguable state|hypocoagulable state");  // 2026-11-18 · 1 player · same as hypocoagulable
crowdAlias("Name a mental health disorder", "reactive attachment", "attachment disorder");  // 2026-11-18 · 1 player · same as reactive attachment
crowdAlias("Name a nutrient deficiency disease", "vitamin b6 deficiency", "b6");  // 2026-11-18 · 2 players · same as vitamin b6 deficiency
crowdAlias("Name a part of the brain", "wernickes area", "posterior speech area");  // 2026-11-18 · 1 player · same as wernickes area
crowdAlias("Name a part of the heart", "right auricle", "oracles");  // 2026-11-18 · 1 player · same as right auricle
crowdAlias("Name a pharmacy calculation or formula", "creatinine clearance", "cockoff and gault|cockcroft gault");  // 2026-11-18 · 1 player · same as creatinine clearance
crowdAlias("Name a pharmacy calculation or formula", "egfr", "egfr adjusted bsa");  // 2026-11-18 · 1 player · same as egfr
crowdAlias("Name a preventive screening test", "low dose ct", "chest ct");  // 2026-11-18 · 2 players · same as low dose ct
crowdAlias("Name a preventive screening test", "first trimester screen", "double marker|double marker test");  // 2026-11-18 · 1 player · same as first trimester screen
crowdAlias("Name a restraint or restraint alternative", "mitts", "glove|gloves");  // 2026-11-18 · 2 players · same as mitts
crowdAlias("Name a restraint or restraint alternative", "wrist restraints", "cuff|cuffs");  // 2026-11-18 · 3 players · same as wrist restraints
crowdAlias("Name a risk factor for blood clots (DVT or PE)", "immobility", "immobilization|low movement");  // 2026-11-18 · 2 players · same as immobility
crowdAlias("Name a risk factor for dental caries", "sugar", "diet");  // 2026-11-18 · 6 players · same as sugar
crowdAlias("Name a risk factor for dental caries", "defective restorations", "inadequate restorations");  // 2026-11-18 · 1 player · same as defective restorations
crowdAlias("Name a side effect of a heart or blood pressure medication", "bradycardia", "reflex brady|reflex bradycardia");  // 2026-11-18 · 1 player · same as bradycardia
crowdAlias("Name a side effect of a heart or blood pressure medication", "frequent urination", "urination");  // 2026-11-18 · 1 player · same as frequent urination
crowdAlias("Name a sign of a blood transfusion reaction", "tachycardia", "increased heartrate|increased heart rate");  // 2026-11-18 · 1 player · same as tachycardia
crowdAlias("Name a sign of anaphylaxis", "swelling of face", "periorbital edema");  // 2026-11-18 · 1 player · same as swelling of face
crowdAlias("Name a sign of compartment syndrome", "poikilothermia", "coldness");  // 2026-11-18 · 1 player · same as poikilothermia
crowdAlias("Name a sign of sepsis", "elevated lactate", "elevated lactic acid");  // 2026-11-18 · 1 player · same as elevated lactate
crowdAlias("Name a step in a dental cleaning visit", "oral hygiene instructions", "ohi");  // 2026-11-18 · 1 player · same as oral hygiene instructions
crowdAlias("Name a structure in the thorax or mediastinum", "internal thoracic artery", "ima");  // 2026-11-18 · 2 players · same as internal thoracic artery
crowdAlias("Name a symptom of a heart attack", "epigastric pain", "abdominal pain");  // 2026-11-18 · 1 player · same as epigastric pain
crowdAlias("Name a symptom of low blood sugar", "confusion", "altered level of consciousness");  // 2026-11-18 · 1 player · same as confusion
crowdAlias("Name a trigger of a migraine", "loud noise", "sound");  // 2026-11-18 · 2 players · same as loud noise
crowdAlias("Name a type of therapy used in mental health care", "electroconvulsive therapy", "electrokonvulsion");  // 2026-11-18 · 1 player · same as electroconvulsive therapy
crowdAlias("Name a virus that infects humans", "epstein barr", "epv");  // 2026-11-18 · 1 player · same as epstein barr
crowdAlias("Name a virus that infects humans", "htlv", "human t-cell leukemia virus");  // 2026-11-18 · 1 player · same as htlv
crowdAlias("Name an eye disease or condition", "dry eye", "keratoconjunctivitis sicca");  // 2026-11-18 · 1 player · same as dry eye
crowdAlias("Name an infection during pregnancy or in a newborn", "neonatal meningitis", "meningitis");  // 2026-11-18 · 4 players · same as neonatal meningitis
crowdAlias("Name an infection during pregnancy or in a newborn", "group b streptococcus", "strep b|step b|strep galatacie");  // 2026-11-18 · 7 players · same as group b streptococcus
crowdAlias("Name an infection during pregnancy or in a newborn", "parvovirus b19", "parvo b19");  // 2026-11-18 · 1 player · same as parvovirus b19
crowdAlias("Name an occupational lung exposure or disease", "talc", "talcosis");  // 2026-11-18 · 1 player · same as talc
crowdAlias("Name something in a first aid kit", "alcohol wipes", "alcohol swabs");  // 2026-11-18 · 2 players · same as alcohol wipes
crowdAlias("Name something measured at a checkup", "blood pressure", "bp");  // 2026-11-18 · 5 players · same as blood pressure
crowdAlias("Name a cause of difficulty chewing", "tmj ankylosis", "fibrosis of tmj");  // 2026-11-18 · 1 player · same as tmj ankylosis
crowdAlias("Name a cause of difficulty chewing", "malocclusion", "occulsion bite");  // 2026-11-18 · 1 player · same as malocclusion

// ===== 2026-11-19 nightly review =====
crowd("Name something measured at a checkup", 40, "calcium|serum calcium");  // 2026-11-19 · 19 players · routine metabolic panel component
crowd("Name an antibiotic resistance mechanism or drug-resistant organism", 70, "clostridioides difficile|c diff|c difficile|clostridium difficile|cdiff");  // 2026-11-19 · 12 players · CDC urgent antibiotic-resistance threat
crowd("Name something measured at a checkup", 57, "red blood cell count|rbc|rbcs|red blood cells|rbc count");  // 2026-11-19 · 9 players · CBC component
crowd("Name a medical prefix, suffix or word root", 75, "rhabdo|rhabdomyo");  // 2026-11-19 · 9 players · root meaning rod/striated (rhabdomyolysis)
crowd("Name something measured at a checkup", 62, "bicarbonate|co2|carbon dioxide|total co2|serum bicarbonate");  // 2026-11-19 · 7 players · basic metabolic panel component
crowd("Name something measured at a checkup", 62, "pupils|pupil exam|pupillary reflex|perrla|pupil dilation|pupil size");  // 2026-11-19 · 7 players · standard eye/neuro exam
crowd("Name a rehabilitation or physical medicine (PM&R) term", 78, "ambulation|ambulate|ambulating|ambulatory");  // 2026-11-19 · 7 players · core PM&R mobility term
crowd("Name a rehabilitation or physical medicine (PM&R) term", 78, "flexion");  // 2026-11-19 · 7 players · joint motion term used in ROM testing (like circumduction)
crowd("Name something measured at a checkup", 65, "magnesium|serum magnesium|mg");  // 2026-11-19 · 6 players · common electrolyte lab
crowd("Name something measured at a checkup", 68, "jugular venous pressure|jvd|jvp|jugular venous distension");  // 2026-11-19 · 5 players · standard cardiovascular exam
crowd("Name something measured at a checkup", 68, "chloride|serum chloride");  // 2026-11-19 · 5 players · basic metabolic panel component
crowd("Name something measured at a checkup", 68, "cranial nerve exam|cranial nerves|cranial nerve testing");  // 2026-11-19 · 5 players · part of neuro exam
crowd("Name a rehabilitation or physical medicine (PM&R) term", 82, "valgus|valgus deformity");  // 2026-11-19 · 5 players · alignment term used in rehab/MSK
crowd("Name a rehabilitation or physical medicine (PM&R) term", 82, "rice|rest ice compression elevation|rice protocol");  // 2026-11-19 · 5 players · standard acute soft-tissue injury protocol
crowd("Name a skin finding or type of skin lesion", 56, "melanoma");  // 2026-11-19 · 5 players · pigmented malignant skin lesion
crowd("Name something found in a hospital room", 56, "urinary catheter|catheter|foley catheter|foley|iv catheter");  // 2026-11-19 · 5 players · standard hospital equipment
crowd("Name something measured at a checkup", 72, "sensory exam|sensation|monofilament test|sensory testing");  // 2026-11-19 · 4 players · neuro and diabetic foot exam
crowd("Name a gastrointestinal or liver infection", 86, "chagas disease|chagas|trypanosoma cruzi|chagasic megacolon|chagasic megaesophagus");  // 2026-11-19 · 4 players · GI megaesophagus/megacolon from T. cruzi
crowd("Name a rehabilitation or physical medicine (PM&R) term", 85, "nerve block|peripheral nerve block");  // 2026-11-19 · 4 players · interventional physiatry procedure
crowd("Name a rehabilitation or physical medicine (PM&R) term", 85, "varus|varus deformity");  // 2026-11-19 · 4 players · alignment term used in rehab/MSK
crowd("Name a rehabilitation or physical medicine (PM&R) term", 85, "rotation|internal rotation|external rotation");  // 2026-11-19 · 4 players · joint motion term used in ROM testing
crowd("Name a pharmacy job or setting", 54, "dispenser|pharmacy dispenser|dispensing assistant");  // 2026-11-19 · 4 players · recognized pharmacy support role
crowd("Name a rehabilitation or physical medicine (PM&R) term", 88, "extension");  // 2026-11-19 · 3 players · joint motion term used in ROM testing
crowd("Name a rehabilitation or physical medicine (PM&R) term", 88, "abduction");  // 2026-11-19 · 3 players · joint motion term used in ROM testing
crowd("Name a rehabilitation or physical medicine (PM&R) term", 88, "adduction");  // 2026-11-19 · 3 players · joint motion term used in ROM testing
crowd("Name a healthcare profession", 85, "electrophysiologist|cardiac electrophysiologist");  // 2026-11-19 · 3 players · cardiology subspecialist
crowd("Name an environmental or wilderness injury or illness", 57, "ross river virus|ross river fever");  // 2026-11-19 · 3 players · mosquito-borne illness like other vector diseases listed
crowd("Name a structure of the abdominal wall or groin", 58, "gubernaculum|gubernaculum testis");  // 2026-11-19 · 3 players · embryologic inguinal structure guiding testicular descent
crowd("Name a medical abbreviation", 67, "hld|hyperlipidemia");  // 2026-11-19 · 3 players · common chart abbreviation for hyperlipidemia
crowd("Name a drug that causes orthostatic hypotension", 65, "angiotensin receptor blockers|arbs|arb|losartan|valsartan");  // 2026-11-19 · 3 players · hypotension like ACE inhibitors (listed)
crowd("Name a complication of dental implants", 69, "oroantral communication|oac|sinus perforation|perforating the sinus|peforating the sinus");  // 2026-11-19 · 2 players · maxillary posterior implant complication
crowd("Name something measured at a checkup", 89, "lipoprotein(a)|lp(a)|lpa|lipoprotein a");  // 2026-11-19 · 1 player · guideline-endorsed once-in-life lipid test
crowd("Name something measured at a checkup", 89, "ear exam|otoscope exam|otoscopy|otoscopic exam");  // 2026-11-19 · 1 player · standard physical exam
crowd("Name something measured at a checkup", 89, "muscle tone|tone");  // 2026-11-19 · 1 player · part of neuro exam
crowd("Name something measured at a checkup", 89, "visual fields|visual field test|confrontation visual fields");  // 2026-11-19 · 1 player · standard eye exam
crowd("Name a gastrointestinal physiology term", 95, "haustral churning|haustral contractions");  // 2026-11-19 · 1 player · classic colonic motility pattern
crowd("Name a gastrointestinal physiology term", 95, "plicae circulares|circular folds|valvulae conniventes|folds of kerckring");  // 2026-11-19 · 1 player · absorptive surface folds like villi
crowd("Name a rehabilitation or physical medicine (PM&R) term", 95, "anterior drawer test|anterior drawer");  // 2026-11-19 · 1 player · standard MSK exam special test
crowd("Name a rehabilitation or physical medicine (PM&R) term", 95, "dystonia");  // 2026-11-19 · 1 player · movement disorder managed in rehab (botox, like spasticity)
crowd("Name a rehabilitation or physical medicine (PM&R) term", 95, "lachman test|lachman");  // 2026-11-19 · 1 player · standard MSK exam special test
crowd("Name a medical prefix, suffix or word root", 95, "mural|muro");  // 2026-11-19 · 1 player · root meaning wall (intramural)
crowd("Name a medical prefix, suffix or word root", 95, "pterygo|pteryg");  // 2026-11-19 · 1 player · root meaning wing (pterygoid)
crowd("Name a medical prefix, suffix or word root", 95, "viscero|viscer|viscera");  // 2026-11-19 · 1 player · root meaning internal organs (visceromegaly)
crowd("Name a healthcare profession", 93, "kinesiotherapist|kinesiotherapiast");  // 2026-11-19 · 1 player · recognized allied health profession
crowd("Name a healthcare profession", 93, "neuropsychiatrist");  // 2026-11-19 · 1 player · physician specialty
crowd("Name a healthcare profession", 93, "neuropsychologist");  // 2026-11-19 · 1 player · clinical psychology specialty
crowd("Name a healthcare profession", 93, "occupational medicine physician|occupational medicine");  // 2026-11-19 · 1 player · physician specialty
crowd("Name a healthcare profession", 93, "oral pathologist|oral pathology|oral and maxillofacial pathologist");  // 2026-11-19 · 1 player · dental specialty
crowd("Name a social determinant of health", 84, "economic stability");  // 2026-11-19 · 1 player · Healthy People 2030 SDOH domain
crowd("Name a skin finding or type of skin lesion", 83, "laceration|skin laceration|3mm laceration");  // 2026-11-19 · 1 player · traumatic skin lesion
crowd("Name a skin finding or type of skin lesion", 83, "abrasion|skin abrasion");  // 2026-11-19 · 1 player · traumatic skin lesion
crowd("Name a skin finding or type of skin lesion", 83, "erythema marginatum");  // 2026-11-19 · 1 player · classic rheumatic fever skin finding
crowd("Name a clinical scoring system or decision rule", 90, "beighton score|beighton criteria");  // 2026-11-19 · 1 player · joint hypermobility score
crowd("Name a clinical scoring system or decision rule", 90, "lams|los angeles motor scale");  // 2026-11-19 · 1 player · prehospital stroke LVO scale
crowd("Name a clinical scoring system or decision rule", 90, "puqe score|puqe");  // 2026-11-19 · 1 player · nausea/vomiting of pregnancy score
crowd("Name a clinical scoring system or decision rule", 90, "wainner cluster|wainner clinical prediction rule");  // 2026-11-19 · 1 player · cervical radiculopathy prediction rule
crowd("Name an eye disease or condition", 93, "hypopyon|hypopion");  // 2026-11-19 · 1 player · pus layer in anterior chamber, like hyphema
crowd("Name a food high in sodium", 83, "pho");  // 2026-11-19 · 1 player · broth-based noodle soup, very high sodium
crowd("Name a cause of difficulty swallowing", 89, "angioedema");  // 2026-11-19 · 1 player · oropharyngeal swelling causes dysphagia
crowd("Name a medical abbreviation", 84, "biba|brought in by ambulance");  // 2026-11-19 · 1 player · common ED abbreviation
crowdAlias("Name something measured at a checkup", "blood sugar", "glucose|sugar");  // 2026-11-19 · 44 players · same as blood sugar
crowdAlias("Name something measured at a checkup", "heart rate", "hr|bpm");  // 2026-11-19 · 38 players · same as heart rate
crowdAlias("Name something measured at a checkup", "vision", "eyes|sight|eye|eyesight|eye sight");  // 2026-11-19 · 61 players · same as vision
crowdAlias("Name something measured at a checkup", "ecg", "ekg");  // 2026-11-19 · 15 players · same as ecg
crowdAlias("Name something measured at a checkup", "oxygen saturation", "o2|o2 sat|blood oxygen levels");  // 2026-11-19 · 23 players · same as oxygen saturation
crowdAlias("Name something measured at a checkup", "white blood cell count", "wbc");  // 2026-11-19 · 11 players · same as white blood cell count
crowdAlias("Name something measured at a checkup", "hemoglobin a1c", "hba1c");  // 2026-11-19 · 11 players · same as hemoglobin a1c
crowdAlias("Name something measured at a checkup", "hearing", "ears|ear");  // 2026-11-19 · 16 players · same as hearing
crowdAlias("Name something measured at a checkup", "respiratory rate", "resp rate|rr|breathing");  // 2026-11-19 · 20 players · same as respiratory rate
crowdAlias("Name something measured at a checkup", "heart sounds", "murmur");  // 2026-11-19 · 8 players · same as heart sounds
crowdAlias("Name something measured at a checkup", "vitamin b12", "b12");  // 2026-11-19 · 6 players · same as vitamin b12
crowdAlias("Name something measured at a checkup", "body fat percentage", "fat");  // 2026-11-19 · 5 players · same as body fat percentage
crowdAlias("Name something measured at a checkup", "foot exam", "feet");  // 2026-11-19 · 5 players · same as foot exam
crowdAlias("Name something measured at a checkup", "blood pressure", "pressure");  // 2026-11-19 · 4 players · same as blood pressure
crowdAlias("Name something measured at a checkup", "liver enzymes", "lft");  // 2026-11-19 · 3 players · same as liver enzymes
crowdAlias("Name something measured at a checkup", "spirometry", "fev1");  // 2026-11-19 · 3 players · same as spirometry
crowdAlias("Name something measured at a checkup", "abdominal exam", "abdomen");  // 2026-11-19 · 3 players · same as abdominal exam
crowdAlias("Name something measured at a checkup", "hemoglobin", "hgb");  // 2026-11-19 · 3 players · same as hemoglobin
crowdAlias("Name something measured at a checkup", "oral health", "mouth");  // 2026-11-19 · 3 players · same as oral health
crowdAlias("Name something measured at a checkup", "thyroid", "t3");  // 2026-11-19 · 3 players · same as thyroid
crowdAlias("Name something measured at a checkup", "capillary refill", "cap refil");  // 2026-11-19 · 1 player · same as capillary refill
crowdAlias("Name something measured at a checkup", "gait", "gate");  // 2026-11-19 · 1 player · same as gait
crowdAlias("Name something measured at a checkup", "pain level", "visual analog pain scale");  // 2026-11-19 · 1 player · same as pain level
crowdAlias("Name a gastrointestinal or liver infection", "hepatitis b", "hep b");  // 2026-11-19 · 8 players · same as hepatitis b
crowdAlias("Name a gastrointestinal or liver infection", "clonorchis sinensis", "chinese fluke");  // 2026-11-19 · 6 players · same as clonorchis sinensis
crowdAlias("Name a gastrointestinal or liver infection", "ebv hepatitis", "ebv|epstein barr virus");  // 2026-11-19 · 6 players · same as ebv hepatitis
crowdAlias("Name a gastrointestinal or liver infection", "cmv colitis", "cmv");  // 2026-11-19 · 5 players · same as cmv colitis
crowdAlias("Name a gastrointestinal or liver infection", "hepatitis c", "hep c");  // 2026-11-19 · 5 players · same as hepatitis c
crowdAlias("Name a gastrointestinal or liver infection", "hepatitis a", "hep a");  // 2026-11-19 · 5 players · same as hepatitis a
crowdAlias("Name a gastrointestinal or liver infection", "hepatitis e", "hep e");  // 2026-11-19 · 4 players · same as hepatitis e
crowdAlias("Name a gastrointestinal or liver infection", "cholera", "cholorea");  // 2026-11-19 · 1 player · same as cholera
crowdAlias("Name a gastrointestinal or liver infection", "echinococcosis", "echinococous");  // 2026-11-19 · 1 player · same as echinococcosis
crowdAlias("Name a gastrointestinal or liver infection", "amebiasis", "emobyea histolitica");  // 2026-11-19 · 1 player · same as amebiasis
crowdAlias("Name a gastrointestinal or liver infection", "peliosis hepatis", "hepatic peliosis");  // 2026-11-19 · 1 player · same as peliosis hepatis
crowdAlias("Name a gastrointestinal or liver infection", "intestinal tuberculosis", "tuberculosis");  // 2026-11-19 · 1 player · same as intestinal tuberculosis
crowdAlias("Name a gastrointestinal physiology term", "hydrochloric acid", "acid");  // 2026-11-19 · 5 players · same as hydrochloric acid
crowdAlias("Name a gastrointestinal physiology term", "bile", "bile production");  // 2026-11-19 · 1 player · same as bile
crowdAlias("Name a cause of rhabdomyolysis", "strenuous exercise", "running|workout|cycling|overuse|excessive activity|hyrox|marathon runners");  // 2026-11-19 · 37 players · same as strenuous exercise
crowdAlias("Name a cause of rhabdomyolysis", "prolonged immobilization", "fall|falls|immobile");  // 2026-11-19 · 24 players · same as prolonged immobilization
crowdAlias("Name a cause of rhabdomyolysis", "trauma", "fracture");  // 2026-11-19 · 4 players · same as trauma
crowdAlias("Name a cause of rhabdomyolysis", "prolonged surgery", "surgery");  // 2026-11-19 · 4 players · same as prolonged surgery
crowdAlias("Name a cause of hyperkalemia", "type 4 renal tubular acidosis", "rta|renal tubular acidosis");  // 2026-11-19 · 7 players · same as type 4 renal tubular acidosis
crowdAlias("Name a cause of hyperkalemia", "high potassium diet", "food|too many bananas");  // 2026-11-19 · 5 players · same as high potassium diet
crowdAlias("Name a cause of hyperkalemia", "ace inhibitors", "ace");  // 2026-11-19 · 3 players · same as ace inhibitors
crowdAlias("Name a cause of hyperkalemia", "addison disease", "adiisons");  // 2026-11-19 · 1 player · same as addison disease
crowdAlias("Name a cause of hyperkalemia", "hypoaldosteronism", "aldosterone inhibition|secondary hypoaldosteronism");  // 2026-11-19 · 2 players · same as hypoaldosteronism
crowdAlias("Name a cause of hyperkalemia", "hyperkalemic periodic paralysis", "familial period lic paralytic hyperkalemia");  // 2026-11-19 · 1 player · same as hyperkalemic periodic paralysis
crowdAlias("Name a cause of hyperkalemia", "beta blockers", "metoprolol");  // 2026-11-19 · 1 player · same as beta blockers
crowdAlias("Name a cause of hyperkalemia", "hemolyzed sample", "shaking of vacutainer");  // 2026-11-19 · 1 player · same as hemolyzed sample
crowdAlias("Name a cause of hyperkalemia", "kidney failure", "uremia");  // 2026-11-19 · 1 player · same as kidney failure
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "multidrug resistant pseudomonas aeruginosa", "pseudomonas");  // 2026-11-19 · 17 players · same as multidrug resistant pseudomonas aeruginosa
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "fluoroquinolone resistant escherichia coli", "e coli|ecoli");  // 2026-11-19 · 19 players · same as fluoroquinolone resistant escherichia coli
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "vre", "enterococcus|e.faecilis");  // 2026-11-19 · 10 players · same as vre
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "efflux pump", "pump");  // 2026-11-19 · 7 players · same as efflux pump
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "mdr tb", "tb|tuberculosis|tuberculous");  // 2026-11-19 · 9 players · same as mdr tb
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "hiv drug resistance", "hiv");  // 2026-11-19 · 5 players · same as hiv drug resistance
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "mrsa", "staph aureus|staphylococcus|staphylococcus aureus");  // 2026-11-19 · 7 players · same as mrsa
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "drug resistant neisseria gonorrhoeae", "gonorrhea|neiserria gonorrhea");  // 2026-11-19 · 4 players · same as drug resistant neisseria gonorrhoeae
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "aminoglycoside modifying enzymes", "acetylation");  // 2026-11-19 · 1 player · same as aminoglycoside modifying enzymes
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "carbapenem resistant acinetobacter baumannii", "carbapenem resistant actinobacter");  // 2026-11-19 · 1 player · same as carbapenem resistant acinetobacter baumannii
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "high level aminoglycoside resistance", "gentamicin resistant enterococcus");  // 2026-11-19 · 1 player · same as high level aminoglycoside resistance
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "altered penicillin binding protein", "pbp");  // 2026-11-19 · 1 player · same as altered penicillin binding protein
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "ribosomal mutation", "peptidyl transferase mutation");  // 2026-11-19 · 1 player · same as ribosomal mutation
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "carbapenem resistant enterobacterales", "serratia");  // 2026-11-19 · 1 player · same as carbapenem resistant enterobacterales
crowdAlias("Name an antibiotic resistance mechanism or drug-resistant organism", "penicillin resistant streptococcus pneumoniae", "streptococcus pneumoniae");  // 2026-11-19 · 1 player · same as penicillin resistant streptococcus pneumoniae
crowdAlias("Name a rehabilitation or physical medicine (PM&R) term", "therapeutic exercise", "exercise");  // 2026-11-19 · 11 players · same as therapeutic exercise
crowdAlias("Name a rehabilitation or physical medicine (PM&R) term", "spinal manipulation", "hvla");  // 2026-11-19 · 4 players · same as spinal manipulation
crowdAlias("Name a rehabilitation or physical medicine (PM&R) term", "lumbar radiculopathy", "sciatica");  // 2026-11-19 · 3 players · same as lumbar radiculopathy
crowdAlias("Name a rehabilitation or physical medicine (PM&R) term", "pressure relief", "pressure offloading");  // 2026-11-19 · 1 player · same as pressure relief
crowdAlias("Name a medical prefix, suffix or word root", "myelo", "mye");  // 2026-11-19 · 1 player · same as myelo
crowdAlias("Name a cause of hypoglycemia", "starvation", "fasting");  // 2026-11-19 · 3 players · same as starvation
crowdAlias("Name a cause of hypoglycemia", "anorexia nervosa", "eating disorder");  // 2026-11-19 · 1 player · same as anorexia nervosa
crowdAlias("Name a cause of hypoglycemia", "sulfonylureas", "oha");  // 2026-11-19 · 1 player · same as sulfonylureas
crowdAlias("Name something that raises your cancer risk", "sun exposure", "sun|uv");  // 2026-11-19 · 10 players · same as sun exposure
crowdAlias("Name something that raises your cancer risk", "marijuana smoking", "weed");  // 2026-11-19 · 3 players · same as marijuana smoking
crowdAlias("Name something that raises your cancer risk", "chronic inflammation", "inflammation");  // 2026-11-19 · 3 players · same as chronic inflammation
crowdAlias("Name something that raises your cancer risk", "air pollution", "pollution");  // 2026-11-19 · 3 players · same as air pollution
crowdAlias("Name something that raises your cancer risk", "azo dyes", "dyes");  // 2026-11-19 · 1 player · same as azo dyes
crowdAlias("Name something that raises your cancer risk", "chronic pancreatitis", "pancreatitis");  // 2026-11-19 · 1 player · same as chronic pancreatitis
crowdAlias("Name a cause of failure to thrive in a child", "hypothyroidism", "congenital hypothyroidism");  // 2026-11-19 · 1 player · same as hypothyroidism
crowdAlias("Name a cause of failure to thrive in a child", "munchausen syndrome by proxy", "muchhausens'");  // 2026-11-19 · 1 player · same as munchausen syndrome by proxy
crowdAlias("Name a cause of failure to thrive in a child", "inadequate caloric intake", "not eating");  // 2026-11-19 · 1 player · same as inadequate caloric intake
crowdAlias("Name a cause of failure to thrive in a child", "congenital heart disease", "tetrology of fallot|vsd");  // 2026-11-19 · 2 players · same as congenital heart disease
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "cholinesterase inhibitors", "anticholinestrase inhibitor");  // 2026-11-19 · 1 player · same as cholinesterase inhibitors
crowdAlias("Name a drug for Parkinson or Alzheimer disease", "mao b inhibitors", "mao-b");  // 2026-11-19 · 1 player · same as mao b inhibitors
crowdAlias("Name a healthcare profession", "hospital administrator", "administrator");  // 2026-11-19 · 3 players · same as hospital administrator
crowdAlias("Name a healthcare profession", "perfusionist", "perfusion tech");  // 2026-11-19 · 3 players · same as perfusionist
crowdAlias("Name a social determinant of health", "income", "money|poor");  // 2026-11-19 · 9 players · same as income
crowdAlias("Name a social determinant of health", "food insecurity", "food accessibility");  // 2026-11-19 · 1 player · same as food insecurity
crowdAlias("Name a social determinant of health", "access to health care", "healthcaare");  // 2026-11-19 · 1 player · same as access to health care
crowdAlias("Name a social determinant of health", "social support", "no friends");  // 2026-11-19 · 1 player · same as social support
crowdAlias("Name a social determinant of health", "sexual orientation", "sexuality");  // 2026-11-19 · 1 player · same as sexual orientation
crowdAlias("Name a type of therapy used in mental health care", "electroconvulsive therapy", "shock|electroshock");  // 2026-11-19 · 10 players · same as electroconvulsive therapy
crowdAlias("Name a type of therapy used in mental health care", "art therapy", "art");  // 2026-11-19 · 1 player · same as art therapy
crowdAlias("Name a type of therapy used in mental health care", "milieu therapy", "milleu");  // 2026-11-19 · 1 player · same as milieu therapy
crowdAlias("Name a skin finding or type of skin lesion", "stage 1 pressure injury", "non blanchable skin");  // 2026-11-19 · 1 player · same as stage 1 pressure injury
crowdAlias("Name a clinical scoring system or decision rule", "asa classification", "asa");  // 2026-11-19 · 4 players · same as asa classification
crowdAlias("Name a parasite that infects humans", "helminths", "hemliths");  // 2026-11-19 · 1 player · same as helminths
crowdAlias("Name a parasite that infects humans", "protozoa", "sporozoa");  // 2026-11-19 · 1 player · same as protozoa
crowdAlias("Name a parasite that infects humans", "trichomonas vaginalis", "trichomnalis vagainalis");  // 2026-11-19 · 1 player · same as trichomonas vaginalis
crowdAlias("Name an environmental or wilderness injury or illness", "rocky mountain spotted fever", "rocky mountaine|rocky spotted mountain disease");  // 2026-11-19 · 2 players · same as rocky mountain spotted fever
crowdAlias("Name an environmental or wilderness injury or illness", "snakebite", "russell's viper bite");  // 2026-11-19 · 1 player · same as snakebite
crowdAlias("Name a cause of ataxia", "spinocerebellar ataxia", "spino cerebellar|spinocerebellar degeneration");  // 2026-11-19 · 2 players · same as spinocerebellar ataxia
crowdAlias("Name a structure of the abdominal wall or groin", "parietal peritoneum", "peritoneum");  // 2026-11-19 · 1 player · same as parietal peritoneum
crowdAlias("Name a component or cell of the blood", "neutrophils", "neutrofils");  // 2026-11-19 · 1 player · same as neutrophils
crowdAlias("Name a law or equation of physiology", "mean arterial pressure equation", "map");  // 2026-11-19 · 3 players · same as mean arterial pressure equation
crowdAlias("Name a law or equation of physiology", "bohr effect", "bohr shift");  // 2026-11-19 · 1 player · same as bohr effect
crowdAlias("Name a paraneoplastic syndrome", "lambert eaton", "lems");  // 2026-11-19 · 3 players · same as lambert eaton
crowdAlias("Name a medical imaging test", "mri", "mri contrast|pituitary mri");  // 2026-11-19 · 2 players · same as mri
crowdAlias("Name a medical imaging test", "nuclear medicine", "t99 pertechnate");  // 2026-11-19 · 1 player · same as nuclear medicine
crowdAlias("Name an eye disease or condition", "bacterial conjunctivitis", "conjunctivitis-otitis syndrome");  // 2026-11-19 · 1 player · same as bacterial conjunctivitis
crowdAlias("Name an eye disease or condition", "anterior uveitis", "iridocyclitis");  // 2026-11-19 · 1 player · same as anterior uveitis
crowdAlias("Name an eye disease or condition", "optic atrophy", "optic nerve degeneration");  // 2026-11-19 · 1 player · same as optic atrophy
crowdAlias("Name an eye disease or condition", "optic neuritis", "retrobulbar neuritis");  // 2026-11-19 · 1 player · same as optic neuritis
crowdAlias("Name a food high in sodium", "beef jerky", "beef stick");  // 2026-11-19 · 1 player · same as beef jerky
crowdAlias("Name a food high in sodium", "salted fish", "saltfish");  // 2026-11-19 · 1 player · same as salted fish
crowdAlias("Name a preventive screening test", "glaucoma screening", "eye pressure");  // 2026-11-19 · 1 player · same as glaucoma screening
crowdAlias("Name a preventive screening test", "hepatitis c screening", "hepatitis panel");  // 2026-11-19 · 1 player · same as hepatitis c screening
crowdAlias("Name a preventive screening test", "hpv test", "hpv testin");  // 2026-11-19 · 1 player · same as hpv test
crowdAlias("Name a cause of chronic cough", "cystic fibrosis", "cf");  // 2026-11-19 · 1 player · same as cystic fibrosis
crowdAlias("Name a structure of the lower leg", "distal tibiofibular joint", "syndesmosis");  // 2026-11-19 · 1 player · same as distal tibiofibular joint
crowdAlias("Name a heart condition", "chemotherapy cardiomyopathy", "doxorubicin toxicity");  // 2026-11-19 · 1 player · same as chemotherapy cardiomyopathy
crowdAlias("Name a heart condition", "cardiac sarcoidosis", "sarcoidosis");  // 2026-11-19 · 1 player · same as cardiac sarcoidosis
crowdAlias("Name a heart condition", "transposition of the great arteries", "transposition of arteries");  // 2026-11-19 · 1 player · same as transposition of the great arteries
crowdAlias("Name a heart condition", "premature ventricular contractions", "trigeminy");  // 2026-11-19 · 1 player · same as premature ventricular contractions
crowdAlias("Name a ligament or tendon", "pterygomandibular raphe", "pterigomandibular ligament");  // 2026-11-19 · 1 player · same as pterygomandibular raphe
crowdAlias("Name a respiratory tract infection", "pertussis", "bordatella");  // 2026-11-19 · 1 player · same as pertussis
crowdAlias("Name a respiratory tract infection", "infected bronchiectasis", "bronchiectasis");  // 2026-11-19 · 1 player · same as infected bronchiectasis
crowdAlias("Name a respiratory tract infection", "haemophilus influenzae pneumonia", "haemophylis influenzae");  // 2026-11-19 · 1 player · same as haemophilus influenzae pneumonia
crowdAlias("Name something found in a hospital room", "ambu bag", "bag valve mask");  // 2026-11-19 · 1 player · same as ambu bag
crowdAlias("Name something found in a hospital room", "call light", "staff button");  // 2026-11-19 · 1 player · same as call light
crowdAlias("Name a cause of eosinophilia", "filariasis", "loa loa");  // 2026-11-19 · 4 players · same as filariasis
crowdAlias("Name a cause of eosinophilia", "churg strauss", "eosinophila with granulomatosis");  // 2026-11-19 · 1 player · same as churg strauss
crowdAlias("Name a cause of eosinophilia", "hypereosinophilic syndrome", "idiopathic hypereosinophilia");  // 2026-11-19 · 1 player · same as hypereosinophilic syndrome
crowdAlias("Name a cause of eosinophilia", "parasites", "parastici disease");  // 2026-11-19 · 1 player · same as parasites
crowdAlias("Name a cause of crooked teeth", "impacted teeth", "impaction");  // 2026-11-19 · 1 player · same as impacted teeth
crowdAlias("Name a renal or acid-base physiology term", "metabolic acidosis", "acidosis");  // 2026-11-19 · 4 players · same as metabolic acidosis
crowdAlias("Name a renal or acid-base physiology term", "anion gap metabolic acidosis", "hagma");  // 2026-11-19 · 1 player · same as anion gap metabolic acidosis
crowdAlias("Name a symptom of diabetes", "hunger", "hyperphagia");  // 2026-11-19 · 3 players · same as hunger
crowdAlias("Name a symptom of diabetes", "blurred vision", "eye sight problems");  // 2026-11-19 · 1 player · same as blurred vision
crowdAlias("Name a dental X-ray error", "cone cut", "collimator cut");  // 2026-11-19 · 1 player · same as cone cut
crowdAlias("Name a dental X-ray error", "elongation", "elongate");  // 2026-11-19 · 1 player · same as elongation
crowdAlias("Name a dental X-ray error", "overlapping", "superimposition");  // 2026-11-19 · 1 player · same as overlapping
crowdAlias("Name a blood test", "anti ccp", "anti citrinilated polypeptide");  // 2026-11-19 · 1 player · same as anti ccp
crowdAlias("Name a blood test", "coombs test", "direct combs testing");  // 2026-11-19 · 1 player · same as coombs test
crowdAlias("Name a blood test", "cell free dna", "free dna");  // 2026-11-19 · 1 player · same as cell free dna
crowdAlias("Name a blood test", "rh factor", "rhesus");  // 2026-11-19 · 1 player · same as rh factor
crowdAlias("Name a nutrient deficiency disease", "zinc deficiency", "zinc def");  // 2026-11-19 · 1 player · same as zinc deficiency
crowdAlias("Name a dental emergency", "lost filling", "cracked filling");  // 2026-11-19 · 1 player · same as lost filling
crowdAlias("Name a type of vasculitis", "granulomatosis with polyangiitis", "granulomatous with polyangitis");  // 2026-11-19 · 1 player · same as granulomatosis with polyangiitis
crowdAlias("Name a type of vasculitis", "takayasu arteritis", "takayatsu");  // 2026-11-19 · 1 player · same as takayasu arteritis
crowdAlias("Name a lung disease", "small cell lung cancer", "small cell lung carcinoma");  // 2026-11-19 · 3 players · same as small cell lung cancer
crowdAlias("Name a lung disease", "atelectasis", "actelasis");  // 2026-11-19 · 1 player · same as atelectasis
crowdAlias("Name a lung disease", "ventilator associated pneumonia", "ventilator pneumonia");  // 2026-11-19 · 1 player · same as ventilator associated pneumonia
crowdAlias("Name a common reason for a primary care visit", "fatigue", "malaise");  // 2026-11-19 · 3 players · same as fatigue
crowdAlias("Name a common reason for a primary care visit", "blood in stool", "hematochezia");  // 2026-11-19 · 1 player · same as blood in stool
crowdAlias("Name a hospital unit or department", "step down", "stepdown icu");  // 2026-11-19 · 1 player · same as step down
crowdAlias("Name a part of a removable partial denture", "artificial teeth", "teeth");  // 2026-11-19 · 5 players · same as artificial teeth
crowdAlias("Name a part of a removable partial denture", "denture base", "gum");  // 2026-11-19 · 5 players · same as denture base
crowdAlias("Name a part of a removable partial denture", "wrought wire", "wire");  // 2026-11-19 · 3 players · same as wrought wire
crowdAlias("Name a phobia", "arachnophobia", "spiders");  // 2026-11-19 · 4 players · same as arachnophobia
crowdAlias("Name a phobia", "trypanophobia", "blood draw");  // 2026-11-19 · 1 player · same as trypanophobia
crowdAlias("Name a phobia", "cibophobia", "food");  // 2026-11-19 · 1 player · same as cibophobia
crowdAlias("Name a cause of hypercalcemia", "hyperparathyroidism", "adenoma");  // 2026-11-19 · 3 players · same as hyperparathyroidism
crowdAlias("Name a teratogen", "smoking", "smoke");  // 2026-11-19 · 3 players · same as smoking
crowdAlias("Name a cause of acute pancreatitis", "gallstones", "stone");  // 2026-11-19 · 3 players · same as gallstones
crowdAlias("Name a cause of acute pancreatitis", "hereditary pancreatitis", "spink1 mutation");  // 2026-11-19 · 1 player · same as hereditary pancreatitis
crowdAlias("Name a cause of acute pancreatitis", "hypertriglyceridemia", "teriglyerides");  // 2026-11-19 · 1 player · same as hypertriglyceridemia
crowdAlias("Name a cause of hemolytic anemia", "warm autoimmune hemolytic anemia", "autoimmune warm antibody anemia");  // 2026-11-19 · 1 player · same as warm autoimmune hemolytic anemia
crowdAlias("Name a cause of hemolytic anemia", "hemolytic disease of the newborn", "rh incompatability");  // 2026-11-19 · 1 player · same as hemolytic disease of the newborn
crowdAlias("Name a cause of secondary hypertension", "hyperthyroidism", "thyrotoxicosis");  // 2026-11-19 · 1 player · same as hyperthyroidism
crowdAlias("Name a choking hazard for a young child", "small toys", "doll shoe");  // 2026-11-19 · 1 player · same as small toys
crowdAlias("Name a complication of dental implants", "peri implantitis", "implantitis");  // 2026-11-19 · 1 player · same as peri implantitis
crowdAlias("Name a food that contains lactose", "kefir", "fekir");  // 2026-11-19 · 1 player · same as kefir
crowdAlias("Name a genetic disorder", "fanconi anemia", "fanconis");  // 2026-11-19 · 1 player · same as fanconi anemia
crowdAlias("Name a genetic disorder", "primary ciliary dyskinesia", "pcd");  // 2026-11-19 · 1 player · same as primary ciliary dyskinesia
crowdAlias("Name a hepatotoxic drug", "phenytoin", "dilantin");  // 2026-11-19 · 1 player · same as phenytoin
crowdAlias("Name a mental health disorder", "pseudocyesis", "hysteric pregnancy");  // 2026-11-19 · 1 player · same as pseudocyesis
crowdAlias("Name a mental health disorder", "schizophrenia", "type 2 schitsophrenia");  // 2026-11-19 · 1 player · same as schizophrenia
crowdAlias("Name a pediatric dentistry term or procedure", "pulpotomy", "ferric sulfate amputation");  // 2026-11-19 · 1 player · same as pulpotomy
crowdAlias("Name a pediatric dentistry term or procedure", "preformed metal crown", "pmc");  // 2026-11-19 · 1 player · same as preformed metal crown
crowdAlias("Name a pediatric dentistry term or procedure", "oral sedation", "sedation");  // 2026-11-19 · 1 player · same as oral sedation
crowdAlias("Name a sexually transmitted infection", "herpes", "herpesvirus");  // 2026-11-19 · 1 player · same as herpes
crowdAlias("Name a sign of a dental infection", "tenderness to percussion", "tender to percussion");  // 2026-11-19 · 1 player · same as tenderness to percussion
crowdAlias("Name a sign of dehydration", "poor skin turgor", "skin tenting");  // 2026-11-19 · 1 player · same as poor skin turgor
crowdAlias("Name a sign of sepsis", "positive blood cultures", "blood culture");  // 2026-11-19 · 1 player · same as positive blood cultures
crowdAlias("Name a sign of sepsis", "elevated lactate", "lactic acidosis");  // 2026-11-19 · 1 player · same as elevated lactate
crowdAlias("Name a sign of teeth grinding (bruxism)", "tooth sensitivity", "dentine hypersenstivity");  // 2026-11-19 · 1 player · same as tooth sensitivity
crowdAlias("Name a sign of teeth grinding (bruxism)", "flat teeth", "flat cusps");  // 2026-11-19 · 1 player · same as flat teeth
crowdAlias("Name a sign of teeth grinding (bruxism)", "masseter hypertrophy", "hypertrophic masseter");  // 2026-11-19 · 1 player · same as masseter hypertrophy
crowdAlias("Name an oncogene or tumor suppressor gene", "men1", "menin");  // 2026-11-19 · 1 player · same as men1
crowdAlias("Name an electrolyte imbalance", "low bicarbonate", "hypobicarbonatemia");  // 2026-11-19 · 1 player · same as low bicarbonate
crowdAlias("Name a cause of anion gap metabolic acidosis", "ethylene glycol", "etilenglicol");  // 2026-11-19 · 1 player · same as ethylene glycol
crowdAlias("Name a sign of magnesium sulfate toxicity", "lethargy", "fatigue");  // 2026-11-19 · 4 players · same as lethargy
crowdAlias("Name an herbal supplement", "peppermint", "mint");  // 2026-11-19 · 4 players · same as peppermint
crowdAlias("Name a cause of nephrotic syndrome", "iga nephropathy", "iga");  // 2026-11-19 · 4 players · same as iga nephropathy
crowdAlias("Name a cause of nephrotic syndrome", "minimal change disease", "mcd");  // 2026-11-19 · 1 player · same as minimal change disease
crowdAlias("Name a drug on the Beers list", "benzodiazepines", "xanax|alprazolam");  // 2026-11-19 · 6 players · same as benzodiazepines
crowdAlias("Name a drug that causes orthostatic hypotension", "beta blockers", "metoprolol");  // 2026-11-19 · 3 players · same as beta blockers
crowdAlias("Name a virus that infects humans", "ebola", "filovirius");  // 2026-11-19 · 1 player · same as ebola
crowdAlias("Name a cause of urinary incontinence", "pelvic organ prolapse", "uterine prolapse");  // 2026-11-19 · 1 player · same as pelvic organ prolapse
crowdAlias("Name a complication of a tooth extraction", "nerve damage", "loss of sensation");  // 2026-11-19 · 1 player · same as nerve damage
crowdAlias("Name a complication of a tooth extraction", "medication related osteonecrosis of the jaw", "mandibular necrosis");  // 2026-11-19 · 1 player · same as medication related osteonecrosis of the jaw
crowdAlias("Name a controlled substance", "marijuana", "medical marijauan");  // 2026-11-19 · 1 player · same as marijuana
crowdAlias("Name a dental procedure", "temporary crown", "temporisation");  // 2026-11-19 · 1 player · same as temporary crown
crowdAlias("Name a dosage form that should not be crushed", "extended release", "nifedipine er");  // 2026-11-19 · 1 player · same as extended release
crowdAlias("Name a genetic or molecular lab technique", "gel electrophoresis", "gel electrolysis");  // 2026-11-19 · 1 player · same as gel electrophoresis
crowdAlias("Name a medical ethics or legal concept", "advance directive", "advanced care directive");  // 2026-11-19 · 1 player · same as advance directive
crowdAlias("Name a muscle", "flexor hallucis longus", "flexor hallicus");  // 2026-11-19 · 1 player · same as flexor hallucis longus
crowdAlias("Name a nursing scale or assessment tool", "morse fall", "morose");  // 2026-11-19 · 1 player · same as morse fall
crowdAlias("Name a part of the heart", "bundle of his", "his");  // 2026-11-19 · 1 player · same as bundle of his
crowdAlias("Name a part of the heart", "tendon of todaro", "todaro sinue");  // 2026-11-19 · 1 player · same as tendon of todaro
crowdAlias("Name a reportable (notifiable) disease", "plague", "bubonic plauge");  // 2026-11-19 · 1 player · same as plague
crowdAlias("Name a warning sign of cancer", "frequent infections", "chronic infections can be a warning sign of cancer|infection");  // 2026-11-19 · 2 players · same as frequent infections
crowdAlias("Name a cause of ST elevation", "stemi", "ischemia");  // 2026-11-19 · 3 players · same as stemi
crowdAlias("Name a cause of GI bleeding", "peptic ulcer", "h. pylori");  // 2026-11-19 · 3 players · same as peptic ulcer
crowdAlias("Name a cause of syncope", "hypertrophic obstructive cardiomyopathy", "hocm");  // 2026-11-19 · 1 player · same as hypertrophic obstructive cardiomyopathy
crowdAlias("Name a cause of weight gain", "heart failure", "congestive hesrt failure");  // 2026-11-19 · 1 player · same as heart failure
crowdAlias("Name a dental impression material", "impression plaster", "gypsum");  // 2026-11-19 · 1 player · same as impression plaster
crowdAlias("Name a drug that commonly causes weight gain", "mirtazapine", "remeron");  // 2026-11-19 · 1 player · same as mirtazapine
crowdAlias("Name a newborn assessment or procedure", "drying and stimulating", "stimulation");  // 2026-11-19 · 1 player · same as drying and stimulating
crowdAlias("Name a reason to limit epinephrine in local anesthetic", "severe cardiovascular disease", "coronary heart disease");  // 2026-11-19 · 1 player · same as severe cardiovascular disease
crowdAlias("Name a side effect of long-term corticosteroids", "high blood sugar", "diabetes");  // 2026-11-19 · 1 player · same as high blood sugar
crowdAlias("Name a sign of increased intracranial pressure", "decreased level of consciousness", "unconscious");  // 2026-11-19 · 1 player · same as decreased level of consciousness
crowdAlias("Name a sign of low calcium", "chvostek sign", "chovstek");  // 2026-11-19 · 1 player · same as chvostek sign
crowdAlias("Name a stage of tooth development", "hertwig epithelial root sheath", "hertwig root sheath");  // 2026-11-19 · 1 player · same as hertwig epithelial root sheath
crowdAlias("Name a symptom of a heart attack", "indigestion", "gi upset");  // 2026-11-19 · 1 player · same as indigestion
crowdAlias("Name a symptom of major depression", "significant weight change", "weight loss");  // 2026-11-19 · 1 player · same as significant weight change
crowdAlias("Name a systemic disease with oral signs", "papillon lefevre syndrome", "papillon levon");  // 2026-11-19 · 1 player · same as papillon lefevre syndrome
crowdAlias("Name a trigger of autonomic dysreflexia", "bowel impaction", "bowel obstruction");  // 2026-11-19 · 1 player · same as bowel impaction
crowdAlias("Name a type of bone fracture", "salter harris", "harris sillaux");  // 2026-11-19 · 1 player · same as salter harris
crowdAlias("Name an ECG abnormality", "bundle branch block", "rabbit ears");  // 2026-11-19 · 1 player · same as bundle branch block
crowdAlias("Name a beta blocker (ends in -olol)", "penbutolol", "pentabulol");  // 2026-11-19 · 1 player · same as penbutolol
