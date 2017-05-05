var hiraganaDict = {'あ':'a', 'い':'i', 'う':'u',' え':'e', 'お':'o', 'か':'ka', 'き':'ki', 'く':'ku', 'け':'ke', 'こ':'ko', 'が':'ga', 'ぎ':'gi', 'ぐ':'gu', 'げ':'ge', 'ご':'go', 'さ':'sa', 'し':'shi', 'す':'su', 'せ':'se', 'そ':'so', 'ざ':'za','じ':'ji', 'ず':'zu', 'ぜ':'ze', 'ぞ':'zo', 'た':'ta', 'ち':'chi', 'つ':'tsu', 'て':'te', 'と':'to', 'だ':'da', 'で':'de', 'ど':'do', 'な':'na', 'に':'ni', 'ぬ':'nu', 'ね':'ne', 'の':'no', 'は':'ha', 'ひ':'hi', 'ふ':'fu', 'へ':'he', 'ほ':'ho', 'ば':'ba', 'び':'bi', 'ぶ':'bu', 'べ':'be', 'ぼ':'bo', 'ぱ':'pa', 'ぴ':'pi', 'ぷ':'pu', 'ぺ':'pe', 'ぽ':'po', 'ま':'ma', 'み':'mi', 'む':'mu', 'め':'me', "も":'mo', 'や':'ya', 'ゆ':'yu', 'よ':'yo', 'ら':'ra', 'り':'ri', 'る':'ru', 'れ':'re', 'ろ':'ro', 'わ':'wa', 'を':'wo', 'ん':'n', 'きゃ':'kya', 'きゅ':'kyu', 'きょ':'kyo', 'しゃ':'sha', 'しゅ':'shu', 'しょ':'sho', 'ちゃ':'cha', 'ちゅ':'chu', 'ちょ':'cho', 'にゃ':'nya', 'にゅ':'nyu', 'にょ':'nyo', 'ひゃ':'hya', 'ひゅ':'hyu', 'ひょ':'hyo', 'みゃ':'mya', 'みゅ':'myu', 'みょ':'myo', 'りゃ':'rya', 'りゅ':'ryu', 'りょ':'ryo', 'ぎゃ':'gya', 'ぎゅ':'gyu', 'ぎょ':'gyo', 'じゃ':'ja', 'じゅ':'ju', 'じょ':'jo', 'びゃ':'bya', 'びゅ':'byu', 'びょ':'byo', 'ぴゃ':'pya', 'ぴゅ':'pyu', 'ぴょ':'pyo'};
var katakanaDict = {'ア':'a', 'イ':'i', 'ウ':'u', 'エ':'e', 'オ':'o', 'カ':'ka', 'キ':'ki', 'ク':'ku', 'ケ':'ke', 'コ':'ko', 'ガ':'ga', 'ギ':'gi', 'グ':'gu', 'ゲ':'ge', 'ゴ':'go', 'サ':'sa', 'シ':'shi', 'ス':'su', 'セ':'se', 'ソ':'so', 'ザ':'za','ジ':'ji', 'ズ':'zu', 'ゼ':'ze', 'ゾ':'zo', 'タ':'ta', 'チ':'chi', 'ツ':'tsu', 'テ':'te', 'ト':'to', 'ダ':'da', 'デ':'de', 'ド':'do', 'ナ':'na', 'ニ':'ni', 'ヌ':'nu', 'ネ':'ne', 'ノ':'no', 'ハ':'ha', 'ヒ':'hi', 'フ':'fu', 'ヘ':'he', 'ホ':'ho', 'バ':'ba', 'ビ':'bi', 'ブ':'bu', 'ベ':'be', 'ボ':'bo', 'パ':'pa', 'ピ':'pi', 'プ':'pu', 'ペ':'pe', 'ポ':'po', 'マ':'ma', 'ミ':'mi', 'ム':'mu', 'メ':'me', "モ":'mo', 'ヤ':'ya', 'ユ':'yu', 'ヨ':'yo', 'ラ':'ra', 'リ':'ri', 'ル':'ru', 'レ':'re', 'ロ':'ro', 'ワ':'wa', 'ヲ':'wo', 'ン':'n', 'キャ':'kya', 'キュ':'kyu', 'キョ':'kyo', 'シャ':'sha', 'シュ':'shu', 'ショ':'sho', 'チャ':'cha', 'チュ':'chu', 'チョ':'cho', 'ニャ':'nya', 'ニュ':'nyu', 'ニョ':'nyo', 'ヒャ':'hya', 'ヒュ':'hyu', 'ヒョ':'hyo', 'ミャ':'mya', 'ミュ':'myu', 'ミョ':'myo', 'リャ':'rya', 'リュ':'ryu', 'リョ':'ryo', 'ギャ':'gya', 'ギュ':'gyu', 'ギョ':'gyo', 'ヂャ':'ja', 'ヂュ':'ju', 'ヂョ':'jo', 'ビャ':'bya', 'ビュ':'byu', 'ビョ':'byo', 'ピャ':'pya', 'ピュ':'pyu', 'ピョ':'pyo'};
var extraKatakanaDict = {'イェ':'ye', 'ヴァ':'va', 'ヴィ':'vi', 'ヴ':'vu', 'ヴェ':'ve', 'ヴォ':'vo', 'ヴュ':'vyu', 'クァ':'qua', 'クィ':'qui', 'クェ':'que', 'クォ':'quo', 'シェ':'she', 'ジェ':'je', 'スァ':'swa', 'スィ':'swi', 'スェ':'swe', 'スォ':'swo', 'ツァ':'tsa', 'ツィ':'tsi', 'ツェ':'tse', 'ツォ':'tso', 'チェ':'che', 'ティ':'ti', 'テュ':'tyu', 'ディ':'di', 'デュ':'dyu', 'トゥ':'tu', 'トヮ':'twa', 'ドゥ':'du', 'ファ':'fa', 'フィ':'fi', 'フェ':'fe', 'フォ':'fo', 'モヮ':'mwa', 'ウィ':'wi', 'ウェ':'we', 'ウォ':'wo'};

var dict1 = {'ほん': 'book', 'かみ': 'paper', 'えんぴつ': 'pencil', 'これ': 'this one', 'それ': 'that one', 'あれ': 'that one (over there)', 'なん': 'what', 'わたし': 'I', 'あなた': 'you', 'かれ': 'he', 'かのじょ': 'she', 'だれ': 'who', 'なんさい':'how old'}
var dict2 = {'とけい':'watch or clock', 'めがね':'glasses', 'じしょ':'dictionary', 'いす':'chair', 'いぬ':'dog', 'かさ':'umbrella', 'しんぶん':'newspaper', 'さいふ':'wallet', 'くつ':'shoe', 'かばん':'bag', 'じてんしゃ':'bicycle', 'ぼうし':'hat', 'しゅみ':'hobby', 'ともだち':'friend', 'おとうさん':'father', 'はは':'my mother', 'りょうしん':'parents', 'おにいさん':'big brother', 'あね':'my big sister', 'おとうと':'little brother', 'いもうとさん':'someone\'s little sister', 'ごかぞく':'someone\'s family', 'つま':'my wife', 'ごしゅじん':'someone\'s husband'};
var dict3 = {'ここ':'here', 'そこ':'there', 'あそこ':'over there', 'どこ':'where', 'あっち':'that way over there', 'どっち':'which way', 'かいだん':'stairs', 'うけつけ':'reception desk', 'ちゅうしゃじょう':'parking lot', 'おてあらい':'bathroom', 'いりぐち':'entrance', 'かいしゃ':'company', 'がっこう':'school', 'くに':'country'};
var dict4 = {'なんじ':'what time', 'きのう':'yesterday', 'きょう':'today', 'あした':'tomorrow', 'まいにち':'everyday', 'まいあさ':'every morning', 'まいばん':'every evening', 'けさ':'this morning', 'こんばん':'this evening', 'ゆうべ':'last night', 'あしたのあさ':'tomorrow morning', 'ごぜん':'a.m.', 'ごご':'p.m.', 'やすみ':'closed or day off', 'あさごはん':'breakfast', 'たべます':'to eat', 'のみます':'to drink', 'ねます':'to sleep or to go to bed', 'おきます':'to wake up', 'はたらきます':'to work', 'べんきょうします':'to study', 'あそびます':'to play or to hang out', 'みます':'to see', 'よみます':'to read'};
var dict5 = {'ひこうき':'airplane', 'くるま':'car', 'でんしゃ':'train', 'ちかてつ':'subway', 'しんかんせん':'bullet train', 'ふね':'ship', 'あるいて':'by walking', 'りょこう':'trip', 'いつ':'when', 'こんしゅう':'this week', 'こんげつ':'this month', 'ことし':'this year', 'らいしゅう':'next week', 'らいげつ':'next month', 'らいねん':'next year', 'せんしゅう':'last week', 'せんげつ':'last month', 'きょねん':'last year', 'ついたち':'the first', 'ふつか':'the second', 'みっか':'the third', 'よっか':'the fourth', 'しがつ':'April', 'しちがつ':'July', 'くがつ':'September'};
var dict6 = {'たまご':'egg', 'みず':'water', 'ぎゅうにゅう':'milk', 'てがみ':'letter', 'えいが':'movie', 'おんがく':'music', 'しゃしん':'photography', 'よく':'often', 'ときどき':'sometimes', 'えいがかん':'movie theatre', 'としょかん':'library', 'こうえん':'park', 'えき':'station', 'でんきや':'electrical appliance store', 'それから':'and then', 'テニスをします':'to play tennis', 'ききます':'to listen', 'やすみます':'to take a rest', 'かります':'to borrow', 'のります':'to ride', 'おります':'to get off', 'あいます':'to meet', 'かいます':'to buy'};
var dict7 = {'えいご':'English language', 'にほんご':'Japanese language', 'はし':'chopstick', 'たんじょうび':'birthday', 'けっこんしき':'wedding', 'あかちゃん':'baby', 'はなします':'to speak', 'かきます':'to write', 'しゅうりします':'to fix', 'おしえます':'to teach', 'ならいます':'to learn', 'あげます':'to give', 'もらいます':'to receive', 'かします':'to lend'};
var dict8 = {'あつい':'hot', 'さむい':'cold (weather)', 'つめたい':'cold (temperature)', 'おおきい':'big', 'ちいさい':'small', 'おおい':'many', 'すくない':'few', 'ながい':'long', 'みじかい':'short', 'たかい':'long or expensive', 'ひくい':'low', 'ひろい':'wide', 'せまい':'narrow', 'おもい':'heavy', 'かるい':'light', 'あたらしい':'new', 'ふるい':'old', 'おそい':'slow', 'はやい':'fast', 'あかるい':'briht', 'くらい':'dark', 'いそがしい':'busy', 'ひま（な）':'not', 'むずかしい':'busy', 'かんたん（な）':'difficult', 'あたたかい':'easy', 'おいしい':'worm', 'まずい':'delicious', 'きれい（な）':'tastes', 'きたない':'awful', 'おもしろい':'beautiful or clean', 'つまらない':'dirty', 'たのしい':'interesting', 'びんぼう（な）':'boring', 'しんせつ（な）':'fun', 'しずか（な）':'poor', 'かわいい':'kind', 'げんき（な）':'quiet', 'かっこいい':'cute', 'にぎやか（な）':'cheerful', 'からがに':'cool', 'いい':'bustling', 'あたまが':'healthy', 'いい':'smart', 'あか':'red', 'あお':'blue', 'しろ':'white', 'くろ':'black', 'ちゃいろ':'brown', 'はいいろ':'gray', 'きいろ':'yellow'};
var dict9 = {'すき':'like', 'きらい':'dislike', 'とても':'very', 'じょうず':'skillful', 'へた':'not skillful', 'わかります':'to understand', 'ねつ':'fever', 'かぜ':'cold (disease)', 'おなか':'stomach', 'やくそく':'promiise or appointment', 'ようじ':'something to do', 'じゅぎょう':'class'};
var dict10 = {'あります':'to have or to exist (things)', 'います':'to have or to exist (living creatures)', 'うえ':'above', 'した':'under', 'みぎ':'right', 'ひだり':'left', 'まえ':'in front of', 'うしろ':'behind', 'なか':'inside', 'そと':'outside', 'あいだ':'between', 'となり':'next to', 'ちかく':'close', 'いろいろ（な）':'various'};
var dict11 = {'さら':'dish', 'おとこのひと':'man', 'おんなのひと':'woman', 'ふうとう':'envelope', 'おとな':'adult', 'こども':'child', 'おとこのこ':'boy', 'おんなのこ':'girl', 'だけ':'only', 'いちにち':'one day', 'ふつか':'two days', 'みっか':'three days', 'いちじかん':'one hour', 'なんじかん':'how many  hours', 'いっかげつ':'one month', 'なんかげつ':'how many months', 'いちねん':'one year', 'なんねん':'how many years', 'なんぷん':'how many minutes'};
var dict12 = {'いい てんき':'good weather', 'あめ':'rain', 'くもり':'cloudy day', 'ゆき':'snow', 'ゆうめいじん':'celebrity', 'きせつ':'season', 'たべもの':'food', 'のみもの':'drink', 'どうぶつ':'animal', 'いちばん':'No. 1'};
var dict13 = {'ほしい':'want', 'れんしゅう':'practice', 'たべにいきます':'to go to eat', 'のど':'throat', 'おなかが　すきます':'to become hungry', 'のどが　かわきます':'to become thirsty', 'つかれます':'to become tired', 'いたい':'hurt', 'びじゅつかん':'art museum', 'かわ':'river', 'およぎます':'to swim', 'しょくじ':'meal'};
var dict14 = {'てつだいます':'to help', 'いいます':'to say', 'たちます':'to stand', 'まちます':'to wait', 'すわります':'to sit', 'はいります':'to enter', 'とります':'to take', 'よびます':'to call', 'しにます':'to die', 'ひきます':'to play (string instruments or piano)', 'いそぎます':'to hurry', 'ぬぎます':'to take off', 'みせます':'to show', 'さんぽを します':'to go for a walk', 'あめが ふります':'to rain', 'ふくを きます':'to wear clothes', 'ぼうしを かぶります':'to wear a hat'};
var dict15 = {'おきます':'to put', 'けします':'to turn off', 'しります':'to know', 'つくります':'to make', 'うります':'to sell', 'もちます':'to have', 'あけます':'to open', 'しめます':'to close', 'つけます':'to turn on', 'けっこんします':'to get married', 'きんえん':'non-smoking', 'すみます':'to live', 'きょうだい':'sibling'};
var dict16 = {'のりかえます':'to change trains or planes', 'デートします':'to go on a date', 'おどります':'to dance', 'はを みがきます':'to brush one\'s teeth', 'きって':'stamp', 'あらいます':'to wash', 'おかねもち':'rich person', 'いじわる':'mean', 'つよい':'strong', 'かみ':'hair', 'かいしゃいん':'company employee', 'め':'eye', 'はな':'nose', 'くち':'mouth', 'て':'hand', 'あし':'leg', 'くび':'neck', 'うで':'arm', 'みみ':'ear', 'せが たかい':'tall (a person)', 'せが ひくい':'short (a person)', 'ふとっています':'obese', 'やせています':'thin', 'まる':'circle', 'さんかく':'triangle', 'しかく':'square'};
var dict17 = {'おします':'to push', 'いきます':'to go', 'はらいます':'to pay', 'もっていきます':'to bring', 'つかいます':'to use', 'なくします':'to lose (something)', 'かえります':'to return or go home', 'くすりを のみます':'to take medicine', 'かえします':'to return (something)', 'だします':'to hand in', 'いれます':'to put in', 'わすれます':'to forget', 'くるまを とめます':'to park a car', 'おぼえます':'to remember', 'でかけます':'to go out', 'アルバイトを します':'to do a part-time job', 'しんぱいします':'to worry', 'きます':'to come', 'しゅっちょうします':'to go on a business trip'};
var dict18 = {'うたいます':'to sing', 'かいます':'to buy', 'さわります':'to touch', 'きります':'to cut', 'おくります':'to put', 'あるきます':'to walk', 'とめます':'to stop or to park', 'うんてんします':'to drive','します':'to do'};
var dict19 = {'おふろに はいります':'to take a bath', 'てがみを だします':'to send a letter', 'にもつを おくります':'to send a package', 'おかねを だします':'to withdraw some money', 'けんぶつします':'to go sightseeing', 'かいものに いきます':'to shop', 'しつれんします':'to be brokenhearted', 'スポーツを します':'to play sports', 'そうじを します':'to clean'};

var allQuestions = [];

var questions = [];

var item;

function fillArray(dict, array) {
  while (array.length > 0) {
    array.pop();
  }

  for (item in dict) {
      array.push(item);
  }
}

fillArray(hiraganaDict, allQuestions);
fillArray(hiraganaDict, questions);


var kana1 = {'っか':'kか', 'っき':'kき', 'っく':'kく', 'っけ':'kけ', 'っこ':'kこ', 'っが':'gが', 'っぎ':'gぎ', 'っぐ':'gぐ', 'っげ':'gげ', 'っご':'gご', 'っさ':'sさ', 'っし':'sし', 'っす':'sす', 'っせ':'sせ', 'っそ':'sそ', 'っざ':'zざ','っじ':'jじ', 'っず':'zず', 'っぜ':'zぜ', 'っぞ':'zぞ', 'った':'tた', 'っち':'cち', 'っつ':'tつ', 'って':'tて', 'っと':'tと', 'っだ':'dだ', 'っで':'dで', 'っど':'dど', 'っは':'hは', 'っひ':'hひ', 'っふ':'fふ', 'っへ':'hへ', 'っほ':'hほ', 'っば':'bば', 'っび':'bび', 'っぶ':'bぶ', 'っべ':'bべ', 'っぼ':'bぼ', 'っぱ':'pぱ', 'っぴ':'pぴ', 'っぷ':'pぷ', 'っぺ':'pぺ', 'っぽ':'pぽ', 'っま':'mま', 'っみ':'mみ', 'っむ':'mむ', 'っめ':'mめ', "っも":'mも', 'っや':'yや', 'っゆ':'yゆ', 'っよ':'yよ', 'っら':'rら', 'っり':'rり', 'っる':'rる', 'っれ':'rれ', 'っろ':'rろ', 'っわ':'wわ', 'ッカ':'kカ', 'ッキ':'kキ', 'ック':'kク', 'ッケ':'kケ', 'ッコ':'kコ', 'ッガ':'gガ', 'ッギ':'gギ', 'ッグ':'gグ', 'ッゲ':'gゲ', 'ッゴ':'gゴ', 'ッセ':'sセ', 'ッシ':'sシ', 'ッス':'sス', 'ッセ':'sセ', 'ッソ':'sソ', 'ッザ':'zザ','ッジ':'jジ', 'ッズ':'zズ', 'ッゼ':'zゼ', 'ッゾ':'zゾ', 'ッタ':'tタ', 'ッチ':'cチ', 'ッツ':'tツ', 'ッテ':'tテ', 'ット':'tト', 'ッダ':'dダ', 'ッデ':'dデ', 'ッド':'dド', 'ッハ':'hハ', 'ッヒ':'hヒ', 'ッフ':'fフ', 'ッヘ':'hヘ', 'ッホ':'hホ', 'ッバ':'bバ', 'ッビ':'bビ', 'ッブ':'bブ', 'ッベ':'bベ', 'ッボ':'bボ', 'ッパ':'pパ', 'ッピ':'pピ', 'ップ':'pプ', 'ッペ':'pペ', 'ッポ':'pポ', 'ッマ':'mマ', 'ッミ':'mミ', 'ッム':'mム', 'ッメ':'mメ', "ッモ":'mモ', 'ッヤ':'yヤ', 'ッユ':'yユ', 'ッヨ':'yヨ', 'ッラ':'rラ', 'ッリ':'rリ', 'ッル':'rル', 'ッレ':'rレ', 'ッロ':'rロ', 'ッワ':'wワ'};

var kana2 = {'きゃ':'kya', 'きゅ':'kyu', 'きょ':'kyo', 'しゃ':'sha', 'しゅ':'shu', 'しょ':'sho', 'ちゃ':'cha', 'ちゅ':'chu', 'ちょ':'cho', 'にゃ':'nya', 'にゅ':'nyu', 'にょ':'nyo', 'ひゃ':'hya', 'ひゅ':'hyu', 'ひょ':'hyo', 'みゃ':'mya', 'みゅ':'myu', 'みょ':'myo', 'りゃ':'rya', 'りゅ':'ryu', 'りょ':'ryo', 'ぎゃ':'gya', 'ぎゅ':'gyu', 'ぎょ':'gyo', 'じゃ':'ja', 'じゅ':'ju', 'じょ':'jo', 'びゃ':'bya', 'びゅ':'byu', 'びょ':'byo', 'ぴゃ':'pya', 'ぴゅ':'pyu', 'ぴょ':'pyo', 'キャ':'kya', 'キュ':'kyu', 'キョ':'kyo', 'シャ':'sha', 'シュ':'shu', 'ショ':'sho', 'チャ':'cha', 'チュ':'chu', 'チョ':'cho', 'ニャ':'nya', 'ニュ':'nyu', 'ニョ':'nyo', 'ヒャ':'hya', 'ヒュ':'hyu', 'ヒョ':'hyo', 'ミャ':'mya', 'ミュ':'myu', 'ミョ':'myo', 'リャ':'rya', 'リュ':'ryu', 'リョ':'ryo', 'ギャ':'gya', 'ギュ':'gyu', 'ギョ':'gyo', 'ヂャ':'ja', 'ヂュ':'ju', 'ヂョ':'jo', 'ビャ':'bya', 'ビュ':'byu', 'ビョ':'byo', 'ピャ':'pya', 'ピュ':'pyu', 'ピョ':'pyo', 'イェ':'ye', 'ヴァ':'va', 'ヴィ':'vi', 'ヴ':'vu', 'ヴェ':'ve', 'ヴォ':'vo', 'ヴュ':'vyu', 'クァ':'qua', 'クィ':'qui', 'クェ':'que', 'クォ':'quo', 'シェ':'she', 'ジェ':'je', 'スァ':'swa', 'スィ':'swi', 'スェ':'swe', 'スォ':'swo', 'ツァ':'tsa', 'ツィ':'tsi', 'ツェ':'tse', 'ツォ':'tso', 'チェ':'che', 'ティ':'ti', 'テュ':'tyu', 'ディ':'di', 'デュ':'dyu', 'トゥ':'tu', 'トヮ':'twa', 'ドゥ':'du', 'ファ':'fa', 'フィ':'fi', 'フェ':'fe', 'フォ':'fo', 'モヮ':'mwa', 'ウィ':'wi', 'ウェ':'we', 'ウォ':'wo'};

var kana3 = {'あ':'a', 'い':'i', 'う':'u','え':'e', 'お':'o', 'か':'ka', 'き':'ki', 'く':'ku', 'け':'ke', 'こ':'ko', 'が':'ga', 'ぎ':'gi', 'ぐ':'gu', 'げ':'ge', 'ご':'go', 'さ':'sa', 'し':'shi', 'す':'su', 'せ':'se', 'そ':'so', 'ざ':'za','じ':'ji', 'ず':'zu', 'ぜ':'ze', 'ぞ':'zo', 'た':'ta', 'ち':'chi', 'つ':'tsu', 'て':'te', 'と':'to', 'だ':'da', 'で':'de', 'ど':'do', 'な':'na', 'に':'ni', 'ぬ':'nu', 'ね':'ne', 'の':'no', 'は':'ha', 'ひ':'hi', 'ふ':'fu', 'へ':'he', 'ほ':'ho', 'ば':'ba', 'び':'bi', 'ぶ':'bu', 'べ':'be', 'ぼ':'bo', 'ぱ':'pa', 'ぴ':'pi', 'ぷ':'pu', 'ぺ':'pe', 'ぽ':'po', 'ま':'ma', 'み':'mi', 'む':'mu', 'め':'me', "も":'mo', 'や':'ya', 'ゆ':'yu', 'よ':'yo', 'ら':'ra', 'り':'ri', 'る':'ru', 'れ':'re', 'ろ':'ro', 'わ':'wa', 'を':'wo', 'ア':'a', 'イ':'i', 'ウ':'u', 'エ':'e', 'オ':'o', 'カ':'ka', 'キ':'ki', 'ク':'ku', 'ケ':'ke', 'コ':'ko', 'ガ':'ga', 'ギ':'gi', 'グ':'gu', 'ゲ':'ge', 'ゴ':'go', 'セ':'sa', 'シ':'shi', 'ス':'su', 'セ':'se', 'ソ':'so', 'ザ':'za','ジ':'ji', 'ズ':'zu', 'ゼ':'ze', 'ゾ':'zo', 'タ':'ta', 'チ':'chi', 'ツ':'tsu', 'テ':'te', 'ト':'to', 'ダ':'da', 'デ':'de', 'ド':'do', 'ナ':'na', 'ニ':'ni', 'ヌ':'nu', 'ネ':'ne', 'ノ':'no', 'ハ':'ha', 'ヒ':'hi', 'フ':'fu', 'ヘ':'he', 'ホ':'ho', 'バ':'ba', 'ビ':'bi', 'ブ':'bu', 'ベ':'be', 'ボ':'bo', 'パ':'pa', 'ピ':'pi', 'プ':'pu', 'ペ':'pe', 'ポ':'po', 'マ':'ma', 'ミ':'mi', 'ム':'mu', 'メ':'me', "モ":'mo', 'ヤ':'ya', 'ユ':'yu', 'ヨ':'yo', 'ラ':'ra', 'リ':'ri', 'ル':'ru', 'レ':'re', 'ロ':'ro', 'ワ':'wa', 'ヲ':'wo'};

var kana4 = {'ん':'n', 'っ':'', 'ン':'n', 'ッ':''};


function toRomaji(kana) {
 var translation = kana;
 for (word in kana1) {
  translation = translation.replace(word, kana1[word])
 }
 for (word in kana2) {
  translation = translation.replace(word, kana2[word])
 }
 for (word in kana3) {
  translation = translation.replace(word, kana3[word])
 }
 for (word in kana4) {
  translation = translation.replace(word, kana4[word])
 }
 return translation;
}

var dicts = [dict1, dict2, dict3, dict4, dict5, dict6, dict7, dict8, dict9, dict10, dict11, dict12, dict13, dict14, dict15, dict16, dict17, dict18, dict19];

function toKana(romaji) {
  for (var i = 0; i < dicts.length; i++) {
    for (d in dicts[i]) {
        if (toRomaji(d) == romaji) return d;
    }
  }
  return romaji; 
}