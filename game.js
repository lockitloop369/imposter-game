/* ---------- words: [language name, categories, food, animals, places, objects, jobs] — same order in every language ---------- */
const RAW={
en:['English','Food|Animals|Places|Objects|Jobs','Pizza|Rice|Bread|Egg|Milk|Apple|Banana|Mango|Tea|Ice cream','Dog|Cat|Elephant|Lion|Tiger|Monkey|Horse|Cow|Snake|Fish','School|Hospital|Airport|Beach|Market|Library|Park|Restaurant|Cinema|Zoo','Phone|Chair|Clock|Umbrella|Key|Mirror|Book|Shoe|Bicycle|Television','Doctor|Teacher|Police|Farmer|Chef|Driver|Singer|Pilot|Nurse|Soldier'],
zh:['中文','食物|动物|地点|物品|职业','披萨|米饭|面包|鸡蛋|牛奶|苹果|香蕉|芒果|茶|冰淇淋','狗|猫|大象|狮子|老虎|猴子|马|牛|蛇|鱼','学校|医院|机场|海滩|市场|图书馆|公园|餐厅|电影院|动物园','手机|椅子|钟|雨伞|钥匙|镜子|书|鞋子|自行车|电视','医生|老师|警察|农民|厨师|司机|歌手|飞行员|护士|士兵'],
es:['Español','Comida|Animales|Lugares|Objetos|Profesiones','Pizza|Arroz|Pan|Huevo|Leche|Manzana|Plátano|Mango|Té|Helado','Perro|Gato|Elefante|León|Tigre|Mono|Caballo|Vaca|Serpiente|Pez','Escuela|Hospital|Aeropuerto|Playa|Mercado|Biblioteca|Parque|Restaurante|Cine|Zoológico','Teléfono|Silla|Reloj|Paraguas|Llave|Espejo|Libro|Zapato|Bicicleta|Televisión','Médico|Profesor|Policía|Granjero|Cocinero|Conductor|Cantante|Piloto|Enfermero|Soldado'],
hi:['हिन्दी','खाना|जानवर|जगहें|चीज़ें|पेशे','पिज़्ज़ा|चावल|रोटी|अंडा|दूध|सेब|केला|आम|चाय|आइसक्रीम','कुत्ता|बिल्ली|हाथी|शेर|बाघ|बंदर|घोड़ा|गाय|साँप|मछली','स्कूल|अस्पताल|हवाई अड्डा|समुद्र तट|बाज़ार|पुस्तकालय|पार्क|रेस्टोरेंट|सिनेमा|चिड़ियाघर','फ़ोन|कुर्सी|घड़ी|छाता|चाबी|आईना|किताब|जूता|साइकिल|टीवी','डॉक्टर|शिक्षक|पुलिस|किसान|रसोइया|ड्राइवर|गायक|पायलट|नर्स|सैनिक'],
bn:['বাংলা','খাবার|প্রাণী|জায়গা|জিনিস|পেশা','পিৎজা|ভাত|রুটি|ডিম|দুধ|আপেল|কলা|আম|চা|আইসক্রিম','কুকুর|বিড়াল|হাতি|সিংহ|বাঘ|বানর|ঘোড়া|গরু|সাপ|মাছ','স্কুল|হাসপাতাল|বিমানবন্দর|সমুদ্র সৈকত|বাজার|গ্রন্থাগার|পার্ক|রেস্তোরাঁ|সিনেমা|চিড়িয়াখানা','ফোন|চেয়ার|ঘড়ি|ছাতা|চাবি|আয়না|বই|জুতো|সাইকেল|টিভি','ডাক্তার|শিক্ষক|পুলিশ|কৃষক|রাঁধুনি|চালক|গায়ক|পাইলট|নার্স|সৈনিক'],
te:['తెలుగు','ఆహారం|జంతువులు|ప్రదేశాలు|వస్తువులు|వృత్తులు','పిజ్జా|అన్నం|రొట్టె|గుడ్డు|పాలు|ఆపిల్|అరటిపండు|మామిడి|టీ|ఐస్ క్రీమ్','కుక్క|పిల్లి|ఏనుగు|సింహం|పులి|కోతి|గుర్రం|ఆవు|పాము|చేప','బడి|ఆసుపత్రి|విమానాశ్రయం|సముద్ర తీరం|మార్కెట్|గ్రంథాలయం|పార్కు|రెస్టారెంట్|సినిమా హాలు|జూ','ఫోన్|కుర్చీ|గడియారం|గొడుగు|తాళం చెవి|అద్దం|పుస్తకం|చెప్పు|సైకిల్|టీవీ','డాక్టర్|ఉపాధ్యాయుడు|పోలీసు|రైతు|వంటవాడు|డ్రైవర్|గాయకుడు|పైలట్|నర్సు|సైనికుడు'],
ta:['தமிழ்','உணவு|விலங்குகள்|இடங்கள்|பொருட்கள்|தொழில்கள்','பீட்சா|சோறு|ரொட்டி|முட்டை|பால்|ஆப்பிள்|வாழைப்பழம்|மாம்பழம்|தேநீர்|ஐஸ்கிரீம்','நாய்|பூனை|யானை|சிங்கம்|புலி|குரங்கு|குதிரை|பசு|பாம்பு|மீன்','பள்ளி|மருத்துவமனை|விமான நிலையம்|கடற்கரை|சந்தை|நூலகம்|பூங்கா|உணவகம்|திரையரங்கம்|மிருகக்காட்சிசாலை','தொலைபேசி|நாற்காலி|கடிகாரம்|குடை|சாவி|கண்ணாடி|புத்தகம்|காலணி|மிதிவண்டி|தொலைக்காட்சி','மருத்துவர்|ஆசிரியர்|காவலர்|விவசாயி|சமையல்காரர்|ஓட்டுநர்|பாடகர்|விமானி|செவிலியர்|படைவீரர்'],
mr:['मराठी','अन्न|प्राणी|ठिकाणे|वस्तू|व्यवसाय','पिझ्झा|भात|पोळी|अंडे|दूध|सफरचंद|केळे|आंबा|चहा|आईस्क्रीम','कुत्रा|मांजर|हत्ती|सिंह|वाघ|माकड|घोडा|गाय|साप|मासा','शाळा|रुग्णालय|विमानतळ|समुद्रकिनारा|बाजार|ग्रंथालय|उद्यान|उपाहारगृह|सिनेमा|प्राणीसंग्रहालय','फोन|खुर्ची|घड्याळ|छत्री|किल्ली|आरसा|पुस्तक|बूट|सायकल|टीव्ही','डॉक्टर|शिक्षक|पोलीस|शेतकरी|आचारी|चालक|गायक|वैमानिक|परिचारिका|सैनिक'],
ar:['العربية','طعام|حيوانات|أماكن|أشياء|مهن','بيتزا|أرز|خبز|بيضة|حليب|تفاحة|موز|مانجو|شاي|آيس كريم','كلب|قطة|فيل|أسد|نمر|قرد|حصان|بقرة|ثعبان|سمكة','مدرسة|مستشفى|مطار|شاطئ|سوق|مكتبة|حديقة|مطعم|سينما|حديقة الحيوان','هاتف|كرسي|ساعة|مظلة|مفتاح|مرآة|كتاب|حذاء|دراجة|تلفاز','طبيب|معلم|شرطي|مزارع|طباخ|سائق|مغني|طيار|ممرض|جندي'],
fr:['Français','Nourriture|Animaux|Lieux|Objets|Métiers','Pizza|Riz|Pain|Œuf|Lait|Pomme|Banane|Mangue|Thé|Glace','Chien|Chat|Éléphant|Lion|Tigre|Singe|Cheval|Vache|Serpent|Poisson','École|Hôpital|Aéroport|Plage|Marché|Bibliothèque|Parc|Restaurant|Cinéma|Zoo','Téléphone|Chaise|Horloge|Parapluie|Clé|Miroir|Livre|Chaussure|Vélo|Télévision','Médecin|Professeur|Policier|Fermier|Cuisinier|Chauffeur|Chanteur|Pilote|Infirmier|Soldat'],
pt:['Português','Comida|Animais|Lugares|Objetos|Profissões','Pizza|Arroz|Pão|Ovo|Leite|Maçã|Banana|Manga|Chá|Sorvete','Cachorro|Gato|Elefante|Leão|Tigre|Macaco|Cavalo|Vaca|Cobra|Peixe','Escola|Hospital|Aeroporto|Praia|Mercado|Biblioteca|Parque|Restaurante|Cinema|Zoológico','Telefone|Cadeira|Relógio|Guarda-chuva|Chave|Espelho|Livro|Sapato|Bicicleta|Televisão','Médico|Professor|Polícia|Fazendeiro|Cozinheiro|Motorista|Cantor|Piloto|Enfermeiro|Soldado'],
ru:['Русский','Еда|Животные|Места|Предметы|Профессии','Пицца|Рис|Хлеб|Яйцо|Молоко|Яблоко|Банан|Манго|Чай|Мороженое','Собака|Кошка|Слон|Лев|Тигр|Обезьяна|Лошадь|Корова|Змея|Рыба','Школа|Больница|Аэропорт|Пляж|Рынок|Библиотека|Парк|Ресторан|Кинотеатр|Зоопарк','Телефон|Стул|Часы|Зонт|Ключ|Зеркало|Книга|Ботинок|Велосипед|Телевизор','Врач|Учитель|Полицейский|Фермер|Повар|Водитель|Певец|Пилот|Медсестра|Солдат']
};
const WORDS={};for(const k in RAW){const r=RAW[k];WORDS[k]={name:r[0],cats:r[1].split('|'),words:r.slice(2).map(s=>s.split('|'))}}

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rnd=n=>Math.floor(Math.random()*n);
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
const gid=()=>Math.random().toString(36).slice(2,10);
const store=(k,v)=>{try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch{return null}};
let toastT;function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>e.classList.remove('show'),3000)}
const autoImps=n=>n<6?1:n<10?2:Math.floor(n/5)+1;
const PFX='imposter-wg1-';
const genCode=()=>Array.from({length:5},()=>'ABCDEFGHJKMNPQRSTUVWXYZ23456789'[rnd(31)]).join('');

/* ---------- state ---------- */
let mode='home';            // home | setup | game
let G=null;                 // full game state (only on the host device, or offline)
let V=null,vAt=0;           // what this device is allowed to see
let U={i:0,cover:true,sel:[],hide:false},lastPhase='',lastScreen='';
let net=null,conns={},tick=null,wake=null,waking=false;
let myPid=(()=>{try{let p=sessionStorage.getItem('pid');if(!p){p=gid()+gid();sessionStorage.setItem('pid',p)}return p}catch{return gid()+gid()}})();   // secret seat key (lets you rejoin your seat)
let myName=store('imp_name')||'',myLang=store('imp_lang')||'en';
let voiceOn=store('imp_voice')!==false,primed=false,spoke={},lastSay='',lastWin='',saying=[];   // AI voices (on unless the player turned them off)
// give = what the imposter gets: 'word' a different word (the main rule: everyone gets Lion, the imposter gets Tiger),
// 'secret' a different word without being told they are the imposter, 'cat' only the category, 'none' nothing at all
const DEF={lang:'en',cat:'random',give:'word',wpp:2,clueT:10,discT:120,imps:'auto'};
const hasTwin=S=>S.give==='word'||S.give==='secret';   // does the imposter hold a word of their own?
const savedSet=Object(store('imp_set')||{});           // only settings that still exist are taken over from an earlier visit
let OFF={names:store('imp_names')||[],bots:Math.min(8,Math.max(0,+store('imp_bots')||0)),settings:Object.fromEntries(Object.keys(DEF).map(k=>[k,k in savedSet?savedSet[k]:DEF[k]]))};

/* ---------- game engine (runs on host / offline device) ---------- */
function newGame(o){return Object.assign({phase:'lobby',players:[],settings:Object.assign({},DEF,{lang:myLang}),round:null,deadline:0,hostId:null},o)}
const isOn=id=>{const p=G.players.find(p=>p.id===id);return !!(p&&p.connected)};
const curTurn=()=>G.round.order[G.round.turn%G.round.order.length];
function newRound(){
  if(G.pub)G.players=G.players.filter(p=>p.connected);   // public rooms forget players who left
  const ps=G.players.filter(p=>p.connected),n=ps.length,S=G.settings;
  if(n<3){toast('Need at least 3 players');return}
  const ci=S.cat==='random'?rnd(5):+S.cat,wi=rnd(10);
  let hi;do{hi=rnd(10)}while(hi===wi);   // the imposter's different word: another word of the same category…
  if(typeof BOT!=='undefined'){const t=botTry(()=>BOT.near(ci,wi),hi);if(Number.isInteger(t)&&t>=0&&t<10&&t!==wi)hi=t}   // …more often one that has something in common with the secret word
  const k=Math.max(1,Math.min(S.imps==='auto'?autoImps(n):+S.imps,Math.floor((n-1)/2)));
  const ids=shuffle(ps.map(p=>p.id));
  G.round={ci,wi,hi,imps:ids.slice(0,k),order:shuffle(ids.slice()),turn:0,clues:{},votes:{},accused:[],cnt:{}};
  G.phase='reveal';G.deadline=G.offline?0:Date.now()+8000;
}
function startClues(){G.phase='clues';G.round.turn=-1;nextTurn()}
function nextTurn(){
  const R=G.round,n=R.order.length,total=n*G.settings.wpp;R.turn++;
  while(R.turn<total&&!isOn(curTurn())){(R.clues[curTurn()]=R.clues[curTurn()]||[]).push('—');R.turn++}
  if(R.turn>=total){G.phase='discuss';G.deadline=Date.now()+G.settings.discT*1000}
  else G.deadline=Date.now()+G.settings.clueT*1000;
}
function addClue(t){const R=G.round,id=curTurn();(R.clues[id]=R.clues[id]||[]).push(t);nextTurn()}
function startVote(){G.phase='vote';G.deadline=G.offline?0:Date.now()+60000}
function tally(){
  const R=G.round,cnt={};for(const t of Object.values(R.votes))for(const id of t)cnt[id]=(cnt[id]||0)+1;
  const k=R.imps.length,s=R.order.slice().sort((a,b)=>(cnt[b]||0)-(cnt[a]||0)),th=cnt[s[k]]||0;
  R.cnt=cnt;R.accused=s.slice(0,k).filter(id=>(cnt[id]||0)>th);
  for(const p of G.players){if(!R.order.includes(p.id))continue;
    if(R.imps.includes(p.id)){if(!R.accused.includes(p.id))p.score+=2}
    else p.score+=(R.votes[p.id]||[]).filter(id=>R.imps.includes(id)).length}
  if(R.imps.every(id=>R.accused.includes(id))){
    R.guesser=R.imps.find(isOn)||R.imps[0];
    const own=hasTwin(G.settings)?R.hi:-1;   // the imposter's own word is never one of the answers: they know it is not the secret word
    R.opts=shuffle([R.wi,...shuffle([0,1,2,3,4,5,6,7,8,9].filter(i=>i!==R.wi&&i!==own)).slice(0,5)]);
    G.phase='guess';G.deadline=G.offline?0:Date.now()+20000;
  }else finish('imp');
}
function resolveGuess(ok){
  const R=G.round;
  for(const p of G.players){if(!R.order.includes(p.id))continue;const im=R.imps.includes(p.id);if(ok&&im)p.score+=2;if(!ok&&!im)p.score+=1}
  finish(ok?'steal':'crew');
}
function finish(o){G.round.outcome=o;G.phase='result';G.deadline=0}
function onTimeout(){
  if(G.phase==='reveal')startClues();else if(G.phase==='clues')addClue('—');else if(G.phase==='discuss')startVote();
  else if(G.phase==='vote')tally();else if(G.phase==='guess')resolveGuess(false);
}
function act(pid,m){
  if(!G)return;const R=G.round,host=G.offline||pid===G.hostId,p=G.players.find(p=>p.id===pid);
  switch(m.t){
    case 'set':if(host&&G.phase==='lobby')for(const k in DEF)if(m.s&&k in m.s)G.settings[k]=m.s[k];break;
    case 'start':if((host||G.pub)&&(G.phase==='lobby'||G.phase==='result'))newRound();break;   // in public rooms anyone can start
    case 'lobby':if(host&&G.phase==='result'){G.phase='lobby';G.deadline=0}break;
    case 'go':if(host&&G.phase==='reveal')startClues();else if(host&&G.phase==='discuss')startVote();break;
    case 'clue':if(G.phase==='clues'&&pid===curTurn())addClue(String(m.text||'').trim().slice(0,30)||'✓');break;
    case 'vote':{if(G.phase!=='vote'||!R.order.includes(pid))break;
      const k=Math.min(R.imps.length,R.order.length-1),t=[...new Set(m.targets||[])];
      if(t.length!==k||t.some(id=>id===pid||!R.order.includes(id)))break;
      R.votes[pid]=t;if(R.order.filter(isOn).every(id=>R.votes[id]))tally();break}
    case 'guess':if(G.phase==='guess'&&pid===R.guesser)resolveGuess(R.opts[m.i]===R.wi);break;
    case 'call':if(p)p.inCall=!!m.on;break;
    case 'addbot':if(host&&G.phase==='lobby'&&G.players.filter(p=>p.bot).length<8&&G.players.filter(p=>p.connected).length<(G.pub?12:60))addBot();break;
    case 'rmbot':if(host&&G.phase==='lobby')G.players=G.players.filter(p=>!(p.bot&&p.id===m.id));break;
    case 'mark':{   // after the round, the host can overrule the referee's check of one clue
      const c=R&&R.clues[m.id],i=+m.i;
      if(host&&G.phase==='result'&&c&&Number.isInteger(i)&&i>=0&&i<c.length&&(m.v==='y'||m.v==='n')){R.marks=R.marks||{};(R.marks[m.id]=R.marks[m.id]||{})[i]=m.v}break}
    case 'chat':{const c={t:'chat',name:p?p.name:'?',text:String(m.text||'').slice(0,200)};
      for(const id in conns)if(conns[id].open)conns[id].send(c);addChat(c);return}
  }
  sync();
}
function viewFor(pid){
  const S=G.settings,R=G.round,L=WORDS[S.lang]||WORDS.en;
  const v={phase:G.phase,code:G.code,pub:G.pub,offline:!!G.offline,settings:S,you:pid,hostId:G.hostId,
    left:G.deadline?Math.max(0,G.deadline-Date.now()):0,
    players:G.players.map(p=>({id:p.id,name:p.name,score:p.score,on:p.connected,peer:p.peer,inCall:p.inCall,bot:!!p.bot}))};
  if(R&&G.phase!=='lobby'){
    const imp=R.imps.includes(pid),inR=R.order.includes(pid),done=G.phase==='result',n=R.order.length;
    const twin=hasTwin(S)?L.words[R.ci][R.hi]:null;                    // the imposter's different word
    const secret=imp&&S.give==='secret'&&G.phase!=='guess'&&!done;     // secret imposter: until they are caught, their screen looks like everyone else's
    const r=v.round={k:Math.min(R.imps.length,n-1),nImps:R.imps.length,order:R.order,clues:R.clues,
      turnId:G.phase==='clues'?curTurn():null,clueNo:Math.min(S.wpp,Math.floor(R.turn/n)+1),
      voted:Object.keys(R.votes),myVote:R.votes[pid]||null,role:!inR?'spec':imp&&!secret?'imp':'crew'};
    if((inR&&!imp)||done)r.word=L.words[R.ci][R.wi];else if(secret)r.word=twin;
    if((inR&&!imp)||done||(imp&&S.give!=='none'))r.cat=L.cats[R.ci];
    if(imp&&!secret){r.mates=R.imps;if(twin)r.hint=twin}
    if(G.phase==='guess'){r.guesser=R.guesser;if(pid===R.guesser)r.opts=R.opts.map(i=>L.words[R.ci][i])}
    if(R.say)r.say=R.say;   // in person: an AI player's clue being shown on the shared screen
    if(done){r.imps=R.imps;r.votes=R.votes;r.accused=R.accused;r.cnt=R.cnt;r.outcome=R.outcome;r.marks=R.marks||{};if(twin)r.hintWord=twin}
  }
  return v;
}
function sync(){
  if(!G)return;
  if(G.offline){render();return}
  for(const p of G.players){if(p.id===net.pid)continue;const c=conns[p.id];if(c&&c.open)c.send({t:'view',v:viewFor(p.id)})}
  setView(viewFor(net.pid));
}
let lastBeat=0,lastCode='';
function startTick(){clearInterval(tick);tick=setInterval(()=>{
  if(G&&G.deadline&&Date.now()>=G.deadline){onTimeout();sync()}
  if(G&&!G.offline&&Date.now()-lastBeat>=3000){lastBeat=Date.now();hostBeat()}
  if(G)botTick();
},250)}

/* ---------- AI players ----------
   They live on the host device (or the shared phone). Each one is handed only viewFor(its own id): the same
   screen data a human in that seat gets. So it is never told who the imposter is, or the word if it is one. */
const BOT_NAMES=['Nova','Pixel','Echo','Bolt','Luna','Chip','Zed','Milo','Kiki','Robo'];
const isBotId=id=>{const p=G&&G.players.find(p=>p.id===id);return !!(p&&p.bot)};
const humans=()=>G.round.order.filter(id=>!isBotId(id));   // in person, only the humans take the phone
function addBot(){
  const used=new Set(G.players.map(p=>p.name)),nm=BOT_NAMES.map(n=>'🤖 '+n).find(n=>!used.has(n))||'🤖 Bot '+(10+rnd(90));
  G.players.push({id:gid(),name:nm,score:0,connected:true,bot:true,inCall:false});
}
function botTry(f,fallback){try{const v=f();return v==null?fallback:v}catch(e){console.error('AI player error',e);return fallback}}
function botTick(){
  const R=G.round;if(!R||typeof BOT==='undefined')return;
  const now=Date.now(),B=R.bot||(R.bot={}),st=id=>B[id]||(B[id]={});
  if(G.phase==='clues'){
    const id=curTurn();if(!isBotId(id))return;const s=st(id);
    if(s.turn!==R.turn){s.turn=R.turn;s.text=null;s.at=now+1500+rnd(3000)}                 // "thinking"
    else if(!s.text&&now>=s.at){
      s.text=String(botTry(()=>BOT.clue(viewFor(id)),'…'));
      if(G.offline){R.say={id,text:s.text};s.at=now+3200;sync()}                            // in person: show the clue for a moment
      else act(id,{t:'clue',text:s.text});
    }else if(s.text&&G.offline&&now>=s.at){R.say=null;act(id,{t:'clue',text:s.text})}
  }else if(G.phase==='discuss'){
    if(G.offline)return;
    for(const p of G.players){if(!p.bot||!R.order.includes(p.id))continue;const s=st(p.id);
      if(!s.chatAt)s.chatAt=now+3000+rnd(12000);
      else if(!s.chatted&&now>=s.chatAt){s.chatted=true;                                    // sometimes say who looks suspicious
        const who=Math.random()<.7?botTry(()=>BOT.suspect(viewFor(p.id)),null):null,q=G.players.find(x=>x.id===who);
        if(q)act(p.id,{t:'chat',text:'🤔 '+q.name+'?'})}}
  }else if(G.phase==='vote'){
    for(const p of G.players){if(!p.bot||!R.order.includes(p.id)||R.votes[p.id])continue;const s=st(p.id);
      if(!s.voteAt){s.voteAt=now+(G.offline?700+rnd(1500):2000+rnd(7000));continue}
      if(now<s.voteAt)continue;
      const k=Math.min(R.imps.length,R.order.length-1),others=R.order.filter(id=>id!==p.id);
      let t=botTry(()=>BOT.vote(viewFor(p.id)),[]);
      if(!Array.isArray(t)||t.length!==k||new Set(t).size!==k||t.some(id=>!others.includes(id)))t=shuffle(others.slice()).slice(0,k);   // never get stuck on a bad answer
      act(p.id,{t:'vote',targets:t});if(G.phase!=='vote')return;
    }
  }else if(G.phase==='guess'){
    const id=R.guesser;if(!isBotId(id))return;const s=st(id);
    if(!s.guessAt)s.guessAt=now+2500+rnd(3000);
    else if(now>=s.guessAt){s.guessAt=Infinity;const i=botTry(()=>BOT.guess(viewFor(id)),0);act(id,{t:'guess',i:R.opts[i]===undefined?0:i})}
  }
}
/* ---------- AI voices ----------
   AI players have no microphone and are not in the call. Instead every device reads their clue words out loud
   with the browser's own text-to-speech, so it also works in person and for players who are not in the call. */
const TTS={en:'en-US',zh:'zh-CN',es:'es-ES',hi:'hi-IN',bn:'bn-IN',te:'te-IN',ta:'ta-IN',mr:'mr-IN',ar:'ar-SA',fr:'fr-FR',pt:'pt-BR',ru:'ru-RU'};
const PITCH=[1,1.3,.8,1.15,.9,1.4,.7,1.2];   // a slightly different voice for each AI player
const ODD=/^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox)\b/;   // joke voices on Macs
const canSpeak=typeof speechSynthesis!=='undefined'&&typeof SpeechSynthesisUtterance!=='undefined';
if(canSpeak)try{speechSynthesis.getVoices()}catch{}   // start loading the list of voices
function pickVoice(l){   // -> {lang,voice} for a word language, or null when this device has no voice that can read it
  const want=TTS[l]||'en-US';let vs=[];try{vs=speechSynthesis.getVoices()}catch{}
  if(!vs.length)return {lang:want};   // list not loaded yet (common on phones): let the browser choose
  const norm=v=>String(v.lang).replace('_','-').toLowerCase(),ok=c=>vs.filter(v=>norm(v).startsWith(c)&&!ODD.test(v.name));
  let c=ok(l),lang=want;if(!c.length&&l==='mr'){c=ok('hi');lang='hi-IN'}   // Marathi and Hindi share a script
  if(!c.length)return null;
  // best first: the device's own default voice, then the right country, with the Mac "character" voices last
  const score=v=>(v.default?0:4)+(norm(v)===lang.toLowerCase()?0:1)+(/^(Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley) \(/.test(v.name)?2:0);
  const v=c.slice().sort((a,b)=>score(a)-score(b))[0];
  return {lang:String(v.lang).replace('_','-'),voice:v};
}
function speak(text,l,i){
  if(!canSpeak||!voiceOn||!/\p{L}/u.test(text))return;
  const p=pickVoice(l);if(!p)return;
  try{const u=new SpeechSynthesisUtterance(text);u.lang=p.lang;if(p.voice)u.voice=p.voice;u.rate=.95;u.pitch=PITCH[(i<0?0:i)%PITCH.length];
    saying.push(u);if(saying.length>6)saying.shift();   // keep a reference: some browsers drop a voice line that nothing points to
    speechSynthesis.speak(u)}catch{}
}
function hush(){if(canSpeak)try{speechSynthesis.cancel()}catch{}}
function primeVoice(){   // phones only allow speech after a tap, so the first tap anywhere unlocks it
  if(primed||!canSpeak)return;primed=true;
  try{const u=new SpeechSynthesisUtterance(' ');u.volume=0;speechSynthesis.speak(u)}catch{}
}
function announce(v){   // the referee reads out the result: who won, who the imposter was, the secret word, and the imposter's own word
  const r=v.round,nm=id=>String((v.players.find(p=>p.id===id)||{}).name||'').replace(/[^\p{L}\p{N} ]/gu,' ').trim();
  const who=r.imps.map(nm).filter(Boolean),many=r.imps.length>1;
  speak((r.outcome==='crew'?'Crew wins!':'Imposters win!')+(who.length?' The imposter'+(many?'s were ':' was ')+who.join(' and ')+'.':'')+' The secret word was','en',4);
  speak(r.word,v.settings.lang,4);
  if(r.hintWord){speak('The imposter'+(many?'s':'')+' had','en',4);speak(r.hintWord,v.settings.lang,4)}
}
function voice(v,first){   // called with every new view: say what an AI player has just said, and read out the result
  const r=v&&v.round,bots=v?v.players.filter(p=>p.bot):[];
  if(r&&v.phase==='result'){const k=r.order.join()+'|'+r.outcome;if(k!==lastWin&&!first)announce(v);lastWin=k}else lastWin='';
  if(!r||!bots.length){spoke={};lastSay='';return}
  if(v.offline){   // in person: the clue is on the shared screen for a moment
    const k=r.say?r.say.id+'|'+r.clueNo+'|'+r.say.text:'';
    if(k&&k!==lastSay)speak(r.say.text,v.settings.lang,bots.findIndex(p=>p.id===r.say.id));
    lastSay=k;return;
  }
  bots.forEach((p,i)=>{const c=r.clues[p.id]||[],n=c.length;
    if(n>(spoke[p.id]||0)&&!first)speak(c[n-1],v.settings.lang,i);   // "first": we have just walked in, do not repeat old clues
    spoke[p.id]=n});
}
/* ---------- pictures ----------
   Every word the game knows has a picture (an emoji, listed in bots.js). Right after a clue is given, its picture
   pops up on every screen; the word cards, the clue list and the result show the pictures too. */
const picMemo=new Map();let picX=null,picW0=0,popT=0,seenClue={};
function canDraw(e){   // can this device draw this newer emoji? An older phone shows an empty box, or two separate pictures, instead
  try{
    if(!picX){const c=document.createElement('canvas');if(!c.getContext)return true;c.width=96;c.height=48;
      picX=c.getContext('2d',{willReadFrequently:true});if(!picX)return true;
      picX.textBaseline='top';picX.font='32px sans-serif';picW0=picX.measureText('😀').width}
    if(picW0&&picX.measureText(e).width>picW0*1.5)return false;   // a combined picture that falls apart into two
    picX.clearRect(0,0,96,48);picX.fillStyle='#000';picX.fillText(e,2,4);
    const d=picX.getImageData(0,0,96,48).data;
    for(let i=0;i<d.length;i+=4)if(d[i+3]>60&&(Math.abs(d[i]-d[i+1])>30||Math.abs(d[i+1]-d[i+2])>30))return true;   // it has colour: a real picture, not an empty box
    return false;
  }catch{return true}
}
function pic(word,lang){   // the picture for a word, or '' when there is none that this device can show
  if(typeof BOT==='undefined'||!BOT.pic||word==null||word==='—'||word==='✓')return '';
  const k=lang+'|'+word;if(picMemo.has(k))return picMemo.get(k);
  const alts=String(botTry(()=>BOT.pic(word,lang),'')||'').split('/');let out='';
  for(let i=0;i<alts.length;i++){const e=alts[i];if(!e||e==='-')break;
    if(alts.length===1||i===alts.length-1||canDraw(e)){out=e;break}}   // "a/b": a if this device can draw it, otherwise b
  picMemo.set(k,out);return out;
}
const picBig=(w,l)=>{const e=pic(w,l);return e?`<div class="pic">${esc(e)}</div>`:''};
const picIn=(w,l)=>{const e=pic(w,l);return e?esc(e)+' ':''};
function popClue(name,word,lang){   // "after they say a word, the object comes": the clue and its picture, large, for a moment
  const e=$('#pop');if(!e)return;const p=pic(word,lang);
  e.innerHTML=`<div class="pn">${esc(name)} says</div>${p?`<div class="pe">${esc(p)}</div>`:''}<div class="pw">${esc(word)}</div>`;
  e.classList.add('show');clearTimeout(popT);popT=setTimeout(()=>e.classList.remove('show'),2400);
}
function clueNews(v,first){   // called with every new view: has somebody just given a clue?
  const r=v&&v.round;if(!r){seenClue={};return}
  for(const p of v.players){const c=r.clues[p.id]||[],n=c.length;
    if(n>(seenClue[p.id]||0)&&!first&&(v.phase==='clues'||v.phase==='discuss')&&!(v.offline&&p.bot)){   // in person an AI player's clue is already shown large on the shared screen
      const w=c[n-1];if(w!=='—'&&w!=='✓')popClue(p.name,w,v.settings.lang)}
    seenClue[p.id]=n}
}
// heartbeat: a closed tab or a sleeping phone does not reliably close the connection, so both sides listen for silence (~15s)
function hostBeat(){for(const id in conns){const c=conns[id];c.miss=(c.miss||0)+1;if(c.miss>4)hostDrop(c);else if(c.open)c.send({t:'ping'})}}
function clientBeat(){
  if(!net||net.host||!net.conn||!net.conn.open||mode!=='game')return;
  net.miss=(net.miss||0)+1;
  if(net.miss>4){toast('Lost connection to the host');goHome()}else net.conn.send({t:'ping'});
}
// say goodbye so the others find out straight away instead of waiting for the heartbeat
function farewell(n){try{if(n.host){for(const id in conns)if(conns[id].open)conns[id].send({t:'bye'})}else if(n.conn&&n.conn.open)n.conn.send({t:'leave'})}catch{}}

/* ---------- networking (PeerJS: the room creator's browser is the server) ---------- */
function cleanupNet(){
  leaveCall(true);clearInterval(tick);
  if(net){const n=net;farewell(n);net=null;setTimeout(()=>{try{n.peer.destroy()}catch{}},300)}   // short delay so the goodbye gets out
  conns={};G=null;
}
function goHome(){cleanupNet();V=null;mode='home';$('#msgs').innerHTML='';spoke={};lastSay='';lastWin='';wasIn={};callErr='';seenClue={};clearTimeout(popT);$('#pop').classList.remove('show');hush();if(wake)wake.release().catch(()=>{});render()}
function waiting(){mode='wait';render()}
// stay registered with the signalling server (needed for new players and calls); retry gently if it drops
function keepSignal(peer){peer.on('disconnected',()=>setTimeout(()=>{try{if(net&&net.peer===peer&&!peer.destroyed)peer.reconnect()}catch{}},2000))}
function needPeer(){if(typeof Peer==='undefined'){toast('Online play needs an internet connection');return false}return true}
function hostRoom(code,o={}){
  if(!needPeer())return;cleanupNet();
  const peer=new Peer(PFX+code,{debug:1});net={peer,host:true,code,pid:gid()};waiting();
  peer.on('open',()=>{
    if(!net||net.peer!==peer||G)return;   // "open" fires again after a signalling reconnect: keep the running room
    G=newGame({code,pub:!!o.pub,offline:false,hostId:net.pid});
    G.players.push({id:net.pid,name:myName,score:0,connected:true,peer:peer.id,inCall:false});
    mode='game';startTick();sync();
  });
  peer.on('error',e=>{
    if(!net||net.peer!==peer||G)return;   // once the room is running, ignore signalling hiccups
    if(e.type==='unavailable-id'){o.pub?joinRoom(code,o):hostRoom(genCode())}
    else{toast('Connection error: '+e.type);goHome()}
  });
  peer.on('connection',c=>{
    c.on('data',m=>{if(net&&net.peer===peer)hostMsg(c,m)});
    c.on('close',()=>{if(net&&net.peer===peer)hostDrop(c)});
  });
  keepSignal(peer);wireMedia(peer);
}
function hostMsg(c,m){
  if(!G||!m||typeof m!=='object')return;
  c.miss=0;
  if(m.t==='join'){
    const key=String(m.pid||'').slice(0,40);if(key.length<6)return;   // secret seat key: never sent to other players
    let p=G.players.find(p=>p.key===key);
    if(!p&&G.players.filter(p=>p.connected).length>=(G.pub?12:60)){c.send({t:'full'});return}
    const name=String(m.name||'').trim().slice(0,16)||'Player';
    if(p){const old=conns[p.id];p.connected=true;p.name=name;p.peer=c.peer;p.inCall=false;if(old&&old!==c){delete conns[p.id];try{old.close()}catch{}}}
    else G.players.push(p={id:gid(),key,name,score:0,connected:true,peer:c.peer,inCall:false});
    c.pid=p.id;conns[p.id]=c;sync();
  }
  else if(m.t==='leave')hostDrop(c);
  else if(!c.pid||conns[c.pid]!==c){if(c.open)c.send({t:'who'})}   // we dropped this player after a long silence: ask them to rejoin
  else if(m.t!=='ping')act(c.pid,m);
}
function hostDrop(c){
  if(!G||!c.pid||conns[c.pid]!==c)return;delete conns[c.pid];
  const p=G.players.find(p=>p.id===c.pid);if(!p)return;
  if(G.phase==='lobby'&&(G.pub||!p.score))G.players=G.players.filter(x=>x!==p);
  else{p.connected=false;p.inCall=false;
    if(G.phase==='clues'&&curTurn()===p.id)addClue('—');
    else if(G.phase==='vote'&&G.round.order.filter(isOn).every(id=>G.round.votes[id]))tally()}
  sync();
}
function joinRoom(code,o={}){
  if(!needPeer())return;cleanupNet();
  const peer=new Peer(undefined,{debug:1});net={peer,host:false,code};let joined=false;if(!o.pub)lastCode=code;waiting();
  setTimeout(()=>{   // the host never answered (it may have left or gone to sleep)
    if(!net||net.peer!==peer||joined)return;
    if(o.pub)quick(o.n+1);else{toast('Could not reach the room — the host may have left');goHome()}
  },15000);
  peer.on('open',()=>{
    if(!net||net.peer!==peer||net.conn)return;   // "open" fires again after a signalling reconnect
    const c=peer.connect(PFX+code,{reliable:true,serialization:'json'});net.conn=c;
    c.on('open',()=>{if(!net||net.conn!==c)return;joined=true;c.send({t:'join',name:myName,pid:myPid})});
    c.on('data',m=>{
      if(!net||net.conn!==c||!m)return;net.miss=0;
      if(m.t==='view'){mode='game';setView(m.v)}
      else if(m.t==='chat')addChat(m);
      else if(m.t==='who')c.send({t:'join',name:myName,pid:myPid});
      else if(m.t==='bye'){toast('The host closed the room');goHome()}
      else if(m.t==='full'){if(o.pub)quick(o.n+1);else{toast('Room is full');goHome()}}
    });
    c.on('close',()=>{if(net&&net.conn===c){toast('Disconnected from the host');goHome()}});
  });
  peer.on('error',e=>{
    if(!net||net.peer!==peer||joined)return;
    if(e.type==='peer-unavailable'){if(o.pub)hostRoom(code,o);else{toast('Room not found — check the code');goHome()}}
    else{toast('Connection error: '+e.type);goHome()}
  });
  keepSignal(peer);wireMedia(peer);
}
function quick(n=1){if(n>5){toast('Public rooms are full, try again soon');goHome();return}joinRoom('PUB-'+myLang+'-'+n,{pub:true,n})}
function send(m){if(!net)return;if(net.host)act(net.pid,m);else if(net.conn&&net.conn.open)net.conn.send(m)}
function setView(v){const first=!V;V=v;vAt=Date.now();voice(v,first);clueNews(v,first);callNews(v,first);render();syncCalls()}

/* ---------- voice / video call (browser to browser) ---------- */
let localStream=null,calls={},blankT=null,callErr='',wasIn={};
function wireMedia(peer){peer.on('call',c=>{if(!net||net.peer!==peer||!localStream){c.close();return}c.answer(localStream);wireCall(c)})}
function wireCall(c){c._t=Date.now();calls[c.peer]=c;c.on('stream',s=>tile(c.peer,s));c.on('close',()=>dropCall(c.peer));c.on('error',()=>dropCall(c.peer))}
function dropCall(id){const c=calls[id];delete calls[id];try{c&&c.close()}catch{}const t=document.getElementById('t-'+id);t&&t.remove()}
function tile(id,s,me){
  let t=document.getElementById('t-'+id);
  if(!t){t=document.createElement('div');t.className='tile';t.id='t-'+id;t.innerHTML='<video autoplay playsinline></video><span></span>';$('#tiles').append(t)}
  const v=t.firstChild;v.srcObject=s;v.muted=!!me;const pl=v.play();labelTiles();
  pl&&pl.catch(e=>{if(!me&&e&&e.name==='NotAllowedError')$('#call [data-a="hear"]').hidden=false});   // this browser wants a tap before it plays sound
}
function labelTiles(){if(!V)return;for(const p of V.players){const t=document.getElementById('t-'+p.peer);if(t)t.lastChild.textContent=p.name+(p.id===V.you?' (you)':'')}}
function blankTrack(){
  const c=document.createElement('canvas');c.width=160;c.height=120;const x=c.getContext('2d');
  const d=()=>{x.fillStyle='#223';x.fillRect(0,0,160,120);x.font='48px sans-serif';x.fillText('🎤',52,76)};d();blankT=setInterval(d,1000);
  return c.captureStream(2).getVideoTracks()[0];
}
async function joinCall(video){
  if(!net||localStream)return;
  const n0=net,md=navigator.mediaDevices,dev=video?'camera or microphone':'microphone';
  const fail=t=>{callErr=t;callInfo();toast(t)};   // the note stays under the call buttons after the pop-up fades
  if(!md||!md.getUserMedia)return fail('This browser cannot make calls. Open the game in Chrome or Safari.');
  try{
    const s=await md.getUserMedia({audio:true,video:video?{width:320,height:240}:false});
    if(net!==n0||localStream){s.getTracks().forEach(t=>t.stop());return}   // left the room while the browser was asking for permission
    if(!video)s.addTrack(blankTrack());
    callErr='';localStream=s;tile(net.peer.id,s,true);callBtns();send({t:'call',on:true});syncCalls();
  }catch(e){
    const n=e&&e.name;
    fail(n==='NotFoundError'||n==='OverconstrainedError'?'No '+dev+' was found on this device.'+(video?' Try Join voice instead.':'')
      :n==='NotReadableError'?'The '+dev+' is busy in another app. Close that app and try again.'
      :'The '+dev+' is blocked for this site. Allow it in the browser settings (the icon next to the address), then tap Join '+(video?'video':'voice')+' again.');
  }
}
function leaveCall(silent){
  if(!localStream)return;const me=net&&net.peer.id;
  localStream.getTracks().forEach(t=>t.stop());localStream=null;clearInterval(blankT);
  for(const id in calls)dropCall(id);const t=me&&document.getElementById('t-'+me);t&&t.remove();
  callBtns();if(!silent)send({t:'call',on:false});
}
function callBtns(){const on=!!localStream;for(const [a,h] of [['voice',on],['video',on],['mute',!on],['leavecall',!on]])$(`#call [data-a="${a}"]`).hidden=h;$('#call [data-a="mute"]').textContent='Mute';if(!on)$('#call [data-a="hear"]').hidden=true;callInfo()}
function callInfo(){   // one line under the call buttons: who is in the call, and what it takes to hear them
  const e=$('#callinfo');if(!e)return;if(!V||V.offline){e.textContent='';return}
  const others=V.players.filter(p=>p.inCall&&p.id!==V.you).map(p=>p.name),people=V.players.some(p=>!p.bot&&p.on&&p.id!==V.you);
  let t='';
  if(callErr&&!localStream)t=callErr+(others.length?' '+others.join(', ')+(others.length>1?' are':' is')+' in the call.':'');   // why joining did not work
  else if(localStream)t+=others.length?'In the call with '+others.join(', ')+'.':people?'You are in the call, but nobody else has joined it yet. Each player has to tap Join voice on their own device.':'You are in the call. No other people are in this room yet.';
  else t+=others.length?others.join(', ')+(others.length>1?' are':' is')+' in the call. Tap Join voice to talk and listen.':'The call does not start by itself: each player taps Join voice on their own device.';
  if(V.players.some(p=>p.bot))t+=' AI players are not in the call'+(canSpeak?': this device reads their clues out loud.':'.');
  e.textContent=t;
}
function callNews(v,first){   // tell everyone when somebody joins the call, so they know to join too
  const now={};for(const p of v.players)if(p.inCall)now[p.id]=1;
  if(!first&&!v.offline)for(const p of v.players)if(p.inCall&&!wasIn[p.id]&&p.id!==v.you)toast(p.name+' joined the call'+(localStream?'':' — tap Join voice to talk'));
  wasIn=now;
}
function syncCalls(){
  if(!V||!net||!localStream){return}const me=net.peer.id;
  for(const p of V.players)if(p.peer&&p.peer!==me&&p.inCall&&!calls[p.peer]&&me<p.peer){const c=net.peer.call(p.peer,localStream);if(c)wireCall(c)}
  for(const id in calls)if(Date.now()-calls[id]._t>5000&&!V.players.some(p=>p.peer===id&&p.inCall))dropCall(id);
  labelTiles();
}
function addChat(m){const d=document.createElement('div');d.innerHTML='<b>'+esc(m.name)+':</b> '+esc(m.text);const b=$('#msgs');b.append(d);b.scrollTop=b.scrollHeight}

/* ---------- screens ---------- */
const opt=(v,l,cur)=>`<option value="${v}"${String(cur)===String(v)?' selected':''}>${esc(l)}</option>`;
function settingsHTML(S,edit){
  const L=WORDS[S.lang]||WORDS.en,d=edit?'':' disabled';
  return `<div class="card"><h2>Game settings</h2>
  <label>Word language<select data-s="lang"${d}>${Object.keys(WORDS).map(k=>opt(k,WORDS[k].name,S.lang)).join('')}</select></label>
  <label>Category<select data-s="cat"${d}>${opt('random','Random',S.cat)}${L.cats.map((c,i)=>opt(i,c,S.cat)).join('')}</select></label>
  <label>The imposter gets<select data-s="give"${d}>${opt('word','A different word',S.give)}${opt('secret','A different word, and is not told',S.give)}${opt('cat','No word, only the category',S.give)}${opt('none','No word and no hint',S.give)}</select></label>
  <label>Imposters<select data-s="imps"${d}>${opt('auto','Auto (more players = more imposters)',S.imps)}${[1,2,3,4,5].map(n=>opt(n,n,S.imps)).join('')}</select></label>
  <div class="row"><label>Words each<select data-s="wpp"${d}>${[2,3,4,5].map(n=>opt(n,n,S.wpp)).join('')}</select></label>
  <label>Seconds per word<select data-s="clueT"${d}>${[10,15,20,30].map(n=>opt(n,n+'s',S.clueT)).join('')}</select></label>
  <label>Discussion<select data-s="discT"${d}>${[60,120,180,300].map(n=>opt(n,n/60+' min',S.discT)).join('')}</select></label></div></div>`;
}
// app look: a coloured circle with the first letter of a name, and the logo (drawn once in index.html)
const hue=s=>{let h=7;for(const ch of String(s))h=(h*31+ch.codePointAt(0))%360;return h};
const avatar=p=>`<span class="av${p.bot?' bot':''}" style="--h:${hue(p.name)}">${esc((String(p.name).match(/[\p{L}\p{N}]/u)||['?'])[0].toUpperCase())}</span>`;
const LOGO='<svg class="lg" viewBox="0 0 512 512" aria-hidden="true"><use href="#logo"/></svg>';
const canShare=typeof navigator!=='undefined'&&typeof navigator.share==='function';
// "Install the app": the browser tells us when it can offer that (Android, desktop Chrome and Edge); iPhones use the Share menu
let installEvt=null;
const isApp=()=>(typeof matchMedia==='function'&&matchMedia('(display-mode: standalone)').matches)||(typeof navigator!=='undefined'&&navigator.standalone===true);
function installHTML(){
  if(isApp())return '';
  if(installEvt)return `<div class="card"><h2>Get the app</h2><div class="mut">Put Imposter on your home screen. It opens full screen like any other app, with nothing to sign up for.</div><button class="ghost" data-a="install">📲 Install the app</button></div>`;
  if(typeof navigator!=='undefined'&&/iphone|ipad|ipod/i.test(navigator.userAgent||''))return `<div class="card"><h2>Get the app</h2><div class="mut">On iPhone or iPad: open this page in Safari, tap the Share button, then “Add to Home Screen”. Imposter then opens full screen like any other app.</div></div>`;
  return '';
}
const paintInstall=()=>{const e=$('#inst');if(e)e.innerHTML=installHTML()};
addEventListener('beforeinstallprompt',e=>{e.preventDefault();installEvt=e;paintInstall()});
addEventListener('appinstalled',()=>{installEvt=null;paintInstall()});

function homeHTML(){
  const room=new URLSearchParams(location.search).get('room')||'';
  return `<div class="hero">${LOGO}<p>Everyone gets the same secret word. The imposter gets a different one. Give clues, discuss, then vote.</p>
  <div class="chips"><span>No sign-up</span><span>12 languages</span><span>Voice &amp; video</span><span>AI players</span></div></div>
  <div class="card"><label class="first">Your name<input id="name" maxlength="16" value="${esc(myName)}" placeholder="Type your name" autocomplete="nickname" enterkeyhint="done"></label>
  <label>Language for words<select id="lang">${Object.keys(WORDS).map(k=>opt(k,WORDS[k].name,myLang)).join('')}</select></label>
  <div class="mut" style="margin-top:10px">No login and no account. Your name is all you need.</div></div>
  <div class="card"><h2>Play online</h2>
  <button data-a="create">Create a private room</button>
  <div class="row" style="margin-top:10px"><input id="code" maxlength="5" placeholder="Room code" value="${esc(lastCode||room)}" style="text-transform:uppercase" autocapitalize="characters" autocomplete="off"><button class="fix" style="width:auto;margin:0;padding:0 24px" data-a="join">Join</button></div>
  <button class="ghost" data-a="quick">Quick play — join a public room</button></div>
  <div class="card"><h2>Play in person</h2><button class="ghost" data-a="offline">Pass one phone around</button>
  <div class="mut" style="margin-top:10px">Not enough people? You can add AI players in any mode.</div></div>
  <div id="inst">${installHTML()}</div>`;
}
function setupHTML(){
  const total=OFF.names.length+OFF.bots,ok=OFF.names.length>=1&&total>=3;
  return `<div class="card"><h2>Players (${total})</h2>
  <ul>${OFF.names.map((n,i)=>`<li><span class="who">${avatar({name:n})}<span>${esc(n)}</span></span><button class="sm ghost" data-a="rm" data-i="${i}" aria-label="Remove this player">✕</button></li>`).join('')||'<li class="mut">Add the name of every person who is playing</li>'}</ul>
  <form id="addf" class="row" style="margin-top:12px"><input id="pname" maxlength="16" placeholder="Player name" autocomplete="off" enterkeyhint="done"><button class="fix" style="width:auto;margin:0;padding:0 24px">Add</button></form>
  <div class="row" style="margin-top:16px"><span>🤖 AI players</span><button class="sm fix ghost" data-a="botminus"${OFF.bots<1?' disabled':''} aria-label="One AI player fewer">−</button><b class="fix">${OFF.bots}</b><button class="sm fix ghost" data-a="botplus"${OFF.bots>7?' disabled':''} aria-label="One more AI player">+</button></div>
  <div class="mut" style="margin-top:8px">You need 3 or more players in total. AI players give clues${canSpeak?' out loud':''}, vote and guess on their own.</div></div>
  ${settingsHTML(OFF.settings,true)}
  <button data-a="offstart"${ok?'':' disabled'}>${ok?'Start game':'Need at least 3 players'}</button><button class="ghost" data-a="home">Back</button>`;
}
function roleCard(r,name){
  if(r.role==='spec')return `<div class="card center mut">Round in progress — you will join the next round.</div>`;
  if(U.hide)return `<div class="card center"><button class="sm ghost" data-a="hide">Show my word</button></div>`;
  const quiet=V.settings.give==='secret';   // secret imposter: every card looks the same, nobody is told who has the different word
  let h='<div class="card center role">';
  if(r.role==='crew')h+=`<div class="mut">${quiet?'Your word':'Your secret word'}</div>${picBig(r.word,V.settings.lang)}<div class="big ok">${esc(r.word)}</div>`;
  else{
    if(r.hint)h+=`<div class="sub imp">You are the IMPOSTER</div><div class="mut">Your word</div>${picBig(r.hint,V.settings.lang)}<div class="big">${esc(r.hint)}</div><div class="mut">${r.mates.length>1?'Only the imposters have this word':'Everyone else got a different word'}. Blend in.</div>`;
    else h+=`<div class="big imp">You are the IMPOSTER</div><div class="mut">You don't know the word. Blend in.</div>`;
    if(r.mates.length>1)h+=`<div class="mut">Fellow imposters: ${r.mates.filter(id=>id!==V.you).map(name).join(', ')}</div>`}
  if(r.cat)h+=`<div class="mut">Category: ${esc(r.cat)}</div>`;
  if(quiet&&r.role==='crew')h+=`<div class="mut" style="margin-top:8px">${r.nImps>1?esc(r.nImps)+' players got a different word and are not told':'One player got a different word and is not told'}. It could be you.</div>`;
  if(!V.offline)h+=`<div style="margin-top:10px"><button class="sm ghost" data-a="hide">Hide</button></div>`;
  return h+'</div>';
}
function scoresHTML(){
  const top=Math.max(0,...V.players.map(p=>p.score));
  return `<div class="card"><h2>Scores</h2><ul>${V.players.slice().sort((a,b)=>b.score-a.score).map(p=>`<li><span class="who">${avatar(p)}<span>${esc(p.name)}${p.on?'':'<span class="tag">offline</span>'}</span></span><b>${top>0&&p.score===top?'👑 ':''}${esc(p.score)}</b></li>`).join('')}</ul></div>`;
}
function gameHTML(){
  const v=V,r=v.round,off=v.offline,S=v.settings,host=off||v.you===v.hostId;
  const P=id=>v.players.find(p=>p.id===id)||{name:'?'};
  const name=id=>esc(P(id).name||'?');
  const who=(id,extra)=>`<span class="who">${avatar(P(id))}<span>${name(id)}${extra||''}</span></span>`;
  const face=id=>avatar(P(id)).replace('class="av','class="av xl');
  const pass=(id,btn,pre)=>`<div class="card center"><div class="mut">${pre||'Pass the phone to'}</div>${face(id)}<div class="big">${name(id)}</div><button data-a="uncover">${btn}</button></div>`;
  const isBot=id=>!!P(id).bot,hasBots=v.players.some(p=>p.bot);
  if(v.phase==='lobby'){
    const n=v.players.filter(p=>p.on).length,nBots=v.players.filter(p=>p.bot).length;
    return `<div class="card center"><div class="mut">${v.pub?'Public room':'Room code'}</div>${v.pub?'<div style="margin-top:6px">Anyone who taps Quick play can land here.</div>':`<div class="code">${esc(v.code)}</div><div class="mut">Friends type this code on their own phone, or open your invite link.</div>
      <div class="row">${canShare?'<button data-a="share">Share invite</button>':''}<button class="ghost" data-a="copy">Copy invite link</button></div>`}</div>
    <div class="card"><h2>Players (${n})</h2><ul>${v.players.map(p=>`<li><span class="who">${avatar(p)}<span>${esc(p.name)}${p.id===v.hostId?'<span class="tag">host</span>':''}${p.id===v.you?'<span class="tag">you</span>':''}${p.bot?'<span class="tag">AI</span>':''}${p.on?'':'<span class="tag">offline</span>'}</span></span><span class="who"><b>${esc(p.score)}</b>${host&&p.bot?`<button class="sm ghost" data-a="rmbot" data-id="${esc(p.id)}" aria-label="Remove this AI player">✕</button>`:''}</span></li>`).join('')}</ul>
    ${host?`<button class="ghost" data-a="addbot"${nBots>7?' disabled':''}>🤖 Add an AI player</button>`:''}
    <div class="mut" style="margin-top:10px">Imposters this round: ${S.imps==='auto'?autoImps(n):esc(S.imps)}</div>
    ${!nBots||!canSpeak?'':`<div class="mut" style="margin-top:6px">${pickVoice(S.lang)?'AI players say their clues out loud on every device. The 🔊 button at the top turns the voice off.':'This device has no voice for '+esc((WORDS[S.lang]||WORDS.en).name)+', so here the AI players’ clues are shown but not spoken.'}</div>`}</div>
    ${settingsHTML(S,host)}
    ${host||v.pub?`<button data-a="start"${n<3?' disabled':''}>${n<3?'Need at least 3 players':'Start game'}</button>`:'<div class="card center mut">Waiting for the host to start…</div>'}
    <button class="ghost" data-a="home">Leave room</button>`;
  }
  const solo=off&&r.order.filter(id=>!isBot(id)).length<2,cover=off&&U.cover&&!solo;   // one human on the phone: nothing to hide from anyone
  const board=off&&!hasBots?'':`<div class="card"><h2>Clues</h2><ul>${r.order.map(id=>`<li>${who(id,id===r.turnId?' 👈':'')}<span class="said">${(r.clues[id]||[]).map(c=>picIn(c,S.lang)+esc(c)).join(' · ')||'<span class="mut">…</span>'}</span></li>`).join('')}</ul></div>`;
  const mine=off?'':roleCard(r,name);
  if(v.phase==='reveal'){
    if(off)return cover?pass(v.you,'Show my role'):roleCard(r,name)+`<button data-a="nextseat">${solo?'Start':'Hide and pass on'}</button>`;
    return mine+`<div class="card center"><div class="mut">Clues start in</div><div class="timer" id="tm"></div><div class="mut">${esc(r.nImps)} imposter${r.nImps>1?'s':''} among ${esc(r.order.length)} players</div></div>`;
  }
  if(v.phase==='clues'){
    const bot=isBot(r.turnId),my=!bot&&(off||r.turnId===v.you),say=r.say&&r.say.id===r.turnId?r.say.text:'';
    return mine+`<div class="card center"><div class="mut">Word ${esc(r.clueNo)} of ${esc(S.wpp)}</div>${face(r.turnId)}<div class="big">${name(r.turnId)}</div>
    ${say?`<div class="mut">says</div>${picBig(say,S.lang)}<div class="big ok">${esc(say)}</div>`:`<div class="mut">${bot?'is thinking…':off?'say one clue word out loud':my?'your turn — say or type one clue word':'is giving a clue'}</div><div class="timer" id="tm"></div>`}
    ${my?(off&&!hasBots?'':`<input id="clue" maxlength="30" placeholder="Type your clue word" autocomplete="off" enterkeyhint="send"><div class="mut" style="margin-top:8px">${hasBots?'AI players cannot hear you, so type your clue. Its picture comes up for everyone.':'Typing is optional. A typed clue comes up with its picture, and the referee checks it at the end.'}</div>`)+`<button data-a="clue">Done — next player</button>`:''}</div>`+board;
  }
  if(v.phase==='discuss')return mine+`<div class="card center"><h2>Discuss — who is the imposter?</h2><div class="timer" id="tm"></div>${host?'<button data-a="go">Vote now</button>':''}</div>`+board;
  if(v.phase==='vote'){
    if(off&&!v.you)return `<div class="card center"><h2>AI players are voting…</h2><div class="mut">${esc(r.voted.length)} of ${esc(r.order.length)} votes in</div></div>`;
    if(cover)return pass(v.you,'Vote in secret');
    if(r.role==='spec')return mine+`<div class="card center mut">Players are voting… (${esc(r.voted.length)}/${esc(r.order.length)})</div>`;
    if(r.myVote)return mine+`<div class="card center"><h2>Vote sent</h2><div class="mut">Waiting for the others (${esc(r.voted.length)}/${esc(r.order.length)})</div><div class="timer" id="tm"></div></div>`+board;
    return (off?`<div class="card center">${face(v.you)}<div><b>${name(v.you)}</b>, vote in secret</div></div>`:mine)+`<div class="card"><h2>Pick ${esc(r.k)} suspect${r.k>1?'s':''}</h2>
    ${r.order.filter(id=>id!==v.you).map(id=>`<button class="pick${U.sel.includes(id)?' on':''}" data-a="pick" data-id="${esc(id)}">${avatar(P(id))}<span>${name(id)}</span></button>`).join('')}
    <button data-a="vote"${U.sel.length!==r.k?' disabled':''}>Confirm vote</button><div class="timer" id="tm"></div></div>`+board;
  }
  if(v.phase==='guess'){
    if(cover&&!isBot(r.guesser))return pass(r.guesser,'Guess the word','All imposters were caught! Last chance — pass the phone to');
    if(r.opts)return `<div class="card"><h2 class="imp">${S.give==='secret'?'You were the imposter, and you were caught!':'You were caught!'}</h2><div class="mut">${hasTwin(S)?'Guess the word the others got to steal the win.':'Guess the secret word to steal the win.'}</div>${r.opts.map((w,i)=>`<button class="pick" data-a="guess" data-i="${i}">${pic(w,S.lang)?`<span class="pg">${esc(pic(w,S.lang))}</span>`:''}<span>${esc(w)}</span></button>`).join('')}<div class="timer" id="tm"></div></div>`;
    return `<div class="card center"><h2>All imposters were caught!</h2>${face(r.guesser)}<div class="mut">${name(r.guesser)} gets one guess at the secret word…</div><div class="timer" id="tm"></div></div>`;
  }
  // result: the winner, then the referee's report (the word each player got, every clue checked against the secret word)
  const msg={crew:['Crew wins!','All imposters were caught and the guess was wrong.','ok'],steal:['Imposters win!','They were caught, but guessed the secret word.','imp'],imp:['Imposters win!','They escaped the vote.','imp']}[r.outcome];
  const marks=r.marks||{},SYM={y:'✓',w:'≈',n:'✗',s:'🚫',u:'?'},TIP={y:'fits the secret word',w:'loosely fits',n:'no link found',s:'this is the secret word itself',u:'the referee does not know this word'};
  const chip=(id,c,i)=>{
    if(c==='—')return '<span class="chip u">no clue</span>';
    const said=c==='✓',auto=said||typeof BOT==='undefined'?'u':BOT.judge(c,S.lang,r.word)||'u',m=(marks[id]||{})[i]||auto;
    const inner=`${said?'<span class="mut">said out loud</span>':picIn(c,S.lang)+esc(c)} <i>${SYM[m]}</i>`;
    return host?`<button class="chip ${m}" data-a="mark" data-id="${esc(id)}" data-i="${i}" data-v="${m==='y'||m==='w'?'n':'y'}" title="${TIP[m]} — tap to change">${inner}</button>`:`<span class="chip ${m}" title="${TIP[m]}">${inner}</span>`;
  };
  const got=id=>r.imps.includes(id)?`<b class="imp">${r.hintWord?picIn(r.hintWord,S.lang)+esc(r.hintWord):'no word'}</b>`:`<b>${picIn(r.word,S.lang)}${esc(r.word)}</b>`;
  return `<div class="card center role"><div class="big ${msg[2]}">${msg[0]}</div><div class="mut">${msg[1]}</div>
  <div style="margin-top:12px">Secret word: <b>${picIn(r.word,S.lang)}${esc(r.word)}</b> <span class="mut">(${esc(r.cat)})</span></div>
  <div>Imposter${r.imps.length>1?'s':''}: <b class="imp">${r.imps.map(name).join(', ')}</b></div>
  ${r.hintWord?`<div>The imposter${r.imps.length>1?'s’':'’s'} word: <b class="imp">${picIn(r.hintWord,S.lang)}${esc(r.hintWord)}</b></div>`:''}</div>
  <div class="card ref"><h2>🧑‍⚖️ Referee</h2><div class="mut">The word each player got, and whether each clue fits the secret word.</div>
  <ul style="margin-top:12px">${r.order.map(id=>`<li><div class="top">${who(id,r.imps.includes(id)?'<span class="tag imp">imposter</span>':'')}<span class="got">got ${got(id)}</span></div>
    <div>${(r.clues[id]||[]).map((c,i)=>chip(id,c,i)).join('')||'<span class="chip u">no clue</span>'}</div>
    <div class="mut" style="margin-top:8px">${esc(r.cnt[id]||0)} vote${r.cnt[id]===1?'':'s'} · voted ${(r.votes[id]||[]).map(name).join(', ')||'—'}</div></li>`).join('')}</ul>
  <div class="mut" style="margin-top:12px">✓ fits · ≈ loosely fits · ✗ no link found · ? the referee does not know this word.${off?' Tap a mark to change it.':host?' You are the host: tap a mark to change it.':' The host can change a mark.'}</div></div>
  ${scoresHTML()}
  ${host||v.pub?`<button data-a="start">Next round</button>${off||!host?'':'<button class="ghost" data-a="lobby">Back to lobby (change settings)</button>'}`:'<div class="card center mut">Waiting for the host…</div>'}
  <button class="ghost" data-a="home">${off?'End game':'Leave room'}</button>`;
}
function offSeat(){   // in person: whose private screen is showing right now (AI players never take the phone)
  const R=G.round;if(!R)return null;
  if(G.phase==='reveal'||G.phase==='vote')return humans()[U.i]||null;
  if(G.phase==='guess')return isBotId(R.guesser)?null:R.guesser;
  return null;
}
function render(){
  const keep={},foc=document.activeElement&&document.activeElement.id;
  for(const e of document.querySelectorAll('#main input'))if(e.id)keep[e.id]=e.value;
  let h;
  if(mode==='home')h=homeHTML();else if(mode==='setup')h=setupHTML();
  else if(mode==='wait')h='<div class="card center"><h2>Connecting…</h2><div class="mut">This can take a few seconds.</div><button class="ghost" data-a="home">Cancel</button></div>';
  else{
    const ph=(G&&G.offline?G.phase:V.phase)+'|'+((G&&G.offline?G.round:V.round)||{}).order;
    if(ph!==lastPhase){lastPhase=ph;U={i:0,cover:true,sel:[],hide:false}}
    if(G&&G.offline){V=viewFor(offSeat());vAt=Date.now();voice(V);clueNews(V)}
    h=gameHTML();
  }
  $('#main').innerHTML=h;
  const scr=mode==='game'?lastPhase:mode;   // a new screen slides in and starts at the top; updates to the same screen do not
  if(scr!==lastScreen){lastScreen=scr;slideIn();if(mode==='game'&&typeof scrollTo==='function')scrollTo(0,0)}
  for(const id in keep){const e=document.getElementById(id);if(e&&mode!=='home')e.value=keep[id]}
  if(foc&&keep[foc]!==undefined){const e=document.getElementById(foc);e&&e.focus()}
  const online=mode==='game'&&V&&!V.offline;
  $('#call').hidden=$('#chat').hidden=!online;
  $('#about').hidden=mode!=='home';   // the "How to play" text only shows on the home screen
  $('#hdr').textContent=online?(V.pub?'Public room':V.code):mode==='game'?'In person':'';   // the room code stays in view all game long
  const qb=$('#quit');qb.hidden=mode!=='game';if(qb.hidden){qb.textContent='Leave';delete qb.dataset.sure}   // a way out in the middle of a round
  const sb=$('#snd');sb.hidden=!(mode==='game'&&canSpeak);   // the game's voice (AI players' clues and the referee's result) on / off
  sb.textContent=voiceOn?'🔊':'🔇';sb.title=sb.ariaLabel=voiceOn?'Voice is on — tap to turn it off':'Voice is off — tap to turn it on';
  callInfo();
  keepAwake();
  paintTimer();
}
function slideIn(){   // the cards of a new screen fade up into place, one after the other (only these cards: later updates do not replay it)
  if(typeof matchMedia!=='function'||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  [...$('#main').children].forEach((c,i)=>{if(c.animate)c.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:280,delay:Math.min(i,3)*45,easing:'ease-out',fill:'backwards'})});
}
function paintTimer(){
  const e=$('#tm');if(!e||!V)return;if(!V.left){e.textContent='';return}
  const left=Math.max(0,V.left-(Date.now()-vAt)),tot=({reveal:8,clues:V.settings.clueT,discuss:V.settings.discT,vote:60,guess:20}[V.phase]||0)*1000;
  e.textContent=Math.ceil(left/1000);e.style.setProperty('--p',tot?Math.min(1,left/tot):0);e.classList.toggle('low',left<=3000);   // the bar under the number runs down
}
setInterval(paintTimer,200);setInterval(syncCalls,3000);setInterval(clientBeat,3000);
addEventListener('pagehide',()=>{if(net)farewell(net)});   // closing or reloading the tab
async function keepAwake(){   // stop phone screens from sleeping in the middle of a game
  if(mode!=='game'||wake||waking||!('wakeLock' in navigator)||document.visibilityState!=='visible')return;
  waking=true;try{wake=await navigator.wakeLock.request('screen');wake.addEventListener('release',()=>{wake=null})}catch{}waking=false;
}
document.addEventListener('visibilitychange',keepAwake);

/* ---------- input ---------- */
function readHome(need){   // a name is all a player ever gives: no login, no account
  const e=$('#name'),n=e.value.trim().slice(0,16);myLang=$('#lang').value;store('imp_lang',myLang);
  if(n){myName=n;store('imp_name',n)}
  if(need&&!n){toast('Type your name first');e.classList.add('bad');e.focus();return false}
  return true;
}
const doAct=m=>{if(G&&G.offline)act(V.you,m);else send(m)};
document.body.addEventListener('click',e=>{
  primeVoice();
  const b=e.target.closest('[data-a]');if(!b||b.disabled)return;const a=b.dataset.a;
  switch(a){
    case 'create':if(!readHome(true))break;hostRoom(genCode());toast('Creating room…');break;
    case 'join':{if(!readHome(true))break;const c=$('#code').value.trim().toUpperCase();if(c.length<4)return toast('Enter the room code');joinRoom(c);toast('Joining…');break}
    case 'quick':if(!readHome(true))break;quick();toast('Finding a public room…');break;
    case 'offline':readHome();OFF.settings.lang=myLang;if(myName&&!OFF.names.length){OFF.names=[myName];store('imp_names',OFF.names)}mode='setup';render();break;
    case 'home':goHome();break;
    case 'quit':if(b.dataset.sure)goHome();   // two taps, so nobody leaves (or closes the room) by accident
      else{b.dataset.sure='1';b.textContent='Tap again to leave';setTimeout(()=>{if(b.dataset.sure){delete b.dataset.sure;b.textContent='Leave'}},3000)}break;
    case 'snd':voiceOn=!voiceOn;store('imp_voice',voiceOn);if(!voiceOn)hush();toast(voiceOn?'Voice is on':'Voice is off');render();break;
    case 'hear':for(const v of document.querySelectorAll('#tiles video')){const pl=v.play();pl&&pl.catch(()=>{})}b.hidden=true;break;
    case 'share':{const u=location.origin+location.pathname+'?room='+V.code;navigator.share({title:'Imposter',text:'Join my Imposter game. Room code: '+V.code,url:u}).catch(()=>{});break}
    case 'install':if(installEvt){const ev=installEvt;installEvt=null;ev.prompt();ev.userChoice.then(paintInstall,paintInstall)}break;
    case 'mark':doAct({t:'mark',id:b.dataset.id,i:+b.dataset.i,v:b.dataset.v});break;
    case 'rm':OFF.names.splice(+b.dataset.i,1);store('imp_names',OFF.names);render();break;
    case 'offstart':cleanupNet();G=newGame({offline:true});G.settings=Object.assign({},OFF.settings);
      G.players=OFF.names.map((n,i)=>({id:'p'+i,name:n,score:0,connected:true}));for(let i=0;i<OFF.bots;i++)addBot();
      mode='game';startTick();newRound();sync();break;
    case 'botplus':case 'botminus':OFF.bots=Math.min(8,Math.max(0,OFF.bots+(a==='botplus'?1:-1)));store('imp_bots',OFF.bots);render();break;
    case 'addbot':doAct({t:'addbot'});break;
    case 'rmbot':doAct({t:'rmbot',id:b.dataset.id});break;
    case 'copy':{const u=location.origin+location.pathname+'?room='+V.code;(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(()=>toast('Invite link copied'),()=>prompt('Copy this link',u));break}
    case 'start':case 'lobby':case 'go':doAct({t:a});break;
    case 'uncover':U.cover=false;render();break;
    case 'nextseat':U.i++;U.cover=true;if(U.i>=humans().length)act(null,{t:'go'});else render();break;
    case 'hide':U.hide=!U.hide;render();break;
    case 'clue':{const i=$('#clue');const t=i?i.value:'';
      const w=V.round&&(G&&G.offline?(viewFor(V.round.turnId).round||{}).word:V.round.word);   // the one hard rule: the secret word itself is not a clue
      if(w&&t.trim().toLowerCase()===String(w).toLowerCase()){toast('That is '+(V.settings.give==='secret'?'your word':'the secret word')+' itself. Give a clue about it instead.');break}
      if(i)i.value='';if(G&&G.offline){if(!isBotId(V.round.turnId))act(V.round.turnId,{t:'clue',text:t})}else send({t:'clue',text:t});break}
    case 'pick':{const id=b.dataset.id,k=V.round.k;if(U.sel.includes(id))U.sel=U.sel.filter(x=>x!==id);else{if(k===1)U.sel=[];if(U.sel.length<k)U.sel.push(id)}render();break}
    case 'vote':{const t=U.sel.slice(),me=V.you;if(G&&G.offline){U.i++;U.cover=true;U.sel=[];act(me,{t:'vote',targets:t})}else send({t:'vote',targets:t});break}
    case 'guess':doAct({t:'guess',i:+b.dataset.i});break;
    case 'voice':joinCall(false);break;
    case 'video':joinCall(true);break;
    case 'mute':{const t=localStream&&localStream.getAudioTracks()[0];if(t){t.enabled=!t.enabled;b.textContent=t.enabled?'Mute':'Unmute'}break}
    case 'leavecall':leaveCall();break;
  }
});
document.body.addEventListener('change',e=>{
  const k=e.target.dataset&&e.target.dataset.s;if(!k)return;
  const val=['wpp','clueT','discT'].includes(k)?+e.target.value:e.target.value;
  if(mode==='setup'){OFF.settings[k]=val;store('imp_set',OFF.settings);render()}else send({t:'set',s:{[k]:val}});
});
document.body.addEventListener('submit',e=>{
  e.preventDefault();
  if(e.target.id==='chatf'){const i=$('#chatin'),t=i.value.trim();if(t){send({t:'chat',text:t});i.value=''}}
  if(e.target.id==='addf'){const i=$('#pname'),t=i.value.trim().slice(0,16);if(t){OFF.names.push(t);store('imp_names',OFF.names);i.value='';render();$('#pname').focus()}}
});
document.body.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='clue'){e.preventDefault();$('[data-a="clue"]').click()}});
document.body.addEventListener('input',e=>{if(e.target.id==='name')e.target.classList.remove('bad')});
// keeps a copy of the game on the device, so it opens without internet and can be installed like an app (see sw.js)
if(typeof navigator!=='undefined'&&'serviceWorker' in navigator)addEventListener('load',()=>{navigator.serviceWorker.register('sw.js').catch(()=>{})});
render();
