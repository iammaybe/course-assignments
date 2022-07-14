const amountOne = document.querySelector('.amount-one');
const currencyOne = document.querySelector('#currency-one');
const amountTwo = document.querySelector('.amount-two');
const currencyTwo = document.querySelector('#currency-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {
  // const URL = `https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value})`; // NOTATION 1:
  const URL = `https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`; // NOTATION 2:

  fetch(URL)
    .then(res => res.json())
    .then(data => {
      // const rate = data.rates[currencyTwo.value]; // NOTATION 1
      const rate = data.result; // NOTATION 2

      amountTwo.value = (amountOne.value * rate).toFixed(2);
      rateInfo.textContent = `1 ${currencyOne.value} = ${rate.toFixed(4)} ${
        currencyTwo.value
      }`;
    });
};

const swapCurrency = () => {
  const oldValue = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = oldValue;
  calculate();
};

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
swapBtn.addEventListener('click', swapCurrency);
calculate();
