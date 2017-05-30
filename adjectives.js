function setView() {
  if (viewMenu.selectedIndex == 0) {
    question.innerHTML = toKana(question.innerHTML);
    translation.innerHTML = toKana(translation.innerHTML);
    formConvert.checked = true;
  }
  else {
    question.innerHTML = toRomaji(question.innerHTML);
    translation.innerHTML = toRomaji(translation.innerHTML);
    formConvert.checked = false;
  }
}

var currScore = 0;
var numQuestions = 0;
var numLeft;
var doReview = false;
var questions;

function setLesson() {
  for (var i = 0; i < fromMenu.length; i++) {
    if (i == fromMenu.selectedIndex) {
      intoMenu[i].disabled = true;
    } else intoMenu[i].disabled = false;
  }

  if (intoMenu.selectedIndex == fromMenu.selectedIndex) {
    if (fromMenu.selectedIndex == 0) intoMenu.selectedIndex = 1;
    else intoMenu.selectedIndex = 0;
  }

  window.history.pushState({}, '',  'adjectives.html?' + fromMenu[fromMenu.selectedIndex].id.toLowerCase() + '#' + intoMenu[intoMenu.selectedIndex].id.toLowerCase());

  //Todo: If all menus' values are <4, use arr12, otherwise use arr20

  if (doReview) {
    copyArray(wrongQuestions, questions);
    doReview = false;
  } else copyArray(arr12, questions);

  wrongQuestions = [];
  copyArray(arr12, allQuestions);
  numLeft = questions.length;

  review.style.display = 'none';
  giveUp.style.display = 'initial';
  next.style.display = 'initial';

  if (intoMenu.selectedIndex == 0) instructions.innerHTML = 'Type the correct present positive polite form of the phrase.';
  else if (intoMenu.selectedIndex == 1) instructions.innerHTML = 'Type the correct present negative polite form of the phrase.';
  else if (intoMenu.selectedIndex == 2) instructions.innerHTML = 'Type the correct past positive polite form of the phrase.';
  else instructions.innerHTML = 'Type the correct past negative polite form of the phrase.';
  
  // Displays the correct lesson requirements based on the Menus.

  requirements.innerHTML = 'This verb lesson requires the vocabulary up to Lesson 12.';

  setView();

  input.style.color = 'lightgrey';
  input.value = 'Type Your Answer Here';

  next.disabled = false;
  amIRight.innerHTML = '';
  score.innerHTML = 'Score: 0 out of 0' + ' (' + numLeft.toString() +' Remaining)';
  currScore = 0;
  numQuestions = 0;
  
  pickQuestion();
}


var lastOne = false;
var newAnswer;
var newQuestion;
var newGroup;

function pickQuestion() {
  stopScore = false;
  lastOne = false;
  updateNext = true;
  next.disabled = true;

  if (questions.length == 1) lastOne = true;

  var n = Math.floor(Math.random() * questions.length);

  newQuestion = questions[n][fromMenu.selectedIndex][0] + ' (' + questions[n][fromMenu.selectedIndex][1] + ')';
  newAnswer = questions[n][intoMenu.selectedIndex][0];
  translationBracket = '(' + questions[n][intoMenu.selectedIndex][1] + ')';
  translation.innerHTML = '_'.repeat(newAnswer.length) + ' ' + translationBracket;
  newGroup = questions[n];

  if (viewMenu.selectedIndex == 0) question.innerHTML = newQuestion;
  else question.innerHTML = toRomaji(newQuestion);

  giveUp.disabled = false;
  input.disabled = false;
  if (input.style.color != 'lightgrey') input.value = '';
  input.focus();

  questions.splice(n, 1);
  amIRight.innerHTML = '';
}

function checkSoFar() {
  var s = 'Type Your Answer Here';

  if (input.style.color == 'lightgrey') {
    for (var i = 0; i < s.length; i++) {
      if (input.value.startsWith(s.substring(0, i)) && input.value.endsWith(s.substring(i + 1))) input.value = input.value.charAt(i + 1);
    }
  }

  input.style.color = 'black';

  // var autoChanges = [['あるばいと','アルバイト'],['すぽーつ','スポーツ'],['-','ー']];

  if (formConvert.checked) //{
    input.value = toHiragana(input.value);
    /*for (var i = 0; i < autoChanges.length; i++) {
      if (input.value.includes(autoChanges[i][0])) input.value = input.value.replace(autoChanges[i][0],autoChanges[i][1]);
    }
  }*/

  var noSpaceAnswer = newAnswer.replace(/\s/g, '');
  var possibleAnswers = [noSpaceAnswer, noSpaceAnswer.replace('ー',''), toRomaji(noSpaceAnswer), toRomaji(noSpaceAnswer.replace('ー',''))];
  var interchangeables = [['くありません', 'くないです'], ['じゃありません', 'じゃないです'], ['ではないです', 'じゃないです'], ['ではありません', 'じゃないです']];

  var isCorrect = false;

  if (possibleAnswers.indexOf(input.value) != -1) isCorrect = true;
  else if (possibleAnswers.indexOf(toRomaji(input.value)) != -1) isCorrect = true;

  for (var i = 0; i < interchangeables.length; i++) {
    if (possibleAnswers.indexOf(input.value.replace(interchangeables[i][0], interchangeables[i][1])) != -1) isCorrect = true;
    else if (possibleAnswers.indexOf(toRomaji(input.value).replace(toRomaji(interchangeables[i][0]), toRomaji(interchangeables[i][1]))) != -1) isCorrect = true;
  }

  if (isCorrect) {
    if (formConvert.checked) input.value = input.value.replace('n','ん');
    input.style.color = 'green';
    if (viewMenu.selectedIndex == 0) translation.innerHTML = newAnswer + ' ' + translationBracket;
    else translation.innerHTML = toRomaji(newAnswer) + ' ' + translationBracket;
    input.disabled = true;
    amIRight.innerHTML = 'Correct!';
    giveUp.disabled = true;
    if (stopScore == false) {
      numLeft--;
      currScore++;
      numQuestions++;
      stopScore = true;
    }
    score.innerHTML = 'Score: ' + currScore.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
    if (!lastOne) next.disabled = false;
    if (lastOne) {
      amIRight.innerHTML = 'Correct! Lesson finished.';
      next.style.display = 'none';
      giveUp.style.display = 'none';
      if (wrongQuestions.length != 0) review.style.display = 'initial';
    }
  } 
}


function stopQuestion() {
  input.style.color = 'blue';
  wrongQuestions.push(newGroup);

  if (viewMenu.selectedIndex == 0) {
    input.value = newAnswer;
    translation.innerHTML = newAnswer + ' ' + translationBracket;
  }
  else {
    input.value = toRomaji(newAnswer);
    translation.innerHTML = toRomaji(newAnswer) + ' ' + translationBracket;
  }
  input.disabled = true;  
  amIRight.innerHTML = 'You gave up on this one.';
  numLeft--;
  numQuestions++;
  score.innerHTML = 'Score: ' + currScore.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
  giveUp.disabled = true;
  if (!lastOne) next.disabled = false;
  if (lastOne) {
    amIRight.innerHTML = 'Correct! Lesson finished.';
    next.style.display = 'none';
    giveUp.style.display = 'none';
    if (wrongQuestions.length != 0) review.style.display = 'initial';
  }
}


$(document).keypress(function (e) {
  var code = e.keyCode || e.which;
  if (code == 13 && !next.disabled) pickQuestion();
});