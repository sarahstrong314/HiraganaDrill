var lesson;
var allDicts = [hiraganaDict, katakanaDict, extraKatakanaDict];
var currScore = 0;
var numQuestions = 0;
var numLeft;
var doReview = false;

function setLesson() { 
  window.history.pushState({}, '',  'kana.html?' + lessonMenu[lessonMenu.selectedIndex].id.toLowerCase());

  lesson = lessonMenu.selectedIndex;
  
  if (doReview) {
    copyArray(wrongQuestions, questions);
    doReview = false;
  } else fillArray(allDicts[lesson], questions);

  wrongQuestions = [];
  fillArray(allDicts[lesson], allQuestions);
  numLeft = questions.length;

  var lang = langMenu.selectedIndex;

  next.style.display = 'inline-block';
  review.style.display = 'none';

  if (lang == 0) instructions.innerHTML = 'Select the correct pronunciation of this character.';
  else instructions.innerHTML = 'Select the correct character.';

  next.disabled = false;

  disableOptions(true);

  amIRight.innerHTML = '';

  pickQuestion();

  currScore = 0;
  numQuestions = 0;

  score.innerHTML = 'Score: 0 out of 0' + ' (' + numLeft.toString() +' Remaining)';
}

function disableOptions(bool) {
  for (var i = 0; i < options.length; i++) {
    options[i].disabled = bool;
  }
}

var lastOne = false;
var newAnswer;
var newQuestion;

function pickQuestion() {
  stopScore = false;
  lastOne = false;
  updateNext = true;
  next.disabled = true;
  disableOptions(false);

  for (var i = 0; i < options.length; i++) {
    options[i].style.backgroundColor = 'gray';
  }

  if (questions.length == 1) lastOne = true;

  var n = Math.floor(Math.random() * questions.length);

  if (langMenu.selectedIndex == 0) {
    newQuestion = questions[n];
    newAnswer = allDicts[lesson][questions[n]];
  } else {
    newQuestion = allDicts[lesson][questions[n]];
    newAnswer = questions[n];
  }

  question.innerHTML = newQuestion;
  displayAnswers();

  questions.splice(n, 1);
  amIRight.innerHTML = '';
}

var answers;

function displayAnswers() {
  var dictionaryLength = Object.keys(allDicts[lesson]).length;

  var randomAnswer;
  var randomAnswer2;

  // picks two different random indices that don't match answer's index
  
  if (langMenu.selectedIndex == 0) {
    randomAnswer = allDicts[lesson][allQuestions[Math.floor(Math.random() * dictionaryLength)]];
    randomAnswer2 = allDicts[lesson][allQuestions[Math.floor(Math.random() * dictionaryLength)]];

    while (newAnswer == randomAnswer)
      randomAnswer = allDicts[lesson][allQuestions[Math.floor(Math.random() * dictionaryLength)]];

    while (randomAnswer2 == newAnswer || randomAnswer2 == randomAnswer)
      randomAnswer2 = allDicts[lesson][allQuestions[Math.floor(Math.random() * dictionaryLength)]];
  
  } else {    
    randomAnswer = allQuestions[Math.floor(Math.random() * dictionaryLength)];
    randomAnswer2 = allQuestions[Math.floor(Math.random() * dictionaryLength)];

    while (newAnswer == randomAnswer)
      randomAnswer = allQuestions[Math.floor(Math.random() * dictionaryLength)];

    while (randomAnswer2 == newAnswer || randomAnswer2 == randomAnswer)
      randomAnswer2 = allQuestions[Math.floor(Math.random() * dictionaryLength)];
  }

  // puts the answers in order based on index

  answers = [newAnswer, randomAnswer, randomAnswer2];

  answers.sort();

  // plays the audio, if:
  // 1. Jap-to-Eng mode and in Lesson 1 or Higher
  // 2. Eng-to-Jap and in Hiragana/Katakana/Extra

  if (langMenu.selectedIndex == 1) {
    audio = new Audio('Audio/' + toRomaji(newQuestion) + '.mp3');
    audio.play();
  }

  // displays the answers, in order, on the option buttons


  for (var i = 0; i < options.length; i++) {
    options[i].innerHTML = answers[i];
  }

  // once an option is clicked, displays whether it is correct or incorrect

  options[0].onclick = function() { checkAnswer(newAnswer, answers[0], 'Option1') };
  options[1].onclick = function() { checkAnswer(newAnswer, answers[1], 'Option2') };
  options[2].onclick = function() { checkAnswer(newAnswer, answers[2], 'Option3') };
}

var stopScore = false;
var audio;
var playAudioNow = false;

function checkAnswer(correct, answer, option) {
  amIRight.innerHTML = ((correct == answer) ? 'Correct!' : 'Incorrect.');
  if (correct == answer) {
    numLeft--;
    if (stopScore == false) {
      currScore++;
      numQuestions++;
      score.innerHTML = 'Score: ' + currScore.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
    }
    stopScore = false;
    disableOptions(true);
    document.getElementById(option).style.backgroundColor = 'green';
    score.innerHTML = 'Score: ' + currScore.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
    
    // plays the audio, if:
    // 1. Eng-to-Jap mode and in Lesson 1 or Higher
    // 2. Jap-to-Eng and in Hiragana/Katakana/Extra

    if (langMenu.selectedIndex == 0) {
      audio = new Audio('Audio/' + toRomaji(correct) + '.mp3');
      audio.play();
    } 

    if (!lastOne) next.disabled = false;

    if (lastOne) {
      debugger;
      amIRight.innerHTML = 'Correct! Lesson finished.';      
      next.style.display = 'none';
      if (wrongQuestions.length != 0) review.style.display = 'inline-block';
      updateNext = false;
      lastOne = false;
    }
  } else {
    if (wrongQuestions.indexOf(newQuestion) == -1) {
      if (langMenu.selectedIndex == 0) wrongQuestions.push(newQuestion);
      else wrongQuestions.push(newAnswer);
    }
    if (stopScore == false) numQuestions++;
    stopScore = true;
    document.getElementById(option).style.backgroundColor = 'red';
    score.innerHTML = 'Score: ' + currScore.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
  }
}

function stopAudio() {
  if (typeof audio !== 'undefined') {
    audio.pause();
    audio.currentTime = 0;
  }
}

$(document).keypress(function (e) {
  var code = e.keyCode || e.which;
  if (code == 13 && !next.disabled) pickQuestion();
  else if (code === 49 && !option1.disabled) checkAnswer(newAnswer, answers[0], 'Option1');
  else if (code === 50 && !option2.disabled) checkAnswer(newAnswer, answers[1], 'Option2');
  else if (code === 51 && !option3.disabled) checkAnswer(newAnswer, answers[2], 'Option3');
});