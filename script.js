'use strict';

const check = document.querySelector('.btn.check');
const message = document.querySelector('.message');
const showAnswer = document.querySelector('.number');
const gameScore = document.querySelector('.score');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const highScore = document.querySelector('.highscore');

let score = 20;
let highscore = 0;
let randomNumber;

const secretNumber = function () {
  const secretNumber = Math.floor(Math.random() * 20) + 1;
  return secretNumber;
};

randomNumber = secretNumber();
console.log(randomNumber);

check.addEventListener('click', function () {
  const guess = parseInt(document.querySelector('.guess').value);

  if (!guess) {
    message.innerText = 'No number! ❌';
  } else if (guess > 20) {
    message.textContent = 'Invalid game Input ❌';
  } else if (guess === randomNumber) {
    if (score > highscore) {
      highscore = score;
    }
    highScore.textContent = highscore;
    message.textContent = '🏆 Correct Number!';
    showAnswer.textContent = randomNumber;
    body.style.backgroundColor = '#60b347';
    showAnswer.style.width = '30rem';
  } else if (guess > randomNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high';
      score--;
      gameScore.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      gameScore.textContent = 0;
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low';
      score--;
      gameScore.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      gameScore.textContent = 0;
    }
  }
});

again.addEventListener('click', function () {
  score = 20;
  highscore = 0;
  randomNumber = secretNumber();
  console.log(randomNumber);
  const guess = document.querySelector('.guess');
  body.style.backgroundColor = 'black';
  gameScore.textContent = score;
  message.textContent = 'Start guessing...';
  showAnswer.style.width = '15rem';
  showAnswer.textContent = '?';
  guess.value = '';
});
