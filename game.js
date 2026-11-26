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
let U={i:0,cover:true,sel:[],hide:false},lastPhase='';
let net=null,conns={},tick=null,wake=null,waking=false;
let myPid=(()=>{try{let p=sessionStorage.getItem('pid');if(!p){p=gid()+gid();sessionStorage.setItem('pid',p)}return p}catch{return gid()+gid()}})();   // secret seat key (lets you rejoin your seat)
let myName=store('imp_name')||'',myLang=store('imp_lang')||'en';
const DEF={lang:'en',cat:'random',hint:'category',wpp:2,clueT:10,discT:120,imps:'auto'};
let OFF={names:store('imp_names')||[],bots:Math.min(8,Math.max(0,+store('imp_bots')||0)),settings:Object.assign({},DEF,store('imp_set')||{})};

/* ---------- game engine (runs on host / offline device) ---------- */
function newGame(o){return Object.assign({phase:'lobby',players:[],settings:Object.assign({},DEF,{lang:myLang}),round:null,deadline:0,hostId:null},o)}
const isOn=id=>{const p=G.players.find(p=>p.id===id);return !!(p&&p.connected)};
const curTurn=()=>G.round.order[G.round.turn%G.round.order.length];
function newRound(){
  if(G.pub)G.players=G.players.filter(p=>p.connected);   // public rooms forget players who left
  const ps=G.players.filter(p=>p.connected),n=ps.length,S=G.settings;
  if(n<3){toast('Need at least 3 players');return}
  const ci=S.cat==='random'?rnd(5):+S.cat,wi=rnd(10);let hi;do{hi=rnd(10)}while(hi===wi);
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
    R.opts=shuffle([R.wi,...shuffle([0,1,2,3,4,5,6,7,8,9].filter(i=>i!==R.wi)).slice(0,5)]);
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
    const r=v.round={k:Math.min(R.imps.length,n-1),nImps:R.imps.length,order:R.order,clues:R.clues,
      turnId:G.phase==='clues'?curTurn():null,clueNo:Math.min(S.wpp,Math.floor(R.turn/n)+1),
      voted:Object.keys(R.votes),myVote:R.votes[pid]||null,role:!inR?'spec':imp?'imp':'crew'};
    if((inR&&!imp)||done)r.word=L.words[R.ci][R.wi];
    if((inR&&!imp)||done||(imp&&S.hint!=='none'))r.cat=L.cats[R.ci];
    if(imp){r.mates=R.imps;if(S.hint==='similar')r.hint=L.words[R.ci][R.hi]}
    if(G.phase==='guess'){r.guesser=R.guesser;if(pid===R.guesser)r.opts=R.opts.map(i=>L.words[R.ci][i])}
    if(R.say)r.say=R.say;   // in person: an AI player's clue being shown on the shared screen
    if(done){r.imps=R.imps;r.votes=R.votes;r.accused=R.accused;r.cnt=R.cnt;r.outcome=R.outcome}
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
function goHome(){cleanupNet();V=null;mode='home';$('#msgs').innerHTML='';if(wake)wake.release().catch(()=>{});render()}
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
function setView(v){V=v;vAt=Date.now();render();syncCalls()}

/* ---------- voice / video call (browser to browser) ---------- */
let localStream=null,calls={},blankT=null;
function wireMedia(peer){peer.on('call',c=>{if(!net||net.peer!==peer||!localStream){c.close();return}c.answer(localStream);wireCall(c)})}
function wireCall(c){c._t=Date.now();calls[c.peer]=c;c.on('stream',s=>tile(c.peer,s));c.on('close',()=>dropCall(c.peer));c.on('error',()=>dropCall(c.peer))}
function dropCall(id){const c=calls[id];delete calls[id];try{c&&c.close()}catch{}const t=document.getElementById('t-'+id);t&&t.remove()}
function tile(id,s,me){
  let t=document.getElementById('t-'+id);
  if(!t){t=document.createElement('div');t.className='tile';t.id='t-'+id;t.innerHTML='<video autoplay playsinline></video><span></span>';$('#tiles').append(t)}
  const v=t.firstChild;v.srcObject=s;v.muted=!!me;const pl=v.play();pl&&pl.catch(()=>{});labelTiles();
}
function labelTiles(){if(!V)return;for(const p of V.players){const t=document.getElementById('t-'+p.peer);if(t)t.lastChild.textContent=p.name+(p.id===V.you?' (you)':'')}}
function blankTrack(){
  const c=document.createElement('canvas');c.width=160;c.height=120;const x=c.getContext('2d');
  const d=()=>{x.fillStyle='#223';x.fillRect(0,0,160,120);x.font='48px sans-serif';x.fillText('🎤',52,76)};d();blankT=setInterval(d,1000);
  return c.captureStream(2).getVideoTracks()[0];
}
async function joinCall(video){
  if(!net||localStream)return;
  try{
    const s=await navigator.mediaDevices.getUserMedia({audio:true,video:video?{width:320,height:240}:false});
    if(!video)s.addTrack(blankTrack());
    localStream=s;tile(net.peer.id,s,true);callBtns();send({t:'call',on:true});syncCalls();
  }catch(e){toast('Could not use the microphone/camera — allow it in the browser')}
}
function leaveCall(silent){
  if(!localStream)return;const me=net&&net.peer.id;
  localStream.getTracks().forEach(t=>t.stop());localStream=null;clearInterval(blankT);
  for(const id in calls)dropCall(id);const t=me&&document.getElementById('t-'+me);t&&t.remove();
  callBtns();if(!silent)send({t:'call',on:false});
}
function callBtns(){const on=!!localStream;for(const [a,h] of [['voice',on],['video',on],['mute',!on],['leavecall',!on]])$(`#call [data-a="${a}"]`).hidden=h;$('#call [data-a="mute"]').textContent='Mute'}
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
  <label>Imposter hint<select data-s="hint"${d}>${opt('none','Nothing',S.hint)}${opt('category','Category only',S.hint)}${opt('similar','A similar word + category',S.hint)}</select></label>
  <label>Imposters<select data-s="imps"${d}>${opt('auto','Auto (more players = more imposters)',S.imps)}${[1,2,3,4,5].map(n=>opt(n,n,S.imps)).join('')}</select></label>
  <div class="row"><label>Words each<select data-s="wpp"${d}>${[2,3,4,5].map(n=>opt(n,n,S.wpp)).join('')}</select></label>
  <label>Seconds per word<select data-s="clueT"${d}>${[10,15,20,30].map(n=>opt(n,n+'s',S.clueT)).join('')}</select></label>
  <label>Discussion<select data-s="discT"${d}>${[60,120,180,300].map(n=>opt(n,n/60+' min',S.discT)).join('')}</select></label></div></div>`;
}
function homeHTML(){
  const room=new URLSearchParams(location.search).get('room')||'';
  return `<div class="card"><h2>Find the imposter</h2><div class="mut">Everyone gets the same secret word — except the imposters. Give clues, discuss, then vote.</div>
  <label>Your name<input id="name" maxlength="16" value="${esc(myName)}" placeholder="Name"></label>
  <label>Language for words<select id="lang">${Object.keys(WORDS).map(k=>opt(k,WORDS[k].name,myLang)).join('')}</select></label></div>
  <div class="card"><h2>Play online</h2>
  <button data-a="create">Create a private room</button>
  <div class="row" style="margin-top:8px"><input id="code" maxlength="5" placeholder="Room code" value="${esc(lastCode||room)}" style="text-transform:uppercase"><button class="fix sm" style="padding:12px 18px" data-a="join">Join</button></div>
  <button class="ghost" data-a="quick">Quick play — join a public room</button></div>
  <div class="card"><h2>Play in person</h2><button class="ghost" data-a="offline">Pass one phone around</button>
  <div class="mut" style="margin-top:8px">Not enough people? You can add AI players in any mode.</div></div>`;
}
function setupHTML(){
  const total=OFF.names.length+OFF.bots,ok=OFF.names.length>=1&&total>=3;
  return `<div class="card"><h2>Players (${total})</h2>
  <ul>${OFF.names.map((n,i)=>`<li><span>${esc(n)}</span><button class="sm ghost" data-a="rm" data-i="${i}">✕</button></li>`).join('')||'<li class="mut">Add the people who are playing</li>'}</ul>
  <form id="addf" class="row" style="margin-top:8px"><input id="pname" maxlength="16" placeholder="Player name" autocomplete="off"><button class="sm fix" style="padding:12px 18px">Add</button></form>
  <div class="row" style="margin-top:14px"><span>🤖 AI players</span><button class="sm fix ghost" data-a="botminus"${OFF.bots<1?' disabled':''}>−</button><b class="fix">${OFF.bots}</b><button class="sm fix ghost" data-a="botplus"${OFF.bots>7?' disabled':''}>+</button></div>
  <div class="mut" style="margin-top:6px">You need 3 or more players in total. AI players give clues, vote and guess on their own.</div></div>
  ${settingsHTML(OFF.settings,true)}
  <button data-a="offstart"${ok?'':' disabled'}>${ok?'Start game':'Need at least 3 players'}</button><button class="ghost" data-a="home">Back</button>`;
}
function roleCard(r,name){
  if(r.role==='spec')return `<div class="card center mut">Round in progress — you will join the next round.</div>`;
  if(U.hide)return `<div class="card center"><button class="sm ghost" data-a="hide">Show my word</button></div>`;
  let h='<div class="card center">';
  if(r.role==='crew')h+=`<div class="mut">Secret word</div><div class="big ok">${esc(r.word)}</div>`;
  else{h+=`<div class="big imp">You are the IMPOSTER</div><div class="mut">You don't know the word. Blend in.</div>`;
    if(r.hint)h+=`<div style="margin-top:8px">Similar word: <b>${esc(r.hint)}</b></div>`;
    if(r.mates.length>1)h+=`<div class="mut">Fellow imposters: ${r.mates.filter(id=>id!==V.you).map(name).join(', ')}</div>`}
  if(r.cat)h+=`<div class="mut">Category: ${esc(r.cat)}</div>`;
  if(!V.offline)h+=`<div style="margin-top:8px"><button class="sm ghost" data-a="hide">Hide</button></div>`;
  return h+'</div>';
}
function scoresHTML(){return `<div class="card"><h2>Scores</h2><ul>${V.players.slice().sort((a,b)=>b.score-a.score).map(p=>`<li><span>${esc(p.name)}${p.on?'':'<span class="tag">offline</span>'}</span><b>${esc(p.score)}</b></li>`).join('')}</ul></div>`}
function gameHTML(){
  const v=V,r=v.round,off=v.offline,S=v.settings,host=off||v.you===v.hostId;
  const name=id=>esc((v.players.find(p=>p.id===id)||{}).name||'?');
  const pass=(id,btn,pre)=>`<div class="card center"><div class="mut">${pre||'Pass the phone to'}</div><div class="big">${name(id)}</div><button data-a="uncover">${btn}</button></div>`;
  const isBot=id=>!!(v.players.find(p=>p.id===id)||{}).bot,hasBots=v.players.some(p=>p.bot);
  if(v.phase==='lobby'){
    const n=v.players.filter(p=>p.on).length,nBots=v.players.filter(p=>p.bot).length;
    return `<div class="card center"><div class="mut">${v.pub?'Public room':'Room code'}</div>${v.pub?'':`<div class="code">${esc(v.code)}</div><button class="ghost" data-a="copy">Copy invite link</button>`}</div>
    <div class="card"><h2>Players (${n})</h2><ul>${v.players.map(p=>`<li><span>${esc(p.name)}${p.id===v.hostId?'<span class="tag">host</span>':''}${p.id===v.you?'<span class="tag">you</span>':''}${p.bot?'<span class="tag">AI</span>':''}${p.on?'':'<span class="tag">offline</span>'}</span><span><b>${esc(p.score)}</b>${host&&p.bot?` <button class="sm ghost" data-a="rmbot" data-id="${esc(p.id)}">✕</button>`:''}</span></li>`).join('')}</ul>
    ${host?`<button class="ghost" data-a="addbot"${nBots>7?' disabled':''}>🤖 Add an AI player</button>`:''}
    <div class="mut" style="margin-top:8px">Imposters this round: ${S.imps==='auto'?autoImps(n):esc(S.imps)}</div></div>
    ${settingsHTML(S,host)}
    ${host||v.pub?`<button data-a="start"${n<3?' disabled':''}>${n<3?'Need at least 3 players':'Start game'}</button>`:'<div class="card center mut">Waiting for the host to start…</div>'}
    <button class="ghost" data-a="home">Leave room</button>`;
  }
  const solo=off&&r.order.filter(id=>!isBot(id)).length<2,cover=off&&U.cover&&!solo;   // one human on the phone: nothing to hide from anyone
  const board=off&&!hasBots?'':`<div class="card"><h2>Clues</h2><ul>${r.order.map(id=>`<li><span>${name(id)}${id===r.turnId?' 👈':''}</span><span>${(r.clues[id]||[]).map(esc).join(' · ')||'<span class="mut">…</span>'}</span></li>`).join('')}</ul></div>`;
  const mine=off?'':roleCard(r,name);
  if(v.phase==='reveal'){
    if(off)return cover?pass(v.you,'Show my role'):roleCard(r,name)+`<button data-a="nextseat">${solo?'Start':'Hide and pass on'}</button>`;
    return mine+`<div class="card center"><div class="mut">Clues start in</div><div class="timer" id="tm"></div><div class="mut">${esc(r.nImps)} imposter${r.nImps>1?'s':''} among ${esc(r.order.length)} players</div></div>`;
  }
  if(v.phase==='clues'){
    const bot=isBot(r.turnId),my=!bot&&(off||r.turnId===v.you),say=r.say&&r.say.id===r.turnId?r.say.text:'';
    return mine+`<div class="card center"><div class="mut">Word ${esc(r.clueNo)} of ${esc(S.wpp)}</div><div class="big">${name(r.turnId)}</div>
    ${say?`<div class="mut">says</div><div class="big ok">${esc(say)}</div>`:`<div class="mut">${bot?'is thinking…':off?'say one clue word out loud':my?'your turn — say or type one clue word':'is giving a clue'}</div><div class="timer" id="tm"></div>`}
    ${my?(off&&!hasBots?'':`<input id="clue" maxlength="30" placeholder="${hasBots?'Type your clue — AI players cannot hear you':'Your clue word (optional)'}" autocomplete="off">`)+`<button data-a="clue">Done — next player</button>`:''}</div>`+board;
  }
  if(v.phase==='discuss')return mine+`<div class="card center"><h2>Discuss — who is the imposter?</h2><div class="timer" id="tm"></div>${host?'<button data-a="go">Vote now</button>':''}</div>`+board;
  if(v.phase==='vote'){
    if(off&&!v.you)return `<div class="card center"><h2>AI players are voting…</h2><div class="mut">${esc(r.voted.length)} of ${esc(r.order.length)} votes in</div></div>`;
    if(cover)return pass(v.you,'Vote in secret');
    if(r.role==='spec')return mine+`<div class="card center mut">Players are voting… (${esc(r.voted.length)}/${esc(r.order.length)})</div>`;
    if(r.myVote)return mine+`<div class="card center"><h2>Vote sent</h2><div class="mut">Waiting for the others (${esc(r.voted.length)}/${esc(r.order.length)})</div><div class="timer" id="tm"></div></div>`+board;
    return (off?`<div class="card center"><b>${name(v.you)}</b></div>`:mine)+`<div class="card"><h2>Pick ${esc(r.k)} suspect${r.k>1?'s':''}</h2>
    ${r.order.filter(id=>id!==v.you).map(id=>`<button class="pick${U.sel.includes(id)?' on':''}" data-a="pick" data-id="${esc(id)}">${name(id)}</button>`).join('')}
    <button data-a="vote"${U.sel.length!==r.k?' disabled':''}>Confirm vote</button><div class="timer" id="tm"></div></div>`+board;
  }
  if(v.phase==='guess'){
    if(cover&&!isBot(r.guesser))return pass(r.guesser,'Guess the word','All imposters were caught! Last chance — pass the phone to');
    if(r.opts)return `<div class="card"><h2 class="imp">You were caught!</h2><div class="mut">Guess the secret word to steal the win.</div>${r.opts.map((w,i)=>`<button class="pick" data-a="guess" data-i="${i}">${esc(w)}</button>`).join('')}<div class="timer" id="tm"></div></div>`;
    return `<div class="card center"><h2>All imposters were caught!</h2><div class="mut">${name(r.guesser)} gets one guess at the secret word…</div><div class="timer" id="tm"></div></div>`;
  }
  // result
  const msg={crew:['Crew wins!','All imposters were caught and the guess was wrong.','ok'],steal:['Imposters win!','They were caught, but guessed the secret word.','imp'],imp:['Imposters win!','They escaped the vote.','imp']}[r.outcome];
  return `<div class="card center"><div class="big ${msg[2]}">${msg[0]}</div><div class="mut">${msg[1]}</div>
  <div style="margin-top:10px">Secret word: <b>${esc(r.word)}</b> <span class="mut">(${esc(r.cat)})</span></div>
  <div>Imposter${r.imps.length>1?'s':''}: <b class="imp">${r.imps.map(name).join(', ')}</b></div></div>
  <div class="card"><h2>Votes</h2><ul>${r.order.map(id=>`<li><span>${name(id)}${r.imps.includes(id)?'<span class="tag imp">imposter</span>':''}</span><span class="mut">${esc(r.cnt[id]||0)} vote${r.cnt[id]===1?'':'s'} · voted ${(r.votes[id]||[]).map(name).join(', ')||'—'}</span></li>`).join('')}</ul></div>
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
    if(G&&G.offline){V=viewFor(offSeat());vAt=Date.now()}
    h=gameHTML();
  }
  $('#main').innerHTML=h;
  for(const id in keep){const e=document.getElementById(id);if(e&&mode!=='home')e.value=keep[id]}
  if(foc&&keep[foc]!==undefined){const e=document.getElementById(foc);e&&e.focus()}
  const online=mode==='game'&&V&&!V.offline;
  $('#call').hidden=$('#chat').hidden=!online;
  $('#about').hidden=mode!=='home';   // the "How to play" text only shows on the home screen
  $('#hdr').textContent=online?(V.pub?'Public room':'Room '+V.code):mode==='game'?'In person':'';
  const qb=$('#quit');qb.hidden=mode!=='game';if(qb.hidden){qb.textContent='Leave';delete qb.dataset.sure}   // a way out in the middle of a round
  keepAwake();
  paintTimer();
}
function paintTimer(){const e=$('#tm');if(!e||!V)return;if(!V.left){e.textContent='';return}e.textContent=Math.max(0,Math.ceil((V.left-(Date.now()-vAt))/1000))}
setInterval(paintTimer,200);setInterval(syncCalls,3000);setInterval(clientBeat,3000);
addEventListener('pagehide',()=>{if(net)farewell(net)});   // closing or reloading the tab
async function keepAwake(){   // stop phone screens from sleeping in the middle of a game
  if(mode!=='game'||wake||waking||!('wakeLock' in navigator)||document.visibilityState!=='visible')return;
  waking=true;try{wake=await navigator.wakeLock.request('screen');wake.addEventListener('release',()=>{wake=null})}catch{}waking=false;
}
document.addEventListener('visibilitychange',keepAwake);

/* ---------- input ---------- */
function readHome(){myName=($('#name').value.trim()||'Player'+(10+rnd(90))).slice(0,16);myLang=$('#lang').value;store('imp_name',myName);store('imp_lang',myLang)}
const doAct=m=>{if(G&&G.offline)act(V.you,m);else send(m)};
document.body.addEventListener('click',e=>{
  const b=e.target.closest('[data-a]');if(!b||b.disabled)return;const a=b.dataset.a;
  switch(a){
    case 'create':readHome();hostRoom(genCode());toast('Creating room…');break;
    case 'join':{readHome();const c=$('#code').value.trim().toUpperCase();if(c.length<4)return toast('Enter the room code');joinRoom(c);toast('Joining…');break}
    case 'quick':readHome();quick();toast('Finding a public room…');break;
    case 'offline':readHome();OFF.settings.lang=myLang;mode='setup';render();break;
    case 'home':goHome();break;
    case 'quit':if(b.dataset.sure)goHome();   // two taps, so nobody leaves (or closes the room) by accident
      else{b.dataset.sure='1';b.textContent='Tap again to leave';setTimeout(()=>{if(b.dataset.sure){delete b.dataset.sure;b.textContent='Leave'}},3000)}break;
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
    case 'clue':{const i=$('#clue');const t=i?i.value:'';if(i)i.value='';if(G&&G.offline){if(!isBotId(V.round.turnId))act(V.round.turnId,{t:'clue',text:t})}else send({t:'clue',text:t});break}
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
render();
