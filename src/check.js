/* Safety check before publishing:  node src/check.js   (run after python3 src/build.py)
   Fails (exit 1) if a crowd answer points at a missing prompt, doesn't match its own prompt,
   or if any listed answer stops scoring as itself. */
const fs=require('fs'), path=require('path');
const code=fs.readFileSync(path.join(__dirname,'.logic.js'),'utf8');
eval(code+';global.BANK=BANK;global.STAMP=STAMP;global.CROWD=CROWD;global.evaluate=evaluate;');
let bad=[];
const all=[...BANK,...STAMP];
for(const c of CROWD){
  const p=all.find(x=>x.q===c.q); if(!p){ bad.push('no such prompt: '+c.q); continue; }
  for(const nm of c.names.split('|')){ const r=evaluate(p,nm); if(r.type!=='exact') bad.push(`"${nm}" does not match on "${c.q}"`); }
}
let n=0; for(const p of all) for(const it of p.items) for(const nm of it.names){ n++; const r=evaluate(p,nm); if(r.item!==it && !/^hla /.test(nm)) bad.push(`"${nm}" on "${p.q}" scores as "${r.item&&r.item.label}"`); }
if(BANK.length<439||STAMP.length<29) bad.push('prompt count dropped: '+BANK.length+'/'+STAMP.length);
console.log(`prompts ${BANK.length} + stampede ${STAMP.length} · answer spellings ${n} · crowd answers ${CROWD.length}`);
if(bad.length){ console.log('FAILED:\n'+bad.slice(0,50).join('\n')); process.exit(1); }
console.log('OK');
