// var instructions = ['Select the correct pronunciation of the character above.', 'Select the correct translation of the word above.']


function setView() {
  var view = document.getElementById('ViewMenu').selectedIndex;
  if (view == 0) document.getElementById('Question').innerHTML = toKana(document.getElementById('Question').innerHTML);
  else document.getElementById('Question').innerHTML = toRomaji(document.getElementById('Question').innerHTML);
}

var lesson = 0;
var allDicts = [hiraganaDict, katakanaDict, extraKatakanaDict, dict1, dict2, dict3, dict4, dict5, dict6, dict7, dict8, dict9, dict10, dict11, dict12, dict13, dict14, dict14_te, dict15, dict16, dict17, dict17_nai, dict18, dict18_dict, dict19, dict19_ta];

function setLesson() {
  lesson = document.getElementById('LessonMenu').selectedIndex;
  numLeft = Object.keys(allDicts[lesson]).length;
  fillArray(allDicts[lesson], questions);
  fillArray(allDicts[lesson], allQuestions);
 
  document.getElementById('ViewMenu').style.display = 'inline-block';
  document.getElementById('Form').style.display = 'none';
  document.getElementById('Translation').style.display = 'none';
  document.getElementById('GiveUp').style.display = 'none';
  changeBreaks(0);
  hideOptions(false);
  
  if (lesson < 3) {
    document.getElementById('ViewMenu').selectedIndex = 0;
    document.getElementById('Romaji').disabled = true;
    document.getElementById('Instructions').innerHTML = 'Select the correct pronunciation of the character below.';
  } else if (lesson < 8) {
    document.getElementById('ViewMenu').selectedIndex = 1;
    document.getElementById('Romaji').disabled = false;
    document.getElementById('Instructions').innerHTML = 'Select the correct translation of the word below.';
  } else if (lesson == 17 || lesson == 21 || lesson == 23 || lesson == 25) {
    document.getElementById('ViewMenu').style.display = 'none';
    document.getElementById('Form').style.display = 'initial';
    document.getElementById('Translation').style.display = 'inline-block';
    document.getElementById('GiveUp').style.display = 'initial';
    document.getElementById('Input').value = '';
    changeBreaks(1);
    hideOptions(true);
    if (lesson == 17) document.getElementById('Instructions').innerHTML = 'Type the correct te form of the verb below.';
    else if (lesson == 21) document.getElementById('Instructions').innerHTML = 'Type the correct nai form of the verb below.';
    else if (lesson == 23) document.getElementById('Instructions').innerHTML = 'Type the correct dictionary form of the verb below.';
    else document.getElementById('Instructions').innerHTML = 'Type the correct ta form of the verb below.';
  } else {
    document.getElementById('ViewMenu').selectedIndex = 0;
    document.getElementById('Romaji').disabled = false;
    document.getElementById('Instructions').innerHTML = 'Select the correct translation of the word below.';
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

function hideOptions(bool) {
  for (var i = 0; i < options.length; i++) {
    if (bool) options[i].style.display = 'none';
    else options[i].style.display = 'initial';
  }
}

function changeBreaks(mode) {
  if (mode == 0) {
    document.getElementById('Break1').style.display = 'none';
    document.getElementById('Break2').style.display = 'none';
    document.getElementById('Break3').style.display = 'initial';
    document.getElementById('Break4').style.display = 'none';
  } else {
    document.getElementById('Break1').style.display = 'initial';
    document.getElementById('Break2').style.display = 'initial';
    document.getElementById('Break3').style.display = 'none';
    document.getElementById('Break4').style.display = 'initial';
  }
}

var lastOne = false;
var answer;

function pickQuestion() {
  stopScore = false;
  lastOne = false;
  updateNext = true;
  document.getElementById('Next').disabled = true;
  disableOptions(false);

  for (var i = 0; i < options.length; i++) {
    options[i].className = 'answer';
  }

  if (questions.length == 1) lastOne = true;
  var n = Math.floor(Math.random() * questions.length);
  
  if (document.getElementById('ViewMenu').selectedIndex == 0) document.getElementById('Question').innerHTML = questions[n];
  else document.getElementById('Question').innerHTML = toRomaji(questions[n]);
  if (lesson == 17 || lesson == 21 || lesson == 23 || lesson == 25) {
    document.getElementById('GiveUp').disabled = false;
    document.getElementById('Input').disabled = false;
    document.getElementById('Input').value = '';
    document.getElementById('Input').style.color = 'black';
    document.getElementById('Translation').innerHTML = allDicts[document.getElementById('LessonMenu').selectedIndex][questions[n]][1];
    answer = allDicts[document.getElementById('LessonMenu').selectedIndex][questions[n]][0];
  } else displayAnswers(questions[n]);
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
var audio;
var audioExists = true;
var updateNext = true;

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
    document.getElementById(option).className = 'correctanswer';
    document.getElementById('Score').innerHTML = 'Score: ' + score.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
    audio = new Audio('Audio/' + toRomaji(correct) + '.mp3');
    audio.play()
    audio.onerror = function() {
      audioExists = false;
      if (updateNext) enableNext();
      audioExists = true;
    }
    if (updateNext) {
      enableNext();
    }
    if (lastOne) {
      document.getElementById('AmIRight').innerHTML = 'Correct! Lesson finished.'
      document.getElementById('Next').disabled = true;
      updateNext = false;
      lastOne = false;
    }
  } else {
    if (stopScore == false) numQuestions++;
    stopScore = true;
    document.getElementById(option).className = 'incorrectanswer';
    document.getElementById('Score').innerHTML = 'Score: ' + score.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
  }
}


function checkSoFar() {
  var inputSoFar = document.getElementById('Input').value;
  document.getElementById('Input').value = toHiragana(inputSoFar);
  if (answer == document.getElementById('Input').value) {
    document.getElementById('Input').style.color = 'green';
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
      document.getElementById('AmIRight').innerHTML = 'Correct! Lesson finished.'
      document.getElementById('Next').disabled = true;
    }
  } 
}

function stopQuestion() {
  document.getElementById('Input').style.color = 'blue';
  document.getElementById('Input').value = answer;
  document.getElementById('Input').disabled = true;
  document.getElementById('AmIRight').innerHTML = 'You gave up on this one.';
  numLeft--;
  numQuestions++;
  document.getElementById('Score').innerHTML = 'Score: ' + score.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
  document.getElementById('GiveUp').disabled = true;
  if (!lastOne) document.getElementById('Next').disabled = false;
  if (lastOne) {
    document.getElementById('AmIRight').innerHTML = 'Correct! Lesson finished.'
    document.getElementById('Next').disabled = true;
  }
}

function enableNext() {
  if (audioExists) {
    audio.onended = function() {
      document.getElementById('Next').disabled = false;
    }
  } else document.getElementById('Next').disabled = false;
  audioExists = true;
}

function restart() {
  score = 0;
  numQuestions = 0;
  setLesson(lesson);
  document.getElementById('Score').innerHTML = 'Score: 0 out of 0' + ' (' + numLeft.toString() +' Remaining)';
}