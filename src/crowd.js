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
