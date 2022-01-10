const pass = document.querySelector('#password');
const text = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
  if (
    pass.value.length >= minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers) &&
    pass.value.match(special)
  ) {
    text.textContent = 'Masz bardzo dobre hasło! 💪';
    text.style.color = 'lime';
  } else if (
    pass.value.length >= minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers)
  ) {
    text.textContent = 'Masz dobre hasło! 😉';
    text.style.color = 'gold';
  } else {
    text.textContent = 'Masz słabe hasło! 😕';
    text.style.color = 'tomato';
  }
};

const checkPassword = () => {
  if (pass.value !== '') {
    showMsg();
  } else {
    text.textContent = 'Nie podałes hasła...';
    text.style.color = '';
  }
};

pass.addEventListener('keyup', checkPassword);
