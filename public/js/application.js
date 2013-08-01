function updateText(response) {
  $('#converted-text').html(decorate(response));
  $('#changes').html(createList(response.changes));
}

function createList(changes) {
  var list = "<ul>";
  $.each(changes, function(index, change){
    list = list + ("<li>Space added at position <span>" + change + "</span></li>");
  })
  list = list + "</ul>";
  return list
}

function decorate(response) {
  var letters = response.beautiful_text;
  $.each(letters, function(i,letter) {
    if ($.inArray(i, response.changes) !== -1) {
      letters[i] = "<span>" + letter + "</span>"
    }
  });
  return letters.join("");
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

$(document).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault();
    beautifulText(this);
  });
});
