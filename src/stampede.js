/* ===== DAILY STAMPEDE PROMPTS =====
   One prompt a day for every field. 60 seconds, name as many answers as you can.
   Answers are listed most-common first; points come from list position (5 → 98). */
const SRAW=[];
function S(q,strip,txt,added){ SRAW.push({q,strip,added:added||"2026-10-30",lines:txt.trim().split("\n").map(s=>s.trim()).filter(Boolean)}); }

S("Name a word ending in -itis","itis",`
arthritis
appendicitis
tonsillitis
bronchitis
sinusitis
gastritis
hepatitis
meningitis
dermatitis
tendinitis|tendonitis
conjunctivitis
colitis
pancreatitis
laryngitis
bursitis
gingivitis
otitis
pharyngitis
cellulitis
encephalitis
diverticulitis
cystitis
pneumonitis
myocarditis
pericarditis
endocarditis
nephritis
osteomyelitis
vaginitis
prostatitis
rhinitis
esophagitis
cholecystitis
pyelonephritis
glomerulonephritis
vasculitis
mastitis
uveitis
keratitis
blepharitis
iritis
gastroenteritis
enteritis
ileitis
proctitis
synovitis
myositis
neuritis
thyroiditis
stomatitis
glossitis
cheilitis
periodontitis
pulpitis
epididymitis
orchitis
urethritis
cervicitis
endometritis
salpingitis
oophoritis
phlebitis
thrombophlebitis
arteritis
aortitis
sialadenitis
parotitis
labyrinthitis
mastoiditis
epiglottitis
tracheitis
bronchiolitis
pleuritis
mediastinitis
peritonitis
omphalitis
balanitis
folliculitis
spondylitis
discitis
costochondritis
fasciitis
capsulitis
tenosynovitis
epicondylitis
polymyositis
dermatomyositis
radiculitis
myelitis
ventriculitis
cerebritis
chorioretinitis
retinitis
scleritis
episcleritis
dacryocystitis
dacryoadenitis
lymphangitis
lymphadenitis
appendagitis
typhlitis
cholangitis
duodenitis
jejunitis
pouchitis
pancarditis
valvulitis
sacroiliitis
enthesitis
osteitis
periostitis
chondritis
perichondritis
hidradenitis
panniculitis
vulvitis
vulvovaginitis
`);

S("Name a body part that comes in pairs","",`
eyes
ears
hands
feet
arms
legs
lungs
kidneys
knees
elbows
shoulders
hips
ankles
wrists
eyebrows
nostrils
cheeks
lips
thumbs
big toes
breasts
nipples
ovaries
testicles|testes
fallopian tubes
ureters
adrenal glands
tonsils
eardrums
thighs
calves
shins
heels
buttocks
armpits
collarbones|clavicles
shoulder blades|scapulae
temples
eyelids
tear ducts
jaw joints|tmj
hamstrings
quadriceps
biceps
triceps
pectorals
lats
obliques
kneecaps|patellas
femurs
tibias
fibulas
humerus
radius
ulna
parotid glands
submandibular glands
vocal cords
carotid arteries
jugular veins
vas deferens
seminal vesicles
cochleas
lacrimal glands
optic nerves
cerebral hemispheres
parathyroid glands
bronchi
iliac arteries
femoral arteries
sciatic nerves
vagus nerves
mastoid processes
hip bones|ilium
`);

S("Name a disease or sign named after a person","",`
alzheimer disease
parkinson disease
crohn disease
down syndrome
huntington disease
hodgkin lymphoma
graves disease
hashimoto thyroiditis
cushing syndrome
addison disease
lou gehrig disease|als
tourette syndrome
asperger syndrome
bell palsy
raynaud phenomenon
kaposi sarcoma
guillain barre syndrome
marfan syndrome
tay sachs disease
wilson disease
paget disease
sjogren syndrome
reiter syndrome
kawasaki disease
osgood schlatter disease
legg calve perthes disease
meniere disease
barrett esophagus
hirschsprung disease
whipple disease
peyronie disease
dupuytren contracture
tetralogy of fallot
wolff parkinson white
brugada syndrome
burkitt lymphoma
ewing sarcoma
wilms tumor
klinefelter syndrome
turner syndrome
prader willi syndrome
angelman syndrome
rett syndrome
williams syndrome
duchenne muscular dystrophy
becker muscular dystrophy
charcot marie tooth
friedreich ataxia
creutzfeldt jakob disease
von willebrand disease
christmas disease
fanconi anemia
diamond blackfan anemia
gaucher disease
niemann pick disease
fabry disease
pompe disease
hunter syndrome
hurler syndrome
cooley anemia
behcet disease
takayasu arteritis
buerger disease
wegener granulomatosis
churg strauss syndrome
goodpasture syndrome
alport syndrome
berger disease
conn syndrome
sheehan syndrome
kallmann syndrome
korsakoff syndrome
wernicke encephalopathy
munchausen syndrome
capgras delusion
stevens johnson syndrome
cushing triad
beck triad
virchow triad
murphy sign
mcburney point
babinski sign
romberg sign
homans sign
kernig sign
brudzinski sign
chvostek sign
trousseau sign
cullen sign
grey turner sign
kussmaul breathing
cheyne stokes breathing
austin flint murmur
osler nodes
janeway lesions
roth spots
koplik spots
auspitz sign
nikolsky sign
tinel sign
phalen test
lachman test
mcmurray test
apley test
finkelstein test
allen test
`);

S("Name a symptom","",`
fever
headache
cough
pain
nausea
vomiting
fatigue
dizziness
shortness of breath
chest pain
diarrhea
constipation
rash
itching
sore throat
runny nose
congestion
chills
sweating
muscle aches
joint pain
back pain
abdominal pain
bloating
heartburn
weakness
numbness
tingling
blurry vision
confusion
anxiety
insomnia
loss of appetite
weight loss
weight gain
swelling
palpitations
fainting
wheezing
sneezing
hoarseness
earache
ringing in ears|tinnitus
hearing loss
double vision
light sensitivity|photophobia
frequent urination
painful urination
blood in urine
blood in stool
black stool
cramps
tremor
seizure
memory loss
mood swings
irritability
thirst
dry mouth
hair loss
bruising
bleeding
nosebleed
hiccups
jaundice
pale skin
night sweats
hot flashes
stiffness
limping
trouble swallowing
drooling
slurred speech
hallucinations
paranoia
vertigo
loss of smell
loss of taste
coughing up blood
vomiting blood
incontinence
impotence
irregular periods
heavy periods
pelvic pain
discharge
lump
mole changes
cold intolerance
heat intolerance
clubbing
cyanosis
facial droop
neck stiffness
muscle twitching|fasciculations
restless legs
excessive sleepiness
yawning
flatulence
burping
dark urine
foamy urine
`);

S("Name a word ending in -ectomy (surgical removal)","ectomy",`
appendectomy
tonsillectomy
mastectomy
hysterectomy
vasectomy
cholecystectomy
colectomy
lumpectomy
splenectomy
thyroidectomy
nephrectomy
prostatectomy
gastrectomy
adenoidectomy
laminectomy
discectomy
lobectomy
pneumonectomy
oophorectomy
salpingectomy
myomectomy
craniectomy
orchiectomy
adrenalectomy
pancreatectomy
whipple|pancreaticoduodenectomy
esophagectomy
hepatectomy
parathyroidectomy
hemorrhoidectomy
polypectomy
cystectomy
ureterectomy
mastoidectomy
vitrectomy
iridectomy
trabeculectomy
keratectomy
sclerectomy
septectomy
turbinectomy
ethmoidectomy
sphenoidectomy
parotidectomy
glossectomy
laryngectomy
pharyngectomy
uvulectomy
frenectomy
gingivectomy
apicoectomy
pulpectomy
corpectomy
facetectomy
synovectomy
meniscectomy
bunionectomy
fasciectomy
sympathectomy
thymectomy
pericardiectomy
endarterectomy
embolectomy
thrombectomy
atherectomy
pleurectomy
bronchiectomy
segmentectomy
lymphadenectomy
omentectomy
trachelectomy
cervicectomy
vulvectomy
penectomy
epididymectomy
varicocelectomy
hypophysectomy
hemispherectomy
amygdalohippocampectomy
`);

S("Name a medical term that starts with hyper- or hypo-","",`
hypertension
hypotension
hypoglycemia
hyperglycemia
hypothyroidism
hyperthyroidism
hypothermia
hyperthermia
hyperactivity
hyperventilation
hypoxia
hyperkalemia
hypokalemia
hypernatremia
hyponatremia
hypercalcemia
hypocalcemia
hypermagnesemia
hypomagnesemia
hyperlipidemia
hypercholesterolemia
hyperhidrosis
hypochondria|hypochondriasis
hypersensitivity
hyperplasia
hypoplasia
hypertrophy
hypotonia
hypertonia
hyperreflexia
hyporeflexia
hyperopia
hypersomnia
hypomania
hypoventilation
hypovolemia
hypervolemia
hypoalbuminemia
hyperbilirubinemia
hyperuricemia
hyperparathyroidism
hypoparathyroidism
hyperaldosteronism
hypogonadism
hypopituitarism
hyperprolactinemia
hyperphosphatemia
hypophosphatemia
hyperchloremia
hypochloremia
hypercapnia
hypocapnia
hyperemesis
hyperemia
hypopigmentation
hyperpigmentation
hyperkeratosis
hypertrichosis
hyperextension
hyperflexion
hypermobility
hyperacusis
hyperalgesia
hypoesthesia
hyperesthesia
hypophysis
hypothalamus
hypodermis
hypoglossal nerve
hyperinsulinemia
hypoperfusion
hyperviscosity
hypocalcemic tetany
hyperosmolar
hypoosmolar
hypogammaglobulinemia
hypergammaglobulinemia
hyperammonemia
hypercoagulability
hypofibrinogenemia
hyperthyroxinemia
hypospadias
hypogastric
hypochondrium
hypoxemia
hyperoxia
hyperbaric
hypotonic
hypertonic
hyperthecosis
hyperostosis
hypokinesia
hyperkinesia
hyperpnea
hypopnea
hypomenorrhea
hypermenorrhea
`);

S("Name a word ending in -emia (a blood condition)","emia",`
anemia
leukemia
hypoglycemia
hyperglycemia
septicemia
hyperlipidemia
hyperkalemia
hypokalemia
hyponatremia
hypernatremia
hypocalcemia
hypercalcemia
ischemia
uremia
bacteremia
viremia
hypoxemia
thalassemia
hypercholesterolemia
hypomagnesemia
hypermagnesemia
hypophosphatemia
hyperphosphatemia
hypoalbuminemia
hyperbilirubinemia
hyperuricemia
toxemia
polycythemia
fungemia
parasitemia
hyperammonemia
acidemia
alkalemia
lipemia
hypervolemia
hypovolemia
hyperchloremia
hypochloremia
hypoproteinemia
hypergammaglobulinemia
hypogammaglobulinemia
agammaglobulinemia
cryoglobulinemia
macroglobulinemia
paraproteinemia
methemoglobinemia
sulfhemoglobinemia
hemoglobinemia
azotemia
glycemia
normoglycemia
hyperinsulinemia
hyperprolactinemia
hypertriglyceridemia
dyslipidemia
hyperhomocysteinemia
hyperoxemia
hypofibrinogenemia
afibrinogenemia
hyperthyroxinemia
hypercortisolemia
hyperferritinemia
hypoferremia
`);

S("Name something that raises your cancer risk","",`
smoking
alcohol
sun exposure|uv light
obesity
family history|genetics
age
hpv
radiation
asbestos
poor diet
processed meat
red meat
tanning beds
lack of exercise
hepatitis b
hepatitis c
brca mutation
air pollution
radon
benzene
chemotherapy
hormone replacement therapy
h pylori
chewing tobacco
vaping
hiv
epstein barr virus
diabetes
chronic inflammation
ulcerative colitis
crohn disease
barrett esophagus
cirrhosis
immunosuppression
organ transplant
x rays|ct scans
formaldehyde
arsenic
vinyl chloride
aflatoxin
diesel exhaust
night shift work
estrogen exposure
early first period
late menopause
no children|nulliparity
not breastfeeding
dense breasts
lynch syndrome
fap|familial adenomatous polyposis
li fraumeni syndrome
down syndrome
undescended testicle
betel nut
hot beverages
salted fish
nitrates
charred meat
coal tar
soot
silica
cadmium
nickel
chromium
beryllium
dioxins
pesticides
schistosomiasis
liver flukes
htlv 1
merkel cell polyomavirus
kshv|hhv8
tamoxifen
cyclophosphamide
des|diethylstilbestrol
`);

S("Name a leading cause of death","",`
heart disease
cancer
stroke
accidents|unintentional injuries
copd
alzheimer disease
diabetes
kidney disease
flu and pneumonia|pneumonia|influenza
suicide
liver disease
sepsis
covid
overdose
hypertension
homicide
falls
firearms
drowning
parkinson disease
hiv
tuberculosis
malaria
diarrheal disease
neonatal conditions
malnutrition
heart failure
alcohol
smoking
obesity
measles
hepatitis
war
fire
poisoning
sids
birth defects
pregnancy complications
meningitis
cirrhosis
`);

S("Name something in a first aid kit","",`
band aids|bandages
gauze
tape|medical tape
antiseptic wipes
gloves
scissors
tweezers
ice pack
antibiotic ointment|neosporin
pain reliever|ibuprofen|acetaminophen
elastic bandage|ace bandage
thermometer
alcohol wipes
cotton balls
hydrogen peroxide
burn gel
hand sanitizer
cpr mask
triangular bandage
safety pins
splint
aspirin
antihistamine|benadryl
hydrocortisone cream
eye wash
tourniquet
emergency blanket
flashlight
instructions|first aid manual
moleskin
butterfly closures|steri strips
calamine lotion
epinephrine|epipen
glucose tablets
oral rehydration salts
whistle
trauma shears
non stick pads
eye pads
finger splint
sterile water
saline
cold pack
heat pack
sunscreen
insect repellent
tick remover
naloxone|narcan
hemostatic gauze|quikclot
pressure dressing
blister pads
q tips|cotton swabs
`);
S("Name an infection","",`
flu|influenza
covid
strep throat
pneumonia
uti|urinary tract infection
cold|common cold
ear infection
sinus infection
chickenpox
measles
mumps
tuberculosis
hiv
hepatitis
herpes
shingles
mono|mononucleosis
lyme disease
malaria
pink eye|conjunctivitis
cellulitis
mrsa
c diff
staph infection
ringworm
athlete's foot
yeast infection
thrush
chlamydia
gonorrhea
syphilis
hpv
whooping cough|pertussis
meningitis
sepsis
impetigo
scabies
lice
pinworm
giardia
salmonella
e coli
norovirus
rotavirus
rsv
hand foot and mouth disease
scarlet fever
rubella
polio
tetanus
rabies
ebola
zika
dengue
west nile
cholera
typhoid
leprosy
plague
anthrax
botulism
tularemia
toxoplasmosis
histoplasmosis
coccidioidomycosis|valley fever
aspergillosis
cryptococcus
pneumocystis
cmv
ebv
hpv warts
molluscum
fifth disease
roseola
osteomyelitis
endocarditis
abscess
peritonitis
appendicitis
diverticulitis
pyelonephritis
encephalitis
epiglottitis
croup
bronchiolitis
legionnaires disease
q fever
brucellosis
leptospirosis
cat scratch disease
rocky mountain spotted fever
ehrlichiosis
babesiosis
chagas disease
sleeping sickness
leishmaniasis
schistosomiasis
hookworm
tapeworm
trichomoniasis
mycoplasma
listeria
diphtheria
nocardia
actinomycosis
mucormycosis
candida auris
`);

S("Name a body fluid or secretion","",`
blood
urine
saliva
sweat
tears
mucus
semen
breast milk
bile
vomit
stomach acid|gastric juice
plasma
lymph
cerebrospinal fluid|csf
pus
earwax|cerumen
snot
phlegm|sputum
amniotic fluid
synovial fluid
serum
vaginal fluid
menstrual blood
sebum|skin oil
interstitial fluid
pleural fluid
pericardial fluid
peritoneal fluid
aqueous humor
vitreous humor
colostrum
pre ejaculate
smegma
meconium
feces|stool
chyme
chyle
pancreatic juice
intestinal juice
endolymph
perilymph
surfactant
lochia
rheum|eye crust
exudate
transudate
ascites
`);

S("Name a reason someone goes to the ER","",`
chest pain
broken bone
car accident
shortness of breath
abdominal pain
stroke symptoms
heart attack
bleeding
cuts|laceration
high fever
head injury
allergic reaction
overdose
seizure
fainting
burns
poisoning
asthma attack
dehydration
vomiting
severe headache
kidney stones
back pain
sprain
dog bite
suicidal thoughts
psychosis
labor
pregnancy bleeding
gunshot wound
stab wound
fall
appendicitis
eye injury
foreign object
choking
low blood sugar
high blood sugar
sepsis
blood clot
pneumonia
covid
flu
uti
dental pain
nosebleed
rash
sore throat
earache
alcohol intoxication
sexual assault
domestic violence
heat stroke
frostbite
snake bite
spider bite
drowning
electrocution
dizziness
confusion
testicular pain
miscarriage
`);

S("Name a condition with \"syndrome\" in its name","syndrome",`
down syndrome
irritable bowel syndrome|ibs
polycystic ovary syndrome|pcos
carpal tunnel syndrome
tourette syndrome
asperger syndrome
restless legs syndrome
chronic fatigue syndrome
sudden infant death syndrome|sids
metabolic syndrome
cushing syndrome
guillain barre syndrome
marfan syndrome
turner syndrome
klinefelter syndrome
fetal alcohol syndrome
toxic shock syndrome
stevens johnson syndrome
serotonin syndrome
neuroleptic malignant syndrome
compartment syndrome
nephrotic syndrome
nephritic syndrome
acute respiratory distress syndrome|ards
reye syndrome
kawasaki syndrome
sjogren syndrome
raynaud syndrome
horner syndrome
cauda equina syndrome
brugada syndrome
long qt syndrome
wolff parkinson white syndrome
sick sinus syndrome
prader willi syndrome
angelman syndrome
rett syndrome
williams syndrome
ehlers danlos syndrome
antiphospholipid syndrome
hellp syndrome
hemolytic uremic syndrome
dumping syndrome
short bowel syndrome
burning mouth syndrome
dry eye syndrome
piriformis syndrome
thoracic outlet syndrome
patellofemoral pain syndrome
it band syndrome
complex regional pain syndrome
myelodysplastic syndrome
tumor lysis syndrome
refeeding syndrome
cardiorenal syndrome
hepatorenal syndrome
hepatopulmonary syndrome
conn syndrome
sheehan syndrome
kallmann syndrome
korsakoff syndrome
munchausen syndrome
stockholm syndrome
impostor syndrome
broken heart syndrome|takotsubo
lambert eaton syndrome
goodpasture syndrome
alport syndrome
churg strauss syndrome
zollinger ellison syndrome
peutz jeghers syndrome
lynch syndrome
li fraumeni syndrome
gilbert syndrome
dubin johnson syndrome
crigler najjar syndrome
budd chiari syndrome
mallory weiss syndrome
boerhaave syndrome
pickwickian syndrome
alice in wonderland syndrome
foreign accent syndrome
alien hand syndrome
stiff person syndrome
cri du chat syndrome
edwards syndrome
patau syndrome
digeorge syndrome
noonan syndrome
waardenburg syndrome
treacher collins syndrome
pierre robin syndrome
apert syndrome
crouzon syndrome
sturge weber syndrome
wiskott aldrich syndrome
chediak higashi syndrome
job syndrome
bartter syndrome
gitelman syndrome
liddle syndrome
fanconi syndrome
`);

S("Name a medical term with a color in it","",`
black lung
blue baby
yellow fever
pink eye
red eye
white blood cell
red blood cell
black eye
scarlet fever
green stool
black stool
yellow jaundice
blue lips
black death
white matter
gray matter
brown fat
white fat
red meat allergy
rubella
melanoma
leukemia
cyanosis
erythema
leukoplakia
erythroplakia
melena
black hairy tongue
blue sclera
red man syndrome
white coat hypertension
blue bloater
pink puffer
redcurrant jelly stool
black widow bite
brown recluse bite
purple toe syndrome
blue toe syndrome
white strawberry tongue
red strawberry tongue
yellow nail syndrome
green nail syndrome
chloroma
xanthoma
xanthelasma
melasma
red flag
code blue
code red
yellow card
black box warning
silver nitrate
gentian violet
methylene blue
brown tumor
white pupil|leukocoria
cherry red spot
orange peel skin|peau d orange
blue nevus
red pulp
white pulp
pink tetralogy
blueberry muffin baby
maroon stool
`);

S("Name a medical sign or term named after a food","",`
strawberry tongue
cherry red spot
coffee ground emesis
currant jelly stool
apple core lesion
onion skin
cauliflower ear
nutmeg liver
rice water stool
pea soup diarrhea
cottage cheese discharge
port wine stain
salmon patch
cafe au lait spots
popcorn calcification
milk leg
sausage digit|dactylitis
oat cell carcinoma
bread and butter pericarditis
honeycomb lung
corn
egg shell calcification
sago spleen
blueberry muffin baby
chocolate cyst
anchovy paste abscess
strawberry hemangioma
raspberry tongue
peau d orange
mulberry molars
mulberry stone
lemon sign
banana sign
olive sign
coffee bean sign
grape like cysts|hydatidiform mole
cherry angioma
apple green birefringence
bamboo spine
salt and pepper skull
cheese like caseous necrosis|caseous necrosis
pepper pot skull
melon seed bodies
watermelon stomach
`);

S("Name a medical sign or term named after an animal","",`
bird flu
swine flu
chickenpox
bull's eye rash
crow's feet
pigeon toed
pigeon chest
frog leg position
buffalo hump
cat scratch fever
lobster claw hand
monkey pox|mpox
mad cow disease
horseshoe kidney
fish mouth
duck walk|waddling gait
swan neck deformity
goose egg
camel back curve
spider veins
spider angioma
cobra head sign
owl eye inclusions
rat bite fever
mouse tooth
lion face|leonine facies
elephantiasis
seal bark cough
bat wing opacities
bird beak sign
tadpole pupils
parrot fever|psittacosis
tiger striping
leopard skin
zebra stripe sign
fish scale skin|ichthyosis
cat eye syndrome
cri du chat
staghorn calculus
beaver tail liver
mickey mouse sign
hummingbird sign
panda sign
scottie dog sign
gull wing sign
crab louse
butterfly rash
bulldog clamp
`);

S("Name a disease you can catch from animals","",`
rabies
lyme disease
bird flu
salmonella
swine flu
ringworm
cat scratch disease
toxoplasmosis
plague
west nile virus
malaria
mad cow disease
ebola
covid
hantavirus
leptospirosis
brucellosis
anthrax
tularemia
q fever
psittacosis|parrot fever
e coli
campylobacter
tapeworm
roundworm|toxocariasis
hookworm
giardia
rocky mountain spotted fever
ehrlichiosis
mpox|monkeypox
mers
nipah virus
hendra virus
marburg virus
lassa fever
zika
yellow fever
dengue
rat bite fever
trichinosis
listeria
echinococcus|hydatid disease
cryptosporidium
bovine tuberculosis
leishmaniasis
chagas disease
sleeping sickness
rift valley fever
orf
cowpox
glanders
melioidosis
pasteurella
capnocytophaga
herpes b virus
streptococcus suis
`);

S("Name something measured at a checkup","",`
blood pressure
weight
height
heart rate|pulse
temperature
bmi
oxygen saturation
respiratory rate
cholesterol
blood sugar
vision
hearing
waist circumference
head circumference
reflexes
a1c
blood count|cbc
pain level
mood|depression screening
growth percentiles
kidney function
liver enzymes
thyroid|tsh
vitamin d
urine
skin check
breast exam
pap smear
psa
bone density
peak flow
ecg
grip strength
balance
memory
diet
alcohol use
smoking status
vaccines
development milestones
`);

S("Name a healthy habit","",`
exercise
drinking water
sleep
eating vegetables
eating fruit
not smoking
limiting alcohol
brushing teeth
flossing
washing hands
sunscreen
meditation
walking
stretching
yoga
seeing a doctor|checkups
eating fiber
limiting sugar
limiting salt
stress management
socializing
reading
deep breathing
journaling
wearing a seatbelt
wearing a helmet
getting vaccinated
taking stairs
standing more
eating breakfast
portion control
cooking at home
limiting screen time
time outside
gratitude
therapy
eating fish
eating nuts
whole grains
strength training
cardio
cancer screening
dental checkups
skin checks
sleeping 8 hours
consistent bedtime
hobbies
volunteering
safe sex
limiting caffeine
limiting processed food
mindful eating
posture
hydration
`);
S("Name a word ending in -osis","osis",`
osteoporosis
tuberculosis
cirrhosis
scoliosis
thrombosis
fibrosis
cystic fibrosis
psychosis
neurosis
halitosis
diagnosis
prognosis
mononucleosis
endometriosis
multiple sclerosis
atherosclerosis
arteriosclerosis
kyphosis
lordosis
stenosis
necrosis
acidosis
alkalosis
ketoacidosis
hypnosis
cyanosis
ketosis
sclerosis
sarcoidosis
amyloidosis
toxoplasmosis
histoplasmosis
dermatosis
keratosis
ichthyosis
narcosis
osmosis
mitosis
meiosis
apoptosis
phagocytosis
leukocytosis
thrombocytosis
erythrocytosis
spherocytosis
hemochromatosis
hemosiderosis
silicosis
asbestosis
pneumoconiosis
byssinosis
berylliosis
diverticulosis
nephrosis
hydronephrosis
ptosis
proptosis
miosis
leptospirosis
brucellosis
listeriosis
salmonellosis
shigellosis
cryptosporidiosis
trichinosis
babesiosis
ehrlichiosis
anaplasmosis
cysticercosis
neurocysticercosis
echinococcosis
aspergillosis
mucormycosis
coccidioidomycosis
blastomycosis
cryptococcosis
nocardiosis
actinomycosis
psittacosis
myelofibrosis
otosclerosis
spondylosis
synostosis
craniosynostosis
ankylosis
arthrosis
fibromatosis
neurofibromatosis
adenomyosis
gliosis
lymphocytosis
monocytosis
granulomatosis
histiocytosis
mastocytosis
porokeratosis
hyperkeratosis
acanthosis nigricans
steatosis
anastomosis
symbiosis
metamorphosis
`);

S("Name a word ending in -oma (a growth or tumor)","oma",`
melanoma
carcinoma
lymphoma
sarcoma
glaucoma
hematoma
lipoma
fibroma
adenoma
myeloma
multiple myeloma
glioma
glioblastoma
meningioma
neuroma
acoustic neuroma
blastoma
neuroblastoma
retinoblastoma
nephroblastoma
hepatoblastoma
medulloblastoma
osteosarcoma
osteoma
chondroma
chondrosarcoma
leiomyoma
leiomyosarcoma
rhabdomyosarcoma
angioma
hemangioma
lymphangioma
mesothelioma
teratoma
seminoma
thymoma
insulinoma
gastrinoma
glucagonoma
vipoma
somatostatinoma
pheochromocytoma
paraganglioma
craniopharyngioma
astrocytoma
ependymoma
oligodendroglioma
schwannoma
neurofibroma
papilloma
condyloma
granuloma
xanthoma
cholesteatoma
chordoma
ameloblastoma
odontoma
cementoblastoma
myxoma
atrial myxoma
fibroadenoma
cystadenoma
hepatoma
cholangiocarcinoma
hamartoma
choristoma
seroma
trachoma
atheroma
dermatofibroma
keratoacanthoma
syringoma
pilomatricoma
angiofibroma
angiomyolipoma
oncocytoma
prolactinoma
macroadenoma
microadenoma
plasmacytoma
mycetoma
chloroma
`);

S("Name a word ending in -scopy (a look inside)","scopy",`
colonoscopy
endoscopy
laparoscopy
arthroscopy
bronchoscopy
cystoscopy
sigmoidoscopy
microscopy
otoscopy
ophthalmoscopy
laryngoscopy
hysteroscopy
colposcopy
fluoroscopy
thoracoscopy
mediastinoscopy
esophagoscopy
gastroscopy
duodenoscopy
enteroscopy
proctoscopy
anoscopy
ureteroscopy
nephroscopy
rhinoscopy
nasopharyngoscopy
fetoscopy
amnioscopy
culdoscopy
angioscopy
choledochoscopy
cholangioscopy
dermoscopy
capillaroscopy
spectroscopy
retinoscopy
gonioscopy
pharyngoscopy
tracheoscopy
ventriculoscopy
`);

S("Name a common allergy or allergen","",`
peanuts
pollen
dust mites
cats
dogs
penicillin
shellfish
tree nuts
milk|dairy
eggs
bee stings
latex
mold
wheat
soy
fish
sesame
grass
ragweed
sulfa drugs
cockroaches
nickel
perfume|fragrance
aspirin
nsaids
insect stings
wasps
fire ants
horses
rabbits
feathers
red meat|alpha gal
strawberries
kiwi
bananas
avocado
corn
mustard
celery
lupin
sulfites
msg
food dye|red dye
iodine contrast|contrast dye
codeine
morphine
cephalosporins
local anesthetics
adhesive tape
neomycin
poison ivy
hair dye
sunscreen
cold|cold urticaria
sunlight
chlorhexidine
`);

S("Name a sign of aging","",`
wrinkles
gray hair
hair loss
age spots
memory loss
vision changes|presbyopia
hearing loss
joint pain
arthritis
osteoporosis
weight gain
loss of muscle|sarcopenia
slower metabolism
menopause
fatigue
sagging skin
dry skin
cataracts
balance problems
slower reflexes
incontinence
insomnia
crow's feet
thinning skin
easy bruising
loss of height
stooped posture
high blood pressure
stiff arteries
constipation
loss of smell
loss of taste
thinning nails
brittle bones
enlarged prostate
dry eyes
macular degeneration
gum recession
tooth loss
liver spots
reduced kidney function
slower healing
frailty
`);

S("Name something that raises blood pressure","",`
salt
stress
caffeine
smoking
alcohol
obesity
lack of exercise
pain
anxiety
kidney disease
decongestants
nsaids|ibuprofen
birth control pills
sleep apnea
pregnancy|preeclampsia
genetics
age
diabetes
cocaine
amphetamines
licorice
steroids|prednisone
thyroid disease
cushing syndrome
hyperaldosteronism
pheochromocytoma
renal artery stenosis
coarctation of the aorta
energy drinks
white coat syndrome
cold weather
full bladder
exercise
sex
anger
dehydration
tyramine with maois
venlafaxine
cyclosporine
tacrolimus
erythropoietin
ketamine
epinephrine
yohimbine
ginseng
withdrawal of clonidine
`);

S("Name something that weakens the immune system","",`
stress
lack of sleep
poor diet
hiv
chemotherapy
steroids|prednisone
diabetes
smoking
alcohol
aging
cancer
malnutrition
organ transplant drugs|immunosuppressants
pregnancy
obesity
radiation
lupus
rheumatoid arthritis drugs
biologics
leukemia
lymphoma
kidney failure
liver cirrhosis
splenectomy|no spleen
vitamin d deficiency
zinc deficiency
sedentary lifestyle
burns
sepsis
measles
diGeorge syndrome
scid
common variable immunodeficiency
methotrexate
tacrolimus
cyclosporine
rituximab
tnf inhibitors
jak inhibitors
loneliness
depression
`);

S("Name a part of the head or face","",`
eyes
nose
mouth
ears
lips
chin
cheeks
forehead
eyebrows
eyelashes
eyelids
jaw
teeth
tongue
hair
scalp
temples
skull
brain
nostrils
gums
throat
earlobe
philtrum
bridge of nose
septum
jawline
cheekbones
dimples
eye sockets
sinuses
palate
uvula
tonsils
adenoids
eardrum
temporomandibular joint|tmj
mandible
maxilla
zygomatic bone
occiput|back of the head
crown
hairline
widow's peak
tear ducts
iris
pupil
tragus
helix
nasal ala
columella
glabella
vermilion border
nasolabial fold
masseter
frontal bone
parietal bone
temporal bone
sphenoid
ethmoid
fontanelle
mastoid
`);

S("Name a chronic disease","",`
diabetes
high blood pressure
heart disease
asthma
copd
arthritis
cancer
kidney disease
alzheimer disease
obesity
depression
hiv
osteoporosis
multiple sclerosis
parkinson disease
lupus
crohn disease
ulcerative colitis
psoriasis
epilepsy
migraine
fibromyalgia
celiac disease
hypothyroidism
heart failure
atrial fibrillation
cirrhosis
hepatitis b
hepatitis c
sickle cell disease
cystic fibrosis
chronic pain
sleep apnea
gerd
ibs
eczema
gout
glaucoma
macular degeneration
schizophrenia
bipolar disorder
als
myasthenia gravis
sarcoidosis
pulmonary hypertension
endometriosis
pcos
chronic fatigue syndrome
hemophilia
scleroderma
`);

/* build: rank points by list position, then reuse the same matching as the daily */
const STAMP = SRAW.map(r=>{ const N=r.lines.length;
  const p={q:r.q, cat:"stampede", added:r.added, strip:r.strip?r.strip.split(" "):[],
    a:[...r.lines.map((l,k)=>[Math.min(99,Math.round(5+93*Math.pow(k/(N-1),1.1))), l]),
       ...CROWD.filter(c=>c.q===r.q).map(c=>[c.pts,c.names,true])]};
  prep(p); return p; });

/* crowd aliases: extra spellings for answers already on a list (applied after everything is built) */
CROWD_ALIAS.forEach(a=>{ const p=[...BANK,...STAMP].find(x=>x.q===a.q); if(!p) return;
  const r=evaluate(p,a.existing); if(r.type!=="exact") return; const it=r.item;
  a.names.split("|").map(s=>s.trim()).filter(Boolean).forEach(nm=>{ const k=norm(nm,p.strip); if(it.keys.includes(k)) return;
    it.names.push(nm); it.keys.push(k); const u=norm(nm,[]); it.ck.push(ckey(u)||u); it.alts=(it.alts||[]).concat([norm(nm,p.strip,true)]); }); });
