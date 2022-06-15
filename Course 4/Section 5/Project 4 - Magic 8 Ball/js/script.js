const ball = document.querySelector('.ball-img');
const input = document.querySelector('.text');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const answersArr = [
  'Tak!',
  'Nie.',
  'Ciężko powiedzieć...',
  'Nie chcesz znać odpowiedzi na to pytanie... :/',
];

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
};

const generateAnswer = () => {
  const number = Math.floor(Math.random() * answersArr.length);
  answer.innerHTML = `<span>Odpowiedź</span>: ${answersArr[number]}`;
};

ball.addEventListener('click', checkInput);
