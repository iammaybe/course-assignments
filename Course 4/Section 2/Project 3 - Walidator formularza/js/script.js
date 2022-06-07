const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');
const inputArr = [username, pass, pass2, email];

const checkForm = input => {
  input.forEach(el => {
    if (el.value === '') {
      console.log('error');
    } else {
      console.log('ok');
    }
  });
};

sendBtn.addEventListener('click', e => {
  e.preventDefault();
  checkForm(inputArr);
});

// SOLUTION 1 (form.reset):
// clearBtn.addEventListener('click', e => {
//   e.preventDefault();
//   document.querySelector('form').reset();
// });

// SOLUTION 2 (array + forEach):
clearBtn.addEventListener('click', e => {
  e.preventDefault();
  inputArr.forEach(el => (el.value = ''));
});
