var SERVER_URL = 'http://localhost:3000/'

function getTodoHTML(todoTask, ownerId) {
  return '<div class="todo">             \
      <span>' + todoTask + '</span>                                          \
      <button class="button-complete">Complete</button>                      \
    </div>'
}

function displayTasksForUser(userId) {
  $.get(SERVER_URL + 'task/' + userId)
  .done(function (resp) {
    if (!resp) {
      $('#message').html('Cannot display tasks for user ID ' + userId + '.')
      $('#todos').html('')
      return
    }

    var htmlCode = ''

    for (var i = 0; i < resp.length; i++) {
      htmlCode += getTodoHTML(resp[i]['task'], userId);
    }

    $('#todos').html(htmlCode)

    // TODO: Actually remove from the backend
    $('.button-complete').click(function () {
      $(this).parent().remove();
    })
  })
}

function updateUserTodos() {
  var userId = $('#username').val()

  if (userId === '') {
    $('#message').html('Please enter a valid User ID.')
    $('#todos').html('')
    return
  }

  // AJAX Call to the server to check if the user ID is valid.
  $.get(SERVER_URL + 'user/' + userId)
  .done(function (resp) {
    if (resp.length == 0) {
      $('#message').html('This ID doesn\'t exist in the database.')
      $('#todos').html('')
      return
    }

    var username = resp[0]['username']

    $('#message').html('Tasks for ' + username + ' loaded.')
    displayTasksForUser(userId)
  })

  return
}

function clearInputs() {
  $('#input-add-todo').val('')
}


function init() {
  updateUserTodos()

  $('#username').change(function () {
    updateUserTodos()
  })


  $('#button-add-todo').click(function () {
    var userId = $('#username').val()
    var todoTask = $('#input-add-todo').val()

    $.post(SERVER_URL + 'task/' + userId, {'task': todoTask })
    .done(function (resp) {
      $('#message').html(resp)
      updateUserTodos()
      clearInputs()
    })
  })
}


// Initialize the web application.
$(document).ready(init)
