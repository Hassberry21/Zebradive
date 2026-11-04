/* Lists the STANDARD prompts of one field with their current answers, for the board-content audit.
   Usage (after python3 src/build.py):  node src/dump_prompts.js <medicine|nursing|pharmacy|dental|stampede> [--todo]
   --todo skips prompts already recorded in src/board_audit_done.json.
   Order = audit priority: daily prompts in the order players will next see them, then practice prompts. */
const fs=require('fs'),path=require('path');
const L=fs.readFileSync(path.join(__dirname,'.logic.js'),'utf8');
const T=fs.readFileSync(path.join(__dirname,'template.html'),'utf8');
const grab=(a,b)=>{const i=T.indexOf(a),j=T.indexOf(b,i);if(i<0||j<0)throw new Error('template changed: '+a);return T.slice(i,j);};
const part=grab('function rng(seed)','\nfunction shuffle')+'\n'+grab('function shuffle(a,r)','\n')+'\n'+grab('const EPOCH=new Date','/* PRACTICE:');
global.localStorage={getItem:()=>null,setItem:()=>{}};
const field=process.argv[2], todo=process.argv.includes('--todo');
const done=JSON.parse(fs.readFileSync(path.join(__dirname,'board_audit_done.json'),'utf8')).done;
const PROF={medicine:'physician',nursing:'nurse',pharmacy:'pharmacist',dental:'dentist',stampede:'physician'}[field];
if(!PROF){console.error('field must be medicine, nursing, pharmacy, dental or stampede');process.exit(1);}
eval(L+'\nfunction store(){return null}\nlet prof=PROF;\n'+part+`
let list;
if(field==='stampede') list=STAMP.map(p=>[p,'']);
else { const today=dayIndex(), k=poolKey(), seen=[];
  for(let d=today; d<today+400 && seen.length<POOLS_D[k].length; d++) dailyIdsFor(prof,d).forEach(i=>{ if(!seen.includes(i)) seen.push(i); });
  POOLS_D[k].forEach(i=>{ if(!seen.includes(i)) seen.push(i); });
  list=[...seen.map(i=>[BANK[i],'']), ...POOLS_P[k].map(i=>[BANK[i],'  [practice]'])]; }
for(const [p,tag] of list){ if(todo && done[p.q]) continue;
  const items=p.items||[]; console.log('## '+p.q+tag+'  ('+items.length+' answers)');
  console.log(items.map(it=>it.names.join('|')).join('; ')); }
`);
