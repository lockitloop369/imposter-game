/* AI players for Imposter.

   Fair play: every decision in this file is made from ONE argument, the AI player's own "view". That is exactly
   what a human in the same seat gets on their screen. An AI player is never told who the imposter is, and an AI
   imposter is never told the secret word: it only gets what a human imposter gets (usually a different word).
   In a "secret imposter" room it is not even told that it is the imposter. It has to work things out from the
   clues, like everyone else.

   The AI players speak with a fixed list of clue words (below), in the room's word language. */

/* ---------- clue words: [food, animals, places, objects, jobs], same order in every language ---------- */
const CLUE_RAW={
en:["cheese|round|oven|hot|slice|white|grain|boiled|field|bowl|breakfast|soft|flour|hen|yellow|drink|glass|fruit|red|tree|sweet|long|summer|cup|leaf|sugar|cold|cone|children|tasty|kitchen",
"pet|bark|friend|tail|guard|mouse|climb|big|trunk|grey|forest|king|roar|wild|strong|stripes|funny|ride|fast|race|farm|grass|horns|poison|dangerous|crawl|water|swim|sea|river|net|nature|outside",
"lesson|bell|learn|sick|bed|medicine|plane|travel|ticket|luggage|sand|sun|buy|vegetables|crowd|money|shop|quiet|read|shelves|walk|bench|play|waiter|menu|table|film|screen|popcorn|dark|seat|cage|people|visit",
"call|pocket|battery|ring|sit|legs|wood|time|wall|numbers|alarm|rain|open|wet|handle|lock|door|metal|small|face|look|shiny|reflection|pages|paper|story|foot|pair|laces|run|wheels|pedal|road|remote|watch|news|useful|home",
"injection|thief|uniform|law|protect|tractor|village|cooking|knife|car|bus|song|voice|music|stage|famous|sky|fly|care|army|war|gun|brave|work|salary"],
zh:["奶酪|圆的|烤箱|热的|切片|白色|谷物|煮的|田地|碗|早餐|软的|面粉|母鸡|黄色|饮料|玻璃杯|水果|红色|树|甜的|长的|夏天|杯子|叶子|糖|冷的|蛋筒|孩子|好吃|厨房",
"宠物|汪汪|朋友|尾巴|看门|老鼠|爬树|大|长鼻子|灰色|森林|国王|吼叫|野生|强壮|条纹|有趣|骑|快|比赛|农场|草|角|毒|危险|爬行|水|游泳|海|河|网|大自然|户外",
"上课|铃|学习|生病|床|药|飞机|旅行|票|行李|沙子|太阳|买|蔬菜|人群|钱|商店|安静|阅读|书架|散步|长椅|玩|服务员|菜单|桌子|电影|屏幕|爆米花|黑暗|座位|笼子|人|参观",
"打电话|口袋|电池|铃声|坐|腿|木头|时间|墙|数字|闹钟|雨|打开|湿|把手|锁|门|金属|小|脸|看|闪亮|倒影|书页|纸|故事|脚|一双|鞋带|跑步|轮子|踏板|路|遥控器|观看|新闻|有用|家",
"打针|小偷|制服|法律|保护|拖拉机|村庄|做饭|刀|汽车|公交车|歌曲|声音|音乐|舞台|有名|天空|飞行|照顾|军队|战争|枪|勇敢|工作|工资"],
es:["queso|redondo|horno|caliente|rebanada|blanco|grano|hervido|campo|tazón|desayuno|suave|harina|gallina|amarillo|bebida|vaso|fruta|rojo|árbol|dulce|largo|verano|taza|hoja|azúcar|frío|cono|niños|sabroso|cocina",
"mascota|ladrido|amigo|cola|guardián|ratón|trepar|grande|trompa|gris|bosque|rey|rugido|salvaje|fuerte|rayas|gracioso|montar|rápido|carrera|granja|hierba|cuernos|veneno|peligroso|arrastrarse|agua|nadar|mar|río|red|naturaleza|afuera",
"clase|campana|aprender|enfermo|cama|medicina|avión|viajar|boleto|equipaje|arena|sol|comprar|verduras|multitud|dinero|tienda|silencio|leer|estantes|caminar|banco|jugar|camarero|menú|mesa|película|pantalla|palomitas|oscuro|asiento|jaula|gente|visitar",
"llamada|bolsillo|batería|timbre|sentarse|patas|madera|hora|pared|números|alarma|lluvia|abrir|mojado|empuñadura|cerradura|puerta|metal|pequeño|cara|mirar|brillante|reflejo|páginas|papel|historia|pie|par|cordones|correr|ruedas|pedal|carretera|control remoto|ver|noticias|útil|casa",
"inyección|ladrón|uniforme|ley|proteger|tractor|pueblo|cocinar|cuchillo|coche|autobús|canción|voz|música|escenario|famoso|cielo|volar|cuidar|ejército|guerra|arma|valiente|trabajo|sueldo"],
hi:["चीज़|गोल|ओवन|गरम|टुकड़ा|सफ़ेद|अनाज|उबला|खेत|कटोरा|नाश्ता|नरम|आटा|मुर्गी|पीला|पेय|गिलास|फल|लाल|पेड़|मीठा|लंबा|गर्मी|कप|पत्ती|चीनी|ठंडा|कोन|बच्चे|स्वादिष्ट|रसोई",
"पालतू|भौंकना|दोस्त|पूँछ|रखवाला|चूहा|चढ़ना|बड़ा|सूँड|स्लेटी|जंगल|राजा|दहाड़|जंगली|ताकतवर|धारियाँ|मज़ेदार|सवारी|तेज़|दौड़|फार्म|घास|सींग|ज़हर|खतरनाक|रेंगना|पानी|तैरना|समुद्र|नदी|जाल|प्रकृति|बाहर",
"पाठ|घंटी|सीखना|बीमार|बिस्तर|दवा|विमान|यात्रा|टिकट|सामान|रेत|सूरज|खरीदना|सब्ज़ियाँ|भीड़|पैसा|दुकान|शांत|पढ़ना|अलमारी|टहलना|बेंच|खेलना|वेटर|मेन्यू|मेज़|फ़िल्म|स्क्रीन|पॉपकॉर्न|अंधेरा|सीट|पिंजरा|लोग|घूमना",
"कॉल|जेब|बैटरी|रिंगटोन|बैठना|पैर|लकड़ी|समय|दीवार|अंक|अलार्म|बारिश|खोलना|गीला|हैंडल|ताला|दरवाज़ा|धातु|छोटा|चेहरा|नज़र|चमकदार|परछाई|पन्ने|कागज़|कहानी|पाँव|जोड़ी|फीते|दौड़ना|पहिये|पैडल|सड़क|रिमोट|देखना|समाचार|उपयोगी|घर",
"इंजेक्शन|चोर|वर्दी|कानून|रक्षा|ट्रैक्टर|गाँव|खाना बनाना|चाकू|कार|बस|गाना|आवाज़|संगीत|मंच|मशहूर|आसमान|उड़ना|देखभाल|सेना|युद्ध|बंदूक|बहादुर|काम|वेतन"],
bn:["পনির|গোল|ওভেন|গরম|টুকরো|সাদা|শস্য|সেদ্ধ|মাঠ|বাটি|নাস্তা|নরম|ময়দা|মুরগি|হলুদ|পানীয়|গ্লাস|ফল|লাল|গাছ|মিষ্টি|লম্বা|গ্রীষ্ম|কাপ|পাতা|চিনি|ঠান্ডা|কোন|শিশু|সুস্বাদু|রান্নাঘর",
"পোষা|ঘেউ ঘেউ|বন্ধু|লেজ|পাহারা|ইঁদুর|চড়া|বড়|শুঁড়|ধূসর|বন|রাজা|গর্জন|বন্য|শক্তিশালী|ডোরা|মজার|সওয়ারি|দ্রুত|দৌড়|খামার|ঘাস|শিং|বিষ|বিপজ্জনক|বুকে হাঁটা|জল|সাঁতার|সমুদ্র|নদী|জাল|প্রকৃতি|বাইরে",
"পাঠ|ঘণ্টা|শেখা|অসুস্থ|বিছানা|ওষুধ|বিমান|ভ্রমণ|টিকিট|মালপত্র|বালি|সূর্য|কেনা|সবজি|ভিড়|টাকা|দোকান|শান্ত|পড়া|তাক|হাঁটা|বেঞ্চ|খেলা|ওয়েটার|মেনু|টেবিল|ছবি|পর্দা|পপকর্ন|অন্ধকার|আসন|খাঁচা|মানুষ|ঘুরতে যাওয়া",
"কল|পকেট|ব্যাটারি|রিংটোন|বসা|পা|কাঠ|সময়|দেয়াল|সংখ্যা|অ্যালার্ম|বৃষ্টি|খোলা|ভেজা|হাতল|তালা|দরজা|ধাতু|ছোট|মুখ|তাকানো|চকচকে|প্রতিবিম্ব|পৃষ্ঠা|কাগজ|গল্প|পায়ের পাতা|জোড়া|ফিতা|দৌড়ানো|চাকা|প্যাডেল|রাস্তা|রিমোট|দেখা|খবর|দরকারি|বাড়ি",
"ইনজেকশন|চোর|উর্দি|আইন|রক্ষা|ট্রাক্টর|গ্রাম|রান্না|ছুরি|গাড়ি|বাস|গান|কণ্ঠ|সংগীত|মঞ্চ|বিখ্যাত|আকাশ|ওড়া|যত্ন|সেনাবাহিনী|যুদ্ধ|বন্দুক|সাহসী|কাজ|বেতন"],
te:["చీజ్|గుండ్రం|ఓవెన్|వేడి|ముక్క|తెలుపు|ధాన్యం|ఉడికించిన|పొలం|గిన్నె|అల్పాహారం|మెత్తని|పిండి|కోడి|పసుపు|పానీయం|గ్లాసు|పండు|ఎరుపు|చెట్టు|తీపి|పొడవు|వేసవి|కప్పు|ఆకు|చక్కెర|చల్లని|కోన్|పిల్లలు|రుచి|వంటగది",
"పెంపుడు|మొరగడం|స్నేహితుడు|తోక|కాపలా|ఎలుక|ఎక్కడం|పెద్ద|తొండం|బూడిద రంగు|అడవి|రాజు|గర్జన|క్రూర|బలమైన|చారలు|సరదా|స్వారీ|వేగం|పందెం|ఫారం|గడ్డి|కొమ్ములు|విషం|ప్రమాదకరం|పాకడం|నీరు|ఈత|సముద్రం|నది|వల|ప్రకృతి|బయట",
"పాఠం|గంట|నేర్చుకోవడం|జబ్బు|మంచం|మందు|విమానం|ప్రయాణం|టికెట్|సామాను|ఇసుక|సూర్యుడు|కొనడం|కూరగాయలు|గుంపు|డబ్బు|దుకాణం|నిశ్శబ్దం|చదవడం|అరలు|నడక|బెంచి|ఆట|వెయిటర్|మెనూ|బల్ల|చిత్రం|తెర|పాప్ కార్న్|చీకటి|సీటు|పంజరం|జనం|సందర్శన",
"కాల్|జేబు|బ్యాటరీ|రింగ్ టోన్|కూర్చోవడం|కాళ్ళు|కలప|సమయం|గోడ|అంకెలు|అలారం|వర్షం|తెరవడం|తడి|పిడి|తాళం|తలుపు|లోహం|చిన్న|ముఖం|చూడటం|మెరుపు|ప్రతిబింబం|పేజీలు|కాగితం|కథ|పాదం|జత|లేసులు|పరుగు|చక్రాలు|పెడల్|రోడ్డు|రిమోట్|వీక్షణ|వార్తలు|ఉపయోగం|ఇల్లు",
"ఇంజెక్షన్|దొంగ|యూనిఫాం|చట్టం|రక్షణ|ట్రాక్టర్|గ్రామం|వంట|కత్తి|కారు|బస్సు|పాట|గొంతు|సంగీతం|వేదిక|ప్రసిద్ధ|ఆకాశం|ఎగరడం|సంరక్షణ|సైన్యం|యుద్ధం|తుపాకీ|ధైర్యం|పని|జీతం"],
ta:["சீஸ்|வட்டம்|அடுப்பு|சூடு|துண்டு|வெள்ளை|தானியம்|வேகவைத்த|வயல்|கிண்ணம்|காலை உணவு|மென்மை|மாவு|கோழி|மஞ்சள்|பானம்|டம்ளர்|பழம்|சிவப்பு|மரம்|இனிப்பு|நீளம்|கோடை|கோப்பை|இலை|சர்க்கரை|குளிர்|கோன்|குழந்தைகள்|சுவை|சமையலறை",
"செல்லப்பிராணி|குரைத்தல்|நண்பன்|வால்|காவல்|எலி|ஏறுதல்|பெரிய|தும்பிக்கை|சாம்பல் நிறம்|காடு|ராஜா|கர்ஜனை|காட்டு|வலிமை|கோடுகள்|வேடிக்கை|சவாரி|வேகம்|பந்தயம்|பண்ணை|புல்|கொம்புகள்|விஷம்|ஆபத்து|ஊர்தல்|தண்ணீர்|நீச்சல்|கடல்|ஆறு|வலை|இயற்கை|வெளியே",
"பாடம்|மணி|கற்றல்|நோய்|படுக்கை|மருந்து|விமானம்|பயணம்|டிக்கெட்|சாமான்|மணல்|சூரியன்|வாங்குதல்|காய்கறிகள்|கூட்டம்|பணம்|கடை|அமைதி|படித்தல்|அலமாரி|நடை|பெஞ்ச்|விளையாட்டு|பரிமாறுபவர்|மெனு|மேசை|படம்|திரை|பாப்கார்ன்|இருட்டு|இருக்கை|கூண்டு|மக்கள்|சுற்றிப்பார்த்தல்",
"அழைப்பு|பாக்கெட்|பேட்டரி|ரிங்டோன்|உட்காருதல்|கால்கள்|மரக்கட்டை|நேரம்|சுவர்|எண்கள்|அலாரம்|மழை|திறத்தல்|ஈரம்|கைப்பிடி|பூட்டு|கதவு|உலோகம்|சிறிய|முகம்|பார்த்தல்|பளபளப்பு|பிரதிபலிப்பு|பக்கங்கள்|காகிதம்|கதை|பாதம்|ஜோடி|லேஸ்|ஓட்டம்|சக்கரங்கள்|பெடல்|சாலை|ரிமோட்|காணுதல்|செய்திகள்|பயனுள்ள|வீடு",
"ஊசி|திருடன்|சீருடை|சட்டம்|பாதுகாப்பு|டிராக்டர்|கிராமம்|சமையல்|கத்தி|கார்|பேருந்து|பாடல்|குரல்|இசை|மேடை|பிரபலம்|வானம்|பறத்தல்|பராமரிப்பு|ராணுவம்|போர்|துப்பாக்கி|தைரியம்|வேலை|சம்பளம்"],
mr:["चीज|गोल|ओव्हन|गरम|तुकडा|पांढरा|धान्य|उकडलेले|शेत|वाटी|नाश्ता|मऊ|पीठ|कोंबडी|पिवळा|पेय|ग्लास|फळ|लाल|झाड|गोड|लांब|उन्हाळा|कप|पान|साखर|थंड|कोन|मुले|चविष्ट|स्वयंपाकघर",
"पाळीव|भुंकणे|मित्र|शेपूट|राखण|उंदीर|चढणे|मोठा|सोंड|राखाडी|जंगल|राजा|डरकाळी|जंगली|बलवान|पट्टे|गमतीदार|स्वारी|वेगवान|शर्यत|फार्म|गवत|शिंगे|विष|धोकादायक|सरपटणे|पाणी|पोहणे|समुद्र|नदी|जाळे|निसर्ग|बाहेर",
"धडा|घंटा|शिकणे|आजारी|पलंग|औषध|विमान|प्रवास|तिकीट|सामान|वाळू|सूर्य|खरेदी|भाज्या|गर्दी|पैसे|दुकान|शांत|वाचन|कपाट|चालणे|बाक|खेळणे|वेटर|मेनू|टेबल|चित्रपट|पडदा|पॉपकॉर्न|अंधार|आसन|पिंजरा|लोक|भेट",
"कॉल|खिसा|बॅटरी|रिंगटोन|बसणे|पाय|लाकूड|वेळ|भिंत|अंक|अलार्म|पाऊस|उघडणे|ओले|मूठ|कुलूप|दार|धातू|लहान|चेहरा|बघणे|चमकदार|प्रतिबिंब|पाने|कागद|गोष्ट|पाऊल|जोडी|लेस|धावणे|चाके|पेडल|रस्ता|रिमोट|पाहणे|बातम्या|उपयोगी|घर",
"इंजेक्शन|चोर|गणवेश|कायदा|संरक्षण|ट्रॅक्टर|गाव|स्वयंपाक|सुरी|गाडी|बस|गाणे|आवाज|संगीत|मंच|प्रसिद्ध|आकाश|उडणे|काळजी|सैन्य|युद्ध|बंदूक|शूर|काम|पगार"],
ar:["جبن|دائري|فرن|ساخن|شريحة|أبيض|حبوب|مسلوق|حقل|وعاء|فطور|طري|دقيق|دجاجة|أصفر|مشروب|كأس|فاكهة|أحمر|شجرة|حلو|طويل|صيف|كوب|ورقة|سكر|بارد|مخروط|أطفال|لذيذ|مطبخ",
"حيوان أليف|نباح|صديق|ذيل|حارس|فأر|تسلق|كبير|خرطوم|رمادي|غابة|ملك|زئير|متوحش|قوي|خطوط|مضحك|ركوب|سريع|سباق|مزرعة|عشب|قرون|سم|خطير|زحف|ماء|سباحة|بحر|نهر|شبكة|طبيعة|في الخارج",
"درس|جرس|تعلم|مريض|سرير|دواء|طائرة|سفر|تذكرة|أمتعة|رمل|شمس|شراء|خضروات|زحام|مال|متجر|هدوء|قراءة|رفوف|مشي|مقعد طويل|لعب|نادل|قائمة الطعام|طاولة|فيلم|شاشة|فشار|ظلام|مقعد|قفص|ناس|زيارة",
"اتصال|جيب|بطارية|رنين|جلوس|أرجل|خشب|وقت|جدار|أرقام|منبه|مطر|فتح|مبلل|مقبض|قفل|باب|معدن|صغير|وجه|نظر|لامع|انعكاس|صفحات|ورق|قصة|قدم|زوج|رباط الحذاء|جري|عجلات|دواسة|طريق|جهاز التحكم|مشاهدة|أخبار|مفيد|بيت",
"حقنة|لص|زي رسمي|قانون|حماية|جرار|قرية|طبخ|سكين|سيارة|حافلة|أغنية|صوت|موسيقى|مسرح|مشهور|سماء|طيران|رعاية|جيش|حرب|سلاح|شجاع|عمل|راتب"],
fr:["fromage|rond|four|chaud|tranche|blanc|céréale|bouilli|champ|bol|petit-déjeuner|mou|farine|poule|jaune|boisson|verre|fruit|rouge|arbre|sucré|long|été|tasse|feuille|sucre|froid|cornet|enfants|délicieux|cuisine",
"animal de compagnie|aboiement|ami|queue|gardien|souris|grimper|grand|trompe|gris|forêt|roi|rugissement|sauvage|fort|rayures|drôle|monter|rapide|course|ferme|herbe|cornes|poison|dangereux|ramper|eau|nager|mer|rivière|filet|nature|dehors",
"leçon|cloche|apprendre|malade|lit|médicament|avion|voyage|billet|bagages|sable|soleil|acheter|légumes|foule|argent|magasin|silence|lire|étagères|marcher|banc|jouer|serveur|menu|table|film|écran|pop-corn|sombre|siège|cage|gens|visiter",
"appel|poche|batterie|sonnerie|s'asseoir|pieds|bois|heure|mur|chiffres|réveil|pluie|ouvrir|mouillé|poignée|serrure|porte|métal|petit|visage|se regarder|brillant|reflet|pages|papier|histoire|pied|paire|lacets|courir|roues|pédale|route|télécommande|regarder|actualités|utile|maison",
"piqûre|voleur|uniforme|loi|protéger|tracteur|village|cuisiner|couteau|voiture|bus|chanson|voix|musique|scène|célèbre|ciel|voler|soin|armée|guerre|arme|courageux|travail|salaire"],
pt:["queijo|redondo|forno|quente|fatia|branco|grão|cozido|campo|tigela|café da manhã|macio|farinha|galinha|amarelo|bebida|copo|fruta|vermelho|árvore|doce|comprido|verão|xícara|folha|açúcar|frio|casquinha|crianças|gostoso|cozinha",
"animal de estimação|latido|amigo|rabo|guarda|rato|subir|grande|tromba|cinza|floresta|rei|rugido|selvagem|forte|listras|engraçado|montar|rápido|corrida|fazenda|grama|chifres|veneno|perigoso|rastejar|água|nadar|mar|rio|rede|natureza|ao ar livre",
"aula|sino|aprender|doente|cama|remédio|avião|viagem|bilhete|bagagem|areia|sol|comprar|legumes|multidão|dinheiro|loja|silêncio|ler|estantes|caminhar|banco|brincar|garçom|cardápio|mesa|filme|tela|pipoca|escuro|assento|jaula|pessoas|visitar",
"ligação|bolso|bateria|toque|sentar|pernas|madeira|hora|parede|números|alarme|chuva|abrir|molhado|cabo|fechadura|porta|metal|pequeno|rosto|olhar|brilhante|reflexo|páginas|papel|história|pé|par|cadarços|correr|rodas|pedal|estrada|controle remoto|assistir|notícias|útil|casa",
"injeção|ladrão|uniforme|lei|proteger|trator|aldeia|cozinhar|faca|carro|ônibus|canção|voz|música|palco|famoso|céu|voar|cuidado|exército|guerra|arma|corajoso|trabalho|salário"],
ru:["сыр|круглый|духовка|горячий|ломтик|белый|зерно|варёный|поле|миска|завтрак|мягкий|мука|курица|жёлтый|напиток|стакан|фрукт|красный|дерево|сладкий|длинный|лето|чашка|лист|сахар|холодный|рожок|дети|вкусный|кухня",
"питомец|лай|друг|хвост|сторож|мышь|лазать|большой|хобот|серый|лес|царь|рёв|дикий|сильный|полосы|смешной|верхом|быстрый|гонка|ферма|трава|рога|яд|опасный|ползать|вода|плавать|море|река|сеть|природа|на улице",
"урок|звонок|учиться|больной|кровать|лекарство|самолёт|путешествие|билет|багаж|песок|солнце|покупать|овощи|толпа|деньги|магазин|тишина|читать|полки|гулять|скамейка|играть|официант|меню|стол|фильм|экран|попкорн|темно|сиденье|клетка|люди|посещать",
"звонить|карман|батарея|рингтон|сидеть|ножки|древесина|время|стена|цифры|будильник|дождь|открывать|мокрый|ручка|замок|дверь|металл|маленький|лицо|смотреться|блестящий|отражение|страницы|бумага|история|ступня|пара|шнурки|бегать|колёса|педаль|дорога|пульт|смотреть|новости|полезный|дом",
"укол|вор|форма|закон|защита|трактор|деревня|готовка|нож|машина|автобус|песня|голос|музыка|сцена|знаменитый|небо|летать|забота|армия|война|оружие|смелый|работа|зарплата"]
};

/* ---------- which clue words fit which secret word ----------
   One entry per category: [clues that fit every word in the category, [one line per secret word]].
   Each line is "clues an AI player may say / extra clues it accepts from others". @Name points at another
   secret word (so "Hospital" can be a clue for "Doctor"). Names are the English ones; they are only keys. */
const CLUE_MAP=[
["tasty kitchen",[
 "cheese round oven hot slice / red soft",
 "white grain boiled field bowl / hot soft @Farmer",
 "breakfast oven slice soft flour / white hot grain",
 "breakfast white hen yellow boiled round / hot soft small",
 "white drink @Cow glass breakfast / hot cold cup sweet",
 "fruit red round tree sweet / yellow small",
 "fruit yellow long sweet soft @Monkey / tree breakfast",
 "fruit yellow sweet summer tree / soft king round",
 "drink hot cup leaf sugar / sweet breakfast glass",
 "cold sweet summer cone children / soft white cup"]],
["nature outside",[
 "pet bark friend tail guard / fast big small run @Police home",
 "pet mouse soft tail climb @Milk / small funny fast home",
 "big trunk grey forest @Zoo / strong wild water",
 "king roar wild strong forest @Zoo / big dangerous fast",
 "stripes wild forest strong roar @Zoo / big dangerous fast",
 "tree climb tail funny forest @Banana @Zoo / wild fast small",
 "ride fast race farm strong tail / big grass run",
 "@Milk farm grass horns big @Farmer / tail white village",
 "long poison dangerous crawl forest / wild grass @Zoo",
 "water swim sea river net / small tail pet fast"]],
["people visit",[
 "children @Teacher @Book lesson bell learn / read play uniform",
 "@Doctor @Nurse sick bed medicine / white quiet care injection",
 "plane travel ticket luggage @Pilot / big sky fly crowd",
 "sand sea sun swim summer / water hot play walk",
 "buy vegetables crowd money shop / fruit @Fish",
 "@Book quiet read shelves learn / table",
 "tree grass walk bench children play / run sit outside nature",
 "@Chef waiter menu table tasty money / kitchen cooking @Pizza sit",
 "film screen popcorn dark ticket seat / big watch sit",
 "cage ticket children wild @Lion @Monkey / @Elephant @Tiger @Snake nature walk"]],
["useful home",[
 "call screen pocket battery ring / small alarm time",
 "sit legs wood table seat",
 "time wall numbers alarm round / ring battery",
 "rain open wet sun handle",
 "lock door metal small open pocket / car",
 "face wall look shiny reflection / glass round",
 "read pages paper story @Library learn / @School @Teacher",
 "foot walk pair laces run / small",
 "wheels ride pedal bell road / fast race",
 "screen remote watch news film / big wall"]],
["work salary",[
 "@Hospital sick medicine white injection / care @Nurse",
 "@School children @Book lesson learn / read",
 "thief uniform law guard protect / gun car brave",
 "field farm tractor village grain @Cow / grass vegetables @Rice",
 "kitchen cooking knife @Restaurant menu tasty / white hot",
 "car road wheels bus travel / fast",
 "song voice music stage famous",
 "plane sky fly uniform @Airport travel",
 "@Hospital care injection white medicine uniform sick / @Doctor bed",
 "army war gun uniform brave protect / guard strong"]]
];
const CLUE_VAGUE="big small useful home people famous children";   // what a clueless imposter falls back on

const BOT=(()=>{
  let L=null;
  // How sharp the AI players are. These were set by simulating thousands of rounds, so that neither side wins almost every time.
  const TUNE={giveaway1:.15,giveaway2:.5,   // how likely an AI player is to give a dead-giveaway clue (first clue / later clues)
    recall:.5,guessDoubt:12,                // a caught AI imposter remembers about half the clues and is unsure: its last guess is right about half the time
    unknown:.2,silent:.2,timeout:.6};       // extra suspicion for a word it does not know / typing nothing / running out of time.
                                            // unknown + silent are kept small on purpose: an AI player that cannot judge your clue treats you as an average suspect
  const norm=s=>String(s==null?'':s).trim().toLowerCase().replace(/\s+/g,' ');
  const words=lang=>WORDS[lang]||WORDS.en;
  const pick=(arr,w)=>{let tot=0;const ws=arr.map(x=>{const v=Math.max(.01,w(x));tot+=v;return v});let r=Math.random()*tot;
    for(let i=0;i<arr.length;i++){r-=ws[i];if(r<=0)return arr[i]}return arr[arr.length-1]};

  // Build the lookup tables once. A "token" is a clue: 0..N-1 = a clue word, 1000+c = the secret word number c.
  function lex(){
    if(L)return L;
    const clue={},key={},ref={},find={};
    for(const l in CLUE_RAW)clue[l]=CLUE_RAW[l].join('|').split('|');
    clue.en.forEach((w,i)=>key[w]=i);
    WORDS.en.words.forEach((ws,ci)=>ws.forEach((w,wi)=>ref[w]=1000+ci*10+wi));
    const tok=k=>k[0]==='@'?ref[k.slice(1)]:key[k];
    const list=s=>s.trim()?s.trim().split(/\s+/).map(tok):[];
    const strong=[],weak=[],generic=[],count={},common=[];
    CLUE_MAP.forEach(([g,rows],ci)=>{
      generic[ci]=list(g);const inCat={};
      rows.forEach((s,wi)=>{const [a,b='']=s.split('/'),c=ci*10+wi;strong[c]=list(a);weak[c]=list(b);
        for(const t of strong[c]){count[t]=(count[t]||0)+1;inCat[t]=(inCat[t]||0)+1}});
      for(const t of generic[ci])count[t]=(count[t]||0)+10;
      common[ci]=Object.keys(inCat).filter(t=>inCat[t]>=2).map(t=>[+t,inCat[t]]);
    });
    for(const l in WORDS){                       // text -> token, to understand what the others typed
      const m=find[l]=new Map();
      (clue[l]||[]).forEach((w,i)=>{const k=norm(w);if(!m.has(k))m.set(k,i)});
      WORDS[l].words.forEach((ws,ci)=>ws.forEach((w,wi)=>{const k=norm(w);if(!m.has(k))m.set(k,1000+ci*10+wi)}));
    }
    const text=(t,lang)=>t>=1000?words(lang).words[Math.floor((t-1000)/10)][(t-1000)%10]:((clue[lang]||clue.en)[t]||clue.en[t]);
    return L={langs:Object.keys(WORDS),clue,strong,weak,generic,count,common,find,text,vague:list(CLUE_VAGUE),size:strong.length};
  }
  // understand a typed clue: the room's language first, then English, then any other language
  function rec(raw,lang){
    const k=norm(raw);if(!k)return null;
    for(const l of [lang,'en',...L.langs]){const m=L.find[l];if(!m)continue;
      let t=m.get(k);if(t===undefined&&k.length>3)t=m.get(k.endsWith('s')?k.slice(0,-1):k+'s');
      if(t!==undefined)return t}
    return null;
  }
  function conceptOf(word,lang){const W=words(lang).words;for(let ci=0;ci<W.length;ci++){const wi=W[ci].indexOf(word);if(wi>=0)return ci*10+wi}return -1}
  // does clue t fit secret word c?  y = yes, w = loosely, u = cannot tell, n = no
  function fit(t,c){
    if(t===1000+c||L.strong[c].includes(t)||L.generic[Math.floor(c/10)].includes(t))return 'y';
    if(L.weak[c].includes(t))return 'w';
    return t>=1000?'u':'n';
  }
  // "Secret imposter" rooms: nobody is told who holds the different word, so an AI player has to notice it by itself,
  // like a person would. When at least two other players keep giving clues that miss its word, and they outnumber the
  // players whose clues fit, it concludes that it is the odd one out and starts to bluff.
  function oddOne(view){
    const r=view.round,lang=view.settings.lang;
    if(view.settings.give!=='secret'||r.role!=='crew')return false;
    const c=conceptOf(r.word,lang);if(c<0)return false;
    let miss=0,fits=0;
    for(const id of r.order){if(id===view.you)continue;let y=0,n=0;
      for(const raw of r.clues[id]||[]){const t=rec(raw,lang);if(t==null)continue;const f=fit(t,c);if(f==='n')n++;else if(f!=='u')y++}
      if(n>y)miss++;else if(y)fits++}
    return miss>=2&&miss>fits;
  }
  // what an imposter is allowed to know: the category (unless the room gives no hint at all) and its own, different word (if it got one)
  function scope(view){
    const r=view.round,lang=view.settings.lang;let ci=-1,H=-1;
    const mine=r.hint||(r.role==='crew'?r.word:null);   // in a secret room the different word is simply "its word"
    if(mine){H=conceptOf(mine,lang);if(H>=0)ci=Math.floor(H/10)}
    if(ci<0&&r.cat)ci=words(lang).cats.indexOf(r.cat);
    const all=[];for(let c=0;c<L.size;c++)if((ci<0||Math.floor(c/10)===ci)&&c!==H)all.push(c);
    return {ci,H,all};
  }
  // how well each candidate word explains the clues given by the other players
  function evidence(view,cands,recall=1){           // recall < 1: it only remembers some of the clues, like a person would
    const r=view.round,lang=view.settings.lang,skip=new Set([view.you,...(r.mates||[])]),s={};
    for(const c of cands)s[c]=0;
    for(const id of r.order){if(skip.has(id))continue;
      for(const raw of r.clues[id]||[]){const t=rec(raw,lang);if(t==null||Math.random()>recall)continue;
        for(const c of cands){const f=fit(t,c);s[c]+=f==='y'?1+2/(L.count[t]||1):f==='w'?.3:f==='n'?-1.5:0}}}
    return s;
  }
  // how suspicious each player looks if the secret word is c (c = -1: no idea what the word is)
  function suspicion(view,c){
    const r=view.round,lang=view.settings.lang,sum={},n={},extra={},seen=new Set(),out={};
    for(const id of r.order){sum[id]=0;n[id]=0;extra[id]=0}
    const rounds=Math.max(0,...r.order.map(id=>(r.clues[id]||[]).length));
    for(let j=0;j<rounds;j++)for(const id of r.order){
      const raw=(r.clues[id]||[])[j];if(raw===undefined)continue;
      if(raw==='—'){extra[id]+=TUNE.timeout;continue}     // ran out of time
      if(raw==='✓'){extra[id]+=TUNE.silent;continue}      // said it out loud and typed nothing: an AI player cannot hear that
      const t=rec(raw,lang);if(t==null){extra[id]+=TUNE.unknown;continue}   // a word it does not know: it cannot check it, so only a little doubt
      const f=c<0?'u':fit(t,c);
      let d=f==='y'?.3-2/(L.count[t]||1):f==='w'?.1:f==='u'?.2:1.2;   // a precise clue clears you, a vague one does not, a wrong one stands out
      if(seen.has(t))d+=.3;                               // repeating a clue someone else gave looks a little like copying
      seen.add(t);sum[id]+=d;n[id]++;
    }
    // someone it could not judge at all gets the benefit of the doubt: they count as average, not as guilty
    const judged=r.order.filter(id=>id!==view.you&&n[id]>0),avg=judged.length?judged.reduce((a,id)=>a+sum[id],0)/judged.length:0;
    for(const id of r.order)out[id]=(n[id]?sum[id]:avg)+extra[id];
    return out;
  }

  function clue(view){
    lex();const r=view.round,lang=view.settings.lang,me=view.you,said=new Set(),mine=new Set();
    for(const id of r.order)for(const raw of r.clues[id]||[]){const t=rec(raw,lang);if(t!=null){said.add(t);if(id===me)mine.add(t)}}
    const nth=(r.clues[me]||[]).length;let pool=[],w=()=>1;
    if(r.role==='crew'&&!oddOne(view)){   // it trusts that it has the same word as everyone else
      const c=conceptOf(r.word,lang);
      if(c>=0){
        const loose=[...L.weak[c],...L.generic[Math.floor(c/10)]];
        pool=L.strong[c].filter(t=>!said.has(t));
        w=t=>{const n=L.count[t]||1;return n===1?(nth?TUNE.giveaway2:TUNE.giveaway1):n<=4?1.6:1};   // stay subtle: a giveaway clue hands the word to the imposter
        if(!pool.length){pool=loose.filter(t=>!said.has(t));w=()=>1}                  // the obvious clues are taken: reach for a looser one
        if(!pool.length)pool=[...L.strong[c],...loose].filter(t=>!mine.has(t));
        if(!pool.length)pool=L.strong[c];
      }
    }else{
      const sc=scope(view),ev=evidence(view,sc.all),ranked=sc.all.slice().sort((a,b)=>ev[b]-ev[a]);
      if(ranked.length&&ev[ranked[0]]>.5){                                            // work out what the others seem to be describing
        const top=ranked.slice(0,3),T=top[0];
        pool=[...L.strong[T],...L.generic[Math.floor(T/10)]].filter(t=>!said.has(t)&&t!==1000+T);
        w=t=>.4+top.reduce((a,c,i)=>a+(fit(t,c)==='y'?[1.5,1,.6][i]:0),0);
      }
      if(!pool.length&&sc.ci>=0){                                                     // only the category to go on: stay vague
        const cm=new Map(L.common[sc.ci]);for(const t of L.generic[sc.ci])cm.set(t,(cm.get(t)||0)+3);
        if(sc.H>=0)for(const t of L.strong[sc.H])if(cm.has(t))cm.set(t,cm.get(t)+2);
        pool=[...cm.keys()].filter(t=>!said.has(t));if(!pool.length)pool=[...cm.keys()].filter(t=>!mine.has(t));
        w=t=>cm.get(t)||1;
      }
      if(!pool.length){pool=L.vague.filter(t=>!mine.has(t));w=()=>1}                  // nothing to go on at all
    }
    if(!pool.length)pool=L.vague;
    return L.text(pick(pool,w),lang);
  }
  function vote(view){
    lex();const r=view.round,lang=view.settings.lang;let c=-1;
    if(r.role==='crew'&&!oddOne(view))c=conceptOf(r.word,lang);
    else{const sc=scope(view),ev=evidence(view,sc.all),best=sc.all.slice().sort((a,b)=>ev[b]-ev[a])[0];if(best!==undefined&&ev[best]>.8)c=best}
    const sus=suspicion(view,c),skip=new Set([view.you,...(r.mates||[])]);
    return r.order.filter(id=>!skip.has(id)).map(id=>[id,sus[id]+gut(view,id)]).sort((a,b)=>b[1]-a[1]).slice(0,r.k).map(x=>x[0]);
  }
  // a steady "gut feeling" (-0.5..0.5) about each other player for this round, so an AI player's vote matches what it said in the chat
  function gut(view,id){
    const s=view.you+'|'+id+'|'+view.round.order.join(',');let h=2166136261;
    for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}
    return ((h>>>0)%1000)/1000-.5;
  }
  function guess(view){
    lex();const r=view.round,lang=view.settings.lang,H=r.hint?conceptOf(r.hint,lang):-1;
    const cs=(r.opts||[]).map(w=>conceptOf(w,lang)),ev=evidence(view,cs.filter(c=>c>=0),TUNE.recall);
    if(!cs.length)return 0;
    const sc=cs.map(c=>c<0||c===H?-99:ev[c]),top=Math.max(...sc);
    return pick(cs.map((c,i)=>i),i=>Math.exp((sc[i]-top)/TUNE.guessDoubt));   // usually the best fit, but not always: it can talk itself into a wrong answer
  }
  const suspect=view=>vote(view)[0]||null;
  // the referee: does this clue fit the secret word?  y = yes, w = loosely, n = no link found, s = it is the secret word itself,
  // u = a word that is not in the lists (so it cannot be checked), '' = nothing was typed
  function judge(raw,lang,word){
    lex();const k=norm(raw);if(!k||k==='—'||k==='✓'||k==='…')return '';
    const c=conceptOf(word,lang);if(c<0)return 'u';
    if(k===norm(word))return 's';
    const t=rec(raw,lang);if(t==null)return 'u';
    if(t===1000+c)return 's';
    if(L.strong[c].includes(t))return 'y';
    if(L.weak[c].includes(t)||L.generic[Math.floor(c/10)].includes(t))return 'w';   // true of the whole category, not this word in particular
    return t>=1000?'u':'n';
  }
  // the imposter's different word (not an AI decision: the game asks for it when a round starts). Any other word of the
  // category can come up, but one that shares clues with the secret word (Lion and Tiger, Doctor and Nurse) comes up more often.
  function near(ci,wi){
    lex();const c=ci*10+wi,A=new Set([...L.strong[c],...L.weak[c]]),others=[];
    for(let j=0;j<10;j++)if(j!==wi)others.push(j);
    return pick(others,j=>{const d=ci*10+j,B=[...L.strong[d],...L.weak[d]];let n=B.filter(t=>A.has(t)).length;
      if(A.has(1000+d)||B.includes(1000+c))n+=2;   // one of them is a clue for the other
      return 1+Math.min(n,5)});                    // capped, so that no pair becomes a sure thing
  }
  // used by the tests: are the word lists complete and consistent?
  function check(){
    lex();const out={sizes:{},bad:[]};
    for(const l in CLUE_RAW)out.sizes[l]=CLUE_RAW[l].map(s=>s.split('|').length).join(',');
    const und=a=>a.some(t=>t===undefined);
    L.strong.forEach((a,c)=>{if(und(a))out.bad.push('strong '+c);if(a.length<5)out.bad.push('few '+c)});
    L.weak.forEach((a,c)=>{if(und(a))out.bad.push('weak '+c)});
    L.generic.forEach((a,c)=>{if(und(a))out.bad.push('generic '+c)});
    if(und(L.vague))out.bad.push('vague');
    return out;
  }
  return {clue,vote,guess,suspect,judge,near,oddOne:v=>(lex(),oddOne(v)),check,TUNE};
})();
