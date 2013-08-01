function updateText(response) {
  $('#converted-text').html(response.beautiful_text);
  $('#changes').html(createList(response.changes));
}

function createList(changes) {
  var list = "<ul>";
  $.each(changes, function(index, change){
    list = list + ("<li>" + change + "</li>");
  })
  list = list + "</ul>";
  return list
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
