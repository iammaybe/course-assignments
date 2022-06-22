const ball = document.querySelector('.ball-img');
const input = document.querySelector('.text');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const answers = [
  'Tak!',
  'Nie.',
  'Ciężko powiedzieć...',
  'Nie chcesz znać odpowiedzi na to pytanie... :/',
];

const shakeBall = () => {
  ball.classList.add('shake-animation');
  // SOLUTION 1 (setTimeout):
  // setTimeout(checkInput, 1000);

  // SOLUTION 2 (animationend):
  ball.addEventListener('animationend', checkInput);
};

const checkInput = () => {
  if (input.value !== '' && input.value.slice(-1) === '?') {
    generateAnswer();
    error.textContent = '';
  } else if (input.value !== '' && input.value.slice(-1) !== '?') {
    error.textContent = 'Pytanie musi być zakończone znakiem "?".';
    answer.textContent = '';
  } else {
    error.textContent = 'Musisz zadać jakieś pytanie!';
    answer.textContent = '';
  }
  ball.classList.remove('shake-animation');
};

const generateAnswer = () => {
  const number = Math.floor(Math.random() * answers.length);
  answer.innerHTML = `<span>Odpowiedź</span>: ${answers[number]}`;
};

ball.addEventListener('click', shakeBall);
