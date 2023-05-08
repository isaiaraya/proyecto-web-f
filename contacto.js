
$(document).ready(function () {
    $('.btn').click(function (event) {
      event.preventDefault();
  
      let error = false;
  
      const name = $('input[placeholder="Tu nombre"]').val();
      if (name.length > 30) {
        $('input[placeholder="Tu nombre"]').css("border-color", "red");
        $('input[placeholder="Tu nombre"]').after("<div class='error-message'>El nombre no puede tener más de 30 caracteres</div>");
        error = true;
      }
  
      const email = $('input[placeholder="Tu correo electronico"]').val();
      if (!email.includes('@')) {
        $('input[placeholder="Tu correo electronico"]').css("border-color", "red");
        $('input[placeholder="Tu correo electronico"]').after("<div class='error-message'>El correo electrónico debe contener el símbolo @</div>");
        error = true;
      }
  
      const phone = $('input[placeholder="Tu telefono"]').val();
      if (!phone.match(/^9\d{8}$/)) {
        $('input[placeholder="Tu telefono"]').css("border-color", "red");
        $('input[placeholder="Tu telefono"]').after("<div class='error-message'>El número de teléfono debe comenzar con el número 9 y contener 9 dígitos numéricos</div>");
        error = true;
      }
  
      const message = $('textarea[placeholder="Mensaje"]').val().replace(/\s+/g, '');
      if (message.length > 300) {
        $('textarea[placeholder="Mensaje"]').css("border-color", "red");
        $('textarea[placeholder="Mensaje"]').after("<div class='error-message'>El mensaje no puede contener más de 300 caracteres</div>");
        error = true;
      }
  
      if (!name || !email || !phone || !message) {
        $('.field').each(function () {
          if ($(this).val() === '') {
            $(this).css("border-color", "red");
            $(this).after("<div class='error-message'>Este campo es obligatorio</div>");
            error = true;
          }
        });
      }
  
      if (!error) {
        alert("El formulario se ha enviado con éxito.");
        $('.field').val(''); // Aquí se vacían los campos
        // Aquí iría el código para enviar el formulario
      }
    });
  
    $('.field').focus(function () {
      $(this).css("border-color", "#ddd");
      $(this).siblings(".error-message").remove();
    });
  });
  

