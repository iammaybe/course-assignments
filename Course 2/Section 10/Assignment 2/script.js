const liItems = document.querySelectorAll('li');
let number = 1;

for (const liItem of liItems) {
  liItem.textContent = number;
  liItem.dataset.id = number;
  number++;
}

// for (let i = 0; i < liItems.length; i++) {
//   liItems[i].textContent = number;
//   liItems[i].dataset.id = number;
//   number++;
// }

const thirdLi = document.querySelector('[data-id="3"]');
console.log(thirdLi.closest('.wrapper'));
