/* ---------- QUESTION BANK ----------
   One answer per line: "<points> name|alias|alias"   (higher points = rarer)
   strip: words ignored when matching, so "femur bone" = "femur".            */
const RAW = [
{q:"Name a cause of chest pain", strip:"", list:`
8 myocardial infarction|heart attack|mi|stemi|nstemi|acute coronary syndrome|acs|acute mi|coronary thrombosis
15 angina|stable angina|unstable angina|angina pectoris
12 coronary artery disease|cad|ischemic heart disease|blocked arteries|coronary heart disease
25 pulmonary embolism|pe|blood clot in lung|blood clot|lung clot
40 aortic dissection|dissection|dissecting aneurysm
55 aortic aneurysm|thoracic aortic aneurysm
45 pericarditis
70 pericardial effusion|cardiac tamponade|tamponade
45 pneumothorax|collapsed lung|tension pneumothorax
30 gerd|acid reflux|reflux|heartburn|gastroesophageal reflux|indigestion
60 costochondritis
50 pneumonia|lung infection
60 bronchitis
65 asthma|asthma attack
70 copd|emphysema|copd exacerbation
75 tuberculosis|tb
75 lung cancer
70 pleural effusion
75 esophageal spasm|esophageal spasms|nutcracker esophagus
75 esophagitis
85 achalasia
70 hiatal hernia|hiatus hernia
70 gastritis
90 boerhaave syndrome|boerhaave|esophageal rupture|esophageal perforation
95 tietze syndrome|tietze
85 shingles|herpes zoster|zoster
40 panic attack|anxiety|panic disorder|stress
85 takotsubo|takotsubo cardiomyopathy|broken heart syndrome|stress cardiomyopathy
65 myocarditis
60 pleurisy|pleuritis|pleuritic chest pain
80 cholecystitis|gallstones|biliary colic|gallbladder attack
70 peptic ulcer|stomach ulcer|ulcer|duodenal ulcer
85 pancreatitis
65 rib fracture|broken rib|fractured rib
55 muscle strain|pulled muscle|chest wall pain|musculoskeletal pain|chest wall strain
90 acute chest syndrome|sickle cell crisis|sickle cell disease
80 cocaine|cocaine use|stimulant use|methamphetamine|amphetamines
75 aortic stenosis
80 hypertrophic cardiomyopathy|hcm|hocm
90 mitral valve prolapse|mvp
80 coronary vasospasm|prinzmetal angina|variant angina|vasospastic angina
90 microvascular angina|cardiac syndrome x|syndrome x
88 spontaneous coronary artery dissection|scad
80 pulmonary hypertension
80 endocarditis
85 arrhythmia|tachycardia|atrial fibrillation|afib|svt
88 mediastinitis
92 pneumomediastinum
88 fibromyalgia
92 slipping rib syndrome|slipping rib
96 precordial catch syndrome|precordial catch|texidor twinge
88 cervical radiculopathy|pinched nerve|thoracic radiculopathy
75 anemia|severe anemia
85 covid|covid 19|coronavirus
88 esophageal cancer
90 mastitis|breast pain
97 mondor disease|mondor
92 sternoclavicular arthritis
90 thoracic outlet syndrome
85 hyperthyroidism|thyroid storm
`},

{q:"Name a bone in the human body", strip:"bone", list:`
5 femur|thigh
10 rib|ribs
10 skull|cranium
15 tibia|shin|shinbone
15 humerus|funny bone|upper arm
20 radius
25 ulna
25 fibula
20 pelvis|hip|hip bone|coxal|innominate|os coxae
30 patella|kneecap|knee cap
25 clavicle|collarbone|collar
30 scapula|shoulder blade
35 sternum|breastbone|breast
35 mandible|jaw|jawbone|lower jaw
40 vertebra|vertebrae|lumbar vertebra|thoracic vertebra|cervical vertebra
30 spine|backbone|spinal column|vertebral column
75 atlas|c1
75 axis|c2
60 ilium
70 ischium
70 pubis|pubic|pubic bone
55 sacrum
50 coccyx|tailbone|tail
55 maxilla|upper jaw
55 stapes|stirrup
70 incus|anvil
65 malleus|hammer
60 ossicles|ossicle|ear bones
65 hyoid
50 carpals|carpal|wrist
55 tarsals|tarsal
70 scaphoid
80 lunate
90 triquetrum|triquetral
85 pisiform
85 trapezium
90 trapezoid
85 capitate
85 hamate
70 talus|ankle|astragalus
60 calcaneus|heel|calcaneum
80 navicular
85 cuboid
85 cuneiform|medial cuneiform|lateral cuneiform|intermediate cuneiform
75 sphenoid
80 ethmoid
90 vomer
90 lacrimal
65 zygomatic|zygoma|cheekbone|cheek|malar
90 palatine
60 occipital
65 parietal
60 temporal
50 frontal|forehead
70 nasal|nose
60 metacarpal|metacarpals
60 metatarsal|metatarsals
45 phalanx|phalange|phalanges|finger bone|toe bone
95 inferior nasal concha|nasal concha|turbinate
80 manubrium
80 xiphoid|xiphoid process|xiphisternum
80 sesamoid
97 fabella
97 os trigonum
97 wormian bone|sutural bone|wormian
92 os acromiale
`},

{q:"Name an antibiotic", strip:"", list:`
5 amoxicillin|amoxil
10 penicillin|penicillin v|penicillin g|pen vk
15 azithromycin|zithromax|z pak|zpak|z pack|zpack
25 doxycycline|doxy
20 ciprofloxacin|cipro
35 cephalexin|keflex
30 augmentin|amoxicillin clavulanate|co amoxiclav|amox clav
30 vancomycin|vanc|vanco
40 clindamycin|cleocin
40 metronidazole|flagyl
45 levofloxacin|levaquin
40 ceftriaxone|rocephin
40 bactrim|trimethoprim sulfamethoxazole|tmp smx|co trimoxazole|septra|sulfamethoxazole
50 nitrofurantoin|macrobid|macrodantin
50 gentamicin
45 erythromycin
45 tetracycline
65 linezolid|zyvox
65 meropenem
60 piperacillin tazobactam|zosyn|pip tazo|piperacillin|tazocin
75 daptomycin|cubicin
60 rifampin|rifampicin
80 colistin|polymyxin e
85 polymyxin b|polymyxin
85 tigecycline
80 fosfomycin|monurol
80 chloramphenicol
80 aztreonam
90 fidaxomicin|dificid
65 streptomycin
70 isoniazid|inh
80 ethambutol
82 pyrazinamide
80 ertapenem
75 imipenem|imipenem cilastatin|primaxin
88 doripenem
95 dalbavancin
95 oritavancin
92 telavancin
95 cefiderocol
70 minocycline
70 tobramycin
75 amikacin
90 kanamycin
90 neomycin
96 plazomicin
35 ampicillin
75 ampicillin sulbactam|unasyn|sulbactam
75 nafcillin
75 oxacillin
80 dicloxacillin
75 flucloxacillin
88 cloxacillin
85 methicillin
90 ticarcillin
94 carbenicillin
95 mezlocillin
70 benzathine penicillin|bicillin
88 procaine penicillin
55 cefazolin|ancef
70 ceftazidime|fortaz
65 cefepime|maxipime
60 cefuroxime|ceftin|zinacef
65 cefdinir|omnicef
75 cefpodoxime
78 cefixime
78 cefotaxime|claforan
80 cefoxitin
88 cefotetan
82 cefadroxil
85 cefprozil
85 cefaclor
95 cefditoren
90 cephalothin
85 ceftaroline|teflaro
88 ceftolozane tazobactam|zerbaxa|ceftolozane
88 ceftazidime avibactam|avycaz
96 ceftobiprole
60 clarithromycin|biaxin
60 moxifloxacin|avelox
85 ofloxacin
96 gemifloxacin
95 delafloxacin
88 norfloxacin
96 nalidixic acid
70 trimethoprim
85 bacitracin
70 mupirocin|bactroban
92 retapamulin
95 lefamulin
80 fusidic acid|fucidin
75 tinidazole
92 secnidazole
85 rifaximin|xifaxan
85 rifabutin
92 rifapentine
90 bedaquiline
96 pretomanid
96 delamanid
92 cycloserine
94 ethionamide
92 clofazimine
80 dapsone
90 sulfadiazine
88 methenamine|hiprex
90 tedizolid
92 quinupristin dalfopristin|synercid
90 teicoplanin
92 demeclocycline
95 omadacycline
95 eravacycline
96 sarecycline
94 roxithromycin
95 telithromycin
96 spiramycin
97 sulbactam durlobactam
96 pristinamycin
94 gramicidin
`},

{q:"Name a symptom of diabetes", strip:"excessive increased frequent extreme", list:`
10 thirst|polydipsia|thirsty|dry throat
10 urination|polyuria|peeing a lot|peeing|urinating|need to pee
25 fatigue|tiredness|tired|exhaustion|lethargy|low energy
70 weakness
30 blurred vision|blurry vision|vision problems|vision changes
35 weight loss|unexplained weight loss|losing weight
70 weight gain
35 hunger|polyphagia|hungry|appetite
40 slow healing|slow wound healing|poor wound healing|wounds not healing|sores that dont heal|cuts that dont heal
45 numbness|tingling|neuropathy|pins and needles|peripheral neuropathy|numb feet|numb hands|tingling feet|burning feet
55 infections|recurrent infections
70 urinary tract infections|uti|utis|bladder infections
65 yeast infection|thrush|candidiasis|vaginal yeast infection
80 acanthosis nigricans|dark skin patches|darkened skin|dark neck
70 dry skin
65 itching|pruritus|itchy skin
70 fruity breath|ketone breath|sweet breath|acetone breath
60 nausea|vomiting
75 abdominal pain|stomach pain
75 erectile dysfunction|impotence|sexual dysfunction|low libido
65 nocturia|urinating at night|peeing at night
70 irritability|mood changes|mood swings
60 dizziness|lightheadedness
75 headache|headaches
80 dry mouth|xerostomia
85 skin tags
85 gastroparesis|bloating|early satiety
97 necrobiosis lipoidica
92 diabetic dermopathy|shin spots
85 kussmaul breathing|kussmaul|rapid breathing
85 bedwetting|enuresis
70 dehydration
20 high blood sugar|hyperglycemia|high glucose
70 sugar in urine|glycosuria|glucosuria
88 sweet smelling urine|sweet urine
70 diabetic ketoacidosis|dka|ketoacidosis
80 confusion|brain fog|trouble concentrating
82 leg cramps|muscle cramps
85 gum disease|periodontitis|bleeding gums
80 foot ulcers|diabetic foot ulcer|foot sores
85 boils|skin infections
90 cold hands|cold feet|poor circulation
82 diabetic retinopathy|retinopathy|vision loss
88 diabetic nephropathy|kidney problems|protein in urine
95 frozen shoulder|adhesive capsulitis
95 trigger finger
96 dupuytren contracture|dupuytren
90 carpal tunnel syndrome|carpal tunnel
90 hearing loss
75 hypoglycemia|low blood sugar|shakiness|sweating
`},

{q:"Name a cranial nerve", strip:"nerve cranial", list:`
15 olfactory|cn1|cn i|i|1|first
10 optic|cn2|cn ii|ii|2|second
30 oculomotor|cn3|cn iii|iii|3|third
40 trochlear|cn4|cn iv|iv|4|fourth
25 trigeminal|cn5|cn v|v|5|fifth
40 abducens|abducent|cn6|cn vi|vi|6|sixth
15 facial|cn7|cn vii|vii|7|seventh
35 vestibulocochlear|auditory|acoustic|cn8|cn viii|viii|8|eighth|vestibular|cochlear|statoacoustic
45 glossopharyngeal|cn9|cn ix|ix|9|ninth
10 vagus|vagal|cn10|cn x|x|10|tenth
50 accessory|spinal accessory|cn11|cn xi|xi|11|eleventh
40 hypoglossal|cn12|cn xii|xii|12|twelfth
99 terminal|nervus terminalis|cn0|cn 0|zero|0|cn n|cranial nerve zero
`},

{q:"Name an organ of the human body", strip:"gland", list:`
5 heart
8 brain
8 lung|lungs
12 liver
12 kidney|kidneys
15 stomach
35 skin
30 pancreas
35 spleen
40 gallbladder|gall bladder
35 bladder|urinary bladder
25 intestine|intestines|small intestine|large intestine|colon|bowel|gut|bowels
50 appendix
45 thyroid
50 esophagus|oesophagus|food pipe
50 uterus|womb
55 ovary|ovaries
55 testis|testicle|teste|testes|testicles
55 prostate
65 adrenal|suprarenal|adrenals
75 thymus
65 pituitary|hypophysis
80 pineal
60 tongue
40 eye|eyes
70 ear|ears
75 nose
70 larynx|voice box
65 trachea|windpipe
80 pharynx|throat
85 parathyroid|parathyroids
92 mesentery
98 interstitium
75 hypothalamus
85 cerebellum
85 brainstem|brain stem|medulla oblongata
70 tonsil|tonsils
80 placenta
85 lymph node|lymph nodes|lymph glands
80 spinal cord
85 rectum
85 anus
90 ureter|ureters
85 urethra
85 bone marrow|marrow
80 duodenum
88 jejunum
85 ileum
90 cecum|caecum
75 breast|breasts|mammary
80 salivary|salivary glands|parotid
92 lacrimal|tear gland
80 diaphragm
80 vagina
75 penis
92 epididymis
92 seminal vesicle|seminal vesicles
80 fallopian tube|fallopian tubes|oviduct
92 cochlea
75 teeth|tooth
88 lips|lip
88 skeleton|bones
82 blood vessels|arteries|veins
95 islets of langerhans|islets
85 adenoids
88 cervix
92 clitoris
94 vas deferens
95 omentum
`},

{q:"Name a type of cancer", strip:"cancer tumor tumour", list:`
5 breast
8 lung|small cell lung|non small cell lung|nsclc|sclc
12 prostate
15 skin
15 colon|colorectal|bowel|rectal|rectum
20 leukemia|leukaemia|blood
25 melanoma
25 pancreatic|pancreas
30 lymphoma
45 hodgkin lymphoma|hodgkin|hodgkins
40 non hodgkin lymphoma|non hodgkin|nhl
80 burkitt lymphoma|burkitt
90 mycosis fungoides|cutaneous t cell lymphoma|ctcl
30 brain
50 glioblastoma|gbm|glioblastoma multiforme
60 glioma
80 astrocytoma
92 oligodendroglioma
92 ependymoma
75 meningioma
80 pituitary adenoma|pituitary
85 acoustic neuroma|vestibular schwannoma|schwannoma
35 ovarian|ovary
35 cervical|cervix
40 liver|hepatocellular carcinoma|hcc|hepatoma
45 stomach|gastric
45 bladder|urothelial|transitional cell
45 kidney|renal cell carcinoma|renal|rcc
45 thyroid
70 papillary thyroid
85 medullary thyroid
88 anaplastic thyroid
88 follicular thyroid
45 testicular|testis|testicle
80 seminoma
82 teratoma
85 germ cell
55 bone|osteosarcoma
55 multiple myeloma|myeloma
55 esophageal|oesophageal|esophagus
60 mesothelioma
55 sarcoma|soft tissue sarcoma
88 liposarcoma
85 leiomyosarcoma
88 angiosarcoma
88 chondrosarcoma
90 rhabdomyosarcoma
96 dermatofibrosarcoma protuberans|dfsp
75 neuroblastoma
80 retinoblastoma
85 uveal melanoma|ocular melanoma|eye
80 cholangiocarcinoma|bile duct
80 ewing sarcoma|ewing|ewings
80 kaposi sarcoma|kaposi|kaposis
90 merkel cell|merkel cell carcinoma
80 wilms|nephroblastoma|wilms tumor
85 pheochromocytoma
88 thymoma|thymic carcinoma
93 chordoma
80 carcinoid|neuroendocrine|net
90 insulinoma|pancreatic neuroendocrine
40 basal cell carcinoma|basal cell|bcc
45 squamous cell carcinoma|squamous cell|scc|squamous
60 adenocarcinoma
50 uterine|endometrial|uterus
55 head and neck
60 laryngeal|throat|larynx
55 oral|mouth|tongue
80 lip
80 nasopharyngeal
85 salivary gland|parotid
85 tonsil|tonsillar
85 gallbladder
85 anal
85 penile
85 vulvar
88 vaginal
92 fallopian tube
85 small intestine|small bowel
92 appendix|appendiceal
88 gist|gastrointestinal stromal
90 peritoneal
90 adrenocortical carcinoma|adrenal|adrenocortical
95 parathyroid carcinoma|parathyroid
92 hepatoblastoma
95 medulloblastoma
95 choriocarcinoma|gestational trophoblastic
98 esthesioneuroblastoma|olfactory neuroblastoma
50 acute myeloid leukemia|aml
55 acute lymphoblastic leukemia|all
55 chronic lymphocytic leukemia|cll
60 chronic myeloid leukemia|cml
90 hairy cell leukemia
92 waldenstrom macroglobulinemia|waldenstrom
80 myelodysplastic syndrome|mds
85 polycythemia vera
75 inflammatory breast
60 ductal carcinoma|dcis|ductal carcinoma in situ
75 lobular carcinoma
65 triple negative breast|triple negative
92 paget disease of the breast|pagets disease of the breast
93 desmoid
94 langerhans cell histiocytosis
`},

{q:"Name a part of the heart", strip:"the", list:`
10 ventricle|ventricles|left ventricle|right ventricle|lv|rv
10 atrium|atria|left atrium|right atrium|auricles
20 aorta
50 aortic arch
25 valve|valves|heart valve
30 mitral valve|mitral|bicuspid valve
35 tricuspid valve|tricuspid
35 aortic valve
40 pulmonary valve|pulmonic valve
75 valve leaflets|cusps|leaflet
35 septum|interventricular septum|atrial septum|interatrial septum
40 myocardium|heart muscle
45 pericardium
75 pericardial cavity|pericardial fluid|pericardial sac
70 parietal pericardium
75 fibrous pericardium
55 endocardium
60 epicardium|visceral pericardium
50 sa node|sinoatrial node|sinus node|pacemaker
55 av node|atrioventricular node
70 bundle of his|his bundle|av bundle
85 bundle branch|bundle branches|left bundle branch|right bundle branch
65 purkinje fibers|purkinje fibres|purkinje
75 chordae tendineae|heart strings|chordae
75 papillary muscle|papillary muscles
45 coronary artery|coronary arteries
65 right coronary artery|rca
70 left anterior descending|lad|widowmaker
75 circumflex|left circumflex|lcx
70 left main|left main coronary artery
80 posterior descending artery|pda
40 vena cava|superior vena cava|inferior vena cava|svc|ivc
40 pulmonary artery|pulmonary trunk
50 pulmonary vein|pulmonary veins
85 fossa ovalis|foramen ovale
92 moderator band|septomarginal trabecula
95 crista terminalis
88 trabeculae carneae|trabeculae
90 pectinate muscles
80 coronary sinus
85 great cardiac vein
90 small cardiac vein|middle cardiac vein
85 left atrial appendage|atrial appendage|auricle
90 ligamentum arteriosum
90 infundibulum|conus arteriosus
85 apex
85 base of the heart|base
88 annulus|valve annulus|mitral annulus
92 fibrous skeleton|cardiac skeleton
92 sinus of valsalva|aortic sinus
85 left ventricular outflow tract|lvot
88 coronary sulcus|atrioventricular groove|av groove
90 interventricular sulcus
85 intercalated discs|intercalated disc
80 cardiomyocytes|cardiac muscle cells
96 eustachian valve
97 thebesian valve|thebesian veins
98 tendon of todaro
98 triangle of koch|koch triangle
96 bachmann bundle
98 ligament of marshall|vein of marshall
`},

{q:"Name a vitamin or mineral the body needs", strip:"vitamin vit", list:`
5 vitamin c|ascorbic acid
8 vitamin d|cholecalciferol|d3|ergocalciferol|d2
10 iron
10 calcium
20 vitamin b12|cobalamin|cyanocobalamin|methylcobalamin
20 potassium
25 magnesium
25 zinc
25 vitamin a|retinol|beta carotene
30 vitamin e|tocopherol
35 vitamin k|phylloquinone|k1|k2|menaquinone
40 folate|folic acid|b9
30 sodium|salt
45 iodine|iodide
55 thiamine|thiamin|b1
60 riboflavin|b2
60 niacin|b3|nicotinic acid|niacinamide
55 vitamin b6|pyridoxine|b6
55 biotin|b7|vitamin h
75 pantothenic acid|b5
35 vitamin b|b complex
60 selenium
55 phosphorus|phosphate
60 copper
70 manganese
75 chromium
90 molybdenum
70 fluoride|fluorine
75 chloride|chlorine
92 cobalt
85 choline
85 sulfur|sulphur
92 boron
94 silicon
96 nickel
97 vanadium
`},

{q:"Name a medical specialty", strip:"medicine", list:`
8 cardiology
10 pediatrics|paediatrics
15 surgery|general surgery
15 dermatology
15 neurology
15 oncology|medical oncology
15 psychiatry
20 radiology|diagnostic radiology
20 orthopedics|orthopaedics|orthopedic surgery|ortho
20 obstetrics|gynecology|gynaecology|ob gyn|obgyn|obstetrics and gynecology
25 emergency|er|emergency room|ed
25 anesthesiology|anaesthesia|anesthesia|anesthetics|anaesthetics
25 family|general practice|gp|primary care
30 internal|im
35 ophthalmology
40 gastroenterology|gi
40 endocrinology
40 urology
45 ent|otolaryngology|otorhinolaryngology|ear nose and throat
50 nephrology
45 pulmonology|respiratory|pulmonary
50 rheumatology
55 hematology|haematology
50 pathology
55 infectious disease|id|infectious diseases
60 geriatrics
40 plastic surgery|plastics
35 neurosurgery
75 physical and rehabilitation|pm and r|pmr|physiatry|rehabilitation
65 allergy and immunology|allergy|immunology
70 palliative|palliative care|hospice
60 sports
80 nuclear
75 interventional radiology|ir
60 radiation oncology|radiotherapy
85 medical genetics|genetics
98 undersea and hyperbaric|hyperbaric
85 toxicology|medical toxicology
95 aerospace|aviation|space
65 neonatology|nicu
85 occupational
70 podiatry
80 vascular surgery
75 cardiothoracic surgery|thoracic surgery|cardiac surgery
85 critical care|intensive care|icu
90 sleep
90 wilderness
92 preventive|public health
65 pediatric surgery
75 colorectal surgery
75 transplant surgery|transplant
65 trauma surgery|trauma
80 hand surgery
80 breast surgery
75 surgical oncology
75 bariatric surgery
80 maternal fetal|perinatology|mfm
75 reproductive endocrinology|fertility|infertility|rei
80 gynecologic oncology
88 urogynecology
85 addiction|addiction psychiatry
75 pain|pain management
70 child psychiatry|child and adolescent psychiatry
85 forensic psychiatry
80 forensic pathology
82 neuroradiology
85 electrophysiology|cardiac electrophysiology|ep
70 interventional cardiology
80 hepatology
75 hospital|hospitalist
85 adolescent
90 tropical
92 travel
95 lifestyle
92 integrative
80 oral and maxillofacial surgery|maxillofacial
90 neuropathology
90 dermatopathology
92 clinical pharmacology
75 pediatric emergency
75 pediatric neurology
70 pediatric cardiology
90 military
92 obesity
92 andrology
96 phlebology
85 vascular
95 neurotology|otology
96 rhinology
95 laryngology
92 nuclear cardiology
85 epidemiology
88 clinical informatics|informatics
`},

{q:"Name a muscle", strip:"muscle muscles", list:`
5 biceps|bicep|biceps brachii
10 triceps|tricep|triceps brachii
12 quadriceps|quads|quad
15 hamstring|hamstrings
20 abdominals|rectus abdominis|abs|six pack
15 gluteus maximus|glutes|glute|buttocks
45 gluteus medius
65 gluteus minimus
20 pectoralis major|pectoralis|pecs|pec|chest
55 pectoralis minor
20 deltoid|delts|delt|shoulder
25 gastrocnemius|calf|calves
25 trapezius|traps|trap
30 latissimus dorsi|lats|lat
35 diaphragm
30 heart|cardiac muscle|myocardium
40 obliques|oblique|external oblique|internal oblique
45 transversus abdominis|transverse abdominis
50 soleus
55 sartorius
55 rectus femoris
60 vastus lateralis
60 vastus medialis
75 vastus intermedius
55 biceps femoris
70 semitendinosus
75 semimembranosus
55 supraspinatus
65 infraspinatus
75 teres minor
75 teres major
70 subscapularis
55 rotator cuff
55 masseter
65 temporalis
80 pterygoid|medial pterygoid|lateral pterygoid
55 sternocleidomastoid|scm
70 scalenes|scalene
50 iliopsoas|hip flexor|hip flexors
55 psoas|psoas major
75 iliacus
55 piriformis
55 tibialis anterior
75 tibialis posterior
75 peroneus longus|fibularis longus|peroneals
80 peroneus brevis|fibularis brevis
50 rhomboid|rhomboids|rhomboid major|rhomboid minor
55 serratus anterior|serratus
70 levator scapulae
85 subclavius
60 erector spinae
80 multifidus
70 quadratus lumborum|ql
80 splenius capitis
85 semispinalis
75 intercostals|intercostal|external intercostal|internal intercostal
70 platysma
70 frontalis|occipitofrontalis
75 orbicularis oculi
75 orbicularis oris
75 zygomaticus|zygomaticus major
80 buccinator
85 corrugator supercilii|corrugator
88 levator labii superioris|levator labii
88 mentalis
90 depressor anguli oris
88 nasalis
90 risorius
92 procerus
82 digastric
85 mylohyoid
90 geniohyoid
88 genioglossus
92 styloglossus
88 sternohyoid
88 omohyoid
92 thyrohyoid
92 cricothyroid
85 stapedius
92 tensor tympani
78 superior rectus
78 inferior rectus
78 medial rectus
78 lateral rectus
80 superior oblique
85 inferior oblique
88 levator palpebrae superioris|levator palpebrae
88 ciliary
92 dilator pupillae|iris dilator
92 sphincter pupillae
65 brachioradialis
70 brachialis
85 coracobrachialis
80 pronator teres
88 pronator quadratus
80 supinator
88 anconeus
80 flexor carpi radialis
80 flexor carpi ulnaris
82 extensor carpi radialis|extensor carpi radialis longus
85 extensor carpi ulnaris
70 flexor digitorum|flexor digitorum superficialis|flexor digitorum profundus
75 extensor digitorum
85 flexor hallucis longus
85 extensor hallucis longus
88 abductor hallucis
85 abductor pollicis|abductor pollicis brevis|abductor pollicis longus
88 opponens pollicis
88 adductor pollicis
80 thenar
82 hypothenar
85 lumbricals|lumbrical
85 interossei|dorsal interossei|palmar interossei
92 flexor digiti minimi
95 quadratus plantae
80 palmaris longus
85 plantaris
85 popliteus
75 gracilis
85 pectineus
60 adductor longus|adductors|adductor
70 adductor magnus
80 adductor brevis
70 tensor fasciae latae|tfl
88 obturator internus
90 obturator externus
92 gemellus|superior gemellus|inferior gemellus
90 quadratus femoris
75 pelvic floor|levator ani
85 pubococcygeus
92 bulbospongiosus
85 detrusor
75 anal sphincter|sphincter|urethral sphincter
85 uterus|myometrium
60 tongue
85 cremaster
90 arrector pili
95 pyramidalis
`},

{q:"Name a hormone", strip:"hormone", list:`
5 insulin
8 testosterone
8 estrogen|oestrogen|estradiol
85 estriol
85 estrone
15 adrenaline|epinephrine
45 norepinephrine|noradrenaline
15 cortisol|hydrocortisone
25 thyroxine|t4|thyroid|thyroid hormones
40 triiodothyronine|t3
25 melatonin
25 progesterone
30 growth|hgh|somatotropin|gh|human growth
30 oxytocin
35 dopamine
35 serotonin
40 glucagon
50 prolactin
55 leptin
55 ghrelin
55 fsh|follicle stimulating
55 lh|luteinizing|luteinising
50 tsh|thyroid stimulating|thyrotropin
60 acth|adrenocorticotropic|corticotropin
50 vasopressin|adh|antidiuretic
55 aldosterone
60 parathyroid|pth|parathormone
65 calcitonin
65 erythropoietin|epo
55 hcg|human chorionic gonadotropin|chorionic gonadotropin|pregnancy
65 renin
65 angiotensin|angiotensin ii
75 somatostatin
75 gastrin
75 secretin
75 cholecystokinin|cck
70 gnrh|gonadotropin releasing
80 crh|corticotropin releasing
80 trh|thyrotropin releasing
85 ghrh|growth hormone releasing
80 anp|atrial natriuretic peptide|atrial natriuretic
80 bnp|brain natriuretic peptide|b type natriuretic peptide
65 glp 1|glp1|glucagon like peptide|incretin
85 gip|glucose dependent insulinotropic
85 relaxin
85 inhibin
88 activin
90 motilin
92 thymosin
97 thymopoietin
88 amylin
85 adiponectin
95 resistin
85 anti mullerian|amh|mullerian inhibiting
75 calcitriol|vitamin d|1 25 dihydroxyvitamin d
85 orexin|hypocretin
85 igf 1|igf1|insulin like growth factor|somatomedin
60 dhea|dehydroepiandrosterone
75 dht|dihydrotestosterone
85 androstenedione
88 corticosterone
90 pregnenolone
85 msh|melanocyte stimulating
60 endorphins|endorphin|beta endorphin
85 enkephalin|enkephalins
75 prostaglandins|prostaglandin
88 vip|vasoactive intestinal peptide
90 peptide yy|pyy
90 neuropeptide y|npy
92 hepcidin
90 thrombopoietin|tpo
94 kisspeptin
95 fgf23|fgf 23|fibroblast growth factor 23
95 galanin
95 osteocalcin
96 obestatin
96 irisin
98 nesfatin
98 visfatin
98 uroguanylin
92 human placental lactogen|hpl|placental lactogen
`},

{q:"Name a condition that causes a rash", strip:"rash", list:`
10 eczema|atopic dermatitis
85 nummular eczema|discoid eczema
85 dyshidrotic eczema|pompholyx|dyshidrosis
85 stasis dermatitis
20 measles|rubeola
15 chickenpox|chicken pox|varicella
25 poison ivy|contact dermatitis|poison oak|poison sumac
15 psoriasis
80 guttate psoriasis
20 hives|urticaria
20 allergy|allergic reaction|allergies
30 shingles|herpes zoster
40 lupus|sle|systemic lupus erythematosus|cutaneous lupus
45 lyme disease|lyme|erythema migrans
45 scarlet fever|scarlatina
55 rubella|german measles
60 fifth disease|parvovirus|erythema infectiosum|slapped cheek
65 roseola|sixth disease
50 hand foot and mouth|hfmd|hand foot mouth
55 impetigo
45 ringworm|tinea|tinea corporis|athletes foot|jock itch
50 scabies
45 rosacea
35 acne
40 heat rash|miliaria|prickly heat
40 diaper|nappy|diaper dermatitis
50 sunburn
82 photodermatitis|sun allergy|polymorphous light eruption|sun poisoning
50 insect bites|bug bites|mosquito bites
70 bed bugs|bedbugs
75 lice|head lice
60 syphilis|secondary syphilis
70 rocky mountain spotted fever|rmsf
80 dermatomyositis
75 kawasaki|kawasaki disease
70 stevens johnson|sjs|ten|toxic epidermal necrolysis
65 meningococcemia|meningococcal|meningitis
75 pityriasis rosea
80 erythema multiforme
55 seborrheic dermatitis|dandruff|cradle cap
75 dengue
80 tinea versicolor|pityriasis versicolor
85 henoch schonlein purpura|hsp|iga vasculitis
85 dermatitis herpetiformis|celiac
92 still disease|stills disease
50 drug|drug reaction|drug eruption|drug allergy
85 fixed drug eruption
85 dress syndrome|dress
50 cellulitis
80 erysipelas
65 mpox|monkeypox
95 sweet syndrome
75 lichen planus
90 lichen sclerosus
90 lichen simplex
85 erythema nodosum
90 pemphigus|pemphigus vulgaris
85 bullous pemphigoid|pemphigoid
80 zika
90 typhus
88 typhoid|rose spots
60 candida|yeast|candidiasis
70 folliculitis
82 intertrigo
85 keratosis pilaris
90 granuloma annulare
75 molluscum contagiosum|molluscum
60 herpes|cold sores|herpes simplex
97 gianotti crosti|papular acrodermatitis
75 mononucleosis|mono|glandular fever
85 leprosy|hansen disease
90 leptospirosis
88 chikungunya
90 west nile
92 ebola
80 hiv|acute hiv|acute retroviral syndrome
88 disseminated gonococcal|gonorrhea
70 vasculitis
70 itp|thrombocytopenia|petechiae
85 dic|disseminated intravascular coagulation
80 sarcoidosis
85 juvenile idiopathic arthritis|jia
85 rheumatic fever
82 scleroderma|morphea|systemic sclerosis
85 perioral dermatitis
96 pityriasis rubra pilaris
92 mastocytosis|urticaria pigmentosa
92 porphyria
92 pellagra
92 scurvy
96 acrodermatitis enteropathica|zinc deficiency
97 necrolytic migratory erythema|glucagonoma
92 graft versus host disease|gvhd
88 serum sickness
85 dermatographism|dermatographia
88 cholinergic urticaria
90 swimmers itch|cercarial dermatitis
96 seabathers eruption
92 erythema toxicum
80 milia
80 covid|covid 19
85 toxic shock syndrome|tss
88 staphylococcal scalded skin|ssss
85 necrotizing fasciitis
92 anthrax
85 smallpox
96 cowpox
97 orf
96 erythema ab igne|toasted skin
90 pityriasis alba
`},

{q:"Name a medical imaging test", strip:"scan test imaging", list:`
5 x ray|xray|radiograph|chest x ray|cxr|plain film
8 mri|magnetic resonance|magnetic resonance imaging
8 ct|cat|computed tomography|ct scan|cat scan
10 ultrasound|sonogram|sonography|us
25 mammogram|mammography
75 tomosynthesis|3d mammogram
30 pet|positron emission tomography|pet ct|fdg pet
85 pet mri
40 echocardiogram|echo|echocardiography
70 stress echo|stress echocardiogram
80 transesophageal echo|tee|transesophageal echocardiogram
55 fluoroscopy
55 dexa|dxa|bone density|bone densitometry
50 angiogram|angiography|cardiac catheterization|cath
85 digital subtraction angiography|dsa
60 nuclear stress|myocardial perfusion|thallium|stress test
60 bone|bone scintigraphy
75 spect
60 nuclear medicine|scintigraphy
65 barium swallow|barium|esophagram
70 barium enema
70 upper gi series|upper gi
88 small bowel follow through
85 hida|cholescintigraphy|hepatobiliary
85 myelogram|myelography
85 elastography|fibroscan
45 doppler|doppler ultrasound|duplex
65 carotid ultrasound|carotid doppler
65 transvaginal ultrasound|pelvic ultrasound
55 fetal ultrasound|anatomy scan|obstetric ultrasound|pregnancy ultrasound
65 mra|mr angiography|magnetic resonance angiography
60 cta|ct angiography
75 coronary ct angiography|ccta
75 calcium score|coronary calcium|cac
85 cone beam ct|cbct
75 venogram|venography
85 hysterosalpingogram|hsg
75 v q|vq|ventilation perfusion
95 mibg
97 dacryocystogram
95 sialogram
85 optical coherence tomography|oct
92 muga
80 ercp
80 mrcp
85 thermography
85 intravascular ultrasound|ivus
70 ct colonography|virtual colonoscopy
90 dotatate|ga 68 dotatate
92 octreotide|octreoscan
85 thyroid uptake|thyroid scan|radioactive iodine uptake
90 gallium
75 cardiac mri|cmr
75 functional mri|fmri
75 dental x ray|panoramic|panorex|bitewing
75 kub
85 intravenous pyelogram|ivp|urogram
80 ct urogram
85 voiding cystourethrogram|vcug|cystogram
88 ct enterography|mr enterography
70 breast mri
85 sestamibi
88 lymphoscintigraphy|sentinel node
88 renal scan|mag3|dmsa
82 gastric emptying
94 meckel scan
90 tagged red blood cell|bleeding scan
92 white blood cell scan|indium
92 datscan
92 amyloid pet
88 psma pet|psma
82 arthrogram
92 discogram
94 lymphangiogram
80 endoscopic ultrasound|eus
80 capsule endoscopy|pill camera
92 contrast enhanced ultrasound|ceus
88 fundus photography
88 fluorescein angiography
85 skeletal survey
90 bone age
92 fistulogram
88 ct perfusion
92 mr spectroscopy|mrs
92 diffusion tensor imaging|dti
85 whole body mri
98 electrical impedance tomography
97 photoacoustic
96 defecography
`}
];

RAW.push(
{q:"Name a bacterium that causes disease in humans", strip:"bacteria bacterium", list:`
5 e coli|escherichia coli|escherichia
8 staphylococcus aureus|staph aureus|staph|staphylococcus|mrsa
10 streptococcus|strep|streptococcus pyogenes|group a strep|strep pyogenes
15 salmonella
20 mycobacterium tuberculosis|tuberculosis|tb|m tuberculosis
25 listeria|listeria monocytogenes
25 clostridium difficile|c diff|c difficile|clostridioides difficile
30 streptococcus pneumoniae|pneumococcus|strep pneumoniae
35 neisseria gonorrhoeae|gonorrhea|gonococcus
35 chlamydia|chlamydia trachomatis
35 helicobacter pylori|h pylori|helicobacter
35 clostridium tetani|tetanus
40 clostridium botulinum|botulism|botulinum
40 bordetella pertussis|whooping cough|pertussis|bordetella
40 borrelia burgdorferi|lyme|borrelia
40 treponema pallidum|syphilis|treponema
40 vibrio cholerae|cholera|vibrio
45 shigella
45 campylobacter|campylobacter jejuni
45 pseudomonas|pseudomonas aeruginosa
45 klebsiella|klebsiella pneumoniae
45 neisseria meningitidis|meningococcus
50 haemophilus influenzae|h influenzae|hib|haemophilus
50 yersinia pestis|plague|bubonic plague
50 bacillus anthracis|anthrax
55 mycobacterium leprae|leprosy|hansen
55 legionella|legionnaires|legionella pneumophila
55 corynebacterium diphtheriae|diphtheria
60 mycoplasma pneumoniae|mycoplasma
60 enterococcus|enterococcus faecalis|vre
65 rickettsia|rickettsia rickettsii|rocky mountain spotted fever
65 clostridium perfringens|gas gangrene|perfringens
65 proteus|proteus mirabilis
70 serratia|serratia marcescens
70 acinetobacter|acinetobacter baumannii
70 bacillus cereus
72 vibrio vulnificus
72 streptococcus agalactiae|group b strep|gbs
72 staphylococcus epidermidis|staph epidermidis
72 cutibacterium acnes|propionibacterium acnes|c acnes
75 gardnerella|gardnerella vaginalis|bacterial vaginosis
75 yersinia enterocolitica
75 francisella tularensis|tularemia
78 brucella|brucellosis
78 bartonella|cat scratch disease|bartonella henselae
78 nocardia
78 actinomyces|actinomycosis
78 leptospira|leptospirosis
80 mycobacterium avium|mac|mycobacterium avium complex
80 coxiella burnetii|q fever|coxiella
80 salmonella typhi|typhoid
82 ehrlichia|ehrlichiosis
82 anaplasma|anaplasmosis
82 moraxella catarrhalis|moraxella
85 burkholderia|burkholderia cepacia|burkholderia pseudomallei|melioidosis
85 stenotrophomonas|stenotrophomonas maltophilia
85 eikenella|eikenella corrodens
85 pasteurella|pasteurella multocida
85 tropheryma whipplei|whipple disease
88 capnocytophaga
88 kingella|kingella kingae
90 streptobacillus|rat bite fever
90 chlamydophila psittaci|psittacosis|parrot fever
92 mycobacterium marinum|fish tank granuloma
92 erysipelothrix
94 klebsiella granulomatis|donovanosis|granuloma inguinale
95 haemophilus ducreyi|chancroid
96 orientia tsutsugamushi|scrub typhus
96 bartonella quintana|trench fever
98 calymmatobacterium
`},

{q:"Name a virus that infects humans", strip:"virus", list:`
5 influenza|flu
5 covid|covid 19|coronavirus|sars cov 2
8 hiv|human immunodeficiency
10 common cold|rhinovirus
12 herpes|herpes simplex|hsv|cold sores
15 chickenpox|varicella|varicella zoster|vzv|shingles
15 measles|rubeola
20 hepatitis b|hbv
22 hepatitis c|hcv
25 hepatitis a|hav
25 hpv|human papillomavirus|papillomavirus
25 ebola
30 rabies
30 polio|poliovirus
30 mumps
30 zika
35 rubella|german measles
35 epstein barr|ebv|mono|mononucleosis
35 smallpox|variola
35 dengue
40 norovirus|stomach flu
40 rsv|respiratory syncytial
40 west nile
45 rotavirus
45 yellow fever
50 sars
50 mers
50 cytomegalovirus|cmv
55 adenovirus
55 mpox|monkeypox
55 marburg
60 hepatitis e|hev
65 hepatitis d|hdv|delta
60 hantavirus
60 enterovirus
65 parvovirus|parvovirus b19|fifth disease
65 coxsackie|coxsackievirus|hand foot and mouth
70 chikungunya
70 lassa|lassa fever
70 metapneumovirus|hmpv|human metapneumovirus
72 parainfluenza|croup
75 htlv|human t lymphotropic
75 hhv 6|roseola|human herpesvirus 6
78 kaposi sarcoma herpesvirus|hhv 8|kshv
78 japanese encephalitis
78 tick borne encephalitis
80 nipah
80 hendra
80 molluscum contagiosum
82 jc virus|pml
84 bk virus
84 rift valley fever
85 crimean congo hemorrhagic fever|cchf
86 eastern equine encephalitis|eee
86 la crosse
88 powassan
88 hepatitis g
88 astrovirus
88 sapovirus
88 oropouche
90 bunyavirus
90 machupo|bolivian hemorrhagic fever
90 junin|argentine hemorrhagic fever
92 o nyong nyong
92 ross river
94 kyasanur forest
94 heartland
95 alkhurma
95 lujo
95 bourbon
96 merkel cell polyomavirus
96 human bocavirus|bocavirus
97 torque teno
97 anellovirus
98 sabia
`},

{q:"Name a parasite that infects humans", strip:"parasite", list:`
8 malaria|plasmodium|plasmodium falciparum
10 lice|head lice|louse|pediculus
12 tapeworm|taenia
15 pinworm|enterobius|threadworm
20 giardia|giardiasis
20 roundworm|ascaris
22 scabies|sarcoptes|mites
25 toxoplasma|toxoplasmosis|toxo
25 hookworm|necator|ancylostoma
30 bed bugs|bedbugs
30 ticks|tick
35 fleas|flea
35 trichomonas|trich|trichomoniasis
40 leeches|leech
40 cryptosporidium|crypto
40 entamoeba histolytica|amoeba|amoebic dysentery|entamoeba
45 schistosoma|schistosomiasis|bilharzia|blood fluke
45 trypanosoma|sleeping sickness|chagas|trypanosoma cruzi|trypanosoma brucei
45 leishmania|leishmaniasis
50 trichinella|trichinosis|trichinellosis
50 whipworm|trichuris
55 strongyloides|threadworm strongyloides
55 pubic lice|crabs|pthirus pubis
55 guinea worm|dracunculus
55 filaria|lymphatic filariasis|elephantiasis|wuchereria
60 onchocerca|river blindness|onchocerciasis
60 naegleria fowleri|brain eating amoeba|naegleria
60 echinococcus|hydatid|hydatid cyst
60 fluke|liver fluke
62 cyclospora
65 plasmodium vivax|vivax
65 tsetse fly
65 botfly|myiasis
68 babesia|babesiosis
70 loa loa|eye worm
70 toxocara|toxocariasis
72 cysticercosis|neurocysticercosis|taenia solium
72 diphyllobothrium|fish tapeworm
72 fasciola|fasciola hepatica
75 clonorchis|chinese liver fluke
75 isospora|cystoisospora
75 anisakis|anisakiasis
75 acanthamoeba
78 demodex|eyelash mites
78 tunga penetrans|chigoe flea|jigger
80 paragonimus|lung fluke
80 opisthorchis
80 blastocystis
82 dientamoeba
82 angiostrongylus|rat lungworm
84 baylisascaris|raccoon roundworm
85 plasmodium knowlesi|knowlesi
85 plasmodium malariae
85 plasmodium ovale
86 mansonella
88 hymenolepis|dwarf tapeworm
88 dipylidium|dog tapeworm
90 balantidium|balantidium coli
90 microsporidia
90 gnathostoma|gnathostomiasis
92 capillaria
92 sparganum|sparganosis
94 dioctophyme|giant kidney worm
95 heterophyes
96 linguatula|tongue worm
97 thelazia
`},

{q:"Name a fungal infection", strip:"fungal fungus infection", list:`
5 athletes foot|tinea pedis
8 ringworm|tinea corporis|tinea
10 thrush|oral thrush|candida|candidiasis|yeast infection|yeast
15 jock itch|tinea cruris
20 nail fungus|onychomycosis|toenail fungus
25 dandruff|seborrheic dermatitis|malassezia
30 diaper rash|candidal diaper rash
35 tinea versicolor|pityriasis versicolor
35 scalp ringworm|tinea capitis
40 aspergillosis|aspergillus
45 histoplasmosis|histoplasma
45 valley fever|coccidioidomycosis|coccidioides
50 cryptococcosis|cryptococcus|cryptococcal meningitis
50 pneumocystis|pcp|pneumocystis pneumonia|pneumocystis jirovecii
55 mucormycosis|black fungus|zygomycosis
55 blastomycosis|blastomyces
55 candida auris|c auris
60 invasive candidiasis|candidemia
60 esophageal candidiasis
60 intertrigo
65 sporotrichosis|rose gardeners disease
65 tinea barbae|barbers itch
65 tinea manuum
68 fungal keratitis
70 otomycosis|fungal ear infection
70 paronychia
70 aspergilloma|fungus ball
72 allergic bronchopulmonary aspergillosis|abpa
75 paracoccidioidomycosis
75 talaromycosis|penicilliosis|talaromyces
78 chromoblastomycosis
78 mycetoma|madura foot|eumycetoma
78 tinea incognito
80 fusariosis|fusarium
80 tinea nigra
82 white piedra
82 black piedra
82 kerion
85 majocchi granuloma
85 emmonsiosis
85 scedosporium|scedosporiosis
86 phaeohyphomycosis
88 rhinosporidiosis
88 lobomycosis
90 adiaspiromycosis
92 entomophthoramycosis
93 trichosporonosis|trichosporon
`},

{q:"Name a blood test", strip:"test level levels", list:`
5 complete blood count|cbc|full blood count|fbc
8 blood sugar|glucose|blood glucose|fasting glucose
10 cholesterol|lipid panel|lipids|lipid profile
15 hemoglobin a1c|a1c|hba1c|glycated hemoglobin
15 hemoglobin|hb|hgb
20 iron|ferritin
20 thyroid|tsh|thyroid function
20 metabolic panel|bmp|cmp|basic metabolic panel|comprehensive metabolic panel|chem 7
25 liver function|lft|lfts|liver panel
25 vitamin d
30 white blood cell count|wbc|white count
30 platelets|platelet count
30 blood type|blood group|type and screen|abo
30 psa|prostate specific antigen
35 creatinine
35 hematocrit|hct
35 potassium
35 sodium
35 troponin
40 crp|c reactive protein
40 esr|sed rate|erythrocyte sedimentation rate
40 vitamin b12|b12
40 pregnancy test|hcg|beta hcg
40 hiv test
45 alt|alanine aminotransferase|sgpt
45 ast|aspartate aminotransferase|sgot
45 bilirubin
45 bun|blood urea nitrogen|urea
45 calcium
45 magnesium
45 folate
45 testosterone
45 d dimer
45 blood culture
50 inr|pt|prothrombin time
50 ptt|aptt|partial thromboplastin time
50 egfr|gfr
50 albumin
50 alkaline phosphatase|alp|alk phos
50 bnp|nt probnp|brain natriuretic peptide
50 ldl
50 hdl
50 triglycerides
50 free t4|t4|thyroxine
55 lactate|lactic acid
55 arterial blood gas|abg|blood gas
55 amylase
55 lipase
55 ana|antinuclear antibody
55 cortisol
55 estrogen|estradiol
55 hepatitis panel|hepatitis b surface antigen|hbsag
55 rheumatoid factor|rf
55 uric acid
60 reticulocyte count|retic
60 ggt|gamma gt|gamma glutamyl transferase
60 phosphate|phosphorus
60 fsh
60 lh
60 prolactin
60 procalcitonin
60 blood alcohol|bac
60 ck|creatine kinase|cpk
62 ldh|lactate dehydrogenase
62 mean corpuscular volume|mcv
62 anti ccp|ccp
62 tsi|thyroid antibodies|tpo antibodies|anti tpo
62 ammonia
65 peripheral blood smear|blood smear
65 c peptide
65 pth|parathyroid hormone
65 fibrinogen
65 haptoglobin
65 coombs test|direct antiglobulin test|dat
65 cea|carcinoembryonic antigen
65 ca 125
65 afp|alpha fetoprotein
65 amh|anti mullerian hormone
70 lead level|lead
70 drug levels|drug screen|tox screen
70 osmolality|serum osmolality
70 anion gap
70 complement|c3|c4
70 anca
70 immunoglobulins|igg|iga|igm|ige
70 serum protein electrophoresis|spep
70 lipoprotein a|lp a
70 homocysteine
72 hla typing|hla b27
72 quantiferon|tb blood test|igra
72 monospot|heterophile antibody
72 g6pd
72 hemoglobin electrophoresis
75 free light chains
75 ca 19 9
75 anti dsdna|dsdna
75 acth
75 aldosterone|renin|aldosterone renin ratio
75 igf 1
75 zinc
75 copper|ceruloplasmin
75 selenium
78 methylmalonic acid|mma
78 anti factor xa|factor xa
78 von willebrand|vwf
78 tryptase
78 chromogranin a
80 lupus anticoagulant
80 antiphospholipid antibodies
80 tissue transglutaminase|ttg|celiac panel
80 hemoglobin a2
82 cold agglutinins
82 cryoglobulins
82 metanephrines|plasma metanephrines
82 adamts13
85 heparin induced thrombocytopenia|hit antibody|pf4
85 anti gbm
85 anti smith
85 cell free dna|nipt
85 circulating tumor dna|ctdna|liquid biopsy
88 carboxyhemoglobin
88 methemoglobin
88 porphyrins
90 anti nmda receptor
92 acetylcholine receptor antibodies
92 anti aquaporin 4|nmo igg
95 anti mog
`}
);

RAW.push(
{q:"Name a cause of headache", strip:"headache headaches", list:`
5 migraine
8 stress|tension|tension type
10 dehydration
15 caffeine withdrawal|caffeine
15 lack of sleep|sleep deprivation|tiredness|fatigue
20 hangover|alcohol
20 cluster|cluster headache
25 sinusitis|sinus infection|sinus
25 flu|influenza|cold|viral infection
25 eye strain|screen time
30 high blood pressure|hypertension
30 hunger|skipping meals|low blood sugar|hypoglycemia
35 meningitis
35 brain tumor|tumor
35 concussion|head injury|head trauma
35 stroke
40 brain bleed|subarachnoid hemorrhage|sah|intracranial hemorrhage
40 aneurysm|brain aneurysm|ruptured aneurysm
40 medication overuse|rebound headache|analgesic overuse
40 covid|covid 19
45 hormones|menstruation|period|menstrual migraine
45 neck problems|cervicogenic|neck strain
45 tmj|jaw clenching|teeth grinding|bruxism
50 carbon monoxide|carbon monoxide poisoning
50 encephalitis
50 giant cell arteritis|temporal arteritis
55 idiopathic intracranial hypertension|pseudotumor cerebri|iih
55 glaucoma|acute angle closure glaucoma
55 trigeminal neuralgia
55 preeclampsia
55 sleep apnea
60 occipital neuralgia
60 subdural hematoma
60 epidural hematoma
60 brain abscess
60 nitrates|nitroglycerin
60 altitude sickness|high altitude
65 hydrocephalus
65 cerebral venous sinus thrombosis|cvst|venous sinus thrombosis
65 pheochromocytoma
65 exertional headache|exercise headache
65 sex headache|coital headache
70 ice cream headache|brain freeze|cold stimulus
70 post dural puncture|spinal headache|lumbar puncture
70 hypertensive emergency|hypertensive crisis
70 dental abscess|toothache
72 carotid dissection|vertebral dissection|arterial dissection
72 reversible cerebral vasoconstriction syndrome|rcvs|thunderclap
75 chiari malformation|chiari
75 pituitary apoplexy
75 spontaneous intracranial hypotension|csf leak
75 msg|chinese restaurant syndrome
78 hemicrania continua
78 paroxysmal hemicrania
80 sunct
80 hypnic headache|alarm clock headache
82 new daily persistent headache|ndph
82 colloid cyst
85 nummular headache
85 external compression headache|tight hat|ponytail headache
88 vestibular migraine
90 red ear syndrome
92 exploding head syndrome
`},

{q:"Name a cause of abdominal pain", strip:"", list:`
5 appendicitis
8 food poisoning|gastroenteritis|stomach bug|stomach flu
10 constipation
12 gas|bloating|trapped wind
15 indigestion|dyspepsia|heartburn|gerd|acid reflux
15 menstrual cramps|period pain|dysmenorrhea
18 irritable bowel syndrome|ibs
20 gallstones|cholecystitis|biliary colic
20 stomach ulcer|peptic ulcer|ulcer|duodenal ulcer
20 kidney stones|renal colic|kidney stone
25 pancreatitis
25 urinary tract infection|uti|bladder infection|cystitis
25 crohns disease|crohns
25 ulcerative colitis|colitis
30 diverticulitis
30 hernia|inguinal hernia|umbilical hernia
30 gastritis
30 lactose intolerance
30 ectopic pregnancy
30 food allergy|food intolerance
35 celiac disease|celiac
35 bowel obstruction|intestinal obstruction
35 hepatitis
35 pregnancy|labor
35 ovarian cyst
40 endometriosis
40 pelvic inflammatory disease|pid
40 pyelonephritis|kidney infection
40 ovarian torsion
40 testicular torsion
40 colon cancer|colorectal cancer|bowel cancer
40 stomach cancer|gastric cancer
40 pancreatic cancer
40 anxiety|stress
45 perforated ulcer|perforation
45 aortic aneurysm|abdominal aortic aneurysm|aaa|ruptured aaa
45 heart attack|myocardial infarction|mi
45 diabetic ketoacidosis|dka
45 sickle cell crisis|sickle cell
50 mesenteric ischemia|bowel ischemia|ischemic bowel
50 volvulus
50 intussusception
50 pneumonia
50 muscle strain|abdominal wall strain
50 shingles|herpes zoster
50 peritonitis
50 cholangitis
50 abscess|abdominal abscess
55 splenic infarct|spleen rupture|splenic rupture
55 mittelschmerz|ovulation pain
55 fibroids|uterine fibroids
55 hepatic abscess|liver abscess
55 pyloric stenosis
55 meckel diverticulum|meckels
55 c diff|clostridium difficile|c difficile colitis
55 h pylori|helicobacter
55 parasites|worms|giardia
60 ischemic colitis
60 small intestinal bacterial overgrowth|sibo
60 gastroparesis
60 sphincter of oddi dysfunction
60 adhesions
60 lead poisoning
60 nsaid use|ibuprofen
65 abdominal migraine
65 functional abdominal pain
65 porphyria|acute intermittent porphyria
65 addisonian crisis|adrenal crisis
65 hypercalcemia
65 typhlitis|neutropenic enterocolitis
65 epiploic appendagitis
70 budd chiari syndrome
70 portal vein thrombosis
70 hemolytic uremic syndrome|hus
70 henoch schonlein purpura|hsp|iga vasculitis
70 familial mediterranean fever|fmf
72 hereditary angioedema
72 median arcuate ligament syndrome|mals
72 superior mesenteric artery syndrome|sma syndrome
72 fitz hugh curtis syndrome
72 anterior cutaneous nerve entrapment syndrome|acnes
75 rectus sheath hematoma
75 omental infarction
75 black widow spider bite|black widow
78 abdominal epilepsy
78 cyclic vomiting syndrome
78 cannabinoid hyperemesis syndrome
80 chilaiditi syndrome
80 nutcracker syndrome
82 sclerosing mesenteritis|mesenteric panniculitis
`},

{q:"Name a cause of shortness of breath", strip:"", list:`
5 asthma
8 anxiety|panic attack
10 copd|emphysema|chronic bronchitis
10 pneumonia
12 heart failure|chf|congestive heart failure
15 exercise|exertion
15 obesity
15 covid|covid 19
20 pulmonary embolism|pe|blood clot
20 anemia
20 allergies|allergic reaction
25 heart attack|myocardial infarction|mi
25 lung cancer
25 pneumothorax|collapsed lung
25 bronchitis
25 smoking
30 high altitude|altitude sickness
30 pregnancy
30 deconditioning|being unfit|poor fitness
30 flu|influenza
30 croup
30 bronchiolitis|rsv
35 pulmonary fibrosis|interstitial lung disease|ild|ipf
35 pleural effusion
35 arrhythmia|atrial fibrillation|afib
35 cystic fibrosis
40 tuberculosis|tb
40 sarcoidosis
40 pulmonary hypertension
40 pulmonary edema
40 aortic stenosis
40 cardiomyopathy
40 pericardial effusion|cardiac tamponade|tamponade
40 choking|foreign body|aspiration
40 acute respiratory distress syndrome|ards
45 bronchiectasis
45 sleep apnea
45 kyphoscoliosis|scoliosis
45 rib fracture|broken ribs|flail chest
45 carbon monoxide poisoning|carbon monoxide
45 diabetic ketoacidosis|dka
45 sepsis
45 kidney failure
45 mitral stenosis|mitral regurgitation|valve disease
50 myasthenia gravis
50 guillain barre syndrome|guillain barre|gbs
50 als|amyotrophic lateral sclerosis|motor neuron disease
50 hyperthyroidism
50 hyperventilation
50 epiglottitis
50 anaphylaxis
55 asbestosis
55 silicosis
55 black lung|coal workers pneumoconiosis
55 hypersensitivity pneumonitis|farmers lung|bird fanciers lung
55 diaphragm paralysis|diaphragmatic paralysis
55 pertussis|whooping cough
55 vocal cord dysfunction
55 lung transplant rejection
60 hemothorax
60 acute chest syndrome|sickle cell
60 constrictive pericarditis
60 high output heart failure
60 metabolic acidosis
60 aspirin overdose|salicylate poisoning
60 cyanide poisoning
60 methemoglobinemia
65 amyloidosis
65 lymphangitic carcinomatosis
65 pulmonary arteriovenous malformation|pulmonary avm
65 hepatopulmonary syndrome
65 eosinophilic pneumonia
65 pneumocystis pneumonia|pcp
65 legionnaires disease|legionella
68 tracheal stenosis
68 superior vena cava syndrome|svc syndrome
68 laryngospasm
70 lymphangioleiomyomatosis|lam
70 alpha 1 antitrypsin deficiency
70 berylliosis
70 pulmonary alveolar proteinosis
72 platypnea orthodeoxia
75 bronchiolitis obliterans|popcorn lung
75 organizing pneumonia|cop|boop
75 goodpasture syndrome|goodpasture
78 diffuse alveolar hemorrhage
80 scimitar syndrome
80 swyer james syndrome
`},

{q:"Name an autoimmune disease", strip:"disease autoimmune", list:`
5 rheumatoid arthritis|ra
5 lupus|sle|systemic lupus erythematosus
8 type 1 diabetes|t1d|type one diabetes|juvenile diabetes
10 multiple sclerosis|ms
10 psoriasis
15 celiac|coeliac
15 crohns|crohns disease
15 ulcerative colitis|uc
20 hashimotos|hashimoto thyroiditis|hashimotos thyroiditis
20 graves|graves disease
25 psoriatic arthritis
30 vitiligo
30 alopecia areata|alopecia
30 sjogren syndrome|sjogrens
30 myasthenia gravis
35 ankylosing spondylitis|axial spondyloarthritis
35 scleroderma|systemic sclerosis
35 guillain barre syndrome|guillain barre|gbs
40 addisons|addison disease|autoimmune adrenalitis
40 pernicious anemia
40 autoimmune hepatitis
40 primary biliary cholangitis|pbc|primary biliary cirrhosis
40 dermatomyositis
40 polymyositis
45 vasculitis
45 giant cell arteritis|temporal arteritis
45 polymyalgia rheumatica|pmr
45 juvenile idiopathic arthritis|jia|juvenile arthritis
45 itp|immune thrombocytopenia|idiopathic thrombocytopenic purpura
45 autoimmune hemolytic anemia|aiha
45 sarcoidosis
50 antiphospholipid syndrome|aps|hughes syndrome
50 kawasaki|kawasaki disease
50 behcets|behcet disease
50 granulomatosis with polyangiitis|gpa|wegener|wegeners granulomatosis
50 primary sclerosing cholangitis|psc
50 bullous pemphigoid|pemphigoid
50 pemphigus|pemphigus vulgaris
50 dermatitis herpetiformis
50 lichen planus
50 reactive arthritis|reiter syndrome
55 goodpasture syndrome|anti gbm disease|goodpasture
55 iga nephropathy|berger disease
55 membranous nephropathy
55 neuromyelitis optica|nmo|devic disease
55 autoimmune encephalitis|anti nmda receptor encephalitis
55 takayasu arteritis|takayasu
55 polyarteritis nodosa|pan
55 microscopic polyangiitis
55 churg strauss|egpa|eosinophilic granulomatosis with polyangiitis
55 cidp|chronic inflammatory demyelinating polyneuropathy
55 lambert eaton|lambert eaton syndrome
55 narcolepsy
60 mixed connective tissue disease|mctd
60 morphea
60 lichen sclerosus
60 autoimmune pancreatitis|igg4 related disease|igg4
60 hidradenitis suppurativa
60 adult onset stills disease|stills disease
60 relapsing polychondritis
60 autoimmune thyroiditis
60 postpartum thyroiditis
65 stiff person syndrome
65 pandas
65 sydenham chorea
65 rheumatic fever
65 transverse myelitis
65 acute disseminated encephalomyelitis|adem
65 autoimmune inner ear disease
65 autoimmune oophoritis|premature ovarian failure
65 autoimmune polyglandular syndrome|aps type 1|aps type 2
70 evans syndrome
70 cogan syndrome
70 susac syndrome
70 rasmussen encephalitis
70 autoimmune uveitis|uveitis
70 sympathetic ophthalmia
70 ocular cicatricial pemphigoid
70 linear iga disease
70 epidermolysis bullosa acquisita
75 schnitzler syndrome
75 hashimoto encephalopathy
75 vogt koyanagi harada|vkh
75 autoimmune autonomic ganglionopathy
75 autoimmune lymphoproliferative syndrome|alps
80 ipex syndrome
80 pyoderma gangrenosum
`},

{q:"Name a genetic disorder", strip:"syndrome disease", list:`
5 down syndrome|trisomy 21
8 cystic fibrosis|cf
10 sickle cell|sickle cell anemia|sickle cell disease
15 hemophilia|haemophilia
15 huntington disease|huntington
20 muscular dystrophy|duchenne|duchenne muscular dystrophy|dmd
20 color blindness|colour blindness|colorblindness
25 turner syndrome|monosomy x|45 x
25 klinefelter syndrome|xxy|47 xxy
25 fragile x syndrome
25 thalassemia|beta thalassemia|alpha thalassemia
25 phenylketonuria|pku
30 tay sachs disease
30 marfan syndrome
30 albinism
35 edwards syndrome|trisomy 18
35 patau syndrome|trisomy 13
35 neurofibromatosis|nf1|nf2
35 spinal muscular atrophy|sma
40 brca|hereditary breast cancer|brca1|brca2
40 hemochromatosis|hereditary hemochromatosis
40 g6pd deficiency|g6pd|favism
40 ehlers danlos syndrome|eds
40 achondroplasia|dwarfism
40 prader willi syndrome
40 angelman syndrome
40 williams syndrome
40 familial hypercholesterolemia|fh
40 polycystic kidney disease|pkd|polycystic kidney disease
45 lynch syndrome|hnpcc
45 von willebrand disease|vwd|von willebrand disease
45 osteogenesis imperfecta|brittle bone
45 tuberous sclerosis
45 rett syndrome
45 wilson disease|wilsons
45 gaucher disease
45 fabry disease
45 pompe disease
45 alpha 1 antitrypsin deficiency|aatd
45 noonan syndrome
45 digeorge syndrome|22q11 deletion|velocardiofacial
50 cri du chat|5p minus
50 familial adenomatous polyposis|fap
50 friedreich ataxia
50 myotonic dystrophy
50 charcot marie tooth|cmt
50 retinitis pigmentosa
50 hurler|mps i|mucopolysaccharidosis
50 hunter|mps ii
50 niemann pick disease
50 maple syrup urine disease|msud
50 galactosemia
50 factor v leiden
50 long qt|long qt syndrome
50 hypertrophic cardiomyopathy|hcm
55 alport syndrome
55 li fraumeni syndrome
55 von hippel lindau|vhl
55 men1|men2|multiple endocrine neoplasia
55 peutz jeghers syndrome
55 waardenburg syndrome
55 stickler syndrome
55 usher syndrome
55 treacher collins syndrome
55 crouzon syndrome
55 apert syndrome
55 cornelia de lange syndrome
55 smith lemli opitz syndrome
55 smith magenis syndrome
55 sotos syndrome
55 beckwith wiedemann syndrome
55 kabuki syndrome
55 ataxia telangiectasia
55 xeroderma pigmentosum
55 brugada syndrome
55 hereditary hemorrhagic telangiectasia|hht|osler weber rendu
60 porphyria|acute intermittent porphyria
60 alkaptonuria
60 homocystinuria
60 adrenoleukodystrophy|ald
60 krabbe disease
60 metachromatic leukodystrophy
60 canavan disease
60 menkes disease
60 lesch nyhan syndrome
60 batten disease
60 zellweger syndrome
60 ornithine transcarbamylase deficiency|otc deficiency
60 congenital adrenal hyperplasia|cah
60 androgen insensitivity
60 kallmann syndrome
60 primary ciliary dyskinesia|kartagener
60 severe combined immunodeficiency|scid|bubble boy
60 wiskott aldrich syndrome
60 chronic granulomatous disease|cgd
60 fanconi anemia
60 diamond blackfan anemia
60 hereditary spherocytosis
65 progeria|hutchinson gilford
65 incontinentia pigmenti
65 pfeiffer syndrome
65 holt oram syndrome
65 alagille syndrome
65 bardet biedl syndrome
65 joubert syndrome
65 cockayne syndrome
65 bloom syndrome
65 werner syndrome
65 fibrodysplasia ossificans progressiva|fop|stone man
70 cherubism
70 harlequin ichthyosis
70 epidermolysis bullosa
70 trimethylaminuria|fish odor syndrome
75 wolfram syndrome
75 alexander disease
75 pelizaeus merzbacher
80 hypophosphatasia
80 congenital insensitivity to pain|cipa
85 uncombable hair syndrome
85 proteus syndrome
`},

{q:"Name a mental health disorder", strip:"disorder", list:`
5 depression|major depressive|mdd|clinical depression
5 anxiety|generalized anxiety|gad
10 ptsd|post traumatic stress
10 bipolar|bipolar disorder|manic depression
10 adhd|add|attention deficit
10 ocd|obsessive compulsive
15 schizophrenia
15 autism|autism spectrum|asd
15 anorexia|anorexia nervosa
15 bulimia|bulimia nervosa
20 panic|panic disorder|panic attacks
20 social anxiety|social phobia
25 borderline personality|bpd
25 eating disorder
25 insomnia
25 binge eating|binge eating disorder|bed
25 postpartum depression|perinatal depression
25 seasonal affective|sad|seasonal depression
25 addiction|substance use|alcoholism|alcohol use disorder|drug addiction
30 phobia|specific phobia|arachnophobia|claustrophobia
30 agoraphobia
30 narcissistic personality|npd|narcissism
35 antisocial personality|psychopathy|sociopathy
35 dissociative identity|did|multiple personality
35 schizoaffective
35 dementia|alzheimers
35 tourette|tourettes|tic disorder
35 psychosis
40 body dysmorphic|bdd
40 hoarding|hoarding disorder
40 trichotillomania|hair pulling
40 dysthymia|persistent depressive
40 cyclothymia
40 gambling|gambling disorder|gambling addiction
40 adjustment disorder
40 delusional disorder
45 selective mutism
45 separation anxiety
45 arfid|avoidant restrictive food intake
45 pica
45 skin picking|excoriation|dermatillomania
45 histrionic personality
45 avoidant personality
45 dependent personality
45 paranoid personality
45 schizoid personality
45 schizotypal personality
45 obsessive compulsive personality|ocpd
45 conversion disorder|functional neurological
45 somatic symptom|somatization
45 illness anxiety|hypochondria|hypochondriasis
45 depersonalization|derealization
45 dissociative amnesia
45 intermittent explosive
45 oppositional defiant|odd
45 conduct disorder
45 premenstrual dysphoric|pmdd
45 brief psychotic
45 delirium
50 reactive attachment
50 disinhibited social engagement
50 kleptomania
50 pyromania
50 munchausen|factitious disorder|munchausen by proxy
50 rumination
50 night terrors|sleep terrors
50 nightmare disorder
50 sleepwalking|somnambulism
50 internet gaming disorder|gaming addiction
50 catatonia
50 disruptive mood dysregulation|dmdd
50 complex ptsd|cptsd
55 prolonged grief
55 orthorexia
55 shared psychotic|folie a deux
55 capgras
55 cotard|walking corpse
55 fregoli
55 erotomania|de clerambault
55 ekbom|delusional parasitosis
55 stockholm syndrome
55 paris syndrome
55 jerusalem syndrome
60 koro
60 amok
60 dhat
60 hikikomori
60 taijin kyofusho
60 pibloktoq|arctic hysteria
60 windigo|wendigo psychosis
65 alice in wonderland syndrome
65 lycanthropy|clinical lycanthropy
70 boanthropy
`},

{q:"Name a neurological disorder", strip:"disorder disease", list:`
5 alzheimers|alzheimer
5 parkinsons|parkinson
8 epilepsy|seizures
8 stroke
8 migraine
10 multiple sclerosis|ms
15 als|amyotrophic lateral sclerosis|lou gehrig|motor neuron
15 dementia
20 cerebral palsy|cp
20 huntingtons|huntington
20 concussion|traumatic brain injury|tbi
20 bells palsy|bell palsy
25 neuropathy|peripheral neuropathy|diabetic neuropathy
25 meningitis
25 myasthenia gravis
25 guillain barre|gbs
25 restless legs|rls|willis ekbom
25 narcolepsy
25 tourette|tourettes
30 essential tremor
30 encephalitis
30 brain tumor|glioma|glioblastoma
30 spinal cord injury|paralysis|paraplegia|quadriplegia
30 sciatica
30 carpal tunnel
30 trigeminal neuralgia
30 vertigo|bppv
35 hydrocephalus
35 spina bifida
35 lewy body dementia|dementia with lewy bodies
35 frontotemporal dementia|ftd|picks disease
35 vascular dementia
35 tia|transient ischemic attack|mini stroke
35 cluster headache
35 shingles|postherpetic neuralgia
35 muscular dystrophy
35 spinal muscular atrophy|sma
40 dystonia
40 chorea
40 ataxia
40 friedreich ataxia
40 neurofibromatosis
40 tuberous sclerosis
40 creutzfeldt jakob|cjd|mad cow|prion disease
40 polio|post polio
40 aneurysm|brain aneurysm
40 subarachnoid hemorrhage
40 chiari malformation
40 syringomyelia
40 transverse myelitis
40 cidp
40 charcot marie tooth|cmt
40 neuromyelitis optica|nmo
45 progressive supranuclear palsy|psp
45 multiple system atrophy|msa
45 corticobasal degeneration
45 normal pressure hydrocephalus|nph
45 idiopathic intracranial hypertension|pseudotumor cerebri
45 moyamoya
45 lambert eaton
45 wernicke encephalopathy|wernicke korsakoff|korsakoff
45 complex regional pain syndrome|crps
45 functional neurological disorder|fnd|conversion disorder
45 tardive dyskinesia
45 hemifacial spasm
45 blepharospasm
45 torticollis|cervical dystonia
45 west syndrome|infantile spasms
45 lennox gastaut
45 dravet
45 absence seizures|petit mal
50 pml|progressive multifocal leukoencephalopathy
50 adem
50 sturge weber
50 rett
50 batten
50 leukodystrophy
50 cadasil
50 mitochondrial disease|melas|merrf
50 neurosyphilis|tabes dorsalis
50 hiv associated neurocognitive disorder
50 central pontine myelinolysis|osmotic demyelination
55 locked in syndrome
55 akinetic mutism
55 anton syndrome|cortical blindness
55 balint syndrome
55 gerstmann syndrome
55 prosopagnosia|face blindness
55 aphasia|brocas aphasia|wernickes aphasia
55 alien hand syndrome
55 kluver bucy
55 foreign accent syndrome
60 stiff person syndrome
60 kleine levin|sleeping beauty syndrome
60 fatal familial insomnia
60 kuru
60 gerstmann straussler scheinker
60 isaacs syndrome|neuromyotonia
60 parsonage turner|brachial neuritis
60 tolosa hunt
60 miller fisher
65 hopkins syndrome
65 opsoclonus myoclonus
65 benedikt syndrome
65 weber syndrome
65 wallenberg|lateral medullary syndrome
65 brown sequard
`}
);

RAW.push(
{q:"Name a lung disease", strip:"disease lung", list:`
5 asthma
5 copd|chronic obstructive pulmonary
8 pneumonia
10 lung cancer|cancer
10 emphysema
15 tuberculosis|tb
15 bronchitis|chronic bronchitis
20 cystic fibrosis|cf
25 pulmonary fibrosis|idiopathic pulmonary fibrosis|ipf
25 pulmonary embolism|pe
25 pneumothorax|collapsed lung
30 bronchiectasis
30 covid|covid 19
30 sarcoidosis
30 pulmonary hypertension
30 pleural effusion
30 pleurisy
35 asbestosis
35 mesothelioma
35 silicosis
35 black lung|coal workers pneumoconiosis|pneumoconiosis
35 ards|acute respiratory distress syndrome
35 interstitial lung disease|ild
35 bronchiolitis
35 whooping cough|pertussis
35 sleep apnea
40 pulmonary edema
40 lung abscess
40 empyema
40 alpha 1 antitrypsin deficiency
40 hypersensitivity pneumonitis|farmers lung|bird fanciers lung
40 aspiration pneumonia
40 legionnaires|legionella
40 atelectasis
45 berylliosis
45 byssinosis|brown lung
45 popcorn lung|bronchiolitis obliterans
45 vaping lung injury|evali
45 pneumocystis|pcp
45 aspergillosis|abpa
45 histoplasmosis
45 valley fever|coccidioidomycosis
45 hemothorax
45 respiratory distress syndrome|hyaline membrane disease|ihrds
45 bronchopulmonary dysplasia|bpd
50 lymphangioleiomyomatosis|lam
50 pulmonary alveolar proteinosis|pap
50 eosinophilic pneumonia
50 organizing pneumonia|cop|boop
50 goodpasture|anti gbm
50 primary ciliary dyskinesia|kartagener
50 langerhans cell histiocytosis
50 pulmonary arteriovenous malformation|pulmonary avm
50 chylothorax
50 lung nodule|solitary pulmonary nodule
50 carcinoid tumor
55 diffuse alveolar hemorrhage
55 pulmonary sequestration
55 congenital pulmonary airway malformation|cpam|ccam
55 lipoid pneumonia
55 lymphangitic carcinomatosis
55 bullous lung disease|giant bullae
55 tracheomalacia
55 nonspecific interstitial pneumonia|nsip
60 desquamative interstitial pneumonia|dip
60 respiratory bronchiolitis
60 pulmonary veno occlusive disease
60 swyer james
60 scimitar syndrome
60 birt hogg dube
60 hermansky pudlak
65 pleuroparenchymal fibroelastosis
65 silo fillers disease
65 bagassosis
65 hot tub lung
70 pulmonary microlithiasis|pulmonary alveolar microlithiasis
`},

{q:"Name a liver disease", strip:"disease liver", list:`
5 cirrhosis
5 hepatitis
8 fatty liver|nafld|masld|non alcoholic fatty liver
10 hepatitis b
10 hepatitis c
12 alcoholic liver disease|alcoholic hepatitis|alcoholic fatty liver
15 liver cancer|hepatocellular carcinoma|hcc
15 hepatitis a
20 jaundice
20 liver failure|acute liver failure
25 nash|mash|steatohepatitis|non alcoholic steatohepatitis
25 hemochromatosis|iron overload
25 wilsons|wilson disease
25 autoimmune hepatitis
25 gilbert syndrome|gilberts
25 primary biliary cholangitis|pbc|primary biliary cirrhosis
25 primary sclerosing cholangitis|psc
30 hepatitis e
30 hepatitis d|delta hepatitis
30 liver abscess
30 alpha 1 antitrypsin deficiency
30 gallstones|cholelithiasis
30 drug induced liver injury|dili|tylenol overdose|acetaminophen toxicity|paracetamol overdose
30 cholangiocarcinoma|bile duct cancer
35 biliary atresia
35 liver cysts|polycystic liver
35 hemangioma|liver hemangioma
35 portal hypertension
35 hepatic encephalopathy
35 ascites
35 budd chiari
35 portal vein thrombosis
40 hepatoblastoma
40 focal nodular hyperplasia|fnh
40 hepatic adenoma|liver adenoma
40 hepatorenal syndrome
40 hepatopulmonary syndrome
40 cholangitis|ascending cholangitis
40 hydatid cyst|echinococcosis
40 liver fluke|fascioliasis|clonorchiasis
40 schistosomiasis
45 crigler najjar
45 dubin johnson
45 rotor syndrome
45 reye syndrome
45 glycogen storage disease
45 alagille
45 progressive familial intrahepatic cholestasis|pfic
45 intrahepatic cholestasis of pregnancy|obstetric cholestasis
45 acute fatty liver of pregnancy
45 hellp syndrome
45 caroli disease
45 choledochal cyst
45 sinusoidal obstruction syndrome|veno occlusive disease
50 congestive hepatopathy|nutmeg liver|cardiac cirrhosis
50 shock liver|ischemic hepatitis
50 peliosis hepatis
50 porphyria cutanea tarda
50 nodular regenerative hyperplasia
50 hepatic sarcoidosis
50 amyloidosis
50 zieve syndrome
50 lysosomal acid lipase deficiency
55 fibrolamellar carcinoma
55 angiosarcoma of the liver
55 cystic fibrosis liver disease
55 idiopathic portal hypertension
55 hepatic hydrothorax
`},

{q:"Name a kidney disease", strip:"disease kidney renal", list:`
5 kidney stones|nephrolithiasis|renal calculi|stones
5 chronic kidney disease|ckd|kidney failure|renal failure|end stage
8 kidney infection|pyelonephritis
10 acute kidney injury|aki|acute renal failure
12 polycystic kidney|pkd
15 diabetic nephropathy|diabetic kidney
15 kidney cancer|renal cell carcinoma|rcc
15 glomerulonephritis
20 nephrotic syndrome
20 nephritic syndrome
20 hypertensive nephropathy|hypertensive nephrosclerosis
20 urinary tract infection|uti
25 iga nephropathy|berger
25 lupus nephritis
25 hydronephrosis
25 kidney cyst|renal cyst
25 renal artery stenosis
30 focal segmental glomerulosclerosis|fsgs
30 minimal change disease|minimal change
30 membranous nephropathy
30 alport
30 wilms tumor|nephroblastoma
30 acute tubular necrosis|atn
30 interstitial nephritis|acute interstitial nephritis|ain
30 post streptococcal glomerulonephritis|psgn
30 renal tubular acidosis|rta
35 goodpasture|anti gbm
35 hemolytic uremic syndrome|hus
35 vesicoureteral reflux|vur
35 horseshoe kidney
35 renal agenesis
35 multicystic dysplastic kidney
35 rhabdomyolysis
35 contrast nephropathy|contrast induced nephropathy
35 nephrogenic diabetes insipidus
40 fanconi syndrome
40 bartter syndrome
40 gitelman syndrome
40 liddle syndrome
40 cystinosis
40 cystinuria
40 medullary sponge kidney
40 renal vein thrombosis
40 renal infarction
40 membranoproliferative glomerulonephritis|mpgn
40 rapidly progressive glomerulonephritis|rpgn
40 anca vasculitis|anca glomerulonephritis
40 amyloidosis
40 myeloma kidney|cast nephropathy
40 analgesic nephropathy
40 lithium nephropathy
45 papillary necrosis
45 c3 glomerulopathy|dense deposit disease
45 thin basement membrane disease
45 fabry
45 primary hyperoxaluria|hyperoxaluria
45 xanthogranulomatous pyelonephritis
45 emphysematous pyelonephritis
45 renal tuberculosis
45 nutcracker syndrome
45 posterior urethral valves
45 ureteropelvic junction obstruction|upj obstruction
45 nephronophthisis
45 medullary cystic kidney disease|adtkd
50 angiomyolipoma
50 oncocytoma
50 balkan nephropathy
50 aristolochic acid nephropathy
50 hiv associated nephropathy|hivan
50 sickle cell nephropathy
50 collapsing glomerulopathy
50 fibrillary glomerulonephritis
55 dent disease
55 lowe syndrome
55 denys drash
55 wagr syndrome
55 nail patella syndrome
`},

{q:"Name a heart condition", strip:"heart disease", list:`
5 heart attack|myocardial infarction|mi
5 heart failure|congestive heart failure|chf
8 coronary artery disease|cad|coronary heart disease
8 high blood pressure|hypertension
10 arrhythmia
10 atrial fibrillation|afib|a fib
15 angina
20 cardiomyopathy
20 heart murmur|murmur
20 congenital heart disease|congenital heart defect
25 aortic stenosis
25 mitral valve prolapse|mvp
25 endocarditis
25 pericarditis
25 myocarditis
25 heart block|av block
25 bradycardia
25 tachycardia
30 hypertrophic cardiomyopathy|hcm|hocm
30 dilated cardiomyopathy
30 atrial flutter
30 supraventricular tachycardia|svt
30 ventricular tachycardia|vt
30 ventricular fibrillation|vf|vfib
30 cardiac arrest|sudden cardiac arrest
30 hole in the heart|atrial septal defect|asd
30 ventricular septal defect|vsd
30 mitral regurgitation
30 aortic regurgitation
30 rheumatic heart disease
35 wolff parkinson white|wpw
35 long qt syndrome|long qt
35 brugada
35 tetralogy of fallot
35 patent ductus arteriosus|pda
35 patent foramen ovale|pfo
35 coarctation of the aorta|coarctation
35 aortic aneurysm|thoracic aortic aneurysm
35 aortic dissection
35 pericardial effusion
35 cardiac tamponade|tamponade
35 takotsubo|broken heart syndrome
35 sick sinus syndrome
35 pulmonary hypertension
35 cor pulmonale
40 restrictive cardiomyopathy
40 arrhythmogenic right ventricular cardiomyopathy|arvc
40 transposition of the great arteries|tga
40 hypoplastic left heart syndrome|hlhs
40 bicuspid aortic valve
40 mitral stenosis
40 tricuspid regurgitation
40 pulmonary stenosis
40 constrictive pericarditis
40 cardiac amyloidosis|amyloidosis
40 cardiac sarcoidosis
40 prinzmetal angina|vasospastic angina|variant angina
40 premature ventricular contractions|pvc|ectopic beats
40 postural orthostatic tachycardia syndrome|pots
45 ebstein anomaly
45 truncus arteriosus
45 tricuspid atresia
45 total anomalous pulmonary venous return|tapvr
45 double outlet right ventricle|dorv
45 eisenmenger syndrome
45 marfan syndrome
45 kawasaki disease
45 chagas disease
45 left ventricular noncompaction
45 peripartum cardiomyopathy
45 cardiac myxoma|myxoma
45 dressler syndrome
45 catecholaminergic polymorphic ventricular tachycardia|cpvt
45 short qt syndrome
45 torsades de pointes|torsades
45 scad|spontaneous coronary artery dissection
45 microvascular angina|syndrome x
50 lutembacher syndrome
50 shone complex
50 cor triatriatum
50 anomalous coronary artery
50 loeffler endocarditis
50 libman sacks endocarditis
50 commotio cordis
50 holiday heart syndrome
50 kounis syndrome
50 lev lenegre disease
`},

{q:"Name an eye disease or condition", strip:"eye disease", list:`
5 cataracts|cataract
5 glaucoma
8 nearsightedness|myopia|short sightedness
8 farsightedness|hyperopia|long sightedness
10 pink eye|conjunctivitis
10 macular degeneration|amd|age related macular degeneration
12 astigmatism
15 diabetic retinopathy
15 dry eye|dry eye syndrome
15 lazy eye|amblyopia
15 color blindness|colour blindness
20 presbyopia
20 stye|hordeolum
20 crossed eyes|strabismus|squint
20 retinal detachment|detached retina
25 floaters
25 blepharitis
25 chalazion
25 uveitis
25 corneal abrasion|scratched cornea
30 keratoconus
30 iritis
30 retinitis pigmentosa
30 night blindness|nyctalopia
30 ptosis|droopy eyelid
30 subconjunctival hemorrhage
30 optic neuritis
30 pterygium
35 retinoblastoma
35 ocular melanoma|uveal melanoma
35 keratitis
35 corneal ulcer
35 retinal vein occlusion
35 retinal artery occlusion
35 macular hole
35 epiretinal membrane|macular pucker
35 central serous retinopathy|central serous chorioretinopathy|csr
35 nystagmus
35 trachoma
35 river blindness|onchocerciasis
35 papilledema
35 thyroid eye disease|graves ophthalmopathy
35 horner syndrome
40 pinguecula
40 episcleritis
40 scleritis
40 endophthalmitis
40 ectropion
40 entropion
40 trichiasis
40 blocked tear duct|nasolacrimal duct obstruction|dacryocystitis
40 orbital cellulitis
40 retinopathy of prematurity|rop
40 coloboma
40 aniridia
40 anisocoria
40 diplopia|double vision
40 photophobia
40 hemianopia|visual field defect
40 fuchs dystrophy|fuchs endothelial dystrophy
40 posterior vitreous detachment|pvd
40 vitreous hemorrhage
45 stargardt disease
45 leber hereditary optic neuropathy|lhon
45 leber congenital amaurosis
45 choroideremia
45 achromatopsia
45 ischemic optic neuropathy|aion|naion
45 giant cell arteritis
45 birdshot chorioretinopathy
45 coats disease
45 toxoplasmosis retinochoroiditis|ocular toxoplasmosis
45 cmv retinitis
45 acanthamoeba keratitis
45 herpes zoster ophthalmicus
45 sjogren syndrome
45 ocular rosacea
45 vernal keratoconjunctivitis
45 band keratopathy
45 arcus senilis|corneal arcus
45 kayser fleischer rings
45 ectopia lentis|lens dislocation
45 heterochromia
45 visual snow
45 charles bonnet syndrome
50 adie pupil|tonic pupil
50 argyll robertson pupil
50 marcus gunn pupil|relative afferent pupillary defect|rapd
50 duane syndrome
50 brown syndrome
50 susac syndrome
50 vogt koyanagi harada
50 sympathetic ophthalmia
50 angioid streaks
50 best disease|vitelliform macular dystrophy
50 gyrate atrophy
`}
);

RAW.push(
{q:"Name a painkiller", strip:"", list:`
5 ibuprofen|advil|motrin|nurofen
5 acetaminophen|tylenol|paracetamol|panadol
8 aspirin
10 morphine
15 naproxen|aleve|naprosyn
15 codeine
15 oxycodone|oxycontin|percocet
20 hydrocodone|vicodin|norco
20 fentanyl
25 tramadol|ultram
25 diclofenac|voltaren
25 celecoxib|celebrex
30 hydromorphone|dilaudid
30 methadone
30 ketorolac|toradol
30 lidocaine|lignocaine
30 gabapentin|neurontin
30 pregabalin|lyrica
35 buprenorphine|suboxone|subutex
35 meloxicam|mobic
35 ketamine
35 heroin|diamorphine
35 nitrous oxide|laughing gas
40 tapentadol|nucynta
40 oxymorphone|opana
40 meperidine|pethidine|demerol
40 indomethacin
40 etodolac
40 nabumetone
40 ketoprofen
40 piroxicam
40 duloxetine|cymbalta
40 amitriptyline
40 capsaicin
40 menthol
40 metamizole|dipyrone|novalgin
45 sumatriptan|imitrex|triptan
45 butorphanol
45 nalbuphine
45 pentazocine
45 levorphanol
45 dihydrocodeine
45 sufentanil
45 remifentanil
45 alfentanil
45 carisoprodol|soma
45 cyclobenzaprine|flexeril
45 baclofen
45 orphenadrine
45 diflunisal
45 sulindac
45 mefenamic acid|ponstel
45 flurbiprofen
45 oxaprozin
45 salsalate
45 bupivacaine|marcaine
45 ropivacaine
45 prilocaine
45 benzocaine
45 tetracaine
45 cannabis|medical marijuana|cbd|thc
50 ziconotide|prialt
50 nefopam
50 flupirtine
50 dextropropoxyphene|propoxyphene|darvon
50 etoricoxib
50 parecoxib
50 lumiracoxib
50 dexketoprofen
50 aceclofenac
50 lornoxicam
50 tenoxicam
50 nimesulide
50 phenazone|antipyrine
50 propyphenazone
50 suzetrigine|journavx
`},

{q:"Name a blood pressure medication", strip:"", list:`
5 lisinopril|prinivil|zestril
8 amlodipine|norvasc
10 losartan|cozaar
10 metoprolol|lopressor|toprol
15 hydrochlorothiazide|hctz
15 atenolol|tenormin
20 furosemide|lasix
20 propranolol|inderal
20 carvedilol|coreg
20 valsartan|diovan
20 enalapril|vasotec
25 ramipril|altace
25 spironolactone|aldactone
25 chlorthalidone
25 diltiazem|cardizem
25 verapamil
25 clonidine|catapres
25 hydralazine
25 nifedipine|procardia|adalat
30 olmesartan|benicar
30 irbesartan|avapro
30 telmisartan|micardis
30 candesartan|atacand
30 benazepril|lotensin
30 quinapril|accupril
30 bisoprolol
30 labetalol
30 nebivolol|bystolic
30 indapamide
30 doxazosin|cardura
30 prazosin|minipress
30 terazosin
30 methyldopa
35 minoxidil
35 eplerenone|inspra
35 sacubitril valsartan|entresto
35 captopril
35 perindopril
35 fosinopril
35 trandolapril
35 moexipril
35 azilsartan|edarbi
35 eprosartan
35 felodipine
35 nicardipine
35 isradipine
35 nisoldipine
35 lercanidipine
35 clevidipine
35 nadolol
35 pindolol
35 acebutolol
35 betaxolol
35 esmolol
35 timolol
35 bumetanide
35 torsemide
35 metolazone
35 amiloride
35 triamterene
35 aliskiren|tekturna
35 guanfacine
40 sodium nitroprusside|nitroprusside
40 phenoxybenzamine
40 phentolamine
40 reserpine
40 guanethidine
40 fenoldopam
40 aprocitentan
`},

{q:"Name a psychiatric medication", strip:"", list:`
5 sertraline|zoloft
5 fluoxetine|prozac
8 lithium
10 citalopram|celexa
10 escitalopram|lexapro
10 xanax|alprazolam
10 adderall|amphetamine
10 ritalin|methylphenidate
15 bupropion|wellbutrin
15 paroxetine|paxil
15 venlafaxine|effexor
15 duloxetine|cymbalta
15 quetiapine|seroquel
15 diazepam|valium
15 lorazepam|ativan
15 clonazepam|klonopin
20 trazodone
20 mirtazapine|remeron
20 risperidone|risperdal
20 olanzapine|zyprexa
20 aripiprazole|abilify
20 haloperidol|haldol
20 lamotrigine|lamictal
20 valproate|depakote|valproic acid|divalproex
20 buspirone|buspar
20 hydroxyzine|atarax|vistaril
25 clozapine|clozaril
25 amitriptyline|elavil
25 nortriptyline
25 vyvanse|lisdexamfetamine
25 concerta
25 atomoxetine|strattera
25 ziprasidone|geodon
25 lurasidone|latuda
25 desvenlafaxine|pristiq
25 vortioxetine|trintellix
25 carbamazepine|tegretol
25 zolpidem|ambien
25 chlordiazepoxide|librium
30 imipramine|tofranil
30 clomipramine|anafranil
30 doxepin
30 phenelzine|nardil
30 tranylcypromine|parnate
30 selegiline|emsam
30 paliperidone|invega
30 cariprazine|vraylar
30 brexpiprazole|rexulti
30 asenapine|saphris
30 iloperidone|fanapt
30 lumateperone|caplyta
30 chlorpromazine|thorazine
30 fluphenazine
30 perphenazine
30 loxapine
30 guanfacine|intuniv
30 clonidine|kapvay
30 dexmethylphenidate|focalin
30 modafinil|provigil
30 naltrexone|vivitrol
30 disulfiram|antabuse
30 acamprosate
30 esketamine|spravato
30 ketamine
30 fluvoxamine|luvox
30 temazepam|restoril
30 oxazepam
30 propranolol
30 prazosin
35 viloxazine|qelbree
35 vilazodone|viibryd
35 levomilnacipran|fetzima
35 nefazodone
35 trimipramine
35 desipramine
35 protriptyline
35 amoxapine
35 maprotiline
35 isocarboxazid|marplan
35 thioridazine
35 trifluoperazine
35 thiothixene
35 pimozide|orap
35 molindone
35 pimavanserin|nuplazid
35 xanomeline trospium|cobenfy|karxt
35 zuranolone|zurzuvae
35 brexanolone|zulresso
35 dextromethorphan bupropion|auvelity
35 olanzapine samidorphan|lybalvi
35 valbenazine|ingrezza
35 deutetrabenazine|austedo
35 eszopiclone|lunesta
35 suvorexant|belsomra
35 lemborexant|dayvigo
35 ramelteon|rozerem
35 armodafinil|nuvigil
35 solriamfetol|sunosi
35 oxcarbazepine|trileptal
35 topiramate|topamax
35 gabapentin
35 pregabalin
35 meprobamate
35 agomelatine
35 tianeptine
35 reboxetine
35 moclobemide
35 amisulpride
35 sulpiride
35 flupentixol
35 zuclopenthixol
35 sertindole
`},

{q:"Name a diabetes medication", strip:"", list:`
5 insulin
5 metformin|glucophage
10 ozempic|semaglutide|wegovy|rybelsus
15 mounjaro|tirzepatide|zepbound
15 jardiance|empagliflozin
15 farxiga|dapagliflozin
20 trulicity|dulaglutide
20 victoza|liraglutide|saxenda
20 glipizide|glucotrol
20 glimepiride|amaryl
20 glyburide|glibenclamide|diabeta
20 januvia|sitagliptin
20 lantus|insulin glargine|basaglar|toujeo
20 humalog|insulin lispro
20 novolog|insulin aspart
25 invokana|canagliflozin
25 pioglitazone|actos
25 levemir|insulin detemir
25 tresiba|insulin degludec
25 nph insulin|humulin|novolin
25 regular insulin
25 janumet
30 linagliptin|tradjenta
30 saxagliptin|onglyza
30 alogliptin|nesina
30 exenatide|byetta|bydureon
30 ertugliflozin|steglatro
30 rosiglitazone|avandia
30 acarbose|precose
30 miglitol
30 repaglinide|prandin
30 nateglinide|starlix
30 gliclazide
30 glucagon|baqsimi|gvoke
30 apidra|insulin glulisine
30 fiasp
30 afrezza|inhaled insulin
35 pramlintide|symlin
35 bromocriptine|cycloset
35 colesevelam|welchol
35 lixisenatide|adlyxin
35 sotagliflozin|inpefa
35 bexagliflozin|brenzavvy
35 tolbutamide
35 chlorpropamide
35 tolazamide
35 vildagliptin
35 teplizumab|tzield
35 insulin icodec|awiqli
35 soliqua
35 xultophy
`},

{q:"Name a vaccine-preventable disease", strip:"", list:`
5 measles
5 flu|influenza
5 covid|covid 19
8 polio
8 chickenpox|varicella
10 mumps
10 rubella|german measles
10 tetanus|lockjaw
10 whooping cough|pertussis
15 diphtheria
15 hepatitis b
15 hepatitis a
15 hpv|human papillomavirus|cervical cancer
15 shingles|herpes zoster
20 pneumococcal|pneumonia|pneumococcus
20 meningitis|meningococcal|meningococcus
20 rotavirus
20 smallpox
25 rabies
25 yellow fever
25 typhoid
25 tuberculosis|tb
25 hib|haemophilus influenzae type b
25 rsv|respiratory syncytial virus
30 japanese encephalitis
30 cholera
30 tick borne encephalitis
30 mpox|monkeypox
30 ebola
30 dengue
35 anthrax
35 chikungunya
35 malaria
35 q fever
35 hepatitis e
35 plague
40 adenovirus
40 enterovirus 71|ev71
40 leptospirosis
40 hantavirus|hemorrhagic fever with renal syndrome
40 argentine hemorrhagic fever|junin
40 kyasanur forest disease
`}
);

RAW.push(
{q:"Name an artery", strip:"artery arteries", list:`
5 aorta
8 carotid|common carotid|internal carotid|external carotid
10 coronary|coronary arteries
12 femoral
15 pulmonary
15 radial
20 brachial
20 subclavian
25 renal
25 iliac|common iliac|internal iliac|external iliac
30 popliteal
30 ulnar
30 axillary
30 vertebral
30 basilar
30 left anterior descending|lad|widowmaker
30 middle cerebral|mca
35 anterior cerebral|aca
35 posterior cerebral|pca
35 circle of willis
35 mesenteric|superior mesenteric|inferior mesenteric|sma|ima
35 celiac|celiac trunk
35 hepatic
35 splenic
35 gastric|left gastric|right gastric
35 facial
35 temporal|superficial temporal
35 dorsalis pedis
35 posterior tibial
35 anterior tibial
35 brachiocephalic|innominate
40 circumflex|left circumflex
40 right coronary|rca
40 posterior descending|pda
40 internal thoracic|internal mammary|lima
40 intercostal
40 lingual
40 maxillary
40 occipital
40 ophthalmic
40 middle meningeal
40 profunda femoris|deep femoral
40 gonadal|ovarian|testicular
40 uterine
40 umbilical
40 peroneal|fibular
40 gastroduodenal
40 gastroepiploic|gastro omental
45 thyrocervical trunk
45 costocervical trunk
45 superior thyroid
45 inferior thyroid
45 ascending pharyngeal
45 posterior auricular
45 anterior communicating
45 posterior communicating
45 anterior inferior cerebellar|aica
45 posterior inferior cerebellar|pica
45 superior cerebellar
45 anterior spinal
45 artery of adamkiewicz|adamkiewicz|great radicular
45 pudendal|internal pudendal
45 obturator
45 superior gluteal
45 inferior gluteal
45 inferior epigastric
45 superior epigastric
45 musculophrenic
45 bronchial
45 suprarenal
45 inferior phrenic
45 cystic
45 sigmoid
45 ileocolic
45 middle colic
45 right colic
45 left colic
45 marginal artery of drummond|drummond
45 arc of riolan|riolan
45 superior rectal
45 vesical
45 genicular
45 sural
45 plantar|medial plantar|lateral plantar
45 arcuate
45 digital
45 palmar arch|superficial palmar arch|deep palmar arch
45 princeps pollicis
45 anterior interosseous
45 thoracoacromial
45 lateral thoracic
45 subscapular
45 thoracodorsal
45 suprascapular
45 sphenopalatine
45 lenticulostriate
45 recurrent artery of heubner|heubner
45 artery of percheron|percheron
45 sinoatrial nodal
45 vasa vasorum
`},

{q:"Name a vein", strip:"vein veins", list:`
5 jugular|internal jugular|external jugular
8 vena cava|superior vena cava|inferior vena cava|svc|ivc
10 varicose|varicose veins
12 pulmonary
15 portal|hepatic portal
15 femoral
20 saphenous|great saphenous|long saphenous
25 basilic
25 cephalic
25 median cubital|antecubital
25 subclavian
25 brachiocephalic|innominate
30 renal
30 hepatic
30 splenic
30 iliac|common iliac|external iliac|internal iliac
30 popliteal
30 axillary
30 brachial
30 radial
30 ulnar
35 small saphenous|short saphenous
35 superior mesenteric
35 inferior mesenteric
35 coronary sinus
35 great cardiac
35 azygos
35 hemiazygos
35 umbilical
35 gonadal|testicular|ovarian
35 left gonadal
35 pampiniform plexus
35 facial
35 retromandibular
35 dural venous sinuses|venous sinus|sagittal sinus|superior sagittal sinus
35 transverse sinus
35 sigmoid sinus
35 cavernous sinus
35 vein of galen|great cerebral vein|galen
40 straight sinus
40 inferior sagittal sinus
40 confluence of sinuses|torcular herophili
40 emissary veins
40 diploic veins
40 ophthalmic|superior ophthalmic
40 pterygoid plexus
40 vertebral
40 vertebral venous plexus|batson plexus
40 accessory hemiazygos
40 intercostal
40 internal thoracic
40 thyroid|inferior thyroid|middle thyroid|superior thyroid
40 lingual
40 dorsal venous arch
40 perforator veins|perforating veins
40 tibial|anterior tibial|posterior tibial
40 peroneal|fibular
40 sural
40 gastric|left gastric|coronary vein
40 gastroepiploic
40 cystic
40 paraumbilical
40 rectal|superior rectal|hemorrhoidal
40 vesical
40 uterine
40 pudendal
40 obturator
40 gluteal
40 lumbar
40 ascending lumbar
40 suprarenal|adrenal
40 inferior phrenic
40 central vein of the liver|central vein
40 vein of marshall|oblique vein of left atrium
40 thebesian veins|venae cordis minimae
40 anterior cardiac
40 middle cardiac
40 small cardiac
40 basal vein of rosenthal|rosenthal
40 vein of labbe|labbe
40 vein of trolard|trolard
40 internal cerebral
40 thalamostriate
40 ductus venosus
40 cardinal veins
`},

{q:"Name a nerve", strip:"nerve nerves", list:`
5 sciatic
8 vagus
10 optic
10 ulnar|funny bone
15 median
15 radial
15 facial
20 femoral
20 phrenic
20 trigeminal
25 spinal cord
25 olfactory
25 tibial
25 peroneal|fibular|common peroneal|common fibular
30 brachial plexus
30 musculocutaneous
30 axillary
30 pudendal
30 obturator
30 sural
30 saphenous
30 intercostal
30 hypoglossal
30 glossopharyngeal
30 accessory|spinal accessory
30 oculomotor
30 trochlear
30 abducens
30 vestibulocochlear|auditory|acoustic
35 long thoracic
35 thoracodorsal
35 suprascapular
35 dorsal scapular
35 lateral femoral cutaneous
35 genitofemoral
35 ilioinguinal
35 iliohypogastric
35 superior gluteal
35 inferior gluteal
35 deep peroneal|deep fibular
35 superficial peroneal|superficial fibular
35 medial plantar
35 lateral plantar
35 recurrent laryngeal
35 superior laryngeal
35 greater occipital
35 lesser occipital
35 great auricular
35 lingual
35 inferior alveolar
35 mandibular
35 maxillary
35 ophthalmic
35 chorda tympani
35 greater petrosal
35 infraorbital
35 supraorbital
35 mental
35 buccal
35 auriculotemporal
35 anterior interosseous
35 posterior interosseous
35 digital
35 splanchnic|greater splanchnic|lesser splanchnic
35 pelvic splanchnic
35 sympathetic trunk|sympathetic chain
35 cauda equina
35 lumbar plexus
35 sacral plexus
35 cervical plexus
35 ansa cervicalis
35 thoracic nerves
35 medial antebrachial cutaneous
35 lateral antebrachial cutaneous
35 posterior femoral cutaneous
35 nerve to stapedius
35 nervus intermedius
35 terminal|cranial nerve zero
35 nerve of kuntz|kuntz
35 jacobson|tympanic nerve
35 arnold|auricular branch of vagus
35 nerve of latarjet|latarjet
35 nerve of bell|bell
35 lateral pectoral
35 medial pectoral
35 subscapular
35 subcostal
35 nasociliary
35 frontal
35 lacrimal
35 zygomatic
35 deep petrosal
35 vidian
`},

{q:"Name a part of the brain", strip:"the", list:`
5 cerebrum
5 cerebellum
8 brainstem|brain stem
10 frontal lobe
10 hippocampus
12 temporal lobe
12 parietal lobe
12 occipital lobe
15 amygdala
15 hypothalamus
15 thalamus
15 medulla|medulla oblongata
20 pons
20 midbrain|mesencephalon
20 cortex|cerebral cortex|gray matter|grey matter
20 corpus callosum
20 pituitary gland|pituitary
25 prefrontal cortex
25 white matter
25 ventricles|lateral ventricles
25 pineal gland|pineal
25 basal ganglia
25 limbic system
30 brocas area|broca
30 wernickes area|wernicke
30 motor cortex|primary motor cortex|precentral gyrus
30 somatosensory cortex|postcentral gyrus|sensory cortex
30 visual cortex|primary visual cortex|v1
30 auditory cortex
30 meninges|dura mater|arachnoid|pia mater
30 neurons
30 cerebrospinal fluid|csf
35 substantia nigra
35 caudate nucleus|caudate
35 putamen
35 globus pallidus
35 striatum
35 nucleus accumbens
35 insula|insular cortex
35 cingulate|cingulate gyrus|anterior cingulate
35 fornix
35 mammillary bodies
35 septum pellucidum
35 third ventricle
35 fourth ventricle
35 cerebral aqueduct|aqueduct of sylvius
35 choroid plexus
35 hemispheres|left hemisphere|right hemisphere
35 gyrus|gyri
35 sulcus|sulci
35 sylvian fissure|lateral sulcus
35 central sulcus|fissure of rolando
35 longitudinal fissure
35 olfactory bulb
35 optic chiasm
40 subthalamic nucleus
40 red nucleus
40 tectum|superior colliculus|inferior colliculus
40 tegmentum
40 cerebral peduncles
40 internal capsule
40 claustrum
40 entorhinal cortex
40 parahippocampal gyrus
40 fusiform gyrus|fusiform face area
40 angular gyrus
40 supramarginal gyrus
40 cuneus
40 precuneus
40 lingual gyrus
40 orbitofrontal cortex
40 ventromedial prefrontal cortex
40 dorsolateral prefrontal cortex
40 premotor cortex
40 supplementary motor area
40 locus coeruleus
40 raphe nuclei
40 ventral tegmental area|vta
40 reticular formation
40 suprachiasmatic nucleus
40 paraventricular nucleus
40 arcuate nucleus
40 lateral geniculate nucleus
40 medial geniculate nucleus
40 pulvinar
40 vermis
40 flocculus|flocculonodular lobe
40 dentate nucleus
40 purkinje cells
40 olive|inferior olive
40 area postrema
40 circumventricular organs
40 blood brain barrier
40 periaqueductal gray
40 habenula
40 nucleus basalis of meynert|basal nucleus
40 bed nucleus of the stria terminalis
40 stria terminalis
40 anterior commissure
40 posterior commissure
40 hippocampal commissure
40 uncus
40 dentate gyrus
40 subiculum
40 heschls gyrus
40 brodmann areas
40 operculum
40 cerebellar tonsils
`},

{q:"Name a part of the ear", strip:"the", list:`
5 eardrum|tympanic membrane
8 cochlea
10 ear canal|auditory canal|external auditory meatus
10 earlobe|lobule
12 outer ear|pinna|auricle
15 middle ear
15 inner ear
15 stapes|stirrup
15 incus|anvil
15 malleus|hammer
20 eustachian tube|auditory tube
20 semicircular canals
20 ossicles
25 vestibule
25 auditory nerve|vestibulocochlear nerve|cochlear nerve
25 earwax|cerumen
25 helix
25 tragus
30 antihelix
30 antitragus
30 concha
30 utricle
30 saccule
30 oval window
30 round window
30 organ of corti
30 hair cells
30 basilar membrane
35 tectorial membrane
35 scala vestibuli
35 scala tympani
35 scala media|cochlear duct
35 perilymph
35 endolymph
35 endolymphatic sac
35 otoliths|otoconia
35 cupula
35 ampulla
35 crista ampullaris
35 macula
35 stria vascularis
35 spiral ganglion
35 modiolus
35 helicotrema
35 reissners membrane|vestibular membrane
35 mastoid|mastoid air cells|mastoid process
35 tensor tympani
35 stapedius
35 chorda tympani
35 pars flaccida
35 pars tensa
35 umbo
35 scaphoid fossa
35 triangular fossa
35 crus of helix
35 darwins tubercle|darwin
35 intertragic notch
35 cymba conchae
35 cavum conchae
35 epitympanum|attic
35 promontory
35 aditus ad antrum
35 internal auditory meatus|internal acoustic meatus
35 bony labyrinth
35 membranous labyrinth
35 cochlear aqueduct
35 vestibular aqueduct
35 vestibular ganglion|scarpa ganglion
`},

{q:"Name a joint in the body", strip:"joint joints", list:`
5 knee
5 shoulder
8 hip
8 elbow
10 wrist
10 ankle
15 knuckles|knuckle|metacarpophalangeal|mcp
20 jaw|temporomandibular|tmj
20 spine|vertebral
20 neck
25 toe|big toe
25 finger
30 sacroiliac|si joint
30 acromioclavicular|ac joint
30 sternoclavicular
30 glenohumeral
30 interphalangeal|pip|dip
30 metatarsophalangeal|mtp|bunion joint
30 facet joints|zygapophyseal
30 pubic symphysis|symphysis pubis
30 intervertebral disc
35 atlanto occipital
35 atlanto axial
35 subtalar
35 talocrural
35 tibiofemoral
35 patellofemoral
35 proximal tibiofibular
35 distal tibiofibular
35 humeroulnar
35 humeroradial
35 proximal radioulnar
35 distal radioulnar
35 radiocarpal
35 midcarpal
35 carpometacarpal|thumb base|cmc
35 intercarpal
35 tarsometatarsal|lisfranc
35 transverse tarsal|chopart|midtarsal
35 talonavicular
35 calcaneocuboid
35 costovertebral
35 costochondral
35 sternocostal
35 manubriosternal
35 xiphisternal
35 cranial sutures|sutures
35 gomphosis|tooth socket
35 syndesmosis
35 synchondrosis
35 uncovertebral|luschka
35 cricoarytenoid
35 cricothyroid
35 incudostapedial
35 incudomalleolar
35 scapulothoracic
35 hinge joint
35 ball and socket
35 pivot joint
35 saddle joint
35 condyloid joint|ellipsoid
35 gliding joint|plane joint
`},

{q:"Name a ligament or tendon", strip:"ligament tendon", list:`
5 achilles|calcaneal
5 acl|anterior cruciate
10 mcl|medial collateral
12 rotator cuff
15 pcl|posterior cruciate
15 hamstring
15 lcl|lateral collateral
20 patellar|patella
20 meniscus
25 plantar fascia
25 biceps
25 quadriceps
30 iliotibial band|it band|itb
30 ulnar collateral|ucl|tommy john
30 deltoid ligament
30 atfl|anterior talofibular
30 supraspinatus
30 triceps
35 calcaneofibular
35 posterior talofibular
35 high ankle|anterior inferior tibiofibular|syndesmosis
35 infraspinatus
35 teres minor
35 subscapularis
35 transverse carpal|flexor retinaculum
35 extensor retinaculum
35 triangular fibrocartilage|tfcc
35 scapholunate
35 lunotriquetral
35 radial collateral
35 annular ligament
35 coracoclavicular
35 coracoacromial
35 acromioclavicular
35 glenohumeral ligaments
35 labrum
35 ligamentum flavum
35 anterior longitudinal
35 posterior longitudinal
35 nuchal ligament|ligamentum nuchae
35 supraspinous
35 interspinous
35 sacrospinous
35 sacrotuberous
35 iliolumbar
35 inguinal ligament|pouparts
35 iliofemoral|y ligament|bigelow
35 pubofemoral
35 ischiofemoral
35 ligamentum teres
35 broad ligament
35 round ligament
35 cardinal ligament
35 uterosacral
35 suspensory ligament of the ovary|infundibulopelvic
35 ovarian ligament
35 falciform
35 coronary ligament
35 hepatoduodenal
35 gastrosplenic
35 splenorenal
35 ligament of treitz|treitz|suspensory ligament of duodenum
35 suspensory ligament of the lens|zonules
35 cooper ligaments|suspensory ligaments of the breast
35 periodontal ligament
35 stylohyoid
35 sphenomandibular
35 alar ligament
35 transverse ligament of atlas
35 cruciform
35 spring ligament|plantar calcaneonavicular
35 lisfranc ligament
35 tibialis posterior
35 peroneal|fibular
35 flexor hallucis longus
35 extensor pollicis longus
35 abductor pollicis longus
35 extensor pollicis brevis
35 flexor digitorum profundus
35 flexor digitorum superficialis
35 palmaris longus
35 plantaris
35 central tendon of diaphragm
35 conjoint tendon
35 pes anserinus|pes anserine
35 arcuate ligament|median arcuate
35 popliteofibular
35 anterolateral ligament|all
35 medial patellofemoral|mpfl
35 transverse acetabular
35 dorsal radiocarpal
35 volar plate
`}
);

RAW.push(
{q:"Name a gland in the body", strip:"gland glands", list:`
5 thyroid
8 pituitary
10 adrenal|adrenals|suprarenal
10 sweat|sweat glands|eccrine
15 salivary
15 pancreas
20 pineal
20 hypothalamus
20 thymus
20 parathyroid
20 prostate
20 lymph nodes|lymph glands
25 mammary|breast
25 sebaceous|oil glands
25 ovaries|ovary
25 testes|testicles|testis
25 tear|lacrimal
30 parotid
30 submandibular
30 sublingual
30 apocrine
30 liver
35 bartholin
35 cowper|bulbourethral
35 seminal vesicle
35 skene|paraurethral
35 meibomian
35 tonsils
35 adenoids
35 brunner
35 crypts of lieberkuhn|intestinal crypts
35 gastric glands
35 islets of langerhans
35 ceruminous|ear wax glands
35 montgomery|areolar glands
35 moll
35 zeis
35 krause
35 wolfring
35 von ebner
35 minor salivary
35 glands of littre|urethral glands
35 mucous glands
35 esophageal glands
35 bowman glands|olfactory glands
35 tarsal glands
35 harderian
35 pyloric glands
35 cardiac glands
35 endometrial glands
35 cervical glands|nabothian
35 placenta
35 corpus luteum
35 thyroid follicles
35 adrenal medulla
35 adrenal cortex
35 anterior pituitary|adenohypophysis
35 posterior pituitary|neurohypophysis
35 kidneys
35 heart
35 enteroendocrine cells
35 paraganglia|carotid body
35 glomus
35 serous glands
35 mixed glands
35 holocrine
35 merocrine
`},

{q:"Name a component or cell of the blood", strip:"cell cells blood", list:`
5 red blood cells|red|erythrocytes|rbc|rbcs
5 white blood cells|white|leukocytes|wbc|wbcs
8 platelets|thrombocytes
8 plasma
10 hemoglobin|haemoglobin
15 lymphocytes
15 neutrophils
20 t cells|t lymphocytes|t cell
20 b cells|b lymphocytes|b cell
20 antibodies|immunoglobulins
25 monocytes
25 eosinophils
25 basophils
25 serum
25 water
25 glucose|sugar
25 oxygen
25 iron
30 natural killer|nk cells
30 macrophages
30 albumin
30 fibrinogen
30 clotting factors|coagulation factors
30 electrolytes
30 cholesterol
30 hormones
35 reticulocytes
35 plasma cells
35 helper t cells|cd4|cd4 cells
35 cytotoxic t cells|cd8|killer t cells
35 regulatory t cells|tregs
35 memory cells|memory b cells|memory t cells
35 dendritic cells
35 mast cells
35 granulocytes
35 agranulocytes
35 band cells|bands
35 globulins
35 complement|complement proteins
35 sodium
35 potassium
35 calcium
35 bicarbonate
35 urea
35 carbon dioxide
35 lipoproteins|ldl|hdl
35 von willebrand factor
35 thrombin
35 prothrombin
35 fibrin
35 factor viii|factor 8
35 factor ix|factor 9
35 antithrombin
35 protein c
35 protein s
35 plasminogen
35 transferrin
35 ferritin
35 haptoglobin
35 ceruloplasmin
35 bilirubin
35 creatinine
35 lactate
35 cytokines
35 interferon
35 interleukins
35 megakaryocytes
35 stem cells|hematopoietic stem cells
35 myeloblasts
35 nucleated red blood cells
35 schistocytes
35 spherocytes
35 target cells
35 howell jolly bodies
35 heinz bodies
35 sickle cells
35 gamma delta t cells
35 nkt cells
35 innate lymphoid cells
35 plasmacytoid dendritic cells
35 microparticles
35 exosomes
35 circulating tumor cells
35 cell free dna
`},

{q:"Name an enzyme in the human body", strip:"enzyme", list:`
5 amylase|salivary amylase
5 lipase
8 pepsin
10 lactase
12 trypsin
15 protease
15 dna polymerase|polymerase
20 catalase
20 helicase
20 ligase|dna ligase
25 sucrase
25 maltase
25 chymotrypsin
25 rna polymerase
25 atp synthase
30 carbonic anhydrase
30 alt|alanine aminotransferase
30 ast|aspartate aminotransferase
30 alkaline phosphatase
30 creatine kinase|ck|cpk
30 lactate dehydrogenase|ldh
30 acetylcholinesterase
30 lysozyme
30 hexokinase
30 thrombin
30 plasmin
30 renin
30 angiotensin converting enzyme|ace
30 cyclooxygenase|cox|cox 1|cox 2
30 nitric oxide synthase
30 elastase
30 collagenase
30 telomerase
30 topoisomerase
30 primase
30 reverse transcriptase
30 kinase|protein kinase
30 phosphatase
35 g6pd|glucose 6 phosphate dehydrogenase
35 aldolase
35 enolase
35 pyruvate kinase
35 phosphofructokinase|pfk
35 citrate synthase
35 isocitrate dehydrogenase
35 succinate dehydrogenase
35 pyruvate dehydrogenase
35 glycogen synthase
35 glycogen phosphorylase
35 hmg coa reductase
35 fatty acid synthase
35 acetyl coa carboxylase
35 lipoprotein lipase
35 hormone sensitive lipase
35 cytochrome p450|cyp450|cyp3a4|cyp2d6
35 alcohol dehydrogenase
35 aldehyde dehydrogenase
35 monoamine oxidase|mao
35 comt|catechol o methyltransferase
35 tyrosine hydroxylase
35 tryptophan hydroxylase
35 dopa decarboxylase
35 aromatase
35 5 alpha reductase
35 21 hydroxylase
35 11 beta hydroxylase
35 superoxide dismutase
35 glutathione peroxidase
35 xanthine oxidase
35 adenosine deaminase
35 urease
35 arginase
35 ornithine transcarbamylase
35 carbamoyl phosphate synthetase
35 phenylalanine hydroxylase
35 tyrosinase
35 hyaluronidase
35 enteropeptidase|enterokinase
35 carboxypeptidase
35 aminopeptidase
35 dipeptidyl peptidase 4|dpp 4
35 ribonuclease|rnase
35 deoxyribonuclease|dnase
35 caspase
35 matrix metalloproteinase|mmp
35 cathepsin
35 furin
35 ptyalin
35 glucocerebrosidase
35 hexosaminidase a
35 alpha galactosidase
35 acid maltase|acid alpha glucosidase
35 sphingomyelinase
35 heme oxygenase
35 ferrochelatase
35 aminolevulinic acid synthase|ala synthase
35 thyroid peroxidase|tpo
35 deiodinase
35 guanylate cyclase
35 adenylate cyclase|adenylyl cyclase
35 phospholipase|phospholipase a2
35 phosphodiesterase|pde5
`},

{q:"Name a neurotransmitter", strip:"neurotransmitter", list:`
5 dopamine
5 serotonin
10 adrenaline|epinephrine
15 noradrenaline|norepinephrine
15 acetylcholine
20 gaba|gamma aminobutyric acid
20 glutamate
25 endorphins|endorphin
30 oxytocin
35 histamine
35 glycine
40 aspartate
40 adenosine
40 atp
45 substance p
45 anandamide|endocannabinoids
45 nitric oxide
50 melatonin
50 enkephalins|enkephalin
50 dynorphin
50 neuropeptide y|npy
55 orexin|hypocretin
55 vasopressin
55 vip|vasoactive intestinal peptide
60 2 ag|2 arachidonoylglycerol
60 cgrp|calcitonin gene related peptide
60 galanin
60 cholecystokinin|cck
60 somatostatin
65 d serine
65 tyramine
65 phenylethylamine|pea
65 tryptamine
65 octopamine
65 carbon monoxide
65 hydrogen sulfide
65 beta endorphin
65 neurotensin
65 bombesin
70 trace amines
70 agmatine
70 taurine
70 nociceptin
70 kisspeptin
70 trh|thyrotropin releasing hormone
70 crh|corticotropin releasing hormone
70 ghrelin
`},

{q:"Name a part of the digestive system", strip:"the", list:`
5 stomach
5 mouth
8 esophagus|oesophagus|food pipe
8 small intestine
10 large intestine|colon
12 liver
15 rectum
15 anus
15 pancreas
15 gallbladder
20 appendix
20 duodenum
25 teeth|tooth
25 tongue
25 salivary glands
25 pharynx|throat
30 ileum
30 jejunum
30 cecum|caecum
30 sigmoid colon
30 epiglottis
30 bile duct|common bile duct
35 ascending colon
35 transverse colon
35 descending colon
35 pyloric sphincter|pylorus
35 lower esophageal sphincter|cardiac sphincter
35 upper esophageal sphincter
35 villi|microvilli
35 fundus
35 antrum
35 cardia
35 rugae
35 ileocecal valve
35 sphincter of oddi
35 ampulla of vater|hepatopancreatic ampulla
35 pancreatic duct|duct of wirsung
35 accessory pancreatic duct|duct of santorini
35 cystic duct
35 hepatic duct
35 hepatic flexure
35 splenic flexure
35 haustra
35 taeniae coli
35 anal canal
35 internal anal sphincter
35 external anal sphincter
35 peyers patches
35 crypts of lieberkuhn
35 brunner glands
35 plicae circulares|circular folds
35 mesentery
35 peritoneum
35 omentum|greater omentum|lesser omentum
35 gut microbiome|gut bacteria|microbiome
35 uvula
35 soft palate
35 hard palate
35 lips
35 gums
35 enteric nervous system|myenteric plexus|auerbach
35 submucosal plexus|meissner
35 interstitial cells of cajal
35 parietal cells
35 chief cells
35 goblet cells
35 paneth cells
35 kupffer cells
35 hepatocytes
35 ligament of treitz
35 duodenojejunal flexure
35 rectosigmoid junction
35 dentate line|pectinate line
35 valves of houston
35 vermiform appendix
`}
);

RAW.push(
{q:"Name a surgical procedure", strip:"surgery operation procedure", list:`
5 appendectomy|appendix removal
5 c section|cesarean|caesarean|cesarean section
8 tonsillectomy|tonsil removal
8 knee replacement|total knee arthroplasty|tka
8 hip replacement|total hip arthroplasty|tha
10 heart bypass|cabg|coronary artery bypass|bypass
10 gallbladder removal|cholecystectomy
12 mastectomy
15 hysterectomy
15 vasectomy
15 lasik|eye surgery
15 cataract surgery
15 tummy tuck|abdominoplasty
15 liposuction
15 nose job|rhinoplasty
15 breast augmentation|boob job
20 gastric bypass|roux en y|bariatric surgery
20 sleeve gastrectomy|gastric sleeve
20 heart transplant
20 kidney transplant
20 liver transplant
20 lung transplant
20 angioplasty|stent|stenting|pci
20 tracheostomy
20 amputation
20 circumcision
20 lumpectomy
20 spinal fusion
20 acl reconstruction
20 arthroscopy|knee arthroscopy
20 hernia repair|herniorrhaphy|hernioplasty
25 colectomy
25 colostomy
25 ileostomy
25 lobectomy
25 pneumonectomy
25 craniotomy
25 laminectomy
25 discectomy|microdiscectomy
25 thyroidectomy
25 splenectomy
25 nephrectomy
25 prostatectomy
25 tubal ligation|tubes tied
25 dilation and curettage|d and c
25 carpal tunnel release
25 rotator cuff repair
25 open heart surgery
25 valve replacement|aortic valve replacement|avr|tavr|tavi
25 pacemaker insertion|pacemaker
25 skin graft
25 facelift|rhytidectomy
25 blepharoplasty|eyelid surgery
25 laparotomy|exploratory laparotomy
25 laparoscopy
30 whipple|pancreaticoduodenectomy
30 gastrectomy
30 esophagectomy
30 hepatectomy|liver resection
30 thoracotomy
30 sternotomy
30 tracheotomy
30 thymectomy
30 adrenalectomy
30 parathyroidectomy
30 oophorectomy
30 salpingectomy
30 myomectomy
30 orchiectomy
30 orchiopexy
30 turp|transurethral resection of the prostate
30 cystectomy
30 cystoscopy
30 lithotripsy
30 ureteroscopy
30 septoplasty
30 sinus surgery|fess|functional endoscopic sinus surgery
30 myringotomy|ear tubes|grommets
30 cochlear implant
30 mastoidectomy
30 stapedectomy
30 vitrectomy
30 corneal transplant|keratoplasty
30 trabeculectomy
30 deep brain stimulation|dbs
30 vp shunt|ventriculoperitoneal shunt|shunt
30 carotid endarterectomy|endarterectomy
30 aneurysm clipping
30 embolectomy
30 thrombectomy
30 fasciotomy
30 debridement
30 incision and drainage|i and d
30 fistulotomy
30 hemorrhoidectomy
30 sphincterotomy
30 pyloromyotomy
30 fundoplication|nissen
30 heller myotomy
30 poem|peroral endoscopic myotomy
30 ostomy reversal
30 low anterior resection
30 abdominoperineal resection
30 hartmann procedure|hartmann
30 kasai|kasai procedure
30 fontan
30 glenn|glenn shunt
30 norwood
30 blalock taussig shunt|bt shunt
30 ross procedure|ross
30 ravitch|nuss procedure|nuss
30 ilizarov
30 bankart repair
30 latarjet
30 tommy john|ucl reconstruction
30 bunionectomy
30 osteotomy
30 kyphoplasty|vertebroplasty
30 hemicolectomy
30 gastrostomy|peg tube|peg
30 jejunostomy
30 cricothyrotomy|cric
30 thoracentesis
30 paracentesis
30 pericardiocentesis
30 lumbar puncture|spinal tap
30 bone marrow biopsy
30 mohs|mohs surgery
30 frenectomy|tongue tie
30 uvulopalatopharyngoplasty|uppp
30 labiaplasty
30 phalloplasty
30 vaginoplasty
30 hemispherectomy
30 corpus callosotomy
30 lobotomy|leucotomy
30 trepanation|trephination
`},

{q:"Name a medical instrument or tool", strip:"", list:`
5 stethoscope
5 scalpel
5 syringe|needle
8 thermometer
10 blood pressure cuff|sphygmomanometer|bp cuff
10 tongue depressor
12 otoscope
15 forceps
15 scissors|surgical scissors
15 defibrillator|aed
15 x ray machine
15 bandage|gauze
20 reflex hammer
20 ophthalmoscope
20 pulse oximeter|pulse ox
20 catheter|foley catheter|urinary catheter
20 iv|cannula|iv cannula|drip
20 clamp|hemostat
20 retractor
20 sutures|stitches
20 stapler|surgical stapler|skin stapler
20 endoscope
20 laryngoscope
20 speculum
20 ventilator
20 crutches
20 wheelchair
20 tourniquet
20 glucometer|blood glucose meter
20 ecg machine|ekg|electrocardiograph
25 bronchoscope
25 colonoscope
25 laparoscope
25 arthroscope
25 cystoscope
25 proctoscope|anoscope
25 sigmoidoscope
25 nebulizer
25 inhaler|spacer
25 oxygen mask|nasal cannula
25 bag valve mask|ambu bag
25 endotracheal tube|et tube|breathing tube
25 suction|yankauer
25 cautery|electrocautery|bovie
25 curette
25 trocar
25 dilator
25 probe
25 needle holder|needle driver
25 bone saw|oscillating saw
25 drill|bone drill
25 chisel|osteotome
25 rongeur
25 mallet
25 tenaculum
25 lancet
25 microscope|operating microscope
25 slit lamp
25 tonometer
25 snellen chart|eye chart
25 tuning fork
25 audiometer
25 spirometer|incentive spirometer
25 peak flow meter
25 doppler
25 ultrasound probe|transducer
25 infusion pump|iv pump
25 dialysis machine
25 heart lung machine|bypass machine|ecmo
25 pacemaker
25 holter monitor
25 splint
25 cast
25 sling
25 cervical collar|neck brace
25 backboard|spine board
25 stretcher|gurney
25 incubator
25 crash cart
25 chest tube
25 nasogastric tube|ng tube
25 central line
25 picc line|picc
25 port|port a cath
25 swan ganz catheter|pulmonary artery catheter
25 arterial line|a line
25 intraosseous needle|io needle|ez io
25 lumbar puncture needle|spinal needle
25 biopsy needle|core needle
25 dermatome
25 skin hook
25 bone marrow needle|jamshidi
25 kelly clamp|kelly
25 kocher
25 allis
25 babcock
25 metzenbaum|metz
25 mayo scissors
25 deaver retractor
25 balfour retractor
25 weitlaner
25 gelpi
25 army navy retractor
25 senn retractor
25 richardson retractor
25 bookwalter
25 da vinci|surgical robot
25 harmonic scalpel
25 ligasure
25 gigli saw
25 doyen
25 mcintosh blade|macintosh
25 miller blade
25 bougie
25 laryngeal mask airway|lma
25 oropharyngeal airway|guedel
25 nasopharyngeal airway|nasal trumpet
25 pinard horn|pinard stethoscope
25 fetal doppler
25 amniohook
25 vacuum extractor|ventouse
25 obstetric forceps
25 cervical dilator|hegar
25 sound|uterine sound
25 colposcope
25 dermatoscope
25 woods lamp
25 monofilament
25 goniometer
25 caliper|skinfold caliper
25 tape measure
`},

{q:"Name a type of bone fracture", strip:"fracture fractures", list:`
5 compound|open
5 simple|closed
8 hairline|stress
10 greenstick
12 comminuted|shattered
15 spiral
15 transverse
15 oblique
15 displaced
15 non displaced|nondisplaced
20 compression|vertebral compression
20 avulsion
20 buckle|torus
20 hip|femoral neck
20 colles
20 boxers|boxer
25 impacted
25 pathologic|pathological
25 segmental
25 smith
25 scaphoid
25 skull|depressed skull
25 rib
25 clavicle|collarbone
25 ankle
30 barton
30 jones
30 march|metatarsal stress
30 bennett
30 rolando
30 monteggia
30 galeazzi
30 pott|potts
30 maisonneuve
30 lisfranc
30 chance|seatbelt
30 hangmans|hangman
30 jefferson
30 clay shovelers|clay shoveler
30 burst
30 teardrop
30 odontoid|dens
30 salter harris|growth plate|physeal
30 tillaux
30 triplane
30 supracondylar
30 intertrochanteric
30 subtrochanteric
30 tibial plateau
30 pilon
30 trimalleolar
30 bimalleolar
30 blowout|orbital blowout
30 le fort|lefort
30 tripod|zygomaticomaxillary complex
30 nightstick
30 mallet|mallet finger
30 chauffeur|chauffeurs
30 hill sachs
30 bankart|bony bankart
30 segond
30 holstein lewis
30 basilar skull
30 nasal|broken nose
30 toddlers|toddler
30 plastic deformation|bowing
30 insufficiency
30 fragility
30 occult
30 butterfly
30 crush
30 linear
30 longitudinal
30 epiphyseal
30 open book pelvic|pelvic
30 acetabular
30 calcaneal|lovers|don juan
30 snowboarders|lateral talar process
30 dancers|pseudo jones
30 boot top
30 bumper
30 parry
30 piedmont
30 essex lopresti
30 duverney
30 malgaigne
30 stieda
30 pellegrini stieda
30 hoffa
30 kocher|kocher lorenz
30 hahn steinthal
30 posadas
30 shepherd
30 gosselin
30 cotton
30 dupuytren
30 wagstaffe
30 aviators astragalus|aviator
30 ping pong
`},

{q:"Name a sexually transmitted infection", strip:"sti std infection", list:`
5 chlamydia
5 gonorrhea|the clap|gonorrhoea
8 hiv|aids
8 herpes|genital herpes|hsv|hsv 2
10 syphilis
10 hpv|human papillomavirus|genital warts
15 trichomoniasis|trich|trichomonas
20 hepatitis b|hep b
25 pubic lice|crabs
25 scabies
30 hepatitis c|hep c
30 mycoplasma genitalium|mgen
35 bacterial vaginosis|bv
35 mpox|monkeypox
35 molluscum contagiosum
40 chancroid|haemophilus ducreyi
40 lymphogranuloma venereum|lgv
40 donovanosis|granuloma inguinale
40 hepatitis a
45 zika
45 ureaplasma
45 cytomegalovirus|cmv
45 shigella|shigellosis
45 pelvic inflammatory disease|pid
45 nongonococcal urethritis|ngu
45 epididymitis
50 htlv|htlv 1
50 giardia
50 kshv|hhv 8|kaposi sarcoma herpesvirus
50 meningococcus|neisseria meningitidis urethritis
`},

{q:"Name a cause of anemia", strip:"deficiency anemia", list:`
5 iron|iron deficiency
8 blood loss|bleeding|hemorrhage
10 heavy periods|menorrhagia|menstruation
10 vitamin b12|b12
12 folate|folic acid
15 pregnancy
15 chronic kidney disease|kidney disease|ckd
15 sickle cell|sickle cell disease
15 thalassemia
20 cancer
20 leukemia
20 chronic disease|anemia of chronic disease|inflammation
20 ulcer|stomach ulcer|peptic ulcer
20 colon cancer|colorectal cancer
20 poor diet|malnutrition
25 pernicious anemia
25 celiac disease|celiac
25 crohns|inflammatory bowel disease|ibd
25 hemolysis|hemolytic anemia
25 g6pd deficiency|g6pd
25 hereditary spherocytosis|spherocytosis
25 aplastic anemia
25 bone marrow failure
25 chemotherapy
25 hookworm
25 malaria
25 hypothyroidism
25 alcoholism|alcohol
25 liver disease|cirrhosis
30 myelodysplastic syndrome|mds
30 multiple myeloma|myeloma
30 lymphoma
30 hiv
30 lead poisoning|lead
30 hemorrhoids
30 nsaids|aspirin|ibuprofen
30 gastric bypass|bariatric surgery
30 vegan diet|vegetarian diet
30 hookworm infection
30 autoimmune hemolytic anemia|aiha
30 transfusion reaction
30 hemolytic disease of the newborn|rh disease|erythroblastosis fetalis
30 parvovirus b19|parvovirus
30 hypersplenism|splenomegaly
30 copper deficiency
30 vitamin c deficiency|scurvy
30 sideroblastic anemia|sideroblastic
30 anemia of prematurity
30 pyruvate kinase deficiency
30 hemolytic uremic syndrome|hus
30 ttp|thrombotic thrombocytopenic purpura
30 dic
30 paroxysmal nocturnal hemoglobinuria|pnh
30 fanconi anemia
30 diamond blackfan anemia
30 myelofibrosis
30 bone marrow infiltration|myelophthisis
30 methotrexate
30 zidovudine|azt
30 hydroxyurea
30 phenytoin
30 dapsone
30 mechanical heart valve|valve hemolysis
30 march hemoglobinuria|foot strike hemolysis
30 snake venom|snake bite
30 babesiosis
30 clostridium perfringens sepsis
30 wilson disease
30 vitamin b6 deficiency
30 zinc toxicity
30 erythropoietin deficiency
30 hypopituitarism
30 sports anemia|dilutional
30 tapeworm|fish tapeworm|diphyllobothrium
30 angiodysplasia
30 meckel diverticulum
30 hereditary hemorrhagic telangiectasia|hht
30 cameron lesions
30 gastric antral vascular ectasia|gave|watermelon stomach
30 heyde syndrome
30 lasthenie de ferjol syndrome|self induced bleeding
`},

{q:"Name a nutrient deficiency disease", strip:"deficiency", list:`
5 scurvy
8 rickets
10 anemia|iron deficiency anemia
15 goiter|goitre
15 beriberi
20 pellagra
20 night blindness
25 osteoporosis
25 osteomalacia
25 kwashiorkor
25 marasmus
30 pernicious anemia
30 cretinism|congenital hypothyroidism
30 xerophthalmia
30 wernicke encephalopathy|wernicke|korsakoff|wernicke korsakoff
30 spina bifida|neural tube defects
30 hypocalcemia
30 hypokalemia
30 hypomagnesemia
30 hyponatremia
30 megaloblastic anemia
35 keshan disease
35 kashin beck disease
35 acrodermatitis enteropathica
35 menkes disease
35 bitots spots
35 keratomalacia
35 tetany
35 subacute combined degeneration
35 angular cheilitis|cheilosis
35 glossitis
35 hemorrhagic disease of the newborn|vitamin k deficiency bleeding
35 dental caries|tooth decay
35 dwarfism|stunting
35 wasting
35 hair loss|alopecia
35 koilonychia|spoon nails
35 pica
35 restless legs
35 essential fatty acid deficiency
35 carnitine deficiency
35 choline deficiency
35 biotin deficiency
35 riboflavin deficiency|ariboflavinosis
35 pyridoxine deficiency
35 pantothenic acid deficiency|burning feet syndrome
35 vitamin e deficiency|ataxia with vitamin e deficiency
35 copper deficiency myelopathy
35 chromium deficiency
35 molybdenum cofactor deficiency
35 selenium deficiency cardiomyopathy
35 iodine deficiency disorder
35 refeeding syndrome
35 sailors scurvy
35 dry beriberi
35 wet beriberi
35 shoshin beriberi
35 infantile beriberi
35 tropical sprue
35 kwashiorkor marasmus|marasmic kwashiorkor
`},

{q:"Name a reflex", strip:"reflex", list:`
5 knee jerk|patellar|knee
8 gag|pharyngeal
10 blinking|blink|corneal
12 sneezing|sneeze
12 coughing|cough
15 startle|moro
15 yawning|yawn
20 pupillary light|pupil|light
20 sucking|suck
20 rooting
20 grasp|palmar grasp
25 withdrawal|pain withdrawal
25 babinski|plantar
25 swallowing|swallow
25 vomiting|vomit
25 achilles|ankle jerk|ankle
25 biceps
25 triceps
25 brachioradialis
30 stepping|walking
30 tonic neck|fencing
30 hiccup|hiccups
30 baroreceptor|baroreflex
30 accommodation
30 vestibulo ocular|vor|dolls eyes|oculocephalic
30 cremasteric
30 abdominal
30 anal wink
30 bulbocavernosus
30 jaw jerk|masseter
30 hoffmann|hoffmanns
30 diving
30 milk letdown|letdown
30 micturition|bladder
30 defecation
30 gastrocolic
30 orienting
30 galant
30 landau
30 parachute
30 plantar grasp
30 consensual light
30 lacrimation
30 crossed extensor
30 stretch|myotatic
30 golgi tendon|inverse myotatic
30 bainbridge
30 cushing
30 hering breuer
30 chemoreceptor
30 oculocardiac
30 pilomotor|goosebumps
30 sweating
30 salivation
30 glabellar|myerson
30 snout
30 palmomental
30 chaddock
30 oppenheim
30 gordon
30 tromner
30 pectoral
30 scapulohumeral
30 photic sneeze|achoo
30 ciliospinal
30 vagal
30 axon
30 h reflex|hoffmann reflex
30 sexual reflexes|erection
`}
);

/* ---- DENTAL ---- */
RAW.push(
{q:"Name a type of tooth", cat:"dental", strip:"tooth teeth", list:`
5 molar|molars
5 incisor|incisors
8 canine|canines|cuspid|eye tooth
10 wisdom tooth|wisdom|third molar
12 premolar|premolars|bicuspid|bicuspids
20 baby tooth|baby teeth|primary tooth|primary teeth|deciduous|milk teeth
25 central incisor
25 lateral incisor
30 first molar|six year molar
35 second molar|twelve year molar
40 permanent tooth|adult teeth|secondary teeth
45 first premolar
50 second premolar
55 maxillary|upper
55 mandibular|lower
60 impacted tooth|impacted wisdom tooth
65 supernumerary tooth|extra tooth|hyperdontia
70 mesiodens
70 natal tooth|neonatal tooth
75 peg lateral
80 fourth molar|distomolar|paramolar
85 dens in dente|dens invaginatus
85 taurodont|taurodontism
88 hutchinson incisors
90 mulberry molars|moon molars
92 dens evaginatus|talon cusp
94 ghost teeth|regional odontodysplasia
95 turner tooth
`},
{q:"Name a part of a tooth", cat:"dental", strip:"tooth the", list:`
5 enamel
5 root
8 crown
10 pulp|nerve
12 dentin|dentine
20 gum|gums|gingiva
25 root canal|pulp canal
30 cementum
30 pulp chamber
35 cusp|cusps
40 apex|root apex
40 neck|cervix|cementoenamel junction|cej
45 periodontal ligament|pdl
45 alveolar bone|tooth socket|socket|alveolus
50 apical foramen
50 furcation
55 cingulum
55 incisal edge
60 occlusal surface|biting surface
60 mesial|distal|buccal|lingual|labial
65 marginal ridge
65 fissure|pit
70 odontoblasts
70 dentinal tubules
75 enamel rods|enamel prisms
75 gingival sulcus
78 lamina dura
80 mamelon|mamelons
82 cusp of carabelli|carabelli
85 dentinoenamel junction|dej
85 accessory canal|lateral canal
88 perikymata
90 tomes process
90 striae of retzius
92 neonatal line
93 hunter schreger bands
95 enamel tufts
95 korff fibers
`},
{q:"Name a dental procedure", cat:"dental", strip:"dental procedure", list:`
5 filling|fillings
5 cleaning|teeth cleaning|prophylaxis|prophy
8 root canal|endodontic treatment|rct
8 extraction|tooth extraction|pulling a tooth
10 crown|cap
12 braces|orthodontics
15 whitening|teeth whitening|bleaching
15 x rays|dental x ray|bitewings
20 implant|dental implant
20 dentures|denture
20 bridge
25 veneers|veneer
25 wisdom tooth removal|third molar extraction
25 fluoride treatment|fluoride varnish|fluoride
25 sealants|sealant
30 deep cleaning|scaling and root planing|srp|scaling
30 invisalign|clear aligners|aligners
30 retainer
35 bonding|dental bonding
35 gum graft|gingival graft
35 night guard|occlusal guard|mouth guard
40 inlay
40 onlay
40 pulpotomy
40 pulpectomy
40 apicoectomy
40 gingivectomy
45 bone graft
45 sinus lift
45 frenectomy
45 crown lengthening
45 periodontal surgery|flap surgery
50 space maintainer
50 alveoloplasty
50 all on 4|all on four
50 tooth replantation|reimplantation
55 occlusal adjustment|equilibration
55 core buildup
55 post and core
60 orthognathic surgery|jaw surgery
60 palatal expander|rapid maxillary expansion
60 stainless steel crown
60 indirect pulp cap|direct pulp cap|pulp capping
65 regenerative endodontics|revascularization
65 guided tissue regeneration
70 ridge augmentation
70 socket preservation
70 hemisection|root amputation
75 intentional replantation
75 coronectomy
80 vestibuloplasty
80 tooth autotransplantation|autotransplantation
85 distraction osteogenesis
`},
{q:"Name a dental instrument", cat:"dental", strip:"dental", list:`
5 mirror|mouth mirror|dental mirror
8 drill|handpiece|dental drill
10 explorer|probe|pick
12 suction|saliva ejector
15 scaler
20 periodontal probe|perio probe
20 x ray machine
25 curette|curet
25 forceps|extraction forceps
25 elevator
30 high volume evacuator|hve
30 air water syringe|three way syringe
30 bur|burs
30 ultrasonic scaler|cavitron
35 cotton pliers|tweezers
35 excavator|spoon excavator
35 matrix band|tofflemire
35 amalgam carrier
35 condenser|plugger
35 burnisher
35 carver
40 rubber dam|dental dam
40 rubber dam clamp
40 rubber dam punch
40 bite block
40 retractor|cheek retractor
40 apex locator
40 endodontic files|k file|h file|files
40 composite instrument|plastic instrument
45 curing light
45 impression tray
45 articulator
45 gracey curette|gracey
45 sickle scaler
45 hoe scaler
45 chisel
45 periosteal elevator
45 rongeur
45 bone file
45 scalpel|bard parker
45 needle holder
45 aspirating syringe|anesthetic syringe
45 prophy angle
45 intraoral camera
50 wedge|wedges
50 spatula|cement spatula
50 crown remover
50 spreader
50 gutta percha
50 rotary file|rotary endodontics
50 bite registration
55 cowhorn forceps
55 cryer elevator
55 crane pick
55 straight elevator|luxator
55 periotome
55 hemostat
55 woodson
55 cleoid discoid
55 hollenback carver
55 tanner carver
60 apexo elevator
60 molt curette
60 minnesota retractor
60 seldin retractor
60 mcspadden
65 barbed broach
65 lentulo spiral
65 gates glidden
70 dycal applicator|calcium hydroxide applicator
`},
{q:"Name an oral or dental condition", cat:"dental", strip:"", list:`
5 cavity|cavities|tooth decay|caries|dental caries
5 gingivitis|gum disease
8 periodontitis|periodontal disease
10 bad breath|halitosis
12 toothache
12 tooth sensitivity|sensitive teeth|dentin hypersensitivity
15 abscess|tooth abscess|dental abscess
15 cold sore|herpes labialis|fever blister
15 canker sore|aphthous ulcer|mouth ulcer
20 dry mouth|xerostomia
20 tmj|tmd|temporomandibular disorder|jaw pain
20 teeth grinding|bruxism
25 thrush|oral thrush|oral candidiasis
25 oral cancer|mouth cancer
25 dry socket|alveolar osteitis
25 malocclusion|overbite|underbite|crossbite
25 crooked teeth|crowding
30 impacted wisdom teeth
30 tooth erosion|enamel erosion
30 cracked tooth|cracked tooth syndrome
30 stained teeth|tooth discoloration
30 gum recession|receding gums
35 pericoronitis
35 pulpitis
35 leukoplakia
35 geographic tongue
35 black hairy tongue|hairy tongue
35 fluorosis
35 tongue tie|ankyloglossia
35 cleft lip|cleft palate
35 baby bottle tooth decay|early childhood caries
40 trench mouth|anug|necrotizing ulcerative gingivitis
40 hand foot and mouth disease
40 herpangina
40 oral lichen planus
40 burning mouth syndrome
40 mucocele
40 torus|tori|torus palatinus|torus mandibularis
40 attrition
40 abrasion
40 abfraction
45 amelogenesis imperfecta
45 dentinogenesis imperfecta
45 hypodontia|missing teeth|oligodontia
45 anodontia
45 erythroplakia
45 sialolithiasis|salivary stone
45 ranula
45 fissured tongue
45 angular cheilitis
45 epulis|pyogenic granuloma
45 gingival hyperplasia|gum overgrowth
45 medication related osteonecrosis of the jaw|osteonecrosis of the jaw|mronj
45 dentigerous cyst
45 ameloblastoma
50 odontogenic keratocyst
50 periapical cyst|radicular cyst
50 internal resorption|external resorption|root resorption
50 ankylosis
50 concrescence
50 fusion
50 gemination
50 dilaceration
50 hypercementosis
50 molar incisor hypomineralization|mih
50 tetracycline staining
55 ludwig angina
55 noma|cancrum oris
55 osteoradionecrosis
55 cherubism
55 sjogren syndrome
60 pemphigus vulgaris
60 mucous membrane pemphigoid
60 behcet disease
60 peutz jeghers spots
60 koplik spots
`}
);

/* ---- PHARMACY ---- */
RAW.push(
{q:"Name a drug class", cat:"pharm", strip:"drug class", list:`
5 antibiotics|antibiotic
5 painkillers|analgesics|analgesic
8 antidepressants|antidepressant
8 statins|statin
10 beta blockers|beta blocker
10 ace inhibitors|ace inhibitor
12 opioids|opiates|narcotics
12 nsaids|nsaid
15 antihistamines|antihistamine
15 steroids|corticosteroids
15 diuretics|diuretic
15 ssris|ssri
20 benzodiazepines|benzos
20 blood thinners|anticoagulants
20 antipsychotics
20 insulins
20 antivirals
20 antifungals
25 calcium channel blockers|ccb
25 arbs|angiotensin receptor blockers
25 proton pump inhibitors|ppis|ppi
25 anticonvulsants|antiepileptics|antiseizure
25 stimulants
25 antacids
25 laxatives
25 vaccines
25 chemotherapy|antineoplastics
30 glp 1 agonists|glp 1 receptor agonists|glp1
30 sglt2 inhibitors|sglt2
30 h2 blockers|h2 antagonists
30 bronchodilators
30 inhaled corticosteroids
30 antiplatelets
30 snris|snri
30 tricyclic antidepressants|tcas
30 maois
30 sulfonylureas
30 biguanides
30 dpp 4 inhibitors|gliptins
30 thiazides|thiazide diuretics
30 loop diuretics
30 potassium sparing diuretics
30 anticholinergics
30 antiemetics
30 muscle relaxants
30 sedatives|hypnotics
30 triptans
30 bisphosphonates
30 immunosuppressants
30 biologics|monoclonal antibodies
30 hormones|hormone replacement
30 oral contraceptives|birth control
35 fluoroquinolones
35 penicillins
35 cephalosporins
35 macrolides
35 tetracyclines
35 aminoglycosides
35 carbapenems
35 sulfonamides
35 nitrates
35 alpha blockers
35 alpha 2 agonists
35 vasodilators
35 antiarrhythmics
35 cardiac glycosides|digitalis
35 thrombolytics|fibrinolytics
35 doacs|direct oral anticoagulants|noacs
35 vitamin k antagonists
35 heparins|low molecular weight heparins|lmwh
35 p2y12 inhibitors
35 leukotriene receptor antagonists|leukotriene modifiers
35 mast cell stabilizers
35 decongestants
35 expectorants
35 antitussives|cough suppressants
35 local anesthetics
35 general anesthetics
35 neuromuscular blockers|paralytics
35 cholinesterase inhibitors
35 dopamine agonists
35 mao b inhibitors
35 comt inhibitors
35 thiazolidinediones|glitazones
35 meglitinides
35 alpha glucosidase inhibitors
35 bile acid sequestrants
35 fibrates
35 pcsk9 inhibitors
35 ezetimibe|cholesterol absorption inhibitors
35 5 alpha reductase inhibitors
35 pde5 inhibitors
35 aromatase inhibitors
35 serms|selective estrogen receptor modulators
35 antiandrogens
35 gnrh agonists
35 jak inhibitors
35 tnf inhibitors
35 checkpoint inhibitors
35 tyrosine kinase inhibitors|tkis
35 antimetabolites
35 alkylating agents
35 anthracyclines
35 taxanes
35 vinca alkaloids
35 platinum compounds
35 dmards
35 antimalarials
35 anthelmintics
35 antiretrovirals
35 nrtis
35 protease inhibitors
35 integrase inhibitors
35 neuraminidase inhibitors
35 azoles
35 echinocandins
35 polyenes
35 carbonic anhydrase inhibitors
35 osmotic diuretics
35 prostaglandin analogs
35 somatostatin analogs
35 vasopressin antagonists|vaptans
35 cgrp antagonists|gepants
35 orexin antagonists
35 nmda antagonists
35 sgc stimulators
35 endothelin receptor antagonists
35 neprilysin inhibitors|arni
`},
{q:"Name an over-the-counter medication", cat:"pharm", strip:"otc", list:`
5 tylenol|acetaminophen|paracetamol
5 advil|ibuprofen|motrin
8 aspirin|bayer
10 aleve|naproxen
10 benadryl|diphenhydramine
12 claritin|loratadine
12 zyrtec|cetirizine
15 tums|calcium carbonate
15 pepto bismol|bismuth subsalicylate
15 imodium|loperamide
15 nyquil
15 dayquil
20 sudafed|pseudoephedrine
20 mucinex|guaifenesin
20 robitussin|dextromethorphan
20 allegra|fexofenadine
20 prilosec|omeprazole
20 pepcid|famotidine
20 neosporin|triple antibiotic ointment
20 hydrocortisone cream|hydrocortisone
20 melatonin
25 nexium|esomeprazole
25 zantac
25 miralax|polyethylene glycol
25 dulcolax|bisacodyl
25 senna|senokot
25 colace|docusate
25 gas x|simethicone
25 rolaids
25 alka seltzer
25 flonase|fluticasone nasal
25 afrin|oxymetazoline
25 nicorette|nicotine gum|nicotine patch|nicotine replacement
25 plan b|levonorgestrel
25 excedrin
25 midol
25 zzzquil
25 unisom|doxylamine
25 dramamine|dimenhydrinate
25 bonine|meclizine
30 xyzal|levocetirizine
30 nasacort|triamcinolone nasal
30 rhinocort|budesonide nasal
30 lactaid|lactase
30 beano
30 metamucil|psyllium
30 citrucel|methylcellulose
30 fiber supplements|fibercon
30 milk of magnesia|magnesium hydroxide
30 mylanta
30 maalox
30 emetrol
30 lamisil|terbinafine cream
30 lotrimin|clotrimazole
30 monistat|miconazole
30 tinactin|tolnaftate
30 cortizone
30 calamine lotion|calamine
30 benzoyl peroxide
30 salicylic acid
30 differin|adapalene
30 rogaine|minoxidil
30 visine|tetrahydrozoline
30 artificial tears|eye drops
30 zaditor|ketotifen
30 pataday|olopatadine
30 orajel|benzocaine
30 chloraseptic|phenol spray
30 cepacol
30 throat lozenges|cough drops|halls
30 vicks vaporub|vaporub
30 carmex|lip balm
30 abreva|docosanol
30 compound w|wart remover
30 preparation h
30 tucks|witch hazel
30 vagisil
30 azo|phenazopyridine
30 cranberry pills
30 iron supplements|ferrous sulfate
30 multivitamin
30 vitamin d
30 emergen c
30 zicam
30 airborne
30 ricola
30 theraflu
30 coricidin
30 advil pm
30 tylenol pm
30 aleve pm
30 icy hot
30 bengay
30 biofreeze
30 salonpas
30 voltaren gel|diclofenac gel
30 aspercreme
30 lidocaine patch
30 narcan|naloxone nasal spray
30 primatene mist|epinephrine inhaler
30 opill|norgestrel
30 nasalcrom|cromolyn
30 sodium chloride nasal spray|saline spray
30 neti pot
30 debrox|carbamide peroxide
30 swim ear
30 head lice treatment|permethrin|nix|rid
30 sunscreen
30 hydrogen peroxide
30 rubbing alcohol|isopropyl alcohol
30 bacitracin
30 polysporin
30 caladryl
30 gold bond
30 pedialyte|oral rehydration
30 ipecac
30 activated charcoal
30 bismuth
30 cimetidine|tagamet
30 lansoprazole|prevacid
30 nizatidine|axid
30 phenylephrine
30 chlorpheniramine|chlor trimeton
30 brompheniramine
30 clemastine|tavist
30 glucose tablets
`},
{q:"Name an antidote", cat:"pharm", strip:"antidote", list:`
5 naloxone|narcan
10 epinephrine|epipen|adrenaline
15 activated charcoal|charcoal
20 flumazenil
20 n acetylcysteine|acetylcysteine|nac|mucomyst
25 atropine
25 glucagon
25 vitamin k|phytonadione
25 protamine|protamine sulfate
30 dextrose|glucose|d50
30 antivenom|antivenin|crofab
30 digifab|digoxin immune fab|digibind
30 pralidoxime|2 pam
30 sodium bicarbonate|bicarbonate|bicarb
30 thiamine
35 fomepizole
35 ethanol
35 physostigmine
35 methylene blue
35 hydroxocobalamin|cyanokit
35 deferoxamine
35 dantrolene
35 calcium gluconate|calcium chloride|calcium
35 lipid emulsion|intralipid
35 octreotide
35 idarucizumab|praxbind
35 andexanet alfa|andexxa
35 prothrombin complex concentrate|pcc|kcentra
35 fresh frozen plasma|ffp
35 cyproheptadine
35 benztropine|cogentin
35 diphenhydramine|benadryl
35 insulin|high dose insulin
35 sugammadex
35 neostigmine
35 dimercaprol|bal
35 edta|calcium disodium edta
35 succimer|dmsa
35 penicillamine
35 prussian blue
35 potassium iodide
35 sodium nitrite
35 sodium thiosulfate
35 amyl nitrite
35 oxygen|hyperbaric oxygen
35 leucovorin|folinic acid
35 glucarpidase
35 uridine triacetate
35 botulinum antitoxin
35 black widow antivenom
35 scorpion antivenom|anascorp
35 levocarnitine
35 pyridoxine|vitamin b6
35 dexrazoxane
35 mesna
35 amifostine
35 crotalidae antivenom
35 cholestyramine
35 sodium polystyrene|kayexalate
35 patiromer|veltassa
35 hemodialysis|dialysis
35 whole bowel irrigation
35 ipecac
35 sodium chloride|hypertonic saline
35 dtpa|ca dtpa|zn dtpa
35 silibinin|milk thistle
35 vitamin c|ascorbic acid
35 benzodiazepines|lorazepam|diazepam
35 phentolamine
35 cyanide antidote kit
`},
{q:"Name a route of drug administration", cat:"pharm", strip:"route", list:`
5 oral|by mouth|po
5 intravenous|iv
8 intramuscular|im|injection
10 subcutaneous|subq|sc|sq
12 topical
15 inhaled|inhalation
15 sublingual|sl
15 rectal|pr|suppository
20 transdermal|patch
20 intranasal|nasal
20 ophthalmic|eye drops
25 otic|ear drops
25 buccal
25 vaginal
25 intradermal|id
30 epidural
30 intrathecal|spinal
30 intraosseous|io
35 nebulized
35 enteral|feeding tube|ng tube|g tube
35 intra articular|joint injection
35 intravitreal
35 intra arterial
35 intraperitoneal
35 intracardiac
35 endotracheal
35 urethral
35 intravesical
35 intralesional
35 intrauterine
35 implant|subdermal implant
35 parenteral
35 intracavernosal
35 intracerebroventricular
35 intranasal spray
35 periodontal
35 dental
35 intracameral
35 subconjunctival
35 retrobulbar
35 intratympanic
35 intrapleural
35 intradiscal
35 intraocular
35 intramedullary
35 intrasynovial
35 intravaginal ring
35 iontophoresis
35 nasogastric
35 jejunostomy
35 perineural|nerve block
`},
{q:"Name a medication dosage form", cat:"pharm", strip:"", list:`
5 tablet|tablets|pill
5 capsule|capsules
8 liquid|syrup
10 injection|shot
12 cream
12 ointment
15 inhaler
15 patch|transdermal patch
15 suppository
15 eye drops|drops
20 gel
20 lotion
20 spray|nasal spray
20 chewable tablet|chewable
20 gummy|gummies
25 suspension
25 solution
25 elixir
25 powder
25 lozenge|troche
25 caplet
25 gel cap|softgel
25 extended release|er|xr|sr
25 nebulizer solution
25 auto injector|pen|prefilled syringe
30 dry powder inhaler|dpi
30 metered dose inhaler|mdi
30 orally disintegrating tablet|odt
30 sublingual tablet
30 buccal film|film|strip
30 effervescent tablet
30 enteric coated tablet
30 delayed release|dr
30 foam
30 paste
30 shampoo
30 mouthwash|rinse
30 enema
30 pessary
30 vaginal ring
30 implant
30 intrauterine device|iud
30 iv bag|infusion
30 vial
30 ampule|ampoule
30 emulsion
30 tincture
30 spirit
30 liniment
30 collodion
30 tape|medicated tape
30 granules
30 sachet
30 wafer
30 pastille
30 dusting powder
30 depot injection|long acting injectable
30 osmotic pump|oros
30 microspheres
30 liposome|liposomal
30 nanoparticle
30 pellet
30 lollipop|lozenge on a stick
30 chewing gum|medicated gum
30 lip balm
30 eye ointment
30 ear drops
30 nasal gel
30 rectal foam
30 lyophilized powder
30 reconstitutable suspension
`},
{q:"Name a common medication side effect", cat:"pharm", strip:"", list:`
5 nausea
5 drowsiness|sleepiness|sedation
8 headache
8 dizziness
10 diarrhea
10 constipation
12 dry mouth
12 rash
15 upset stomach|stomach upset|dyspepsia
15 vomiting
15 fatigue|tiredness
15 weight gain
20 insomnia
20 allergic reaction
20 itching
20 loss of appetite
20 blurred vision
20 bleeding|bruising
25 hair loss
25 sexual dysfunction|low libido|erectile dysfunction
25 cough
25 anxiety|nervousness
25 sweating
25 tremor|shaking
25 muscle pain|myalgia
25 swelling|edema
25 low blood pressure|hypotension|orthostatic hypotension
25 weight loss
25 photosensitivity|sun sensitivity
30 stomach ulcer|gi bleed
30 kidney damage|nephrotoxicity
30 liver damage|hepatotoxicity
30 hearing loss|ototoxicity
30 tinnitus|ringing in the ears
30 anaphylaxis
30 stevens johnson syndrome
30 qt prolongation
30 bradycardia
30 tachycardia|palpitations
30 hyperkalemia
30 hypokalemia
30 hyponatremia|siadh
30 hypoglycemia|low blood sugar
30 hyperglycemia
30 urinary retention
30 confusion|delirium
30 depression
30 suicidal thoughts
30 mood changes
30 dependence|addiction
30 withdrawal
30 tolerance
30 respiratory depression
30 serotonin syndrome
30 neuroleptic malignant syndrome
30 tardive dyskinesia
30 extrapyramidal symptoms|eps
30 akathisia
30 dystonia
30 gynecomastia
30 tendon rupture
30 c diff|clostridioides difficile
30 yeast infection
30 angioedema
30 dry cough
30 gingival hyperplasia
30 hirsutism
30 osteoporosis
30 cushingoid features|moon face
30 agranulocytosis
30 aplastic anemia
30 thrombocytopenia
30 lactic acidosis
30 pancreatitis
30 rhabdomyolysis
30 peripheral neuropathy
30 lupus like syndrome|drug induced lupus
30 disulfiram reaction
30 red man syndrome|vancomycin flushing
30 grey baby syndrome
30 teeth discoloration
30 osteonecrosis of the jaw
30 pulmonary fibrosis
30 cardiotoxicity
30 hemorrhagic cystitis
30 hand foot syndrome
30 visual halos
30 blue vision|cyanopsia
30 xanthopsia|yellow vision
30 priapism
30 black tongue
30 discolored urine
30 compulsive gambling
`},
{q:"Name a controlled substance", cat:"pharm", strip:"", list:`
5 morphine
5 oxycodone|oxycontin|percocet
8 fentanyl
8 adderall|amphetamine
10 xanax|alprazolam
10 hydrocodone|vicodin|norco
10 cocaine
12 heroin
12 marijuana|cannabis|thc
15 ritalin|methylphenidate
15 valium|diazepam
15 ativan|lorazepam
15 klonopin|clonazepam
15 codeine
15 tramadol
20 methadone
20 ketamine
20 methamphetamine|meth
20 lsd
20 mdma|ecstasy|molly
20 psilocybin|magic mushrooms
20 ambien|zolpidem
20 vyvanse|lisdexamfetamine
20 suboxone|buprenorphine
20 testosterone|anabolic steroids
25 hydromorphone|dilaudid
25 oxymorphone
25 meperidine|demerol
25 tapentadol
25 lyrica|pregabalin
25 phenobarbital
25 barbiturates
25 ghb
25 rohypnol|flunitrazepam
25 pcp|phencyclidine
25 dmt
25 mescaline|peyote
25 carisoprodol|soma
25 modafinil
25 armodafinil
25 phentermine
25 lomotil|diphenoxylate
25 promethazine with codeine|lean|purple drank
25 cough syrup with codeine
30 temazepam
30 midazolam|versed
30 chlordiazepoxide
30 cenobamate
30 eszopiclone
30 zaleplon
30 suvorexant
30 butorphanol
30 pentazocine
30 dronabinol|marinol
30 nabilone
30 esketamine|spravato
30 xyrem|sodium oxybate
30 oxandrolone
30 nandrolone
30 dextroamphetamine
30 methylphenidate patch|daytrana
30 cathinone|bath salts
30 synthetic cannabinoids|k2|spice
30 ibogaine
30 opium
30 thebaine
30 dihydrocodeine
30 levorphanol
30 sufentanil
30 remifentanil
30 alfentanil
30 carfentanil
30 nitazenes|isotonitazene
30 benzphetamine
30 diethylpropion
30 testosterone cypionate
`}
);

/* ---- NURSING & CARE ---- */
RAW.push(
{q:"Name a vital sign or bedside assessment", cat:"nursing", strip:"", list:`
5 blood pressure|bp
5 heart rate|pulse|hr
8 temperature|temp
8 respiratory rate|breathing rate|rr
10 oxygen saturation|spo2|o2 sat|pulse ox
12 pain|pain score|pain scale
15 weight
15 height
20 blood glucose|blood sugar|fingerstick|accucheck
20 level of consciousness|loc|alertness
25 orientation|a and o|alert and oriented
25 glasgow coma scale|gcs
25 pupils|perrla|pupil check
25 lung sounds|breath sounds|auscultation
25 heart sounds
25 bowel sounds
25 capillary refill
25 skin color|skin assessment
25 intake and output|i and o|ins and outs
30 edema
30 skin turgor
30 peripheral pulses|pedal pulses
30 bmi|body mass index
30 head circumference
30 apgar score|apgar
30 braden scale|pressure injury risk
30 morse fall scale|fall risk
30 cranial nerve check|neuro check|neuro checks
30 gait
30 grip strength
30 cough reflex|gag reflex
30 urine output
30 stool|bowel movement
30 wound assessment
30 iv site|iv site check
30 mental status|mini mental|mmse
30 orthostatic vitals|orthostatics
30 mean arterial pressure|map
30 end tidal co2|etco2|capnography
30 central venous pressure|cvp
30 telemetry|cardiac rhythm
30 nihss|stroke scale
30 cam icu|delirium screen
30 rass|richmond agitation sedation scale
30 ciwa|alcohol withdrawal scale
30 cows|opioid withdrawal scale
30 phq 9|depression screen
30 nutrition screen|must
30 flacc|faces pain scale|wong baker
30 tanner staging
30 fundal height
30 fetal heart rate|fetal heart tones
30 cervical dilation
30 deep tendon reflexes|reflexes
30 homans sign
30 chvostek sign
30 trousseau sign
30 jvd|jugular venous distension
30 tactile fremitus
30 percussion
30 palpation
30 inspection
30 sixth vital sign
30 fluid balance
30 daily weights
`},
{q:"Name a type of IV fluid", cat:"nursing", strip:"iv fluid", list:`
5 normal saline|ns|0.9% saline|saline|sodium chloride
8 lactated ringers|lr|ringers lactate|hartmanns
10 d5w|dextrose 5% in water|dextrose
15 half normal saline|0.45% saline|1 2 ns
20 d5ns|d5 normal saline
20 d5 1 2 ns|d5 half normal saline
20 plasmalyte|plasma lyte
25 d5lr
25 d10|d10w|dextrose 10%
25 hypertonic saline|3% saline
25 albumin|5% albumin|25% albumin
25 blood|packed red blood cells|prbc
30 tpn|total parenteral nutrition
30 ppn|peripheral parenteral nutrition
30 lipids|intralipid|lipid emulsion
30 sodium bicarbonate
30 potassium chloride|kcl
30 magnesium sulfate
30 d50|dextrose 50%
30 quarter normal saline|0.225% saline|1 4 ns
30 d5 1 4 ns
30 normosol
30 hetastarch|hespan|hydroxyethyl starch
30 dextran
30 mannitol
30 fresh frozen plasma|ffp
30 platelets
30 cryoprecipitate|cryo
30 23.4% saline
30 sterile water
30 isolyte
30 d20
30 d70
30 gelofusine|gelatin
30 ringers solution
30 7.5% saline
30 tromethamine|tham
30 amino acids
30 banana bag
`},
{q:"Name a nursing specialty", cat:"nursing", strip:"nursing nurse", list:`
5 er|emergency
5 icu|intensive care|critical care
8 pediatric|peds
8 labor and delivery|l and d|ob
10 med surg|medical surgical
12 oncology
12 operating room|or|perioperative|surgical
15 school
15 nicu|neonatal
15 psych|psychiatric|mental health
20 home health
20 hospice
20 travel
20 cardiac|cardiology
25 dialysis|nephrology
25 nurse anesthetist|crna
25 nurse practitioner|np
25 public health|community health
25 geriatric|gerontology|long term care
25 telemetry|tele
25 pacu|post anesthesia
25 flight|transport
30 midwife|nurse midwife|cnm
30 wound care|wound ostomy continence|wocn
30 infection control|infection prevention
30 case management
30 informatics
30 forensic|sane|sexual assault nurse examiner
30 occupational health
30 neuro|neuroscience
30 orthopedic
30 burn
30 trauma
30 cath lab
30 endoscopy|gi
30 interventional radiology|ir
30 postpartum|mother baby
30 ambulatory|clinic
30 urgent care
30 telehealth
30 rehabilitation|rehab
30 palliative
30 hematology
30 transplant
30 military
30 correctional
30 camp
30 parish|faith community
30 legal nurse consultant
30 nurse educator
30 research
30 lactation consultant|ibclc
30 diabetes educator
30 clinical nurse specialist|cns
30 cruise ship
30 aesthetic|cosmetic|injector
30 genetics
30 holistic
30 hyperbaric
30 radiology
30 pain management
30 sleep medicine
30 developmental disabilities
30 ecmo
30 cvicu
30 picu
30 sicu
30 micu
30 step down|pcu|progressive care
`},
{q:"Name a medical abbreviation", cat:"nursing", strip:"", list:`
5 er
5 icu
5 iv
8 bp|blood pressure
8 cpr
10 stat
10 prn|as needed
10 npo|nothing by mouth
12 bid|twice a day
12 tid|three times a day
12 qd|daily
15 po|by mouth
15 dnr|do not resuscitate
15 mri
15 ct
15 ekg|ecg
15 cbc
20 qid
20 hs|at bedtime
20 ac|before meals
20 pc|after meals
20 q4h|every 4 hours
20 sob|shortness of breath
20 cp|chest pain
20 hx|history
20 dx|diagnosis
20 tx|treatment
20 rx|prescription
20 sx|symptoms
20 bmi
20 hr|heart rate
20 rr|respiratory rate
20 o2
20 copd
20 chf
20 mi
20 cva|stroke
20 uti
20 dvt
20 pe
20 gerd
20 adhd
20 cad
20 htn|hypertension
20 dm|diabetes mellitus
25 bmp
25 cmp
25 abg
25 lft
25 inr
25 a1c
25 tsh
25 ua|urinalysis
25 bun
25 ivp
25 im
25 subq|sc
25 sl
25 gtt|drops
25 mg
25 mcg
25 ml|cc
25 kvo|tko
25 i and o
25 adl|adls
25 rom|range of motion
25 wnl|within normal limits
25 nkda|no known drug allergies
25 c o|complains of|chief complaint|cc
25 hpi
25 ros|review of systems
25 pmh
25 soap
25 sbar
25 aox3|a and o x3
25 perrla
25 heent
25 gcs
25 loc
25 vs|vital signs
25 wbc
25 rbc
25 hgb
25 plt
25 picc
25 ng|ngt
25 peg
25 foley
25 dnr dni|dni
25 polst|molst
25 ama|against medical advice
25 lwbs
25 doa
25 eta
25 ems
25 acls
25 bls
25 pals
25 nrp
25 mrsa
25 vre
25 c diff|cdiff
25 ppe
25 tpn
25 pca
25 ivpb
25 pacu
25 nicu
25 picu
25 l and d
25 or
25 pt|physical therapy
25 ot|occupational therapy
25 slp|speech therapy
25 rt|respiratory therapy
25 cna
25 lpn
25 rn
25 np
25 pa
25 md
25 do
25 pharmd
25 dds
25 dmd
25 crna
25 cnm
25 emr|ehr
25 hipaa
25 cms
25 jcaho|joint commission
25 osha
25 fda
25 dea
25 cdc
25 who
25 qhs
25 qod
25 ad lib
25 nka
25 ou|both eyes
25 od|right eye
25 os|left eye
25 au
25 ad
25 as
25 tid ac
25 sig
25 disp
25 daw|dispense as written
25 otc
25 bsa
25 ibw
25 crcl
25 egfr
25 auc
25 mic
25 ld50
25 ed50
`},
{q:"Name a piece of PPE or infection control measure", cat:"nursing", strip:"", list:`
5 gloves
5 mask|face mask|surgical mask
8 hand washing|hand hygiene|washing hands
8 gown|isolation gown
10 n95|respirator|n95 respirator
12 face shield
12 goggles|eye protection|safety glasses
15 hand sanitizer|alcohol rub
20 hair cover|bouffant cap|scrub cap
20 shoe covers|booties
20 sterile gloves
20 contact precautions
20 droplet precautions
20 airborne precautions
25 standard precautions|universal precautions
25 isolation
25 negative pressure room|airborne infection isolation room|aiir
25 papr|powered air purifying respirator
25 vaccination|vaccines|flu shot
25 sharps container
25 disinfecting surfaces|disinfection|wiping down surfaces
25 sterilization|autoclave
25 bleach
30 enhanced contact precautions
30 neutropenic precautions|reverse isolation|protective isolation
30 cohorting
30 quarantine
30 donning and doffing
30 fit testing|fit test
30 lead apron
30 surgical scrub|scrubbing in
30 sterile field
30 chlorhexidine|chg bath|chg
30 alcohol wipes
30 cough etiquette|respiratory hygiene
30 needleless connectors
30 safety needles
30 biohazard bag|red bag
30 spill kit
30 uv disinfection|uv light
30 hepa filter
30 anteroom
30 contact tracing
30 surveillance|infection surveillance
30 antimicrobial stewardship
30 central line bundle
30 vap bundle
30 cauti bundle
30 scrub the hub
30 aseptic technique|no touch technique
30 sterile technique
30 dental dam
30 chemo gloves|chemotherapy gloves
30 tyvek suit|hazmat suit
30 boot covers
30 apron
30 sleeve covers
30 hydrogen peroxide vapor
30 terminal cleaning
30 environmental services|evs
30 sporicidal wipes
30 mupirocin decolonization
30 mrsa screening
30 hand hygiene audits
30 isolation cart
`},
{q:"Name a nursing scale or assessment tool", cat:"nursing", strip:"scale score tool", list:`
5 pain scale|0 10 pain|numeric rating
8 glasgow coma|gcs
10 braden
10 apgar
12 morse fall|fall risk
15 wong baker|faces
20 flacc
20 nihss|nih stroke
20 mmse|mini mental state
20 ciwa|ciwa ar
20 cows
20 rass|richmond agitation sedation
20 cam icu|confusion assessment method
25 phq 9
25 gad 7
25 moca|montreal cognitive
25 news|national early warning
25 mews
25 qsofa
25 sofa
25 apache
25 katz adl|katz
25 lawton iadl
25 barthel
25 timed up and go|tug
25 hendrich
25 johns hopkins fall risk
25 norton
25 waterlow
25 must|malnutrition universal screening
25 mna|mini nutritional assessment
25 audit|audit c
25 cage
25 edinburgh postnatal depression|epds
25 bishop
25 ballard
25 silverman anderson
25 finnegan|neonatal abstinence
25 eat sleep console
25 pews|pediatric early warning
25 avpu
25 four score
25 ramsay sedation
25 sas|riker
25 bps|behavioral pain scale
25 cpot
25 painad
25 cries
25 nips
25 comfort scale
25 ottawa ankle
25 wells
25 perc
25 cha2ds2 vasc
25 has bled
25 heart score
25 timi
25 curb 65
25 centor
25 gleason
25 karnofsky
25 ecog
25 palliative performance scale|pps
25 asa classification|asa
25 mallampati
25 aldrete
25 modified rankin
25 hunt and hess
25 fisher
25 rule of nines|lund and browder
25 parkland formula
25 push tool
25 bates jensen
25 tinetti
25 berg balance
25 get up and go
25 abcde|abcde assessment
25 sbar
25 opqrst
25 sample history
25 fast|be fast
`},
{q:"Name a common body site for pressure injuries", cat:"nursing", strip:"", list:`
5 sacrum|tailbone|coccyx
8 heels|heel
10 hips|greater trochanter|trochanter
12 buttocks|butt
15 elbows|elbow
15 back of the head|occiput|occipital
20 shoulder blades|scapula|scapulae
20 ankles|malleolus|lateral malleolus|medial malleolus
25 ears|ear
25 spine|vertebrae|spinous processes
25 ischial tuberosities|sit bones|ischium
30 knees|knee
30 nose|bridge of nose
30 toes
30 ribs
30 shoulders
30 back
35 chin
35 forehead
35 cheekbones
35 breasts
35 genitals|perineum
40 under a nasal cannula
40 under an oxygen mask
40 under a cast
40 under a splint
45 iliac crest
45 under a foley catheter
45 under an ng tube
45 under an et tube|lips
50 under a cervical collar
50 under sequential compression devices
50 under a pulse oximeter probe
50 under a bp cuff
55 tracheostomy site
55 under a bipap mask
`},
{q:"Name a type of wound dressing", cat:"nursing", strip:"dressing", list:`
5 gauze
5 band aid|bandage|adhesive bandage
10 tegaderm|transparent film|film
12 steri strips|butterfly
15 foam
15 hydrocolloid|duoderm
20 alginate|calcium alginate
20 hydrogel
20 wet to dry
20 negative pressure|wound vac|npwt
25 silver|silver dressing|aquacel ag
25 honey|medihoney|manuka honey
25 xeroform
25 telfa|non adherent
25 abd pad|abdominal pad
25 kerlix|roller gauze
25 ace wrap|elastic bandage
25 coban|self adherent wrap
25 compression|compression wrap
30 unna boot
30 hydrofiber|aquacel
30 collagen
30 iodine|iodoform|cadexomer iodine
30 petrolatum gauze|vaseline gauze
30 skin glue|dermabond|tissue adhesive
30 composite
30 contact layer|mepitel
30 superabsorbent
30 antimicrobial
30 biological|skin substitute
30 dakins|dakins solution
30 bismuth tribromophenate
30 gentian violet
30 chlorhexidine gauze
30 biopatch
30 occlusive
30 pressure dressing
30 burn dressing
30 mepilex
30 allevyn
30 kaltostat
30 tielle
30 opsite
30 sorbsan
30 promogran
30 prisma
30 polymem
30 hydrofera blue
30 santyl|collagenase
30 cutimed sorbact
30 maggot therapy|larval therapy
30 fish skin graft
`}
);

/* ---- PRIMARY CARE / GENERAL ---- */
RAW.push(
{q:"Name a healthcare profession", cat:"general", strip:"", list:`
5 doctor|physician
5 nurse|registered nurse|rn
8 pharmacist
8 dentist
10 nurse practitioner|np
10 physician assistant|physician associate|pa
12 surgeon
12 paramedic|emt
15 physical therapist|pt
15 dental hygienist|hygienist
15 occupational therapist|ot
15 medical assistant|ma
15 cna|certified nursing assistant
20 respiratory therapist|rt
20 speech therapist|speech language pathologist|slp
20 pharmacy technician|pharm tech
20 radiologic technologist|x ray tech|rad tech
20 lpn|licensed practical nurse|lvn
20 midwife
20 optometrist
20 chiropractor
20 psychologist
20 dietitian|nutritionist
20 social worker
20 anesthesiologist
20 crna|nurse anesthetist
25 dental assistant
25 podiatrist
25 audiologist
25 phlebotomist
25 sonographer|ultrasound tech
25 lab technician|medical laboratory scientist
25 surgical tech|scrub tech
25 orthodontist
25 oral surgeon
25 veterinarian
25 counselor|therapist
25 psychiatrist
25 doula
25 home health aide
25 caregiver
30 periodontist
30 endodontist
30 prosthodontist
30 pediatric dentist|pedodontist
30 dental lab technician
30 optician
30 orthoptist
30 perfusionist
30 cardiovascular technologist
30 polysomnographic technologist|sleep tech
30 dialysis technician
30 ekg tech
30 nuclear medicine technologist
30 radiation therapist
30 dosimetrist
30 medical physicist
30 genetic counselor
30 athletic trainer
30 massage therapist
30 acupuncturist
30 naturopath
30 osteopath|do
30 prosthetist|orthotist
30 recreational therapist
30 music therapist
30 art therapist
30 child life specialist
30 lactation consultant
30 patient navigator
30 community health worker
30 epidemiologist
30 public health nurse
30 health educator
30 medical coder|medical biller
30 health information manager
30 hospital administrator
30 case manager
30 chaplain
30 pathologist
30 coroner|medical examiner
30 forensic nurse
30 anesthesiologist assistant
30 surgical first assistant
30 cytotechnologist
30 histotechnologist
30 sterile processing technician
30 ophthalmic technician
30 emergency medical dispatcher
30 flight nurse
30 kinesiologist
30 exercise physiologist
30 orthopedic technician
30 pedorthist
`},
{q:"Name a preventive screening test", cat:"care", strip:"screening screen test", list:`
5 mammogram
5 colonoscopy
8 pap smear|pap|pap test
10 blood pressure check
10 cholesterol|lipid panel
12 psa
15 skin check|skin cancer screening
15 hpv test
15 diabetes screening|a1c|fasting glucose
20 bone density|dexa
20 eye exam|vision test
20 hearing test
20 dental exam|dental checkup
20 hiv test
20 hepatitis c screening
20 std testing|sti screening
25 low dose ct|lung cancer screening
25 fit test|fecal immunochemical test
25 cologuard|stool dna
25 depression screening|phq 9
25 aaa ultrasound|abdominal aortic aneurysm screening
25 newborn screening|heel prick
25 lead screening
25 tb test|ppd|tuberculin skin test|quantiferon
25 hepatitis b screening
25 chlamydia screening
25 gonorrhea screening
25 syphilis screening
25 bmi|obesity screening
25 developmental screening
25 autism screening|m chat
25 fall risk screening
25 alcohol misuse screening|audit c
25 tobacco use screening
25 intimate partner violence screening
25 anxiety screening|gad 7
25 prenatal screening|nipt
25 glucose challenge test|gestational diabetes screening
25 group b strep screening
25 rh typing
25 urinalysis
25 thyroid screening|tsh
25 flexible sigmoidoscopy
25 ct colonography
25 brca testing|genetic testing
25 breast mri
25 clinical breast exam
25 testicular exam
25 oral cancer screening
25 glaucoma screening
25 diabetic eye exam|retinal exam
25 diabetic foot exam|monofilament
25 hearing screening newborn|oae
25 critical congenital heart disease screening|pulse ox screening
25 hip dysplasia screening
25 scoliosis screening
25 anemia screening
25 cognitive screening|mini cog
25 vitamin d level
25 ekg screening
25 coronary calcium score
25 abi|ankle brachial index
25 sleep apnea screening|stop bang
25 hemoccult|fobt|guaiac
25 anal pap
25 liver ultrasound|hcc surveillance
25 hepatitis a immunity
25 rubella immunity
25 varicella titer
25 cervical length
25 carrier screening
25 sweat test
25 hemoglobin electrophoresis
`},
{q:"Name a common reason for a primary care visit", cat:"care", strip:"", list:`
5 cold|common cold|upper respiratory infection|uri
5 annual physical|checkup|wellness visit|physical
8 flu|influenza
8 sore throat|strep throat|pharyngitis
10 high blood pressure|hypertension
10 diabetes
12 back pain|low back pain
12 cough
12 ear infection|otitis media|earache
15 sinus infection|sinusitis
15 rash
15 anxiety
15 depression
15 headache|migraine
15 urinary tract infection|uti
15 high cholesterol
20 vaccines|shots|immunizations
20 medication refill|refills
20 fatigue|tiredness
20 joint pain|knee pain|shoulder pain
20 allergies|seasonal allergies
20 asthma
20 stomach pain|abdominal pain
20 acid reflux|gerd|heartburn
20 diarrhea
20 constipation
20 pink eye|conjunctivitis
20 sports physical
20 obesity|weight management|weight loss
20 insomnia|trouble sleeping
25 well child visit|well baby
25 covid
25 bronchitis
25 thyroid problems|hypothyroidism
25 skin lesion|mole check
25 acne
25 eczema
25 sprain|ankle sprain
25 dizziness
25 chest pain
25 shortness of breath
25 fever
25 birth control|contraception
25 std testing
25 pregnancy test
25 smoking cessation
25 lab results|follow up
25 copd
25 arthritis|osteoarthritis
25 gout
25 hemorrhoids
25 wart|warts
25 ingrown toenail
25 wound check|stitches removal|suture removal
25 ear wax|cerumen impaction
25 nosebleed
25 adhd
25 memory problems
25 heart palpitations
25 swelling|leg swelling
25 hair loss
25 erectile dysfunction
25 menopause symptoms|hot flashes
25 irregular periods
25 vertigo
25 numbness|tingling
25 carpal tunnel
25 plantar fasciitis
25 tennis elbow
25 shingles
25 lice
25 scabies
25 pre op clearance|preoperative evaluation
25 dot physical
25 travel medicine|travel vaccines
25 paperwork|forms|fmla
25 referral
25 work note
25 anemia
25 kidney stones
25 vitamin d deficiency
25 prediabetes
25 sleep apnea
25 alcohol use
25 substance use
25 grief
25 tinnitus
`}
);

/* ---- PHARMACY (field pool expansion) ---- */
RAW.push(
{q:"Name a beta blocker (ends in -olol)", cat:"pharm", strip:"", list:`
5 metoprolol|lopressor|toprol
5 propranolol|inderal
8 atenolol|tenormin
10 carvedilol|coreg
15 labetalol
20 bisoprolol|zebeta
25 nebivolol|bystolic
30 nadolol|corgard
35 esmolol|brevibloc
40 sotalol|betapace
45 timolol|timoptic
50 pindolol
55 acebutolol
60 betaxolol
70 penbutolol
75 carteolol
78 levobunolol
80 metipranolol
85 oxprenolol
85 celiprolol
88 bucindolol
90 alprenolol
92 landiolol
94 practolol
95 talinolol
96 bopindolol
`},
{q:"Name an ACE inhibitor (ends in -pril)", cat:"pharm", strip:"", list:`
5 lisinopril|zestril|prinivil
10 enalapril|vasotec
15 ramipril|altace
20 benazepril|lotensin
25 captopril|capoten
35 quinapril|accupril
45 fosinopril|monopril
55 perindopril|aceon
60 trandolapril|mavik
65 moexipril|univasc
75 enalaprilat
85 cilazapril
88 zofenopril
90 imidapril
92 spirapril
94 delapril
96 temocapril
`},
{q:"Name an ARB (ends in -sartan)", cat:"pharm", strip:"", list:`
5 losartan|cozaar
10 valsartan|diovan
20 olmesartan|benicar
25 irbesartan|avapro
30 telmisartan|micardis
35 candesartan|atacand
55 azilsartan|edarbi
65 eprosartan|teveten
80 sacubitril valsartan|entresto
88 sparsentan|filspari
92 fimasartan
95 allisartan
`},
{q:"Name an antifungal drug (often ends in -azole)", cat:"pharm", strip:"", list:`
5 fluconazole|diflucan
8 nystatin
10 clotrimazole|lotrimin
12 miconazole|monistat
15 terbinafine|lamisil
20 ketoconazole|nizoral
25 itraconazole|sporanox
25 voriconazole|vfend
30 amphotericin b|amphotericin|ambisome
35 posaconazole|noxafil
35 griseofulvin
40 caspofungin|cancidas
45 micafungin|mycamine
50 isavuconazonium|isavuconazole|cresemba
50 econazole
55 terconazole
55 tioconazole
55 ciclopirox|penlac
60 anidulafungin|eraxis
60 efinaconazole|jublia
65 tavaborole|kerydin
65 butenafine
65 naftifine
70 oxiconazole
70 sertaconazole
70 sulconazole
72 luliconazole
75 flucytosine|5 fc
78 rezafungin|rezzayo
80 ibrexafungerp|brexafemme
82 oteseconazole|vivjoa
85 butoconazole
88 tolnaftate
90 undecylenic acid
92 olorofim
95 fosmanogepix
`},
{q:"Name a monoclonal antibody (ends in -mab)", cat:"pharm", strip:"", list:`
5 adalimumab|humira
8 rituximab|rituxan
10 pembrolizumab|keytruda
10 infliximab|remicade
12 trastuzumab|herceptin
15 bevacizumab|avastin
15 dupilumab|dupixent
20 nivolumab|opdivo
20 ustekinumab|stelara
20 denosumab|prolia|xgeva
25 omalizumab|xolair
25 secukinumab|cosentyx
25 tocilizumab|actemra
25 ocrelizumab|ocrevus
25 natalizumab|tysabri
25 vedolizumab|entyvio
30 evolocumab|repatha
30 alirocumab|praluent
30 golimumab|simponi
30 certolizumab|cimzia
30 cetuximab|erbitux
30 ipilimumab|yervoy
30 atezolizumab|tecentriq
30 durvalumab|imfinzi
30 daratumumab|darzalex
30 erenumab|aimovig
30 fremanezumab|ajovy
30 galcanezumab|emgality
30 mepolizumab|nucala
30 benralizumab|fasenra
30 risankizumab|skyrizi
30 guselkumab|tremfya
30 ixekizumab|taltz
30 tezepelumab|tezspire
30 lecanemab|leqembi
30 donanemab|kisunla
30 aducanumab|aduhelm
30 nirsevimab|beyfortus
30 palivizumab|synagis
30 eculizumab|soliris
30 ravulizumab|ultomiris
30 belimumab|benlysta
30 pertuzumab|perjeta
30 panitumumab|vectibix
30 ramucirumab|cyramza
30 obinutuzumab|gazyva
30 alemtuzumab|lemtrada|campath
30 brentuximab|adcetris
30 trastuzumab deruxtecan|enhertu
30 sacituzumab|trodelvy
30 cemiplimab|libtayo
30 dostarlimab|jemperli
30 tislelizumab
30 teclistamab|tecvayli
30 blinatumomab|blincyto
30 emicizumab|hemlibra
30 romosozumab|evenity
30 burosumab|crysvita
30 teprotumumab|tepezza
30 tralokinumab|adbry
30 lebrikizumab|ebglyss
30 nemolizumab|nemluvio
30 bimekizumab|bimzelx
30 mirikizumab|omvoh
30 spesolimab|spevigo
30 anifrolumab|saphnelo
30 inebilizumab|uplizna
30 satralizumab|enspryng
30 ofatumumab|kesimpta
30 ublituximab|briumvi
30 crizanlizumab|adakveo
30 sotrovimab
30 bamlanivimab
30 bezlotoxumab|zinplava
30 raxibacumab
30 obiltoxaximab
30 idarucizumab|praxbind
30 abciximab|reopro
30 basiliximab|simulect
30 sarilumab|kevzara
30 canakinumab|ilaris
30 siltuximab|sylvant
30 eptinezumab|vyepti
30 reslizumab|cinqair
30 tildrakizumab|ilumya
30 brodalumab|siliq
30 elotuzumab|empliciti
30 isatuximab|sarclisa
30 mogamulizumab|poteligeo
30 polatuzumab|polivy
30 enfortumab|padcev
30 tisotumab|tivdak
30 mirvetuximab|elahere
30 margetuximab|margenza
30 naxitamab|danyelza
30 dinutuximab|unituxin
30 olaratumab
30 necitumumab
30 amivantamab|rybrevant
30 tarlatamab|imdelltra
30 epcoritamab|epkinly
30 glofitamab|columvi
30 mosunetuzumab|lunsumio
30 talquetamab|talvey
30 elranatamab|elrexfio
30 tremelimumab|imjudo
30 relatlimab|opdualag
30 retifanlimab|zynyz
30 toripalimab|loqtorzi
30 teplizumab|tzield
30 garadacimab
30 lanadelumab|takhzyro
30 marstacimab|hympavzi
30 pozelimab|veopoz
30 efgartigimod|vyvgart
30 rozanolixizumab|rystiggo
30 nipocalimab
30 ansuvimab|ebanga
`},
{q:"Name a kinase inhibitor (many end in -tinib)", cat:"pharm", strip:"", list:`
5 imatinib|gleevec
10 ibrutinib|imbruvica
15 osimertinib|tagrisso
15 erlotinib|tarceva
20 dasatinib|sprycel
20 nilotinib|tasigna
20 gefitinib|iressa
25 sunitinib|sutent
25 sorafenib|nexavar
25 lapatinib|tykerb
25 tofacitinib|xeljanz
25 ruxolitinib|jakafi|opzelura
25 baricitinib|olumiant
25 upadacitinib|rinvoq
30 palbociclib|ibrance
30 ribociclib|kisqali
30 abemaciclib|verzenio
30 crizotinib|xalkori
30 alectinib|alecensa
30 lorlatinib|lorbrena
30 cabozantinib|cabometyx
30 lenvatinib|lenvima
30 axitinib|inlyta
30 pazopanib|votrient
30 regorafenib|stivarga
30 vandetanib|caprelsa
30 afatinib|gilotrif
30 dacomitinib|vizimpro
30 neratinib|nerlynx
30 tucatinib|tukysa
30 bosutinib|bosulif
30 ponatinib|iclusig
30 asciminib|scemblix
30 acalabrutinib|calquence
30 zanubrutinib|brukinsa
30 pirtobrutinib|jaypirca
30 vemurafenib|zelboraf
30 dabrafenib|tafinlar
30 encorafenib|braftovi
30 trametinib|mekinist
30 cobimetinib|cotellic
30 binimetinib|mektovi
30 selumetinib|koselugo
30 midostaurin|rydapt
30 gilteritinib|xospata
30 quizartinib|vanflyta
30 fedratinib|inrebic
30 pacritinib|vonjo
30 momelotinib|ojjaara
30 deucravacitinib|sotyktu
30 abrocitinib|cibinqo
30 ritlecitinib|litfulo
30 deuruxolitinib|leqselvi
30 brigatinib|alunbrig
30 ceritinib|zykadia
30 capmatinib|tabrecta
30 tepotinib|tepmetko
30 selpercatinib|retevmo
30 pralsetinib|gavreto
30 larotrectinib|vitrakvi
30 entrectinib|rozlytrek
30 repotrectinib|augtyro
30 erdafitinib|balversa
30 pemigatinib|pemazyre
30 futibatinib|lytgobi
30 infigratinib
30 avapritinib|ayvakit
30 ripretinib|qinlock
30 fruquintinib|fruzaqla
30 tivozanib|fotivda
30 lazertinib|lazcluze
30 mobocertinib
30 idelalisib|zydelig
30 duvelisib|copiktra
30 alpelisib|piqray
30 capivasertib|truqap
30 everolimus|afinitor
30 temsirolimus|torisel
30 nintedanib|ofev
30 netarsudil|rhopressa
30 fostamatinib|tavalisse
30 belumosudil|rezurock
30 olverembatinib
30 tovorafenib|ojemda
`},
{q:"Name an antiviral drug", cat:"pharm", strip:"", list:`
5 tamiflu|oseltamivir
5 acyclovir|zovirax
8 valacyclovir|valtrex
10 paxlovid|nirmatrelvir
12 remdesivir|veklury
15 famciclovir|famvir
15 tenofovir|viread
15 truvada
20 biktarvy
20 descovy
20 xofluza|baloxavir
20 relenza|zanamivir
20 ribavirin
20 sofosbuvir|sovaldi
20 harvoni|ledipasvir sofosbuvir
20 epclusa|sofosbuvir velpatasvir
20 mavyret|glecaprevir pibrentasvir
25 entecavir|baraclude
25 lamivudine|epivir|3tc
25 zidovudine|azt|retrovir
25 abacavir|ziagen
25 emtricitabine|emtriva
25 efavirenz|sustiva
25 dolutegravir|tivicay
25 raltegravir|isentress
25 bictegravir
25 darunavir|prezista
25 atazanavir|reyataz
25 lopinavir ritonavir|kaletra
25 ritonavir|norvir
25 cobicistat|tybost
25 rilpivirine|edurant
25 cabotegravir|apretude|vocabria
25 cabenuva
25 lenacapavir|sunlenca|yeztugo
25 ganciclovir|cytovene
25 valganciclovir|valcyte
25 foscarnet|foscavir
25 cidofovir|vistide
25 letermovir|prevymis
25 maribavir|livtencity
25 molnupiravir|lagevrio
25 peramivir|rapivab
25 amantadine
25 rimantadine|flumadine
25 tecovirimat|tpoxx
25 brincidofovir|tembexa
25 penciclovir|denavir
25 docosanol|abreva
25 trifluridine|viroptic
25 adefovir|hepsera
25 telbivudine
25 tenofovir alafenamide|vemlidy
25 nevirapine|viramune
25 doravirine|pifeltro
25 etravirine|intelence
25 maraviroc|selzentry
25 enfuvirtide|fuzeon
25 ibalizumab|trogarzo
25 fostemsavir|rukobia
25 elvitegravir
25 genvoya
25 stribild
25 triumeq
25 dovato
25 juluca
25 symtuza
25 odefsey
25 complera
25 atripla
25 delstrigo
25 symfi
25 cimduo
25 combivir
25 trizivir
25 epzicom
25 nelfinavir|viracept
25 saquinavir|invirase
25 indinavir|crixivan
25 fosamprenavir|lexiva
25 tipranavir|aptivus
25 didanosine|ddi
25 stavudine|d4t
25 zepatier|elbasvir grazoprevir
25 vosevi
25 daclatasvir
25 simeprevir
25 boceprevir
25 telaprevir
25 interferon|peginterferon
25 bulevirtide|hepcludex
25 favipiravir|avigan
25 ensitrelvir|xocova
25 umifenovir|arbidol
`},
{q:"Name an anticoagulant or antiplatelet drug", cat:"pharm", strip:"", list:`
5 warfarin|coumadin|jantoven
5 aspirin
8 eliquis|apixaban
8 xarelto|rivaroxaban
10 heparin
12 plavix|clopidogrel
15 lovenox|enoxaparin
20 pradaxa|dabigatran
20 brilinta|ticagrelor
25 effient|prasugrel
25 savaysa|edoxaban
25 fondaparinux|arixtra
30 dalteparin|fragmin
30 argatroban
30 bivalirudin|angiomax
30 cilostazol|pletal
30 dipyridamole|persantine
30 aggrenox
30 tpa|alteplase|activase
35 tenecteplase|tnkase
35 reteplase|retavase
35 streptokinase
35 urokinase
35 eptifibatide|integrilin
35 tirofiban|aggrastat
35 abciximab|reopro
35 cangrelor|kengreal
35 vorapaxar|zontivity
35 ticlopidine
35 desirudin
35 lepirudin
35 tinzaparin
35 betrixaban
35 phenprocoumon
35 acenocoumarol
35 anagrelide
35 pentoxifylline
35 defibrotide
35 caplacizumab|cablivi
35 dextran
`},
{q:"Name an antiepileptic (antiseizure) drug", cat:"pharm", strip:"", list:`
5 keppra|levetiracetam
8 dilantin|phenytoin
10 depakote|valproate|valproic acid|divalproex
10 lamictal|lamotrigine
12 tegretol|carbamazepine
15 topamax|topiramate
15 gabapentin|neurontin
20 phenobarbital
20 lyrica|pregabalin
20 trileptal|oxcarbazepine
25 lacosamide|vimpat
25 zonisamide|zonegran
25 clonazepam|klonopin
25 lorazepam|ativan
25 diazepam|valium|valtoco|diastat
25 midazolam|versed|nayzilam
30 ethosuximide|zarontin
30 fosphenytoin|cerebyx
30 brivaracetam|briviact
30 cenobamate|xcopri
30 eslicarbazepine|aptiom
30 perampanel|fycompa
30 rufinamide|banzel
30 clobazam|onfi|sympazan
30 cannabidiol|epidiolex
30 fenfluramine|fintepla
30 stiripentol|diacomit
30 vigabatrin|sabril
30 felbamate|felbatol
30 tiagabine|gabitril
30 primidone|mysoline
30 ganaxolone|ztalmy
30 everolimus
30 acetazolamide|diamox
30 methsuximide
30 ezogabine|retigabine
30 sulthiame
30 piracetam
`},
{q:"Name an inhaler or asthma/COPD medication", cat:"pharm", strip:"inhaler", list:`
5 albuterol|ventolin|proair|proventil|salbutamol
8 advair|fluticasone salmeterol
10 symbicort|budesonide formoterol
12 singulair|montelukast
15 spiriva|tiotropium
15 flovent|fluticasone
15 prednisone
20 breo|breo ellipta
20 trelegy
20 dulera
20 qvar|beclomethasone
20 pulmicort|budesonide
20 xopenex|levalbuterol
20 atrovent|ipratropium
20 duoneb|combivent
25 anoro
25 stiolto
25 incruse|umeclidinium
25 tudorza|aclidinium
25 seebri|glycopyrrolate inhaled
25 lonhala
25 yupelri|revefenacin
25 breztri
25 asmanex|mometasone
25 alvesco|ciclesonide
25 arnuity
25 serevent|salmeterol
25 foradil|formoterol
25 perforomist
25 striverdi|olodaterol
25 arcapta|indacaterol
25 airsupra
25 theophylline|theo 24|uniphyl
25 aminophylline
25 roflumilast|daliresp
25 ensifentrine|ohtuvayre
25 zafirlukast|accolate
25 zileuton|zyflo
25 cromolyn|intal
25 nedocromil
25 xolair|omalizumab
25 nucala|mepolizumab
25 fasenra|benralizumab
25 dupixent|dupilumab
25 tezspire|tezepelumab
25 cinqair|reslizumab
25 terbutaline
25 epinephrine
25 magnesium sulfate
25 heliox
25 methylprednisolone|solu medrol|medrol
25 dexamethasone
25 azithromycin
25 primatene mist
25 metaproterenol
25 pirbuterol|maxair
25 bitolterol
25 wixela
25 airduo
25 armonair
25 aerospan|flunisolide
25 triamcinolone inhaled|azmacort
`},
{q:"Name a cholesterol-lowering drug", cat:"pharm", strip:"", list:`
5 lipitor|atorvastatin
5 crestor|rosuvastatin
8 simvastatin|zocor
10 pravastatin|pravachol
15 lovastatin|mevacor
20 zetia|ezetimibe
20 vytorin
25 fluvastatin|lescol
25 pitavastatin|livalo|zypitamag
25 niacin|niaspan
25 fenofibrate|tricor|trilipix
25 gemfibrozil|lopid
25 fish oil|omega 3|lovaza|vascepa|icosapent ethyl
25 repatha|evolocumab
25 praluent|alirocumab
25 leqvio|inclisiran
25 nexletol|bempedoic acid
25 nexlizet
25 cholestyramine|questran|prevalite
25 colestipol|colestid
25 colesevelam|welchol
25 lomitapide|juxtapid
25 evinacumab|evkeeza
25 mipomersen|kynamro
25 roszet
25 caduet
25 red yeast rice
25 plant sterols|phytosterols
25 psyllium
25 berberine
25 olezarsen|tryngolza
25 volanesorsen
25 cerivastatin|baycol
25 clofibrate
25 probucol
`},
{q:"Name a chemotherapy drug", cat:"pharm", strip:"", list:`
5 cisplatin
5 methotrexate
8 doxorubicin|adriamycin|red devil
10 cyclophosphamide|cytoxan
10 paclitaxel|taxol
12 tamoxifen
12 5 fluorouracil|5 fu|fluorouracil
15 carboplatin
15 docetaxel|taxotere
15 vincristine|oncovin
20 gemcitabine|gemzar
20 capecitabine|xeloda
20 oxaliplatin|eloxatin
20 etoposide|vp 16
20 cytarabine|ara c
20 bleomycin
20 irinotecan|camptosar
20 temozolomide|temodar
25 vinblastine
25 vinorelbine|navelbine
25 ifosfamide|ifex
25 melphalan|alkeran
25 busulfan|myleran
25 chlorambucil|leukeran
25 bendamustine|treanda
25 carmustine|bcnu
25 lomustine|ccnu
25 dacarbazine
25 procarbazine
25 hydroxyurea|hydrea
25 mercaptopurine|6 mp|purinethol
25 thioguanine|6 tg
25 fludarabine
25 cladribine
25 clofarabine
25 azacitidine|vidaza
25 decitabine|dacogen
25 pemetrexed|alimta
25 pralatrexate
25 daunorubicin
25 idarubicin
25 epirubicin
25 mitoxantrone
25 mitomycin
25 dactinomycin|actinomycin d
25 topotecan|hycamtin
25 eribulin|halaven
25 ixabepilone
25 cabazitaxel|jevtana
25 nab paclitaxel|abraxane
25 trabectedin
25 lurbinectedin
25 arsenic trioxide|trisenox
25 asparaginase|pegaspargase
25 bortezomib|velcade
25 carfilzomib|kyprolis
25 lenalidomide|revlimid
25 thalidomide
25 pomalidomide
25 letrozole|femara
25 anastrozole|arimidex
25 exemestane
25 fulvestrant|faslodex
25 leuprolide|lupron
25 bicalutamide
25 enzalutamide|xtandi
25 abiraterone|zytiga
25 apalutamide
25 darolutamide
25 olaparib|lynparza
25 niraparib
25 venetoclax|venclexta
25 trifluridine tipiracil|lonsurf
25 tretinoin|atra
25 streptozocin
25 thiotepa
25 mechlorethamine|nitrogen mustard
25 altretamine
25 nelarabine
25 omacetaxine
25 belinostat
25 romidepsin
25 vorinostat
`},
{q:"Name a drug that prolongs the QT interval", cat:"pharm", strip:"", list:`
5 ondansetron|zofran
8 azithromycin|zithromax
10 methadone
10 amiodarone
12 haloperidol|haldol
15 citalopram|celexa
15 erythromycin
15 levofloxacin
15 ciprofloxacin
20 sotalol
20 dofetilide|tikosyn
20 quetiapine|seroquel
20 ziprasidone|geodon
20 escitalopram
20 moxifloxacin
20 clarithromycin
20 hydroxychloroquine|plaquenil
20 chloroquine
20 droperidol
25 quinidine
25 procainamide
25 disopyramide
25 dronedarone
25 ibutilide
25 flecainide
25 propafenone
25 chlorpromazine
25 thioridazine
25 pimozide
25 olanzapine
25 risperidone
25 iloperidone
25 paliperidone
25 trazodone
25 amitriptyline
25 nortriptyline
25 imipramine
25 desipramine
25 doxepin
25 venlafaxine
25 mirtazapine
25 lithium
25 fluconazole
25 voriconazole
25 ketoconazole
25 posaconazole
25 pentamidine
25 bedaquiline
25 tacrolimus
25 arsenic trioxide
25 vandetanib
25 nilotinib
25 ribociclib
25 vemurafenib
25 domperidone
25 metoclopramide
25 loperamide
25 famotidine
25 tamoxifen
25 cocaine
25 hydroxyzine
25 diphenhydramine
25 donepezil
25 cilostazol
25 ranolazine
25 tizanidine
25 solifenacin
25 mirabegron
25 terfenadine
25 astemizole
25 cisapride
25 halofantrine
25 quinine
25 mefloquine
25 artemether lumefantrine
25 sevoflurane
25 propofol
25 oxytocin
25 vardenafil
25 fingolimod
25 oxaliplatin
25 eribulin
`},
{q:"Name an herbal supplement", cat:"pharm", strip:"supplement", list:`
5 echinacea
5 ginseng
8 st johns wort
8 ginkgo|ginkgo biloba
10 garlic
10 turmeric|curcumin
12 melatonin
12 fish oil|omega 3
15 green tea|green tea extract
15 chamomile
15 valerian|valerian root
15 ashwagandha
20 elderberry
20 saw palmetto
20 milk thistle
20 ginger
20 cranberry
20 black cohosh
20 kava
20 aloe vera
20 cinnamon
20 peppermint|peppermint oil
25 evening primrose oil
25 flaxseed
25 glucosamine
25 chondroitin
25 coq10|coenzyme q10
25 probiotics
25 creatine
25 collagen
25 biotin
25 dong quai
25 licorice|licorice root
25 goldenseal
25 feverfew
25 ephedra|ma huang
25 yohimbe
25 kratom
25 cbd|cannabidiol
25 maca
25 rhodiola
25 holy basil|tulsi
25 lemon balm
25 passionflower
25 lavender
25 hawthorn
25 horny goat weed|epimedium
25 tribulus
25 fenugreek
25 berberine
25 red yeast rice
25 bitter melon
25 gymnema
25 garcinia cambogia
25 spirulina
25 chlorella
25 sea moss|irish moss
25 moringa
25 lions mane
25 reishi
25 cordyceps
25 chaga
25 shilajit
25 astragalus
25 andrographis
25 cats claw
25 devils claw
25 white willow bark
25 boswellia|frankincense
25 butterbur
25 bilberry
25 black seed|nigella sativa
25 neem
25 tea tree oil
25 arnica
25 comfrey
25 yarrow
25 nettle|stinging nettle
25 dandelion
25 burdock
25 slippery elm
25 marshmallow root
25 senna
25 cascara sagrada
25 psyllium
25 chasteberry|vitex
25 red clover
25 soy isoflavones
25 wild yam
25 pygeum
25 pumpkin seed oil
25 grape seed extract
25 resveratrol
25 quercetin
25 alpha lipoic acid
25 nac|n acetylcysteine
25 l theanine
25 5 htp
25 sam e
25 dhea
25 colloidal silver
25 apple cider vinegar
25 activated charcoal
25 kombucha
25 bee pollen
25 royal jelly
25 propolis
25 manuka honey
25 black cumin
25 schisandra
25 eleuthero|siberian ginseng
25 gotu kola
25 bacopa
25 mucuna
25 kanna
25 blue lotus
25 mullein
25 oregano oil
25 olive leaf extract
25 cayenne|capsaicin
25 horse chestnut
25 butcher's broom
25 uva ursi
25 bromelain
25 papain
25 sea buckthorn
`},
{q:"Name a vaccine", cat:"pharm", strip:"vaccine", list:`
5 flu shot|influenza|flu
5 covid|covid 19|pfizer|moderna
8 mmr|measles mumps rubella
8 tetanus|tdap|td|dtap
10 hepatitis b|hep b|engerix|recombivax|heplisav
10 hpv|gardasil
12 polio|ipv
12 chickenpox|varicella|varivax
15 shingles|shingrix|zoster
15 pneumonia|pneumococcal|prevnar|pneumovax|pcv20|pcv21|capvaxive
15 hepatitis a|hep a|havrix|vaqta
15 rsv|arexvy|abrysvo|mresvia
20 meningococcal|menacwy|menactra|menveo|menquadfi
20 rotavirus|rotateq|rotarix
20 hib|haemophilus influenzae type b
20 bcg|tuberculosis
20 rabies
20 yellow fever|yf vax
20 typhoid|vivotif|typhim vi
20 japanese encephalitis|ixiaro
20 cholera|vaxchora
20 smallpox|mpox|jynneos|acam2000
20 twinrix
20 pediarix
20 pentacel
20 vaxelis
20 kinrix
20 quadracel
20 proquad|mmrv
20 boostrix
20 adacel
20 flumist|nasal flu vaccine
20 fluzone high dose
20 fluad
20 flublok
20 novavax
20 tick borne encephalitis|ticovac
20 dengue|dengvaxia|qdenga
20 chikungunya|ixchiq|vimkunya
20 ebola|ervebo
20 anthrax|biothrax|cyfendus
20 malaria|mosquirix|r21
20 oral polio|opv
20 men b|meningococcal b|bexsero|trumenba
20 men abcwy|penbraya
20 hpv9
20 heplisav b
20 prehevbrio
20 vaxneuvance
20 pcv15
20 pcv13
20 ppsv23
`},
{q:"Name a GI medication (nausea, reflux or bowel)", cat:"pharm", strip:"", list:`
5 omeprazole|prilosec
5 ondansetron|zofran
8 pantoprazole|protonix
8 famotidine|pepcid
10 esomeprazole|nexium
10 tums|calcium carbonate
12 promethazine|phenergan
12 metoclopramide|reglan
12 loperamide|imodium
12 miralax|polyethylene glycol
15 lansoprazole|prevacid
15 docusate|colace
15 senna|senokot
15 bisacodyl|dulcolax
15 pepto bismol|bismuth subsalicylate
15 simethicone|gas x
20 rabeprazole|aciphex
20 dexlansoprazole|dexilant
20 sucralfate|carafate
20 misoprostol|cytotec
20 prochlorperazine|compazine
20 meclizine|antivert
20 scopolamine patch|scopolamine
20 lactulose
20 linaclotide|linzess
20 lubiprostone|amitiza
20 plecanatide|trulance
20 prucalopride|motegrity
20 methylnaltrexone|relistor
20 naloxegol|movantik
20 dicyclomine|bentyl
20 hyoscyamine|levsin
20 lomotil|diphenoxylate atropine
20 mesalamine|lialda|asacol|pentasa
20 sulfasalazine|azulfidine
20 budesonide|entocort|uceris
20 infliximab
20 vedolizumab
20 rifaximin|xifaxan
20 eluxadoline|viberzi
20 alosetron|lotronex
20 tegaserod|zelnorm
20 cholestyramine
20 ursodiol|actigall
20 pancrelipase|creon
20 vonoprazan|voquezna
20 cimetidine|tagamet
20 nizatidine|axid
20 magnesium citrate
20 milk of magnesia
20 golytely|colyte|peg 3350 electrolyte
20 suprep
20 sutab
20 aprepitant|emend
20 fosaprepitant
20 granisetron|kytril
20 palonosetron|aloxi
20 dronabinol|marinol
20 trimethobenzamide|tigan
20 doxylamine pyridoxine|diclegis|bonjesta
20 droperidol
20 haloperidol
20 olanzapine
20 domperidone
20 erythromycin
20 octreotide
20 vasopressin
20 terlipressin
20 propranolol
20 nadolol
20 glycerin suppository
20 enema|fleet enema
20 mineral oil
20 psyllium|metamucil
20 sodium phosphate
20 bezlotoxumab
20 vowst|fecal microbiota
20 rebyota
`},
{q:"Name a birth control method", cat:"pharm", strip:"", list:`
5 the pill|birth control pill|oral contraceptive|combined pill
5 condom|condoms
8 iud|intrauterine device
10 implant|nexplanon|arm implant
10 depo provera|depo|the shot
12 patch|xulane|twirla
12 nuvaring|ring|vaginal ring
15 vasectomy
15 tubal ligation|tubes tied
15 plan b|morning after pill|emergency contraception
20 mirena
20 paragard|copper iud
20 kyleena
20 skyla
20 liletta
20 mini pill|progestin only pill|norethindrone
20 opill
20 slynd
20 annovera
20 diaphragm
20 cervical cap|femcap
20 sponge|today sponge
20 spermicide|nonoxynol 9
20 phexxi
20 withdrawal|pull out method
20 abstinence
20 fertility awareness|natural family planning|rhythm method
20 lactational amenorrhea
20 female condom|internal condom
20 ella|ulipristal
20 salpingectomy
20 essure
20 yaz|yasmin|drospirenone
20 seasonique|seasonale|extended cycle
20 lo loestrin
20 sprintec
20 tri sprintec
20 nextstellis
20 depo subq provera|sayana press
20 basal body temperature
20 cervical mucus method
20 natural cycles app
20 outercourse
`},
{q:"Name an antihistamine", cat:"pharm", strip:"", list:`
5 benadryl|diphenhydramine
5 claritin|loratadine
8 zyrtec|cetirizine
10 allegra|fexofenadine
12 xyzal|levocetirizine
12 clarinex|desloratadine
15 hydroxyzine|atarax|vistaril
15 promethazine|phenergan
15 meclizine|antivert
15 dramamine|dimenhydrinate
20 doxylamine|unisom
20 chlorpheniramine|chlor trimeton
20 famotidine|pepcid
20 cyproheptadine|periactin
20 brompheniramine
20 clemastine|tavist
20 carbinoxamine
20 triprolidine
20 azelastine|astelin
20 olopatadine|pataday|patanol
20 ketotifen|zaditor
20 epinastine
20 bepotastine
20 cimetidine
20 ranitidine
20 nizatidine
20 bilastine
20 rupatadine
20 ebastine
20 mizolastine
20 acrivastine
20 dexchlorpheniramine
20 cyclizine
20 pheniramine
20 emedastine
20 alcaftadine
20 cetirizine eye drops|zerviate
20 terfenadine
20 astemizole
`},
{q:"Name a drug to avoid in pregnancy", cat:"pharm", strip:"", list:`
5 isotretinoin|accutane
5 warfarin|coumadin
8 thalidomide
10 methotrexate
10 alcohol
12 ace inhibitors|lisinopril|enalapril
12 arbs|losartan|valsartan
15 statins|atorvastatin
15 valproate|valproic acid|depakote
15 tetracycline|doxycycline
15 misoprostol|cytotec
20 finasteride|propecia
20 dutasteride
20 lithium
20 phenytoin
20 carbamazepine
20 topiramate
20 leflunomide|arava
20 mycophenolate|cellcept
20 ribavirin
20 fluoroquinolones|ciprofloxacin
20 nsaids|ibuprofen
20 testosterone
20 danazol
20 diethylstilbestrol|des
20 tamoxifen
20 letrozole
20 bosentan
20 ambrisentan
20 macitentan
20 riociguat
20 acitretin|soriatane
20 tazarotene
20 vitamin a
20 aminoglycosides|gentamicin
20 streptomycin
20 radioactive iodine
20 iodine
20 methimazole
20 mifepristone
20 dinoprostone
20 ergotamine
20 dihydroergotamine
20 lenalidomide
20 pomalidomide
20 glp 1 agonists|semaglutide|ozempic
20 sglt2 inhibitors
20 amiodarone
20 benzodiazepines
20 opioids
20 tobacco|nicotine
20 cocaine
20 marijuana|cannabis
20 vismodegib
20 sonidegib
20 trimethoprim
20 sulfonamides
20 chloramphenicol
20 griseofulvin
20 quinine
20 miltefosine
20 penicillamine
20 cyclophosphamide
20 hydroxyurea
20 tretinoin
20 bexarotene
20 raloxifene
20 clomiphene
20 estrogens
20 medroxyprogesterone
20 dronedarone
20 spironolactone
20 phentermine
20 orlistat
20 lomitapide
`},
{q:"Name a high-alert medication", cat:"pharm", strip:"", list:`
5 insulin
5 heparin
8 opioids|morphine|fentanyl|hydromorphone
8 warfarin
10 potassium chloride|concentrated potassium|kcl
12 chemotherapy
15 epinephrine
15 methotrexate
15 digoxin
15 magnesium sulfate
20 propofol
20 midazolam
20 ketamine
20 neuromuscular blockers|paralytics|rocuronium|succinylcholine|vecuronium
20 hypertonic saline|3% saline
20 tpa|alteplase|thrombolytics
20 enoxaparin|low molecular weight heparin
20 doacs|apixaban|rivaroxaban
20 amiodarone
20 lidocaine iv
20 norepinephrine|levophed
20 vasopressin
20 phenylephrine
20 dopamine
20 dobutamine
20 milrinone
20 nitroprusside
20 oxytocin|pitocin
20 sulfonylureas|glipizide|glyburide
20 tpn|parenteral nutrition
20 epidural medications
20 intrathecal medications
20 sterile water for injection
20 dextrose 20% or higher|d50
20 iv sodium bicarbonate
20 colchicine injection
20 methadone
20 liposomal amphotericin
20 conventional amphotericin
20 vincristine
20 opium tincture
20 promethazine iv
20 nitroglycerin iv
20 esmolol
20 argatroban
20 bivalirudin
20 eptifibatide
20 digoxin immune fab
20 local anesthetics
20 benzodiazepines iv
20 dexmedetomidine|precedex
20 chloral hydrate
20 barbiturates
20 radiocontrast
20 iv adrenergic agonists
20 iv adrenergic antagonists
`},
{q:"Name an opioid", cat:"pharm", strip:"", list:`
5 morphine
5 oxycodone|oxycontin|percocet|roxicodone
8 fentanyl|duragesic|sublimaze
8 hydrocodone|vicodin|norco|lortab
10 heroin|diacetylmorphine
10 codeine
12 tramadol|ultram
12 methadone|dolophine
15 hydromorphone|dilaudid
15 buprenorphine|suboxone|subutex|sublocade|butrans|belbuca
20 meperidine|demerol|pethidine
20 tapentadol|nucynta
20 oxymorphone|opana
20 carfentanil
20 sufentanil|dsuvia
20 remifentanil|ultiva
20 alfentanil
20 levorphanol
20 butorphanol|stadol
20 nalbuphine|nubain
20 pentazocine|talwin
20 dihydrocodeine
20 opium|laudanum|paregoric
20 loperamide
20 diphenoxylate|lomotil
20 kratom|mitragynine
20 nitazenes|isotonitazene|protonitazene
20 acetylfentanyl
20 furanylfentanyl
20 u 47700
20 oliceridine|olinvyk
20 eluxadoline
20 thebaine
20 etorphine
20 dezocine
20 propoxyphene|darvon
20 levomethadyl|laam
20 ketobemidone
20 tilidine
20 piritramide
20 dextromoramide
20 benzylmorphine
20 ethylmorphine
20 pholcodine
20 hydrocodone er|zohydro|hysingla
`},
{q:"Name a pharmaceutical company", cat:"pharm", strip:"", list:`
5 pfizer
5 johnson and johnson|j and j|janssen
8 moderna
8 merck|msd
10 novartis
10 eli lilly|lilly
10 roche|genentech
12 astrazeneca
12 gsk|glaxosmithkline
12 abbvie
15 sanofi
15 bristol myers squibb|bms
15 novo nordisk
15 bayer
15 amgen
20 gilead
20 biogen
20 regeneron
20 vertex
20 takeda
20 boehringer ingelheim
20 teva
20 viatris|mylan
20 sandoz
20 abbott
20 allergan
20 astellas
20 daiichi sankyo
20 eisai
20 otsuka
20 chugai
20 ucb
20 lundbeck
20 ipsen
20 servier
20 grifols
20 csl|csl behring
20 biontech
20 novavax
20 sun pharma
20 dr reddys
20 cipla
20 lupin
20 aurobindo
20 zydus
20 glenmark
20 hikma
20 fresenius kabi
20 baxter
20 hospira
20 jazz pharmaceuticals
20 alexion
20 incyte
20 seagen|seattle genetics
20 alnylam
20 biomarin
20 neurocrine
20 sarepta
20 exelixis
20 horizon
20 organon
20 perrigo
20 endo
20 purdue pharma
20 mallinckrodt
20 insys
20 alkermes
20 indivior
20 upjohn
20 wyeth
20 schering plough
20 warner lambert
20 searle
20 squibb
20 parke davis
20 burroughs wellcome
20 smithkline beecham
20 ciba geigy
20 hoffmann la roche
20 celgene
20 genzyme
20 medimmune
20 shire
20 actavis
20 watson
20 par pharmaceutical
20 amneal
20 apotex
20 cosette
20 kenvue
20 haleon
20 bausch health|valeant
20 galderma
20 ferring
20 menarini
20 recordati
20 kyowa kirin
20 sumitomo
20 shionogi
20 ono
20 beigene
20 hengrui
20 wuxi
20 samsung biologics
20 celltrion
`},
{q:"Name a sleep medication", cat:"pharm", strip:"", list:`
5 ambien|zolpidem
5 melatonin
8 benadryl|diphenhydramine
10 trazodone
12 lunesta|eszopiclone
15 unisom|doxylamine
15 zzzquil
15 sonata|zaleplon
20 belsomra|suvorexant
20 dayvigo|lemborexant
20 quviviq|daridorexant
20 rozerem|ramelteon
20 silenor|doxepin
20 restoril|temazepam
20 halcion|triazolam
20 ativan|lorazepam
20 klonopin|clonazepam
20 xanax|alprazolam
20 mirtazapine|remeron
20 quetiapine|seroquel
20 hydroxyzine
20 gabapentin
20 amitriptyline
20 tylenol pm
20 advil pm
20 valerian
20 chamomile
20 magnesium
20 l theanine
20 cbd
20 tasimelteon|hetlioz
20 sodium oxybate|xyrem|xywav|lumryz
20 estazolam|prosom
20 flurazepam|dalmane
20 quazepam|doral
20 zopiclone|imovane
20 chloral hydrate
20 secobarbital|seconal
20 butabarbital
20 clonidine
20 prazosin
20 cannabis
20 kava
20 tryptophan
20 5 htp
20 lavender oil
20 passionflower
20 nyquil
20 dramamine
`},
{q:"Name an ADHD medication", cat:"pharm", strip:"", list:`
5 adderall|amphetamine salts
5 ritalin|methylphenidate
8 vyvanse|lisdexamfetamine
10 concerta
12 focalin|dexmethylphenidate
15 strattera|atomoxetine
15 intuniv|guanfacine
15 dexedrine|dextroamphetamine
20 kapvay|clonidine
20 qelbree|viloxazine
20 evekeo
20 mydayis
20 adzenys
20 dyanavel
20 azstarys
20 jornay pm
20 quillichew
20 quillivant
20 metadate
20 methylin
20 daytrana|methylphenidate patch
20 aptensio
20 cotempla
20 relexxii
20 desoxyn|methamphetamine
20 xelstrym
20 zenzedi
20 procentra
20 bupropion|wellbutrin
20 modafinil
20 tenex
`},
{q:"Name an eye drop medication", cat:"pharm", strip:"eye drops drop", list:`
5 artificial tears|refresh|systane
8 latanoprost|xalatan
10 timolol|timoptic
12 visine|tetrahydrozoline
12 pataday|olopatadine
15 ofloxacin|ocuflox
15 moxifloxacin|vigamox
15 erythromycin ointment
15 tobramycin|tobrex
15 prednisolone acetate|pred forte
15 restasis|cyclosporine
15 xiidra|lifitegrast
20 travatan|travoprost
20 lumigan|bimatoprost
20 brimonidine|alphagan
20 dorzolamide|trusopt
20 cosopt
20 brinzolamide|azopt
20 combigan
20 simbrinza
20 rhopressa|netarsudil
20 rocklatan
20 vyzulta
20 pilocarpine|vuity
20 atropine
20 tropicamide|mydriacyl
20 cyclopentolate|cyclogyl
20 phenylephrine
20 proparacaine
20 tetracaine
20 fluorescein
20 ketorolac|acular
20 bromfenac
20 nepafenac|nevanac
20 difluprednate|durezol
20 loteprednol|lotemax
20 dexamethasone|maxidex
20 fluorometholone|fml
20 tobradex
20 maxitrol
20 polytrim
20 besifloxacin|besivance
20 gatifloxacin|zymaxid
20 ciprofloxacin|ciloxan
20 azithromycin|azasite
20 bacitracin
20 trifluridine|viroptic
20 ganciclovir gel|zirgan
20 natamycin
20 ketotifen|zaditor|alaway
20 lastacaft|alcaftadine
20 bepreve|bepotastine
20 cromolyn
20 naphazoline|naphcon a
20 lumify
20 miebo
20 tyrvaya
20 vevye
20 eysuvis
20 cequa
20 xdemvy|lotilaner
20 upneeq|oxymetazoline
20 ryzumvi
20 omlonti
20 iyuzeh
20 durysta
20 idose
20 apraclonidine|iopidine
20 acetylcholine|miochol
20 mitomycin
20 povidone iodine
20 lifitegrast
20 hypochlorous acid
20 muro 128|hypertonic saline
20 serum tears|autologous serum
`},
{q:"Name a topical skin medication", cat:"pharm", strip:"cream ointment gel", list:`
5 hydrocortisone
5 neosporin|triple antibiotic
8 benzoyl peroxide
8 tretinoin|retin a
10 triamcinolone|kenalog
10 clotrimazole|lotrimin
12 mupirocin|bactroban
12 lidocaine
15 clobetasol|temovate
15 betamethasone
15 ketoconazole
15 terbinafine
15 salicylic acid
15 calamine
15 bacitracin
20 adapalene|differin
20 clindamycin gel|cleocin t
20 metronidazole gel|metrogel
20 silver sulfadiazine|silvadene
20 diclofenac gel|voltaren
20 capsaicin
20 permethrin|elimite
20 tacrolimus ointment|protopic
20 pimecrolimus|elidel
20 crisaborole|eucrisa
20 ruxolitinib cream|opzelura
20 tapinarof|vtama
20 roflumilast cream|zoryve
20 calcipotriene|dovonex
20 tazarotene|tazorac
20 azelaic acid|finacea
20 ivermectin cream|soolantra
20 minoxidil|rogaine
20 fluorouracil|efudex
20 imiquimod|aldara
20 podofilox
20 mometasone|elocon
20 fluocinonide|lidex
20 fluocinolone
20 desonide
20 halobetasol|ultravate
20 desoximetasone|topicort
20 nystatin
20 econazole
20 miconazole
20 ciclopirox
20 selenium sulfide|selsun blue
20 coal tar
20 urea cream
20 ammonium lactate|amlactin
20 hydroquinone
20 spironolactone topical
20 clascoterone|winlevi
20 dapsone gel|aczone
20 sulfacetamide
20 retapamulin|altabax
20 ozenoxacin|xepi
20 lindane
20 malathion|ovide
20 spinosad|natroba
20 benzyl alcohol lotion
20 doxepin cream|zonalon
20 pramoxine
20 menthol
20 camphor
20 zinc oxide
20 petroleum jelly|vaseline
20 aquaphor
20 cerave
20 eucerin
20 aloe vera gel
20 witch hazel
20 tea tree oil
20 lidocaine prilocaine|emla
20 trichloroacetic acid
20 cantharidin|ycanth
20 berdazimer|zelsuvmi
20 delgocitinib
20 trifarotene|aklief
20 glycopyrronium cloth|qbrexza
20 bimatoprost|latisse
20 eflornithine|vaniqa
20 collagenase|santyl
20 becaplermin|regranex
20 nitroglycerin ointment
20 lidocaine patch|lidoderm
20 salonpas
`}
);

/* ---- NURSING (field pool expansion) ---- */
RAW.push(
{q:"Name a nursing intervention to prevent falls", cat:"nursing", strip:"", list:`
5 bed alarm|bed exit alarm
5 call light within reach|call bell
8 non skid socks|non slip socks|grippy socks
8 bed in lowest position|low bed
10 hourly rounding|purposeful rounding
12 bed rails|side rails
12 fall risk bracelet|yellow wristband
15 clear clutter|clear pathways
15 assist with ambulation|help walking
15 gait belt
20 night light|adequate lighting
20 toileting schedule|scheduled toileting
20 walker|cane|assistive devices
20 fall mat|floor mat
20 chair alarm
20 sitter|1 to 1 observation|patient sitter
20 video monitoring|tele sitter
20 morse fall scale|fall risk assessment
20 wheelchair brakes locked|lock the wheels
20 bed brakes locked
20 room close to nurses station
20 fall risk sign|signage
20 patient education
20 family education
20 orthostatic vitals
20 dangle before standing
20 medication review
20 reduce sedatives
20 glasses and hearing aids on
20 proper footwear
20 bedside commode
20 urinal at bedside
20 personal items within reach
20 hip protectors
20 physical therapy consult
20 strength and balance exercises
20 grab bars
20 shower chair
20 raised toilet seat
20 hi lo bed
20 safety zone
20 two person assist
20 mechanical lift|hoyer lift
20 transfer board
20 delirium prevention
20 vitamin d
20 frequent reorientation
20 handoff communication
20 post fall huddle
20 tab alarm
20 wedge cushion
20 concave mattress
`},
{q:"Name a sign of dehydration", cat:"nursing", strip:"", list:`
5 thirst
5 dry mouth|dry mucous membranes
8 dark urine
8 decreased urine output|oliguria|not peeing
10 headache
10 dizziness|lightheadedness
12 fatigue|tiredness
12 poor skin turgor|tenting
15 rapid heart rate|tachycardia
15 low blood pressure|hypotension
15 dry skin
15 sunken eyes
20 sunken fontanelle
20 no tears|no tears when crying
20 dry lips|cracked lips
20 confusion
20 delayed capillary refill
20 orthostatic hypotension
20 muscle cramps
20 constipation
20 weight loss
20 irritability
20 lethargy
20 weak pulse|thready pulse
20 rapid breathing|tachypnea
20 elevated bun|high bun
20 bun to creatinine ratio above 20
20 high urine specific gravity
20 hypernatremia
20 elevated hematocrit
20 fever
20 cool extremities
20 fewer wet diapers
20 fainting|syncope
20 sticky saliva
20 bad breath
20 sugar cravings
20 chills
20 flat neck veins
20 decreased sweating
20 sunken cheeks
20 shock
20 seizures
20 kidney injury
20 coma
`},
{q:"Name a sign of sepsis", cat:"nursing", strip:"", list:`
5 fever
5 fast heart rate|tachycardia
8 low blood pressure|hypotension
8 confusion|altered mental status
10 fast breathing|tachypnea
10 chills|shivering
12 high white count|leukocytosis
12 low temperature|hypothermia
15 elevated lactate|lactic acid
15 decreased urine output|oliguria
15 mottled skin|mottling
20 clammy skin|sweaty skin
20 low oxygen|hypoxia
20 extreme pain|discomfort
20 shortness of breath
20 low white count|leukopenia
20 bandemia|left shift|bands
20 delayed capillary refill
20 low platelets|thrombocytopenia
20 hyperglycemia
20 elevated creatinine
20 elevated bilirubin
20 elevated procalcitonin
20 elevated crp
20 positive blood cultures
20 qsofa
20 sirs criteria
20 lethargy
20 cold extremities
20 flushed skin|warm skin
20 weak pulse
20 bounding pulse
20 low map|map below 65
20 needing vasopressors
20 petechiae
20 purpura
20 dic
20 ileus
20 metabolic acidosis
20 low bicarbonate
20 elevated inr
20 bleeding
20 seizures
20 coma
20 feeling like you might die|sense of doom
20 not eating or drinking
20 rash
20 vomiting
20 diarrhea
`},
{q:"Name a symptom of low blood sugar", cat:"nursing", strip:"", list:`
5 shaking|shakiness|tremor
5 sweating|diaphoresis
8 dizziness|lightheadedness
8 hunger
10 confusion
10 fast heart rate|palpitations|tachycardia
12 anxiety|nervousness
12 irritability
15 headache
15 weakness
15 fatigue
15 blurred vision
20 pale skin|pallor
20 clammy skin
20 tingling lips|numb lips
20 slurred speech
20 seizures
20 loss of consciousness|passing out|fainting
20 nightmares
20 night sweats
20 difficulty concentrating
20 mood changes
20 drowsiness
20 clumsiness|poor coordination
20 nausea
20 behavior changes
20 combativeness
20 coma
20 death
20 hypoglycemia unawareness
20 cold sweat
20 crying out during sleep
20 double vision
20 stroke like symptoms
`},
{q:"Name a warning sign of stroke", cat:"nursing", strip:"", list:`
5 face drooping|facial droop
5 arm weakness
8 slurred speech|speech difficulty
10 numbness|one sided numbness
10 confusion
12 trouble walking|loss of balance
12 vision loss|vision changes|blurred vision
15 severe headache|worst headache of my life
15 dizziness|vertigo
15 one sided weakness|hemiparesis
20 trouble understanding speech|aphasia
20 double vision
20 loss of coordination|ataxia
20 facial numbness
20 leg weakness
20 trouble swallowing|dysphagia
20 drooling
20 neglect|hemineglect
20 gaze deviation
20 nausea|vomiting
20 loss of consciousness
20 seizure
20 hiccups
20 sudden fatigue
20 inappropriate laughing or crying
20 vertigo
20 nystagmus
20 visual field cut|hemianopia
20 locked in
20 horner syndrome
20 crossed signs
20 be fast
`},
{q:"Name a nursing diagnosis", cat:"nursing", strip:"", list:`
5 acute pain
5 risk for falls
8 risk for infection
8 impaired skin integrity
10 anxiety
10 deficient knowledge|knowledge deficit
12 ineffective airway clearance
12 impaired gas exchange
12 impaired physical mobility
15 risk for bleeding
15 fluid volume deficit|deficient fluid volume
15 excess fluid volume|fluid volume excess
15 ineffective breathing pattern
15 chronic pain
15 fatigue
15 activity intolerance
20 decreased cardiac output
20 ineffective tissue perfusion
20 risk for aspiration
20 imbalanced nutrition less than body requirements
20 imbalanced nutrition more than body requirements|obesity
20 constipation
20 diarrhea
20 impaired urinary elimination
20 urinary retention
20 self care deficit
20 disturbed sleep pattern|insomnia
20 risk for pressure injury|risk for impaired skin integrity
20 hyperthermia
20 hypothermia
20 ineffective thermoregulation
20 risk for unstable blood glucose
20 acute confusion
20 chronic confusion
20 impaired verbal communication
20 disturbed sensory perception
20 social isolation
20 ineffective coping
20 caregiver role strain
20 interrupted family processes
20 grieving|anticipatory grieving
20 hopelessness
20 powerlessness
20 spiritual distress
20 fear
20 risk for suicide
20 risk for self directed violence
20 risk for other directed violence
20 disturbed body image
20 situational low self esteem
20 noncompliance|nonadherence
20 ineffective health maintenance
20 readiness for enhanced knowledge
20 ineffective breastfeeding
20 risk for impaired attachment
20 neonatal jaundice
20 delayed growth and development
20 risk for injury
20 risk for trauma
20 impaired swallowing
20 nausea
20 risk for electrolyte imbalance
20 risk for shock
20 risk for vascular trauma
20 risk for peripheral neurovascular dysfunction
20 impaired memory
20 wandering
20 sedentary lifestyle
20 risk for disuse syndrome
20 ineffective protection
20 latex allergy response
20 rape trauma syndrome
20 post trauma syndrome
20 relocation stress syndrome
20 moral distress
20 dysfunctional ventilatory weaning response
20 autonomic dysreflexia
20 unilateral neglect
20 bowel incontinence
20 stress urinary incontinence
20 death anxiety
`},
{q:"Name an activity of daily living", cat:"nursing", strip:"", list:`
5 bathing|showering
5 eating|feeding
8 dressing|getting dressed
8 toileting|using the toilet
10 walking|ambulating|mobility
10 transferring|getting out of bed
12 grooming
12 continence
15 brushing teeth|oral care
15 hair care|combing hair
15 shaving
20 cooking|meal preparation
20 cleaning|housework|housekeeping
20 shopping|grocery shopping
20 managing medications|taking medications
20 managing money|finances|paying bills
20 using the phone|telephone
20 driving|transportation
20 laundry
20 nail care
20 skin care
20 climbing stairs
20 sleeping
20 communicating
20 writing
20 reading
20 using a computer
20 caring for pets
20 yard work
20 childcare
20 dressing lower body
20 putting on shoes
20 tub transfer
20 car transfer
20 makeup
20 menstrual care
20 hearing aid care
20 denture care
20 contact lens care
20 using a wheelchair
20 sexual activity
`},
{q:"Name a patient position", cat:"nursing", strip:"position", list:`
5 supine|lying on back
5 prone|lying on stomach
8 fowlers
8 semi fowlers
10 high fowlers
10 trendelenburg
12 reverse trendelenburg
12 lateral|side lying
12 sims
15 lithotomy
15 recovery position
20 orthopneic|tripod
20 knee chest|genupectoral
20 dorsal recumbent
20 left lateral
20 right lateral
20 log roll
20 modified trendelenburg|passive leg raise|shock position
20 jackknife|kraske
20 beach chair
20 lateral decubitus
20 left uterine displacement
20 sitting|upright
20 standing
20 low fowlers
20 head of bed 30 degrees
20 proning|prone positioning
20 lloyd davies
20 park bench
20 sniffing position
20 ramped position
20 frog leg
20 fencing
20 decorticate
20 decerebrate
20 opisthotonos
20 hands and knees
20 squatting
20 kangaroo care
20 tummy time
20 30 degree tilt
20 anatomical position
20 neutral position
`},
{q:"Name a hospital unit or department", cat:"nursing", strip:"unit department", list:`
5 emergency room|er|emergency department|ed
5 icu|intensive care
8 operating room|or|surgery
8 maternity|labor and delivery|l and d
10 pediatrics|peds
10 nicu
12 radiology
12 pharmacy
12 laboratory|lab
15 cardiology
15 oncology
15 med surg|medical surgical
15 psych|psychiatric|behavioral health
20 pacu|recovery room
20 picu
20 ccu|cardiac care
20 cvicu
20 sicu
20 micu
20 neuro icu
20 step down|pcu|progressive care
20 telemetry
20 dialysis
20 cath lab
20 endoscopy
20 interventional radiology
20 burn unit
20 trauma
20 rehab|rehabilitation
20 physical therapy
20 occupational therapy
20 respiratory therapy
20 nutrition|dietary
20 social work
20 case management
20 chaplaincy|spiritual care
20 admissions|registration
20 billing
20 medical records|him
20 environmental services|housekeeping|evs
20 security
20 sterile processing
20 central supply
20 blood bank
20 pathology
20 morgue
20 infection control
20 quality
20 risk management
20 human resources
20 it
20 nursing administration
20 float pool
20 observation unit
20 short stay
20 infusion center
20 wound care
20 hospice
20 palliative care
20 antepartum
20 postpartum|mother baby
20 nursery|well baby
20 gyn
20 orthopedics
20 neurology
20 stroke unit
20 transplant
20 bone marrow transplant
20 hematology
20 nephrology
20 urology
20 gi|gastroenterology
20 pulmonology
20 sleep lab
20 wound center
20 hyperbaric
20 nuclear medicine
20 radiation oncology
20 ambulatory surgery
20 pre op
20 helipad
20 gift shop
20 cafeteria
`},
{q:"Name a tube, drain or catheter", cat:"nursing", strip:"tube drain catheter line", list:`
5 iv|peripheral iv
5 foley|urinary catheter
8 ng tube|nasogastric
8 chest tube
10 picc
10 central line|cvc
12 endotracheal tube|et tube|breathing tube
12 g tube|gastrostomy|peg
15 jp drain|jackson pratt
15 trach|tracheostomy
15 arterial line|art line
20 hemovac
20 penrose
20 blake drain
20 j tube|jejunostomy
20 gj tube
20 og tube|orogastric
20 dobhoff|nasoduodenal|feeding tube
20 port|port a cath|mediport
20 hickman
20 dialysis catheter|quinton|permacath
20 swan ganz|pulmonary artery catheter
20 straight cath|in and out cath
20 suprapubic catheter
20 condom catheter|external catheter
20 purewick
20 nephrostomy
20 biliary drain
20 ventriculostomy|evd|external ventricular drain
20 lumbar drain
20 epidural catheter
20 midline
20 intraosseous|io
20 umbilical line|uac|uvc
20 rectal tube|flexi seal
20 colostomy
20 ileostomy
20 urostomy
20 t tube
20 pleurx
20 paracentesis drain
20 three way foley|cbi
20 coude
20 salem sump
20 sengstaken blakemore|minnesota tube
20 nasopharyngeal airway
20 oropharyngeal airway
20 lma
20 ecmo cannula
20 impella
20 iabp|intra aortic balloon pump
20 thoracostomy
20 tenckhoff|pd catheter
20 wound vac
20 ommaya
20 shunt
20 stent
20 ureteral stent
`},
{q:"Name an electrolyte imbalance", cat:"nursing", strip:"", list:`
5 hyperkalemia|high potassium
5 hypokalemia|low potassium
8 hyponatremia|low sodium
8 hypernatremia|high sodium
10 hypocalcemia|low calcium
10 hypercalcemia|high calcium
12 hypomagnesemia|low magnesium
15 hypermagnesemia|high magnesium
15 hypophosphatemia|low phosphate
15 hyperphosphatemia|high phosphate
20 hypochloremia|low chloride
20 hyperchloremia|high chloride
20 metabolic acidosis
20 metabolic alkalosis
20 respiratory acidosis
20 respiratory alkalosis
20 low bicarbonate
20 high bicarbonate
20 dehydration
20 fluid overload|hypervolemia
20 hypovolemia
20 siadh
20 diabetes insipidus
20 pseudohyponatremia
20 hypoalbuminemia
20 refeeding syndrome
20 tumor lysis syndrome
20 water intoxication
20 hyperglycemia
20 hypoglycemia
20 hyperuricemia
20 hypozincemia
20 hypercapnia
20 lactic acidosis
20 ketoacidosis
20 milk alkali syndrome
`},
{q:"Name a hospital emergency code", cat:"nursing", strip:"code", list:`
5 code blue|cardiac arrest
8 code red|fire
10 rapid response|rrt|code rrt
12 code pink|infant abduction
12 code silver|active shooter|weapon
15 code gray|combative person|security
15 code orange|hazardous spill|hazmat
15 code black|bomb threat
15 code yellow|bed emergency|disaster
20 code white|pediatric arrest
20 code purple|child abduction
20 code brown|missing patient|severe weather
20 code green|evacuation
20 code stroke|stroke alert
20 code stemi|stemi alert
20 trauma alert|code trauma
20 code sepsis
20 code triage|mass casualty
20 code amber
20 code adam
20 code walker|elopement
20 code lavender|staff support
20 dr strong|show of force
20 dr firestone
20 code 99
20 code clear|all clear
20 massive transfusion protocol|mtp
20 code ob|ob emergency
20 code apgar|neonatal resuscitation
20 code helicopter|flight
20 code external disaster
20 code internal disaster
20 code airway
20 code ecmo
`},
{q:"Name a newborn assessment or procedure", cat:"nursing", strip:"", list:`
5 apgar score|apgar
5 weight
8 length
8 head circumference
10 vitamin k shot|vitamin k
10 eye ointment|erythromycin eye ointment
12 hepatitis b vaccine
12 heel stick|newborn screen|pku test
15 hearing screen
15 cchd screen|pulse ox screen
15 bilirubin check|jaundice check
15 skin to skin
15 first bath
20 cord care|umbilical cord clamping
20 circumcision
20 temperature
20 heart rate
20 respiratory rate
20 ballard score|gestational age assessment
20 reflexes|moro|rooting|sucking|grasp
20 fontanelles
20 ortolani|barlow|hip check
20 red reflex
20 palate check
20 spine check
20 anus patency|imperforate anus check
20 genitalia exam
20 clavicle check
20 blood glucose
20 breastfeeding assessment|latch
20 voiding|first void
20 meconium|first stool
20 security tag|hugs tag
20 footprints
20 id bands
20 chest circumference
20 abdominal circumference
20 silverman anderson score
20 cord blood gases
20 delayed cord clamping
20 newborn resuscitation|nrp
20 kangaroo care
20 swaddling
20 car seat test
20 safe sleep teaching
20 caput|cephalohematoma check
20 mongolian spots
20 milia
20 erythema toxicum
20 stork bites
20 vernix
20 lanugo
20 acrocyanosis
20 phototherapy
20 tongue tie check
20 eye prophylaxis
20 rsv antibody|nirsevimab
`},
{q:"Name a complication of immobility", cat:"nursing", strip:"", list:`
5 pressure injury|pressure ulcer|bed sore|bedsores|decubitus
5 blood clot|dvt|deep vein thrombosis
8 pneumonia
8 pulmonary embolism|pe
10 muscle atrophy|muscle wasting
10 constipation
12 contractures
12 weakness|deconditioning
15 osteoporosis|bone loss
15 atelectasis
15 urinary tract infection|uti
15 kidney stones
15 orthostatic hypotension
20 urinary retention
20 depression
20 delirium|confusion
20 fecal impaction
20 ileus
20 decreased appetite
20 joint stiffness
20 foot drop
20 hypercalcemia
20 insulin resistance
20 decreased cardiac output
20 increased heart workload
20 sleep disturbance
20 social isolation
20 boredom|sensory deprivation
20 loss of independence
20 falls
20 incontinence
20 hypostatic pneumonia
20 pooled secretions
20 negative nitrogen balance
20 edema
20 heterotopic ossification
20 frozen shoulder
20 skin breakdown
`},
{q:"Name a symptom of alcohol or opioid withdrawal", cat:"nursing", strip:"", list:`
5 shaking|tremors|the shakes
5 sweating
8 nausea
8 vomiting
10 anxiety
10 insomnia
12 seizures
12 hallucinations
12 delirium tremens|dts
15 diarrhea
15 muscle aches|body aches
15 runny nose
15 watery eyes|tearing
15 goosebumps|piloerection
15 yawning
20 dilated pupils
20 agitation|restlessness
20 irritability
20 fast heart rate|tachycardia
20 high blood pressure
20 fever
20 cravings
20 abdominal cramps
20 headache
20 confusion
20 depression
20 fatigue
20 chills
20 hot and cold flashes
20 restless legs
20 bone pain
20 loss of appetite
20 dehydration
20 paranoia
20 nightmares
20 tactile hallucinations|formication
20 dysphoria
20 sneezing
20 hypertension
20 arrhythmia
20 death
`},
{q:"Name a developmental milestone", cat:"nursing", strip:"", list:`
5 walking|first steps
5 talking|first word
8 crawling
8 sitting up|sitting without support
10 rolling over
10 smiling|social smile
12 holding head up|head control
12 babbling
15 pulling to stand
15 cruising
15 waving bye bye
15 clapping
15 potty training|toilet training
20 cooing
20 laughing
20 pincer grasp
20 stranger anxiety
20 object permanence
20 separation anxiety
20 pointing
20 drinking from a cup
20 using a spoon
20 two word phrases
20 stacking blocks
20 running
20 jumping
20 climbing stairs
20 kicking a ball
20 throwing a ball
20 riding a tricycle
20 hopping on one foot
20 drawing a circle
20 drawing a cross
20 drawing a square
20 drawing a triangle
20 drawing a person
20 dressing self
20 parallel play
20 cooperative play
20 pretend play
20 saying mama dada
20 responding to name
20 following simple commands
20 transferring objects hand to hand
20 raking grasp
20 reaching for objects
20 tracking objects
20 bringing hands to mouth
20 tummy time push up
20 using scissors
20 tying shoes
20 skipping
20 riding a bike
20 counting
20 knowing colors
20 telling a story
20 speaking in sentences
20 reading
20 writing name
20 losing baby teeth
20 puberty
20 menarche
`},
{q:"Name something found in a hospital room", cat:"nursing", strip:"", list:`
5 bed|hospital bed
5 call light|call button
8 iv pole
8 monitor|vital signs monitor
10 tv|television
10 bedside table|over bed table
12 chair|recliner
12 curtain|privacy curtain
15 sink
15 hand sanitizer
15 bathroom
15 whiteboard|communication board
15 oxygen outlet|oxygen
20 suction
20 iv pump
20 blood pressure cuff
20 pulse oximeter
20 thermometer
20 sharps container
20 gloves
20 trash can
20 linen hamper
20 urinal
20 bedpan
20 commode
20 wash basin
20 emesis basin|kidney basin
20 water pitcher
20 tissues
20 phone
20 remote
20 window
20 clock
20 pillows
20 blankets
20 gown
20 non skid socks
20 bed alarm
20 sequential compression device|scds
20 feeding pump
20 suction canister
20 ambu bag
20 crash cart
20 wall outlet
20 nurse call cord
20 computer|workstation on wheels|wow
20 badge reader
20 dry erase markers
20 glucometer
20 cardiac leads|telemetry box
20 patient lift|ceiling lift
20 walker
20 wheelchair
20 restraints
20 isolation cart
20 code button
20 fall mat
20 shower chair
20 privacy sign
20 ice chips
20 hospital socks
20 visitor chair
20 fridge
20 vase
20 get well card
20 balloons
`},
{q:"Name a nursing skill learned in school", cat:"nursing", strip:"", list:`
5 taking vital signs|vitals
5 starting an iv|iv insertion
8 giving injections|injections
8 inserting a foley|foley insertion|catheterization
10 bed bath
10 wound care|dressing change
12 medication administration|med pass
12 cpr|bls
15 head to toe assessment|physical assessment
15 hand hygiene|hand washing
15 sterile technique
15 charting|documentation
15 ng tube insertion
20 blood glucose check|fingerstick
20 occupied bed making|bed making
20 transfers
20 range of motion exercises
20 repositioning|turning patients
20 oral care
20 tracheostomy care
20 suctioning
20 oxygen administration
20 enema
20 ostomy care
20 central line dressing change
20 blood transfusion
20 iv push
20 iv piggyback
20 tube feeding
20 insulin administration
20 subcutaneous injection
20 intramuscular injection|z track
20 intradermal injection|ppd
20 drawing up medications
20 med math|dosage calculation
20 sbar handoff|report
20 patient teaching
20 restraint application
20 donning and doffing ppe
20 specimen collection
20 urine specimen
20 wound culture
20 blood draw|venipuncture
20 ekg placement|12 lead
20 telemetry placement
20 pain assessment
20 neuro checks
20 fall prevention
20 post mortem care
20 discharge teaching
20 admission assessment
20 incentive spirometer teaching
20 chest tube care
20 removing a foley
20 removing an iv
20 removing staples|staple removal
20 removing sutures
20 applying compression stockings
20 sequential compression devices
20 ambulating patients
20 crutch walking teaching
20 nebulizer treatment
20 eye drops administration
20 ear drops administration
20 rectal suppository
20 vaginal medication
20 heat and cold application
20 therapeutic communication
`},
{q:"Name a symptom of a heart attack", cat:"nursing", strip:"", list:`
5 chest pain
5 shortness of breath
8 arm pain|left arm pain
8 sweating|diaphoresis
10 nausea
10 jaw pain
12 chest pressure|chest tightness
12 back pain
15 dizziness|lightheadedness
15 fatigue
15 vomiting
15 neck pain
20 indigestion|heartburn
20 anxiety|sense of doom
20 palpitations
20 cold sweat
20 shoulder pain
20 epigastric pain|upper abdominal pain
20 fainting|syncope
20 pale skin|pallor
20 weakness
20 cough
20 confusion
20 elevated troponin
20 st elevation
20 arrhythmia
20 low blood pressure
20 sleep disturbance
20 silent mi|no symptoms
20 tooth pain
20 ear pain
20 hiccups
`},
{q:"Name a cause of delirium", cat:"nursing", strip:"", list:`
5 infection
5 urinary tract infection|uti
8 medications
8 dehydration
10 surgery|anesthesia
10 alcohol withdrawal
12 sleep deprivation
12 pain
15 pneumonia
15 sepsis
15 hypoxia|low oxygen
15 low sodium|hyponatremia
15 low blood sugar|hypoglycemia
20 constipation
20 urinary retention
20 benzodiazepines
20 opioids
20 anticholinergics
20 steroids
20 icu stay|icu psychosis
20 dementia
20 stroke
20 head injury
20 fever
20 kidney failure
20 liver failure|hepatic encephalopathy
20 hypercalcemia
20 thyroid problems
20 heart attack
20 heart failure
20 drug withdrawal
20 restraints
20 catheters|tethers
20 immobility
20 sensory deprivation|no glasses or hearing aids
20 unfamiliar environment
20 polypharmacy
20 anemia
20 malnutrition
20 thiamine deficiency|wernicke
20 b12 deficiency
20 seizures
20 meningitis
20 encephalitis
20 hypertensive emergency
20 carbon monoxide
20 serotonin syndrome
20 neuroleptic malignant syndrome
20 anticholinergic toxicity
20 lithium toxicity
20 digoxin toxicity
20 uremia
20 hypercapnia
20 diphenhydramine|benadryl
`}
);

/* ---- DENTAL (field pool expansion) ---- */
RAW.push(
{q:"Name a dental specialty", cat:"dental", strip:"dentistry", list:`
5 orthodontics|orthodontist
8 oral surgery|oral and maxillofacial surgery|oral surgeon
10 periodontics|periodontist
10 endodontics|endodontist
12 pediatric|pediatric dentistry|pedodontics
15 prosthodontics|prosthodontist
20 general dentistry
20 cosmetic dentistry
25 oral pathology|oral and maxillofacial pathology
25 oral radiology|oral and maxillofacial radiology
30 dental public health
30 dental anesthesiology
30 oral medicine
30 orofacial pain
35 implant dentistry|implantology
35 geriatric dentistry
35 special needs dentistry
35 forensic odontology|forensic dentistry
40 sleep dentistry|dental sleep medicine
40 sports dentistry
40 aesthetic dentistry
40 restorative dentistry
40 hospital dentistry
45 maxillofacial prosthetics
45 craniofacial orthodontics
45 tmj specialist
45 holistic dentistry
45 laser dentistry
45 military dentistry
45 teledentistry
`},
{q:"Name a dental material", cat:"dental", strip:"", list:`
5 amalgam|silver filling|mercury
5 composite|composite resin|tooth colored filling
8 porcelain|ceramic
10 gold
12 fluoride
15 glass ionomer|gic
15 zirconia
20 acrylic
20 gutta percha
20 dental cement
20 sealant
25 resin modified glass ionomer|rmgi
25 lithium disilicate|emax
25 alginate
25 polyvinyl siloxane|pvs
25 polyether
25 gypsum|dental stone|plaster
25 wax|dental wax
25 calcium hydroxide|dycal
25 mta|mineral trioxide aggregate
25 bioceramic
25 zinc oxide eugenol|zoe
25 zinc phosphate
25 zinc polycarboxylate
25 resin cement
25 bonding agent|adhesive
25 etchant|phosphoric acid
25 silane
25 flowable composite
25 compomer
25 titanium
25 cobalt chromium
25 stainless steel
25 nickel titanium|niti
25 pfm|porcelain fused to metal
25 feldspathic porcelain
25 bis gma
25 peek
25 pmma
25 bulk fill composite
25 nanohybrid composite
25 microfill
25 silver diamine fluoride|sdf
25 fluoride varnish
25 chlorhexidine
25 sodium hypochlorite|bleach
25 edta
25 hydrogen peroxide
25 carbamide peroxide
25 irm|intermediate restorative material
25 cavit
25 biodentine
25 formocresol
25 ferric sulfate
25 hydroxyapatite
25 bone graft material
25 collagen membrane
25 prf|platelet rich fibrin
25 retraction cord
25 articulating paper
25 pumice
25 prophy paste
25 silicone
25 hydrocolloid
25 agar
25 impression compound
25 bite registration material
25 temp bond
25 bis acryl
25 palladium
25 platinum
25 tin
25 copper amalgam
25 graphene
25 3d printing resin
`},
{q:"Name a type of dental X-ray or imaging", cat:"dental", strip:"x ray xray radiograph", list:`
5 bitewing|bitewings|bwx
8 panoramic|pano|panorex|opg
10 periapical|pa
12 full mouth series|fmx|fms
15 cbct|cone beam ct|cone beam
20 occlusal
25 cephalometric|ceph|lateral ceph
30 intraoral camera
30 digital x ray
35 vertical bitewing
35 horizontal bitewing
35 film x ray
40 phosphor plate|psp
40 sensor|digital sensor
45 tmj imaging
45 sialography
45 mri
45 ct
50 ultrasound
50 transillumination
50 laser fluorescence|diagnodent
50 intraoral scan|itero|digital impression
55 posteroanterior skull|pa ceph
55 waters view
55 reverse towne
55 submentovertex
60 tomography
60 tuned aperture
60 xeroradiography
65 subtraction radiography
65 photostimulable phosphor
`},
{q:"Name a part of the mouth", cat:"dental", strip:"the", list:`
5 tongue
5 teeth
8 gums|gingiva
8 lips
10 roof of the mouth|palate
10 uvula
12 hard palate
12 soft palate
15 cheeks|buccal mucosa
15 tonsils
15 saliva
20 salivary glands
20 frenulum|lingual frenulum
20 labial frenulum
20 taste buds
20 floor of the mouth
20 jaw|mandible|maxilla
25 papillae|tongue papillae
25 vermilion border
25 philtrum
25 commissure
25 vestibule
25 alveolar ridge
25 rugae|palatine rugae
25 incisive papilla
25 parotid duct|stensen duct
25 submandibular duct|wharton duct
25 retromolar pad
25 mucogingival junction
25 attached gingiva
25 interdental papilla
25 oropharynx
25 palatoglossal arch
25 palatopharyngeal arch
25 fauces
25 tonsillar pillars
25 foliate papillae
25 circumvallate papillae
25 fungiform papillae
25 filiform papillae
25 sulcus terminalis
25 foramen cecum
25 plica fimbriata
25 sublingual caruncle
25 sublingual fold
25 fovea palatini
25 pterygomandibular raphe
25 linea alba
25 fordyce granules
25 tori
25 maxillary tuberosity
25 hamular notch
25 mylohyoid ridge
`},
{q:"Name an orthodontic appliance", cat:"dental", strip:"", list:`
5 braces|metal braces
5 retainer
8 invisalign|clear aligners|aligners
10 rubber bands|elastics
12 headgear
12 palatal expander|expander|rpe
15 ceramic braces|clear braces
15 lingual braces
15 brackets
15 archwire|wire
20 bands
20 hawley retainer
20 essix retainer|clear retainer
20 permanent retainer|bonded retainer|fixed retainer
20 space maintainer
20 herbst appliance|herbst
20 forsus
20 mara
20 twin block
20 face mask|reverse pull headgear
20 tads|temporary anchorage devices|mini screws
20 power chain
20 o rings|ligatures
20 springs|coil springs
20 self ligating braces|damon braces
20 bite turbos|bite blocks
20 habit appliance|tongue crib|thumb crib
20 lip bumper
20 transpalatal arch|tpa
20 nance appliance
20 lingual holding arch
20 pendulum appliance
20 distal jet
20 carriere motion
20 quad helix
20 haas expander
20 hyrax
20 mse|maxillary skeletal expander
20 chin cup
20 activator
20 bionator
20 frankel appliance
20 positioner
20 spring retainer
20 myobrace
20 smile direct club
20 class ii corrector
20 cervical pull headgear
20 high pull headgear
`},
{q:"Name a drug used in dentistry", cat:"dental", strip:"", list:`
5 lidocaine|xylocaine
5 novocaine|procaine
8 amoxicillin
8 ibuprofen
10 articaine|septocaine
10 nitrous oxide|laughing gas
12 fluoride
12 chlorhexidine|peridex
15 epinephrine
15 mepivacaine|carbocaine
15 benzocaine|topical anesthetic
15 acetaminophen|tylenol
20 prilocaine|citanest
20 bupivacaine|marcaine
20 clindamycin
20 penicillin|penicillin vk
20 azithromycin
20 metronidazole
20 hydrocodone
20 oxycodone
20 dexamethasone
20 triazolam|halcion
20 midazolam|versed
20 diazepam|valium
20 doxycycline|periostat
20 minocycline|arestin
20 silver diamine fluoride
20 tetracaine
20 oraqix
20 kovanaze|tetracaine oxymetazoline
20 phentolamine|oraverse
20 cephalexin
20 nystatin
20 clotrimazole troche
20 fluconazole
20 acyclovir
20 valacyclovir
20 triamcinolone paste|kenalog in orabase
20 magic mouthwash
20 pilocarpine
20 cevimeline
20 lidocaine viscous
20 ketorolac
20 naproxen
20 tramadol
20 hydroxyzine
20 promethazine
20 propofol
20 ketamine
20 fentanyl
20 atropine
20 glycopyrrolate
20 tranexamic acid
20 gelfoam|hemostatic agents
20 aminocaproic acid
20 epinephrine retraction cord
20 aluminum chloride
20 calcium hydroxide
20 formocresol
20 ledermix
20 triple antibiotic paste
`},
{q:"Name a cause of tooth loss", cat:"dental", strip:"", list:`
5 gum disease|periodontitis|periodontal disease
5 cavities|tooth decay|caries
8 injury|trauma|getting hit in the mouth
10 extraction|tooth pulled
12 smoking|tobacco
12 aging
15 sports injury
15 fall
15 car accident
15 fight|punch
20 abscess|infection
20 failed root canal
20 cracked tooth|fractured tooth|broken tooth
20 diabetes
20 poor oral hygiene
20 grinding|bruxism
20 meth mouth|methamphetamine
20 sugar|soda
20 dry mouth
20 osteoporosis
20 vitamin c deficiency|scurvy
20 genetics
20 pregnancy
20 bulimia
20 orthodontic extraction
20 impaction
20 crowding
20 cancer treatment|radiation
20 chemotherapy
20 osteonecrosis of the jaw
20 bone loss
20 root resorption
20 ankylosis
20 cysts
20 tumors
20 natural exfoliation|baby teeth falling out
20 hypophosphatasia
20 ectodermal dysplasia
20 papillon lefevre syndrome
20 leukocyte adhesion deficiency
20 langerhans cell histiocytosis
20 neutropenia
20 hiv
20 biting hard objects|ice chewing
20 opening bottles with teeth
`},
{q:"Name an oral hygiene product", cat:"dental", strip:"", list:`
5 toothbrush
5 toothpaste
8 floss|dental floss
8 mouthwash|mouth rinse
10 electric toothbrush
12 water flosser|waterpik
12 listerine
15 floss picks
15 interdental brush|proxabrush
15 tongue scraper
20 whitening strips|crest whitestrips
20 sensodyne|sensitivity toothpaste
20 fluoride toothpaste
20 fluoride rinse|act
20 chlorhexidine|peridex
20 sonicare
20 oral b
20 crest
20 colgate
20 tom's of maine
20 hello toothpaste
20 floss threader
20 super floss
20 dental tape
20 soft picks|gum soft picks
20 rubber tip stimulator
20 end tuft brush
20 orthodontic toothbrush
20 denture brush
20 denture cleaner|polident|efferdent
20 denture adhesive|fixodent
20 night guard
20 mouth guard
20 xylitol gum|sugar free gum
20 xylitol mints
20 biotene|dry mouth spray
20 prevident
20 clinpro
20 hydroxyapatite toothpaste
20 charcoal toothpaste
20 baking soda toothpaste
20 oil pulling|coconut oil
20 chewing stick|miswak
20 travel toothbrush
20 uv toothbrush sanitizer
20 toothbrush cover
20 disclosing tablets
20 children's toothpaste
20 finger brush
20 teething gel
20 whitening pen
20 led whitening kit
20 dental mirror
20 dental pick|plaque scraper
`},
{q:"Name a muscle of the head or neck", cat:"dental", strip:"muscle", list:`
5 masseter
8 temporalis
10 sternocleidomastoid|scm
10 trapezius
12 tongue
15 orbicularis oris
15 orbicularis oculi
15 buccinator
20 lateral pterygoid
20 medial pterygoid
20 frontalis
20 platysma
20 zygomaticus major
20 zygomaticus minor
20 digastric
20 mylohyoid
20 geniohyoid
20 stylohyoid
20 genioglossus
20 hyoglossus
20 styloglossus
20 palatoglossus
20 levator veli palatini
20 tensor veli palatini
20 musculus uvulae
20 palatopharyngeus
20 superior constrictor
20 middle constrictor
20 inferior constrictor
20 stylopharyngeus
20 salpingopharyngeus
20 risorius
20 depressor anguli oris
20 depressor labii inferioris
20 levator labii superioris
20 levator anguli oris
20 mentalis
20 nasalis
20 procerus
20 corrugator supercilii
20 occipitalis
20 temporoparietalis
20 auricular muscles
20 scalenes
20 splenius capitis
20 levator scapulae
20 sternohyoid
20 sternothyroid
20 thyrohyoid
20 omohyoid
20 cricothyroid
20 posterior cricoarytenoid
20 lateral cricoarytenoid
20 thyroarytenoid
20 vocalis
20 longus colli
20 longus capitis
20 rectus capitis
20 obliquus capitis
20 superior rectus
20 lateral rectus
20 levator palpebrae superioris
20 stapedius
20 tensor tympani
`},
{q:"Name a bone or landmark of the skull", cat:"dental", strip:"bone", list:`
5 mandible|jaw|jawbone
5 maxilla|upper jaw
8 frontal
8 parietal
10 temporal
10 occipital
12 nasal
12 zygomatic|cheekbone
15 sphenoid
15 ethmoid
20 vomer
20 lacrimal
20 palatine
20 inferior nasal concha
20 hyoid
20 condyle|mandibular condyle
20 coronoid process
20 ramus
20 angle of the mandible
20 mental foramen
20 mandibular foramen
20 mastoid process
20 styloid process
20 foramen magnum
20 sella turcica
20 orbit
20 nasal septum
20 hard palate
20 alveolar process
20 maxillary sinus
20 frontal sinus
20 sphenoid sinus
20 ethmoid air cells
20 zygomatic arch
20 external occipital protuberance
20 sutures|coronal suture
20 sagittal suture
20 lambdoid suture
20 squamous suture
20 fontanelle
20 pterion
20 bregma
20 lambda
20 nasion
20 glabella
20 inion
20 gnathion
20 menton
20 pogonion
20 infraorbital foramen
20 supraorbital foramen
20 incisive foramen
20 greater palatine foramen
20 foramen ovale
20 foramen rotundum
20 foramen spinosum
20 jugular foramen
20 carotid canal
20 internal acoustic meatus
20 external acoustic meatus
20 crista galli
20 cribriform plate
20 pterygoid plates
20 hamulus
20 articular eminence
20 glenoid fossa|mandibular fossa
20 genial tubercles
20 mylohyoid line
20 lingula
20 external oblique ridge
20 internal oblique ridge
20 canine eminence
20 maxillary tuberosity
20 anterior nasal spine
20 clivus
`},
{q:"Name a nerve or nerve block used in dentistry", cat:"dental", strip:"nerve block", list:`
5 inferior alveolar|ian|ian block
8 trigeminal
10 lingual
12 mental
12 infraorbital
15 posterior superior alveolar|psa
15 middle superior alveolar|msa
15 anterior superior alveolar|asa
15 greater palatine
15 nasopalatine
20 long buccal|buccal
20 incisive
20 gow gates
20 vazirani akinosi|akinosi
20 maxillary
20 mandibular
20 ophthalmic
20 facial
20 chorda tympani
20 mylohyoid
20 auriculotemporal
20 amsa|anterior middle superior alveolar
20 p asa|palatal anterior superior alveolar
20 periodontal ligament injection|pdl injection|intraligamentary
20 intraosseous
20 intrapulpal
20 infiltration|supraperiosteal
20 v2 block
20 v3 block
20 lesser palatine
20 hypoglossal
20 glossopharyngeal
20 sphenopalatine ganglion
20 otic ganglion
20 submandibular ganglion
20 pterygopalatine ganglion
20 nerve to masseter
20 deep temporal
20 inferior alveolar canal|mandibular canal
`},
{q:"Name a periodontal term or condition", cat:"dental", strip:"", list:`
5 gingivitis
5 periodontitis
8 plaque
8 tartar|calculus
10 pocket|periodontal pocket
10 bleeding gums|bleeding on probing|bop
12 recession|gum recession
12 bone loss
15 mobility|loose teeth
15 attachment loss|clinical attachment loss|cal
15 probing depth
20 furcation involvement
20 scaling and root planing|srp
20 biofilm
20 inflammation
20 abscess|periodontal abscess
20 pericoronitis
20 trench mouth|nug|anug|necrotizing gingivitis
20 necrotizing periodontitis
20 gingival hyperplasia|gingival overgrowth
20 pregnancy gingivitis
20 desquamative gingivitis
20 drug induced gingival enlargement
20 stage i|stage ii|stage iii|stage iv|staging
20 grade a|grade b|grade c|grading
20 aggressive periodontitis
20 chronic periodontitis
20 peri implantitis
20 peri implant mucositis
20 gum graft|connective tissue graft|free gingival graft
20 flap surgery
20 guided tissue regeneration|gtr
20 bone graft
20 crown lengthening
20 frenectomy
20 occlusal trauma
20 fremitus
20 mucogingival defect
20 keratinized tissue
20 biologic width|supracrestal tissue attachment
20 junctional epithelium
20 sulcular epithelium
20 periodontal ligament
20 cementum
20 alveolar bone
20 porphyromonas gingivalis|p gingivalis
20 red complex
20 aggregatibacter|actinomycetemcomitans
20 tannerella forsythia
20 treponema denticola
20 perio maintenance
20 local antibiotics|arestin
20 laser therapy|lanap
20 pinhole surgical technique
20 black triangles
20 stillman clefts
20 mccall festoons
`},
{q:"Name a type of denture or dental prosthesis", cat:"dental", strip:"", list:`
5 dentures|full denture|complete denture
5 partial denture|partial
8 bridge
8 crown
10 implant|dental implant
12 flipper
15 implant supported denture|snap on denture|overdenture
15 all on 4|all on four
20 immediate denture
20 conventional denture
20 cast partial|cast metal partial
20 acrylic partial
20 flexible partial|valplast
20 maryland bridge|resin bonded bridge
20 cantilever bridge
20 implant bridge
20 fixed hybrid denture|hybrid
20 zirconia bridge
20 veneers
20 inlay
20 onlay
20 implant crown
20 abutment
20 post and core
20 obturator
20 night guard
20 sports guard
20 snore guard|mandibular advancement device
20 essix
20 interim prosthesis|temporary
20 economy denture
20 premium denture
20 digital denture
20 3d printed denture
20 bar retained overdenture
20 locator attachments
20 ball attachment
20 telescopic denture
20 precision attachment
20 nesbit
20 stayplate
20 maxillofacial prosthesis
20 palatal lift prosthesis
20 speech bulb
20 ocular prosthesis
20 nasal prosthesis
20 auricular prosthesis
20 zygomatic implants
20 mini implants
20 subperiosteal implant
20 pterygoid implants
`},
{q:"Name a habit that harms teeth", cat:"dental", strip:"", list:`
5 grinding|bruxism|clenching
5 smoking|cigarettes
8 drinking soda|soda
8 eating candy|sugar|sweets
10 chewing ice|ice chewing
12 nail biting
12 not brushing|skipping brushing
15 not flossing
15 thumb sucking
15 opening bottles with teeth|using teeth as tools
15 brushing too hard
20 chewing tobacco|dip|snuff
20 vaping
20 drinking coffee
20 drinking wine|red wine
20 energy drinks
20 sports drinks
20 juice
20 constant snacking|grazing
20 sipping sugary drinks
20 baby bottle at bedtime
20 pacifier dipped in honey
20 lemon sucking|sucking lemons
20 chewing pens|pencil chewing
20 tongue piercing|oral piercings
20 lip piercing
20 mouth breathing
20 tongue thrusting
20 biting cheeks
20 hard candy
20 sticky foods|gummies
20 chips|starchy snacks
20 vomiting|bulimia
20 acid reflux
20 meth use|meth mouth
20 cocaine rubbing
20 excessive whitening
20 diy braces
20 skipping dental visits
20 using toothpicks aggressively
20 playing contact sports without a mouthguard
20 brushing right after acidic food
20 apple cider vinegar shots
20 chewing on bobby pins
20 grinding while sleeping
20 swimming pool chlorine|frequent swimming
20 dry mouth from medications
20 betel nut chewing|areca nut
20 mouthwash with alcohol
20 charcoal toothpaste
`},
{q:"Name a food or drink that stains teeth", cat:"dental", strip:"", list:`
5 coffee
5 tea|black tea
8 red wine|wine
8 soda|cola
10 berries|blueberries
10 curry|turmeric
12 tomato sauce|marinara
12 soy sauce
15 balsamic vinegar
15 beets
15 blackberries
15 cherries
15 pomegranate
15 grape juice
20 sports drinks|gatorade
20 energy drinks
20 candy|hard candy
20 popsicles
20 dark chocolate
20 cranberry juice
20 blueberry pie
20 green tea
20 matcha
20 tobacco|nicotine
20 white wine
20 citrus|lemons|oranges
20 kombucha
20 acai
20 sauces|barbecue sauce
20 food coloring
20 sriracha
20 mustard
20 paprika
20 saffron
20 kool aid
20 red velvet cake
20 blue raspberry
20 sangria
20 tamarind
20 mole sauce
20 spinach
20 kale
20 dark beer|stout
`},
{q:"Name a dental emergency", cat:"dental", strip:"", list:`
5 toothache|severe toothache
5 knocked out tooth|avulsed tooth|avulsion
8 broken tooth|cracked tooth|chipped tooth
8 abscess|dental abscess
10 lost filling
10 lost crown
12 swelling|facial swelling
12 bleeding after extraction
15 dry socket
15 broken braces|broken wire|poking wire
15 jaw fracture|broken jaw
15 dislocated jaw
20 object stuck between teeth
20 cut lip|cut tongue|soft tissue injury
20 loose tooth|luxated tooth
20 intruded tooth|intrusion
20 extruded tooth|extrusion
20 lateral luxation
20 root fracture
20 ludwig angina
20 cellulitis
20 pericoronitis
20 broken denture
20 broken bridge
20 implant failure
20 trismus|can't open mouth
20 uncontrolled bleeding
20 allergic reaction to anesthetic
20 swallowed crown
20 aspirated object
20 nerve damage|paresthesia
20 sinus perforation|oroantral communication
20 orthodontic emergency
20 bitten tongue
20 burn in mouth
20 pulp exposure
`},
{q:"Name an oral lesion or growth", cat:"dental", strip:"", list:`
5 canker sore|aphthous ulcer
5 cold sore|herpes labialis
8 leukoplakia
10 oral cancer|squamous cell carcinoma
12 thrush|candidiasis
12 mucocele
15 fibroma|irritation fibroma
15 torus|tori
15 erythroplakia
20 lichen planus
20 geographic tongue
20 hairy leukoplakia
20 pyogenic granuloma
20 ranula
20 papilloma|squamous papilloma
20 hemangioma
20 lipoma
20 epulis
20 peripheral giant cell granuloma
20 peripheral ossifying fibroma
20 traumatic ulcer
20 linea alba
20 fordyce granules
20 amalgam tattoo
20 melanotic macule
20 nevus
20 melanoma
20 kaposi sarcoma
20 verruca vulgaris|wart
20 condyloma
20 hand foot and mouth lesions
20 herpangina
20 koplik spots
20 petechiae
20 hematoma
20 burn|pizza burn
20 nicotine stomatitis|smokers palate
20 denture stomatitis
20 epulis fissuratum
20 angular cheilitis
20 actinic cheilitis
20 necrotizing sialometaplasia
20 mucous membrane pemphigoid
20 pemphigus
20 erythema multiforme
20 sialolith
20 granular cell tumor
20 neurofibroma
20 schwannoma
20 pleomorphic adenoma
20 mucoepidermoid carcinoma
20 adenoid cystic carcinoma
20 ameloblastoma
20 odontoma
20 keratocyst
20 dentigerous cyst
20 eruption cyst
20 bohn nodules
20 epstein pearls
20 lymphoepithelial cyst
20 verrucous carcinoma
20 oral submucous fibrosis
20 median rhomboid glossitis
20 black hairy tongue
`},
{q:"Name a systemic disease with oral signs", cat:"dental", strip:"", list:`
5 diabetes
8 hiv|aids
8 vitamin c deficiency|scurvy
10 leukemia
12 crohns disease
12 celiac disease
12 sjogren syndrome
15 lupus
15 anemia
15 measles
15 syphilis
15 herpes
20 b12 deficiency
20 iron deficiency
20 addison disease
20 peutz jeghers syndrome
20 behcet disease
20 pemphigus
20 lichen planus
20 bulimia|eating disorders
20 gerd|acid reflux
20 kawasaki disease
20 scarlet fever
20 hand foot and mouth disease
20 hyperparathyroidism
20 hypothyroidism
20 acromegaly
20 cushing syndrome
20 pregnancy
20 sickle cell disease
20 thrombocytopenia
20 hemophilia
20 neutropenia
20 kidney failure|uremia
20 liver disease
20 amyloidosis
20 sarcoidosis
20 tuberculosis
20 histoplasmosis
20 cancer|oral cancer
20 multiple myeloma
20 scleroderma
20 osteoporosis
20 paget disease of bone
20 ectodermal dysplasia
20 down syndrome
20 cleidocranial dysplasia
20 gardner syndrome
20 osteogenesis imperfecta
20 congenital syphilis|hutchinson teeth
20 hpv
20 mononucleosis|ebv
20 gonorrhea
20 cyclic neutropenia
20 granulomatosis with polyangiitis|strawberry gingivitis
20 neurofibromatosis
20 tuberous sclerosis
20 sturge weber
20 hereditary hemorrhagic telangiectasia
20 plummer vinson syndrome
20 pellagra
20 lead poisoning|burton line
20 mercury poisoning
20 bismuth poisoning
20 porphyria
20 alkaptonuria
`}
);

/* ---- CLINICAL (PA / NP / physician expansion) ---- */
RAW.push(
{q:"Name a cause of fever", cat:"clinical", strip:"", list:`
5 flu|influenza
5 infection
8 covid|covid 19
8 common cold|viral infection|virus
10 urinary tract infection|uti
10 pneumonia
12 strep throat
12 ear infection|otitis media
15 sinusitis
15 cellulitis
15 appendicitis
15 meningitis
15 sepsis
20 vaccines|vaccine reaction
20 teething
20 heat stroke|heat exhaustion
20 drug reaction|drug fever
20 tuberculosis|tb
20 mononucleosis|mono
20 pyelonephritis
20 endocarditis
20 osteomyelitis
20 abscess
20 cholecystitis
20 diverticulitis
20 hiv
20 malaria
20 dengue
20 lyme disease
20 rheumatoid arthritis
20 lupus
20 kawasaki disease
20 still disease
20 leukemia
20 lymphoma
20 cancer
20 blood clot|dvt|pulmonary embolism
20 transfusion reaction
20 pancreatitis
20 inflammatory bowel disease
20 thyroid storm
20 neuroleptic malignant syndrome
20 serotonin syndrome
20 malignant hyperthermia
20 sarcoidosis
20 vasculitis
20 giant cell arteritis
20 gout
20 typhoid
20 brucellosis
20 q fever
20 cat scratch disease
20 rocky mountain spotted fever
20 familial mediterranean fever
20 pfapa
20 factitious fever
20 stroke
20 hypothalamic dysfunction
20 post operative fever|atelectasis
20 alcohol withdrawal
20 cocaine
20 amphetamines
20 anticholinergic toxicity
20 salicylate toxicity
`},
{q:"Name a cause of chronic cough", cat:"clinical", strip:"", list:`
5 smoking
5 asthma
8 acid reflux|gerd
8 postnasal drip|upper airway cough syndrome
10 copd|chronic bronchitis
10 ace inhibitors|lisinopril
12 allergies
12 lung cancer
15 tuberculosis|tb
15 bronchiectasis
15 pertussis|whooping cough
15 post viral cough|post infectious cough
20 heart failure
20 interstitial lung disease|pulmonary fibrosis
20 sarcoidosis
20 cystic fibrosis
20 vaping
20 eosinophilic bronchitis
20 aspiration
20 foreign body
20 vocal cord dysfunction
20 habit cough|psychogenic cough
20 environmental irritants|pollution
20 occupational exposure
20 mycobacterium avium complex
20 fungal infection
20 laryngopharyngeal reflux
20 obstructive sleep apnea
20 tracheomalacia
20 enlarged tonsils
20 ear wax|arnold reflex
20 sitagliptin
20 mycoplasma
20 chlamydia pneumoniae
20 pulmonary embolism
20 lymphoma
20 mesothelioma
20 hypersensitivity pneumonitis
20 churg strauss
20 relapsing polychondritis
20 tourette syndrome
20 somatic cough syndrome
`},
{q:"Name a cause of joint pain", cat:"clinical", strip:"", list:`
5 arthritis|osteoarthritis
5 injury|sprain
8 rheumatoid arthritis
8 gout
10 bursitis
10 tendinitis
12 lupus
12 overuse
15 lyme disease
15 psoriatic arthritis
15 fibromyalgia
15 pseudogout|cpdd
20 septic arthritis
20 ankylosing spondylitis
20 reactive arthritis
20 viral infection
20 meniscus tear
20 ligament tear
20 dislocation
20 fracture
20 obesity
20 aging
20 hypermobility|ehlers danlos
20 juvenile idiopathic arthritis
20 sarcoidosis
20 hemochromatosis
20 hemophilia
20 sickle cell
20 osteonecrosis|avascular necrosis
20 polymyalgia rheumatica
20 sjogren syndrome
20 scleroderma
20 vasculitis
20 rheumatic fever
20 hepatitis
20 parvovirus
20 gonococcal arthritis
20 hypothyroidism
20 statins
20 fluoroquinolones
20 aromatase inhibitors
20 leukemia
20 bone cancer
20 growing pains
20 osgood schlatter
20 slipped capital femoral epiphysis
20 legg calve perthes
20 chondromalacia patella
20 baker cyst
20 plica syndrome
20 charcot joint
20 villonodular synovitis
20 behcet disease
20 whipple disease
20 familial mediterranean fever
20 inflammatory bowel disease arthritis
20 pigmented villonodular synovitis
`},
{q:"Name a cause of fatigue", cat:"clinical", strip:"", list:`
5 lack of sleep|sleep deprivation
5 anemia
8 depression
8 stress
10 hypothyroidism|thyroid
10 diabetes
12 sleep apnea
12 vitamin d deficiency
12 dehydration
15 infection
15 mononucleosis|mono
15 covid|long covid
15 chronic fatigue syndrome|me cfs
15 pregnancy
15 poor diet
20 b12 deficiency
20 iron deficiency
20 heart failure
20 kidney disease
20 liver disease
20 cancer
20 medications
20 alcohol
20 caffeine withdrawal
20 overtraining
20 fibromyalgia
20 lupus
20 rheumatoid arthritis
20 multiple sclerosis
20 parkinsons
20 copd
20 anxiety
20 insomnia
20 restless legs
20 narcolepsy
20 shift work
20 obesity
20 hiv
20 hepatitis
20 tuberculosis
20 lyme disease
20 addison disease|adrenal insufficiency
20 low testosterone
20 menopause
20 celiac disease
20 hypercalcemia
20 hyponatremia
20 hypokalemia
20 hypoglycemia
20 pots
20 myasthenia gravis
20 sarcoidosis
20 heart disease
20 grief
20 burnout
20 boredom
20 jet lag
20 chemotherapy
20 radiation
20 beta blockers
20 antihistamines
20 opioids
20 benzodiazepines
`},
{q:"Name a cause of dizziness or vertigo", cat:"clinical", strip:"", list:`
5 bppv|benign paroxysmal positional vertigo
5 dehydration
8 low blood pressure|orthostatic hypotension
8 inner ear infection|labyrinthitis
10 vestibular neuritis
10 menieres disease
12 low blood sugar|hypoglycemia
12 anemia
15 migraine|vestibular migraine
15 medications
15 stroke
15 anxiety|panic attack
15 motion sickness
20 arrhythmia
20 heart attack
20 aortic stenosis
20 alcohol
20 concussion|head injury
20 ear wax
20 acoustic neuroma
20 multiple sclerosis
20 perilymph fistula
20 superior canal dehiscence
20 mal de debarquement
20 vertebrobasilar insufficiency
20 tia
20 hyperventilation
20 heat exhaustion
20 carbon monoxide
20 pregnancy
20 pots
20 vasovagal syncope
20 carotid sinus hypersensitivity
20 cervicogenic dizziness
20 peripheral neuropathy
20 parkinsons
20 cerebellar tumor
20 persistent postural perceptual dizziness|pppd
20 aminoglycosides
20 anticonvulsants
20 blood pressure medications
`},
{q:"Name a cause of low back pain", cat:"clinical", strip:"", list:`
5 muscle strain|pulled muscle
5 herniated disc|slipped disc|bulging disc
8 sciatica
8 arthritis|osteoarthritis
10 poor posture
10 lifting injury
12 spinal stenosis
12 degenerative disc disease
15 kidney stones
15 kidney infection|pyelonephritis
15 obesity
15 pregnancy
20 spondylolisthesis
20 spondylolysis
20 compression fracture
20 osteoporosis
20 ankylosing spondylitis
20 scoliosis
20 sacroiliac joint dysfunction
20 piriformis syndrome
20 cauda equina syndrome
20 cancer|metastasis
20 multiple myeloma
20 epidural abscess
20 osteomyelitis|discitis
20 aortic aneurysm|aaa
20 endometriosis
20 fibroids
20 prostatitis
20 pancreatitis
20 shingles
20 fibromyalgia
20 facet joint syndrome
20 sedentary lifestyle
20 smoking
20 depression
20 tuberculosis of the spine|potts disease
20 trauma
20 car accident
20 sports injury
20 tethered cord
20 schmorl nodes
`},
{q:"Name a cause of leg swelling", cat:"clinical", strip:"", list:`
5 heart failure
5 dvt|blood clot|deep vein thrombosis
8 venous insufficiency
8 pregnancy
10 kidney disease
10 liver disease|cirrhosis
12 cellulitis
12 injury|sprain
15 medications
15 amlodipine|calcium channel blockers
15 lymphedema
15 obesity
15 standing too long|prolonged standing
20 long flights|prolonged sitting
20 varicose veins
20 nephrotic syndrome
20 hypothyroidism|myxedema
20 malnutrition|low albumin
20 baker cyst rupture
20 compartment syndrome
20 gout
20 arthritis
20 preeclampsia
20 heat
20 high salt diet
20 nsaids
20 steroids
20 estrogen
20 pioglitazone
20 gabapentin
20 pregabalin
20 pelvic tumor
20 lipedema
20 filariasis
20 may thurner syndrome
20 post thrombotic syndrome
20 insect bite
20 allergic reaction
20 angioedema
20 restrictive cardiomyopathy
20 constrictive pericarditis
20 pulmonary hypertension
20 erythema nodosum
20 necrotizing fasciitis
`},
{q:"Name a physical exam sign named after a person", cat:"clinical", strip:"sign", list:`
5 babinski
8 murphy|murphys
10 mcburney|mcburneys point
12 kernig
12 brudzinski
15 homans
15 chvostek
15 trousseau
15 romberg
20 rovsing
20 cullen
20 grey turner
20 kehr
20 battle
20 tinel
20 phalen
20 finkelstein
20 lachman
20 mcmurray
20 thompson
20 trendelenburg
20 ortolani
20 barlow
20 hoffmann
20 kussmaul
20 cheyne stokes
20 virchow node
20 sister mary joseph
20 levine
20 beck triad
20 courvoisier
20 corrigan pulse
20 de musset
20 quincke
20 duroziez
20 traube
20 austin flint murmur
20 osler nodes
20 janeway lesions
20 roth spots
20 koplik spots
20 nikolsky
20 auspitz
20 koebner
20 darier
20 gottron papules
20 heliotrope
20 hutchinson
20 marcus gunn
20 argyll robertson
20 horner
20 lhermitte
20 uhthoff
20 spurling
20 lasegue|straight leg raise
20 patrick|faber
20 hawkins
20 neer
20 speed
20 yergason
20 apley
20 ober
20 thomas
20 allen
20 adson
20 froment
20 wartenberg
20 gower
20 westermark
20 hampton hump
20 kerley b lines
20 hamman crunch
20 carnett
20 blumberg
20 markle|heel drop
20 dance
20 boas
20 chadwick
20 goodell
20 hegar
20 mcroberts
20 leopold maneuvers
20 frank sign|earlobe crease
`},
{q:"Name a common childhood illness", cat:"clinical", strip:"", list:`
5 ear infection|otitis media
5 common cold
8 strep throat
8 chickenpox
10 flu|influenza
10 hand foot and mouth disease
12 rsv|bronchiolitis
12 croup
15 pink eye|conjunctivitis
15 stomach bug|gastroenteritis
15 fifth disease
15 roseola
15 asthma
15 eczema
20 measles
20 mumps
20 rubella
20 whooping cough|pertussis
20 scarlet fever
20 impetigo
20 head lice|lice
20 pinworms
20 diaper rash
20 thrush
20 colic
20 teething
20 constipation
20 uti
20 pneumonia
20 sinusitis
20 tonsillitis
20 mono|mononucleosis
20 kawasaki disease
20 hsp|henoch schonlein purpura
20 molluscum contagiosum
20 ringworm
20 scabies
20 cradle cap
20 febrile seizure
20 allergies
20 adhd
20 autism
20 jaundice
20 reflux
20 intussusception
20 pyloric stenosis
20 appendicitis
20 growing pains
20 nursemaid elbow
20 swimmers ear
20 herpangina
20 sixth disease
20 covid
20 mis c
20 type 1 diabetes
20 rotavirus
20 norovirus
20 tetanus
20 polio
`},
{q:"Name a medication that needs regular lab monitoring", cat:"clinical", strip:"", list:`
5 warfarin|coumadin
8 lithium
10 methotrexate
10 digoxin
12 vancomycin
12 amiodarone
15 clozapine
15 phenytoin|dilantin
15 valproate|depakote
15 carbamazepine|tegretol
15 levothyroxine|synthroid
15 statins
20 metformin
20 insulin
20 ace inhibitors
20 spironolactone
20 diuretics|furosemide
20 aminoglycosides|gentamicin
20 tacrolimus
20 cyclosporine
20 sirolimus
20 mycophenolate
20 azathioprine
20 leflunomide
20 hydroxychloroquine
20 isotretinoin|accutane
20 heparin
20 enoxaparin
20 allopurinol
20 colchicine
20 theophylline
20 chemotherapy
20 tb drugs|isoniazid
20 testosterone
20 estrogen
20 antipsychotics
20 sglt2 inhibitors
20 nsaids
20 sulfasalazine
20 biologics
20 tnf inhibitors
20 jak inhibitors
20 ketoconazole
20 terbinafine
20 nitrofurantoin
20 bactrim
20 linezolid
20 voriconazole
20 amphotericin
20 iron
20 vitamin d
20 b12
20 propylthiouracil|ptu
20 methimazole
20 dofetilide
20 sotalol
20 procainamide
20 mexiletine
20 felbamate
20 vigabatrin
20 deferasirox
20 bosentan
20 ambrisentan
20 natalizumab
20 alemtuzumab
20 teriflunomide
20 fingolimod
`}
);

/* ---- DENTAL (extra) ---- */
RAW.push(
{q:"Name a reason people visit the dentist", cat:"dental", strip:"", list:`
5 cleaning|checkup|six month checkup
5 toothache|tooth pain
8 cavity|filling
10 whitening
10 braces|orthodontics
12 wisdom teeth
12 broken tooth|chipped tooth
15 root canal
15 crown
15 bleeding gums
15 bad breath
20 sensitive teeth
20 x rays
20 implant consultation
20 dentures
20 veneers
20 invisalign
20 night guard|grinding
20 jaw pain|tmj
20 swelling
20 abscess
20 knocked out tooth
20 lost filling
20 lost crown
20 gum disease
20 deep cleaning
20 oral cancer screening
20 mouth sore
20 dry mouth
20 sealants
20 fluoride
20 baby teeth|first dental visit
20 loose tooth
20 snoring|sleep apnea appliance
20 pre surgery clearance
20 bonding
20 gum graft
20 cosmetic consult
20 second opinion
20 emergency
20 sports mouthguard
20 bridge
20 extraction
20 denture adjustment
20 retainer
20 teeth grinding
20 cracked filling
20 stained teeth
20 gap between teeth
20 crooked teeth
20 overbite
20 tongue tie
20 lip tie
20 dental anxiety|sedation
20 school dental form
`},
{q:"Name a symptom of a TMJ disorder", cat:"dental", strip:"", list:`
5 jaw pain
8 clicking|popping
10 headache
10 earache|ear pain
12 locked jaw|lockjaw
12 difficulty chewing
15 jaw stiffness
15 facial pain
15 grinding|bruxism
20 limited opening|trismus
20 neck pain
20 shoulder pain
20 tinnitus|ringing in ears
20 dizziness
20 jaw fatigue
20 tooth pain
20 tooth wear
20 bite feels off|malocclusion
20 crepitus|grating
20 jaw deviation
20 muscle spasm
20 temple pain
20 swelling
20 ear fullness
20 migraine
20 sleep problems
20 sensitive teeth
20 hearing changes
20 tender masseter
20 morning jaw soreness
20 dislocation
20 numbness
20 trouble yawning
`},
{q:"Name a dental charting term or tooth surface", cat:"dental", strip:"", list:`
5 mesial
5 distal
8 occlusal
8 buccal
10 lingual
12 facial
12 labial
15 incisal
15 palatal
20 proximal
20 cervical
20 apical
20 coronal
20 cusp
20 universal numbering system
20 fdi|iso numbering
20 palmer notation
20 quadrant
20 sextant
20 missing tooth
20 class i
20 class ii
20 class iii
20 class iv
20 class v
20 class vi
20 mod
20 do
20 mo
20 bop
20 pocket depth
20 recession
20 mobility
20 furcation
20 caries
20 existing restoration
20 watch|monitor
20 impacted
20 unerupted
20 supernumerary
20 diastema
20 rotated
20 drifted
20 extrusion
20 attrition
20 abrasion
20 erosion
20 abfraction
20 sealant
20 rct
20 pfm crown
20 implant
20 pontic
20 abutment
20 retainer
20 periapical lesion
20 overhang
20 open contact
20 primary dentition
20 mixed dentition
20 permanent dentition
`},
{q:"Name an endodontic term", cat:"dental", strip:"", list:`
5 root canal
5 pulp
8 nerve
10 abscess
10 pulpitis
12 irreversible pulpitis
12 reversible pulpitis
15 necrotic pulp|necrosis
15 gutta percha
15 files
20 access opening
20 working length
20 apex locator
20 obturation
20 sodium hypochlorite|irrigation
20 apical periodontitis
20 periapical abscess
20 cold test
20 percussion test
20 palpation test
20 electric pulp test
20 sinus tract|fistula
20 apicoectomy
20 retreatment
20 pulpotomy
20 pulpectomy
20 pulp capping
20 mta
20 calcium hydroxide
20 canal
20 mb2
20 isthmus
20 apical foramen
20 apical constriction
20 lateral canal
20 accessory canal
20 cleaning and shaping
20 crown down
20 step back
20 rotary
20 reciprocating
20 glide path
20 patency
20 smear layer
20 edta
20 chlorhexidine
20 sealer
20 lateral condensation
20 warm vertical compaction
20 single cone
20 post space
20 coronal seal
20 internal resorption
20 external resorption
20 cracked tooth
20 vertical root fracture
20 separated instrument|broken file
20 ledge
20 perforation
20 transportation
20 flare up
20 phoenix abscess
20 condensing osteitis
20 regenerative endodontics
20 apexification
20 apexogenesis
20 cbct
20 microscope
20 rubber dam
`},
{q:"Name a sign of a dental infection", cat:"dental", strip:"", list:`
5 toothache|tooth pain
5 swelling
8 fever
8 pus
10 bad taste
10 bad breath
12 pain when chewing
12 sensitivity to hot
15 sensitivity to cold
15 red gums
15 bump on the gum|gum boil|pimple on gum|parulis
20 swollen lymph nodes
20 facial swelling
20 jaw swelling
20 throbbing pain
20 ear pain
20 headache
20 loose tooth
20 dark tooth|discolored tooth
20 trouble swallowing
20 trouble breathing
20 trouble opening mouth|trismus
20 fatigue
20 malaise
20 sinus pain
20 fistula|sinus tract
20 periapical radiolucency
20 bone loss on x ray
20 tenderness to percussion
20 elevated white count
20 cellulitis
20 ludwig angina
20 cavernous sinus thrombosis
20 sepsis
20 abscess
`}
);

/* ---- NURSING top-up ---- */
RAW.push(
{q:"Name a nursing theorist", cat:"nursing", strip:"", list:`
5 florence nightingale|nightingale
10 jean watson|watson
12 dorothea orem|orem
15 virginia henderson|henderson
15 patricia benner|benner
20 hildegard peplau|peplau
20 callista roy|roy
20 madeleine leininger|leininger
20 betty neuman|neuman
20 imogene king|king
20 martha rogers|rogers
20 nola pender|pender
20 faye abdellah|abdellah
20 ida jean orlando|orlando
20 joyce travelbee|travelbee
20 lydia hall|hall
20 myra levine|levine
20 dorothy johnson|johnson
20 rosemarie parse|parse
20 margaret newman|newman
20 kolcaba|katharine kolcaba
20 merle mishel|mishel
20 ramona mercer|mercer
20 kathryn barnard|barnard
20 anne boykin|boykin
20 ernestine wiedenbach|wiedenbach
20 josephine paterson|paterson
20 helen erickson|erickson
20 afaf meleis|meleis
20 pamela reed|reed
20 kristen swanson|swanson
20 cheryl beck|beck
20 phil barker|barker
`},
{q:"Name a sign of a blood transfusion reaction", cat:"nursing", strip:"", list:`
5 fever
5 chills
8 hives|itching|rash
10 shortness of breath
10 back pain|flank pain
12 low blood pressure|hypotension
12 tachycardia|fast heart rate
15 chest pain
15 anxiety|sense of doom
15 dark urine|red urine|hemoglobinuria
20 nausea
20 vomiting
20 flushing
20 wheezing
20 anaphylaxis
20 hypoxia
20 pulmonary edema|crackles
20 hypertension
20 jugular venous distension
20 headache
20 pain at iv site
20 jaundice
20 bleeding|oozing
20 dic
20 kidney failure|oliguria
20 trali
20 taco|circulatory overload
20 hemolytic reaction
20 febrile non hemolytic reaction
20 delayed hemolytic reaction
20 sepsis|bacterial contamination
20 hypocalcemia|citrate toxicity
20 hyperkalemia
20 hypothermia
20 gvhd
20 iron overload
`},
{q:"Name a complication of an IV", cat:"nursing", strip:"", list:`
5 infiltration
5 phlebitis
8 infection
10 extravasation
10 hematoma|bruising
12 occlusion|clotted line
15 air embolism
15 thrombophlebitis
15 cellulitis
20 bloodstream infection|clabsi|sepsis
20 fluid overload
20 dislodgement
20 catheter fracture
20 nerve injury
20 arterial puncture
20 vasovagal reaction
20 allergic reaction
20 speed shock
20 catheter embolism
20 pain
20 leaking
20 tissue necrosis
20 compartment syndrome
20 dvt
20 pneumothorax
20 hemothorax
20 arrhythmia
20 cardiac tamponade
20 catheter migration
20 pinch off syndrome
`},
{q:"Name a right of medication administration", cat:"nursing", strip:"right", list:`
5 right patient
5 right drug|right medication
5 right dose
8 right route
8 right time
12 right documentation
15 right reason
15 right response
20 right to refuse
20 right education
20 right assessment
20 right evaluation
20 right form
20 right frequency
20 right site
20 right history
20 right approach
`},
{q:"Name a postpartum complication", cat:"nursing", strip:"", list:`
5 postpartum hemorrhage|pph
5 postpartum depression
8 infection|endometritis
10 mastitis
10 preeclampsia|postpartum preeclampsia
12 blood clot|dvt
12 uterine atony
15 retained placenta
15 perineal tear|laceration
15 urinary retention
15 urinary incontinence
20 hemorrhoids
20 constipation
20 postpartum psychosis
20 postpartum anxiety
20 baby blues
20 wound infection|c section infection
20 pulmonary embolism
20 eclampsia
20 hellp syndrome
20 cardiomyopathy|peripartum cardiomyopathy
20 thyroiditis|postpartum thyroiditis
20 sheehan syndrome
20 uterine inversion
20 hematoma|vulvar hematoma
20 breast engorgement
20 clogged duct
20 nipple pain|cracked nipples
20 diastasis recti
20 pelvic floor dysfunction
20 fistula
20 anemia
20 hair loss
20 ptsd|birth trauma
20 spinal headache
20 sepsis
20 subinvolution
20 amniotic fluid embolism
`},
{q:"Name a sign of respiratory distress", cat:"nursing", strip:"", list:`
5 shortness of breath|dyspnea
5 fast breathing|tachypnea
8 low oxygen|hypoxia|low sats
8 wheezing
10 cyanosis|blue lips
10 retractions
12 nasal flaring
12 accessory muscle use
15 grunting
15 tripod position
15 anxiety|restlessness
15 confusion
20 stridor
20 cough
20 head bobbing
20 sweating|diaphoresis
20 tachycardia
20 crackles|rales
20 diminished breath sounds
20 inability to speak in full sentences
20 pursed lip breathing
20 see saw breathing|paradoxical breathing
20 apnea
20 bradypnea
20 lethargy
20 pale skin
20 chest pain
20 high co2|hypercapnia
20 low peak flow
20 drooling
20 barrel chest
20 clubbing
20 orthopnea
20 kussmaul breathing
20 cheyne stokes
`},
{q:"Name a restraint or restraint alternative", cat:"nursing", strip:"", list:`
5 wrist restraints|soft restraints
8 sitter|1 to 1
10 bed alarm
10 mitts|hand mitts
12 vest restraint|posey
15 chemical restraint|sedation
15 four point restraints
15 lap belt
20 bed rails|side rails
20 video monitoring
20 enclosure bed|net bed|posey bed
20 seclusion
20 ankle restraints
20 elbow immobilizers|no nos
20 waist belt
20 geri chair|reclining chair
20 frequent rounding
20 reorientation
20 diversion|activities
20 family at bedside
20 low bed
20 floor mats
20 abdominal binder over lines
20 sleeve over iv
20 de escalation
20 calm environment
20 music therapy
20 pain management
20 toileting schedule
20 restraint chair
20 papoose board
20 mummy wrap|swaddle
20 tab alarm
`},
{q:"Name a nursing job title or role", cat:"nursing", strip:"", list:`
5 registered nurse|rn
5 cna|nursing assistant
8 lpn|lvn
8 nurse practitioner|np
10 charge nurse
10 travel nurse
12 nurse manager
15 crna|nurse anesthetist
15 nurse midwife|cnm
15 school nurse
15 nurse educator
20 clinical nurse specialist|cns
20 house supervisor|nursing supervisor
20 director of nursing|don
20 chief nursing officer|cno
20 float nurse
20 per diem nurse
20 preceptor
20 new grad
20 student nurse
20 patient care tech|pct
20 unit secretary|unit clerk
20 case manager
20 nurse navigator
20 infection preventionist
20 nurse informaticist
20 wound nurse
20 flight nurse
20 forensic nurse
20 legal nurse consultant
20 nurse researcher
20 nurse entrepreneur
20 public health nurse
20 home health nurse
20 hospice nurse
20 telephone triage nurse
20 resource nurse
20 rapid response nurse
20 dnp
20 nurse scientist
20 magnet coordinator
`},
{q:"Name a sign of abuse or neglect", cat:"nursing", strip:"", list:`
5 bruises|unexplained bruising
5 fear of caregiver
8 injuries that don't match the story
8 malnutrition|weight loss
10 poor hygiene
10 withdrawal|withdrawn behavior
12 fractures|multiple fractures
12 burns|cigarette burns
15 delay in seeking care
15 pressure injuries|bedsores
15 dehydration
20 patterned bruises
20 bruises in various stages of healing
20 bite marks
20 genital injuries
20 sexually transmitted infection
20 missed appointments
20 missing medications
20 unpaid bills|financial exploitation
20 caregiver won't leave the room
20 jumpy|hypervigilance
20 regression|bedwetting
20 aggression
20 self harm
20 runaway behavior
20 inappropriate clothing for weather
20 lice|untreated medical problems
20 failure to thrive
20 retinal hemorrhages
20 subdural hematoma
20 spiral fractures
20 rib fractures in infants
20 torn frenulum
20 strangulation marks
20 restraint marks
20 overmedication
20 isolation from family
20 sudden change in will
`},
{q:"Name a postoperative complication", cat:"nursing", strip:"", list:`
5 infection|surgical site infection|wound infection
5 bleeding|hemorrhage
8 blood clot|dvt
8 pneumonia
10 pain
10 nausea|vomiting|ponv
12 atelectasis
12 pulmonary embolism
15 urinary retention
15 ileus
15 fever
15 wound dehiscence
20 evisceration
20 seroma
20 hematoma
20 delirium
20 constipation
20 uti
20 sepsis
20 anastomotic leak
20 fistula
20 adhesions
20 hernia|incisional hernia
20 shock
20 hypotension
20 arrhythmia|afib
20 heart attack
20 stroke
20 acute kidney injury
20 malignant hyperthermia
20 sore throat
20 hypothermia
20 pressure injury
20 compartment syndrome
20 fat embolism
20 c diff
20 nerve injury
20 respiratory depression
20 aspiration
20 laryngospasm
20 anaphylaxis
20 hypoglycemia
20 hyperglycemia
20 electrolyte imbalance
20 post op cognitive dysfunction
`},
{q:"Name a diet order", cat:"nursing", strip:"diet", list:`
5 npo|nothing by mouth
5 clear liquids|clear liquid
8 full liquids|full liquid
8 regular
10 low sodium|2 gram sodium
10 diabetic|carb controlled|consistent carbohydrate
12 cardiac|heart healthy
12 soft|mechanical soft
15 pureed
15 renal
15 low fat
15 high protein
20 gluten free
20 vegetarian
20 vegan
20 kosher
20 halal
20 low fiber|low residue
20 high fiber
20 bland
20 fluid restriction
20 thickened liquids|nectar thick|honey thick
20 dysphagia diet|iddsi
20 ketogenic
20 neutropenic
20 low potassium
20 low phosphorus
20 tube feeding|enteral
20 tpn
20 advance as tolerated
20 ice chips only
20 sips with meds
20 dash
20 low cholesterol
20 lactose free
20 low fodmap
20 allergy diet
20 finger foods
20 calorie count
20 pediatric diet
20 bariatric diet
`},
{q:"Name a sign of high blood sugar", cat:"nursing", strip:"", list:`
5 thirst|polydipsia
5 frequent urination|polyuria
8 blurred vision
8 fatigue
10 headache
10 hunger|polyphagia
12 dry mouth
12 fruity breath
15 nausea|vomiting
15 weight loss
15 confusion
20 kussmaul breathing
20 abdominal pain
20 dehydration
20 dry skin
20 slow healing
20 infections
20 ketones in urine
20 glucose in urine
20 high a1c
20 lethargy
20 coma
20 tachycardia
20 hypotension
20 hyperkalemia
20 metabolic acidosis
20 hhs
20 dka
20 irritability
20 tingling
`}
);

/* ---- DENTAL top-up ---- */
RAW.push(
{q:"Name a dental brand or company", cat:"dental", strip:"", list:`
5 colgate
5 crest
8 oral b
8 sensodyne
10 listerine
12 invisalign|align technology
12 sonicare|philips
15 waterpik
15 aquafresh
15 tom's of maine
15 arm and hammer
20 dentsply sirona|dentsply|sirona
20 henry schein
20 patterson dental
20 straumann
20 nobel biocare
20 zimmer biomet
20 3m oral care|solventum
20 ivoclar
20 kerr
20 gc
20 septodont
20 ultradent
20 hu friedy
20 kavo
20 a dec
20 planmeca
20 carestream
20 biolase
20 glidewell
20 aspen dental
20 heartland dental
20 smile direct club
20 byte
20 candid
20 polident
20 fixodent
20 biotene
20 act
20 closys
20 therabreath
20 hello
20 burst
20 quip
20 cocofloss
20 plackers
20 gum|sunstar
20 parodontax
20 hismile
20 opalescence
20 zoom whitening
20 lumineers
20 clearcorrect
20 itero
20 cerec
20 bisco
20 voco
20 coltene
20 shofu
20 premier dental
`},
{q:"Name a type of dental crown", cat:"dental", strip:"crown", list:`
5 porcelain
5 gold
8 zirconia
8 metal
10 temporary
12 porcelain fused to metal|pfm
12 ceramic|all ceramic
15 stainless steel|ssc
15 emax|lithium disilicate
20 same day|cerec
20 implant crown
20 resin|composite
20 onlay|three quarter crown
20 pediatric zirconia
20 full gold
20 high noble
20 noble
20 base metal
20 monolithic zirconia
20 layered zirconia
20 strip crown
20 milled crown
20 3d printed crown
20 jacket crown
20 cad cam
20 feldspathic
20 leucite reinforced
20 telescopic
20 endocrown
20 post crown
20 screw retained
20 cement retained
20 provisional
20 aluminum shell
20 hall crown|hall technique
`},
{q:"Name a part of a dental implant", cat:"dental", strip:"", list:`
5 crown
5 screw|implant screw|fixture|post
8 abutment
10 titanium
12 bone graft
15 healing cap|healing abutment
15 abutment screw
20 cover screw
20 implant body
20 platform
20 threads
20 collar
20 hex|connection
20 internal connection
20 external connection
20 morse taper
20 osseointegration
20 sinus lift
20 surgical guide
20 impression coping
20 implant analog
20 scan body
20 ti base
20 custom abutment
20 stock abutment
20 angled abutment
20 multi unit abutment
20 locator
20 ball attachment
20 bar
20 zirconia implant
20 mini implant
20 zygomatic implant
20 peri implant tissue
20 emergence profile
20 torque wrench
`},
{q:"Name a complication of dental anesthesia", cat:"dental", strip:"", list:`
5 numbness that lasts|prolonged numbness
5 lip biting|biting cheek
8 pain at injection site
10 hematoma
10 fainting|syncope
12 rapid heart rate|palpitations
12 trismus
15 paresthesia|nerve damage
15 allergic reaction
15 facial nerve paralysis|facial palsy
20 needle breakage
20 infection
20 anxiety
20 tissue sloughing
20 blanching
20 temporary blindness|diplopia
20 methemoglobinemia
20 toxicity|overdose
20 seizure
20 hypertension
20 hypotension
20 hyperventilation
20 lingual nerve injury
20 positive aspiration
20 failed block|anesthesia failure
20 post anesthetic lesions
20 epinephrine reaction
20 drug interaction
20 malignant hyperthermia
20 burning sensation
`},
{q:"Name a piece of equipment in a dental office", cat:"dental", strip:"", list:`
5 dental chair
5 drill|handpiece
8 x ray machine
8 overhead light|dental light
10 suction
10 mirror
12 sterilizer|autoclave
15 compressor
15 computer|monitor
15 intraoral camera
15 curing light
20 ultrasonic cleaner
20 spit sink|cuspidor
20 stool|dentist stool
20 delivery unit
20 assistant cart
20 vacuum pump
20 water line
20 air water syringe
20 cabinets
20 sharps container
20 lead apron
20 nitrous system
20 oxygen tank
20 aed
20 emergency kit
20 scanner|intraoral scanner
20 3d printer
20 milling machine
20 model trimmer
20 lathe
20 vibrator
20 amalgamator|triturator
20 apex locator
20 endo motor
20 laser
20 cbct machine
20 pano machine
20 tv on the ceiling
20 sunglasses for patients
20 bib clip
20 waiting room
20 front desk
20 tooth chart
`},
{q:"Name a cause of tooth sensitivity", cat:"dental", strip:"", list:`
5 cavity|decay
5 gum recession
8 whitening
8 brushing too hard
10 cracked tooth
10 enamel erosion
12 grinding|bruxism
12 acidic foods
15 new filling
15 gum disease
15 exposed root
20 worn filling
20 recent cleaning
20 crown prep
20 abfraction
20 acid reflux
20 bulimia
20 sinus infection
20 hard toothbrush
20 whitening toothpaste
20 mouthwash
20 orthodontic movement
20 cold air
20 sugary foods
20 pulpitis
20 abscess
20 high filling|high bite
20 open margin
20 dentin hypersensitivity
20 aging
`},
{q:"Name a type of malocclusion", cat:"dental", strip:"", list:`
5 overbite
5 underbite
8 crossbite
8 crowding|crowded teeth
10 open bite
10 overjet|buck teeth
12 gap|diastema|spacing
15 deep bite
15 class ii
15 class iii
20 class i
20 posterior crossbite
20 anterior crossbite
20 midline shift
20 rotated tooth
20 impacted canine
20 scissor bite
20 edge to edge bite
20 lateral open bite
20 anterior open bite
20 division 1
20 division 2
20 bimaxillary protrusion
20 retrognathia
20 prognathism
20 transposition
20 ectopic eruption
20 supernumerary
20 missing laterals
20 dental asymmetry
`},
{q:"Name an oral surgery procedure", cat:"dental", strip:"", list:`
5 wisdom tooth removal
5 extraction
8 dental implant
10 bone graft
12 sinus lift
15 biopsy
15 frenectomy
15 jaw surgery|orthognathic surgery
20 alveoloplasty
20 apicoectomy
20 exposure and bonding
20 coronectomy
20 incision and drainage
20 tori removal
20 cyst removal
20 tumor resection
20 cleft lip repair
20 cleft palate repair
20 tmj surgery|arthrocentesis
20 arthroscopy
20 genioplasty
20 bsso
20 le fort i
20 distraction osteogenesis
20 ridge augmentation
20 socket preservation
20 all on 4
20 zygomatic implants
20 sialolithotomy
20 fracture repair
20 sleep apnea surgery
20 facial trauma repair
20 nerve repair
20 vestibuloplasty
`}
);
/* ---- PHARMACY top-up ---- */
RAW.push(
{q:"Name a cephalosporin", cat:"pharm", strip:"", list:`
5 cephalexin|keflex
8 ceftriaxone|rocephin
10 cefazolin|ancef
12 cefdinir|omnicef
15 cefuroxime|ceftin
15 cefepime|maxipime
20 ceftazidime|fortaz
20 cefpodoxime
20 cefadroxil
20 cefixime|suprax
20 cefotaxime
20 cefoxitin
20 ceftaroline|teflaro
20 cefprozil
20 cefaclor
20 cefotetan
20 cefiderocol|fetroja
20 ceftolozane tazobactam|zerbaxa
20 ceftazidime avibactam|avycaz
20 cefditoren
20 cephalothin
20 cephapirin
20 cephradine
20 ceftobiprole|zevtera
20 cefoperazone
20 ceftizoxime
20 loracarbef
20 cefepime enmetazobactam|exblifep
`},
{q:"Name a benzodiazepine", cat:"pharm", strip:"", list:`
5 xanax|alprazolam
5 valium|diazepam
8 ativan|lorazepam
8 klonopin|clonazepam
12 versed|midazolam
15 librium|chlordiazepoxide
15 restoril|temazepam
20 halcion|triazolam
20 serax|oxazepam
20 tranxene|clorazepate
20 onfi|clobazam
20 doral|quazepam
20 prosom|estazolam
20 dalmane|flurazepam
20 rohypnol|flunitrazepam
20 byfavo|remimazolam
20 bromazepam
20 nitrazepam
20 lormetazepam
20 etizolam
20 flualprazolam
20 clonazolam
20 phenazepam
20 bromazolam
20 prazepam
20 halazepam
`},
{q:"Name an antipsychotic", cat:"pharm", strip:"", list:`
5 seroquel|quetiapine
5 abilify|aripiprazole
8 risperdal|risperidone
8 haldol|haloperidol
10 zyprexa|olanzapine
12 clozaril|clozapine
15 geodon|ziprasidone
15 latuda|lurasidone
15 invega|paliperidone
20 vraylar|cariprazine
20 rexulti|brexpiprazole
20 caplyta|lumateperone
20 saphris|asenapine
20 fanapt|iloperidone
20 thorazine|chlorpromazine
20 prolixin|fluphenazine
20 trilafon|perphenazine
20 compazine|prochlorperazine
20 loxapine
20 thiothixene
20 trifluoperazine
20 thioridazine
20 molindone
20 pimozide
20 nuplazid|pimavanserin
20 cobenfy|xanomeline trospium
20 amisulpride
20 sulpiride
20 droperidol
20 aristada|aripiprazole lauroxil
20 abilify maintena
20 invega sustenna
20 uzedy
20 perseris
20 lybalvi
20 secuado
`},
{q:"Name a diuretic", cat:"pharm", strip:"", list:`
5 lasix|furosemide
5 hydrochlorothiazide|hctz
8 spironolactone|aldactone
10 chlorthalidone
12 bumetanide|bumex
12 torsemide|demadex
15 metolazone
15 triamterene|dyrenium
15 amiloride
15 mannitol
20 eplerenone|inspra
20 indapamide
20 acetazolamide|diamox
20 chlorothiazide|diuril
20 ethacrynic acid|edecrin
20 finerenone|kerendia
20 maxzide|dyazide
20 conivaptan
20 tolvaptan
20 methazolamide
20 canrenone
20 urea
`},
{q:"Name a corticosteroid", cat:"pharm", strip:"", list:`
5 prednisone
5 hydrocortisone
8 dexamethasone|decadron
10 methylprednisolone|medrol|solu medrol
10 triamcinolone|kenalog
12 prednisolone
15 fluticasone|flonase|flovent
15 budesonide|pulmicort|entocort
15 betamethasone
20 cortisone
20 fludrocortisone|florinef
20 mometasone|nasonex
20 beclomethasone|qvar
20 clobetasol
20 ciclesonide
20 desonide
20 fluocinonide
20 halobetasol
20 deflazacort|emflaza
20 vamorolone|agamree
20 loteprednol
20 difluprednate
20 fluorometholone
20 desoximetasone
20 flunisolide
20 alclometasone
20 prednicarbate
20 amcinonide
20 rimexolone
`},
{q:"Name a drug with a boxed (black box) warning", cat:"pharm", strip:"", list:`
5 fluoroquinolones|ciprofloxacin|levofloxacin
5 antidepressants|ssris
8 warfarin
8 opioids
10 metformin
10 fentanyl
12 methotrexate
12 isotretinoin
15 amiodarone
15 antipsychotics in elderly dementia
15 estrogen
15 testosterone
20 montelukast|singulair
20 clozapine
20 carbamazepine
20 valproate
20 lamotrigine
20 nsaids
20 celecoxib
20 rosiglitazone
20 pioglitazone
20 ace inhibitors in pregnancy
20 arbs in pregnancy
20 benzodiazepines
20 stimulants|adderall
20 methadone
20 buprenorphine
20 tramadol
20 propylthiouracil
20 ketoconazole
20 promethazine
20 droperidol
20 dronedarone
20 dofetilide
20 sotalol
20 flecainide
20 enoxaparin
20 doacs|apixaban|rivaroxaban
20 clopidogrel
20 tnf inhibitors
20 jak inhibitors
20 natalizumab
20 tacrolimus
20 cyclosporine
20 mycophenolate
20 lenalidomide
20 thalidomide
20 leflunomide
20 bosentan
20 ambrisentan
20 epoetin|esas
20 denosumab
20 romosozumab
20 medroxyprogesterone|depo provera
20 levothyroxine for weight loss
20 midazolam
20 bupivacaine
20 succinylcholine
20 aminoglycosides
20 telithromycin
20 tigecycline
20 chloramphenicol
20 lincomycin
20 clindamycin
20 metoclopramide
20 cilostazol
20 ticagrelor
20 prasugrel
20 dabigatran
20 vigabatrin
20 felbamate
20 perampanel
20 nefazodone
20 atomoxetine
20 sodium oxybate
20 esketamine
`},
{q:"Name a pharmacy job or setting", cat:"pharm", strip:"pharmacy pharmacist", list:`
5 retail|community
5 hospital
8 pharmacy technician|pharm tech
10 clinical
10 cvs
10 walgreens
12 compounding
12 mail order
15 independent pharmacy
15 long term care
15 nuclear
15 ambulatory care
20 specialty pharmacy
20 infusion|home infusion
20 oncology
20 pediatric
20 critical care|icu
20 emergency medicine
20 infectious disease
20 cardiology
20 psychiatric
20 geriatric
20 transplant
20 informatics
20 managed care|pbm
20 industry|pharmaceutical industry
20 regulatory affairs
20 medical science liaison|msl
20 academia|professor
20 research
20 fda
20 military
20 indian health service
20 va|veterans affairs
20 public health service
20 poison control
20 drug information
20 pharmacy manager
20 pharmacy director
20 staff pharmacist
20 floater
20 overnight pharmacist
20 resident|pgy1|pgy2
20 intern
20 consultant
20 veterinary pharmacy
20 telepharmacy
20 340b
20 sterile compounding|iv room
20 central pharmacy
20 satellite pharmacy
20 rite aid
20 kroger
20 costco
20 walmart
20 amazon pharmacy
20 express scripts
20 optum rx
20 caremark
`},
{q:"Name a migraine medication", cat:"pharm", strip:"", list:`
5 sumatriptan|imitrex
5 ibuprofen|advil
8 excedrin
8 rizatriptan|maxalt
10 topiramate|topamax
10 propranolol
12 botox|onabotulinumtoxin
12 aimovig|erenumab
15 nurtec|rimegepant
15 ubrelvy|ubrogepant
15 zolmitriptan|zomig
15 eletriptan|relpax
20 naratriptan|amerge
20 frovatriptan|frova
20 almotriptan
20 ajovy|fremanezumab
20 emgality|galcanezumab
20 vyepti|eptinezumab
20 qulipta|atogepant
20 zavzpret|zavegepant
20 reyvow|lasmiditan
20 amitriptyline
20 nortriptyline
20 venlafaxine
20 valproate
20 metoclopramide
20 prochlorperazine
20 ketorolac
20 dihydroergotamine|dhe
20 ergotamine|cafergot
20 naproxen
20 acetaminophen
20 aspirin
20 candesartan
20 verapamil
20 magnesium
20 riboflavin
20 coq10
20 melatonin
20 butterbur
20 feverfew
20 dexamethasone
20 trudhesa
20 cefaly|nerivio|neuromodulation
20 symbravo
`},
{q:"Name a muscle relaxant", cat:"pharm", strip:"", list:`
5 flexeril|cyclobenzaprine
8 robaxin|methocarbamol
8 baclofen
10 tizanidine|zanaflex
12 soma|carisoprodol
15 skelaxin|metaxalone
15 valium|diazepam
20 dantrolene|dantrium
20 orphenadrine|norflex
20 chlorzoxazone|parafon forte
20 botox
20 succinylcholine
20 rocuronium
20 vecuronium
20 cisatracurium
20 pancuronium
20 atracurium
20 mivacurium
20 amrix
20 lorzone
20 fexmid
20 lioresal
20 ozobax
20 lyvispah
20 eperisone
20 thiocolchicoside
20 tolperisone
`},
{q:"Name an antidepressant", cat:"pharm", strip:"", list:`
5 zoloft|sertraline
5 prozac|fluoxetine
8 lexapro|escitalopram
8 wellbutrin|bupropion
10 celexa|citalopram
10 paxil|paroxetine
12 effexor|venlafaxine
12 cymbalta|duloxetine
15 trazodone
15 remeron|mirtazapine
15 amitriptyline|elavil
20 pristiq|desvenlafaxine
20 trintellix|vortioxetine
20 viibryd|vilazodone
20 fetzima|levomilnacipran
20 nortriptyline|pamelor
20 imipramine|tofranil
20 doxepin
20 clomipramine|anafranil
20 desipramine
20 nardil|phenelzine
20 parnate|tranylcypromine
20 emsam|selegiline
20 marplan|isocarboxazid
20 luvox|fluvoxamine
20 spravato|esketamine
20 auvelity
20 zurzuvae|zuranolone
20 zulresso|brexanolone
20 nefazodone
20 trimipramine
20 protriptyline
20 amoxapine
20 maprotiline
20 agomelatine
20 tianeptine
20 reboxetine
20 moclobemide
20 exxua|gepirone
20 milnacipran|savella
`}
);

/* ---- BOARD PREP: MEDICINE (USMLE / COMLEX style) ---- */
RAW.push(
{q:"Name a cause of anion gap metabolic acidosis", cat:"b_med", strip:"", list:`
5 diabetic ketoacidosis|dka|ketoacidosis
5 lactic acidosis|lactate
8 uremia|kidney failure|renal failure
10 methanol
10 ethylene glycol|antifreeze
12 salicylates|aspirin
15 alcoholic ketoacidosis
15 starvation ketoacidosis
20 propylene glycol
20 iron
20 isoniazid|inh
20 paraldehyde
20 metformin
20 cyanide
20 carbon monoxide
20 toluene
20 d lactic acidosis
20 oxoproline|pyroglutamic acid|acetaminophen
20 sepsis
20 seizures
20 rhabdomyolysis
`},
{q:"Name a cause of non-anion gap metabolic acidosis", cat:"b_med", strip:"", list:`
5 diarrhea
8 renal tubular acidosis|rta
10 normal saline|saline infusion|hyperchloremia
12 acetazolamide|carbonic anhydrase inhibitors
15 addison disease|adrenal insufficiency
15 ureterosigmoidostomy|ureteral diversion
20 pancreatic fistula
20 spironolactone
20 amiloride
20 hyperalimentation|tpn
20 ammonium chloride
20 ileostomy output
20 laxative abuse
20 early kidney disease
20 hyperparathyroidism
20 toluene
20 topiramate
20 type 1 rta
20 type 2 rta
20 type 4 rta
`},
{q:"Name a drug that causes SIADH", cat:"b_med", strip:"", list:`
5 carbamazepine
5 ssris
8 cyclophosphamide
10 oxcarbazepine
12 vincristine
12 chlorpropamide
15 tricyclic antidepressants
15 mdma|ecstasy
15 desmopressin
20 vasopressin
20 oxytocin
20 haloperidol
20 phenothiazines
20 cisplatin
20 ifosfamide
20 vinblastine
20 opioids
20 nsaids
20 venlafaxine
20 duloxetine
20 mirtazapine
20 maois
20 valproate
20 lamotrigine
20 nicotine
20 clofibrate
20 amiodarone
20 ciprofloxacin
20 proton pump inhibitors
20 methotrexate
`},
{q:"Name an X-linked recessive disease", cat:"b_med", strip:"", list:`
5 hemophilia a
5 duchenne muscular dystrophy|duchenne
8 color blindness
10 hemophilia b|christmas disease
10 g6pd deficiency
12 fragile x
15 becker muscular dystrophy|becker
15 fabry disease
15 hunter syndrome
15 lesch nyhan syndrome
20 bruton agammaglobulinemia|x linked agammaglobulinemia
20 wiskott aldrich syndrome
20 ornithine transcarbamylase deficiency
20 ocular albinism
20 adrenoleukodystrophy
20 chronic granulomatous disease
20 nephrogenic diabetes insipidus
20 androgen insensitivity syndrome
20 menkes disease
20 kallmann syndrome
20 x linked scid
20 hyper igm syndrome
20 alport syndrome
20 hypophosphatemic rickets
20 retinitis pigmentosa x linked
20 kennedy disease|spinal bulbar muscular atrophy
`},
{q:"Name an autosomal dominant disease", cat:"b_med", strip:"", list:`
5 huntington disease
5 marfan syndrome
8 neurofibromatosis
8 achondroplasia
10 adult polycystic kidney disease|adpkd
10 familial hypercholesterolemia
12 familial adenomatous polyposis|fap
12 tuberous sclerosis
15 von hippel lindau
15 hereditary spherocytosis
15 myotonic dystrophy
15 brca
15 lynch syndrome
20 li fraumeni
20 von willebrand disease
20 osteogenesis imperfecta
20 ehlers danlos
20 hereditary hemorrhagic telangiectasia
20 men1
20 men2
20 acute intermittent porphyria
20 peutz jeghers
20 gardner syndrome
20 long qt syndrome|romano ward
20 hypertrophic cardiomyopathy
20 factor v leiden
20 noonan syndrome
20 waardenburg
20 treacher collins
20 charcot marie tooth
20 retinoblastoma
20 alzheimer early onset
20 spinocerebellar ataxia
20 dentatorubral pallidoluysian atrophy
20 hereditary angioedema
20 familial hypocalciuric hypercalcemia
20 gilbert syndrome
20 fibrodysplasia ossificans progressiva
`},
{q:"Name a tumor marker", cat:"b_med", strip:"", list:`
5 psa|prostate specific antigen
5 cea|carcinoembryonic antigen
8 ca 125
8 afp|alpha fetoprotein
10 beta hcg|hcg
10 ca 19 9
12 ca 15 3
15 ca 27 29
15 ldh|lactate dehydrogenase
15 calcitonin
20 chromogranin a
20 5 hiaa
20 s 100
20 bombesin
20 alkaline phosphatase
20 thyroglobulin
20 beta 2 microglobulin
20 m protein|monoclonal protein
20 bence jones protein
20 cd20
20 cd30
20 cd117|c kit
20 her2
20 estrogen receptor|er
20 progesterone receptor|pr
20 nse|neuron specific enolase
20 tartrate resistant acid phosphatase|trap
20 cytokeratin
20 desmin
20 vimentin
20 hmb 45
20 tdt
20 metanephrines
20 vma|vanillylmandelic acid
20 he4
20 ca 72 4
20 cyfra 21 1
20 pd l1
20 bcr abl
20 egfr
20 alk
20 kras
20 msi|microsatellite instability
`},
{q:"Name a cause of nephrotic syndrome", cat:"b_med", strip:"", list:`
5 diabetes|diabetic nephropathy
5 minimal change disease
8 membranous nephropathy
8 fsgs|focal segmental glomerulosclerosis
10 amyloidosis
12 lupus|lupus nephritis class v
15 membranoproliferative glomerulonephritis|mpgn
15 hiv|hivan
15 hepatitis b
15 hepatitis c
20 nsaids
20 heroin
20 sickle cell
20 obesity
20 hodgkin lymphoma
20 solid tumors
20 multiple myeloma
20 light chain deposition disease
20 gold
20 penicillamine
20 lithium
20 pamidronate
20 congenital nephrotic syndrome
20 alport syndrome
20 preeclampsia
20 syphilis
20 malaria
20 apol1
`},
{q:"Name a cause of hypercalcemia", cat:"b_med", strip:"", list:`
5 hyperparathyroidism|primary hyperparathyroidism
5 cancer|malignancy
8 pthrp
10 multiple myeloma
10 thiazides
12 vitamin d toxicity
12 sarcoidosis
15 immobilization
15 milk alkali syndrome|calcium carbonate
15 lithium
20 tuberculosis
20 granulomatous disease
20 hyperthyroidism
20 adrenal insufficiency
20 familial hypocalciuric hypercalcemia
20 paget disease
20 vitamin a toxicity
20 tertiary hyperparathyroidism
20 lymphoma
20 bone metastases
20 squamous cell lung cancer
20 parenteral nutrition
20 theophylline
20 teriparatide
`},
{q:"Name a type of vasculitis", cat:"b_med", strip:"vasculitis", list:`
5 giant cell arteritis|temporal arteritis
5 kawasaki disease
8 granulomatosis with polyangiitis|gpa|wegener
10 henoch schonlein purpura|iga vasculitis|hsp
10 takayasu arteritis
12 polyarteritis nodosa|pan
12 microscopic polyangiitis
15 eosinophilic granulomatosis with polyangiitis|churg strauss|egpa
15 behcet disease
20 cryoglobulinemic vasculitis|cryoglobulinemia
20 buerger disease|thromboangiitis obliterans
20 goodpasture|anti gbm
20 cogan syndrome
20 hypocomplementemic urticarial vasculitis
20 leukocytoclastic vasculitis
20 cutaneous small vessel vasculitis
20 primary cns vasculitis
20 drug induced vasculitis
20 rheumatoid vasculitis
20 lupus vasculitis
20 hepatitis b associated pan
20 relapsing polychondritis
`},
{q:"Name a lysosomal storage disease", cat:"b_med", strip:"disease", list:`
5 tay sachs
5 gaucher
8 niemann pick
10 fabry
12 krabbe
12 pompe
15 hurler
15 hunter
15 metachromatic leukodystrophy
20 sanfilippo
20 morquio
20 maroteaux lamy
20 sly
20 i cell disease
20 sandhoff
20 wolman
20 batten
20 cystinosis
20 farber
20 alpha mannosidosis
20 fucosidosis
20 schindler
20 danon
`},
{q:"Name a disease linked to an HLA type", cat:"b_med", strip:"", list:`
5 ankylosing spondylitis|hla b27
5 celiac disease|hla dq2|dq8
8 type 1 diabetes|hla dr3|dr4
10 rheumatoid arthritis|hla dr4
10 reactive arthritis
12 psoriatic arthritis
12 psoriasis|hla cw6
15 multiple sclerosis|hla dr2
15 narcolepsy|dqb1 0602
15 hemochromatosis|hla a3
15 inflammatory bowel disease arthritis
20 behcet disease|hla b51
20 graves disease
20 hashimoto thyroiditis|hla dr5
20 lupus|hla dr2
20 goodpasture|hla dr2
20 addison disease
20 myasthenia gravis
20 pernicious anemia
20 birdshot chorioretinopathy|hla a29
20 abacavir hypersensitivity|hla b5701
20 carbamazepine sjs|hla b1502
20 allopurinol sjs|hla b5801
20 juvenile arthritis
20 acute anterior uveitis
`},
{q:"Name an oncogene or tumor suppressor gene", cat:"b_med", strip:"gene", list:`
5 p53|tp53
5 brca1
5 brca2
8 rb|retinoblastoma
8 ras|kras
10 myc|c myc
10 her2|erbb2
12 apc
12 bcl 2
15 bcr abl
15 n myc|mycn
15 egfr
15 braf
15 ret
15 vhl
20 nf1
20 nf2
20 pten
20 alk
20 c kit
20 jak2
20 flt3
20 idh1
20 l myc
20 dcc
20 smad4|dpc4
20 wt1
20 men1
20 cdkn2a|p16
20 lkb1|stk11
20 tsc1
20 tsc2
20 mlh1
20 msh2
20 atm
20 palb2
20 pik3ca
20 met
20 cyclin d1
20 bcl 6
20 notch1
20 ctnnb1|beta catenin
`},
{q:"Name a cause of secondary hypertension", cat:"b_med", strip:"", list:`
5 kidney disease
5 renal artery stenosis
8 primary aldosteronism|conn syndrome|hyperaldosteronism
8 sleep apnea
10 pheochromocytoma
10 cushing syndrome
12 coarctation of the aorta
12 hyperthyroidism
15 hypothyroidism
15 fibromuscular dysplasia
15 oral contraceptives
15 nsaids
20 decongestants
20 cocaine
20 amphetamines
20 alcohol
20 steroids
20 hyperparathyroidism
20 acromegaly
20 polycystic kidney disease
20 pregnancy|preeclampsia
20 licorice
20 liddle syndrome
20 congenital adrenal hyperplasia
20 renin secreting tumor
20 cyclosporine
20 tacrolimus
20 erythropoietin
20 venlafaxine
20 vegf inhibitors
20 mao inhibitors
`},
{q:"Name a cause of acute pancreatitis", cat:"b_med", strip:"", list:`
5 gallstones
5 alcohol
8 hypertriglyceridemia|high triglycerides
10 ercp
10 hypercalcemia
12 trauma
12 medications
15 scorpion sting
15 mumps
15 steroids
20 autoimmune pancreatitis
20 azathioprine
20 valproate
20 didanosine
20 furosemide
20 thiazides
20 estrogen
20 glp 1 agonists
20 dpp 4 inhibitors
20 l asparaginase
20 sulfonamides
20 tetracycline
20 pentamidine
20 cystic fibrosis
20 pancreas divisum
20 hereditary pancreatitis|prss1
20 ischemia
20 hypothermia
20 coxsackie
20 cmv
20 hiv
20 vasculitis
20 post operative
`},
{q:"Name a drug that causes gynecomastia", cat:"b_med", strip:"", list:`
5 spironolactone
8 ketoconazole
10 cimetidine
10 digoxin
12 estrogens
12 finasteride
15 marijuana
15 alcohol
15 anabolic steroids
20 flutamide
20 bicalutamide
20 leuprolide
20 antipsychotics|risperidone
20 metoclopramide
20 calcium channel blockers
20 isoniazid
20 methyldopa
20 tricyclics
20 opioids
20 heroin
20 amphetamines
20 omeprazole
20 efavirenz
20 abiraterone
20 cyproterone
20 hcg
20 dutasteride
20 eplerenone
`},
{q:"Name a cause of digital clubbing", cat:"b_med", strip:"", list:`
5 lung cancer
5 cystic fibrosis
8 cyanotic congenital heart disease
10 bronchiectasis
10 pulmonary fibrosis|idiopathic pulmonary fibrosis
12 endocarditis
12 lung abscess
15 empyema
15 mesothelioma
15 crohns disease
15 ulcerative colitis
20 cirrhosis
20 celiac disease
20 graves disease|thyroid acropachy
20 asbestosis
20 sarcoidosis
20 tuberculosis
20 hepatopulmonary syndrome
20 hypertrophic osteoarthropathy
20 familial clubbing
20 pulmonary avm
20 atrial myxoma
20 polycythemia
20 primary biliary cholangitis
`},
{q:"Name a cause of ST elevation", cat:"b_med", strip:"", list:`
5 stemi|myocardial infarction
5 pericarditis
8 early repolarization
10 left ventricular aneurysm
10 prinzmetal angina|vasospasm
12 brugada syndrome
12 left bundle branch block
15 left ventricular hypertrophy
15 takotsubo
15 hyperkalemia
20 myocarditis
20 pulmonary embolism
20 paced rhythm
20 subarachnoid hemorrhage
20 cocaine
20 hypothermia|osborn waves
20 cardioversion
20 aortic dissection
20 arvc
20 acute myocardial contusion
`},
{q:"Name a cause of eosinophilia", cat:"b_med", strip:"", list:`
5 allergies
5 parasites|helminths
8 asthma
10 drug reaction|dress
10 eczema
12 churg strauss|egpa
12 neoplasm|lymphoma
15 addison disease
15 strongyloides
15 eosinophilic esophagitis
20 hypereosinophilic syndrome
20 allergic bronchopulmonary aspergillosis
20 loeffler syndrome
20 eosinophilic pneumonia
20 coccidioidomycosis
20 hodgkin lymphoma
20 chronic myeloid leukemia
20 mastocytosis
20 cholesterol emboli
20 adrenal insufficiency
20 toxocara
20 trichinosis
20 ascaris
20 schistosomiasis
20 filariasis
20 gvhd
20 sarcoidosis
`},
{q:"Name a paraneoplastic syndrome", cat:"b_med", strip:"syndrome", list:`
5 siadh
5 hypercalcemia|pthrp
8 cushing|ectopic acth
10 lambert eaton
10 myasthenia gravis
12 trousseau|migratory thrombophlebitis
12 polycythemia|erythropoietin
15 dermatomyositis
15 acanthosis nigricans
15 hypertrophic osteoarthropathy
20 cerebellar degeneration|anti yo
20 limbic encephalitis
20 anti nmda receptor encephalitis
20 opsoclonus myoclonus
20 anti hu
20 stiff person
20 sign of leser trelat|leser trelat
20 nonbacterial thrombotic endocarditis
20 carcinoid syndrome
20 hypoglycemia|igf 2
20 sweet syndrome
20 paraneoplastic pemphigus
20 tumor induced osteomalacia|fgf23
20 gynecomastia|hcg
20 retinopathy|car
20 neuromyotonia
`},
{q:"Name a cause of hemolytic anemia", cat:"b_med", strip:"", list:`
5 sickle cell disease
5 g6pd deficiency
8 hereditary spherocytosis
8 autoimmune hemolytic anemia
10 thalassemia
10 ttp
12 hus
12 dic
15 mechanical heart valve
15 pnh|paroxysmal nocturnal hemoglobinuria
15 transfusion reaction
15 malaria
20 babesia
20 pyruvate kinase deficiency
20 hemolytic disease of the newborn
20 cold agglutinin disease
20 mycoplasma
20 ebv
20 cll
20 lupus
20 penicillin
20 methyldopa
20 quinine
20 dapsone
20 primaquine
20 snake venom
20 clostridium perfringens
20 wilson disease
20 march hemoglobinuria
20 burns
20 hellp syndrome
20 hereditary elliptocytosis
`},
{q:"Name a drug that causes drug-induced lupus", cat:"b_med", strip:"", list:`
5 hydralazine
5 procainamide
8 isoniazid
10 minocycline
12 methyldopa
12 quinidine
15 tnf inhibitors|infliximab|adalimumab|etanercept
15 phenytoin
15 chlorpromazine
20 terbinafine
20 sulfasalazine
20 carbamazepine
20 penicillamine
20 propylthiouracil
20 interferon
20 diltiazem
20 hydrochlorothiazide
20 statins
20 proton pump inhibitors
20 lisinopril
20 ethosuximide
20 docetaxel
20 doxycycline
`},
{q:"Name a cause of thrombocytopenia", cat:"b_med", strip:"", list:`
5 itp
5 heparin induced thrombocytopenia|hit
8 dic
8 ttp
10 leukemia
10 chemotherapy
12 hus
12 sepsis
15 splenomegaly|hypersplenism
15 alcohol
15 hiv
15 hepatitis c
20 aplastic anemia
20 b12 deficiency
20 folate deficiency
20 lupus
20 hellp syndrome
20 gestational thrombocytopenia
20 antiphospholipid syndrome
20 dengue
20 ebv
20 cmv
20 quinine
20 vancomycin
20 linezolid
20 valproate
20 bactrim
20 myelodysplastic syndrome
20 pseudothrombocytopenia
20 wiskott aldrich
20 bernard soulier
20 post transfusion purpura
20 vitt
`},
{q:"Name an occupational lung exposure or disease", cat:"b_med", strip:"", list:`
5 asbestos|asbestosis
5 silica|silicosis
8 coal|black lung
10 beryllium|berylliosis
12 cotton|byssinosis
12 mold|farmers lung
15 bird droppings|bird fanciers lung
15 isocyanates
20 mesothelioma
20 occupational asthma
20 hot tub lung
20 popcorn lung|diacetyl
20 siderosis|iron
20 stannosis|tin
20 baritosis
20 aluminum
20 hard metal|cobalt
20 talc
20 flock workers lung
20 metal fume fever
20 silo fillers lung|nitrogen dioxide
20 bagassosis
20 mushroom workers lung
20 cheese washers lung
20 chromium
20 cadmium
20 nickel
20 arsenic
20 radon
20 sick building syndrome
20 world trade center cough
20 sandblasting
20 engineered stone
`},
{q:"Name a teratogen", cat:"b_med", strip:"", list:`
5 alcohol
5 isotretinoin
8 thalidomide
8 warfarin
10 valproate
10 phenytoin
12 ace inhibitors
12 lithium
15 tetracyclines
15 methotrexate
15 diethylstilbestrol
15 carbamazepine
20 rubella
20 cmv
20 toxoplasmosis
20 syphilis
20 zika
20 varicella
20 herpes simplex
20 radiation
20 maternal diabetes
20 smoking
20 cocaine
20 aminoglycosides
20 fluconazole high dose
20 vitamin a excess
20 mycophenolate
20 leflunomide
20 ribavirin
20 danazol
20 testosterone
20 finasteride
20 misoprostol
20 topiramate
20 methimazole
20 iodide
20 lead
20 mercury
20 hyperthermia
`}
);

/* ---- BOARD PREP: NURSING (NCLEX style) ---- */
RAW.push(
{q:"Name a sign of digoxin toxicity", cat:"b_nurse", strip:"", list:`
5 nausea
5 vomiting
8 visual changes|yellow vision|green vision|halos|xanthopsia
8 bradycardia|slow heart rate
10 loss of appetite|anorexia
10 confusion
12 arrhythmias
15 fatigue
15 dizziness
15 diarrhea
15 abdominal pain
20 heart block
20 pvcs
20 bigeminy
20 atrial tachycardia with block
20 bidirectional ventricular tachycardia
20 hyperkalemia
20 weakness
20 headache
20 hallucinations
20 blurred vision
20 photophobia
20 delirium
20 scooped st segments|salvador dali
`},
{q:"Name a sign of lithium toxicity", cat:"b_nurse", strip:"", list:`
5 tremor|coarse tremor
5 nausea
8 vomiting
8 diarrhea
10 confusion
10 slurred speech
12 ataxia|unsteady gait
12 drowsiness
15 muscle weakness
15 muscle twitching|fasciculations
15 seizures
20 polyuria|diabetes insipidus
20 hyperreflexia
20 blurred vision
20 tinnitus
20 dizziness
20 arrhythmias
20 coma
20 nystagmus
20 clonus
20 kidney injury
20 hypothyroidism
20 dehydration
20 delirium
20 death
`},
{q:"Name a food high in tyramine (avoid with MAOIs)", cat:"b_nurse", strip:"", list:`
5 aged cheese|cheese
5 red wine|wine
8 salami|cured meats
8 soy sauce
10 beer|tap beer
10 pepperoni
12 sauerkraut
12 pickled herring|pickled fish
15 smoked fish
15 fava beans|broad beans
15 kimchi
15 miso
20 tofu
20 tempeh
20 yeast extract|marmite|vegemite
20 aged chicken liver|liver
20 chocolate
20 avocados|overripe avocado
20 bananas|overripe bananas
20 raisins
20 figs
20 sourdough
20 fish sauce
20 teriyaki
20 summer sausage
20 bologna
20 hot dogs
20 cheddar
20 blue cheese
20 parmesan
20 brie
20 gouda
20 feta
20 vermouth
20 chianti
`},
{q:"Name a food high in potassium", cat:"b_nurse", strip:"", list:`
5 bananas|banana
5 potatoes|potato
8 oranges|orange juice
8 avocado
10 spinach
10 tomatoes
12 sweet potatoes
12 beans|kidney beans
15 dried apricots|apricots
15 cantaloupe|melon
15 raisins
15 prunes
20 salt substitute
20 coconut water
20 yogurt
20 milk
20 salmon
20 broccoli
20 lentils
20 squash
20 beets
20 swiss chard
20 brussels sprouts
20 dates
20 pomegranate
20 kiwi
20 honeydew
20 mushrooms
20 nuts
20 chocolate
20 tomato sauce
20 orange juice
20 carrots
20 bran
20 molasses
`},
{q:"Name a food high in vitamin K (affects warfarin)", cat:"b_nurse", strip:"", list:`
5 spinach
5 kale
8 broccoli
8 lettuce|romaine
10 brussels sprouts
10 collard greens
12 cabbage
12 green tea
15 turnip greens
15 swiss chard
15 asparagus
20 green beans
20 parsley
20 mustard greens
20 cauliflower
20 kiwi
20 avocado
20 soybean oil
20 canola oil
20 natto
20 cranberry juice
20 grapefruit
20 liver
20 mayonnaise
20 cilantro
20 basil
20 green peas
20 okra
20 prunes
20 blueberries
`},
{q:"Name a medication to hold for a heart rate under 60", cat:"b_nurse", strip:"", list:`
5 metoprolol
5 digoxin
8 atenolol
8 beta blockers
10 carvedilol
10 propranolol
12 diltiazem
12 verapamil
15 amiodarone
15 labetalol
15 bisoprolol
20 nadolol
20 sotalol
20 clonidine
20 ivabradine
20 dexmedetomidine
20 donepezil
20 nebivolol
20 timolol
20 esmolol
20 calcium channel blockers
20 dronedarone
20 lacosamide
20 fingolimod
20 ticagrelor
`},
{q:"Name a sign of increased intracranial pressure", cat:"b_nurse", strip:"", list:`
5 headache
5 vomiting
8 decreased level of consciousness|confusion
8 pupil changes|dilated pupil|fixed pupil
10 cushing triad
10 bradycardia
12 hypertension|widened pulse pressure
12 irregular respirations
15 papilledema
15 seizures
15 posturing|decorticate|decerebrate
20 bulging fontanelle
20 high pitched cry
20 increased head circumference
20 sunset eyes
20 blurred vision
20 lethargy
20 restlessness
20 ptosis
20 hemiparesis
20 cheyne stokes
20 sixth nerve palsy
20 projectile vomiting
`},
{q:"Name a sign of low calcium", cat:"b_nurse", strip:"", list:`
5 tingling|numbness|paresthesia
5 muscle cramps|spasms
8 chvostek sign
8 trousseau sign
10 tetany
10 seizures
12 prolonged qt
15 laryngospasm
15 hyperactive reflexes
15 anxiety
20 confusion
20 arrhythmias
20 hypotension
20 bronchospasm
20 carpopedal spasm
20 fatigue
20 dry skin
20 brittle nails
20 cataracts
20 dementia
`},
{q:"Name a sign of high potassium", cat:"b_nurse", strip:"", list:`
5 peaked t waves
5 muscle weakness
8 arrhythmias
8 bradycardia
10 wide qrs
10 paralysis
12 nausea
12 paresthesia|tingling
15 diarrhea
15 cardiac arrest
20 flattened p waves
20 sine wave
20 prolonged pr
20 abdominal cramps
20 palpitations
20 fatigue
20 shortness of breath
20 ventricular fibrillation
20 decreased reflexes
`},
{q:"Name a sign of magnesium sulfate toxicity", cat:"b_nurse", strip:"", list:`
5 loss of reflexes|absent reflexes|decreased deep tendon reflexes
5 respiratory depression
8 decreased urine output
10 lethargy
10 hypotension
12 flushing
12 bradycardia
15 cardiac arrest
15 muscle weakness
15 confusion
20 slurred speech
20 double vision
20 nausea
20 sweating
20 pulmonary edema
20 heart block
20 hypothermia
20 low oxygen saturation
`},
{q:"Name a sign of compartment syndrome", cat:"b_nurse", strip:"", list:`
5 pain out of proportion
5 pain with passive stretch
8 paresthesia|tingling
8 pallor
10 pulselessness
10 paralysis
12 swelling|tight skin
12 poikilothermia|cold
15 pressure
15 numbness
20 decreased capillary refill
20 shiny skin
20 firm compartment
20 elevated compartment pressure
20 weakness
20 rhabdomyolysis
20 dark urine
`},
{q:"Name a danger sign in pregnancy", cat:"b_nurse", strip:"", list:`
5 vaginal bleeding
5 severe headache
8 blurred vision|visual changes
8 decreased fetal movement
10 leaking fluid|rupture of membranes
10 swelling of face or hands
12 abdominal pain
12 fever
15 contractions before 37 weeks|preterm labor
15 epigastric pain|ruq pain
15 persistent vomiting
20 high blood pressure
20 seizures
20 painful urination
20 chest pain
20 shortness of breath
20 calf pain
20 dizziness
20 thoughts of self harm
20 itching of palms and soles
20 sudden weight gain
20 foul discharge
20 pelvic pressure
20 back pain
`},
{q:"Name a sign of fluid volume overload", cat:"b_nurse", strip:"", list:`
5 edema
5 crackles|rales
8 shortness of breath
8 weight gain
10 jugular venous distension|jvd
10 hypertension
12 bounding pulse
12 tachycardia
15 s3 heart sound
15 low hematocrit|dilution
15 pulmonary edema
20 orthopnea
20 ascites
20 low bun
20 low sodium
20 distended neck veins
20 confusion
20 headache
20 frothy sputum
20 high cvp
`},
{q:"Name a contraindication for an MRI", cat:"b_nurse", strip:"", list:`
5 pacemaker
5 metal implants|metal
8 aneurysm clips
8 cochlear implant
10 metal fragments in eyes|shrapnel
10 implanted defibrillator|icd
12 insulin pump
15 neurostimulator
15 claustrophobia
15 pregnancy first trimester
20 medication patches with metal|nicotine patch
20 tattoos
20 kidney failure for gadolinium
20 bullets
20 programmable shunt
20 drug pump
20 magnetic dental implants
20 iud with metal
20 obesity|weight limit
20 cardiac monitoring leads
20 tissue expanders
20 swan ganz
`},
{q:"Name a trigger of autonomic dysreflexia", cat:"b_nurse", strip:"", list:`
5 full bladder|bladder distension
5 constipation|bowel distension
8 kinked catheter
8 fecal impaction
10 pressure injury
10 tight clothing
12 ingrown toenail
12 uti
15 sexual activity
15 menstruation
15 labor
20 sunburn
20 burns
20 temperature changes
20 bladder spasm
20 kidney stones
20 fractures
20 hemorrhoids
20 tight shoes
20 surgery
20 ejaculation
20 painful stimuli
`},
{q:"Name a sign of anaphylaxis", cat:"b_nurse", strip:"", list:`
5 hives
5 trouble breathing
8 swelling of face|swelling of lips|angioedema
8 wheezing
10 low blood pressure
10 throat tightness
12 itching
12 tachycardia
15 stridor
15 hoarseness
15 dizziness
15 nausea
20 vomiting
20 flushing
20 sense of doom
20 abdominal cramps
20 diarrhea
20 loss of consciousness
20 cyanosis
20 weak pulse
20 tongue swelling
20 runny nose
20 watery eyes
20 cardiac arrest
`},
{q:"Name a side effect of long-term corticosteroids", cat:"b_nurse", strip:"", list:`
5 weight gain
5 high blood sugar|hyperglycemia
8 osteoporosis
8 moon face
10 infection|immunosuppression
10 mood changes
12 insomnia
12 high blood pressure
15 cataracts
15 glaucoma
15 thin skin
15 bruising
20 buffalo hump
20 muscle wasting
20 delayed wound healing
20 adrenal suppression
20 gi ulcer
20 acne
20 stretch marks|striae
20 hypokalemia
20 fluid retention
20 avascular necrosis
20 growth suppression
20 psychosis
20 increased appetite
20 hirsutism
20 menstrual irregularity
`},
{q:"Name a sign of thyroid storm or hyperthyroidism", cat:"b_nurse", strip:"", list:`
5 weight loss
5 tachycardia
8 heat intolerance
8 anxiety
10 tremor
10 fever
12 sweating
12 exophthalmos|bulging eyes
15 diarrhea
15 insomnia
15 goiter
15 atrial fibrillation
20 delirium
20 agitation
20 palpitations
20 warm moist skin
20 fine hair
20 menstrual changes
20 hyperreflexia
20 muscle weakness
20 heart failure
20 vomiting
20 coma
`},
{q:"Name a sign of Cushing syndrome", cat:"b_nurse", strip:"", list:`
5 moon face
5 buffalo hump
8 weight gain|truncal obesity
8 purple striae|stretch marks
10 high blood sugar
10 hypertension
12 thin skin
12 easy bruising
15 muscle weakness
15 osteoporosis
15 hirsutism
20 acne
20 infections
20 poor wound healing
20 mood swings
20 depression
20 hypokalemia
20 menstrual irregularities
20 thin extremities
20 supraclavicular fat pads
20 plethora
20 fatigue
`},
{q:"Name a sign of Addison disease or adrenal crisis", cat:"b_nurse", strip:"", list:`
5 hypotension
5 fatigue
8 hyperpigmentation|bronze skin
8 weight loss
10 salt craving
10 hyponatremia
12 hyperkalemia
12 hypoglycemia
15 nausea
15 vomiting
15 abdominal pain
20 dizziness
20 muscle weakness
20 confusion
20 shock
20 fever
20 dehydration
20 depression
20 joint pain
20 loss of body hair
`},
{q:"Name a sign of meningitis", cat:"b_nurse", strip:"", list:`
5 stiff neck|nuchal rigidity
5 fever
8 headache
8 photophobia
10 kernig sign
10 brudzinski sign
12 confusion
12 vomiting
15 petechial rash
15 seizures
15 bulging fontanelle
20 irritability
20 lethargy
20 high pitched cry
20 poor feeding
20 opisthotonos
20 cranial nerve palsies
20 hearing loss
20 coma
20 cloudy csf
`},
{q:"Name a sign of preeclampsia", cat:"b_nurse", strip:"", list:`
5 high blood pressure
5 proteinuria|protein in urine
8 headache
8 swelling|edema
10 visual changes
10 epigastric pain|ruq pain
12 rapid weight gain
12 hyperreflexia
15 clonus
15 low platelets
15 elevated liver enzymes
20 decreased urine output
20 shortness of breath|pulmonary edema
20 nausea
20 seizures
20 elevated creatinine
20 fetal growth restriction
20 hellp
20 scotomata
`},
{q:"Name a neutropenic precaution", cat:"b_nurse", strip:"", list:`
5 hand hygiene
5 private room
8 no fresh flowers
8 no fresh fruits or vegetables|no raw produce
10 mask for patient outside room
10 avoid sick visitors
12 no rectal temps
12 no live vaccines
15 daily bathing
15 monitor temperature
20 avoid crowds
20 no plants
20 no standing water
20 dedicated equipment
20 low microbial diet
20 avoid litter boxes
20 oral care
20 no enemas or suppositories
20 limit invasive procedures
20 hepa filtered room
20 monitor anc
`},
{q:"Name a hip replacement precaution", cat:"b_nurse", strip:"", list:`
5 don't cross legs
5 no bending past 90 degrees
8 use an abduction pillow
8 raised toilet seat
10 don't twist
10 don't internally rotate
12 use a reacher
12 sit in high chairs
15 walker
15 dvt prophylaxis
20 sock aid
20 long handled shoe horn
20 sleep on back
20 pillow between knees
20 no low chairs
20 avoid driving
20 shower chair
20 elevated bed
20 weight bearing as tolerated
20 compression stockings
`}
);

/* ---- BOARD PREP: PHARMACY (NAPLEX style) ---- */
RAW.push(
{q:"Name a CYP3A4 inducer", cat:"b_pharm", strip:"", list:`
5 rifampin|rifampicin
5 carbamazepine
8 phenytoin
8 st johns wort
10 phenobarbital
12 rifabutin
12 efavirenz
15 oxcarbazepine
15 primidone
15 nevirapine
20 rifapentine
20 modafinil
20 bosentan
20 dexamethasone
20 etravirine
20 enzalutamide
20 apalutamide
20 lumacaftor
20 mitotane
20 topiramate
20 pioglitazone
20 armodafinil
20 felbamate
20 lorlatinib
20 cenobamate
`},
{q:"Name a strong CYP3A4 inhibitor", cat:"b_pharm", strip:"", list:`
5 ketoconazole
5 clarithromycin
8 itraconazole
8 ritonavir
10 grapefruit juice
10 voriconazole
12 posaconazole
12 erythromycin
15 diltiazem
15 verapamil
15 cobicistat
15 fluconazole
20 nefazodone
20 telithromycin
20 indinavir
20 saquinavir
20 nelfinavir
20 lopinavir
20 atazanavir
20 darunavir
20 tipranavir
20 boceprevir
20 telaprevir
20 conivaptan
20 idelalisib
20 ceritinib
20 mifepristone
20 amiodarone
20 cimetidine
20 crizotinib
20 imatinib
20 aprepitant
`},
{q:"Name a drug that causes gingival hyperplasia", cat:"b_pharm", strip:"", list:`
5 phenytoin
5 cyclosporine
8 nifedipine
10 amlodipine
12 verapamil
12 diltiazem
15 felodipine
15 valproate
15 phenobarbital
20 tacrolimus
20 carbamazepine
20 lamotrigine
20 topiramate
20 vigabatrin
20 ethosuximide
20 nitrendipine
20 isradipine
20 oral contraceptives
20 sirolimus
`},
{q:"Name a drug with a REMS program", cat:"b_pharm", strip:"", list:`
5 isotretinoin|ipledge
5 clozapine
8 thalidomide
8 opioids|transmucosal fentanyl
10 lenalidomide
10 pomalidomide
12 mycophenolate
12 sodium oxybate|xyrem
15 bosentan
15 ambrisentan
15 macitentan
15 riociguat
20 esketamine
20 buprenorphine extended release|sublocade
20 vigabatrin
20 natalizumab
20 alosetron
20 tolvaptan
20 lomitapide
20 mipomersen
20 olanzapine pamoate|zyprexa relprevv
20 mifepristone
20 dofetilide
20 ponatinib
20 tegsedi|inotersen
20 eculizumab
20 ravulizumab
20 testosterone undecanoate|aveed
20 brexanolone
`},
{q:"Name a drug that needs renal dose adjustment", cat:"b_pharm", strip:"", list:`
5 metformin
5 vancomycin
8 gabapentin
8 enoxaparin
10 levofloxacin
10 ciprofloxacin
12 gentamicin|aminoglycosides
12 dabigatran
15 apixaban
15 rivaroxaban
15 allopurinol
15 lithium
20 digoxin
20 pregabalin
20 famotidine
20 ranitidine
20 cefepime
20 meropenem
20 piperacillin tazobactam
20 acyclovir
20 valacyclovir
20 bactrim
20 nitrofurantoin
20 tramadol
20 morphine
20 baclofen
20 sitagliptin
20 glyburide
20 colchicine
20 methotrexate
20 levetiracetam
20 amantadine
20 fluconazole
20 ganciclovir
20 tenofovir
20 lamivudine
20 spironolactone
20 dofetilide
20 sotalol
20 memantine
20 rivastigmine
20 bisphosphonates
20 duloxetine
20 penicillin
20 cephalexin
20 meperidine
`},
{q:"Name a drug that causes hyperkalemia", cat:"b_pharm", strip:"", list:`
5 ace inhibitors|lisinopril
5 spironolactone
8 arbs|losartan
8 potassium supplements|potassium chloride
10 bactrim|trimethoprim
10 nsaids
12 amiloride
12 triamterene
15 eplerenone
15 heparin
15 digoxin toxicity
20 cyclosporine
20 tacrolimus
20 beta blockers
20 succinylcholine
20 pentamidine
20 drospirenone
20 aliskiren
20 sacubitril valsartan
20 finerenone
20 salt substitutes
20 penicillin g potassium
20 mannitol
20 stored blood|transfusion
`},
{q:"Name a drug that can cause serotonin syndrome", cat:"b_pharm", strip:"", list:`
5 ssris|sertraline|fluoxetine
5 maois
8 tramadol
8 linezolid
10 snris|venlafaxine|duloxetine
10 triptans
12 fentanyl
12 meperidine
15 methylene blue
15 dextromethorphan
15 st johns wort
15 trazodone
20 mdma|ecstasy
20 lithium
20 buspirone
20 ondansetron
20 metoclopramide
20 tricyclics
20 mirtazapine
20 methadone
20 cyclobenzaprine
20 tapentadol
20 cocaine
20 amphetamines
20 lsd
20 selegiline
20 rasagiline
20 tryptophan
20 valproate
20 carbamazepine
20 fluconazole
`},
{q:"Name a photosensitizing drug", cat:"b_pharm", strip:"", list:`
5 doxycycline|tetracyclines
5 sulfonamides|bactrim
8 fluoroquinolones|ciprofloxacin
8 amiodarone
10 isotretinoin
10 hydrochlorothiazide|thiazides
12 furosemide
12 nsaids|naproxen|piroxicam
15 st johns wort
15 tretinoin|retinoids
15 voriconazole
15 methotrexate
20 chlorpromazine|phenothiazines
20 griseofulvin
20 sulfonylureas
20 demeclocycline
20 minocycline
20 tricyclics
20 diltiazem
20 nifedipine
20 quinine
20 hydroxychloroquine
20 vemurafenib
20 psoralens
20 coal tar
20 benzoyl peroxide
20 dapsone
20 ketoprofen
20 pirfenidone
20 fluorouracil
`},
{q:"Name a narrow therapeutic index drug", cat:"b_pharm", strip:"", list:`
5 warfarin
5 digoxin
8 lithium
8 phenytoin
10 levothyroxine
10 theophylline
12 carbamazepine
12 vancomycin
15 aminoglycosides|gentamicin
15 tacrolimus
15 cyclosporine
15 valproate
20 phenobarbital
20 methotrexate
20 sirolimus
20 everolimus
20 amiodarone
20 flecainide
20 procainamide
20 quinidine
20 lamotrigine
20 mycophenolate
20 clozapine
20 fosphenytoin
20 colchicine
20 heparin
20 insulin
20 busulfan
`},
{q:"Name a drug that discolors urine", cat:"b_pharm", strip:"", list:`
5 phenazopyridine|azo|pyridium
5 rifampin
8 methylene blue
10 nitrofurantoin
12 metronidazole
12 levodopa
15 propofol
15 amitriptyline
15 b vitamins|riboflavin
20 doxorubicin
20 senna
20 phenytoin
20 methocarbamol
20 chloroquine
20 primaquine
20 sulfasalazine
20 triamterene
20 cimetidine
20 indomethacin
20 deferoxamine
20 hydroxocobalamin
20 entacapone
20 phenolphthalein
20 iron sorbitol
20 mitoxantrone
20 rifabutin
20 warfarin
`},
{q:"Name an ototoxic drug", cat:"b_pharm", strip:"", list:`
5 gentamicin|aminoglycosides
5 furosemide|loop diuretics
8 cisplatin
8 vancomycin
10 aspirin|salicylates
10 tobramycin
12 amikacin
12 streptomycin
15 neomycin
15 bumetanide
15 ethacrynic acid
15 carboplatin
20 quinine
20 chloroquine
20 hydroxychloroquine
20 erythromycin
20 azithromycin
20 vincristine
20 oxaliplatin
20 deferoxamine
20 nsaids
20 sildenafil
`},
{q:"Name a nephrotoxic drug", cat:"b_pharm", strip:"", list:`
5 nsaids
5 aminoglycosides|gentamicin
8 vancomycin
8 amphotericin b
10 contrast dye
10 cisplatin
12 lithium
12 cyclosporine
15 tacrolimus
15 acyclovir
15 ace inhibitors
15 methotrexate
20 tenofovir
20 foscarnet
20 cidofovir
20 polymyxin|colistin
20 pentamidine
20 zoledronic acid
20 ifosfamide
20 sulfonamides
20 ppis
20 indinavir
20 piperacillin tazobactam with vancomycin
20 mesalamine
20 gold
20 penicillamine
20 lead
`},
{q:"Name a hepatotoxic drug", cat:"b_pharm", strip:"", list:`
5 acetaminophen|tylenol
5 isoniazid
8 statins
8 amiodarone
10 methotrexate
10 valproate
12 ketoconazole
12 alcohol
15 rifampin
15 pyrazinamide
15 augmentin|amoxicillin clavulanate
15 nitrofurantoin
20 halothane
20 phenytoin
20 carbamazepine
20 propylthiouracil
20 felbamate
20 nevirapine
20 diclofenac
20 leflunomide
20 azathioprine
20 terbinafine
20 tolcapone
20 bosentan
20 kava
20 green tea extract
20 tetracycline
20 flutamide
20 dantrolene
20 niacin
20 sulfasalazine
20 duloxetine
20 trovafloxacin
`},
{q:"Name a prodrug", cat:"b_pharm", strip:"", list:`
5 codeine
5 clopidogrel
8 enalapril
8 valacyclovir
10 levodopa
10 prednisone
12 oseltamivir
12 tramadol
15 lisdexamfetamine|vyvanse
15 cyclophosphamide
15 omeprazole|ppis
15 losartan
20 azathioprine
20 fosphenytoin
20 famciclovir
20 valganciclovir
20 capecitabine
20 tenofovir disoproxil
20 sulfasalazine
20 mycophenolate mofetil
20 dabigatran etexilate
20 fesoterodine
20 sofosbuvir
20 remdesivir
20 prasugrel
20 methenamine
20 sulindac
20 primidone
20 heroin
20 terfenadine
20 spironolactone
20 minoxidil
20 simvastatin
20 lovastatin
20 cortisone
20 fosamprenavir
20 ifosfamide
20 mercaptopurine
20 leflunomide
`},
{q:"Name a drug that causes Stevens-Johnson syndrome", cat:"b_pharm", strip:"", list:`
5 lamotrigine
5 bactrim|sulfonamides
8 carbamazepine
8 allopurinol
10 phenytoin
10 nevirapine
12 phenobarbital
12 penicillins
15 cephalosporins
15 nsaids|oxicams
15 modafinil
15 oxcarbazepine
20 fluoroquinolones
20 sulfasalazine
20 abacavir
20 valproate
20 acetaminophen
20 tetracyclines
20 dapsone
20 zonisamide
20 ethosuximide
20 rifampin
20 vancomycin
20 chlormezanone
20 pembrolizumab
`},
{q:"Name a drug that interacts with grapefruit juice", cat:"b_pharm", strip:"", list:`
5 simvastatin
5 atorvastatin
8 lovastatin
8 felodipine
10 nifedipine
10 amiodarone
12 cyclosporine
12 tacrolimus
15 buspirone
15 sildenafil
15 midazolam
15 triazolam
20 carbamazepine
20 quetiapine
20 sertraline
20 fentanyl
20 oxycodone
20 methadone
20 colchicine
20 clopidogrel
20 ticagrelor
20 rivaroxaban
20 apixaban
20 dronedarone
20 erythromycin
20 verapamil
20 nicardipine
20 saquinavir
20 ivabradine
20 tolvaptan
20 everolimus
20 sirolimus
20 nilotinib
20 lapatinib
20 fexofenadine
20 tamoxifen
`},
{q:"Name a drug that causes hypoglycemia", cat:"b_pharm", strip:"", list:`
5 insulin
5 glipizide|sulfonylureas
8 glyburide
8 glimepiride
10 repaglinide
10 nateglinide
12 fluoroquinolones|levofloxacin
12 alcohol
15 beta blockers
15 quinine
15 pentamidine
15 bactrim
20 salicylates
20 octreotide
20 tramadol
20 haloperidol
20 ace inhibitors
20 disopyramide
20 cibenzoline
20 gatifloxacin
20 chlorpropamide
20 tolbutamide
20 pramlintide
20 hydroxychloroquine
20 propoxyphene
20 lithium
`},
{q:"Name a drug that causes orthostatic hypotension", cat:"b_pharm", strip:"", list:`
5 prazosin|alpha blockers
5 doxazosin
8 terazosin
8 tamsulosin
10 nitrates|nitroglycerin
10 diuretics
12 tricyclics
12 antipsychotics
15 levodopa
15 trazodone
15 opioids
15 sildenafil|pde5 inhibitors
20 clonidine
20 methyldopa
20 hydralazine
20 ace inhibitors
20 beta blockers
20 calcium channel blockers
20 maois
20 benzodiazepines
20 quetiapine
20 risperidone
20 clozapine
20 iloperidone
20 pramipexole
20 ropinirole
20 bromocriptine
20 selegiline
20 alcohol
20 phenoxybenzamine
20 labetalol
`},
{q:"Name a drug that commonly causes weight gain", cat:"b_pharm", strip:"", list:`
5 insulin
5 prednisone|steroids
8 olanzapine
8 mirtazapine
10 quetiapine
10 clozapine
12 sulfonylureas
12 pioglitazone
15 valproate
15 lithium
15 gabapentin
15 pregabalin
20 risperidone
20 paroxetine
20 amitriptyline
20 depo provera
20 megestrol
20 dronabinol
20 cyproheptadine
20 carbamazepine
20 propranolol
20 metoprolol
20 tamoxifen
20 antihistamines
20 vigabatrin
`},
{q:"Name a drug on the Beers list", cat:"b_pharm", strip:"", list:`
5 diphenhydramine|benadryl
5 benzodiazepines
8 hydroxyzine
8 zolpidem
10 amitriptyline
10 muscle relaxants|cyclobenzaprine
12 glyburide
12 sliding scale insulin
15 meperidine
15 nsaids
15 digoxin over 0.125
15 promethazine
20 doxepin over 6 mg
20 meclizine
20 dicyclomine
20 oxybutynin
20 scopolamine
20 nitrofurantoin
20 ppis long term
20 metoclopramide
20 estrogen
20 megestrol
20 antipsychotics
20 barbiturates
20 chlorpropamide
20 glimepiride
20 aspirin primary prevention
20 warfarin
20 rivaroxaban
20 dronedarone
20 amiodarone
20 nifedipine immediate release
20 clonidine
20 doxazosin
20 mineral oil
20 desmopressin
20 testosterone
20 carisoprodol
20 methocarbamol
20 paroxetine
20 chlorpheniramine
20 dimenhydrinate
20 tricyclics
`},
{q:"Name a drug that causes agranulocytosis", cat:"b_pharm", strip:"", list:`
5 clozapine
5 methimazole
8 propylthiouracil|ptu
10 carbamazepine
10 sulfasalazine
12 dapsone
12 bactrim
15 procainamide
15 chloramphenicol
15 ticlopidine
15 metamizole|dipyrone
20 deferiprone
20 levamisole
20 ganciclovir
20 colchicine
20 phenytoin
20 mirtazapine
20 rituximab
20 vancomycin
20 beta lactams
20 chlorpromazine
20 gold
20 penicillamine
20 aminopyrine
`},
{q:"Name a drug that causes peripheral neuropathy", cat:"b_pharm", strip:"", list:`
5 vincristine
5 isoniazid
8 metronidazole
8 cisplatin
10 paclitaxel|taxanes
10 bortezomib
12 thalidomide
12 fluoroquinolones
15 nitrofurantoin
15 linezolid
15 oxaliplatin
15 stavudine
20 didanosine
20 phenytoin
20 colchicine
20 amiodarone
20 dapsone
20 hydralazine
20 disulfiram
20 lenalidomide
20 vitamin b6 excess|pyridoxine
20 statins
20 alcohol
20 chloroquine
20 brentuximab
20 eribulin
20 lithium
20 nitrous oxide
`},
{q:"Name a dosage form that should not be crushed", cat:"b_pharm", strip:"", list:`
5 extended release|er
5 enteric coated|ec
8 sustained release|sr
8 controlled release|cr
10 xl
12 delayed release|dr
12 capsules with beads
15 orally disintegrating tablets
15 sublingual tablets
15 buccal tablets
20 la|long acting
20 oros
20 hazardous drugs|chemotherapy tablets
20 effervescent tablets
20 film coated tablets with bitter taste
20 abuse deterrent formulations
20 osmotic tablets
20 cd|controlled delivery
20 xr
20 soft gel capsules
20 teratogenic tablets
`}
);

/* ---- BOARD PREP: DENTAL (INBDE / NBDHE style) ---- */
RAW.push(
{q:"Name a cause of tooth discoloration", cat:"b_dental", strip:"", list:`
5 coffee|tea|extrinsic stain
5 tetracycline
8 fluorosis
8 smoking|tobacco
10 trauma|pulp necrosis
10 aging
12 root canal treatment
12 amalgam
15 chlorhexidine
15 dentinogenesis imperfecta
15 amelogenesis imperfecta
15 internal resorption|pink tooth
20 minocycline
20 iron supplements
20 erythroblastosis fetalis
20 porphyria
20 hyperbilirubinemia
20 alkaptonuria
20 chromogenic bacteria
20 caries
20 calculus
20 hypoplasia
20 molar incisor hypomineralization
20 turner tooth
20 dentin exposure
20 red wine
20 betel nut
20 silver diamine fluoride
`},
{q:"Name a radiolucent jaw lesion", cat:"b_dental", strip:"", list:`
5 periapical cyst|radicular cyst
5 dentigerous cyst
8 periapical granuloma
8 abscess
10 ameloblastoma
10 odontogenic keratocyst
12 lateral periodontal cyst
12 residual cyst
15 traumatic bone cyst|simple bone cyst
15 central giant cell granuloma
15 stafne bone defect|static bone cyst
15 nasopalatine duct cyst|incisive canal cyst
20 aneurysmal bone cyst
20 glandular odontogenic cyst
20 calcifying odontogenic cyst
20 ameloblastic fibroma
20 odontogenic myxoma
20 langerhans cell histiocytosis
20 multiple myeloma
20 metastatic tumor
20 hyperparathyroidism|brown tumor
20 cherubism
20 osteomyelitis
20 osteoradionecrosis
20 central hemangioma
20 squamous odontogenic tumor
20 botryoid odontogenic cyst
20 buccal bifurcation cyst
20 paradental cyst
20 cemento osseous dysplasia early stage
20 primordial cyst
20 eruption cyst
20 surgical defect
20 maxillary sinus
20 mental foramen
`},
{q:"Name a radiopaque jaw lesion", cat:"b_dental", strip:"", list:`
5 odontoma
5 torus|tori
8 condensing osteitis
8 idiopathic osteosclerosis|bone scar
10 cementoblastoma
10 exostosis
12 retained root tip
12 impacted tooth
15 sialolith|salivary stone
15 cemento osseous dysplasia|florid cemento osseous dysplasia
15 ossifying fibroma
15 fibrous dysplasia
20 osteoma
20 osteosarcoma
20 paget disease
20 tonsillolith
20 calcified lymph node
20 phlebolith
20 carotid calcification
20 sclerotic bone
20 garre osteomyelitis|proliferative periostitis
20 enostosis
20 hypercementosis
20 supernumerary tooth
20 foreign body|amalgam fragment
20 gardner syndrome osteomas
20 calcified stylohyoid ligament|eagle syndrome
20 rhinolith
20 antrolith
`},
{q:"Name a reason to limit epinephrine in local anesthetic", cat:"b_dental", strip:"", list:`
5 uncontrolled hypertension
5 recent heart attack
8 unstable angina
8 uncontrolled hyperthyroidism|thyroid storm
10 arrhythmia
10 pheochromocytoma
12 cocaine use|recent cocaine
12 recent stroke
15 nonselective beta blockers|propranolol
15 tricyclic antidepressants
15 sulfite allergy
20 recent cabg
20 refractory heart failure
20 maois
20 halogenated anesthetics
20 digoxin
20 methamphetamine
20 uncontrolled diabetes
20 severe cardiovascular disease
20 narrow angle glaucoma
20 pregnancy
`},
{q:"Name a condition needing antibiotic prophylaxis before dental work", cat:"b_dental", strip:"", list:`
5 prosthetic heart valve|artificial heart valve
5 previous endocarditis|history of infective endocarditis
8 heart transplant with valvulopathy
10 unrepaired cyanotic congenital heart disease
12 repaired congenital heart defect with prosthetic material|first 6 months after repair
15 repaired chd with residual defect
15 tavr|transcatheter valve
20 annuloplasty ring
20 left ventricular assist device|lvad
20 prosthetic joint in select cases
20 severe immunosuppression
20 chemotherapy neutropenia
20 dialysis shunt|av graft
20 splenectomy
20 uncontrolled diabetes
`},
{q:"Name an odontogenic cyst", cat:"b_dental", strip:"cyst", list:`
5 periapical|radicular
5 dentigerous|follicular
8 odontogenic keratocyst|okc|keratocystic odontogenic tumor
10 residual
10 eruption
12 lateral periodontal
15 gingival cyst of the adult
15 gingival cyst of the newborn|dental lamina cyst
15 glandular odontogenic
15 calcifying odontogenic|gorlin cyst
20 botryoid odontogenic
20 buccal bifurcation
20 paradental
20 orthokeratinized odontogenic
20 primordial
20 inflammatory collateral
`},
{q:"Name an odontogenic tumor", cat:"b_dental", strip:"tumor", list:`
5 ameloblastoma
5 odontoma
8 odontogenic myxoma
10 ameloblastic fibroma
10 cementoblastoma
12 adenomatoid odontogenic tumor|aot
12 calcifying epithelial odontogenic tumor|pindborg
15 squamous odontogenic tumor
15 ameloblastic fibro odontoma
15 central odontogenic fibroma
20 peripheral odontogenic fibroma
20 ameloblastic carcinoma
20 clear cell odontogenic carcinoma
20 ghost cell odontogenic carcinoma
20 odontogenic carcinosarcoma
20 dentinogenic ghost cell tumor
20 primordial odontogenic tumor
20 unicystic ameloblastoma
20 peripheral ameloblastoma
20 cemento ossifying fibroma
20 sclerosing odontogenic carcinoma
`},
{q:"Name a developmental anomaly of teeth", cat:"b_dental", strip:"", list:`
5 hypodontia|missing teeth
5 supernumerary teeth|hyperdontia
8 microdontia|peg lateral
8 macrodontia
10 fusion
10 gemination
12 concrescence
12 dilaceration
15 taurodontism
15 dens invaginatus|dens in dente
15 dens evaginatus
15 enamel pearl
20 talon cusp
20 amelogenesis imperfecta
20 dentinogenesis imperfecta
20 dentin dysplasia
20 regional odontodysplasia|ghost teeth
20 enamel hypoplasia
20 turner tooth
20 hutchinson incisors
20 mulberry molars
20 anodontia
20 oligodontia
20 natal teeth
20 transposition
20 ankylosis
20 hypercementosis
20 supernumerary roots
20 cervical enamel projection
20 mesiodens
20 molar incisor hypomineralization
`},
{q:"Name a bacterium linked to caries or periodontal disease", cat:"b_dental", strip:"", list:`
5 streptococcus mutans|s mutans
5 porphyromonas gingivalis|p gingivalis
8 lactobacillus
10 aggregatibacter actinomycetemcomitans|actinobacillus
10 tannerella forsythia
12 treponema denticola
12 prevotella intermedia
15 fusobacterium nucleatum
15 actinomyces
15 streptococcus sobrinus
20 eikenella corrodens
20 campylobacter rectus
20 capnocytophaga
20 veillonella
20 bifidobacterium
20 streptococcus sanguinis
20 streptococcus mitis
20 streptococcus oralis
20 eubacterium
20 parvimonas micra
20 selenomonas
20 filifactor alocis
20 red complex
20 orange complex
20 candida albicans
`},
{q:"Name a drug that causes dry mouth", cat:"b_dental", strip:"", list:`
5 antihistamines|diphenhydramine
5 antidepressants|amitriptyline
8 anticholinergics|oxybutynin
8 antipsychotics
10 diuretics
10 opioids
12 decongestants
12 benzodiazepines
15 beta blockers
15 muscle relaxants
15 atropine
15 scopolamine
20 ssris
20 clonidine
20 bupropion
20 isotretinoin
20 antiparkinson drugs
20 cannabis
20 methamphetamine
20 tiotropium
20 ipratropium
20 chemotherapy
20 radiation therapy
20 lithium
20 tramadol
20 gabapentin
20 pregabalin
20 hydroxyzine
20 tolterodine
20 solifenacin
20 meclizine
20 promethazine
`},
{q:"Name a medical emergency in the dental office", cat:"b_dental", strip:"", list:`
5 fainting|syncope
5 allergic reaction|anaphylaxis
8 hypoglycemia
8 asthma attack
10 seizure
10 chest pain|angina
12 heart attack
12 hyperventilation
15 airway obstruction|choking
15 local anesthetic toxicity
15 stroke
20 cardiac arrest
20 orthostatic hypotension
20 adrenal crisis
20 hypertensive crisis
20 aspiration of a foreign body
20 bleeding
20 methemoglobinemia
20 malignant hyperthermia
20 overdose
20 thyroid storm
20 panic attack
20 bronchospasm
20 laryngospasm
20 nitrous oxide toxicity
`},
{q:"Name an item in a dental emergency kit", cat:"b_dental", strip:"", list:`
5 epinephrine|epipen
5 oxygen
8 aed
8 nitroglycerin
10 albuterol
10 aspirin
12 glucose|oral glucose
12 diphenhydramine
15 ammonia inhalants
15 bag valve mask|ambu bag
15 midazolam
20 naloxone
20 flumazenil
20 atropine
20 ephedrine
20 hydrocortisone
20 glucagon
20 dextrose 50
20 suction
20 oral airway
20 nasal cannula
20 blood pressure cuff
20 pulse oximeter
20 syringes
20 tourniquet
20 magill forceps
20 cric kit
20 dantrolene
20 esmolol
20 labetalol
`},
{q:"Name a warning sign of oral cancer", cat:"b_dental", strip:"", list:`
5 sore that doesn't heal|non healing ulcer
5 white patch|leukoplakia
8 red patch|erythroplakia
8 lump|mass
10 bleeding
10 numbness
12 difficulty swallowing
12 hoarseness
15 loose teeth
15 ear pain
15 neck lump|lymph node
20 trouble chewing
20 jaw stiffness
20 weight loss
20 voice change
20 dentures not fitting
20 tongue pain
20 induration
20 fixed lymph node
20 speckled leukoplakia
20 verrucous lesion
20 lateral tongue lesion
20 floor of mouth lesion
20 persistent sore throat
`},
{q:"Name a salivary gland disorder", cat:"b_dental", strip:"", list:`
5 dry mouth|xerostomia
5 mumps
8 sialolithiasis|salivary stone
8 sialadenitis
10 mucocele
10 ranula
12 sjogren syndrome
12 pleomorphic adenoma
15 warthin tumor
15 mucoepidermoid carcinoma
15 adenoid cystic carcinoma
20 acinic cell carcinoma
20 sialorrhea|drooling
20 necrotizing sialometaplasia
20 sialadenosis
20 frey syndrome
20 igg4 related disease
20 sarcoidosis|heerfordt syndrome
20 hiv salivary gland disease
20 polymorphous adenocarcinoma
20 canalicular adenoma
20 basal cell adenoma
20 oncocytoma
20 radiation sialadenitis
20 juvenile recurrent parotitis
`},
{q:"Name a G.V. Black caries class or principle", cat:"b_dental", strip:"", list:`
5 class i
5 class ii
8 class iii
8 class iv
10 class v
12 class vi
15 outline form
15 resistance form
15 retention form
15 convenience form
20 removal of remaining caries
20 finishing the enamel walls
20 toilet of the cavity
20 extension for prevention
20 pit and fissure
20 smooth surface
20 proximal surface
20 cervical
20 incisal edge
20 cusp tip
`},
{q:"Name a risk factor for periodontal disease", cat:"b_dental", strip:"", list:`
5 smoking
5 diabetes
8 poor oral hygiene
8 genetics
10 stress
10 pregnancy
12 hormonal changes
12 medications
15 poor nutrition
15 hiv
15 age
15 obesity
20 bruxism
20 crowded teeth
20 overhanging restorations
20 mouth breathing
20 osteoporosis
20 down syndrome
20 leukemia
20 neutropenia
20 immunosuppression
20 cannabis
20 vitamin c deficiency
20 rheumatoid arthritis
20 cardiovascular disease
20 il 1 polymorphism
20 low socioeconomic status
`},
{q:"Name a syndrome with dental manifestations", cat:"b_dental", strip:"syndrome", list:`
5 down
8 ectodermal dysplasia
10 cleidocranial dysplasia
10 gardner
12 papillon lefevre
12 treacher collins
15 pierre robin
15 apert
15 crouzon
15 peutz jeghers
20 gorlin|basal cell nevus
20 van der woude
20 williams
20 marfan
20 ehlers danlos
20 osteogenesis imperfecta
20 congenital syphilis
20 hypophosphatasia
20 vitamin d resistant rickets
20 sturge weber
20 neurofibromatosis
20 mccune albright
20 cherubism
20 prader willi
20 rett
20 tuberous sclerosis
20 incontinentia pigmenti
20 ellis van creveld
20 hallermann streiff
20 rieger
`},
{q:"Name a contraindication to nitrous oxide sedation", cat:"b_dental", strip:"", list:`
5 pregnancy first trimester
5 copd
8 nasal congestion|cold
10 pneumothorax
10 bowel obstruction
12 recent ear surgery|middle ear surgery
12 recent eye surgery|intraocular gas
15 b12 deficiency
15 claustrophobia
15 severe psychiatric disorder
20 mthfr deficiency
20 bleomycin therapy
20 sinusitis
20 drug abuse history
20 uncooperative patient
20 multiple sclerosis
20 myasthenia gravis
20 recent pneumoencephalogram
`},
{q:"Name a tooth deposit or stain", cat:"b_dental", strip:"", list:`
5 plaque|biofilm
5 tartar|calculus
8 food debris
10 materia alba
10 acquired pellicle|pellicle
12 tobacco stain
12 coffee stain
15 green stain
15 black line stain
15 orange stain
20 chlorhexidine stain
20 metallic stain
20 supragingival calculus
20 subgingival calculus
20 serumal calculus
20 dental tartar
20 intrinsic stain
20 extrinsic stain
20 tetracycline stain
20 fluorosis
20 chromogenic bacteria
`},
{q:"Name a type of fluoride", cat:"b_dental", strip:"fluoride", list:`
5 sodium
5 fluoride varnish|varnish
8 stannous
8 community water fluoridation|water
10 fluoride toothpaste|toothpaste
12 acidulated phosphate|apf
12 silver diamine
15 fluoride gel
15 fluoride foam
15 fluoride rinse
20 fluoride supplements|tablets|drops
20 sodium monofluorophosphate|mfp
20 amine
20 titanium tetrafluoride
20 fluoridated salt
20 fluoridated milk
20 slow release devices
20 calcium fluoride
20 prescription 5000 ppm|prevident
`}
);

/* ---- BOARD PREP: PA (PANCE style: clinical diagnosis & management by organ system) ---- */
RAW.push(
{q:"Name a cause of atrial fibrillation", cat:"b_pa", strip:"", list:`
5 hypertension
5 hyperthyroidism
8 heart failure
8 alcohol|holiday heart
10 coronary artery disease|ischemia
10 mitral valve disease|mitral stenosis
12 sleep apnea
12 pulmonary embolism
15 age
15 obesity
15 cardiac surgery|post op
15 pericarditis
20 copd
20 sepsis
20 caffeine
20 stimulants|cocaine
20 electrolyte imbalance|hypokalemia
20 hypomagnesemia
20 cardiomyopathy
20 myocarditis
20 diabetes
20 pneumonia
20 rheumatic heart disease
20 wpw
20 athletic training
20 lung cancer
20 sick sinus syndrome
20 congenital heart disease
20 theophylline
`},
{q:"Name an ECG abnormality", cat:"b_pa", strip:"", list:`
5 st elevation
5 atrial fibrillation
8 st depression
8 t wave inversion
10 peaked t waves
10 heart block|av block
12 bundle branch block|lbbb|rbbb
12 prolonged qt
15 q waves
15 atrial flutter|sawtooth
15 ventricular tachycardia
15 ventricular fibrillation
20 delta wave|wpw
20 left ventricular hypertrophy
20 right axis deviation
20 left axis deviation
20 low voltage
20 electrical alternans
20 diffuse st elevation|pr depression
20 u waves
20 s1q3t3
20 brugada pattern
20 osborn waves|j waves
20 premature ventricular contractions|pvcs
20 premature atrial contractions|pacs
20 sinus bradycardia
20 sinus tachycardia
20 svt
20 torsades de pointes
20 wellens sign
20 de winter t waves
20 sgarbossa criteria
20 epsilon wave
20 mobitz i|wenckebach
20 mobitz ii
20 third degree block|complete heart block
20 short pr
20 long pr|first degree block
20 junctional rhythm
20 multifocal atrial tachycardia
`},
{q:"Name a heart murmur or extra heart sound", cat:"b_pa", strip:"murmur", list:`
5 aortic stenosis
5 mitral regurgitation
8 s3
8 s4
10 mitral stenosis
10 aortic regurgitation
12 mitral valve prolapse|midsystolic click
12 split s2
15 vsd|ventricular septal defect
15 pericardial friction rub|rub
15 hypertrophic cardiomyopathy
15 innocent murmur|still murmur
20 tricuspid regurgitation
20 pulmonic stenosis
20 asd|atrial septal defect
20 patent ductus arteriosus|machinery murmur
20 austin flint murmur
20 graham steell murmur
20 opening snap
20 ejection click
20 venous hum
20 paradoxical split s2
20 fixed split s2
20 gallop
20 diastolic rumble
20 carvallo sign
20 tumor plop
20 mammary souffle
`},
{q:"Name a cause of acute kidney injury", cat:"b_pa", strip:"", list:`
5 dehydration|volume depletion
5 nsaids
8 sepsis
8 contrast dye
10 urinary obstruction|bph
10 acute tubular necrosis
12 heart failure|cardiorenal
12 aminoglycosides
15 rhabdomyolysis
15 interstitial nephritis
15 ace inhibitors|arbs
15 hemorrhage
20 vancomycin
20 kidney stones
20 glomerulonephritis
20 hepatorenal syndrome
20 cirrhosis
20 hus
20 ttp
20 vasculitis
20 cancer|bladder cancer
20 lithium
20 cisplatin
20 amphotericin
20 tumor lysis syndrome
20 multiple myeloma
20 renal artery stenosis
20 abdominal compartment syndrome
20 burns
20 diarrhea
20 vomiting
20 diuretics
20 calcineurin inhibitors
20 neurogenic bladder
20 cholesterol emboli
`},
{q:"Name a pathogen that causes pneumonia", cat:"b_pa", strip:"", list:`
5 streptococcus pneumoniae|pneumococcus
8 haemophilus influenzae
8 influenza
8 covid|sars cov 2
10 mycoplasma pneumoniae
10 staphylococcus aureus|mrsa
12 klebsiella
12 legionella
15 chlamydia pneumoniae|chlamydophila
15 pseudomonas
15 rsv
15 moraxella catarrhalis
20 pneumocystis|pcp
20 tuberculosis
20 anaerobes|aspiration
20 histoplasma
20 coccidioides
20 blastomyces
20 aspergillus
20 cryptococcus
20 coxiella burnetii|q fever
20 chlamydia psittaci
20 francisella tularensis
20 adenovirus
20 parainfluenza
20 metapneumovirus
20 cmv
20 nocardia
20 acinetobacter
20 e coli
20 group b strep
20 bordetella pertussis
20 hantavirus
20 bacillus anthracis
20 yersinia pestis
`},
{q:"Name a cause of GI bleeding", cat:"b_pa", strip:"", list:`
5 peptic ulcer
5 hemorrhoids
8 diverticulosis
8 esophageal varices
10 colon cancer
10 mallory weiss tear
12 gastritis
12 angiodysplasia|avm
15 inflammatory bowel disease|ulcerative colitis
15 anal fissure
15 esophagitis
20 dieulafoy lesion
20 ischemic colitis
20 infectious colitis
20 polyps
20 meckel diverticulum
20 aortoenteric fistula
20 gave|watermelon stomach
20 cameron lesion
20 hemobilia
20 boerhaave
20 nsaid enteropathy
20 radiation proctitis
20 intussusception
20 stomach cancer
20 post polypectomy bleed
20 anticoagulants
`},
{q:"Name a cause of a red eye", cat:"b_pa", strip:"", list:`
5 conjunctivitis|pink eye
5 allergies|allergic conjunctivitis
8 subconjunctival hemorrhage
8 dry eye
10 corneal abrasion
10 acute angle closure glaucoma
12 uveitis|iritis
12 blepharitis
15 keratitis
15 foreign body
15 episcleritis
15 scleritis
20 stye
20 chalazion
20 contact lens overuse
20 herpes zoster ophthalmicus
20 herpes simplex keratitis
20 endophthalmitis
20 orbital cellulitis
20 preseptal cellulitis
20 chemical burn
20 hyphema
20 pterygium
20 pinguecula
20 dacryocystitis
20 corneal ulcer
20 trauma
20 thyroid eye disease
20 carotid cavernous fistula
20 ocular rosacea
`},
{q:"Name a cause of hearing loss", cat:"b_pa", strip:"", list:`
5 ear wax|cerumen impaction
5 aging|presbycusis
8 noise exposure
8 ear infection|otitis media
10 otosclerosis
10 menieres disease
12 acoustic neuroma|vestibular schwannoma
12 ototoxic drugs|aminoglycosides
15 perforated eardrum
15 cholesteatoma
15 sudden sensorineural hearing loss
15 otitis media with effusion
20 head trauma
20 loop diuretics
20 cisplatin
20 aspirin
20 congenital cmv
20 rubella
20 meningitis
20 mumps
20 measles
20 syphilis
20 autoimmune inner ear disease
20 foreign body
20 otitis externa
20 barotrauma
20 paget disease
20 alport syndrome
20 waardenburg syndrome
20 pendred syndrome
20 usher syndrome
20 stroke
20 multiple sclerosis
`},
{q:"Name a cause of syncope", cat:"b_pa", strip:"", list:`
5 vasovagal
5 orthostatic hypotension
8 dehydration
8 arrhythmia
10 aortic stenosis
10 hypertrophic cardiomyopathy
12 heart block
12 ventricular tachycardia
15 situational|micturition|cough syncope
15 carotid sinus hypersensitivity
15 medications
15 pulmonary embolism
20 hypoglycemia
20 seizure
20 long qt
20 brugada
20 wpw
20 sick sinus syndrome
20 aortic dissection
20 tamponade
20 subclavian steal
20 pots
20 autonomic neuropathy
20 parkinsons
20 blood loss
20 pregnancy
20 vertebrobasilar tia
20 pacemaker malfunction
20 atrial myxoma
`},
{q:"Name a cause of pleural effusion", cat:"b_pa", strip:"", list:`
5 heart failure
5 pneumonia|parapneumonic
8 cancer|malignancy
8 pulmonary embolism
10 cirrhosis|hepatic hydrothorax
10 nephrotic syndrome
12 tuberculosis
12 kidney failure
15 empyema
15 pancreatitis
15 lupus
15 rheumatoid arthritis
20 hypoalbuminemia
20 trauma|hemothorax
20 chylothorax
20 mesothelioma
20 lymphoma
20 peritoneal dialysis
20 meigs syndrome
20 asbestos
20 post cabg
20 dressler syndrome
20 esophageal rupture
20 amiodarone
20 methotrexate
20 hypothyroidism
20 sarcoidosis
20 uremia
20 subphrenic abscess
`},
{q:"Name a cause of hyponatremia", cat:"b_pa", strip:"", list:`
5 siadh
5 heart failure
8 diuretics|thiazides
8 cirrhosis
10 vomiting
10 diarrhea
12 psychogenic polydipsia|drinking too much water
12 ssris
15 hypothyroidism
15 adrenal insufficiency
15 kidney failure
15 nephrotic syndrome
20 beer potomania
20 tea and toast diet
20 exercise associated|marathon runners
20 carbamazepine
20 mdma
20 cerebral salt wasting
20 hyperglycemia|pseudohyponatremia
20 hyperlipidemia
20 small cell lung cancer
20 pneumonia
20 meningitis
20 head injury
20 post op pain
20 tpn
20 cyclophosphamide
20 desmopressin
`},
{q:"Name a cause of hypothyroidism", cat:"b_pa", strip:"", list:`
5 hashimoto thyroiditis
5 radioactive iodine
8 thyroidectomy
8 iodine deficiency
10 lithium
10 amiodarone
12 postpartum thyroiditis
12 subacute thyroiditis|de quervain
15 central hypothyroidism|pituitary
15 congenital hypothyroidism
15 neck radiation
20 checkpoint inhibitors
20 tyrosine kinase inhibitors
20 interferon
20 riedel thyroiditis
20 sheehan syndrome
20 methimazole
20 propylthiouracil
20 interleukin 2
20 thyroid dysgenesis
20 silent thyroiditis
20 iodine excess|wolff chaikoff
20 sarcoidosis
20 hemochromatosis
20 amyloidosis
`},
{q:"Name a symptom of major depression", cat:"b_pa", strip:"", list:`
5 sadness|depressed mood
5 loss of interest|anhedonia
8 sleep changes|insomnia|hypersomnia
8 fatigue|low energy
10 guilt|worthlessness
10 poor concentration
12 appetite change|weight change
12 suicidal thoughts
15 psychomotor retardation
15 psychomotor agitation
15 hopelessness
20 irritability
20 social withdrawal
20 crying spells
20 low libido
20 somatic complaints|aches and pains
20 indecisiveness
20 slowed speech
20 thoughts of death
20 tearfulness
`},
{q:"Name a cause of secondary amenorrhea", cat:"b_pa", strip:"", list:`
5 pregnancy
5 pcos|polycystic ovary syndrome
8 stress
8 excessive exercise
10 low body weight|anorexia
10 hypothyroidism
12 hyperprolactinemia|prolactinoma
12 menopause
15 premature ovarian insufficiency
15 birth control|contraceptives
15 breastfeeding
20 asherman syndrome
20 sheehan syndrome
20 cushing syndrome
20 hyperthyroidism
20 antipsychotics
20 chemotherapy
20 radiation
20 pituitary tumor
20 congenital adrenal hyperplasia
20 obesity
20 celiac disease
20 diabetes
20 depo provera
20 hypothalamic amenorrhea
20 androgen secreting tumor
`},
{q:"Name a pediatric orthopedic condition", cat:"b_pa", strip:"", list:`
5 scoliosis
5 clubfoot
8 hip dysplasia|ddh
8 nursemaid elbow
10 osgood schlatter
10 slipped capital femoral epiphysis|scfe
12 legg calve perthes
12 greenstick fracture
15 salter harris fracture
15 buckle fracture
15 supracondylar fracture
15 sever disease
20 toddler fracture
20 transient synovitis
20 septic arthritis
20 osteomyelitis
20 juvenile idiopathic arthritis
20 genu varum|bow legs
20 genu valgum|knock knees
20 in toeing
20 flat feet
20 metatarsus adductus
20 osteogenesis imperfecta
20 osteosarcoma
20 ewing sarcoma
20 kohler disease
20 sinding larsen johansson
20 tarsal coalition
20 blount disease
20 spondylolysis
20 torticollis
20 little league elbow
20 osteochondritis dissecans
`},
{q:"Name a classic chest X-ray finding", cat:"b_pa", strip:"", list:`
5 infiltrate|consolidation
5 pneumothorax
8 cardiomegaly
8 pleural effusion
10 kerley b lines
10 air bronchograms
12 hampton hump
12 westermark sign
15 deep sulcus sign
15 widened mediastinum
15 hilar lymphadenopathy
15 hyperinflation
20 bat wing|butterfly pattern
20 boot shaped heart
20 egg on a string
20 figure 3 sign
20 rib notching
20 steeple sign
20 thumbprint sign
20 water bottle heart
20 ghon complex
20 cavitation
20 honeycombing
20 pleural plaques
20 eggshell calcification
20 silhouette sign
20 golden s sign
20 tram tracks
20 tree in bud
20 snowman sign
20 free air under the diaphragm
20 atelectasis
20 meniscus sign
20 continuous diaphragm sign
`},
{q:"Name a medical ethics or legal concept", cat:"b_pa", strip:"", list:`
5 informed consent
5 hipaa|confidentiality
8 autonomy
8 beneficence
10 non maleficence
10 justice
12 malpractice
12 advance directive
15 power of attorney|healthcare proxy
15 dnr
15 emtala
15 mandatory reporting
20 duty to warn|tarasoff
20 capacity
20 competence
20 surrogate decision maker
20 minors and consent|emancipated minor
20 mature minor
20 stark law
20 anti kickback statute
20 good samaritan law
20 negligence
20 standard of care
20 battery
20 abandonment
20 conflict of interest
20 double effect
20 futility
20 polst
20 living will
20 scope of practice
20 supervision agreement
20 credentialing
20 licensure
20 res ipsa loquitur
20 statute of limitations
20 telehealth regulations
20 dea registration
`}
);

/* ---- BOARD PREP: NP (AANP / ANCC FNP style: primary care across the lifespan) ---- */
RAW.push(
{q:"Name a USPSTF-recommended screening", cat:"b_np", strip:"screening", list:`
5 colorectal cancer|colonoscopy
5 breast cancer|mammogram
8 cervical cancer|pap smear
8 blood pressure|hypertension
10 depression
10 diabetes|prediabetes
12 hiv
12 hepatitis c
15 lung cancer|low dose ct
15 osteoporosis|bone density
15 abdominal aortic aneurysm|aaa
15 obesity|bmi
20 chlamydia
20 gonorrhea
20 syphilis
20 hepatitis b
20 tobacco use
20 unhealthy alcohol use
20 drug use
20 intimate partner violence
20 anxiety
20 statin use for cvd prevention
20 gestational diabetes
20 preeclampsia
20 rh incompatibility
20 bacteriuria in pregnancy
20 newborn hearing
20 newborn hypothyroidism
20 sickle cell newborn
20 pku
20 vision in children
20 latent tb
20 brca risk assessment
20 perinatal depression
20 suicide risk in adolescents
20 falls prevention in older adults
`},
{q:"Name a vaccine on the childhood schedule", cat:"b_np", strip:"vaccine", list:`
5 mmr
5 dtap
8 polio|ipv
8 hepatitis b
10 varicella|chickenpox
10 hib
12 pneumococcal|pcv
12 rotavirus
15 hepatitis a
15 influenza|flu
15 hpv
15 tdap
20 meningococcal|menacwy
20 men b
20 covid
20 rsv antibody|nirsevimab
`},
{q:"Name a developmental red flag in a child", cat:"b_np", strip:"", list:`
5 not walking by 18 months
5 no words by 16 months
8 not babbling by 12 months
8 loss of skills|regression
10 no social smile
10 not pointing
12 poor eye contact
12 not responding to name
15 not sitting by 9 months
15 not rolling over by 6 months
15 no two word phrases by 2 years
20 head lag after 4 months
20 persistent primitive reflexes
20 toe walking
20 hand preference before 18 months
20 not following simple commands
20 no pretend play
20 repetitive behaviors
20 hypotonia
20 hypertonia
20 asymmetric movements
20 not tracking objects
20 not reaching for objects
20 failure to thrive
20 abnormal head size
20 not responding to sounds
20 unintelligible speech at 3
20 not imitating
`},
{q:"Name a cause of vaginitis or vaginal discharge", cat:"b_np", strip:"", list:`
5 yeast infection|candidiasis
5 bacterial vaginosis|bv
8 trichomoniasis
10 chlamydia
10 gonorrhea
12 atrophic vaginitis|vaginal atrophy
15 foreign body|retained tampon
15 contact dermatitis
15 cervicitis
20 desquamative inflammatory vaginitis
20 lichen sclerosus
20 lichen planus
20 herpes
20 normal physiologic discharge
20 cytolytic vaginosis
20 group a strep
20 pid
20 cervical cancer
20 fistula
20 douching
20 aerobic vaginitis
`},
{q:"Name a contraindication to estrogen-containing birth control", cat:"b_np", strip:"", list:`
5 smoking over 35
5 history of blood clots|dvt|pe
8 migraine with aura
8 breast cancer
10 uncontrolled hypertension
10 stroke
12 heart disease
12 liver disease
15 postpartum under 21 days
15 thrombophilia|factor v leiden
15 major surgery with immobilization
20 lupus with antiphospholipid antibodies
20 diabetes with vascular disease
20 complicated valvular heart disease
20 liver tumor
20 undiagnosed vaginal bleeding
20 pregnancy
20 peripartum cardiomyopathy
20 bariatric surgery malabsorption
20 multiple cv risk factors
20 acute hepatitis
20 gallbladder disease
20 certain anticonvulsants
`},
{q:"Name a symptom of menopause", cat:"b_np", strip:"", list:`
5 hot flashes
5 night sweats
8 irregular periods
8 mood swings
10 vaginal dryness
10 insomnia|sleep problems
12 weight gain
12 low libido
15 brain fog|memory problems
15 painful sex|dyspareunia
15 urinary incontinence
20 joint pain
20 hair thinning
20 dry skin
20 anxiety
20 depression
20 palpitations
20 headaches
20 fatigue
20 breast tenderness
20 urinary urgency
20 recurrent utis
20 osteoporosis
20 heart disease risk
20 genitourinary syndrome of menopause
`},
{q:"Name a routine prenatal lab or test", cat:"b_np", strip:"", list:`
5 ultrasound
5 blood type|abo rh
8 glucose challenge test|gestational diabetes screen
8 cbc
10 hiv
10 hepatitis b
12 syphilis|rpr
12 rubella immunity
15 urine culture
15 group b strep
15 nipt|cell free dna
15 hcg
20 antibody screen
20 varicella immunity
20 chlamydia
20 gonorrhea
20 hepatitis c
20 pap smear
20 quad screen
20 nuchal translucency
20 anatomy scan
20 carrier screening
20 tsh
20 urinalysis
20 hemoglobin electrophoresis
20 tb screen
20 lead level
20 vitamin d
20 non stress test
20 biophysical profile
20 amniocentesis
20 cvs|chorionic villus sampling
20 fetal fibronectin
20 kleihauer betke
`},
{q:"Name a geriatric syndrome", cat:"b_np", strip:"", list:`
5 falls
5 delirium
8 dementia
8 urinary incontinence
10 frailty
10 polypharmacy
12 pressure injuries
12 malnutrition
15 depression
15 sarcopenia
15 functional decline
20 sleep disorders
20 hearing loss
20 vision loss
20 dizziness
20 syncope
20 elder abuse
20 social isolation
20 failure to thrive
20 constipation
20 dysphagia
20 osteoporosis
20 caregiver burden
`},
{q:"Name a red flag for low back pain", cat:"b_np", strip:"", list:`
5 saddle anesthesia
5 bowel or bladder incontinence|urinary retention
8 fever
8 weight loss
10 history of cancer
10 night pain
12 age over 50
12 trauma
15 iv drug use
15 progressive weakness
15 foot drop
20 steroid use
20 immunosuppression
20 osteoporosis
20 pain not improving after 6 weeks
20 pulsatile abdominal mass
20 pain at rest
20 recent infection
20 bilateral sciatica
20 cauda equina
`},
{q:"Name a red flag for headache", cat:"b_np", strip:"", list:`
5 worst headache of life|thunderclap
5 fever with stiff neck
8 new headache over 50
8 neurologic deficits
10 papilledema
10 headache after head trauma
12 change in pattern
12 waking from sleep
15 worse with valsalva|coughing
15 pregnancy or postpartum
15 immunosuppression|hiv
15 cancer history
20 jaw claudication
20 visual loss
20 seizure
20 confusion
20 positional headache
20 progressive headache
20 systemic symptoms
20 anticoagulant use
`},
{q:"Name a lifestyle change that lowers blood pressure", cat:"b_np", strip:"", list:`
5 lower sodium|less salt
5 exercise
8 weight loss
8 dash diet
10 limit alcohol
10 quit smoking
12 more potassium
12 stress reduction
15 better sleep
15 limit caffeine
15 mediterranean diet
20 meditation
20 yoga
20 isometric exercise
20 treat sleep apnea
20 home bp monitoring
20 reduce processed food
20 more fruits and vegetables
20 limit nsaids
20 limit decongestants
20 social support
`},
{q:"Name a cause of chronic diarrhea", cat:"b_np", strip:"", list:`
5 irritable bowel syndrome|ibs
5 lactose intolerance
8 celiac disease
8 crohns disease
10 ulcerative colitis
10 medications
12 microscopic colitis
12 giardia
15 hyperthyroidism
15 bile acid malabsorption
15 sibo
15 c diff
20 metformin
20 laxative abuse
20 pancreatic insufficiency
20 chronic pancreatitis
20 diabetes
20 colon cancer
20 carcinoid
20 vipoma
20 zollinger ellison
20 hiv
20 radiation
20 short bowel syndrome
20 whipple disease
20 sugar alcohols|sorbitol
20 cystic fibrosis
20 ischemic colitis
20 alcohol
20 fodmaps
`},
{q:"Name a childhood rash or exanthem", cat:"b_np", strip:"", list:`
5 chickenpox
5 measles
8 hand foot and mouth
8 fifth disease|slapped cheek
10 roseola
10 scarlet fever
12 impetigo
12 eczema
15 rubella
15 diaper rash
15 molluscum
15 pityriasis rosea
20 kawasaki disease
20 hsp
20 erythema multiforme
20 urticaria
20 tinea
20 scabies
20 heat rash
20 cradle cap
20 erythema toxicum
20 neonatal acne
20 milia
20 meningococcemia
20 rocky mountain spotted fever
20 lyme disease
20 gianotti crosti
20 mis c
20 drug rash
20 contact dermatitis
`},
{q:"Name a cause of sore throat", cat:"b_np", strip:"", list:`
5 virus|viral pharyngitis
5 strep throat|group a strep
8 common cold
8 flu
10 mono|ebv
10 allergies|postnasal drip
12 covid
12 acid reflux
15 tonsillitis
15 peritonsillar abscess
15 dry air
15 smoking
20 gonorrhea
20 epiglottitis
20 retropharyngeal abscess
20 diphtheria
20 hiv
20 herpangina
20 hand foot and mouth
20 thrush
20 lemierre syndrome
20 thyroiditis
20 shouting|voice strain
20 cancer
20 kawasaki
`},
{q:"Name a health promotion counseling topic", cat:"b_np", strip:"", list:`
5 smoking cessation
5 exercise|physical activity
8 healthy diet|nutrition
8 weight management
10 alcohol
10 seat belts
12 sun protection
12 safe sex
15 vaccines
15 sleep
15 stress management
15 car seats
20 helmets
20 firearm safety
20 drowning prevention
20 poison prevention
20 safe sleep for infants
20 dental care
20 fall prevention
20 contraception
20 folic acid
20 breastfeeding
20 screen time
20 bullying
20 mental health
20 drug use
20 vaping
20 advance care planning
20 home safety
20 driving safety in older adults
`},
{q:"Name a health behavior or nursing theory used in NP practice", cat:"b_np", strip:"", list:`
5 health belief model
5 stages of change|transtheoretical model
8 maslows hierarchy of needs
10 pender health promotion model
10 orem self care
12 social cognitive theory|bandura
12 motivational interviewing
15 theory of planned behavior
15 neuman systems
15 roy adaptation
15 benner novice to expert
20 watson caring
20 leininger culture care
20 peplau interpersonal
20 erikson psychosocial stages
20 piaget cognitive development
20 kohlberg moral development
20 freud psychosexual stages
20 social ecological model
20 diffusion of innovations
20 lewin change theory
20 self efficacy
20 locus of control
20 precede proceed
20 nightingale environmental theory
`},
{q:"Name an NP professional practice or legal concept", cat:"b_np", strip:"", list:`
5 scope of practice
5 prescriptive authority
8 full practice authority
8 collaborative agreement|collaborative practice
10 hipaa
10 informed consent
12 malpractice|liability
12 dea registration
15 board of nursing
15 certification|aanp|ancc
15 credentialing
15 privileging
20 incident to billing
20 medicare
20 medicaid
20 cpt codes
20 icd 10
20 quality measures
20 evidence based practice
20 peer review
20 continuing education
20 license renewal
20 mandatory reporting
20 advance directives
20 emtala
20 telehealth
20 nurse practice act
20 consensus model|lacne
20 aprn compact
20 standard of care
20 negligence
20 ethics
20 cultural competence
20 health literacy
`},
{q:"Name a risk factor for osteoporosis", cat:"b_np", strip:"", list:`
5 menopause|low estrogen
5 age
8 female
8 smoking
10 steroid use|glucocorticoids
10 low body weight
12 family history
12 alcohol
15 low calcium
15 low vitamin d
15 sedentary lifestyle
15 white or asian
20 rheumatoid arthritis
20 hyperthyroidism
20 hyperparathyroidism
20 ppis
20 anticonvulsants
20 aromatase inhibitors
20 depo provera
20 celiac disease
20 anorexia
20 hypogonadism
20 diabetes
20 ssris
20 heparin
20 levothyroxine excess
20 previous fracture
20 kidney disease
20 multiple myeloma
`},
{q:"Name a cause of urinary incontinence", cat:"b_np", strip:"", list:`
5 aging
5 pregnancy|childbirth
8 menopause
8 overactive bladder
10 bph|enlarged prostate
10 uti
12 obesity
12 diuretics
15 dementia
15 stroke
15 constipation
20 diabetes
20 multiple sclerosis
20 spinal cord injury
20 parkinsons
20 prostate surgery
20 pelvic organ prolapse
20 caffeine
20 alcohol
20 chronic cough
20 sedatives
20 immobility
20 delirium
20 atrophic vaginitis
20 fistula
`},
{q:"Name a cause of itching (pruritus)", cat:"b_np", strip:"", list:`
5 dry skin|xerosis
5 eczema
8 allergies
8 hives|urticaria
10 bug bites
10 scabies
12 psoriasis
12 contact dermatitis
15 liver disease|cholestasis
15 kidney disease|uremia
15 lice
15 fungal infection
20 iron deficiency
20 thyroid disease
20 lymphoma
20 polycythemia vera
20 opioids
20 diabetes
20 hiv
20 pregnancy|cholestasis of pregnancy
20 lichen planus
20 dermatitis herpetiformis
20 anxiety
20 neuropathy
20 brachioradial pruritus
20 notalgia paresthetica
20 shingles
20 pinworms
20 drug reaction
`}
);

/* ---- BOARD PREP: DENTAL (extra) ---- */
RAW.push(
{q:"Name a structure seen on a panoramic radiograph", cat:"b_dental", strip:"", list:`
5 maxillary sinus
8 mandibular canal|inferior alveolar canal
10 mental foramen
12 condyle
12 coronoid process
15 hard palate
15 nasal cavity
20 zygomatic arch
20 hyoid bone
20 tongue shadow|dorsum of tongue
20 airway|pharyngeal airway
20 mastoid process
20 styloid process
20 articular eminence
20 external oblique ridge
20 mylohyoid ridge
20 genial tubercles
20 lingual foramen
20 maxillary tuberosity
20 pterygomaxillary fissure
20 orbit
20 inferior turbinate
20 nasal septum
20 earlobe
20 cervical vertebrae
20 ghost image
20 soft palate
20 glenoid fossa
20 sigmoid notch
20 inferior border of the mandible
20 incisive foramen
20 anterior nasal spine
20 infraorbital canal
`},
{q:"Name a pulpal or periapical diagnosis", cat:"b_dental", strip:"", list:`
5 irreversible pulpitis
5 reversible pulpitis
8 pulp necrosis|necrotic pulp
10 normal pulp
12 symptomatic irreversible pulpitis
12 asymptomatic irreversible pulpitis
15 symptomatic apical periodontitis
15 asymptomatic apical periodontitis
15 acute apical abscess
20 chronic apical abscess
20 condensing osteitis
20 previously treated
20 previously initiated therapy
20 normal apical tissues
20 phoenix abscess
20 internal resorption
20 external cervical resorption
20 cracked tooth syndrome
20 vertical root fracture
20 pulp stones|pulp calcification
20 hyperplastic pulpitis|pulp polyp
20 periapical cyst
20 periapical granuloma
`},
{q:"Name a dental impression material", cat:"b_dental", strip:"impression material", list:`
5 alginate
8 polyvinyl siloxane|pvs|vinyl polysiloxane|addition silicone
10 polyether
12 putty
15 condensation silicone
15 polysulfide|rubber base
20 agar|reversible hydrocolloid
20 irreversible hydrocolloid
20 impression compound
20 zinc oxide eugenol paste
20 impression plaster
20 impression wax
20 digital impression|intraoral scan
20 light body|wash
20 heavy body
20 medium body
20 monophase
20 tray adhesive
20 bite registration material
20 vinyl polyether hybrid
20 tissue conditioner
`},
{q:"Name a medication that raises bleeding risk in oral surgery", cat:"b_dental", strip:"", list:`
5 warfarin|coumadin
5 aspirin
8 clopidogrel|plavix
8 apixaban|eliquis
10 rivaroxaban|xarelto
10 heparin
12 dabigatran|pradaxa
12 ibuprofen|nsaids
15 ticagrelor|brilinta
15 prasugrel|effient
15 enoxaparin|lovenox
20 edoxaban|savaysa
20 cilostazol
20 dipyridamole
20 fish oil
20 ginkgo
20 garlic supplements
20 vitamin e
20 ssris
20 chemotherapy
20 naproxen
20 ketorolac
20 fondaparinux
20 alcohol
20 turmeric
20 ginseng
20 dong quai
20 st johns wort
`},
{q:"Name a stage of tooth development", cat:"b_dental", strip:"stage", list:`
5 eruption
8 bud
8 cap
8 bell
10 initiation
12 apposition
12 calcification|mineralization
15 maturation
15 root formation
20 dental lamina
20 enamel organ
20 dental papilla
20 dental follicle|dental sac
20 hertwig epithelial root sheath|hers
20 morphodifferentiation
20 histodifferentiation
20 proliferation
20 early bell
20 late bell
20 crown formation
20 exfoliation
20 apexogenesis|root completion
20 succedaneous lamina
`}
);

/* Daily vs Practice: every prompt belongs to exactly one side. Near-duplicate prompts are kept on opposite sides. */
/* ---- NEW STANDARD DAILY PROMPTS: MEDICINE (batch 2026-10-31) ----
   Answers are listed most-common first; points come from list position. */
function P(q,cat,strip,txt,added){ RAW.push({q,cat,strip,added:added||"2026-10-31",
  list:txt.trim().split("\n").map(s=>s.trim()).filter(Boolean).map(s=>"1 "+s).join("\n")}); }

P("Name a cause of nausea and vomiting","clinical","",`
food poisoning
stomach flu|gastroenteritis|viral gastroenteritis|norovirus
pregnancy|morning sickness
motion sickness|car sickness|sea sickness
migraine
chemotherapy
alcohol|hangover|drinking too much
anxiety
medication side effect|medications
appendicitis
gallstones|gallbladder attack|cholecystitis
pancreatitis
bowel obstruction|intestinal obstruction|small bowel obstruction
acid reflux|gerd|heartburn
stomach ulcer|peptic ulcer|ulcer
opioids|morphine
heart attack
concussion|head injury
vertigo
kidney stones
anesthesia|after surgery|postoperative nausea
overeating
food allergy
hepatitis
diabetic ketoacidosis|dka
gastroparesis
labyrinthitis
meningitis
uremia|kidney failure
hyperemesis gravidarum
cannabis hyperemesis|cannabinoid hyperemesis syndrome
increased intracranial pressure|brain tumor
stomach cancer
radiation therapy
digoxin toxicity
glaucoma attack|acute angle closure glaucoma
cyclic vomiting syndrome
addison disease|adrenal crisis
hypercalcemia
diverticulitis
ovarian torsion
testicular torsion
pyloric stenosis
volvulus
inferior mi
ménière disease|meniere disease
mesenteric ischemia
thyroid storm
lithium toxicity
acute liver failure
rumination syndrome
superior mesenteric artery syndrome
`);

P("Name a cause of constipation","clinical","",`
low fiber diet|not enough fiber
dehydration|not drinking enough water
opioids|pain medication
lack of exercise|inactivity
irritable bowel syndrome|ibs
pregnancy
hypothyroidism|underactive thyroid
ignoring the urge
iron supplements|iron pills
aging|old age
travel|change in routine
colon cancer
bowel obstruction
diabetes
parkinson disease
hemorrhoids
anal fissure
stress
calcium supplements
antacids
anticholinergics
calcium channel blockers|verapamil
antidepressants|tricyclics
multiple sclerosis
spinal cord injury
diverticular disease|diverticulitis
dairy|cheese
eating disorder|anorexia
hypercalcemia
hypokalemia|low potassium
laxative overuse|laxative abuse
pelvic floor dysfunction|dyssynergic defecation
rectocele
hirschsprung disease
ondansetron|zofran
antipsychotics|clozapine
lead poisoning
scleroderma
stroke
depression
amyloidosis
colonic inertia|slow transit constipation
volvulus
fecal impaction
cystic fibrosis
infant botulism
`);

P("Name a cause of unintentional weight loss","clinical","",`
cancer
hyperthyroidism|overactive thyroid|graves disease
diabetes|type 1 diabetes
depression
stress|anxiety
eating disorder|anorexia|bulimia
celiac disease
crohn disease|inflammatory bowel disease|ibd
ulcerative colitis
hiv|aids
tuberculosis|tb
copd
heart failure|cardiac cachexia
dementia
peptic ulcer
drug abuse|meth|methamphetamine|cocaine
alcoholism
dental problems|poor dentition
chronic kidney disease
liver cirrhosis|cirrhosis
parasites|tapeworm
addison disease|adrenal insufficiency
pancreatic cancer
pancreatitis|chronic pancreatitis
malabsorption
medications|stimulants|adhd medication
metformin
glp1 agonists|ozempic|semaglutide
lymphoma
leukemia
trouble swallowing|dysphagia
rheumatoid arthritis
lupus
parkinson disease
als
social isolation
poverty|food insecurity
cystic fibrosis
pheochromocytoma
gastroparesis
chronic infection
endocarditis
hepatitis c
pernicious anemia
sarcoidosis
whipple disease
`);

P("Name a cause of heart palpitations","clinical","",`
anxiety|panic attack
caffeine|coffee|energy drinks
atrial fibrillation|afib
stress
exercise
dehydration
alcohol
nicotine|smoking|vaping
hyperthyroidism|overactive thyroid
pregnancy
fever
anemia
low blood sugar|hypoglycemia
premature ventricular contractions|pvcs|extra beats
supraventricular tachycardia|svt
decongestants|pseudoephedrine
cocaine
amphetamines|adderall|stimulants
menopause|hot flashes
lack of sleep
low potassium|hypokalemia
low magnesium
heart valve disease|mitral valve prolapse
wolff parkinson white|wpw
atrial flutter
ventricular tachycardia
sick sinus syndrome
pots|postural orthostatic tachycardia syndrome
asthma inhalers|albuterol
thyroid medication|levothyroxine
heart failure
cardiomyopathy
pheochromocytoma
long qt syndrome
brugada syndrome
hypertrophic cardiomyopathy
heart attack
pulmonary embolism
withdrawal|alcohol withdrawal
anorexia
`);

P("Name a cause of seizures","clinical","",`
epilepsy
fever|febrile seizure
head injury|traumatic brain injury|concussion
stroke
brain tumor
low blood sugar|hypoglycemia
alcohol withdrawal
missed seizure medication
lack of sleep|sleep deprivation
drug overdose
meningitis
encephalitis
low sodium|hyponatremia
flashing lights|photosensitive epilepsy
eclampsia
cocaine
benzodiazepine withdrawal
brain abscess
alzheimer disease|dementia
low calcium|hypocalcemia
low magnesium|hypomagnesemia
kidney failure|uremia
liver failure|hepatic encephalopathy
hypoxia|lack of oxygen
bupropion|wellbutrin
tramadol
cerebral palsy
autism
neurocysticercosis
genetic|dravet syndrome
tuberous sclerosis
lennox gastaut syndrome
infantile spasms|west syndrome
brain bleed|subarachnoid hemorrhage
arteriovenous malformation|avm
hyperglycemia|high blood sugar
heat stroke
lead poisoning
isoniazid overdose
theophylline toxicity
lidocaine toxicity
pyridoxine deficiency
pres|posterior reversible encephalopathy
autoimmune encephalitis
toxoplasmosis
sturge weber syndrome
`);

P("Name a cause of jaundice","clinical","",`
hepatitis
gallstones|choledocholithiasis
cirrhosis
newborn jaundice|neonatal jaundice|physiologic jaundice
alcoholic liver disease
pancreatic cancer
gilbert syndrome
hemolysis|hemolytic anemia
hepatitis b
hepatitis a
hepatitis c
liver cancer
acetaminophen overdose|tylenol overdose
fatty liver
breastfeeding jaundice|breast milk jaundice
bile duct obstruction
cholangitis
sickle cell disease
malaria
primary biliary cholangitis|pbc
primary sclerosing cholangitis|psc
autoimmune hepatitis
drug induced liver injury
cholangiocarcinoma|bile duct cancer
pancreatitis
g6pd deficiency
biliary atresia
crigler najjar syndrome
dubin johnson syndrome
rotor syndrome
wilson disease
hemochromatosis
leptospirosis|weil disease
yellow fever
mononucleosis|epstein barr
thalassemia
spherocytosis
rh incompatibility|hemolytic disease of the newborn
transfusion reaction
sepsis
heart failure|congestive hepatopathy
budd chiari syndrome
pregnancy cholestasis|intrahepatic cholestasis of pregnancy
hellp syndrome
acute fatty liver of pregnancy
ampullary cancer
alpha 1 antitrypsin deficiency
`);

P("Name a cause of hair loss","clinical","",`
male pattern baldness|androgenetic alopecia
female pattern hair loss
stress|telogen effluvium
chemotherapy
aging
alopecia areata
thyroid disease|hypothyroidism
pregnancy|postpartum
iron deficiency|anemia
genetics
hairstyles|tight ponytails|traction alopecia
ringworm|tinea capitis
lupus
pcos|polycystic ovary syndrome
hair pulling|trichotillomania
menopause
radiation
crash diets|weight loss
hyperthyroidism
protein deficiency
zinc deficiency
birth control pills|stopping birth control
medications
bleach|hair dye|chemical treatments
heat styling
syphilis
lichen planopilaris
frontal fibrosing alopecia
central centrifugal cicatricial alopecia
discoid lupus
secondary syphilis
biotin deficiency
vitamin d deficiency
surgery
high fever
covid
warfarin
lithium
methotrexate
testosterone|anabolic steroids
thallium poisoning
vitamin a toxicity
hypopituitarism
`);

P("Name a cause of insomnia","clinical","",`
stress
anxiety
depression
caffeine|coffee
screens|phone use|blue light
shift work
jet lag
pain|chronic pain
sleep apnea
alcohol
restless legs syndrome
nicotine|smoking
napping
noise
menopause|hot flashes
pregnancy
frequent urination|nocturia
medications
steroids|prednisone
stimulants|adderall
decongestants
hyperthyroidism
heartburn|acid reflux
asthma
heart failure
bipolar disorder|mania
ptsd
grief
aging
dementia|alzheimer disease
parkinson disease
irregular schedule|poor sleep hygiene
eating late|big meal before bed
exercise late at night
bright room
uncomfortable bed
ssris
beta blockers
withdrawal
cannabis withdrawal
delayed sleep phase syndrome
fatal familial insomnia
`);

P("Name a cause of blood in the urine","clinical","hematuria",`
urinary tract infection|uti
kidney stones
bladder infection|cystitis
bladder cancer
kidney cancer
enlarged prostate|bph
prostate cancer
menstruation|period
vigorous exercise|marathon running
trauma|kidney injury
prostatitis
pyelonephritis|kidney infection
glomerulonephritis|nephritic syndrome
iga nephropathy
blood thinners|warfarin
sickle cell disease
polycystic kidney disease
catheter
urethritis
cyclophosphamide|hemorrhagic cystitis
schistosomiasis
alport syndrome
lupus nephritis
post streptococcal glomerulonephritis
goodpasture syndrome
granulomatosis with polyangiitis
endometriosis
renal vein thrombosis
nutcracker syndrome
papillary necrosis
tuberculosis
hemophilia
radiation cystitis
urethral stricture
thin basement membrane disease
hus|hemolytic uremic syndrome
rhabdomyolysis
`);

P("Name a cause of numbness or tingling","clinical","",`
diabetes|diabetic neuropathy
carpal tunnel syndrome
pinched nerve
sitting too long|limb fell asleep
vitamin b12 deficiency
multiple sclerosis|ms
stroke
anxiety|hyperventilation
herniated disc|slipped disc
sciatica
alcohol|alcoholic neuropathy
chemotherapy
shingles
migraine
peripheral artery disease|poor circulation
raynaud phenomenon
cold exposure|frostbite
hypothyroidism
cubital tunnel syndrome|ulnar nerve
spinal cord injury
guillain barre syndrome
lyme disease
kidney failure
low calcium|hypocalcemia
thoracic outlet syndrome
tarsal tunnel syndrome
heavy metals|lead poisoning
hiv
lupus
sjogren syndrome
vitamin b6 toxicity
transient ischemic attack|tia
brain tumor
syphilis
leprosy
fibromyalgia
spinal stenosis
cervical radiculopathy
meralgia paresthetica
morton neuroma
amyloidosis
charcot marie tooth
cidp
porphyria
fish poisoning|ciguatera
isoniazid
metronidazole
`);

P("Name a part of the eye","body","",`
pupil
iris
retina
cornea
lens
sclera|white of the eye
optic nerve
eyelid
eyelash
macula
conjunctiva
tear duct|lacrimal duct
vitreous|vitreous humor
choroid
fovea
rods
cones
ciliary body
aqueous humor
anterior chamber
posterior chamber
lacrimal gland|tear gland
blind spot|optic disc
eyebrow
extraocular muscles
ciliary muscle
zonules|suspensory ligaments
trabecular meshwork
canal of schlemm|schlemm canal
tarsal plate
meibomian glands
punctum
limbus
bowman layer
descemet membrane
endothelium
corneal epithelium
retinal pigment epithelium
ganglion cells
bipolar cells
photoreceptors
central retinal artery
central retinal vein
caruncle
plica semilunaris
orbit|eye socket
tenon capsule
hyaloid canal
ora serrata
`);

P("Name a part of the kidney or urinary tract","body","",`
bladder
ureter
urethra
kidney
nephron
glomerulus
renal pelvis
cortex|renal cortex
medulla|renal medulla
loop of henle
bowman capsule
proximal convoluted tubule|proximal tubule
distal convoluted tubule|distal tubule
collecting duct
renal artery
renal vein
calyx|calyces|major calyx|minor calyx
renal pyramid
hilum
urethral sphincter
prostatic urethra|prostate
detrusor muscle
trigone
juxtaglomerular apparatus
macula densa
podocytes
afferent arteriole
efferent arteriole
renal papilla
renal capsule
vasa recta
peritubular capillaries
mesangial cells
renal columns
interlobar artery
arcuate artery
ureterovesical junction|vesicoureteric junction|vesicoureteral junction|uvj
ureteropelvic junction|pelviureteric junction|upj
`);

P("Name a part or layer of the skin","body","",`
epidermis
dermis
hair follicle
sweat gland
sebaceous gland|oil gland
subcutaneous fat|hypodermis|subcutaneous tissue
melanocytes
keratinocytes
collagen
stratum corneum
nails
pores
nerve endings
blood vessels
elastin
stratum basale|basal layer
stratum spinosum
stratum granulosum
stratum lucidum
langerhans cells
merkel cells
arrector pili muscle
eccrine glands
apocrine glands
papillary dermis
reticular dermis
dermal papillae
meissner corpuscles
pacinian corpuscles
ruffini endings
keratin
melanin
fibroblasts
mast cells
basement membrane
hair shaft
hair bulb
nail bed
cuticle
lunula
nail matrix
`);

P("Name a part of the respiratory system","body","",`
lungs
trachea|windpipe
nose
diaphragm
bronchi
alveoli
bronchioles
larynx|voice box
pharynx|throat
mouth
epiglottis
sinuses
vocal cords
pleura
nasal cavity
ribs
intercostal muscles
carina
cilia
lobes
right lung
left lung
surfactant
nasopharynx
oropharynx
laryngopharynx
pleural cavity
visceral pleura
parietal pleura
mediastinum
hilum
pulmonary artery
pulmonary veins
lingula
turbinates|nasal conchae
type 1 pneumocytes
type 2 pneumocytes
alveolar macrophages
goblet cells
respiratory bronchioles
terminal bronchioles
cricoid cartilage
thyroid cartilage
tracheal rings
glottis
adenoids
tonsils
`);

P("Name a part of the spine","body","",`
vertebra|vertebrae
disc|intervertebral disc
spinal cord
cervical spine|neck
thoracic spine
lumbar spine|lower back
sacrum
coccyx|tailbone
nerve roots|spinal nerves
facet joints
spinous process
atlas|c1
axis|c2
nucleus pulposus
annulus fibrosus
lamina
pedicle
transverse process
vertebral body
spinal canal
foramen|intervertebral foramen
ligamentum flavum
anterior longitudinal ligament
posterior longitudinal ligament
dura|dura mater
cauda equina
conus medullaris
sacroiliac joint
dens|odontoid process
vertebral arch
epidural space
arachnoid
pia mater
filum terminale
interspinous ligament
supraspinous ligament
pars interarticularis
vertebra prominens|c7
uncovertebral joints
erector spinae
`);

P("Name a type of cell in the human body","science","cell cells",`
red blood cell|erythrocyte
white blood cell|leukocyte
neuron|nerve cell
skin cell
muscle cell
stem cell
platelet
sperm
egg|ovum|oocyte
fat cell|adipocyte
bone cell|osteocyte
t cell
b cell
liver cell|hepatocyte
epithelial cell
cardiomyocyte|heart muscle cell
macrophage
neutrophil
osteoblast
osteoclast
fibroblast
beta cell
plasma cell
natural killer cell
dendritic cell
chondrocyte
keratinocyte
melanocyte
goblet cell
glial cell
astrocyte
oligodendrocyte
schwann cell
microglia
mast cell
eosinophil
basophil
monocyte
podocyte
purkinje cell
pyramidal cell
rods
cones
parietal cell
chief cell
enterocyte
kupffer cell
alpha cell
leydig cell
sertoli cell
pneumocyte
hair cell
megakaryocyte
`);

P("Name a part of a cell","science","",`
nucleus
mitochondria|mitochondrion
cell membrane|plasma membrane
cytoplasm
ribosome
endoplasmic reticulum|er
golgi apparatus|golgi body
lysosome
dna
nucleolus
vacuole
centrioles
cytoskeleton
rough endoplasmic reticulum|rough er
smooth endoplasmic reticulum|smooth er
peroxisome
cilia
flagellum
microtubules
chromosomes
nuclear envelope|nuclear membrane
vesicles
centrosome
microfilaments|actin filaments
intermediate filaments
nuclear pores
chromatin
cytosol
mrna
proteasome
receptors
ion channels
glycocalyx
endosome
lipid raft
tight junctions
gap junctions
desmosomes
microvilli
`);

P("Name a famous person in medical history","science","",`
hippocrates
florence nightingale
louis pasteur
alexander fleming
edward jenner
marie curie
jonas salk
clara barton
sigmund freud
william harvey
joseph lister
galen
elizabeth blackwell
ignaz semmelweis
robert koch
christiaan barnard
albert sabin
andreas vesalius
avicenna|ibn sina
watson and crick|james watson|francis crick
rosalind franklin
paracelsus
wilhelm roentgen
charles drew
virginia apgar
harvey cushing
william osler
hans christian gram
rene laennec
frederick banting
charles best
anton van leeuwenhoek
dorothea dix
mary seacole
paul ehrlich
jean martin charcot
alois alzheimer
james parkinson
thomas addison
mary mallon|typhoid mary
henrietta lacks
john snow
walter reed
emil kraepelin
rudolf virchow
santiago ramon y cajal
camillo golgi
daniel hale williams
helen taussig
alfred blalock
vivien thomas
crawford long
william morton
patrick steptoe
robert edwards
paul farmer
atul gawande
`);

P("Name a major medical discovery or invention","science","",`
penicillin|antibiotics
vaccines
x ray
anesthesia
stethoscope
insulin
germ theory
dna structure|double helix
blood transfusion|blood types
organ transplant
mri
ct scan
pacemaker
hand washing
smallpox vaccine
polio vaccine
the pill|birth control pill
ivf|in vitro fertilization
antiseptic surgery|antiseptics
microscope
ultrasound
defibrillator
dialysis
insulin pump
chemotherapy
cpr
thermometer
blood pressure cuff|sphygmomanometer
ecg|ekg|electrocardiogram
aspirin
mrna vaccine
human genome project
crispr
monoclonal antibodies
statins
heart lung machine
artificial heart
laparoscopy
robotic surgery
hepatitis c cure
car t cell therapy
ether anesthesia
pasteurization
oral rehydration solution
endoscope
cochlear implant
hpv vaccine
`);

P("Name a disease spread by mosquitoes or ticks","micro","",`
malaria
lyme disease
west nile virus
zika
dengue
yellow fever
rocky mountain spotted fever
chikungunya
ehrlichiosis
anaplasmosis
babesiosis
encephalitis
eastern equine encephalitis
japanese encephalitis
tularemia
powassan virus
alpha gal syndrome|red meat allergy
tick paralysis
relapsing fever
st louis encephalitis
southern tick associated rash illness|stari
colorado tick fever
crimean congo hemorrhagic fever
tick borne encephalitis
lymphatic filariasis|elephantiasis
rift valley fever
la crosse encephalitis
western equine encephalitis
venezuelan equine encephalitis
heartland virus
bourbon virus
o nyong nyong
mayaro virus
ross river virus
rickettsialpox
boutonneuse fever|mediterranean spotted fever
oropouche
`);

P("Name a cause of food poisoning","micro","",`
salmonella
e coli
norovirus
listeria
campylobacter
staph aureus|staphylococcus
botulism|clostridium botulinum
clostridium perfringens
bacillus cereus|fried rice
hepatitis a
shigella
undercooked chicken
raw eggs
spoiled milk|unpasteurized milk
raw oysters|shellfish
vibrio
giardia
cryptosporidium
toxoplasma
trichinella|trichinosis
cyclospora
yersinia
scombroid
ciguatera
rotavirus
paralytic shellfish poisoning
tapeworm
mushrooms|poisonous mushrooms
pufferfish|tetrodotoxin
deli meat
sprouts
leftover rice
unwashed produce
anisakis
brucella
astrovirus
sapovirus
`);

P("Name a urine test or finding on a urinalysis","tests","",`
urinalysis|ua
urine culture
pregnancy test|urine hcg
drug screen|urine drug test
glucose|sugar in urine
protein|proteinuria
blood|hematuria
ketones
leukocyte esterase
nitrites
specific gravity
ph
white blood cells
red blood cells
bacteria
color
clarity|cloudy urine
bilirubin
urobilinogen
casts
crystals
epithelial cells
microalbumin|albumin creatinine ratio
24 hour urine
urine sodium
urine osmolality
urine creatinine
hyaline casts
red cell casts
white cell casts
granular casts|muddy brown casts
waxy casts
fatty casts|oval fat bodies
calcium oxalate crystals
uric acid crystals
struvite crystals
cystine crystals
yeast
urine electrolytes
bence jones protein
urine myoglobin
urine protein electrophoresis
urine metanephrines
urine cortisol
fractional excretion of sodium|fena
legionella urine antigen
`);

P("Name a heart test or cardiac study","tests","",`
ekg|ecg|electrocardiogram
echocardiogram|echo
stress test
cardiac catheterization|heart cath
troponin
holter monitor
coronary angiogram|angiogram
cardiac mri
ct coronary angiography
calcium score
treadmill test
nuclear stress test
bnp
event monitor
transesophageal echo|tee
chest x ray
blood pressure
cholesterol|lipid panel
stress echo
tilt table test
electrophysiology study|ep study
implantable loop recorder
zio patch
pulse oximetry
ck mb
d dimer
pet scan
muga scan
pharmacologic stress test|dobutamine stress echo|lexiscan
fractional flow reserve|ffr
intravascular ultrasound|ivus
right heart catheterization
ankle brachial index
crp|c reactive protein
lipoprotein a
apo b
carotid ultrasound
signal averaged ecg
cardiopulmonary exercise test
`);

P("Name a biopsy or tissue sampling procedure","tests","biopsy",`
skin biopsy
breast biopsy
colonoscopy biopsy
bone marrow biopsy
liver biopsy
needle biopsy
fine needle aspiration|fna
punch biopsy
shave biopsy
excisional biopsy
prostate biopsy
kidney biopsy
lung biopsy
lymph node biopsy
cervical biopsy|colposcopy
endometrial biopsy
core needle biopsy
lumbar puncture|spinal tap
pap smear
endoscopy
bronchoscopy
thyroid biopsy
sentinel lymph node biopsy
incisional biopsy
stereotactic biopsy
cone biopsy|leep
muscle biopsy
nerve biopsy
temporal artery biopsy
brain biopsy
liquid biopsy
thoracentesis
paracentesis
mediastinoscopy
endoscopic ultrasound biopsy|eus
chorionic villus sampling
amniocentesis
lip biopsy
testicular biopsy
`);

P("Name a sleep disorder","clinical","",`
insomnia
sleep apnea|obstructive sleep apnea
narcolepsy
restless legs syndrome
sleepwalking|somnambulism
night terrors
nightmares
snoring
sleep paralysis
shift work disorder
jet lag
teeth grinding|bruxism
bedwetting|enuresis
rem sleep behavior disorder
central sleep apnea
hypersomnia|idiopathic hypersomnia
delayed sleep phase syndrome
advanced sleep phase syndrome
sleep talking
periodic limb movement disorder
circadian rhythm disorder
cataplexy
exploding head syndrome
kleine levin syndrome
sleep eating
sexsomnia
non 24 hour sleep wake disorder
fatal familial insomnia
obesity hypoventilation syndrome
confusional arousals
catathrenia
hypnic jerks
`);

P("Name a sports injury","clinical","",`
sprained ankle|ankle sprain
acl tear
concussion
tennis elbow
torn meniscus
hamstring strain|pulled hamstring
shin splints
rotator cuff tear
broken bone|fracture
dislocated shoulder
groin pull
achilles tendon rupture
golfer's elbow
runner's knee|patellofemoral pain
stress fracture
jumper's knee|patellar tendinitis
it band syndrome
plantar fasciitis
turf toe
mcl tear
labral tear
herniated disc
jammed finger
mallet finger
boxer's fracture
whiplash
pulled muscle|muscle strain
bruise|contusion
high ankle sprain
hip pointer
sports hernia
separated shoulder|ac joint separation
torn pectoral
tommy john injury|ucl tear
compartment syndrome
osgood schlatter disease
spondylolysis
stinger|burner
skier's thumb
jersey finger
pcl tear
cauliflower ear
heat stroke
broken nose
`);

/* ---- NEW STANDARD DAILY PROMPTS: MEDICINE part 2 (batch 2026-10-31) ---- */
P("Name a risk factor for heart disease","care","",`
smoking
high blood pressure
high cholesterol
diabetes
obesity|being overweight
family history|genetics
lack of exercise|sedentary lifestyle
poor diet|unhealthy diet
age|older age
male sex|being male
stress
alcohol
chronic kidney disease
sleep apnea
menopause
high triglycerides
low hdl
metabolic syndrome
inflammation
lupus
rheumatoid arthritis
preeclampsia history
gestational diabetes history
hiv
psoriasis
air pollution
lipoprotein a
south asian ancestry
depression
cocaine
radiation to the chest
chemotherapy
premature menopause
low socioeconomic status|poverty
lack of sleep
vaping
`);

P("Name a type of shock","clinical","shock",`
septic
hypovolemic
cardiogenic
anaphylactic
neurogenic
obstructive
hemorrhagic
distributive
spinal
toxic shock syndrome
insulin shock
psychogenic|emotional shock
burn shock
adrenal crisis
tension pneumothorax
cardiac tamponade
massive pulmonary embolism
endocrine shock
mixed shock
vasoplegic
`);

P("Name an endocrine disorder","clinical","",`
diabetes
type 1 diabetes
type 2 diabetes
hypothyroidism
hyperthyroidism
graves disease
hashimoto thyroiditis
pcos|polycystic ovary syndrome
cushing syndrome
addison disease
osteoporosis
gestational diabetes
thyroid nodules
goiter
thyroid cancer
hyperparathyroidism
hypoparathyroidism
growth hormone deficiency
acromegaly
gigantism
diabetes insipidus
siadh
pheochromocytoma
hyperaldosteronism|conn syndrome
prolactinoma
pituitary tumor
hypopituitarism
low testosterone|hypogonadism
menopause
precocious puberty
delayed puberty
congenital adrenal hyperplasia
klinefelter syndrome
turner syndrome
men1|multiple endocrine neoplasia
men2
carcinoid syndrome
insulinoma
thyroid storm
myxedema coma
sheehan syndrome
pituitary apoplexy
empty sella syndrome
paget disease of bone
kallmann syndrome
adrenal insufficiency
dka|diabetic ketoacidosis
hyperosmolar hyperglycemic state
mody
lada
`);

P("Name a medical emergency","care","",`
heart attack
stroke
cardiac arrest
anaphylaxis|severe allergic reaction
choking
seizure|status epilepticus
severe bleeding|hemorrhage
asthma attack
overdose
diabetic ketoacidosis|dka
low blood sugar|hypoglycemia
sepsis
pulmonary embolism
aortic dissection
heat stroke
hypothermia
drowning
burns
head injury
spinal cord injury
gunshot wound
appendicitis
ectopic pregnancy
testicular torsion
ovarian torsion
tension pneumothorax
cardiac tamponade
meningitis
poisoning
carbon monoxide poisoning
suicide attempt
eclampsia
placental abruption
postpartum hemorrhage
bowel obstruction
ruptured aaa|aortic aneurysm rupture
acute angle closure glaucoma
retinal detachment
epiglottitis
compartment syndrome
cauda equina syndrome
thyroid storm
adrenal crisis
hyperkalemia
malignant hyperthermia
neuroleptic malignant syndrome
serotonin syndrome
`);

P("Name a rare disease (a true zebra diagnosis)","clinical","",`
als|lou gehrig disease
huntington disease
cystic fibrosis
progeria
sarcoidosis
ehlers danlos syndrome
marfan syndrome
porphyria
amyloidosis
fabry disease
gaucher disease
pompe disease
tay sachs disease
wilson disease
hemochromatosis
myasthenia gravis
guillain barre syndrome
pheochromocytoma
addison disease
acromegaly
kawasaki disease
takayasu arteritis
behcet disease
whipple disease
castleman disease
erdheim chester disease
pnh|paroxysmal nocturnal hemoglobinuria
ttp|thrombotic thrombocytopenic purpura
fibrodysplasia ossificans progressiva
creutzfeldt jakob disease|prion disease
kuru
fatal familial insomnia
stiff person syndrome
alice in wonderland syndrome
foreign accent syndrome
alien hand syndrome
cotard delusion
capgras delusion
moyamoya disease
lemierre syndrome
osler weber rendu|hereditary hemorrhagic telangiectasia
von hippel lindau
neurofibromatosis
tuberous sclerosis
sturge weber syndrome
niemann pick disease
krabbe disease
batten disease
maple syrup urine disease
alkaptonuria
lesch nyhan syndrome
prader willi syndrome
angelman syndrome
rett syndrome
williams syndrome
cri du chat
mastocytosis
hemophagocytic lymphohistiocytosis|hlh
dercum disease
riedel thyroiditis
`);

/* ---- NEW STANDARD DAILY PROMPTS: NURSING (batch 2026-10-31) ---- */
P("Name something included in a nursing handoff report","nursing","",`
patient name
diagnosis|reason for admission
vital signs
allergies
code status
medications
iv access|iv lines
pain level
fall risk
labs|lab results
isolation status
diet|npo status
mobility|activity level
recent changes
plan of care
pending tests
intake and output|i and o
skin integrity|wounds
mental status|orientation
age
doctor|attending
history|past medical history
oxygen requirement
drains|tubes
last bowel movement
blood sugar
safety concerns
family|visitors
discharge plan
lines and drains
restraints
next medication due
consults
abnormal findings
sbar
pain medication last given
blood products
telemetry
foley catheter
procedures done
`);

P("Name a part of a head-to-toe assessment","nursing","",`
vital signs
level of consciousness|orientation
lung sounds
heart sounds
bowel sounds
skin
pupils
pain
pulses
capillary refill
edema|swelling
mental status
gait
grip strength
range of motion
mucous membranes
abdomen
head and neck
eyes
ears
nose
mouth|oral cavity
neurological assessment
respiratory effort
skin turgor
wound assessment
iv site
urinary output
last bowel movement
reflexes
sensation
speech
swallowing
peripheral vascular
genitourinary
musculoskeletal
glasgow coma scale|gcs
jugular vein distension|jvd
nail beds
hair
lymph nodes
thyroid
breath odor
`);

P("Name a lung or breath sound","nursing","",`
wheezing
crackles|rales
rhonchi
stridor
clear|normal breath sounds
diminished breath sounds
absent breath sounds
pleural friction rub
vesicular
bronchial
bronchovesicular
coarse crackles
fine crackles
expiratory wheeze
inspiratory wheeze
gurgling
death rattle
egophony
whispered pectoriloquy
bronchophony
tubular breath sounds
squawk
hamman sign|mediastinal crunch
tracheal breath sounds
grunting
snoring|stertor
`);

P("Name an injection type or injection site","nursing","",`
intramuscular|im
subcutaneous|subq
intravenous|iv
intradermal|id
deltoid
ventrogluteal
dorsogluteal
vastus lateralis
abdomen
thigh
upper arm
buttocks
rectus femoris
z track
insulin injection
tuberculin skin test|ppd
epidural
intra articular|joint injection
intrathecal
intraosseous|io
iv push
intracardiac
intravitreal
intracavernosal
back of arm
flank
`);

P("Name a nonmedication comfort measure for pain","nursing","",`
ice|cold pack
heat|heating pad
repositioning
massage
distraction
music
deep breathing
relaxation techniques
guided imagery
elevation
rest
tens unit
meditation
pillows|splinting
warm bath
acupuncture
prayer
aromatherapy
therapeutic touch
humor
dim lights|quiet room
hypnosis
biofeedback
exercise|physical therapy
compression
skin to skin|kangaroo care
sucrose for infants|sucrose
swaddling
pacifier
virtual reality
pet therapy
art therapy
chiropractic care
yoga
`);

P("Name a sign that a patient is close to death","nursing","",`
not eating|decreased appetite
not drinking
sleeping more
mottling|mottled skin
cheyne stokes breathing
death rattle
apnea|pauses in breathing
cold hands and feet|cool extremities
low blood pressure
decreased urine output
confusion
restlessness|terminal agitation
weak pulse
unresponsive
withdrawal from others
glassy eyes
fever
incontinence
cyanosis|bluish lips
seeing deceased relatives
surge of energy|rally
jaw dropping|open mouth breathing
dark urine
fixed pupils
irregular breathing
agonal breathing
picking at sheets
`);

P("Name a defense mechanism","nursing","",`
denial
repression
projection
displacement
rationalization
regression
sublimation
reaction formation
intellectualization
suppression
humor
compensation
identification
splitting
undoing
dissociation
conversion
acting out
introjection
altruism
avoidance
passive aggression
fantasy
isolation of affect
somatization
idealization
devaluation
`);

P("Name a therapeutic communication technique","nursing","",`
active listening
open ended questions
silence
reflecting
restating|paraphrasing
clarifying
summarizing
offering self
giving recognition
broad openings
focusing
exploring
validating
empathy
presenting reality
voicing doubt
making observations
encouraging comparison
sharing perceptions
seeking clarification
general leads
placing event in time or sequence
encouraging description of perceptions
translating into feelings
suggesting collaboration
touch
eye contact
nodding
teach back
`);


P("Name a risk factor for falls","nursing","",`
old age
history of falls
dizziness
medications
sedatives
weakness
poor vision
dementia|confusion
gait problems
using a walker or cane
incontinence|urgency
low blood pressure|orthostatic hypotension
wet floors
poor lighting
clutter
rugs
parkinson disease
stroke
arthritis
alcohol
improper footwear|slippers
iv poles|tubing
being in an unfamiliar place
osteoporosis
diuretics
opioids
antihypertensives
benzodiazepines
neuropathy
depression
fear of falling
low blood sugar
anemia
pets
stairs
bed alarms off
delirium
inner ear problems
vitamin d deficiency
`);

P("Name an oxygen delivery or airway device","nursing","",`
nasal cannula
non rebreather mask
simple face mask
venturi mask
bag valve mask|ambu bag
ventilator
cpap
bipap
endotracheal tube
tracheostomy
high flow nasal cannula
oral airway|oropharyngeal airway
nasal airway|nasopharyngeal airway
partial rebreather mask
face tent
trach collar
t piece
laryngeal mask airway|lma
oxygen tank
oxygen concentrator
incentive spirometer
nebulizer
king airway
combitube
oxygen hood
cricothyrotomy
bougie
video laryngoscope
`);

P("Name a nursing ethical principle","nursing","",`
autonomy
beneficence
nonmaleficence|do no harm
justice
veracity|honesty
fidelity
confidentiality
accountability
advocacy
respect
dignity
informed consent
privacy
integrity
caring
compassion
paternalism
utilitarianism
duty
altruism
`);

P("Name a nursing degree, license or credential","nursing","",`
rn
bsn
lpn|lvn
cna
adn
msn
np
dnp
phd
crna
cnm
cns|clinical nurse specialist
fnp
ccrn
cen
ocn
cpn
rnc
pmhnp
agacnp
cnl|clinical nurse leader
cnor
cwocn
ibclc
cpan
tncc
acls
pals
bls
nrp
ccm
cdces
rn bc
cnml
cmsrn
`);

P("Name a sign of opioid overdose","nursing","",`
pinpoint pupils
slow breathing
unresponsive
blue lips|cyanosis
not breathing
snoring|gurgling
limp body
pale skin
low blood pressure
slow heart rate
vomiting
loss of consciousness
clammy skin
low oxygen
confusion
drowsiness
choking sounds
cold skin
needle marks|track marks
`);

P("Name a dementia care strategy","nursing","",`
routine
redirection
reorientation
simple instructions
calm voice
reduce noise
memory aids|labels
validation therapy
music therapy
safety measures
supervise meals
night light
avoid arguing
reminiscence therapy
pet therapy
exercise
wandering alarms|door alarms
id bracelet
limit choices
familiar objects
caregiver support
respite care
sundowning precautions
schedule toileting
clocks and calendars
pain assessment
hearing aids and glasses
`);

P("Name a lab value nurses check before giving a medication","nursing","",`
potassium
inr
blood sugar|glucose
digoxin level
heart rate|apical pulse
blood pressure
ptt|aptt
platelets
creatinine
vancomycin trough
lithium level
magnesium
sodium
hemoglobin
white blood cell count|wbc
absolute neutrophil count|anc
liver enzymes
gfr
bun
calcium
tsh
phenytoin level|dilantin level
gentamicin level
anti xa
respiratory rate
oxygen saturation
pregnancy test
`);

P("Name a type of wound","nursing","wound",`
pressure injury|pressure ulcer|bed sore
laceration|cut
abrasion|scrape
burn
surgical wound|incision
puncture
diabetic foot ulcer
venous ulcer
arterial ulcer
bite
skin tear
avulsion
gunshot
stab
dehiscence
evisceration
blister
contusion|bruise
crush injury
amputation
radiation burn
frostbite
moisture associated skin damage
incontinence associated dermatitis
fistula
`);

/* ---- NEW STANDARD DAILY PROMPTS: NURSING part 2 (batch 2026-10-31) ---- */
P("Name a disease that needs airborne, droplet or contact precautions","nursing","",`
tuberculosis|tb
measles
chickenpox|varicella
covid|covid 19
influenza|flu
mrsa
c diff|clostridioides difficile
pertussis|whooping cough
mumps
rubella
meningococcal meningitis|bacterial meningitis
rsv
vre
scabies
lice
norovirus
shingles|disseminated zoster
strep throat|group a strep
diphtheria
plague|pneumonic plague
adenovirus
esbl
cre
smallpox
mycoplasma pneumonia
rotavirus
hepatitis a
impetigo
ebola
sars
mers
mpox|monkeypox
candida auris
hib|haemophilus influenzae
parvovirus b19
conjunctivitis|pink eye
`);

P("Name a stage of labor or labor and delivery term","nursing","",`
contractions
dilation
effacement
crowning
active labor
early labor|latent phase
transition
pushing|second stage
delivery of placenta|third stage
fourth stage|recovery
water breaking|rupture of membranes
station
epidural
episiotomy
braxton hicks
bloody show
mucus plug
fetal monitoring
c section|cesarean
induction
pitocin|oxytocin
vbac
breech
vertex
engagement|lightening
cervical ripening
amniotomy
nuchal cord
shoulder dystocia
fundal height
apgar score
cord clamping
fetal heart rate
leopold maneuvers
ferguson reflex
lochia
precipitous labor
prolonged labor|labor dystocia
cardinal movements
`);

P("Name a fetal heart rate pattern or monitoring term","nursing","",`
baseline|baseline heart rate
early deceleration
late deceleration
variable deceleration
acceleration
variability
moderate variability
minimal variability
absent variability
marked variability
tachycardia|fetal tachycardia
bradycardia|fetal bradycardia
prolonged deceleration
sinusoidal pattern
reactive non stress test|reactive nst
non stress test|nst
contraction stress test
category 1
category 2
category 3
tocodynamometer|toco
fetal scalp electrode
intrauterine pressure catheter|iupc
uterine tachysystole
veal chop
montevideo units
biophysical profile
saltatory pattern
`);

P("Name a long-term complication of diabetes","nursing","",`
neuropathy|nerve damage
kidney disease|nephropathy|kidney failure
retinopathy|vision loss|blindness
heart disease
stroke
amputation
foot ulcers
gastroparesis
erectile dysfunction
poor wound healing
infections
cataracts
glaucoma
peripheral artery disease
high blood pressure
gum disease
hearing loss
skin conditions|acanthosis nigricans
charcot foot
dementia
depression
fatty liver
autonomic neuropathy
bladder problems|neurogenic bladder
frozen shoulder
diabetic macular edema
necrobiosis lipoidica
silent heart attack
`);

P("Name a discharge teaching topic","nursing","",`
medications
follow up appointments
wound care
diet
activity restrictions
warning signs|when to call the doctor
pain management
infection signs
smoking cessation
fall prevention
home safety
driving restrictions
bathing|showering
lifting restrictions
blood sugar monitoring
daily weights
fluid restriction
incision care
drain care
catheter care
inhaler technique
insulin injection
anticoagulant safety|bleeding precautions
sleep
exercise
stress management
breastfeeding
car seat safety
safe sleep
return to work
sexual activity
alcohol use
`);

P("Name a mobility aid or assistive device","nursing","",`
wheelchair
walker
cane
crutches
gait belt
mechanical lift|hoyer lift
rollator
grab bars
shower chair
raised toilet seat
sliding board|transfer board
scooter|mobility scooter
quad cane
knee scooter
reacher|grabber
sock aid
long handled sponge
trapeze bar
bedside commode
prosthesis
brace
splint
sit to stand lift
slide sheet
hospital bed
power wheelchair
stair lift
hemi walker
platform walker
bath bench
`);

P("Name a sign of shock","nursing","",`
low blood pressure|hypotension
fast heart rate|tachycardia
cold clammy skin
pale skin
fast breathing
confusion
weak pulse|thready pulse
low urine output
dizziness
anxiety|restlessness
thirst
sweating
cyanosis
nausea
fainting
delayed capillary refill
mottled skin
lactic acidosis|high lactate
altered mental status
fever
warm flushed skin
narrow pulse pressure
`);

P("Name a postpartum assessment","nursing","",`
fundus|fundal height
lochia
breasts
bladder
bowel
episiotomy|perineum
pain
vital signs
emotional status|mood
homans sign|legs
bonding
incision
uterine tone|fundal firmness
blood loss
edema
hemorrhoids
breastfeeding
rh status|rhogam
rubella status
postpartum depression screening
deep vein thrombosis|dvt
sleep
`);

P("Name an item on a crash cart","nursing","",`
defibrillator|aed
epinephrine
amiodarone
bag valve mask|ambu bag
oxygen
suction
intubation supplies
laryngoscope
endotracheal tube
iv supplies
atropine
adenosine
naloxone|narcan
backboard|cpr board
lidocaine
sodium bicarbonate
calcium chloride
dextrose|d50
magnesium sulfate
gloves
syringes
flush
oral airways
pads|defib pads
crash cart checklist
vasopressin
dopamine
normal saline
pulse oximeter
stethoscope
blood pressure cuff
io drill
glucagon
procainamide
`);

P("Name a common pediatric hospital diagnosis","nursing","",`
asthma
bronchiolitis
rsv
pneumonia
dehydration
gastroenteritis
croup
fever
seizures
appendicitis
diabetic ketoacidosis|dka
urinary tract infection
broken bone|fracture
cellulitis
sickle cell crisis
cancer|leukemia
kawasaki disease
failure to thrive
jaundice
head injury
flu
cystic fibrosis
mental health crisis
ingestion|poisoning
abuse
intussusception
pyloric stenosis
meningitis
osteomyelitis
mis c
`);




P("Name a task an RN can delegate to a nursing assistant","nursing","",`
vital signs
bathing
feeding
ambulating|walking patients
turning and repositioning
toileting
bed making
intake and output
weighing patients
oral care
transferring patients
stocking supplies
emptying foley bag
fingerstick blood sugar
collecting specimens
range of motion exercises
applying ted hose|compression stockings
skin care
hair care
shaving
answering call lights
postmortem care
transporting patients
sitter|one to one observation
`);

P("Name a patient right","nursing","",`
privacy
informed consent
refuse treatment
confidentiality|hipaa
respect|dignity
access to medical records
interpreter|language services
advance directive
choose a doctor
second opinion
pain management
safe environment
know costs|billing information
file a complaint|grievance
visitors
religious and cultural beliefs
participate in care decisions
leave against medical advice|ama
freedom from restraints
emergency care|emtala
know caregivers' names
end of life care
`);

P("Name a sign of a urinary tract infection","nursing","",`
burning with urination|painful urination
frequent urination
urgency
cloudy urine
foul smelling urine
blood in urine
pelvic pain
fever
lower abdominal pain
confusion in elderly|delirium
back pain|flank pain
chills
nausea
incontinence
bedwetting
positive nitrites
leukocytes in urine
bacteria in urine
fatigue
fussiness in infants
`);

/* ---- NEW STANDARD DAILY PROMPTS: PHARMACY (batch 2026-10-31) ---- */
P("Name a top-selling brand-name drug","pharm","",`
lipitor
ozempic
humira
eliquis
keytruda
xarelto
synthroid
januvia
viagra
zoloft
nexium
advair
crestor
plavix
jardiance
trulicity
mounjaro
wegovy
farxiga
entresto
dupixent
stelara
enbrel
lantus
symbicort
singulair
lexapro
xanax
adderall
prozac
lyrica
cialis
norvasc
zocor
lasix
coumadin
celebrex
abilify
seroquel
spiriva
ventolin|proair
flonase
zyrtec
claritin
tylenol
advil
biktarvy
revlimid
opdivo
skyrizi
rinvoq
zepbound
trikafta
paxlovid
prevnar
shingrix
gardasil
`);

P("Name a drug used to treat gout","pharm","",`
allopurinol|zyloprim
colchicine|colcrys
indomethacin
febuxostat|uloric
prednisone
ibuprofen
naproxen
probenecid
pegloticase|krystexxa
methylprednisolone
triamcinolone injection
lesinurad
anakinra
canakinumab
celecoxib
losartan
fenofibrate
sulfinpyrazone
rasburicase
`);

P("Name a drug for thyroid disease","pharm","",`
levothyroxine|synthroid|tirosint|unithroid|levoxyl|euthyrox
methimazole|tapazole
propylthiouracil|ptu
liothyronine|cytomel
armour thyroid|desiccated thyroid
radioactive iodine
propranolol
potassium iodide|sski
liotrix
lugol solution
atenolol
dexamethasone
teprotumumab|tepezza
selenium
cholestyramine
`);

P("Name a drug for osteoporosis","pharm","",`
alendronate|fosamax
calcium
vitamin d
risedronate|actonel
ibandronate|boniva
zoledronic acid|reclast
denosumab|prolia
teriparatide|forteo
raloxifene|evista
estrogen|hormone replacement therapy
abaloparatide|tymlos
romosozumab|evenity
calcitonin
bazedoxifene
conjugated estrogens
etidronate
`);

P("Name a drug for Parkinson disease","pharm","",`
carbidopa levodopa|sinemet|levodopa|rytary|duopa|inbrija
pramipexole|mirapex
ropinirole|requip
rasagiline|azilect
selegiline
amantadine
entacapone
benztropine|cogentin
trihexyphenidyl
rotigotine|neupro
safinamide
apomorphine
istradefylline
opicapone
tolcapone
pimavanserin
bromocriptine
cabergoline
`);

P("Name a drug for Alzheimer disease or dementia","pharm","",`
donepezil|aricept
memantine|namenda
rivastigmine|exelon
galantamine|razadyne
lecanemab|leqembi
aducanumab|aduhelm
donanemab|kisunla
namzaric
suvorexant|belsomra
brexpiprazole|rexulti
`);

P("Name a drug for BPH, overactive bladder or erectile dysfunction","pharm","",`
tamsulosin|flomax
sildenafil|viagra
tadalafil|cialis
finasteride|proscar
oxybutynin|ditropan
dutasteride|avodart
tolterodine|detrol
mirabegron|myrbetriq
solifenacin|vesicare
alfuzosin|uroxatral
doxazosin|cardura
terazosin|hytrin
vardenafil|levitra
avanafil|stendra
silodosin|rapaflo
trospium
darifenacin
fesoterodine|toviaz
vibegron|gemtesa
jalyn
alprostadil
desmopressin
botox
`);

P("Name a drug for smoking cessation or addiction treatment","pharm","",`
nicotine patch
nicotine gum
varenicline|chantix
bupropion|zyban|wellbutrin
methadone
buprenorphine|sublocade|brixadi|probuphine
suboxone|buprenorphine naloxone
naltrexone|vivitrol
naloxone|narcan
nicotine lozenge
nicotine inhaler
nicotine nasal spray
disulfiram|antabuse
acamprosate
lofexidine|lucemyra
clonidine
topiramate
gabapentin
cytisine
baclofen
`);

P("Name a weight-loss drug","pharm","",`
semaglutide|ozempic|wegovy
tirzepatide|mounjaro|zepbound
phentermine|adipex
liraglutide|saxenda
orlistat|alli|xenical
contrave|naltrexone bupropion
qsymia|phentermine topiramate
metformin
setmelanotide|imcivree
diethylpropion
phendimetrazine
benzphetamine
plenity
topiramate
retatrutide
orforglipron
`);

P("Name a pharmacokinetics or pharmacology term","pharm","",`
half life
absorption
distribution
metabolism
excretion|elimination
bioavailability
first pass effect
clearance
volume of distribution
steady state
loading dose
maintenance dose
agonist
antagonist
therapeutic index
peak
trough
protein binding
prodrug
tolerance
potency
efficacy
area under the curve|auc
zero order kinetics
first order kinetics
enzyme induction
enzyme inhibition
partial agonist
inverse agonist
receptor
affinity
dose response curve
ed50
ld50
cmax
tmax
pharmacogenomics
synergy
tachyphylaxis
bioequivalence
`);

P("Name a drug that interacts with warfarin","pharm","",`
aspirin
ibuprofen|nsaids
amiodarone
fluconazole
metronidazole|flagyl
bactrim|trimethoprim sulfamethoxazole
ciprofloxacin
vitamin k
rifampin
clopidogrel
acetaminophen
fish oil
garlic
ginkgo
st john's wort
carbamazepine
phenytoin
levofloxacin
erythromycin
clarithromycin
omeprazole
simvastatin
fenofibrate
sertraline
fluoxetine
alcohol
green leafy vegetables
cranberry juice
naproxen
tamoxifen
propafenone
allopurinol
levothyroxine
phenobarbital
ginseng
dong quai
voriconazole
capecitabine
`);

P("Name a drug for rheumatoid arthritis","pharm","",`
methotrexate
prednisone
humira|adalimumab
enbrel|etanercept
hydroxychloroquine|plaquenil
sulfasalazine
leflunomide|arava
infliximab|remicade
tofacitinib|xeljanz
upadacitinib|rinvoq
baricitinib|olumiant
rituximab|rituxan
abatacept|orencia
tocilizumab|actemra
sarilumab|kevzara
certolizumab|cimzia
golimumab|simponi
anakinra|kineret
naproxen
ibuprofen
celecoxib
azathioprine
cyclosporine
gold|auranofin
minocycline
`);

P("Name a cough or cold product","pharm","",`
nyquil
dayquil
robitussin
mucinex|guaifenesin
dextromethorphan
sudafed|pseudoephedrine
benadryl|diphenhydramine
tylenol cold
cough drops
vicks vaporub
zicam
theraflu
delsym
phenylephrine
saline nasal spray
afrin|oxymetazoline
alka seltzer plus
coricidin
emergen c
honey
zinc lozenges
chlorpheniramine
benzonatate|tessalon
codeine cough syrup
promethazine dm
hycodan|hydrocodone cough syrup
humidifier
neti pot
claritin d
zyrtec d
airborne
`);

P("Name an antiarrhythmic drug","pharm","",`
amiodarone
metoprolol
diltiazem
digoxin
adenosine
lidocaine
sotalol
flecainide
propafenone
dofetilide|tikosyn
dronedarone|multaq
verapamil
procainamide
quinidine
esmolol
atropine
ibutilide
mexiletine
disopyramide
magnesium sulfate
propranolol
carvedilol
`);

P("Name a vasopressor or ICU drip","pharm","",`
norepinephrine|levophed
epinephrine
vasopressin
dopamine
dobutamine
phenylephrine
propofol
fentanyl
midazolam
dexmedetomidine|precedex
heparin drip
insulin drip
nitroglycerin drip
nicardipine
amiodarone drip
milrinone
esmolol
ketamine
labetalol drip
diltiazem drip
nitroprusside
clevidipine
angiotensin ii|giapreza
cisatracurium
rocuronium
lorazepam drip
hydromorphone drip
`);

/* ---- NEW STANDARD DAILY PROMPTS: PHARMACY part 2 (batch 2026-10-31) ---- */
P("Name a hormone therapy or sex hormone drug","pharm","",`
estrogen|estradiol
testosterone
progesterone
premarin|conjugated estrogens
medroxyprogesterone|provera|depo provera
levonorgestrel
norethindrone
tamoxifen
letrozole|femara
anastrozole|arimidex
leuprolide|lupron
clomiphene|clomid
finasteride
spironolactone
megestrol
raloxifene
exemestane
goserelin|zoladex
degarelix
enzalutamide
abiraterone
bicalutamide
oxandrolone
nandrolone
danazol
ulipristal|ella
mifepristone
dienogest
elagolix|orilissa
relugolix
ospemifene
prasterone
hcg|human chorionic gonadotropin
menotropins
`);

P("Name a drug for acne","pharm","",`
benzoyl peroxide
salicylic acid
tretinoin|retin a
adapalene|differin
isotretinoin|accutane
doxycycline
minocycline
clindamycin
spironolactone
birth control pills
azelaic acid
tazarotene
erythromycin
dapsone gel|aczone
sulfur
clascoterone|winlevi
sarecycline|seysara
trifarotene
epiduo
benzaclin
duac
onexton
tea tree oil
niacinamide
`);

P("Name a drug or supplement that treats anemia","pharm","",`
iron|ferrous sulfate
vitamin b12|cyanocobalamin
folic acid|folate
epoetin|epogen|procrit
darbepoetin|aranesp
iron sucrose|venofer
ferric carboxymaltose|injectafer
ferrous gluconate
ferrous fumarate
iron dextran
ferumoxytol|feraheme
blood transfusion
hydroxyurea
luspatercept|reblozyl
vitamin c
prednisone
eculizumab
voxelotor
crizanlizumab
daprodustat
deferoxamine
deferasirox
`);

P("Name a drug used in anesthesia or surgery","pharm","",`
propofol
lidocaine
fentanyl
midazolam|versed
ketamine
sevoflurane
succinylcholine
rocuronium
nitrous oxide
etomidate
desflurane
isoflurane
vecuronium
bupivacaine
ondansetron
dexamethasone
cefazolin|ancef
neostigmine
sugammadex|bridion
glycopyrrolate
morphine
hydromorphone
remifentanil
dexmedetomidine
phenylephrine
ephedrine
atropine
cisatracurium
methohexital
ropivacaine
dantrolene
scopolamine patch
tranexamic acid|txa
heparin
protamine
`);

P("Name a pharmacy law or regulation","pharm","",`
controlled substances act
hipaa
dea registration
schedule ii
prescription monitoring program|pdmp
obra 90
fda
durham humphrey amendment
kefauver harris amendment
food drug and cosmetic act
combat methamphetamine epidemic act
poison prevention packaging act|childproof caps
drug supply chain security act|dscsa
orange book
purple book
hatch waxman act
dshea
medicare part d
340b program
usp 797
usp 800
usp 795
ipledge
rems
dea form 222
dea form 106
board of pharmacy
partial fill rules
transfer rules
patient counseling requirement
ryan haight act
`);

P("Name a compounding term or piece of compounding equipment","pharm","",`
mortar and pestle
spatula
graduated cylinder
balance|scale
ointment slab
laminar flow hood
beyond use date
levigation
trituration
geometric dilution
sterile compounding
nonsterile compounding
clean room
isolator|biological safety cabinet
suppository mold
capsule machine
syringe filter
ampule
vial
hazardous drug
base
excipient
suspension
emulsion
ointment
cream
troche
lozenge
gelatin capsule
garbing
media fill test
anteroom
buffer room
iso class 5
`);

P("Name a drug pulled from the market","pharm","",`
vioxx|rofecoxib
thalidomide
fen phen|fenfluramine
zantac|ranitidine
darvon|propoxyphene
belviq|lorcaserin
meridia|sibutramine
bextra|valdecoxib
baycol|cerivastatin
seldane|terfenadine
propulsid|cisapride
zelnorm|tegaserod
redux|dexfenfluramine
raptiva|efalizumab
trasylol|aprotinin
xigris
phenylpropanolamine|ppa
ephedra
quaalude|methaqualone
lotronex|alosetron
rezulin|troglitazone
pemoline|cylert
trovan|trovafloxacin
duract|bromfenac
opana er
makena
`);

P("Name a drug that comes from a plant or natural source","pharm","",`
aspirin|willow bark
morphine|opium poppy
digoxin|foxglove
quinine|cinchona bark
penicillin|mold
paclitaxel|taxol|yew tree
codeine
caffeine
nicotine
atropine|belladonna
vincristine|periwinkle
artemisinin|sweet wormwood
cocaine|coca leaf
ephedrine|ephedra
metformin|french lilac
colchicine|autumn crocus
warfarin|sweet clover
heparin|pig intestine
insulin
premarin|horse urine
exenatide|gila monster
botox|bacteria
cyclosporine|fungus
lovastatin|red yeast rice
scopolamine
physostigmine|calabar bean
tubocurarine|curare
reserpine|snakeroot
galantamine|snowdrop
capsaicin|chili peppers
menthol
senna
cannabidiol|cannabis
psilocybin|mushrooms
ziconotide|cone snail
captopril|viper venom
streptomycin|soil bacteria
etoposide|mayapple
`);

P("Name an antiparasitic drug","pharm","",`
ivermectin
metronidazole
albendazole
mebendazole
praziquantel
chloroquine
hydroxychloroquine
permethrin
pyrantel pamoate
nitazoxanide
tinidazole
artemether lumefantrine|coartem
atovaquone proguanil|malarone
mefloquine
primaquine
tafenoquine
quinine
pyrimethamine
paromomycin
miltefosine
benznidazole
nifurtimox
diethylcarbamazine
spinosad
malathion
lindane
`);

P("Name a medication that comes as a nasal spray","pharm","",`
fluticasone|flonase
afrin|oxymetazoline
naloxone|narcan
saline
mometasone|nasonex
budesonide|rhinocort
triamcinolone|nasacort
azelastine|astelin
sumatriptan nasal|imitrex nasal
zolmitriptan nasal
ipratropium nasal|atrovent nasal
cromolyn|nasalcrom
olopatadine nasal|patanase
esketamine|spravato
desmopressin|ddavp
calcitonin nasal|miacalcin
fluticasone azelastine|dymista
beclomethasone nasal|qnasl
ciclesonide|omnaris
flumist|nasal flu vaccine
midazolam nasal|nayzilam
diazepam nasal|valtoco
butorphanol nasal
dihydroergotamine nasal|migranal
zavegepant|zavzpret
neffy|epinephrine nasal
phenylephrine nasal|neo synephrine
mupirocin nasal
nicotine nasal spray
ryaltris
`);

P("Name a drug best taken on an empty stomach","pharm","",`
levothyroxine|synthroid
alendronate|fosamax
risedronate
ibandronate
omeprazole|ppis
pantoprazole
esomeprazole
lansoprazole
ampicillin
penicillin v
dicloxacillin
tetracycline
rifampin
isoniazid
didanosine
sucralfate
captopril
zafirlukast
iron supplements
nilotinib
abiraterone
lapatinib
erlotinib
pazopanib
mercaptopurine
efavirenz
`);

P("Name a medication that comes as a skin patch","pharm","",`
nicotine patch
fentanyl patch|duragesic
lidocaine patch|lidoderm
birth control patch|xulane|ortho evra
scopolamine patch|transderm scop
nitroglycerin patch
estrogen patch|estradiol patch|climara|vivelle
testosterone patch|androderm
clonidine patch|catapres tts
buprenorphine patch|butrans
rivastigmine patch|exelon patch
rotigotine patch|neupro
methylphenidate patch|daytrana
selegiline patch|emsam
oxybutynin patch|oxytrol
capsaicin patch|qutenza
granisetron patch|sancuso
diclofenac patch|flector
twirla
dextroamphetamine patch|xelstrym
asenapine patch|secuado
salonpas|menthol patch
`);

P("Name a drug patients inject themselves at home","pharm","",`
insulin
epipen|epinephrine
ozempic|semaglutide|wegovy
humira|adalimumab
enoxaparin|lovenox
trulicity|dulaglutide
mounjaro|tirzepatide
enbrel|etanercept
dupixent|dupilumab
testosterone
glucagon
methotrexate injection
sumatriptan injection|imitrex statdose
heparin
fertility drugs|follistim|gonal f
teriparatide|forteo
aimovig|erenumab
emgality
ajovy
repatha|evolocumab
praluent|alirocumab
cosentyx|secukinumab
taltz|ixekizumab
skyrizi
stelara
copaxone|glatiramer
kesimpta
interferon
neupogen|filgrastim
neulasta|pegfilgrastim
b12 injection
depo subq provera
fondaparinux|arixtra
octreotide
somatropin|growth hormone
apomorphine
naloxone injection|zimhi
`);

P("Name a drug that commonly causes drowsiness","pharm","",`
diphenhydramine|benadryl
benzodiazepines|xanax|valium|ativan
opioids|oxycodone|hydrocodone
zolpidem|ambien
trazodone
gabapentin
pregabalin|lyrica
cyclobenzaprine|flexeril
mirtazapine|remeron
quetiapine|seroquel
hydroxyzine
promethazine|phenergan
meclizine
doxylamine|unisom
amitriptyline
clonidine
tizanidine
baclofen
methocarbamol
carisoprodol|soma
olanzapine
phenobarbital
topiramate
levetiracetam|keppra
carbamazepine
valproate
lithium
doxepin
chlorpheniramine
dimenhydrinate|dramamine
metoclopramide
ondansetron
propranolol
alcohol
cannabis
melatonin
suvorexant|belsomra
`);

P("Name a drug for heart failure","pharm","",`
furosemide|lasix
lisinopril
metoprolol succinate|toprol xl
carvedilol|coreg
entresto|sacubitril valsartan
spironolactone
digoxin
dapagliflozin|farxiga
empagliflozin|jardiance
bumetanide
torsemide
losartan
valsartan
enalapril
bisoprolol
eplerenone
hydralazine
isosorbide dinitrate
bidil
ivabradine|corlanor
vericiguat|verquvo
milrinone
dobutamine
metolazone
finerenone
sotagliflozin
tafamidis
`);

/* ---- NEW STANDARD DAILY PROMPTS: DENTAL (batch 2026-10-31) ---- */
P("Name an ingredient in toothpaste","dental","",`
fluoride
sodium fluoride
baking soda|sodium bicarbonate
mint|flavoring
glycerin
sorbitol
water
silica|hydrated silica
calcium carbonate
sodium lauryl sulfate|sls
xylitol
stannous fluoride
potassium nitrate
triclosan
hydrogen peroxide
charcoal
titanium dioxide
carrageenan
xanthan gum
cellulose gum
saccharin
sodium monofluorophosphate
hydroxyapatite|nano hydroxyapatite
arginine
zinc citrate
tetrasodium pyrophosphate
pentasodium triphosphate
cocamidopropyl betaine
dicalcium phosphate
calcium sodium phosphosilicate|novamin
strontium chloride
peppermint oil
menthol
stevia
dyes|blue dye
`);

P("Name a cosmetic dental procedure","dental","",`
teeth whitening|bleaching
veneers
invisalign|clear aligners
braces
bonding|dental bonding
crowns
implants
gum contouring|gum lift
tooth contouring|enameloplasty
smile makeover
porcelain veneers
composite veneers
lumineers
inlays and onlays
gummy smile correction
crown lengthening
gum grafting
tooth colored fillings
snap on smile
botox for gummy smile
tooth jewelry|tooth gems
grillz
lip filler
`);

P("Name a pediatric dentistry term or procedure","dental","",`
sealants
fluoride varnish
baby teeth|primary teeth
pulpotomy
stainless steel crown
space maintainer
baby bottle tooth decay|early childhood caries
teething
thumb sucking
pacifier use
first dental visit
silver diamine fluoride|sdf
nitrous oxide|laughing gas
pulpectomy
natal teeth
eruption cyst
mixed dentition
ankyloglossia|tongue tie
frenectomy
knee to knee exam
tell show do
papoose board|protective stabilization
zirconia crown
strip crown
interim therapeutic restoration
indirect pulp cap
lift the lip
anticipatory guidance
dental home
leeway space
`);

P("Name a cause of bad breath","dental","",`
poor oral hygiene
gum disease
tooth decay|cavities
dry mouth
garlic
onions
coffee
smoking
alcohol
morning breath
tongue coating|bacteria on tongue
sinus infection
postnasal drip
tonsil stones
acid reflux|gerd
dentures
diet|low carb diet|keto
fasting
dehydration
infection
dental abscess
diabetes|ketones
kidney failure
liver failure
fish
medications
food stuck in teeth
mouth breathing
strep throat
lung infection
h pylori
crash diet
cancer
bowel obstruction
`);

P("Name a cause of dry mouth","dental","",`
dehydration
medications
antihistamines
antidepressants
aging
mouth breathing
smoking
sjogren syndrome
diabetes
radiation therapy
chemotherapy
anxiety
alcohol
caffeine
cannabis|marijuana
diuretics
blood pressure medications
decongestants
opioids
sleeping with mouth open|snoring
nerve damage
salivary gland disease
hiv
alzheimer disease
stroke
methamphetamine|meth
anticholinergics
antipsychotics
muscle relaxants
menopause
cpap
parkinson disease
graft versus host disease
salivary stones
`);

P("Name a cause of mouth sores","dental","",`
canker sores|aphthous ulcers
cold sores|herpes
biting your cheek|trauma
hand foot and mouth disease
braces
dentures
stress
spicy foods
acidic foods
thrush|oral candidiasis
burns|hot food
vitamin b12 deficiency
iron deficiency
folate deficiency
crohn disease
celiac disease
behcet disease
lupus
lichen planus
chemotherapy
toothpaste with sls
syphilis
oral cancer
herpangina
shingles
pemphigus
pemphigoid
erythema multiforme
stevens johnson syndrome
hiv
smoking
tuberculosis
sharp tooth
`);

P("Name a cause of bleeding gums","dental","",`
gingivitis
brushing too hard
periodontitis|gum disease
flossing
new flossing routine
plaque buildup
pregnancy
blood thinners
vitamin c deficiency|scurvy
vitamin k deficiency
leukemia
diabetes
hormonal changes
dentures
hemophilia
low platelets|thrombocytopenia
smoking cessation
stress
aspirin
nsaids
dilantin|phenytoin
hiv
liver disease
von willebrand disease
puberty
birth control pills
braces
`);

P("Name a reason a filling or crown fails","dental","",`
recurrent decay|secondary caries
fracture|cracked filling
grinding|bruxism
wear
leakage|microleakage
poor oral hygiene
biting hard foods
chewing ice
age of restoration
poor fit|open margin
debonding
sensitivity
trauma
moisture contamination
insufficient thickness
large restoration
endodontic failure
gum recession
high bite
cement washout
`);

P("Name a job in a dental office","dental","",`
dentist
dental hygienist
dental assistant
receptionist|front desk
office manager
orthodontist
oral surgeon
lab technician|dental technician
billing specialist
treatment coordinator
insurance coordinator
periodontist
endodontist
pediatric dentist
prosthodontist
sterilization technician
expanded function dental assistant|efda
patient care coordinator
dental therapist
practice owner
associate dentist
marketing coordinator
anesthesiologist
`);

P("Name a dental insurance or billing term","dental","",`
deductible
copay
premium
annual maximum
ppo
hmo
coinsurance
pre authorization|predetermination
cdt code
claim
out of pocket
in network
out of network
waiting period
explanation of benefits|eob
frequency limitation
missing tooth clause
dual coverage|coordination of benefits
fee schedule
usual customary and reasonable|ucr
dmo
indemnity plan
discount plan
capitation
superbill
ledger
write off
balance billing
medicaid
chip
dental savings plan
`);

P("Name an infection control step in a dental office","dental","",`
hand washing|hand hygiene
gloves
masks
sterilization|autoclave
disinfecting surfaces
face shields
eye protection
gowns
barriers|plastic wraps
sharps container
ultrasonic cleaner
instrument packaging
spore testing|biological indicators
chemical indicators
waterline treatment
high volume evacuation
rubber dam
preprocedural rinse
vaccination|hepatitis b vaccine
cdc guidelines
osha
standard precautions
single use items
cassettes
dry heat sterilization
chemical vapor sterilization
heat sensitive items
air purifiers|hepa filters
safety syringes
`);

P("Name a famous person in dental history","dental","",`
pierre fauchard
g v black|greene vardiman black|gv black
horace wells
william morton
paul revere
doc holliday
apollonia|saint apollonia
john greenwood
chapin harris
horace hayden
lucy hobbs taylor
edward angle
frederick mckay
trendley dean
robert tanner freeman
ida gray
washington wentworth sheffield
willoughby miller
alfred fones
per ingvar branemark
william rollins
c edmund kells
`);

P("Name a food that is good for your teeth","dental","",`
cheese
milk
apples
carrots
celery
yogurt
leafy greens|spinach
water
nuts|almonds
eggs
sugar free gum|xylitol gum
green tea
fish|salmon
broccoli
strawberries
cucumbers
sweet potatoes
oranges
chicken
tofu
beans
seeds|sesame seeds
garlic
onions
kiwi
shiitake mushrooms
bell peppers
`);

P("Name a food or drink that causes cavities","dental","",`
candy
soda
sugar
juice|fruit juice
cookies
cake
chips
sports drinks|gatorade
energy drinks
gummy candy
caramel
lollipops
dried fruit|raisins
white bread
crackers
sweetened coffee
sweet tea
ice cream
chocolate
syrup
honey
cereal
pastries|donuts
lemonade
cough drops
breath mints
sour candy
alcohol|wine
granola bars
pasta
milk in a bottle at bedtime
`);

P("Name a cause of a chipped or broken tooth","dental","",`
biting hard food
chewing ice
falls
sports injury
car accident
grinding|bruxism
popcorn kernels
large fillings
cavities|tooth decay
fights|punch
opening things with teeth
hard candy
nuts
bones
pen chewing
nail biting
cracked tooth syndrome
root canal treated tooth
temperature changes
aging
olive pits
seizure
mouth piercing|tongue ring
trauma
`);

P("Name a sign of a cavity","dental","",`
toothache
sensitivity to sweets
sensitivity to cold
sensitivity to hot
hole in tooth
black spot|dark spot
white spot
pain when biting
bad breath
bad taste
brown stain
food getting stuck
swelling
pus
rough edge
broken tooth
visible pit
radiolucency on x ray
`);

P("Name a step in a dental cleaning visit","dental","",`
x rays
scaling
polishing
flossing
fluoride
oral exam
medical history review
blood pressure
periodontal charting|probing
oral cancer screening
plaque removal
tartar removal
rinse
oral hygiene instructions
sealants
ultrasonic scaling
check bite
schedule next visit
disclosing tablets|disclosing solution
caries risk assessment
updating chart
`);

P("Name a tongue condition","dental","",`
geographic tongue
thrush|oral candidiasis
tongue tie|ankyloglossia
black hairy tongue
burning mouth syndrome
leukoplakia
oral cancer|tongue cancer
canker sore
glossitis
strawberry tongue
macroglossia|enlarged tongue
fissured tongue
scalloped tongue
tongue piercing
coated tongue
bitten tongue
oral hairy leukoplakia
lingual varices
atrophic glossitis
median rhomboid glossitis
lichen planus
scarlet fever
kawasaki disease
vitamin b12 deficiency
hypothyroidism
amyloidosis
`);

P("Name a teeth whitening method or product","dental","",`
whitening strips|crest whitestrips
in office whitening|zoom whitening
whitening toothpaste
custom trays
hydrogen peroxide
carbamide peroxide
baking soda
charcoal toothpaste
led light whitening
whitening pens
whitening mouthwash
opalescence
laser whitening
oil pulling
internal bleaching|walking bleach
veneers
bonding
microabrasion
over the counter trays
hismile
snow
`);

P("Name a cause of a toothache","dental","",`
cavity|tooth decay
abscess
cracked tooth
gum disease
wisdom teeth|impacted wisdom tooth
sinus infection
grinding|bruxism
lost filling
sensitivity
food stuck between teeth
recent dental work
pulpitis
infection
dry socket
tmj disorder
teething
trauma
exposed root
braces
heart attack
trigeminal neuralgia
ear infection
cluster headache
pericoronitis
`);

P("Name a complication of dental implants","dental","",`
infection
peri implantitis
implant failure
nerve damage
sinus problems|sinus perforation
bone loss
loose implant
gum recession
broken screw
loose abutment
pain
swelling
bleeding
allergic reaction|titanium allergy
crown fracture
poor osseointegration
peri implant mucositis
bruising
damage to adjacent teeth
fractured implant
food impaction
`);

P("Name a course or subject in dental school","dental","",`
anatomy
dental anatomy
histology
biochemistry
physiology
pathology
oral pathology
pharmacology
microbiology
radiology
periodontics
endodontics
prosthodontics
orthodontics
pediatric dentistry
oral surgery
operative dentistry
dental materials
occlusion
public health
ethics
practice management
head and neck anatomy
neuroscience
immunology
oral medicine
local anesthesia
implant dentistry
cariology
behavioral science
`);

P("Name a dental behavior management technique","dental","",`
tell show do
positive reinforcement
distraction
nitrous oxide
voice control
modeling
parental presence
desensitization
sedation
general anesthesia
protective stabilization
hand over mouth
nonverbal communication
relaxation breathing
music
virtual reality
short appointments
praise
rewards|stickers|prizes
memory restructuring
cognitive behavioral therapy
`);

P("Name a cause of crooked teeth","dental","",`
genetics
thumb sucking
pacifier use
losing baby teeth early
small jaw
crowding
tongue thrusting
mouth breathing
missing teeth
extra teeth
injury
poor dental care
bottle feeding
wisdom teeth
large teeth
jaw misalignment
not wearing retainer
gum disease
tumors
cleft lip and palate
nail biting
`);

P("Name a sign of teeth grinding (bruxism)","dental","",`
worn teeth
jaw pain
headache
tooth sensitivity
chipped teeth
sore jaw muscles
flat teeth
earache
tight jaw
grinding noise at night
cracked teeth
broken fillings
tongue scalloping
cheek biting
enlarged masseter muscles
abfraction
disrupted sleep
tmj clicking
receding gums
loose teeth
`);

P("Name a medical condition that changes dental treatment","dental","",`
diabetes
heart disease
pregnancy
high blood pressure
artificial joint|joint replacement
bleeding disorders
blood thinners
heart valve problems
asthma
allergies
cancer
hiv
hepatitis
kidney disease
liver disease
epilepsy
osteoporosis|bisphosphonate use
radiation therapy
organ transplant
copd
stroke
dementia
pacemaker
autism
sickle cell disease
immunosuppression
adrenal insufficiency
thyroid disease
latex allergy
malignant hyperthermia
`);

P("Name a way to prevent cavities","dental","",`
brushing
flossing
fluoride toothpaste
dental checkups
limiting sugar
sealants
fluoride treatments
mouthwash
drinking water
fluoridated water
xylitol gum
healthy diet
avoid snacking
avoid soda
silver diamine fluoride
cleanings
electric toothbrush
water flosser
avoid sipping sugary drinks
chewing sugar free gum
not sharing utensils
prescription fluoride toothpaste
calcium phosphate products
`);

P("Name an animal known for its teeth or tusks","dental","",`
shark
beaver
elephant
walrus
crocodile
alligator
hippo
saber toothed tiger
narwhal
lion
tiger
wolf
piranha
rat
snake
vampire bat
warthog
wild boar
great white shark
hyena
baboon
gorilla
rabbit
horse
cat
dog
squirrel
sloth bear
mandrill
`);

P("Name a dental X-ray error","dental","",`
elongation
foreshortening
overlapping
cone cut
blurry image|movement
double exposure
underexposure|too light
overexposure|too dark
missed apices
backwards film|reversed film
film bending
herringbone pattern
phalangioma|finger in image
static electricity
ghost image
tongue shadow
slanted occlusal plane
fogged film
chin tipped up
chin tipped down
patient positioned too far forward
patient positioned too far back
airway shadow
lead apron artifact
`);

P("Name a toothbrushing or flossing technique or tip","dental","",`
bass technique
modified bass
circular|fones technique
stillman technique
modified stillman
charters technique
scrub technique
rolling stroke technique
leonard technique
c shape flossing
floss threader
interdental brush
water flossing
two minutes
45 degree angle
brush tongue
spit dont rinse
soft bristles
electric toothbrush
floss before brushing
`);

/* ---- NEW STANDARD DAILY PROMPTS: NURSING (batch 2026-11-04, board-first) ---- */
P("Name a food high in sodium","nursing","",`
canned soup|soup
bacon
ham
hot dogs|frankfurters
deli meat|lunch meat|cold cuts|luncheon meat
pickles|dill pickles
potato chips|chips|crisps
soy sauce
pizza
processed cheese|american cheese|cheese slices
cheese
fast food
frozen dinners|tv dinners|frozen meals
sausage
salami
pepperoni
salted pretzels|pretzels
canned vegetables
table salt|salt
salted nuts
ketchup
olives
sauerkraut
beef jerky|jerky
instant noodles|ramen|cup noodles
boxed macaroni and cheese|mac and cheese
corned beef
smoked salmon|lox
canned tuna
sardines
anchovies
cottage cheese
feta cheese
parmesan
blue cheese
bouillon cubes|stock cubes|bouillon
gravy mix|gravy
salad dressing
barbecue sauce
teriyaki sauce
fish sauce
worcestershire sauce
mustard
salsa
tomato juice|vegetable juice|v8
pasta sauce|spaghetti sauce|marinara sauce
canned beans|baked beans
canned chili|chili
salted butter
margarine
bread|white bread
bagels
biscuits
pancake mix
instant pudding
crackers|saltines|saltine crackers
popcorn|microwave popcorn
tortilla chips
cheese puffs
seasoned rice mix|rice mix|boxed rice mix
stuffing mix
burritos
tacos
hamburger|cheeseburger
fried chicken
chicken nuggets
french fries
deli sandwich|sub sandwich
breakfast sandwich
pot pie
lasagna
canned meat|spam|vienna sausages
smoked meats
cured meats
prosciutto
pastrami
bologna
kielbasa
chorizo
pork rinds
cured fish
pickled herring
caviar
shellfish|shrimp|crab
imitation crab|surimi
miso|miso soup
kimchi
pickled vegetables
capers
garlic salt
onion salt
celery salt
seasoning salt|seasoned salt
msg|monosodium glutamate
meat tenderizer
baking soda
baking powder
self rising flour
sports drinks
canned broth|broth|stock
cereal
instant oatmeal
processed foods
restaurant food|takeout|takeaway
chinese food
salted fish
smoked sausage
cheese spread|cheese dip|queso
buttermilk
hummus
pesto
steak sauce
hot sauce
soy based sauces
oyster sauce
hoisin sauce
salted crackers
cheddar
halloumi
string cheese
canned ravioli
frozen pizza
packaged ramen
breakfast cereal
waffles
pancakes
english muffins
croissant
rolls
salted peanuts
trail mix
vegemite|marmite
salted caramel
seaweed snacks
pickled eggs
`, "2026-11-06");

P("Name a food high in iron","nursing","",`
red meat|beef|steak
liver|beef liver|chicken liver
spinach
beans|legumes
lentils
fortified cereal|iron fortified cereal|cereal
kidney beans
tofu
dark leafy greens|leafy greens
clams
oysters
mussels
shellfish
sardines
tuna
dark chocolate
pumpkin seeds|pepitas
raisins
dried apricots
prunes|prune juice
eggs|egg yolks
chickpeas|garbanzo beans
black beans
lamb
pork
turkey|dark meat turkey
duck
venison
bison
organ meats
kidney
heart
blood sausage|black pudding
broccoli
kale
collard greens
swiss chard
beet greens
turnip greens
quinoa
oatmeal|oats
fortified bread|enriched bread
whole grains
whole wheat bread
brown rice
soybeans|edamame
tempeh
peas|green peas
nuts
cashews
almonds
pine nuts
pistachios
sesame seeds|tahini
sunflower seeds
hemp seeds
flaxseed
chia seeds
molasses|blackstrap molasses
dried fruit
dates
figs|dried figs
mulberries
potatoes with skin|baked potato
sweet potatoes
tomato paste
spirulina
seaweed
cream of wheat|farina
infant cereal|iron fortified infant cereal
iron fortified formula
fortified pasta
lima beans
navy beans
pinto beans
white beans
split peas
hummus
anchovies
mackerel
shrimp
scallops
octopus
cuttlefish
caviar
liverwurst|pate
goose
rabbit
quail
corned beef
ground beef
nutritional yeast
peanuts|peanut butter
`, "2026-11-06");

P("Name a food high in calcium","nursing","",`
milk
cheese
yogurt|yoghurt
ice cream
sardines with bones|sardines
canned salmon with bones|canned salmon
tofu|calcium set tofu
fortified orange juice|calcium fortified juice
fortified cereal
broccoli
kale
collard greens
spinach
bok choy
turnip greens
mustard greens
almonds
fortified soy milk|soy milk
fortified almond milk|almond milk
fortified plant milk|oat milk|rice milk
cottage cheese
parmesan
cheddar
swiss cheese
mozzarella
ricotta
feta
goat cheese
cream cheese
kefir
buttermilk
pudding
custard
frozen yogurt
milkshake
evaporated milk|condensed milk
powdered milk|dry milk
whey
chia seeds
sesame seeds|tahini
poppy seeds
sunflower seeds
figs|dried figs
oranges
white beans
navy beans
kidney beans
chickpeas
lentils
edamame|soybeans
tempeh
okra
rhubarb
seaweed
amaranth
quinoa
oatmeal
fortified bread
corn tortillas
anchovies
shrimp
clams
oysters
crab
perch
rainbow trout
mackerel
blackstrap molasses
almond butter
brazil nuts
pistachios
brussels sprouts
dandelion greens
watercress
arugula
pizza
lasagna
macaroni and cheese
calcium chews|calcium supplement
`, "2026-11-06");

P("Name a food high in purines (avoid with gout)","nursing","",`
red meat|beef
organ meats|offal
liver
kidney
sweetbreads
anchovies
sardines
shellfish
beer
mussels
scallops
herring
mackerel
tuna
trout
codfish|cod
haddock
salmon
shrimp
lobster
crab
oysters
clams
fish roe|roe|caviar
lamb
pork
bacon
veal
venison
goose
turkey
duck
chicken
game meat
rabbit
pheasant
partridge
heart
brain
tongue
tripe
gravy
meat extracts|bouillon|broth
meat based soups|consomme
yeast|brewers yeast|yeast extract
nutritional yeast
vegemite|marmite
alcohol
spirits|liquor|whiskey
wine
high fructose corn syrup
sugary drinks|soda|soft drinks
fruit juice
smelt
whitefish
halibut
tilapia
sea bass
octopus
squid
eel
dried fish
fish sauce
anchovy paste
sausage
salami
ham
hot dogs
processed meats
deli meat
asparagus
spinach
cauliflower
mushrooms
peas
lentils
beans
dried peas
oatmeal
wheat germ
bran
spirulina
seaweed
`, "2026-11-06");

P("Name a symptom of heart failure","nursing","",`
shortness of breath|dyspnea|sob
swelling in legs|edema|leg swelling|ankle swelling|peripheral edema|pedal edema
fatigue|tiredness
weight gain|rapid weight gain
orthopnea|trouble breathing lying flat
paroxysmal nocturnal dyspnea|pnd|waking up breathless
cough|chronic cough
crackles|rales
jugular vein distension|jvd
pink frothy sputum|frothy sputum
pulmonary edema
fluid retention
exercise intolerance|activity intolerance
weakness
tachycardia|fast heart rate
palpitations
s3|s3 gallop|ventricular gallop
s4|atrial gallop
dizziness|lightheadedness
confusion
abdominal swelling|ascites
hepatomegaly|enlarged liver
hepatojugular reflux
nocturia
decreased urine output|oliguria
loss of appetite|anorexia
nausea
early satiety|feeling full
wheezing|cardiac asthma
cyanosis
cool extremities|cold hands and feet
pallor
hypotension
narrow pulse pressure
pulsus alternans
displaced apical impulse
cardiomegaly|enlarged heart
pleural effusion
sacral edema
pitting edema
anasarca
hypoxia|low oxygen
tachypnea
cheyne stokes breathing
chest pain|angina
anxiety
restlessness
insomnia|trouble sleeping
needing more pillows|sleeping propped up|two pillow orthopnea
bendopnea
cachexia|cardiac cachexia
muscle wasting
right upper quadrant pain
bloating
syncope|fainting
arrhythmia|atrial fibrillation
elevated bnp
hyponatremia
kidney dysfunction|cardiorenal syndrome
memory problems
depression
diaphoresis|sweating
decreased exercise capacity
breathlessness on exertion|dyspnea on exertion|doe
tight shoes|rings feel tight
clothes feel tight
dyspnea at rest
delayed capillary refill
weak pulses|thready pulse
mottled skin
cold clammy skin
low ejection fraction|reduced ejection fraction
decreased cardiac output
ventricular arrhythmias
sudden cardiac death
elevated creatinine
hepatic congestion
elevated liver enzymes
hemoptysis
pulmonary hypertension
right ventricular heave
central sleep apnea
lactic acidosis
`, "2026-11-06");

P("Name a symptom of hypothyroidism","nursing","",`
fatigue|tiredness
weight gain
cold intolerance|feeling cold
constipation
dry skin
hair loss|thinning hair
depression
bradycardia|slow heart rate
brittle nails
puffy face|facial puffiness
hoarse voice|hoarseness
muscle weakness
memory problems|forgetfulness
brain fog|trouble concentrating
heavy periods|menorrhagia
irregular periods
goiter
myxedema
slow speech
slowed reflexes|delayed relaxation of reflexes
coarse hair
loss of outer eyebrows|thinning eyebrows|queen anne sign
muscle aches|myalgia
joint pain|arthralgia
stiffness
lethargy
sleepiness|somnolence
low body temperature|hypothermia
high cholesterol|hyperlipidemia
elevated tsh
low t4
infertility
decreased libido
erectile dysfunction
carpal tunnel syndrome
numbness|paresthesia
swollen tongue|macroglossia
puffy eyes|periorbital edema
nonpitting edema
pale skin|pallor
yellowish skin|carotenemia
anemia
hearing loss
dyspnea
pericardial effusion
pleural effusion
hypotension
diastolic hypertension
hyponatremia
decreased appetite
slow thinking|mental slowing
apathy
psychosis|myxedema madness
myxedema coma
sleep apnea
snoring
cold hands and feet
decreased sweating
thick skin
ataxia
milk discharge|galactorrhea
delayed puberty
growth delay|short stature
mental impairment in infants|cretinism
prolonged neonatal jaundice
umbilical hernia
large fontanelle
elevated creatine kinase
hypoventilation|bradypnea
hypercapnia
ileus
abdominal distension
urinary retention
ptosis|droopy eyelids
dull facial expression
mood swings
anxiety
vertigo
tinnitus
low voltage ecg
prolonged qt
dry hair
hypoglycemia
miscarriage
exercise intolerance
`, "2026-11-06");

P("Name a sign of liver failure or cirrhosis","nursing","",`
jaundice|yellow skin|icterus
ascites|abdominal swelling
yellow eyes|scleral icterus
easy bruising|bruising
bleeding|bleeding easily
confusion|hepatic encephalopathy
asterixis|flapping tremor|liver flap
spider angiomas|spider nevi
palmar erythema|red palms
itching|pruritus
fatigue
edema|leg swelling
dark urine
pale stools|clay colored stools
esophageal varices|varices
vomiting blood|hematemesis
black stools|melena
caput medusae
splenomegaly|enlarged spleen
hepatomegaly|enlarged liver
shrunken liver
gynecomastia
testicular atrophy
loss of body hair
muscle wasting
weight loss
loss of appetite|anorexia
nausea
fetor hepaticus|sweet breath|musty breath
elevated ammonia
elevated bilirubin
elevated liver enzymes|high alt|high ast
low albumin|hypoalbuminemia
prolonged pt|elevated inr|coagulopathy
low platelets|thrombocytopenia
anemia
hyponatremia
hypoglycemia
portal hypertension
hepatorenal syndrome
hepatopulmonary syndrome
spontaneous bacterial peritonitis
clubbing
white nails|terry nails
dupuytren contracture
parotid enlargement
xanthelasma
abdominal pain|right upper quadrant pain
hemorrhoids
umbilical hernia
fever
infections
sleep reversal|day night reversal
personality changes
slurred speech
coma
amenorrhea
impotence|erectile dysfunction
hypotension
low blood pressure
tachycardia
shortness of breath
hepatic hydrothorax
steatorrhea
fatigue and weakness|weakness
kayser fleischer rings
bronze skin
nosebleeds|epistaxis
bleeding gums
petechiae
malnutrition
vitamin deficiency
osteoporosis
insulin resistance|diabetes
sepsis
gi bleeding
hepatocellular carcinoma|liver cancer
fluid wave|shifting dullness
bulging flanks
elevated alkaline phosphatase
elevated ggt
hypokalemia
respiratory alkalosis
decreased urine output|oliguria
night blindness
`, "2026-11-06");







P("Name a food high in fiber","nursing","",`
beans|legumes
whole grains
oatmeal|oats
bran|wheat bran
bran cereal|bran flakes|all bran
whole wheat bread|whole grain bread|wholemeal bread
brown rice
apples
pears
berries
raspberries
blackberries
strawberries
blueberries
prunes|dried plums
broccoli
lentils
chickpeas|garbanzo beans
black beans
kidney beans
split peas
green peas|peas
avocado
artichokes
brussels sprouts
carrots
sweet potatoes
potatoes with skin
popcorn
nuts
almonds
chia seeds
flaxseed|linseed
psyllium|metamucil
quinoa
barley
bulgur
whole wheat pasta
corn
bananas
oranges
figs
dates
raisins
dried apricots
kiwi
mango
guava
passion fruit
coconut
spinach
kale
collard greens
cabbage
cauliflower
beets
squash
pumpkin
turnips
parsnips
okra
green beans
celery
edamame
pinto beans
navy beans
lima beans
black eyed peas
hummus
pumpkin seeds
sunflower seeds
walnuts
pistachios
pecans
peanuts
hazelnuts
rye bread|rye
buckwheat
millet
farro
wild rice
shredded wheat
granola
muesli
high fiber cereal|fiber cereal
dark chocolate
`, "2026-11-06");

P("Name a food that contains gluten","nursing","",`
bread
pasta
wheat
barley
rye
beer
cereal
crackers
cookies|biscuits
cake
pizza crust|pizza
bagels
muffins
pancakes
waffles
croissants
pastries|danish
pie crust|pie
doughnuts|donuts
couscous
bulgur
semolina
spelt
farro
durum
kamut
triticale
seitan
malt|malt vinegar|malted milk
soy sauce
flour tortillas|tortillas
pretzels
breadcrumbs|bread crumbs|panko
croutons
stuffing
gravy
roux
cream soups|cream of mushroom soup
battered foods|breaded foods
fried chicken
fish sticks|fish fingers
chicken nuggets
onion rings
noodles|egg noodles
ramen
udon
orzo
gnocchi
dumplings
wontons
ravioli
lasagna
macaroni and cheese
graham crackers
brownies
cupcakes
communion wafers
matzo
pita
naan
english muffins
hamburger buns|buns
hot dog buns
sandwiches
wraps
cereal bars|granola bars
wheat germ
bran
farina|cream of wheat
some oats|oats contaminated with wheat
licorice
teriyaki sauce
salad dressings
imitation crab
meatballs
meatloaf
sausages
veggie burgers
bouillon cubes
soup mixes
beer battered fish
ice cream cones
`, "2026-11-06");

P("Name a food high in protein","nursing","",`
chicken|chicken breast
eggs|egg whites
beef|steak
fish
greek yogurt|yogurt
milk
cheese
cottage cheese
tuna
salmon
turkey
pork
lamb
shrimp
tofu
tempeh
seitan
beans
lentils
chickpeas
black beans
kidney beans
edamame|soybeans
peanut butter
peanuts
almonds
nuts
pumpkin seeds
hemp seeds
chia seeds
quinoa
protein shakes|protein powder|whey protein
protein bars
ensure|nutritional supplement drinks|boost
jerky|beef jerky
ham
bacon
sardines
mackerel
cod
tilapia
halibut
scallops
crab
lobster
mussels
clams
oysters
venison
bison
duck
liver
ground beef
pork chops
sausage
deli turkey|deli meat
parmesan
mozzarella
ricotta
skyr
kefir
soy milk
pea protein
split peas
green peas
oats|oatmeal
spirulina
nutritional yeast
hummus
cashews
pistachios
sunflower seeds
flaxseed
egg substitute
`, "2026-11-06");

/* ---- NEW STANDARD DAILY PROMPTS: NURSING part 2 (batch 2026-11-04, board-first) ---- */
P("Name a symptom of schizophrenia","nursing","",`
hallucinations
delusions
paranoia
hearing voices|auditory hallucinations
disorganized speech
disorganized behavior
flat affect|blunted affect
social withdrawal|isolation
avolition|lack of motivation
anhedonia
alogia|poverty of speech
catatonia
persecutory delusions
grandiose delusions|delusions of grandeur
ideas of reference|delusions of reference
thought broadcasting
thought insertion
thought withdrawal
command hallucinations
visual hallucinations
tactile hallucinations
olfactory hallucinations
gustatory hallucinations
somatic delusions
erotomanic delusions|erotomania
nihilistic delusions
delusions of control
bizarre delusions
word salad
loose associations|loosening of associations|derailment
clang associations
neologisms
echolalia
echopraxia
tangentiality
circumstantiality
perseveration
thought blocking
flight of ideas
incoherence
waxy flexibility
posturing
mutism
stupor
negativism
agitation
inappropriate affect
poor hygiene|neglect of self care
poor insight|anosognosia|lack of insight
cognitive impairment
poor attention
memory problems
poor executive function
asociality
apathy
emotional withdrawal
magical thinking
illusions
suspiciousness
hostility
aggression
bizarre behavior
insomnia|sleep disturbance
depression
suicidal ideation
anxiety
substance use
concrete thinking
ambivalence
autistic thinking
depersonalization
derealization
pressured speech
religiosity
stereotyped movements
grimacing
mannerisms
staring
talking to self
laughing inappropriately
decline in functioning|decline at school or work
odd beliefs
`, "2026-11-06");

P("Name a suicide warning sign or risk factor","nursing","",`
previous suicide attempt|prior attempt
depression
talking about suicide|talking about wanting to die
giving away possessions|giving away belongings
hopelessness
having a plan|specific plan
access to firearms|access to guns|firearms
access to lethal means
substance abuse|drug abuse
alcohol use|alcohol abuse
saying goodbye
social isolation|withdrawal
family history of suicide
sudden calmness|sudden improvement in mood
writing a will|putting affairs in order
feeling like a burden|perceived burdensomeness
mental illness
bipolar disorder
schizophrenia
ptsd|trauma
chronic pain
chronic illness|terminal illness
recent loss|bereavement|grief
divorce|relationship breakup
job loss|unemployment
financial problems|debt
legal problems|incarceration|arrest
bullying
abuse|childhood abuse|sexual abuse
lgbtq youth|lgbtq
male sex|older men
older adults|elderly
adolescents|teenagers
veterans|military
living alone
recent discharge from psychiatric hospital
starting antidepressants|early antidepressant treatment
impulsivity
aggression|rage
anxiety
agitation
insomnia|sleep problems
anhedonia
self harm|cutting
writing a suicide note|suicide note
researching methods|searching for ways to die
buying a gun|stockpiling pills
reckless behavior|risk taking
mood swings
personality disorder|borderline personality disorder
eating disorder
psychosis|command hallucinations
lack of social support
access to medications
hopelessness about future
feeling trapped
unbearable pain|emotional pain
shame|humiliation
rejection
exposure to suicide|suicide contagion|suicide cluster
media exposure
anniversary of loss
traumatic brain injury
physical disability
homelessness
discrimination
indigenous|native american
rural residence
healthcare workers|physicians|nurses
farmers
cancer diagnosis
dementia
revenge seeking
increased drug use
visiting or calling people to say goodbye
stopping psychiatric medication|medication nonadherence
domestic violence|being a victim of violence
panic attacks
postpartum depression
gambling
adverse childhood experiences|aces
`, "2026-11-06");

P("Name a choking hazard for a young child","nursing","",`
grapes|whole grapes
hot dogs|sausages
nuts|peanuts
popcorn
hard candy|lollipops
coins
button batteries|batteries
balloons
marbles
small toys|small toy parts
raw carrots
whole cherry tomatoes|cherry tomatoes
chunks of meat|meat chunks
cheese cubes|chunks of cheese
peanut butter by the spoonful|spoonful of peanut butter
gum|chewing gum
seeds|sunflower seeds
cherries with pits|cherry pits
apple chunks|raw apple
raw vegetables
celery
dried fruit|raisins
marshmallows
jelly beans
gummy candy|gummies
caramels|toffee
cough drops
chips
pretzels
crackers
bread
corn kernels|corn
olives with pits
fish bones
bones
whole blueberries|blueberries
peas
beans
sticky foods
fruit snacks
round foods
magnets
small balls
bouncy balls
beads
jewelry
earrings
rings
buttons
safety pins
pen caps
erasers
bottle caps
caps
pebbles|rocks|stones
crayons
chalk
paper clips
thumbtacks
nails|screws
hair clips|hair ties
lego pieces|building blocks
puzzle pieces
dice
game pieces
doll accessories
toy wheels
stuffed animal eyes
foam pieces
styrofoam
plastic bags
deflated balloons
pet food|dog food
cat litter
cigarette butts
pill|pills
vitamins
ice cubes
rubber bands
toothpicks
jacks
toy darts|suction darts
googly eyes
`, "2026-11-06");

P("Name a childproofing or home safety measure for young children","nursing","",`
outlet covers|outlet plugs
baby gates|stair gates
cabinet locks|cabinet latches|childproof locks
car seat|rear facing car seat
smoke detectors|smoke alarm
carbon monoxide detector
pool fence|pool safety
never leave alone in bath|bathtub supervision
water heater below 120 degrees|lower water heater temperature
anchor furniture|furniture anchors|tip over straps
window guards|window stops
cordless blinds|blind cord safety
lock up medications|medication lock box
lock up cleaning products|store chemicals locked
poison control number
locked firearms|gun safe|gun locks
store guns unloaded
door knob covers
toilet locks
stove knob covers
pot handles turned inward
corner guards|edge bumpers
crib safety|safe crib
back to sleep|safe sleep|place baby on back
no pillows or blankets in crib
firm crib mattress
crib slats less than 2 3 8 inches
remove choking hazards
keep small objects out of reach
cut food into small pieces
avoid button batteries|secure battery compartments
supervision
helmet|bike helmet
life jacket|life vest
sunscreen
childproof caps|child resistant packaging
keep plants out of reach|remove toxic plants
fire extinguisher
fire escape plan
safe toy selection|age appropriate toys
no walkers|avoid baby walkers
high chair straps
changing table straps
never leave on changing table
door alarms
pool alarm
cover hot tubs
empty buckets|empty standing water
keep magnets away
secure tv
outlet strips covered
cord covers|hide electrical cords
appliance latches
oven lock
refrigerator lock
dishwasher lock
window locks
screen door locks
latches on doors
fireplace screen|fireplace guard
radiator covers
space heater safety
nonslip bath mat
bath thermometer
anti scald device
test bath water
no hot drinks near child
keep purses out of reach
keep alcohol locked up
keep cigarettes and vapes out of reach|nicotine safety
laundry pod storage
keep plastic bags away
balloon safety
no drawstrings on clothing
pet safety|supervise with pets
smoke free home
radon testing
lead paint testing
mini blinds without cords
stair railings
`, "2026-11-06");

P("Name an age-appropriate toy or play activity for a child","nursing","",`
rattle
mobile|crib mobile
blocks|building blocks
stacking cups|stacking rings
push toys|push pull toys
pull toys
board books|cloth books
picture books
crayons
puzzles
dolls
stuffed animals
balls
shape sorter
play dough|clay|playdoh
finger paints|finger painting
coloring|coloring books
bubbles
pots and pans|banging pots
peekaboo
pat a cake
mirror|unbreakable mirror
teething toys
activity gym|play mat
soft toys
squeaky toys
musical toys|musical instruments
drums
xylophone
toy telephone
toy cars|trucks
ride on toys
tricycle
wagon
sandbox|sand play
water play|water table
dress up|costumes
pretend play|play kitchen
tea set
doctor kit|play medical equipment
puppets
lego|legos
duplo
board games
card games
video games
jigsaw puzzles
jump rope
hopscotch
tag
hide and seek
swings
slide
climbing
bicycle|bike
scooter
skateboard
roller skates
kites
sports|team sports
soccer
basketball
swimming
dance
arts and crafts
drawing
scissors|safety scissors
beads|bead stringing
lacing cards
coloring with markers
reading
storytelling
music
singing
karaoke
model kits
collecting|stamp collecting|card collecting
science kits
chess
checkers
computer games
journaling|diary
books
clubs|group activities
parallel play
solitary play
cooperative play
associative play
onlooker play
therapeutic play
`, "2026-11-06");



P("Name a risk factor for blood clots (DVT or PE)","nursing","",`
immobility|bed rest
surgery
long flights|long travel|prolonged sitting
birth control pills|oral contraceptives|the pill
pregnancy
postpartum
smoking
obesity
cancer
previous dvt|history of blood clots|prior vte
hormone replacement therapy|estrogen therapy|hrt
older age|age over 60
dehydration
trauma
fractures|hip fracture
hip replacement|knee replacement|joint replacement
orthopedic surgery
central venous catheter|central line|picc
heart failure
atrial fibrillation
stroke
paralysis|spinal cord injury
varicose veins
factor v leiden
prothrombin gene mutation
protein c deficiency
protein s deficiency
antithrombin deficiency
antiphospholipid syndrome
lupus
inflammatory bowel disease|crohns|ulcerative colitis
nephrotic syndrome
sepsis|infection
covid 19
hospitalization
icu stay
chemotherapy
tamoxifen
raloxifene
testosterone
erythropoietin|epo
thalidomide|lenalidomide
polycythemia vera
essential thrombocythemia
myeloproliferative disorders
heparin induced thrombocytopenia|hit
dic
paroxysmal nocturnal hemoglobinuria
sickle cell disease
behcet disease
may thurner syndrome
venous stasis
endothelial injury
hypercoagulability|virchow triad
casts|leg cast
mechanical ventilation
family history of clots
copd
myocardial infarction
burns
pelvic surgery
cesarean section
ivf|fertility treatment
dehydration from diarrhea|vomiting
high altitude
hyperhomocysteinemia
elevated factor viii
nonblood type o|blood type a
diabetes
hypertension
high cholesterol
sedentary lifestyle
thrombophilia|inherited thrombophilia
pancreatic cancer
brain tumor
lung cancer
trousseau syndrome
depo provera|medroxyprogesterone
nursing home residence
acute medical illness
superficial thrombophlebitis
lack of dvt prophylaxis
pacemaker leads
steroids|glucocorticoids
antipsychotics
`, "2026-11-06");

P("Name a risk factor for pressure injuries","nursing","",`
immobility|bed bound|bedridden
incontinence|urinary incontinence|fecal incontinence
moisture|wet skin
malnutrition|poor nutrition
friction
shear|shearing
older age|elderly
low braden score
decreased sensation|sensory loss|neuropathy
paralysis|spinal cord injury
dehydration
low albumin|hypoalbuminemia
low protein
diabetes
poor circulation|peripheral vascular disease
smoking
obesity
underweight|low bmi
anemia
edema
sedation
coma|unconsciousness
dementia|cognitive impairment
confusion|delirium
stroke
hip fracture
surgery|long surgery
icu stay
mechanical ventilation
vasopressors
hypotension
sepsis
fever
infection
steroids
medical devices
casts|splints
oxygen tubing
restraints
not turning|infrequent repositioning
wheelchair use|sitting for long periods
hard surfaces|hard mattress
wrinkled sheets
heart failure
kidney failure
cancer
terminal illness|end of life
previous pressure injury
contractures
spasticity
pain
fear of moving
depression
lack of caregiver
low hemoglobin
vitamin c deficiency
zinc deficiency
hyperglycemia
hypoxia
low oxygen
multiple sclerosis
parkinson disease
amputation
dark skin|darkly pigmented skin
thin skin|fragile skin
dry skin
excessive sweating|diaphoresis
diarrhea
weight loss
frailty
long er wait|prolonged stretcher time
spinal anesthesia|epidural
cardiac surgery
orthopedic surgery
trauma
burns
no pressure relieving mattress
poorly fitted shoes
tight clothing
skin tears
lymphedema
liver disease
copd
`, "2026-11-06");

P("Name a food high in phosphorus","nursing","",`
dairy|dairy products
milk
cheese
yogurt
cola|dark cola|soda
processed meats
deli meat
hot dogs
sausage
bacon
fast food
frozen meals
processed cheese
ice cream
pudding
chocolate
nuts
peanuts
peanut butter
almonds
cashews
seeds
pumpkin seeds
sunflower seeds
beans
lentils
whole grains
bran|bran cereal
oatmeal
brown rice
whole wheat bread
organ meats|liver
red meat|beef
chicken
turkey
pork
fish
salmon
sardines
tuna
shellfish
scallops
shrimp
crab
eggs|egg yolks
tofu
soy milk
edamame
quinoa
beer
chocolate milk
milkshakes
cottage cheese
cream cheese
custard
caramel
baking mixes|pancake mix
biscuits
muffins
cornbread
canned iced tea|bottled iced tea
flavored waters
processed foods with phosphate additives|phosphate additives
nondairy creamer
enhanced meats|injected chicken
chicken nuggets
pizza
macaroni and cheese
protein bars
sports drinks
energy drinks
wheat germ
amaranth
oat bran
cocoa
wild rice
buckwheat
millet
rye
chia seeds
hemp seeds
flaxseed
pistachios
brazil nuts
walnuts
breakfast sandwiches
cheese sauce
`, "2026-11-06");

/* ---- NEW STANDARD DAILY PROMPTS: DENTAL (batch 2026-11-04) ---- */
P("Name a complication of a tooth extraction","dental","",`
dry socket|alveolar osteitis
bleeding|hemorrhage|post extraction bleeding
infection|post extraction infection
swelling|edema
pain|postoperative pain
bruising|ecchymosis
trismus|limited mouth opening
nerve damage|nerve injury|paresthesia
numbness|lip numbness
inferior alveolar nerve injury
lingual nerve injury|tongue numbness
mental nerve injury
oroantral communication|sinus opening|sinus perforation
oroantral fistula
root fracture|broken root|retained root tip
root displaced into sinus
root displaced into submandibular space
tooth displaced into infratemporal fossa
crown fracture
damage to adjacent tooth
fracture of adjacent restoration
alveolar bone fracture|buccal plate fracture
maxillary tuberosity fracture
mandible fracture|jaw fracture
tmj dislocation|jaw dislocation
tmj pain
hematoma
sublingual hematoma
soft tissue injury|torn gums
lip laceration
tongue laceration
burn from handpiece|lip abrasion
cheek biting after anesthesia|lip biting
aspiration of tooth|inhaled tooth
swallowed tooth|ingestion
subcutaneous emphysema|air emphysema
osteomyelitis
cellulitis
abscess
fascial space infection
ludwig angina
cavernous sinus thrombosis
bacteremia
infective endocarditis
sepsis
medication related osteonecrosis of the jaw|mronj|bisphosphonate osteonecrosis
osteoradionecrosis
delayed healing
bony sequestrum|sequestra
sharp bony edges|bone spicules
food impaction in socket
bad taste|halitosis
fever
nausea and vomiting
syncope|fainting
allergic reaction
local anesthetic toxicity
methemoglobinemia
needle breakage
epinephrine reaction|tachycardia
hypertension during extraction
angina during extraction
uncontrolled bleeding from anticoagulants
bleeding disorder bleeding
wrong tooth extracted|wrong site extraction
periodontal defect on adjacent tooth
loss of attachment
bone loss|ridge resorption
pocket formation behind second molar
shifting teeth|drifting|space loss
supraeruption of opposing tooth
retained tooth fragment
displaced tooth into canal|tooth in mandibular canal
inferior alveolar artery bleeding
greater palatine artery bleeding
lingual artery injury
facial nerve palsy
airway obstruction
dehiscence|wound dehiscence
suture problems
nausea from opioids
opioid side effects|constipation
nsaid gastritis
antibiotic diarrhea|c diff
antibiotic allergy
sinusitis
nosebleed
eye bruising|periorbital ecchymosis
dysgeusia|altered taste
neuroma
neuropathic pain|chronic pain
trigeminal neuropathy
dysesthesia
death
`, "2026-11-06");

P("Name a part of a removable partial denture","dental","",`
clasp
rest|occlusal rest
major connector
minor connector
denture base
artificial teeth|denture teeth|acrylic teeth
retainer|direct retainer
indirect retainer
framework|metal framework
saddle
palatal strap
palatal plate|complete palatal plate
anterior posterior palatal strap|ap strap
horseshoe connector|u shaped palatal connector
single palatal bar
lingual bar
lingual plate
sublingual bar
labial bar
double lingual bar|kennedy bar
cingulum bar|continuous bar retainer
circumferential clasp|akers clasp
bar clasp|roach clasp
i bar
t bar
y bar
l bar
rpi clasp|rpi system
rpa clasp
ring clasp
embrasure clasp|double akers clasp
back action clasp
reverse action clasp
half and half clasp
combination clasp|wrought wire clasp
wrought wire
cast clasp
retentive arm|retentive clasp arm
reciprocal arm|bracing arm
clasp tip
clasp shoulder
clasp body
approach arm
guide plane|guiding plane
proximal plate
cingulum rest
incisal rest
lingual rest
rest seat
mesial rest
distal rest
precision attachment
semi precision attachment
stress breaker
finish line
external finish line
internal finish line
tissue stop
retention mesh|meshwork
lattice work
bead retention
denture base flange
buccal flange
lingual flange
labial flange
relief
tissue relief
beading
abutment tooth
retromolar pad coverage
tuberosity coverage
distal extension base
tooth supported base
swing lock gate
hinge
lock
acrylic resin base
cobalt chromium alloy|chrome cobalt
titanium framework
nylon base|valplast|flexible base
tooth colored clasp|esthetic clasp
`, "2026-11-06");

P("Name a jaw movement or occlusion term","dental","",`
centric occlusion|maximum intercuspation|mip
centric relation|cr
vertical dimension of occlusion|vdo
vertical dimension of rest
freeway space|interocclusal rest space
overbite
overjet
protrusion
retrusion
lateral excursion|laterotrusion
working side
nonworking side|balancing side
mediotrusion
opening|depression
closing|elevation
rotation|hinge movement
translation|sliding movement
bennett movement|bennett shift
bennett angle
immediate side shift
progressive side shift
condylar guidance|condylar inclination
incisal guidance|anterior guidance
canine guidance|canine protected occlusion
group function
mutually protected occlusion
balanced occlusion|bilateral balanced occlusion
lingualized occlusion
monoplane occlusion
curve of spee
curve of wilson
monson curve|sphere of monson
compensating curve
occlusal plane
bonwill triangle
envelope of motion|posselt envelope
posselt figure
gothic arch tracing
terminal hinge axis
hinge axis
centric slide|slide in centric
premature contact|deflective contact
occlusal interference
working interference
balancing interference|nonworking interference
protrusive interference
fremitus
trauma from occlusion|occlusal trauma
primary occlusal trauma
secondary occlusal trauma
occlusal adjustment|equilibration
selective grinding
centric stops
supporting cusps|stamp cusps
nonsupporting cusps|shearing cusps|guiding cusps
cusp fossa contact
cusp marginal ridge contact
tripodism
interarch relationship
intercuspation
molar relationship
canine relationship
angle classification
class i occlusion
class ii occlusion
class iii occlusion
crossbite
open bite
deep bite
edge to edge
flush terminal plane
mesial step
distal step
leeway space
primate space
facebow transfer
articulator
semi adjustable articulator
fully adjustable articulator
average value articulator
hinge articulator
mounting
interocclusal record|bite registration
protrusive record
lateral record
centric record
kinematic axis
arbitrary hinge axis
frankfort plane
axis orbital plane
camper's plane|ala tragus line
condylar path
rotation center
instantaneous center of rotation
mandibular deviation
mandibular deflection
maximum opening
condylar translation
long centric
freedom in centric
point centric
loss of vertical dimension|overclosure
occlusal splint
deprogrammer|leaf gauge|lucia jig
anterior deprogrammer
bimanual manipulation|dawson technique
chin point guidance
neuromuscular occlusion
tooth contact pattern
occlusal contact
articulating paper|shim stock
t scan
wear facets
attrition
`, "2026-11-06");

P("Name a dental public health or research term","dental","",`
dmft|dmft index|decayed missing filled teeth
dmfs
deft|dmft primary teeth
community water fluoridation
optimal fluoride level|0.7 ppm
prevalence
incidence
epidemiology
sensitivity
specificity
positive predictive value|ppv
negative predictive value|npv
randomized controlled trial|rct
cohort study
case control study
cross sectional study
case report
case series
systematic review
meta analysis
evidence based dentistry
levels of evidence|evidence pyramid
p value
confidence interval
null hypothesis
type i error|alpha error
type ii error|beta error
statistical power|power
sample size
mean
median
mode
standard deviation
variance
range
normal distribution|bell curve
skewed distribution
chi square test
t test
anova
correlation
regression
odds ratio
relative risk|risk ratio
attributable risk
number needed to treat|nnt
absolute risk reduction
bias
selection bias
recall bias
observer bias
confounding|confounder
blinding|double blind
placebo
control group
randomization
validity
reliability
inter rater reliability|kappa
intention to treat
lead time bias
hawthorne effect
pico question
plaque index
gingival index
oral hygiene index|ohi s
community periodontal index|cpi
periodontal screening and recording|psr
dean's fluorosis index
caries risk assessment|cambra
icdas
significant caries index|sic index
healthy people 2030
national health and nutrition examination survey|nhanes
oral health surveillance
basic screening survey
school sealant program
school fluoride mouthrinse program
fluoride varnish program
mobile dental clinic
access to care
dental health professional shortage area|hpsa
underserved population
health disparities
social determinants of health
health literacy
oral health literacy
medicaid
chip
medicare
community health center|fqhc
dental therapist
teledentistry
primary prevention
secondary prevention
tertiary prevention
herd immunity
health promotion
health education
needs assessment
program evaluation
cost effectiveness
morbidity
mortality
endemic
epidemic
pandemic
surveillance
screening
risk factor
protective factor
water fluoridation cessation
fluorosis risk
grand rapids study
vipeholm study
hopewood house study
turku sugar study
streptococcus mutans transmission
dental home
ada|american dental association
cdc division of oral health
who oral health
fdi world dental federation
ethics committee|irb
informed consent in research
hipaa
`, "2026-11-06");

P("Name a property of a dental material","dental","",`
strength
compressive strength
tensile strength
flexural strength
shear strength
hardness
elastic modulus|modulus of elasticity|stiffness
elasticity
plasticity
ductility
malleability
brittleness
toughness
fracture toughness
resilience
fatigue resistance|fatigue
creep
stress relaxation
viscoelasticity
viscosity
flow
thixotropy
wettability|wetting
contact angle
surface tension
adhesion
cohesion
bond strength
polymerization shrinkage
setting expansion
hygroscopic expansion
thermal expansion|coefficient of thermal expansion
thermal conductivity
thermal diffusivity
heat of reaction|exothermic reaction
setting time
working time
gel time
degree of conversion
depth of cure
water sorption
solubility
dimensional stability
dimensional change
accuracy|detail reproduction
elastic recovery
tear strength
radiopacity
radiolucency
translucency
opacity
color stability
shade|hue
value
chroma
fluorescence
opalescence
metamerism
gloss|polishability
surface roughness
wear resistance|abrasion resistance
abrasiveness
corrosion resistance|corrosion
tarnish
galvanism
biocompatibility
toxicity
allergenicity
antibacterial activity
fluoride release
fluoride recharge
bioactivity
remineralization
ph
density
porosity
microleakage
marginal adaptation|marginal seal
proportional limit
elastic limit
yield strength
ultimate strength
percent elongation
poisson's ratio
stress
strain
stress strain curve
weibull modulus
c factor|configuration factor
filler content|filler loading
particle size
cross linking
glass transition temperature
melting point|fusion temperature
casting shrinkage
sintering shrinkage
grain size
crystallinity
phase transformation|transformation toughening
low temperature degradation|aging
handling properties
consistency
mixing time
pot life
shelf life
heat resistance
chemical resistance
stain resistance
`, "2026-11-06");

P("Name a dental radiation safety or X-ray physics term","dental","",`
alara|as low as reasonably achievable
lead apron
thyroid collar
collimation|collimator
rectangular collimation
round collimation
filtration|filter
aluminum filtration
inherent filtration
added filtration
kilovoltage|kvp
milliamperage|ma
exposure time
mas|milliampere seconds
inverse square law
source to image distance|target receptor distance
position indicating device|pid|cone
tube head|x ray tube
cathode
anode
tungsten target
focal spot
filament
thermionic emission
bremsstrahlung|braking radiation
characteristic radiation
primary radiation
secondary radiation
scatter radiation
leakage radiation
compton scatter
photoelectric effect
coherent scatter
ionizing radiation
ionization
free radicals
direct effect
indirect effect
deterministic effects
stochastic effects
somatic effects
genetic effects
latent period
cumulative effect
critical organs
thyroid gland
lens of eye|cataract risk
bone marrow
skin erythema
radiosensitivity
law of bergonie and tribondeau
half value layer
penetrability
beam quality
beam quantity|beam intensity
density
contrast
long scale contrast
short scale contrast
sharpness
penumbra
magnification
distortion
latent image
film speed
e speed film
f speed film
digital receptor|sensor
phosphor plate|psp
ccd|charge coupled device
cmos
pixel
grayscale
dynamic range
signal to noise ratio
effective dose
absorbed dose|gray|gy
equivalent dose|sievert|sv
roentgen
rad
rem
exposure
background radiation
dosimeter|film badge
maximum permissible dose|mpd
occupational exposure
position and distance rule|6 feet rule
operator barrier|protective barrier
pregnancy and x rays
selection criteria
patient selection criteria
justification
optimization
dose limitation
ncrp
image gently
radiation caries
osteoradionecrosis
radiation mucositis
xerostomia from radiation
timer
exposure button
control panel
x ray generator
transformer
step down transformer
step up transformer
autotransformer
alternating current
direct current|constant potential
duty cycle
heat dissipation
oil bath
beryllium window
lead diaphragm
quality assurance
step wedge
retakes
film processing
developer
fixer
safelight
darkroom
infection control for radiography
`, "2026-11-06");

/* ---- NEW STANDARD DAILY PROMPTS: MEDICINE (batch 2026-11-04) ---- */
P("Name a cause of an enlarged spleen","clinical","",`
mononucleosis|mono|infectious mononucleosis|epstein barr virus|ebv|glandular fever
cirrhosis|liver cirrhosis
portal hypertension
leukemia
lymphoma
malaria
sickle cell disease|sickle cell anemia|sickle cell
hereditary spherocytosis|spherocytosis
thalassemia|beta thalassemia|thalassemia major
chronic myeloid leukemia|cml|chronic myelogenous leukemia
myelofibrosis|primary myelofibrosis|myelofibrosis with myeloid metaplasia
hemolytic anemia
polycythemia vera|pv
gaucher disease|gaucher
hairy cell leukemia
chronic lymphocytic leukemia|cll
endocarditis|infective endocarditis|bacterial endocarditis|subacute bacterial endocarditis
portal vein thrombosis
splenic vein thrombosis
budd chiari syndrome|budd chiari|hepatic vein thrombosis
heart failure|right heart failure|congestive heart failure|chf
hodgkin lymphoma|hodgkin disease|hodgkins lymphoma
non hodgkin lymphoma|nhl
acute myeloid leukemia|aml
acute lymphoblastic leukemia|all|acute lymphocytic leukemia
cytomegalovirus|cmv
hiv|aids
visceral leishmaniasis|kala azar|leishmaniasis
sarcoidosis
systemic lupus erythematosus|lupus|sle
felty syndrome
rheumatoid arthritis|ra
amyloidosis
niemann pick disease|niemann pick
schistosomiasis
tuberculosis|tb|miliary tuberculosis
brucellosis
typhoid fever|typhoid|enteric fever
histoplasmosis
toxoplasmosis
autoimmune hemolytic anemia|aiha|warm autoimmune hemolytic anemia
immune thrombocytopenic purpura|itp|immune thrombocytopenia
essential thrombocythemia
hemophagocytic lymphohistiocytosis|hlh
langerhans cell histiocytosis|histiocytosis x
splenic abscess
splenic cyst
splenic hemangioma
splenic lymphoma|splenic marginal zone lymphoma
mantle cell lymphoma
viral hepatitis|hepatitis
hepatitis b
hepatitis c
alcoholic liver disease
nonalcoholic steatohepatitis|nash|fatty liver disease|mash
primary biliary cholangitis|primary biliary cirrhosis|pbc
hemochromatosis
wilson disease
constrictive pericarditis
myelodysplastic syndrome|mds
multiple myeloma|myeloma
waldenstrom macroglobulinemia
mastocytosis|systemic mastocytosis
extramedullary hematopoiesis
pyruvate kinase deficiency
g6pd deficiency|glucose 6 phosphate dehydrogenase deficiency
hemoglobin c disease|hemoglobin sc disease|hbsc
hereditary elliptocytosis
babesiosis
ehrlichiosis
anaplasmosis
rocky mountain spotted fever
leptospirosis
syphilis|secondary syphilis
bacterial sepsis|sepsis
q fever
trypanosomiasis|african sleeping sickness|chagas disease
tropical splenomegaly syndrome|hyperreactive malarial splenomegaly
echinococcosis|hydatid cyst|hydatid disease
cat scratch disease|bartonella
rubella
dengue
measles
toxocariasis|visceral larva migrans
blastomycosis
coccidioidomycosis|valley fever
disseminated mycobacterium avium complex|mac|mycobacterium avium complex
still disease|adult onset still disease|systemic juvenile idiopathic arthritis
serum sickness
common variable immunodeficiency|cvid
autoimmune lymphoproliferative syndrome|alps
castleman disease
hypereosinophilic syndrome
chronic myelomonocytic leukemia|cmml
juvenile myelomonocytic leukemia|jmml
large granular lymphocyte leukemia|lgl leukemia
prolymphocytic leukemia
adult t cell leukemia lymphoma|atll|htlv 1
hepatosplenic t cell lymphoma
lymphoplasmacytic lymphoma
follicular lymphoma
burkitt lymphoma
angiosarcoma of the spleen|splenic angiosarcoma
metastatic cancer to the spleen|splenic metastases
splenic hamartoma
splenic infarction
splenic hematoma|splenic trauma
peliosis
tay sachs disease
mucopolysaccharidosis|hurler syndrome|hunter syndrome
lysosomal acid lipase deficiency|wolman disease|cholesteryl ester storage disease
glycogen storage disease
osteopetrosis
hyperthyroidism|graves disease
chronic granulomatous disease
pernicious anemia|megaloblastic anemia
iron deficiency anemia
thrombotic thrombocytopenic purpura|ttp
evans syndrome
sickle beta thalassemia
hemoglobin h disease
congenital dyserythropoietic anemia
unstable hemoglobin
paroxysmal nocturnal hemoglobinuria|pnh
erythropoietic protoporphyria|porphyria
congenital syphilis
congenital cmv
torch infection|congenital infection
erythroblastosis fetalis|hemolytic disease of the newborn|rh disease
neonatal hepatitis
biliary atresia
cystic fibrosis
sinusoidal obstruction syndrome|veno occlusive disease
schistosoma mansoni
splenic artery aneurysm
arteriovenous fistula of the spleen
portal vein stenosis|portal vein obstruction
cavernous transformation of the portal vein
pylephlebitis
hepatic fibrosis|congenital hepatic fibrosis
idiopathic portal hypertension|non cirrhotic portal hypertension
infiltrative disease
storage disease
granulocyte colony stimulating factor|g csf|filgrastim
erythropoietin therapy
ibd|inflammatory bowel disease
whipple disease
kikuchi disease
rosai dorfman disease
erdheim chester disease
igg4 related disease
splenic tuberculosis
relapsing fever|borrelia
scrub typhus
typhus
melioidosis
psittacosis
`, "2026-11-06");

P("Name a cause of swollen lymph nodes","clinical","",`
infection|viral infection|bacterial infection
common cold|upper respiratory infection|uri|cold
strep throat|streptococcal pharyngitis|strep
mononucleosis|mono|infectious mononucleosis|epstein barr virus|ebv|glandular fever
lymphoma
leukemia
ear infection|otitis media
tonsillitis
dental abscess|tooth abscess|tooth infection
cancer|metastatic cancer|metastasis
hiv|aids
tuberculosis|tb|scrofula|tuberculous lymphadenitis
cat scratch disease|bartonella|cat scratch fever
hodgkin lymphoma|hodgkin disease|hodgkins lymphoma
non hodgkin lymphoma|nhl
chronic lymphocytic leukemia|cll
acute lymphoblastic leukemia|all|acute lymphocytic leukemia
sarcoidosis
lupus|systemic lupus erythematosus|sle
rheumatoid arthritis|ra
syphilis
cellulitis
skin infection
flu|influenza
covid 19|covid|coronavirus
cytomegalovirus|cmv
toxoplasmosis
measles
rubella|german measles
mumps
chickenpox|varicella
herpes simplex|hsv|genital herpes
shingles|herpes zoster
hepatitis
roseola|hhv 6
kawasaki disease|kawasaki
scarlet fever
pharyngitis|sore throat
sinusitis
conjunctivitis
scalp infection|tinea capitis
head lice|lice
impetigo
abscess
lymphangitis
breast cancer
head and neck cancer|squamous cell carcinoma of the head and neck
nasopharyngeal carcinoma
thyroid cancer|papillary thyroid cancer
lung cancer
melanoma
stomach cancer|gastric cancer|virchow node
skin cancer
vulvar cancer
penile cancer
anal cancer
cervical cancer
testicular cancer
ovarian cancer
pancreatic cancer
esophageal cancer
metastatic squamous cell carcinoma
kaposi sarcoma
multiple myeloma
waldenstrom macroglobulinemia
mantle cell lymphoma
follicular lymphoma
burkitt lymphoma
diffuse large b cell lymphoma|dlbcl
t cell lymphoma
mycosis fungoides|sezary syndrome
small lymphocytic lymphoma|sll
adult t cell leukemia lymphoma|htlv 1
acute myeloid leukemia|aml
chronic myeloid leukemia|cml
post transplant lymphoproliferative disorder|ptld
castleman disease
kikuchi disease|kikuchi fujimoto disease|histiocytic necrotizing lymphadenitis
rosai dorfman disease|sinus histiocytosis with massive lymphadenopathy
langerhans cell histiocytosis
hemophagocytic lymphohistiocytosis|hlh
igg4 related disease
still disease|adult onset still disease
sjogren syndrome
dermatomyositis
serum sickness
drug reaction|medication reaction
phenytoin|anticonvulsant hypersensitivity|pseudolymphoma
dress syndrome|drug reaction with eosinophilia and systemic symptoms
allopurinol
vaccination|vaccine reaction
bcg vaccine
silicone breast implants|silicone lymphadenopathy
amyloidosis
lipid storage disease|gaucher disease|niemann pick disease
chronic granulomatous disease
autoimmune lymphoproliferative syndrome|alps
common variable immunodeficiency|cvid
hyperthyroidism|graves disease
addison disease
chlamydia
lymphogranuloma venereum|lgv
chancroid|haemophilus ducreyi
gonorrhea
granuloma inguinale|donovanosis
acute retroviral syndrome|acute hiv
plague|bubonic plague|yersinia pestis
tularemia|rabbit fever|francisella tularensis
brucellosis
anthrax
leptospirosis
lyme disease|lyme
rocky mountain spotted fever
typhus|scrub typhus
rat bite fever
sporotrichosis
histoplasmosis
coccidioidomycosis|valley fever
paracoccidioidomycosis
cryptococcosis
blastomycosis
nontuberculous mycobacteria|atypical mycobacteria|mycobacterium avium complex|mac
leprosy|hansen disease
diphtheria
dengue
chikungunya
zika
west nile virus
adenovirus
hhv 8
mpox|monkeypox
hand foot and mouth disease
fifth disease|parvovirus b19|erythema infectiosum
african trypanosomiasis|sleeping sickness|winterbottom sign
chagas disease
leishmaniasis
filariasis|lymphatic filariasis|elephantiasis
toxocariasis
trichinosis
malaria
mastitis
infected insect bite|bug bite
infected wound
paronychia
gingivitis|periodontitis
mouth ulcers|canker sores
pharyngeal abscess|peritonsillar abscess
atopic dermatitis|eczema
dermatopathic lymphadenopathy
psoriasis
reactive lymphadenopathy|reactive hyperplasia
kimura disease
lymphomatoid granulomatosis
angioimmunoblastic t cell lymphoma
anaplastic large cell lymphoma
breast implant associated lymphoma
inflammatory pseudotumor
whipple disease
crohn disease
hyper igd syndrome|mevalonate kinase deficiency
pfapa|periodic fever aphthous stomatitis pharyngitis adenitis
lymphoid hyperplasia
`, "2026-11-06");

P("Name a cause of difficulty swallowing","clinical","",`
stroke
acid reflux|gerd|gastroesophageal reflux disease|heartburn
esophageal cancer|cancer of the esophagus
strep throat|sore throat|pharyngitis
esophageal stricture|peptic stricture|stricture
achalasia
eosinophilic esophagitis|eoe
esophagitis
parkinson disease|parkinsons
als|amyotrophic lateral sclerosis|lou gehrig disease
myasthenia gravis
multiple sclerosis|ms
dementia|alzheimer disease
zenker diverticulum|pharyngeal pouch
schatzki ring|esophageal ring
esophageal web|plummer vinson syndrome|paterson kelly syndrome
scleroderma|systemic sclerosis|crest syndrome
diffuse esophageal spasm|esophageal spasm
nutcracker esophagus|jackhammer esophagus|hypercontractile esophagus
tonsillitis
peritonsillar abscess|quinsy
retropharyngeal abscess
epiglottitis
head and neck cancer|throat cancer|oropharyngeal cancer
laryngeal cancer
goiter|thyroid enlargement
thyroid cancer
foreign body|food impaction|steakhouse syndrome
pill esophagitis
candida esophagitis|esophageal candidiasis|thrush
herpes esophagitis
cmv esophagitis
radiation esophagitis|radiation therapy
caustic ingestion|lye ingestion|chemical burn
barrett esophagus
hiatal hernia
dry mouth|xerostomia
sjogren syndrome
polymyositis
dermatomyositis
inclusion body myositis
muscular dystrophy
oculopharyngeal muscular dystrophy
myotonic dystrophy
guillain barre syndrome
botulism
tetanus
rabies
diphtheria
lambert eaton syndrome
huntington disease
cerebral palsy
traumatic brain injury|head injury
brain tumor
brainstem stroke|lateral medullary syndrome|wallenberg syndrome
pseudobulbar palsy
bulbar palsy
progressive supranuclear palsy
multiple system atrophy
post polio syndrome|polio
wilson disease
syringobulbia
chiari malformation
myopathy
thyrotoxic myopathy
cricopharyngeal achalasia|cricopharyngeal bar|cricopharyngeal dysfunction
dysphagia lusoria|aberrant right subclavian artery
vascular ring|double aortic arch
enlarged left atrium
aortic aneurysm
mediastinal mass|mediastinal tumor
lymphoma
lung cancer
lymphadenopathy
cervical osteophytes|diffuse idiopathic skeletal hyperostosis|dish
neck surgery
anterior cervical spine surgery
esophageal leiomyoma
esophageal varices
mallory weiss tear
esophageal perforation|boerhaave syndrome
ludwig angina
deep neck infection
oral cancer|mouth cancer
tongue cancer
macroglossia
cleft palate
mouth ulcers|aphthous ulcers
stomatitis|mucositis
poor dentition|dental problems|ill fitting dentures
tracheostomy
intubation|prolonged intubation
nasogastric tube
vocal cord paralysis
globus|globus sensation|lump in the throat
anxiety
functional dysphagia
medication side effect
anticholinergic medications
antipsychotics|tardive dyskinesia
benzodiazepines
nsaids
bisphosphonates|alendronate
doxycycline
potassium chloride
iron pills
quinidine
gastric cancer|stomach cancer
pseudoachalasia
chagas disease
amyloidosis
sarcoidosis
crohn disease
behcet disease
pemphigus vulgaris
bullous pemphigoid
mucous membrane pemphigoid|cicatricial pemphigoid
lichen planus
epidermolysis bullosa
stevens johnson syndrome
graft versus host disease
diabetes|diabetic neuropathy
hypothyroidism
alcoholism
aging|presbyphagia
fatigue
tracheoesophageal fistula
esophageal atresia
congenital esophageal stenosis
laryngomalacia
pierre robin sequence
down syndrome
prematurity
spinal muscular atrophy
rett syndrome
botox injection
eagle syndrome|elongated styloid process
thyroiditis
mononucleosis|infectious mononucleosis
`, "2026-11-06");

P("Name a cause of coughing up blood","clinical","",`
lung cancer|bronchogenic carcinoma
tuberculosis|tb
pneumonia
bronchitis|acute bronchitis|chronic bronchitis
pulmonary embolism|pe|blood clot in the lung
bronchiectasis
nosebleed|epistaxis
blood thinners|anticoagulants|warfarin
copd
trauma|chest trauma
lung abscess
cystic fibrosis
granulomatosis with polyangiitis|wegener granulomatosis|gpa
goodpasture syndrome|anti gbm disease
heart failure|congestive heart failure|pulmonary edema
mitral stenosis
aspergilloma|fungus ball
aspergillosis
pulmonary contusion
foreign body|aspirated foreign body
diffuse alveolar hemorrhage
lupus|systemic lupus erythematosus|sle
arteriovenous malformation|pulmonary arteriovenous malformation|pulmonary avm
hereditary hemorrhagic telangiectasia|osler weber rendu syndrome|hht
bronchial adenoma|bronchial carcinoid|carcinoid tumor
metastatic cancer to the lung|lung metastases
pulmonary hypertension
pulmonary infarction
microscopic polyangiitis
eosinophilic granulomatosis with polyangiitis|churg strauss syndrome|egpa
behcet disease
iga vasculitis|henoch schonlein purpura
cocaine|crack lung
vaping|evali
smoking
thrombocytopenia|low platelets
coagulopathy|bleeding disorder
hemophilia
von willebrand disease
dic|disseminated intravascular coagulation
antiplatelet drugs|aspirin|clopidogrel
thrombolytics|tpa
bevacizumab
fungal infection
mucormycosis
histoplasmosis
coccidioidomycosis|valley fever
blastomycosis
paragonimiasis|lung fluke|paragonimus
echinococcosis|hydatid cyst
strongyloides|strongyloidiasis
ascariasis|loeffler syndrome
schistosomiasis
leptospirosis
hantavirus
influenza|flu
covid 19|covid
staphylococcus aureus pneumonia|staph pneumonia
klebsiella pneumonia|currant jelly sputum
pseudomonas pneumonia
legionella
anthrax|inhalational anthrax
plague|pneumonic plague
nontuberculous mycobacteria|mycobacterium avium complex|mac
nocardia|nocardiosis
actinomycosis
septic pulmonary emboli
endocarditis|right sided endocarditis
lung injury from bronchoscopy|bronchoscopy biopsy|iatrogenic
lung biopsy
pulmonary artery rupture|swan ganz catheter
tracheostomy bleeding|tracheoinnominate fistula
aortic aneurysm|aortobronchial fistula
bronchial artery aneurysm
broncholithiasis
endometriosis|catamenial hemoptysis|thoracic endometriosis
pulmonary hemosiderosis|idiopathic pulmonary hemosiderosis
heiner syndrome
antiphospholipid syndrome
cryoglobulinemia
lymphangioleiomyomatosis|lam
pulmonary sequestration
congenital heart disease|eisenmenger syndrome
pulmonary vein stenosis
fibrosing mediastinitis
sarcoidosis
silicosis
asbestosis
pneumoconiosis
kaposi sarcoma
mesothelioma
lymphoma
laryngeal cancer
tracheal tumor
throat cancer|head and neck cancer
gum bleeding|bleeding gums
pseudohemoptysis
serratia|red sputum
high altitude pulmonary edema|hape
exercise induced pulmonary hemorrhage
penicillamine
nitrofurantoin
amiodarone
propylthiouracil|ptu
inhalation injury|smoke inhalation
blast injury
rib fracture
pulmonary laceration
bronchial rupture|tracheobronchial injury
dieulafoy lesion of the bronchus
mitral regurgitation
whooping cough|pertussis
severe coughing
measles
`, "2026-11-06");

P("Name a cause of pancytopenia","clinical","",`
aplastic anemia
leukemia
chemotherapy
vitamin b12 deficiency|b12 deficiency|cobalamin deficiency
folate deficiency|folic acid deficiency
myelodysplastic syndrome|mds
hypersplenism
radiation|radiation therapy
cirrhosis
hiv|aids
sepsis
lymphoma
multiple myeloma|myeloma
myelofibrosis|primary myelofibrosis
metastatic cancer to the bone marrow|bone marrow metastases|myelophthisis|myelophthisic anemia
paroxysmal nocturnal hemoglobinuria|pnh
lupus|systemic lupus erythematosus|sle
hairy cell leukemia
acute myeloid leukemia|aml
acute lymphoblastic leukemia|all
acute promyelocytic leukemia|apl
pernicious anemia
megaloblastic anemia
alcohol|alcoholism|alcohol use disorder
hemophagocytic lymphohistiocytosis|hlh
macrophage activation syndrome
fanconi anemia
dyskeratosis congenita
shwachman diamond syndrome
chloramphenicol
methotrexate
azathioprine
mercaptopurine|6 mercaptopurine|6 mp
cyclophosphamide
carbamazepine
clozapine
felbamate
ganciclovir|valganciclovir
zidovudine|azt
linezolid
trimethoprim sulfamethoxazole|bactrim|tmp smx
sulfasalazine
gold salts|gold
propylthiouracil|ptu
methimazole
benzene
arsenic
lead poisoning
interferon
hydroxyurea
mycophenolate
leflunomide
colchicine toxicity
valproic acid|valproate
phenytoin
nsaids
copper deficiency
zinc toxicity
severe malnutrition|anorexia nervosa
gaucher disease
niemann pick disease
storage disease
tuberculosis|miliary tuberculosis|tb
parvovirus b19
hepatitis|hepatitis associated aplastic anemia
epstein barr virus|ebv|mononucleosis
cytomegalovirus|cmv
visceral leishmaniasis|kala azar
histoplasmosis|disseminated histoplasmosis
brucellosis
typhoid fever
ehrlichiosis
anaplasmosis
babesiosis
malaria
dengue
covid 19|covid
measles
mycobacterium avium complex|mac
portal hypertension
felty syndrome
rheumatoid arthritis
sarcoidosis
amyloidosis
hypothyroidism
pregnancy|aplastic anemia of pregnancy
graft versus host disease|transfusion associated graft versus host disease
bone marrow transplant|stem cell transplant
radiation exposure|acute radiation syndrome
car t cell therapy
immune checkpoint inhibitors
large granular lymphocyte leukemia|lgl leukemia
t cell lymphoma
hodgkin lymphoma
non hodgkin lymphoma
chronic lymphocytic leukemia|cll
chronic myelomonocytic leukemia|cmml
systemic mastocytosis|mastocytosis
waldenstrom macroglobulinemia
osteopetrosis
neuroblastoma
small cell lung cancer
breast cancer
prostate cancer
langerhans cell histiocytosis
hemochromatosis
thalassemia
gata2 deficiency
diamond blackfan anemia
congenital amegakaryocytic thrombocytopenia
wiskott aldrich syndrome
down syndrome|transient abnormal myelopoiesis
hypopituitarism
bone marrow necrosis
gelatinous transformation of bone marrow|serous fat atrophy
autoimmune myelofibrosis
evans syndrome
autoimmune lymphoproliferative syndrome|alps
`, "2026-11-06");

P("Name a cause or type of dementia","clinical","",`
alzheimer disease|alzheimers|alzheimer
vascular dementia|multi infarct dementia
lewy body dementia|dementia with lewy bodies|dlb
frontotemporal dementia|ftd|pick disease
parkinson disease dementia|parkinson disease|parkinsons
stroke|strokes
mixed dementia
normal pressure hydrocephalus|nph
huntington disease|huntington chorea|huntingtons
creutzfeldt jakob disease|cjd|prion disease
alcohol related dementia|alcohol|alcoholism|alcohol use disorder
wernicke korsakoff syndrome|korsakoff syndrome|korsakoff psychosis
vitamin b12 deficiency|b12 deficiency
hypothyroidism
hiv associated dementia|hiv dementia|aids dementia complex|hiv
neurosyphilis|syphilis|general paresis
traumatic brain injury|head injury|tbi
chronic traumatic encephalopathy|cte|dementia pugilistica
brain tumor
subdural hematoma|chronic subdural hematoma
depression|pseudodementia
binswanger disease|subcortical ischemic vascular dementia
cadasil
progressive supranuclear palsy|psp
corticobasal degeneration|corticobasal syndrome
multiple system atrophy
down syndrome
primary progressive aphasia
behavioral variant frontotemporal dementia|bvftd
semantic dementia|semantic variant primary progressive aphasia
logopenic aphasia
posterior cortical atrophy
limbic predominant age related tdp 43 encephalopathy|late
als frontotemporal dementia|als with dementia
variant creutzfeldt jakob disease|vcjd|mad cow disease
gerstmann straussler scheinker syndrome
fatal familial insomnia
kuru
cerebral amyloid angiopathy
multiple sclerosis|ms
progressive multifocal leukoencephalopathy|pml
herpes simplex encephalitis|encephalitis
autoimmune encephalitis
limbic encephalitis|paraneoplastic limbic encephalitis
hashimoto encephalopathy|steroid responsive encephalopathy
lupus|neuropsychiatric lupus
wilson disease
hepatic encephalopathy
uremia|chronic kidney disease|dialysis dementia
thiamine deficiency
niacin deficiency|pellagra
folate deficiency
hypercalcemia
hypoglycemia
hyponatremia
cushing syndrome
addison disease
heavy metal poisoning
lead poisoning
mercury poisoning
arsenic poisoning
carbon monoxide poisoning
medications|anticholinergic drugs|benzodiazepines
sleep apnea|obstructive sleep apnea
whipple disease
lyme disease|neuroborreliosis
cryptococcal meningitis
tuberculous meningitis
subacute sclerosing panencephalitis|sspe
neurocysticercosis
leukodystrophy|adrenoleukodystrophy|metachromatic leukodystrophy
niemann pick disease type c
kufs disease|neuronal ceroid lipofuscinosis
cerebrotendinous xanthomatosis
mitochondrial disease|melas
fragile x tremor ataxia syndrome|fxtas
spinocerebellar ataxia
dentatorubral pallidoluysian atrophy|drpla
neuroacanthocytosis
neurodegeneration with brain iron accumulation|pantothenate kinase associated neurodegeneration
fahr disease|primary familial brain calcification
vasculitis|primary angiitis of the cns
sarcoidosis|neurosarcoidosis
susac syndrome
moyamoya disease
hypoxic brain injury|anoxic brain injury
cardiac arrest
radiation induced dementia|radiation therapy
chemotherapy|chemo brain
post covid cognitive impairment
schizophrenia
bipolar disorder
celiac disease
hydrocephalus
colloid cyst
meningioma
glioblastoma
brain metastases
primary cns lymphoma
gliomatosis cerebri
paraneoplastic syndrome
argyrophilic grain disease
hippocampal sclerosis
tauopathy
synucleinopathy
early onset alzheimer disease|familial alzheimer disease
mild cognitive impairment|mci
retinal vasculopathy with cerebral leukodystrophy
polyglucosan body disease
nasu hakola disease
hereditary diffuse leukoencephalopathy with spheroids
`, "2026-11-06");

P("Name a congenital heart defect","clinical","",`
ventricular septal defect|vsd
atrial septal defect|asd|hole in the heart
tetralogy of fallot|tof|tet spells
patent ductus arteriosus|pda
coarctation of the aorta|aortic coarctation|coarctation
transposition of the great arteries|transposition of the great vessels|tga|d tga|dextro transposition
hypoplastic left heart syndrome|hlhs
patent foramen ovale|pfo
bicuspid aortic valve|bav
atrioventricular septal defect|avsd|endocardial cushion defect|av canal defect|atrioventricular canal defect
truncus arteriosus|persistent truncus arteriosus
tricuspid atresia
total anomalous pulmonary venous return|tapvr|tapvc|total anomalous pulmonary venous connection
ebstein anomaly|ebstein's anomaly|ebstein malformation
pulmonary stenosis|pulmonic stenosis|pulmonary valve stenosis
pulmonary atresia
aortic stenosis|congenital aortic stenosis|aortic valve stenosis
eisenmenger syndrome
dextrocardia
interrupted aortic arch
double outlet right ventricle|dorv
congenitally corrected transposition|l tga|cctga|levo transposition
hypoplastic right heart syndrome|hypoplastic right heart
single ventricle|univentricular heart|double inlet left ventricle|dilv
partial anomalous pulmonary venous return|papvr|papvc
anomalous left coronary artery from the pulmonary artery|alcapa|bland white garland syndrome
mitral valve prolapse
congenital mitral stenosis
parachute mitral valve
cleft mitral valve
shone complex|shone syndrome
supravalvular aortic stenosis
subaortic stenosis|subvalvular aortic stenosis|subaortic membrane
cor triatriatum
sinus venosus defect|sinus venosus asd
ostium primum asd|primum asd
ostium secundum asd|secundum asd
coronary sinus defect|unroofed coronary sinus
muscular vsd
perimembranous vsd|membranous vsd
aortopulmonary window|aortopulmonary septal defect
vascular ring
double aortic arch
right aortic arch
aberrant right subclavian artery|arteria lusoria|dysphagia lusoria
pulmonary artery sling
persistent left superior vena cava|left superior vena cava
heterotaxy syndrome|heterotaxy
asplenia syndrome|ivemark syndrome|right isomerism
polysplenia syndrome|left isomerism
situs inversus
anomalous origin of a coronary artery|anomalous coronary artery
coronary artery fistula
ruptured sinus of valsalva aneurysm|sinus of valsalva aneurysm
congenital heart block|congenital complete heart block
wolff parkinson white syndrome|wpw
pulmonary atresia with intact ventricular septum
pulmonary atresia with ventricular septal defect
absent pulmonary valve syndrome
tetralogy of fallot with pulmonary atresia
pink tetralogy|pink tet
hypoplastic aortic arch
aortic atresia
mitral atresia
double chambered right ventricle
left ventricular noncompaction|noncompaction cardiomyopathy
scimitar syndrome
uhl anomaly
taussig bing anomaly
pentalogy of cantrell
ectopia cordis
quadricuspid aortic valve
unicuspid aortic valve
congenital aortic regurgitation
tricuspid valve dysplasia
straddling atrioventricular valve
criss cross heart
gerbode defect|left ventricle to right atrium shunt
pulmonary vein stenosis
pulmonary arteriovenous malformation
levoatrial cardinal vein
fetal alcohol syndrome
`, "2026-11-06");

P("Name a complication of pregnancy","clinical","",`
preeclampsia|pre eclampsia|toxemia
gestational diabetes|gdm|gestational diabetes mellitus
miscarriage|spontaneous abortion|pregnancy loss
ectopic pregnancy|tubal pregnancy
preterm labor|premature labor|preterm birth|premature birth
gestational hypertension|pregnancy induced hypertension|pih
eclampsia
placenta previa
placental abruption|abruptio placentae|abruption
hyperemesis gravidarum|severe morning sickness
hellp syndrome
postpartum hemorrhage|pph
anemia in pregnancy|anemia
stillbirth|intrauterine fetal demise|iufd|fetal death
premature rupture of membranes|prom|prelabor rupture of membranes
preterm premature rupture of membranes|pprom
intrauterine growth restriction|iugr|fetal growth restriction|fgr|small for gestational age
macrosomia|large baby|large for gestational age|lga
chorioamnionitis|intraamniotic infection|amnionitis
deep vein thrombosis|dvt|blood clot
pulmonary embolism|pe
peripartum cardiomyopathy|postpartum cardiomyopathy
rh incompatibility|rh alloimmunization|rh disease|hemolytic disease of the fetus and newborn|hdfn|erythroblastosis fetalis
polyhydramnios|too much amniotic fluid
oligohydramnios|too little amniotic fluid
placenta accreta|placenta accreta spectrum|morbidly adherent placenta
placenta increta
placenta percreta
vasa previa
cervical insufficiency|incompetent cervix|cervical incompetence
molar pregnancy|hydatidiform mole|gestational trophoblastic disease|complete mole|partial mole
choriocarcinoma
amniotic fluid embolism
uterine rupture
shoulder dystocia
cord prolapse|umbilical cord prolapse
breech presentation|breech
malpresentation|transverse lie|face presentation|brow presentation
post term pregnancy|postdates|prolonged pregnancy
twin to twin transfusion syndrome|ttts
multiple gestation|twins|multiple pregnancy
urinary tract infection|uti
pyelonephritis
asymptomatic bacteriuria
intrahepatic cholestasis of pregnancy|obstetric cholestasis|cholestasis of pregnancy
acute fatty liver of pregnancy|aflp
group b strep infection|gbs|group b streptococcus
gestational thrombocytopenia
thrombocytopenia
disseminated intravascular coagulation|dic
postpartum depression|perinatal depression|antenatal depression
postpartum psychosis
postpartum thyroiditis
sheehan syndrome|postpartum pituitary necrosis
endometritis|postpartum endometritis
mastitis
retained placenta
uterine atony
uterine inversion
perineal tear|vaginal laceration|third degree tear|fourth degree tear
obstetric fistula|vesicovaginal fistula|rectovaginal fistula
cephalopelvic disproportion|cpd|obstructed labor|failure to progress|arrest of labor
fetal distress|non reassuring fetal status
birth asphyxia|hypoxic ischemic encephalopathy
neural tube defect|spina bifida|anencephaly
birth defects|congenital anomaly
gestational trophoblastic neoplasia
septic abortion
recurrent pregnancy loss|recurrent miscarriage
threatened abortion|threatened miscarriage
missed abortion|missed miscarriage
incomplete abortion
inevitable abortion
cervical ectopic pregnancy
cesarean scar pregnancy
heterotopic pregnancy
abdominal pregnancy
placental insufficiency
velamentous cord insertion
single umbilical artery|two vessel cord
nuchal cord
true knot|umbilical cord knot
low lying placenta
circumvallate placenta
succenturiate lobe
chronic hypertension in pregnancy|superimposed preeclampsia
pregestational diabetes|diabetic embryopathy|caudal regression syndrome
diabetic ketoacidosis in pregnancy
gestational weight gain|excessive weight gain
pica
carpal tunnel syndrome
heartburn|gerd|reflux
constipation
hemorrhoids
varicose veins
pelvic girdle pain|symphysis pubis dysfunction|spd
round ligament pain
back pain|low back pain
leg cramps
edema|swelling
pregnancy rhinitis
gestational gingivitis|pregnancy gingivitis|pyogenic granuloma of pregnancy|pregnancy tumor
melasma|chloasma|mask of pregnancy
striae gravidarum|stretch marks
pruritic urticarial papules and plaques of pregnancy|puppp|polymorphic eruption of pregnancy
pemphigoid gestationis|herpes gestationis
prurigo of pregnancy
impetigo herpetiformis|pustular psoriasis of pregnancy
supine hypotensive syndrome|aortocaval compression|inferior vena cava compression syndrome
gallstones|cholelithiasis|cholecystitis
appendicitis in pregnancy
pancreatitis
hydronephrosis of pregnancy|physiologic hydronephrosis
kidney stones|nephrolithiasis
acute kidney injury
bell's palsy|bell palsy
pituitary apoplexy
cerebral venous sinus thrombosis|cvst
stroke
posterior reversible encephalopathy syndrome|pres
reversible cerebral vasoconstriction syndrome|rcvs
spontaneous coronary artery dissection|scad
aortic dissection
splenic artery aneurysm rupture
pulmonary edema
gestational thyrotoxicosis|transient gestational thyrotoxicosis
hyperthyroidism|graves disease
hypothyroidism
antiphospholipid syndrome
lupus flare
peripartum infection|puerperal sepsis|maternal sepsis|sepsis
listeriosis|listeria
toxoplasmosis
cytomegalovirus|cmv
rubella|congenital rubella
syphilis|congenital syphilis
herpes|neonatal herpes|hsv
varicella|chickenpox|varicella pneumonia
parvovirus b19|fifth disease|hydrops fetalis
zika virus|zika
hepatitis b
hiv|perinatal hiv transmission
malaria in pregnancy
influenza|flu
covid 19
bacterial vaginosis
trichomoniasis
chlamydia
gonorrhea
yeast infection|vulvovaginal candidiasis
nonimmune hydrops
fetal anemia
fetal arrhythmia
alloimmune thrombocytopenia|fetal and neonatal alloimmune thrombocytopenia|fnait
postpartum urinary retention
postpartum incontinence|urinary incontinence|stress incontinence
pelvic organ prolapse
diastasis recti
postpartum preeclampsia
epidural complication|post dural puncture headache|spinal headache
wound infection|cesarean wound infection
retained products of conception
subchorionic hematoma
vanishing twin syndrome
twin anemia polycythemia sequence|taps
twin reversed arterial perfusion|trap sequence
monoamniotic twins|cord entanglement
conjoined twins
selective fetal growth restriction
neonatal hypoglycemia
neonatal jaundice
respiratory distress syndrome|neonatal respiratory distress
low birth weight
prematurity
fetal alcohol syndrome
neonatal abstinence syndrome|neonatal opioid withdrawal
hyperemesis induced wernicke encephalopathy|wernicke encephalopathy
ptyalism|excessive salivation
insomnia
restless legs syndrome
gestational diabetes insipidus|transient diabetes insipidus of pregnancy
lymphocytic hypophysitis
thrombophilia
heart failure
mitral stenosis decompensation
pregnancy associated breast cancer
`, "2026-11-06");

P("Name a cause of stroke","clinical","",`
high blood pressure|hypertension
atrial fibrillation|afib|af|a fib
atherosclerosis|plaque|hardening of the arteries
blood clot|thrombus|thrombosis
embolism|embolus|cardioembolism|cardioembolic stroke
smoking|tobacco|cigarettes
carotid artery stenosis|carotid stenosis|carotid artery disease
diabetes|diabetes mellitus
high cholesterol|hyperlipidemia|dyslipidemia
brain aneurysm|cerebral aneurysm|berry aneurysm|ruptured aneurysm|saccular aneurysm
arteriovenous malformation|avm|cerebral avm
small vessel disease|lacunar infarct|lipohyalinosis|lacunar stroke
intracerebral hemorrhage|brain bleed|hemorrhagic stroke|ich
subarachnoid hemorrhage|sah
heart attack|myocardial infarction|mi
left ventricular thrombus|lv thrombus|mural thrombus
infective endocarditis|endocarditis|septic emboli
patent foramen ovale|pfo|paradoxical embolism
carotid artery dissection|carotid dissection
vertebral artery dissection|vertebral dissection
arterial dissection|cervical artery dissection
sickle cell disease|sickle cell anemia
cocaine
amphetamines|methamphetamine|meth
obesity
physical inactivity|sedentary lifestyle
alcohol|heavy drinking|binge drinking
oral contraceptives|birth control pills|estrogen
pregnancy
antiphospholipid syndrome|lupus anticoagulant|aps
cerebral venous sinus thrombosis|venous sinus thrombosis|cvst|cerebral venous thrombosis
cerebral amyloid angiopathy|amyloid angiopathy|congophilic angiopathy
moyamoya disease|moyamoya
vasculitis|cerebral vasculitis|cns vasculitis|primary angiitis of the cns
giant cell arteritis|temporal arteritis
takayasu arteritis
polyarteritis nodosa|pan
lupus|sle|systemic lupus erythematosus
fibromuscular dysplasia|fmd
cadasil
carasil
fabry disease
melas|mitochondrial encephalopathy lactic acidosis and stroke like episodes
homocystinuria|hyperhomocysteinemia|high homocysteine
marfan syndrome
ehlers danlos syndrome|vascular ehlers danlos
polycythemia vera|polycythemia
essential thrombocythemia|thrombocytosis
hypercoagulable state|thrombophilia
factor v leiden
prothrombin gene mutation
protein c deficiency
protein s deficiency
antithrombin deficiency
cancer|malignancy|trousseau syndrome
nonbacterial thrombotic endocarditis|marantic endocarditis|libman sacks endocarditis
atrial myxoma|cardiac myxoma
papillary fibroelastoma
heart failure|cardiomyopathy|dilated cardiomyopathy
mechanical heart valve|prosthetic valve
rheumatic heart disease|mitral stenosis
aortic arch atheroma|aortic arch plaque
cardiac surgery|coronary artery bypass|cabg
cardiac catheterization
atrial flutter
sick sinus syndrome
left atrial appendage thrombus
endocarditis from iv drug use
air embolism
fat embolism
cholesterol embolism|atheroembolism
head trauma|traumatic brain injury
hypotension|watershed infarct|border zone infarct|hypoperfusion
cardiac arrest
anticoagulant use|warfarin|blood thinners
thrombolytics
vasospasm|cerebral vasospasm
reversible cerebral vasoconstriction syndrome|rcvs
posterior reversible encephalopathy syndrome|pres
eclampsia|preeclampsia
migraine|migrainous infarction
hypertensive emergency|malignant hypertension
hypertensive encephalopathy
hemorrhagic transformation
brain tumor|tumor hemorrhage|glioblastoma
cavernous malformation|cavernoma|cavernous angioma
dural arteriovenous fistula
venous angioma|developmental venous anomaly
hemophilia
thrombocytopenia|low platelets
liver disease|coagulopathy
leukemia
disseminated intravascular coagulation|dic
thrombotic thrombocytopenic purpura|ttp
heparin induced thrombocytopenia|hit
covid 19
hiv
syphilis|neurosyphilis|meningovascular syphilis
tuberculous meningitis|tb meningitis
bacterial meningitis|meningitis
varicella zoster vasculopathy|varicella|shingles
fungal infection|aspergillosis|mucormycosis
chagas disease
neurocysticercosis
behcet disease
kawasaki disease
sarcoidosis|neurosarcoidosis
susac syndrome
sneddon syndrome
radiation vasculopathy|radiation therapy
polycystic kidney disease|adpkd
coarctation of the aorta
pseudoxanthoma elasticum
neurofibromatosis|nf1
hereditary hemorrhagic telangiectasia|hht|osler weber rendu
tuberous sclerosis
sturge weber syndrome
menkes disease
nephrotic syndrome
paroxysmal nocturnal hemoglobinuria|pnh
myeloproliferative neoplasm|jak2
hyperviscosity syndrome|waldenstrom macroglobulinemia|multiple myeloma
iron deficiency anemia
dehydration
sleep apnea|obstructive sleep apnea|osa
age|old age
family history|genetics
male sex
african american race
previous stroke|prior tia|transient ischemic attack|tia
chronic kidney disease|ckd
peripheral artery disease|pad
stress
air pollution
poor diet|high salt diet
erythropoietin|epo
hormone replacement therapy|hrt
nsaids
triptans
ergotamine
bevacizumab
l asparaginase
immune checkpoint inhibitors
ecstasy|mdma
heroin
cannabis|marijuana
energy drinks
decongestants|pseudoephedrine|phenylpropanolamine
chiropractic neck manipulation|neck manipulation
bow hunter syndrome|rotational vertebral artery occlusion
eagle syndrome
carotid web
aortic dissection
left ventricular aneurysm
takotsubo cardiomyopathy
chagas cardiomyopathy
amyloid cardiomyopathy|cardiac amyloidosis
noncompaction cardiomyopathy
atrial septal aneurysm
paradoxical embolism through pulmonary avm|pulmonary arteriovenous malformation
decompression sickness|the bends
carbon monoxide poisoning
hypoglycemia
`, "2026-11-06");

P("Name a part of the reproductive system","body","",`
uterus|womb
ovary|ovaries
testicle|testis|testes|testicles
penis
vagina
fallopian tube|uterine tube|oviduct|salpinx
cervix|uterine cervix
prostate|prostate gland
scrotum
vulva
clitoris
labia majora
labia minora
epididymis
vas deferens|ductus deferens
seminal vesicle|seminal vesicles
urethra
endometrium|uterine lining
myometrium
perimetrium
ovarian follicle|follicle|graafian follicle
corpus luteum
bartholin gland|bartholin glands|greater vestibular gland
bulbourethral gland|cowper gland|cowper's gland
skene gland|skene's glands|paraurethral gland|lesser vestibular gland
hymen
mons pubis|mons veneris
foreskin|prepuce
glans penis|glans
shaft of the penis|penile shaft
corpus cavernosum|corpora cavernosa
corpus spongiosum
fimbriae|fimbria
ampulla of the fallopian tube|ampulla
isthmus of the fallopian tube
infundibulum
interstitial portion of fallopian tube|intramural fallopian tube
fundus of the uterus|uterine fundus
body of the uterus|uterine body|corpus uteri
lower uterine segment
endocervix|endocervical canal|cervical canal
ectocervix|exocervix
transformation zone|squamocolumnar junction
external os
internal os
vaginal fornix|fornix|posterior fornix
vestibule|vulvar vestibule
introitus|vaginal opening
perineum
fourchette|posterior fourchette
clitoral hood
frenulum
seminiferous tubules
leydig cells|interstitial cells
sertoli cells
rete testis
efferent ductules
ejaculatory duct
tunica albuginea
tunica vaginalis
spermatic cord
cremaster muscle
dartos muscle|dartos fascia
pampiniform plexus
broad ligament
round ligament|round ligament of the uterus
ovarian ligament|ligament of the ovary
suspensory ligament of the ovary|infundibulopelvic ligament
cardinal ligament|mackenrodt ligament|transverse cervical ligament
uterosacral ligament
mesosalpinx
mesovarium
mesometrium
pouch of douglas|rectouterine pouch
vesicouterine pouch
ovarian cortex
ovarian medulla
oocyte|egg|ovum
sperm|spermatozoa
germinal epithelium
theca cells|theca interna|theca externa
granulosa cells
zona pellucida
cumulus oophorus
corpus albicans
primordial follicle
antral follicle
placenta
umbilical cord
amniotic sac|amnion
chorion
decidua
breast|mammary gland
nipple
areola
milk ducts|lactiferous ducts
lobules|mammary lobules
prostatic urethra
membranous urethra
spongy urethra|penile urethra
verumontanum|seminal colliculus
prostatic utricle
peripheral zone of the prostate
transition zone of the prostate
central zone of the prostate
navicular fossa
bulb of the penis
crura of the penis|crus
bulbospongiosus muscle
ischiocavernosus muscle
suspensory ligament of the penis
gubernaculum
appendix testis
appendix epididymis
vestibular bulbs
glans clitoris
pelvic floor
gartner duct
epoophoron
paroophoron
`, "2026-11-06");

P("Name a body cavity or anatomical space","body","",`
abdominal cavity|abdomen
thoracic cavity|chest cavity|thorax
pelvic cavity|pelvis
cranial cavity|skull cavity
pleural cavity|pleural space
pericardial cavity|pericardial space|pericardial sac
peritoneal cavity|peritoneum
mediastinum
spinal canal|vertebral canal|spinal cavity
oral cavity|mouth
nasal cavity
retroperitoneum|retroperitoneal space
ventral body cavity|ventral cavity
dorsal body cavity|dorsal cavity
subarachnoid space
epidural space
subdural space
paranasal sinuses|sinuses
maxillary sinus
frontal sinus
ethmoid sinus|ethmoid air cells
sphenoid sinus
orbit|orbital cavity|eye socket
middle ear|tympanic cavity
mastoid air cells
anterior mediastinum
middle mediastinum
posterior mediastinum
superior mediastinum
lesser sac|omental bursa
greater sac
morison's pouch|hepatorenal recess|hepatorenal pouch
pouch of douglas|rectouterine pouch
rectovesical pouch
vesicouterine pouch
subphrenic space
subhepatic space
paracolic gutter
epiploic foramen|foramen of winslow
axilla|armpit|axillary space
popliteal fossa
cubital fossa|antecubital fossa
inguinal canal
femoral canal
femoral triangle|scarpa's triangle
carpal tunnel
cubital tunnel
tarsal tunnel
guyon's canal|ulnar canal
anatomical snuffbox
quadrangular space|quadrilateral space
triangular space
triangular interval
retropharyngeal space
parapharyngeal space|lateral pharyngeal space
prevertebral space
danger space
submandibular space
sublingual space
submental space
masticator space
pterygomandibular space
parotid space
carotid sheath|carotid space
peritonsillar space
infratemporal fossa
pterygopalatine fossa
temporal fossa
anterior cranial fossa
middle cranial fossa
posterior cranial fossa
cavernous sinus
ventricles of the brain|ventricles
lateral ventricle
third ventricle
fourth ventricle
cisterna magna
interpeduncular cistern
pontine cistern
joint space|joint cavity|synovial cavity
bursa
medullary cavity|marrow cavity
nasopharynx
oropharynx
laryngopharynx|hypopharynx
vallecula
piriform recess|piriform sinus|pyriform sinus
laryngeal ventricle
glottis
anterior chamber of the eye|anterior chamber
posterior chamber of the eye|posterior chamber
vitreous chamber|vitreous cavity
uterine cavity|endometrial cavity
vaginal canal|vagina
amniotic cavity
chorionic cavity|extraembryonic coelom
yolk sac
intraembryonic coelom|coelom
blastocoel|blastocyst cavity
pericardial transverse sinus|transverse pericardial sinus
oblique pericardial sinus
costodiaphragmatic recess|costophrenic recess|costophrenic angle
costomediastinal recess
ischioanal fossa|ischiorectal fossa
perineal pouch|superficial perineal pouch|deep perineal pouch
space of retzius|retropubic space
presacral space|retrorectal space
perirenal space|perinephric space
anterior pararenal space
posterior pararenal space
infracolic space
supracolic space
deep posterior compartment
anterior compartment of the leg
lateral compartment of the leg
superficial posterior compartment
thenar space
midpalmar space
hypothenar space
space of parona
fascial spaces of the hand
web space
deep neck space
suprasternal space|space of burns
pretracheal space
alveolar space|alveoli
pleural recess
interstitial space|interstitium
intercostal space
bowman space|bowman's space|urinary space
renal pelvis
renal sinus
urinary bladder lumen|bladder
joint recess|suprapatellar pouch|suprapatellar bursa
olecranon bursa
prepatellar bursa
subacromial space|subacromial bursa
sinus tarsi
cisterna chyli
space of disse|perisinusoidal space
virchow robin space|perivascular space
pharyngeal recess|fossa of rosenmuller
sphenoethmoidal recess
nasal meatus|inferior meatus|middle meatus|superior meatus
external auditory canal|ear canal
inner ear|bony labyrinth
mastoid antrum
eustachian tube|auditory tube
sella turcica|pituitary fossa|hypophyseal fossa
meckel cave|trigeminal cave
`, "2026-11-06");

P("Name an embryologic structure","body","",`
neural tube
notochord
placenta
umbilical cord
yolk sac
amnion|amniotic sac
chorion
blastocyst
morula
zygote
neural crest|neural crest cells
somite|somites
ectoderm
mesoderm
endoderm
primitive streak
trophoblast
inner cell mass|embryoblast
syncytiotrophoblast
cytotrophoblast
ductus arteriosus
foramen ovale
ductus venosus
umbilical vein
umbilical arteries|umbilical artery
allantois
urachus
vitelline duct|omphalomesenteric duct|vitelline duct remnant
pharyngeal arches|branchial arches|pharyngeal arch
pharyngeal pouches|branchial pouches|pharyngeal pouch
pharyngeal clefts|branchial clefts|pharyngeal groove
pharyngeal membranes
first pharyngeal arch
second pharyngeal arch
third pharyngeal arch
fourth pharyngeal arch
sixth pharyngeal arch
meckel cartilage|meckel's cartilage
reichert cartilage
thyroglossal duct
foramen cecum
rathke pouch|rathke's pouch
mesonephric duct|wolffian duct
paramesonephric duct|mullerian duct
urogenital sinus
genital tubercle
urogenital folds|urethral folds
labioscrotal swellings|labioscrotal folds
gubernaculum
processus vaginalis
gonadal ridge|genital ridge
primordial germ cells
pronephros
mesonephros
metanephros
ureteric bud
metanephric blastema|metanephric mesenchyme
cloaca
urorectal septum
cloacal membrane
oropharyngeal membrane|buccopharyngeal membrane
prechordal plate
primitive node|hensen's node
neural plate
neural folds
neural groove
paraxial mesoderm
intermediate mesoderm
lateral plate mesoderm
somatic mesoderm|somatopleure
splanchnic mesoderm|splanchnopleure
intraembryonic coelom
extraembryonic mesoderm
extraembryonic coelom|chorionic cavity
connecting stalk|body stalk
bilaminar disc|bilaminar embryonic disc
trilaminar disc|trilaminar embryonic disc
epiblast
hypoblast
amniotic cavity
exocoelomic cavity|primary yolk sac
secondary yolk sac|definitive yolk sac
chorionic villi
chorion frondosum
chorion laeve
decidua basalis
decidua capsularis
decidua parietalis
zona pellucida
blastocoel|blastocoele
heart tube|primitive heart tube
truncus arteriosus
bulbus cordis
primitive ventricle
primitive atrium
sinus venosus
cardinal veins|anterior cardinal vein|posterior cardinal vein|common cardinal vein
vitelline veins
endocardial cushions
septum primum
septum secundum
ostium primum
ostium secundum
aorticopulmonary septum|spiral septum
cardiac jelly
aortic arches|pharyngeal arch arteries
dorsal aorta
cardiogenic field|cardiogenic mesoderm
foregut
midgut
hindgut
primitive gut tube
dorsal mesentery
ventral mesentery
septum transversum
pleuroperitoneal membranes
pleuropericardial membranes
lung bud|respiratory diverticulum
tracheoesophageal septum
hepatic diverticulum|liver bud
dorsal pancreatic bud
ventral pancreatic bud
cystic diverticulum
thymic primordium
ultimobranchial body
tuberculum impar
lateral lingual swellings
hypobranchial eminence|copula
frontonasal prominence
maxillary prominence
mandibular prominence
nasal placodes
medial nasal prominence
lateral nasal prominence
intermaxillary segment
primary palate
secondary palate|palatine shelves
otic placode
otic vesicle|otocyst
lens placode
optic vesicle
optic cup
optic stalk
hyaloid artery
prosencephalon|forebrain vesicle
mesencephalon|midbrain vesicle
rhombencephalon|hindbrain vesicle
telencephalon
diencephalon
metencephalon
myelencephalon
alar plate
basal plate
sulcus limitans
mantle layer
marginal layer
neuroepithelium|ventricular zone
neuropores|anterior neuropore|posterior neuropore
limb buds
apical ectodermal ridge|aer
zone of polarizing activity|zpa
progress zone
dermomyotome
sclerotome
myotome
dermatome
syndetome
hypaxial muscle
epaxial muscle
primary ossification center
secondary ossification center
mesenchyme
tooth bud|dental lamina
enamel organ
dental papilla
dental follicle|dental sac
hertwig epithelial root sheath
mammary ridge|milk line
anal membrane
proctodeum
stomodeum
genital swellings
sinovaginal bulbs
vaginal plate
mullerian tubercle|sinus tubercle
appendix testis
gartner duct
primitive sex cords|primary sex cords
cortical cords
tunica albuginea
neuromeres|rhombomeres
cranial neural crest
`, "2026-11-06");

/* ---- NEW STANDARD DAILY PROMPTS: MEDICINE (batch 2026-11-04) ---- */
P("Name a structure in the neck","body","",`
thyroid gland|thyroid
trachea|windpipe
esophagus|oesophagus|gullet
larynx|voice box
carotid artery|common carotid artery|carotid
jugular vein|internal jugular vein|ij|ijv
spinal cord|cervical spinal cord
cervical vertebrae|cervical spine|c spine|neck vertebrae
sternocleidomastoid|scm|sternocleidomastoid muscle
adam's apple|adams apple|laryngeal prominence
lymph nodes|cervical lymph nodes|neck lymph nodes
parathyroid glands|parathyroid
pharynx|throat
vocal cords|vocal folds
hyoid bone|hyoid
trapezius|trapezius muscle
vagus nerve|cn x|cranial nerve 10
epiglottis
thyroid cartilage
cricoid cartilage
external jugular vein|ej|ejv
internal carotid artery|ica
external carotid artery|eca
vertebral artery
phrenic nerve
brachial plexus
recurrent laryngeal nerve
platysma
carotid sinus
carotid body
carotid sheath
subclavian artery
subclavian vein
thyroid isthmus|isthmus of thyroid
thoracic duct
salivary glands
submandibular gland
parotid gland
tonsils|palatine tonsils
anterior triangle|anterior triangle of the neck
posterior triangle|posterior triangle of the neck
scalene muscles|scalenes
anterior scalene|scalenus anterior
middle scalene|scalenus medius
posterior scalene|scalenus posterior
atlas|c1
axis|c2
dens|odontoid process
vertebra prominens|c7
cricothyroid membrane
cricothyroid muscle
thyrohyoid membrane
tracheal rings|tracheal cartilage
strap muscles|infrahyoid muscles
sternohyoid
sternothyroid
thyrohyoid
omohyoid
suprahyoid muscles
digastric|digastric muscle
mylohyoid
stylohyoid
geniohyoid
levator scapulae
splenius capitis
splenius cervicis
semispinalis capitis
longus colli
longus capitis
rectus capitis anterior
rectus capitis lateralis
suboccipital muscles
accessory nerve|spinal accessory nerve|cn xi|cranial nerve 11
hypoglossal nerve|cn xii|cranial nerve 12
glossopharyngeal nerve|cn ix|cranial nerve 9
ansa cervicalis
cervical plexus
superior laryngeal nerve
external laryngeal nerve
internal laryngeal nerve
sympathetic trunk|cervical sympathetic chain
superior cervical ganglion
middle cervical ganglion
stellate ganglion|cervicothoracic ganglion
inferior cervical ganglion
great auricular nerve
lesser occipital nerve
transverse cervical nerve
supraclavicular nerves
greater occipital nerve
superior thyroid artery
inferior thyroid artery
thyroid ima artery|arteria thyroidea ima
thyrocervical trunk
costocervical trunk
lingual artery
facial artery
occipital artery
ascending pharyngeal artery
transverse cervical artery
suprascapular artery
ascending cervical artery
deep cervical artery
superior thyroid vein
middle thyroid vein
inferior thyroid vein
anterior jugular vein
vertebral vein
brachiocephalic vein
facial vein
retromandibular vein
jugular venous arch
carotid bifurcation
glottis
subglottis
supraglottis
vestibular folds|false vocal cords
arytenoid cartilages|arytenoids
corniculate cartilages
cuneiform cartilages
aryepiglottic folds
piriform recess|piriform sinus|pyriform sinus
vallecula
laryngopharynx|hypopharynx
oropharynx
nasopharynx
upper esophageal sphincter|cricopharyngeus
pharyngeal constrictor muscles|pharyngeal constrictors
thyroid lobes
pyramidal lobe
thyroglossal duct remnant|thyroglossal duct
lingual thyroid
superior parathyroid glands
inferior parathyroid glands
thymus
cervical lymph node levels|level ii lymph nodes
jugulodigastric node
virchow node|left supraclavicular node|signal node
submental lymph nodes
submandibular lymph nodes
deep cervical lymph nodes
superficial cervical lymph nodes
retropharyngeal lymph nodes
supraclavicular lymph nodes
occipital lymph nodes
pretracheal lymph nodes|delphian node
investing fascia|investing layer of deep cervical fascia
pretracheal fascia
prevertebral fascia
alar fascia
deep cervical fascia
superficial cervical fascia
retropharyngeal space
danger space
parapharyngeal space
prevertebral space
submandibular space
submental space
visceral space
carotid triangle
muscular triangle
submandibular triangle|digastric triangle
submental triangle
occipital triangle
supraclavicular triangle|subclavian triangle|omoclavicular triangle
suboccipital triangle
jugular notch|suprasternal notch
clavicle|collarbone
first rib
cervical rib
manubrium
nuchal ligament|ligamentum nuchae
anterior longitudinal ligament
posterior longitudinal ligament
transverse ligament of the atlas
alar ligaments
tectorial membrane
atlanto occipital joint
atlanto axial joint
uncovertebral joints|joints of luschka
facet joints|cervical facet joints
intervertebral discs|cervical discs
transverse foramen|foramen transversarium
spinous processes
nerve roots|cervical nerve roots
c5 nerve root
c6 nerve root
c7 nerve root
c8 nerve root
interscalene triangle
scalene triangle
thoracic inlet|thoracic outlet
cervical pleura|cupola
suprapleural membrane|sibson fascia
lung apex
sternoclavicular joint
skin of the neck
subcutaneous fat
mandible
mastoid process
styloid process
external occipital protuberance|inion
`, "2026-11-06");

P("Name a cytokine or immune signaling molecule","science","",`
interleukin|interleukins
interferon|interferons
tumor necrosis factor|tnf|tnf alpha|tnf a|cachectin
histamine
interleukin 1|il 1|il1
interleukin 6|il 6|il6
interleukin 2|il 2|il2
interleukin 4|il 4|il4
interleukin 10|il 10|il10
interleukin 8|il 8|il8|cxcl8
interferon gamma|ifn gamma|ifn g|ifng
interferon alpha|ifn alpha|ifn a
interferon beta|ifn beta|ifn b
interleukin 5|il 5|il5
interleukin 12|il 12|il12
interleukin 17|il 17|il17|il 17a
interleukin 13|il 13|il13
interleukin 3|il 3|il3
interleukin 23|il 23|il23
interleukin 1 beta|il 1 beta|il 1b
interleukin 1 alpha|il 1 alpha|il 1a
complement|complement proteins
c3a
c5a
c3b
prostaglandins|prostaglandin
leukotrienes|leukotriene
bradykinin
chemokines|chemokine
transforming growth factor beta|tgf beta|tgf b|tgfb
granulocyte colony stimulating factor|g csf|filgrastim
granulocyte macrophage colony stimulating factor|gm csf|sargramostim
macrophage colony stimulating factor|m csf|csf 1
erythropoietin|epo
thrombopoietin|tpo
serotonin
interleukin 7|il 7|il7
interleukin 11|il 11|il11|oprelvekin
interleukin 15|il 15|il15
interleukin 18|il 18|il18
interleukin 21|il 21|il21
interleukin 22|il 22|il22
interleukin 9|il 9|il9
interleukin 27|il 27|il27
interleukin 33|il 33|il33
interleukin 25|il 25|il25|il 17e
interleukin 35|il 35
interleukin 36|il 36
interleukin 37|il 37
interleukin 1 receptor antagonist|il 1ra|anakinra
interleukin 14|il 14
interleukin 16|il 16
interleukin 19|il 19
interleukin 20|il 20
interleukin 24|il 24
interleukin 26|il 26
interleukin 28|il 28|interferon lambda 2
interleukin 29|il 29|interferon lambda 1
interleukin 31|il 31
interleukin 32|il 32
interleukin 34|il 34
interleukin 17f|il 17f
interferon lambda|ifn lambda|type iii interferon
interferon omega
interferon epsilon
interferon kappa
type i interferon
type ii interferon
lymphotoxin|tnf beta|lymphotoxin alpha
lymphotoxin beta
c5b-9|membrane attack complex|mac
c4a
c2a
c1q
anaphylatoxins
platelet activating factor|paf
thromboxane a2|thromboxane|txa2
prostaglandin e2|pge2
prostaglandin d2|pgd2
prostaglandin i2|prostacyclin|pgi2
leukotriene b4|ltb4
leukotriene c4|ltc4
leukotriene d4|ltd4
leukotriene e4|lte4
cysteinyl leukotrienes
lipoxins
resolvins
nitric oxide|no
kallikrein
substance p
heparin
tryptase
eosinophil major basic protein|major basic protein
eosinophil cationic protein
eotaxin|ccl11
mcp 1|ccl2|monocyte chemoattractant protein 1
rantes|ccl5
mip 1 alpha|ccl3|macrophage inflammatory protein 1 alpha
mip 1 beta|ccl4
ccl19
ccl21
ccl17|tarc
ccl20
ccl22
ccl25
cxcl10|ip 10
cxcl12|sdf 1|stromal cell derived factor 1
cxcl13
cxcl1|gro alpha
cxcl9|mig
cx3cl1|fractalkine
xcl1|lymphotactin
stem cell factor|scf|kit ligand
flt3 ligand
leukemia inhibitory factor|lif
oncostatin m
ciliary neurotrophic factor|cntf
cardiotrophin 1
thymic stromal lymphopoietin|tslp
baff|b cell activating factor|blys
april|a proliferation inducing ligand
rankl|rank ligand|receptor activator of nuclear factor kappa b ligand
osteoprotegerin|opg
fas ligand|fasl|cd95 ligand
trail|tnf related apoptosis inducing ligand
cd40 ligand|cd40l|cd154
light|tnfsf14
tweak
ox40 ligand
4 1bb ligand
gitr ligand
vascular endothelial growth factor|vegf
platelet derived growth factor|pdgf
epidermal growth factor|egf
fibroblast growth factor|fgf
insulin like growth factor|igf 1
hepatocyte growth factor|hgf
nerve growth factor|ngf
migration inhibitory factor|macrophage migration inhibitory factor|mif
high mobility group box 1|hmgb1
alarmins
defensins
cathelicidin|ll 37
acute phase reactants
c reactive protein|crp
serum amyloid a
hepcidin
ferritin
procalcitonin
adiponectin
leptin
resistin
visfatin
galectin
pentraxin 3
soluble il 2 receptor|sil 2r
toll like receptor|tlr
pattern recognition receptors
damage associated molecular patterns|damps
pathogen associated molecular patterns|pamps
nf kappa b|nfkb
jak stat|jak stat pathway
janus kinase|jak
stat proteins|stat
interferon regulatory factor|irf
inflammasome|nlrp3
caspase 1
gasdermin d
sting|stimulator of interferon genes
cgas
myd88
mhc|major histocompatibility complex|hla
antibodies|immunoglobulins
cytokine storm
`, "2026-11-06");

P("Name a metabolic pathway or cycle","science","",`
krebs cycle|citric acid cycle|tca cycle|tricarboxylic acid cycle
glycolysis|embden meyerhof pathway
gluconeogenesis
urea cycle|ornithine cycle|krebs henseleit cycle
electron transport chain|etc|respiratory chain
oxidative phosphorylation|oxphos
beta oxidation|fatty acid oxidation
pentose phosphate pathway|hmp shunt|hexose monophosphate shunt|phosphogluconate pathway
glycogenolysis
glycogenesis|glycogen synthesis
fatty acid synthesis|lipogenesis
cori cycle|lactic acid cycle
ketogenesis
cholesterol synthesis|mevalonate pathway|hmg coa reductase pathway
lipolysis
heme synthesis|porphyrin synthesis
cellular respiration
aerobic respiration
anaerobic respiration|anaerobic glycolysis
fermentation|lactic acid fermentation
photosynthesis
calvin cycle
ketolysis|ketone body utilization
glucose alanine cycle|alanine cycle|cahill cycle
pyruvate dehydrogenase complex|pdh|link reaction|pyruvate decarboxylation
purine synthesis|de novo purine synthesis
pyrimidine synthesis|de novo pyrimidine synthesis
purine salvage pathway|salvage pathway
nucleotide synthesis
purine degradation|purine catabolism
pyrimidine degradation
heme degradation|heme catabolism|bilirubin metabolism
steroidogenesis|steroid synthesis
bile acid synthesis
protein synthesis|translation
transcription
dna replication
dna repair
transamination
deamination|oxidative deamination
amino acid catabolism
amino acid synthesis
one carbon metabolism|folate cycle
methionine cycle|sam cycle
transsulfuration pathway
fructose metabolism|fructolysis
galactose metabolism|leloir pathway
polyol pathway|sorbitol pathway|aldose reductase pathway
uronic acid pathway|glucuronic acid pathway
glyoxylate cycle
malate aspartate shuttle
glycerol phosphate shuttle|glycerol 3 phosphate shuttle
carnitine shuttle
citrate shuttle
rapoport luebering shunt|bisphosphoglycerate shunt|2 3 bpg shunt|luebering rapoport pathway
glycerol metabolism
triglyceride synthesis
phospholipid synthesis
sphingolipid metabolism
eicosanoid synthesis
arachidonic acid pathway|arachidonic acid cascade
cyclooxygenase pathway|cox pathway
lipoxygenase pathway
cytochrome p450 pathway
omega oxidation
alpha oxidation
peroxisomal beta oxidation
glycogen metabolism
lactate metabolism
alcohol metabolism|ethanol metabolism
nadph oxidase pathway|respiratory burst|oxidative burst
glutathione cycle|glutathione redox cycle
catecholamine synthesis
serotonin synthesis
melatonin synthesis
nitric oxide synthesis
creatine synthesis
polyamine synthesis
kynurenine pathway|tryptophan catabolism
niacin synthesis from tryptophan
tyrosine catabolism|phenylalanine metabolism
branched chain amino acid catabolism
glutamate glutamine cycle
gaba shunt
q cycle
proton motive force|chemiosmosis
atp synthesis
substrate level phosphorylation
phosphocreatine system|creatine phosphate system|atp pc system
purine nucleotide cycle
renin angiotensin aldosterone system|raas
coagulation cascade|clotting cascade
complement cascade|complement pathway
classical complement pathway
alternative complement pathway
lectin pathway
fibrinolysis
kinin kallikrein system
glucuronidation
sulfation
acetylation
methylation
phase i metabolism
phase ii metabolism
first pass metabolism
enterohepatic circulation
vitamin d synthesis|vitamin d activation
visual cycle|retinoid cycle
thyroid hormone synthesis
insulin signaling pathway
mtor pathway
ampk pathway
camp pathway|second messenger pathway
ip3 dag pathway|phosphoinositide pathway
jak stat pathway
mapk pathway|ras raf mek erk pathway
pi3k akt pathway
wnt pathway|wnt signaling
hedgehog pathway
notch pathway
nf kappa b pathway
apoptosis pathway|caspase cascade
ubiquitin proteasome pathway
autophagy
cell cycle
glycosaminoglycan synthesis
collagen synthesis
glycosylation
n linked glycosylation
o linked glycosylation
hexosamine pathway
entner doudoroff pathway
methylmalonyl coa pathway|propionate metabolism
odd chain fatty acid oxidation
elongation of fatty acids
desaturation of fatty acids
lipoprotein metabolism
reverse cholesterol transport
exogenous lipid pathway
endogenous lipid pathway
nitrogen cycle
carbon cycle
iron metabolism
copper metabolism
calcium homeostasis
bone remodeling cycle
menstrual cycle
cardiac cycle
sleep wake cycle|circadian rhythm
ovarian cycle
hair growth cycle
`, "2026-11-06");

P("Name a protein in the human body","science","",`
hemoglobin|haemoglobin
collagen
insulin
keratin
albumin
actin
myosin
elastin
antibodies|immunoglobulins|antibody
fibrinogen
myoglobin
ferritin
transferrin
enzymes
hormones
fibrin
tubulin
titin
troponin
tropomyosin
dystrophin
spectrin
ankyrin
immunoglobulin g|igg
immunoglobulin a|iga
immunoglobulin m|igm
immunoglobulin e|ige
immunoglobulin d|igd
thrombin
prothrombin
plasminogen
plasmin
von willebrand factor|vwf
factor viii
factor ix
factor v
factor x
factor vii
factor xi
factor xii
factor xiii
protein c
protein s
antithrombin|antithrombin iii
alpha 1 antitrypsin|a1at
ceruloplasmin
haptoglobin
hemopexin
c reactive protein|crp
complement proteins|complement
c3
c4
c1 esterase inhibitor
fibronectin
laminin
vimentin
desmin
lamin
nebulin
dynein
kinesin
clathrin
ubiquitin
histones
cytochrome c
rhodopsin
opsin
crystallin
melanin
amylase
lipase
pepsin
trypsin
chymotrypsin
lactase
catalase
lysozyme
dna polymerase
rna polymerase
atp synthase
sodium potassium pump|na k atpase
aquaporin
cftr|cystic fibrosis transmembrane conductance regulator
p53
rb protein|retinoblastoma protein
bcl 2
ras
myc
her2
egfr
cd4
cd8
mhc|hla|major histocompatibility complex
t cell receptor
toll like receptors|tlr
interferon
interleukins
tumor necrosis factor|tnf
growth hormone
prolactin
oxytocin
vasopressin|antidiuretic hormone|adh
glucagon
leptin
ghrelin
erythropoietin|epo
thyroglobulin
thyroxine binding globulin|tbg
sex hormone binding globulin|shbg
retinol binding protein
transthyretin|prealbumin
apolipoprotein|apolipoproteins
apolipoprotein b|apob|apo b100
apolipoprotein e|apoe
apolipoprotein a1|apoa1
lipoprotein lipase
ldl receptor
insulin receptor
alpha fetoprotein|afp
beta 2 microglobulin
cea|carcinoembryonic antigen
psa|prostate specific antigen
hcg|human chorionic gonadotropin
calmodulin
calbindin
osteocalcin
osteopontin
parathyroid hormone|pth
calcitonin
amyloid|amyloid beta
tau protein|tau
alpha synuclein
huntingtin
prion protein|prp
myelin basic protein
neurofilament
glial fibrillary acidic protein|gfap
synaptophysin
chromogranin
s100
cytokeratin
e cadherin
integrins
selectins
icam 1
vcam
connexin
claudin
occludin
fibrillin
dystroglycan
utrophin
perforin
granzyme
defensin
lactoferrin
mucin
surfactant protein
ferroportin
hepcidin
dmt1|divalent metal transporter 1
glut 4|glucose transporter 4
glut 1|glucose transporter 1
sglt2
megalin
cubilin
intrinsic factor
transcobalamin
gastrin
secretin
cholecystokinin|cck
motilin
somatostatin
vip|vasoactive intestinal peptide
neuropeptide y
substance p
endorphins|beta endorphin
enkephalins
dynorphin
orexin|hypocretin
brain natriuretic peptide|bnp
atrial natriuretic peptide|anp
angiotensinogen
renin
angiotensin converting enzyme|ace
ace2
endothelin
nitric oxide synthase
heat shock proteins|hsp
chaperones
proteasome
caspases
cyclins
cyclin dependent kinases|cdk
telomerase
topoisomerase
helicase
ligase
g proteins
adenylate cyclase
protein kinase a
protein kinase c
p glycoprotein
mdr1
cytochrome p450
glutathione s transferase
superoxide dismutase
glucose 6 phosphate dehydrogenase|g6pd
hexosaminidase a
glucocerebrosidase
alpha galactosidase
phenylalanine hydroxylase
tyrosinase
fumarylacetoacetate hydrolase
fmr1 protein|fmrp
frataxin
merlin
neurofibromin
tuberin
hamartin
von hippel lindau protein|vhl
apc protein
brca1
brca2
menin
ret
kit|c kit
jak2
bcr abl
pml rara
cd20
cd19
cd3
cd34
cd55|daf|decay accelerating factor
cd59
pd 1
pd l1
ctla 4
filaggrin
loricrin
involucrin
reelin
nogo
agrin
rapsyn
acetylcholine receptor
acetylcholinesterase
ryanodine receptor
dihydropyridine receptor
phospholamban
serca
calsequestrin
myosin binding protein c
gelsolin
profilin
cofilin
arp2/3
talin
vinculin
paxillin
zonulin
uromodulin|tamm horsfall protein
nephrin
podocin
podocalyxin
osteoprotegerin
rankl
sclerostin
fgf23
klotho
adiponectin
resistin
uncoupling protein 1|ucp1|thermogenin
ferritin light chain
hemosiderin
`, "2026-11-06");

P("Name a law or equation of physiology","science","",`
frank starling law|starling law of the heart|frank starling mechanism
fick principle|fick equation|fick law of diffusion|fick law
poiseuille law|poiseuilles law|hagen poiseuille equation
law of laplace|laplace law
henderson hasselbalch equation
boyle law|boyles law
starling forces|starling equation
ohm law|ohms law|flow equals pressure over resistance
nernst equation
goldman equation|goldman hodgkin katz equation
dalton law|daltons law|law of partial pressures
henry law|henrys law
charles law|charles's law
gay lussac law
ideal gas law
alveolar gas equation
cardiac output equation|co equals hr times sv
mean arterial pressure equation|map equation
renal clearance equation|clearance formula
glomerular filtration rate equation|gfr equation
filtration fraction
free water clearance
anion gap|anion gap equation
winters formula
osmolarity equation|serum osmolality formula|calculated osmolality
a a gradient|alveolar arterial gradient
oxygen content equation|cao2 equation
oxygen delivery equation|do2
bohr effect
haldane effect
bohr equation|dead space equation
reynolds number
bernoulli principle|bernoulli equation
continuity equation
stroke volume equation
ejection fraction equation
total peripheral resistance equation|resistance in series|resistance in parallel
compliance equation
wall stress|wall tension
graham law|grahams law
fick cardiac output method
cockcroft gault equation
mdrd equation
ckd epi equation
corrected calcium|calcium correction formula
corrected sodium|sodium correction for glucose
free water deficit formula
parkland formula
friedewald equation|ldl calculation
body mass index|bmi
harris benedict equation
mosteller formula|body surface area
law of mass action
all or none law|all or nothing principle
bell magendie law
bowditch effect|treppe|staircase phenomenon
anrep effect
hering breuer reflex
wolff law|wolffs law
davis law
weber weber law
donnan equilibrium|gibbs donnan equilibrium
van't hoff equation|vant hoff law|osmotic pressure equation
reflection coefficient
michaelis menten equation
lineweaver burk equation
hill equation
law of conservation of energy
law of conservation of mass
first law of thermodynamics
second law of thermodynamics
gibbs free energy equation
arrhenius equation
stokes einstein equation
einthoven law|einthoven triangle
cable equation|length constant
time constant
hodgkin huxley model
law of specific nerve energies|muller law
dale principle|dales principle
hebb rule|hebbian learning
sherrington law of reciprocal innervation|reciprocal inhibition
hering law|herings law of equal innervation
listing law
donders law
fechner law
stevens power law
yerkes dodson law
law of the intestine|bayliss starling law|peristaltic reflex
lamé equation
murray law
fahraeus lindqvist effect
fahraeus effect
windkessel effect|windkessel model
torricelli law
gorlin equation
hakki equation
modified bernoulli equation
pressure half time
pulmonary vascular resistance equation|pvr equation
systemic vascular resistance equation|svr equation
venous return equation|guyton venous return
guyton model
shunt equation|qs qt|shunt fraction
ventilation perfusion ratio|v q ratio
minute ventilation equation
alveolar ventilation equation
pao2 fio2 ratio|p f ratio
oxygenation index
renal plasma flow equation|pah clearance
excretion rate equation
fractional excretion of sodium|fena
fractional excretion of urea|feurea
transtubular potassium gradient|ttkg
delta delta|delta gap
urine anion gap
osmolar gap
bicarbonate deficit formula
expected pco2 formula
metabolic alkalosis compensation formula
respiratory acidosis compensation rule
kassirer bleich equation
stewart approach|strong ion difference
volume of distribution equation
half life equation
loading dose equation
maintenance dose equation
first order kinetics
zero order kinetics
bioavailability equation
therapeutic index
stewart hamilton equation|indicator dilution
le chatelier principle
law of electroneutrality
coulomb law
`, "2026-11-06");

P("Name a part of the immune system","science","",`
white blood cells|leukocytes|wbc
lymphocytes
t cells|t lymphocytes
b cells|b lymphocytes
antibodies|immunoglobulins
lymph nodes
spleen
thymus
bone marrow
tonsils
macrophages
neutrophils
natural killer cells|nk cells
lymphatic system|lymphatics
lymph
skin
mucous membranes
helper t cells|cd4 cells|cd4 t cells|th cells
cytotoxic t cells|cd8 cells|cd8 t cells|killer t cells
regulatory t cells|tregs|t regs
memory cells|memory t cells|memory b cells
plasma cells
dendritic cells
eosinophils
basophils
mast cells
monocytes
complement system|complement
cytokines
interferons
interleukins
adenoids|pharyngeal tonsil
appendix
peyer patches|peyers patches
malt|mucosa associated lymphoid tissue
galt|gut associated lymphoid tissue
balt|bronchus associated lymphoid tissue
salt|skin associated lymphoid tissue
nalt|nasal associated lymphoid tissue
lymphatic vessels
thoracic duct
right lymphatic duct
cisterna chyli
innate immunity|innate immune system
adaptive immunity|adaptive immune system
humoral immunity
cell mediated immunity
igg
iga
igm
ige
igd
secretory iga
mhc class i
mhc class ii
mhc|major histocompatibility complex|hla
t cell receptor|tcr
b cell receptor|bcr
toll like receptors|tlr
pattern recognition receptors|prr
nod like receptors
antigen presenting cells|apc
langerhans cells
kupffer cells
microglia
alveolar macrophages|dust cells
osteoclasts
histiocytes
follicular dendritic cells
plasmacytoid dendritic cells
th1 cells
th2 cells
th17 cells
tfh cells|follicular helper t cells
gamma delta t cells
nkt cells|natural killer t cells
innate lymphoid cells|ilc
mait cells
marginal zone b cells
b1 cells
germinal center
lymphoid follicle
primary lymphoid organs
secondary lymphoid organs
white pulp
red pulp
marginal zone
periarteriolar lymphoid sheath|pals
paracortex
medulla of lymph node
cortex of lymph node
high endothelial venules|hev
hassall corpuscles|hassall's corpuscles
thymic epithelial cells
afferent lymphatics
efferent lymphatics
waldeyer ring|waldeyers ring
lingual tonsil
palatine tonsils
tubal tonsils
m cells|microfold cells
paneth cells
defensins
lysozyme
lactoferrin
stomach acid|gastric acid
tears
saliva
mucus
cilia|mucociliary escalator
normal flora|microbiome|commensal bacteria
fever
inflammation
phagocytes
phagocytosis
granulocytes
polymorphonuclear cells|pmn|polys
band cells
myeloid cells
hematopoietic stem cells
common lymphoid progenitor
common myeloid progenitor
c3
c5
c3b
c5a
membrane attack complex|mac
classical complement pathway
alternative complement pathway
lectin pathway|mannose binding lectin
mannose binding lectin|mbl
c reactive protein|crp
acute phase proteins
opsonins
tumor necrosis factor|tnf
interleukin 1|il 1
interleukin 2|il 2
interleukin 6|il 6
interferon gamma
chemokines
histamine
perforin
granzymes
fas ligand
cd4
cd8
cd3
cd19
cd20
cd28
cd40
cd40 ligand
b7
ctla 4
pd 1
cd25
foxp3
fc receptors
antigen
epitope
hapten
antibody heavy chain
antibody light chain
fab region
fc region
variable region
constant region
hypervariable region|complementarity determining region|cdr
j chain
inflammasome
nets|neutrophil extracellular traps
respiratory burst|oxidative burst
nadph oxidase
myeloperoxidase
immunological memory
clonal selection
somatic hypermutation
class switching|isotype switching
vdj recombination
affinity maturation
negative selection
positive selection
central tolerance
peripheral tolerance
aire
self tolerance
immunological synapse
co stimulation
antigen presentation
cross presentation
opsonization
neutralization
antibody dependent cellular cytotoxicity|adcc
vaccination|vaccines
passive immunity
active immunity
herd immunity
maternal antibodies
colostrum
breast milk antibodies
`, "2026-11-06");

P("Name an opportunistic infection","micro","",`
pneumocystis pneumonia|pcp|pneumocystis jirovecii|pneumocystis jiroveci|pjp|pneumocystis
thrush|oral candidiasis|oropharyngeal candidiasis
candidiasis|candida|candida infection|yeast infection
esophageal candidiasis|candida esophagitis
cytomegalovirus|cmv|cmv infection
cmv retinitis
toxoplasmosis|toxoplasma|toxoplasma gondii|cerebral toxoplasmosis
cryptococcal meningitis|cryptococcus|cryptococcosis|cryptococcus neoformans
tuberculosis|tb|mycobacterium tuberculosis
mycobacterium avium complex|mac|mai|mycobacterium avium intracellulare|disseminated mac
kaposi sarcoma|kaposi's sarcoma|hhv 8|human herpesvirus 8|kshv
aspergillosis|aspergillus|invasive aspergillosis|aspergillus fumigatus
progressive multifocal leukoencephalopathy|pml|jc virus|jcv
histoplasmosis|histoplasma|histoplasma capsulatum|disseminated histoplasmosis
cryptosporidiosis|cryptosporidium
herpes zoster|shingles|varicella zoster virus|vzv
herpes simplex|hsv|herpes simplex virus|chronic herpes simplex
coccidioidomycosis|coccidioides|valley fever|disseminated coccidioidomycosis
mucormycosis|zygomycosis|mucor|rhizopus|black fungus
clostridioides difficile|c diff|clostridium difficile|c difficile colitis
oral hairy leukoplakia|hairy leukoplakia
epstein barr virus|ebv
bacillary angiomatosis|bartonella henselae|bartonella
talaromycosis|penicilliosis|talaromyces marneffei|penicillium marneffei
isosporiasis|cystoisosporiasis|cystoisospora belli|isospora belli
microsporidiosis|microsporidia
cyclosporiasis|cyclospora
strongyloides hyperinfection|disseminated strongyloidiasis|strongyloidiasis|strongyloides
nocardiosis|nocardia
listeriosis|listeria|listeria monocytogenes
recurrent bacterial pneumonia
streptococcus pneumoniae|pneumococcus|invasive pneumococcal disease
salmonella bacteremia|recurrent salmonella septicemia|nontyphoidal salmonella
pseudomonas aeruginosa|pseudomonas
fusarium|fusariosis
scedosporium|scedosporiosis|pseudallescheria boydii
blastomycosis|blastomyces
paracoccidioidomycosis
sporotrichosis|disseminated sporotrichosis
cmv colitis
cmv esophagitis
cmv pneumonitis
herpes simplex esophagitis|hsv esophagitis
candida vulvovaginitis|recurrent vaginal candidiasis
candidemia
invasive candidiasis|disseminated candidiasis
hepatosplenic candidiasis
cryptococcal pneumonia
toxoplasma retinochoroiditis|ocular toxoplasmosis
bk virus|bk nephropathy|bk polyomavirus nephropathy
adenovirus|disseminated adenovirus
respiratory syncytial virus|rsv
parainfluenza
human metapneumovirus
hhv 6|human herpesvirus 6
molluscum contagiosum|giant molluscum
norwegian scabies|crusted scabies
disseminated varicella
progressive varicella
hepatitis b reactivation
hepatitis c
human papillomavirus|hpv
ecthyma gangrenosum
neutropenic enterocolitis|typhlitis
mycobacterium kansasii
mycobacterium haemophilum
mycobacterium genavense
mycobacterium abscessus
rhodococcus equi|rhodococcus
legionella|legionnaires disease
cytomegalovirus encephalitis
varicella zoster encephalitis
acute retinal necrosis|progressive outer retinal necrosis|porn
chagas reactivation|trypanosoma cruzi
visceral leishmaniasis|leishmaniasis|kala azar
giardia|giardiasis
entamoeba histolytica|amebiasis
acanthamoeba|granulomatous amebic encephalitis
balamuthia
trichosporon|trichosporonosis
geotrichum
malassezia fungemia|malassezia
pneumocystis extrapulmonary
emergomyces|emmonsiosis
cryptococcal antigenemia
burkholderia cepacia
stenotrophomonas maltophilia|stenotrophomonas
vancomycin resistant enterococcus|vre
mrsa|methicillin resistant staphylococcus aureus
cmv mononucleosis
bacillary peliosis|peliosis hepatis
mycobacterium marinum
leprosy|hansen disease
toxoplasma myocarditis
cryptosporidial cholangitis|aids cholangiopathy
`, "2026-11-06");

P("Name a skin or soft tissue infection","micro","",`
cellulitis
abscess|skin abscess|boil|furuncle
impetigo|school sores
mrsa|mrsa skin infection|methicillin resistant staphylococcus aureus
athlete's foot|tinea pedis
ringworm|tinea corporis
necrotizing fasciitis|flesh eating bacteria|nec fasc
erysipelas|st anthony's fire
folliculitis
carbuncle
paronychia
shingles|herpes zoster
cold sore|herpes labialis|oral herpes
warts|common warts|verruca vulgaris|verruca
jock itch|tinea cruris
infected wound|wound infection
diabetic foot infection|diabetic foot ulcer infection
sty|stye|hordeolum
scabies
lice|pediculosis|head lice
pilonidal abscess|infected pilonidal cyst
hidradenitis suppurativa
infected sebaceous cyst|infected epidermoid cyst
molluscum contagiosum|molluscum
ecthyma
staphylococcal scalded skin syndrome|ssss|scalded skin syndrome
gas gangrene|clostridial myonecrosis|myonecrosis
fournier gangrene|fournier's gangrene
pyomyositis
lymphangitis
erythrasma
intertrigo|candidal intertrigo
cutaneous candidiasis|candida skin infection
tinea capitis|scalp ringworm
tinea versicolor|pityriasis versicolor
onychomycosis|nail fungus|tinea unguium
tinea faciei
tinea manuum
kerion
herpetic whitlow
herpes gladiatorum
eczema herpeticum|kaposi varicelliform eruption
chickenpox|varicella
hand foot and mouth disease
orf|ecthyma contagiosum
milker's nodules
cutaneous anthrax|anthrax
erysipeloid|erysipelothrix
vibrio vulnificus|vibrio vulnificus infection
aeromonas
mycobacterium marinum|fish tank granuloma|swimming pool granuloma
cat scratch disease|bartonella
bacillary angiomatosis
sporotrichosis|rose gardener's disease
cutaneous leishmaniasis|leishmaniasis
leprosy|hansen disease
cutaneous tuberculosis|lupus vulgaris|scrofuloderma
buruli ulcer|mycobacterium ulcerans
mycetoma|madura foot
chromoblastomycosis
blastomycosis
nocardiosis|cutaneous nocardiosis
actinomycosis
syphilis|chancre|secondary syphilis
chancroid
ecthyma gangrenosum
blistering distal dactylitis
perianal streptococcal dermatitis|perianal strep
pitted keratolysis
trichomycosis axillaris
hot tub folliculitis|pseudomonas folliculitis
pseudofolliculitis barbae|razor bumps
sycosis barbae
periorbital cellulitis|preseptal cellulitis
orbital cellulitis
mastitis|breast abscess
animal bite infection|dog bite infection|cat bite infection|pasteurella
human bite infection|fight bite|eikenella
felon
septic bursitis|olecranon bursitis
tenosynovitis|flexor tenosynovitis|infectious tenosynovitis
surgical site infection|ssi
infected pressure ulcer|infected bedsore
infected burn|burn wound infection
infected tattoo
infected piercing
cutaneous larva migrans|creeping eruption
myiasis
tungiasis
cutaneous diphtheria
tularemia|ulceroglandular tularemia
glanders
melioidosis
rat bite fever
lyme disease|erythema migrans
rocky mountain spotted fever
rickettsialpox
scarlet fever
toxic shock syndrome
necrotizing soft tissue infection
synergistic gangrene|meleney ulcer
ludwig angina|ludwig's angina
pyoderma
streptococcal pyoderma
infectious eczematoid dermatitis
dermatophytosis|tinea|dermatophyte infection
majocchi granuloma
tinea incognito
piedra
tinea nigra
mucormycosis|cutaneous mucormycosis
aspergillosis|cutaneous aspergillosis
fusarium
plantar warts|verruca plantaris
flat warts|verruca plana
genital warts|condyloma acuminata
monkeypox|mpox
smallpox|variola
cowpox
scrub typhus|eschar
vaccinia
infected ingrown toenail|ingrown toenail|onychocryptosis
omphalitis
botryomycosis
`, "2026-11-06");

P("Name a cause of meningitis or encephalitis","micro","",`
streptococcus pneumoniae|pneumococcus|pneumococcal meningitis|s pneumoniae
neisseria meningitidis|meningococcus|meningococcal meningitis|n meningitidis
enterovirus|enteroviral meningitis|coxsackievirus|echovirus
herpes simplex virus|hsv|hsv 1|herpes encephalitis|hsv encephalitis
haemophilus influenzae|h influenzae|hib|haemophilus influenzae type b
group b streptococcus|gbs|streptococcus agalactiae
listeria monocytogenes|listeria
escherichia coli|e coli|e coli k1
west nile virus|wnv
tuberculosis|tuberculous meningitis|tb meningitis|mycobacterium tuberculosis
cryptococcus neoformans|cryptococcus|cryptococcal meningitis
viral meningitis|aseptic meningitis
bacterial meningitis
hsv 2|herpes simplex virus 2|mollaret meningitis
varicella zoster virus|vzv
mumps
measles|subacute sclerosing panencephalitis|sspe
rabies
hiv|hiv meningitis
syphilis|neurosyphilis|treponema pallidum
lyme disease|borrelia burgdorferi|lyme meningitis|neuroborreliosis
naegleria fowleri|brain eating amoeba|primary amebic meningoencephalitis
toxoplasmosis|toxoplasma gondii|toxoplasma encephalitis
anti nmda receptor encephalitis|autoimmune encephalitis|nmda receptor encephalitis
staphylococcus aureus|staph aureus
coagulase negative staphylococcus|staphylococcus epidermidis|shunt infection
pseudomonas aeruginosa|pseudomonas
klebsiella
cytomegalovirus|cmv
epstein barr virus|ebv
hhv 6|human herpesvirus 6
lymphocytic choriomeningitis virus|lcmv
eastern equine encephalitis|eee
western equine encephalitis|wee
venezuelan equine encephalitis|vee
st louis encephalitis
la crosse virus|california encephalitis
powassan virus
japanese encephalitis
tick borne encephalitis
zika virus
dengue
chikungunya
nipah virus
hendra virus
influenza
covid 19|sars cov 2
adenovirus
parechovirus
polio|poliovirus
enterovirus 71|ev71
jc virus|progressive multifocal leukoencephalopathy|pml
prion disease|creutzfeldt jakob disease|cjd
coccidioides|coccidioidomycosis|coccidioidal meningitis
histoplasma|histoplasmosis
blastomyces|blastomycosis
candida|candida meningitis
aspergillus
mucormycosis|rhinocerebral mucormycosis
exserohilum|fungal meningitis outbreak
balamuthia mandrillaris
acanthamoeba|granulomatous amebic encephalitis
angiostrongylus cantonensis|eosinophilic meningitis|rat lungworm
baylisascaris
gnathostoma
taenia solium|neurocysticercosis|cysticercosis
trypanosoma brucei|african sleeping sickness|sleeping sickness
plasmodium falciparum|cerebral malaria|malaria
rocky mountain spotted fever|rickettsia rickettsii
ehrlichiosis|ehrlichia
anaplasmosis
typhus
q fever|coxiella burnetii
leptospirosis
brucellosis
bartonella|cat scratch disease
mycoplasma pneumoniae
whipple disease|tropheryma whipplei
nocardia
actinomyces
salmonella
citrobacter koseri|citrobacter
cronobacter sakazakii|enterobacter sakazakii
acinetobacter
serratia
streptococcus suis
viridans streptococci
enterococcus
anaerobes|bacteroides
cutibacterium acnes|propionibacterium acnes
neonatal meningitis
post neurosurgical meningitis
ventriculitis
basilar skull fracture|csf leak
otitis media
sinusitis
mastoiditis
brain abscess
endocarditis
nsaids|drug induced aseptic meningitis|ibuprofen
trimethoprim sulfamethoxazole|tmp smx
ivig|intravenous immunoglobulin
lamotrigine
carcinomatous meningitis|leptomeningeal carcinomatosis|neoplastic meningitis
sarcoidosis|neurosarcoidosis
behcet disease
systemic lupus erythematosus|lupus|lupus cerebritis
vogt koyanagi harada|vkh
paraneoplastic limbic encephalitis|limbic encephalitis
anti lgi1 encephalitis|lgi1
acute disseminated encephalomyelitis|adem
hashimoto encephalopathy|steroid responsive encephalopathy
rasmussen encephalitis
epidural abscess
chemical meningitis|ruptured dermoid cyst
`, "2026-11-06");

P("Name a lab stain or culture medium","micro","",`
gram stain
blood agar|sheep blood agar
chocolate agar
macconkey agar
acid fast stain|ziehl neelsen|ziehl neelsen stain|afb stain
india ink
thayer martin agar|thayer martin|modified thayer martin
lowenstein jensen|lowenstein jensen medium|lj medium
hematoxylin and eosin|h and e|he stain
periodic acid schiff|pas
silver stain
giemsa stain|giemsa
wright stain|wright giemsa
congo red
eosin methylene blue|emb agar|emb
sabouraud agar|sabouraud dextrose agar|sda
potassium hydroxide|koh prep|koh
methenamine silver|gomori methenamine silver|gms|grocott
charcoal yeast extract|bcye|buffered charcoal yeast extract
tellurite agar|potassium tellurite
loeffler medium|loeffler serum
bordet gengou agar|bordet gengou
regan lowe
thiosulfate citrate bile salts sucrose|tcbs
eaton agar
mueller hinton agar|mueller hinton
trichrome stain|masson trichrome
prussian blue|perls stain|iron stain
auramine rhodamine|auramine
kinyoun stain|modified acid fast
calcofluor white
mucicarmine
dieterle stain
warthin starry
fontana masson|fontana stain
immunofluorescence|direct fluorescent antibody|dfa
reticulin stain
oil red o
sudan black
myeloperoxidase stain|mpo stain
tartrate resistant acid phosphatase|trap stain
leukocyte alkaline phosphatase|lap stain
esterase stain|nonspecific esterase
crystal violet
safranin
methylene blue
new methylene blue|supravital stain|reticulocyte stain
toluidine blue
alcian blue
von kossa
alizarin red
elastic stain|verhoeff van gieson|vvg
van gieson
luxol fast blue
nissl stain|cresyl violet
golgi stain
bielschowsky stain
gram iodine|lugol iodine|iodine stain
wet mount|saline wet mount
tzanck smear
papanicolaou stain|pap stain
diff quik|diff quick
leishman stain
field stain
fite stain|fite faraco
steiner stain
mucin stain
spore stain|schaeffer fulton|malachite green
capsule stain|negative stain
flagella stain
nigrosin
lactophenol cotton blue
xylose lysine deoxycholate|xld agar
hektoen enteric agar|hektoen
salmonella shigella agar|ss agar
selenite broth
cefsulodin irgasan novobiocin|cin agar
campy agar|skirrow medium|campylobacter agar
sorbitol macconkey|smac
mannitol salt agar|msa
phenylethyl alcohol agar|pea agar
colistin nalidixic acid agar|cna agar
cetrimide agar
middlebrook agar|middlebrook 7h10|middlebrook 7h11|middlebrook
mgit|mycobacteria growth indicator tube
brain heart infusion|bhi
thioglycolate broth|thioglycollate
tryptic soy agar|trypticase soy
nutrient agar
blood culture bottle|blood culture
anaerobic blood agar|brucella agar
chromogenic agar|chromagar
cystine tellurite blood agar
cycloserine cefoxitin fructose agar|ccfa
new york city agar|nyc agar
martin lewis agar
todd hewitt broth|lim broth
bile esculin agar
dnase agar
urea agar|christensen urea
triple sugar iron|tsi
simmons citrate
sim medium
lysine iron agar
motility medium
mycosel|mycobiotic agar
dermatophyte test medium|dtm
cornmeal agar
birdseed agar|niger seed agar
inhibitory mold agar
diamond medium
nnn medium|novy macneal nicolle
hela cells|cell culture
mccoy cells
shell vial culture
embryonated egg
`, "2026-11-06");

P("Name an autoantibody","tests","",`
antinuclear antibody|ana
anti double stranded dna|anti dsdna|dsdna
rheumatoid factor|rf
anti ccp|anti cyclic citrullinated peptide|acpa|anti citrullinated protein antibody
anti smith|anti sm
anti thyroid peroxidase|anti tpo|thyroid peroxidase antibody|tpo antibody|antimicrosomal antibody
anti ssa|anti ro|ro antibody|ssa
anti ssb|anti la|la antibody|ssb
anti histone|antihistone
anti centromere|anticentromere
anti scl 70|anti topoisomerase|anti topoisomerase i|scl 70
anti jo 1|jo 1
anti tissue transglutaminase|anti ttg|ttg iga|tissue transglutaminase
anti endomysial|endomysial antibody|ema
anti gliadin|deamidated gliadin peptide|dgp
c anca|pr3 anca|anti proteinase 3|anti pr3
p anca|mpo anca|anti myeloperoxidase|anti mpo
anca|antineutrophil cytoplasmic antibody
antiphospholipid antibody|antiphospholipid
lupus anticoagulant
anticardiolipin|anticardiolipin antibody|acl
anti beta 2 glycoprotein i|anti beta2 glycoprotein
anti glomerular basement membrane|anti gbm
acetylcholine receptor antibody|anti achr|anti acetylcholine receptor
anti musk|musk antibody
anti lrp4
anti voltage gated calcium channel|anti vgcc|vgcc antibody
anti tsh receptor|thyroid stimulating immunoglobulin|tsi|trab|tsh receptor antibody
anti thyroglobulin|thyroglobulin antibody|tgab
anti mitochondrial|ama|antimitochondrial antibody
anti smooth muscle|asma|smooth muscle antibody
anti lkm 1|anti liver kidney microsomal|lkm
anti soluble liver antigen|anti sla
anti parietal cell|parietal cell antibody
anti intrinsic factor|intrinsic factor antibody
anti gad|anti gad65|glutamic acid decarboxylase antibody|gad antibody
islet cell antibody|ica
insulin autoantibody|anti insulin
anti ia 2|ia 2 antibody
zinc transporter 8|znt8
anti u1 rnp|anti rnp|u1 rnp
anti phospholipase a2 receptor|anti pla2r|pla2r
anti desmoglein|anti desmoglein 3|anti desmoglein 1|desmoglein
anti hemidesmosome|anti bp180|anti bp230|bullous pemphigoid antibody
anti type vii collagen|anti collagen vii
anti nmda receptor|nmda receptor antibody
anti aquaporin 4|aqp4|nmo igg
anti mog|mog antibody
anti hu|anna 1
anti yo|pca 1
anti ri|anna 2
anti ma2|anti ta
anti amphiphysin
anti cv2|anti crmp5
anti lgi1
anti caspr2
anti gaba b receptor
anti ampa receptor
anti glycine receptor
anti recoverin
anti gq1b
anti gm1
anti mag|anti myelin associated glycoprotein
anti hmgcr
anti srp|anti signal recognition particle
anti mi 2
anti mda5
anti tif1 gamma
anti nxp2
anti sae
anti pl 7
anti pl 12
anti ej
anti oj
anti pm scl
anti rna polymerase iii
anti th to
anti fibrillarin|anti u3 rnp
anti ku
anti ribosomal p
anti c1q
anti nucleosome|anti chromatin
anti dfs70
anti saccharomyces cerevisiae|asca
anti ompc
anti cbir1
anti goblet cell
anti enterocyte
anti adrenal|21 hydroxylase antibody|anti 21 hydroxylase
anti ovarian
anti sperm|antisperm antibody
anti platelet|antiplatelet antibody
anti pf4 heparin|hit antibody|heparin pf4 antibody
warm autoantibody|warm agglutinin|warm igg autoantibody
cold agglutinin|cold autoantibody
donath landsteiner antibody
anti factor viii|factor viii inhibitor|acquired hemophilia
anti adamts13|adamts13 inhibitor
anti erythropoietin
anti interferon gamma
anti c1 esterase inhibitor
anti neutrophil|antineutrophil antibody
anti red cell
anti gp210
anti sp100
anti m2
anti thyroid hormone
anti calcium sensing receptor
anti tubular basement membrane
anti cardiac myosin
anti beta1 adrenergic receptor
anti alpha fodrin
anti carbamylated protein|anti carp
anti ra33
anti mcv|anti mutated citrullinated vimentin
anti cn1a
anti hsp
anti ganglioside
anti sulfatide
anti titin
anti ryanodine receptor
anti kelch like 11|klhl11
anti dppx
anti iglon5
anti gfap
anti dopamine 2 receptor
`, "2026-11-06");

P("Name a finding on a peripheral blood smear","tests","",`
schistocytes|helmet cells|fragmented red cells|schistocyte
target cells|codocytes
spherocytes|spherocyte
sickle cells|drepanocytes|sickled cells
blast cells|blasts
auer rods
hypersegmented neutrophils|hypersegmented polys
teardrop cells|dacrocytes|tear drop cells
howell jolly bodies
basophilic stippling
heinz bodies
bite cells|degmacytes
burr cells|echinocytes
acanthocytes|spur cells
microcytosis|microcytic cells|microcytes
macrocytosis|macrocytes|macrocytic cells
hypochromia|hypochromic cells
rouleaux|rouleaux formation
smudge cells|basket cells
atypical lymphocytes|reactive lymphocytes|downey cells
toxic granulation
dohle bodies
left shift|bandemia|band cells|bands
nucleated red blood cells|nrbcs|normoblasts
reticulocytosis|polychromasia|polychromatophilic cells
anisocytosis
poikilocytosis
elliptocytes|ovalocytes|pencil cells
stomatocytes
pappenheimer bodies
cabot rings
malaria parasites|plasmodium|ring forms|banana shaped gametocytes
babesia|maltese cross
leukoerythroblastic picture|leukoerythroblastosis
hairy cells
sezary cells
flower cells
pelger huet anomaly|pelger huet cells|pseudo pelger huet
faggot cells
platelet clumping|platelet clumps
giant platelets|macrothrombocytes
thrombocytopenia|low platelets
thrombocytosis
eosinophilia|eosinophils
basophilia|basophils
neutrophilia
lymphocytosis
monocytosis
neutropenia
lymphopenia
agglutination|red cell agglutination
cold agglutinins
microspherocytes
keratocytes|horn cells
blister cells
ghost cells
irregularly contracted cells
xerocytes
knizocytes
crenated cells
hemoglobin c crystals
plasma cells|circulating plasma cells
plasmacytoid lymphocytes
myelocytes|metamyelocytes|immature granulocytes
promyelocytes
megaloblasts
hypogranular neutrophils|dysplastic neutrophils
dutcher bodies
russell bodies
mott cells
lymphoblasts
myeloblasts
monoblasts
chediak higashi granules|giant granules
alder reilly anomaly
may hegglin anomaly
gray platelets|grey platelets
platelet satellitism
cryoglobulin
microfilariae
trypanosomes
borrelia|relapsing fever spirochetes
leishmania
histoplasma
ehrlichia morulae|morulae|anaplasma
bacteria on smear|bacteremia on smear
candida on smear|yeast on smear
reed sternberg cells
cleaved lymphocytes|buttock cells
large granular lymphocytes
prolymphocytes
leukemic cells
erythrophagocytosis
dimorphic picture|dual population
hemoglobin h inclusions|golf ball cells
siderocytes
leukocytosis
leukopenia
`, "2026-11-06");

/* ---- NEW STANDARD DAILY PROMPTS: MEDICINE (batch 2026-11-04) ---- */
P("Name a bedside procedure","tests","",`
iv placement|iv insertion|peripheral iv|piv|iv start|cannulation|peripheral iv cannulation
blood draw|venipuncture|phlebotomy
lumbar puncture|spinal tap|lp
foley catheter|urinary catheterization|foley placement|bladder catheterization|catheterisation
arterial blood gas|abg|arterial puncture|arterial stick
central line|central venous catheter|central line placement|cvc|central venous line
intubation|endotracheal intubation|ett placement
paracentesis|abdominal tap
thoracentesis|pleural tap
nasogastric tube|ng tube|ng tube placement|nasogastric tube placement
arterial line|art line|a line|arterial catheter
cpr|cardiopulmonary resuscitation|chest compressions
suturing|laceration repair|stitches|sutures
incision and drainage|i and d|abscess drainage
chest tube|tube thoracostomy|chest drain
ekg|ecg|electrocardiogram|12 lead ecg|12 lead ekg
cardioversion|synchronized cardioversion|electrical cardioversion
defibrillation|defib
fingerstick glucose|fingerstick|point of care glucose|capillary blood glucose|accucheck
bladder scan|bladder ultrasound|post void residual|pvr
arthrocentesis|joint aspiration|joint tap
joint injection|steroid injection|intra articular injection
pericardiocentesis
bone marrow biopsy|bone marrow aspiration|bone marrow aspirate
skin biopsy|punch biopsy|shave biopsy
straight catheterization|in and out catheterization|intermittent catheterization|straight cath
nasal packing|anterior nasal packing|epistaxis packing
splinting|splint application
reduction|closed reduction|fracture reduction|dislocation reduction|joint reduction
wound debridement|debridement
wound packing
dressing change|wound care
staple removal
suture removal
nail removal|toenail removal|nail avulsion|partial nail avulsion
ingrown toenail removal|wedge resection
cryotherapy|liquid nitrogen
foreign body removal
ear irrigation|ear lavage|cerumen removal|earwax removal|cerumen disimpaction
digital rectal exam|dre
fecal disimpaction|disimpaction
enema
pelvic exam|speculum exam|bimanual exam
pap smear|pap test|cervical cytology
iud insertion|intrauterine device insertion
nexplanon insertion|contraceptive implant insertion|implant insertion
endometrial biopsy
nerve block|regional nerve block|digital block|digital nerve block
local anesthesia|local anesthetic injection|lidocaine injection
ultrasound guided iv|ultrasound guided peripheral iv|usgiv
intraosseous line|io line|io access|intraosseous access|intraosseous needle
bag valve mask ventilation|bag mask ventilation|bvm|bagging
oral airway|oropharyngeal airway|opa
nasal airway|nasopharyngeal airway|npa|nasal trumpet
laryngeal mask airway|lma|supraglottic airway
cricothyrotomy|cricothyroidotomy|surgical airway|needle cricothyrotomy
needle decompression|needle thoracostomy
tracheostomy|bedside tracheostomy|percutaneous tracheostomy|trach
tracheostomy change|trach change
extubation
suctioning|tracheal suctioning|endotracheal suctioning|oral suctioning
bronchoscopy|bedside bronchoscopy
bronchoalveolar lavage|bal
transcutaneous pacing|external pacing
transvenous pacing|transvenous pacemaker
pulmonary artery catheter|swan ganz|swan ganz catheter|right heart catheter
picc line|peripherally inserted central catheter
midline catheter|midline
dialysis catheter|hemodialysis catheter|quinton catheter|trialysis catheter
temporary dialysis line
orogastric tube|og tube
nasojejunal tube|nj tube|feeding tube placement|dobhoff|dobhoff tube
gastric lavage|stomach pumping|stomach pump
blakemore tube|sengstaken blakemore tube|minnesota tube|balloon tamponade
peg tube replacement|g tube replacement|gastrostomy tube replacement
rectal tube|flexiseal|fecal management system
suprapubic catheter change|suprapubic catheter
coude catheter
three way catheter|bladder irrigation|continuous bladder irrigation|cbi
urine culture collection|clean catch
blood culture|blood cultures
wound culture|wound swab
throat swab|rapid strep test|strep swab
nasopharyngeal swab|np swab|flu swab|covid swab
vaginal swab|wet mount
tzanck smear|tzanck test
koh prep|potassium hydroxide prep|skin scraping
wood lamp exam|woods lamp
fluorescein exam|fluorescein staining|eye stain
slit lamp exam
tonometry|eye pressure check|tonopen
eye irrigation|ocular irrigation|morgan lens
corneal foreign body removal|eye foreign body removal|rust ring removal
lateral canthotomy|canthotomy|cantholysis
fundoscopy|ophthalmoscopy|dilated eye exam
otoscopy|ear exam
tympanocentesis
myringotomy
peritonsillar abscess drainage|peritonsillar abscess aspiration|quinsy drainage
nasal cautery|silver nitrate cautery|chemical cautery
nasolaryngoscopy|flexible laryngoscopy|nasopharyngoscopy|fiberoptic laryngoscopy
anoscopy
thrombosed hemorrhoid excision|hemorrhoid excision|external hemorrhoid incision
hemorrhoid banding|rubber band ligation
pilonidal cyst drainage|pilonidal abscess drainage
paronychia drainage
felon drainage
subungual hematoma drainage|nail trephination|trephination
fishhook removal
ring removal|ring cutting
tick removal
excisional biopsy|excision|skin excision|cyst excision
mole removal|lesion removal
electrocautery|electrodesiccation|ed and c|electrodessication and curettage
curettage
cyst drainage
wart removal|wart freezing
skin tag removal
hair tourniquet removal
burn debridement|escharotomy
fasciotomy
compartment pressure measurement|compartment pressure check
casting|cast application
cast removal
shoulder reduction|shoulder dislocation reduction
hip reduction|hip dislocation reduction
nursemaid elbow reduction|radial head subluxation reduction
finger dislocation reduction
patellar reduction|patella reduction
traction|skeletal traction|traction pin
ankle brachial index|abi
doppler|doppler pulse check|bedside doppler
pulse oximetry|pulse ox|sats|oxygen saturation
peak flow|peak expiratory flow
spirometry
orthostatic vital signs|orthostatics
pocus|point of care ultrasound|bedside ultrasound
fast exam|fast|focused assessment with sonography for trauma|efast
bedside echo|bedside echocardiogram|focused cardiac ultrasound
lung ultrasound
nerve conduction|emg
tilt table test
blood transfusion|transfusion
plasmapheresis|plasma exchange
therapeutic phlebotomy
heel stick|heel prick|newborn screen
circumcision|neonatal circumcision
umbilical line|umbilical catheter|umbilical venous catheter|uvc|umbilical arterial catheter|uac
exchange transfusion
suprapubic aspiration|suprapubic tap
neonatal intubation
amniotomy|artificial rupture of membranes|arom
fetal scalp electrode|scalp electrode
intrauterine pressure catheter|iupc
membrane sweep|membrane stripping|stripping membranes
cervical exam|cervical check
perineal laceration repair|episiotomy repair
episiotomy
vaginal delivery
manual placenta removal|manual removal of placenta
bakri balloon|uterine balloon tamponade
culdocentesis
bartholin cyst drainage|word catheter|bartholin abscess drainage
colposcopy
cervical biopsy
leep|loop electrosurgical excision procedure
pessary fitting|pessary insertion
mammotome|breast biopsy
fine needle aspiration|fna
core needle biopsy|core biopsy
thyroid biopsy|thyroid fna
lymph node biopsy
liver biopsy
kidney biopsy|renal biopsy
paracentesis drain|pigtail catheter|pigtail drain
pleurx catheter|tunneled pleural catheter
pleurodesis
sputum induction|induced sputum
allergy skin testing|skin prick test|scratch test
ppd placement|tb skin test|tuberculin skin test|mantoux test
vaccination|vaccine administration|immunization
intramuscular injection|im injection|shot
subcutaneous injection|subq injection|sc injection
intradermal injection
trigger point injection
epidural|epidural placement|epidural catheter
spinal anesthesia|spinal block
epidural blood patch|blood patch
ventriculostomy|evd|external ventricular drain
icp monitor|bolt|intracranial pressure monitor
shunt tap|vp shunt tap
burr hole
apnea test
caloric testing|cold calorics|oculovestibular reflex test
dix hallpike|dix hallpike maneuver
epley maneuver|canalith repositioning
tensilon test|edrophonium test
ice pack test
lumbar drain
omt|osteopathic manipulative treatment|osteopathic manipulation
joint manipulation|manipulation
cardiac massage|open cardiac massage
thoracotomy|resuscitative thoracotomy|ed thoracotomy|clamshell thoracotomy
pericardial window
diagnostic peritoneal lavage|dpl
rebound tenderness exam
sigmoidoscopy|flexible sigmoidoscopy
sigmoid volvulus decompression|rectal tube decompression
hernia reduction|incarcerated hernia reduction
prolapse reduction|rectal prolapse reduction
paraphimosis reduction
priapism aspiration|corporal aspiration
testicular detorsion|manual detorsion
urethral dilation
cystoscopy|bedside cystoscopy
bladder irrigation|manual bladder irrigation
nephrostomy tube exchange
dental block|inferior alveolar nerve block
tooth reimplantation|avulsed tooth reimplantation
tongue tie release|frenotomy
jaw reduction|tmj reduction|mandible dislocation reduction
auricular hematoma drainage|ear hematoma drainage
nasal foreign body removal|positive pressure technique|mothers kiss
ear foreign body removal
`, "2026-11-06");

P("Name a clinical scoring system or decision rule","tests","",`
glasgow coma scale|gcs|glasgow coma score
apgar score|apgar
wells score|wells criteria|wells score for pe|wells score for dvt
cha2ds2 vasc|chads vasc|chads2 vasc|cha2ds2vasc
chads2|chads 2
has bled|hasbled
curb 65|curb65|crb 65
perc rule|perc|pulmonary embolism rule out criteria
heart score|heart pathway
timi score|timi risk score
grace score|grace risk score
nyha classification|new york heart association|nyha class
child pugh score|child pugh|child turcotte pugh
meld score|meld|model for end stage liver disease|meld na
ranson criteria|ransons criteria
bisap score|bisap
apache ii|apache|apache score
sofa score|sofa|sequential organ failure assessment
qsofa|quick sofa
sirs criteria|sirs
news score|news2|national early warning score
mews|modified early warning score
centor criteria|centor score|mcisaac score|modified centor
ottawa ankle rules|ottawa ankle
ottawa knee rules|ottawa knee
canadian c spine rule|canadian cervical spine rule
nexus criteria|nexus
canadian ct head rule|canadian head ct rule
pecarn|pecarn rule|pecarn head injury rule
nihss|nih stroke scale|national institutes of health stroke scale
abcd2 score|abcd2
mini mental state exam|mmse|mini mental
moca|montreal cognitive assessment
phq 9|phq9|patient health questionnaire
phq 2
gad 7|gad7
cage questionnaire|cage
audit|audit c|alcohol use disorders identification test
ciwa|ciwa ar|clinical institute withdrawal assessment
cows|clinical opiate withdrawal scale
braden scale|braden score
morse fall scale|morse score
apri score|apri
fib 4|fib4
maddrey discriminant function|maddrey score|discriminant function
glasgow blatchford score|blatchford score|gbs
rockall score
alvarado score|alvarado
pediatric appendicitis score|pas
bishop score
gail model|gail score
frax|frax score
ascvd risk score|pooled cohort equations|ascvd risk calculator
framingham risk score|framingham
qrisk|qrisk3
duke criteria|modified duke criteria
jones criteria|jones
light criteria|lights criteria
mcdonald criteria
dsm 5 criteria|dsm criteria
rome iv criteria|rome criteria
fever pain score|feverpain
caprini score|caprini
padua score|padua prediction score
khorana score
geneva score|revised geneva score
years algorithm|years criteria
san francisco syncope rule
canadian syncope risk score
pesi|pesi score|simplified pesi|spesi
revised cardiac risk index|rcri|lee index
goldman index|goldman criteria
asa classification|asa physical status|asa score
mallampati score|mallampati classification|mallampati
lemon|lemon assessment
cormack lehane|cormack lehane grade
stop bang|stopbang
epworth sleepiness scale|epworth
berlin questionnaire
timed up and go|tug test
katz index|katz adl
lawton iadl|lawton scale
karnofsky performance status|karnofsky|kps
ecog performance status|ecog|zubrod
palliative performance scale|pps
fast scale|functional assessment staging
gleason score|gleason grade
tnm staging|tnm
ann arbor staging|ann arbor
breslow thickness|breslow depth
clark level
bi rads|birads
li rads|lirads
ti rads|tirads
pi rads|pirads
lung rads
o rads
bosniak classification|bosniak
fleischner criteria|fleischner guidelines
rule of nines|rule of 9s|wallace rule of nines
lund browder chart|lund and browder
parkland formula
baux score
injury severity score|iss
revised trauma score|rts
abc score|assessment of blood consumption
shock index
killip classification|killip class
forrester classification
tisdale score
qtc|bazett formula|bazett
sgarbossa criteria|sgarbossa
brugada criteria
vereckei algorithm
duke treadmill score
syntax score
euroscore|euroscore ii
sts score|sts risk score
hunt and hess|hunt hess scale
fisher scale|modified fisher scale|fisher grade
wfns scale|wfns grade
ich score
spetzler martin grade|spetzler martin
modified rankin scale|mrs|rankin scale
barthel index|barthel
aspects|alberta stroke program early ct score
race scale|rapid arterial occlusion evaluation
cincinnati prehospital stroke scale|cincinnati stroke scale
be fast|befast
fast stroke|face arm speech time
four score|full outline of unresponsiveness
richmond agitation sedation scale|rass
ramsay sedation scale|ramsay scale
cam icu|confusion assessment method|cam
behavioral pain scale|bps
cpot|critical care pain observation tool
flacc scale|flacc
wong baker faces|faces pain scale|wong baker
numeric pain rating scale|pain scale|nrs|0 to 10 pain scale
visual analog scale|vas
painad
westley croup score|westley score
pram score|pediatric respiratory assessment measure
pasi|psoriasis area and severity index
scorad
eular criteria|acr eular criteria|acr criteria
das28|disease activity score
cdai|crohns disease activity index
mayo score
truelove and witts|truelove witts
harvey bradshaw index
balthazar score|ct severity index
marshall score
atlanta classification|revised atlanta classification
tokyo guidelines
charlson comorbidity index|charlson index|charlson
elixhauser comorbidity index|elixhauser
kdigo staging|kdigo|kdigo criteria
rifle criteria|rifle
akin criteria
ckd epi|ckd epi equation|egfr equation
mdrd|mdrd equation
cockcroft gault|cockcroft gault equation|creatinine clearance equation
anion gap
winters formula|winter formula
osmolal gap
a a gradient|aa gradient|alveolar arterial gradient
pf ratio|p f ratio|pao2 fio2 ratio
berlin definition|berlin criteria
murray score|lung injury score
rox index
gold classification|gold criteria|gold stage
mmrc dyspnea scale|mmrc
bode index|bode
cat score|copd assessment test
act|asthma control test
psi|pneumonia severity index|port score
smart cop|smartcop
sad persons scale|sad persons
columbia suicide severity rating scale|c ssrs|columbia scale
ham d|hamilton depression rating scale|hamilton depression scale
madrs
beck depression inventory|bdi
edinburgh postnatal depression scale|epds|edinburgh scale
ybocs|yale brown obsessive compulsive scale
aims|abnormal involuntary movement scale
panss
young mania rating scale|ymrs
mdq|mood disorder questionnaire
asrs|adult adhd self report scale
vanderbilt|vanderbilt assessment scale
m chat|mchat|modified checklist for autism in toddlers
ages and stages questionnaire|asq
denver developmental screening|denver ii|ddst
tanner staging|tanner stages|sexual maturity rating
ballard score|new ballard score
silverman andersen score|silverman score
downes score
bhutani nomogram|bhutani
rochester criteria
philadelphia criteria
boston criteria
step by step approach|step by step
kocher criteria
lrinec score|lrinec
cures score
ankle brachial index|abi
ceap classification|ceap
rutherford classification
fontaine classification|fontaine
glasgow outcome scale|gos
waterlow score
norton scale
must|malnutrition universal screening tool
mna|mini nutritional assessment
nrs 2002|nutritional risk screening
sga|subjective global assessment
clinical frailty scale|cfs|rockwood frailty scale
fried frailty phenotype
stratify
hendrich ii|hendrich fall risk
morisky scale
ottawa sah rule|ottawa subarachnoid hemorrhage rule
canadian tia score
essen stroke risk score
hats|hats score
atria score
orbit score
dapt score
precise dapt
crusade score
gwtg hf score|get with the guidelines
seattle heart failure model
maggic score
hcm risk scd
heart failure stages|acc aha stages|stages a to d
cha2ds2 va
mascc score|mascc
cisne score
ipi|international prognostic index|r ipi
iss staging|international staging system
rai staging|rai stage
binet staging|binet
dipss|ipss r|ipss|international prognostic scoring system
sokal score
eutos score
nottingham grade|nottingham score|elston ellis
oncotype dx|oncotype|recurrence score
mammaprint
bloom richardson
figo staging|figo
masaoka staging|masaoka
dukes staging|dukes classification
pecarn abdominal
pecarn cervical spine
cats rule
chalice rule
new orleans criteria|new orleans head ct rule
nexus chest ct rule
nexus ii
canadian ct head
ottawa foot rule
pittsburgh knee rules|pittsburgh knee
sf 36|short form 36
eq 5d
fim|functional independence measure
gross motor function classification|gmfcs
asia impairment scale|asia scale|asia score
spurling test score
oswestry disability index|odi
womac|womac index
koos
dash score|quick dash
boston carpal tunnel questionnaire
kellgren lawrence grade|kellgren lawrence|kl grade
outerbridge classification|outerbridge
salter harris classification|salter harris
garden classification|garden
weber classification|danis weber
lauge hansen classification|lauge hansen
schatzker classification|schatzker
gustilo anderson classification|gustilo
neer classification|neer
mangled extremity severity score|mess
denver criteria|modified denver criteria
memphis criteria
abcde rule|abcde of melanoma
seven point checklist|glasgow seven point checklist
fitzpatrick scale|fitzpatrick skin type
duke activity status index|dasi
mets|metabolic equivalents
borg scale|borg rpe|rating of perceived exertion
6 minute walk test|six minute walk
zung scale|zung self rating depression scale
geriatric depression scale|gds
cornell scale|cornell scale for depression in dementia
clock drawing test|clock test
mini cog|minicog
slums|saint louis university mental status
ad8
4at
nu desc
icdsc|intensive care delirium screening checklist
glasgow alcoholic hepatitis score|gahs
lille model|lille score
abic score
west haven criteria|west haven
king college criteria|kings college criteria
clichy criteria
milan criteria
ucsf criteria
barcelona clinic liver cancer|bclc|bclc staging
rumack matthew nomogram|acetaminophen nomogram|rumack matthew
done nomogram
burch wartofsky point scale|burch wartofsky
`, "2026-11-06");

P("Name a genetic or molecular lab technique","tests","",`
pcr|polymerase chain reaction
dna sequencing|sequencing
karyotype|karyotyping|chromosome analysis|cytogenetics
fish|fluorescence in situ hybridization
western blot|immunoblot|protein blot
southern blot
northern blot
elisa|enzyme linked immunosorbent assay|eia|enzyme immunoassay
rt pcr|reverse transcriptase pcr|reverse transcription pcr
qpcr|real time pcr|quantitative pcr|rt qpcr
sanger sequencing
next generation sequencing|ngs|massively parallel sequencing|high throughput sequencing
whole genome sequencing|wgs
whole exome sequencing|wes|exome sequencing
microarray|dna microarray|gene chip|expression microarray
chromosomal microarray|cma|array cgh|comparative genomic hybridization|acgh
gel electrophoresis|agarose gel electrophoresis|electrophoresis
southwestern blot
rflp|restriction fragment length polymorphism
crispr|crispr cas9|gene editing
flow cytometry|facs|fluorescence activated cell sorting
immunohistochemistry|ihc
in situ hybridization|ish
cish|chromogenic in situ hybridization
gene therapy
cloning|molecular cloning|dna cloning
recombinant dna|recombinant dna technology
transfection
transformation|bacterial transformation
transduction|viral transduction
knockout mouse|gene knockout|knockout
knock in|knock in mouse
transgenic mouse|transgenic animal|transgenics
rna interference|rnai|sirna|small interfering rna|shrna
antisense oligonucleotide|aso
restriction enzyme digestion|restriction digest|restriction enzymes
ligation|dna ligation
plasmid prep|miniprep|plasmid isolation
dna extraction|dna isolation
rna extraction|rna isolation
nanodrop|spectrophotometry
mass spectrometry|mass spec|ms
tandem mass spectrometry|ms ms|tandem mass spec
maldi tof|maldi
lc ms|liquid chromatography mass spectrometry
hplc|high performance liquid chromatography
chromatography
protein electrophoresis|serum protein electrophoresis|spep
immunofixation|immunofixation electrophoresis|ife
hemoglobin electrophoresis|hb electrophoresis
sds page|polyacrylamide gel electrophoresis|page
2d gel electrophoresis|two dimensional gel electrophoresis
isoelectric focusing
immunoprecipitation|ip|co immunoprecipitation|co ip
chip|chromatin immunoprecipitation
chip seq
rna seq|rna sequencing|transcriptomics
single cell rna seq|scrna seq|single cell sequencing
atac seq
methylation analysis|methylation specific pcr|bisulfite sequencing
multiplex pcr
nested pcr
digital pcr|ddpcr|droplet digital pcr
allele specific pcr|arms pcr
mlpa|multiplex ligation dependent probe amplification
linkage analysis
gwas|genome wide association study
snp array|snp genotyping|genotyping
str analysis|short tandem repeat analysis|dna fingerprinting|dna profiling
paternity testing
triplet repeat analysis|repeat expansion testing|repeat primed pcr
hla typing|tissue typing
liquid biopsy|cell free dna|cfdna|ctdna
nipt|non invasive prenatal testing|cell free fetal dna|nipt testing
amniocentesis
chorionic villus sampling|cvs
preimplantation genetic testing|pgt|pgd|preimplantation genetic diagnosis
carrier screening|carrier testing
newborn screening
genetic testing
pharmacogenomic testing|pharmacogenetics|pgx
tumor genomic profiling|tumor sequencing|foundationone|comprehensive genomic profiling
microsatellite instability testing|msi testing|msi
mismatch repair immunohistochemistry|mmr ihc
brca testing|brca1 brca2 testing
bcr abl pcr|bcr abl testing
jak2 testing|jak2 v617f
egfr mutation testing
kras testing
her2 testing|her2 fish
alk testing
cytogenetic banding|g banding|giemsa banding
spectral karyotyping|sky
q banding
optical genome mapping
long read sequencing|nanopore sequencing|pacbio|third generation sequencing
pyrosequencing
illumina sequencing|sequencing by synthesis
shotgun sequencing
metagenomic sequencing|metagenomics|mngs
16s rrna sequencing|16s sequencing
nucleic acid amplification test|naat|nucleic acid amplification
tma|transcription mediated amplification
lamp|loop mediated isothermal amplification
bdna|branched dna assay
hybrid capture
viral load testing|viral load
genexpert|xpert mtb rif
gene expression profiling
reporter gene assay|luciferase assay|luciferase reporter assay
gfp tagging|green fluorescent protein|fluorescent tagging
confocal microscopy
fluorescence microscopy|immunofluorescence
direct immunofluorescence|dif
indirect immunofluorescence|iif
electron microscopy|em
radioimmunoassay|ria
chemiluminescence immunoassay|clia
lateral flow assay|rapid antigen test|lateral flow
agglutination assay|latex agglutination
complement fixation test
hemagglutination inhibition
neutralization assay
plaque assay
cell culture|tissue culture
organoids|organoid culture
stem cell culture|ipsc|induced pluripotent stem cells
hybridoma|hybridoma technology|monoclonal antibody production
phage display
yeast two hybrid
site directed mutagenesis|mutagenesis
pcr mutagenesis
dna footprinting
electrophoretic mobility shift assay|emsa|gel shift assay
nuclease protection assay
ribosome profiling
proteomics
metabolomics
genomics
epigenomics
bioinformatics
sequence alignment|blast
cdna synthesis|cdna library
genomic library
southern hybridization
dot blot
slot blot
colony hybridization
x inactivation analysis|humara assay|clonality assay
t cell receptor gene rearrangement|tcr gene rearrangement
immunoglobulin gene rearrangement|igh rearrangement|b cell clonality
mrd testing|minimal residual disease|measurable residual disease
clonoseq
chimerism analysis
crispr screen
base editing
prime editing
zinc finger nucleases|zfn
talens|talen
gene drive
sirna knockdown|knockdown
morpholino
mrna vaccine technology|mrna synthesis|in vitro transcription
viral vectors|aav vector|lentiviral vector
car t cell manufacturing|car t
dna barcoding
microdissection|laser capture microdissection
fret|forster resonance energy transfer
x ray crystallography|crystallography
nmr spectroscopy|nuclear magnetic resonance
cryo em|cryo electron microscopy
circular dichroism
pulse field gel electrophoresis|pfge
mlst|multilocus sequence typing
spoligotyping
ribotyping
whole genome amplification
rolling circle amplification
emulsion pcr
bridge amplification
hot start pcr
touchdown pcr
colony pcr
inverse pcr
race pcr|rapid amplification of cdna ends
methylation array
sister chromatid exchange
chromosome breakage test|deb test|diepoxybutane test|mitomycin c test
comet assay
ames test
tunel assay
mtt assay
cell viability assay
annexin v staining
`, "2026-11-06");

P("Name a biostatistics or epidemiology term","care","",`
sensitivity
specificity
positive predictive value|ppv
negative predictive value|npv
incidence
prevalence
p value
confidence interval|ci|95 percent confidence interval
relative risk|risk ratio|rr
odds ratio|or
number needed to treat|nnt
number needed to harm|nnh
absolute risk reduction|arr|risk difference
relative risk reduction|rrr
attributable risk
mean|average
median
mode
standard deviation|sd
variance
standard error|standard error of the mean|sem
type i error|alpha error|false positive error
type ii error|beta error|false negative error
power|statistical power
null hypothesis
alternative hypothesis
bias
selection bias
recall bias
confounding|confounder|confounding variable
lead time bias
length time bias
observer bias|detection bias
hawthorne effect
pygmalion effect|rosenthal effect
measurement bias|information bias
publication bias
attrition bias|loss to follow up
berkson bias
healthy worker effect
volunteer bias|self selection bias
sampling bias
late look bias
procedure bias|performance bias
response bias
reporting bias
interviewer bias
misclassification bias
spectrum bias
verification bias|work up bias
immortal time bias
survivorship bias
randomized controlled trial|rct|randomised controlled trial
cohort study|prospective cohort|retrospective cohort|longitudinal study
case control study
cross sectional study|prevalence study
case report
case series
ecological study
meta analysis
systematic review
crossover study|crossover trial
cluster randomized trial
pragmatic trial
non inferiority trial|noninferiority
equivalence trial
superiority trial
phase i trial|phase 1
phase ii trial|phase 2
phase iii trial|phase 3
phase iv trial|phase 4|postmarketing surveillance
blinding|double blind|single blind|masking
randomization|randomisation
allocation concealment
placebo
placebo effect
nocebo effect
intention to treat|itt|intention to treat analysis
per protocol analysis|as treated analysis
control group
case fatality rate|case fatality ratio
mortality rate|death rate
morbidity
crude mortality rate
age adjusted rate|age standardization|standardized mortality ratio|smr
infant mortality rate
maternal mortality ratio|maternal mortality rate
neonatal mortality rate
perinatal mortality rate
life expectancy
years of potential life lost|ypll
qaly|quality adjusted life year
daly|disability adjusted life year
attack rate
secondary attack rate
basic reproduction number|r0|r naught
effective reproduction number|rt|re
herd immunity|community immunity
herd immunity threshold
epidemic
pandemic
endemic
outbreak
cluster
sporadic
incubation period
latent period
serial interval
epidemic curve|epi curve
index case|patient zero|primary case
contact tracing
surveillance|disease surveillance
passive surveillance
active surveillance
sentinel surveillance
notifiable disease|reportable disease
quarantine
isolation
point source outbreak
propagated outbreak
common source outbreak
vector
reservoir
fomite
zoonosis
chain of infection
epidemiologic triad|epidemiological triangle|agent host environment
web of causation
bradford hill criteria|hill criteria
causation|causality
correlation
association
dose response|dose response relationship|biological gradient
temporality
statistical significance
clinical significance
effect size
cohen d
likelihood ratio|lr
positive likelihood ratio|lr plus
negative likelihood ratio|lr minus
pretest probability
posttest probability
receiver operating characteristic|roc curve|roc
area under the curve|auc|c statistic
cutoff|cut off point|threshold
false positive
false negative
true positive
true negative
two by two table|2x2 table|contingency table
gold standard|reference standard
accuracy
precision|reliability
validity
internal validity
external validity|generalizability
reproducibility
inter rater reliability|interrater reliability|kappa|cohen kappa
test retest reliability
cronbach alpha
normal distribution|gaussian distribution|bell curve
skewed distribution|skewness|positive skew|negative skew
bimodal distribution
kurtosis
range
interquartile range|iqr
percentile
quartile
z score|standard score
t test|student t test
paired t test
anova|analysis of variance
chi square test|chi square|chi squared
fisher exact test
mann whitney u test|mann whitney|wilcoxon rank sum
wilcoxon signed rank test
kruskal wallis test
pearson correlation|pearson r|correlation coefficient
spearman correlation|spearman rho
linear regression|regression
logistic regression
multivariate analysis|multivariable regression
cox proportional hazards|cox regression
hazard ratio|hr
kaplan meier curve|kaplan meier|survival curve|survival analysis
log rank test
censoring
coefficient of determination|r squared
parametric test
nonparametric test|non parametric test
degrees of freedom
sample size
sample size calculation|power calculation
bonferroni correction|multiple comparisons
subgroup analysis
interim analysis
stopping rule
data safety monitoring board|dsmb
forest plot
funnel plot
heterogeneity|i squared
fixed effects model
random effects model
stratification|stratified analysis
matching
restriction
propensity score|propensity score matching
instrumental variable
mendelian randomization
effect modification|interaction
collider bias
reverse causality|reverse causation
regression to the mean
ecological fallacy
simpson paradox
primary prevention
secondary prevention
tertiary prevention
quaternary prevention
screening
case definition
population at risk
denominator
numerator
rate
ratio
proportion
risk
odds
cumulative incidence
incidence density|incidence rate|person time
point prevalence
period prevalence
lifetime prevalence
person years
exposure
outcome
endpoint|primary endpoint
secondary endpoint
surrogate endpoint|surrogate outcome
composite endpoint
dependent variable|outcome variable
independent variable|predictor variable
categorical variable|nominal variable
ordinal variable
continuous variable
dichotomous variable|binary variable
interval variable
ratio variable
histogram
box plot|box and whisker plot
scatter plot
bar graph
pie chart
outlier
missing data
imputation
bootstrapping
bayes theorem|bayesian statistics
frequentist statistics
prior probability
markov model
decision analysis
cost effectiveness analysis|cost effectiveness
cost benefit analysis
cost utility analysis
icer|incremental cost effectiveness ratio
sensitivity analysis
nnt to screen|number needed to screen
pre post study|before after study
quasi experimental study
natural experiment
nested case control study
case crossover study
qualitative research
focus group
survey
questionnaire
informed consent
irb|institutional review board|ethics committee
helsinki declaration|declaration of helsinki
nuremberg code
belmont report
good clinical practice|gcp
clinicaltrials gov|trial registration
consort|consort statement
strobe
prisma
cochrane|cochrane review
level of evidence|levels of evidence|hierarchy of evidence|evidence pyramid
evidence based medicine|ebm
pico|picot
grade|grade system
absolute risk
baseline risk
risk factor
protective factor
population attributable risk|population attributable fraction|paf
attributable risk percent|attributable fraction
vaccine efficacy
vaccine effectiveness
herd effect
efficacy
effectiveness
efficiency
yield
case ascertainment
underreporting
iceberg phenomenon
latency
cohort effect
period effect
age effect
crude rate
specific rate
adjusted rate
direct standardization
indirect standardization
census
vital statistics
birth rate|crude birth rate
fertility rate|total fertility rate
dependency ratio
demographic transition
epidemiologic transition
health disparities|health inequities
social determinants of health
seroprevalence
cutoff value
youden index
`, "2026-11-06");

P("Name a patient safety or quality improvement term","care","",`
root cause analysis|rca
near miss|close call|good catch
sentinel event
adverse event
medication error|med error
never event
time out|surgical time out|universal protocol
hand hygiene|hand washing|handwashing
pdsa cycle|pdsa|plan do study act|pdca|plan do check act
fishbone diagram|ishikawa diagram|cause and effect diagram
swiss cheese model|swiss cheese
just culture
checklist|surgical safety checklist|who surgical safety checklist
sbar|situation background assessment recommendation
handoff|handover|hand off communication
two patient identifiers|patient identification|two identifiers
read back|repeat back|closed loop communication|teach back for orders
fmea|failure mode and effects analysis|failure modes and effects analysis
lean|lean methodology
six sigma|lean six sigma
run chart
control chart|statistical process control|spc
pareto chart|pareto principle|80 20 rule
process map|flowchart|process mapping|value stream map
incident report|incident reporting|occurrence report|event report
safety culture|culture of safety
high reliability organization|hro|high reliability
crew resource management|crm
teamstepps
huddle|safety huddle
debrief|debriefing
briefing
cus words|cus|concerned uncomfortable safety issue
two challenge rule
stop the line
speak up|speaking up
psychological safety
disclosure|error disclosure|apology
second victim
burnout|clinician burnout
alarm fatigue
alert fatigue
workarounds|workaround
normalization of deviance
hindsight bias
anchoring bias|anchoring
availability bias|availability heuristic
premature closure
confirmation bias
diagnostic error|diagnostic errors|misdiagnosis
cognitive bias
human factors|human factors engineering|ergonomics
forcing function
redundancy
standardization|standardisation
standard work
protocol
clinical pathway|care pathway|clinical guideline
order set|standard order set
bundle|care bundle
central line bundle|clabsi bundle
ventilator bundle|vap bundle
sepsis bundle
clabsi|central line associated bloodstream infection
cauti|catheter associated urinary tract infection
vap|ventilator associated pneumonia
ssi|surgical site infection
hai|hospital acquired infection|healthcare associated infection|nosocomial infection
hapi|hospital acquired pressure injury|pressure ulcer prevention
falls|fall prevention|falls with injury
wrong site surgery|wrong side surgery
wrong patient|wrong patient error
retained foreign object|retained surgical item|retained sponge
site marking|surgical site marking
sharps injury|needlestick injury|needlestick
high alert medications|high alert medication
look alike sound alike|lasa|look alike sound alike drugs
tall man lettering|tallman lettering
do not use list|do not use abbreviations|dangerous abbreviations
trailing zero
leading zero
medication reconciliation|med rec
barcode scanning|barcode medication administration|bcma|bar code scanning
cpoe|computerized provider order entry|computerised physician order entry
clinical decision support|cds
electronic health record|ehr|emr|electronic medical record
smart pump|smart pumps|smart infusion pump
independent double check|double check
five rights|rights of medication administration
automated dispensing cabinet|pyxis|omnicell
unit dose
rapid response team|rrt|medical emergency team|met
early warning score|news|mews
condition h|condition help
code team
escalation of care|chain of command
failure to rescue
readmission rate|30 day readmission|readmissions
mortality rate|risk adjusted mortality
length of stay|los
hospital acquired condition|hac
patient experience|patient satisfaction
hcahps|press ganey
core measures
quality measures|quality metrics|quality indicators
structure process outcome|donabedian model|donabedian
process measure
outcome measure
balancing measure
benchmarking|benchmark
dashboard|quality dashboard
scorecard
aim statement|smart aim
key driver diagram|driver diagram
change idea
model for improvement
iom six aims|stees|safe timely effective efficient equitable patient centered
to err is human
crossing the quality chasm
institute for healthcare improvement|ihi
joint commission|tjc|jcaho
national patient safety goals|npsg
leapfrog|leapfrog group
ahrq|agency for healthcare research and quality
patient safety indicators|psi
patient safety organization|pso
nqf|national quality forum
cms|centers for medicare and medicaid services
never events list|serious reportable events
pay for performance|p4p|value based purchasing
hospital readmissions reduction program|hrrp
mips|merit based incentive payment system
accreditation
credentialing
privileging
peer review
morbidity and mortality conference|m and m|m&m|mortality and morbidity
case review
audit|clinical audit|chart audit
audit and feedback
gemba|gemba walk|leadership rounding
5 whys|five whys
5s|sort set shine standardize sustain
kaizen|kaizen event|rapid improvement event
kanban
poka yoke|mistake proofing|error proofing
muda|waste|eight wastes
value added
bottleneck
throughput
flow|patient flow
cycle time
takt time
dmaic|define measure analyze improve control
sipoc
spaghetti diagram
a3|a3 report|a3 thinking
hierarchy of controls|hierarchy of intervention effectiveness
latent errors|latent conditions|latent failure
active errors|active failure
slip
lapse
mistake
violation
sharp end
blunt end
system error|systems thinking|systems approach
blame culture|culture of blame
accountability
reliability
resilience|resilience engineering|safety ii
safety i
error
harm|preventable harm
preventable adverse event
adverse drug event|ade|adverse drug reaction|adr
iatrogenic|iatrogenesis
overdiagnosis
overtreatment
low value care
choosing wisely
shared decision making
teach back|teach back method
health literacy
interpreter use|medical interpreter|language services
patient engagement|patient and family engagement
family presence
patient and family centered care|patient centered care
informed consent
advance directive
fall risk assessment|morse fall scale
bed alarm
restraint reduction|restraint
pressure injury prevention|turning schedule|repositioning
vte prophylaxis|dvt prophylaxis|vte prevention
antimicrobial stewardship|antibiotic stewardship
infection prevention|infection control
isolation precautions|contact precautions
environmental cleaning
sterile technique|aseptic technique
chlorhexidine bathing|chg bathing
catheter removal|nurse driven catheter removal protocol
daily sedation interruption|sedation vacation|spontaneous awakening trial
spontaneous breathing trial|sbt
head of bed elevation|hob elevation
early mobility|early mobilization
delirium prevention
glycemic control
handoff tool|ipass|i pass
whiteboard|communication board
bedside shift report
interdisciplinary rounds|multidisciplinary rounds
discharge planning
transitions of care|care transitions
warm handoff
follow up call|post discharge phone call
care coordination
telemetry monitoring
alarm management
critical results|critical value reporting|critical lab values
closed loop referral
diagnostic stewardship
second opinion
diagnostic timeout
differential diagnosis
cognitive forcing strategies|debiasing
simulation|simulation training|in situ simulation
mock code
competency|competency assessment
continuing education
certification
duty hours|resident duty hours
fatigue|fatigue management
sterile cockpit|no interruption zone
interruptions|distractions
workload|staffing ratios|nurse staffing
nurse to patient ratio
sitter|patient observer
telesitter|video monitoring
tracer methodology|tracer
mock survey
fair and just culture
error reporting system|voluntary reporting
mandatory reporting
apology laws|i'm sorry laws
communication and resolution program|carp|crp
malpractice|medical malpractice
risk management
liability
patient safety officer
quality improvement|qi
quality assurance|qa
performance improvement|pi
continuous quality improvement|cqi
total quality management|tqm
clinical governance
value|value based care
triple aim|quadruple aim|quintuple aim
evidence based practice|ebp
implementation science
sustainability
stakeholder
champion|physician champion|unit champion
gap analysis
baseline data
statistical significance
special cause variation
common cause variation
upper control limit|lower control limit|control limits
shift|trend|run rules
annotated run chart
qi project
`, "2026-11-06");

P("Name a healthcare system or insurance term","care","",`
medicare
medicaid
deductible
copay|copayment
coinsurance
premium
out of pocket maximum|out of pocket limit|oop max|out of pocket
hmo|health maintenance organization
ppo|preferred provider organization
epo|exclusive provider organization
pos plan|point of service plan
high deductible health plan|hdhp
hsa|health savings account
fsa|flexible spending account
hra|health reimbursement arrangement|health reimbursement account
affordable care act|aca|obamacare
prior authorization|prior auth|preauthorization|pre authorization|precertification
referral
in network|network
out of network
primary care provider|pcp|primary care physician
gatekeeper
formulary|drug formulary
tier|formulary tier
generic substitution
step therapy|fail first
claim|insurance claim
denial|claim denial|denied claim
appeal|claim appeal
explanation of benefits|eob
cpt code|cpt|current procedural terminology
icd 10|icd code|icd 10 code|diagnosis code|icd
hcpcs|hcpcs code
drg|diagnosis related group|ms drg
rvu|relative value unit|wrvu|work rvu
fee for service|ffs
capitation
bundled payment|bundled payments|episode based payment
value based care|value based payment|value based reimbursement
pay for performance|p4p
accountable care organization|aco
medicare advantage|medicare part c|part c
medicare part a|part a
medicare part b|part b
medicare part d|part d
medigap|medicare supplement
donut hole|coverage gap
dual eligible|dual eligibles|medi medi
chip|childrens health insurance program|schip
tricare
va|veterans affairs|veterans health administration|vha
indian health service|ihs
cobra
hipaa
emtala
stark law
anti kickback statute|anti kickback law
false claims act
uninsured
underinsured
universal health care|universal coverage
single payer|single payer system
national health service|nhs
socialized medicine
beveridge model
bismarck model
national health insurance model
out of pocket model
public option
individual mandate
employer sponsored insurance|employer based insurance|group health plan
self insured plan|self funded plan|erisa
marketplace|health insurance marketplace|exchange|healthcare gov
open enrollment
special enrollment period
qualifying life event
premium tax credit|subsidy|subsidies
cost sharing reduction|csr
bronze plan|silver plan|gold plan|platinum plan|metal tiers
catastrophic plan
essential health benefits
preexisting condition|pre existing condition
guaranteed issue
community rating
medical loss ratio|mlr
actuarial value
risk adjustment|hcc|hierarchical condition category
risk pool
adverse selection
moral hazard
utilization review|ur
utilization management
case management|case manager
care coordination
medical necessity
peer to peer|peer to peer review
observation status|observation stay|observation
inpatient admission|inpatient status
two midnight rule
skilled nursing facility|snf
long term care|ltc
long term acute care|ltach|ltac
inpatient rehabilitation facility|irf|acute rehab
home health|home health care
hospice
palliative care
durable medical equipment|dme
assisted living
nursing home
adult day care
respite care
ambulatory surgery center|asc
urgent care
retail clinic|minute clinic
emergency department|er visit
federally qualified health center|fqhc|community health center
critical access hospital|cah
safety net hospital
disproportionate share hospital|dsh|dsh payments
academic medical center|teaching hospital
gme|graduate medical education
340b|340b program
certificate of need|con
cms|centers for medicare and medicaid services
hhs|department of health and human services
cdc|centers for disease control
fda|food and drug administration
nih
ahrq
joint commission|tjc
ncqa
hedis
star ratings|medicare star ratings
mips|merit based incentive payment system
macra
qpp|quality payment program
apm|alternative payment model
mssp|medicare shared savings program
shared savings
shared risk|two sided risk|downside risk
global budget
global payment
reference pricing
price transparency
chargemaster|charge master
facility fee
balance billing
surprise billing|surprise medical bill
no surprises act
good faith estimate
allowed amount|allowable
usual and customary|ucr|usual customary and reasonable
reimbursement
coordination of benefits|cob
primary insurance|secondary insurance
subrogation
workers compensation|workers comp
disability insurance
short term disability
long term disability
ssdi|social security disability insurance
ssi|supplemental security income
life insurance
dental insurance
vision insurance
travel insurance
supplemental insurance
gap insurance
accident insurance
critical illness insurance
indemnity plan|indemnity insurance
managed care|managed care organization|mco
pbm|pharmacy benefit manager
rebate|drug rebate
copay card|copay coupon|manufacturer coupon
patient assistance program|pap
specialty pharmacy
mail order pharmacy
generic drug
brand name drug
biosimilar
awp|average wholesale price
wac|wholesale acquisition cost
mac|maximum allowable cost
dispensing fee
clean claim
superbill
encounter form
billing|medical billing
coding|medical coding
upcoding
unbundling
modifier|modifier 25
evaluation and management|e and m|e m codes|em code
place of service code
npi|national provider identifier
tax id|tin
ein
credentialing
provider enrollment
fee schedule|medicare physician fee schedule
conversion factor
gpci|geographic practice cost index
sustainable growth rate|sgr
opps|outpatient prospective payment system
ipps|inpatient prospective payment system
prospective payment system|pps
cost report
outlier payment
readmission penalty|hrrp
hac reduction program
value based purchasing|hvbp
hcahps
meaningful use|promoting interoperability
ehr|emr|electronic health record
health information exchange|hie
interoperability
telehealth|telemedicine
remote patient monitoring|rpm
patient portal
advance beneficiary notice|abn
notice of privacy practices
release of information|roi
medical record
informed consent
advance directive|living will
healthcare proxy|health care power of attorney|durable power of attorney for health care
polst|molst|physician orders for life sustaining treatment
dnr|do not resuscitate
guardian|guardianship
ombudsman
patient bill of rights
grievance
malpractice insurance|medical malpractice insurance
tort reform
damages cap
medical liability
defensive medicine
claims made policy
occurrence policy
tail coverage
locum tenens|locums
rvu productivity
salary model
private practice
group practice
hospital employed physician
concierge medicine|concierge practice|direct primary care|dpc
cash pay|self pay
sliding scale|sliding fee scale
charity care
medical debt
collections
payment plan
health share|health care sharing ministry
short term health plan|short term limited duration insurance
association health plan
medicaid expansion
medicaid waiver|1115 waiver|section 1115 waiver
dsrip
managed medicaid
fee for service medicaid
spend down|medicaid spend down
look back period
asset test
income eligibility|fpl|federal poverty level
payroll tax
irmaa
part b premium
initial enrollment period
late enrollment penalty
special needs plan|snp|d snp
pace|program of all inclusive care for the elderly
hospital at home
transitional care management|tcm
chronic care management|ccm
annual wellness visit|awv
welcome to medicare visit|ippe
preventive services
copay accumulator
maximizer program
narrow network
tiered network
network adequacy
any willing provider
direct contracting|aco reach
patient centered medical home|pcmh|medical home
health system
integrated delivery network|idn|integrated delivery system
vertical integration
horizontal integration
consolidation|hospital mergers
nonprofit hospital|not for profit hospital
for profit hospital
community benefit
gross domestic product spending|health spending|national health expenditure
cost shifting
price discrimination
iron triangle|access cost quality
triple aim|quadruple aim
population health
social determinants of health|sdoh
health equity
`, "2026-11-06");

/* ---- NEW STANDARD DAILY PROMPTS: NURSING part 1 (batch 2026-11-05, board-first) ---- */
P("Name a side effect of chemotherapy","nursing","",`
nausea|nausea and vomiting|vomiting|emesis|cinv
hair loss|alopecia
fatigue|tiredness|cancer related fatigue
neutropenia|low white blood cells|low wbc|leukopenia|low white count
anemia|low red blood cells|low hemoglobin
thrombocytopenia|low platelets
infection|increased infection risk
mouth sores|mucositis|stomatitis|oral mucositis
diarrhea
constipation
bone marrow suppression|myelosuppression|bone marrow depression|pancytopenia
loss of appetite|anorexia|decreased appetite
weight loss
taste changes|metallic taste|dysgeusia
peripheral neuropathy|neuropathy|numbness and tingling|tingling in hands and feet
bleeding|easy bruising|bruising
infertility|sterility
neutropenic fever|febrile neutropenia|fever
chemo brain|cognitive changes|memory problems|brain fog
skin changes|dry skin|rash
nail changes|brittle nails|nail discoloration
hand foot syndrome|palmar plantar erythrodysesthesia
tumor lysis syndrome|tls
hyperuricemia|high uric acid
hyperkalemia
extravasation|vesicant injury|tissue necrosis
cardiotoxicity|cardiomyopathy|heart damage|heart failure
hemorrhagic cystitis
nephrotoxicity|kidney damage|kidney toxicity
hepatotoxicity|liver damage|liver toxicity
pulmonary fibrosis|pulmonary toxicity|lung damage
ototoxicity|hearing loss|tinnitus
dehydration
electrolyte imbalance
hypomagnesemia|low magnesium
hypokalemia
early menopause|premature menopause|ovarian failure
amenorrhea|irregular periods
sexual dysfunction|decreased libido
erectile dysfunction
depression
anxiety
insomnia|sleep problems
photosensitivity|sun sensitivity
hyperpigmentation|skin darkening
radiation recall
allergic reaction|hypersensitivity reaction|infusion reaction|anaphylaxis
secondary cancer|secondary malignancy|leukemia|treatment related leukemia
blood clots|dvt|thrombosis|vte
heartburn|indigestion
esophagitis
dry mouth|xerostomia
sore throat
eye problems|dry eyes|watery eyes|conjunctivitis
blurred vision
cataracts
hiccups
headache
muscle aches|myalgia
joint pain|arthralgia
flu like symptoms
chills
cystitis
urine discoloration|red urine
peripheral edema|fluid retention|swelling
hypertension
hypotension
osteoporosis|bone loss
hearing changes
hoarseness
dizziness
cold sensitivity|cold induced dysesthesia
paralytic ileus|ileus
pancreatitis
hyperglycemia|high blood sugar
siadh|hyponatremia
hypocalcemia
qt prolongation|arrhythmia
pneumonitis
weight gain
teratogenicity|birth defects
mucous membrane dryness
nosebleeds|epistaxis
gum bleeding|bleeding gums
oral thrush|candidiasis|thrush
shingles|herpes zoster reactivation
hepatitis b reactivation
anticipatory nausea
neurotoxicity|cerebellar toxicity
seizures
posterior reversible encephalopathy|pres
hemolytic uremic syndrome
capillary leak syndrome
cytokine release syndrome|crs
differentiation syndrome
hand foot skin reaction
acneiform rash|acne like rash
eyelash changes|eyelash growth
pruritus|itching
loss of eyebrows
body image disturbance
financial toxicity
`, "2026-11-07");

P("Name a symptom of Parkinson disease","nursing","",`
tremor|resting tremor|shaking
bradykinesia|slow movement|slowness of movement
rigidity|muscle stiffness|stiffness
cogwheel rigidity
shuffling gait|shuffling
postural instability|poor balance|balance problems
pill rolling tremor
masklike face|masked face|hypomimia|flat facial expression
freezing|freezing of gait
falls
stooped posture|forward flexed posture
festinating gait|festination
small handwriting|micrographia
soft voice|hypophonia|quiet speech
drooling|sialorrhea
difficulty swallowing|dysphagia
slurred speech|dysarthria
loss of smell|anosmia|hyposmia
constipation
depression
anxiety
dementia|parkinson disease dementia|cognitive decline
hallucinations|visual hallucinations
sleep problems|insomnia
rem sleep behavior disorder|acting out dreams
orthostatic hypotension|dizziness on standing
urinary urgency|frequent urination|bladder problems
urinary incontinence
fatigue
apathy
decreased arm swing|reduced arm swing
lead pipe rigidity
akinesia|difficulty initiating movement
reduced blinking|decreased blinking
seborrhea|oily skin|seborrheic dermatitis
excessive sweating
pain
restless legs
erectile dysfunction|sexual dysfunction
weight loss
psychosis
delusions
dystonia
dyskinesia
difficulty turning in bed
difficulty rising from a chair
en bloc turning
retropulsion
propulsion
monotone voice
glabellar tap sign|myerson sign
stuttering
excessive daytime sleepiness
vivid dreams
blurred vision
double vision
memory problems
slowed thinking|bradyphrenia
executive dysfunction
impulse control disorder|compulsive gambling
choking|aspiration
aspiration pneumonia
heat intolerance
on off phenomenon|wearing off
unilateral onset|asymmetric symptoms
poor coordination
muscle cramps
shoulder pain
difficulty with fine motor tasks|trouble buttoning
difficulty dressing
slow speech
hesitant speech
hypersexuality
punding
anhedonia
panic attacks
paresthesias|numbness
leg swelling
urinary retention
gastroparesis|delayed gastric emptying
early satiety
nausea
weight gain
scoliosis|camptocormia|pisa syndrome
foot dystonia|toe curling
hand deformities|striatal hand
blepharospasm
dry eyes
eyelid apraxia
impaired upward gaze
visual contrast problems
color vision changes
sweating episodes
temperature intolerance
mild cognitive impairment
word finding difficulty
slowed reaction time
`, "2026-11-07");

P("Name a symptom of kidney failure","nursing","",`
decreased urine output|oliguria|low urine output
anuria|no urine output
swelling|edema|fluid retention
fatigue|tiredness|easy fatigability
shortness of breath|dyspnea
nausea|vomiting
itching|pruritus
confusion
hyperkalemia|high potassium
high blood pressure|hypertension
anemia
elevated creatinine|high creatinine
elevated bun|high bun|azotemia
uremia
metabolic acidosis
weight gain
loss of appetite|anorexia
metallic taste
uremic breath|ammonia breath|uremic fetor
muscle cramps
restless legs
peripheral neuropathy|numbness and tingling|pins and needles
seizures
pericarditis|uremic pericarditis
pericardial friction rub
pericardial effusion
pulmonary edema|crackles
heart failure
arrhythmias|irregular heartbeat
hyperphosphatemia|high phosphorus
hypocalcemia|low calcium
hypermagnesemia
hyponatremia
hypernatremia
bone pain|renal osteodystrophy|bone disease
easy bruising|bleeding|platelet dysfunction
uremic frost
dry skin|dry itchy skin
pale skin|pallor
yellowish skin|sallow skin
hyperpigmentation
insomnia|sleep problems
trouble concentrating|difficulty concentrating
lethargy|drowsiness
asterixis|flapping tremor
coma
weakness
foamy urine|proteinuria
blood in urine|hematuria
nocturia
polyuria
flank pain
chest pain
hiccups
decreased libido|sexual dysfunction
amenorrhea|irregular periods
infertility
depression
headache
weight loss
gastrointestinal bleeding
growth failure in children
secondary hyperparathyroidism
gout|hyperuricemia
infections
periorbital edema|puffy eyes
ascites
jugular venous distension|jvd
kussmaul respirations
hypotension
shortness of breath lying flat|orthopnea
cough
pleural effusion
bad taste in mouth
stomatitis|mouth ulcers
muscle wasting
muscle twitching|fasciculations
tremor
tetany
burning feet
encephalopathy|uremic encephalopathy
personality changes
memory problems
delirium
stupor
calciphylaxis
vascular calcification
fractures
growth retardation
hypoalbuminemia
dark urine
cloudy urine
low urine specific gravity|fixed specific gravity|isosthenuria
`, "2026-11-07");

P("Name a sign of pregnancy","nursing","",`
missed period|amenorrhea|absence of menstruation
positive pregnancy test|positive hcg|positive urine pregnancy test|positive serum hcg
morning sickness|nausea|vomiting|nausea and vomiting
breast tenderness|breast changes|sore breasts|breast swelling
fatigue|tiredness
frequent urination|urinary frequency
fetal heartbeat|fetal heart tones|fetal heart sounds
ultrasound visualization of fetus|fetus on ultrasound|gestational sac on ultrasound
fetal movement felt by examiner|fetal movement palpated by examiner
quickening
chadwick sign|bluish cervix|bluish vagina
goodell sign|softening of the cervix
hegar sign|softening of the lower uterine segment
ballottement
braxton hicks contractions
uterine enlargement|enlarged uterus|growing uterus
abdominal enlargement|growing belly
linea nigra
chloasma|melasma|mask of pregnancy
striae gravidarum|stretch marks
darkened areolas|areola darkening
montgomery tubercles
colostrum|leaking colostrum
food cravings|cravings
food aversions
pica
heightened sense of smell
mood swings
implantation bleeding|spotting
cramping|mild cramping
bloating
constipation
heartburn
headaches
dizziness|lightheadedness
fainting
increased basal body temperature|elevated basal body temperature
increased vaginal discharge|leukorrhea
weight gain
backache
nasal congestion
bleeding gums
excessive salivation|ptyalism
palpable fetal outline|fetal outline
piskacek sign
mcdonald sign
ladin sign
von fernwald sign
jacquemier sign
spider veins|spider angiomas
palmar erythema
varicose veins
swollen feet|edema
shortness of breath
hemorrhoids
skin tags
uterine souffle
funic souffle
increased heart rate
increased blood volume
physiologic anemia|dilutional anemia
glycosuria
tingling breasts
prominent breast veins
secondary areola
nipple darkening
umbilicus protrusion|flattened navel
lordosis
round ligament pain
increased appetite
excessive thirst
metallic taste|dysgeusia
acne
oily skin
hair growth|thicker hair
carpal tunnel
leg cramps
insomnia
vivid dreams
emotional lability|crying spells
urinary leakage
`, "2026-11-07");

P("Name a food to avoid during pregnancy","nursing","",`
alcohol|beer|wine|liquor
raw fish|sushi|sashimi|raw sushi rolls
unpasteurized milk|raw milk|unpasteurized dairy
soft cheese|brie|camembert
deli meat|lunch meat|cold cuts|luncheon meat|unheated deli meat
hot dogs
undercooked meat|rare meat|raw meat|undercooked burgers|rare burgers
raw eggs|undercooked eggs|runny eggs
high mercury fish
swordfish
shark
king mackerel
tilefish
bigeye tuna
marlin
orange roughy
excess caffeine|caffeine|coffee
raw shellfish|raw oysters|oysters|oysters on the half shell
raw sprouts|alfalfa sprouts|bean sprouts
unpasteurized juice|unpasteurized cider
feta|queso fresco|blue cheese|gorgonzola|roquefort
mexican style soft cheese|queso blanco|panela
refrigerated smoked seafood|smoked salmon|lox|nova lox
pate|meat spreads|refrigerated pate|refrigerated meat spreads
liver|organ meat
cookie dough|raw dough|raw batter|cake batter
homemade mayonnaise|homemade caesar dressing|hollandaise|homemade aioli
tiramisu|mousse made with raw eggs|homemade eggnog
unwashed produce|unwashed fruits and vegetables
undercooked poultry|undercooked chicken
undercooked pork
steak tartare|carpaccio
ceviche
raw clams|raw mussels|raw scallops
herbal teas|herbal supplements
licorice|black licorice
energy drinks
deli salads|premade salads|store made chicken salad|store made ham salad
precut melon|cut melon
leftovers left out|food left out too long
vitamin a supplements|high dose vitamin a
fish liver oil|cod liver oil
fish caught in local contaminated waters|locally caught fish
dry sausage|salami|pepperoni|cured meats|prosciutto
refrigerated hummus
soft serve ice cream
unpasteurized honey|raw honey
kombucha
aloe vera
raw milk cheese
smoked fish
pickled fish|marinated raw fish
uncooked hot dogs
blue veined cheese
paneer from raw milk
unpasteurized miso
excess sugar|sugary drinks
excess salt|high sodium foods
artificial sweeteners|saccharin
papaya|unripe papaya
pineapple in excess
parsley in excess
sage tea
ginseng
pennyroyal tea
cohosh tea|black cohosh|blue cohosh
dong quai
st johns wort
excess tuna|albacore tuna
grouper
chilean sea bass
bluefish
raw cookie dough ice cream
raw quail eggs
soft boiled eggs
poached eggs with runny yolk
poke|poke bowl
raw crab
caviar|roe
spirulina
fenugreek
evening primrose oil
castor oil
mugwort
rue
tansy
juniper
yarrow
saw palmetto
excessive green tea
unpasteurized kefir
unpasteurized yogurt
smoked trout
smoked mackerel
undercooked lamb
undercooked venison
mold ripened cheese
`, "2026-11-07");

P("Name a food high in carbohydrates","nursing","",`
bread|white bread|whole wheat bread
rice|white rice|brown rice
pasta|spaghetti|noodles
potatoes|potato|baked potato|mashed potatoes
cereal|breakfast cereal
oatmeal|oats|porridge
bananas|banana
corn|sweet corn
sweet potatoes|sweet potato|yam
soda|soft drinks|pop|fizzy drinks
fruit juice|juice|orange juice|apple juice
candy|sweets|lollies
cookies|biscuits
cake
donuts|doughnuts
bagels|bagel
crackers
pretzels
chips|potato chips|crisps
french fries|fries|chips and fries
tortillas|flour tortilla|corn tortilla
pancakes
waffles
muffins
pizza
beans|black beans|kidney beans|pinto beans
lentils
chickpeas|garbanzo beans
peas|green peas
quinoa
couscous
barley
granola
honey
sugar|table sugar
maple syrup|syrup
jam|jelly
dates
raisins
dried fruit
grapes
mango
apples|apple
oranges|orange
pineapple
watermelon
milk
chocolate milk
yogurt|flavored yogurt
ice cream
pie
popcorn
rice cakes
english muffin
croissant
buns|hamburger bun|rolls|dinner rolls
pita|pita bread
naan
cornbread
grits
polenta
millet
buckwheat
bulgur
farro
plantains
cassava|yuca
taro
parsnips
butternut squash|winter squash
pumpkin
beets
carrots
sports drinks|gatorade
sweet tea
energy drinks
milkshake
smoothie
granola bar|cereal bar
candy bar|chocolate bar
gummy bears|gummies
jelly beans
marshmallows
cupcakes
brownies
pastries|danish
cinnamon rolls
sweetened condensed milk
agave
molasses
corn syrup
rice pudding
mac and cheese|macaroni and cheese
lasagna
burritos
sushi rice
fried rice
risotto
dumplings
ramen
udon
soba
rice noodles
gnocchi
pierogi
hash browns
tater tots
crackers and cheese|cheese crackers
graham crackers
animal crackers
saltines
figs
prunes
cherries
pears
kiwi
blueberries
`, "2026-11-07");

P("Name a cause of urinary retention","nursing","",`
enlarged prostate|bph|benign prostatic hyperplasia|prostate enlargement
anticholinergic drugs|anticholinergics
opioids|narcotics|morphine
anesthesia|post anesthesia|spinal anesthesia|epidural anesthesia
postoperative urinary retention|after surgery
urethral stricture
constipation|fecal impaction
urinary tract infection|uti
prostatitis
prostate cancer
bladder stones|bladder calculi
kidney stones|urethral stones
neurogenic bladder
spinal cord injury
multiple sclerosis|ms
diabetes|diabetic neuropathy|diabetic cystopathy
stroke
parkinson disease
cauda equina syndrome
herniated disc|disc herniation
antihistamines|diphenhydramine|benadryl
decongestants|pseudoephedrine|sudafed|phenylephrine
tricyclic antidepressants|tcas|amitriptyline
antipsychotics
anti parkinson drugs
antispasmodics|oxybutynin
alpha adrenergic agonists
calcium channel blockers
muscle relaxants
benzodiazepines
alcohol
pregnancy|retroverted gravid uterus
childbirth|postpartum urinary retention|after delivery
epidural in labor
pelvic organ prolapse|cystocele|uterine prolapse
pelvic mass|pelvic tumor
uterine fibroids
ovarian cysts
phimosis
paraphimosis
meatal stenosis
blood clots in bladder|clot retention
bladder cancer
urethral cancer
penile cancer
foreign body in urethra
trauma|pelvic fracture|urethral injury
pelvic surgery
hernia repair
hemorrhoidectomy
herpes zoster|shingles|sacral herpes
genital herpes
guillain barre syndrome
transverse myelitis
spina bifida|myelomeningocele
tethered cord
brain tumor
dementia
spinal tumor
epidural abscess
spinal stenosis
pelvic floor dysfunction
dysfunctional voiding
fowler syndrome
detrusor underactivity|underactive bladder
immobility|bed rest
lack of privacy|anxiety|psychogenic retention
pain
posterior urethral valves
urethral diverticulum
vaginal packing
catheter obstruction|kinked catheter
balanitis
urethritis
vulvovaginitis
bladder neck obstruction|bladder neck contracture
prostate surgery
ketamine cystitis
nsaids
beta agonists
amphetamines|stimulants
cocaine
botox in bladder|onabotulinumtoxin a
`, "2026-11-07");

P("Name a symptom of anxiety","nursing","",`
racing heart|palpitations|rapid heartbeat|tachycardia
excessive worry|worry|worrying
restlessness|feeling on edge
sweating|diaphoresis|sweaty palms
shortness of breath|dyspnea|feeling of not getting enough air
rapid breathing|hyperventilation|tachypnea
trembling|shaking|tremor
muscle tension|tense muscles
trouble sleeping|insomnia
irritability
fatigue
difficulty concentrating|trouble concentrating|mind going blank
chest tightness|chest pain
nausea|upset stomach|butterflies in stomach|stomach knots
dizziness|lightheadedness
feeling of impending doom|sense of impending doom|sense of dread
panic attacks
avoidance|avoidant behavior
dry mouth
headache
numbness and tingling|paresthesias|tingling
choking sensation|lump in throat|tightness in throat
hot flashes|chills|hot or cold flashes
frequent urination
diarrhea|loose stools
stomach cramps|abdominal pain
fear
nervousness
apprehension
hypervigilance
being easily startled|exaggerated startle response
racing thoughts
catastrophizing
derealization|feeling of unreality
depersonalization
fear of losing control|fear of going crazy
fear of dying
pacing
fidgeting|hand wringing
nail biting
dilated pupils
increased blood pressure|hypertension
pallor|pale skin
flushing
cold clammy hands
trembling voice|voice tremor
rapid speech|pressured speech
stuttering
crying
clinging
reassurance seeking
narrowed perceptual field|narrowed perception
difficulty problem solving
selective inattention
confusion
compulsions|repetitive behaviors
muscle aches
jaw clenching|teeth grinding
loss of appetite
overeating
nightmares
frequent sighing
yawning
blushing
feeling faint
weakness
social withdrawal
procrastination
indecisiveness
perfectionism
obsessive thoughts|intrusive thoughts
feeling detached
indigestion
belching
cold extremities
ringing in ears
blurred vision
muscle twitching
back pain
neck pain
shoulder tension
clenched fists
skin picking
hair pulling
foot tapping
tearfulness
low mood
feeling overwhelmed
`, "2026-11-07");

P("Name a side effect of antipsychotics","nursing","",`
weight gain
extrapyramidal symptoms|eps|extrapyramidal side effects
tardive dyskinesia|td
akathisia|restlessness
dystonia|acute dystonia|acute dystonic reaction
pseudoparkinsonism|drug induced parkinsonism|parkinsonism
neuroleptic malignant syndrome|nms
sedation|drowsiness|somnolence
dry mouth
constipation
urinary retention
blurred vision
orthostatic hypotension|dizziness on standing
agranulocytosis
metabolic syndrome
diabetes|hyperglycemia|high blood sugar|insulin resistance
high cholesterol|hyperlipidemia|dyslipidemia|high triglycerides
qt prolongation|prolonged qt
hyperprolactinemia|high prolactin|elevated prolactin
gynecomastia
galactorrhea
amenorrhea|irregular periods
sexual dysfunction|decreased libido
erectile dysfunction
seizures|lowered seizure threshold
photosensitivity
oculogyric crisis
torticollis
opisthotonos
laryngospasm
tremor
rigidity|muscle stiffness
shuffling gait
bradykinesia
masklike face
tachycardia
myocarditis
cardiomyopathy
sudden cardiac death
increased mortality in elderly dementia patients
stroke in elderly
hypersalivation|drooling|sialorrhea
neutropenia
leukopenia
anticholinergic effects
heat intolerance|impaired thermoregulation
hyperthermia
hypothermia
priapism
retrograde ejaculation
nasal congestion
pigmentary retinopathy
corneal deposits|lens opacities
cataracts
skin pigmentation|blue gray skin
cholestatic jaundice|jaundice
elevated liver enzymes
dysphagia
aspiration
falls
confusion|delirium
cognitive dulling
emotional blunting
insomnia
agitation
headache
nausea
increased appetite
compulsive behaviors|compulsive gambling
pancreatitis
venous thromboembolism|blood clots|dvt
osteoporosis
paralytic ileus|ileus
rabbit syndrome
withdrawal dyskinesia
tardive dystonia
tardive akathisia
siadh|hyponatremia
enuresis|urinary incontinence|bedwetting
rash
anemia
eosinophilia
`, "2026-11-07");

P("Name a symptom of an eating disorder","nursing","",`
weight loss|extreme weight loss|low body weight
fear of gaining weight|intense fear of weight gain
distorted body image|body image disturbance
food restriction|restricting food|restrictive eating
binge eating|binging
purging|self induced vomiting|vomiting after meals
excessive exercise|compulsive exercise
amenorrhea|missed periods|loss of periods
laxative abuse|laxative use
diuretic abuse
russell sign|calluses on knuckles|calloused knuckles
dental erosion|tooth enamel erosion|eroded teeth
swollen parotid glands|parotid gland enlargement|chipmunk cheeks
lanugo|fine body hair
bradycardia|slow heart rate
hypotension|low blood pressure
orthostatic hypotension
hypothermia|cold intolerance|feeling cold
hypokalemia|low potassium
electrolyte imbalance
dehydration
dizziness
fainting|syncope
fatigue
hair loss|thinning hair
dry skin
brittle nails
constipation
bloating
abdominal pain
acid reflux|heartburn
esophageal tears|mallory weiss tear
sore throat
osteoporosis|bone loss|osteopenia
arrhythmias|irregular heartbeat
qt prolongation
refeeding syndrome
anemia
leukopenia
edema|swelling
yellowish skin|carotenemia
muscle weakness
muscle wasting
trouble concentrating
irritability
depression
anxiety
social withdrawal
secretive eating|eating in secret
hoarding food
skipping meals
food rituals|cutting food into small pieces|eating rituals
calorie counting
frequent weighing|body checking
frequent mirror checking
wearing baggy clothes|layering clothes
bathroom trips after meals|going to the bathroom after meals
fasting
diet pill use
chewing and spitting
food avoidance
picky eating|selective eating
fear of choking|fear of vomiting
denial of hunger
preoccupation with food|obsession with food
cooking for others but not eating
mood swings
low self esteem
perfectionism
self harm
shame or guilt after eating
eating large amounts quickly
eating until uncomfortably full
night eating
weight fluctuations
obesity
infertility
delayed puberty
growth stunting
insomnia
cold hands and feet|acrocyanosis
poor wound healing
easy bruising
hypoglycemia
seizures
elevated liver enzymes
kidney problems
lethargy
`, "2026-11-07");

/* ---- NEW STANDARD DAILY PROMPTS: NURSING part 2 (batch 2026-11-05, board-first) ---- */
P("Name a symptom of multiple sclerosis","nursing","",`
fatigue
numbness|tingling|numbness and tingling|paresthesias
vision problems|blurred vision|vision loss
optic neuritis|eye pain
double vision|diplopia
muscle weakness|weakness
muscle spasticity|spasticity|stiffness
balance problems|loss of balance|poor balance
dizziness|vertigo
difficulty walking|gait problems|gait disturbance
bladder dysfunction|urinary urgency|frequent urination
urinary incontinence
urinary retention
bowel problems|constipation
bowel incontinence
heat sensitivity|uhthoff phenomenon|uhthoff sign|symptoms worse with heat
lhermitte sign|electric shock sensation with neck flexion
ataxia|poor coordination|incoordination
tremor|intention tremor
slurred speech|dysarthria
scanning speech
difficulty swallowing|dysphagia
cognitive problems|cognitive impairment|memory problems|brain fog
depression
mood swings|emotional lability
pseudobulbar affect|uncontrollable laughing or crying
sexual dysfunction|erectile dysfunction|decreased libido
pain|neuropathic pain
trigeminal neuralgia|facial pain
nystagmus
internuclear ophthalmoplegia|ino
charcot triad
marcus gunn pupil|relative afferent pupillary defect|rapd
central scotoma
color vision loss|red desaturation
hemiparesis
paraparesis|weakness in legs
foot drop
muscle cramps
muscle spasms
hyperreflexia|increased reflexes
babinski sign|positive babinski
clonus
band like sensation|ms hug
itching
burning sensations
loss of sensation|sensory loss
loss of vibration sense
loss of proprioception
sleep problems|insomnia
anxiety
facial weakness|bell palsy like weakness
hearing loss
seizures
breathing problems|respiratory weakness
headache
clumsiness
heavy legs|leg heaviness
dropping things
difficulty concentrating
slowed thinking|slowed processing speed
word finding difficulty
executive dysfunction
euphoria
tonic spasms
paroxysmal symptoms
myokymia|facial twitching
dysesthesia
restless legs
pressure injuries
recurrent utis|urinary tract infections
osteoporosis
contractures
relapsing and remitting symptoms|relapses|flare ups
ptosis
loss of taste
loss of smell
hiccups
vomiting
nausea
romberg sign|positive romberg
dysdiadochokinesia
dysmetria|past pointing
apathy
psychosis
urinary frequency at night|nocturia
hesitancy|urinary hesitancy
`, "2026-11-07");

P("Name a side effect of opioids","nursing","",`
constipation|opioid induced constipation
respiratory depression|slow breathing|decreased respirations
sedation|drowsiness|sleepiness|somnolence
nausea|vomiting|nausea and vomiting
itching|pruritus
dizziness
confusion|delirium
urinary retention
pinpoint pupils|miosis|constricted pupils
hypotension|low blood pressure
orthostatic hypotension
bradycardia
addiction|opioid use disorder|substance use disorder
physical dependence|dependence
tolerance
withdrawal
overdose
euphoria
dysphoria
dry mouth
sweating
flushing
hallucinations
falls
hyperalgesia|opioid induced hyperalgesia
decreased gi motility|slowed digestion
ileus|paralytic ileus|bowel obstruction
biliary spasm|sphincter of oddi spasm
abdominal pain|cramping
bloating
loss of appetite
hypogonadism|low testosterone
sexual dysfunction|decreased libido
erectile dysfunction
irregular periods|amenorrhea
infertility
osteoporosis
immunosuppression
sleep apnea|central sleep apnea
hypoxia
hypercapnia
coma
death
seizures|tramadol seizures
serotonin syndrome
qt prolongation|methadone qt prolongation
muscle rigidity|chest wall rigidity|wooden chest syndrome
myoclonus
headache
mood changes|depression
anxiety
cognitive impairment|mental clouding
memory problems
impaired judgment
blurred vision
histamine release|hives|urticaria
anaphylaxis|allergic reaction
peripheral edema|swelling
weight gain
dental problems
hyponatremia
adrenal insufficiency
neonatal abstinence syndrome|neonatal opioid withdrawal
increased intracranial pressure
hiccups
tremor
insomnia
nightmares
vertigo
motor vehicle accidents|impaired driving
aspiration
apnea
pulmonary edema
slurred speech
staggering gait|unsteady gait
agitation
paradoxical excitation
rash
muscle twitching
urinary hesitancy
nasal itching|itchy nose
cold clammy skin
decreased cough reflex|cough suppression
gastroparesis|delayed gastric emptying
sleep disturbances
`, "2026-11-07");

P("Name a cause of dehydration","nursing","",`
vomiting
diarrhea
not drinking enough|inadequate fluid intake|poor oral intake
excessive sweating|sweating|diaphoresis
fever
heat exhaustion|hot weather|heat
exercise|strenuous exercise
diuretics|water pills|furosemide|lasix
diabetes|uncontrolled diabetes|hyperglycemia
diabetic ketoacidosis|dka
hyperosmolar hyperglycemic state|hhs|hhns
diabetes insipidus
burns
alcohol|alcohol use
hemorrhage|blood loss|bleeding
gastroenteritis|stomach flu|stomach bug
food poisoning
cholera
rotavirus
norovirus
c diff|clostridioides difficile
nasogastric suction|ng suction
fistula drainage|wound drainage
ileostomy output|high output ostomy
laxative use|laxatives
bowel prep
polyuria|frequent urination
osmotic diuresis
kidney disease|salt wasting nephropathy
adrenal insufficiency|addison disease
hypercalcemia
hyperthyroidism
elderly decreased thirst|decreased thirst in elderly|impaired thirst
dementia
inability to access water|immobility
dysphagia|difficulty swallowing
npo status|nothing by mouth
altered mental status|confusion
infants and young children
sore throat|mouth sores|stomatitis
nausea
anorexia|eating disorders
bulimia
caffeine
high altitude
cold weather
fasting
tachypnea|rapid breathing
mechanical ventilation without humidification
third spacing|fluid shift
pancreatitis
ascites
peritonitis
bowel obstruction
sepsis
lithium|nephrogenic diabetes insipidus
sglt2 inhibitors
high protein tube feedings|tube feeding syndrome
hypertonic tube feedings
radiation therapy
chemotherapy
cystic fibrosis
pregnancy|hyperemesis gravidarum
breastfeeding
heat stroke
sunburn
open wounds
stevens johnson syndrome|toxic epidermal necrolysis
ketogenic diet
saunas|hot tubs
alcohol hangover
dumping syndrome
short bowel syndrome
inflammatory bowel disease|crohn disease|ulcerative colitis
celiac disease
travelers diarrhea
salmonella
shigella
e coli infection
giardia
sickle cell disease
fluid restriction
heat wave
working outdoors
athletes|endurance sports|marathon running
mannitol
infant formula mixed incorrectly|overconcentrated formula
breastfeeding problems in newborns|poor feeding
pyloric stenosis
intussusception
appendicitis
`, "2026-11-07");

P("Name a cause of fluid volume excess","nursing","",`
heart failure|congestive heart failure|chf
kidney failure|renal failure|chronic kidney disease|ckd
cirrhosis|liver failure|liver disease
excessive iv fluids|iv fluid overload|too much iv fluid|normal saline overload
excessive sodium intake|high salt diet|high sodium intake
nephrotic syndrome
corticosteroids|steroids
siadh|syndrome of inappropriate antidiuretic hormone
blood transfusion|transfusion associated circulatory overload|taco
hypoalbuminemia|low albumin
malnutrition|protein malnutrition
pregnancy
preeclampsia
missed dialysis
acute kidney injury|aki
glomerulonephritis
cushing syndrome
hyperaldosteronism|conn syndrome
nsaids
calcium channel blockers
thiazolidinediones|pioglitazone
excessive water intake|psychogenic polydipsia|water intoxication
tap water enemas
hypotonic irrigation|turp syndrome
sodium bicarbonate administration
hypertonic saline
sodium containing medications
tube feedings
tpn
cardiomyopathy
myocardial infarction|heart attack
valve disease|mitral regurgitation|aortic stenosis
pulmonary hypertension
cor pulmonale
hypothyroidism|myxedema
premenstrual fluid retention
oral contraceptives|estrogen
minoxidil
fludrocortisone
desmopressin|ddavp
oxytocin|pitocin
vasopressin
older age
renal artery stenosis
burn fluid resuscitation|massive fluid resuscitation
sepsis fluid resuscitation
fluid shift from interstitial space|fluid remobilization
protein losing enteropathy
hepatorenal syndrome
nephritic syndrome
fluid shifts after surgery
ivig
albumin infusion
mannitol
hetastarch|colloids
gabapentin|pregabalin
free water flushes
infusion pump error
fluid restriction nonadherence|dietary nonadherence
pericarditis|constrictive pericarditis
severe anemia|high output heart failure
beriberi|thiamine deficiency
tocolytics|terbutaline
magnesium sulfate infusion
chemotherapy hydration
contrast hydration
continuous bladder irrigation absorption
hysteroscopy fluid absorption
fresh frozen plasma|ffp
medication diluent volume|iv antibiotic volume
aortic regurgitation
polycystic kidney disease
diabetic nephropathy
kidney transplant rejection
urinary obstruction|obstructive uropathy
budd chiari syndrome
portal hypertension
testosterone|androgens
licorice|black licorice
hydralazine
clonidine
liddle syndrome
congenital adrenal hyperplasia
hypotonic fluids in children
`, "2026-11-07");

P("Name a complication of a fracture","nursing","",`
compartment syndrome
fat embolism|fat embolism syndrome
infection|osteomyelitis|bone infection
blood clot|dvt|deep vein thrombosis
pulmonary embolism|pe
nonunion
malunion
delayed union
avascular necrosis|osteonecrosis
nerve damage|nerve injury
blood vessel injury|vascular injury|arterial injury
bleeding|hemorrhage
hypovolemic shock|shock
pressure injuries|pressure ulcers
pneumonia
joint stiffness|stiffness
arthritis|post traumatic arthritis
complex regional pain syndrome|crps|reflex sympathetic dystrophy|sudeck atrophy
muscle atrophy|muscle wasting
contractures
volkmann ischemic contracture
limb length discrepancy|leg length discrepancy
growth plate injury|growth arrest
rhabdomyolysis
hyperkalemia
acute kidney injury
osteoporosis|disuse osteoporosis
cast syndrome|superior mesenteric artery syndrome
skin breakdown under cast
gangrene
amputation
chronic pain
constipation
urinary tract infection
urinary retention
delirium
loss of function|disability
falls
death
heterotopic ossification|myositis ossificans
hemarthrosis
tendon injury|tendon rupture
ligament injury
pneumothorax|hemothorax
flail chest
bladder injury|urethral injury
bowel injury
spinal cord injury
brain injury|head injury
cardiac tamponade
aortic injury
hardware failure|loose hardware|implant failure
pin site infection
cellulitis
wound dehiscence
tetanus
gas gangrene
sepsis
anemia
hypercalcemia from immobilization
depression
loss of independence
deconditioning
arteriovenous fistula|pseudoaneurysm
lymphedema
chronic swelling|edema
foot drop|peroneal nerve palsy
wrist drop|radial nerve palsy
claw hand|ulnar nerve palsy
median nerve injury|carpal tunnel syndrome
popliteal artery injury
brachial artery injury
cast too tight|constrictive cast
pin loosening
refracture
stress shielding
ischemia
acute respiratory distress syndrome|ards
atelectasis
dislocation
joint instability
`, "2026-11-07");

P("Name a risk factor for type 2 diabetes","nursing","",`
obesity|overweight|excess weight|high bmi
family history|family history of diabetes
physical inactivity|sedentary lifestyle|lack of exercise
age over 45|older age|aging
prediabetes|impaired fasting glucose|impaired glucose tolerance
gestational diabetes|history of gestational diabetes
polycystic ovary syndrome|pcos
high blood pressure|hypertension
high cholesterol|low hdl|high triglycerides|dyslipidemia|low hdl cholesterol
metabolic syndrome
insulin resistance
abdominal obesity|belly fat|large waist circumference|central obesity
african american|black race
hispanic|latino
native american|american indian|alaska native
asian american
pacific islander|native hawaiian
smoking|tobacco use
unhealthy diet|poor diet
high sugar diet|sugary drinks|soda
processed foods
red meat|processed meat
alcohol|heavy alcohol use
poor sleep|sleep deprivation
sleep apnea|obstructive sleep apnea
acanthosis nigricans
delivering a baby over 9 pounds|macrosomic baby
low birth weight
cardiovascular disease|heart disease
stroke
fatty liver|nafld|masld
corticosteroids|steroids
antipsychotics|atypical antipsychotics
statins
thiazide diuretics
beta blockers
protease inhibitors
cushing syndrome
acromegaly
hemochromatosis
chronic pancreatitis
cystic fibrosis
schizophrenia
depression
stress|chronic stress
low socioeconomic status|poverty
food insecurity
food deserts
shift work
hepatitis c
hiv
pre eclampsia history
low vitamin d
gout
chronic kidney disease
being male
south asian ethnicity
middle eastern ethnicity
transplant|post transplant diabetes
calcineurin inhibitors|tacrolimus
being born to a mother with diabetes
childhood obesity
excessive screen time|television watching
weight gain in adulthood
excess weight gain in pregnancy
low muscle mass
smoking during pregnancy|maternal smoking
not breastfeeding
air pollution
refined carbohydrates
low fiber diet
trans fats
fried foods
white rice consumption
chronic inflammation
periodontal disease
low testosterone|hypogonadism
pancreatic cancer
pancreatectomy|pancreatic surgery
pheochromocytoma
glucagonoma
hyperthyroidism
growth hormone therapy
niacin
limited access to health care|lack of health insurance
social isolation|loneliness
psoriasis
rheumatoid arthritis
`, "2026-11-07");

P("Name a food high in vitamin C","nursing","",`
oranges|orange
orange juice
strawberries|strawberry
kiwi|kiwifruit
bell peppers|red bell pepper|peppers|capsicum
broccoli
grapefruit
lemons|lemon
limes|lime
tomatoes|tomato
brussels sprouts
cantaloupe|rockmelon
papaya
mango
pineapple
guava
potatoes|potato|baked potato
cauliflower
kale
spinach
cabbage
tangerines|mandarins|clementines
blackcurrants|black currants
acerola cherries|acerola
rose hips
camu camu
kakadu plum
lychee
passion fruit
raspberries
blueberries
blackberries
cranberries
watermelon
honeydew
sweet potatoes
chili peppers|hot peppers|jalapeno
parsley
cilantro|coriander
thyme
bok choy
swiss chard
collard greens
mustard greens
turnip greens
snow peas|peas
green beans
asparagus
okra
kohlrabi
tomato juice
lemonade
grapefruit juice
cherries
plantains
persimmons
pomelo
star fruit
dragon fruit
jackfruit
gooseberries|amla|indian gooseberry
sauerkraut
fortified cereal
cranberry juice
watercress
arugula
radishes
butternut squash
turnips
rutabaga
beet greens
yellow peppers
green peppers
sea buckthorn
elderberries
mulberries
broccoli rabe|rapini
red cabbage
napa cabbage
savoy cabbage
pineapple juice
mango juice
fortified juice
chives
basil
mustard spinach
cassava
horseradish
`, "2026-11-07");

P("Name a food high in folate","nursing","",`
spinach
leafy greens|dark leafy greens|green leafy vegetables
asparagus
broccoli
brussels sprouts
lentils
beans|black beans|kidney beans|pinto beans|navy beans
chickpeas|garbanzo beans
black eyed peas|cowpeas
peas|green peas
fortified cereal|breakfast cereal
fortified bread|enriched bread
enriched pasta
enriched rice
liver|beef liver|chicken liver
avocado
oranges|orange
orange juice
beets
romaine lettuce
kale
collard greens
turnip greens
mustard greens
bok choy
okra
cauliflower
corn
artichokes
peanuts
sunflower seeds
almonds
walnuts
flaxseeds
edamame|soybeans
tofu
eggs
papaya
bananas
mango
cantaloupe
strawberries
lemons
grapefruit
kiwi
wheat germ
quinoa
brewers yeast|nutritional yeast
yeast extract|marmite|vegemite
fortified orange juice
whole grains
oatmeal
brown rice
spaghetti squash
parsley
tomato juice
tomatoes
bell peppers
green beans
lima beans
split peas
mung beans
fava beans
blackberries
raspberries
mushrooms
endive
swiss chard
watercress
parsnips
fortified flour
enriched cornmeal
fortified grits
enriched bagels
enriched english muffins
chinese cabbage|napa cabbage
mustard spinach
adzuki beans
cannellini beans
great northern beans
chicken giblets
turkey giblets
beef kidney
fortified oatmeal
spinach pasta
`, "2026-11-07");

P("Name a food high in magnesium","nursing","",`
spinach
almonds
cashews
pumpkin seeds|pepitas
dark chocolate|chocolate|cocoa|cocoa powder
avocado
bananas
black beans
beans|kidney beans|navy beans|pinto beans
lentils
chickpeas
edamame|soybeans
tofu
peanuts|peanut butter
whole grains
brown rice
quinoa
oatmeal|oats
whole wheat bread
buckwheat
barley
bran|wheat bran|oat bran
shredded wheat
fortified cereal
chia seeds
flaxseeds
sunflower seeds
sesame seeds|tahini
brazil nuts
walnuts
pine nuts
pecans
hazelnuts
salmon
mackerel
halibut
tuna
leafy greens|dark leafy greens
swiss chard
kale
collard greens
broccoli
okra
artichokes
potatoes
sweet potatoes
peas
figs
dates
raisins
prunes
dried apricots
blackberries
yogurt
milk
kefir
molasses|blackstrap molasses
seaweed|kelp
mineral water
amaranth
millet
teff
spelt
wild rice
beet greens
lima beans
black eyed peas
butternut squash
acorn squash
plantains
passion fruit
bran flakes
soy milk|fortified soy milk
almond butter
cashew butter
cacao nibs
hemp seeds
pistachios
macadamia nuts
mixed nuts
trail mix
granola
whole wheat pasta
bulgur
rye bread
cornmeal
spirulina
`, "2026-11-07");

P("Name a food high in saturated fat or cholesterol","nursing","",`
butter
red meat|beef|steak
bacon
cheese
eggs|egg yolks
whole milk
cream|heavy cream
ice cream
fried foods|fried chicken
fast food
sausage
hot dogs
salami
pepperoni
processed meats|deli meat
pork|pork chops|pork belly
lamb
ground beef|hamburgers|burgers
liver|organ meats
shrimp
lobster
crab
squid|calamari
coconut oil
palm oil
coconut|coconut milk
lard
ghee
shortening
margarine|stick margarine
cream cheese
sour cream
whipped cream
half and half
pastries
croissants
donuts|doughnuts
cookies
cake
pie|pie crust
pizza
french fries
potato chips|chips
milkshakes
chocolate|milk chocolate
fudge
cheesecake
alfredo sauce|cream sauces
mac and cheese
gravy
poultry skin|chicken skin
duck
goose
caviar|fish roe
sardines
mayonnaise
biscuits
muffins
cinnamon rolls
egg nog|eggnog
custard
quiche
cheeseburgers
ribs|spare ribs
corned beef
pastrami
bologna
spam
kidney
sweetbreads
brain
beef tallow|tallow
suet
duck fat
schmaltz|chicken fat
cheddar
parmesan
mozzarella
full fat yogurt
butter chicken
fried fish
tempura
nachos
quesadillas
fettuccine
cream soups
hollandaise
foie gras
chorizo
pate
`, "2026-11-07");

/* ---- NEW STANDARD DAILY PROMPTS: NURSING part 3 (batch 2026-11-05, board-first) ---- */
P("Name a symptom of lupus","nursing","",`
butterfly rash|malar rash
joint pain|arthralgia|arthritis
fatigue
fever|low grade fever
photosensitivity|sun sensitivity
hair loss|alopecia
mouth ulcers|oral ulcers|mouth sores
raynaud phenomenon|raynauds
kidney problems|lupus nephritis|nephritis
proteinuria|protein in urine|foamy urine
hematuria|blood in urine
chest pain|pleuritic chest pain|pain with deep breathing
pleuritis|pleurisy
pleural effusion
pericarditis
pericardial effusion
discoid rash|discoid lesions
swelling|edema
swollen joints|joint swelling
morning stiffness
muscle pain|myalgia
weight loss
swollen lymph nodes|lymphadenopathy
anemia|hemolytic anemia
low white blood cells|leukopenia
lymphopenia
low platelets|thrombocytopenia
blood clots|thrombosis|antiphospholipid syndrome
miscarriage|recurrent pregnancy loss
headache
seizures
psychosis
depression
anxiety
cognitive problems|lupus fog|brain fog|memory problems
stroke
peripheral neuropathy|numbness
dry eyes|sjogren syndrome
dry mouth
shortness of breath|dyspnea
cough
pulmonary hypertension
interstitial lung disease
shrinking lung syndrome
libman sacks endocarditis
myocarditis
accelerated atherosclerosis|coronary artery disease
hypertension
vasculitis
livedo reticularis
purpura
urticaria|hives
nasal ulcers
skin rash
subacute cutaneous lupus
lupus profundus|lupus panniculitis
chilblains|chilblain lupus
nail fold changes
splenomegaly|enlarged spleen
hepatomegaly
abdominal pain
nausea|vomiting
diarrhea
pancreatitis
serositis
jaccoud arthropathy
avascular necrosis
osteoporosis
neonatal lupus|congenital heart block
eye inflammation|uveitis|scleritis
retinal vasculitis|cotton wool spots
optic neuritis
loss of appetite
malaise
sleep problems
mood swings
transverse myelitis
aseptic meningitis
chorea
night sweats
hearing loss
ringing in ears|tinnitus
vertigo
fingertip ulcers|digital ulcers
leg ulcers
dry skin
confusion|delirium
`, "2026-11-07");

P("Name a side effect of radiation therapy","nursing","",`
fatigue
skin changes|skin irritation|radiation dermatitis|skin redness|erythema
dry skin|dry desquamation
moist desquamation|peeling skin|blistering
itching|pruritus
hair loss in the treated area|hair loss|alopecia
nausea|vomiting
diarrhea
mouth sores|mucositis|stomatitis
dry mouth|xerostomia
taste changes|loss of taste
difficulty swallowing|dysphagia
sore throat
esophagitis
loss of appetite|anorexia
weight loss
bone marrow suppression|low blood counts|myelosuppression
anemia
low white blood cells|leukopenia|neutropenia
low platelets|thrombocytopenia
infection
radiation pneumonitis|pneumonitis
pulmonary fibrosis|lung fibrosis
cough
shortness of breath
cystitis|radiation cystitis
urinary frequency|urinary urgency|painful urination
proctitis|radiation proctitis
rectal bleeding
enteritis|radiation enteritis
bowel obstruction|strictures
fistula
infertility|sterility
early menopause|ovarian failure
erectile dysfunction|sexual dysfunction
vaginal dryness
vaginal stenosis
lymphedema
fibrosis|tissue fibrosis
skin hyperpigmentation|darkening of skin
telangiectasia
skin atrophy
poor wound healing
osteoradionecrosis
bone fractures|pathologic fractures
dental caries|radiation caries|tooth decay
trismus|jaw stiffness
thick saliva
hearing loss
hypothyroidism
cognitive changes|memory problems
brain edema|cerebral edema
headache
radiation necrosis
cataracts
dry eyes
secondary cancer|secondary malignancy
heart disease|radiation induced heart disease|cardiotoxicity
pericarditis
coronary artery disease
growth problems in children|stunted growth
myelopathy|spinal cord damage
plexopathy|brachial plexopathy
peripheral neuropathy
radiation recall
somnolence syndrome
hoarseness|voice changes
loss of eyelashes
nasal dryness
ear infections|otitis media
lhermitte sign
hepatitis|radiation hepatitis
nephritis|radiation nephritis
hemorrhagic cystitis
incontinence
depression
anxiety
sleep problems|insomnia
edema|swelling
breast swelling
breast shrinkage
nipple soreness
sweat gland loss|decreased sweating
lymphopenia
teratogenicity|birth defects
skin ulceration
`, "2026-11-07");

P("Name a symptom of COPD","nursing","",`
shortness of breath|dyspnea
chronic cough|cough
sputum production|mucus production|productive cough|increased sputum
wheezing
chest tightness
barrel chest
pursed lip breathing
use of accessory muscles|accessory muscle use
tripod position|tripoding
fatigue
frequent respiratory infections|frequent chest infections
cyanosis|blue lips
clubbing|digital clubbing
weight loss|cachexia
diminished breath sounds|decreased breath sounds
prolonged expiration|prolonged expiratory phase
hypoxemia|low oxygen|low sats
hypercapnia|co2 retention|high co2
respiratory acidosis
exacerbations|copd flare
dyspnea on exertion|breathlessness on exertion
exercise intolerance
orthopnea
morning headaches
confusion
anxiety
depression
insomnia
edema|swelling in ankles|leg swelling
cor pulmonale|right sided heart failure
jugular venous distension|jvd
pulmonary hypertension
polycythemia
crackles
rhonchi
hyperresonance on percussion|hyperresonance
increased ap diameter
flattened diaphragm
pink puffer
blue bloater
muscle wasting
loss of appetite
difficulty speaking in full sentences
nasal flaring
tachypnea|rapid breathing
tachycardia
hoover sign
dynamic hyperinflation|air trapping
pneumothorax
osteoporosis
weakness
frequent throat clearing
hemoptysis
chest pain
nocturnal desaturation
decreased activity tolerance
poor concentration
irritability
somnolence|co2 narcosis
asterixis
plethora|ruddy complexion
leaning forward on arms
distant heart sounds
thick sputum|tenacious sputum
purulent sputum|change in sputum color|green sputum|yellow sputum
breathlessness when eating
early satiety
decreased chest expansion
intercostal retractions
paradoxical breathing
decreased tactile fremitus
social isolation
hepatomegaly
frequent colds
chest congestion
pulsus paradoxus
waking up breathless
hypoventilation
`, "2026-11-07");

P("Name a symptom of anemia","nursing","",`
fatigue|tiredness
weakness
pale skin|pallor
shortness of breath|dyspnea|dyspnea on exertion
dizziness|lightheadedness
rapid heart rate|tachycardia
palpitations
cold hands and feet|cold intolerance
headache
chest pain|angina
brittle nails
spoon nails|koilonychia
pica|geophagia|craving dirt|amylophagia|craving starch
pagophagia|ice cravings
restless legs
hair loss
sore tongue|glossitis|smooth tongue
cracks at corners of mouth|angular cheilitis
pale conjunctiva|conjunctival pallor
pale nail beds
jaundice|yellow skin
dark urine
splenomegaly|enlarged spleen
numbness and tingling|peripheral neuropathy
memory problems|confusion
irritability
difficulty concentrating
fainting|syncope
exercise intolerance
heart murmur|flow murmur
heart failure
orthostatic hypotension
tinnitus|pulsatile tinnitus|whooshing in ears
loss of appetite
poor growth in children
developmental delay
frequent infections
difficulty swallowing|plummer vinson syndrome|esophageal webs
beefy red tongue
loss of vibration sense
loss of proprioception
ataxia|unsteady gait
depression
leg cramps
sleepiness
decreased work capacity
mood changes
widened pulse pressure
bounding pulse
capillary refill delay
insomnia
bone pain|bone deformities
hand foot syndrome|dactylitis
gallstones
leg ulcers
pain crisis
priapism
frontal bossing
chipmunk facies
fast breathing|tachypnea
low blood pressure|hypotension
lethargy
apathy
blurred vision
retinal hemorrhages
dry hair
dry skin
easy bruising
bleeding gums
petechiae
fever
decreased libido
erectile dysfunction
nail ridges
brittle hair
increased cardiac output
cardiomegaly
`, "2026-11-07");

P("Name a sign of pain in a nonverbal patient","nursing","",`
grimacing|facial grimace
moaning|groaning
crying
restlessness|agitation
guarding|guarding the painful area|holding the painful area
wincing
frowning|furrowed brow
clenched jaw|jaw clenching
clenched fists
rigid posture|rigidity|tense body|increased muscle tone|muscle tension
increased heart rate|tachycardia
increased blood pressure|hypertension
increased respiratory rate|rapid breathing
sweating|diaphoresis
dilated pupils
withdrawal from touch|pulling away
rubbing the painful area|touching the painful area|pointing to painful area
rocking
pacing
calling out|yelling|screaming
striking out|combativeness|aggression
resisting care|resistance to turning
labored breathing
noisy breathing
fidgeting
tossing and turning
decreased appetite|refusing food
sleep disturbance|insomnia|sleeping less
withdrawn|social withdrawal|decreased interaction
confusion|increased confusion
irritability
changes in activity|decreased activity
inconsolable crying|difficult to console
kicking legs|legs drawn up|flexed knees
arched back|arching
high pitched cry
whimpering
sighing
splinting
holding breath
nasal flaring
quivering chin|chin quiver
tremors
eyes tightly closed|squeezed eyes
facial expression changes
lip biting
tearing|tears|tearful eyes
ventilator asynchrony|fighting the ventilator|coughing on ventilator
oxygen desaturation
pallor
flushing
nausea
immobility|lying very still
limping
protective posturing
reluctance to move|refusing to move|reduced mobility
repetitive movements
self injurious behavior|head banging
wandering
picking at clothes
mood changes
depression
increased vocalizations
verbal outbursts|cursing
grunting
tense shoulders
stiff limbs
squirming
raised upper lip|raised eyebrows
deepened nasolabial folds
open mouth|mouth stretched open
tight lips|pursed lips
eye twitching
rapid blinking|blinking rapidly
pulling at lines|pulling at tubes
leaning to one side
curled up|fetal position
stiff gait
refusing to walk
sleeping more
crying out with movement
bracing
`, "2026-11-07");

P("Name a risk factor for preterm labor","nursing","",`
previous preterm birth|history of preterm birth|prior preterm delivery
multiple pregnancy|twins|triplets|multiples
short cervix|cervical shortening
cervical insufficiency|incompetent cervix
urinary tract infection|uti
bacterial vaginosis
sexually transmitted infections|stis|chlamydia|gonorrhea|trichomoniasis
chorioamnionitis|intraamniotic infection
smoking|tobacco use
drug use|substance use|cocaine|methamphetamine
alcohol use
preeclampsia
high blood pressure|hypertension
diabetes|gestational diabetes
placenta previa
placental abruption|abruptio placentae
polyhydramnios
premature rupture of membranes|prom|pprom
uterine abnormalities|bicornuate uterus|septate uterus
uterine fibroids
previous cervical surgery|leep|cone biopsy
short interpregnancy interval|pregnancies close together
teen pregnancy|maternal age under 17|young maternal age
advanced maternal age|maternal age over 35
low prepregnancy weight|underweight
obesity
poor nutrition|malnutrition
inadequate prenatal care|lack of prenatal care
stress|chronic stress
domestic violence|intimate partner violence
low socioeconomic status|poverty
black race|african american
ivf|in vitro fertilization|assisted reproductive technology
vaginal bleeding|bleeding in pregnancy
periodontal disease|gum disease|periodontitis
anemia
fetal anomalies|birth defects
trauma|abdominal trauma|falls
long working hours|standing for long periods
physical abuse
kidney disease
thyroid disease
lupus
antiphospholipid syndrome
asthma
depression
sickle cell disease
group b strep
pyelonephritis
asymptomatic bacteriuria
fever
appendicitis
abdominal surgery during pregnancy
dehydration
uterine overdistension
diethylstilbestrol exposure|des exposure
low education level
single marital status|unmarried
lack of social support
air pollution
high altitude
obstetric cholestasis|intrahepatic cholestasis of pregnancy
fetal growth restriction|iugr
male fetus
previous second trimester loss|previous miscarriage
multiple induced abortions
short stature
low vitamin d
cmv infection
malaria
hiv
syphilis
covid 19
influenza
listeria
oligohydramnios
cervical funneling
positive fetal fibronectin|fetal fibronectin
maternal infection
hyperemesis gravidarum
placenta accreta
fetal demise of a twin
`, "2026-11-07");

P("Name a symptom of bipolar mania","nursing","",`
elevated mood|euphoria|feeling on top of the world
irritability|irritable mood|easily angered
grandiosity|grandiose delusions|inflated self esteem|inflated sense of importance|believing they are famous
decreased need for sleep|not sleeping|insomnia|sleeping only a few hours|feeling rested after little sleep
pressured speech|rapid speech|talkativeness|excessive talking
racing thoughts
flight of ideas|jumping from topic to topic
distractibility
increased goal directed activity
risky behavior|reckless behavior|impulsivity
excessive spending|spending sprees|shopping sprees
hypersexuality|increased sex drive|sexual indiscretion|reckless sex|promiscuity
psychomotor agitation|agitation
restlessness|inability to sit still
increased energy
poor judgment
clang associations
hallucinations|auditory hallucinations|visual hallucinations
delusions
paranoia|paranoid delusions
psychosis|loss of touch with reality
aggression|hostility
anger outbursts
poor concentration
weight loss
not eating|forgetting to eat|decreased appetite
dehydration
exhaustion
reckless driving|speeding
gambling
substance use|alcohol use|binge drinking|drug use
flamboyant dress|bright clothing|excessive makeup|inappropriate dress
loud speech|loudness
intrusiveness
manipulative behavior
lack of insight|denial of illness
inappropriate humor|joking
sexually provocative behavior
disinhibition
starting many projects|taking on many projects
quitting job|impulsive decisions
giving away money
writing excessively
excessive phone calls|excessive texting
pacing
hyperactivity
labile mood|mood swings
belief in special powers
religious preoccupation|feeling connected to god
feeling invincible
rapid shifts of topic|tangentiality
loose associations
difficulty following conversation
demanding behavior
argumentativeness|picking fights
violence
legal problems
relationship problems
increased socialization|excessive sociability
excessive self confidence|overconfidence
neglect of hygiene|poor hygiene
neglect of responsibilities
catatonia
difficulty being interrupted
unrealistic plans
unwise investments|reckless investments
heightened creativity
increased productivity
heightened senses
thought disorder
talking to strangers
singing
excessive laughter
excessive optimism
low frustration tolerance
impatience
interrupting others
overcommitting
`, "2026-11-07");

P("Name a food high in oxalate","nursing","",`
spinach
rhubarb
beets|beetroot
beet greens
swiss chard
almonds|almond milk|almond flour
cashews
peanuts|peanut butter
nuts
chocolate|cocoa|dark chocolate
tea|black tea|iced tea
sweet potatoes
potatoes|potato chips|french fries
soy|soybeans|tofu|soy milk|tempeh|edamame
navy beans
bran|wheat bran|bran flakes
okra
raspberries
blackberries
kiwi
figs
dates
star fruit|carambola
parsley
leeks
collard greens
kale
celery
carrots
green beans
sesame seeds|tahini
pecans
hazelnuts
pine nuts
walnuts
buckwheat
quinoa
amaranth
millet
whole wheat bread
cornmeal|grits
miso
cranberries
rutabaga
turnips
parsnips
eggplant
tomato sauce|tomatoes
dandelion greens
purslane
sorrel
cassava
taro
yams
instant coffee
beer
vitamin c supplements|high dose vitamin c
carob
black pepper
cinnamon
turmeric
cumin
fennel seeds
lentils
refried beans
kidney beans
pinto beans
black beans
chia seeds
rice bran
wheat germ
brown rice
whole wheat pasta
mustard greens
goji berries
gooseberries
currants
marmalade
baked beans
white beans|cannellini beans
fava beans
chickpeas|garbanzo beans
bulgur
rye
semolina|durum wheat
brazil nuts
pistachios
sunflower seeds
pumpkin seeds
green tea|matcha
poppy seeds
nutmeg
ginger
oregano
`, "2026-11-07");

P("Name a nursing action during a seizure","nursing","",`
time the seizure|note the time|note duration
protect the head|cushion the head|place pillow under head|something soft under head
turn on side|side lying position|recovery position|lateral position
stay with the patient|do not leave the patient
do not restrain|avoid restraints|do not hold down
nothing in the mouth|do not put anything in the mouth
loosen tight clothing|loosen clothing|loosen collar
clear the area|move objects away|remove nearby objects|remove harmful objects
lower to the floor|ease to the floor
call for help
maintain airway|airway management
suction|suction secretions
oxygen|apply oxygen
padded side rails|pad side rails|keep side rails up
lower the bed|bed in lowest position
observe and document|document the seizure
note type of movements|note tonic and clonic phases
note body parts involved
note eye deviation
note incontinence
check level of consciousness after
neuro checks|neurological assessment
vital signs after the seizure
check blood glucose|fingerstick glucose
give benzodiazepine|lorazepam|ativan|diazepam|midazolam
iv access|establish iv access
give antiepileptic|fosphenytoin|levetiracetam|keppra|phenytoin
reorient after|reorientation
let the patient rest|allow sleep postictal
privacy|provide privacy
remove glasses
call 911 if over 5 minutes|call emergency services
call rapid response
status epilepticus protocol|monitor for status epilepticus
pulse oximetry
cardiac monitoring
remove dentures
check for injuries after
check tongue for bites
note aura
note postictal state
reassure the patient
call provider|notify provider
seizure precautions
suction at bedside
oxygen at bedside
emergency medications at bedside
fall precautions
check medication levels|antiepileptic drug levels
note triggers
monitor for aspiration
ensure safety
avoid giving food or fluids|do not give oral medications during seizure
assess breathing
jaw thrust
nasopharyngeal airway|nasal airway
bag valve mask|ambu bag
eeg monitoring
note pupil changes
assess motor strength after
check temperature
give rectal diazepam|diastat
intranasal midazolam|nayzilam
buccal midazolam
magnesium sulfate for eclampsia
dim lights|quiet environment
seizure diary|seizure log
note where seizure started|note focal onset
note level of consciousness during seizure
note respirations during seizure
note skin color|note cyanosis
note automatisms
provide oral care after
change linens after
anticipate intubation
give glucose if hypoglycemic|give dextrose
give thiamine
assess for todd paralysis|postictal weakness
swallow screen before eating
note time to recovery
`, "2026-11-07");

P("Name a symptom of PTSD","nursing","",`
flashbacks
nightmares|bad dreams|dreams about the trauma
intrusive memories|intrusive thoughts|unwanted memories
avoidance|avoiding reminders|avoiding news
hypervigilance|constant alertness|scanning surroundings
exaggerated startle response|easily startled|jumpy
insomnia|trouble sleeping
irritability
angry outbursts|anger
difficulty concentrating
emotional numbness|numbing
detachment|feeling detached|alienation|estrangement from others
guilt|survivor guilt
shame
depression
anxiety
panic attacks
loss of interest|anhedonia
negative thoughts|negative beliefs about self
memory problems|amnesia for the trauma|dissociative amnesia|inability to remember parts of the trauma
dissociation
depersonalization
derealization
self destructive behavior|reckless behavior
substance use|alcohol use
suicidal thoughts|suicidal ideation
self blame
distorted blame
fear
horror
hopelessness
social withdrawal|isolation
relationship problems
trust issues|difficulty trusting
inability to feel positive emotions
physical reactions to reminders|sweating|racing heart
avoiding people or places|avoiding crowds
avoiding thoughts or feelings|avoiding conversations about the trauma
psychological distress at reminders
re experiencing|reliving the event
night sweats
headaches
stomach problems|gi problems
chronic pain
fatigue
hyperarousal
aggression
violence
feeling on edge|feeling keyed up
sense of foreshortened future
emotional dysregulation
crying spells
mood swings
low self esteem
reenactment in play
trauma themed play
regression in children|bedwetting
separation anxiety
clinginess
flat affect
impaired functioning
job problems
eating changes
chest pain
dizziness
trembling
hyperventilation
somatic complaints
sleeping with lights on|fear of the dark
feeling unsafe
pessimism
anniversary reactions
sexual dysfunction|decreased libido
teeth grinding
muscle tension
restlessness
fear of recurrence
overprotectiveness of loved ones
avoiding sleep
`, "2026-11-07");

/* ---- NEW STANDARD DAILY PROMPTS: DENTAL (batch 2026-11-05) ---- */
P("Name a cause of jaw or facial pain","dental","",`
toothache|tooth pain|odontalgia
tooth abscess|dental abscess|abscessed tooth|abscess
tmj disorder|tmd|temporomandibular disorder|tmj|tmj dysfunction|tmjd
cavity|tooth decay|dental caries|caries
irreversible pulpitis
reversible pulpitis
pulpitis
periapical abscess|apical abscess
symptomatic apical periodontitis|acute apical periodontitis
periodontal abscess|gum abscess
pericoronitis
impacted wisdom tooth|impacted third molar|wisdom teeth
cracked tooth|cracked tooth syndrome
bruxism|teeth grinding|grinding|clenching
myofascial pain|myofascial pain dysfunction|myalgia of masticatory muscles
tmj disc displacement|anterior disc displacement|disc displacement with reduction|disc displacement without reduction
closed lock
tmj osteoarthritis|degenerative joint disease of the tmj
tmj rheumatoid arthritis|rheumatoid arthritis
tmj dislocation|jaw dislocation|open lock
trigeminal neuralgia|tic douloureux
sinusitis|sinus infection|maxillary sinusitis
dry socket|alveolar osteitis
jaw fracture|mandible fracture|broken jaw
facial fracture
zygomatic fracture|cheekbone fracture
heart attack|myocardial infarction|mi
angina|referred cardiac pain
giant cell arteritis|temporal arteritis|jaw claudication
migraine
cluster headache
tension headache
paroxysmal hemicrania
sunct
postherpetic neuralgia
shingles|herpes zoster|zoster of the trigeminal nerve
bell palsy
glossopharyngeal neuralgia
eagle syndrome|elongated styloid process
occipital neuralgia
atypical odontalgia|persistent dentoalveolar pain|phantom tooth pain
persistent idiopathic facial pain|atypical facial pain
burning mouth syndrome
neuroma|traumatic neuroma
nerve injury|post traumatic trigeminal neuropathy
osteomyelitis|osteomyelitis of the jaw
osteonecrosis of the jaw|mronj|bronj|medication related osteonecrosis of the jaw
osteoradionecrosis
cellulitis|facial cellulitis
ludwig angina
fascial space infection
dental trauma|tooth injury
cracked filling|broken filling
high filling|high restoration|occlusal trauma|trauma from occlusion
recent dental work|post operative pain
orthodontic braces|orthodontic tooth movement
dentures|ill fitting dentures|denture sore spot
tooth sensitivity|dentin hypersensitivity
gum disease|periodontitis
necrotizing ulcerative gingivitis|nug|trench mouth
teething
mouth ulcer|canker sore|aphthous ulcer
cold sore|herpes labialis
herpetic gingivostomatitis
salivary stone|sialolithiasis
sialadenitis|salivary gland infection
parotitis
mumps
parotid tumor|salivary gland tumor
oral cancer|mouth cancer|squamous cell carcinoma
nasopharyngeal carcinoma
jaw tumor
metastatic cancer to the jaw
multiple myeloma
odontogenic cyst
infected cyst
ear infection|otitis media
otitis externa|swimmer's ear
earache|ear pain
tonsillitis
peritonsillar abscess|quinsy
pharyngitis|sore throat
dental implant problem|peri implantitis
coronoid hyperplasia
condylar fracture
tmj ankylosis
synovitis|capsulitis
condylar resorption|idiopathic condylar resorption
juvenile idiopathic arthritis
psoriatic arthritis
ankylosing spondylitis
gout
lyme disease
stress|anxiety
fibromyalgia
depression
gum chewing
nail biting
whiplash|neck injury
cervical spine disorder|neck pain
poor posture
trauma|facial trauma|injury
sports injury
assault|getting punched
dental injection|local anesthetic injection|needle injury
long dental appointment|wide mouth opening
tetanus|lockjaw
sickle cell crisis
multiple sclerosis
acoustic neuroma|vestibular schwannoma
brain tumor
cerebellopontine angle tumor
aneurysm
stroke
carotidynia
thyroiditis
herpes simplex
temporal tendinitis
lateral pterygoid spasm
masseter hypertrophy
hemifacial spasm
sinus tumor|maxillary sinus carcinoma
cemental tear
vertical root fracture|root fracture
internal resorption
cracked cusp
food impaction
galvanic pain|galvanism
pressure from a retainer
chewing hard food
`, "2026-11-07");
P("Name a cause of facial swelling","dental","",`
tooth abscess|dental abscess|abscessed tooth|abscess|tooth infection|dental infection
allergic reaction|allergy
angioedema
cellulitis|facial cellulitis|infection
wisdom tooth extraction|tooth extraction|oral surgery
injury|trauma|facial trauma
bee sting|insect bite|insect sting
anaphylaxis
periapical abscess|apical abscess
periodontal abscess|gum abscess
pericoronitis
ludwig angina
fascial space infection
buccal space infection
canine space infection
submandibular space infection
sublingual space infection
submental space infection
masticator space infection
pterygomandibular space infection
infratemporal space infection
lateral pharyngeal space infection
retropharyngeal abscess
peritonsillar abscess|quinsy
periorbital cellulitis|preseptal cellulitis
orbital cellulitis
cavernous sinus thrombosis
osteomyelitis|osteomyelitis of the jaw
sinusitis|sinus infection
hereditary angioedema|c1 esterase inhibitor deficiency
ace inhibitor angioedema|ace inhibitors|lisinopril
nsaid reaction
latex allergy
local anesthetic allergy
contact dermatitis
mumps
parotitis
acute bacterial parotitis|suppurative parotitis
sialadenitis|salivary gland infection
salivary stone|sialolithiasis
sialadenosis|sialosis
sjogren syndrome
parotid tumor|salivary gland tumor
pleomorphic adenoma
warthin tumor
mucoepidermoid carcinoma
lymphoma
hodgkin lymphoma
burkitt lymphoma
swollen lymph nodes|lymphadenopathy
lymphadenitis
cat scratch disease
tuberculosis|scrofula
mononucleosis|mono|epstein barr virus
hiv|parotid lymphoepithelial cysts
actinomycosis|lumpy jaw
mucormycosis
necrotizing fasciitis
emphysema|subcutaneous emphysema|air from dental handpiece|air syringe emphysema
hematoma
bruising|ecchymosis
jaw fracture|mandible fracture
zygomatic fracture
nasal fracture
le fort fracture
orbital fracture|blowout fracture
dental implant surgery
root canal flare up|endodontic flare up
sodium hypochlorite accident|bleach accident
dental injection hematoma|posterior superior alveolar block hematoma
cushing syndrome|moon face|moon facies
steroids|corticosteroid use|prednisone
hypothyroidism|myxedema
nephrotic syndrome
kidney failure|kidney disease
heart failure
liver failure
preeclampsia
pregnancy
superior vena cava syndrome
fluid retention|edema
sleeping on your face|morning puffiness
salty food|high salt diet
alcohol use|alcohol
crying
sunburn
dermatomyositis
lupus|systemic lupus erythematosus
melkersson rosenthal syndrome
cheilitis granulomatosa|orofacial granulomatosis
crohn disease
sarcoidosis
heerfordt syndrome|uveoparotid fever
kimura disease
cherubism
fibrous dysplasia
paget disease
ameloblastoma
odontogenic keratocyst|keratocystic odontogenic tumor
dentigerous cyst
infected cyst
jaw tumor
osteosarcoma
oral cancer|squamous cell carcinoma
lipoma
hemangioma
vascular malformation
lymphatic malformation|cystic hygroma|lymphangioma
masseter hypertrophy|masseteric hypertrophy
cosmetic filler|dermal filler reaction
erysipelas
impetigo
shingles|herpes zoster
boil|furuncle|carbuncle
acne|cystic acne
rosacea
stye|hordeolum
dacryocystitis
frontal bone osteomyelitis|pott puffy tumor
mastoiditis
dental pulp necrosis|dead tooth
`, "2026-11-07");
P("Name a white or red lesion of the mouth","dental","",`
leukoplakia
erythroplakia|erythroplasia
oral thrush|candidiasis|oral candidiasis|thrush|candida
lichen planus|oral lichen planus
squamous cell carcinoma|oral cancer|cancer|mouth cancer
linea alba
leukoedema
frictional keratosis
morsicatio buccarum|cheek biting|chronic cheek chewing
hairy leukoplakia|oral hairy leukoplakia
nicotine stomatitis|smoker's palate
snuff dipper's pouch|tobacco pouch keratosis|smokeless tobacco keratosis
white sponge nevus
geographic tongue|benign migratory glossitis|erythema migrans
pseudomembranous candidiasis
erythematous candidiasis|atrophic candidiasis
hyperplastic candidiasis|candidal leukoplakia
denture stomatitis
angular cheilitis|angular cheilosis|perleche
median rhomboid glossitis
proliferative verrucous leukoplakia|pvl
verrucous carcinoma
speckled leukoplakia|erythroleukoplakia
epithelial dysplasia|dysplasia
carcinoma in situ
actinic cheilitis|actinic cheilosis
oral submucous fibrosis
aspirin burn
chemical burn
thermal burn|pizza burn
traumatic ulcer
aphthous ulcer|canker sore|aphthous stomatitis
fibrin clot|fibrinous exudate
materia alba
hairy tongue|black hairy tongue
coated tongue
fordyce granules|fordyce spots
koplik spots
mucous patch|secondary syphilis
chancre|primary syphilis
papilloma|squamous papilloma
verruca vulgaris|oral wart
condyloma acuminatum
focal epithelial hyperplasia|heck disease
lupus|discoid lupus|systemic lupus erythematosus
lichenoid reaction|lichenoid drug reaction
contact stomatitis|cinnamon reaction|allergic contact stomatitis
graft versus host disease
uremic stomatitis
hereditary benign intraepithelial dyskeratosis|witkop disease
dyskeratosis congenita
pachyonychia congenita
darier disease
scar
gingival cyst
parulis|gum boil
pyogenic granuloma
peripheral giant cell granuloma
hemangioma
petechiae
purpura
ecchymosis|bruise
erythema multiforme
stevens johnson syndrome
mucositis|oral mucositis
radiation mucositis
plasma cell gingivitis
desquamative gingivitis
mucous membrane pemphigoid|cicatricial pemphigoid
pemphigus vulgaris
bullous pemphigoid
herpangina
herpetic gingivostomatitis
recurrent herpes|intraoral herpes
hand foot and mouth disease
scarlet fever|strawberry tongue
kawasaki disease
measles
pernicious anemia|b12 deficiency|hunter glossitis
iron deficiency anemia|atrophic glossitis
folate deficiency
riboflavin deficiency|vitamin b2 deficiency
niacin deficiency|pellagra
plummer vinson syndrome
necrotizing ulcerative gingivitis|nug|trench mouth
strawberry gingivitis|granulomatosis with polyangiitis|wegener granulomatosis
leukemia|leukemic gingival infiltration
thrombocytopenia
kaposi sarcoma
hereditary hemorrhagic telangiectasia|osler weber rendu
sturge weber syndrome
crohn disease|cobblestoning
pyostomatitis vegetans
reactive arthritis|reiter syndrome
behcet disease
lupus vulgaris|tuberculosis ulcer
histoplasmosis
gonorrhea|gonococcal stomatitis
toothpaste reaction|sloughing from toothpaste|sls reaction
mouthwash burn|alcohol mouthwash reaction
`, "2026-11-07");
P("Name an infection of the mouth or jaws","dental","",`
tooth abscess|dental abscess|abscessed tooth|abscess
cavity|tooth decay|dental caries
gingivitis|gum infection
periodontitis|gum disease|periodontal disease
oral thrush|candidiasis|oral candidiasis|thrush
cold sore|herpes labialis|fever blister
periapical abscess|apical abscess
periodontal abscess|lateral periodontal abscess
gingival abscess
pericoronal abscess|pericoronitis
pulpitis
pulp necrosis
symptomatic apical periodontitis
chronic apical abscess
phoenix abscess|acute exacerbation of chronic apical periodontitis
condensing osteitis
dry socket|alveolar osteitis
osteomyelitis|osteomyelitis of the jaw
acute osteomyelitis
chronic osteomyelitis
garre osteomyelitis|proliferative periostitis
sclerosing osteomyelitis
osteoradionecrosis
osteonecrosis of the jaw|mronj|bronj
cellulitis|facial cellulitis
ludwig angina
fascial space infection
buccal space infection
canine space infection
submandibular space infection
sublingual space infection
submental space infection
masticator space infection
pterygomandibular space infection
lateral pharyngeal space infection
retropharyngeal space infection
cavernous sinus thrombosis
odontogenic sinusitis|maxillary sinusitis
necrotizing ulcerative gingivitis|nug|anug|trench mouth|vincent infection
necrotizing ulcerative periodontitis|nup
necrotizing stomatitis
noma|cancrum oris
peri implantitis
peri implant mucositis
infected socket
infected cyst
aggressive periodontitis|localized aggressive periodontitis|molar incisor pattern periodontitis
herpetic gingivostomatitis|primary herpetic gingivostomatitis|herpes|herpes simplex|hsv
recurrent intraoral herpes
herpes zoster|shingles
chickenpox|varicella
herpangina|coxsackievirus
hand foot and mouth disease
measles|koplik spots
mumps|viral parotitis
infectious mononucleosis|epstein barr virus|mono
hairy leukoplakia|oral hairy leukoplakia
cytomegalovirus|cmv
hpv|human papillomavirus|oral papilloma
oral warts|verruca vulgaris
condyloma acuminatum
focal epithelial hyperplasia|heck disease
molluscum contagiosum
hiv|hiv associated periodontitis|linear gingival erythema
kaposi sarcoma|hhv 8
pseudomembranous candidiasis
erythematous candidiasis
hyperplastic candidiasis
chronic mucocutaneous candidiasis
denture stomatitis
angular cheilitis
median rhomboid glossitis
mucormycosis|zygomycosis
aspergillosis
histoplasmosis
blastomycosis
coccidioidomycosis|valley fever
paracoccidioidomycosis
cryptococcosis
actinomycosis|cervicofacial actinomycosis|lumpy jaw
syphilis
primary syphilis|chancre
secondary syphilis|mucous patches
tertiary syphilis|gumma
congenital syphilis
gonorrhea|gonococcal pharyngitis
chlamydia
tuberculosis|oral tuberculosis
scrofula|tuberculous lymphadenitis
leprosy|hansen disease
cat scratch disease
tetanus
diphtheria
scarlet fever
strep throat|streptococcal pharyngitis
tonsillitis
peritonsillar abscess|quinsy
impetigo
erysipelas
staph infection|staphylococcus aureus
mrsa
acute bacterial parotitis|suppurative parotitis
sialadenitis
submandibular sialadenitis
lymphadenitis
leishmaniasis
infected lip piercing|tongue piercing infection
infected implant
post extraction infection
`, "2026-11-07");
P("Name a cause of taste changes","dental","",`
cold|common cold|upper respiratory infection
covid 19|coronavirus|covid
smoking|tobacco
aging|old age
medications|drug side effect
dry mouth|xerostomia
chemotherapy|chemo
radiation therapy|head and neck radiation
zinc deficiency|zinc
poor oral hygiene
gum disease|periodontitis
tooth abscess|dental infection
oral thrush|oral candidiasis|candidiasis
sinus infection|sinusitis
flu|influenza
allergies|allergic rhinitis
nasal polyps
head injury|head trauma
bell palsy
chorda tympani injury|chorda tympani damage
facial nerve damage
lingual nerve injury
glossopharyngeal nerve damage
middle ear surgery|ear surgery
ear infection|otitis media
tonsillectomy
wisdom tooth extraction|third molar surgery
dental work
dentures|wearing dentures
burning mouth syndrome
pregnancy
menopause
hypothyroidism
diabetes
kidney failure|uremia|chronic kidney disease
liver disease|cirrhosis
vitamin b12 deficiency
iron deficiency
niacin deficiency
vitamin a deficiency
sjogren syndrome
gerd|acid reflux
stroke
multiple sclerosis
parkinson disease
alzheimer disease|dementia
epilepsy|seizures
brain tumor
migraine
depression
cushing syndrome
adrenal insufficiency|addison disease
cancer
hiv
hepatitis
metronidazole|flagyl
clarithromycin|biaxin
captopril
ace inhibitors
lithium
terbinafine|lamisil
penicillamine
allopurinol
metformin
antihistamines
anticholinergics
antidepressants
amitriptyline
acetazolamide
topiramate
phenytoin
carbamazepine
nifedipine
diltiazem
losartan
spironolactone
statins
fluoroquinolones|ciprofloxacin
tetracyclines
paxlovid|nirmatrelvir ritonavir
cisplatin
5 fluorouracil
methotrexate
eszopiclone|lunesta
zopiclone
gold salts
pine nut syndrome|pine nuts
chlorhexidine mouthwash|chlorhexidine
mouthwash
toothpaste|sodium lauryl sulfate
lead poisoning
mercury poisoning
heavy metal exposure
pesticides
burned tongue|scalded tongue
tongue piercing
geographic tongue
oral lichen planus
alcohol use
nutrition deficiency|malnutrition
eating disorder
dehydration
cancer of the tongue|oral cancer
nasal surgery
septoplasty
general anesthesia
intubation
long covid
familial dysautonomia|riley day syndrome
amyloidosis
sarcoidosis
`, "2026-11-07");
P("Name a dental diagnostic test","dental","",`
x ray|xray|x rays|dental x ray|radiograph|radiographs
bitewing|bitewing radiograph
periapical radiograph|pa
panoramic radiograph|panorex|pano|opg
cbct|cone beam ct|cone beam computed tomography
cold test|endo ice|cold pulp test
electric pulp test|ept|pulp tester
heat test|hot test
percussion test|percussion
palpation|palpation test
bite test|tooth slooth|biting test
periodontal probing|probing|pocket depth|perio charting
bleeding on probing|bop
mobility test|tooth mobility
transillumination
visual exam|visual tactile exam|explorer exam
oral cancer screening
biopsy
incisional biopsy
excisional biopsy
brush biopsy|oral cdx
fine needle aspiration|fna
exfoliative cytology|cytology
punch biopsy
toluidine blue|tolonium chloride
velscope|autofluorescence
vizilite|chemiluminescence
lugol iodine
test cavity
selective anesthesia test|anesthetic test
laser doppler flowmetry
pulse oximetry of the pulp|pulp oximetry
caries detector dye|caries indicator dye
diagnodent|laser fluorescence caries detection
fiber optic transillumination|foti|difoti
quantitative light induced fluorescence|qlf
electrical conductance|caries monitor
icdas
caries risk assessment|cambra
saliva test|salivary flow rate|sialometry
salivary buffering capacity test
mutans streptococci count|bacterial count
snyder test
lactobacillus count
bana test
dna probe test|microbial dna testing
culture and sensitivity|bacterial culture
gingival crevicular fluid test
furcation probing|nabers probe
occlusal analysis|articulating paper
shimstock|shim stock
t scan|digital occlusal analysis
study models|diagnostic casts
diagnostic wax up
facebow transfer
cephalometric radiograph|lateral ceph|cephalogram
cephalometric analysis
hand wrist radiograph
occlusal radiograph
full mouth series|fmx|full mouth x rays
intraoral photographs|clinical photographs
intraoral scan|digital impression
mri|tmj mri
ct scan|computed tomography
ultrasound
sialography
scintigraphy|salivary scintigraphy
arthrography
arthroscopy|tmj arthroscopy
tmj auscultation|joint sounds
range of motion|maximum mouth opening|interincisal opening
muscle palpation
load test
jaw tracking
emg|electromyography
cranial nerve exam
blood pressure|blood pressure check
pulse
temperature
blood glucose|blood sugar|finger stick
hba1c|hemoglobin a1c
inr|international normalized ratio
pt|prothrombin time
ptt|partial thromboplastin time
bleeding time
platelet count
cbc|complete blood count
white blood cell count
anc|absolute neutrophil count
liver function tests
creatinine|kidney function
hiv test
hepatitis panel
pregnancy test
serum calcium
alkaline phosphatase
pth|parathyroid hormone
anti ssa|anti ro|anti ssb|anti la
direct immunofluorescence
indirect immunofluorescence
tzanck smear
koh prep|potassium hydroxide prep
pas stain
gram stain
immunohistochemistry
frozen section
nikolsky sign
diascopy
hpv test|p16
tuberculin skin test|ppd
mallampati score
asa classification
extraoral exam
intraoral exam
lymph node palpation
plaque index
gingival index
plaque disclosing|disclosing tablets
pulp vitality test|pulp sensibility test
radiovisiography|digital radiograph
sleep study|polysomnography
`, "2026-11-07");
P("Name a classification system or index used in dentistry","dental","",`
angle classification|angle class|angle's classification of malocclusion
gv black classification|black's classification|black caries classification
kennedy classification
asa classification|asa physical status
ellis classification|ellis fracture classification
miller classification of gingival recession|miller recession classification
miller mobility index|tooth mobility classification
glickman furcation classification|furcation classification
hamp furcation classification
tarnow and fletcher furcation classification
aap periodontitis staging and grading|2017 periodontal classification|staging and grading
cairo recession classification|rt1 rt2 rt3
pell and gregory classification
winter classification
le fort classification
mallampati classification|mallampati score
frankl behavior rating scale|frankl scale
wright classification of child behavior
dmft|dmft index|decayed missing filled teeth
dmfs|dmfs index
deft|dmft for primary teeth
icdas|international caries detection and assessment system
caries risk assessment|cambra
plaque index|silness and loe plaque index
gingival index|loe and silness gingival index
o leary plaque control record|plaque control record
simplified oral hygiene index|ohi s|greene and vermillion index
community periodontal index|cpi|cpitn
periodontal screening and recording|psr
russell periodontal index
ramfjord periodontal disease index
sulcus bleeding index|muhlemann index
papillary bleeding index
dean fluorosis index|dean's index
thylstrup fejerskov index|tf index
tooth surface index of fluorosis|tsif
iotn|index of orthodontic treatment need
par index|peer assessment rating
dai|dental aesthetic index
handicapping labiolingual deviation index|hld index
little irregularity index
bolton analysis|bolton ratio
moyers mixed dentition analysis
tanaka johnston analysis
steiner analysis
downs analysis
ricketts analysis
mcnamara analysis
tweed analysis
wits appraisal
fdi tooth numbering|two digit system|fdi system
universal numbering system|universal tooth numbering
palmer notation|zsigmondy palmer system
haderup system
weine canal classification
vertucci canal classification
andreasen trauma classification|who trauma classification
iadt trauma classification
seibert ridge classification
allen ridge classification
cawood and howell classification
lekholm and zarb bone quality classification
misch bone density classification|d1 to d4
misch available bone classification
kent classification
atwood residual ridge classification
house classification of patients|house mental classification
applegate rules
cummer classification
skinner classification
avant classification
bailyn classification
acp prosthodontic diagnostic index|pdi
mount and hume classification|si sta classification
pitts caries classification
nabers furcation grading
tnm staging|tnm classification
broders grading
who classification of odontogenic tumors
who oral lesion classification
cleft classification|veau classification
kernahan striped y
lahshal classification|lahshal
tessier classification
pruzansky classification
gustafson criteria|age estimation
demirjian method|demirjian stages
nolla stages
moorrees stages
cvm staging|cervical vertebral maturation
fishman skeletal maturity index
tanner stages
smile line classification|tjan classification
gingival biotype|thick thin biotype
maynard and wilson periodontal phenotype
gargiulo biologic width
wilkes classification|wilkes staging of tmj
rdc tmd|dc tmd|diagnostic criteria for tmd
helkimo index
pain scale|visual analog scale|vas
faces pain scale|wong baker
sicc|severe early childhood caries
`, "2026-11-07");
P("Name an oral histology term","dental","",`
enamel
dentin
pulp|dental pulp
cementum
periodontal ligament|pdl
alveolar bone
gingiva
odontoblast
ameloblast
cementoblast
fibroblast
osteoblast
osteoclast
cementocyte
enamel rod|enamel prism
interrod enamel
enamel rod sheath
striae of retzius|retzius lines|retzius
perikymata
hunter schreger bands
enamel tufts
enamel lamellae
enamel spindles
neonatal line
gnarled enamel
aprismatic enamel|prismless enamel
tomes process
enamel organ
outer enamel epithelium
inner enamel epithelium
stellate reticulum
stratum intermedium
reduced enamel epithelium
nasmyth membrane|primary enamel cuticle
dental lamina
dental papilla
dental follicle|dental sac
tooth germ
bud stage
cap stage
bell stage
enamel knot
enamel cord
hertwig epithelial root sheath|hers
epithelial rests of malassez|rests of malassez
rests of serres
epithelial diaphragm
dentinal tubules
odontoblastic process|tomes fiber
peritubular dentin|intratubular dentin
intertubular dentin
predentin
mantle dentin
circumpulpal dentin
primary dentin
secondary dentin
tertiary dentin|reparative dentin|reactionary dentin
sclerotic dentin
dead tracts
interglobular dentin
tomes granular layer
imbrication lines of von ebner|von ebner lines
contour lines of owen|owen lines
lines of andresen
korff fibers
dentinoenamel junction|dej
cementoenamel junction|cej
dentinocemental junction
cell free zone of weil|zone of weil
cell rich zone
odontoblastic layer
pulp core|pulp proper
plexus of raschkow
pulp stones|denticles
pulp horn
apical foramen
accessory canal|lateral canal
acellular cementum|primary cementum
cellular cementum|secondary cementum
intermediate cementum
cementicles
sharpey fibers
alveolar crest fibers
horizontal fibers
oblique fibers
apical fibers
interradicular fibers
principal fibers
transseptal fibers
dentogingival fibers
circular fibers
oxytalan fibers
lamina dura
bundle bone
cribriform plate|alveolar bone proper
cancellous bone|trabecular bone
cortical bone
lamellar bone
haversian system|osteon
howship lacunae|resorption lacunae
reversal line
junctional epithelium
sulcular epithelium
oral epithelium
gingival sulcus
attached gingiva
free gingiva|marginal gingiva
interdental papilla|papilla
gingival col|col
mucogingival junction
stippling
keratinized epithelium
parakeratinized epithelium
orthokeratinized epithelium
nonkeratinized epithelium
lining mucosa
masticatory mucosa
specialized mucosa
stratum basale|basal layer
stratum spinosum|prickle cell layer
stratum granulosum
stratum corneum
lamina propria
submucosa
rete pegs|rete ridges
basement membrane
hemidesmosomes
desmosomes
melanocytes
langerhans cells
merkel cells
filiform papillae
fungiform papillae
circumvallate papillae
foliate papillae
taste buds
von ebner glands
serous acini
mucous acini
serous demilunes
myoepithelial cells
intercalated duct
striated duct
excretory duct
parotid gland
submandibular gland
sublingual gland
minor salivary glands
weber glands
blandin nuhn glands|anterior lingual glands
fordyce granules
amelogenin
enamelin
ameloblastin
amelogenesis
dentinogenesis
cementogenesis
hydroxyapatite
fluorapatite
dentin sialophosphoprotein|dspp
type i collagen
odontoclast
root resorption
tooth eruption
passive eruption
active eruption
exfoliation
initiation stage
histodifferentiation
morphodifferentiation
apposition
maturation stage|enamel maturation
secretory stage
ruffle ended ameloblasts
smooth ended ameloblasts
neural crest cells|ectomesenchyme
pharyngeal arches|branchial arches
tuberculum impar
copula
lateral lingual swellings
foramen cecum
stomodeum
buccopharyngeal membrane
meckel cartilage
palatal shelves
primary palate
secondary palate
epstein pearls
bohn nodules
dental lamina cysts
`, "2026-11-07");
P("Name a dental term named after a person","dental","",`
angle classification|angle class|angle's classification
gv black classification|black's classification|black class|black|gv black
kennedy classification
curve of spee|spee curve
curve of wilson|wilson curve
curve of monson|monson curve|monson sphere
bennett movement|bennett angle|bennett shift
bonwill triangle
balkwill angle
posselt envelope|posselt envelope of motion
frankfort horizontal plane|frankfort plane
camper plane
ante law|ante's law
pound line
applegate rules
cusp of carabelli|carabelli cusp|carabelli trait
hertwig epithelial root sheath|hertwig root sheath
rests of malassez
rests of serres
striae of retzius|retzius lines
nasmyth membrane
tomes process
tomes fibers
tomes granular layer
hunter schreger bands
von ebner lines
von ebner glands
owen lines|contour lines of owen
lines of andresen
korff fibers
zone of weil|cell free zone of weil
plexus of raschkow
sharpey fibers
howship lacunae
haversian canal
volkmann canals
meckel cartilage
wharton duct
stensen duct
bartholin duct
ducts of rivinus
fordyce granules|fordyce spots
koplik spots
stafne bone cyst|stafne defect
hutchinson incisors
mulberry molars|moon molars|fournier molars
turner tooth|turner hypoplasia
epstein pearls
bohn nodules
riga fede disease
ludwig angina
vincent angina|vincent infection
bell palsy
frey syndrome
eagle syndrome
gardner syndrome
gorlin syndrome|gorlin goltz syndrome
peutz jeghers syndrome
sjogren syndrome
behcet disease
crohn disease
addison disease
paget disease
mccune albright syndrome
pindborg tumor
warthin tumor
kaposi sarcoma
burkitt lymphoma
hodgkin lymphoma
wegener granulomatosis
stevens johnson syndrome
melkersson rosenthal syndrome
papillon lefevre syndrome
chediak higashi syndrome
ehlers danlos syndrome
marfan syndrome
treacher collins syndrome
pierre robin sequence
crouzon syndrome
apert syndrome
down syndrome
sturge weber syndrome
osler weber rendu|rendu osler weber
plummer vinson syndrome
heck disease
hand schuller christian disease
letterer siwe disease
heerfordt syndrome
ramsay hunt syndrome
horner syndrome
reiter syndrome
witkop disease
hunter glossitis
nikolsky sign
tzanck smear
mallampati score
frankl scale
pell and gregory classification
winter classification
le fort fracture|le fort|le fort i|le fort ii|le fort iii
ellis classification
miller classification
glickman classification
hamp classification
tarnow and fletcher classification|tarnow classification
gow gates block|gow gates technique
vazirani akinosi block|akinosi block
nance appliance|nance holding arch
hawley retainer
herbst appliance
frankel appliance|frankel regulator
haas expander
hyrax expander
clark twin block|twin block
begg technique
tweed analysis|tweed triangle
andrews six keys|six keys to occlusion
ricketts analysis
steiner analysis
downs analysis
mcnamara analysis
wits appraisal
bolton analysis|bolton ratio
moyers analysis
tanaka johnston analysis
nance leeway space|leeway space of nance
baume spaces|baume classification
hellman stages
gracey curette
columbia curette
mccall curette
langer curette
barnhart curette
younger good curette
hirschfeld file
kirkland knife
orban knife
goldman fox knife
nabers probe
williams probe
marquis probe
michigan o probe
hedstrom file|h file
kerr file|k file
gates glidden drill
peeso reamer
schilder technique
grossman sealer
ivory matrix
tofflemire matrix|tofflemire retainer
wedelstaedt chisel
cryer elevator
potts elevator
seldin elevator
woodson elevator
molt mouth prop|molt curette
minnesota retractor
austin retractor
dean scissors
metzenbaum scissors
kelly hemostat
halsted mosquito
mayo scissors
adson forceps
allis forceps
frazier suction
yankauer suction
boley gauge
willis gauge
dakin solution
mount and hume classification
zsigmondy palmer notation|palmer notation
cleft lip millard repair|millard rotation advancement
von langenbeck palatoplasty
furlow palatoplasty
obwegeser sagittal split|bsso|sagittal split osteotomy
wilkes classification
caldwell luc procedure
kazanjian vestibuloplasty
edlan mejchar vestibuloplasty
widman flap|modified widman flap
neumann flap
kirkland flap
langer subepithelial connective tissue graft
branemark implant|branemark
`, "2026-11-07");
P("Name a lip condition","dental","",`
cold sore|herpes labialis|fever blister
chapped lips|dry lips|cheilitis
angular cheilitis|angular cheilosis|perleche
sunburned lips|lip sunburn
actinic cheilitis|actinic cheilosis|solar cheilitis
mucocele|mucous cyst
cleft lip
lip cancer|squamous cell carcinoma of the lip
basal cell carcinoma
melanoma
lip swelling|angioedema
hereditary angioedema
allergic reaction
contact cheilitis|allergic contact cheilitis
irritant contact cheilitis
lip licker's dermatitis|lip licking
exfoliative cheilitis
cheilitis glandularis
cheilitis granulomatosa|miescher cheilitis
orofacial granulomatosis
melkersson rosenthal syndrome
plasma cell cheilitis
lip laceration|cut lip|split lip
lip biting|morsicatio labiorum
lip piercing complications
lip bruise|lip hematoma
lip burn
labial melanotic macule|melanotic macule
venous lake
hemangioma
freckle|ephelis
peutz jeghers syndrome|perioral freckling
laugier hunziker syndrome
lip pits|commissural lip pits|congenital lip pits
van der woude syndrome
double lip
fordyce granules
impetigo
herpes zoster|shingles
chancre|syphilis
hand foot and mouth disease
erythema multiforme
stevens johnson syndrome
toxic epidermal necrolysis
lupus|discoid lupus
lichen planus
pemphigus vulgaris
kawasaki disease|cracked red lips
riboflavin deficiency|vitamin b2 deficiency
iron deficiency
b12 deficiency
zinc deficiency
dehydration
crohn disease
sarcoidosis
lip fillers complications|filler lumps
keratoacanthoma
squamous papilloma|wart|verruca vulgaris
molluscum contagiosum
condyloma
fibroma|irritation fibroma
lipoma
salivary gland tumor
canalicular adenoma
pleomorphic adenoma
mucoepidermoid carcinoma
macrocheilia|enlarged lips
microcheilia
lip incompetence|incompetent lips
short upper lip
lip trauma
blistering|lip blisters
cyanosis|blue lips
pale lips
lip tie|tight labial frenum
lip numbness|lip paresthesia
lip twitching
perioral dermatitis
eczema|atopic cheilitis
psoriasis
retinoid cheilitis|isotretinoin dry lips
drug induced cheilitis
candida cheilitis|oral thrush on lips
mouth breathing dry lips
smoker's lips|lip burns from smoking
lip lines|lip wrinkles
facial palsy affecting lips|bell palsy
lip scar
`, "2026-11-07");

P("Name a classic buzzword in oral pathology","dental","",`
soap bubble|soap bubble appearance|multilocular
ground glass|ground glass appearance
cotton wool|cotton wool appearance
sunburst|sunburst appearance|sunray
onion skin|onion skinning
hair on end|hair on end skull
floating teeth|teeth floating in air
punched out lesions|punched out radiolucencies
moth eaten|moth eaten bone
honeycomb|honeycomb appearance
tennis racket|tennis racquet
scalloping between roots|scalloped borders
inverted pear|inverted pear shaped radiolucency
heart shaped radiolucency
tear drop radiolucency|teardrop
target lesions|bullseye lesions
driven snow|driven snow appearance
ghost cells
ghost teeth
shell teeth
tulip shaped pulp|thistle tube pulp
flame shaped pulp
chevron pulp|crescent shaped pulp
rootless teeth
bulbous crowns
taurodontism|taurodont
dilaceration
hutchinson incisors|screwdriver incisors
mulberry molars
peg lateral|peg shaped lateral
dens in dente|dens invaginatus
talon cusp
loss of lamina dura
widened pdl space|symmetric widening of the pdl
garre periostitis|onion skin periosteum
sequestrum
involucrum
sclerotic border|corticated border
expansile lesion
cortical expansion
knife edge resorption|root resorption knife edge
spiked root resorption
mixed radiolucent radiopaque
flocculent radiopacities
cherub face|eyes to heaven|heavenward gaze
leontiasis ossea|lion face
cafe au lait spots|coast of maine
coast of california
starry sky|starry sky pattern
orphan annie nuclei
psammoma bodies
liesegang rings
chinese characters|chinese letters
owl eye inclusions|owl's eye
tombstone|row of tombstones
string of pearls
saw tooth rete ridges|sawtooth rete pegs
civatte bodies|colloid bodies
max joseph spaces
wickham striae
russell bodies
verocay bodies
antoni a|antoni a tissue
antoni b|antoni b tissue
reed sternberg cells
tzanck cells|acantholytic cells
intraepithelial clefting|suprabasilar clefting
subepithelial clefting|subepithelial split
nikolsky sign
cobblestone mucosa|cobblestoning
strawberry gingivitis
strawberry tongue
raspberry tongue
koplik spots
mucous patches
snail track ulcers
hunter glossitis|beefy red tongue
bald tongue|depapillated tongue
hairy tongue
leathery mucosa
corrugated mucosa|wrinkled appearance
milky white opalescent mucosa|disappears on stretching
wipes off|rubs off
cannot be wiped off
verrucous|cauliflower like
pedunculated
sessile
fluctuant
blanches on pressure|diascopy positive
mucin pooling
keratin pearls
dyskeratosis
koilocytes
palisading nuclei|peripheral palisading
reverse polarization|vickers gallagher
parakeratinized corrugated lining|corrugated parakeratin
basal palisading
satellite cysts|daughter cysts
cribriform pattern|swiss cheese pattern
perineural invasion
tadpole cells
signet ring cells
clear cells
multinucleated giant cells
foreign body giant cells
langhans giant cells
caseating granulomas
sulfur granules
birbeck granules|tennis racket granules
hemosiderin
amyloid|apple green birefringence
dystrophic calcification
eggshell calcification
hyperkeratosis
acanthosis
pseudoepitheliomatous hyperplasia
hourglass shape|dumbbell shaped
bilateral multilocular radiolucencies
shadow cells
duct like structures
plexiform pattern
follicular pattern
basaloid cells
stellate reticulum like cells
`, "2026-11-07");
P("Name an operative or restorative dentistry term","dental","",`
filling|restoration
cavity preparation|cavity prep|tooth preparation
outline form
resistance form
retention form
convenience form
extension for prevention
removal of remaining caries|caries removal
finishing enamel walls
toilet of the cavity|cleaning the preparation
pulpal floor
axial wall
gingival floor|gingival wall|gingival seat
cavosurface margin
cavosurface angle
line angle
point angle
isthmus
dovetail|occlusal dovetail
proximal box|box form
retention groove|retention grooves
retention locks
slot preparation
tunnel preparation
minimally invasive dentistry|minimal intervention
selective caries removal|partial caries removal
stepwise excavation
indirect pulp cap|indirect pulp capping
direct pulp cap|direct pulp capping
pulp exposure
affected dentin
infected dentin
remaining dentin thickness
bevel
butt joint
unsupported enamel
enamel margin
undercut
convergence|occlusal convergence
divergence
taper
matrix band|matrix
tofflemire|tofflemire retainer
sectional matrix
wedge|wooden wedge
contact|proximal contact|contact point
open contact
overhang|restoration overhang
marginal ridge
embrasure
occlusal anatomy
carving
burnishing
polishing
finishing
condensation|amalgam condensation
trituration
amalgam
composite|composite resin|tooth colored filling
glass ionomer|gic
resin modified glass ionomer|rmgi
compomer
flowable composite
packable composite|bulk fill composite
microfill composite
nanofill composite|nanohybrid
hybrid composite
sealant|pit and fissure sealant
preventive resin restoration|prr
liner
base
calcium hydroxide|dycal
mta|mineral trioxide aggregate
biodentine
zinc oxide eugenol|zoe
varnish|cavity varnish|copal varnish
etch|acid etch|phosphoric acid
total etch|etch and rinse
self etch
selective etch
universal adhesive
bonding agent|adhesive|dentin bonding agent
primer
hybrid layer
smear layer
resin tags
wet bonding|moist bonding
collagen collapse
microleakage
polymerization shrinkage
c factor|configuration factor
incremental layering|incremental technique
curing light|light curing|photopolymerization
depth of cure
oxygen inhibited layer
postoperative sensitivity
recurrent caries|secondary caries
marginal breakdown|ditching
creep
corrosion
tarnish
galvanism
mercury|mercury hygiene
amalgam bonding
pins|retentive pins|pin retained restoration
slot retained amalgam
core buildup|buildup|core
post and core
rubber dam|dental dam
isolation|cotton roll isolation
retraction cord
class i restoration|class i cavity|class i|class 1
class ii restoration|class ii cavity|class ii|class 2
class iii restoration|class iii cavity|class iii|class 3
class iv restoration|class iv cavity|class iv|class 4
class v restoration|class v cavity|class v|class 5
class vi restoration|class vi cavity|class vi|class 6
mo|do|mod filling
inlay
onlay
overlay
veneer
direct restoration
indirect restoration
shade selection|shade matching
opacity|translucency
anatomic layering
art|atraumatic restorative treatment
interim therapeutic restoration|itr
temporary filling|cavit
irm
caries risk
caries arrest|silver diamine fluoride|sdf
resin infiltration|icon
remineralization
demineralization
white spot lesion
cervical lesion|noncarious cervical lesion
abfraction
abrasion
erosion
attrition
cracked tooth
cuspal coverage
cusp fracture
high speed handpiece|high speed
slow speed handpiece|low speed
bur|carbide bur|diamond bur
spoon excavator|excavator
hatchet
hoe
gingival margin trimmer|gmt
enamel chisel
amalgam carrier
condenser|plugger
burnisher
carver|hollenback carver|discoid cleoid
articulating paper
occlusal adjustment
proximal caries
occlusal caries
root caries
rampant caries
arrested caries
caries detector dye
`, "2026-11-07");
P("Name a fixed prosthodontics term","dental","",`
crown|cap
bridge|fixed partial denture|fpd|fixed bridge
abutment
pontic
retainer
connector
veneer
inlay
onlay
post and core
core buildup|buildup
implant crown
cantilever bridge
maryland bridge|resin bonded bridge|resin bonded fixed partial denture
fixed fixed bridge
fixed movable bridge|nonrigid connector
pier abutment
ante law|ante's law
crown to root ratio
ferrule|ferrule effect
biologic width|supracrestal tissue attachment
finish line|margin
chamfer
heavy chamfer
shoulder
shoulder with bevel|beveled shoulder
knife edge|feather edge
slice preparation
axial reduction
occlusal reduction
incisal reduction
functional cusp bevel
taper|total occlusal convergence
path of insertion|path of draw
resistance form
retention form
undercut
axial groove|proximal groove
box
die
die spacer
master cast|working cast
impression|final impression
digital impression|intraoral scan
gingival retraction|retraction cord|gingival displacement
double cord technique
shade|shade selection|shade guide
value
hue
chroma
translucency
provisional|temporary crown|provisional restoration
custom provisional
cementation|luting
try in
seating
marginal fit|marginal adaptation
marginal gap
open margin
overcontoured crown
emergence profile
occlusal clearance
occlusal adjustment
centric relation
maximum intercuspation|centric occlusion
canine guidance
group function
mutually protected occlusion
anterior guidance
working side
nonworking side|balancing side
interference
facebow|face bow
articulator|semi adjustable articulator
occlusal registration|bite registration
pontic design
ridge lap pontic|saddle pontic
modified ridge lap pontic
ovate pontic
hygienic pontic|sanitary pontic
conical pontic|bullet pontic
pfm|porcelain fused to metal
full cast crown|full gold crown|fgc
all ceramic crown
zirconia crown|zirconia
lithium disilicate|emax|e max
monolithic crown
layered crown
three quarter crown|partial veneer crown
seven eighths crown
pinledge
endocrown
telescopic crown|double crown
coping
metal coping
framework
porcelain fracture|chipping
debonding|crown came off
cement washout
zinc phosphate cement
glass ionomer cement
resin cement
resin modified glass ionomer cement|rmgi cement
zinc polycarboxylate
temporary cement|temp bond
dual cure cement
silane
hydrofluoric acid etching
air abrasion|sandblasting
cad cam|cad/cam
cerec
milling
pressed ceramic
sintering
glaze|glazing
stain
wax up|diagnostic wax up
mockup
smile design|digital smile design
full mouth rehabilitation
vertical dimension of occlusion|vdo
occlusal plane
splinted crowns|splinting
long span bridge
secondary caries
endodontically treated tooth
fiber post
cast post
prefabricated post
remake
`, "2026-11-07");
P("Name a dental laboratory step or term","dental","",`
wax up|wax pattern|waxing
pour up|pouring the model|pouring stone
model|cast|stone cast
die
die trimming|ditching the die
die spacer
die hardener
sectioned model|die system|pindex
articulator mounting|mounting casts
facebow transfer
spruing|sprue
sprue former
investing|investment
investment material
gypsum bonded investment
phosphate bonded investment
silica bonded investment
casting ring
ring liner
burnout|wax elimination
casting|lost wax technique
centrifugal casting machine
induction casting
crucible
flux
divesting
pickling
finishing and polishing
metal finishing
porcelain application|layering porcelain
opaque layer
dentin porcelain|body porcelain
enamel porcelain|incisal porcelain
porcelain firing|firing
vacuum firing
glaze firing|glazing
stain and glaze
condensation of porcelain
porcelain furnace
pressing|heat pressing|pressed ceramic
milling|cad cam milling
3d printing|additive manufacturing
scanning|lab scanner
design software|exocad
sintering
sintering furnace
zirconia milling
denture setup|tooth setup|tooth arrangement
wax try in
wax rim|occlusion rim
baseplate|record base
custom tray|individual tray
border molding
boxing the impression
beading
flasking
dewaxing|boil out
packing acrylic|compression molding
injection molding
processing|curing acrylic
deflasking
remount|laboratory remount
selective grinding
denture finishing
denture polishing
denture reline
denture rebase
denture repair
heat cure acrylic
cold cure acrylic|self cure acrylic
light cure acrylic
pmma|polymethyl methacrylate
monomer
polymer
dough stage
partial denture framework
surveying|survey
surveyor
duplicating the cast|refractory cast
blockout
relief wax
framework casting
cobalt chromium|chrome cobalt
titanium
type iv stone|die stone
type iii stone|dental stone
plaster|type ii plaster
model trimmer
vibrator
vacuum mixer
bunsen burner|torch
wax carver|wax instruments
pkt instruments|pk thomas
inlay wax
baseplate wax
sticky wax
utility wax
boxing wax
bite registration
lab prescription|lab slip|work authorization
shade guide|shade tab
model analysis
ortho model|study model
thermoforming|vacuum forming
essix retainer
night guard|occlusal splint
mouthguard|sports guard
bleaching tray
retainer fabrication
wire bending
soldering
laser welding
electropolishing
sandblasting|airborne particle abrasion
heat treatment
porcelain repair
quality control
remake
dental technician|lab tech
cdt|certified dental technician
digital lab
`, "2026-11-07");
P("Name a cephalometric landmark, plane or measurement","dental","",`
sella|s point
nasion|n point
a point|subspinale|point a
b point|supramentale|point b
pogonion|pog
menton|me
gnathion|gn
gonion|go
porion|po
orbitale|or
anterior nasal spine|ans
posterior nasal spine|pns
basion|ba
articulare|ar
condylion|co
pterygoid point|pt point
pterygomaxillary fissure|ptm
upper incisor tip|incision superius
lower incisor tip|incision inferius
upper incisor apex
lower incisor apex
soft tissue nasion
pronasale|nose tip
subnasale|sn
labrale superius|ls
labrale inferius|li
stomion
soft tissue pogonion
soft tissue menton
columella
glabella
bolton point
key ridge
pterygoid vertical
frankfort horizontal plane|frankfort plane|fh plane|frankfort|frankfort horizontal
sn line|sella nasion line|sn plane
mandibular plane|go me plane
palatal plane|ans pns plane
occlusal plane|functional occlusal plane
facial plane|n pog
a pog line
e line|ricketts esthetic line|esthetic line
s line|steiner s line
h line|holdaway line
burstone line|b line
nasion perpendicular|mcnamara line
basion nasion plane|ba n
facial axis
sna|sna angle
snb|snb angle
anb|anb angle
wits appraisal|wits
fma|frankfort mandibular plane angle
fmia|frankfort mandibular incisor angle
impa|incisor mandibular plane angle
tweed triangle
sn mp|sn to mandibular plane angle|sn gogn
y axis angle|y axis
facial angle
angle of convexity
gonial angle
saddle angle|n s ar
articular angle|s ar go
jarabak ratio|facial height ratio
interincisal angle
u1 to sn|upper incisor to sn
u1 to na
l1 to nb
u1 to palatal plane
lower incisor to a pog
holdaway ratio
nasolabial angle
mentolabial sulcus
upper lip to e line
lower lip to e line
anterior face height|afh|total face height
lower anterior face height|lafh
upper anterior face height
posterior face height|pfh
anterior cranial base
posterior cranial base
cranial base angle
effective midface length|co a
effective mandibular length|co gn
maxillomandibular differential
ramus height
mandibular body length
facial depth
facial taper
mandibular arc
lower facial height angle
steiner analysis
downs analysis
tweed analysis
ricketts analysis
mcnamara analysis
harvold analysis
jarabak analysis
burstone analysis|coges
holdaway analysis
legan and burstone
sassouni analysis
bjork analysis
wylie analysis
cvm|cervical vertebral maturation
superimposition
hyoid bone position
airway space|pharyngeal airway
sella turcica
`, "2026-11-07");
P("Name a problem with dentures","dental","",`
loose dentures|loose|loose denture|poor retention|denture slipping
sore spots|denture sores|denture ulcer|traumatic ulcer
denture stomatitis|denture related stomatitis
angular cheilitis
oral thrush|candidiasis
bad breath|denture odor
trouble eating|difficulty chewing
trouble speaking|speech problems|lisping
whistling
clicking dentures|clicking|clacking teeth
gagging
broken denture|cracked denture|denture fracture
denture tooth came off|lost tooth from denture
staining|stained dentures
plaque buildup|calculus on dentures
cheek biting
tongue biting
lip biting
bone loss|ridge resorption|residual ridge resorption
flabby ridge|fibrous ridge
combination syndrome|kelly syndrome
epulis fissuratum|denture induced fibrous hyperplasia
inflammatory papillary hyperplasia|papillary hyperplasia
leaf fibroma|fibroepithelial polyp
denture irritation
burning mouth
dry mouth|xerostomia
increased salivation|too much saliva
taste changes|loss of taste
hot food burns|reduced temperature sensation
food trapped under denture
poor fit|ill fitting dentures
rocking denture|unstable denture|instability
upper denture dropping
lower denture lifting|floating lower denture
wrong bite|malocclusion of dentures
collapsed bite|loss of vertical dimension|overclosure
increased vertical dimension|open vertical dimension
sunken face|collapsed face|aged facial appearance
deepened nasolabial folds
jaw pain|tmj pain
facial muscle soreness
headaches
mental nerve compression|lip numbness
pain on biting
denture adhesive overuse|zinc toxicity from adhesive
allergy to acrylic|monomer allergy
residual monomer irritation
wear of denture teeth
worn out dentures|old dentures
cosmetic dissatisfaction|fake looking teeth
wrong shade
teeth too big or too small
midline off
too much gum showing
lip support problems
self consciousness|psychological adjustment|denture anxiety
denture lost|lost dentures
denture left in overnight
porosity
warping|warped denture
denture discoloration from bleach
denture cleaner damage
dropped denture breaking
clasp broken|broken clasp
loose clasp|clasp loosened
partial denture rocking
abutment tooth decay
abutment tooth loss|abutment tooth mobility
gum recession around abutments
food stuck around clasps
metal taste
overdenture attachment wear|locator wear
o ring wear
loose implant overdenture
peri implantitis
torus interference
undercut problems|bony undercut
sharp bony ridges|bone spicule
knife edge ridge
aspiration of denture|swallowed denture
choking on food
nutrition problems|poor nutrition
avoiding hard foods
squamous cell carcinoma under denture
sleeping with dentures
pneumonia risk|aspiration pneumonia
need for reline
need for rebase
`, "2026-11-07");
P("Name something people fear about going to the dentist","dental","",`
pain
needles|shots|injections
drill|dental drill
drill noise|sound of the drill
cost|price|bill
bad news|finding cavities
being judged|judgment|shame about teeth
root canal
tooth extraction|pulling teeth
gagging
choking
loss of control
lying back in the chair|being reclined
numbness
anesthesia not working|not getting numb
waking up during sedation
sedation|being put under
general anesthesia
smell of the office
taste of materials
bright lights
masks|faces covered
dental tools|sharp instruments
scraping
cleaning
x rays|radiation
bleeding
blood
being lectured about flossing
lecture about smoking
having to open wide
jaw pain
spit sink|saliva
water in throat
suction
rubber dam
claustrophobia
panic attack
fainting
past bad experience
childhood trauma
strangers in personal space
germs|infection
needle breaking
nerve damage
swelling afterward
dry socket
dentures|needing dentures
losing teeth
bad breath
being late or waiting
long appointments
missing work
insurance problems
upselling|unnecessary treatment
dentist mistakes|malpractice
allergic reaction
heart racing from epinephrine|epinephrine
nitrous oxide|laughing gas
fluoride|fluoride treatment taste
braces
wisdom teeth removal
implants
gum surgery
deep cleaning|scaling and root planing
probing|gum measuring
bitewing tab|x ray tab gagging
impressions|impression goo
cold air|air spray
sensitivity|sensitive teeth
crown prep
not being able to swallow
not being able to talk
not being able to breathe
nose breathing difficulty
sneezing or coughing in chair
drooling
embarrassment
being touched
students practicing
vibration
heat from the drill
burning smell
crying kids in waiting room
white coat syndrome
dentophobia|odontophobia
`, "2026-11-07");
P("Name a component or function of saliva","dental","",`
water
amylase|salivary amylase|ptyalin
lipase|lingual lipase
lysozyme
lactoferrin
iga|secretory iga|siga|immunoglobulin a
igg
igm
mucin|mucins|mucus
muc5b
muc7
statherin
histatins|histatin
proline rich proteins|prps
cystatins
salivary peroxidase|sialoperoxidase|lactoperoxidase
myeloperoxidase
thiocyanate
hypothiocyanite
defensins
cathelicidin|ll 37
agglutinin|salivary agglutinin|gp340
secretory leukocyte protease inhibitor|slpi
carbonic anhydrase vi|gustin
kallikrein
epidermal growth factor|egf
nerve growth factor|ngf
bicarbonate
phosphate
calcium
sodium
potassium
chloride
fluoride
magnesium
zinc
urea
ammonia
uric acid
glucose
cortisol
hormones|steroid hormones
albumin
enzymes
proteins
electrolytes
white blood cells|leukocytes
epithelial cells
bacteria|oral microbiome
lubrication
buffering|acid buffering|ph buffering
remineralization|remineralizing teeth
digestion|starch digestion
fat digestion
taste|taste perception|dissolving tastants
swallowing|bolus formation
speech|helps you talk
cleansing|oral clearance|washing away food
antimicrobial|antibacterial|fighting germs
antifungal
antiviral
pellicle formation|acquired pellicle
protecting teeth|protecting enamel
wound healing
tissue repair
moistening the mouth|keeping mouth moist
neutralizing acid
preventing cavities
dilution of sugars
supersaturation with calcium phosphate
thermal protection
excretion of drugs
diagnostic fluid|salivary diagnostics
water balance|thirst signal
mastication|chewing aid
denture retention
nitrate|nitrite
salivary ph|ph
flow rate|salivary flow
resting saliva|unstimulated saliva
stimulated saliva
serous saliva
mucous saliva
gingival crevicular fluid
`, "2026-11-07");
P("Name a condition treated by an oral and maxillofacial surgeon","dental","",`
impacted wisdom teeth|impacted third molars|wisdom teeth
impacted canine
non restorable teeth|hopeless teeth
broken jaw|jaw fracture|mandible fracture
facial fractures|facial trauma
le fort fracture
zygomatic fracture|cheekbone fracture
orbital floor fracture|blowout fracture
nasal fracture
condylar fracture
dentoalveolar fracture
avulsed tooth
jaw cyst|odontogenic cyst
dentigerous cyst
odontogenic keratocyst
radicular cyst|periapical cyst
ameloblastoma
odontoma
jaw tumor
oral cancer|mouth cancer|squamous cell carcinoma
head and neck cancer
salivary gland tumor
pleomorphic adenoma
salivary stone|sialolithiasis
mucocele
ranula
tmj disorder|tmd|tmj|tmj problems
tmj ankylosis
tmj dislocation
tmj internal derangement|disc displacement
tmj arthritis
condylar hyperplasia
cleft lip
cleft palate
alveolar cleft
craniofacial anomalies|craniosynostosis
jaw deformity|dentofacial deformity
underbite|mandibular prognathism|class iii skeletal
overbite|retrognathia|class ii skeletal
open bite|skeletal open bite
facial asymmetry
obstructive sleep apnea|sleep apnea
missing teeth|edentulism
bone loss|atrophic ridge
oral infection|odontogenic infection
facial abscess
ludwig angina
cellulitis
osteomyelitis
osteonecrosis of the jaw|mronj
osteoradionecrosis
oroantral fistula|oroantral communication
dry socket
nerve injury|inferior alveolar nerve injury|lingual nerve injury
trigeminal neuralgia
suspicious oral lesion
leukoplakia
lichen planus
fibroma
torus|tori
exostosis
frenum problem|tongue tie|ankyloglossia
lip tie
pericoronitis
facial cosmetic concerns|aging face
small chin|microgenia
fibrous dysplasia
central giant cell granuloma
cherubism
gardner syndrome
basal cell nevus syndrome|gorlin syndrome
hemifacial microsomia
pierre robin sequence
treacher collins syndrome
coronoid hyperplasia
eagle syndrome
masseter hypertrophy
osteoma
osteosarcoma
lymphoma
neck mass
lacerations|facial lacerations
dog bite
gunshot wound
burns
skin cancer of the face
salivary gland infection|sialadenitis
parotid tumor
sinus problems from teeth|odontogenic sinusitis
root tip in sinus
supernumerary teeth|mesiodens
ankylosed teeth
alveolar ridge defects
severe dental anxiety
`, "2026-11-07");
P("Name a cause of facial asymmetry","dental","",`
bell palsy|facial palsy|facial nerve palsy
stroke
normal variation|natural asymmetry
aging
trauma|facial injury
jaw fracture|mandible fracture
zygomatic fracture|cheekbone fracture
orbital fracture
nasal fracture|broken nose
malunion of a fracture
condylar fracture in childhood
dental abscess|tooth infection
facial swelling|cellulitis
missing teeth
tooth loss on one side
unilateral chewing|chewing on one side
crossbite|unilateral posterior crossbite
functional shift|mandibular shift
midline shift|dental midline shift
malocclusion
tmj disorder
tmj ankylosis
condylar hyperplasia
hemimandibular hyperplasia
hemimandibular elongation
condylar hypoplasia|condylar agenesis
juvenile idiopathic arthritis|jia
idiopathic condylar resorption
hemifacial microsomia|craniofacial microsomia
goldenhar syndrome|oculoauriculovertebral spectrum
treacher collins syndrome
cleft lip
cleft palate
craniosynostosis
plagiocephaly|positional plagiocephaly|flat head
torticollis|congenital muscular torticollis
parry romberg syndrome|progressive hemifacial atrophy
linear scleroderma|en coup de sabre
hemifacial hypertrophy|hemihyperplasia
beckwith wiedemann syndrome
proteus syndrome
klippel trenaunay syndrome
sturge weber syndrome
neurofibromatosis|nf1|plexiform neurofibroma
fibrous dysplasia
mccune albright syndrome
paget disease
cherubism
ossifying fibroma
ameloblastoma
odontogenic keratocyst
jaw cyst
jaw tumor
osteoma
osteochondroma of the condyle
osteosarcoma
chondrosarcoma
parotid tumor|salivary gland tumor
pleomorphic adenoma
lymphoma
hemangioma
vascular malformation
arteriovenous malformation|avm
lymphatic malformation|cystic hygroma
lipoma
masseter hypertrophy|masseteric hypertrophy
bruxism
sialadenitis|parotitis
mumps
oral cancer
skin cancer
facial surgery
orthognathic surgery complications
radiation therapy in childhood
botox
filler asymmetry
ptosis|drooping eyelid
horner syndrome
ramsay hunt syndrome
facial nerve tumor
acoustic neuroma surgery
parotidectomy|facial nerve damage after parotidectomy
lyme disease
moebius syndrome
hemifacial spasm
lipodystrophy|hiv lipoatrophy
silent sinus syndrome
sinus tumor
orbital tumor
`, "2026-11-07");

P("Name a dental organization or professional association","dental","",`
ada|american dental association
adha|american dental hygienists association
adaa|american dental assistants association
adea|american dental education association
asda|american student dental association
agd|academy of general dentistry
aapd|american academy of pediatric dentistry
aao|american association of orthodontists
aap|american academy of periodontology
aae|american association of endodontists
aaoms|american association of oral and maxillofacial surgeons
acp|american college of prosthodontists
aaomr|american academy of oral and maxillofacial radiology
aaomp|american academy of oral and maxillofacial pathology
aaphd|american association of public health dentistry
aaom|american academy of oral medicine
aacd|american academy of cosmetic dentistry
aaid|american academy of implant dentistry
icoi|international congress of oral implantologists
ada cerp
coda|commission on dental accreditation
jcnde|joint commission on national dental examinations
adex|american board of dental examiners
cdca|commission on dental competency assessments
wreb|western regional examining board
crdts|central regional dental testing service
srta|southern regional testing agency
nerb|northeast regional board
cites|council of interstate testing agencies
dental assisting national board|danb
state board of dentistry|state dental board
aadb|american association of dental boards
national dental association|nda
hispanic dental association|hda
society of american indian dentists
american association of women dentists|aawd
american dental society of anesthesiology|adsa
american society of dentist anesthesiologists|asda anesthesia
american academy of orofacial pain|aaop
american academy of dental sleep medicine|aadsm
american board of general dentistry
american board of orthodontics|abo
american board of pediatric dentistry|abpd
american board of periodontology
american board of endodontics
american board of oral and maxillofacial surgery|abomfs
american board of prosthodontics
american board of oral and maxillofacial pathology
american board of oral and maxillofacial radiology
american board of dental public health
american college of dentists|acd
international college of dentists|icd
pierre fauchard academy
american academy of dental science
academy of osseointegration
academy of dentistry international
special care dentistry association|scda
american academy of developmental medicine and dentistry
american academy of esthetic dentistry
american equilibration society
american academy of craniofacial pain
american cleft palate craniofacial association|acpa
organization for safety asepsis and prevention|osap
dental trade alliance
ada foundation
ada health policy institute|hpi
national institute of dental and craniofacial research|nidcr
cdc division of oral health
indian health service dental program|ihs dental
us army dental corps
navy dental corps
us public health service
va dental service
who|world health organization
fdi|fdi world dental federation
iadr|international association for dental research
aadr|american association for dental research
iapd|international association of paediatric dentistry
efp|european federation of periodontology
bda|british dental association
gdc|general dental council
cda|canadian dental association
california dental association
ada australia|australian dental association
nzda|new zealand dental association
dental council of india
rcds|royal college of dental surgeons
faculty of dental surgery|royal college of surgeons
smile train
operation smile
mission of mercy
give kids a smile
america's toothfairy
dentaquest foundation
oral health america
american dental volunteer association
delta dental foundation
dental lifeline network
remote area medical|ram
sigma phi alpha
omicron kappa upsilon|oku
alpha omega
delta sigma delta
psi omega
xi psi phi
student national dental association|snda
ada science and research institute
council on scientific affairs
cochrane oral health
`, "2026-11-07");
P("Name an orthodontic treatment or biomechanics term","dental","",`
braces|fixed appliances|brackets
clear aligners|invisalign
retainer|retention
tipping|uncontrolled tipping|controlled tipping
bodily movement|translation
rotation
intrusion
extrusion
torque
root movement|uprighting
center of resistance
center of rotation
moment
couple
moment to force ratio|m f ratio
force system
anchorage
reciprocal anchorage
stationary anchorage
absolute anchorage
maximum anchorage
minimum anchorage
anchorage loss
tad|temporary anchorage device|mini implant|mini screw
headgear
cervical headgear
high pull headgear
reverse pull headgear|facemask
transpalatal arch|tpa
nance appliance
lingual arch|lower lingual holding arch
rapid palatal expansion|rpe|rapid maxillary expansion
slow expansion
palatal expander|expander
class ii elastics
class iii elastics
cross elastics|crossbite elastics
vertical elastics|box elastics
interarch elastics
power chain|elastomeric chain
open coil spring
closed coil spring
ligature|elastic ligature|o ring
steel ligature
self ligating brackets|self ligation
bracket slot|slot size|018 slot|022 slot
straight wire appliance|preadjusted appliance
roth prescription
mbt prescription
edgewise appliance
begg technique
tip edge
archwire
nickel titanium|niti
stainless steel wire|ss wire
beta titanium|tma
copper niti
superelasticity
shape memory
stiffness
springback
formability
load deflection rate
resilience
friction|binding|notching
play|wire bracket play
leveling and aligning|leveling
space closure
sliding mechanics
loop mechanics|closing loop|t loop
en masse retraction
two step retraction
canine retraction
utility arch
intrusion arch
bite opening|bite turbos|bite ramps
overbite correction
overjet correction
crossbite correction
midline correction
finishing and detailing|finishing
bracket positioning|bonding brackets
indirect bonding
debonding|debond
banding|molar bands
interproximal reduction|ipr|stripping
extraction treatment|premolar extraction
nonextraction treatment
serial extraction
space maintainer
space regainer
growth modification
functional appliance
twin block
herbst appliance
mara
forsus
bionator
frankel appliance|frankel regulator
activator
chin cup
lip bumper
quad helix
w arch
habit appliance|tongue crib|thumb crib
orthognathic surgery|jaw surgery
surgically assisted rapid palatal expansion|sarpe
distraction osteogenesis
camouflage treatment
relapse
fiberotomy|circumferential supracrestal fiberotomy|csf
hawley retainer
essix retainer|clear retainer
bonded retainer|fixed retainer|lingual retainer
hyalinization
undermining resorption
frontal resorption
pressure side
tension side
optimal force|light continuous force
continuous force
interrupted force
intermittent force
pdl remodeling
root resorption
white spot lesions
black triangles
decalcification
attachments|aligner attachments
refinement
phase i treatment|early treatment|interceptive orthodontics
phase ii treatment|comprehensive orthodontics
cephalometric analysis
treatment planning
bolton discrepancy
arch length discrepancy|crowding
spacing
leeway space
e space
`, "2026-11-07");
P("Name a sedation or anesthesia term used in dentistry","dental","",`
local anesthesia|local anesthetic|numbing
nitrous oxide|nitrous|laughing gas|n2o
oral sedation|oral conscious sedation
iv sedation|intravenous sedation
general anesthesia|ga
conscious sedation
minimal sedation|anxiolysis
moderate sedation
deep sedation
continuum of sedation|levels of sedation
inhalation sedation
titration
nasal hood|nasal mask
scavenging system|scavenger
diffusion hypoxia
100 percent oxygen|postoperative oxygen
fail safe system|oxygen fail safe
pin index safety system
flowmeter
reservoir bag
asa classification|asa|asa physical status
mallampati score|mallampati classification
airway assessment
npo|nil by mouth|fasting guidelines
informed consent
pulse oximetry|pulse ox
capnography|end tidal co2|etco2
blood pressure monitoring
ecg monitoring
precordial stethoscope
pretracheal stethoscope
monitoring
recovery|recovery room
discharge criteria
escort|responsible adult escort
aldrete score
laryngospasm
bronchospasm
airway obstruction
respiratory depression
apnea
oversedation
paradoxical reaction
emergence delirium
nausea and vomiting|ponv
aspiration
head tilt chin lift
jaw thrust
oral airway|oropharyngeal airway
nasal airway|nasopharyngeal airway
bag valve mask|ambu bag
laryngeal mask airway|lma
endotracheal tube|ett|intubation
nasotracheal intubation
supplemental oxygen|nasal cannula
iv cannulation|iv start|iv line
venipuncture
midazolam|versed
triazolam|halcion
diazepam|valium
lorazepam|ativan
alprazolam|xanax
hydroxyzine|vistaril|atarax
promethazine|phenergan
chloral hydrate
meperidine|demerol
fentanyl
morphine
propofol|diprivan
ketamine
dexmedetomidine|precedex
methohexital|brevital
sevoflurane
desflurane
isoflurane
succinylcholine
rocuronium
glycopyrrolate|robinul
atropine
ondansetron|zofran
dexamethasone|decadron
naloxone|narcan
flumazenil|romazicon
lidocaine|xylocaine
articaine|septocaine
mepivacaine|carbocaine|polocaine
prilocaine|citanest
bupivacaine|marcaine
benzocaine|topical anesthetic
tetracaine
epinephrine|vasoconstrictor
levonordefrin
felypressin
phentolamine|oraverse|reversal of local anesthesia
maximum recommended dose|mrd
cartridge|carpule
aspiration test|aspirating
computer controlled anesthesia|the wand|sta
buffered anesthetic|buffering|onset
intraosseous anesthesia
intraligamentary injection|pdl injection
intrapulpal injection
infiltration|supraperiosteal injection
nerve block
inferior alveolar nerve block|ianb
gow gates block
vazirani akinosi block
posterior superior alveolar block|psa
infraorbital block
greater palatine block
nasopalatine block
mental block|incisive block
long buccal block|buccal nerve block
amsa|anterior middle superior alveolar block
p asa|palatal anterior superior alveolar block
lingual nerve block
local anesthetic toxicity|las toxicity|overdose
methemoglobinemia
malignant hyperthermia
dentist anesthesiologist
sedation permit|anesthesia permit
pals
acls
bls|cpr certification
hospital dentistry|or dentistry
office based anesthesia
`, "2026-11-07");
P("Name a dental hygiene instrumentation term","dental","",`
scaling
root planing|scaling and root planing|srp
debridement|periodontal debridement
calculus removal
supragingival scaling
subgingival scaling
modified pen grasp
palm grasp
palm thumb grasp
fulcrum|finger rest
intraoral fulcrum
extraoral fulcrum
cross arch fulcrum
opposite arch fulcrum
finger on finger fulcrum
built up fulcrum
adaptation
angulation
insertion
activation
lateral pressure
working stroke|scaling stroke
exploratory stroke|assessment stroke
root planing stroke
vertical stroke
oblique stroke
horizontal stroke
channel scaling
overlapping strokes
pull stroke
push stroke
toe third|leading third
working end
cutting edge
face
back
lateral surfaces
shank
terminal shank|lower shank
functional shank
handle
simple shank|straight shank
complex shank|angled shank
rigid shank
flexible shank
sickle scaler
universal curette
area specific curette|gracey curette|gracey|gracey curettes
gracey 1 2
gracey 5 6
gracey 7 8
gracey 11 12
gracey 13 14
gracey 15 16
gracey 17 18
after five curette|extended shank curette
mini five curette|mini bladed curette
langer curette
columbia curette
hoe scaler
file scaler
chisel scaler
periodontal probe
williams probe
unc 15 probe
nabers probe|furcation probe
explorer
odu 11 12 explorer
shepherd hook explorer
pigtail explorer
cowhorn explorer
ultrasonic scaler|ultrasonics
piezoelectric scaler|piezo
magnetostrictive scaler|cavitron
sonic scaler
insert|ultrasonic insert|tip
cavitation
acoustic microstreaming
lavage
power setting
water flow
aerosol
high volume evacuation|hve
slim tip|thin insert
universal tip
air polishing|prophy jet
glycine powder
erythritol powder
coronal polishing|rubber cup polishing
prophy paste
selective polishing
instrument sharpening|sharpening
sharpening stone|arkansas stone|india stone|ceramic stone
moving stone technique
stationary instrument technique
test stick|sharpness test
wire edge
dull instrument|dull edge
clock position|operator position
patient positioning
ergonomics
neutral position
mirror|mouth mirror
indirect vision
retraction
transillumination
illumination
probing depth|pocket depth
walking stroke|walking the probe
six point probing|periodontal charting
clinical attachment level|cal|attachment loss
bleeding on probing|bop
gingival recession
furcation involvement
mobility
deposit detection|tactile sensitivity
burnished calculus
calculus
supragingival calculus
subgingival calculus
biofilm|plaque
stain removal
endpoint of instrumentation
quadrant scaling
full mouth disinfection
re evaluation|reevaluation
periodontal maintenance
arestin|minocycline microspheres
atridox|doxycycline gel
periochip|chlorhexidine chip
irrigation|subgingival irrigation
`, "2026-11-07");

/* ---- NEW STANDARD DAILY PROMPTS: MEDICINE (batch 2026-11-05, board-first) ---- */
P("Name a poisoning or toxic exposure","clinical","",`
acetaminophen overdose|acetaminophen|paracetamol|paracetamol overdose|tylenol|apap
aspirin overdose|aspirin|salicylate toxicity|salicylates|salicylism
carbon monoxide poisoning|carbon monoxide|co poisoning
opioid overdose|opioids|opiates|opioid toxicity
heroin overdose|heroin|diamorphine
fentanyl overdose|fentanyl
morphine overdose|morphine
methadone toxicity|methadone
oxycodone overdose|oxycodone
tramadol toxicity|tramadol
benzodiazepine overdose|benzodiazepines|benzos
tricyclic antidepressant overdose|tricyclic antidepressants|tca overdose|tcas|tca
amitriptyline overdose|amitriptyline
organophosphate poisoning|organophosphates|organophosphate
carbamate poisoning|carbamates
nerve agents|sarin|vx|tabun|soman
cyanide poisoning|cyanide|hydrogen cyanide
lead poisoning|lead|plumbism
arsenic poisoning|arsenic
mercury poisoning|mercury
iron overdose|iron toxicity|iron poisoning|iron
lithium toxicity|lithium
digoxin toxicity|digoxin|digitalis toxicity|digitalis
methanol poisoning|methanol|wood alcohol
ethylene glycol poisoning|ethylene glycol|antifreeze
isopropyl alcohol poisoning|isopropyl alcohol|isopropanol|rubbing alcohol
ethanol intoxication|ethanol|alcohol intoxication|alcohol poisoning
beta blocker overdose|beta blockers|beta blocker toxicity
calcium channel blocker overdose|calcium channel blockers|ccb overdose
anticholinergic toxicity|anticholinergics|anticholinergic poisoning
atropine poisoning|atropine
jimsonweed|datura|jimson weed|datura stramonium
deadly nightshade|atropa belladonna|belladonna
diphenhydramine overdose|diphenhydramine|benadryl
cocaine toxicity|cocaine
amphetamine toxicity|amphetamines|amphetamine
methamphetamine toxicity|methamphetamine|meth|crystal meth
mdma toxicity|mdma|ecstasy|molly
pcp intoxication|phencyclidine|pcp|angel dust
lsd|lysergic acid diethylamide
synthetic cannabinoids|k2|spice
cannabis intoxication|cannabis|marijuana|thc
cannabinoid hyperemesis syndrome
bath salts|synthetic cathinones|cathinones
methemoglobinemia|methaemoglobinaemia
nitrites|nitrite poisoning|poppers|amyl nitrite
dapsone toxicity|dapsone
benzocaine methemoglobinemia|benzocaine
warfarin overdose|warfarin|coumadin
superwarfarin rodenticide|brodifacoum|superwarfarin|long acting anticoagulant rodenticide
heparin overdose|heparin
serotonin syndrome
neuroleptic malignant syndrome|nms
ssri overdose|ssris|ssri
bupropion overdose|bupropion|wellbutrin
venlafaxine overdose|venlafaxine
antipsychotic overdose|antipsychotics
quetiapine overdose|quetiapine
clozapine toxicity|clozapine
theophylline toxicity|theophylline|aminophylline
caffeine overdose|caffeine
isoniazid overdose|isoniazid|inh
sulfonylurea overdose|sulfonylureas|sulfonylurea
insulin overdose|insulin
metformin toxicity|metformin|metformin associated lactic acidosis
valproate toxicity|valproic acid|valproate|depakote
phenytoin toxicity|phenytoin|dilantin
carbamazepine toxicity|carbamazepine|tegretol
clonidine overdose|clonidine
local anesthetic systemic toxicity|last|local anaesthetic toxicity|lidocaine toxicity|bupivacaine toxicity
colchicine toxicity|colchicine
methotrexate toxicity|methotrexate
vitamin a toxicity|hypervitaminosis a|vitamin a
vitamin d toxicity|hypervitaminosis d|vitamin d
baclofen toxicity|baclofen
gamma hydroxybutyrate|ghb
ketamine|ketamine intoxication
barbiturate overdose|barbiturates|phenobarbital
zolpidem overdose|zolpidem|ambien
dextromethorphan|dxm
loperamide toxicity|loperamide
nicotine poisoning|nicotine|liquid nicotine
inhalant abuse|inhalants|huffing|solvent abuse
toluene|toluene toxicity
hydrocarbon aspiration|hydrocarbons|kerosene|gasoline
caustic ingestion|caustics|corrosive ingestion
alkali ingestion|lye|sodium hydroxide|drain cleaner
acid ingestion|hydrochloric acid|sulfuric acid
hydrofluoric acid|hf burns|hydrofluoric acid burns
button battery ingestion|button battery
hydrogen sulfide|sewer gas|h2s
chlorine gas|chlorine
phosgene
ammonia inhalation|ammonia
smoke inhalation
methylene chloride
carbon tetrachloride
botulism|clostridium botulinum|botulinum toxin
tetanus|tetanus toxin|tetanospasmin
paralytic shellfish poisoning|saxitoxin
ciguatera|ciguatoxin|ciguatera fish poisoning
scombroid|scombroid poisoning|histamine fish poisoning
pufferfish poisoning|tetrodotoxin|fugu
neurotoxic shellfish poisoning|brevetoxin
amnesic shellfish poisoning|domoic acid
amanita phalloides|death cap|death cap mushroom|amatoxin|amanita poisoning
destroying angel|amanita virosa|amanita bisporigera
amanita muscaria|fly agaric|muscimol|ibotenic acid
psilocybin mushrooms|psilocybin|magic mushrooms
gyromitra|false morel|gyromitrin
cortinarius|orellanine
inocybe|clitocybe|muscarinic mushrooms|muscarine
coprinus|coprine|inky cap
foxglove|digitalis purpurea
oleander|nerium oleander|yellow oleander
lily of the valley|convallaria
water hemlock|cicuta|cicutoxin
poison hemlock|conium maculatum|coniine
castor bean|ricin
rosary pea|abrin|abrus precatorius
monkshood|aconite|aconitum|aconitine
yew|taxus|taxine
mistletoe
pokeweed
lantana
dieffenbachia|dumb cane
philodendron
rattlesnake envenomation|rattlesnake|rattlesnake bite|crotalid envenomation|pit viper
copperhead|copperhead bite
cottonmouth|water moccasin
coral snake|coral snake bite|elapid envenomation
black widow spider|black widow|latrodectus|latrodectism
brown recluse spider|brown recluse|loxosceles|loxoscelism
scorpion sting|scorpion|centruroides|bark scorpion
hymenoptera sting|bee sting|wasp sting|hornet sting
fire ant stings|fire ants
box jellyfish|chironex
jellyfish sting|jellyfish
stonefish|stonefish sting
stingray injury|stingray
lionfish
cone snail|conotoxin
blue ringed octopus
gila monster|gila monster bite
tick paralysis
cantharidin|spanish fly|blister beetle
thallium poisoning|thallium
cadmium|cadmium poisoning|itai itai disease
chromium|chromium toxicity
copper toxicity|copper
zinc toxicity|zinc|metal fume fever
manganese toxicity|manganese|manganism
cobalt toxicity|cobalt|cobalt cardiomyopathy
bismuth toxicity|bismuth
gold toxicity|gold salts
aluminum toxicity|aluminium toxicity|aluminum
selenium toxicity|selenosis|selenium
barium poisoning|barium
fluoride poisoning|fluoride
boric acid|boric acid poisoning
paraquat|paraquat poisoning
glyphosate
strychnine|strychnine poisoning
sodium fluoroacetate|compound 1080|fluoroacetate
zinc phosphide|phosphine|aluminum phosphide
bromethalin
pyrethroids
dinitrophenol|2 4 dinitrophenol|dnp
camphor
methyl salicylate|oil of wintergreen
eucalyptus oil
tea tree oil
pennyroyal oil
nutmeg
ergotism|ergot|ergotamine
kratom
yohimbine
ephedra|ephedrine
ackee|ackee fruit|hypoglycin|jamaican vomiting sickness
star fruit|carambola
cassava|cyanogenic glycosides|konzo
apricot pits|amygdalin|laetrile
grayanotoxin|mad honey
lathyrism|grass pea
aflatoxin|aflatoxins
pyrrolizidine alkaloids|comfrey|bush tea
aristolochic acid|aristolochia|aristolochic acid nephropathy|chinese herb nephropathy
germander
khat|cathinone
salvia divinorum
nitrous oxide abuse|nitrous oxide|whippets
sodium nitroprusside cyanide toxicity|nitroprusside
radiation poisoning|acute radiation syndrome
polonium 210|polonium
dioxin|tcdd
polychlorinated biphenyls|pcbs
mustard gas|sulfur mustard
lewisite
tear gas|cs gas|pepper spray
xylazine|tranq
nitazenes
carfentanil
clenbuterol
sodium azide
acrylamide
n hexane
methyl bromide
ethylene oxide
cardiac glycoside plants|cardiac glycosides
toad venom|bufotoxin|bufo toad
`, "2026-11-07");
P("Name a cause of muscle weakness","clinical","",`
myasthenia gravis|mg
guillain barre syndrome|guillain-barre syndrome|gbs|acute inflammatory demyelinating polyneuropathy|aidp
amyotrophic lateral sclerosis|als|lou gehrig disease|motor neuron disease|mnd
stroke|cerebrovascular accident|cva
multiple sclerosis|ms
lambert eaton myasthenic syndrome|lambert-eaton syndrome|lems|lambert eaton
botulism|clostridium botulinum
duchenne muscular dystrophy|duchenne|dmd
becker muscular dystrophy|becker
myotonic dystrophy|dystrophia myotonica|steinert disease
polymyositis
dermatomyositis
inclusion body myositis|ibm
hypokalemia|hypokalaemia|low potassium
hyperkalemia|hyperkalaemia|high potassium
hypercalcemia|hypercalcaemia
hypophosphatemia|hypophosphataemia
hypomagnesemia|hypomagnesaemia
hypermagnesemia|hypermagnesaemia
hypothyroidism|hypothyroid myopathy
hyperthyroidism|thyrotoxic myopathy|thyrotoxicosis
thyrotoxic periodic paralysis
hypokalemic periodic paralysis
hyperkalemic periodic paralysis
cushing syndrome|cushings|hypercortisolism
steroid myopathy|glucocorticoid myopathy|corticosteroid myopathy
statin myopathy|statins|statin induced myopathy
rhabdomyolysis
spinal cord compression|cord compression
transverse myelitis
spinal muscular atrophy|sma|werdnig hoffmann disease
polio|poliomyelitis
post polio syndrome
west nile virus|west nile
tick paralysis
organophosphate poisoning|organophosphates
critical illness myopathy
critical illness polyneuropathy
diabetic neuropathy|diabetic amyotrophy
vitamin b12 deficiency|b12 deficiency|subacute combined degeneration
vitamin d deficiency|osteomalacia
primary hyperparathyroidism|hyperparathyroidism
adrenal insufficiency|addison disease|addisons
hyperaldosteronism|conn syndrome|primary aldosteronism
mcardle disease|glycogen storage disease type v|myophosphorylase deficiency
pompe disease|acid maltase deficiency|glycogen storage disease type ii
carnitine palmitoyltransferase deficiency|cpt ii deficiency|cpt deficiency
mitochondrial myopathy
kearns sayre syndrome
melas
cervical myelopathy|cervical spondylotic myelopathy
radiculopathy
peripheral neuropathy
chronic inflammatory demyelinating polyneuropathy|cidp
charcot marie tooth disease|cmt|hereditary motor and sensory neuropathy
brown sequard syndrome
anterior spinal artery syndrome
epidural abscess|spinal epidural abscess
brain tumor|brain tumour
todd paralysis|todds paralysis|postictal paralysis
conversion disorder|functional neurological disorder
polymyalgia rheumatica|pmr
chronic fatigue syndrome|myalgic encephalomyelitis
hiv myopathy|hiv
zidovudine myopathy|zidovudine|azt
colchicine myopathy|colchicine
hydroxychloroquine myopathy|hydroxychloroquine
alcoholic myopathy|alcohol
cocaine
aminoglycosides|aminoglycoside induced neuromuscular blockade
neuromuscular blocking agents|succinylcholine
d penicillamine induced myasthenia|penicillamine
immune checkpoint inhibitor myositis|checkpoint inhibitors
viral myositis|influenza myositis
trichinosis|trichinella|trichinellosis
toxoplasmosis myositis
pyomyositis
sarcoidosis|sarcoid myopathy
necrotizing autoimmune myopathy|immune mediated necrotizing myopathy|imnm
anti hmgcr myopathy
antisynthetase syndrome
paraneoplastic syndrome
lyme disease|lyme radiculopathy
diphtheria|diphtheritic neuropathy
porphyria|acute intermittent porphyria|aip
lead poisoning|lead neuropathy
arsenic poisoning
thallium poisoning
hexacarbon neuropathy|n hexane
snake envenomation|elapid envenomation|coral snake
ciguatera
paralytic shellfish poisoning|saxitoxin
tetrodotoxin|pufferfish poisoning
hypoglycemia|hypoglycaemia
hyponatremia|hyponatraemia
renal failure|uremia|uraemic myopathy
anemia|anaemia
heart failure
copd|chronic obstructive pulmonary disease
cancer cachexia|cachexia
sarcopenia
disuse atrophy|deconditioning
malnutrition
multiple system atrophy
acromegaly
congenital myasthenic syndrome
limb girdle muscular dystrophy|lgmd
facioscapulohumeral muscular dystrophy|fshd|facioscapulohumeral dystrophy
emery dreifuss muscular dystrophy
oculopharyngeal muscular dystrophy|opmd
congenital muscular dystrophy
central core disease
nemaline myopathy
centronuclear myopathy|myotubular myopathy
myotonia congenita|thomsen disease
paramyotonia congenita
andersen tawil syndrome
kennedy disease|spinobulbar muscular atrophy|sbma
primary lateral sclerosis|pls
progressive muscular atrophy
multifocal motor neuropathy|mmn
monomelic amyotrophy|hirayama disease
brachial plexopathy|parsonage turner syndrome|brachial neuritis|neuralgic amyotrophy
lumbosacral plexopathy
cauda equina syndrome
conus medullaris syndrome
syringomyelia|syrinx
spinal cord infarction
spinal dural arteriovenous fistula
hereditary spastic paraplegia
friedreich ataxia
adrenoleukodystrophy|adrenomyeloneuropathy
htlv 1 associated myelopathy|tropical spastic paraparesis|htlv 1
tabes dorsalis|neurosyphilis
copper deficiency myelopathy|copper deficiency
vitamin e deficiency
thiamine deficiency|beriberi
eosinophilic myositis|eosinophilia myalgia syndrome
amyloid myopathy|amyloidosis
hypopituitarism
pheochromocytoma
pyridostigmine overdose|cholinergic crisis
myasthenic crisis
neuromyelitis optica|nmo
acute flaccid myelitis
rabies|paralytic rabies
tetanus
miller fisher syndrome
acute motor axonal neuropathy|aman
vasculitic neuropathy|mononeuritis multiplex
`, "2026-11-07");
P("Name a cause of bleeding or easy bruising","clinical","",`
von willebrand disease|vwd|von willebrand
hemophilia a|haemophilia a|factor viii deficiency|factor 8 deficiency
hemophilia b|haemophilia b|christmas disease|factor ix deficiency|factor 9 deficiency
immune thrombocytopenia|itp|immune thrombocytopenic purpura|idiopathic thrombocytopenic purpura
disseminated intravascular coagulation|dic|consumptive coagulopathy
thrombotic thrombocytopenic purpura|ttp|adamts13 deficiency
hemolytic uremic syndrome|hus|haemolytic uraemic syndrome
heparin induced thrombocytopenia|hit
warfarin|coumadin|warfarin toxicity|supratherapeutic inr
heparin
low molecular weight heparin|enoxaparin|lmwh
direct oral anticoagulants|doacs|noacs
apixaban|eliquis
rivaroxaban|xarelto
dabigatran|pradaxa
aspirin
clopidogrel|plavix
nsaids|nonsteroidal anti inflammatory drugs|ibuprofen
thrombolytics|tpa|alteplase|fibrinolytic therapy
vitamin k deficiency|vitamin k deficiency bleeding|hemorrhagic disease of the newborn
liver disease|cirrhosis|liver failure
uremia|uremic platelet dysfunction|chronic kidney disease|uraemia
bernard soulier syndrome|gp1b deficiency
glanzmann thrombasthenia|gpiib iiia deficiency
scurvy|vitamin c deficiency
ehlers danlos syndrome|eds
leukemia|leukaemia
acute promyelocytic leukemia|apl|apml|acute promyelocytic leukaemia
acute myeloid leukemia|aml
acute lymphoblastic leukemia|all
aplastic anemia|aplastic anaemia
myelodysplastic syndrome|mds
bone marrow infiltration|myelophthisis
multiple myeloma|myeloma
amyloidosis|al amyloidosis
waldenstrom macroglobulinemia|waldenstrom
hypersplenism|splenomegaly
cushing syndrome|cushings|hypercortisolism
corticosteroids|steroids|glucocorticoids
senile purpura|actinic purpura|bateman purpura
henoch schonlein purpura|hsp|iga vasculitis
vasculitis
wiskott aldrich syndrome
hereditary hemorrhagic telangiectasia|hht|osler weber rendu syndrome|osler weber rendu
child abuse|non accidental trauma|nonaccidental injury
elder abuse
domestic violence|intimate partner violence
trauma
factor vii deficiency
factor x deficiency
factor xi deficiency|hemophilia c|haemophilia c|rosenthal syndrome
factor xiii deficiency
factor v deficiency|parahemophilia
afibrinogenemia|hypofibrinogenemia
dysfibrinogenemia
prothrombin deficiency|factor ii deficiency
combined factor v and viii deficiency
acquired hemophilia|acquired haemophilia|factor viii inhibitor
acquired von willebrand syndrome|heyde syndrome
platelet storage pool disease|storage pool disorder|dense granule deficiency
gray platelet syndrome|grey platelet syndrome
hermansky pudlak syndrome
chediak higashi syndrome
may hegglin anomaly|myh9 related disorder
alpha 2 antiplasmin deficiency
plasminogen activator inhibitor 1 deficiency|pai 1 deficiency
quebec platelet disorder
scott syndrome
thrombocytopenia absent radius syndrome|tar syndrome
congenital amegakaryocytic thrombocytopenia
fanconi anemia|fanconi anaemia
gestational thrombocytopenia
hellp syndrome
placental abruption|abruptio placentae
amniotic fluid embolism
neonatal alloimmune thrombocytopenia|fnait|nait
post transfusion purpura
massive transfusion|dilutional coagulopathy
trauma induced coagulopathy
hypothermia
sepsis
meningococcemia|meningococcal sepsis|neisseria meningitidis|purpura fulminans
rocky mountain spotted fever|rmsf
dengue|dengue hemorrhagic fever
ebola|ebola virus disease
viral hemorrhagic fever|lassa fever|marburg
hantavirus|hemorrhagic fever with renal syndrome
leptospirosis|weil disease
hiv|hiv associated thrombocytopenia
hepatitis c|hcv
epstein barr virus|ebv|infectious mononucleosis|mono
malaria
lupus|sle|systemic lupus erythematosus
antiphospholipid syndrome|lupus anticoagulant hypoprothrombinemia syndrome
evans syndrome
hypothyroidism
alcohol use disorder|alcoholism|alcohol
malnutrition
malabsorption|celiac disease|coeliac disease
cystic fibrosis
prolonged antibiotics|antibiotics|cephalosporins
ssris|selective serotonin reuptake inhibitors|ssri
fish oil|omega 3 fatty acids
ginkgo biloba|ginkgo
garlic supplements
vitamin e
quinine|quinine induced thrombocytopenia
valproate|valproic acid
chemotherapy|myelosuppressive chemotherapy
linezolid
vancomycin induced thrombocytopenia
ibrutinib
glycoprotein iib iiia inhibitors|abciximab|eptifibatide|tirofiban
prasugrel
ticagrelor
cilostazol
dipyridamole
argatroban|direct thrombin inhibitors|bivalirudin
fondaparinux
rodenticide ingestion|brodifacoum|superwarfarin
snake envenomation|rattlesnake bite|venom induced consumptive coagulopathy
kasabach merritt syndrome|kasabach merritt phenomenon
giant cavernous hemangioma
marfan syndrome
osteogenesis imperfecta
pseudoxanthoma elasticum
cutis laxa
amyloid angiopathy
cryoglobulinemia|cryoglobulinaemia
hypergammaglobulinemic purpura of waldenstrom
paraproteinemia|monoclonal gammopathy
myeloproliferative neoplasms
essential thrombocythemia|essential thrombocytosis|et
polycythemia vera|pv
primary myelofibrosis|myelofibrosis
chronic myeloid leukemia|cml
chronic lymphocytic leukemia|cll
lymphoma
paroxysmal nocturnal hemoglobinuria|pnh
megaloblastic anemia|b12 deficiency|folate deficiency
hemophagocytic lymphohistiocytosis|hlh
cardiopulmonary bypass
ecmo|extracorporeal membrane oxygenation
left ventricular assist device|lvad
aortic stenosis
psychogenic purpura|gardner diamond syndrome|autoerythrocyte sensitization
factitious disorder|munchausen
easy bruising syndrome|purpura simplex
`, "2026-11-07");
P("Name a cause of heart failure","clinical","",`
coronary artery disease|cad|ischemic heart disease|ischaemic heart disease|ischemic cardiomyopathy
myocardial infarction|heart attack|mi
hypertension|high blood pressure|htn|hypertensive heart disease
dilated cardiomyopathy|dcm
hypertrophic cardiomyopathy|hcm|hocm
restrictive cardiomyopathy
aortic stenosis
aortic regurgitation|aortic insufficiency
mitral regurgitation|mitral insufficiency
mitral stenosis
alcoholic cardiomyopathy|alcohol|alcohol use disorder
viral myocarditis|myocarditis
coxsackievirus|coxsackie b
chagas disease|trypanosoma cruzi|chagas cardiomyopathy
amyloidosis|cardiac amyloidosis
transthyretin amyloidosis|attr amyloidosis|attr
al amyloidosis|light chain amyloidosis
sarcoidosis|cardiac sarcoidosis
hemochromatosis|haemochromatosis|iron overload
doxorubicin|anthracyclines|anthracycline cardiotoxicity|adriamycin
trastuzumab|herceptin
peripartum cardiomyopathy|postpartum cardiomyopathy
takotsubo cardiomyopathy|takotsubo|stress cardiomyopathy|broken heart syndrome
tachycardia induced cardiomyopathy|tachycardiomyopathy
atrial fibrillation|afib|af
constrictive pericarditis
cardiac tamponade|pericardial tamponade
diabetes mellitus|diabetes|diabetic cardiomyopathy
hyperthyroidism|thyrotoxicosis|thyroid storm
hypothyroidism
anemia|anaemia|severe anemia
beriberi|wet beriberi|thiamine deficiency
arteriovenous fistula|av fistula
paget disease of bone|paget disease
pregnancy
obesity
obstructive sleep apnea|osa|sleep apnea
pulmonary hypertension
cor pulmonale|right heart failure
copd|chronic obstructive pulmonary disease
pulmonary embolism|pe
infective endocarditis|endocarditis
rheumatic heart disease|rheumatic fever
ventricular septal defect|vsd
atrial septal defect|asd
patent ductus arteriosus|pda
tetralogy of fallot
coarctation of the aorta|aortic coarctation
hypoplastic left heart syndrome|hlhs
eisenmenger syndrome
ebstein anomaly
transposition of the great arteries|tga
truncus arteriosus
total anomalous pulmonary venous return|tapvr
duchenne muscular dystrophy|duchenne|dmd
becker muscular dystrophy
myotonic dystrophy
friedreich ataxia
arrhythmogenic right ventricular cardiomyopathy|arvc|arrhythmogenic cardiomyopathy
left ventricular noncompaction|lv noncompaction|noncompaction cardiomyopathy
loeffler endocarditis|loffler endocarditis|eosinophilic myocarditis|hypereosinophilic syndrome
endomyocardial fibrosis
carcinoid heart disease|carcinoid syndrome
radiation induced heart disease|radiation
cocaine|cocaine cardiomyopathy
methamphetamine|methamphetamine cardiomyopathy
anabolic steroids
nsaids|nonsteroidal anti inflammatory drugs
thiazolidinediones|pioglitazone|rosiglitazone|glitazones
non dihydropyridine calcium channel blockers|verapamil|diltiazem
dronedarone
itraconazole
tnf alpha inhibitors|infliximab
cyclophosphamide
5 fluorouracil|5 fu|fluorouracil
immune checkpoint inhibitor myocarditis|checkpoint inhibitor myocarditis
clozapine myocarditis|clozapine
tyrosine kinase inhibitors|sunitinib|imatinib
cobalt cardiomyopathy|cobalt
excess sodium intake|dietary indiscretion|high salt diet
medication nonadherence|noncompliance
fluid overload|volume overload
chronic kidney disease|ckd|renal failure
hypocalcemia|hypocalcaemia
hypophosphatemia|hypophosphataemia
selenium deficiency|keshan disease
carnitine deficiency
pheochromocytoma|catecholamine cardiomyopathy
acromegaly
cushing syndrome
fabry disease
pompe disease
danon disease
lupus|sle|systemic lupus erythematosus|libman sacks endocarditis
systemic sclerosis|scleroderma
rheumatoid arthritis
giant cell myocarditis
hiv|hiv cardiomyopathy
lyme carditis|lyme disease
diphtheria|diphtheritic myocarditis
covid 19|sars cov 2|covid myocarditis
influenza myocarditis|influenza
parvovirus b19
trichinosis|trichinella
toxoplasmosis
complete heart block|third degree heart block|bradycardia
sick sinus syndrome
right ventricular pacing|pacing induced cardiomyopathy
premature ventricular contractions|pvc induced cardiomyopathy|pvcs
ventricular aneurysm|left ventricular aneurysm
papillary muscle rupture
ventricular septal rupture
acute aortic dissection|aortic dissection
tricuspid regurgitation
pulmonic stenosis|pulmonary stenosis
mitral valve prolapse
prosthetic valve dysfunction|prosthetic valve thrombosis
cardiac myxoma|atrial myxoma|myxoma
cardiac tumors|cardiac tumours
pericardial effusion
high output heart failure
sepsis|septic cardiomyopathy
anorexia nervosa
hereditary hemorrhagic telangiectasia|hht
multiple myeloma
polycythemia vera
renal artery stenosis
hyperaldosteronism
preeclampsia|pre eclampsia
twin twin transfusion syndrome
anomalous left coronary artery from the pulmonary artery|alcapa|bland white garland syndrome
kawasaki disease
emery dreifuss muscular dystrophy
laminopathy|lmna cardiomyopathy
titin truncating variants|ttn cardiomyopathy
barth syndrome
kearns sayre syndrome
hurler syndrome|mucopolysaccharidosis
hemoglobinopathy|thalassemia|beta thalassemia major
sickle cell disease|sickle cell anemia
cardiac transplant rejection|allograft rejection
chronic thromboembolic pulmonary hypertension|cteph
interstitial lung disease
obesity hypoventilation syndrome
`, "2026-11-07");
P("Name a cause of erectile dysfunction","clinical","",`
atherosclerosis|vascular disease|vasculogenic erectile dysfunction
diabetes mellitus|diabetes|diabetic neuropathy
hypertension|high blood pressure|htn
smoking|tobacco|cigarette smoking
psychogenic erectile dysfunction|performance anxiety|psychogenic
depression
anxiety
hypogonadism|low testosterone|testosterone deficiency
hyperprolactinemia|hyperprolactinaemia|prolactinoma
beta blockers|beta blocker
thiazide diuretics|thiazides|hydrochlorothiazide
spironolactone
ssris|selective serotonin reuptake inhibitors|ssri
tricyclic antidepressants|tcas
antipsychotics
5 alpha reductase inhibitors|finasteride|dutasteride
gnrh agonists|leuprolide|androgen deprivation therapy|adt
ketoconazole
cimetidine
opioids|opiates
alcohol|alcohol use disorder|alcoholism
cocaine
marijuana|cannabis
anabolic steroids
radical prostatectomy|prostatectomy
prostate cancer radiation|pelvic radiation|radiation therapy
transurethral resection of the prostate|turp
spinal cord injury
multiple sclerosis|ms
parkinson disease|parkinsons
stroke
peyronie disease|peyronies
priapism|post priapism fibrosis
dyslipidemia|hyperlipidemia|high cholesterol
obesity
metabolic syndrome
coronary artery disease|cad
peripheral artery disease|pad|peripheral vascular disease
leriche syndrome|aortoiliac occlusive disease
chronic kidney disease|ckd|renal failure
liver cirrhosis|cirrhosis
hypothyroidism
hyperthyroidism
cushing syndrome
klinefelter syndrome
kallmann syndrome
pituitary tumor|pituitary adenoma
aging|age
obstructive sleep apnea|osa|sleep apnea
venous leak|venoocclusive dysfunction|corpus cavernosum venous leak
pelvic trauma|pelvic fracture
penile fracture
urethral injury
bicycle riding|perineal compression
abdominoperineal resection|rectal cancer surgery
cystectomy|radical cystectomy
pelvic surgery
cauda equina syndrome
lumbar disc herniation
peripheral neuropathy
alcoholic neuropathy
temporal lobe epilepsy|epilepsy
dementia|alzheimer disease
multiple system atrophy|shy drager syndrome
relationship problems|relationship conflict
stress
post traumatic stress disorder|ptsd
benzodiazepines
anticonvulsants|antiepileptics
phenytoin
carbamazepine
gabapentin
pregabalin
clonidine
methyldopa
digoxin
fibrates|gemfibrozil
h2 blockers
metoclopramide
antiandrogens|bicalutamide|flutamide
abiraterone
cyproterone acetate|cyproterone
estrogen therapy|estrogens
lithium
mirtazapine
venlafaxine|snris
haloperidol
risperidone
amphetamines
heroin
methadone
lupus|sle
scleroderma|systemic sclerosis
sickle cell disease
hemochromatosis|haemochromatosis
hiv
chronic prostatitis|chronic pelvic pain syndrome
benign prostatic hyperplasia|bph
lichen sclerosus|balanitis xerotica obliterans
phimosis
epispadias|bladder exstrophy
pelvic floor dysfunction
cavernosal fibrosis
heavy metal exposure|lead poisoning
hyperestrogenism
adrenal insufficiency|addison disease
acromegaly
chronic heart failure|heart failure
copd|chronic obstructive pulmonary disease
anemia|anaemia
guillain barre syndrome
amyloidosis
syringomyelia
spina bifida
transverse myelitis
tabes dorsalis|neurosyphilis
vascular steal syndrome|pelvic steal syndrome
`, "2026-11-07");
P("Name a cause of infertility","clinical","",`
polycystic ovary syndrome|pcos|polycystic ovarian syndrome|stein leventhal syndrome
endometriosis
pelvic inflammatory disease|pid
chlamydia|chlamydia trachomatis
gonorrhea|gonorrhoea|neisseria gonorrhoeae
tubal factor infertility|tubal occlusion|blocked fallopian tubes|tubal blockage
hydrosalpinx
varicocele
klinefelter syndrome|47 xxy|xxy
turner syndrome|45 x|45 xo
kallmann syndrome
hyperprolactinemia|hyperprolactinaemia|prolactinoma
hypothyroidism
hyperthyroidism
asherman syndrome|intrauterine adhesions|intrauterine synechiae
uterine fibroids|leiomyomas|leiomyoma|fibroids
primary ovarian insufficiency|premature ovarian failure|premature ovarian insufficiency|poi
advanced maternal age|age|diminished ovarian reserve
cystic fibrosis|congenital bilateral absence of the vas deferens|cbavd
kartagener syndrome|primary ciliary dyskinesia
androgen insensitivity syndrome|testicular feminization
5 alpha reductase deficiency
congenital adrenal hyperplasia|cah|21 hydroxylase deficiency
mullerian agenesis|mayer rokitansky kuster hauser syndrome|mrkh
cryptorchidism|undescended testes|undescended testicle
mumps orchitis|mumps
sheehan syndrome|postpartum pituitary necrosis
hypothalamic amenorrhea|functional hypothalamic amenorrhea
anorexia nervosa|eating disorders
female athlete triad|excessive exercise
obesity
low body weight|underweight
anabolic steroids|exogenous testosterone|testosterone therapy
chemotherapy
radiation therapy|radiation
smoking|tobacco
alcohol|alcohol use disorder
marijuana|cannabis
hypogonadotropic hypogonadism
hypergonadotropic hypogonadism
hemochromatosis|haemochromatosis
pituitary adenoma|pituitary tumor
craniopharyngioma
cushing syndrome
adrenal insufficiency
diabetes mellitus|diabetes
celiac disease|coeliac disease
sickle cell disease
lupus|sle
antiphospholipid syndrome
fragile x premutation|fragile x
galactosemia|galactosaemia
y chromosome microdeletion|azoospermia factor deletion
azoospermia
oligospermia|oligozoospermia|low sperm count
asthenozoospermia|low sperm motility
teratozoospermia|abnormal sperm morphology
retrograde ejaculation
erectile dysfunction|ed
ejaculatory duct obstruction
vasectomy
testicular torsion
testicular cancer
testicular trauma
orchitis
epididymitis
prostatitis
sertoli cell only syndrome
antisperm antibodies
hypospadias
spinal cord injury
diabetic autonomic neuropathy
retroperitoneal lymph node dissection
inguinal hernia repair
heat exposure|hot tubs
sulfasalazine
spironolactone
ketoconazole
finasteride
opioids
gnrh agonists
ssris
cimetidine
colchicine
nitrofurantoin
methotrexate
cyclophosphamide
nsaids
cervical stenosis
cervical factor infertility|hostile cervical mucus
cone biopsy|leep|cervical conization
uterine septum|septate uterus
bicornuate uterus
unicornuate uterus
uterus didelphys
des exposure|diethylstilbestrol|t shaped uterus
endometrial polyps|uterine polyps
adenomyosis
chronic endometritis
genital tuberculosis|tuberculosis
schistosomiasis|genital schistosomiasis
mycoplasma genitalium
ectopic pregnancy|prior ectopic pregnancy
pelvic adhesions|adhesions
ruptured appendix|appendicitis
inflammatory bowel disease|crohn disease
luteal phase defect
luteinized unruptured follicle syndrome
ovarian cysts|endometrioma
ovarian surgery|oophorectomy
autoimmune oophoritis
gonadal dysgenesis|swyer syndrome|46 xy gonadal dysgenesis
pure gonadal dysgenesis|46 xx gonadal dysgenesis
fsh receptor mutation|resistant ovary syndrome
aromatase deficiency
17 alpha hydroxylase deficiency
noonan syndrome
myotonic dystrophy
balanced translocation|robertsonian translocation
xx male syndrome|de la chapelle syndrome
prader willi syndrome
laurence moon bardet biedl syndrome|bardet biedl syndrome
hyperthecosis|ovarian hyperthecosis
androgen secreting tumor
non classic congenital adrenal hyperplasia
chronic kidney disease
liver cirrhosis|cirrhosis
hiv
vaginismus
dyspareunia
infrequent intercourse|timing of intercourse
young syndrome
heavy metal exposure|lead exposure
`, "2026-11-07");
P("Name a cause of abnormal vaginal bleeding","clinical","",`
uterine fibroids|leiomyoma|leiomyomas|fibroids|myoma
endometrial polyps|uterine polyps
adenomyosis
endometrial cancer|endometrial carcinoma|uterine cancer
endometrial hyperplasia
cervical cancer|cervical carcinoma
ectopic pregnancy
spontaneous abortion|miscarriage|threatened abortion
placental abruption|abruptio placentae
placenta previa|placenta praevia
vasa previa|vasa praevia
uterine rupture
hydatidiform mole|molar pregnancy|gestational trophoblastic disease
choriocarcinoma
anovulation|anovulatory bleeding|ovulatory dysfunction
polycystic ovary syndrome|pcos
hypothyroidism
hyperthyroidism
hyperprolactinemia|hyperprolactinaemia|prolactinoma
von willebrand disease|vwd
coagulopathy|bleeding disorder
anticoagulants|warfarin|doacs
thrombocytopenia|itp
leukemia|leukaemia
liver disease|cirrhosis
chronic kidney disease|ckd
perimenopause|menopausal transition
puberty|immature hpo axis|menarche
atrophic vaginitis|vaginal atrophy|genitourinary syndrome of menopause
cervicitis
chlamydia
gonorrhea|gonorrhoea
trichomoniasis|trichomonas
pelvic inflammatory disease|pid
endometritis
postpartum endometritis
retained products of conception|retained placenta
postpartum hemorrhage|postpartum haemorrhage|uterine atony
subinvolution of placental site
cervical polyp|cervical polyps
cervical ectropion|cervical ectopy
cervical intraepithelial neoplasia|cin|cervical dysplasia
vaginal cancer
vulvar cancer
uterine sarcoma|leiomyosarcoma
ovarian cancer
granulosa cell tumor|granulosa cell tumour
thecoma
estrogen secreting tumor
fallopian tube cancer
breakthrough bleeding|oral contraceptive pills|ocps|combined hormonal contraception
progestin only contraception|progestin only pill|mini pill
depot medroxyprogesterone acetate|depo provera|dmpa
contraceptive implant|nexplanon|etonogestrel implant
intrauterine device|iud|copper iud
levonorgestrel iud|hormonal iud|mirena
emergency contraception|plan b
missed pills
hormone replacement therapy|hrt|menopausal hormone therapy
tamoxifen
unopposed estrogen
ssris
antipsychotics
corticosteroids
herbal supplements|ginseng|ginkgo
foreign body|retained tampon|vaginal foreign body
trauma|genital trauma|vaginal laceration
sexual assault
child sexual abuse
endometriosis
arteriovenous malformation|uterine avm
cesarean scar defect|isthmocele|niche
asherman syndrome
chronic endometritis
tuberculous endometritis|genital tuberculosis
pyometra
uterine prolapse|pelvic organ prolapse
lichen sclerosus
cushing syndrome
adrenal hyperplasia|congenital adrenal hyperplasia
stress|psychological stress
anorexia nervosa|eating disorders
excessive exercise
obesity
rapid weight loss
diabetes mellitus
sarcoma botryoides|embryonal rhabdomyosarcoma
precocious puberty
mccune albright syndrome
neonatal withdrawal bleeding|maternal estrogen withdrawal
endometrial stromal sarcoma
carcinosarcoma|malignant mixed mullerian tumor
gestational trophoblastic neoplasia
placental site trophoblastic tumor
placenta accreta|placenta accreta spectrum|placenta increta|placenta percreta
cervical pregnancy
cesarean scar pregnancy
implantation bleeding
subchorionic hematoma|subchorionic haemorrhage
incompetent cervix|cervical insufficiency
preterm labor|preterm labour
bloody show|labor|labour
ovarian cyst rupture|hemorrhagic ovarian cyst
corpus luteum cyst
luteal phase defect
hemophilia carrier
platelet function disorder
factor xi deficiency
glanzmann thrombasthenia
bernard soulier syndrome
lupus|sle
hiv
vaginal adenosis
condyloma acuminata|genital warts
herpes simplex|genital herpes|hsv
syphilis
endometrial biopsy
cervical conization|leep
pessary ulceration
radiation vaginitis|pelvic radiation
`, "2026-11-07");
P("Name a cause of a neck mass","clinical","",`
reactive lymphadenopathy|reactive lymph node|lymphadenitis
thyroid nodule|thyroid nodules
goiter|goitre|multinodular goiter
thyroglossal duct cyst
branchial cleft cyst|branchial cyst|second branchial cleft cyst
squamous cell carcinoma of the head and neck|head and neck squamous cell carcinoma|hnscc|head and neck cancer
hpv associated oropharyngeal cancer|oropharyngeal cancer|oropharyngeal squamous cell carcinoma
nasopharyngeal carcinoma
laryngeal cancer
papillary thyroid carcinoma|papillary thyroid cancer
follicular thyroid carcinoma|follicular thyroid cancer
medullary thyroid carcinoma|medullary thyroid cancer
anaplastic thyroid carcinoma|anaplastic thyroid cancer
hodgkin lymphoma|hodgkin disease|hodgkins lymphoma
non hodgkin lymphoma|nhl
metastatic lymphadenopathy|metastatic cancer|lymph node metastasis
virchow node|troisier sign|left supraclavicular node
graves disease
hashimoto thyroiditis|hashimotos|chronic lymphocytic thyroiditis
subacute thyroiditis|de quervain thyroiditis|granulomatous thyroiditis
riedel thyroiditis
acute suppurative thyroiditis
thyroid cyst
cystic hygroma|lymphatic malformation|cystic lymphangioma
dermoid cyst
epidermoid cyst|epidermal inclusion cyst|sebaceous cyst
lipoma
hemangioma|haemangioma|infantile hemangioma
carotid body tumor|carotid body tumour|paraganglioma|chemodectoma
glomus vagale|vagal paraganglioma
schwannoma|neurilemmoma
neurofibroma
pleomorphic adenoma|benign mixed tumor
warthin tumor|warthin tumour|papillary cystadenoma lymphomatosum
mucoepidermoid carcinoma
adenoid cystic carcinoma
parotitis
mumps
sialadenitis
sialolithiasis|salivary stone|salivary gland stone
submandibular gland enlargement
ranula|plunging ranula
laryngocele
zenker diverticulum|pharyngoesophageal diverticulum
parathyroid adenoma
parathyroid carcinoma
parathyroid cyst
infectious mononucleosis|mono|epstein barr virus|ebv
cytomegalovirus|cmv
hiv
toxoplasmosis
cat scratch disease|bartonella henselae|bartonella
tuberculosis|scrofula|tuberculous lymphadenitis
atypical mycobacterial lymphadenitis|nontuberculous mycobacteria|mycobacterium avium complex|mai
actinomycosis|actinomyces
streptococcal pharyngitis|strep throat
peritonsillar abscess|quinsy
retropharyngeal abscess
parapharyngeal abscess
deep neck space infection|deep neck infection
ludwig angina
lemierre syndrome|fusobacterium necrophorum
cellulitis
abscess
kawasaki disease
kikuchi disease|kikuchi fujimoto disease|histiocytic necrotizing lymphadenitis
rosai dorfman disease|sinus histiocytosis with massive lymphadenopathy
castleman disease
sarcoidosis
sjogren syndrome
igg4 related disease
kimura disease
langerhans cell histiocytosis
leukemia|leukaemia|chronic lymphocytic leukemia|cll
acute lymphoblastic leukemia
plasmacytoma
lymphangioma
venous malformation
arteriovenous malformation
carotid artery aneurysm|carotid aneurysm
pseudoaneurysm
jugular vein thrombosis|internal jugular vein thrombosis
cervical rib
sternocleidomastoid tumor of infancy|fibromatosis colli|congenital muscular torticollis
teratoma|cervical teratoma
thymic cyst|cervical thymic cyst
ectopic thyroid
lingual thyroid
bronchogenic cyst
lymphoepithelial cyst
hiv associated parotid lymphoepithelial cysts
tularemia|francisella tularensis
plague|yersinia pestis|bubonic plague
brucellosis
histoplasmosis
coccidioidomycosis
syphilis
rubella
measles
adenovirus
herpes simplex virus
diphtheria|bull neck
hemangiopericytoma
liposarcoma
rhabdomyosarcoma
neuroblastoma
merkel cell carcinoma
melanoma|metastatic melanoma
skin cancer|cutaneous squamous cell carcinoma
lung cancer|pancoast tumor
breast cancer
stomach cancer|gastric cancer
esophageal cancer|oesophageal cancer
renal cell carcinoma
salivary duct carcinoma
acinic cell carcinoma
mucosa associated lymphoid tissue lymphoma|malt lymphoma
burkitt lymphoma
follicular lymphoma
diffuse large b cell lymphoma|dlbcl
thyroid lymphoma
desmoid tumor|aggressive fibromatosis
nodular fasciitis
pilomatrixoma|pilomatricoma
keloid
subcutaneous emphysema
esophageal duplication cyst
amyloidosis
drug induced lymphadenopathy|phenytoin pseudolymphoma|phenytoin
serum sickness
lupus|sle
rheumatoid arthritis
still disease|adult onset still disease
dental abscess|odontogenic infection
scalp infection|tinea capitis
lice|pediculosis capitis
`, "2026-11-07");
P("Name a movement disorder","clinical","",`
parkinson disease|parkinsons disease|parkinsons|pd|idiopathic parkinson disease
essential tremor|benign essential tremor|familial tremor
huntington disease|huntingtons disease|huntington chorea|huntingtons
tardive dyskinesia|td
restless legs syndrome|rls|willis ekbom disease
wilson disease|wilsons disease|hepatolenticular degeneration
sydenham chorea|st vitus dance|rheumatic chorea
tourette syndrome|tourettes|gilles de la tourette syndrome
dystonia
acute dystonia|acute dystonic reaction
drug induced parkinsonism|neuroleptic induced parkinsonism
akathisia
hemiballismus|ballismus|hemiballism
chorea
athetosis
choreoathetosis
myoclonus
asterixis|negative myoclonus|flapping tremor
tremor
tics|tic disorder
parkinsonism
progressive supranuclear palsy|psp|steele richardson olszewski syndrome
multiple system atrophy|msa|shy drager syndrome
corticobasal degeneration|cbd|corticobasal syndrome
dementia with lewy bodies|lewy body dementia|dlb
vascular parkinsonism
normal pressure hydrocephalus|nph
cerebellar ataxia|ataxia
friedreich ataxia
spinocerebellar ataxia|sca
ataxia telangiectasia|louis bar syndrome
creutzfeldt jakob disease|cjd
neuroleptic malignant syndrome|nms
serotonin syndrome
cervical dystonia|spasmodic torticollis|torticollis
blepharospasm
oromandibular dystonia
meige syndrome
writer cramp|writers cramp|focal hand dystonia
musician dystonia
spasmodic dysphonia|laryngeal dystonia
hemifacial spasm
dopa responsive dystonia|segawa syndrome|segawa disease
early onset generalized dystonia|dyt1 dystonia|torsion dystonia|dystonia musculorum deformans
paroxysmal kinesigenic dyskinesia|pkd
paroxysmal nonkinesigenic dyskinesia
paroxysmal exercise induced dyskinesia
rapid onset dystonia parkinsonism
x linked dystonia parkinsonism|lubag
myoclonus dystonia
levodopa induced dyskinesia|peak dose dyskinesia
on off phenomenon|wearing off
freezing of gait
rest tremor|resting tremor
intention tremor|cerebellar tremor
physiologic tremor|enhanced physiologic tremor
orthostatic tremor
holmes tremor|rubral tremor|midbrain tremor
dystonic tremor
drug induced tremor
psychogenic tremor|functional tremor
functional movement disorder|psychogenic movement disorder
palatal myoclonus|palatal tremor
opsoclonus myoclonus syndrome|dancing eyes dancing feet|opsoclonus myoclonus ataxia
hypnic jerks|sleep starts
periodic limb movement disorder|periodic limb movements of sleep|plmd
rem sleep behavior disorder|rbd
bruxism
stiff person syndrome|stiff man syndrome
hyperekplexia|startle disease
juvenile myoclonic epilepsy|jme
progressive myoclonic epilepsy
unverricht lundborg disease
lafora disease
post hypoxic myoclonus|lance adams syndrome
spinal myoclonus
propriospinal myoclonus
neuroacanthocytosis|chorea acanthocytosis
mcleod syndrome
benign hereditary chorea
huntington disease like 2|hdl2
dentatorubral pallidoluysian atrophy|drpla
pantothenate kinase associated neurodegeneration|pkan|hallervorden spatz disease
neurodegeneration with brain iron accumulation|nbia
aceruloplasminemia
neuroferritinopathy
fahr disease|primary familial brain calcification
juvenile huntington disease|westphal variant
chorea gravidarum
lupus chorea|sle chorea
antiphospholipid syndrome chorea
polycythemia vera chorea
hyperglycemic hemichorea|nonketotic hyperglycemic hemichorea|diabetic striatopathy
pandas|pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections
pans
autoimmune encephalitis|anti nmda receptor encephalitis
kernicterus|bilirubin encephalopathy
cerebral palsy|dyskinetic cerebral palsy|athetoid cerebral palsy
lesch nyhan syndrome
glutaric aciduria type 1
rett syndrome
stereotypies|stereotypic movement disorder
tardive dystonia
tardive akathisia
rabbit syndrome
manganism|manganese toxicity
mptp induced parkinsonism|mptp
carbon monoxide parkinsonism
postencephalitic parkinsonism|encephalitis lethargica
dementia pugilistica|chronic traumatic encephalopathy|cte
juvenile parkinsonism
parkin related parkinson disease|park2
lrrk2 parkinson disease
gaucher associated parkinsonism
episodic ataxia
spinocerebellar ataxia type 3|machado joseph disease
fragile x associated tremor ataxia syndrome|fxtas
ataxia with vitamin e deficiency
multiple system atrophy cerebellar type|msa c|olivopontocerebellar atrophy
paraneoplastic cerebellar degeneration
alcoholic cerebellar degeneration
provisional tic disorder|transient tic disorder
chronic motor tic disorder|chronic vocal tic disorder|persistent tic disorder
mirror movements
alien limb phenomenon|alien hand syndrome
painful legs and moving toes
belly dancer dyskinesia
spasmus nutans
jumping frenchmen of maine
sandifer syndrome
benign paroxysmal torticollis of infancy
shuddering attacks
task specific tremor|primary writing tremor
neuropathic tremor
pisa syndrome
camptocormia
`, "2026-11-07");

/* ---- NEW STANDARD DAILY PROMPTS: MEDICINE part 2 (batch 2026-11-05, board-first) ---- */
P("Name a structure of the hand or wrist","body","",`
scaphoid|scaphoid bone|navicular of the hand
lunate|lunate bone
triquetrum|triquetral bone|triquetral
pisiform|pisiform bone
trapezium|trapezium bone|greater multangular
trapezoid|trapezoid bone|lesser multangular
capitate|capitate bone
hamate|hamate bone
hook of hamate|hamulus of hamate
carpal bones|carpals
metacarpals|metacarpal bones|metacarpal
phalanges|phalanx|finger bones
proximal phalanx
middle phalanx
distal phalanx
carpal tunnel
flexor retinaculum|transverse carpal ligament
median nerve
ulnar nerve
radial nerve
superficial branch of radial nerve|superficial radial nerve
deep branch of ulnar nerve
recurrent branch of median nerve|thenar branch of median nerve|motor branch of median nerve
palmar cutaneous branch of median nerve
dorsal cutaneous branch of ulnar nerve
guyon canal|ulnar canal|guyon's canal
anatomical snuffbox|snuffbox|fovea radialis
radial artery
ulnar artery
superficial palmar arch
deep palmar arch
common palmar digital arteries
proper palmar digital arteries|digital arteries
princeps pollicis artery
radialis indicis artery
thenar eminence
hypothenar eminence
abductor pollicis brevis
flexor pollicis brevis
opponens pollicis
adductor pollicis
abductor digiti minimi|abductor digiti minimi of hand
flexor digiti minimi brevis
opponens digiti minimi
palmaris brevis
lumbricals|lumbrical muscles|lumbricals of hand
dorsal interossei|dorsal interosseous muscles
palmar interossei|palmar interosseous muscles
interossei|interosseous muscles of hand
flexor digitorum superficialis|fds
flexor digitorum profundus|fdp
flexor pollicis longus|fpl
flexor carpi radialis|fcr
flexor carpi ulnaris|fcu
palmaris longus|palmaris longus tendon
extensor pollicis longus|epl
extensor pollicis brevis|epb
abductor pollicis longus|apl
extensor carpi radialis longus|ecrl
extensor carpi radialis brevis|ecrb
extensor carpi ulnaris|ecu
extensor digitorum|extensor digitorum communis|edc
extensor indicis|extensor indicis proprius|eip
extensor digiti minimi|extensor digiti quinti|edm
extensor retinaculum
first dorsal compartment|first extensor compartment
extensor compartments of the wrist|dorsal compartments
lister tubercle|dorsal tubercle of radius|lister's tubercle
palmar aponeurosis|palmar fascia
triangular fibrocartilage complex|tfcc|triangular fibrocartilage
scapholunate ligament|scapholunate interosseous ligament
lunotriquetral ligament|lunotriquetral interosseous ligament
ulnar collateral ligament of the thumb|thumb ulnar collateral ligament|gamekeeper ligament
radial collateral ligament of the thumb
collateral ligaments of the fingers|collateral ligaments
volar plate|palmar plate
radiocarpal joint|wrist joint
distal radioulnar joint|druj
midcarpal joint
carpometacarpal joints|cmc joints|carpometacarpal joint
first carpometacarpal joint|thumb cmc joint|basal joint of thumb|trapeziometacarpal joint
metacarpophalangeal joints|mcp joints|mcp joint|metacarpophalangeal joint|knuckles
proximal interphalangeal joints|pip joints|pip joint|proximal interphalangeal joint
distal interphalangeal joints|dip joints|dip joint|distal interphalangeal joint
interphalangeal joint of the thumb|thumb ip joint
distal radius
radial styloid|radial styloid process
ulnar styloid|ulnar styloid process
ulnar head|head of ulna
sigmoid notch|ulnar notch of radius
flexor tendon sheaths|digital flexor sheaths|tendon sheaths
radial bursa
ulnar bursa
annular pulleys|a1 pulley|a2 pulley|pulleys|flexor pulleys
cruciate pulleys
extensor hood|dorsal hood|extensor expansion|extensor mechanism
central slip
lateral bands
terminal tendon|terminal extensor tendon
sagittal bands
oblique retinacular ligament|landsmeer ligament
transverse retinacular ligament
thenar space
midpalmar space
hypothenar space|hypothenar compartment
thenar compartment
parona space|space of parona
web space|first web space|interdigital web
nail|fingernail|nail plate
nail bed
eponychium|cuticle
paronychium|perionychium
hyponychium
germinal matrix|nail matrix
lunula
pulp of finger|finger pulp|fingertip pulp|digital pulp
pulp septa|fibrous septa of the pulp
palmar digital nerves|digital nerves|proper palmar digital nerves
common palmar digital nerves
dorsal digital nerves
cephalic vein
basilic vein
dorsal venous network of the hand|dorsal venous arch of hand|dorsal venous network
palmar carpal arch
dorsal carpal arch|dorsal carpal network
anterior interosseous nerve|ain
posterior interosseous nerve|pin
pronator quadratus
grayson ligaments|grayson's ligaments
cleland ligaments|cleland's ligaments
natatory ligament
pretendinous bands
spiral band
space of poirier
radioscaphocapitate ligament
long radiolunate ligament
short radiolunate ligament
radioscapholunate ligament|ligament of testut
dorsal radiocarpal ligament|dorsal radiotriquetral ligament
dorsal intercarpal ligament
ulnolunate ligament
ulnotriquetral ligament
pisohamate ligament
pisometacarpal ligament
deltoid ligament of the wrist|arcuate ligament of wrist
deep transverse metacarpal ligament
superficial transverse metacarpal ligament
anterior oblique ligament of the thumb|beak ligament
dorsoradial ligament
extensor carpi ulnaris subsheath|ecu subsheath
meniscal homolog|ulnar meniscus homologue
proximal carpal row
distal carpal row
os centrale
os styloideum|carpal boss
sesamoid bones of the hand|thumb sesamoids|sesamoids of the hand
palmar creases|thenar crease|distal palmar crease
flexion creases of the fingers|digital creases
scaphoid waist
proximal pole of scaphoid
scaphoid tubercle
pisotriquetral joint
intercarpal joints
intermetacarpal joints
radial recurrent artery
anterior interosseous artery
posterior interosseous artery
median artery|persistent median artery
palmar metacarpal arteries
dorsal metacarpal arteries
dorsal digital arteries
first dorsal metacarpal artery
dorsal branch of ulnar artery
palmar branch of radial artery|superficial palmar branch of radial artery
dorsal branch of radial artery
palmar ulnar nerve branch|superficial branch of ulnar nerve
martin-gruber anastomosis|martin gruber anastomosis
riche-cannieu anastomosis|riche cannieu anastomosis
berrettini anastomosis
volar wrist crease|wrist crease
`, "2026-11-07");
P("Name a structure of the foot or ankle","body","",`
talus|astragalus|ankle bone
calcaneus|calcaneum|heel bone|os calcis
navicular|navicular bone|tarsal navicular
cuboid|cuboid bone
medial cuneiform|first cuneiform
intermediate cuneiform|middle cuneiform|second cuneiform
lateral cuneiform|third cuneiform
cuneiforms|cuneiform bones
tarsal bones|tarsals
metatarsals|metatarsal bones|metatarsal
fifth metatarsal|base of fifth metatarsal|fifth metatarsal tuberosity
first metatarsal
phalanges of the foot|toe bones|toe phalanges
great toe|hallux|big toe
lateral malleolus
medial malleolus
posterior malleolus
distal tibia|tibial plafond|plafond
distal fibula
ankle mortise|mortise
talocrural joint|ankle joint|tibiotalar joint
subtalar joint|talocalcaneal joint
talonavicular joint
calcaneocuboid joint
chopart joint|transverse tarsal joint|midtarsal joint
lisfranc joint|tarsometatarsal joint|tarsometatarsal joints
lisfranc ligament
metatarsophalangeal joints|mtp joint|mtp joints|metatarsophalangeal joint
first mtp joint|first metatarsophalangeal joint
interphalangeal joints of the toes|toe ip joints
distal tibiofibular joint|distal tibiofibular syndesmosis|syndesmosis|ankle syndesmosis
anterior inferior tibiofibular ligament|aitfl
posterior inferior tibiofibular ligament|pitfl
interosseous membrane|interosseous ligament of leg
anterior talofibular ligament|atfl
calcaneofibular ligament|cfl
posterior talofibular ligament|ptfl
deltoid ligament|medial collateral ligament of ankle
lateral collateral ligament of ankle|lateral ankle ligaments
spring ligament|plantar calcaneonavicular ligament
long plantar ligament
short plantar ligament|plantar calcaneocuboid ligament
bifurcate ligament
interosseous talocalcaneal ligament
cervical ligament
plantar fascia|plantar aponeurosis
achilles tendon|calcaneal tendon|tendo calcaneus|heel cord
tibialis posterior|posterior tibial tendon|tibialis posterior tendon
tibialis anterior|anterior tibial tendon|tibialis anterior tendon
peroneus longus|fibularis longus|peroneus longus tendon
peroneus brevis|fibularis brevis|peroneus brevis tendon
peroneus tertius|fibularis tertius
flexor hallucis longus|fhl
flexor digitorum longus|fdl
extensor hallucis longus|ehl
extensor digitorum longus|edl
extensor digitorum brevis|edb
extensor hallucis brevis
gastrocnemius
soleus
plantaris|plantaris tendon
abductor hallucis
flexor digitorum brevis
abductor digiti minimi of foot|abductor digiti quinti
quadratus plantae|flexor accessorius
lumbricals of the foot|foot lumbricals
flexor hallucis brevis
adductor hallucis
flexor digiti minimi brevis of foot
plantar interossei
dorsal interossei of the foot
tarsal tunnel
flexor retinaculum of the ankle|laciniate ligament
superior extensor retinaculum
inferior extensor retinaculum
superior peroneal retinaculum|superior fibular retinaculum
inferior peroneal retinaculum
tibial nerve|posterior tibial nerve
medial plantar nerve
lateral plantar nerve
deep peroneal nerve|deep fibular nerve
superficial peroneal nerve|superficial fibular nerve
sural nerve
saphenous nerve
medial calcaneal nerve|medial calcaneal branches
baxter nerve|first branch of lateral plantar nerve|inferior calcaneal nerve
common plantar digital nerves|interdigital nerves
dorsalis pedis artery|dorsal pedal artery|dp pulse
posterior tibial artery|pt pulse
anterior tibial artery
peroneal artery|fibular artery
medial plantar artery
lateral plantar artery
plantar arch|deep plantar arch
arcuate artery
first dorsal metatarsal artery
deep plantar artery
lateral tarsal artery
medial tarsal arteries
great saphenous vein|long saphenous vein
small saphenous vein|short saphenous vein|lesser saphenous vein
dorsal venous arch of the foot
medial longitudinal arch|arch of the foot|longitudinal arch
lateral longitudinal arch
transverse arch
sinus tarsi
tarsal canal
sustentaculum tali
peroneal tubercle|trochlear process of calcaneus
calcaneal tuberosity|tuber calcanei
talar dome|trochlea of talus
talar neck|neck of talus
head of talus|talar head
lateral process of talus
posterior process of talus
os trigonum
os naviculare|accessory navicular|os tibiale externum
os peroneum
os vesalianum
os intermetatarseum
navicular tuberosity
sesamoid bones of the foot|hallux sesamoids|medial sesamoid|lateral sesamoid
retrocalcaneal bursa
retroachilles bursa|superficial calcaneal bursa
heel fat pad|plantar fat pad
anterolateral gutter
kager fat pad|kager's fat pad|pre-achilles fat pad
anterior talotibial ligament
tibiocalcaneal ligament
tibionavicular ligament
tibiospring ligament
posterior tibiotalar ligament
superomedial calcaneonavicular ligament
plantar plate
deep transverse metatarsal ligament
intermetatarsal ligaments
dorsal tarsometatarsal ligaments
plantar tarsometatarsal ligaments
knot of henry|master knot of henry
toenail|toe nail
tarsal sinus artery|artery of the tarsal sinus
artery of the tarsal canal
inferior tibiofibular transverse ligament|transverse tibiofibular ligament
intermalleolar ligament
bassett ligament|accessory aitfl
os subfibulare
os supranaviculare
os calcaneus secundarius
bipartite medial cuneiform
stieda process
navicular cuneiform joint|naviculocuneiform joint
intercuneiform joints
intermetatarsal joints
cuboid tuberosity
groove for peroneus longus|cuboid groove
lateral band of plantar fascia
interdigital web spaces of the foot|toe web spaces
`, "2026-11-07");
P("Name an anatomical landmark used in physical exams or procedures","body","",`
mcburney point|mcburney's point
angle of louis|sternal angle|manubriosternal junction
anterior superior iliac spine|asis
iliac crest|tuffier line|intercristal line|supracristal line
erb point|erb's point
hesselbach triangle|inguinal triangle|hesselbach's triangle
midclavicular line|mcl
anterior axillary line
midaxillary line
posterior axillary line
fifth intercostal space|5th intercostal space
second intercostal space|2nd intercostal space
triangle of safety|safe triangle
point of maximal impulse|pmi|apex beat|apical impulse
suprasternal notch|jugular notch|sternal notch
xiphoid process|xiphoid|xiphisternum
costal margin
umbilicus|navel|belly button
inguinal ligament|poupart ligament
pubic tubercle
pubic symphysis|symphysis pubis
femoral triangle|scarpa triangle
midinguinal point|mid-inguinal point
midpoint of inguinal ligament
kocher point|kocher's point
nasion
inion|external occipital protuberance
tragus
pterion
bregma
lambda
mastoid process
angle of the mandible|mandibular angle
cricothyroid membrane|cricothyroid ligament
thyroid cartilage|adam's apple|laryngeal prominence
cricoid cartilage
hyoid bone|hyoid
sternocleidomastoid|scm
sedillot triangle|lesser supraclavicular fossa|triangle between the heads of sternocleidomastoid
carotid triangle
posterior triangle of the neck|posterior cervical triangle
anterior triangle of the neck|anterior cervical triangle
external jugular vein|ej
c7 spinous process|vertebra prominens|c7
inferior angle of the scapula|scapular tip|t7 level
spine of the scapula|scapular spine|t3 level
medial border of scapula
acromion|acromion process
coracoid process|coracoid
greater tuberosity|greater tubercle of humerus
lateral epicondyle
medial epicondyle
olecranon
antecubital fossa|cubital fossa
radial styloid process|radial styloid
anatomical snuffbox|snuffbox
lister tubercle|listers tubercle
palmaris longus tendon
flexor carpi radialis tendon
distal wrist crease|wrist crease
kaplan cardinal line|kaplans cardinal line
greater trochanter
posterior superior iliac spine|psis|dimples of venus
sacral hiatus
sacral cornua
sacral promontory
ischial tuberosity|sit bone
ischial spine
coccyx|tailbone
gluteal quadrants|upper outer quadrant of buttock|dorsogluteal site
ventrogluteal site|hochstetter method
vastus lateralis site|anterolateral thigh
deltoid injection site|deltoid muscle site
tibial tuberosity|tibial tubercle
patella|kneecap
inferior pole of patella
joint line|knee joint line
fibular head|head of fibula
popliteal fossa
medial malleolus
lateral malleolus
dorsalis pedis pulse|dp pulse
posterior tibial pulse|pt pulse
navicular tuberosity
fifth metatarsal base|base of fifth metatarsal
superficial temporal artery
supraorbital notch|supraorbital foramen
infraorbital foramen
mental foramen
glabella
vertex
external auditory meatus|ear canal
frankfort plane|frankfort horizontal
reid baseline
orbitomeatal line|canthomeatal line
lateral canthus
medial canthus
limbus|corneoscleral junction
philtrum
nasal ala|ala of nose
columella
little area|kiesselbach plexus|kiesselbach area|little's area
uvula
tonsillar pillars|anterior tonsillar pillar|palatoglossal arch
vallecula
epiglottis
arytenoids|arytenoid cartilages
vocal cords|vocal folds
carina
tracheal rings|second tracheal ring|tracheal rings 2 to 4
thyroid isthmus
sternal border|left sternal border|right sternal border
aortic area|right second intercostal space
pulmonic area|left second intercostal space
tricuspid area|left lower sternal border
mitral area|cardiac apex
traube space|traube's space|traube semilunar space
castell point|castell's point
murphy point|murphy's point|gallbladder point
costovertebral angle|cva|renal angle
lumbar triangle|petit triangle|petit's triangle
grynfeltt triangle|superior lumbar triangle
linea alba
linea semilunaris|spigelian line
arcuate line|semicircular line of douglas
rectus sheath|rectus abdominis
transpyloric plane|addison plane
subcostal plane
transtubercular plane|intertubercular plane
interspinous plane
deep inguinal ring
superficial inguinal ring|external inguinal ring
mid-scapular line|scapular line
paravertebral line
l4 spinous process|l4 l5 interspace|l3 l4 interspace
t4 dermatome|nipple line
t10 dermatome|umbilicus level
nipple|nipple areola complex
inframammary fold
deltopectoral groove
infraclavicular fossa|subclavian vein landmark
junction of the middle and medial thirds of the clavicle|clavicle midpoint
supraclavicular fossa
external anal sphincter|anal verge
dentate line|pectinate line
anorectal junction|anorectal ring
cervical os|external os
adductor tubercle
pes anserinus|pes anserine
gerdy tubercle|gerdy's tubercle
olecranon fossa
radial head
lateral soft spot of elbow|anconeus triangle|lateral triangle of elbow
subacromial space|posterolateral corner of acromion
glenohumeral joint line
sternoclavicular joint
acromioclavicular joint|ac joint
bicipital groove|intertubercular groove
anterior fontanelle
posterior fontanelle
sagittal suture
lambdoid suture
coronal suture
foramen magnum
odontoid process|dens
mid-pupillary line|midpupillary line
lateral canthal line
pfannenstiel line|pfannenstiel incision site
palmar crease|distal palmar crease
thenar eminence
hypothenar eminence
radial pulse
ulnar pulse
brachial pulse
popliteal pulse
carotid pulse
femoral pulse
apex of femoral triangle
saphenous opening|fossa ovalis of thigh
greater sciatic notch
midpoint between greater trochanter and ischial tuberosity
tibial plateau
achilles tendon insertion
temporomandibular joint|tmj
zygomatic arch
infraorbital rim|orbital rim
mastoid tip
spinous processes
transverse processes
facet joints
`, "2026-11-07");
P("Name a foramen, canal or opening in the body","body","",`
foramen magnum
jugular foramen
foramen ovale|foramen ovale of skull
foramen rotundum
foramen spinosum
foramen lacerum
internal acoustic meatus|internal auditory meatus|internal auditory canal|iac
superior orbital fissure
inferior orbital fissure
optic canal|optic foramen
hypoglossal canal
carotid canal
stylomastoid foramen
cribriform plate|cribriform foramina|olfactory foramina
foramen ovale of the heart|patent foramen ovale|pfo|fossa ovalis
ductus arteriosus|patent ductus arteriosus|pda
ductus venosus
foramen of monro|interventricular foramen|foramina of monro
foramen of luschka|foramina of luschka|lateral apertures
foramen of magendie|median aperture
cerebral aqueduct|aqueduct of sylvius|sylvian aqueduct
central canal of the spinal cord|central canal
vertebral canal|spinal canal
intervertebral foramen|neural foramen|neuroforamen|intervertebral foramina
transverse foramen|foramen transversarium
sacral foramina|anterior sacral foramina|posterior sacral foramina
sacral hiatus
inguinal canal
deep inguinal ring|internal inguinal ring
superficial inguinal ring|external inguinal ring
femoral canal
femoral ring
obturator canal
obturator foramen
greater sciatic foramen
lesser sciatic foramen
pudendal canal|alcock canal|alcock's canal
adductor canal|hunter canal|subsartorial canal
adductor hiatus
caval hiatus|caval foramen|ivc hiatus|caval opening
esophageal hiatus|oesophageal hiatus
aortic hiatus
foramen of bochdalek|bochdalek foramen
foramen of morgagni|morgagni foramen
epiploic foramen|foramen of winslow|omental foramen
carpal tunnel
guyon canal|ulnar canal|guyon's canal
tarsal tunnel
cubital tunnel
radial tunnel
quadrangular space|quadrilateral space
triangular space
triangular interval|lower triangular space|triangular interval of arm
supraorbital foramen|supraorbital notch
infraorbital foramen
infraorbital canal
mental foramen
mandibular foramen
mandibular canal|inferior alveolar canal
incisive foramen|incisive canal
greater palatine foramen
lesser palatine foramina
pterygoid canal|vidian canal
sphenopalatine foramen
pterygomaxillary fissure
foramen cecum of the skull
foramen cecum of the tongue
nasolacrimal duct|nasolacrimal canal
anterior ethmoidal foramen
posterior ethmoidal foramen
condylar canal|posterior condylar canal
mastoid foramen
parietal foramen
emissary foramina
zygomaticofacial foramen
zygomaticotemporal foramen
foramen of vesalius|sphenoidal emissary foramen
canaliculus innominatus|foramen petrosum
facial canal|fallopian canal
tympanic canaliculus
mastoid canaliculus
petrotympanic fissure|glaserian fissure
external acoustic meatus|external auditory canal|ear canal
eustachian tube|auditory tube|pharyngotympanic tube
oval window|fenestra vestibuli
round window|fenestra cochleae
vestibular aqueduct
cochlear aqueduct
semicircular canals
cochlear canal|cochlear duct|scala media
hiatus of facial canal|hiatus for greater petrosal nerve
palatovaginal canal
vomerovaginal canal
foramen of huschke|foramen tympanicum
canal of schlemm|schlemm canal|scleral venous sinus
canal of hering|canals of hering|hering canal
canal of nuck
gartner duct|gartner's duct
vaginal orifice|vaginal introitus|introitus
external urethral orifice|urethral meatus|external urethral meatus
cervical canal|endocervical canal
external os|external cervical os
internal os|internal cervical os
ureteric orifice|ureteral orifice
internal urethral orifice
anal canal
anus
pylorus|pyloric canal|pyloric orifice
cardiac orifice|cardia|gastroesophageal junction
ileocecal valve|ileocecal orifice
appendiceal orifice
ampulla of vater|major duodenal papilla|hepatopancreatic ampulla
minor duodenal papilla
mouth|oral fissure
nostril|naris|nares|anterior nares
choanae|posterior nares|choana
maxillary ostium|maxillary sinus ostium|ostiomeatal complex|osteomeatal complex
semilunar hiatus|hiatus semilunaris
frontonasal duct
nasopalatine canal
stensen duct|parotid duct|stensen's duct
wharton duct|submandibular duct|wharton's duct
thoracic outlet|superior thoracic aperture|thoracic inlet
inferior thoracic aperture
pelvic inlet|pelvic brim
pelvic outlet
urogenital hiatus
levator hiatus
coronary sinus ostium|ostium of coronary sinus
coronary ostia|coronary ostium
mitral orifice|mitral valve orifice
tricuspid orifice
foramen of panizza
thebesian foramina|foramina venarum minimarum
interventricular septal defect|ventricular septal defect|vsd
atrial septal defect|asd|ostium secundum|ostium primum
ostium of the fallopian tube|tubal ostium|uterine ostium of tube
fimbrial opening|abdominal ostium of uterine tube
canal of cloquet|hyaloid canal
lacrimal punctum|puncta|lacrimal puncta
lacrimal canaliculi|lacrimal canaliculus
umbilical ring
urachus|median umbilical ligament
vitelline duct|omphalomesenteric duct
processus vaginalis
nutrient foramen|nutrient canal
haversian canal|haversian canals|osteonal canal
volkmann canal|volkmann canals|perforating canal
vertebral foramen
sinus tarsi
tarsal canal
supracondylar foramen|supratrochlear foramen
lesser palatine canal
greater palatine canal
foramen singulare
foramen secundum
foramen primum
pleuropericardial canals|pericardioperitoneal canals
dorello canal|dorello's canal
meckel cave|meckel's cave|trigeminal cave
foramen arcuale|arcuate foramen|ponticulus posticus
spinoglenoid notch
suprascapular notch
`, "2026-11-07");
P("Name a tract, nucleus or pathway in the nervous system","body","",`
lateral corticospinal tract|corticospinal tract|pyramidal tract
anterior corticospinal tract|ventral corticospinal tract
dorsal column medial lemniscus pathway|dcml|dorsal column|dorsal columns|posterior column|posterior columns
fasciculus gracilis|gracile fasciculus
fasciculus cuneatus|cuneate fasciculus
nucleus gracilis|gracile nucleus
nucleus cuneatus|cuneate nucleus
medial lemniscus
spinothalamic tract|anterolateral system|lateral spinothalamic tract
anterior spinothalamic tract|ventral spinothalamic tract
spinocerebellar tracts|dorsal spinocerebellar tract|posterior spinocerebellar tract
ventral spinocerebellar tract|anterior spinocerebellar tract
cuneocerebellar tract
corticobulbar tract|corticonuclear tract
rubrospinal tract
vestibulospinal tract|lateral vestibulospinal tract
medial vestibulospinal tract
reticulospinal tract|medullary reticulospinal tract|pontine reticulospinal tract
tectospinal tract
medial longitudinal fasciculus|mlf
hypothalamospinal tract|descending sympathetic pathway|oculosympathetic pathway
lissauer tract|dorsolateral fasciculus|lissauer's tract
optic tract
optic radiations|geniculocalcarine tract
meyer loop|meyer's loop
baum loop|baum's loop|parietal optic radiation
pupillary light reflex pathway|pupillary light reflex
accommodation reflex pathway|near reflex pathway
corneal reflex pathway|corneal reflex
papez circuit|limbic circuit
direct pathway of basal ganglia|direct pathway
indirect pathway of basal ganglia|indirect pathway
hyperdirect pathway
nigrostriatal pathway
mesolimbic pathway
mesocortical pathway
tuberoinfundibular pathway
fornix
mammillothalamic tract|vicq d'azyr bundle
perforant path|perforant pathway
corpus callosum
anterior commissure
posterior commissure
internal capsule
external capsule
extreme capsule
arcuate fasciculus
superior longitudinal fasciculus
inferior longitudinal fasciculus
uncinate fasciculus
cingulum
inferior fronto-occipital fasciculus|inferior occipitofrontal fasciculus
stria terminalis
stria medullaris
medial forebrain bundle
habenulointerpeduncular tract|fasciculus retroflexus
ansa lenticularis
lenticular fasciculus|h2 field of forel
thalamic fasciculus|h1 field of forel
subthalamic fasciculus
dentatorubrothalamic tract|cerebellothalamic tract
guillain-mollaret triangle|dentato-rubro-olivary pathway|myoclonic triangle
central tegmental tract
olivocerebellar tract|climbing fibers
mossy fibers
superior cerebellar peduncle|brachium conjunctivum
middle cerebellar peduncle|brachium pontis
inferior cerebellar peduncle|restiform body
corticopontine tract|corticopontocerebellar pathway
spinal trigeminal tract
spinal trigeminal nucleus
principal sensory nucleus of trigeminal|chief sensory nucleus of v|main sensory nucleus of trigeminal
mesencephalic nucleus of trigeminal
trigeminal motor nucleus|motor nucleus of v
trigeminothalamic tract|trigeminal lemniscus|ventral trigeminothalamic tract
dorsal trigeminothalamic tract
lateral lemniscus
trapezoid body
auditory pathway|central auditory pathway
olivocochlear bundle|olivocochlear pathway
solitary tract|tractus solitarius
nucleus of the solitary tract|nucleus tractus solitarius|nts|solitary nucleus
nucleus ambiguus
dorsal motor nucleus of the vagus|dorsal motor nucleus of x|dmnx
hypoglossal nucleus
facial motor nucleus|facial nucleus
abducens nucleus
trochlear nucleus
oculomotor nucleus
edinger-westphal nucleus|edinger westphal nucleus
superior salivatory nucleus
inferior salivatory nucleus
vestibular nuclei|vestibular nucleus
cochlear nuclei|cochlear nucleus|dorsal cochlear nucleus|ventral cochlear nucleus
superior olivary nucleus|superior olive
inferior olivary nucleus|inferior olive
red nucleus
substantia nigra
substantia nigra pars compacta
substantia nigra pars reticulata
subthalamic nucleus|stn
globus pallidus|pallidum
globus pallidus internus|gpi
globus pallidus externus|gpe
caudate nucleus|caudate
putamen
striatum|neostriatum
nucleus accumbens|ventral striatum
lentiform nucleus|lenticular nucleus
claustrum
amygdala|amygdaloid nucleus
nucleus basalis of meynert|basal nucleus of meynert
septal nuclei
ventral tegmental area|vta
locus coeruleus
raphe nuclei|raphe nucleus|dorsal raphe nucleus
pedunculopontine nucleus|ppn
periaqueductal gray|pag|central gray
superior colliculus
inferior colliculus
pretectal nucleus|pretectal area|pretectum
lateral geniculate nucleus|lgn
medial geniculate nucleus|mgn
ventral posterolateral nucleus|vpl
ventral posteromedial nucleus|vpm
ventral lateral nucleus|vl nucleus
ventral anterior nucleus|va nucleus
anterior nucleus of thalamus|anterior thalamic nucleus
mediodorsal nucleus|dorsomedial nucleus of thalamus|md nucleus
pulvinar
centromedian nucleus
reticular nucleus of thalamus|thalamic reticular nucleus
intralaminar nuclei
lateral dorsal nucleus
lateral posterior nucleus
suprachiasmatic nucleus|scn
supraoptic nucleus
paraventricular nucleus|pvn
arcuate nucleus|infundibular nucleus
ventromedial nucleus of hypothalamus|ventromedial hypothalamus|vmh
lateral hypothalamic nucleus|lateral hypothalamus|lateral hypothalamic area
anterior hypothalamic nucleus|anterior hypothalamus
posterior hypothalamic nucleus|posterior hypothalamus
preoptic nucleus|medial preoptic area|preoptic area
dorsomedial nucleus of hypothalamus
mammillary bodies|mammillary nucleus
tuberomammillary nucleus
supraopticohypophyseal tract|hypothalamohypophyseal tract
tuberohypophyseal tract
habenula|habenular nuclei
dentate nucleus
emboliform nucleus
globose nucleus
interposed nucleus
fastigial nucleus
anterior horn|ventral horn
posterior horn|dorsal horn
lateral horn|intermediolateral cell column|intermediolateral nucleus
substantia gelatinosa
clarke nucleus|nucleus dorsalis|clarke's column|dorsal nucleus of clarke
onuf nucleus|onuf's nucleus
phrenic nucleus
spinal accessory nucleus
rexed laminae|rexed lamina
anterior white commissure|ventral white commissure
nucleus proprius
renshaw cells|renshaw circuit
stretch reflex arc|monosynaptic reflex arc|myotatic reflex
withdrawal reflex pathway|flexor withdrawal reflex
crossed extensor reflex
gag reflex pathway
jaw jerk reflex|masseter reflex
baroreceptor reflex|baroreflex
micturition reflex pathway|micturition reflex
pontine micturition center|barrington nucleus
pneumotaxic center
apneustic center
dorsal respiratory group
ventral respiratory group
pre-botzinger complex|pre botzinger complex
area postrema|chemoreceptor trigger zone|ctz
parabrachial nucleus
nucleus raphe magnus
rostral ventromedial medulla
rostral ventrolateral medulla
descending pain modulation pathway|descending analgesia pathway
spinoreticular tract
spinomesencephalic tract|spinotectal tract
spino-olivary tract
spinohypothalamic tract
olivospinal tract
interstitial nucleus of cajal
rostral interstitial nucleus of the mlf|rimlf|rostral interstitial nucleus of mlf
paramedian pontine reticular formation|pprf|horizontal gaze center
nucleus prepositus hypoglossi
reticular formation|reticular activating system|ascending reticular activating system|aras
dorsal longitudinal fasciculus|dorsal longitudinal fasciculus of schutz
mammillotegmental tract
diagonal band of broca
olfactory tract
lateral olfactory stria
medial olfactory stria
anterior olfactory nucleus
retinohypothalamic tract
retinotectal pathway
mammillary peduncle
tapetum
alveus
fimbria of hippocampus
nucleus of darkschewitsch
nucleus of perlia
lateral reticular nucleus
accessory cuneate nucleus|lateral cuneate nucleus
nucleus intercalatus
nucleus of roller
subcoeruleus nucleus
kolliker-fuse nucleus|kolliker fuse nucleus
visual pathway
`, "2026-11-07");
P("Name a classic radiology sign","tests","",`
steeple sign
thumbprint sign|thumb sign
bird's beak sign|bird beak sign|birds beak
string sign
westermark sign|westermark's sign
hampton hump|hampton's hump
double bubble sign|double bubble
kerley b lines|kerley lines|kerley b
bat wing sign|batwing pattern|butterfly pattern
air bronchogram|air bronchograms
silhouette sign
deep sulcus sign
apple core lesion|apple core sign|napkin ring sign
coffee bean sign
lead pipe colon|lead pipe sign|stovepipe colon
cobblestone appearance|cobblestoning
egg on a string|egg on a string sign
boot-shaped heart|coeur en sabot|boot shaped heart
snowman sign|figure of 8 heart|snowman heart
figure 3 sign|figure of 3 sign|reverse 3 sign
rib notching
water bottle heart|water bottle sign
hair on end|crew cut appearance|hair-on-end
soap bubble appearance|soap bubble lesion
sunburst pattern|sunburst appearance
codman triangle|codman's triangle
onion skin periosteal reaction|onion skinning|onion skin
punched out lesions|punched-out lytic lesions
salt and pepper skull|pepper pot skull
ground glass opacity|ground glass|ggo
honeycombing|honeycomb lung
tree in bud|tree-in-bud
halo sign
air crescent sign
monod sign
ghon complex|ghon focus
ranke complex
eggshell calcification
target sign|bull's eye sign|doughnut sign
pseudokidney sign
whirlpool sign|whirl sign
football sign
rigler sign|double wall sign|rigler's sign
continuous diaphragm sign
cupola sign
thymic sail sign
spinnaker sail sign|angel wing sign
ring around the artery sign
naclerio v sign|v sign of naclerio
golden s sign|s sign of golden
luftsichel sign
juxtaphrenic peak sign
flat waist sign
cervicothoracic sign
hilum overlay sign
hilum convergence sign
comet tail sign
split pleura sign
fat fluid level|lipohemarthrosis
sail sign|anterior sail sign|posterior fat pad sign|fat pad sign
terry thomas sign|david letterman sign|scapholunate gap
spilled teacup sign
piece of pie sign
mercedes benz sign
popcorn calcification
chicken wire calcification
pencil in cup deformity|pencil-in-cup
bamboo spine
shiny corner sign|romanus lesion
dagger sign
trolley track sign
squaring of vertebrae|squared vertebrae
rugger jersey spine
picture frame vertebra
ivory vertebra
winking owl sign|pedicle sign
scottie dog sign|collar on scottie dog
inverted napoleon hat sign
h-shaped vertebra|lincoln log vertebra|h vertebra
fish vertebrae|codfish vertebrae
sandwich vertebrae
bone within a bone
erlenmeyer flask deformity
rat bite erosions
overhanging edge sign|martel sign
cookie bite sign
mouse ears appearance
gull wing sign|gull wing appearance
mickey mouse sign of paget|mickey mouse sign
cotton wool skull
blade of grass sign|flame sign
moth eaten appearance|moth-eaten
permeative pattern
fallen fragment sign
double line sign
crescent sign of avascular necrosis|crescent sign
segond fracture
deep lateral femoral notch sign|lateral notch sign
double pcl sign
bow tie sign|absent bow tie sign
kissing contusions
light bulb sign
trough line sign
hill-sachs lesion|hill sachs lesion
bankart lesion
fat c2 sign
lollipop sign
dot-dash sign|dot dash sign
empty delta sign|delta sign
dense mca sign|hyperdense mca sign|dense artery sign
insular ribbon sign|loss of insular ribbon
swirl sign
spot sign
crescent shaped hematoma|crescent sign of subdural
biconvex lens shape|lentiform hematoma
mickey mouse sign of psp|morning glory sign
hummingbird sign|penguin sign
hot cross bun sign
eye of the tiger sign
face of the giant panda sign|giant panda sign
dawson fingers|dawson's fingers
ring enhancing lesion|ring enhancement
open ring sign
soap bubble cysts|gelatinous pseudocysts
tram track calcification|tram track sign
cortical ribboning|cortical ribbon sign
pulvinar sign|hockey stick sign
double panda sign
cyst with dot sign|hole with dot sign|starry sky appearance of neurocysticercosis
dural tail sign
salt and pepper appearance of paraganglioma
molar tooth sign
lemon sign
banana sign
keyhole sign
corkscrew sign
claw sign
string of beads sign|string of beads
string of pearls sign
rosary sign
stacked coin sign|pile of coins sign|stack of coins
coiled spring sign|coiled spring appearance
stepladder sign|step ladder pattern
corkscrew esophagus|rosary bead esophagus
shaggy esophagus
feline esophagus|feline oesophagus
hidebound bowel sign
jejunization of ileum|jejunisation
featureless colon
inverted 3 sign|frostberg sign|frostberg reverse 3 sign
ulcer collar|hampton line
carman meniscus sign|meniscus sign
target lesion of stomach|bull's eye lesion|bulls eye lesion
linitis plastica|leather bottle stomach
rigler triad
saw tooth appearance|sawtooth
sentinel loop|sentinel loop sign
colon cut-off sign|colon cutoff sign
wall echo shadow sign|wes sign
double duct sign
sonographic murphy sign
starry sky liver
central dot sign
nutmeg liver
shoulder sign
antral nipple sign
double track sign
mushroom sign
ace of spades sign
bent inner tube sign|omega sign
northern exposure sign
spoke wheel pattern
central scar
light bulb sign on mri
stripe sign
cortical rim sign
faceless kidney
drooping lily sign
cobra head sign|spring onion sign
golf ball on tee sign|ball on tee sign
water lily sign|camalote sign
crazy paving|crazy paving pattern
reversed halo sign|atoll sign
mosaic attenuation
head cheese sign
signet ring sign
finger in glove sign|gloved finger sign
dependent viscera sign
collar sign|hourglass sign
straight edge sign
knuckle sign
palla sign
fleischner sign
polo mint sign|mint sign
tram lines|tram line sign|railway track sign
bulging fissure sign
corona radiata sign|spiculated margin
lambda sign|panda sign of sarcoidosis
pericardial fat pad sign|epicardial fat pad sign|oreo cookie sign
double density sign
straightening of left heart border
sabre sheath trachea|saber sheath trachea
pleural effusion meniscus|meniscus sign of effusion
ellis-damoiseau curve|ellis s line
lung point
seashore sign
barcode sign|stratosphere sign
lung sliding|sliding lung sign
a lines
b lines
quad sign
sinusoid sign
jellyfish sign
plankton sign
spine sign
mirror image artifact
ring down artifact
twinkling artifact
snowstorm appearance|snowstorm pattern
bunch of grapes|bunch of grapes appearance
ring of fire sign
lambda sign of twins|twin peak sign
t sign of twins
doughnut sign of ectopic|tubal ring sign
pseudogestational sac|pseudosac
double decidual sac sign
triple line endometrium
string of pearls ovaries|necklace sign
pearl necklace sign
tip of the iceberg sign
dermoid plug|rokitansky nodule
onion ring appearance|onion ring sign
rat tail sign|rat tail appearance
pruned tree appearance|pruning of pulmonary arteries
cephalization|cephalisation|upper lobe diversion
peribronchial cuffing
chain of lakes sign
mount fuji sign
chilaiditi sign
double contour sign
triangular cord sign
dripping candle wax|candle wax sign
cupping and fraying
wimberger sign|wimberger ring
frankel line|white line of frankel
pelkan spur
trummerfeld zone
cloverleaf skull
copper beaten skull|beaten copper skull
doge cap sign
snowcap sign
butterfly vertebra
corduroy sign|polka dot sign|jail bar vertebra
vacuum phenomenon|vacuum disc sign
sentinel clot sign
accordion sign
bowler hat sign
champagne glass pelvis
tombstone iliac wings
trident hand
gooseneck sign|goose neck deformity
scimitar sign
fallen lung sign
feeding vessel sign
pleural tail sign
triple bubble sign
single bubble sign
melting sign
draped aorta sign
hyperattenuating crescent sign
calcium sign
cobweb sign
`, "2026-11-07");
P("Name a classic histopathology finding","tests","",`
reed-sternberg cells|reed sternberg cells|owl eye cells|rs cells
psammoma bodies|psammoma body
call-exner bodies|call exner bodies
schiller-duval bodies|schiller duval bodies
councilman bodies|councilman body|acidophilic bodies
mallory bodies|mallory-denk bodies|mallory hyaline
lewy bodies|lewy body
negri bodies|negri body
caseating granulomas|caseating granuloma|caseous necrosis
noncaseating granulomas|non-caseating granulomas|noncaseating granuloma
aschoff bodies|aschoff body
anitschkow cells|caterpillar cells|anitschkow myocytes
koilocytes|koilocytosis|koilocyte
hyaline arteriolosclerosis
hyperplastic arteriolosclerosis|onion skinning of arterioles
fibrinoid necrosis
coagulative necrosis
liquefactive necrosis
fat necrosis|saponification
gangrenous necrosis
pick bodies|pick body
hirano bodies
neurofibrillary tangles
senile plaques|amyloid plaques|neuritic plaques
granulovacuolar degeneration
russell bodies|russell body
dutcher bodies
auer rods|auer rod
howell-jolly bodies|howell jolly bodies
heinz bodies|bite cells
basophilic stippling
pappenheimer bodies
ringed sideroblasts|ring sideroblasts
smudge cells
hairy cells
sezary cells|cerebriform nuclei
starry sky pattern|starry sky appearance
orphan annie eye nuclei|orphan annie nuclei|ground glass nuclei
nuclear grooves|coffee bean nuclei
signet ring cells|signet ring cell
keratin pearls|squamous pearls
intercellular bridges
rosettes|homer wright rosettes|homer-wright rosettes
flexner-wintersteiner rosettes|flexner wintersteiner rosettes
perivascular pseudorosettes
pseudopalisading necrosis|pseudopalisading
palisading granulomas|palisading histiocytes
verocay bodies
antoni a and antoni b areas|antoni a|antoni b
fried egg cells|fried egg appearance
chicken wire vasculature|chicken wire capillaries
whorled pattern|whorls
rosenthal fibers
eosinophilic granular bodies
birbeck granules|tennis racket granules
langhans giant cells|langhans cells
foreign body giant cells
touton giant cells
asteroid bodies
schaumann bodies
crescents|crescentic glomerulonephritis
wire loop lesions|wire loops
kimmelstiel-wilson nodules|kimmelstiel wilson nodules|nodular glomerulosclerosis
spike and dome|spike and dome appearance|spikes on gbm
tram track appearance|tram tracking|gbm splitting
basket weave appearance|basket weave gbm
lumpy bumpy deposits|lumpy-bumpy
podocyte effacement|foot process effacement
apple green birefringence|congo red apple green birefringence
barrett esophagus goblet cells|goblet cells in esophagus|intestinal metaplasia
crypt abscesses|crypt abscess
transmural inflammation
pseudopolyps
villous atrophy|blunted villi
foamy macrophages in lamina propria|pas positive macrophages
cowdry type a bodies|cowdry a inclusions
owl's eye inclusions|owl eye inclusions|cmv inclusions
multinucleated giant cells|tzanck cells
molluscum bodies|henderson-patterson bodies
guarnieri bodies
donovan bodies
civatte bodies|colloid bodies
kamino bodies
max joseph spaces
sawtooth rete ridges|saw tooth rete ridges
munro microabscesses|munro microabscess
pautrier microabscesses|pautrier microabscess
kogoj pustules|spongiform pustules of kogoj
parakeratosis
hyperkeratosis
acanthosis
spongiosis
acantholysis
row of tombstones|tombstone appearance
dyskeratosis
corps ronds
corps grains
horn cysts|pseudohorn cysts
cigar shaped nuclei
herringbone pattern
storiform pattern
lipoblasts
physaliphorous cells
popcorn cells|lymphocyte predominant cells|lp cells
lacunar cells
hallmark cells
clue cells
nuclear atypia
mitotic figures|atypical mitoses
hobnail cells
clear cells|clear cell change
oncocytes|hurthle cells|oxyphil cells
warthin tumor lymphoid stroma|warthin lymphoid stroma
lymphoepithelial lesions
hassall corpuscles|hassall's corpuscles
lines of zahn
heart failure cells|hemosiderin laden macrophages|hemosiderin-laden macrophages
ferruginous bodies|asbestos bodies
curschmann spirals
charcot-leyden crystals|charcot leyden crystals
hyaline membranes
creola bodies
clock face chromatin|cartwheel chromatin
target cells
sickle cells|drepanocytes
schistocytes|helmet cells
spherocytes
teardrop cells|dacrocytes
burr cells|echinocytes
spur cells|acanthocytes
rouleaux formation|rouleaux
hypersegmented neutrophils
dohle bodies
toxic granulation
pelger-huet anomaly|pelger huet cells
blasts
faggot cells
flame cells
mott cells
lymphoglandular bodies
tingible body macrophages
gaucher cells|crumpled tissue paper cytoplasm
niemann-pick foam cells|foam cells
zebra bodies
sea blue histiocytes
ochronosis
gamna-gandy bodies
peliosis
nutmeg liver|centrilobular necrosis
piecemeal necrosis|interface hepatitis
bridging necrosis
ground glass hepatocytes
pas positive globules|pas-positive diastase-resistant globules
onion skin fibrosis|periductal onion skin fibrosis
microvesicular steatosis
macrovesicular steatosis
ballooning degeneration|hepatocyte ballooning
copper deposition|rhodanine positive copper
iron deposition|prussian blue positive
bile plugs|cholestasis
ductular proliferation
florid duct lesion
rokitansky-aschoff sinuses|rokitansky aschoff sinuses
cholesterolosis|strawberry gallbladder
reinke crystals
trophoblast proliferation
hydropic villi
arias-stella reaction|arias stella reaction
decidualization
hobnail endometrium
endometrial glands in myometrium|adenomyosis
apocrine metaplasia
indian file pattern|single file cells
comedonecrosis|comedo necrosis
paneth cell metaplasia
gastric metaplasia
helicobacter organisms
giardia trophozoites
cryptosporidium oocysts
whipple bacilli
fungal hyphae|septate hyphae
broad based budding yeast
spherules
narrow based budding
mucicarmine positive capsule|india ink capsule
pneumocystis cysts|foamy alveolar casts
psammomatous calcification
dystrophic calcification
metastatic calcification
amyloid deposits|amyloid
hyaline change|hyalinization
fibrinoid change
myxoid change
granulation tissue
giant cell arteritis granulomatous inflammation|giant cells in vessel wall
transmural necrotizing arteritis|necrotizing vasculitis
leukocytoclastic vasculitis|leukocytoclasia|nuclear dust
periarterial onion skin fibrosis of spleen
caterpillar bodies
lipofuscin|wear and tear pigment
hemosiderin
anthracotic pigment|anthracosis
melanin pigment
dense deposits|dense deposit disease ribbons
mesangial deposits
subepithelial humps|subepithelial deposits
subendothelial deposits
collapsing glomerulopathy
segmental sclerosis
tubular casts|myeloma casts|fractured casts
thyroidization of tubules|thyroidization
oxalate crystals|calcium oxalate crystals
urate crystals|tophus|tophi
needle shaped negatively birefringent crystals|monosodium urate crystals
rhomboid positively birefringent crystals|cpdd crystals|calcium pyrophosphate crystals
cholesterol clefts|cholesterol crystals
pannus
rheumatoid nodule|rheumatoid nodules
ragged red fibers
rimmed vacuoles
perifascicular atrophy
endomysial inflammation
fiber type grouping
target fibers
nemaline rods
central cores
neurogenic atrophy|angulated fibers
onion bulbs|onion bulb formation
wallerian degeneration
axonal spheroids
spongiform change|spongiform encephalopathy|spongiosis of brain
red neurons|red dead neurons|eosinophilic neurons
gitter cells
gemistocytes|gemistocytic astrocytes
microglial nodules
perivascular cuffing
alzheimer type ii astrocytes
creutzfeldt cells
lafora bodies
bunina bodies
marinesco bodies
glial cytoplasmic inclusions|papp-lantos bodies
tufted astrocytes
astrocytic plaques
globose tangles
corpora amylacea
nuclear pseudoinclusions|intranuclear pseudoinclusions
shadow cells|ghost cells
basaloid cells with peripheral palisading|peripheral palisading
retraction artifact|retraction clefting
stromal desmoplasia|desmoplasia
perineural invasion
lymphovascular invasion
mucin pools|mucinous lakes
`, "2026-11-07");
P("Name an orthopedic or musculoskeletal exam test","tests","",`
lachman test|lachman|lachman's test
anterior drawer test|anterior drawer
posterior drawer test|posterior drawer
mcmurray test|mcmurray|mcmurray's test
phalen test|phalen|phalen's test|phalen maneuver
tinel sign|tinel test|tinel|tinel's sign
finkelstein test|finkelstein|finkelstein's test
spurling test|spurling|spurling maneuver|spurling's test
straight leg raise|slr|lasegue test|lasegue sign
crossed straight leg raise|crossed slr|well leg raise
faber test|patrick test|patrick's test|figure 4 test
fadir test|fadir|faddir test|faddir
thompson test|simmonds test|thompson squeeze test|calf squeeze test
neer test|neer impingement sign|neer sign
hawkins test|hawkins-kennedy test|hawkins kennedy test
empty can test|jobe test|supraspinatus test
full can test
apprehension test|anterior apprehension test
relocation test|jobe relocation test
drop arm test|drop arm sign
lift-off test|gerber lift off test|lift off test
belly press test|napoleon test
bear hug test
external rotation lag sign
hornblower sign
speed test|speed's test
yergason test|yergason's test
o'brien test|active compression test|obrien test
cross body adduction test|crossover test|scarf test
sulcus sign
load and shift test
crank test
valgus stress test
varus stress test
pivot shift test|pivot shift
posterior sag sign|godfrey test
quadriceps active test
apley compression test|apley grind test|apley test
apley scratch test
thessaly test
ege test
patellar apprehension test|fairbank apprehension test
patellar grind test|clarke sign|clarke's test
patellar tilt test
patellar glide test
ballottement test|patellar tap test|patellar tap
bulge sign|wipe test|milking test
ober test|ober's test
thomas test|thomas's test
trendelenburg sign|trendelenburg test
log roll test
galeazzi sign|allis sign
ortolani maneuver|ortolani test|ortolani sign
barlow maneuver|barlow test
klisic test
ely test|duncan-ely test
90-90 hamstring test|popliteal angle
anterior talar drawer|ankle anterior drawer test
talar tilt test|inversion stress test
squeeze test of the leg|syndesmosis squeeze test|hopkins test
external rotation stress test|kleiger test
cotton test
windlass test|jack test
mulder sign|mulder click|mulder's sign
homan sign|homans sign
silfverskiold test
ottawa ankle rules
ottawa knee rules
navicular drop test
single leg heel raise test|single heel rise test
too many toes sign
coleman block test
hop test|single leg hop test
fulcrum test
durkan test|carpal compression test
reverse phalen test|prayer test
two-point discrimination|two point discrimination
froment sign|froment's sign
wartenberg sign
watson test|scaphoid shift test
lunotriquetral ballottement test|reagan test
piano key sign
tfcc compression test|ulnar grind test
press test
fovea sign
grind test of thumb cmc|cmc grind test
bunnell-littler test|bunnell littler test|intrinsic tightness test
elson test
allen test|modified allen test
cozen test|cozen's test|resisted wrist extension test
mill test|mills test
maudsley test
golfer's elbow test|reverse cozen test|medial epicondylitis test
moving valgus stress test
milking maneuver
hook test
elbow flexion test
chair test
adson test|adson's test|adson maneuver
roos test|elevated arm stress test|east
wright test|hyperabduction test
costoclavicular test|military brace test
halstead maneuver
lhermitte sign|lhermitte's sign
hoffmann sign|hoffman sign|hoffmann's sign
babinski sign|babinski|plantar reflex|extensor plantar response
clonus test|ankle clonus
distraction test|cervical distraction test
compression test|foraminal compression test
shoulder abduction relief sign|bakody sign
upper limb tension test|ulnt|elvey test
slump test
femoral nerve stretch test|reverse straight leg raise|prone knee bend test
bowstring test|bowstring sign
waddell signs|waddell's signs
hoover test|hoover sign|hoover's sign
stork test|gillet test|one leg standing test
standing flexion test
seated flexion test|sitting flexion test
spring test|lumbosacral spring test
sphinx test|backward bending test
asis compression test
pelvic side shift test
hip drop test
gaenslen test|gaenslen's test
sacral thrust test
thigh thrust test|posterior shear test
compression test of the si joint|si compression test
distraction test of the si joint|si distraction test|gapping test
yeoman test
piriformis test|freiberg test|pace test
beatty test
schober test|modified schober test
occiput to wall distance|wall test
chest expansion test
milgram test
valsalva test
hautant test
vertebral artery test|vertebrobasilar insufficiency test|dekleyn test
sharp-purser test|sharp purser test
alar ligament test
transverse ligament stress test
wilson test
renne test
noble test|noble compression test
craig test|ryder test
anvil test
scour test|quadrant test
stinchfield test|resisted straight leg raise
dial test|tibial external rotation test
reverse pivot shift
posterolateral drawer test
external rotation recurvatum test
jerk test
kim test
whipple test
gilcreest sign
ludington test
biceps squeeze test
supination resistance test
uppercut test
painful arc|painful arc sign
yocum test
dynamic labral shear test
anterior slide test|kibler test
lateral scapular slide test
wall push-up test|wall pushup test|scapular winging test
scapular assistance test
scapular retraction test
sternal compression test|rib compression test
duchenne sign
gower sign|gowers sign|gower's sign
romberg test|romberg sign
tandem gait
heel walk|heel walking
toe walk|toe walking
adams forward bend test|adams test|forward bend test
true leg length measurement|leg length discrepancy test
thumb to forearm test
beighton score
metacarpal compression test
finger extension test
murphy sign of lunate|murphy's punch sign
scaphoid tubercle tenderness
snuffbox tenderness
axial load test of thumb|scaphoid compression test
jersey finger test|fdp test
fds test|superficialis test
sweater finger sign
cascade sign
tenodesis test
wrinkle test
card test
pinch grip test|ok sign
pen test
egawa test
cross finger test
jeanne sign
masse sign
pitres-testut sign
pollock test
kemp test|kemp's test|quadrant test of lumbar spine
clunk test
`, "2026-11-07");

/* ---- NEW STANDARD DAILY PROMPTS: MEDICINE part 3 (batch 2026-11-05, board-first) ---- */
P("Name a receptor in the human body","science","",`
alpha-1 adrenergic receptor|alpha-1|alpha 1|alpha1|alpha-1 receptor|alpha 1 receptor
alpha-2 adrenergic receptor|alpha-2|alpha 2|alpha2|alpha-2 receptor|alpha 2 receptor
beta-1 adrenergic receptor|beta-1|beta 1|beta1|beta-1 receptor|beta 1 receptor
beta-2 adrenergic receptor|beta-2|beta 2|beta2|beta-2 receptor|beta 2 receptor
beta-3 adrenergic receptor|beta-3|beta 3|beta3|beta-3 receptor
m1 muscarinic receptor|m1|m1 receptor
m2 muscarinic receptor|m2|m2 receptor
m3 muscarinic receptor|m3|m3 receptor
m4 muscarinic receptor|m4|m4 receptor
m5 muscarinic receptor|m5|m5 receptor
muscarinic receptor|muscarinic acetylcholine receptor|machr|muscarinic
nicotinic acetylcholine receptor|nicotinic receptor|nachr|nicotinic
nicotinic nm receptor|nm receptor|muscle nicotinic receptor|neuromuscular nicotinic receptor
nicotinic nn receptor|nn receptor|neuronal nicotinic receptor|ganglionic nicotinic receptor
d1 dopamine receptor|d1|d1 receptor
d2 dopamine receptor|d2|d2 receptor
d3 dopamine receptor|d3|d3 receptor
d4 dopamine receptor|d4|d4 receptor
d5 dopamine receptor|d5|d5 receptor
dopamine receptor
h1 histamine receptor|h1|h1 receptor
h2 histamine receptor|h2|h2 receptor
h3 histamine receptor|h3|h3 receptor
h4 histamine receptor|h4|h4 receptor
v1 vasopressin receptor|v1|v1 receptor|v1a receptor
v2 vasopressin receptor|v2|v2 receptor
v1b vasopressin receptor|v3 receptor|v1b receptor
5-ht1a receptor|5-ht1a|5ht1a|serotonin 1a receptor
5-ht1b/1d receptor|5-ht1b|5-ht1d|5ht1b|5ht1d|5-ht1b receptor|5-ht1d receptor|triptan receptor
5-ht2a receptor|5-ht2a|5ht2a|serotonin 2a receptor
5-ht2b receptor|5-ht2b|5ht2b
5-ht2c receptor|5-ht2c|5ht2c
5-ht3 receptor|5-ht3|5ht3|serotonin 3 receptor
5-ht4 receptor|5-ht4|5ht4
5-ht1f receptor|5-ht1f|5ht1f
5-ht6 receptor|5-ht6
5-ht7 receptor|5-ht7
serotonin receptor|5-ht receptor
gaba-a receptor|gaba a|gabaa|gaba-a
gaba-b receptor|gaba b|gabab|gaba-b
nmda receptor|nmda|n-methyl-d-aspartate receptor
ampa receptor|ampa
kainate receptor|kainate
metabotropic glutamate receptor|mglur
glutamate receptor
glycine receptor
mu opioid receptor|mu|mu receptor|mor|mu opioid
kappa opioid receptor|kappa|kappa receptor|kor
delta opioid receptor|delta receptor|dor|delta opioid
nociceptin receptor|nop receptor|orl1
opioid receptor
cb1 cannabinoid receptor|cb1|cb1 receptor
cb2 cannabinoid receptor|cb2|cb2 receptor
insulin receptor
igf-1 receptor|igf-1r|igf1r|insulin-like growth factor 1 receptor
glucagon receptor
glp-1 receptor|glp-1r|glp1 receptor|glp-1
gip receptor|gipr
tsh receptor|tshr|thyrotropin receptor
lh receptor|lhr|lh/hcg receptor|lhcgr
fsh receptor|fshr
acth receptor|mc2r|mc2 receptor|melanocortin 2 receptor
mc4 receptor|mc4r|melanocortin 4 receptor
mc1 receptor|mc1r|melanocortin 1 receptor
gnrh receptor|gnrhr
trh receptor
crh receptor|crhr
ghrh receptor
growth hormone receptor|ghr|gh receptor
prolactin receptor|prlr
oxytocin receptor
pth receptor|pth1r|pth/pthrp receptor|parathyroid hormone receptor
calcium-sensing receptor|casr|calcium sensing receptor
calcitonin receptor
vitamin d receptor|vdr
thyroid hormone receptor|tr|thyroid receptor
glucocorticoid receptor|gr|cortisol receptor
mineralocorticoid receptor|mr|aldosterone receptor
estrogen receptor|er|oestrogen receptor|er alpha|er beta
progesterone receptor|pr
androgen receptor|ar|testosterone receptor
retinoic acid receptor|rar|rar alpha
retinoid x receptor|rxr
ppar-gamma|ppar gamma|pparg|ppar-γ
ppar-alpha|ppar alpha|ppara
ppar-delta|ppar delta|ppar beta/delta
liver x receptor|lxr
farnesoid x receptor|fxr|bile acid receptor
pregnane x receptor|pxr
constitutive androstane receptor|car
at1 receptor|at1|angiotensin ii type 1 receptor|at1r|angiotensin receptor
at2 receptor|at2|angiotensin ii type 2 receptor
endothelin receptor|eta receptor|etb receptor|endothelin a receptor
natriuretic peptide receptor|npr-a|anp receptor|bnp receptor|guanylyl cyclase a
adenosine a1 receptor|a1 receptor|adenosine a1
adenosine a2a receptor|a2a receptor|adenosine a2a
adenosine a2b receptor|a2b receptor
adenosine a3 receptor|a3 receptor
p2y12 receptor|p2y12|adp receptor
p2x receptor|p2x7|p2x3
gpiib/iiia|glycoprotein iib/iiia|gp2b3a|gpiib-iiia|integrin alphaiib beta3
gpib|glycoprotein ib|gpib-ix-v|von willebrand factor receptor
par-1|protease-activated receptor 1|thrombin receptor|par1
thromboxane receptor|tp receptor|txa2 receptor
prostaglandin e2 receptor|ep receptor|ep2|ep4
prostacyclin receptor|ip receptor
leukotriene receptor|cyslt1|cysteinyl leukotriene receptor
ldl receptor|ldlr|low-density lipoprotein receptor
scavenger receptor|sr-b1|cd36|scavenger receptor class b1
transferrin receptor|tfr1|cd71
asialoglycoprotein receptor|asgpr
mannose receptor|cd206
tlr4|toll-like receptor 4
tlr2|toll-like receptor 2
tlr3|toll-like receptor 3
tlr5|toll-like receptor 5
tlr7|toll-like receptor 7
tlr9|toll-like receptor 9
toll-like receptor|tlr
nod2|nod-like receptor|nlr|card15
nlrp3|nalp3|inflammasome receptor
rig-i|rig-i-like receptor|ddx58
cd14|lps receptor
cd4|cd4 receptor
cd8
t-cell receptor|tcr|t cell receptor
b-cell receptor|bcr|b cell receptor
ccr5|cc chemokine receptor 5
cxcr4
chemokine receptor
fc receptor|fc gamma receptor|fcgr|fc-gamma receptor
fc epsilon receptor|fceri|fcεri|ige receptor
neonatal fc receptor|fcrn|brambell receptor
cd16|fcgriii
cd32|fcgrii
cd64|fcgri
complement receptor 1|cr1|cd35
complement receptor 2|cr2|cd21|ebv receptor
complement receptor 3|cr3|cd11b/cd18|mac-1
c5a receptor|c5ar|cd88
c3a receptor
il-2 receptor|cd25|il2r|interleukin-2 receptor
il-6 receptor|il6r|tocilizumab target
il-1 receptor|il1r
il-4 receptor|il4r|il-4 receptor alpha
il-5 receptor|il5r
il-17 receptor|il17r
il-23 receptor
tnf receptor|tnfr|tnfr1|tnfr2
fas|cd95|fas receptor|apo-1
trail receptor|death receptor 5|dr5
interferon receptor|ifnar|ifn-gamma receptor
epo receptor|epor|erythropoietin receptor
tpo receptor|mpl|thrombopoietin receptor|c-mpl
g-csf receptor|csf3r
gm-csf receptor|csf2r
m-csf receptor|csf1r
egfr|epidermal growth factor receptor|her1|erbb1
her2|her2/neu|erbb2|neu
her3|erbb3
vegf receptor|vegfr|vegfr2|kdr
pdgf receptor|pdgfr|pdgfr alpha
fgf receptor|fgfr|fgfr3
c-kit|kit|cd117|stem cell factor receptor
ret|ret receptor
alk|anaplastic lymphoma kinase
ros1
met|c-met|hepatocyte growth factor receptor
flt3
trk receptor|trka|tropomyosin receptor kinase|ntrk
tgf-beta receptor|tgfbr
bmp receptor|bmpr2
notch receptor|notch
patched|ptch1|hedgehog receptor
frizzled|wnt receptor
lrp5|lrp6
rank|receptor activator of nf-kappab
pd-1|programmed death 1|cd279
ctla-4|cd152
cd28
lfa-1|cd11a/cd18
vla-4|alpha4 beta1 integrin|cd49d
alpha4 beta7 integrin|a4b7
integrin
ace2|angiotensin-converting enzyme 2
cd46|measles receptor
icam-1|cd54|rhinovirus receptor
car receptor|coxsackievirus and adenovirus receptor
p antigen|globoside|parvovirus b19 receptor
duffy antigen|darc|duffy receptor
glycophorin a
dectin-1
siglec
killer immunoglobulin-like receptor|kir
nkg2d
olfactory receptor
taste receptor|t1r|t2r|bitter taste receptor|sweet taste receptor
rhodopsin
cone opsin|photopsin
melanopsin
trpv1|capsaicin receptor|vanilloid receptor
trpm8|cold receptor|menthol receptor
trpa1
piezo1|piezo2|piezo
pacinian corpuscle|lamellar corpuscle
meissner corpuscle|tactile corpuscle
merkel disc|merkel cell|merkel receptor
ruffini ending|ruffini corpuscle
free nerve ending|nociceptor
muscle spindle
golgi tendon organ
baroreceptor|carotid sinus baroreceptor|aortic arch baroreceptor
peripheral chemoreceptor|carotid body|aortic body
central chemoreceptor
j receptor|juxtacapillary receptor
pulmonary stretch receptor|slowly adapting stretch receptor|hering-breuer receptor
irritant receptor|rapidly adapting receptor
osmoreceptor
hair cell|cochlear hair cell|vestibular hair cell
thermoreceptor
proprioceptor
mechanoreceptor
photoreceptor|rod|cone
volume receptor|atrial stretch receptor|low-pressure baroreceptor
ryanodine receptor|ryr|ryr1|ryr2
ip3 receptor|inositol trisphosphate receptor|ip3r
dihydropyridine receptor|dhpr|l-type calcium channel receptor
sigma receptor|sigma-1 receptor
trace amine-associated receptor|taar1
orexin receptor|hypocretin receptor|ox1r|ox2r
melatonin receptor|mt1|mt2
ghrelin receptor|ghs-r
leptin receptor|ob-r|lepr
adiponectin receptor|adipor1
cck receptor|cholecystokinin receptor|cck1|cck2
gastrin receptor|cckb receptor
secretin receptor
somatostatin receptor|sstr|sstr2
motilin receptor
nk1 receptor|neurokinin-1 receptor|substance p receptor|tacr1
cgrp receptor|calcitonin gene-related peptide receptor
amylin receptor
bradykinin receptor|b2 receptor|b1 receptor
kisspeptin receptor|gpr54|kiss1r
neuropeptide y receptor|npy receptor|y1 receptor
apelin receptor
urotensin receptor
relaxin receptor|rxfp1
s1p receptor|sphingosine-1-phosphate receptor|s1p1
lpa receptor|lysophosphatidic acid receptor
free fatty acid receptor|gpr40|ffar1
tgr5|gpbar1
succinate receptor|gpr91
hcar2|niacin receptor|gpr109a
insulin-like growth factor 2 receptor|igf-2r|mannose-6-phosphate receptor|m6p receptor
megalin|lrp2
cubilin|intrinsic factor receptor
low-density lipoprotein receptor-related protein 1|lrp1
vldl receptor|vldlr
ror1|receptor tyrosine kinase-like orphan receptor 1
eph receptor|ephrin receptor
semaphorin receptor|plexin|neuropilin
robo receptor|roundabout
dcc|netrin receptor
p75 neurotrophin receptor|p75ntr
gfr alpha|gdnf receptor
il-7 receptor|il7r|cd127
il-12 receptor
il-13 receptor
il-31 receptor
common gamma chain|il2rg|gamma c
cd40
cd19
cd3
nkp46|natural cytotoxicity receptor
trem2
mertk
axl
tyro3
`, "2026-11-07");
P("Name an ion channel, pump or transporter","science","",`
na/k atpase|sodium-potassium pump|na+/k+ atpase|sodium potassium atpase|na k atpase|sodium pump
nkcc2|na-k-2cl cotransporter|nkcc|slc12a1|na/k/2cl cotransporter|furosemide target
ncc|na-cl cotransporter|thiazide-sensitive cotransporter|slc12a3|nacl cotransporter
enac|epithelial sodium channel|amiloride-sensitive sodium channel
cftr|cystic fibrosis transmembrane conductance regulator|cftr chloride channel
sglt2|sodium-glucose cotransporter 2|slc5a2
sglt1|sodium-glucose cotransporter 1|slc5a1
glut4|glucose transporter 4|slc2a4
glut1|glucose transporter 1|slc2a1
glut2|glucose transporter 2|slc2a2
glut3|glucose transporter 3
glut5|fructose transporter|slc2a5
h/k atpase|proton pump|h+/k+ atpase|gastric proton pump|hydrogen potassium atpase
romk|renal outer medullary potassium channel|kir1.1|kcnj1
l-type calcium channel|l-type ca channel|cav1.2|dihydropyridine receptor channel|l type calcium channel
t-type calcium channel|cav3|t type calcium channel
n-type calcium channel|cav2.2|n type calcium channel
p/q-type calcium channel|cav2.1|p/q type calcium channel
hcn channel|funny channel|if channel|hyperpolarization-activated cyclic nucleotide-gated channel|hcn4|funny current
ryanodine receptor channel|ryr1 channel|ryr2 channel|ryanodine receptor calcium release channel
serca|sarcoplasmic reticulum calcium atpase|serca2a|sarco/endoplasmic reticulum ca atpase
pmca|plasma membrane calcium atpase
ncx|sodium-calcium exchanger|na/ca exchanger|na+/ca2+ exchanger
aquaporin-2|aqp2|aquaporin 2
aquaporin-1|aqp1
aquaporin-3|aqp3
aquaporin-4|aqp4
aquaporin
p-glycoprotein|p-gp|mdr1|abcb1|multidrug resistance protein 1
pendrin|slc26a4
nis|sodium-iodide symporter|sodium iodide symporter|slc5a5
voltage-gated sodium channel|fast sodium channel|nav channel|sodium channel
nav1.5|scn5a|cardiac sodium channel
nav1.7|scn9a
nav1.1|scn1a
voltage-gated potassium channel|kv channel|delayed rectifier potassium channel|potassium channel
herg|kv11.1|kcnh2|ikr channel
kcnq1|kvlqt1|iks channel|kv7.1
kcnq2|kcnq3|kv7.2|m-channel
katp channel|atp-sensitive potassium channel|kir6.2|sur1|sulfonylurea receptor|kcnj11|abcc8
gaba-a chloride channel|gaba-a receptor channel
nicotinic receptor channel|nicotinic acetylcholine receptor channel
nmda receptor channel
glycine receptor channel
5-ht3 receptor channel
calcium-activated potassium channel|bk channel|sk channel|kca channel|maxi-k channel
inward rectifier potassium channel|kir channel|kir2.1|ik1 channel|kcnj2
girk|g protein-coupled inwardly rectifying potassium channel|kir3|ikach|kcnj5|girk4
two-pore potassium channel|k2p channel|trek-1|task-1
clc chloride channel|clc-1|clcnkb|clc-kb|clc-5
calcium-activated chloride channel|tmem16a|anoctamin-1
na/h exchanger|nhe3|sodium-hydrogen exchanger|nhe1|na+/h+ exchanger|sodium hydrogen antiporter
h+ atpase|v-type atpase|vacuolar h+ atpase|v-atpase|proton atpase
cl/hco3 exchanger|band 3|ae1|anion exchanger 1|chloride-bicarbonate exchanger|slc4a1
nbce1|sodium bicarbonate cotransporter|slc4a4
kcc2|k-cl cotransporter|kcc
nkcc1|slc12a2
copper transporting atpase atp7b|atp7b|wilson atpase
atp7a|menkes atpase
dmt1|divalent metal transporter 1|slc11a2
ferroportin|slc40a1
zip4|zinc transporter|slc39a4
napi-iia|sodium-phosphate cotransporter|slc34a1
urat1|slc22a12|uric acid transporter
glut9|slc2a9
oat1|organic anion transporter|slc22a6
oct2|organic cation transporter|slc22a2
mate1|multidrug and toxin extrusion protein
oatp1b1|slco1b1|organic anion transporting polypeptide
mrp2|abcc2|multidrug resistance-associated protein 2
bsep|bile salt export pump|abcb11
ntcp|sodium taurocholate cotransporting polypeptide|slc10a1
asbt|apical sodium bile acid transporter|ibat|slc10a2
abca1|atp-binding cassette a1
abcg5/g8|abcg5|abcg8|sterolin
npc1l1|niemann-pick c1-like 1|ezetimibe target
mdr3|abcb4
abcd1|ald protein
sert|serotonin transporter|5-htt|slc6a4
net|norepinephrine transporter|slc6a2
dat|dopamine transporter|slc6a3
vmat2|vesicular monoamine transporter 2|slc18a2
vmat1
vacht|vesicular acetylcholine transporter
choline transporter|cht1|high-affinity choline transporter
gat-1|gaba transporter|slc6a1
eaat2|glt-1|glutamate transporter|slc1a2
vglut|vesicular glutamate transporter
glyt1|glycine transporter
mct1|monocarboxylate transporter|slc16a1
mct8|thyroid hormone transporter|slc16a2
lat1|large neutral amino acid transporter|slc7a5
b0at1|slc6a19|neutral amino acid transporter|hartnup transporter
rbat|slc3a1|cystine transporter|slc7a9
y+lat1|slc7a7
pept1|peptide transporter 1|slc15a1
pept2
cnt|concentrative nucleoside transporter
ent1|equilibrative nucleoside transporter|slc29a1
folate transporter|reduced folate carrier|rfc|slc19a1
pcft|proton-coupled folate transporter
thiamine transporter|thtr1|slc19a2
svct2|vitamin c transporter|svct1
smvt|sodium multivitamin transporter
mitochondrial calcium uniporter|mcu
adenine nucleotide translocase|ant|adp/atp translocase
ucp1|thermogenin|uncoupling protein 1
atp synthase|complex v|f0f1 atpase
mitochondrial pyruvate carrier|mpc
carnitine-acylcarnitine translocase|cact
octn2|carnitine transporter|slc22a5
ip3 receptor channel|ip3 receptor calcium channel
orai1|crac channel|store-operated calcium channel|stim1
trpv1 channel|capsaicin channel
trpv4
trpv5|trpv6|epithelial calcium channel
trpm6|magnesium channel|trpm7
trpc6|trpc
trpa1 channel
piezo1 channel|piezo2 channel|piezo channel
asic|acid-sensing ion channel
p2x7 channel|p2x channel
connexin|gap junction|cx43|connexin 26|gjb2
pannexin|panx1
claudin-16|paracellin-1|claudin 16
claudin-19
porin|vdac|voltage-dependent anion channel
mitochondrial permeability transition pore|mptp
hv1|voltage-gated proton channel
cng channel|cyclic nucleotide-gated channel
bestrophin|best1
polycystin-2|pkd2|trpp2
mucolipin-1|trpml1
atp2a1|serca1
atp2c1|spca1|hailey-hailey atpase
atp1a3
kir4.1|kcnj10
kcne1|mink
scn4a|nav1.4
cacna1s|cav1.1
clcn1
hcn1
trpm4
slc26a3|dra|down-regulated in adenoma
slc26a6|pat1
slc4a11
nbc3|slc4a7
ae2|slc4a2
kcc4
nhe2
sglt4
glut10|slc2a10
glut12
ctr1|copper transporter 1|slc31a1
znt8|slc30a8
cnnm2
abcg2|bcrp|breast cancer resistance protein
mrp1|abcc1
mrp4|abcc4
abca4|abcr|rim protein
abcc6|mrp6
abcb7
abcd3|pmp70
tap|transporter associated with antigen processing|tap1|tap2
sec61|translocon
tom complex|tom20|tom40
tim complex|tim23
nuclear pore complex|nuclear pore
`, "2026-11-07");
P("Name a general pathology term","science","",`
hypertrophy
hyperplasia
atrophy
metaplasia
dysplasia
anaplasia
apoptosis|programmed cell death
necrosis
coagulative necrosis
liquefactive necrosis
caseous necrosis|caseation
fat necrosis|enzymatic fat necrosis
fibrinoid necrosis
gangrenous necrosis|gangrene
dry gangrene
wet gangrene
gas gangrene
granuloma|granulomatous inflammation
caseating granuloma
noncaseating granuloma
acute inflammation
chronic inflammation
inflammation
edema|oedema
exudate
transudate
pus|purulent exudate|suppurative inflammation
abscess
ulcer|ulceration
fibrinous inflammation|fibrinous exudate
serous inflammation
chemotaxis
margination
rolling
diapedesis|transmigration|extravasation
phagocytosis
opsonization|opsonisation
respiratory burst|oxidative burst
healing
regeneration
repair
granulation tissue
fibrosis
scar|scarring|cicatrix
keloid
hypertrophic scar
wound contraction
primary intention|healing by first intention
secondary intention|healing by second intention
angiogenesis|neovascularization
neoplasia|neoplasm|tumor|tumour
benign
malignant|malignancy
carcinoma
sarcoma
carcinoma in situ|in situ carcinoma
invasion
metastasis|metastases
grade|tumor grade|grading
stage|tumor stage|staging|tnm staging
desmoplasia|desmoplastic reaction
differentiation
hamartoma
choristoma|heterotopia|heterotopic rest
teratoma
paraneoplastic syndrome
cachexia
oncogene
tumor suppressor gene|tumour suppressor gene
proto-oncogene
two-hit hypothesis|knudson hypothesis
carcinogen|carcinogenesis
infarct|infarction
red infarct|hemorrhagic infarct|haemorrhagic infarct
pale infarct|white infarct|anemic infarct
thrombus|thrombosis
mural thrombus
lines of zahn
postmortem clot|post-mortem clot|chicken fat clot
virchow triad|virchow's triad
embolus|embolism
thromboembolism
fat embolism
air embolism|gas embolism
amniotic fluid embolism
paradoxical embolism
saddle embolus
hemorrhage|haemorrhage|bleeding
petechiae|petechia
purpura
ecchymosis|ecchymoses|bruise
hematoma|haematoma
hyperemia|hyperaemia|active hyperemia
congestion|passive congestion
nutmeg liver|chronic passive congestion of liver
heart failure cells|hemosiderin-laden macrophages|siderophages
shock
ischemia|ischaemia
hypoxia
reperfusion injury|ischemia-reperfusion injury
free radical injury|reactive oxygen species|ros
lipid peroxidation
cell injury
reversible cell injury
irreversible cell injury
cellular swelling|hydropic change|cloudy swelling|hydropic degeneration
fatty change|steatosis|fatty degeneration
blebbing|membrane blebbing
myelin figures
pyknosis
karyorrhexis
karyolysis
cytoplasmic eosinophilia|increased eosinophilia
chromatolysis|central chromatolysis
red neuron|red neurons|eosinophilic neuronal necrosis
dystrophic calcification
metastatic calcification
psammoma body|psammoma bodies
calcification
amyloidosis|amyloid
apple-green birefringence
congo red
hyaline change|hyalinization|hyaline
hyaline arteriolosclerosis
hyperplastic arteriolosclerosis|onion skinning
arteriosclerosis
atherosclerosis
fatty streak
lipofuscin|wear and tear pigment
hemosiderin|hemosiderosis|haemosiderin
anthracosis
melanin
bilirubin|icterus|jaundice
intracellular accumulation
mallory body|mallory-denk body|mallory hyaline
russell body|russell bodies
councilman body|councilman bodies|acidophilic body
negri body|negri bodies
lewy body|lewy bodies
pick body|pick bodies
hirano body|hirano bodies
neurofibrillary tangle|neurofibrillary tangles
senile plaque|neuritic plaque|amyloid plaque
asteroid body|asteroid bodies
schaumann body|schaumann bodies
langhans giant cell|langhans cell
foreign body giant cell
reed-sternberg cell|reed sternberg cell
epithelioid cell|epithelioid histiocyte|epithelioid macrophage
foam cell|foam cells
aschoff body|aschoff bodies
anitschkow cell|caterpillar cell
call-exner body|call-exner bodies
auer rod|auer rods
dohle body|döhle bodies|dohle bodies
toxic granulation
left shift
leukocytosis
leukemoid reaction
acute phase reactant|acute phase reactants|acute phase response
c-reactive protein|crp
esr|erythrocyte sedimentation rate|sed rate
fever|pyrexia
cytokine
autophagy
pyroptosis
necroptosis
ferroptosis
caspase|caspases
intrinsic pathway of apoptosis|mitochondrial pathway
extrinsic pathway of apoptosis|death receptor pathway
cytochrome c
bcl-2
p53
senescence|cellular senescence
telomere shortening|telomere
heat shock protein|stress protein|chaperone
involution
hypoplasia
aplasia
agenesis
atresia
dysgenesis|dysgenesis of organ
malformation
deformation
disruption
sequence
syndrome
cyst
pseudocyst
fistula
sinus tract
stenosis
stricture
diverticulum
polyp
papilloma
adenoma
blastoma
pleomorphism|nuclear pleomorphism
hyperchromasia|hyperchromatism
mitotic figure|atypical mitoses|mitoses
nuclear to cytoplasmic ratio|n:c ratio|n/c ratio
loss of polarity
atypia|cellular atypia
koilocyte|koilocytes|koilocytosis
signet ring cell|signet ring cells
keratin pearl|keratin pearls|squamous pearl
rosette|homer wright rosette|flexner-wintersteiner rosette
pseudopalisading
palisading
verocay body|antoni a|antoni b
orphan annie eye nuclei|orphan annie nuclei
nuclear grooves|coffee bean nuclei
clear cell
small round blue cell tumor|small round blue cells
tumor marker|tumour marker
tumor necrosis|tumour necrosis
seeding|transcoelomic spread
hematogenous spread|haematogenous spread
lymphatic spread
sentinel lymph node|sentinel node
virchow node|virchows node
sister mary joseph nodule
krukenberg tumor|krukenberg tumour
field effect|field cancerization
clonality|monoclonal
host response
immune surveillance
warburg effect|aerobic glycolysis
hallmarks of cancer
angiogenic switch
epithelial-mesenchymal transition|emt
anoikis
contact inhibition
immortalization|immortalisation
sclerosis
induration
cirrhosis
hyperkeratosis
parakeratosis
acanthosis
spongiosis
acantholysis
dyskeratosis
cholesterolosis|cholesterol cleft|cholesterol clefts
xanthoma
xanthelasma
gout tophus|tophus|tophi
ochronosis
argyria
lead line|lead lines
crystal deposition
glycogen storage|glycogen accumulation
hyalinosis
mucoid degeneration|myxoid degeneration|myxomatous degeneration
cystic medial degeneration|cystic medial necrosis
elastosis|solar elastosis
cytomegaly
inclusion body|inclusion bodies
cowdry body|cowdry type a inclusion
owl eye inclusion|owl's eye inclusion
guarnieri body|guarnieri bodies
molluscum body|henderson-patterson body
ferruginous body|asbestos body
curschmann spirals
charcot-leyden crystals
creola bodies
zebra body|zebra bodies
gaucher cell|crumpled tissue paper
birbeck granule|birbeck granules
michaelis-gutmann body
splendore-hoeppli phenomenon
sulfur granule|sulfur granules
liesegang rings
hypersensitivity reaction|hypersensitivity
type i hypersensitivity|immediate hypersensitivity|anaphylaxis
type ii hypersensitivity|antibody-mediated hypersensitivity
type iii hypersensitivity|immune complex disease|immune complex hypersensitivity
type iv hypersensitivity|delayed type hypersensitivity|dth
arthus reaction
serum sickness
autoimmunity
graft rejection|transplant rejection
hyperacute rejection
graft versus host disease|gvhd
sepsis
septic shock
hypovolemic shock|hypovolaemic shock
cardiogenic shock
disseminated intravascular coagulation|dic
hypercoagulability|thrombophilia
stasis
endothelial injury|endothelial dysfunction
recanalization|recanalisation
organization of thrombus|organisation
thrombus propagation
watershed infarct|watershed zone
lacunar infarct|lacune
contraction band necrosis
wallerian degeneration
gliosis
spheroid|axonal spheroid
cavitation
ghon complex|ghon focus
apoptotic body|apoptotic bodies
`, "2026-11-07");
P("Name a genetics or inheritance term","science","",`
autosomal dominant|ad inheritance|autosomal dominant inheritance
autosomal recessive|ar inheritance|autosomal recessive inheritance
x-linked recessive|xlr|x linked recessive
x-linked dominant|xld|x linked dominant
x-linked|x linked|sex-linked|sex linked
y-linked|holandric inheritance|y linked
mitochondrial inheritance|maternal inheritance
anticipation|genetic anticipation
genomic imprinting|imprinting
mosaicism|mosaic
germline mosaicism|gonadal mosaicism
somatic mosaicism
incomplete penetrance|penetrance|reduced penetrance|nonpenetrance
variable expressivity|expressivity
pleiotropy
loss of heterozygosity|loh
uniparental disomy|upd
isodisomy
heterodisomy
hardy-weinberg equilibrium|hardy-weinberg|hardy weinberg|hardy-weinberg principle
heteroplasmy
homoplasmy
robertsonian translocation
reciprocal translocation|balanced translocation
translocation
nondisjunction|non-disjunction
frameshift mutation|frameshift
point mutation
missense mutation|missense
nonsense mutation|nonsense
silent mutation|synonymous mutation
splice site mutation|splice-site mutation
trinucleotide repeat expansion|triplet repeat expansion|trinucleotide repeat|repeat expansion
dominant negative|dominant negative mutation
gain of function|gain-of-function mutation
loss of function|loss-of-function mutation
haploinsufficiency
locus heterogeneity
allelic heterogeneity
genetic heterogeneity
phenocopy
linkage disequilibrium
linkage|genetic linkage
lyonization|x-inactivation|x inactivation|lyonisation
skewed x-inactivation|skewed lyonization
barr body
de novo mutation|new mutation|sporadic mutation
founder effect
genetic drift
bottleneck effect|population bottleneck
consanguinity
carrier|heterozygous carrier
homozygous|homozygote
heterozygous|heterozygote
compound heterozygote|compound heterozygosity
hemizygous|hemizygosity
genotype
phenotype
allele
locus
dominant
recessive
codominance|codominant
incomplete dominance|semidominance
epistasis
polygenic inheritance|polygenic
multifactorial inheritance|multifactorial
aneuploidy
euploidy
polyploidy
triploidy
tetraploidy
trisomy
monosomy
deletion
microdeletion
duplication
inversion
pericentric inversion
paracentric inversion
ring chromosome
isochromosome
insertion
contiguous gene syndrome
copy number variant|copy number variation|cnv
karyotype
fish|fluorescence in situ hybridization
microarray|chromosomal microarray|cma
whole exome sequencing|wes|exome sequencing
whole genome sequencing|wgs
pcr|polymerase chain reaction
southern blot
northern blot
western blot
sanger sequencing
pedigree
proband|propositus|index case
recurrence risk
bayesian analysis|bayes theorem
lod score
recombination|crossing over
recombination frequency|centimorgan
meiosis
mitosis
meiosis i nondisjunction
meiosis ii nondisjunction
anaphase lag
gametogenesis
gamete
zygote
chromosome
autosome
sex chromosome
chromatid|sister chromatid
centromere
telomere
acrocentric chromosome|acrocentric
metacentric chromosome|metacentric
submetacentric chromosome|submetacentric
p arm|short arm
q arm|long arm
x chromosome
y chromosome
sry|sex-determining region y
pseudoautosomal region|par1
fragile site
dynamic mutation
premutation
methylation|dna methylation
epigenetics|epigenetic
histone acetylation
histone modification
chromatin remodeling|chromatin remodelling
heterochromatin
euchromatin
gene expression
transcription
translation
codon
anticodon
exon
intron
promoter
enhancer
silencer
splicing|alternative splicing
reading frame|open reading frame
start codon
stop codon|termination codon
wobble
degeneracy of genetic code
transition mutation|transition
transversion mutation|transversion
indel
in-frame deletion
single nucleotide polymorphism|snp
polymorphism
variant of uncertain significance|vus
pathogenic variant
benign variant
mutation
germline mutation
somatic mutation
driver mutation
passenger mutation
two-hit hypothesis|knudson two-hit hypothesis|knudson hypothesis
tumor suppressor|tumour suppressor
oncogene
proto-oncogene
dna repair defect|dna repair
mismatch repair|mmr
microsatellite instability|msi
nucleotide excision repair
base excision repair
homologous recombination
nonhomologous end joining|nhej
genetic counseling|genetic counselling
carrier screening
newborn screening
prenatal diagnosis
amniocentesis
chorionic villus sampling|cvs
cell-free dna|cfdna|nipt|noninvasive prenatal testing
preimplantation genetic testing|pgd|pgt
cascade testing
predictive testing|presymptomatic testing
genetic testing
sex-limited inheritance|sex-limited
sex-influenced inheritance|sex-influenced
digenic inheritance
oligogenic inheritance
pseudodominance
semi-lethal
lethal allele|lethal gene
mendelian inheritance|mendelian
law of segregation|segregation
law of independent assortment|independent assortment
punnett square
test cross
wild type
null allele|amorph
hypomorph|hypomorphic allele
hypermorph
neomorph
antimorph
modifier gene
gene dosage|dosage compensation
x-inactivation center|xist
imprinting center
parent of origin effect
maternal effect
genetic load
heterozygote advantage|heterozygous advantage|balanced polymorphism
natural selection
inbreeding|inbreeding coefficient
coefficient of relationship
assortative mating
gene flow|migration
allele frequency|gene frequency
genotype frequency
carrier frequency
obligate carrier
manifesting heterozygote|manifesting carrier
chimerism|chimera
microchimerism
partial trisomy
segmental aneuploidy
mosaic trisomy
confined placental mosaicism
unbalanced translocation
derivative chromosome
marker chromosome|supernumerary marker chromosome
dicentric chromosome
acentric fragment
chromothripsis
gene amplification|amplification
double minutes
homogeneously staining region|hsr
fusion gene
philadelphia chromosome|bcr-abl
transposon|transposable element|jumping gene
retrotransposon
alu element
line element|line-1
tandem repeat
microsatellite|short tandem repeat|str
minisatellite|vntr
pseudogene
gene family
haplotype
haplogroup
genome-wide association study|gwas
polygenic risk score
heritability
concordance|twin concordance
monozygotic twins|identical twins
dizygotic twins|fraternal twins
age-dependent penetrance
nonsense-mediated decay|nonsense-mediated mrna decay
premature stop codon|premature termination codon
readthrough
exon skipping
cryptic splice site
promoter mutation
regulatory mutation
neutral mutation
conditional mutation
mutagen
mutation rate
transcription factor
gene
genome
mitochondrial dna|mtdna
threshold effect
replicative segregation
mitochondrial bottleneck
genetic mapping
physical map
position effect
gene therapy
crispr|crispr-cas9|gene editing
antisense oligonucleotide|aso
`, "2026-11-07");
P("Name an infection a traveler could bring home","micro","",`
malaria|plasmodium
falciparum malaria|plasmodium falciparum|p falciparum
vivax malaria|plasmodium vivax|p vivax
ovale malaria|plasmodium ovale|p ovale
malariae malaria|plasmodium malariae|quartan malaria
knowlesi malaria|plasmodium knowlesi
dengue|dengue fever|breakbone fever
severe dengue|dengue hemorrhagic fever|dengue shock syndrome
typhoid fever|typhoid|enteric fever|salmonella typhi
paratyphoid fever|paratyphoid|salmonella paratyphi
traveler's diarrhea|travelers diarrhea|travellers diarrhoea|montezuma's revenge|delhi belly
enterotoxigenic e coli|etec
hepatitis a|hep a|hav
hepatitis e|hep e|hev
hepatitis b|hep b|hbv
chikungunya|chikv
zika|zika virus
schistosomiasis|bilharzia|swimmer's itch|katayama fever
leishmaniasis
cutaneous leishmaniasis|oriental sore
visceral leishmaniasis|kala-azar
rabies
cholera|vibrio cholerae
yellow fever
measles|rubeola
tuberculosis|tb
multidrug-resistant tuberculosis|mdr-tb|xdr-tb
giardiasis|giardia
amebiasis|amoebiasis|entamoeba histolytica|amebic dysentery
amebic liver abscess|amoebic liver abscess
cryptosporidiosis|cryptosporidium
cyclosporiasis|cyclospora
shigellosis|shigella|bacillary dysentery
campylobacter|campylobacteriosis
nontyphoidal salmonella|salmonellosis
norovirus|cruise ship diarrhea|norwalk virus
rickettsial infection|rickettsiosis
african tick bite fever|rickettsia africae
mediterranean spotted fever|boutonneuse fever|rickettsia conorii
scrub typhus|orientia tsutsugamushi
murine typhus|endemic typhus
epidemic typhus|louse-borne typhus
leptospirosis|weil disease|weil's disease
strongyloidiasis|strongyloides
cutaneous larva migrans|creeping eruption
hookworm|ancylostoma|necator
ascariasis|ascaris
trichuriasis|whipworm
cysticercosis|taenia solium|neurocysticercosis
tapeworm|taeniasis
echinococcosis|hydatid disease|echinococcus
fascioliasis|fasciola
clonorchiasis|chinese liver fluke
opisthorchiasis
paragonimiasis|lung fluke
filariasis|lymphatic filariasis|elephantiasis
loiasis|loa loa|african eye worm
onchocerciasis|river blindness
dracunculiasis|guinea worm
african trypanosomiasis|sleeping sickness
chagas disease|american trypanosomiasis|trypanosoma cruzi
japanese encephalitis
tick-borne encephalitis|tbe
west nile virus|west nile fever
lassa fever
ebola|ebola virus disease|evd
marburg virus|marburg hemorrhagic fever
crimean-congo hemorrhagic fever|cchf
hantavirus|hemorrhagic fever with renal syndrome
mers|middle east respiratory syndrome
covid-19|sars-cov-2|covid
influenza|flu
avian influenza|bird flu|h5n1
legionnaires disease|legionella|legionellosis
meningococcal disease|meningococcus|neisseria meningitidis
polio|poliomyelitis
diphtheria
pertussis|whooping cough
mumps
rubella|german measles
varicella|chickenpox
mpox|monkeypox
scabies
tungiasis|tunga penetrans|chigoe flea|jigger
myiasis|botfly|bot fly
head lice|pediculosis
bed bugs|bedbugs
gonorrhea|gonorrhoea
chlamydia
syphilis
hiv
chancroid
lymphogranuloma venereum|lgv
granuloma inguinale|donovanosis
melioidosis|burkholderia pseudomallei
brucellosis|undulant fever|malta fever
q fever|coxiella burnetii
anthrax
plague|yersinia pestis|bubonic plague
tularemia|rabbit fever
histoplasmosis
coccidioidomycosis|valley fever
blastomycosis
paracoccidioidomycosis
talaromycosis|penicilliosis|talaromyces marneffei
sporotrichosis
chromoblastomycosis
mycetoma|madura foot
tinea imbricata
pityriasis versicolor|tinea versicolor
leprosy|hansen disease|hansen's disease
buruli ulcer|mycobacterium ulcerans
yaws
trachoma
lyme disease|borreliosis
relapsing fever|tick-borne relapsing fever|louse-borne relapsing fever
bartonellosis|carrion disease|oroya fever
trench fever|bartonella quintana
cat scratch disease
toxoplasmosis
trichinellosis|trichinosis
angiostrongyliasis|angiostrongylus cantonensis|rat lungworm
gnathostomiasis
anisakiasis|anisakis
toxocariasis|visceral larva migrans
enterobiasis|pinworm
diphyllobothriasis|fish tapeworm
hymenolepiasis|dwarf tapeworm
sparganosis
ciguatera
scombroid poisoning|scombroid
vibrio vulnificus
vibrio parahaemolyticus
aeromonas
plesiomonas
yersiniosis|yersinia enterocolitica
blastocystis
dientamoeba
balantidiasis|balantidium
cystoisosporiasis|isosporiasis|cystoisospora
microsporidiosis
tropical sprue
epidemic keratoconjunctivitis|adenovirus
hand foot and mouth disease|enterovirus 71|ev71
oropouche virus|oropouche fever
mayaro virus
ross river virus|epidemic polyarthritis
sindbis virus
o'nyong-nyong
rift valley fever
sandfly fever|pappataci fever
kyasanur forest disease
nipah virus
hendra virus
herpes b virus|macaque b virus|cercopithecine herpesvirus
sars|severe acute respiratory syndrome
hepatitis d|hep d|delta hepatitis
htlv-1
candida auris
carbapenem-resistant enterobacterales|cre|carbapenemase-producing organism|ndm-1
esbl colonization|esbl|extended-spectrum beta-lactamase
mrsa
primary amebic meningoencephalitis|naegleria fowleri
acanthamoeba keratitis
pneumonic plague
diphtheria cutaneous|cutaneous diphtheria
`, "2026-11-07");
P("Name a microbiology identification test","micro","",`
catalase test|catalase
coagulase test|coagulase
optochin sensitivity|optochin test|optochin
bacitracin sensitivity|bacitracin test|bacitracin
camp test|camp factor test
oxidase test|oxidase|cytochrome oxidase test
urease test|urease
lactose fermentation|lactose fermentation test
hemolysis pattern|blood agar hemolysis|hemolysis on blood agar|haemolysis pattern
quellung reaction|quellung test|capsular swelling test
india ink stain|india ink
koh prep|koh preparation|potassium hydroxide prep
germ tube test|germ tube
elek test|elek plate test
weil-felix reaction|weil-felix test|weil felix
heterophile antibody test|monospot|monospot test|paul-bunnell test
string test|string test for vibrio
hippurate hydrolysis|hippurate test
pyr test|pyr|pyrrolidonyl arylamidase test
bile esculin test|bile esculin|bile esculin agar
indole test|indole|spot indole test
maldi-tof|maldi-tof ms|mass spectrometry identification
16s rrna sequencing|16s sequencing|16s rrna gene sequencing
gram stain|gram staining
ziehl-neelsen stain|acid-fast stain|afb smear|acid fast stain|kinyoun stain
auramine-rhodamine stain|fluorochrome stain|auramine stain
giemsa stain|giemsa
wright stain|wright-giemsa
methylene blue stain|loeffler methylene blue
gomori methenamine silver|gms stain|methenamine silver stain
pas stain|periodic acid-schiff stain
mucicarmine stain|mucicarmine
warthin-starry stain|dieterle stain
calcofluor white stain|calcofluor white
fontana-tribondeau stain
albert stain
capsule stain
spore stain|schaeffer-fulton stain|endospore stain
flagella stain
dark-field microscopy|darkfield microscopy|dark field examination
wet mount|saline wet mount
hanging drop test|hanging drop motility
motility test|motility medium|sim motility
triple sugar iron agar|tsi agar|tsi
sim medium|sulfide indole motility
mio medium
citrate test|simmons citrate|citrate utilization test
methyl red test|methyl red|mr test
voges-proskauer test|vp test|voges proskauer
imvic|imvic tests
nitrate reduction test|nitrate reduction
gelatinase test|gelatin liquefaction
dnase test|dnase agar
lecithinase test|nagler reaction|nagler test|egg yolk agar
lipase test
decarboxylase test|moeller decarboxylase|lysine decarboxylase test|ldc
ornithine decarboxylase test
arginine dihydrolase test
phenylalanine deaminase test|pda test
tryptophanase test
esculin hydrolysis
starch hydrolysis test
casein hydrolysis test
tween 80 hydrolysis
bile solubility test|bile solubility
salt tolerance test|6.5 percent nacl test|nacl tolerance
growth at 42 degrees|temperature tolerance test
growth in 40 percent bile
cetrimide agar test
pigment production test|pyocyanin production|pigment production
fluorescence test|pyoverdin fluorescence
niacin accumulation test|niacin test
catalase at 68 degrees|heat-stable catalase test
arylsulfatase test
tellurite reduction test|tellurite test
pyrazinamidase test
thiophene-2-carboxylic acid hydrazide test|tch test
mannitol fermentation|mannitol salt agar|msa
sorbitol maconkey agar|smac agar|sorbitol fermentation
eosin methylene blue agar|emb agar
hektoen enteric agar|hektoen agar
xld agar|xylose lysine deoxycholate agar
salmonella shigella agar|ss agar
tcbs agar|thiosulfate citrate bile salts sucrose agar
chocolate agar|chocolate agar growth
thayer-martin agar|modified thayer-martin|vpn medium
regan-lowe medium|bordet-gengou agar
loeffler medium|tinsdale agar
tellurite blood agar
charcoal yeast extract agar|bcye agar|buffered charcoal yeast extract
lowenstein-jensen medium|lj medium
middlebrook agar|middlebrook 7h10
sabouraud agar|sabouraud dextrose agar
czapek-dox agar
bird seed agar|niger seed agar|caffeic acid agar
corn meal agar|cornmeal agar chlamydospore
chromagar|chromogenic agar
cary-blair transport medium
anaerobic culture
blood culture
urine culture
sputum culture
stool culture
csf culture
throat culture|throat swab culture
wound culture
fungal culture
viral culture|shell vial culture
cell culture cytopathic effect|cytopathic effect|cpe
antibiotic susceptibility testing|antimicrobial susceptibility testing|ast
disk diffusion test|kirby-bauer test|kirby bauer
minimum inhibitory concentration|mic
minimum bactericidal concentration|mbc
broth microdilution
agar dilution
e-test|etest|epsilometer test
d-test|d test|clindamycin d-test
cefinase test|beta-lactamase test|nitrocefin test
cefoxitin screen|oxacillin screen
meca pcr|meca detection
vancomycin screen agar
modified hodge test|carbapenemase inhibition test|carba np test
esbl confirmatory test|double disk synergy test
nitrocefin disk
latex agglutination test|latex agglutination
cocountercurrent immunoelectrophoresis
cryptococcal antigen test|crag|cryptococcal antigen
galactomannan assay|galactomannan
beta-d-glucan assay|beta glucan assay
histoplasma antigen test|urine histoplasma antigen
urine legionella antigen|legionella urinary antigen
pneumococcal urinary antigen|streptococcus pneumoniae urine antigen
rapid strep test|rapid antigen detection test|rapid strep antigen
rapid influenza test|rapid influenza antigen test
rsv antigen test
rotavirus antigen test
c difficile toxin immunoassay|c diff toxin eia
c difficile glutamate dehydrogenase antigen|gdh antigen test
stool ova and parasite exam|ova and parasites|o and p
modified acid-fast stain for cryptosporidium|modified kinyoun for parasites
trichrome stain|trichrome stain for stool
scotch tape test|cellophane tape test|pinworm tape test
thick and thin blood smear|malaria smear|peripheral smear for malaria
rapid diagnostic test for malaria|malaria rdt|malaria antigen test
buffy coat examination
bone marrow culture
knott concentration test
skin snip
nasal scraping|slit skin smear
tzanck smear|tzanck test
direct fluorescent antibody|dfa|dfa test
indirect immunofluorescence assay|ifa
enzyme-linked immunosorbent assay|elisa
western blot confirmation|immunoblot
complement fixation test|cft
hemagglutination inhibition test|hai test
agglutination test
widal test|widal
rpr test|rpr|rapid plasma reagin
vdrl test|vdrl
treponemal antibody test|fta-abs|tp-pa|treponemal eia
darkfield for syphilis|treponeme darkfield
tuberculin skin test|ppd|mantoux test|tst
interferon gamma release assay|igra|quantiferon|t-spot
histoplasmin skin test
coccidioidin skin test|spherulin skin test
casoni test
lepromin test
schick test
dick test
frei test
nucleic acid amplification test|naat
pcr|polymerase chain reaction|real-time pcr|qpcr
multiplex pcr panel|respiratory pcr panel|gi pcr panel
line probe assay
genexpert|xpert mtb/rif|cepheid xpert
whole genome sequencing|wgs identification
metagenomic sequencing|metagenomic next-generation sequencing
pulsed-field gel electrophoresis|pfge
ribotyping
spa typing
mlst|multilocus sequence typing
phage typing
serotyping|serogrouping
biotyping
api strip|api 20e|api system
vitek|vitek 2
biolog|carbon source utilization panel
automated blood culture system|bactec
microscan
flow cytometry identification
fluorescence in situ hybridization|peptide nucleic acid fish|pna fish
t2 magnetic resonance assay
satellite phenomenon|satellitism test
x and v factor requirement|x and v factors|hemin and nad requirement
porphyrin test|ald test
lancefield grouping
sodium polyanethol sulfonate test|sps test
litmus milk test
fermentation tube test
carbohydrate utilization test|sugar fermentation test
rapid urease test for h pylori|clo test|campylobacter-like organism test
urea breath test
h pylori stool antigen
`, "2026-11-07");
P("Name a section or element of a history and physical (H&P)","care","",`
chief complaint|cc|presenting complaint
history of present illness|hpi
past medical history|pmh|medical history
past surgical history|psh|surgical history
medications|medication list|current medications|meds
allergies|allergy history|drug allergies
family history|fh
social history|sh
review of systems|ros
physical exam|physical examination
vital signs|vitals
general appearance|general survey
assessment
plan
assessment and plan|a and p
differential diagnosis|ddx
problem list
code status|dnr status|advance directives|goals of care
immunizations|vaccination history|immunization history
obstetric history|ob history|gynecologic history|ob/gyn history|menstrual history
sexual history
travel history
occupational history|work history
identifying data|patient identifiers|demographics|age and sex
source of history|historian|source and reliability
reliability of history
onset
location
duration
character|quality|description of symptom
aggravating factors|exacerbating factors
relieving factors|alleviating factors
radiation
timing
severity|severity scale|pain score
associated symptoms|associated manifestations
context|setting
pertinent positives
pertinent negatives
diet history|nutrition history
exercise history|activity level
tobacco use|smoking history|pack-years
alcohol use|etoh history|alcohol history
substance use|drug use history|illicit drug use
caffeine use
living situation|home situation
support system
functional status|activities of daily living|adls|iadls
developmental history
birth history|perinatal history
growth history|growth chart
hospitalizations|prior hospitalizations
prior imaging and labs|previous studies|outside records
health maintenance|preventive care|screening history
blood transfusion history|transfusion history
religious or cultural beliefs|cultural history|spiritual history
firearm access|gun safety|home safety
intimate partner violence screening|domestic violence screening|ipv screening
depression screening
fall risk assessment
pain history
sleep history
blood pressure|bp
heart rate|pulse|hr
respiratory rate|rr
temperature|temp
oxygen saturation|spo2|pulse oximetry|o2 sat
height
weight
body mass index|bmi
pain scale|pain rating
orthostatic vital signs|orthostatics
constitutional review|constitutional symptoms
heent|head eyes ears nose throat
head exam
eye exam|ophthalmologic exam|ocular exam
fundoscopic exam|funduscopic examination|ophthalmoscopy
pupils|pupillary exam|perrla
extraocular movements|eom
visual acuity
ear exam|otoscopic exam
nose exam|nasal exam
oropharynx exam|oral exam|mouth and throat exam
neck exam
thyroid exam
lymph node exam|lymphatic exam|lymphadenopathy exam
jugular venous pressure|jvp|jvd assessment
carotid exam|carotid bruit
chest exam|thorax exam
lung exam|pulmonary exam|respiratory exam
auscultation
percussion
palpation
inspection
cardiovascular exam|cardiac exam|heart exam
point of maximal impulse|pmi|apical impulse
heart sounds|s1 and s2
murmur assessment|murmurs rubs and gallops
peripheral pulses|pulse exam
capillary refill
abdominal exam|abdomen exam
bowel sounds
liver span|hepatic exam
spleen exam|splenic palpation
rebound tenderness|peritoneal signs
costovertebral angle tenderness|cva tenderness
rectal exam|digital rectal exam|dre
genitourinary exam|gu exam
pelvic exam
breast exam
prostate exam
testicular exam
musculoskeletal exam|msk exam
joint exam
range of motion|rom
spine exam|back exam
gait assessment|gait
extremities exam|extremity exam
edema assessment|peripheral edema exam
skin exam|dermatologic exam|integumentary exam
nail exam
neurologic exam|neuro exam
mental status exam|mse
level of consciousness|alertness|glasgow coma scale|gcs
orientation
cranial nerve exam|cranial nerves
motor exam|strength testing|muscle strength
sensory exam|sensation testing
reflexes|deep tendon reflexes|dtrs
babinski sign|plantar reflex
cerebellar exam|coordination testing|finger to nose
romberg test
meningeal signs|nuchal rigidity|kernig and brudzinski
psychiatric exam|psychiatric review|mood and affect
cognition|cognitive screening|mini-mental status exam|mmse|moca
speech and language assessment
labs|laboratory data|laboratory results
imaging results|radiology results
electrocardiogram|ekg|ecg
intake and output|i and o|ins and outs
medication reconciliation
allergy reactions|reaction to allergen
dosage and frequency of medications
over-the-counter medications|otc medications
herbal supplements|supplements|vitamins
adherence|compliance history
chronology of symptoms|timeline
progression of illness
previous episodes|prior similar episodes
hospital course
interval history|subjective update
objective data
subjective
summary statement|one-liner|patient summary
impression
recommendations
disposition
follow-up plan|follow up
patient education|counseling
consultations|consults requested
prophylaxis|dvt prophylaxis|stress ulcer prophylaxis
diet order
activity order
anticipatory guidance
pedigree|family pedigree
genetic history
pets and animal exposure|animal exposure
sick contacts|exposure history
insurance and access|health care access
advance care planning|health care proxy|durable power of attorney
primary care provider|pcp
emergency contact
risk factors
goals and values
`, "2026-11-07");

/* ==== NEW DAILY PROMPT BATCHES GO DIRECTLY ABOVE THIS LINE (see src/NEW_PROMPTS.md) ==== */

/* ---- deeper answer lists for the 2026-10-31 batch (added answers are the rarer ones) ---- */
function X(q,txt){ const r=RAW.find(r=>r.q===q); if(!r) throw new Error("no prompt: "+q);
  r.list+="\n"+txt.trim().split("\n").map(s=>s.trim()).filter(Boolean).map(s=>"1 "+s).join("\n"); }
function RENAME(a,b){ const r=RAW.find(r=>r.q===a); r.q=b; }

/* Parkinson + dementia drugs become one prompt */
(()=>{ const a=RAW.findIndex(r=>r.q==="Name a drug for Alzheimer disease or dementia"); const d=RAW.splice(a,1)[0];
  RENAME("Name a drug for Parkinson disease","Name a drug for Parkinson or Alzheimer disease");
  X("Name a drug for Parkinson or Alzheimer disease", d.list.split("\n").map(s=>s.slice(2)).join("\n")); })();

X("Name a type of shock",`
anaphylactoid
traumatic shock
`);
X("Name a nursing ethical principle",`
respect for persons
nonabandonment
self determination
moral courage
moral distress
social justice
care ethics
principlism
`);
X("Name a sign of opioid overdose",`
seizure
gurgling breath
foaming at the mouth
hypothermia
noncardiogenic pulmonary edema
loss of gag reflex
`);
X("Name a sign of shock",`
decreased level of consciousness
skin mottling at knees
cold extremities
low central venous pressure
high shock index
metabolic acidosis
oliguria
absent bowel sounds
`);
X("Name a postpartum assessment",`
bubble he
fundal massage
perineal pad count
uterine involution
afterpains
diastasis recti
voiding within 6 hours
hemoglobin check
blood pressure for preeclampsia
`);
X("Name a sign of a urinary tract infection",`
hematuria
suprapubic tenderness
nocturia
foul odor in diaper
new incontinence
falls in elderly
vomiting in infants
poor feeding in infants
costovertebral angle tenderness|cva tenderness
`);
X("Name a drug used to treat gout",`
vitamin c
cherry extract
ice
dexamethasone
corticotropin|acth
benzbromarone
`);
X("Name a drug for thyroid disease",`
iodine
carbimazole
thyrogen|thyrotropin alfa
lenvatinib
sorafenib
cabozantinib
vandetanib
selpercatinib
hydrocortisone
`);
X("Name a drug for osteoporosis",`
duavee|conjugated estrogens bazedoxifene
calcitriol
strontium ranelate
tibolone
pamidronate
`);
X("Name a drug for BPH, overactive bladder or erectile dysfunction",`
saw palmetto
imipramine
flavoxate
trimix
`);
X("Name a drug for smoking cessation or addiction treatment",`
nalmefene|opvee
nortriptyline
chlordiazepoxide|librium
oxazepam
`);
X("Name an antiarrhythmic drug",`
nadolol
bisoprolol
`);
X("Name a drug for acne",`
sodium sulfacetamide
glycolic acid
retinol
amzeeq
`);
X("Name a drug or supplement that treats anemia",`
iron isomaltoside|monoferric
ferric pyrophosphate citrate|triferic
ferric citrate|auryxia
eltrombopag
vadadustat
mitapivat|pyrukynd
`);
X("Name a cosmetic dental procedure",`
tooth reshaping
diastema closure
zirconia crowns
same day crowns
full mouth reconstruction
dental implants all on 4|all on 4
microabrasion
deep bleaching
`);
X("Name a reason a filling or crown fails",`
polymerization shrinkage
improper curing
poor isolation
inadequate retention
acid erosion
`);
X("Name a job in a dental office",`
sterilization assistant
dental scheduler
hygiene coordinator
compliance officer
it support
janitor|custodian
`);
X("Name a famous person in dental history",`
nelson goodyear
hesy re
william addis
rafael bowen
michael buonocore
john mankey riggs
`);
X("Name a cause of a chipped or broken tooth",`
weak enamel
amelogenesis imperfecta
dentinogenesis imperfecta
acid erosion
bulimia
clenching
`);
X("Name a sign of a cavity",`
gum swelling near tooth
throbbing pain
spontaneous pain
pain at night
sticky explorer
chalky enamel
`);
X("Name a step in a dental cleaning visit",`
gum measurements
intraoral photos
air polishing
root planing
dentist exam
diet counseling
`);
X("Name a teeth whitening method or product",`
whitening gel
blue light
sodium hypochlorite
non vital bleaching
strawberries and baking soda
apple cider vinegar
`);
X("Name a cause of a toothache",`
tooth fracture
cracked filling
failed root canal
periapical abscess
periodontal abscess
orthodontic tightening
angina
`);
X("Name a complication of dental implants",`
mandibular fracture
implant migration into sinus
screw loosening
esthetic problems|gray gums
speech problems
oral paresthesia
`);
X("Name a dental behavior management technique",`
audiovisual distraction
counting
guided imagery
hypnosis
aromatherapy
breaks
signals|raise hand to stop
`);
X("Name a cause of crooked teeth",`
supernumerary teeth
impacted teeth
late loss of baby teeth
`);
X("Name a sign of teeth grinding (bruxism)",`
fractured cusps
tooth mobility
facial pain
neck pain
morning headache
bone thickening|tori
`);
X("Name a way to prevent cavities",`
probiotics
chlorhexidine
sugar substitutes
cheese after meals
regular toothbrush replacement
not putting baby to bed with bottle
`);
X("Name a dental X-ray error",`
cervical burnout
light leak
scratched film
fixer spots
developer spots
reticulation
`);
X("Name a toothbrushing or flossing technique or tip",`
replace brush every 3 months
brush twice a day
fluoride toothpaste
floss holder
interproximal brush
end tuft brush
tongue scraper
`);
X("Name a task an RN can delegate to a nursing assistant",`
measuring output
ted hose application
hygiene care
`);
X("Name a patient right",`
continuity of care
pastoral care
pain relief
access to ethics committee
designate a surrogate
organ donation choice
`);

const PRACTICE_ONLY = new Set(["Name a symptom of diabetes","Name a part of the heart","Name a muscle","Name a medical imaging test","Name a bacterium that causes disease in humans","Name a virus that infects humans","Name a parasite that infects humans","Name a blood test","Name a genetic disorder","Name a mental health disorder","Name a lung disease","Name a heart condition","Name an eye disease or condition","Name a painkiller","Name a part of the brain","Name a ligament or tendon","Name a component or cell of the blood","Name a neurotransmitter","Name a type of bone fracture","Name a sexually transmitted infection","Name a nutrient deficiency disease","Name a part of a tooth","Name a dental procedure","Name an over-the-counter medication","Name a medication dosage form","Name a common medication side effect","Name a controlled substance","Name a type of IV fluid","Name a medical abbreviation","Name a nursing scale or assessment tool","Name a healthcare profession","Name a preventive screening test","Name a common reason for a primary care visit","Name a beta blocker (ends in -olol)","Name an ACE inhibitor (ends in -pril)","Name an ARB (ends in -sartan)","Name an antifungal drug (often ends in -azole)","Name a monoclonal antibody (ends in -mab)","Name an anticoagulant or antiplatelet drug","Name a cholesterol-lowering drug","Name a chemotherapy drug","Name an herbal supplement","Name a vaccine","Name a sign of dehydration","Name a sign of sepsis","Name a symptom of low blood sugar","Name a hospital unit or department","Name an electrolyte imbalance","Name a newborn assessment or procedure","Name a complication of immobility","Name something found in a hospital room","Name a symptom of a heart attack","Name an orthodontic appliance","Name a drug used in dentistry","Name a bone or landmark of the skull","Name a periodontal term or condition","Name a dental emergency","Name a systemic disease with oral signs","Name a cause of chronic cough","Name a physical exam sign named after a person","Name a reason people visit the dentist","Name a dental charting term or tooth surface","Name an endodontic term","Name a sign of a dental infection","Name a sign of a blood transfusion reaction","Name a right of medication administration","Name a restraint or restraint alternative","Name a postoperative complication","Name a complication of dental anesthesia","Name a piece of equipment in a dental office","Name a cephalosporin","Name a benzodiazepine","Name an antipsychotic","Name a pharmacy job or setting","Name an antidepressant","Name an autosomal dominant disease","Name a tumor marker","Name a cause of hypercalcemia","Name a disease linked to an HLA type","Name an oncogene or tumor suppressor gene","Name a cause of secondary hypertension","Name a cause of eosinophilia","Name a cause of hemolytic anemia","Name a drug that causes drug-induced lupus","Name a teratogen","Name a sign of lithium toxicity","Name a food high in vitamin K (affects warfarin)","Name a sign of high potassium","Name a sign of magnesium sulfate toxicity","Name a sign of compartment syndrome","Name a danger sign in pregnancy","Name a contraindication for an MRI","Name a trigger of autonomic dysreflexia","Name a sign of Cushing syndrome","Name a neutropenic precaution","Name a strong CYP3A4 inhibitor","Name a drug that causes gingival hyperplasia","Name a drug that discolors urine","Name an ototoxic drug","Name a drug that causes Stevens-Johnson syndrome","Name a drug that interacts with grapefruit juice","Name a drug that causes orthostatic hypotension","Name a drug on the Beers list","Name a dosage form that should not be crushed","Name a radiolucent jaw lesion","Name a reason to limit epinephrine in local anesthetic","Name a developmental anomaly of teeth","Name an item in a dental emergency kit","Name a risk factor for periodontal disease","Name a tooth deposit or stain","Name a type of fluoride","Name a heart murmur or extra heart sound","Name a pathogen that causes pneumonia","Name a cause of a red eye","Name a cause of syncope","Name a cause of pleural effusion","Name a cause of hypothyroidism","Name a classic chest X-ray finding","Name a cause of vaginitis or vaginal discharge","Name a contraindication to estrogen-containing birth control","Name a routine prenatal lab or test","Name a lifestyle change that lowers blood pressure","Name a cause of chronic diarrhea","Name a cause of itching (pruritus)","Name a dental impression material","Name a medication that raises bleeding risk in oral surgery","Name a stage of tooth development"]);

/* ---------- CATEGORIES ---------- */
const CATS = {
  body:     {label:"ANATOMY",            icon:"🫀", color:"#ff7a8a"},
  science:  {label:"PHYSIOLOGY",         icon:"🧬", color:"#7ad0ff"},
  micro:    {label:"INFECTIOUS DISEASE", icon:"🦠", color:"#7dff9e"},
  pharm:    {label:"PHARMACY",           icon:"💊", color:"#ffb84d"},
  clinical: {label:"CONDITIONS",         icon:"🩺", color:"#e3a8ff"},
  tests:    {label:"TESTS & PROCEDURES", icon:"🔬", color:"#9ab0ff"},
  dental:   {label:"DENTAL",             icon:"🦷", color:"#ffffff"},
  nursing:  {label:"NURSING",            icon:"🩹", color:"#ff9ed8"},
  care:     {label:"PRIMARY CARE",       icon:"🏥", color:"#ffe37a"},
  b_med:    {label:"USMLE / COMLEX",     icon:"🎓", color:"#e3a8ff"},
  b_pa:     {label:"PANCE",              icon:"🎓", color:"#9ab0ff"},
  b_np:     {label:"NP BOARDS",          icon:"🎓", color:"#7dff9e"},
  b_nurse:  {label:"NCLEX",              icon:"🎓", color:"#ff9ed8"},
  b_pharm:  {label:"NAPLEX",             icon:"🎓", color:"#ffb84d"},
  b_dental: {label:"DENTAL BOARDS",      icon:"🎓", color:"#ffffff"},
};
const CATMAP = {
  "Name a cause of chest pain":"clinical","Name a bone in the human body":"body","Name an antibiotic":"pharm",
  "Name a symptom of diabetes":"clinical","Name a cranial nerve":"body","Name an organ of the human body":"body",
  "Name a type of cancer":"clinical","Name a part of the heart":"body","Name a vitamin or mineral the body needs":"science",
  "Name a medical specialty":"care","Name a muscle":"body","Name a hormone":"science",
  "Name a condition that causes a rash":"clinical","Name a medical imaging test":"tests",
  "Name a bacterium that causes disease in humans":"micro","Name a virus that infects humans":"micro",
  "Name a parasite that infects humans":"micro","Name a fungal infection":"micro","Name a blood test":"tests",
  "Name a cause of headache":"clinical","Name a cause of abdominal pain":"clinical","Name a cause of shortness of breath":"clinical",
  "Name an autoimmune disease":"clinical","Name a genetic disorder":"clinical","Name a mental health disorder":"clinical",
  "Name a neurological disorder":"clinical","Name a lung disease":"clinical","Name a liver disease":"clinical",
  "Name a kidney disease":"clinical","Name a heart condition":"clinical","Name an eye disease or condition":"clinical",
  "Name a painkiller":"pharm","Name a blood pressure medication":"pharm","Name a psychiatric medication":"pharm",
  "Name a diabetes medication":"pharm","Name a vaccine-preventable disease":"micro","Name an artery":"body",
  "Name a vein":"body","Name a nerve":"body","Name a part of the brain":"body","Name a part of the ear":"body",
  "Name a joint in the body":"body","Name a ligament or tendon":"body","Name a gland in the body":"body",
  "Name a component or cell of the blood":"science","Name an enzyme in the human body":"science",
  "Name a neurotransmitter":"science","Name a part of the digestive system":"body","Name a surgical procedure":"tests",
  "Name a medical instrument or tool":"tests","Name a type of bone fracture":"clinical",
  "Name a sexually transmitted infection":"micro","Name a cause of anemia":"clinical",
  "Name a nutrient deficiency disease":"science","Name a reflex":"science",
};
RAW.forEach(r=>{ if(r.cat==="general") r.cat="care"; r.cat = r.cat || CATMAP[r.q] || "care"; });
/* ---------- FIELDS & POOLS ----------
   Standard mode: each field only gets its own category (Medicine / Nursing / Pharmacy / Dental), or Mixed.
   Board Prep mode: each profession gets prompts styled after ITS OWN exam:
   USMLE/COMLEX (physician), PANCE (PA), AANP/ANCC (NP), NCLEX (nurse), NAPLEX (pharmacist), dental boards (dentist). */
const FIELD_KEYS=["physician","pa","np","nurse","pharmacist","dentist","other"];
const POOL_OF={physician:"medicine",pa:"medicine",np:"medicine",nurse:"nursing",pharmacist:"pharmacy",dentist:"dental",other:"mixed"};
const BOARD_POOL_OF={physician:"b_medicine",pa:"b_pa",np:"b_np",nurse:"b_nursing",pharmacist:"b_pharmacy",dentist:"b_dental",other:"b_mixed"};
const CAT_TO_POOL={clinical:"medicine",body:"medicine",science:"medicine",micro:"medicine",tests:"medicine",care:"medicine",
                   nursing:"nursing",pharm:"pharmacy",dental:"dental",
                   b_med:"b_medicine",b_pa:"b_pa",b_np:"b_np",b_nurse:"b_nursing",b_pharm:"b_pharmacy",b_dental:"b_dental"};
/* board prompts that genuinely show up on more than one exam */
const ALSO_IN={
  "Name a cause of secondary hypertension":["b_pa","b_np"], "Name a cause of acute pancreatitis":["b_pa"],
  "Name a cause of hypercalcemia":["b_pa"], "Name a cause of thrombocytopenia":["b_pa"], "Name a type of vasculitis":["b_pa"],
  "Name a cause of ST elevation":["b_pa"], "Name a cause of nephrotic syndrome":["b_pa"], "Name a cause of hemolytic anemia":["b_pa"],
  "Name a teratogen":["b_pa","b_np"], "Name a cause of digital clubbing":["b_pa"],
  "Name a sign of thyroid storm or hyperthyroidism":["b_pa","b_np"], "Name a sign of Cushing syndrome":["b_pa"],
  "Name a sign of Addison disease or adrenal crisis":["b_pa"], "Name a sign of meningitis":["b_pa","b_np"],
  "Name a sign of preeclampsia":["b_np"], "Name a danger sign in pregnancy":["b_np"], "Name a drug on the Beers list":["b_np"],
  "Name a red flag for low back pain":["b_pa"], "Name a cause of hyponatremia":["b_np"], "Name a cause of hypothyroidism":["b_np"],
  "Name a symptom of major depression":["b_np"], "Name a cause of secondary amenorrhea":["b_np"],
  "Name a contraindication to estrogen-containing birth control":["b_pa"], "Name a medical ethics or legal concept":["b_medicine"],
};
RAW.forEach(r=>{ r.pool=CAT_TO_POOL[r.cat]||"medicine"; r.pools=[r.pool, ...(ALSO_IN[r.q]||[])]; });
/* Newer prompts are written roughly from most to least common answer: lift each
   answer's score to at least its rank position so the obscure tail scores high. */
RAW.forEach((r,i)=>{ if(i<14) return; r.rank=true; });
/* ---------- MATCHING ---------- */
const EXTRA_LISTS = {};
function addExtra(o){ for(const k in o) EXTRA_LISTS[k]=(EXTRA_LISTS[k]||"")+"\n"+o[k]; }
addExtra({
"Name a cause of anion gap metabolic acidosis":`
40 hydrogen sulfide
55 phenformin
60 acetaminophen overdose|tylenol overdose
60 ibuprofen overdose
60 nsaid overdose
65 short bowel syndrome
65 inborn errors of metabolism
65 methylmalonic acidemia
65 propionic acidemia
70 thiamine deficiency
70 shock
70 hypoperfusion
75 status epilepticus
75 linezolid
75 nrtis|zidovudine
80 mitochondrial disease
80 pheochromocytoma
85 benzyl alcohol
85 formaldehyde
85 paraldehyde
90 diethylene glycol
90 strychnine
`,
"Name a cause of non-anion gap metabolic acidosis":`
40 ileal conduit
50 biliary fistula
55 cholestyramine
60 small bowel fistula
60 villous adenoma
65 trimethoprim
65 amphotericin b
65 sulfamylon|mafenide
70 hypoaldosteronism
70 obstructive uropathy
70 sickle cell nephropathy
70 sjogren syndrome
70 multiple myeloma
75 fanconi syndrome
75 recovery from dka
75 dilutional acidosis
80 hydrochloric acid
80 arginine hydrochloride
80 lysine hydrochloride
85 calcium chloride
`,
"Name a drug that causes SIADH":`
40 cyclophosphamide iv
45 citalopram
45 sertraline
45 fluoxetine
45 paroxetine
50 escitalopram
55 chlorpromazine
55 thioridazine
55 morphine
55 tramadol
60 carboplatin
60 melphalan
60 vinorelbine
65 levetiracetam
65 sodium valproate
65 tolbutamide
70 bromocriptine
70 ace inhibitors
70 nicotine replacement
75 interferon alpha
75 trimethoprim sulfamethoxazole
`,
"Name an X-linked recessive disease":`
40 x linked ichthyosis|steroid sulfatase deficiency
50 hypohidrotic ectodermal dysplasia
50 lowe syndrome|oculocerebrorenal syndrome
55 pyruvate dehydrogenase deficiency
55 x linked adrenal hypoplasia
60 x linked myotubular myopathy
60 emery dreifuss muscular dystrophy
60 hemophilia
65 norrie disease
65 incontinentia pigmenti
65 choroideremia
70 x linked sideroblastic anemia
70 x linked lymphoproliferative disease
70 properdin deficiency
75 coffin lowry syndrome
75 aarskog syndrome
80 barth syndrome
80 dyskeratosis congenita
80 danon disease
85 juvenile retinoschisis
`,
"Name an autosomal dominant disease":`
45 polycystic kidney disease
50 hereditary hemochromatosis type 4
55 neurofibromatosis type 1|nf1
55 neurofibromatosis type 2|nf2
60 tuberous sclerosis complex
60 hereditary nonpolyposis colorectal cancer
60 familial medullary thyroid cancer
65 malignant hyperthermia susceptibility
65 hypokalemic periodic paralysis
65 hereditary pancreatitis
65 marfan
70 crouzon syndrome
70 apert syndrome
70 stickler syndrome
70 holt oram syndrome
70 piebaldism
70 hereditary angioedema
75 autosomal dominant hypophosphatemic rickets
80 pseudohypoparathyroidism
80 birt hogg dube
80 cowden syndrome
85 alagille syndrome
85 hyperkalemic periodic paralysis
`,
"Name a tumor marker":`
40 ctdna|circulating tumor dna
50 calretinin
50 cd15
50 cd34
50 cd56
55 synaptophysin
55 ttf 1
55 cdx2
55 ki 67
60 inhibin
60 sall4
60 oct3/4
60 glypican 3
65 cytokeratin 7
65 cytokeratin 20
65 epithelial membrane antigen|ema
65 melan a
70 sox10
70 gata3
70 p63
70 p16
75 dog1
75 cd99
75 myod1
75 myogenin
80 wt1
80 cd1a
80 langerin
85 psma
85 ca 50
`,
"Name a cause of nephrotic syndrome":`
40 iga nephropathy
45 diabetic glomerulosclerosis
50 kimmelstiel wilson
55 lupus nephritis
60 sjogren syndrome
60 rheumatoid arthritis
65 bee stings
65 food allergy
65 interferon
70 vegf inhibitors|bevacizumab
70 c3 glomerulopathy
70 fibrillary glomerulonephritis
75 collapsing glomerulopathy
75 reflux nephropathy
75 schistosomiasis
75 filariasis
80 sarcoidosis
80 graft versus host disease
85 denys drash syndrome
85 finnish type nephrotic syndrome
`,
"Name a cause of hypercalcemia":`
40 calcium supplements
45 vitamin a excess
50 lithium therapy
55 thyrotoxicosis
55 breast cancer
55 lung cancer
60 renal cell carcinoma
60 t cell lymphoma
60 htlv 1 lymphoma
65 parathyroid carcinoma
65 men1
65 men2a
70 berylliosis
70 coccidioidomycosis
70 histoplasmosis
70 leprosy
75 pheochromocytoma
75 vipoma
75 acromegaly
80 williams syndrome
80 jansen metaphyseal chondrodysplasia
80 hypophosphatasia
85 rhabdomyolysis recovery
`,
"Name a type of vasculitis":`
40 temporal arteritis
45 serum sickness
50 iga nephropathy
55 urticarial vasculitis
55 polymyalgia rheumatica
60 susac syndrome
60 erythema elevatum diutinum
65 anca associated vasculitis
65 single organ vasculitis
70 isolated aortitis
70 central nervous system vasculitis
70 retinal vasculitis
75 levamisole induced vasculitis
75 hydralazine induced vasculitis
80 sarcoid vasculitis
80 segmental arterial mediolysis
`,
"Name a lysosomal storage disease":`
40 mucopolysaccharidosis
45 sphingolipidosis
50 gm1 gangliosidosis
55 gm2 gangliosidosis
60 mucolipidosis
60 aspartylglucosaminuria
65 salla disease
65 sialidosis
65 galactosialidosis
70 multiple sulfatase deficiency
70 acid lipase deficiency|lal deficiency
70 cholesteryl ester storage disease
75 pycnodysostosis
75 neuronal ceroid lipofuscinosis
80 beta mannosidosis
80 natowicz syndrome
`,
"Name a disease linked to an HLA type":`
40 hla b27 uveitis
45 dermatitis herpetiformis
50 sjogren syndrome
55 pemphigus vulgaris
55 vitiligo
60 sarcoidosis
60 primary biliary cholangitis
60 autoimmune hepatitis
65 juvenile dermatomyositis
65 takayasu arteritis
65 giant cell arteritis
70 kawasaki disease
70 drug induced liver injury
70 flucloxacillin liver injury
75 phenytoin sjs
75 nevirapine hypersensitivity
75 clozapine agranulocytosis
80 hla b5801 allopurinol
80 hla a3101 carbamazepine
85 iga deficiency
`,
"Name an oncogene or tumor suppressor gene":`
40 her2 neu
45 rb1
50 bcl2
55 erbb1
55 hras
55 nras
60 abl
60 src
60 kit
60 pdgfra
65 fgfr3
65 ros1
65 ntrk
65 erg
65 tmprss2 erg
70 arid1a
70 bap1
70 fhit
70 cdh1
70 brca associated protein
70 ptch1
70 smo
75 sufu
75 men2
75 nf kappa b
75 hif
80 tert
80 atrx
80 daxx
80 h3k27m
85 dicer1
85 sdhb
85 sdhd
`,
"Name a cause of secondary hypertension":`
40 chronic kidney disease
45 glomerulonephritis
45 hyperaldosteronism
50 obstructive sleep apnea
50 aortic coarctation
55 renovascular disease
60 fibromuscular dysplasia
60 atherosclerotic renal artery stenosis
65 carcinoid
65 increased intracranial pressure
65 spinal cord injury
70 guillain barre
70 porphyria
75 lead poisoning
75 calcineurin inhibitors
75 tyramine with maoi
80 apparent mineralocorticoid excess
80 glucocorticoid remediable aldosteronism
80 11 beta hydroxylase deficiency
85 17 alpha hydroxylase deficiency
85 gordon syndrome
`,
"Name a cause of acute pancreatitis":`
40 alcohol use
45 gallstone pancreatitis
50 post ercp
55 hypertriglyceridemia
55 trauma to abdomen
60 azathioprine use
60 tetracyclines
60 metronidazole
65 mercaptopurine
65 sulfasalazine
65 mesalamine
70 ace inhibitors
70 statins
70 sglt2 inhibitors
75 hiv drugs
75 propofol
75 tamoxifen
80 pregnancy
80 penetrating ulcer
80 sphincter of oddi dysfunction
80 annular pancreas
85 ascariasis
85 clonorchis
85 legionella
85 mycoplasma
`,
"Name a drug that causes gynecomastia":`
40 marijuana use
45 heroin use
50 alcohol use
55 verapamil
55 nifedipine
60 amiodarone
60 phenytoin
60 metronidazole
65 tricyclic antidepressants
65 haloperidol
65 olanzapine
70 ranitidine
70 domperidone
70 hydroxyzine
75 highly active antiretroviral therapy|haart
75 stavudine
75 imatinib
80 methotrexate
80 cyclophosphamide
80 busulfan
80 diazepam
85 penicillamine
85 sulindac
85 theophylline
85 lavender oil
85 tea tree oil
`,
"Name a cause of digital clubbing":`
40 chronic lung infection
45 lung abscesses
50 ipf
55 asbestosis
60 pleural mesothelioma
60 cyanotic heart disease
65 tetralogy of fallot
65 eisenmenger syndrome
65 subacute bacterial endocarditis
70 biliary cirrhosis
70 hepatocellular carcinoma
70 gi lymphoma
75 colon cancer
75 thymoma
75 nasopharyngeal carcinoma
80 pachydermoperiostosis
80 hyperparathyroidism
`,
"Name a cause of ST elevation":`
40 acute pericarditis
45 coronary vasospasm
50 left ventricular aneurysm
55 benign early repolarization
60 hypercalcemia
60 pulmonary embolism
65 ventricular pacing
65 wpw
70 post cardioversion
70 cardiac contusion
70 tumor invading heart
75 hypothermia
75 raised intracranial pressure
80 cardiac amyloid
80 myocardial bridging
`,
"Name a cause of eosinophilia":`
40 drug allergy
45 atopic dermatitis
50 allergic rhinitis
55 chronic eosinophilic pneumonia
60 hookworm
60 echinococcus
65 fascioliasis
65 cysticercosis
65 anisakiasis
70 scabies
70 bullous pemphigoid
70 dermatitis herpetiformis
75 eosinophilic fasciitis
75 eosinophilic gastroenteritis
75 eosinophilic cystitis
80 tryptophan contamination|eosinophilia myalgia syndrome
80 toxic oil syndrome
80 kimura disease
80 angiolymphoid hyperplasia
85 atheroembolic disease
85 il 2 therapy
`,
"Name a paraneoplastic syndrome":`
40 hyponatremia
45 ectopic acth syndrome
50 hypertrophic pulmonary osteoarthropathy
55 lambert eaton myasthenic syndrome
60 sensory neuronopathy
60 subacute cerebellar degeneration
65 encephalomyelitis
65 polymyositis
70 erythrocytosis
70 thrombocytosis
70 eosinophilia
70 tumor fever
75 pruritus
75 acquired ichthyosis
75 erythema gyratum repens
80 tripe palms
80 hypertrichosis lanuginosa acquisita
80 bazex syndrome
85 necrolytic migratory erythema
85 stauffer syndrome
85 cushing ectopic crh
`,
"Name a cause of hemolytic anemia":`
40 aiha
45 warm autoimmune hemolytic anemia
50 drug induced hemolysis
55 hemolytic uremic syndrome
55 thrombotic thrombocytopenic purpura
60 disseminated intravascular coagulation
60 hereditary stomatocytosis
65 unstable hemoglobin
65 hemoglobin c disease
65 spider bite|brown recluse
70 copper toxicity
70 arsenic
70 lead poisoning
75 hypophosphatemia
75 zieve syndrome
80 ceftriaxone
80 cephalosporins
80 rasburicase
80 nitrofurantoin
85 levodopa
85 fava beans
`,
"Name a drug that causes drug-induced lupus":`
40 infliximab
45 adalimumab
45 etanercept
50 hydralazine use
55 procainamide use
60 captopril
60 enalapril
65 practolol
70 acebutolol
70 labetalol
75 chlorpromazine use
75 clonidine
75 isoniazid use
80 griseofulvin
80 nitrofurantoin
80 valproate
80 zonisamide
85 fluorouracil
85 capecitabine
85 gemcitabine
`,
"Name a cause of thrombocytopenia":`
40 heparin
45 pregnancy
50 viral infection
55 sepsis related
60 massive transfusion
60 hemodilution
65 aplastic crisis
65 paroxysmal nocturnal hemoglobinuria
65 cirrhosis
70 tmp smx
70 linezolid use
70 piperacillin
75 carbamazepine
75 phenytoin
75 gold salts
80 glycoprotein iib iiia inhibitors|eptifibatide|abciximab
80 checkpoint inhibitors
80 malaria
85 leptospirosis
85 rickettsia
85 hantavirus
`,
"Name an occupational lung exposure or disease":`
40 asthma from work
45 coal workers pneumoconiosis
50 hypersensitivity pneumonitis
55 caplan syndrome
60 silico tuberculosis
60 bauxite lung
65 graphite pneumoconiosis
65 kaolinosis
65 mica pneumoconiosis
70 nylon flock
70 cement dust
70 grain dust
75 sugar cane|bagasse
75 maple bark strippers lung
75 malt workers lung
80 wood dust
80 paprika splitters lung
85 hard metal lung disease
85 vineyard sprayers lung
`,
"Name a teratogen":`
40 retinoids
45 acitretin
50 ace inhibitor
55 arb
60 statins
60 tetracycline
65 phenobarbital
65 trimethadione
70 penicillamine
70 cyclophosphamide
70 busulfan
75 methylene blue in amniocentesis
75 iodine 131
80 toluene
80 parvovirus b19
80 lymphocytic choriomeningitis virus
85 venezuelan equine encephalitis
85 phenylketonuria maternal
`,
"Name a medical ethics or legal concept":`
40 respect for persons
45 veracity
45 fidelity
50 paternalism
55 shared decision making
55 therapeutic privilege
60 implied consent
60 emergency exception
65 substituted judgment
65 best interest standard
70 ethics committee
70 conscientious objection
70 physician assisted death|medical aid in dying
75 brain death
75 organ donation consent
75 research ethics|irb
80 belmont report
80 declaration of helsinki
80 nuremberg code
85 tuskegee study
85 stark exceptions
`,
});

addExtra({
/* ---- PANCE ---- */
"Name a cause of atrial fibrillation":`
40 thyrotoxicosis
45 binge drinking
50 valvular heart disease
55 hypertensive heart disease
55 left atrial enlargement
60 lung disease
60 hypoxia
65 hypothermia
65 infection
70 esophagectomy
70 thoracic surgery
75 amyloidosis
75 sarcoidosis
75 hemochromatosis
80 ibrutinib
80 adenosine
80 dobutamine
85 endurance sports
85 genetic channelopathy
`,
"Name an ECG abnormality":`
40 hyperacute t waves
45 poor r wave progression
50 right ventricular hypertrophy
50 right bundle branch block
50 left bundle branch block
55 left anterior fascicular block
55 left posterior fascicular block
60 atrial enlargement|p mitrale|p pulmonale
60 prolonged pr interval
65 accelerated idioventricular rhythm
65 idioventricular rhythm
70 asystole
70 pea|pulseless electrical activity
70 escape beats
75 ventricular bigeminy
75 trigeminy
75 fusion beats
80 capture beats
80 ashman phenomenon
85 lown ganong levine
85 aslanger pattern
`,
"Name a heart murmur or extra heart sound":`
40 systolic ejection murmur
45 holosystolic murmur
50 diastolic murmur
55 continuous murmur
60 flow murmur
60 coarctation murmur
65 pulmonary flow murmur
65 tricuspid stenosis
70 loud p2
70 wide split s2
75 pericardial knock
75 prosthetic valve click
80 still's murmur
80 hemic murmur
85 cardiorespiratory murmur
`,
"Name a cause of acute kidney injury":`
40 hypovolemia
45 shock
50 hypotension
55 obstructive uropathy
55 prostate enlargement
60 contrast nephropathy
60 cardiorenal syndrome
65 crush injury
65 hypercalcemia
70 ppis
70 acyclovir
70 methotrexate
75 iga nephropathy
75 lupus nephritis
75 goodpasture
75 anca vasculitis
80 malignant hypertension
80 scleroderma renal crisis
80 renal vein thrombosis
85 atheroembolic disease
85 hemoglobinuria
85 myoglobinuria
`,
"Name a pathogen that causes pneumonia":`
40 strep
45 staph
50 gram negative bacteria
55 atypical bacteria
60 fungi
60 viruses
65 mycobacterium avium complex
65 burkholderia cepacia
70 stenotrophomonas
70 enterobacter
70 serratia
75 rhodococcus
75 actinomyces
80 paragonimus
80 strongyloides
85 hendra virus
85 nipah virus
`,
"Name a cause of GI bleeding":`
40 bleeding ulcer
45 varices
50 diverticular bleed
55 colorectal cancer
60 hemorrhoidal bleeding
60 upper gi bleed
60 lower gi bleed
65 crohns disease
65 c diff colitis
70 nsaids
70 aspirin
70 warfarin
75 portal hypertensive gastropathy
75 esophageal cancer
80 hereditary hemorrhagic telangiectasia
80 blue rubber bleb nevus
85 hemosuccus pancreaticus
85 endometriosis of bowel
`,
"Name a cause of a red eye":`
40 bacterial conjunctivitis
45 viral conjunctivitis
50 allergic conjunctivitis
55 computer vision syndrome
60 sjogren syndrome
60 exposure keratopathy
65 bell palsy eye exposure
65 acanthamoeba keratitis
70 posterior uveitis
70 sympathetic ophthalmia
75 cluster headache
75 trichiasis
80 superior limbic keratoconjunctivitis
80 vernal keratoconjunctivitis
85 floppy eyelid syndrome
`,
"Name a cause of hearing loss":`
40 conductive hearing loss
45 sensorineural hearing loss
50 genetic hearing loss
55 viral infection
60 ear barotrauma
60 temporal bone fracture
65 vasculitis
65 diabetes
70 hypothyroidism
70 sickle cell disease
75 kidney failure
75 neurofibromatosis type 2
80 jervell lange nielsen
80 large vestibular aqueduct
85 auditory neuropathy
85 superior canal dehiscence
`,
"Name a cause of syncope":`
40 fainting spell
45 emotional stress
50 standing up quickly
55 heat
60 vasovagal syncope
60 neurocardiogenic
65 hypovolemia
65 anemia
70 mitral stenosis
70 pulmonary hypertension
75 cough syncope
75 swallow syncope
80 glossopharyngeal neuralgia
80 hypertrophic obstructive cardiomyopathy
85 catecholaminergic polymorphic vt
85 arrhythmogenic right ventricular cardiomyopathy
`,
"Name a cause of pleural effusion":`
40 parapneumonic effusion
45 malignant effusion
50 transudate
50 exudate
55 hypothyroid effusion
60 pancreatic pseudocyst
60 ovarian hyperstimulation
65 yellow nail syndrome
65 lymphangioleiomyomatosis
70 urinothorax
70 central line extravasation
75 drug induced|dantrolene|nitrofurantoin
75 bromocriptine
80 sarcoidosis effusion
80 benign asbestos effusion
85 trapped lung
85 cholesterol effusion
`,
"Name a cause of hyponatremia":`
40 low sodium diet
45 overhydration
50 thiazide diuretics
55 hypovolemia
55 vomiting and diarrhea
60 burns
60 pancreatitis
65 adrenal crisis
65 hypopituitarism
70 brain tumor
70 subarachnoid hemorrhage
75 oxcarbazepine
75 vincristine
75 chlorpropamide
80 nsaids
80 ppis
85 reset osmostat
85 porphyria
`,
"Name a cause of hypothyroidism":`
40 autoimmune thyroiditis
45 thyroid surgery
50 radiation
55 postpartum
60 iodine
60 pituitary tumor
65 hypothalamic disease
65 lymphocytic hypophysitis
70 cystinosis
70 scleroderma
75 ipilimumab
75 nivolumab
75 pembrolizumab
80 sunitinib
80 sorafenib
85 thyroid hormone resistance
85 consumptive hypothyroidism
`,
"Name a symptom of major depression":`
40 feeling empty
45 low self esteem
50 anxiety
55 restlessness
60 slowed thinking
60 memory problems
65 headaches
65 back pain
70 digestive problems
70 neglecting hygiene
75 self harm
75 substance use
80 rumination
80 diurnal variation
85 mood congruent delusions
85 catatonia
`,
"Name a cause of secondary amenorrhea":`
40 premature menopause
45 hypothalamic dysfunction
50 eating disorder
55 weight loss
60 chronic illness
60 tumors
65 ovarian tumor
65 adrenal tumor
70 kidney failure
70 liver failure
75 opioids
75 metoclopramide
75 risperidone
80 radiation to pelvis
80 tuberculosis endometritis
85 savage syndrome
85 cervical stenosis
`,
"Name a pediatric orthopedic condition":`
40 hip dysplasia infant
45 pulled elbow
50 club foot
55 sports injury
60 growing pains
60 bowlegs
65 spina bifida
65 cerebral palsy contractures
70 osteoid osteoma
70 unicameral bone cyst
75 discoid meniscus
75 freiberg disease
80 kyphosis|scheuermann
80 klippel feil
85 arthrogryposis
85 achondroplasia
`,
"Name a classic chest X-ray finding":`
40 pulmonary edema
45 hilar enlargement
50 pneumonia infiltrate
55 lobar collapse
60 mass|lung mass
60 nodule|coin lesion
65 pneumomediastinum
65 subcutaneous emphysema
70 diaphragm elevation
70 tracheal deviation
75 hiatal hernia
75 cephalization
80 sail sign
80 spinnaker sign
85 scimitar sign
85 luftsichel sign
`,
"Name a contraindication to estrogen-containing birth control":`
40 breastfeeding under 6 weeks
45 hypertension
50 high blood pressure over 160
55 dvt history
60 complicated diabetes
60 heart attack history
65 ischemic heart disease
65 smoker over 35
70 sickle cell disease
70 cirrhosis
75 hepatocellular adenoma
75 budd chiari
80 rifampin use
80 lamotrigine monotherapy
85 solid organ transplant complicated
`,
/* ---- NP boards ---- */
"Name a USPSTF-recommended screening":`
40 colonoscopy at 45
45 mammogram every 2 years
50 pap every 3 years
55 hpv cotesting
60 low dose ct for smokers
60 hiv screening 15 to 65
65 hepatitis c 18 to 79
65 dexa for women 65
70 aaa ultrasound for male smokers
70 diabetes screening 35 to 70
75 hearing in newborns
75 hemoglobinopathies in newborns
80 amblyopia in children
80 depression in adolescents
85 unhealthy drug use
85 skin cancer counseling
`,
"Name a vaccine on the childhood schedule":`
40 dtap ipv
45 hep a
50 hep b
55 measles
55 mumps
55 rubella
60 tetanus
60 diphtheria
60 pertussis
65 pcv20
65 pcv15
70 menacwy
70 menb
75 mmrv|proquad
75 pediarix
75 pentacel
80 vaxelis
80 kinrix
85 rotateq
85 rotarix
`,
"Name a developmental red flag in a child":`
40 speech delay
45 no babbling
50 not crawling
55 poor feeding
60 seizures
60 abnormal gait
65 lack of joint attention
65 hand flapping
70 lining up toys
70 echolalia
75 sensory sensitivity
75 no interest in other children
80 persistent fisting after 3 months
80 scissoring legs
85 failure to fix and follow
`,
"Name a cause of vaginitis or vaginal discharge":`
40 bacterial vaginosis
45 yeast
50 trichomonas
55 sexually transmitted infection
60 antibiotics
60 pregnancy
65 menopause
65 douching
70 spermicide
70 latex allergy
75 soaps
75 bubble baths
80 tampon
80 diabetes
85 rectovaginal fistula
`,
"Name a symptom of menopause":`
40 irregular menstruation
45 hot flushes
50 vaginal atrophy
55 mood changes
60 irritability
60 decreased concentration
65 muscle aches
65 weight gain around the waist
70 dry eyes
70 tinnitus
75 burning mouth
75 formication
80 itchy skin
80 body odor changes
85 electric shock sensations
`,
"Name a routine prenatal lab or test":`
40 cbc and platelets
45 rh factor
50 urine protein
55 urine glucose
60 one hour glucose test
60 three hour glucose test
65 hiv testing
65 rpr
70 hepatitis b surface antigen
70 rubella titer
75 gbs swab at 36 weeks
75 cell free dna
80 alpha fetoprotein|msafp
80 fetal echocardiogram
85 doppler studies
`,
"Name a geriatric syndrome":`
40 cognitive impairment
45 incontinence
50 frailty syndrome
55 weight loss
60 immobility
60 gait disorder
65 iatrogenesis
65 elder neglect
70 loneliness
70 hoarding
75 squalor|diogenes syndrome
75 dehydration
80 hypothermia
80 sundowning
85 hip fracture
`,
"Name a red flag for low back pain":`
40 cancer history
45 unexplained weight loss
50 fever and chills
55 incontinence
60 urinary retention
60 numbness in the groin
65 leg weakness
65 morning stiffness over 30 minutes
70 young age under 20
70 thoracic pain
75 chest pain
75 recent spinal procedure
80 hiv
80 tuberculosis exposure
85 abdominal aortic aneurysm
`,
"Name a red flag for headache":`
40 sudden onset
45 fever
50 stiff neck
55 focal deficit
60 age over 50
60 new onset
65 trauma
65 pregnancy
70 immunocompromised
70 cancer
75 headache with exertion
75 headache with sex
80 temporal artery tenderness
80 vision changes
85 papilledema on exam
`,
"Name a lifestyle change that lowers blood pressure":`
40 eat less salt
45 more exercise
50 lose weight
55 drink less alcohol
60 stop smoking
60 eat more vegetables
65 reduce stress
65 sleep 7 to 9 hours
70 aerobic exercise
70 resistance training
75 limit red meat
75 low fat dairy
80 beetroot juice
80 dark chocolate
85 breathing exercises
85 tai chi
`,
"Name a cause of chronic diarrhea":`
40 inflammatory bowel disease
45 infection
50 parasites
55 food intolerance
60 fructose intolerance
60 artificial sweeteners
65 ppi
65 ssris
70 magnesium
70 antibiotics
75 post cholecystectomy
75 bariatric surgery
80 amyloidosis
80 mastocytosis
85 tropical sprue
85 brainerd diarrhea
`,
"Name a childhood rash or exanthem":`
40 viral exanthem
45 varicella
50 rubeola
55 erythema infectiosum
60 sixth disease
60 fourth disease
65 hand foot mouth
65 coxsackie
70 molluscum contagiosum
70 pityriasis alba
75 seborrheic dermatitis
75 keratosis pilaris
80 papular urticaria
80 juvenile dermatomyositis
85 langerhans cell histiocytosis
`,
"Name a cause of sore throat":`
40 pharyngitis
45 tonsillar infection
50 sinus drainage
55 mouth breathing
60 snoring
60 chemical irritants
65 foreign body
65 thyroid problems
70 candida
70 chlamydia
75 mycoplasma
75 adenovirus
80 arcanobacterium
80 fusobacterium
85 eagle syndrome
85 glossopharyngeal neuralgia
`,
"Name a health promotion counseling topic":`
40 diet and exercise
45 healthy weight
50 sexual health
55 seatbelt use
60 sunscreen
60 skin protection
65 drunk driving
65 texting and driving
70 sports safety
70 water safety
75 gun storage
75 window safety
80 lead exposure
80 radon
85 noise protection
`,
"Name a health behavior or nursing theory used in NP practice":`
40 transtheoretical model
45 maslow
50 orem
55 pender
60 social learning theory
60 behavioral theory
65 roy
65 neuman
70 king
70 rogers
75 johnson behavioral system
75 parse human becoming
80 newman health as expanding consciousness
80 kolcaba comfort
85 mishel uncertainty
85 swanson caring
`,
"Name an NP professional practice or legal concept":`
40 malpractice insurance
45 npi number
50 state license
55 national certification
60 dea license
60 controlled substance prescribing
65 hipaa privacy
65 informed consent process
70 documentation
70 coding and billing
75 risk management
75 incident reports
80 quality improvement
80 interprofessional collaboration
85 health policy advocacy
85 nurse licensure compact
`,
"Name a risk factor for osteoporosis":`
40 early menopause
45 thin build
50 family history of fracture
55 low bmi
60 inactivity
60 caffeine
65 soda
65 vitamin d deficiency
70 eating disorders
70 thyroid hormone excess
75 cushing syndrome
75 hyperthyroid
80 epilepsy medications
80 thiazolidinediones
85 sglt2 inhibitors
85 heparin long term
`,
"Name a cause of urinary incontinence":`
40 stress incontinence
45 urge incontinence
50 overflow incontinence
55 functional incontinence
60 weak pelvic floor
60 nerve damage
65 bladder stones
65 bladder cancer
70 interstitial cystitis
70 hysterectomy
75 alpha blockers
75 anticholinergics
80 ace inhibitor cough
80 heart failure
85 spina bifida
`,
"Name a cause of itching (pruritus)":`
40 hives
45 allergic reaction
50 insect bites
55 chickenpox
60 eczema flare
60 sunburn
65 dry winter skin
65 detergents
70 wool
70 nickel allergy
75 cholestasis
75 primary biliary cholangitis
80 hodgkin lymphoma
80 aquagenic pruritus
85 delusional parasitosis
85 prurigo nodularis
`,
});

addExtra({
/* ---- NCLEX ---- */
"Name a sign of digoxin toxicity":`
40 abdominal discomfort
45 anorexia
50 slow pulse
55 irregular pulse
60 halos around lights
60 green yellow halos
65 color vision changes
65 lethargy
70 drowsiness
70 depression
75 av block
75 junctional rhythm
80 ventricular tachycardia
80 ventricular fibrillation
85 accelerated junctional rhythm
`,
"Name a sign of lithium toxicity":`
40 nausea and vomiting
45 hand tremor
50 slurred speech
55 sedation
60 muscle weakness
60 lack of coordination
65 confusion
65 agitation
70 myoclonus
70 hyperreflexia
75 sinus node dysfunction
75 bradycardia
80 renal failure
80 nephrogenic diabetes insipidus
85 serotonin like syndrome
`,
"Name a food high in tyramine (avoid with MAOIs)":`
40 aged meats
45 fermented foods
50 smoked meats
55 pickled foods
60 tap beer
60 draft beer
65 home brewed beer
65 aged cheddar
70 camembert
70 stilton
75 gorgonzola
75 swiss cheese
80 dry sausage
80 corned beef
85 broad bean pods
85 overripe fruit
`,
"Name a food high in potassium":`
40 white beans
45 black beans
50 lima beans
55 acorn squash
60 butternut squash
60 baked potato
65 french fries
65 potato chips
70 pumpkin
70 artichoke
75 parsnips
75 edamame
80 plantains
80 jackfruit
85 nectarines
85 mango
`,
"Name a food high in vitamin K (affects warfarin)":`
40 leafy greens
45 green leafy vegetables
50 spinach salad
55 kale chips
60 beet greens
60 dandelion greens
65 endive
65 scallions
70 celery
70 cucumber peel
75 pickles
75 soybeans
80 olive oil
80 cashews
85 pine nuts
85 matcha
`,
"Name a medication to hold for a heart rate under 60":`
40 metoprolol tartrate
45 metoprolol succinate
50 lopressor
55 toprol
60 cardizem
60 calan
65 lanoxin
65 coreg
70 tenormin
70 inderal
75 pacerone
75 cordarone
80 multaq
80 corlanor
85 adenosine
`,
"Name a sign of increased intracranial pressure":`
40 decreased loc
45 lethargy
50 unequal pupils
55 sluggish pupils
60 nausea
60 projectile vomit
65 widening pulse pressure
65 irregular breathing
70 abnormal posturing
70 seizure activity
75 altered speech
75 blurry vision
80 bulging fontanel
80 macewen sign
85 parinaud syndrome
`,
"Name a sign of low calcium":`
40 numbness around mouth|perioral numbness
45 tingling fingers
50 muscle spasms
55 positive chvostek
60 positive trousseau
60 hyperreflexia
65 prolonged qt interval
65 heart failure
70 hypotension
70 depression
75 irritability
75 psychosis
80 papilledema
80 basal ganglia calcification
85 dental hypoplasia
`,
"Name a sign of high potassium":`
40 tall t waves
45 muscle cramps
50 weakness
55 numbness
60 tingling
60 nausea and vomiting
65 irregular heartbeat
65 slow heart rate
70 heart block
70 wide qrs complex
75 loss of p waves
75 sine wave pattern
80 asystole
80 flaccid paralysis
85 respiratory failure
`,
"Name a sign of magnesium sulfate toxicity":`
40 absent patellar reflex
45 decreased respiratory rate
50 respirations under 12
55 urine output under 30
60 low blood pressure
60 drowsiness
65 slurred speech
65 blurred vision
70 muscle paralysis
70 cardiac arrhythmia
75 prolonged pr
75 widened qrs
80 respiratory arrest
85 coma
`,
"Name a sign of compartment syndrome":`
40 severe pain
45 pain unrelieved by opioids
50 burning pain
55 tense compartment
60 swollen limb
60 numb limb
65 tingling extremity
65 cool extremity
70 pale extremity
70 weak pulse
75 loss of movement
75 weakness of the limb
80 delayed cap refill
80 increased creatinine kinase
85 myoglobinuria
`,
"Name a danger sign in pregnancy":`
40 bleeding
45 headache that won't go away
50 seeing spots
55 sudden swelling
60 high fever
60 severe nausea
65 no fetal movement
65 gush of fluid
70 regular contractions
70 cramping
75 pain with urination
75 fainting
80 vision loss
80 seizure
85 confusion
`,
"Name a sign of fluid volume overload":`
40 crackles in lungs
45 pitting edema
50 weight gain overnight
55 distended jugular veins
60 bounding pulses
60 shortness of breath
65 high blood pressure
65 cough
70 pink frothy sputum
70 tachypnea
75 polyuria
75 dilute urine
80 decreased hematocrit
80 decreased bun
85 decreased osmolality
`,
"Name a contraindication for an MRI":`
40 shrapnel
45 metal fragments
50 implanted pump
55 cochlear implants
60 deep brain stimulator
60 spinal cord stimulator
65 vagus nerve stimulator
65 heart valve older
70 metal stents recent
70 bullet fragments
75 gadolinium allergy
75 severe kidney disease
80 implanted loop recorder
80 transdermal patch
85 tattoo eyeliner
`,
"Name a trigger of autonomic dysreflexia":`
40 bladder full
45 catheter blockage
50 urinary tract infection
55 bowel impaction
60 skin irritation
60 pressure ulcer
65 hot or cold
65 bumped toes
70 restrictive clothing
70 sex
75 procedures
75 cystoscopy
80 bladder stones
80 appendicitis
85 gastric ulcer
`,
"Name a sign of anaphylaxis":`
40 throat swelling
45 lip swelling
50 face swelling
55 difficulty swallowing
60 shortness of breath
60 chest tightness
65 hypotension
65 fainting
70 rapid pulse
70 weak pulse
75 confusion
75 anxiety
80 cool clammy skin
80 urticaria
85 biphasic reaction
`,
"Name a side effect of long-term corticosteroids":`
40 weight gain
45 high blood sugar
50 bone loss
55 thin skin
60 easy bruising
60 infections
65 muscle weakness
65 peptic ulcer
70 cataract
70 glaucoma
75 insomnia
75 mood swings
80 hypertension
80 edema
85 steroid psychosis
`,
"Name a sign of thyroid storm or hyperthyroidism":`
40 high fever
45 rapid heartbeat
50 hand tremor
55 nervousness
60 sweating
60 heat intolerance
65 weight loss despite appetite
65 frequent bowel movements
70 thin skin
70 brittle hair
75 lid lag
75 stare
80 pretibial myxedema
80 onycholysis
85 periodic paralysis
`,
"Name a sign of Cushing syndrome":`
40 moon facies
45 central obesity
50 abdominal striae
55 hypertension
60 glucose intolerance
60 muscle wasting
65 easy bruising
65 thin skin
70 acne
70 hirsutism
75 irregular periods
75 low libido
80 kidney stones
80 polyuria
85 avascular necrosis
`,
"Name a sign of Addison disease or adrenal crisis":`
40 low blood pressure
45 salt cravings
50 darkening of skin
55 fatigue
60 weight loss
60 low blood sugar
65 high potassium
65 low sodium
70 nausea
70 vomiting
75 abdominal pain
75 muscle aches
80 confusion
80 shock
85 vitiligo
`,
"Name a sign of meningitis":`
40 neck stiffness
45 high fever
50 sensitivity to light
55 severe headache
60 confusion
60 vomiting
65 purple rash
65 petechiae
70 seizure
70 drowsiness
75 positive kernig
75 positive brudzinski
80 jolt accentuation
80 papilledema
85 sixth nerve palsy
`,
"Name a sign of preeclampsia":`
40 bp over 140 90
45 bp over 160 110
50 headache
55 vision changes
60 swelling face
60 swelling hands
65 rapid weight gain
65 upper abdominal pain
70 nausea vomiting
70 shortness of breath
75 low platelets
75 high liver enzymes
80 oliguria
80 hyperreflexia
85 placental abruption
`,
"Name a neutropenic precaution":`
40 handwashing
45 private room
50 no flowers
55 no fresh fruit
60 mask
60 no sick visitors
65 no rectal medications
65 no live vaccines
70 no raw meat
70 no raw eggs
75 no sushi
75 soft toothbrush
80 avoid crowds
80 no pets
85 daily skin assessment
`,
"Name a hip replacement precaution":`
40 don't cross legs
45 don't bend over
50 avoid low chairs
55 use raised toilet seat
60 abduction wedge
60 pillow between legs
65 don't twist
65 no internal rotation
70 use reacher
70 sock aid
75 long handled sponge
75 walker
80 car transfer technique
80 sleep on back
85 no kneeling
`,
/* ---- NAPLEX ---- */
"Name a CYP3A4 inducer":`
40 rifampicin
45 tegretol
50 dilantin
55 phenobarbitone
60 st john's wort
60 efavirenz
65 rifabutin
65 nevirapine
70 bosentan
70 modafinil
75 prednisone
75 phenylbutazone
80 troglitazone
80 lumacaftor ivacaftor
85 dabrafenib
85 encorafenib
`,
"Name a strong CYP3A4 inhibitor":`
40 grapefruit
45 itraconazole
50 clarithromycin
55 ritonavir
60 cobicistat
60 ketoconazole
65 voriconazole
65 posaconazole
70 nefazodone
70 erythromycin
75 diltiazem
75 verapamil
80 tucatinib
80 ribociclib
85 lonafarnib
85 mibefradil
`,
"Name a drug that causes gingival hyperplasia":`
40 dilantin
45 sandimmune|neoral
50 procardia
55 norvasc
60 calan
60 cardizem
65 depakote
65 luminal
70 prograf
70 lamictal
75 topamax
75 sabril
80 zarontin
80 plendil
85 rapamune
`,
"Name a drug with a REMS program":`
40 accutane
45 clozaril
50 thalomid
55 revlimid
60 pomalyst
60 cellcept
65 xyrem
65 xywav
70 tracleer
70 letairis
75 opsumit
75 adempas
80 spravato
80 sublocade
85 zulresso
`,
"Name a drug that needs renal dose adjustment":`
40 keppra
45 neurontin
50 lyrica
55 lovenox
60 eliquis
60 xarelto
65 pradaxa
65 levaquin
70 cipro
70 valtrex
75 zovirax
75 tamiflu|oseltamivir
80 januvia
80 entresto
85 tenofovir disoproxil
`,
"Name a drug that causes hyperkalemia":`
40 lisinopril
45 losartan
50 aldactone
55 bactrim
60 heparin
60 tacrolimus
65 cyclosporine
65 nsaid
70 ibuprofen
70 naproxen
75 digoxin overdose
75 succinylcholine
80 potassium penicillin
80 yaz|drospirenone
85 nafamostat
`,
"Name a drug that can cause serotonin syndrome":`
40 sertraline
45 fluoxetine
50 paroxetine
55 citalopram
60 escitalopram
60 venlafaxine
65 duloxetine
65 tramadol
70 linezolid
70 methylene blue
75 sumatriptan
75 rizatriptan
80 fentanyl
80 meperidine
85 dextromethorphan
`,
"Name a photosensitizing drug":`
40 doxycycline
45 tetracycline
50 minocycline
55 ciprofloxacin
60 levofloxacin
60 bactrim
65 hydrochlorothiazide
65 furosemide
70 amiodarone
70 naproxen
75 piroxicam
75 isotretinoin
80 tretinoin
80 voriconazole
85 methoxsalen
`,
"Name a narrow therapeutic index drug":`
40 coumadin
45 lanoxin
50 lithobid
55 dilantin
60 synthroid
60 tegretol
65 depakote
65 vancomycin
70 gentamicin
70 tobramycin
75 prograf
75 neoral
80 theophylline
80 phenobarbital
85 busulfan
`,
"Name a drug that discolors urine":`
40 pyridium
45 azo
50 rifampin
55 methylene blue
60 nitrofurantoin
60 metronidazole
65 levodopa
65 propofol
70 riboflavin
70 doxorubicin
75 senna
75 phenytoin
80 amitriptyline
80 methocarbamol
85 hydroxocobalamin
`,
"Name an ototoxic drug":`
40 gentamicin
45 tobramycin
50 amikacin
55 streptomycin
60 neomycin
60 vancomycin
65 furosemide
65 bumetanide
70 ethacrynic acid
70 cisplatin
75 carboplatin
75 aspirin
80 quinine
80 hydroxychloroquine
85 deferoxamine
`,
"Name a nephrotoxic drug":`
40 ibuprofen
45 naproxen
50 gentamicin
55 vancomycin
60 amphotericin
60 iv contrast
65 cisplatin
65 lithium
70 tacrolimus
70 cyclosporine
75 acyclovir
75 tenofovir
80 foscarnet
80 cidofovir
85 polymyxin b
`,
"Name a hepatotoxic drug":`
40 tylenol
45 isoniazid
50 rifampin
55 pyrazinamide
60 statins
60 amiodarone
65 methotrexate
65 valproate
70 ketoconazole
70 augmentin
75 nitrofurantoin
75 phenytoin
80 carbamazepine
80 halothane
85 tolcapone
`,
"Name a prodrug":`
40 codeine to morphine
45 plavix
50 enalapril
55 valtrex
60 levodopa
60 prednisone
65 tamiflu
65 tramadol
70 vyvanse
70 cyclophosphamide
75 ppi
75 losartan
80 azathioprine
80 fosphenytoin
85 capecitabine
`,
"Name a drug that causes Stevens-Johnson syndrome":`
40 lamictal
45 bactrim
50 tegretol
55 allopurinol
60 dilantin
60 nevirapine
65 phenobarbital
65 penicillin
70 cephalosporin
70 nsaid
75 modafinil
75 oxcarbazepine
80 fluoroquinolone
80 sulfasalazine
85 abacavir
`,
"Name a drug that interacts with grapefruit juice":`
40 zocor
45 lipitor
50 mevacor
55 felodipine
60 nifedipine
60 amiodarone
65 cyclosporine
65 tacrolimus
70 buspirone
70 sildenafil
75 midazolam
75 triazolam
80 carbamazepine
80 quetiapine
85 colchicine
`,
"Name a drug that causes hypoglycemia":`
40 insulin
45 glipizide
50 glyburide
55 glimepiride
60 sulfonylurea
60 repaglinide
65 nateglinide
65 levofloxacin
70 alcohol
70 beta blockers
75 quinine
75 pentamidine
80 bactrim
80 salicylates
85 octreotide
`,
"Name a drug that causes orthostatic hypotension":`
40 prazosin
45 doxazosin
50 terazosin
55 tamsulosin
60 nitroglycerin
60 isosorbide
65 diuretics
65 tricyclics
70 antipsychotics
70 levodopa
75 trazodone
75 opioids
80 sildenafil
80 tadalafil
85 clonidine
`,
"Name a drug that commonly causes weight gain":`
40 insulin
45 prednisone
50 olanzapine
55 mirtazapine
60 quetiapine
60 clozapine
65 glipizide
65 pioglitazone
70 depakote
70 lithium
75 gabapentin
75 lyrica
80 risperidone
80 paxil
85 depo provera
`,
"Name a drug on the Beers list":`
40 benadryl
45 benzodiazepines
50 hydroxyzine
55 ambien
60 amitriptyline
60 flexeril
65 glyburide
65 sliding scale insulin
70 demerol
70 nsaids
75 digoxin
75 phenergan
80 meclizine
80 bentyl
85 ditropan
`,
"Name a drug that causes agranulocytosis":`
40 clozaril
45 tapazole
50 ptu
55 tegretol
60 azulfidine
60 dapsone
65 bactrim
65 procainamide
70 chloramphenicol
70 ticlid
75 dipyrone
75 deferiprone
80 levamisole
80 ganciclovir
85 colchicine
`,
"Name a drug that causes peripheral neuropathy":`
40 oncovin
45 isoniazid
50 flagyl
55 cisplatin
60 taxol
60 velcade
65 thalomid
65 cipro
70 macrobid
70 zyvox
75 eloxatin
75 zerit
80 videx
80 dilantin
85 cordarone
`,
"Name a dosage form that should not be crushed":`
40 extended release tablets
45 enteric coated tablets
50 sustained release capsules
55 controlled release tablets
60 xl tablets
60 er capsules
65 delayed release capsules
65 odt
70 sublingual
70 buccal
75 la
75 cr
80 sr
80 dr
85 abuse deterrent
`,
});

addExtra({
/* ---- DENTAL BOARDS ---- */
"Name a condition needing antibiotic prophylaxis before dental work":`
40 artificial valve
45 history of endocarditis
50 cardiac transplant valvulopathy
55 cyanotic heart disease
60 prosthetic material repair
60 ventricular assist device
65 transcatheter valve replacement
65 valve repair with prosthetic ring
70 recent joint replacement
70 sickle cell disease
75 immunocompromised
75 neutropenia
80 asplenia
80 high risk joint patient
85 hemodialysis graft
`,
"Name an odontogenic cyst":`
40 radicular cyst
45 periapical cyst
50 follicular cyst
55 keratocyst
60 eruption cyst
60 residual cyst
65 lateral periodontal cyst
65 glandular odontogenic cyst
70 calcifying odontogenic cyst
70 botryoid cyst
75 dental lamina cyst
75 gingival cyst
80 paradental cyst
80 buccal bifurcation cyst
85 orthokeratinized odontogenic cyst
`,
"Name an odontogenic tumor":`
40 compound odontoma
45 complex odontoma
50 unicystic ameloblastoma
55 peripheral ameloblastoma
60 myxoma
60 cementoblastoma
65 ameloblastic fibroma
65 adenomatoid odontogenic tumor
70 pindborg tumor
70 squamous odontogenic tumor
75 odontogenic fibroma
75 ameloblastic carcinoma
80 clear cell odontogenic carcinoma
80 ghost cell tumor
85 odontoameloblastoma
`,
"Name a developmental anomaly of teeth":`
40 extra teeth
45 missing teeth
50 small teeth
55 large teeth
60 fused teeth
60 twin teeth
65 bent root
65 bulbous crown
70 enamel defects
70 dentin defects
75 shell teeth
75 pink tooth
80 evaginated odontome
80 leong premolar
85 shovel shaped incisors
`,
"Name a bacterium linked to caries or periodontal disease":`
40 mutans streptococci
45 lactobacilli
50 actinomyces viscosus
55 actinomyces naeslundii
60 a actinomycetemcomitans
60 p gingivalis
65 t forsythia
65 t denticola
70 p intermedia
70 f nucleatum
75 e corrodens
75 c rectus
80 peptostreptococcus
80 prevotella nigrescens
85 synergistetes
`,
"Name a drug that causes dry mouth":`
40 benadryl
45 amitriptyline
50 oxybutynin
55 antipsychotic
60 diuretic
60 opioid
65 decongestant
65 benzodiazepine
70 beta blocker
70 muscle relaxant
75 atropine
75 scopolamine
80 ssri
80 clonidine
85 bupropion
`,
"Name a medical emergency in the dental office":`
40 syncope
45 anaphylaxis
50 low blood sugar
55 asthma
60 seizure
60 angina
65 heart attack
65 hyperventilation syndrome
70 choking
70 local anesthetic overdose
75 stroke
75 cardiac arrest
80 epinephrine reaction
80 allergic reaction to latex
85 adrenal insufficiency
`,
"Name an item in a dental emergency kit":`
40 epinephrine auto injector
45 oxygen tank
50 defibrillator
55 nitroglycerin spray
60 albuterol inhaler
60 aspirin
65 glucose gel
65 benadryl
70 ammonia ampules
70 ambu bag
75 versed
75 narcan
80 romazicon
80 atropine
85 succinylcholine
`,
"Name a warning sign of oral cancer":`
40 non healing sore
45 white lesion
50 red lesion
55 lump in mouth
60 lump in neck
60 unexplained bleeding
65 numb lip
65 numb tongue
70 trouble swallowing
70 voice changes
75 loose tooth
75 ear pain
80 trismus
80 weight loss
85 persistent halitosis
`,
"Name a salivary gland disorder":`
40 parotitis
45 salivary stones
50 dry mouth
55 sjogren
60 mucocele
60 ranula
65 pleomorphic adenoma
65 warthin tumor
70 mucoepidermoid carcinoma
70 adenoid cystic carcinoma
75 acinic cell carcinoma
75 sialadenitis
80 sialorrhea
80 frey syndrome
85 mikulicz disease
`,
"Name a cause of tooth discoloration":`
40 coffee stains
45 tea stains
50 wine stains
55 smoking stains
60 tetracycline staining
60 fluorosis
65 dead tooth
65 root canal
70 amalgam
70 chlorhexidine
75 minocycline
75 iron
80 aging
80 trauma
85 porphyria
`,
"Name a radiolucent jaw lesion":`
40 radicular cyst
45 periapical cyst
50 follicular cyst
55 keratocyst
60 ameloblastoma
60 lateral periodontal cyst
65 residual cyst
65 simple bone cyst
70 giant cell granuloma
70 stafne defect
75 nasopalatine cyst
75 aneurysmal bone cyst
80 odontogenic myxoma
80 brown tumor
85 central hemangioma
`,
"Name a radiopaque jaw lesion":`
40 odontome
45 torus mandibularis
50 torus palatinus
55 condensing osteitis
60 bone scar
60 cementoblastoma
65 exostoses
65 retained root
70 impacted tooth
70 salivary stone
75 cemento osseous dysplasia
75 ossifying fibroma
80 fibrous dysplasia
80 osteoma
85 osteosarcoma
`,
"Name a reason to limit epinephrine in local anesthetic":`
40 high blood pressure
45 heart attack within 6 months
50 unstable angina
55 hyperthyroidism
60 arrhythmia
60 pheochromocytoma
65 cocaine
65 stroke within 6 months
70 propranolol
70 tricyclics
75 sulfite allergy
75 recent heart surgery
80 heart failure
80 maoi
85 general anesthesia with halothane
`,
"Name a contraindication to nitrous oxide sedation":`
40 first trimester pregnancy
45 copd
50 stuffy nose
55 pneumothorax
60 bowel obstruction
60 ear surgery
65 eye surgery with gas
65 b12 deficiency
70 claustrophobia
70 psychiatric illness
75 mthfr
75 bleomycin
80 sinusitis
80 substance abuse
85 uncooperative patient
`,
"Name a G.V. Black caries class or principle":`
40 class 1
45 class 2
50 class 3
55 class 4
60 class 5
60 class 6
65 outline
65 resistance
70 retention
70 convenience
75 caries removal
75 enamel wall finishing
80 debridement
80 extension for prevention
85 black's classification
`,
"Name a risk factor for periodontal disease":`
40 tobacco
45 diabetes mellitus
50 plaque
55 genetic predisposition
60 stress
60 pregnancy
65 puberty
65 menopause
70 medications
70 malnutrition
75 hiv
75 aging
80 obesity
80 grinding
85 crowded teeth
`,
"Name a syndrome with dental manifestations":`
40 down syndrome
45 ectodermal dysplasia
50 cleidocranial dysplasia
55 gardner syndrome
60 papillon lefevre syndrome
60 treacher collins syndrome
65 pierre robin sequence
65 apert syndrome
70 crouzon syndrome
70 peutz jeghers syndrome
75 gorlin syndrome
75 van der woude syndrome
80 williams syndrome
80 marfan syndrome
85 ehlers danlos syndrome
`,
"Name a tooth deposit or stain":`
40 plaque
45 tartar
50 calculus
55 food debris
60 materia alba
60 pellicle
65 tobacco stain
65 coffee stain
70 green stain
70 black stain
75 orange stain
75 chlorhexidine stain
80 metallic stain
80 tetracycline stain
85 fluorosis
`,
"Name a type of fluoride":`
40 sodium fluoride
45 stannous fluoride
50 fluoride varnish
55 water fluoridation
60 fluoride toothpaste
60 apf gel
65 silver diamine fluoride
65 fluoride gel
70 fluoride foam
70 fluoride mouthwash
75 fluoride tablets
75 fluoride drops
80 monofluorophosphate
80 amine fluoride
85 fluoridated salt
`,
/* ---- standard DENTAL (thin ones) ---- */
"Name a type of tooth":`
40 front tooth|front teeth
45 back tooth|back teeth
50 eye teeth
55 bicuspid
60 upper central incisor
60 lower central incisor
65 upper lateral incisor
65 lower lateral incisor
70 upper canine
70 lower canine
75 upper first molar
75 lower first molar
80 upper second molar
80 lower second molar
85 shovel shaped incisor
`,
"Name a dental specialty":`
40 braces specialist
45 gum specialist
50 root canal specialist
55 kids dentist
60 denture specialist
60 implant specialist
65 tmj specialist
65 oral surgeon
70 oral pathologist
70 oral radiologist
75 public health dentist
75 dental anesthesiologist
80 oral medicine specialist
80 orofacial pain specialist
85 forensic odontologist
`,
"Name a symptom of a TMJ disorder":`
40 jaw clicking
45 jaw popping
50 jaw locking
55 jaw pain when chewing
60 pain in front of ear
60 earache
65 headaches
65 neck aches
70 tired jaw
70 limited mouth opening
75 grinding teeth
75 clenching
80 tooth sensitivity
80 face pain
85 dizziness
`,
"Name a type of malocclusion":`
40 overbite
45 underbite
50 crossbite
55 open bite
60 crowding
60 spacing
65 overjet
65 deep bite
70 class 1 malocclusion
70 class 2 malocclusion
75 class 3 malocclusion
75 midline deviation
80 rotation
80 impaction
85 transposition
`,
"Name a cause of tooth sensitivity":`
40 cavities
45 receding gums
50 tooth whitening
55 hard brushing
60 cracked teeth
60 worn enamel
65 grinding
65 acidic foods
70 recent filling
70 gum disease
75 exposed roots
75 dental work
80 sinus infection
80 acid reflux
85 bulimia
`,
"Name a part of a dental implant":`
40 implant post
45 implant fixture
50 abutment
55 crown
60 screw
60 healing cap
65 cover screw
65 abutment screw
70 implant platform
70 implant threads
75 implant collar
75 internal hex
80 external hex
80 morse taper connection
85 scan body
`,
"Name a complication of dental anesthesia":`
40 lip numbness
45 tongue numbness
50 bitten lip
55 injection pain
60 bruise
60 hematoma
65 fainting
65 racing heart
70 lockjaw
70 nerve injury
75 allergic reaction
75 facial paralysis
80 broken needle
80 infection at site
85 methemoglobinemia
`,
"Name a sign of a dental infection":`
40 tooth pain
45 swelling
50 fever
55 pus
60 bad taste in mouth
60 bad breath
65 pain chewing
65 hot sensitivity
70 cold sensitivity
70 gum swelling
75 gum boil
75 swollen glands
80 facial swelling
80 jaw swelling
85 trouble swallowing
`,
"Name a type of dental crown":`
40 porcelain crown
45 gold crown
50 zirconia crown
55 metal crown
60 temporary crown
60 pfm crown
65 ceramic crown
65 stainless steel crown
70 emax crown
70 same day crown
75 implant crown
75 resin crown
80 onlay
80 3/4 crown
85 endocrown
`,
"Name a dental emergency":`
40 toothache
45 knocked out tooth
50 broken tooth
55 abscess
60 lost filling
60 lost crown
65 swelling
65 bleeding
70 dry socket
70 broken braces
75 broken jaw
75 dislocated jaw
80 something stuck between teeth
80 cut lip
85 loose tooth
`,
"Name a dental instrument":`
40 mirror
45 explorer
50 probe
55 scaler
60 curette
60 forceps
65 elevator
65 suction
70 drill
70 handpiece
75 excavator
75 condenser
80 burnisher
80 carver
85 rubber dam
`,
});

addExtra({
/* ---- standard NURSING ---- */
"Name a right of medication administration":`
40 right indication
45 right to know
50 right client
55 right medicine
60 right amount
60 right method
65 right timing
65 right record
70 right monitoring
70 right outcome
75 right preparation
75 right expiration
`,
"Name a sign of a blood transfusion reaction":`
40 rash
45 itching
50 high temperature
55 chest tightness
60 lower back pain
60 blood in urine
65 low back pain
65 shortness of breath
70 cough
70 low oxygen
75 pain along the vein
75 restlessness
80 oozing from iv site
80 hemoglobin drop
85 bronchospasm
`,
"Name a complication of an IV":`
40 iv infiltration
45 swelling at site
50 redness at site
55 pain at site
60 blown vein
60 leaking iv
65 clotted iv
65 occluded line
70 line infection
70 sepsis from line
75 air bubble
75 fluid overload
80 nerve damage
80 tissue damage
85 catheter shear
`,
"Name a sign of high blood sugar":`
40 increased thirst
45 increased urination
50 blurry vision
55 tiredness
60 dry skin
60 itching
65 headaches
65 trouble concentrating
70 weight loss
70 recurrent infections
75 slow healing cuts
75 fruity breath
80 deep rapid breathing
80 nausea
85 stupor
`,
"Name a sign of respiratory distress":`
40 struggling to breathe
45 rapid breathing
50 low o2 sat
55 wheeze
60 blue lips
60 rib retractions
65 nose flaring
65 using neck muscles
70 grunting baby
70 tripoding
75 agitation
75 inability to lie flat
80 audible stridor
80 decreased air entry
85 silent chest
`,
"Name a nursing theorist":`
40 nightingale
45 jean watson
50 dorothea orem
55 virginia henderson
60 patricia benner
60 hildegard peplau
65 sister callista roy
65 madeleine leininger
70 betty neuman
70 imogene king
75 martha rogers
75 nola pender
80 faye abdellah
80 ida orlando
85 joyce travelbee
`,
"Name a hospital emergency code":`
40 blue code
45 red code
50 pink code
55 silver code
60 gray code
60 orange code
65 black code
65 yellow code
70 white code
70 purple code
75 brown code
75 green code
80 stroke alert
80 stemi alert
85 trauma activation
`,
"Name a symptom of low blood sugar":`
40 shaky
45 sweaty
50 dizzy
55 hungry
60 confused
60 fast heart beat
65 anxious
65 irritable
70 headache
70 weak
75 tired
75 blurry vision
80 pale
80 cold and clammy
85 numb lips
`,
"Name a common body site for pressure injuries":`
40 tailbone
45 heels
50 hips
55 buttocks
60 elbows
60 back of head
65 shoulder blades
65 ankles
70 ears
70 spine
75 knees
75 nose
80 toes
80 chin
85 under medical devices
`,
"Name an electrolyte imbalance":`
40 low potassium
45 high potassium
50 low sodium
55 high sodium
60 low calcium
60 high calcium
65 low magnesium
65 high magnesium
70 low phosphorus
70 high phosphorus
75 low chloride
75 high chloride
80 acidosis
80 alkalosis
85 low bicarb
`,
"Name a postpartum complication":`
40 heavy bleeding
45 depression after birth
50 infection after birth
55 breast infection
60 blood clots
60 high blood pressure after birth
65 retained placental fragments
65 uterine infection
70 bladder problems
70 incontinence
75 hemorrhoids
75 perineal pain
80 hair loss
80 thyroid problems
85 heart failure
`,
"Name a complication of immobility":`
40 bedsores
45 dvt
50 pneumonia
55 muscle loss
60 constipation
60 joint stiffness
65 bone loss
65 uti
70 kidney stones
70 depression
75 confusion
75 orthostatic hypotension
80 atelectasis
80 contractures
85 foot drop
`,
"Name a sign of abuse or neglect":`
40 bruises
45 fearfulness
50 unexplained injuries
55 weight loss
60 poor hygiene
60 withdrawal
65 broken bones
65 burns
70 delayed care
70 bedsores
75 dehydration
75 missing money
80 isolation
80 sudden behavior change
85 caregiver refuses to leave
`,
"Name a diet order":`
40 nothing by mouth
45 clear liquid diet
50 full liquid diet
55 regular diet
60 low salt diet
60 diabetic diet
65 heart healthy diet
65 soft diet
70 pureed diet
70 renal diet
75 low fat diet
75 high protein diet
80 gluten free diet
80 thickened liquid diet
85 low residue diet
`,
"Name a nursing job title or role":`
40 nurse
45 charge nurse
50 nurse manager
55 nurse educator
60 travel nurse
60 school nurse
65 icu nurse
65 er nurse
70 or nurse
70 labor nurse
75 pediatric nurse
75 oncology nurse
80 psych nurse
80 dialysis nurse
85 telemetry nurse
`,
"Name a restraint or restraint alternative":`
40 soft wrist restraints
45 sitter
50 bed alarm
55 hand mitts
60 vest
60 sedation
65 4 point restraint
65 lap belt
70 side rails up
70 video monitor
75 enclosure bed
75 seclusion room
80 diversional activities
80 family presence
85 low stimulation room
`,
"Name an activity of daily living":`
40 bathing
45 eating
50 dressing
55 toileting
60 walking
60 transferring
65 grooming
65 continence
70 brushing teeth
70 hair care
75 shaving
75 cooking
80 cleaning
80 shopping
85 managing medications
`,
/* ---- standard PHARMACY (thin) ---- */
"Name an ARB (ends in -sartan)":`
40 cozaar
45 diovan
50 benicar
55 avapro
60 micardis
60 atacand
65 edarbi
65 teveten
70 entresto
70 hyzaar
75 exforge
75 azor
80 twynsta
80 tribenzor
85 byvalson
`,
"Name an ACE inhibitor (ends in -pril)":`
40 zestril
45 prinivil
50 vasotec
55 altace
60 lotensin
60 capoten
65 accupril
65 monopril
70 aceon
70 mavik
75 univasc
75 lotrel
80 zestoretic
80 vaseretic
85 tarka
`,
"Name a beta blocker (ends in -olol)":`
40 lopressor
45 toprol xl
50 inderal
55 tenormin
60 coreg
60 trandate|normodyne
65 zebeta
65 bystolic
70 corgard
70 brevibloc
75 betapace
75 timoptic
80 kerlone
80 sectral
85 levatol
`,
"Name a diuretic":`
40 water pill
45 loop diuretic
50 thiazide diuretic
55 potassium sparing diuretic
60 osmotic diuretic
60 carbonic anhydrase inhibitor
65 hctz
65 aldactone
70 lasix
70 bumex
75 demadex
75 zaroxolyn
80 microzide
80 dyazide
85 edecrin
`,
"Name a benzodiazepine":`
40 xanax
45 valium
50 ativan
55 klonopin
60 versed
60 librium
65 restoril
65 halcion
70 serax
70 tranxene
75 onfi
75 doral
80 prosom
80 dalmane
85 byfavo
`,
"Name a muscle relaxant":`
40 flexeril
45 robaxin
50 lioresal
55 zanaflex
60 soma
60 skelaxin
65 valium
65 dantrium
70 norflex
70 parafon forte
75 botox
75 anectine
80 zemuron
80 norcuron
85 nimbex
`,
"Name a cephalosporin":`
40 keflex
45 rocephin
50 ancef
55 omnicef
60 ceftin
60 maxipime
65 fortaz
65 vantin
70 duricef
70 suprax
75 claforan
75 mefoxin
80 teflaro
80 cefzil
85 fetroja
`,
"Name a corticosteroid":`
40 decadron
45 medrol
50 solu medrol
55 kenalog
60 deltasone
60 orapred
65 flonase
65 pulmicort
70 entocort
70 celestone
75 cortef
75 florinef
80 nasonex
80 qvar
85 emflaza
`,
});

addExtra({
"Name a sexually transmitted infection":`
40 genital warts
45 hepatitis
50 trichomonas
55 hpv infection
60 hiv infection
60 syphilis infection
65 nongonococcal urethritis
65 cervicitis
70 proctitis
70 epididymitis
75 pid
75 scabies infestation
80 crab lice
80 molluscum
85 mycoplasma hominis
85 entamoeba
`,
"Name a warning sign of stroke":`
40 sudden numbness
45 sudden confusion
50 sudden trouble seeing
55 sudden trouble walking
60 sudden severe headache
60 face weakness
65 arm drift
65 garbled speech
70 word finding difficulty
70 loss of balance
75 vertigo
75 vomiting
80 one sided vision loss
80 eye deviation
85 altered level of consciousness
`,
"Name a symptom of a heart attack":`
40 chest discomfort
45 squeezing chest pain
50 pain radiating to arm
55 pain radiating to jaw
60 cold sweat
60 nausea
65 shortness of breath
65 fatigue in women
70 indigestion
70 upper back pain
75 lightheadedness
75 fainting
80 anxiety
80 heart palpitations
85 arm heaviness
`,
"Name a vitamin or mineral the body needs":`
40 vitamin b complex
45 vitamin b1
50 vitamin b2
55 vitamin b3
60 vitamin b5
60 vitamin b7
65 vitamin b9
65 vitamin b12
70 vitamin d3
70 vitamin k2
75 potassium chloride
75 trace minerals
80 electrolytes
`,
"Name an antifungal drug (often ends in -azole)":`
40 diflucan
45 lamisil
50 nizoral
55 monistat
60 lotrimin
60 sporanox
65 vfend
65 noxafil
70 cresemba
70 cancidas
75 mycamine
75 eraxis
80 ambisome
80 abelcet
85 jublia
`,
"Name an antipsychotic":`
40 first generation antipsychotic|typical antipsychotic
45 second generation antipsychotic|atypical antipsychotic
50 long acting injectable antipsychotic
55 haloperidol decanoate
60 fluphenazine decanoate
60 risperdal consta
65 invega trinza
65 invega hafyera
70 rykindo
70 erzofri
75 zyprexa relprevv
75 aristada initio
80 asenapine patch
80 zuclopenthixol
85 flupentixol
`,
"Name a type of IV fluid":`
40 crystalloid
45 colloid
50 isotonic fluid
55 hypotonic fluid
60 hypertonic fluid
60 dextrose 5%
65 0.9% sodium chloride
65 ringer's lactate
70 3% sodium chloride
70 5% dextrose in lactated ringers
75 dextrose 10% in water
75 hespan
80 voluven
80 starch solution
85 hartmann's solution
`,
"Name an antihistamine":`
40 h1 blocker
45 h2 blocker
50 first generation antihistamine
55 second generation antihistamine
60 children's benadryl
60 claritin d
65 zyrtec d
65 allegra d
70 vistaril
70 atarax
75 periactin
75 phenergan
80 tavist
80 dimetapp
85 optivar
`,
"Name an antiepileptic (antiseizure) drug":`
40 levetiracetam xr
45 lamotrigine xr
50 depakote er
55 keppra xr
60 xcopri
60 vimpat
65 briviact
65 fycompa
70 aptiom
70 banzel
75 onfi
75 epidiolex
80 fintepla
80 diacomit
85 ztalmy
`,
"Name a cholesterol-lowering drug":`
40 statin
45 pcsk9 inhibitor
50 bile acid sequestrant
55 fibrate
60 cholesterol absorption inhibitor
60 omega 3 fatty acids
65 lovaza
65 vascepa
70 tricor
70 trilipix
75 lopid
75 niaspan
80 welchol
80 questran
85 juxtapid
`,
"Name an ADHD medication":`
40 stimulant
45 non stimulant
50 amphetamine
55 methylphenidate
60 adderall xr
60 ritalin la
65 concerta generic
65 focalin xr
70 vyvanse chewable
70 dexedrine spansule
75 evekeo odt
75 quillichew er
80 cotempla xr odt
80 adhansia xr
85 onyda xr
`,
"Name a part of a tooth":`
40 root canal system
45 nerve chamber
50 pulp horn
55 root trunk
60 root canal orifice
60 dentin enamel junction
65 cemento enamel junction
65 secondary dentin
70 tertiary dentin
70 reparative dentin
75 sclerotic dentin
75 enamel spindles
80 enamel lamellae
80 interglobular dentin
85 tomes granular layer
`,
"Name a nerve or nerve block used in dentistry":`
40 inferior alveolar nerve block
45 lingual nerve block
50 mental nerve block
55 infraorbital nerve block
60 psa block
60 msa block
65 asa block
65 greater palatine block
70 nasopalatine block
70 buccal nerve block
75 incisive nerve block
75 gow gates block
80 akinosi block
80 v2 nerve block
85 maxillary nerve block
`,
"Name a type of dental X-ray or imaging":`
40 bitewings
45 panoramic x ray
50 periapical x ray
55 full mouth x rays
60 3d scan
60 cone beam scan
65 occlusal x ray
65 ceph x ray
70 digital radiograph
70 intraoral photograph
75 tmj x ray
75 sialogram
80 caries detection laser
80 transillumination
85 optical coherence tomography
`,
"Name an oral surgery procedure":`
40 tooth extraction
45 wisdom teeth extraction
50 implant placement
55 bone grafting
60 sinus augmentation
60 soft tissue biopsy
65 frenulectomy
65 corrective jaw surgery
70 alveolar ridge smoothing
70 root end surgery
75 canine exposure
75 partial tooth removal
80 abscess drainage
80 torus removal
85 sialendoscopy
`,
"Name a cranial nerve":`
40 cn zero
`,
"Name a cause of dizziness or vertigo":`
40 syncope|fainting
45 vasovagal reaction
50 inner ear problem
55 low blood sugar
60 dehydration
60 standing up too fast
65 heat stroke
65 alcohol intoxication
70 benzodiazepines
70 antihypertensives
75 anemia
75 hypothyroidism
80 tumor
80 chiari malformation
85 cerebellar stroke
`,
});

addExtra({
"Name an ototoxic drug":`
60 kanamycin
65 netilmicin
65 capreomycin
70 polymyxin
70 minocycline
75 oxaliplatin
75 nitrogen mustard
75 difluoromethylornithine|eflornithine
80 bleomycin
80 interferon
80 phosphodiesterase 5 inhibitors|tadalafil
85 ibuprofen high dose
85 naproxen
85 mefloquine
85 lidocaine
90 desferrioxamine
`,
"Name a sign of Addison disease or adrenal crisis":`
45 orthostatic hypotension
50 anorexia
55 diarrhea
60 lightheadedness
60 irritability
65 hypercalcemia
65 eosinophilia
70 lymphocytosis
70 anemia
75 amenorrhea
75 decreased libido
80 hyperpigmented gums
80 hyperpigmented palmar creases
85 auricular calcification
`,
"Name a benzodiazepine":`
55 medazepam
60 ketazolam
65 loprazolam
70 brotizolam
70 cinolazepam
75 nimetazepam
75 pinazepam
80 tofisopam
80 delorazepam
85 diclazepam
85 flubromazolam
90 pyrazolam
`,
"Name a drug that causes hypoglycemia":`
50 tolazamide
55 gliclazide
60 disopyramide
60 cibenzoline
65 propranolol
65 sertraline
70 fluoxetine
70 gabapentin
75 indomethacin
75 colchicine
80 artemisinin
80 chloroquine
85 hydroxyurea
85 ackee fruit
`,
"Name a drug that discolors urine":`
50 chloroquine urine
55 primaquine urine
60 clofazimine
60 carbidopa levodopa
65 methyldopa
65 metronidazole dark urine
70 rifapentine
70 tolcapone
75 sulfasalazine orange
75 phenothiazines
80 cascara
80 quinine
85 bismuth
85 propofol green
`,
"Name a drug that causes Stevens-Johnson syndrome":`
50 sulfadiazine
55 sulfadoxine pyrimethamine
60 aminopenicillins
60 amoxicillin
65 ampicillin
65 cefotaxime
70 meloxicam
70 piroxicam
75 lacosamide
75 levetiracetam
80 nivolumab
80 ipilimumab
85 imatinib
85 thalidomide
`,
"Name a drug that commonly causes weight gain":`
50 sulfonylureas
55 insulin glargine
60 paroxetine
60 citalopram
65 trazodone
65 doxepin
70 nortriptyline
70 asenapine
75 iloperidone
75 carbamazepine
80 metoprolol
80 atenolol
85 medroxyprogesterone
85 cyproheptadine
`,
"Name a drug that causes agranulocytosis":`
50 clozapine monitoring
55 methimazole agranulocytosis
60 sulfonamides
60 trimethoprim
65 penicillins
65 cephalosporins
70 nsaids
70 phenylbutazone
75 indomethacin
75 propranolol
80 captopril
80 spironolactone
85 quinidine
85 hydroxychloroquine
`,
"Name a diuretic":`
50 ethacrynic acid
55 xipamide
60 bendroflumethiazide
60 polythiazide
65 cyclothiazide
65 hydroflumethiazide
70 trichlormethiazide
70 methyclothiazide
75 quinethazone
75 canrenoate
80 piretanide
80 azosemide
85 isosorbide oral
85 glycerin
`,
"Name a sign of magnesium sulfate toxicity":`
50 loss of deep tendon reflexes
55 shallow breathing
60 sweating
60 nausea
65 confusion
65 weakness
70 low urine output
70 hypocalcemia
75 hypotonia newborn
75 decreased fetal heart rate variability
80 serum magnesium over 8
80 ecg changes
85 asystole
`,
"Name a drug that causes hyperkalemia":`
50 trimethoprim
55 pentamidine
60 amiloride
60 triamterene
65 eplerenone
65 finerenone
70 aliskiren
70 ketoconazole
75 calcineurin inhibitors
75 nonselective beta blockers
80 mannitol
80 aminocaproic acid
85 stored blood transfusion
85 arginine
`,
"Name a cause of ST elevation":`
50 coronary artery spasm
55 left main occlusion
60 acute stemi
60 myocardial infarction anterior
65 posterior mi
65 inferior mi
70 right ventricular infarction
70 lv thrombus
75 cocaine induced vasospasm
75 hyperkalemia
80 sodium channel blocker toxicity
80 tricyclic overdose
85 spontaneous coronary artery dissection
`,
"Name a sign of high potassium":`
50 tented t waves
55 long pr interval
60 flat p waves
60 bradyarrhythmia
65 junctional rhythm
65 ventricular tachycardia
70 abdominal cramping
70 diarrhea
75 ascending paralysis
75 paresthesias
80 fatigue
80 palpitations
85 cardiac arrest
`,
"Name a sign of compartment syndrome":`
50 pain with passive movement
55 paresthesias
60 pallor
60 pulselessness
65 paralysis
65 poikilothermia
70 tight swollen skin
70 shiny skin
75 woody feel
75 pressure over 30 mmhg
80 elevated ck
80 dark urine
85 acute kidney injury
`,
"Name a sign of fluid volume overload":`
50 peripheral edema
55 pulmonary congestion
60 rales
60 orthopnea
65 paroxysmal nocturnal dyspnea
65 hepatomegaly
70 hepatojugular reflux
70 ascites
75 elevated cvp
75 elevated pcwp
80 low hematocrit
80 polyuria
85 cerebral edema
`,
"Name a sign of Cushing syndrome":`
50 red cheeks|plethora
55 thin arms and legs
60 fat pads
60 easy bruising
65 osteoporosis
65 fractures
70 poor healing
70 infections
75 hyperglycemia
75 hypokalemia
80 depression
80 insomnia
85 psychosis
`,
"Name a sign of meningitis":`
50 headache and fever
55 stiff neck and fever
60 photophobia
60 nausea
65 rash that doesn't fade|glass test
65 cold hands and feet
70 leg pain
70 lethargy
75 bulging soft spot
75 floppy baby
80 refusing feeds
80 high pitched crying
85 hearing loss
`,
"Name a photosensitizing drug":`
50 sulfonylureas
55 glipizide
60 thiazides
60 chlorthalidone
65 ketoprofen
65 celecoxib
70 quinolones
70 sparfloxacin
75 griseofulvin
75 terbinafine
80 lomefloxacin
80 vandetanib
85 st john's wort
85 bergamot
`,
"Name a nephrotoxic drug":`
50 aminoglycoside
55 contrast media
60 nsaid
60 ace inhibitor
65 arb
65 methotrexate
70 zoledronate
70 pamidronate
75 ifosfamide
75 pemetrexed
80 sulfadiazine
80 triamterene
85 indinavir
85 aristolochic acid
`,
"Name a dosage form that should not be crushed":`
50 extended release capsules
55 enteric coated aspirin
60 sublingual nitroglycerin
60 buccal fentanyl
65 effervescent tablets
65 oros tablets
70 osmotic release tablets
70 xr capsules
75 er tablets
75 ec capsules
80 cytotoxic tablets
80 hormone tablets
85 orally disintegrating tablet
`,
"Name a cephalosporin":`
55 cefamandole
60 cefonicid
60 ceforanide
65 cefmetazole
65 moxalactam
70 cefsulodin
70 cefpiramide
75 cefpirome
75 ceftiofur
80 cefovecin
80 ceftaroline fosamil
85 cefalexin
`,
"Name a corticosteroid":`
50 hydrocortisone cream
55 prednisolone eye drops
60 methylprednisolone acetate
60 triamcinolone acetonide
65 betamethasone dipropionate
65 clobetasol propionate
70 fluticasone propionate
70 fluticasone furoate
75 mometasone furoate
75 budesonide inhaler
80 cortisone acetate
80 deoxycorticosterone
85 paramethasone
`,
"Name a neutropenic precaution":`
50 no fresh flowers or plants
55 no raw fruits
60 no raw vegetables
60 cooked food only
65 no well water
65 no deli meats
70 no soft cheese
70 no unpasteurized milk
75 avoid gardening
75 avoid cleaning cat litter
80 no fish tanks
80 no bird cages
85 mask during transport
`,
"Name a hepatotoxic drug":`
50 sulfonamides
55 erythromycin
60 tetracyclines
60 isoniazid rifampin
65 nevirapine
65 efavirenz
70 didanosine
70 stavudine
75 ketoconazole oral
75 flucytosine
80 bosentan
80 ambrisentan
85 trovafloxacin
85 pemoline
`,
"Name a drug that causes orthostatic hypotension":`
50 silodosin
55 alfuzosin
60 hydralazine
60 minoxidil
65 carvedilol
65 labetalol
70 phenothiazines
70 chlorpromazine
75 clozapine
75 iloperidone
80 bromocriptine
80 pramipexole
85 phenoxybenzamine
`,
"Name a sign of low calcium":`
50 muscle twitching
55 cramps
60 spasms
60 tingling around mouth
65 seizure
65 laryngospasm
70 bronchospasm
70 arrhythmia
75 long qt
75 congestive heart failure
80 cataracts
80 brittle nails
85 coarse hair
`,
"Name a side effect of long-term corticosteroids":`
50 hyperlipidemia
55 cushingoid appearance
60 adrenal insufficiency
60 skin atrophy
65 hirsutism
65 striae
70 telangiectasia
70 perioral dermatitis
75 myopathy
75 tendon rupture
80 pancreatitis
80 pseudotumor cerebri
85 kaposi sarcoma
`,
"Name a CYP3A4 inducer":`
50 eslicarbazepine
55 rufinamide
60 clobazam
60 nafcillin
65 rifamycins
65 glucocorticoids
70 ivosidenib
70 sotorasib
75 tecovirimat
75 lesinurad
80 vemurafenib
80 telotristat
85 mitapivat
`,
"Name a drug that causes gingival hyperplasia":`
50 phenytoin overgrowth
55 cyclosporine overgrowth
60 nifedipine overgrowth
60 calcium channel blocker
65 dihydropyridines
65 nitrendipine
70 manidipine
70 lacidipine
75 erythromycin
75 primidone
80 sodium valproate
80 everolimus
85 oral contraceptive pills
`,
"Name a radiopaque jaw lesion":`
50 idiopathic osteosclerosis
55 dense bone island
60 complex odontoma
60 compound odontoma
65 periapical cemento osseous dysplasia
65 focal cemento osseous dysplasia
70 juvenile ossifying fibroma
70 chondrosarcoma
75 osteoblastoma
75 ewing sarcoma
80 tooth fragment
80 calcified carotid plaque
85 myositis ossificans
`,
"Name a drug that causes dry mouth":`
50 tolterodine
55 solifenacin
60 trospium
60 fesoterodine
65 glycopyrrolate
65 hyoscyamine
70 benztropine
70 trihexyphenidyl
75 cyclobenzaprine
75 baclofen
80 methamphetamine
80 cannabis
85 sumatriptan
`,
"Name a cause of vaginitis or vaginal discharge":`
50 retained foreign body
55 cervical polyp
60 ectropion
60 hpv
65 herpes simplex
65 mycoplasma genitalium
70 ureaplasma
70 strep agalactiae
75 gardnerella overgrowth
75 candida glabrata
80 pinworms in children
80 vulvar dermatitis
85 crohns fistula
`,
"Name a red flag for low back pain":`
50 urinary incontinence
55 fecal incontinence
60 perineal numbness
60 severe pain at night
65 constant pain
65 failure of conservative treatment
70 history of osteoporosis
70 chronic steroid use
75 recent uti
75 skin infection
80 drug abuse
80 known aneurysm
85 trauma in elderly
`,
"Name a hospital emergency code":`
50 code blue adult
55 code blue pediatric
60 code white newborn
60 code pink infant
65 rapid response team
65 met call|medical emergency team
70 code red fire
70 code black bomb
75 code orange spill
75 code gray security
80 code silver weapon
80 code yellow disaster
85 code triage internal
`,
"Name a contraindication for an MRI":`
50 ferromagnetic implants
55 older pacemaker
60 metallic heart valve
60 eye metal fragments
65 non mri compatible stents
65 neurostimulators
70 nerve stimulators
70 bone growth stimulator
75 penile implant
75 magnetic implants
80 body piercings
80 medication pump
85 hearing aids
`,
"Name a warning sign of oral cancer":`
50 lump
55 red and white patches
60 thickening of cheek
60 sore throat that won't go away
65 feeling something caught in throat
65 difficulty moving jaw
70 difficulty moving tongue
70 swelling of jaw
75 dentures that don't fit
75 pain around teeth
80 hoarseness
80 change in bite
85 numbness of chin
`,
"Name a red flag for headache":`
50 thunderclap headache
55 worst headache ever
60 fever and stiff neck
60 new headache after 50
65 papilledema
65 focal neurological signs
70 change in personality
70 headache waking from sleep
75 positional headache
75 cough triggered headache
80 jaw claudication
80 visual symptoms
85 horner syndrome
`,
"Name a sign of lithium toxicity":`
50 coarse tremors
55 vomiting
60 diarrhea
60 muscle twitching
65 ataxia
65 dysarthria
70 confusion
70 seizures
75 coma
75 hyperreflexia
80 qt prolongation
80 hypothyroidism
85 hypercalcemia
`,
"Name a sign of anaphylaxis":`
50 generalized hives
55 flushing
60 angioedema
60 stridor
65 wheeze
65 hoarse voice
70 hypotension
70 tachycardia
75 vomiting
75 abdominal pain
80 incontinence
80 collapse
85 sense of impending doom
`,
"Name a drug that can cause serotonin syndrome":`
50 tryptophan supplement
55 st john's wort
60 buspirone
60 lithium
65 ondansetron
65 granisetron
70 metoclopramide
70 cyclobenzaprine
75 fentanyl
75 methadone
80 oxycodone
80 tapentadol
85 lsd
`,
"Name a symptom of major depression":`
50 depressed mood most of the day
55 diminished interest
60 significant weight change
60 insomnia or hypersomnia
65 psychomotor changes
65 fatigue nearly every day
70 worthlessness
70 excessive guilt
75 diminished concentration
75 recurrent thoughts of death
80 suicidal ideation
80 suicide attempt
85 anhedonia
`,
"Name a vaccine on the childhood schedule":`
50 dtap
55 hib
60 ipv
60 pcv
65 rv
65 hepb
70 hepa
70 var
75 mmr
75 flu
80 covid 19 vaccine
80 tdap
85 menacwy
`,
"Name a nursing theorist":`
50 hildegard peplau
55 faye glenn abdellah
60 ida jean orlando
60 lydia hall
65 dorothy johnson
65 myra levine
70 rosemarie rizzo parse
70 margaret newman
75 madeleine leininger
75 jean watson
80 katharine kolcaba
80 ramona mercer
85 kathryn barnard
`,
});

/* Extra answers added later: EXTRA[prompt] uses the same "<points> name|alias" lines.
   They keep their own points (no rank rescaling) and duplicates of existing answers are dropped. */
/*CROWD*/
const EXTRA = (typeof EXTRA_LISTS!=="undefined") ? EXTRA_LISTS : {};
const parseList = s => s.trim().split("\n").filter(l=>l.trim()).map(l=>{const i=l.indexOf(" ");return [+l.slice(0,i), l.slice(i+1).trim()];});
const BANK = RAW.map(r=>{
  const a=parseList(r.list);
  if(r.rank){ const N=a.length; a.forEach((x,k)=>{ const rs=Math.round(5+93*Math.pow(k/(N-1),1.1)); x[0]=Math.min(99,Math.max(x[0],rs)); }); }
  const extra = EXTRA[r.q] ? parseList(EXTRA[r.q]).map(x=>[x[0],x[1],true]) : [];
  return {q:r.q, cat:r.cat, added:r.added||null, pool:r.pool, pools:r.pools, strip:r.strip?r.strip.split(" "):[], a:[...a,...extra]};
});

/* Synonyms: medical and plain-English forms are folded to one canonical form on BOTH sides,
   so "hypokalemia" = "low potassium", "renal" = "kidney", "syncope" = "fainting", etc. */
const SYN = [
 ["low k","low potassium"],["high k","high potassium"],["low na","low sodium"],["high na","high sodium"],["low mg","low magnesium"],["high mg","high magnesium"],["low ca","low calcium"],["high ca","high calcium"],["low phos","low phosphate"],["high phos","high phosphate"],["low o2","low oxygen"],["low sat","low oxygen"],
 ["hypokalemia","low potassium"],["hyperkalemia","high potassium"],["hyponatremia","low sodium"],["hypernatremia","high sodium"],
 ["hypocalcemia","low calcium"],["hypercalcemia","high calcium"],["hypomagnesemia","low magnesium"],["hypermagnesemia","high magnesium"],
 ["hypophosphatemia","low phosphate"],["hyperphosphatemia","high phosphate"],["low phosphorus","low phosphate"],["high phosphorus","high phosphate"],
 ["hypoglycemia","low blood sugar"],["hyperglycemia","high blood sugar"],["low glucose","low blood sugar"],["high glucose","high blood sugar"],
 ["low sugar","low blood sugar"],["high sugar","high blood sugar"],
 ["hypotension","low blood pressure"],["hypertension","high blood pressure"],["low bp","low blood pressure"],["high bp","high blood pressure"],
 ["tachycardia","fast heart rate"],["rapid heart rate","fast heart rate"],["racing heart","fast heart rate"],["bradycardia","slow heart rate"],
 ["tachypnea","fast breathing"],["rapid breathing","fast breathing"],["bradypnea","slow breathing"],
 ["dyspnea","shortness of breath"],["breathlessness","shortness of breath"],["difficulty breathing","shortness of breath"],["trouble breathing","shortness of breath"],
 ["pruritus","itching"],["itchiness","itching"],["itchy skin","itching"],["itchy","itching"],
 ["emesis","vomiting"],["throwing up","vomiting"],["pyrexia","fever"],["diaphoresis","sweating"],
 ["syncope","fainting"],["passing out","fainting"],["blacking out","fainting"],
 ["myocardial infarction","heart attack"],["cerebrovascular accident","stroke"],
 ["hematuria","blood in urine"],["hemoptysis","coughing up blood"],["hematemesis","vomiting blood"],["melena","black stool"],
 ["epistaxis","nosebleed"],["nose bleed","nosebleed"],["alopecia","hair loss"],["cephalgia","headache"],["xerostomia","dry mouth"],
 ["dysphagia","trouble swallowing"],["difficulty swallowing","trouble swallowing"],["dysuria","painful urination"],
 ["polyuria","frequent urination"],["nocturia","urinating at night"],["edema","swelling"],["oedema","swelling"],
 ["renal","kidney"],["hepatic","liver"],["cardiac","heart"],["gastric","stomach"],["cerebral","brain"],["pulmonary","lung"],
 ["paracetamol","acetaminophen"],["tylenol","acetaminophen"],["advil","ibuprofen"],["motrin","ibuprofen"],
];
const SYN_RE = SYN.map(([a,b])=>[new RegExp("(^| )"+a+"(?= |$)","g"), "$1"+b]);
function norm(s, strip, noSyn){
  let t = s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/&/g," and ").replace(/['’`.]/g,"").replace(/[^a-z0-9]+/g," ").trim();
  t = t.replace(/^(a|an|the) /,"").replace(/colour/g,"color").replace(/haem/g,"hem").replace(/oesophag/g,"esophag").replace(/anaem/g,"anem").replace(/paed/g,"ped").replace(/oestr/g,"estr").replace(/foet/g,"fet").replace(/aemi/g,"emi").replace(/\b(hypo|hyper) (?=[a-z]{3})/g,"$1").replace(/(kal|natr|calc|magnes|phosphat|glyc|lip|capn|ox|vol|album|bilirubin|uric|chlor)emic\b/g,"$1emia");
  let words = t.split(" ").filter(Boolean);
  const kept = words.filter(w=>!strip.includes(w));
  if (kept.length) words = kept;
  t = words.join(" ");
  if(!noSyn) for(const [re,rep] of SYN_RE) t = t.replace(re, rep);
  words = t.split(" ").filter(Boolean);
  words = words.map(w => (w.length>3 && w.endsWith("s") && !/(ss|us|is)$/.test(w)) ? w.slice(0,-1) : w);
  return words.join(" ");
}
/* Damerau (optimal string alignment) distance, so swapped letters count as one typo */
function dist(a,b){
  if (Math.abs(a.length-b.length)>3) return 99;
  const d=[]; for(let i=0;i<=a.length;i++){d[i]=[i];} for(let j=0;j<=b.length;j++) d[0][j]=j;
  for(let i=1;i<=a.length;i++) for(let j=1;j<=b.length;j++){
    const c=a[i-1]===b[j-1]?0:1;
    d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+c);
    if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1]) d[i][j]=Math.min(d[i][j],d[i-2][j-2]+1);
  }
  return d[a.length][b.length];
}
const ACR=/^(pnh|ttp|hus|siadh|aaa|bph|ppi|ppis|ssri|ssris|snri|snris|maoi|maois|nsaid|nsaids|ace|arb|arbs|dvt|cad|chf|ckd|aki|ards|uti|sti|std|ibs|ibd|gerd|copd|bv|hpv|hsv|ebv|cmv|rsv|mrsa|vre|tb|hiv|aids|hcg|crp|esr|cbc|bmp|cmp|abg|inr|ptt|tsh|bun|ecg|ekg|eeg|emg|mri|ct|cpr|aed|icu|nicu|picu|pacu|er|ed|or|npo|prn|iv|im|po|sl|pr|gi|gu|ent|ob|gyn|adl|adls|rom|scd|scds|pt|ot|slp|rt|cna|lpn|rn|np|pa|md|do|crna|cnm|dds|dmd|rdh|pharmd|dnp|fnp|pmhnp|agnp|pnp|ancc|aanp|nccpa|pance|nclex|naplex|usmle|comlex|inbde|nbdhe|rems|ndi|nti|cyp|cyp3a4|pgp|qt|lvh|lbbb|rbbb|wpw|svt|vt|vf|afib|pvc|pvcs|pac|pacs|stemi|nstemi|jvd|pmi|s1|s2|s3|s4|asd|vsd|pda|pfo|tof|hlhs|ddh|scfe|jia|sle|ra|ms|als|gbs|cidp|tia|cva|sah|icp|csf|gcs|loc|mmse|moca|mi|pe|gerd|acs|stemi|nstemi|copd|tb|scad|hcm|hocm|mvp|svt|afib|sa|av|ct|mri|pet|ent|hcg|fsh|lh|tsh|acth|pth|glp|gnrh|crh|trh|ghrh|anp|bnp|dexa|dxa|spect|hida|mibg|muga|ercp|mrcp|sle|hsp|rmsf|sjs|ten|dress|hgh|gh|adh|epo|amh|igf|dhea|dht|msh|vip|pyy|npy|tpo|lad|rca|pda|lvot|ivc|svc|lv|rv|gi|er|ed|gp|im|ir|icu|ep|mfm|rei|tfl|scm|ql|aml|all|cll|cml|mds|nhl|hcc|rcc|bcc|scc|gbm|gist|dfsp|dcis|net|uti|dka|inh|tmp|smx|cn\d*|i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii|c1|c2|ivp|kub|vcug|dsa|cta|mra|ccta|cac|cbct|hsg|vq|oct|tee|eus|ceus|mrs|dti|cmr|fmri|psma|dmsa|mag3|itp|dic|jia|tss|ssss|gvhd|hiv|hfmd|covid|ctcl|nsclc|sclc|fgf23|hpl|cck|gip|t3|t4|cxr|iud)$/;
function display(label){ return label.split(" ").map(w=>ACR.test(w)?w.toUpperCase():w.charAt(0).toUpperCase()+w.slice(1)).join(" "); }
const cap = display;
/* concept key: same meaning, different wording -> same key ("less reflexes" = "decreased reflexes" = "absent dtrs") */
const CK_PHRASE=[[/\b(deep tendon reflex|tendon reflex|patellar reflex|knee jerk reflex|knee jerk|dtr)\b/g,"reflex"],
 [/\b(qrs|tuberous sclerosis) complex\b/g,"$1"],[/\b(release|coated|xl|er|xr|ec|oros|sublingual|buccal) (tablet|capsule)\b/g,"$1"],[/\bhyporeflexia\b|\bareflexia\b/g,"decreased reflex"],[/\bhyperreflexia\b/g,"increased reflex"],
 [/\black of\b|\bloss of\b|\babsence of\b/g,"decreased"],[/\bgo(ing)? down\b/g,"decreased"],[/\bgo(ing)? up\b/g,"increased"]];
const CK_WORD={less:"decreased",lower:"decreased",low:"decreased",reduced:"decreased",reduction:"decreased",decrease:"decreased",
 diminished:"decreased",diminish:"decreased",loss:"decreased",lost:"decreased",absent:"decreased",absence:"decreased",no:"decreased",
 lack:"decreased",lacking:"decreased",depressed:"decreased",fewer:"decreased",lowered:"decreased",drop:"decreased",dropped:"decreased",
 more:"increased",high:"increased",higher:"increased",elevated:"increased",elevation:"increased",raised:"increased",increase:"increased",
 excess:"increased",excessive:"increased",heightened:"increased",exaggerated:"increased",brisk:"increased",gain:"increased",rise:"increased",
 rapid:"fast",quick:"fast",slowed:"slow",slowing:"slow",reflexe:"reflex"};
const CK_STOP=new Set(["of","the","an","in","to","sign","symptom","with","interval","specialist","team","use","using","sister","when","at","site","during","while","on","radiating","too","nerve","syndrome","from"]);
function ckey(n){ let t=" "+n+" "; for(const [re,rep] of CK_PHRASE) t=t.replace(re,rep);
  const w=t.split(" ").filter(Boolean).map(x=>CK_WORD[x]||x).filter(x=>!CK_STOP.has(x));
  return [...new Set(w)].sort().join(" "); }
const SAME_ANSWER=[["type of tooth", "central incisor", "upper central incisor"], ["type of tooth", "central incisor", "lower central incisor"], ["type of tooth", "lateral incisor", "upper lateral incisor"], ["type of tooth", "lateral incisor", "lower lateral incisor"], ["type of tooth", "first molar", "upper first molar"], ["type of tooth", "first molar", "lower first molar"], ["type of tooth", "second molar", "upper second molar"], ["type of tooth", "second molar", "lower second molar"], ["emergency code", "code blue", "code blue adult"], ["emergency code", "code blue", "code blue pediatric"], ["emergency code", "code red", "code red fire"], ["emergency code", "code pink", "code pink infant"], ["emergency code", "code silver", "code silver weapon"], ["emergency code", "code gray", "code gray security"], ["emergency code", "code orange", "code orange spill"], ["emergency code", "code black", "code black bomb"], ["emergency code", "code yellow", "code yellow disaster"], ["emergency code", "code white", "code white newborn"], ["emergency code", "code triage", "code triage internal"], ["warning sign of stroke", "trouble walking", "sudden trouble walking"], ["warning sign of stroke", "vision loss", "one sided vision loss"], ["warning sign of stroke", "severe headache", "sudden severe headache"], ["symptom of a heart attack", "chest pain", "squeezing chest pain"], ["symptom of a heart attack", "back pain", "upper back pain"], ["TMJ disorder", "jaw pain", "jaw pain when chewing"], ["TMJ disorder", "limited opening", "limited mouth opening"], ["dental infection", "bad taste", "bad taste in mouth"], ["nursing theorist", "ida jean orlando", "ida orlando"], ["nursing theorist", "faye abdellah", "faye glenn abdellah"], ["nursing theorist", "rosemarie parse", "rosemarie rizzo parse"], ["diet order", "low sodium", "low salt diet"], ["transfusion react", "back pain", "lower back pain"], ["restraint", "wrist restraints", "soft wrist restraints"], ["dental implant", "morse taper", "morse taper connection"], ["oral surgery procedure", "jaw surgery", "corrective jaw surgery"], ["autosomal dominant", "adult polycystic kidney disease", "polycystic kidney disease"], ["secondary hypertension", "sleep apnea", "obstructive sleep apnea"], ["digital clubbing", "cyanotic congenital heart disease", "cyanotic heart disease"], ["ST elevation", "early repolarization", "benign early repolarization"], ["paraneoplastic", "lambert eaton", "lambert eaton myasthenic syndrome"], ["occupational lung", "hard metal", "hard metal lung disease"], ["fluid volume overload", "weight gain", "weight gain overnight"], ["thyroid storm", "weight loss", "weight loss despite appetite"], ["meningitis", "stiff neck", "stiff neck and fever"], ["neutropenic", "no fresh flowers", "no flowers"], ["neutropenic", "no fresh flowers", "no fresh flowers or plants"], ["neutropenic", "no fresh fruits or vegetables", "no fresh fruit"], ["tooth discoloration", "root canal treatment", "root canal"], ["radiolucent jaw", "central giant cell granuloma", "giant cell granuloma"], ["radiolucent jaw", "stafne bone defect", "stafne defect"], ["preventive screening", "eye exam", "diabetic eye exam"],["Name a diuretic","hydrochlorothiazide","microzide"], ["Name a diuretic","metolazone","zaroxolyn"], ["Name a migraine medication","dihydroergotamine","trudhesa"], ["Name a muscle relaxant","flexeril","amrix"], ["Name a muscle relaxant","flexeril","fexmid"], ["Name a muscle relaxant","baclofen","lioresal"], ["Name a muscle relaxant","baclofen","ozobax"], ["Name a muscle relaxant","baclofen","lyvispah"], ["Name a muscle relaxant","chlorzoxazone","lorzone"], ["Name a muscle relaxant","succinylcholine","anectine"], ["Name a muscle relaxant","rocuronium","zemuron"], ["Name a muscle relaxant","vecuronium","norcuron"], ["Name a muscle relaxant","cisatracurium","nimbex"],["Name a diabetes medication","novolog","fiasp"]];
const NO_MERGE=new Set(["cardiac glands~heart","h reflex~hoffmann","cardiorenal syndrome~heart failure"]);
function prep(p){
  const seen=new Set(); let items=[];
  for(const [pts,al,isExtra] of p.a){
    let names=al.split("|"); let keys=names.map(n=>norm(n,p.strip));
    if(isExtra){ const keep=keys.map((k,i)=>!seen.has(k)); names=names.filter((_,i)=>keep[i]); keys=keys.filter((_,i)=>keep[i]); if(!names.length) continue; }
    keys.forEach(k=>seen.add(k));
    items.push({pts,label:names[0],names,keys,ck:names.map(n=>{const u=norm(n,[]); return ckey(u)||u;})});
  }
  /* merge items that share a concept key; the merged answer keeps the LOWER score.
     An identical alias listed under two answers on purpose (e.g. "HLA-DR2") only merges when it is one answer's main name. */
  const owner=new Map(), out=[];
  for(const it of items){
    const hits=new Set();
    it.ck.forEach((c,i)=>{ const o=owner.get(c); if(!o) return;
      const same=o.key===it.ck[i];
      if(NO_MERGE.has(o.it.label+"~"+it.label)||NO_MERGE.has(it.label+"~"+o.it.label)) return;
      if(!same || o.key===o.it.ck[0] || it.ck[i]===it.ck[0]) hits.add(o.it); });
    const H=[...hits];
    if(!H.length){ out.push(it); it.ck.forEach((c,i)=>{ if(!owner.has(c)) owner.set(c,{it,key:c}); }); continue; }
    const tgt=H[0];
    for(const o of [it,...H.slice(1)]){
      (p.merged=p.merged||[]).push([o.label,o.pts,tgt.label,tgt.pts]);
      tgt.pts=Math.min(tgt.pts,o.pts);
      o.names.forEach((nm,i)=>{ if(!tgt.keys.includes(o.keys[i])){ tgt.names.push(nm); tgt.keys.push(o.keys[i]); tgt.ck.push(o.ck[i]); } });
      o.ck.forEach((c,i)=>{ const w=owner.get(c); if(!w || w.it===o) owner.set(c,{it:tgt,key:c}); });
      if(o!==it){ const j=out.indexOf(o); if(j>=0) out.splice(j,1); }
    }
  }
  for(const [q,a,b] of SAME_ANSWER){ if(!p.q.includes(q)) continue;
    const A=out.find(x=>x.label===a), B=out.find(x=>x.label===b); if(!A||!B||A===B) continue;
    (p.merged=p.merged||[]).push([b,B.pts,a,A.pts]);
    A.pts=Math.min(A.pts,B.pts); B.names.forEach((nm,i)=>{ if(!A.keys.includes(B.keys[i])){A.names.push(nm);A.keys.push(B.keys[i]);A.ck.push(B.ck[i]);} });
    out.splice(out.indexOf(B),1); }
  /* an alias listed under two different answers belongs only to the answer it names (or the most common one) */
  const by=new Map(); out.forEach(it=>it.ck.forEach((c,i)=>{ (by.get(c)||by.set(c,[]).get(c)).push(it); }));
  const fold=(it,c)=>{ const i=it.ck.indexOf(c); return [it.keys[i], ckey(it.keys[i])||it.keys[i]]; };
  for(const [c,its] of by){ const u=[...new Set(its)]; if(u.length<2) continue;
    const home=u.find(it=>it.ck[0]===c) || u.slice().sort((a,b)=>a.pts-b.pts)[0];
    for(const it of u){ if(it===home) continue;
      for(let i=it.ck.length-1;i>=1;i--) if(it.ck[i]===c){ it.ck.splice(i,1); it.names.splice(i,1); it.keys.splice(i,1); } } }
  /* stripped keys (filler words removed) must not point a distinct answer at another one */
  const kb=new Map(); out.forEach(it=>it.keys.forEach(k=>{ (kb.get(k)||kb.set(k,[]).get(k)).push(it); }));
  for(const [k,its] of kb){ const u=[...new Set(its)]; if(u.length<2) continue; u.forEach(it=>{ it.dupKeys=(it.dupKeys||new Set()); it.dupKeys.add(k); }); }
  p.items=out;
  p.items.forEach(it=>{ const alts=new Set();
    it.names.forEach(n=>alts.add(norm(n,p.strip,true)));
    it.keys.forEach(k=>{ for(const [a,b] of SYN) if((" "+k+" ").includes(" "+b+" ")) alts.add((" "+k+" ").replace(" "+b+" "," "+a+" ").trim()); });
    it.keys.forEach(k=>alts.delete(k)); it.alts=[...alts].filter(x=>x.length>=3); });
}
BANK.forEach(prep);
/* returns {type:"exact"|"suggest"|"none", item, display} */
function evaluate(p, raw){
  const n = norm(raw, p.strip); if(!n) return {type:"none"};
  const cu=ckey(norm(raw,[])); if(cu) for(const it of p.items) if(it.ck.includes(cu)) return {type:"exact", item:it};
  for(const it of p.items) if(it.keys.includes(n)) return {type:"exact", item:it};
  const cn=ckey(n); if(cn) for(const it of p.items) if(it.ck.includes(cn)) return {type:"exact", item:it};
  const n0 = norm(raw, p.strip, true);
  let best=null, bd=99, bname="", second=99, bk="", raw_d=99;
  const flip=(x,y)=>(/\bhypo/.test(x)&&/\bhyper|\bhigh/.test(y))||(/\bhyper/.test(x)&&/\bhypo|\blow/.test(y));
  const consider=(it,q,k,nm)=>{
    if(k.length<3) return;
    let d=dist(q,k); const d0=d;
    // a truncated word ("pheochromo") or a longer phrase containing the answer ("acute myocardial infarction")
    if(q.length>=4 && k.startsWith(q)) d=Math.min(d,1.5);
    if(k.length>=5 && (" "+q+" ").includes(" "+k+" ")) d=Math.min(d,1.2);
    if(flip(q,k)) d+=2;                                   // never turn hypo- into hyper-
    if(d<bd || (d===bd && best && it.pts>best.pts)){ if(best!==it) second=Math.min(second,bd); bd=d;best=it;bname=nm;bk=k;raw_d=d0; }
    else if(it!==best) second=Math.min(second,d);
  };
  for(const it of p.items){
    it.keys.forEach((k,ki)=>consider(it,n,k,it.names[ki]));
    (it.alts||[]).forEach(k=>consider(it,n0,k,it.names[0]));
  }
  const L=Math.max(n.length,n0.length);
  const tol = L<=3?0 : L<=5?1 : L<=8?2 : L<=12?3 : 4;
  if(best && bd<=tol+0.5){
    const show = dist(norm(bname,p.strip),norm(best.label,p.strip))<=2 ? best.label : bname;
    const typo = raw_d===bd;   // a real spelling slip, not a longer/shorter phrase
    const ROOT=/(kal|calc|natr|magnes|phosphat|chlor|glyc)/, rq=(n0.match(ROOT)||[])[1], rk=(bk.match(ROOT)||[])[1];
    const qs=n0.split(" "), ks=bk.split(" "), tiny=qs.length===ks.length && qs.some((w,i)=>w!==ks[i] && (w.length<=2||ks[i].length<=2));
    const CONF=[["nephrotic","nephritic"],["ileum","ilium"],["ileus","ileum"],["perineal","peroneal"],["dysphagia","dysphasia"],["aphagia","aphasia"],
      ["abduct","adduct"],["intra","inter"],["ostomy","otomy"],["ectomy","otomy"],["ectomy","ostomy"],["malleus","malleolus"],["humeral","humoral"],
      ["mucous","mucosa"],["ureter","urethr"],["metatars","metacarp"],["hypothen","thenar"],["arteri","ventri"],["atrial","atrium"],["axillary","maxillary"],
      ["celiac","cecal"],["prostatic","prostate"],["fistula","fissure"],["ascites","acites"],["cyst","cystic"],["insulin","inulin"]];
    const confusable=CONF.some(([x,y])=>(n0.includes(x)&&!n0.includes(y)&&bk.includes(y)&&!bk.includes(x))||(n0.includes(y)&&!n0.includes(x)&&bk.includes(x)&&!bk.includes(y)));
    if(confusable && raw_d===bd) return {type:"none"};   // a different real term, not a typo
    const risky = (rq&&rk&&rq!==rk) || tiny;       // vitamin a vs k, kalemia vs calcemia: ask instead
    const sure = !risky && second-bd>=1 && !flip(n0,bk) && ((typo && bd<=1 && L>=5) || (typo && bd<=2 && L>=10) || (bd===1.5 && L>=7 && L>=0.6*bk.length));
    if(rq&&rk&&rq!==rk) return {type:"none"};   // a different electrolyte/sugar term is a different answer
    return {type: sure?"auto":"suggest", item:best, display:display(show)};
  }
  return {type:"none"};
}
