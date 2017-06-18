var hiraganaDict = {'あ':'a', 'い':'i', 'う':'u',' え':'e', 'お':'o', 'か':'ka', 'き':'ki', 'く':'ku', 'け':'ke', 'こ':'ko', 'が':'ga', 'ぎ':'gi', 'ぐ':'gu', 'げ':'ge', 'ご':'go', 'さ':'sa', 'し':'shi', 'す':'su', 'せ':'se', 'そ':'so', 'ざ':'za','じ':'ji', 'ず':'zu', 'ぜ':'ze', 'ぞ':'zo', 'た':'ta', 'ち':'chi', 'つ':'tsu', 'て':'te', 'と':'to', 'だ':'da', 'で':'de', 'ど':'do', 'な':'na', 'に':'ni', 'ぬ':'nu', 'ね':'ne', 'の':'no', 'は':'ha', 'ひ':'hi', 'ふ':'fu', 'へ':'he', 'ほ':'ho', 'ば':'ba', 'び':'bi', 'ぶ':'bu', 'べ':'be', 'ぼ':'bo', 'ぱ':'pa', 'ぴ':'pi', 'ぷ':'pu', 'ぺ':'pe', 'ぽ':'po', 'ま':'ma', 'み':'mi', 'む':'mu', 'め':'me', "も":'mo', 'や':'ya', 'ゆ':'yu', 'よ':'yo', 'ら':'ra', 'り':'ri', 'る':'ru', 'れ':'re', 'ろ':'ro', 'わ':'wa', 'を':'wo', 'ん':'n', 'きゃ':'kya', 'きゅ':'kyu', 'きょ':'kyo', 'しゃ':'sha', 'しゅ':'shu', 'しょ':'sho', 'ちゃ':'cha', 'ちゅ':'chu', 'ちょ':'cho', 'にゃ':'nya', 'にゅ':'nyu', 'にょ':'nyo', 'ひゃ':'hya', 'ひゅ':'hyu', 'ひょ':'hyo', 'みゃ':'mya', 'みゅ':'myu', 'みょ':'myo', 'りゃ':'rya', 'りゅ':'ryu', 'りょ':'ryo', 'ぎゃ':'gya', 'ぎゅ':'gyu', 'ぎょ':'gyo', 'じゃ':'ja', 'じゅ':'ju', 'じょ':'jo', 'びゃ':'bya', 'びゅ':'byu', 'びょ':'byo', 'ぴゃ':'pya', 'ぴゅ':'pyu', 'ぴょ':'pyo'};
var katakanaDict = {'ア':'a', 'イ':'i', 'ウ':'u', 'エ':'e', 'オ':'o', 'カ':'ka', 'キ':'ki', 'ク':'ku', 'ケ':'ke', 'コ':'ko', 'ガ':'ga', 'ギ':'gi', 'グ':'gu', 'ゲ':'ge', 'ゴ':'go', 'サ':'sa', 'シ':'shi', 'ス':'su', 'セ':'se', 'ソ':'so', 'ザ':'za','ジ':'ji', 'ズ':'zu', 'ゼ':'ze', 'ゾ':'zo', 'タ':'ta', 'チ':'chi', 'ツ':'tsu', 'テ':'te', 'ト':'to', 'ダ':'da', 'デ':'de', 'ド':'do', 'ナ':'na', 'ニ':'ni', 'ヌ':'nu', 'ネ':'ne', 'ノ':'no', 'ハ':'ha', 'ヒ':'hi', 'フ':'fu', 'ヘ':'he', 'ホ':'ho', 'バ':'ba', 'ビ':'bi', 'ブ':'bu', 'ベ':'be', 'ボ':'bo', 'パ':'pa', 'ピ':'pi', 'プ':'pu', 'ペ':'pe', 'ポ':'po', 'マ':'ma', 'ミ':'mi', 'ム':'mu', 'メ':'me', "モ":'mo', 'ヤ':'ya', 'ユ':'yu', 'ヨ':'yo', 'ラ':'ra', 'リ':'ri', 'ル':'ru', 'レ':'re', 'ロ':'ro', 'ワ':'wa', 'ヲ':'wo', 'ン':'n', 'キャ':'kya', 'キュ':'kyu', 'キョ':'kyo', 'シャ':'sha', 'シュ':'shu', 'ショ':'sho', 'チャ':'cha', 'チュ':'chu', 'チョ':'cho', 'ニャ':'nya', 'ニュ':'nyu', 'ニョ':'nyo', 'ヒャ':'hya', 'ヒュ':'hyu', 'ヒョ':'hyo', 'ミャ':'mya', 'ミュ':'myu', 'ミョ':'myo', 'リャ':'rya', 'リュ':'ryu', 'リョ':'ryo', 'ギャ':'gya', 'ギュ':'gyu', 'ギョ':'gyo', 'ヂャ':'ja', 'ヂュ':'ju', 'ヂョ':'jo', 'ビャ':'bya', 'ビュ':'byu', 'ビョ':'byo', 'ピャ':'pya', 'ピュ':'pyu', 'ピョ':'pyo'};
var extraKatakanaDict = {'イェ':'ye', 'ヴァ':'va', 'ヴィ':'vi', 'ヴ':'vu', 'ヴェ':'ve', 'ヴォ':'vo', 'ヴュ':'vyu', 'クァ':'qua', 'クィ':'qui', 'クェ':'que', 'クォ':'quo', 'シェ':'she', 'ジェ':'je', 'スァ':'swa', 'スィ':'swi', 'スェ':'swe', 'スォ':'swo', 'ツァ':'tsa', 'ツィ':'tsi', 'ツェ':'tse', 'ツォ':'tso', 'チェ':'che', 'ティ':'ti', 'テュ':'tyu', 'ディ':'di', 'デュ':'dyu', 'トゥ':'tu', 'トヮ':'twa', 'ドゥ':'du', 'ファ':'fa', 'フィ':'fi', 'フェ':'fe', 'フォ':'fo', 'モヮ':'mwa', 'ウィ':'wi', 'ウェ':'we', 'ウォ':'wo'};

var dict1 = {'ほん': 'book', 'かみ': 'paper', 'えんぴつ': 'pencil', 'これ': 'this one', 'それ': 'that one', 'あれ': 'that one (over there)', 'なん': 'what', 'わたし': 'I', 'あなた': 'you', 'かれ': 'he', 'かのじょ': 'she', 'だれ': 'who', 'なんさい':'how old'}
var dict2 = {'とけい':'watch or clock', 'めがね':'glasses', 'じしょ':'dictionary', 'いす':'chair', 'いぬ':'dog', 'かさ':'umbrella', 'しんぶん':'newspaper', 'さいふ':'wallet', 'くつ':'shoe', 'かばん':'bag', 'じてんしゃ':'bicycle', 'ぼうし':'hat', 'しゅみ':'hobby', 'ともだち':'friend', 'おとうさん':'father', 'はは':'my mother', 'りょうしん':'parents', 'おにいさん':'big brother', 'あね':'my big sister', 'おとうと':'little brother', 'いもうとさん':'someone\'s little sister', 'ごかぞく':'someone\'s family', 'つま':'my wife', 'ごしゅじん':'someone\'s husband'};
var dict3 = {'ここ':'here', 'そこ':'there', 'あそこ':'over there', 'どこ':'where', 'あっち':'that way over there', 'どっち':'which way', 'かいだん':'stairs', 'うけつけ':'reception desk', 'ちゅうしゃじょう':'parking lot', 'おてあらい':'bathroom', 'いりぐち':'entrance', 'かいしゃ':'company', 'がっこう':'school', 'くに':'country'};
var dict4 = {'なんじ':'what time', 'きのう':'yesterday', 'きょう':'today', 'あした':'tomorrow', 'まいにち':'every day', 'まいあさ':'every morning', 'まいばん':'every evening', 'けさ':'this morning', 'こんばん':'this evening', 'ゆうべ':'last night', 'あしたのあさ':'tomorrow morning', 'ごぜん':'a.m.', 'ごご':'p.m.', 'やすみ':'closed or day off', 'あさごはん':'breakfast', 'たべます':'to eat', 'のみます':'to drink', 'ねます':'to sleep or to go to bed', 'おきます':'to wake up', 'はたらきます':'to work', 'べんきょうします':'to study', 'あそびます':'to play or to hang out', 'みます':'to see', 'よみます':'to read'};
var dict5 = {'ひこうき':'airplane', 'くるま':'car', 'でんしゃ':'train', 'ちかてつ':'subway', 'しんかんせん':'bullet train', 'ふね':'ship', 'あるいて':'by walking', 'りょこう':'trip', 'いつ':'when', 'こんしゅう':'this week', 'こんげつ':'this month', 'ことし':'this year', 'らいしゅう':'next week', 'らいげつ':'next month', 'らいねん':'next year', 'せんしゅう':'last week', 'せんげつ':'last month', 'きょねん':'last year', 'ついたち':'the first day', 'ふつか':'the second day', 'みっか':'the third day', 'よっか':'the fourth day', 'しがつ':'April', 'しちがつ':'July', 'くがつ':'September'};
var dict6 = {'たまご':'egg', 'みず':'water', 'ぎゅうにゅう':'milk', 'てがみ':'letter', 'えいが':'movie', 'おんがく':'music', 'しゃしん':'photography', 'よく':'often', 'ときどき':'sometimes', 'えいがかん':'movie theatre', 'としょかん':'library', 'こうえん':'park', 'えき':'station', 'でんきや':'electrical appliance store', 'それから':'and then', 'テニスをします':'to play tennis', 'ききます':'to listen', 'やすみます':'to take a rest', 'かります':'to borrow', 'のります':'to ride', 'おります':'to get off', 'あいます':'to meet', 'かいます':'to buy'};
var dict7 = {'えいご':'English language', 'にほんご':'Japanese language', 'はし':'chopstick', 'たんじょうび':'birthday', 'けっこんしき':'wedding', 'あかちゃん':'baby', 'はなします':'to speak', 'かきます':'to write', 'しゅうりします':'to fix', 'おしえます':'to teach', 'ならいます':'to learn', 'あげます':'to give', 'もらいます':'to receive', 'かします':'to lend'};
var dict8 = {'あつい':'hot', 'さむい':'cold (weather)', 'つめたい':'cold (temperature)', 'おおきい':'big', 'ちいさい':'small', 'おおい':'many', 'すくない':'few', 'ながい':'long', 'みじかい':'short', 'たかい':'expensive or high', 'ひくい':'low', 'ひろい':'wide', 'せまい':'narrow', 'おもい':'heavy', 'かるい':'light (not heavy)', 'あたらしい':'new', 'ふるい':'old', 'おそい':'slow', 'はやい':'fast', 'あかるい':'bright', 'くらい':'dark', 'いそがしい':'busy', 'ひま (な)':'not busy', 'むずかしい':'difficult', 'かんたん (な)':'easy', 'あたたかい':'warm', 'おいしい':'delicious', 'まずい':'tastes awful', 'きれい (な）':'beautiful or clean', 'きたない':'dirty', 'おもしろい':'interesting', 'つまらない':'boring', 'たのしい':'fun', 'びんぼう (な）':'poor', 'しんせつ (な）':'kind', 'しずか (な）':'quiet', 'かわいい':'cute', 'げんき (な)':'cheerful', 'かっこいい':'cool or stylish', 'にぎやか (な)':'lively', 'からがに':'healthy', 'あたまがいい':'smart', 'あか':'red', 'あお':'blue', 'しろ':'white', 'くろ':'black', 'ちゃいろ':'brown', 'はいいろ':'gray', 'きいろ':'yellow'};
var dict9 = {'すき':'like', 'きらい':'dislike', 'とても':'very', 'じょうず (な)':'skillful', 'へた (な)':'not skillful', 'わかります':'to understand', 'ねつ':'fever', 'かぜ':'cold (disease)', 'おなか':'stomach', 'やくそく':'promise or appointment', 'ようじ':'something to do', 'じゅぎょう':'class'};
var dict10 = {'あります':'to have or to exist (things)', 'います':'to have or to exist (living creatures)', 'うえ':'above', 'した':'under', 'みぎ':'right', 'ひだり':'left', 'まえ':'in front of', 'うしろ':'behind', 'なか':'inside', 'そと':'outside', 'あいだ':'between', 'となり':'next to', 'ちかく':'close', 'いろいろ (な)':'various'};
var dict11 = {'さら':'dish', 'おとこのひと':'man', 'おんなのひと':'woman', 'ふうとう':'envelope', 'おとな':'adult', 'こども':'child', 'おとこのこ':'boy', 'おんなのこ':'girl', 'だけ':'only', 'いちにち':'one day', 'ふつか':'two days or the second', 'みっか':'three days or the third', 'いちじかん':'one hour', 'なんじかん':'how many  hours', 'いっかげつ':'one month', 'なんかげつ':'how many months', 'いちねん':'one year', 'なんねん':'how many years', 'なんぷん':'how many minutes'};
var dict12 = {'いい てんき':'good weather', 'あめ':'rain', 'くもり':'cloudy day', 'ゆき':'snow', 'ゆうめいじん':'celebrity', 'きせつ':'season', 'たべもの':'food', 'のみもの':'drink', 'どうぶつ':'animal', 'いちばん':'no. 1', 'すずしい':'cool (temperature)','からだに いい':'healthy','うるさい':'noisy','びんぼう (な)':'poor', 'いじわる (な)':'mean', 'せが たかい':'tall (a person)', 'せが ひくい':'short (a person)', 'です':'to be'};
var dict13 = {'ほしい':'desired', 'れんしゅう':'practice', 'たべにいきます':'to go to eat', 'のど':'throat', 'おなかが すきます':'to become hungry', 'のどが かわきます':'to become thirsty', 'つかれます':'to become tired', 'いたい':'hurt', 'びじゅつかん':'art museum', 'かわ':'river', 'およぎます':'to swim', 'しょくじ':'meal'};
var dict14 = {'てつだいます':'to help', 'いいます':'to say', 'たちます':'to stand', 'まちます':'to wait', 'すわります':'to sit', 'はいります':'to enter', 'とります':'to take', 'よびます':'to call', 'しにます':'to die', 'ひきます':'to play (string instruments or piano)', 'いそぎます':'to hurry', 'ぬぎます':'to take off', 'みせます':'to show', 'さんぽを します':'to go for a walk', 'あめが ふります':'to rain', 'ふくを きます':'to wear clothes', 'ぼうしを かぶります':'to wear a hat'};
var dict15 = {'おきます':'to put or to wake up', 'けします':'to turn off', 'しります':'to know', 'つくります':'to make', 'うります':'to sell', 'もちます':'to have', 'あけます':'to open', 'しめます':'to close', 'つけます':'to turn on', 'けっこんします':'to get married', 'きんえん':'non-smoking', 'すみます':'to live', 'きょだい':'sibling'};
var dict16 = {'のりかえます':'to change trains or planes', 'デートします':'to go on a date', 'おどります':'to dance', 'はを みがきます':'to brush one\'s teeth', 'きって':'stamp', 'あらいます':'to wash', 'おかねもち':'rich person', 'つよい':'strong', 'かみ':'hair or paper', 'かいしゃいん':'company employee', 'め':'eye', 'はな':'nose', 'くち':'mouth', 'て':'hand', 'あし':'leg', 'くび':'neck', 'うで':'arm', 'みみ':'ear', 'ふとっています':'obese', 'やせています':'thin', 'まる':'circle', 'さんかく':'triangle', 'しかく':'square'};
var dict17 = {'おします':'to push', 'いきます':'to go', 'はらいます':'to pay', 'もっていきます':'to bring', 'つかいます':'to use', 'なくします':'to lose (something)', 'かえります':'to return', 'くすりを のみます':'to take medicine', 'かえします':'to return (something)', 'だします':'to hand in', 'いれます':'to put in', 'わすれます':'to forget', 'くるまを とめます':'to park a car', 'おきます':'to wake up', 'おぼえます':'to remember', 'でかけます':'to go out', 'アルバイトを します':'to do a part-time job', 'しんぱいします':'to worry', 'きます':'to come', 'しゅっちょうします':'to go on a business trip'};
var dict18 = {'うたいます':'to sing', 'さわります':'to touch', 'きります':'to cut', 'おくります':'to send', 'あるきます':'to walk', 'ねます':'to sleep or to go to bed', 'とめます':'to stop or to park', 'うんてんします':'to drive', 'します':'to do'};
var dict19 = {'おふろに はいる':'to take a bath', 'てがみを だす':'to send a letter', 'にもつを おくる':'to send a package', 'おかねを だす':'to withdraw some money', 'けんぶつする':'to go sightseeing', 'かいものに いく':'to shop', 'しつれんする':'to be brokenhearted', 'スポーツを する':'to play sports', 'そうじを する':'to clean'};
var dict20 = {'できる':'to be able or to be ready', 'いい':'good', 'わるい':'bad'}; // may change later
var dict21 = {'かつ':'to win', 'やくにたつ':'to be useful', 'ユーモアがある':'to be humourous', 'むだ':'useless', 'たりない':'insufficient', 'たいへん':'difficult'};
var dict22 = {'かいものをする':'to go shopping', 'とまる':'to stay overnight', 'みえる':'to seem'}; // may change later
var dict23 = {'わたる':'to go across', 'ちず':'map', 'しんごう':'traffic light', 'はし':'bridge or chopsticks', 'くつや':'shoe store', 'かど':'corner', 'さいしょ (の)':'first of all', 'むかい':'facing', 'つきあたり':'end (of a street, etc.)', 'しやくしょ':'city hall'};
var dict24 = {'つれていく':'to take someone along', 'しらべる':'to investigate', 'せんたくする':'to do laundry', 'りょうりする':'to cook', 'おこす':'to wake up someone', 'ごみを　だす':'to take out the garbage', 'おちこむ':'to feel down', 'かわりに':'in place of'};	
var dict25 = {'しゅしょう':'prime minister', 'だいとうりょう':'president', 'はいゆう':'actor', 'じょゆう':'actress', 'なやみ':'worry', 'ひるね':'nap', 'たからくじ':'lottery'};
var dict26 = {'こしょうする':'to fail', 'おくれる	':'to be late', 'はなたば	':'a bouquet of flowers', 'じこくひょう':'schedule', 'よみかた	':'the way to read something', 'ていでん	':'power outage', 'ひげ':'whiskers, beard, or mustache','おゆ':'hot water', 'ながれる':'to flow', 'でんきが　つく':'to turn the light on'};			
var dict27 = {'ふたつ いじょう':'more than two', '100メートル':'100 meters', 'せんしゅ':'player', 'ひとつめ':'the first', 'ふたつめ':'the second', 'かど':'corner', 'しんごう':'traffic light', 'いっけんめ':'the first building', 'ちょきん':'bank deposit', 'のぼる':'to climb', 'でんわを かける':'to make a phone call'};
var dict28 = {'しゃべる':'to chat', 'ごろごろする':'to idle', 'テレビばんぐみ':'TV program', 'かよう':'to commute', 'おもて':'front', 'うら':'back or behind', 'けしき':'landscape', 'やさしい':'kind', 'つかいかた':'the way to use something', 'ひあたりが いい':'getting a lot of sun', 'みなみぬき':'facing south', 'やちん':'rent', 'いっこだて':'detached house', 'おしいれ':'Japanese closet', 'しなもの':'goods'};

var arr12 = [[['あついです', 'it is hot'], ['あつくないです', 'it is not hot'], ['あつかったです', 'it was hot'], ['あつくなかったです', 'it was not hot']], [['さむいです', 'it is cold (weather)'], ['さむくないです', 'it is not cold (weather)'], ['さむかったです', 'it was cold (weather)'], ['さむくなかったです', 'it was not cold (weather)']], [['あたたかいです', 'it is warm'], ['あたたかくないです', 'it is not warm'], ['あたたかかったです', 'it was warm'], ['あたたかくなかったです', 'it was not warm']], [['すずしいです', 'it is cool (temperature)'], ['すずしくないです', 'it is not cool (temperature)'], ['すずしかったです', 'it was cool (temperature)'], ['すずしくなかったです', 'it was not cool (temperature)']], [['おいしいです', 'it is delicious'], ['おいしくないです', 'it is not delicious'], ['おいしかったです', 'it was delicious'], ['おいしくなかったです', 'it was not delicious']], [['からだに いいです', 'it is healthy'], ['からだに よくないです', 'it is not healthy'], ['からだに よかったです', 'it was healthy'], ['からだに よくなかったです', 'it was not healthy']], [['たかいです', 'it is expensive or high'], ['たかくないです', 'it is not expensive or high'], ['たかかったです', 'it was expensive or high'], ['たかくなかったです', 'it was not expensive or high']], [['あたまが いいです', 'it is smart'], ['あたまが よくないです', 'it is not smart'], ['あたまが よかったです', 'it was smart'], ['あたまが よくなかったです', 'it was not smart']], [['せが たかいです', 'he is tall'], ['せが たかくないです', 'he is not tall'], ['せが たかかったです', 'he was tall'], ['せが たかくなかったです', 'he was not tall']], [['せが ひくいです', 'he is short'], ['せが ひくくないです', 'he is not short'], ['せが ひくかったです', 'he was short'], ['せが ひくくなかったです', 'he was not short']], [['かっこいいです', 'it is cool or stylish'], ['かっこよくないです', 'it is not cool or stylish'], ['かっこよかったです', 'it was cool or stylish'], ['かっこよくなかったです', 'it was not cool or stylish']], [['うるさいです', 'it is noisy'], ['うるさくないです', 'it is not noisy'], ['うるさかったです', 'it was noisy'], ['うるさくなかったです', 'it was not noisy']], [['おもしろいです', 'it is interesting'], ['おもしろくないです', 'it is not interesting'], ['おもしろかったです', 'it was interesting'], ['おもしろくなかったです', 'it was not interesting']], [['たのしいです', 'it is fun'], ['たのしくないです', 'it is not fun'], ['たのしかったです', 'it was fun'], ['たのしくなかったです', 'it was not fun']], [['しんせつです', 'it is kind'], ['しんせつじゃないです', 'it is not kind'], ['しんせつでした', 'it was kind'], ['しんせつじゃないですでした', 'it was not kind']], [['びんぼうです', 'it is poor'], ['びんぼうじゃないです', 'it is not poor'], ['びんぼうでした', 'it was poor'], ['びんぼうじゃないですでした', 'it was not poor']], [['げんきです', 'it is cheerful'], ['げんきじゃないです', 'it is not cheerful'], ['げんきでした', 'it was cheerful'], ['げんきじゃないですでした', 'it was not cheerful']], [['しずかです', 'it is quiet'], ['しずかじゃないです', 'it is not quiet'], ['しずかでした', 'it was quiet'], ['しずかじゃないですでした', 'it was not quiet']], [['きれいです', 'it is beautiful or clean'], ['きれいじゃないです', 'it is not beautiful or clean'], ['きれいでした', 'it was beautiful or clean'], ['きれいじゃないですでした', 'it was not beautiful or clean']], [['いじわるです', 'it is mean'], ['いじわるじゃないです', 'it is not mean'], ['いじわるでした', 'it was mean'], ['いじわるじゃないですでした', 'it was not mean']]];

var arr14 = [['てつだいます', 'help', 'てつだって', 'help'], ['いいます', 'say', 'いって', 'say'], ['たちます', 'stand', 'たって', 'stand'], ['まちます', 'wait', 'まって', 'wait'], ['すわります', 'sit', 'すわって', 'sit'], ['はいります', 'enter', 'はいって', 'enter'], ['とります', 'take', 'とって', 'take'], ['よびます', 'call', 'よんで', 'call'], ['しにます', 'die', 'しんで', 'die'], ['ひきます', 'play (string instruments or piano)', 'ひいて', 'play (string instruments or piano)'], ['いそぎます', 'hurry', 'いそいで', 'hurry'], ['ぬぎます', 'take off', 'ぬいで', 'take off'], ['みせます', 'show', 'みせて', 'show'], ['さんぽを します', 'go for a walk', 'さんぽを して', 'go for a walk'], ['あめが ふります', 'rain', 'あめが ふって', 'rain'], ['ふくを きます', 'wear clothes', 'ふくを きて', 'wear clothes'], ['ぼうしを かぶります', 'wear a hat', 'ぼうしを かぶって', 'wear a hat']];
var arr17 = [['おします', 'push', 'おさない', 'not push'], ['おきます', 'put', 'おかない', 'not put'],  ['いきます', 'go', 'いかない', 'not go'], ['はらいます', 'pay', 'はらわない', 'not pay'], ['もっていきます', 'bring', 'もっていかない', 'not bring'], ['つかいます', 'use', 'つかわない', 'not use'], ['なくします', 'lose (something)', 'なくさない', 'not lose (something)'], ['かえります', 'return', 'かえらない', 'not return'], ['くすりを のみます', 'take medicine', 'くすりを のまない', 'not take medicine'], ['かえします', 'return (something)', 'かえさない', 'not return (something)'], ['だします', 'hand in', 'ださない', 'not hand in'], ['いれます', 'put in', 'いれない', 'not put in'], ['わすれます', 'forget', 'わすれない', 'not forget'], ['くるまを とめます', 'park a car', 'くるまを とめない', 'not park a car'], ['おぼえます', 'remember', 'おぼえない', 'not remember'],['でかけます', 'go out', 'でかけない', 'not go out'], ['アルバイトを します', 'do a part-time job', 'アルバイトを しない', 'not do a part-time job'], ['しんぱいします', 'worry', 'しんぱいしない', 'not worry'], ['きます', 'come', 'こない', 'not come'], ['しゅっちょうします', 'go on a business trip', 'しゅっちょうしない', 'not go on a business trip'], ['つくります', 'make', 'つくらない', 'not make'], ['ぬぎます', 'take off', 'ぬがない', 'not take off'], ['あいます', 'meet', 'あわない', 'not meet'], ['とります', 'take', 'とらない', 'not take'], ['かきます', 'write', 'かかない', 'not write'], ['はいります', 'enter', 'はいらない', 'not enter'], ['よびます', 'call', 'よばない', 'not call'], ['つけます', 'turn on', 'つけない', 'not turn on'], ['はなします', 'speak', 'はなさない', 'not speak'], ['みせます', 'show', 'みせない', 'not show'], ['たべます', 'eat', 'たべない', 'not eat'], ['いれます', 'put in', 'いれない', 'not put in'], ['おきます', 'wake up', 'おきない', 'not wake up']];
var arr18 = [['うたいます', 'sing', 'うたう', 'to sing'], ['さわります', 'touch', 'さわる', 'to touch'], ['きります', 'cut', 'きる', 'to cut'], ['おくります', 'send', 'おくる', 'to send'], ['あるきます', 'walk', 'あるく', 'to walk'],  ['ねます', 'sleep or go to bed', 'ねる', 'to sleep or to go to bed'], ['とめます', 'stop or to park', 'とめる', 'to stop or to park'], ['うんてんします', 'drive', 'うんてんする', 'to drive'], ['します', 'do', 'する', 'to do'], ['かいます', 'buy', 'かう', 'to buy'], ['はらいます', 'pay', 'はらう', 'to pay'], ['つくります', 'make', 'つくる', 'to make'], ['のります', 'ride', 'のる', 'to ride'], ['かえります', 'return', 'かえる', 'to return'], ['とります', 'take', 'とる', 'to take'], ['しります', 'know', 'しる', 'to know'], ['あそびます', 'play or to hang out', 'あそぶ', 'to play or to hang out'], ['ひきます', 'play (string instruments or piano)', 'ひく', 'to play string instruments or piano'], ['はを みがきます', 'brush one\', s teeth', 'はを みがく', 'to brush one\'s teeth'], ['おしえます', 'teach', 'おしえる', 'to teach'],['たべます', 'eat', 'たべる', 'to eat'], ['みます', 'see', 'みる', 'to see'], ['かります', 'borrow', 'かりる', 'to borrow'], ['きます', 'come', 'くる', 'to come'], ['あります', 'have or to exist (a thing)', 'ある', 'to have or to exist (things)'], ['います', 'have or exist (living creature)', 'いる', 'to have or to exist (living creature)']];
var arr19 = [['おふろに はいります', 'take a bath', 'おふろに はいった', 'took a bath'], ['てがみを だします', 'send a letter', 'てがみを だした', 'sent a letter'], ['にもつを おくります', 'send a package', 'にもつを おくった', 'sent a package'], ['おかねを だします', 'withdraw some money', 'おかねを だした', 'withdrew some money'], ['けんぶつします', 'go sightseeing', 'けんぶつした', 'went sightseeing'], ['かいものに いきます', 'shop', 'かいものに いきました', 'shopped'], ['しつれんします', 'be brokenhearted', 'しつれんした', 'was brokenhearted'], ['かります', 'borrow ', 'かりた', 'borrowed'], ['スポーツを します', 'play sports', 'スポーツを した', 'played sports'], ['そうじを します', 'clean', 'そうじを した', 'cleaned'],  ['のります', 'ride', 'のった', 'rode'], ['のみます', 'drink', 'のんだ', 'drank'], ['よみます', 'read', 'よんだ', 'read'], ['いきます', 'go', 'いった', 'went'], ['あそびます', 'play or hang out', 'あそんだ', 'played or hung out'], ['あいます', 'meet', 'あった', 'met'], ['およぎます', 'swim', 'およいだ', 'swam'], ['ならいます', 'learn', 'ならった', 'learned'], ['かきます', 'write', 'かいた', 'wrote'], ['うたいます', 'sing', 'うたった', 'sang'], ['たべます', 'eat', 'たべた', 'ate'], ['みます', 'see', 'みた', 'saw'], ['ねます', 'sleep or go to bed', 'ねた', 'slept or went to bed'], ['おります', 'get off', 'おりた', 'got off'], ['かります', 'borrow ', 'かりた', 'borrowed'], ['あらいます', 'wash', 'あらった', 'washed']];
var arr20_2 = [[['いいです',  'it is good'], [], [], [], ['いい',  'it is good'], ['よくない',  'it is not good'], ['よかった',  'it was good'], ['よくなかった',  'it was not good']], [['きれいです',  'it is beautiful or clean'], [], [], [], ['きれいだ',  'it is beautiful or clean'], ['きれいじゃない',  'it is not beautiful or not clean'], ['きれいだった',  'it was beautiful or clean'], ['きれいじゃなかった',  'it was not beautiful or not clean']], [['すきです',  'it is liked'], [], [], [], ['すきだ',  'it is liked'], ['すきじゃない',  'it is not liked'], ['すきだった',  'it was liked'], ['すきじゃなかった',  'it was not liked']], [['おおきいです',  'it is big'], [], [], [], ['おおきい',  'it is big'], ['おおきくない',  'it is not big'], ['おおきかった',  'it was big'], ['おおきくなかった',  'it was not big']], [['いそがしいです',  'he is busy'], [], [], [], ['いそがしい',  'he is busy'], ['いそがしくない',  'he is not busy'], ['いそがしかった',  'he was busy'], ['いそがしくなかった',  'he was not busy']]];

var allQuestions = [];

var questions = [];

var wrongQuestions = [];

var item;

function copyArray(array1, array2) {
  while (array2.length > 0) {
    array2.pop();
  }

  for (var i=0; i < array1.length; i++) {
  	array2.push(array1[i]);
  }
}

function fillArray (dict, array) {
  while (array.length > 0) {
    array.pop ();
  }

  for (item in dict) {
      array.push (item);
  }
}

fillArray (hiraganaDict, allQuestions);
fillArray (hiraganaDict, questions);


var kana1 = {'っか':'kか', 'っき':'kき', 'っく':'kく', 'っけ':'kけ', 'っこ':'kこ', 'っが':'gが', 'っぎ':'gぎ', 'っぐ':'gぐ', 'っげ':'gげ', 'っご':'gご', 'っさ':'sさ', 'っし':'sし', 'っす':'sす', 'っせ':'sせ', 'っそ':'sそ', 'っざ':'zざ','っじ':'jじ', 'っず':'zず', 'っぜ':'zぜ', 'っぞ':'zぞ', 'った':'tた', 'っち':'cち', 'っつ':'tつ', 'って':'tて', 'っと':'tと', 'っだ':'dだ', 'っで':'dで', 'っど':'dど', 'っは':'hは', 'っひ':'hひ', 'っふ':'fふ', 'っへ':'hへ', 'っほ':'hほ', 'っば':'bば', 'っび':'bび', 'っぶ':'bぶ', 'っべ':'bべ', 'っぼ':'bぼ', 'っぱ':'pぱ', 'っぴ':'pぴ', 'っぷ':'pぷ', 'っぺ':'pぺ', 'っぽ':'pぽ', 'っま':'mま', 'っみ':'mみ', 'っむ':'mむ', 'っめ':'mめ', 'っも':'mも', 'っや':'yや', 'っゆ':'yゆ', 'っよ':'yよ', 'っら':'rら', 'っり':'rり', 'っる':'rる', 'っれ':'rれ', 'っろ':'rろ', 'っわ':'wわ', 'ッカ':'kカ', 'ッキ':'kキ', 'ック':'kク', 'ッケ':'kケ', 'ッコ':'kコ', 'ッガ':'gガ', 'ッギ':'gギ', 'ッグ':'gグ', 'ッゲ':'gゲ', 'ッゴ':'gゴ', 'ッセ':'sセ', 'ッシ':'sシ', 'ッス':'sス', 'ッセ':'sセ', 'ッソ':'sソ', 'ッザ':'zザ','ッジ':'jジ', 'ッズ':'zズ', 'ッゼ':'zゼ', 'ッゾ':'zゾ', 'ッタ':'tタ', 'ッチ':'cチ', 'ッツ':'tツ', 'ッテ':'tテ', 'ット':'tト', 'ッダ':'dダ', 'ッデ':'dデ', 'ッド':'dド', 'ッハ':'hハ', 'ッヒ':'hヒ', 'ッフ':'fフ', 'ッヘ':'hヘ', 'ッホ':'hホ', 'ッバ':'bバ', 'ッビ':'bビ', 'ッブ':'bブ', 'ッベ':'bベ', 'ッボ':'bボ', 'ッパ':'pパ', 'ッピ':'pピ', 'ップ':'pプ', 'ッペ':'pペ', 'ッポ':'pポ', 'ッマ':'mマ', 'ッミ':'mミ', 'ッム':'mム', 'ッメ':'mメ', 'ッモ':'mモ', 'ッヤ':'yヤ', 'ッユ':'yユ', 'ッヨ':'yヨ', 'ッラ':'rラ', 'ッリ':'rリ', 'ッル':'rル', 'ッレ':'rレ', 'ッロ':'rロ', 'ッワ':'wワ'};
var kana2 = {'ポー':'pō','きゃ':'kya', 'きゅ':'kyu', 'きょ':'kyo', 'しゃ':'sha', 'しゅ':'shu', 'しょ':'sho', 'ちゃ':'cha', 'ちゅ':'chu', 'ちょ':'cho', 'にゃ':'nya', 'にゅ':'nyu', 'にょ':'nyo', 'ひゃ':'hya', 'ひゅ':'hyu', 'ひょ':'hyo', 'みゃ':'mya', 'みゅ':'myu', 'みょ':'myo', 'りゃ':'rya', 'りゅ':'ryu', 'りょ':'ryo', 'ぎゃ':'gya', 'ぎゅ':'gyu', 'ぎょ':'gyo', 'じゃ':'ja', 'じゅ':'ju', 'じょ':'jo', 'びゃ':'bya', 'びゅ':'byu', 'びょ':'byo', 'ぴゃ':'pya', 'ぴゅ':'pyu', 'ぴょ':'pyo', 'キャ':'kya', 'キュ':'kyu', 'キョ':'kyo', 'シャ':'sha', 'シュ':'shu', 'ショ':'sho', 'チャ':'cha', 'チュ':'chu', 'チョ':'cho', 'ニャ':'nya', 'ニュ':'nyu', 'ニョ':'nyo', 'ヒャ':'hya', 'ヒュ':'hyu', 'ヒョ':'hyo', 'ミャ':'mya', 'ミュ':'myu', 'ミョ':'myo', 'リャ':'rya', 'リュ':'ryu', 'リョ':'ryo', 'ギャ':'gya', 'ギュ':'gyu', 'ギョ':'gyo', 'ヂャ':'ja', 'ヂュ':'ju', 'ヂョ':'jo', 'ビャ':'bya', 'ビュ':'byu', 'ビョ':'byo', 'ピャ':'pya', 'ピュ':'pyu', 'ピョ':'pyo', 'イェ':'ye', 'ヴァ':'va', 'ヴィ':'vi', 'ヴ':'vu', 'ヴェ':'ve', 'ヴォ':'vo', 'ヴュ':'vyu', 'クァ':'qua', 'クィ':'qui', 'クェ':'que', 'クォ':'quo', 'シェ':'she', 'ジェ':'je', 'スァ':'swa', 'スィ':'swi', 'スェ':'swe', 'スォ':'swo', 'ツァ':'tsa', 'ツィ':'tsi', 'ツェ':'tse', 'ツォ':'tso', 'チェ':'che', 'ティ':'ti', 'テュ':'tyu', 'ディ':'di', 'デュ':'dyu', 'トゥ':'tu', 'トヮ':'twa', 'ドゥ':'du', 'ファ':'fa', 'フィ':'fi', 'フェ':'fe', 'フォ':'fo', 'モヮ':'mwa', 'ウィ':'wi', 'ウェ':'we', 'ウォ':'wo'};
var kana3 = {'あ':'a', 'い':'i', 'う':'u','え':'e', 'お':'o', 'か':'ka', 'き':'ki', 'く':'ku', 'け':'ke', 'こ':'ko', 'が':'ga', 'ぎ':'gi', 'ぐ':'gu', 'げ':'ge', 'ご':'go', 'さ':'sa', 'し':'shi', 'す':'su', 'せ':'se', 'そ':'so', 'ざ':'za','じ':'ji', 'ず':'zu', 'ぜ':'ze', 'ぞ':'zo', 'た':'ta', 'ち':'chi', 'つ':'tsu', 'て':'te', 'と':'to', 'だ':'da', 'で':'de', 'ど':'do', 'な':'na', 'に':'ni', 'ぬ':'nu', 'ね':'ne', 'の':'no', 'は':'ha', 'ひ':'hi', 'ふ':'fu', 'へ':'he', 'ほ':'ho', 'ば':'ba', 'び':'bi', 'ぶ':'bu', 'べ':'be', 'ぼ':'bo', 'ぱ':'pa', 'ぴ':'pi', 'ぷ':'pu', 'ぺ':'pe', 'ぽ':'po', 'ま':'ma', 'み':'mi', 'む':'mu', 'め':'me', 'も':'mo', 'や':'ya', 'ゆ':'yu', 'よ':'yo', 'ら':'ra', 'り':'ri', 'る':'ru', 'れ':'re', 'ろ':'ro', 'わ':'wa', 'を':'wo', 'ア':'a', 'イ':'i', 'ウ':'u', 'エ':'e', 'オ':'o', 'カ':'ka', 'キ':'ki', 'ク':'ku', 'ケ':'ke', 'コ':'ko', 'ガ':'ga', 'ギ':'gi', 'グ':'gu', 'ゲ':'ge', 'ゴ':'go', 'セ':'sa', 'シ':'shi', 'ス':'su', 'セ':'se', 'ソ':'so', 'ザ':'za','ジ':'ji', 'ズ':'zu', 'ゼ':'ze', 'ゾ':'zo', 'タ':'ta', 'チ':'chi', 'ツ':'tsu', 'テ':'te', 'ト':'to', 'ダ':'da', 'デ':'de', 'ド':'do', 'ナ':'na', 'ニ':'ni', 'ヌ':'nu', 'ネ':'ne', 'ノ':'no', 'ハ':'ha', 'ヒ':'hi', 'フ':'fu', 'ヘ':'he', 'ホ':'ho', 'バ':'ba', 'ビ':'bi', 'ブ':'bu', 'ベ':'be', 'ボ':'bo', 'パ':'pa', 'ピ':'pi', 'プ':'pu', 'ペ':'pe', 'ポ':'po', 'マ':'ma', 'ミ':'mi', 'ム':'mu', 'メ':'me', 'モ':'mo', 'ヤ':'ya', 'ユ':'yu', 'ヨ':'yo', 'ラ':'ra', 'リ':'ri', 'ル':'ru', 'レ':'re', 'ロ':'ro', 'ワ':'wa', 'ヲ':'wo'};
var kana4 = {'ん':'n', 'っ':'', 'ン':'n', 'ッ':''};


function toRomaji (kana) {
 var translation = kana;
 var word;
 for (word in kana1) {
  while (translation.indexOf(word) != -1) translation = translation.replace (word, kana1[word]);
 }
 for (word in kana2) {
  while (translation.indexOf(word) != -1) translation = translation.replace (word, kana2[word]);
 }
 for (word in kana3) {
  while (translation.indexOf(word) != -1) translation = translation.replace (word, kana3[word]);
 }
 for (word in kana4) {
  while (translation.indexOf(word) != -1) translation = translation.replace (word, kana4[word]);
 }
 return translation;
}


var dicts = [dict1, dict2, dict3, dict4, dict5, dict6, dict7, dict8, dict9, dict10, dict11, dict12, dict13, dict14, dict15, dict16, dict17, dict18, dict19, dict20, dict21, dict22, dict23, dict24, dict25];
var arrays1 = [arr12];
var arrays2 = [arr14, arr17, arr18, arr19];

function toKana (romaji) {
  for (var i = 0; i < dicts.length; i++) {
    for (d in dicts[i]) {
        if (toRomaji(d) == romaji) return d;
        else if (toRomaji(dicts[i][d][0]) == romaji) return dicts[i][d][0];
        else if (toRomaji(dicts[i][d][0]) + ' (' + dicts[i][d][1] + ')'  == romaji) return dicts[i][d][0] + ' (' + dicts[i][d][1] + ')';
    }
  }

  for (var i = 0; i < arrays1.length; i++) {
  	for (var j = 0; j < arrays1[i].length; j++) {
  	  for (var k = 0; k < arrays1[i][j].length; k++) {
  	    if (toRomaji(arrays1[i][j][k][0]) + ' (' + toRomaji(arrays1[i][j][k][1]) + ')' == romaji) return arrays1[i][j][k][0] + ' (' + arrays1[i][j][k][1] + ')';
  	  }
  	}
  }

  for (var i = 0; i < arrays2.length; i++) {
  	for (var j = 0; j < arrays2[i].length; j++) {
  	  if (toRomaji(arrays2[i][j][0]) + ' (' + toRomaji(arrays2[i][j][1]) + ')' == romaji) return arrays2[i][j][0] + ' (' + arrays2[i][j][1] + ')';
  	  
  	}
  }

  return romaji; 
}		


var hira1 = {'kk':'っk', 'gg':'っg', 'ss':'っs', 'zz':'っz', 'jj':'っj', 'tt':'っt', 'dd':'っd', 'cc':'っc', 'hh':'っh', 'ff':'っf', 'bb':'っb', 'pp':'っp', 'mm':'っm', 'yy':'っy', 'rr':'っr', 'ww':'っw'};
var hira2 = {'shi':'し','chi':'ち', 'tsu':'つ', 'kya':'きゃ', 'kyu':'きゅ', 'kyo':'きょ', 'sha':'しゃ', 'shu':'しゅ', 'sho':'しょ', 'cha':'ちゃ', 'chu':'ちゅ', 'cho':'ちょ', 'nya':'にゃ', 'nyu':'にゅ', 'nyo':'にょ', 'hya':'ひゃ', 'hyu':'ひゅ', 'hyo':'ひょ', 'mya':'みゃ', 'myu':'みゅ', 'myo':'みょ', 'rya':'りゃ', 'ryu':'りゅ', 'ryo':'りょ', 'gya':'ぎゃ', 'gyu':'ぎゅ', 'gyo':'ぎょ', 'ja':'じゃ', 'ju':'じゅ', 'jo':'じょ', 'bya':'びゃ', 'byu':'びゅ', 'byo':'びょ', 'pya':'ぴゃ', 'pyu':'ぴゅ', 'pyo':'ぴょ'};
var hira3 = {'ka':'か', 'ki':'き', 'ku':'く', 'ke':'け', 'ko':'こ', 'ga':'が', 'gi':'ぎ', 'gu':'ぐ', 'ge':'げ', 'go':'ご', 'sa':'さ', 'su':'す', 'se':'せ', 'so':'そ', 'za':'ざ', 'ji':'じ', 'zu':'ず', 'ze':'ぜ', 'zo':'ぞ', 'ta':'た', 'te':'て', 'to':'と', 'da':'だ', 'de':'で', 'do':'ど', 'na':'な', 'ni':'に', 'nu':'ぬ', 'ne':'ね', 'no':'の', 'ha':'は', 'hi':'ひ', 'fu':'ふ', 'he':'へ', 'ho':'ほ', 'ba':'ば', 'bi':'び', 'bu':'ぶ', 'be':'べ', 'bo':'ぼ', 'pa':'ぱ', 'pi':'ぴ', 'pu':'ぷ', 'pe':'ぺ', 'po':'ぽ', 'ma':'ま', 'mi':'み', 'mu':'む', 'me':'め', 'mo':'も', 'ya':'や', 'yu':'ゆ', 'yo':'よ', 'ra':'ら', 'ri':'り', 'ru':'る', 're':'れ', 'ro':'ろ', 'wa':'わ', 'wo':'を'};
var hira4 = {'a':'あ', 'i':'い', 'u':'う', 'e':'え', 'o':'お', 'n ':'ん', 'nk':'んk', 'ng':'んg', 'ns':'んs', 'nz':'んz', 'nj':'んj', 'nt':'んt', 'nd':'んd', 'nc':'んc', 'nh':'んh', 'nf':'んf', 'nb':'んb', 'np':'んp', 'nm':'んm', 'nr':'んr', 'nw':'んw'};

function toHiragana (romaji) {
 var translation = romaji.toLowerCase();
 for (word in hira1) {
  translation = translation.replace (word, hira1[word])
 }
 for (word in hira2) {
  translation = translation.replace (word, hira2[word])
 }
 for (word in hira3) {
  translation = translation.replace (word, hira3[word])
 }
 for (word in hira4) {
  translation = translation.replace (word, hira4[word])
 }
 return translation;
}