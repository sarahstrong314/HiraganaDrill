// var instructions = ['Select the correct pronunciation of the character above.', 'Select the correct translation of the word above.']


function setView() {
  var view = document.getElementById('ViewMenu').selectedIndex;
  if (view == 0) document.getElementById('Question').innerHTML = toKana(document.getElementById('Question').innerHTML);
  else document.getElementById('Question').innerHTML = toRomaji(document.getElementById('Question').innerHTML);
  
  if (document.getElementById('ViewMenu').selectedIndex == 0) {
    for (var i = 0; i < options.length; i++) {
     options[i].innerHTML = toKana(options[i].innerHTML);
    }
  } else {    
    for (var i = 0; i < options.length; i++) {
     options[i].innerHTML = toRomaji(options[i].innerHTML);
    }
  }
}

var lesson = 0;
var allDicts = [hiraganaDict, katakanaDict, extraKatakanaDict, dict1, dict2, dict3, dict4, dict5, dict6, dict7, dict8, dict9, dict10, dict11, dict12, dict13, dict14, dict14_te, dict15, dict16, dict17, dict17_nai, dict18, dict18_dict, dict19, dict19_ta];

function setLesson() {
  lesson = document.getElementById('LessonMenu').selectedIndex;
  numLeft = Object.keys(allDicts[lesson]).length;
  fillArray(allDicts[lesson], questions);
  fillArray(allDicts[lesson], allQuestions);

  var lang = document.getElementById('LangMenu').selectedIndex;
 
  document.getElementById('ViewMenu').style.display = 'flex';
   document.getElementById('LangMenu').style.display = 'flex'
  document.getElementById('Form').style.display = 'none';
  document.getElementById('Translation').style.display = 'none';
  document.getElementById('GiveUp').style.display = 'none';
  hideOptions(false);
  
  if (lesson < 3) {
    document.getElementById('ViewMenu').selectedIndex = 0;
    document.getElementById('Romaji').disabled = true;
    if (lang == 0) document.getElementById('Instructions').innerHTML = 'Select the correct pronunciation of this character.';
    else document.getElementById('Instructions').innerHTML = 'Select the correct character.';
  } else if (lesson < 8) {
    document.getElementById('ViewMenu').selectedIndex = 1;
    document.getElementById('Romaji').disabled = false;
    document.getElementById('Instructions').innerHTML = 'Select the correct translation of this word.';
  } else if (lesson == 17 || lesson == 21 || lesson == 23 || lesson == 25) {
    document.getElementById('ViewMenu').style.display = 'none';
    document.getElementById('LangMenu').style.display = 'none';
    document.getElementById('Form').style.display = 'initial';
    document.getElementById('Translation').style.display = 'inline-block';
    document.getElementById('GiveUp').style.display = 'initial';
    document.getElementById('Input').value = '';
    hideOptions(true);
    if (lesson == 17) document.getElementById('Instructions').innerHTML = 'Type the correct te form of the verb.';
    else if (lesson == 21) document.getElementById('Instructions').innerHTML = 'Type the correct nai form of the verb.';
    else if (lesson == 23) document.getElementById('Instructions').innerHTML = 'Type the correct dictionary form of the verb.';
    else document.getElementById('Instructions').innerHTML = 'Type the correct ta form of the verb.';
  } else {
    document.getElementById('ViewMenu').selectedIndex = 0;
    document.getElementById('Romaji').disabled = false;
    document.getElementById('Instructions').innerHTML = 'Select the correct translation of this word.';
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

var lastOne = false;

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

  var newQuestion;
  var newAnswer;

  if (document.getElementById('LangMenu').selectedIndex == 0) {
    newQuestion = questions[n];
    newAnswer = allDicts[lesson][questions[n]];
  }
  else {
    newAnswer = questions[n];
    newQuestion = allDicts[lesson][questions[n]];
  }
  
  if (document.getElementById('ViewMenu').selectedIndex == 0) document.getElementById('Question').innerHTML = newQuestion;
  else if (lesson == 17 || lesson == 21 || lesson == 23 || lesson == 25) document.getElementById('Question').innerHTML = newQuestion;
  else document.getElementById('Question').innerHTML = toRomaji(newQuestion);
  
  if (lesson == 17 || lesson == 21 || lesson == 23 || lesson == 25) {
    document.getElementById('GiveUp').disabled = false;
    document.getElementById('Input').disabled = false;
    document.getElementById('Input').value = '';
    document.getElementById('Input').style.color = 'black';
    document.getElementById('Translation').innerHTML = '(' + allDicts[lesson][questions[n]][1] + ')';
  } else displayAnswers(newAnswer);
  questions.splice(n, 1);
  document.getElementById('AmIRight').innerHTML = '';
}

function displayAnswers(answer) {
  var dictionaryLength = Object.keys(allDicts[lesson]).length;

  var randomAnswer;
  var randomAnswer2;

  // picks two different random indices that don't match answer's index
  
  if (document.getElementById('LangMenu').selectedIndex == 0) {
    randomAnswer = allDicts[lesson][allQuestions[Math.floor(Math.random() * dictionaryLength)]];
    randomAnswer2 = allDicts[lesson][allQuestions[Math.floor(Math.random() * dictionaryLength)]];

    while (answer == randomAnswer)
      randomAnswer = allDicts[lesson][allQuestions[Math.floor(Math.random() * dictionaryLength)]];

    while (randomAnswer2 == answer || randomAnswer2 == randomAnswer)
      randomAnswer2 = allDicts[lesson][allQuestions[Math.floor(Math.random() * dictionaryLength)]];
  
  } else {    
    randomAnswer = allQuestions[Math.floor(Math.random() * dictionaryLength)];
    randomAnswer2 = allQuestions[Math.floor(Math.random() * dictionaryLength)];

    while (answer == randomAnswer)
      randomAnswer = allQuestions[Math.floor(Math.random() * dictionaryLength)];

    while (randomAnswer2 == answer || randomAnswer2 == randomAnswer)
      randomAnswer2 = allQuestions[Math.floor(Math.random() * dictionaryLength)];
  }

  // puts the answers in order based on index

  var answers = [answer, randomAnswer, randomAnswer2];

  answers.sort();

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
    document.getElementById(option).style.backgroundColor = 'green';
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
    document.getElementById(option).style.backgroundColor = 'red';
    document.getElementById('Score').innerHTML = 'Score: ' + score.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
  }
}


var katakanaWord1 = 'アルバイト';

function checkSoFar() {
  var inputSoFar = document.getElementById('Input').value;
  document.getElementById('Input').value = toHiragana(inputSoFar);
  inputSoFar = document.getElementById('Input').value;
  if (inputSoFar.includes('あるばいと')) {
    console.log('yes')
    document.getElementById('Input').value = inputSoFar.replace('あるばいと','アルバイト');
  }
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