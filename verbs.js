var hira1 = {'kk':'っk', 'gg':'っg', 'ss':'っs', 'zz':'っz', 'jj':'っj', 'tt':'っt', 'dd':'っd', 'cc':'っc', 'hh':'っh', 'ff':'っf', 'bb':'っb', 'pp':'っp', 'mm':'っm', 'yy':'っy', 'rr':'っr', 'ww':'っw'};

var hira2 = {'kya':'きゃ', 'kyu':'きゅ', 'kyo':'きょ', 'sha':'しゃ', 'shu':'しゅ', 'sho':'しょ', 'cha':'ちゃ', 'chu':'ちゅ', 'cho':'ちょ', 'nya':'にゃ', 'nyu':'にゅ', 'nyo':'にょ', 'hya':'ひゃ', 'hyu':'ひゅ', 'hyo':'ひょ', 'mya':'みゃ', 'myu':'みゅ', 'myo':'みょ', 'rya':'りゃ', 'ryu':'りゅ', 'ryo':'りょ', 'gya':'ぎゃ', 'gyu':'ぎゅ', 'gyo':'ぎょ', 'ja':'じゃ', 'ju':'じゅ', 'jo':'じょ', 'bya':'びゃ', 'byu':'びゅ', 'byo':'びょ', 'pya':'ぴゃ', 'pyu':'ぴゅ', 'pyo':'ぴょ'};

var hira3 = {'ka':'か', 'ki':'き', 'ku':'く', 'ke':'け', 'ko':'こ', 'ga':'が', 'gi':'ぎ', 'gu':'ぐ', 'ge':'げ', 'go':'ご', 'sa':'さ', 'shi':'し', 'su':'す', 'se':'せ', 'so':'そ', 'za':'ざ', 'ji':'じ', 'zu':'ず', 'ze':'ぜ', 'zo':'ぞ', 'ta':'た', 'chi':'ち', 'tsu':'つ', 'te':'て', 'to':'と', 'da':'だ', 'de':'で', 'do':'ど', 'na':'な', 'ni':'に', 'nu':'ぬ', 'ne':'ね', 'no':'の', 'ha':'は', 'hi':'ひ', 'fu':'ふ', 'he':'へ', 'ho':'ほ', 'ba':'ば', 'bi':'び', 'bu':'ぶ', 'be':'べ', 'bo':'ぼ', 'pa':'ぱ', 'pi':'ぴ', 'pu':'ぷ', 'pe':'ぺ', 'po':'ぽ', 'ma':'ま', 'mi':'み', 'mu':'む', 'me':'め', 'mo':'も', 'ya':'や', 'yu':'ゆ', 'yo':'よ', 'ra':'ら', 'ri':'り', 'ru':'る', 're':'れ', 'ro':'ろ', 'wa':'わ', 'wo':'を'};

var hira4 = {'a':'あ', 'i':'い', 'u':'う', 'e':'え', 'o':'お', 'n':'ん'};

function toHiragana(romaji) {
 var translation = romaji;
 for (word in hira1) {
  translation = translation.replace(word, hira1[word])
 }
 for (word in hira2) {
  translation = translation.replace(word, hira2[word])
 }
 for (word in hira3) {
  translation = translation.replace(word, hira3[word])
 }
 for (word in hira4) {
  translation = translation.replace(word, hira4[word])
 }
 return translation;
}


dict14_te ={'てつだいます(to help)':['てつだって', 'help'], 'いいます(to say)':['いって', 'say'], 'たちます(to stand)':['たって', 'stand'], 'まちます(to wait)':['まって', 'wait'], 'すわります(to sit)':['すわって', 'sit'], 'はいります(to enter)':['はいって', 'enter'], 'とります(to take)':['とって', 'take'], 'よびます(to call)':['よんで', 'call'], 'しにます(to die)':['しんで', 'die'], 'ひきます(to play (string instruments or piano))':['ひいて', 'play (string instruments or piano)'], 'いそぎます(to hurry)':['いそいで', 'hurry'], 'ぬぎます(to take off)':['ぬいで', 'take off'], 'みせます(to show)':['みせて', 'show'], 'さんぽを します(to go for a walk)':['さんぽを して', 'go for a walk'], 'あめが ふります(to rain)':['あめが ふって', 'rain'], 'ふくを きます(to wear clothes)':['ふくを きて', 'wear clothes'], 'ぼうしを かぶります(to wear a hat)':['ぼうしを かぶって', 'wear a hat']};  

dict17_nai ={'おきます(to put)':['おかない', 'to not put'], 'つくります(to make)':['つくらない', 'to not make'], 'おします(to push)':['おさない', 'to not push'], 'ぬぎます(to take off)':['ぬがない', 'to not take off'], 'いきます(to go)':['いかない', 'to not go'], 'はらいます(to pay)':['はらわない', 'to not pay'], 'もっていきます(to bring)':['もっていかない', 'to not bring'], 'あいます(to meet)':['あわない', 'to not meet'], 'つかいます(to use)':['つかわない', 'to not use'], 'とります(to take)':['とらない', 'to not take'], 'なくします(to lose (something))':['なくさない', 'to not lose (something)'], 'かえります(to return or go home)':['かえらない', 'to not go home'], 'くすりを のみます(to take medicine)':['くすりを のまない', 'to not take medicine'], 'かきます(to write)':['かかない', 'to not write'], 'かえします(to return (something))':['かえさない', 'to not return (something)'], 'はいります(to enter)':['はいらない', 'to not enter'], 'よびます(to call)':['よばない', 'to not call'], 'つけます(to turn on)':['つけない', 'to not turn on'], 'はなします(to speak)':['はなさない', 'to not speak'], 'だします(to hand in)':['ださない', 'to not hand in'], 'いれます(to put in)':['いれない', 'to not put in'], 'わすれます(to forget)':['わすれない', 'to not forget'], 'くるまを とめます(to park a car)':['くるまを とめない', 'to not park a car'], 'みせます(to show)':['みせない', 'to not show'], 'おきます1(to wake up)':['おきない', 'to not wake up'], 'おぼえます(to remember)':['おぼえない', 'to not remember'], 'たべます(to eat)':['たべない', 'to not eat'], 'でかけます(to go out)':['でかけない', 'to not go out'], 'アルバイトを します(to do a part-time job)':['アルバイトを しない', 'to not do a part-time job'], 'しんぱいします(to worry)':['しんぱいしない', 'to not worry'], 'きます(to come)':['こない', 'to not come'], 'しゅっちょうします(to go on a business trip)':['しゅっちょうしない', 'to not go on a business trip']};

dict18_dict ={'うたいます(to sing)':['うたう', 'to sing'], 'はらいます(to pay)':['はらう', 'to pay'], 'かいます(to buy)':['かう', 'to buy'], 'つくります(to make)':['つくる', 'to make'], 'さわります(to touch)':['さわる', 'to touch'], 'きります(to cut)':['きる', 'to cut'], 'のります(to ride)':['のる', 'to ride'], 'かえります(to return or go home)':['かえる', 'to return or go home'], 'おくります(to put)':['おくる', 'to put'], 'とります(to take)':['とる', 'to take'], 'しります(to know)':['しる', 'to know'], 'あそびます(to play or to hang out)':['あそぶ', 'to play or to hang out'], 'ひきます(to play (string instruments or piano))':['ひく', 'to play string instruments or piano'], 'あるきます(to walk)':['あるく', 'to walk'], 'はを みがきます(to brush one\'s teeth)':['はを みがく', 'to brush one\'s teeth'], 'おしえます(to teach)':['おしえる', 'to teach'], 'ねます(to sleep or to go to bed)':['ねる', 'to sleep or to go to bed'], 'とめます(to stop or to park)':['とめる', 'to stop or to park'], 'たべます(to eat)':['たべる', 'to eat'], 'みます(to see)':['みる', 'to see'], 'かります(to borrow)':['かりる', 'to borrow'], 'うんてんします(to drive)':['うんてんする', 'to drive'], 'きます(to come)':['くる', 'to come'], 'します(to do)':['する', 'to do'], 'あります(to have or to exist (thing))':['ある', 'to have or to exist (things)'], 'います(to have or to exist (living creature))':['いる', 'to have or to exist (living creature)']};

dict19_ta ={'のります(to ride)':['のった', 'rode'], 'のみます(to drink)':['のんだ', 'drank'], 'よみます(to read)':['よんだ', 'read'], 'いきます(to go)':['いった', 'went'], 'あそびます(to play or hang out)':['あそんだ', 'played or hung out'], 'あいます(to meet)':['あった', 'met'], 'おふろに はいります(to take a bath)':['おふろに はいった', 'took a bath'], 'てがみを だします(to send a letter)':['てがみを だした', 'sent a letter'], 'にもつを おくります(to send a package)':['にもつを おくった', 'sent a package'], 'およぎます(to swim)':['およいだ', 'swam'], 'ならいます(to learn)':['ならった', 'learned'], 'おかねを だします(to withdraw some money)':['おかねを だした', 'withdrew some money'], 'けんぶつします(to go sightseeing)':['けんぶつした', 'went sightseeing'], 'かきます(to write)':['かいた', 'wrote'], 'うたいます(to sing)':['うたった', 'sang'], 'かいものに いきます(to shop)':['かいものに いきました', 'shopped'], 'たべます(to eat)':['たべた', 'ate'], 'みます(to see)':['みた', 'saw'], 'ねます(to sleep or go to bed)':['ねた', 'slept or went to bed'], 'おります(to get off)':['おりた', 'got off'], 'かります(to borrow )':['かりた', 'borrowed'], 'しつれんします(to be brokenhearted)':['しつれんした', 'was brokenhearted'], 'スポーツを します(to play sports)':['スポーツを した', 'played sports'], 'あらいます(to wash)':['あらった', 'washed'], 'そうじを します(to clean)':['そうじを した', 'cleaned']};

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

fillArray(dict14_te, questions);

var answer;

function pickQuestion() {
  document.getElementById('Option1').style.display = 'none';
  document.getElementById('Option2').style.display = 'none';
  document.getElementById('Option3').style.display = 'none';
  document.getElementById('Translation').style.display = 'none';

  var n = Math.floor(Math.random() * questions.length); 
  var q = questions[n];
  document.getElementById('Question').innerHTML = q;  
  document.getElementById('Translation').innerHTML = dict14_te[q][1];
  answer = dict14_te[q][0];
}

function checkSoFar() {
  var inputSoFar = document.getElementById('Input').value;
  document.getElementById('Input').value = toHiragana(inputSoFar);
  if (answer == document.getElementById('Input').value) {
    document.getElementById('AmIRight').innerHTML = 'Correct!'
    document.getElementById('Translation').style.display = 'initial';
  }
}