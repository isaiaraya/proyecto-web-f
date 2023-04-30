const registerForm = document.querySelector('#register-form');
const loginButton = document.querySelector('.btn-primary');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();

  const username = registerForm.elements.user.value;
  const email = registerForm.elements.email.value;
  const password = registerForm.elements.password.value;
  const phone = registerForm.elements.phone.value;

  let errorMessage = '';

  if (!username || !email || !password || !phone) {
    errorMessage = 'Todos los campos son obligatorios';
  } else {
    if (username.length > 30) {
      registerForm.elements.user.focus();
      errorMessage = 'El nombre no puede tener más de 30 caracteres';
    } else if (!email.includes('@')) {
      registerForm.elements.email.focus();
      errorMessage = 'El correo electrónico debe contener el símbolo @';
    } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/)) {
      registerForm.elements.password.focus();
      errorMessage = 'La contraseña debe tener entre 8 y 20 caracteres, contener letras mayúsculas y minúsculas, números y símbolos';
    } else if (!phone.match(/^9\d{8}$/)) {
      registerForm.elements.phone.focus();
      errorMessage = 'El número de teléfono debe comenzar con el número 9 y contener 9 dígitos numéricos';
    } else {
      // Aquí va el código para enviar el formulario
      alert('Registro exitoso');
      window.location.href = 'index.html';
      return;
    }
  }

  if (errorMessage) {
    alert(errorMessage);
  } else {
    alert('Registro exitoso');
    window.location.href = 'index.html';
  }
});
