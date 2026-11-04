/* Prints the daily prompt schedule for every field from launch (Oct 30) through a given day, as JSON.
   Use it to prove new prompts don't change past or current days:
     node src/schedule_snapshot.js 2026-11-05 > /tmp/before.json   (before adding prompts)
     ...add prompts, python3 src/build.py...
     node src/schedule_snapshot.js 2026-11-05 > /tmp/after.json && cmp /tmp/before.json /tmp/after.json
   Also: node src/schedule_snapshot.js --repeats 2026-12-31  lists, per field, the first day a public player would see a repeat. */
const fs=require('fs'),path=require('path');
const L=fs.readFileSync(path.join(__dirname,'.logic.js'),'utf8');
const T=fs.readFileSync(path.join(__dirname,'template.html'),'utf8');
const grab=(start,end)=>{const a=T.indexOf(start),b=T.indexOf(end,a);if(a<0||b<0)throw new Error('template changed: '+start);return T.slice(a,b);};
const part=grab('function rng(seed)','\nfunction shuffle')+'\n'+grab('function shuffle(a,r)','\n')+'\n'+grab('const EPOCH=new Date','/* PRACTICE:');
global.localStorage={getItem:()=>null,setItem:()=>{}};
const args=process.argv.slice(2), rep=args[0]==='--repeats', until=(rep?args[1]:args[0])||'2026-11-05';
eval(L+'\nfunction store(){return null}\nlet prof="physician";\n'+part+`
const [y,m,d]=until.split('-').map(Number); const last=Math.round((new Date(y,m-1,d)-EPOCH)/864e5), LAUNCH=29;
const fields=["physician","nurse","pharmacist","dentist","other"], out={};
const ds=i=>{const t=new Date(EPOCH);t.setDate(t.getDate()+i);return t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0');};
for(const mode of ["standard","board"]){ MODE=mode; for(const f of fields){ prof=f; const k=mode+':'+f; out[k]={}; const seen=new Set(); let first=null;
  for(let i=LAUNCH;i<=last;i++){ const q=dailyIdsFor(f,i).map(j=>BANK[j].q); out[k][ds(i)]=q; if(rep&&!first&&q.some(x=>seen.has(x))) first=ds(i); q.forEach(x=>seen.add(x)); }
  if(rep) console.log(k.padEnd(20), 'pool', String(POOLS_D[poolKey(f)].length).padStart(4), ' first public repeat:', first||'none before '+until); }}
if(!rep) console.log(JSON.stringify(out,null,1));
`);
