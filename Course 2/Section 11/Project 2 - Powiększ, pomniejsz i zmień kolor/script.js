const btnSizeUp = document.querySelector('.sizeUp');
const btnSizeDown = document.querySelector('.sizeDown');
const btnColor = document.querySelector('.color');
const text = document.querySelector('p');
let fontSize = 36;
const minFontSize = 21;

const sizeUp = () => {
  fontSize += 5;
  text.style.fontSize = `${fontSize}px`;
};

const sizeDown = () => {
  if (fontSize <= minFontSize) return;
  fontSize -= 5;
  text.style.fontSize = `${fontSize}px`;
};

const randomNumber = () => {
  return Math.floor(Math.random() * 256);
};

const changeColor = () => {
  let r = randomNumber();
  let g = randomNumber();
  let b = randomNumber();
  text.style.color = `rgb(${r},${g},${b})`;
};

btnSizeUp.addEventListener('click', sizeUp);
btnSizeDown.addEventListener('click', sizeDown);
btnColor.addEventListener('click', changeColor);
