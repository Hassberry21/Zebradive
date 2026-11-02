/* Triage candidates against the CURRENT game (after python3 src/build.py).
   Usage: node src/triage.js candidates.json
   candidates.json = [{"prompt":"...","guess":"..."}, ...]
   Prints, for each: ALREADY (it already scores as an answer: exact or auto-corrected), SUGGEST (close to
   an existing answer: likely a typo -> add as crowdAlias if it is truly the same thing), NEW (not on the list),
   or NOPROMPT (prompt text not found). */
const fs=require('fs'), path=require('path');
eval(fs.readFileSync(path.join(__dirname,'.logic.js'),'utf8')+';global.BANK=BANK;global.STAMP=STAMP;global.evaluate=evaluate;');
const all=[...BANK,...STAMP];
const cands=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
for(const c of cands){ const p=all.find(x=>x.q===c.prompt);
  if(!p){ console.log(JSON.stringify({...c,result:'NOPROMPT'})); continue; }
  const r=evaluate(p,c.guess);
  const tops=[...p.items].sort((a,b)=>a.pts-b.pts);
  console.log(JSON.stringify({...c, result: r.type==='exact'||r.type==='auto'?'ALREADY':r.type==='suggest'?'SUGGEST':'NEW',
    matches: r.item?r.item.label:null, matchPts: r.item?r.item.pts:null, answersOnList: p.items.length}));
}
