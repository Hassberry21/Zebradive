"""Build the game and the website.  Usage (from the repo root):  python3 src/build.py
   src/template.html + src/bank.js (+ src/crowd.js) + src/stampede.js  ->  game.html (temp)  ->  index.html"""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__)); root = os.path.dirname(here)
r = lambda f: open(os.path.join(here, f), encoding="utf-8").read()
logic = r("bank.js").replace("/*CROWD*/", r("crowd.js"), 1) + "\n" + r("stampede.js")
game = r("template.html").replace("/*LOGIC*/", logic, 1)
tmp = os.path.join(here, ".game.html"); open(tmp, "w", encoding="utf-8").write(game)
open(os.path.join(here, ".logic.js"), "w", encoding="utf-8").write(logic)
subprocess.run([sys.executable, os.path.join(here, "build_site.py"), tmp, os.path.join(root, "index.html")], check=True)
