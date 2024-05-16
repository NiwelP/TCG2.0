$(document).ready(function() {
    $('#registroForm').submit(function(event) {
      event.preventDefault(); // Previene el envío del formulario por defecto
      

      if (validarCampos()) {
        // Aquí puedes poner el código para enviar el formulario si la validación es exitosa
        Swal.fire({
            icon: 'success',
            title: 'Validación exitosa',
            text: 'Todos los campos son válidos.'
        }).then((result) =>{
          if (!result.isConfirmed){
            Swal.fire({
              icon: 'error',
              title: 'Error en validación',
              text: 'Faltan datos, verificar.'
            });
          }

          else{
            window.location.href = "post.html";
          }
        });
          
        
    }
});
});

function validarCampos() {
var esValido = true;
var nombre = $('#nombre').val();
var apellido1 = $('#apellido1').val();
var apellido2 = $('#apellido2').val();
var email = $('#email').val();
var password = $('#password').val();
var confirmarPassword = $('#confirm-password').val();

if (nombre === '') {
    Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'El campo de nombre no puede estar vacío.'
    });
    esValido = false;
} else if (nombre.length > 30) {
    Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'El nombre no debe contener más de 30 caracteres.'
    });
    esValido = false;
}

if (apellido1 === '') {
  Swal.fire({
      icon: 'error',
      title: 'Error de validación',
      text: 'El campo de Primer apellido no puede estar vacío.'
  });
  esValido = false;
} 

if (apellido2 === '') {
  Swal.fire({
      icon: 'error',
      title: 'Error de validación',
      text: 'El campo de Segundo apellido no puede estar vacío.'
  });
  esValido = false;
} 

if (email === '') {
    Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'El campo de email no puede estar vacío.'
    });
    esValido = false;
}

var contraseñaValida = /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{5,}$/.test(password);
if (password === '') {
  Swal.fire({
      icon: 'error',
      title: 'Error de validación',
      text: 'El campo de Contraseña no puede estar vacío.'
  });
  esValido = false;
} 



else if (!contraseñaValida) {
  Swal.fire({
      icon: 'error',
      title: 'Error de validación',
      text: 'La contraseña debe contener por lo menos 1 caracter especial, una letra mayusculas y un minimo de 5 caracteres.'
  });
  esValido = false;
}


if (confirmarPassword === '') {
    Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'El campo de confirmar Contraseña no puede estar vacío.'
    });
    esValido = false;
} 

if (password !== confirmarPassword) {
    Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'Las contraseñas no coinciden.'
    });
    esValido = false;
}

return esValido;
}

