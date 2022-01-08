const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const square = document.querySelector('.square');

const printHello = () => console.log('cześć');
const redSquare = () => {
  square.style.backgroundColor = 'red';
};
const blueSquare = () => {
  square.style.backgroundColor = 'blue';
};
const toggleText = () => {
  p1.classList.toggle('show');
  p2.classList.toggle('show');
};

btn1.addEventListener('dblclick', printHello);
btn2.addEventListener('click', toggleText);
square.addEventListener('mouseover', redSquare);
square.addEventListener('mouseout', blueSquare);
