$(document).ready(function(){
    $('#loginForm').submit(function(event){
      event.preventDefault(); 
  

      var username = $('#username').val();
      var password = $('#password').val();


      if(username === "admin@gmail.com" && password === "Admin1!") {
        window.location.href = "post.html";
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oh no...',
          text: 'Correo o contraseña invalido'
          
        });
      }
    });
  });