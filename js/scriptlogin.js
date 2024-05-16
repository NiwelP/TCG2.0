$(document).ready(function(){
    $('#loginForm').submit(function(event){
      event.preventDefault(); // Prevenir el envío del formulario
  
      // Obtener los valores de los campos de entrada
      var username = $('#username').val();
      var password = $('#password').val();

      // Simular la autenticación (reemplazar con la lógica de autenticación real)
      if(username === "admin@gmail.com" && password === "Admin1!") {
        // Mostrar mensaje de alerta con SweetAlert2
        window.location.href = "post.html";
      } else {
        // Mostrar mensaje de alerta con SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Oh no...',
          text: 'Correo o contraseña invalido'
          
        });
      }
    });
  });