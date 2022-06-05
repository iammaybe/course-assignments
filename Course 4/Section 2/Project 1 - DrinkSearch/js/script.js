const search = document.querySelector('.search');
const ulList = document.querySelector('ul');
const liItems = [...document.querySelectorAll('li')];

// SOLUTION 1 (indexOf):
// const searchItem = () => {
//   const searchText = search.value.toLowerCase().trim();
//   liItems.forEach(liItem => {
//     if (liItem.textContent.toLowerCase().indexOf(searchText) !== -1) {
//       liItem.style.display = '';
//     } else {
//       liItem.style.display = 'none';
//     }
//   });
// };

// SOLUTION 2 (includes):
// const searchItem2 = () => {
//   const searchText = search.value.toLowerCase().trim();
//   liItems.forEach(liItem => {
//     if (liItem.textContent.toLowerCase().includes(searchText)) {
//       liItem.style.display = '';
//     } else {
//       liItem.style.display = 'none';
//     }
//   });
// };

//SOLUTION 3 (RegExp):
// const filterList = () => {
//   liItems.forEach(liItem => {
//     const match = new RegExp(search.value, 'i').test(liItem.textContent);

//     if (!match) {
//       liItem.style.display = 'none';
//     } else {
//       liItem.style.display = '';
//     }
//   });
// };

// SOLUTION 4 (filter + includes):
const filterList2 = () => {
  const filteredList = liItems.filter(liItem =>
    liItem.textContent.toLowerCase().includes(search.value.toLowerCase().trim())
  );
  ulList.innerHTML = '';
  filteredList.forEach(liItem => ulList.appendChild(liItem));
};

// search.addEventListener('keyup', searchItem);
// search.addEventListener('keyup', searchItem2);
// search.addEventListener('keyup', filterList);
search.addEventListener('keyup', filterList2);
