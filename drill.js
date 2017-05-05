// var instructions = ['Select the correct pronunciation of the character above.', 'Select the correct translation of the word above.']


function setView() {
  var view = document.getElementById('ViewMenu').selectedIndex;
  if (view == 0) document.getElementById('Question').innerHTML = toKana(document.getElementById('Question').innerHTML);
  else document.getElementById('Question').innerHTML = toRomaji(document.getElementById('Question').innerHTML);
}

var lesson = 0;
var allDicts = [hiraganaDict, katakanaDict, extraKatakanaDict, dict1, dict2, dict3, dict4, dict5, dict6, dict7, dict8, dict9, dict10, dict11, dict12, dict13, dict14, dict15, dict16, dict17, dict18, dict19];

function setLesson() {
  lesson = document.getElementById('LessonMenu').selectedIndex;
  numLeft = Object.keys(allDicts[lesson]).length;
  fillArray(allDicts[lesson], questions);
  fillArray(allDicts[lesson], allQuestions);

  if (lesson < 3) {
    document.getElementById('ViewMenu').selectedIndex = 0;
    document.getElementById('Romaji').disabled = true;
    document.getElementById('Instructions').innerHTML = 'Select the correct pronunciation of the character above.';
  } else if (lesson < 8) {
    document.getElementById('ViewMenu').selectedIndex = 1;
    document.getElementById('Romaji').disabled = false;
    document.getElementById('Instructions').innerHTML = 'Select the correct translation of the word above.';
  } else {
    document.getElementById('ViewMenu').selectedIndex = 0;
    document.getElementById('Romaji').disabled = false;
    document.getElementById('Instructions').innerHTML = 'Select the correct translation of the word above.';
  }

  setView();

  document.getElementById('Next').disabled = false;

  disableOptions(true);

  document.getElementById('AmIRight').innerHTML = '';

  pickQuestion();

  score = 0;
  numQuestions = 0;
  document.getElementById('Score').innerHTML = 'Score: 0 out of 0' + ' (' + numLeft.toString() +' Remaining)';
}

function disableOptions(bool) {
  for (var i = 0; i < options.length; i++) {
    options[i].disabled = bool;
  }
}

var lastOne = false;

function pickQuestion() {
  document.getElementById('Next').disabled = true;
  disableOptions(false);

  for (var i = 0; i < options.length; i++) {
    options[i].className = 'answer';
  }

  if (questions.length == 1) lastOne = true;
  var n = Math.floor(Math.random() * questions.length);  
  
  if (document.getElementById('ViewMenu').selectedIndex == 0) document.getElementById('Question').innerHTML = questions[n];
  else document.getElementById('Question').innerHTML = toRomaji(questions[n]);
  displayAnswers(questions[n]);
  questions.splice(n, 1);
  document.getElementById('AmIRight').innerHTML = '';
}

function displayAnswers(answer) {
  var dictionaryLength = Object.keys(allDicts[lesson]).length;

  // picks two different random indices that don't match answer's index

  var randomAnswer = allQuestions[Math.floor(Math.random() * dictionaryLength)];
  var randomAnswer2 = allQuestions[Math.floor(Math.random() * dictionaryLength)];

  while (answer == randomAnswer)
    randomAnswer = allQuestions[Math.floor(Math.random() * dictionaryLength)];

  while (randomAnswer2 == answer || randomAnswer2 == randomAnswer)
    randomAnswer2 = allQuestions[Math.floor(Math.random() * dictionaryLength)];

  // puts the answers in order based on index

  var answers = [answer, randomAnswer, randomAnswer2];

  answers.sort();

  // displays the answers, in order, on the option buttons

  for (var i = 0; i < options.length; i++) {
    options[i].innerHTML = allDicts[lesson][answers[i]];
  }

  // once an option is clicked, displays whether it is correct or incorrect

  options[0].onclick = function() { checkAnswer(answer, answers[0], 'Option1') };
  options[1].onclick = function() { checkAnswer(answer, answers[1], 'Option2') };
  options[2].onclick = function() { checkAnswer(answer, answers[2], 'Option3') };
}

var score = 0;
var numQuestions = 0;
var numLeft = Object.keys(hiraganaDict).length;
var stopScore = false;

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
    document.getElementById('Next').disabled = false;
    disableOptions(true);
    document.getElementById(option).className = 'correctanswer';
      document.getElementById('Score').innerHTML = 'Score: ' + score.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
    // audio = new Audio(correct + '.mp3');
    // audio.play();
    if (lastOne == true) {      
      document.getElementById('Instructions').innerHTML = 'Done!'
      document.getElementById('Next').disabled = true;
      lastOne = false;
    }
  } else {
    if (stopScore == false) numQuestions++;
    stopScore = true;
    document.getElementById(option).className = 'incorrectanswer';
    document.getElementById('Score').innerHTML = 'Score: ' + score.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
  }
}

function restart() {
  score = 0;
  numQuestions = 0;  
  setLesson(lesson);
  document.getElementById('Score').innerHTML = 'Score: 0 out of 0' + ' (' + numLeft.toString() +' Remaining)';
}