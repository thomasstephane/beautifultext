function updateText(response) {
  $('#converted-text').html(response.beautiful_text);
  $('#changes').html(response.changes);
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
