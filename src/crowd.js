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
