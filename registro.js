const registerForm = document.querySelector('#register-form');
const usernameInput = registerForm.elements.user;
const emailInput = registerForm.elements.email;
const passwordInput = registerForm.elements.password;
const phoneInput = registerForm.elements.phone;
const loginButton = document.querySelector('.btn-primary');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();

  const username = registerForm.elements.user.value;
  const email = registerForm.elements.email.value;
  const password = registerForm.elements.password.value;
  const phone = registerForm.elements.phone.value;

  let usernameError = document.querySelector('#username-error');
  let emailError = document.querySelector('#email-error');
  let passwordError = document.querySelector('#password-error');
  let phoneError = document.querySelector('#phone-error');

  let hasError = false;

  if (!username) {
    usernameError.innerText = 'El campo es obligatorio';
    usernameError.classList.add('error');
    hasError = true;
  } else if (username.length > 30) {
    usernameError.innerText = 'El nombre no puede tener más de 30 caracteres';
    usernameError.classList.add('error');
    hasError = true;
  } else {
    usernameError.innerText = '';
    usernameError.classList.remove('error');
  }

  if (!email) {
    emailError.innerText = 'El campo es obligatorio';
    emailError.classList.add('error');
    hasError = true;
  } else if (!email.includes('@')) {
    emailError.innerText = 'El correo electrónico debe contener el símbolo @';
    emailError.classList.add('error');
    hasError = true;
  } else {
    emailError.innerText = '';
    emailError.classList.remove('error'); 
  }

  if (!password) {
    passwordError.innerText = 'El campo es obligatorio';
    passwordError.classList.add('error');
    hasError = true;
  } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/)) {
    passwordError.innerText = 'La contraseña debe tener entre 8 y 20 caracteres, contener letras mayúsculas y minúsculas, números y símbolos';
    passwordError.classList.add('error');
    hasError = true;
  } else {
    passwordError.innerText = '';
    passwordError.classList.remove('error'); 

  }

  if (!phone) {
    phoneError.innerText = 'El campo es obligatorio';
    phoneError.classList.add('error'); 
    hasError = true;
  } else if (!phone.match(/^9\d{8}$/)) {
    phoneError.innerText = 'El número de teléfono debe comenzar con el número 9 y contener 9 dígitos numéricos';
    phoneError.classList.add('error');
    hasError = true;
  } else {
    phoneError.innerText = '';
    phoneError.classList.remove('error');
  }

  if (!hasError) {
    // Aquí va el código para enviar el formulario
    alert('Registro exitoso');
    window.location.href = 'index.html';
  }
});



usernameInput.addEventListener('blur', () => {
  const username = usernameInput.value;
  if (!username) {
    usernameError.innerText = 'El campo es obligatorio';
    usernameError.classList.add('error');
  } else if (username.length > 30) {
    usernameError.innerText = 'El nombre no puede tener más de 30 caracteres';
    usernameError.classList.add('error');
  } else {
    usernameError.innerText = '';
    usernameError.classList.remove('error');
  }
});

emailInput.addEventListener('blur', () => {
  const email = emailInput.value;
  if (!email) {
    emailError.innerText = 'El campo es obligatorio';
    emailError.classList.add('error');
  } else if (!email.includes('@')) {
    emailError.innerText = 'El correo electrónico debe contener el símbolo @';
    emailError.classList.add('error');
  } else {
    emailError.innerText = '';
    emailError.classList.remove('error'); 
  }
});

passwordInput.addEventListener('blur', () => {
  const password = passwordInput.value;
  if (!password) {
    passwordError.innerText = 'El campo es obligatorio';
    passwordError.classList.add('error');
  } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/)) {
    passwordError.innerText = 'La contraseña debe tener entre 8 y 20 caracteres, contener letras mayúsculas y minúsculas, números y símbolos';
    passwordError.classList.add('error');
  } else {
    passwordError.innerText = '';
    passwordError.classList.remove('error'); 
  }
});

phoneInput.addEventListener('blur', () => {
  const phone = phoneInput.value;
  if (!phone) {
    phoneError.innerText = 'El campo es obligatorio';
    phoneError.classList.add('error'); 
  } else if (!phone.match(/^9\d{8}$/)) {
    phoneError.innerText = 'El número de teléfono debe comenzar con el número 9 y contener 9 dígitos numéricos';
    phoneError.classList.add('error');
  } else {
    phoneError.innerText = '';
    phoneError.classList.remove('error');
  }
});



