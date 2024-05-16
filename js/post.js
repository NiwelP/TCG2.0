$(document).ready(function(){
  var posts = [];

  if (localStorage.getItem('posts')) {
    posts = JSON.parse(localStorage.getItem('posts'));
    displayPosts();
  }

  function displayPosts() {
    $('#postList').empty(); 
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


      $('#postList').append($postElement);

      displayComments($postElement.find('.comments'), post.comments);
    }
  }

  $('#postForm').submit(function(event){
    event.preventDefault(); 
    var postContent = $('#postContent').val();

    var newPost = {
      content: postContent,
      comments: []
      };
    posts.push(newPost);

  
  displayPosts();

    localStorage.setItem('posts', JSON.stringify(posts));

    $('#postContent').val('');
  });

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

  $('#postList').on('submit', '.comment-form', function(event) {
    event.preventDefault();
    var commentContent = $(this).find('textarea').val();
    var $commentsDiv = $(this).closest('.card-body').find('.comments');

    var index = $(this).closest('.card').index();
    posts[index].comments.push(commentContent);

    displayComments($commentsDiv, posts[index].comments);

    localStorage.setItem('posts', JSON.stringify(posts));

    $(this).find('textarea').val('');
  });

 
 function displayComments($container, comments) {
    $container.empty(); 

    for (var i = 0; i < comments.length; i++) {
      var $comment = $('<p>' + comments[i] + '</p>');
      $container.append($comment);
    }
  }
});
