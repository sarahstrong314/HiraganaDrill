function setView() {
  var view = document.getElementById('ViewMenu').selectedIndex;
  if (view == 0) {
    document.getElementById('Question').innerHTML = toKana(document.getElementById('Question').innerHTML);
    //document.getElementById('Input').value = toKana(document.getElementById('Input').value);
    document.getElementById('Translation').innerHTML = toKana(document.getElementById('Translation').innerHTML);
    document.getElementById('FormConvert').checked = true;
  }
  else {
    document.getElementById('Question').innerHTML = toRomaji(document.getElementById('Question').innerHTML);
    //document.getElementById('Input').value = toRomaji(document.getElementById('Input').value);
    document.getElementById('Translation').innerHTML = toRomaji(document.getElementById('Translation').innerHTML);
    document.getElementById('FormConvert').checked = false;
  }
}

var lesson;
var allDicts = [dict14_te, dict17_nai, dict18_dict, dict19_ta];
var score = 0;
var numQuestions = 0;
var numLeft;
var review = false;

function setLesson() { 
  var urlViewMenu = false;
  if (window.location.href.includes('#viewinkana')) {
    urlViewMenu = true;
    document.getElementById('ViewMenu').selectedIndex = 0;
  }
  else if (window.location.href.includes('#viewinromaji')) {
    urlViewMenu = true;
    document.getElementById('ViewMenu').selectedIndex = 1;
  }

  window.history.pushState({}, '',  'verb.html?' + document.getElementById('LessonMenu').value.toLowerCase().replace(' ',''));

  lesson = document.getElementById('LessonMenu').selectedIndex;
  
  if (review) {
    questions = wrongQuestions;
    review = false;
  } else fillArray(allDicts[lesson], questions);

  wrongQuestions = [];
  fillArray(allDicts[lesson], allQuestions);
  numLeft = questions.length; 

  document.getElementById('Review').style.display = 'none';
  document.getElementById('Next').style.display = 'initial';
  document.getElementById('MasuMenu').style.display = 'flex';
  document.getElementById('FormConvert').style.display = 'inline';
  document.getElementById('FormConvertText').style.display = 'initial';
  document.getElementById('Form').style.display = 'flex';
  document.getElementById('Translation').style.display = 'inline-block';
  document.getElementById('GiveUp').style.display = 'initial';
  document.getElementById('Input').value = '';

  if (document.getElementById('MasuMenu').selectedIndex == 0) {
    if (lesson == 0) document.getElementById('Instructions').innerHTML = 'Type the correct te form of the verb.';
    else if (lesson == 1) document.getElementById('Instructions').innerHTML = 'Type the correct nai form of the verb.';
    else if (lesson == 2) document.getElementById('Instructions').innerHTML = 'Type the correct dictionary form of the verb.';
    else document.getElementById('Instructions').innerHTML = 'Type the correct ta form of the verb.';
  } else document.getElementById('Instructions').innerHTML = 'Type the correct masu form of the verb.';

  urlViewMenu = false;

  setView();

  document.getElementById('Next').disabled = false;
  document.getElementById('AmIRight').innerHTML = '';
  document.getElementById('Score').innerHTML = 'Score: 0 out of 0' + ' (' + numLeft.toString() +' Remaining)';
  score = 0;
  numQuestions = 0;
  
  pickQuestion();
}

var lastOne = false;
var newAnswer;
var newQuestion;
var translationBracket;

function pickQuestion() {
  stopScore = false;
  lastOne = false;
  updateNext = true;
  document.getElementById('Next').disabled = true;

  if (questions.length == 1) lastOne = true;

  var n = Math.floor(Math.random() * questions.length);

  if (document.getElementById('MasuMenu').selectedIndex == 0) {
    newQuestion = questions[n];
    newAnswer = allDicts[lesson][questions[n]][0];
    translationBracket = '(' + allDicts[lesson][questions[n]][1] + ')';
    document.getElementById('Translation').innerHTML = '_'.repeat(newAnswer.length) + ' ' + translationBracket;
  } else {
    newQuestion = allDicts[lesson][questions[n]][0] + ' (' + allDicts[lesson][questions[n]][1] + ')';
    newAnswer = questions[n].substring(0, questions[n].indexOf(' ('));
    translationBracket = questions[n].substring(questions[n].indexOf('('));
    document.getElementById('Translation').innerHTML = '_'.repeat(newAnswer.length) + ' ' + translationBracket;
  }

  if (document.getElementById('ViewMenu').selectedIndex == 0) document.getElementById('Question').innerHTML = newQuestion;
  else document.getElementById('Question').innerHTML = toRomaji(newQuestion);
  
    document.getElementById('GiveUp').disabled = false;
    document.getElementById('Input').disabled = false;
    document.getElementById('Input').value = '';
    document.getElementById('Input').style.color = 'black';
    document.getElementById('Input').focus();

  questions.splice(n, 1);
  document.getElementById('AmIRight').innerHTML = '';
}

function checkSoFar() {
  var inputSoFar = document.getElementById('Input').value;
  var autoChanges = [['あるばいと','アルバイト'],['すぽーつ','スポーツ'],['-','ー']];

  if (document.getElementById('FormConvert').checked) {
    document.getElementById('Input').value = toHiragana(inputSoFar);
    inputSoFar = document.getElementById('Input').value;
    for (var i = 0; i < autoChanges.length; i++) {
      if (inputSoFar.includes(autoChanges[i][0])) document.getElementById('Input').value = inputSoFar.replace(autoChanges[i][0],autoChanges[i][1]);
    }
  }

  var isCorrect = false;

  var noSpaceAnswer = newAnswer.replace(/\s/g, '');
  var possibleAnswers = [noSpaceAnswer, noSpaceAnswer.replace('ー',''), toRomaji(noSpaceAnswer), toRomaji(noSpaceAnswer.replace('ー',''))];

  if (possibleAnswers.indexOf(inputSoFar.replace(/\s/g, '')) != -1) isCorrect = true;
  else if (possibleAnswers.indexOf(toRomaji(inputSoFar).replace(/\s/g, '')) != -1) isCorrect = true;

  if (isCorrect) {
    document.getElementById('Input').style.color = 'green';
    if (document.getElementById('ViewMenu').selectedIndex == 0) document.getElementById('Translation').innerHTML = newAnswer + ' ' + translationBracket;
    else document.getElementById('Translation').innerHTML = toRomaji(newAnswer) + ' ' + translationBracket;
    document.getElementById('Input').disabled = true;
    document.getElementById('AmIRight').innerHTML = 'Correct!';
    document.getElementById('GiveUp').disabled = true;
    if (stopScore == false) {
      numLeft--;
      score++;
      numQuestions++;
      stopScore = true;
    }
    document.getElementById('Score').innerHTML = 'Score: ' + score.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
    if (!lastOne) document.getElementById('Next').disabled = false;
    if (lastOne) {
      document.getElementById('AmIRight').innerHTML = 'Correct! Lesson finished.';
      document.getElementById('Next').style.display = 'none';
      document.getElementById('GiveUp').style.display = 'none';
      if (wrongQuestions.length != 0) document.getElementById('Review').style.display = 'initial';
    }
  } 
}

function stopQuestion() {
  document.getElementById('Input').style.color = 'blue';
  if (document.getElementById('MasuMenu').selectedIndex == 0) wrongQuestions.push(newQuestion);
  else wrongQuestions.push(newAnswer + ' ' + document.getElementById('Translation').innerHTML);
  if (document.getElementById('ViewMenu').selectedIndex == 0) {
    document.getElementById('Input').value = newAnswer;
    document.getElementById('Translation').innerHTML = newAnswer + ' ' + translationBracket;
  }
  else {
    document.getElementById('Input').value = toRomaji(newAnswer);
    document.getElementById('Translation').innerHTML = toRomaji(newAnswer) + ' ' + translationBracket;
  }
  document.getElementById('Input').disabled = true;  
  document.getElementById('AmIRight').innerHTML = 'You gave up on this one.';
  numLeft--;
  numQuestions++;
  document.getElementById('Score').innerHTML = 'Score: ' + score.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
  document.getElementById('GiveUp').disabled = true;
  if (!lastOne) document.getElementById('Next').disabled = false;
  if (lastOne) {
    document.getElementById('AmIRight').innerHTML = 'Correct! Lesson finished.';
    document.getElementById('Next').style.display = 'none';
    document.getElementById('GiveUp').style.display = 'none';
    if (wrongQuestions.length != 0) document.getElementById('Review').style.display = 'initial';
  }
}

$(document).keypress(function (e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
      if (!document.getElementById('Next').disabled) pickQuestion();
      else if (document.getElementById('Review').style.display !== 'none') review = true;
      if (document.getElementById('Next').style.display === 'none') setLesson();
    } else if (code === 49) {
      if (!document.getElementById('Option1').disabled) checkAnswer(newAnswer, answers[0], 'Option1');
    } else if (code === 50) {
      if (!document.getElementById('Option2').disabled) checkAnswer(newAnswer, answers[1], 'Option2');
    } else if (code === 51) {
      if (!document.getElementById('Option3').disabled) checkAnswer(newAnswer, answers[2], 'Option3');
    }
});