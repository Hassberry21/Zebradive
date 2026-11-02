"""Build the public website (index.html) from the game file, adding SEO, social tags,
structured data, an About/FAQ section and Vercel Analytics.  Usage: python3 build_site.py GAME.html OUT.html"""
import sys, json
game, out = sys.argv[1], sys.argv[2]
t = open(game).read()
URL = "https://www.zebradive.io/"
TITLE = "Zebra: Daily Healthcare Trivia Game for Med, Nursing, Pharmacy & Dental Students"
DESC = ("Zebra is a free daily healthcare trivia game. Name a cause, drug or sign, and the rarer your correct "
        "answer, the deeper your zebra dives. Medicine, nursing, pharmacy and dental modes, plus board prep "
        "for USMLE, PANCE, NP boards, NCLEX, NAPLEX and dental boards.")

faq = [
 ("What is Zebra?", "Zebra is a free daily trivia game for healthcare students and professionals. Every day you get 7 prompts, like \"Name a cause of chest pain\" or \"Name an antibiotic.\" Correct but obvious answers barely score; rare correct answers send your zebra diving deep. The name comes from the medical saying \"when you hear hoofbeats, think horses, not zebras.\""),
 ("How do you play?", "Pick your field, read the prompt and type one answer within 20 seconds. Wrong answers don't end the round, so you can keep guessing or pass. Small typos get a \"Did you mean…?\" prompt. Each point is 10 µm of depth, and a perfect game reaches 7,000 µm."),
 ("Which fields are included?", "Medicine (for physicians, PAs and NPs), Nursing, Pharmacy and Dental each have their own daily prompts, and Mixed blends them all. Each field gets a new set of 7 prompts every midnight, the same for everyone in that field."),
 ("Is there board exam practice?", "Yes. Board Prep mode has exam-style prompts for USMLE and COMLEX, the PANCE, NP boards (AANP and ANCC), the NCLEX, the NAPLEX and dental boards."),
 ("How are scores ranked?", "After each daily dive you see a bell curve and a percentile that compare you only with people in your own profession and mode, plus a career title from student to the top of your field. Daily streaks track how many days in a row you've played."),
 ("Is Zebra free?", "Yes. Zebra is free, needs no account and works in any browser on phone or computer."),
]

head = f'''<meta name="description" content="{DESC}">
<link rel="canonical" href="{URL}">
<meta name="robots" content="index, follow">
<meta name="keywords" content="healthcare trivia game, medical trivia, nursing game, pharmacy trivia, dental trivia, NCLEX practice game, USMLE practice game, PANCE practice, NAPLEX practice, daily medical game, medical Wordle">
<meta name="theme-color" content="#0c0a20">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Zebra">
<meta property="og:url" content="{URL}">
<meta property="og:title" content="Zebra: the daily healthcare trivia dive">
<meta property="og:description" content="7 new healthcare prompts every day. Obvious answers barely move you; rare ones send your zebra diving deep. Medicine, nursing, pharmacy, dental and board prep.">
<meta property="og:image" content="{URL}og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Zebra pixel-art logo: a zebra standing on layers of skin, with the text Hoofbeats? Think zebras.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Zebra: the daily healthcare trivia dive">
<meta name="twitter:description" content="Rare answers score big. Daily prompts for medicine, nursing, pharmacy and dental, plus board prep.">
<meta name="twitter:image" content="{URL}og-image.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<script type="application/ld+json">{json.dumps({
  "@context":"https://schema.org",
  "@graph":[
    {"@type":"WebSite","@id":URL+"#website","url":URL,"name":"Zebra","alternateName":"Zebradive","description":DESC,"inLanguage":"en"},
    {"@type":"WebApplication","@id":URL+"#game","name":"Zebra","url":URL,"applicationCategory":"GameApplication",
     "genre":["Trivia","Educational game"],"operatingSystem":"Any (web browser)","isAccessibleForFree":True,
     "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},
     "audience":{"@type":"EducationalAudience","educationalRole":"student","audienceType":"Healthcare students and professionals"},
     "about":["Medicine","Nursing","Pharmacy","Dentistry","USMLE","NCLEX","NAPLEX","PANCE"],
     "image":URL+"og-image.png","description":DESC},
    {"@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in faq]}
  ]}, ensure_ascii=False)}</script>
'''

analytics = '''<!-- Vercel Web Analytics (only active when hosted on Vercel) -->
<script>window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };</script>
<script defer src="/_vercel/insights/script.js"></script>
'''

about = '<details class="about"><summary>ABOUT ZEBRA &amp; FAQ</summary>\n' + \
  '<p>Zebra is a free <strong>daily healthcare trivia game</strong> for medical, nursing, pharmacy, dental, PA and NP students and professionals.</p>\n' + \
  "".join(f"<h3>{q}</h3>\n<p>{a}</p>\n" for q,a in faq) + \
  '<p class="credit">Rarity-scoring mechanic inspired by Krillion. Answer lists and rarity scores are estimates for learning and fun, not medical advice.</p>\n</details>'

css = '''.about{margin-top:14px;text-align:left;font-size:14px;color:#cfc9e6;border-top:2px dashed var(--line);padding-top:10px}
.about summary{cursor:pointer;font-family:Silkscreen,monospace;font-size:11px;letter-spacing:1px;color:var(--muted);text-align:center;list-style:none}
.about summary::-webkit-details-marker{display:none}
.about[open] summary{margin-bottom:8px;color:#fff}
.about h3{font-family:Silkscreen,monospace;font-size:12px;color:var(--purple2);margin:12px 0 4px;font-weight:400}
.about p{margin:4px 0 6px;line-height:1.45}
.about .credit{font-size:12px;color:#8a83a8}
h1.logo{font-weight:400}
'''

# --- apply ---
assert '<title>' in t and '</head>' in t
import re
t = re.sub(r'<title>.*?</title>', f'<title>{TITLE}</title>', t, count=1, flags=re.S)
t = t.replace('<title>', head + '<title>', 1)
t = t.replace('</head>', analytics + '</head>', 1)
t = t.replace('/* end */', css + '/* end */', 1)
# make the logo a real <h1>
t = t.replace('<div class="logo">ZEBRA</div>', '<h1 class="logo" aria-label="Zebra">ZEBRA</h1>', 1)
# About/FAQ at the bottom of the title panel
anchor = '<div class="fine" id="tInfo"></div>'
assert anchor in t
t = t.replace(anchor, anchor + '\n  ' + about, 1)
# readable fallback for crawlers / no-JS
t = t.replace('<body>', '<body>\n<noscript><p style="padding:20px;color:#fff;font-family:sans-serif">Zebra is a daily healthcare trivia game for medicine, nursing, pharmacy and dental. Please enable JavaScript to play.</p></noscript>', 1)
open(out,'w').write(t)
print("built", out, len(t)//1024, "KB")
