const firstBtn = document.querySelector('.btn-1');
const secondBtn = document.querySelector('.btn-2');
const thirdBtn = document.querySelector('.btn-3');

function Food(name, price) {
  this.name = name;
  this.price = price;
}

const pizza = new Food('Pizza', 30);
const burger = new Food('Burger', 25);
const spaghetti = new Food('Spaghetti', 20);

Food.prototype.showInfo = function () {
  console.log(`${this.name} kosztuje ${this.price} zł.`);
};

firstBtn.addEventListener('click', () => pizza.showInfo());
secondBtn.addEventListener('click', () => burger.showInfo());
thirdBtn.addEventListener('click', () => spaghetti.showInfo());
