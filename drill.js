var currentMode = 0;
var viewMode = 0;
var currentScore = 0;
var numQuestions = 0;
var numLeft = Object.keys(hiraganaDict).length;

// var instructions = ['Select the correct pronunciation of the character above.', 'Select the correct translation of the word above.']


function getView() {
  setView(document.getElementById('ViewMode').selectedIndex);
}
function setView(int) {
  viewMode = int;
  if (int == 0) document.getElementById('CharacterSpace').innerHTML = toKana(document.getElementById('CharacterSpace').innerHTML);
  else document.getElementById('CharacterSpace').innerHTML = toRomaji(document.getElementById('CharacterSpace').innerHTML);
}

function getMode() {
  setMode(document.getElementById('LessonMenu').selectedIndex);
}

function setMode(int) {
  currentMode = int;
  var allDicts = [hiraganaDict, katakanaDict, extraKatakanaDict, dict1, dict2, dict3, dict4, dict5, dict6, dict7, dict8, dict9, dict10, dict11, dict12];
  numLeft = Object.keys(allDicts[int]).length;
  fillArray(allDicts[int], questions);
  fillArray(allDicts[int], allQuestions);

  if (int < 3) {
    setView(0);
    document.getElementById('ViewMode').selectedIndex = 0;
    document.getElementById('Romaji').disabled = true;
    document.getElementById('Instructions').innerHTML = 'Select the correct pronunciation of the character above.';
  } else if (int < 8) {
    document.getElementById('ViewMode').selectedIndex = 1;
    document.getElementById('Romaji').disabled = false;
    document.getElementById('Instructions').innerHTML = 'Select the correct translation of the word above.';
  } else {
    document.getElementById('ViewMode').selectedIndex = 0;
    document.getElementById('Romaji').disabled = false;
    document.getElementById('Instructions').innerHTML = 'Select the correct translation of the word above.';
  }

  getView();

  document.getElementById('Next').disabled = false;

  disableOptions(true);

  document.getElementById('AmIRight').innerHTML = '';
  document.getElementById('CharacterSpace').innerHTML = '';
  document.getElementById('OptionOne').innerHTML = '';
  document.getElementById('OptionTwo').innerHTML = '';
  document.getElementById('OptionThree').innerHTML = '';

  pickCharacter();

  currentScore = 0;
  numQuestions = 0;
  document.getElementById('Score').innerHTML = 'Score: 0 out of 0' + ' (' + numLeft.toString() +' Remaining)';

}

function disableOptions(bool) {
  var options = [
    document.getElementById('OptionOne'),
    document.getElementById('OptionTwo'),
    document.getElementById('OptionThree')
  ];

  for (var i = 0; i < options.length; i++) {
    options[i].disabled = bool;
  }
}

var lastOne = false;

function pickCharacter() {
  document.getElementById('Next').disabled = true;
  disableOptions(false);
  document.getElementById('OptionOne').className = "answerbutton";
  document.getElementById('OptionTwo').className = "answerbutton";
  document.getElementById('OptionThree').className = "answerbutton";

  var allDicts = [hiraganaDict, katakanaDict, extraKatakanaDict, dict1, dict2, dict3, dict4, dict5, dict6, dict7, dict8, dict9, dict10, dict11, dict12];
  var dictionary = allDicts[currentMode];
  var characters = questions;

  if (characters.length == 1) lastOne = true;
  var n = Math.floor(Math.random() * characters.length);  
  
  if (viewMode == 0) document.getElementById('CharacterSpace').innerHTML = characters[n];
  else document.getElementById('CharacterSpace').innerHTML = toRomaji(characters[n]);
  displayKana(characters[n]);
  characters.splice(n, 1);
  document.getElementById('AmIRight').innerHTML = '';
}

function displayKana(character) {
  var allDicts = [hiraganaDict, katakanaDict, extraKatakanaDict, dict1, dict2, dict3, dict4, dict5, dict6, dict7, dict8, dict9, dict10, dict11, dict12];
  var dictionary = allDicts[currentMode];
  var characters = allQuestions;

  var dictionaryLength = Object.keys(dictionary).length;

  // picks two different random indices that don't match character's index

  var randomCharacter = characters[Math.floor(Math.random() * dictionaryLength)];
  var randomCharacter2 = characters[Math.floor(Math.random() * dictionaryLength)];

  while (character == randomCharacter)
    randomCharacter = characters[Math.floor(Math.random() * dictionaryLength)];

  while (randomCharacter2 == character || randomCharacter2 == randomCharacter)
    randomCharacter2 = characters[Math.floor(Math.random() * dictionaryLength)];

  // puts the answers in order based on index

  var answers = [character, randomCharacter, randomCharacter2];

  answers.sort();

  // displays the answers, in order, on the option buttons

  var options = [
    document.getElementById('OptionOne'),
    document.getElementById('OptionTwo'),
    document.getElementById('OptionThree')
  ];

  for (var i = 0; i < options.length; i++) {
    options[i].innerHTML = dictionary[answers[i]];
  }

  // once an option is clicked, displays whether it is correct or incorrect

  options[0].onclick = function() { checkAnswer(character, answers[0], 'OptionOne') };
  options[1].onclick = function() { checkAnswer(character, answers[1], 'OptionTwo') };
  options[2].onclick = function() { checkAnswer(character, answers[2], 'OptionThree') };
}

var stopScore = false;

function checkAnswer(correct, answer, option) {
  document.getElementById('AmIRight').innerHTML = ((correct == answer) ? 'Correct!' : 'Incorrect.');
  if (correct == answer) {
    numLeft--;
    if (stopScore == false) {
      currentScore++;
      numQuestions++;
      document.getElementById('Score').innerHTML = 'Score: ' + currentScore.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
    }
    stopScore = false;
    document.getElementById('Next').disabled = false;
    disableOptions(true);
    document.getElementById(option).className = "correctanswer";
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
    document.getElementById(option).className = "incorrectanswer";
    document.getElementById('Score').innerHTML = 'Score: ' + currentScore.toString() + ' out of ' + numQuestions.toString() + ' (' + numLeft.toString() +' Remaining)';
  }
}

function restart() {
  currentScore = 0;
  numQuestions = 0;  
  setMode(currentMode);
  document.getElementById('Score').innerHTML = 'Score: 0 out of 0' + ' (' + numLeft.toString() +' Remaining)';
}