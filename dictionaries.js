var hiraganaDict = {'あ':'a', 'い':'i', 'う':'u',' え':'e', 'お':'o', 'か':'ka', 'き':'ki', 'く':'ku', 'け':'ke', 'こ':'ko', 'が':'ga', 'ぎ':'gi', 'ぐ':'gu', 'げ':'ge', 'ご':'go', 'さ':'sa', 'し':'shi', 'す':'su', 'せ':'se', 'そ':'so', 'ざ':'za','じ':'ji', 'ず':'zu', 'ぜ':'ze', 'ぞ':'zo', 'た':'ta', 'ち':'chi', 'つ':'tsu', 'て':'te', 'と':'to', 'だ':'da', 'で':'de', 'ど':'do', 'な':'na', 'に':'ni', 'ぬ':'nu', 'ね':'ne', 'の':'no', 'は':'ha', 'ひ':'hi', 'ふ':'fu', 'へ':'he', 'ほ':'ho', 'ば':'ba', 'び':'bi', 'ぶ':'bu', 'べ':'be', 'ぼ':'bo', 'ぱ':'pa', 'ぴ':'pi', 'ぷ':'pu', 'ぺ':'pe', 'ぽ':'po', 'ま':'ma', 'み':'mi', 'む':'mu', 'め':'me', "も":'mo', 'や':'ya', 'ゆ':'yu', 'よ':'yo', 'ら':'ra', 'り':'ri', 'る':'ru', 'れ':'re', 'ろ':'ro', 'わ':'wa', 'を':'wo', 'ん':'n', 'きゃ':'kya', 'きゅ':'kyu', 'きょ':'kyo', 'しゃ':'sha', 'しゅ':'shu', 'しょ':'sho', 'ちゃ':'cha', 'ちゅ':'chu', 'ちょ':'cho', 'にゃ':'nya', 'にゅ':'nyu', 'にょ':'nyo', 'ひゃ':'hya', 'ひゅ':'hyu', 'ひょ':'hyo', 'みゃ':'mya', 'みゅ':'myu', 'みょ':'myo', 'りゃ':'rya', 'りゅ':'ryu', 'りょ':'ryo', 'ぎゃ':'gya', 'ぎゅ':'gyu', 'ぎょ':'gyo', 'じゃ':'ja', 'じゅ':'ju', 'じょ':'jo', 'びゃ':'bya', 'びゅ':'byu', 'びょ':'byo', 'ぴゃ':'pya', 'ぴゅ':'pyu', 'ぴょ':'pyo'};
var katakanaDict = {'ア':'a', 'イ':'i', 'ウ':'u', 'エ':'e', 'オ':'o', 'カ':'ka', 'キ':'ki', 'ク':'ku', 'ケ':'ke', 'コ':'ko', 'ガ':'ga', 'ギ':'gi', 'グ':'gu', 'ゲ':'ge', 'ゴ':'go', 'サ':'sa', 'シ':'shi', 'ス':'su', 'セ':'se', 'ソ':'so', 'ザ':'za','ジ':'ji', 'ズ':'zu', 'ゼ':'ze', 'ゾ':'zo', 'タ':'ta', 'チ':'chi', 'ツ':'tsu', 'テ':'te', 'ト':'to', 'ダ':'da', 'デ':'de', 'ド':'do', 'ナ':'na', 'ニ':'ni', 'ヌ':'nu', 'ネ':'ne', 'ノ':'no', 'ハ':'ha', 'ヒ':'hi', 'フ':'fu', 'ヘ':'he', 'ホ':'ho', 'バ':'ba', 'ビ':'bi', 'ブ':'bu', 'ベ':'be', 'ボ':'bo', 'パ':'pa', 'ピ':'pi', 'プ':'pu', 'ペ':'pe', 'ポ':'po', 'マ':'ma', 'ミ':'mi', 'ム':'mu', 'メ':'me', "モ":'mo', 'ヤ':'ya', 'ユ':'yu', 'ヨ':'yo', 'ラ':'ra', 'リ':'ri', 'ル':'ru', 'レ':'re', 'ロ':'ro', 'ワ':'wa', 'ヲ':'wo', 'ン':'n', 'キャ':'kya', 'キュ':'kyu', 'キョ':'kyo', 'シャ':'sha', 'シュ':'shu', 'ショ':'sho', 'チャ':'cha', 'チュ':'chu', 'チョ':'cho', 'ニャ':'nya', 'ニュ':'nyu', 'ニョ':'nyo', 'ヒャ':'hya', 'ヒュ':'hyu', 'ヒョ':'hyo', 'ミャ':'mya', 'ミュ':'myu', 'ミョ':'myo', 'リャ':'rya', 'リュ':'ryu', 'リョ':'ryo', 'ギャ':'gya', 'ギュ':'gyu', 'ギョ':'gyo', 'ヂャ':'ja', 'ヂュ':'ju', 'ヂョ':'jo', 'ビャ':'bya', 'ビュ':'byu', 'ビョ':'byo', 'ピャ':'pya', 'ピュ':'pyu', 'ピョ':'pyo'};
var foreignKatakanaDict = {'イェ':'ye', 'ヴァ':'va', 'ヴィ':'vi', 'ヴ':'vu', 'ヴェ':'ve', 'ヴォ':'vo', 'ヴュ':'vyu', 'クァ':'qua', 'クィ':'qui', 'クェ':'que', 'クォ':'quo', 'シェ':'she', 'ジェ':'je', 'スァ':'swa', 'スィ':'swi', 'スェ':'swe', 'スォ':'swo', 'ツァ':'tsa', 'ツィ':'tsi', 'ツェ':'tse', 'ツォ':'tso', 'チェ':'che', 'ティ':'ti', 'テュ':'tyu', 'ディ':'di', 'デュ':'dyu', 'トゥ':'tu', 'トヮ':'twa', 'ドゥ':'du', 'ファ':'fa', 'フィ':'fi', 'フェ':'fe', 'フォ':'fo', 'モヮ':'mwa', 'ウィ':'wi', 'ウェ':'we', 'ウォ':'wo'};

var dict1 = {'ほん': 'book', 'かみ': 'paper', 'えんぴつ': 'pencil', 'これ': 'this one', 'それ': 'that one', 'あれ': 'that one (over there)', 'なん': 'what', 'わたし': 'I', 'あなた': 'you', 'かれ': 'he', 'かのじょ': 'she', 'だれ': 'who', 'なんさい':'how old'}


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

var allDicts = [dict1];

function toKana(romaji) {
  for (var i = 0; i < allDicts.length; i++) {
    for (d in allDicts[i]) {
        if (toRomaji(d) == romaji) return d;
    }
  }
  return romaji; 
}