const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const countBtn = document.querySelector('.count');
const error = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const checkForm = () => {
  if (price.value == '' || people.value == '' || tip.value == 0) {
    error.textContent = 'Uzupełnij wszystkie pola!';
    costInfo.style.display = 'none';
  } else {
    error.textContent = '';
    // countBill();
    // countBill2();
    // countBill3();
    // countBill4();
    countBill5();
  }
};

// SOLUTION 1 (parseFloat & parseInt):
// const countBill = () => {
//   const newPrice = parseFloat(price.value);
//   const newPeople = parseInt(people.value);
//   const newTip = parseFloat(tip.value);
//   const sum = (newPrice + newPrice * newTip) / newPeople;
//   costInfo.style.display = 'block';
//   cost.textContent = sum.toFixed(2);
// };

// SOLUTION 2 (*1):
// const countBill2 = () => {
//   const newPrice = price.value * 1;
//   const newPeople = people.value * 1;
//   const newTip = tip.value * 1;
//   const sum = (newPrice + newPrice * newTip) / newPeople;
//   costInfo.style.display = 'block';
//   cost.textContent = sum.toFixed(2);
// };

// SOLUTION 3 (Number):
// const countBill3 = () => {
//   const newPrice = Number(price.value);
//   const newPeople = Number(people.value);
//   const newTip = Number(tip.value);
//   const sum = (newPrice + newPrice * newTip) / newPeople;
//   costInfo.style.display = 'block';
//   cost.textContent = sum.toFixed(2);
// };

// SOLUTION 4 (+):
// const countBill4 = () => {
//   const newPrice = +price.value;
//   const newPeople = +people.value;
//   const newTip = +tip.value;
//   const sum = (newPrice + newPrice * newTip) / newPeople;
//   costInfo.style.display = 'block';
//   cost.textContent = sum.toFixed(2);
// };

// SOLUTION 5 (valueAsNumber & +):
const countBill5 = () => {
  const newPrice = price.valueAsNumber;
  const newPeople = people.valueAsNumber;
  const newTip = +tip.value;
  const sum = (newPrice + newPrice * newTip) / newPeople;
  costInfo.style.display = 'block';
  cost.textContent = sum.toFixed(2);
};

countBtn.addEventListener('click', checkForm);
