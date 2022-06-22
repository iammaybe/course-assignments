const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');
const inputs = [username, pass, pass2, email];

const showError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector('.error-text');
  formBox.classList.add('error');
  errorMsg.textContent = msg + '.';
};

const clearError = input => {
  const formBox = input.parentElement;
  formBox.classList.remove('error');
};

const checkInputs = inputs => {
  inputs.forEach(input => {
    if (input.value === '') {
      showError(input, input.placeholder);
    } else {
      clearError(input);
    }
  });
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(
      input,
      `${input.previousElementSibling.innerText.slice(
        0,
        -1
      )} musi składać się z min. ${min} znaków`
    );
  }
};

const checkPassword = (pass, pass2) => {
  if (pass.value !== pass2.value) {
    showError(pass2, 'Hasła do siebie nie pasują');
  }
};

const checkMail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value)) {
    clearError(email);
  } else {
    showError(email, 'E-mail jest niepoprawny');
  }
};

const checkErrors = () => {
  // SOLUTION 1:
  // const formBoxes = [...document.querySelectorAll('.form-box')];
  // let errorCount = 0;

  // formBoxes.forEach(formBox => {
  //   if (formBox.classList.contains('error')) {
  //     errorCount++;
  //   }
  // });

  // if (errorCount === 0) {
  //   popup.classList.add('show-popup');
  // }

  // SOLUTION 2:
  const errors = [...document.querySelectorAll('.error')];
  if (!errors.length) {
    popup.classList.add('show-popup');
  }
};

sendBtn.addEventListener('click', e => {
  e.preventDefault();
  checkInputs(inputs);
  checkLength(username, 3);
  checkLength(pass, 8);
  checkPassword(pass, pass2);
  checkMail(email);
  checkErrors();
});

// SOLUTION 1 (form.reset):
// clearBtn.addEventListener('click', e => {
//   e.preventDefault();
//   document.querySelector('form').reset();
// });

// SOLUTION 2 (array + forEach):
clearBtn.addEventListener('click', e => {
  e.preventDefault();
  inputs.forEach(input => {
    input.value = '';
    clearError(input);
  });
});
