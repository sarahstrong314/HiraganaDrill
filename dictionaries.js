var hiraganaDict = {'あ':'a', 'い':'i', 'う':'u',' え':'e', 'お':'o', 'か':'ka', 'き':'ki', 'く':'ku', 'け':'ke', 'こ':'ko', 'が':'ga', 'ぎ':'gi', 'ぐ':'gu', 'げ':'ge', 'ご':'go', 'さ':'sa', 'し':'shi', 'す':'su', 'せ':'se', 'そ':'so', 'ざ':'za','じ':'ji', 'ず':'zu', 'ぜ':'ze', 'ぞ':'zo', 'た':'ta', 'ち':'chi', 'つ':'tsu', 'て':'te', 'と':'to', 'だ':'da', 'で':'de', 'ど':'do', 'な':'na', 'に':'ni', 'ぬ':'nu', 'ね':'ne', 'の':'no', 'は':'ha', 'ひ':'hi', 'ふ':'fu', 'へ':'he', 'ほ':'ho', 'ば':'ba', 'び':'bi', 'ぶ':'bu', 'べ':'be', 'ぼ':'bo', 'ぱ':'pa', 'ぴ':'pi', 'ぷ':'pu', 'ぺ':'pe', 'ぽ':'po', 'ま':'ma', 'み':'mi', 'む':'mu', 'め':'me', "も":'mo', 'や':'ya', 'ゆ':'yu', 'よ':'yo', 'ら':'ra', 'り':'ri', 'る':'ru', 'れ':'re', 'ろ':'ro', 'わ':'wa', 'を':'wo', 'ん':'n', 'きゃ':'kya', 'きゅ':'kyu', 'きょ':'kyo', 'しゃ':'sha', 'しゅ':'shu', 'しょ':'sho', 'ちゃ':'cha', 'ちゅ':'chu', 'ちょ':'cho', 'にゃ':'nya', 'にゅ':'nyu', 'にょ':'nyo', 'ひゃ':'hya', 'ひゅ':'hyu', 'ひょ':'hyo', 'みゃ':'mya', 'みゅ':'myu', 'みょ':'myo', 'りゃ':'rya', 'りゅ':'ryu', 'りょ':'ryo', 'ぎゃ':'gya', 'ぎゅ':'gyu', 'ぎょ':'gyo', 'じゃ':'ja', 'じゅ':'ju', 'じょ':'jo', 'びゃ':'bya', 'びゅ':'byu', 'びょ':'byo', 'ぴゃ':'pya', 'ぴゅ':'pyu', 'ぴょ':'pyo'};
var katakanaDict = {'ア':'a', 'イ':'i', 'ウ':'u', 'エ':'e', 'オ':'o', 'カ':'ka', 'キ':'ki', 'ク':'ku', 'ケ':'ke', 'コ':'ko', 'ガ':'ga', 'ギ':'gi', 'グ':'gu', 'ゲ':'ge', 'ゴ':'go', 'サ':'sa', 'シ':'shi', 'ス':'su', 'セ':'se', 'ソ':'so', 'ザ':'za','ジ':'ji', 'ズ':'zu', 'ゼ':'ze', 'ゾ':'zo', 'タ':'ta', 'チ':'chi', 'ツ':'tsu', 'テ':'te', 'ト':'to', 'ダ':'da', 'デ':'de', 'ド':'do', 'ナ':'na', 'ニ':'ni', 'ヌ':'nu', 'ネ':'ne', 'ノ':'no', 'ハ':'ha', 'ヒ':'hi', 'フ':'fu', 'ヘ':'he', 'ホ':'ho', 'バ':'ba', 'ビ':'bi', 'ブ':'bu', 'ベ':'be', 'ボ':'bo', 'パ':'pa', 'ピ':'pi', 'プ':'pu', 'ペ':'pe', 'ポ':'po', 'マ':'ma', 'ミ':'mi', 'ム':'mu', 'メ':'me', "モ":'mo', 'ヤ':'ya', 'ユ':'yu', 'ヨ':'yo', 'ラ':'ra', 'リ':'ri', 'ル':'ru', 'レ':'re', 'ロ':'ro', 'ワ':'wa', 'ヲ':'wo', 'ン':'n', 'キャ':'kya', 'キュ':'kyu', 'キョ':'kyo', 'シャ':'sha', 'シュ':'shu', 'ショ':'sho', 'チャ':'cha', 'チュ':'chu', 'チョ':'cho', 'ニャ':'nya', 'ニュ':'nyu', 'ニョ':'nyo', 'ヒャ':'hya', 'ヒュ':'hyu', 'ヒョ':'hyo', 'ミャ':'mya', 'ミュ':'myu', 'ミョ':'myo', 'リャ':'rya', 'リュ':'ryu', 'リョ':'ryo', 'ギャ':'gya', 'ギュ':'gyu', 'ギョ':'gyo', 'ヂャ':'ja', 'ヂュ':'ju', 'ヂョ':'jo', 'ビャ':'bya', 'ビュ':'byu', 'ビョ':'byo', 'ピャ':'pya', 'ピュ':'pyu', 'ピョ':'pyo'};
var dictOne = {'hon': 'book', 'kami': 'paper', 'enpitsu': 'pencil', 'kore': 'this one', 'sore': 'that one', 'are': 'that one (over there)', 'nan': 'what', 'watashi': 'I', 'anata': 'you', 'kare': 'he', 'kanojo': 'she', 'dare': 'who', 'nansai':'how old'}

var allHiragana = [];
var allKatakana = [];
var allLessonOne = [];

var hiragana = [];
var katakana = [];
var lessonOne = [];

var item;

function fillArray(dict, array) {
  for (item in dict) {
  	if (array.indexOf(item) == -1) {
      array.push(item);
    }
  }
}

fillArray(hiraganaDict, allHiragana);
fillArray(hiraganaDict, hiragana);

fillArray(katakanaDict, allKatakana);
fillArray(katakanaDict, katakana);

fillArray(dictOne, allLessonOne);
fillArray(dictOne, lessonOne);

