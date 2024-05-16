$(document).ready(function(){
  // Array para almacenar los posts
  var posts = [];

  // Cargar los posts almacenados en el almacenamiento local, si los hay
  if (localStorage.getItem('posts')) {
    posts = JSON.parse(localStorage.getItem('posts'));
    displayPosts(); // Mostrar los posts cargados
  }

  // Función para mostrar los posts
  function displayPosts() {
    $('#postList').empty(); // Vaciar la lista de posts

    // Recorrer todos los posts y agregarlos al HTML
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      var $postElement = $('<div class="card mt-3">\
                              <div class="card-body">\
                                <p class="card-text">' + post.content + '</p>\
                                <button class="btn btn-primary react-btn">Reaccionar</button>\
                                <button class="btn btn-secondary comment-btn ml-2">Comentar</button>\
                                <div class="comments mt-2">\
                                  <!-- Los comentarios aparecerán aquí -->\
                                </div>\
                              </div>\
                            </div>');

      // Agregar el post al contenedor de la lista de posts
      $('#postList').append($postElement);

      // Mostrar los comentarios existentes
      displayComments($postElement.find('.comments'), post.comments);
    }
  }

  // Función para agregar un nuevo post
  $('#postForm').submit(function(event){
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener el contenido del post del campo de texto
    var postContent = $('#postContent').val();

    // Crear un objeto post y agregarlo al array de posts
    var newPost = {
      content: postContent,
      comments: [] // Array de comentarios inicialmente vacío
    };
    posts.push(newPost);

    // Mostrar los posts actualizados
    displayPosts();

    // Guardar los posts en el almacenamiento local
    localStorage.setItem('posts', JSON.stringify(posts));

    // Limpiar el campo de texto después de publicar el post
    $('#postContent').val('');
  });

  // Evento clic en botón "Comentar"
  $('#postList').on('click', '.comment-btn', function() {
    var $commentsDiv = $(this).closest('.card-body').find('.comments');
    var $commentForm = $('<form class="comment-form mt-2">\
                            <div class="form-group">\
                              <textarea class="form-control" rows="2" placeholder="Escribe tu comentario..." required></textarea>\
                            </div>\
                            <button type="submit" class="btn btn-primary btn-sm">Comentar</button>\
                          </form>');
    $commentsDiv.append($commentForm);
  });

  // Evento submit en formulario de comentario
  $('#postList').on('submit', '.comment-form', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener el contenido del comentario del campo de texto
    var commentContent = $(this).find('textarea').val();
    var $commentsDiv = $(this).closest('.card-body').find('.comments');

    // Agregar el comentario al array de comentarios del post
    var index = $(this).closest('.card').index();
    posts[index].comments.push(commentContent);

    // Mostrar los comentarios actualizados
    displayComments($commentsDiv, posts[index].comments);

    // Guardar los posts actualizados en el almacenamiento local
    localStorage.setItem('posts', JSON.stringify(posts));

    // Limpiar el campo de texto después de agregar el comentario
    $(this).find('textarea').val('');
  });

  // Función para mostrar los comentarios
  function displayComments($container, comments) {
    $container.empty(); // Vaciar el contenedor de comentarios

    // Recorrer todos los comentarios y agregarlos al HTML
    for (var i = 0; i < comments.length; i++) {
      var $comment = $('<p>' + comments[i] + '</p>');
      $container.append($comment);
    }
  }
});
