const incomeSection = document.querySelector('.income-area');
const expensesSection = document.querySelector('.expenses-area');
const availableMoney = document.querySelector('.available-money');
const addTransactionPanel = document.querySelector('.add-transaction-panel');

const nameInput = document.querySelector('#name');
const amountInput = document.querySelector('#amount');
const categorySelect = document.querySelector('#category');

const addTransactionBtn = document.querySelector('.add-transaction');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtn = document.querySelector('.delete');
const deleteAllBtn = document.querySelector('.delete-all');
const lightBtn = document.querySelector('.light');
const darkBtn = document.querySelector('.dark');

let root = document.documentElement;
let transactionID = 0;
let categoryIcon;
let selectedCategory;
let money = [0];

const showPanel = () => {
  addTransactionPanel.style.display = 'flex';
};

const closePanel = () => {
  addTransactionPanel.style.display = 'none';
  clearForm();
};

const checkForm = () => {
  if (
    nameInput.value !== '' &&
    amountInput.value !== '' &&
    categorySelect.value !== 'none'
  ) {
    createNewTransaction();
  } else {
    alert('Wypełnij wszystkie pola!');
  }
};

const clearForm = () => {
  nameInput.value = '';
  amountInput.value = '';
  categorySelect.selectedIndex = 0;
};

const createNewTransaction = () => {
  const newTransaction = document.createElement('div');
  newTransaction.classList.add('transaction');
  newTransaction.setAttribute('id', transactionID);
  checkCategory();

  newTransaction.innerHTML = `
  <p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
  <p class="transaction-amount">${amountInput.value} zł
    <button class="delete" onclick="deleteTransaction(${transactionID})"><i class="fas fa-times"></i></button>
  </p>`;

  amountInput.value > 0
    ? incomeSection.append(newTransaction)
    : expensesSection.append(newTransaction);

  money.push(amountInput.valueAsNumber);
  transactionID++;
  closePanel();
};

const checkCategory = () => {
  switch (categorySelect.value) {
    case 'income':
      categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
      break;
    case 'shopping':
      categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
      break;
    case 'food':
      categoryIcon = '<i class="fas fa-hamburger"></i>';
      break;
    case 'cinema':
      categoryIcon = '<i class="fas fa-film"></i>';
      break;
  }
};

addTransactionBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', checkForm);
