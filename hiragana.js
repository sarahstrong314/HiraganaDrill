var hiraganaDict = {'あ':'a', 'い':'i', 'う':'u',' え':'e', 'お':'o', 'か':'ka', 'き':'ki', 'く':'ku', 'け':'ke', 'こ':'ko', 'が':'ga', 'ぎ':'gi', 'ぐ':'gu', 'げ':'ge', 'ご':'go', 'さ':'sa', 'し':'shi', 'す':'su', 'せ':'se', 'そ':'so', 'ざ':'za','じ':'ji', 'ず':'zu', 'ぜ':'ze', 'ぞ':'zo', 'た':'ta', 'ち':'chi', 'つ':'tsu', 'て':'te', 'と':'to', 'だ':'da', 'で':'de', 'ど':'do', 'な':'na', 'に':'ni', 'ぬ':'nu', 'ね':'ne', 'の':'no', 'は':'ha', 'ひ':'hi', 'ふ':'fu', 'へ':'he', 'ほ':'ho', 'ば':'ba', 'び':'bi', 'ぶ':'bu', 'べ':'be', 'ぼ':'bo', 'ぱ':'pa', 'ぴ':'pi', 'ぷ':'pu', 'ぺ':'pe', 'ぽ':'po', 'ま':'ma', 'み':'mi', 'む':'mu', 'め':'me', "も":'mo', 'や':'ya', 'ゆ':'yu', 'よ':'yo', 'ら':'ra', 'り':'ri', 'る':'ru', 'れ':'re', 'ろ':'ro', 'わ':'wa', 'を':'wo', 'ん':'n'};
var katakanaDict = {'ア':'a', 'イ':'i', 'ウ':'u', 'エ':'e', 'オ':'o', 'カ':'ka', 'キ':'ki', 'ク':'ku', 'ケ':'ke', 'コ':'ko', 'ガ':'ga', 'ギ':'gi', 'グ':'gu', 'ゲ':'ge', 'ゴ':'go', 'サ':'sa', 'シ':'shi', 'ス':'su', 'セ':'se', 'ソ':'so', 'ザ':'za','ジ':'ji', 'ズ':'zu', 'ゼ':'ze', 'ゾ':'zo', 'タ':'ta', 'チ':'chi', 'ツ':'tsu', 'テ':'te', 'ト':'to', 'ダ':'da', 'デ':'de', 'ド':'do', 'ナ':'na', 'ニ':'ni', 'ヌ':'nu', 'ネ':'ne', 'ノ':'no', 'ハ':'ha', 'ヒ':'hi', 'フ':'fu', 'ヘ':'he', 'ホ':'ho', 'バ':'ba', 'ビ':'bi', 'ブ':'bu', 'ベ':'be', 'ボ':'bo', 'パ':'pa', 'ピ':'pi', 'プ':'pu', 'ペ':'pe', 'ポ':'po', 'マ':'ma', 'ミ':'mi', 'ム':'mu', 'メ':'me', "モ":'mo', 'ヤ':'ya', 'ユ':'yu', 'ヨ':'yo', 'ラ':'ra', 'リ':'ri', 'ル':'ru', 'レ':'re', 'ロ':'ro', 'ワ':'wa', 'ヲ':'wo', 'ン':'n'};

var hiragana = [];
var katakana = [];
var solutions = [];
var character;

for (character in hiraganaDict) {
  hiragana.push(character);
  solutions.push(hiraganaDict[character]);
}

for (character in katakanaDict) {
  katakana.push(character);
}

var currentMode = 0;

function setMode(int) {
  currentMode = int;

  if (int == 0) {
    document.getElementById('HiraganaMode').disabled = true;
    document.getElementById('KatakanaMode').disabled = false;
  } else {
    document.getElementById('HiraganaMode').disabled = false;
    document.getElementById('KatakanaMode').disabled = true;
  }

  document.getElementById('Next').disabled = false;
  document.getElementById('OptionOne').disabled = true;
  document.getElementById('OptionTwo').disabled = true;
  document.getElementById('OptionThree').disabled = true;
  
  document.getElementById('AmIRight').innerHTML = ''
  document.getElementById('CharacterSpace').innerHTML = ''
  document.getElementById('OptionOne').innerHTML = ''
  document.getElementById('OptionTwo').innerHTML = ''
  document.getElementById('OptionThree').innerHTML = ''

  pickCharacter();

}

function pickCharacter() {
  document.getElementById('Next').disabled = true;
  document.getElementById('OptionOne').disabled = false;
  document.getElementById('OptionTwo').disabled = false;
  document.getElementById('OptionThree').disabled = false;

  if (currentMode == 0) {
    dictionary = hiraganaDict;
    characters = hiragana;
  } else {
    dictionary = katakanaDict;
    characters = katakana;
  }

  var n = Math.floor(Math.random() * Object.keys(dictionary).length);
  
  document.getElementById('CharacterSpace').innerHTML = characters[n]; 
  
  displayKana(characters[n]);

  document.getElementById('AmIRight').innerHTML = ''
}

function displayKana(character) {
  var characters, dictionary;

  if (currentMode == 0) {
    dictionary = hiraganaDict;
    characters = hiragana;
  } else {
    dictionary = katakanaDict;
    characters = katakana;
  }

  var dictionaryLength = Object.keys(dictionary).length

  // picks two different random indices that don't match character's index

  var randomCharacter = characters[Math.floor(Math.random() * dictionaryLength)];

  while (character == randomCharacter) randomCharacter = characters[Math.floor(Math.random() * dictionaryLength)];

  var randomCharacter2 = characters[Math.floor(Math.random() * dictionaryLength)];

  while (randomCharacter2 == character || randomCharacter2 == randomCharacter)
    randomCharacter2 = characters[Math.floor(Math.random() * dictionaryLength)];

  // puts the answers in order based on index

  var answers = [character, randomCharacter, randomCharacter2];

  answers.sort();

  // displays the answers, in order, on the option buttons

  var buttons = [
    document.getElementById('OptionOne'),
    document.getElementById('OptionTwo'),
    document.getElementById('OptionThree')
  ];

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = dictionary[answers[i]];
  }

  // once an option is clicked, displays whether it is correct or incorrect

  buttons[0].onclick = function() { checkAnswer(character, answers[0]) };
  buttons[1].onclick = function() { checkAnswer(character, answers[1]) };
  buttons[2].onclick = function() { checkAnswer(character, answers[2]) };
}

function checkAnswer(correct, answer) {
  document.getElementById('AmIRight').innerHTML = ((correct == answer) ? 'Correct!' : 'Incorrect.');
  if (correct == answer) {
    document.getElementById('Next').disabled = false;
    document.getElementById('OptionOne').disabled = true;
    document.getElementById('OptionTwo').disabled = true;
    document.getElementById('OptionThree').disabled = true;
  }
}