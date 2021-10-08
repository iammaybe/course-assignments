'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const displayMessage = function (element, message) {
  document.querySelector(element).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('.message', 'No Number!');
  } else if (guess === secretNumber) {
    displayMessage('.number', secretNumber);
    displayMessage('.message', 'Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayMessage('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        '.message',
        guess > secretNumber ? 'Too high!' : 'Too Low!'
      );
      displayMessage('.score', score--);
    } else {
      displayMessage('.message', 'You lost the game!');
      document.querySelector('.message').style.color = 'red';
      displayMessage('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('.message', 'Start guessing...');
  displayMessage('.number', '?');
  displayMessage('.score', score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').value = '15rem';
  document.querySelector('.message').style.color = 'white';
});
