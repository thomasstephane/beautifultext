function updateText(response) {
  $('#converted-text').html(decorate(response));
  $('#changes').html(createList(response));
}

function createList(response) {
  var list = "<ul>";
  list = createSublist(response.spaces_added, "Space added at position", list);
  list = createSublist(response.spaces_removed, "Space removed at position", list);
  list = list + "</ul>";
  return list
}

function createSublist(changes, text, list) {
  $.each(changes, function(index, change){
    list = list + ("<li>" + text + " <span>" + change + "</span></li>");
  })
  return list
}

function decorate(response) {
  var letters = response.beautiful_text;
  $.each(letters, function(i,letter) {
    if ($.inArray(i, response.spaces_added) !== -1) {
      letters[i] = "<span>" + letter + "</span>"
    }
  });
  return letters.join('');
}

function beautifulText(self) {
  $.ajax({
    type: 'post',
    url: '/beautiful',
    data: $(self).serialize()
  }).done(function(response){
    updateText(response);
  });
}

function onKeyup(event) {
  var input = $(this);
  var timeout = input.data('timeout');
  clearTimeout(timeout);
  timeout = setTimeout(beautiful_it.bind(input), 800);
  input.data('timeout', timeout);
}

function beautiful_it() {
  var input = $(this);
  beautifulText(input[0]);
}

$(document).ready(function() {
  $(document).on('keyup','#beautiful_it', onKeyup);
});
