$('form').submit(function(e) {
  e.preventDefault();
  let form = $(this);
  let checkbox = form.find('.checkbox');
  let input = form.find('input');
  // if(checkbox.prop('checked') && !input.val().length === 0) {
  //   console.log('1');
  // }

  if(checkbox.prop('checked')) {
    ajaxMail(form);
  }

  if(checkbox.prop('checked')) {
    checkbox.siblings('.label').removeClass('invalid');
  } else{
    checkbox.siblings('.label').addClass('invalid');
  }

  input.each(function() {
    let crr = $(this);
    if(crr.val().length === 0) {
      crr.addClass('invalid');
    } else{
      crr.removeClass('invalid');
    }
  });

  
});


function ajaxMail(form) {
  $.ajax({
    type: form.attr('method'),
    url: form.attr('action'),
    data: form.serialize()
  }).done(function() {
    let height = form.height();
    form.css('height', height);
    form.find('.form__block').fadeOut(300);
    form.find('p').delay(300).fadeIn();
  }).fail(function() {
  });
}


$('.btn--next').on('click', function() {
  $('.step-1').fadeOut(500);
  $('.step-2').delay(500).css('display', 'flex').hide().fadeIn();
});



$('.pop-try input').change(function() {
  let value = parseInt($(this).val());
  console.log(value);
  if (value === 1) {
    $('.sketch').show();
    $('.character').hide();
  } else if(value === 2) {
    $('.sketch').hide();
    $('.character').show();
  }
});
