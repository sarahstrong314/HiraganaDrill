function setView() {
  if (viewMenu.selectedIndex == 0) {
    question.innerHTML = toKana(question.innerHTML);
    //input.value = toKana(input.value);
    translation.innerHTML = toKana(translation.innerHTML);
    formConvert.checked = true;
  }
  else {
    question.innerHTML = toRomaji(question.innerHTML);
    //input.value = toRomaji(input.value);
    translation.innerHTML = toRomaji(translation.innerHTML);
    formConvert.checked = false;
  }
}

var lesson;
var allDicts = [dict14_te, dict17_nai, dict18_dict, dict19_ta];
var currScore = 0;
var numQuestions = 0;
var numLeft;
var doReview = false;

function setLesson() { 
  var urlViewMenu = false;
  if (window.location.href.includes('#viewinkana')) {
    urlViewMenu = true;
    viewMenu.selectedIndex = 0;
  }
  else if (window.location.href.includes('#viewinromaji')) {
    urlViewMenu = true;
    viewMenu.selectedIndex = 1;
  }

  window.history.pushState({}, '',  'masuverb.html?' + lessonMenu.value.toLowerCase().replace(' ',''));

  lesson = lessonMenu.selectedIndex;
  
  if (doReview) {
    copyArray(wrongQuestions, questions);
    doReview = false;
  } else fillArray(allDicts[lesson], questions);

  wrongQuestions = [];
  fillArray(allDicts[lesson], allQuestions);
  numLeft = questions.length; 

  review.style.display = 'none';
  giveUp.style.display = 'initial';
  next.style.display = 'initial';
  input.value = '';

  // Displays the correct instructions based on the Lesson Menu and Verb Menu.

  if (verbMenu.selectedIndex == 0) {
    if (lesson == 0) instructions.innerHTML = 'Type the correct te form of the verb.';
    else if (lesson == 1) instructions.innerHTML = 'Type the correct nai form of the verb.';
    else if (lesson == 2) instructions.innerHTML = 'Type the correct dictionary form of the verb.';
    else if (lesson == 3)instructions.innerHTML = 'Type the correct ta form of the verb.';
  } else instructions.innerHTML = 'Type the correct masu form of the verb.';
  
  // Displays the correct lesson requirements based on the Lesson Menu.

  if (lesson == 0) requirements.innerHTML = 'This verb lesson requires the vocabulary up to Lesson 14.';
  else if (lesson == 1) requirements.innerHTML = 'This verb lesson requires the vocabulary up to Lesson 17.';
  else if (lesson == 2) requirements.innerHTML = 'This verb lesson requires the vocabulary up to Lesson 18.';
  else if (lesson == 3)requirements.innerHTML = 'This verb lesson requires the vocabulary up to Lesson 19.';

  urlViewMenu = false;

  setView();

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
var translationBracket;

function pickQuestion() {
  stopScore = false;
  lastOne = false;
  updateNext = true;
  next.disabled = true;

  if (questions.length == 1) lastOne = true;

  var n = Math.floor(Math.random() * questions.length);

  if (verbMenu.selectedIndex == 0) {
    newQuestion = questions[n];
    newAnswer = allDicts[lesson][questions[n]][0];
    translationBracket = '(' + allDicts[lesson][questions[n]][1] + ')';
    translation.innerHTML = '_'.repeat(newAnswer.length) + ' ' + translationBracket;
  } else {
    newQuestion = allDicts[lesson][questions[n]][0] + ' (' + allDicts[lesson][questions[n]][1] + ')';
    newAnswer = questions[n].substring(0, questions[n].indexOf(' ('));
    translationBracket = questions[n].substring(questions[n].indexOf('('));
    translation.innerHTML = '_'.repeat(newAnswer.length) + ' ' + translationBracket;
  }

  if (viewMenu.selectedIndex == 0) question.innerHTML = newQuestion;
  else question.innerHTML = toRomaji(newQuestion);
  
  giveUp.disabled = false;
  input.disabled = false;
  input.value = '';
  input.style.color = 'black';
  input.focus();

  questions.splice(n, 1);
  amIRight.innerHTML = '';
}

function checkSoFar() {
  var autoChanges = [['あるばいと','アルバイト'],['すぽーつ','スポーツ'],['-','ー']];

  if (formConvert.checked) {
    input.value = toHiragana(input.value);
    for (var i = 0; i < autoChanges.length; i++) {
      if (input.value.includes(autoChanges[i][0])) input.value = input.value.replace(autoChanges[i][0],autoChanges[i][1]);
    }
  }

  var isCorrect = false;

  var noSpaceAnswer = newAnswer.replace(/\s/g, '');
  var possibleAnswers = [noSpaceAnswer, noSpaceAnswer.replace('ー',''), toRomaji(noSpaceAnswer), toRomaji(noSpaceAnswer.replace('ー',''))];

  if (possibleAnswers.indexOf(input.value.replace(/\s/g, '')) != -1) isCorrect = true;
  else if (possibleAnswers.indexOf(toRomaji(input.value).replace(/\s/g, '')) != -1) isCorrect = true;

  if (isCorrect) {
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
  if (viewMenu.selectedIndex == 0) wrongQuestions.push(newQuestion);
  else wrongQuestions.push(newAnswer + ' ' + translation.innerHTML);
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