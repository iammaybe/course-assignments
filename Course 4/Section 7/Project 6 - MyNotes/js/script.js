const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtns = document.getElementsByClassName('delete-note');
const deleteAllBtn = document.querySelector('.delete-all');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');
let selectedOption;
let cardID = 0;

const openPanel = () => {
  notePanel.style.display = 'flex';
};

const closePanel = () => {
  notePanel.style.display = 'none';
  category.selectedIndex = 0;
  textarea.value = '';
  error.style.visibility = 'hidden';
};

const addNote = () => {
  if (selectedOption !== 0 && textarea.value !== '') {
    createNote();
    error.style.visibility = 'hidden';
  } else {
    error.style.visibility = 'visible';
  }
};

const createNote = () => {
  const newNote = document.createElement('div');
  newNote.classList.add('note');
  newNote.setAttribute('id', cardID++);
  newNote.innerHTML = `
  <div class="note-header">
    <h3 class="h3 note-title">${selectedOption.text}</h3>
  <button class="delete-note">
    <i class="fas fa-times icon"></i>
  </button>
  </div>`;

  const newNoteBody = document.createElement('div');
  const newNoteBodyText = document.createElement('p');
  newNoteBody.classList.add('note-body');
  newNoteBodyText.textContent = `${textarea.value}`;

  newNoteBody.append(newNoteBodyText);
  newNote.append(newNoteBody);
  noteArea.append(newNote);
  closePanel();
  checkColor(newNote);
};

const selectOption = () => {
  selectedOption = category.options[category.selectedIndex];
};

const checkColor = note => {
  if (selectedOption.value === 'shopping') {
    note.style.backgroundColor = 'rgb(72,255,0)';
  } else if (selectedOption.value === 'work') {
    note.style.backgroundColor = 'rgb(255,243,0)';
  } else if (selectedOption.value === 'other') {
    note.style.backgroundColor = 'rgb(0,170,255)';
  }
};

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
