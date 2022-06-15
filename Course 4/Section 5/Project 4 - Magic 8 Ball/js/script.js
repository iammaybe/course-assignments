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

const generateAnswer = () => {
  const number = Math.floor(Math.random() * answersArr.length);
  answer.innerHTML = `<span>Odpowiedź</span>: ${answersArr[number]}`;
};

ball.addEventListener('click', generateAnswer);
