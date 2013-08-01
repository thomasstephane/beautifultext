$(document).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: '/beautiful',
      data: $(this).serialize()
    }).done(function(response){
      $('#converted-text').html(response.beautiful_text);
    });
  });
});
