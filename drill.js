var hiraganaDict = {'あ':'a', 'い':'i', 'う':'u',' え':'e', 'お':'o', 'か':'ka', 'き':'ki', 'く':'ku', 'け':'ke', 'こ':'ko', 'が':'ga', 'ぎ':'gi', 'ぐ':'gu', 'げ':'ge', 'ご':'go', 'さ':'sa', 'し':'shi', 'す':'su', 'せ':'se', 'そ':'so', 'ざ':'za','じ':'ji', 'ず':'zu', 'ぜ':'ze', 'ぞ':'zo', 'た':'ta', 'ち':'chi', 'つ':'tsu', 'て':'te', 'と':'to', 'だ':'da', 'で':'de', 'ど':'do', 'な':'na', 'に':'ni', 'ぬ':'nu', 'ね':'ne', 'の':'no', 'は':'ha', 'ひ':'hi', 'ふ':'fu', 'へ':'he', 'ほ':'ho', 'ば':'ba', 'び':'bi', 'ぶ':'bu', 'べ':'be', 'ぼ':'bo', 'ぱ':'pa', 'ぴ':'pi', 'ぷ':'pu', 'ぺ':'pe', 'ぽ':'po', 'ま':'ma', 'み':'mi', 'む':'mu', 'め':'me', "も":'mo', 'や':'ya', 'ゆ':'yu', 'よ':'yo', 'ら':'ra', 'り':'ri', 'る':'ru', 'れ':'re', 'ろ':'ro', 'わ':'wa', 'を':'wo', 'ん':'n'};

var katakanaDict = {'ア':'a', 'イ':'i', 'ウ':'u', 'エ':'e', 'オ':'o', 'カ':'ka', 'キ':'ki', 'ク':'ku', 'ケ':'ke', 'コ':'ko', 'ガ':'ga', 'ギ':'gi', 'グ':'gu', 'ゲ':'ge', 'ゴ':'go', 'サ':'sa', 'シ':'shi', 'ス':'su', 'セ':'se', 'ソ':'so', 'ザ':'za','ジ':'ji', 'ズ':'zu', 'ゼ':'ze', 'ゾ':'zo', 'タ':'ta', 'チ':'chi', 'ツ':'tsu', 'テ':'te', 'ト':'to', 'ダ':'da', 'デ':'de', 'ド':'do', 'ナ':'na', 'ニ':'ni', 'ヌ':'nu', 'ネ':'ne', 'ノ':'no', 'ハ':'ha', 'ヒ':'hi', 'フ':'fu', 'ヘ':'he', 'ホ':'ho', 'バ':'ba', 'ビ':'bi', 'ブ':'bu', 'ベ':'be', 'ボ':'bo', 'パ':'pa', 'ピ':'pi', 'プ':'pu', 'ペ':'pe', 'ポ':'po', 'マ':'ma', 'ミ':'mi', 'ム':'mu', 'メ':'me', "モ":'mo', 'ヤ':'ya', 'ユ':'yu', 'ヨ':'yo', 'ラ':'ra', 'リ':'ri', 'ル':'ru', 'レ':'re', 'ロ':'ro', 'ワ':'wa', 'ヲ':'wo', 'ン':'n'};

var hiragana = [];

var katakana = [];

var solutions = [];

for (var h in hiraganaDict) {

	hiragana.push(h);

	solutions.push(hiraganaDict[h]);
}

for (var k in katakanaDict) {

	katakana.push(k);
}

function pickHiragana() {

	var i = Math.floor(Math.random() * (Object.keys(hiraganaDict).length));
	
	document.getElementById('CharacterSpace').innerHTML = hiragana[i]; 
	
	displayKana(hiragana[i], 'h');
}


function pickKatakana() {

	var i = Math.floor(Math.random() * (Object.keys(katakanaDict).length));
	
	document.getElementById('CharacterSpace').innerHTML = katakana[i]; 

	displayKana(katakana[i], 'k');
}

function pickHybrid() {

	var i = Math.floor(Math.random() * 2);

	if (i == 0) pickHiragana();

	else pickKatakana();
}

 function displayKana(c, k) {

 	if (k == 'h') {

		var d = hiraganaDict;

		var a = hiragana;
	}

	else {

		var d = katakanaDict;

		var a = katakana;
	}

 	var i = a[Math.floor(Math.random() * (Object.keys(d).length))];

 	while (i == c)

 		var i = a[Math.floor(Math.random() * (Object.keys(d).length))];

 	var j = a[Math.floor(Math.random() * (Object.keys(d).length))];

 	while (j == c || j == i)

 		var k = a[Math.floor(Math.random() * (Object.keys(d).length))];

 	var l = [c, i, j];

 	l.sort();

	document.getElementById('OptionSpaceOne').innerHTML = d[l[0]]; 

	document.getElementById('OptionSpaceTwo').innerHTML = d[l[1]]; 

	document.getElementById('OptionSpaceThree').innerHTML = d[l[2]]; 

	document.getElementById('OptionSpaceOne').onclick = function() {checkAnswer(c, l[0]), k};

	document.getElementById('OptionSpaceTwo').onclick = function() {checkAnswer(c, l[1], k)};

	document.getElementById('OptionSpaceThree').onclick = function() {checkAnswer(c, l[2], k)};

}

function checkAnswer(correct, answer, kana) {

	if (correct == answer) {

		document.getElementById('AmIRight').innerHTML = "Correct!"; 

	}

	else document.getElementById('AmIRight').innerHTML = "Incorrect."; 

}