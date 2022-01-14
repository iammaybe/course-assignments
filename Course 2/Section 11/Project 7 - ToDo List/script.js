let todoInput, errorInfo, addBtn, ulList, newTodo;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  todoInput = document.querySelector('.todo-input');
  errorInfo = document.querySelector('.error-info');
  addBtn = document.querySelector('.btn-add');
  ulList = document.querySelector('.todolist ul');
};

const prepareDOMEvents = () => {
  addBtn.addEventListener('click', addNewTodo);
  ulList.addEventListener('click', checkClick);
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
    errorInfo.style.color = 'red';
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
  } else if (e.target.matches('.delete')) {
  }
};

document.addEventListener('DOMContentLoaded', main);
