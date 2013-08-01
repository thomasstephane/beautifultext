function updateText(text) {
  $('#converted-text').html(text);
}

function beautifulText(self) {
  $.ajax({
    type: 'post',
    url: '/beautiful',
    data: $(self).serialize()
  }).done(function(response){
    updateText(response.beautiful_text);
  });
}

$(document).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault();
    beautifulText(this);
  });
});
