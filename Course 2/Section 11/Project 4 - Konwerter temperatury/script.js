const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

const celToFahr = () => {
  const fahrenheit = converter.value * 1.8 + 32;
  result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
  converter.value = '';
};

const fahrToCel = () => {
  const celcius = (converter.value - 32) / 1.8;
  result.textContent = `${converter.value}°F to ${celcius.toFixed(1)}°C`;
  converter.value = '';
};

const conversion = () => {
  if (converter.value !== '') {
    one.textContent === '°C' ? celToFahr() : fahrToCel();
  } else {
    result.textContent = 'Musisz wpisać jakąś wartość!';
  }
};

const reset = () => {
  converter.value = '';
  result.textContent = '';
};

const swap = () => {
  if (one.textContent === '°C') {
    one.textContent = '°F';
    two.textContent = '°C';
  } else {
    one.textContent = '°C';
    two.textContent = '°F';
  }
  result.textContent = '';
};

convBtn.addEventListener('click', conversion);
resetBtn.addEventListener('click', reset);
changeBtn.addEventListener('click', swap);
