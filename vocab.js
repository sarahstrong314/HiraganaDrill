function setView() {
  if (document.getElementById('ViewMenu').selectedIndex == 0) {
    document.getElementById('Question').innerHTML = toKana(document.getElementById('Question').innerHTML);
    for (var i = 0; i < options.length; i++) {
     options[i].innerHTML = toKana(options[i].innerHTML);
    }
  } else {
    document.getElementById('Question').innerHTML = toRomaji(document.getElementById('Question').innerHTML);
    for (var i = 0; i < options.length; i++) {
      options[i].innerHTML = toRomaji(options[i].innerHTML);
    }
  }
}

var lesson;
var allDicts = [dict1, dict2, dict3, dict4, dict5, dict6, dict7, dict8, dict9, dict10, dict11, dict12, dict13, dict14, dict15, dict16, dict17, dict18, dict19];
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

  window.history.pushState({}, '',  'vocab.html?' + document.getElementById('LessonMenu').value.toLowerCase().replace(' ',''));

  lesson = document.getElementById('LessonMenu').selectedIndex;
  
  if (review) {
    questions = wrongQuestions;
    review = false;
  } else fillArray(allDicts[lesson], questions);

  wrongQuestions = [];
  fillArray(allDicts[lesson], allQuestions);
  numLeft = questions.length;

  var lang = document.getElementById('LangMenu').selectedIndex;
 
  document.getElementById('ViewMenu').style.display = 'flex';
  document.getElementById('LangMenu').style.display = 'flex';
  document.getElementById('Next').style.display = 'initial';
  document.getElementById('Review').style.display = 'none';

  if (lesson < 8 && !urlViewMenu) document.getElementById('ViewMenu').selectedIndex = 1;
  else if (!urlViewMenu) document.getElementById('ViewMenu').selectedIndex = 0;
  urlViewMenu = false;
  
  document.getElementById('Instructions').innerHTML = 'Select the correct translation of this word.';

  setView();

  document.getElementById('Next').disabled = false;

  disableOptions(true);

  document.getElementById('AmIRight').innerHTML = '';
  document.getElementById('Score').innerHTML = 'Score: 0 out of 0' + ' (' + numLeft.toString() +' Remaining)';
  score = 0;
  numQuestions = 0;
  
  pickQuestion();
}

function disableOptions(bool) {
  for (var i = 0; i < options.length; i++) {
    options[i].disabled = bool;
  }
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
  disableOptions(false);

  for (var i = 0; i < options.length; i++) {
    options[i].style.backgroundColor = 'gray';
  }

  if (questions.length == 1) lastOne = true;

  var n = Math.floor(Math.random() * questions.length);

  if (document.getElementById('LangMenu').selectedIndex == 0) {
    newQuestion = questions[n];
    newAnswer = allDicts[lesson][questions[n]];
  } else {
    newQuestion = allDicts[lesson][questions[n]];
    newAnswer = questions[n];
  }

  if (document.getElementById('ViewMenu').selectedIndex == 0) document.getElementById('Question').innerHTML = newQuestion;
  else document.getElementById('Question').innerHTML = toRomaji(newQuestion);
  
  displayAnswers();

  questions.splice(n, 1);
  document.getElementById('AmIRight').innerHTML = '';
}

var answers;

function displayAnswers() {
  var dictionaryLength = Object.keys(allDicts[lesson]).length;

  var randomAnswer;
  var randomAnswer2;

  // picks two different random indices that don't match answer's index
  
  if (document.getElementById('LangMenu').selectedIndex == 0) {
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

  if (document.getElementById('LangMenu').selectedIndex == 0) {
    audio = new Audio('Audio/' + toRomaji(newQuestion) + '.mp3');
    audio.play();
  }

  // displays the answers, in order, on the option buttons

  if (document.getElementById('ViewMenu').selectedIndex == 0) {
    for (var i = 0; i < options.length; i++) {
      options[i].innerHTML = answers[i];
    }
  } else {
    for (var i = 0; i < options.length; i++) {
      options[i].innerHTML = toRomaji(answers[i]);
    }
  }

  // once an option is clicked, displays whether it is correct or incorrect

  options[0].onclick = function() { checkAnswer(newAnswer, answers[0], 'Option1') };
  options[1].onclick = function() { checkAnswer(newAnswer, answers[1], 'Option2') };
  options[2].onclick = function() { checkAnswer(newAnswer, answers[2], 'Option3') };
}

var stopScore = false;
var audio;

function checkAnswer(correct, answer, option) {
  document.getElementById('AmIRight').innerHTML = ((correct == answer) ? 'Correct!' : 'Incorrect.');
  if (correct == answer) {
    numLeft--;
    if (stopScore == false) {
      score++;
      numQuestions++;
      document.getElementById('Score').innerHTML = 'Score: ' + score.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
    }
    stopScore = false;
    disableOptions(true);
    document.getElementById(option).style.backgroundColor = 'green';
    document.getElementById('Score').innerHTML = 'Score: ' + score.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
    
    // plays the audio, if:
    // 1. Eng-to-Jap mode and in Lesson 1 or Higher
    // 2. Jap-to-Eng and in Hiragana/Katakana/Extra

    if (document.getElementById('LangMenu').selectedIndex == 1) {
      audio = new Audio('Audio/' + toRomaji(correct) + '.mp3');
      audio.play();
    } 

    if (!lastOne) document.getElementById('Next').disabled = false;

    if (lastOne) {
      document.getElementById('AmIRight').innerHTML = 'Correct! Lesson finished.';      
      document.getElementById('Next').style.display = 'none';
      if (wrongQuestions.length != 0) document.getElementById('Review').style.display = 'initial';
      updateNext = false;
      lastOne = false;
    }
  } else {
    if (wrongQuestions.indexOf(newQuestion) == -1) {
      if (document.getElementById('LangMenu').selectedIndex == 0) wrongQuestions.push(newQuestion);
      else wrongQuestions.push(newAnswer);
    }
    if (stopScore == false) numQuestions++;
    stopScore = true;
    document.getElementById(option).style.backgroundColor = 'red';
    document.getElementById('Score').innerHTML = 'Score: ' + score.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
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