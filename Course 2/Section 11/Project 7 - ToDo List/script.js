let todoInput,
  errorInfo,
  addBtn,
  ulList,
  newTodo,
  popup,
  popupInfo,
  todoToEdit,
  popupInput,
  popupAddBtn,
  popupCloseBtn;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  todoInput = document.querySelector('.todo-input');
  errorInfo = document.querySelector('.error-info');
  addBtn = document.querySelector('.btn-add');
  ulList = document.querySelector('.todolist ul');
  popup = document.querySelector('.popup');
  popupInfo = document.querySelector('.popup-info');
  popupInput = document.querySelector('.popup-input');
  popupAddBtn = document.querySelector('.accept');
  popupCloseBtn = document.querySelector('.cancel');
};

const prepareDOMEvents = () => {
  addBtn.addEventListener('click', addNewTodo);
  ulList.addEventListener('click', checkClick);
  popupAddBtn.addEventListener('click', changeTodoText);
  popupCloseBtn.addEventListener('click', closePopup);
};

const addNewTodo = () => {
  if (todoInput.value !== '') {
    newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;
    createToolsArea();
    ulList.append(newTodo);
    todoInput.value = '';
    errorInfo.textContent = '';
    errorInfo.style.color = '';
  } else {
    errorInfo.textContent = 'Wpisz treść zadania!';
    errorInfo.style.color = '#ff0000';
  }
};

const createToolsArea = () => {
  const toolsPanel = document.createElement('div');
  toolsPanel.classList.add('tools');
  newTodo.append(toolsPanel);
  const completeBtn = document.createElement('button');
  completeBtn.classList.add('complete');
  completeBtn.innerHTML = '<i class="fas fa-check">';
  const editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  editBtn.textContent = 'EDIT';
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.innerHTML = '<i class="fas fa-times">';
  toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = e => {
  if (e.target.matches('.complete')) {
    e.target.closest('li').classList.toggle('completed');
    e.target.classList.toggle('completed');
  } else if (e.target.matches('.edit')) {
    editTodo(e);
  } else if (e.target.matches('.delete')) {
    deleteTodo(e);
  }
};

const editTodo = e => {
  todoToEdit = e.target.closest('li');
  popupInput.value = todoToEdit.firstChild.textContent;
  popup.style.display = 'flex';
};

const closePopup = () => {
  popup.style.display = 'none';
  popupInfo.textContent = '';
  popupInfo.style.color = '';
};

const changeTodoText = () => {
  if (popupInput.value !== '') {
    todoToEdit.firstChild.textContent = popupInput.value;
    closePopup();
  } else {
    popupInfo.textContent = 'Musisz podać jakąś treść!';
    popupInfo.style.color = '#ff0000';
  }
};

const deleteTodo = e => {
  e.target.closest('li').remove();
  const allTodos = ulList.querySelectorAll('li');

  if (allTodos.length === 0) {
    errorInfo.style = '';
    errorInfo.textContent = 'Brak zadań na liście.';
  }
};

document.addEventListener('DOMContentLoaded', main);
