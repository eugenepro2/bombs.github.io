//faq
$('.faq__block h3, .faq__block__circle').on('click', function() {
  hidden($(this).closest('.faq__block'));
});


function hidden(crr) {
  $('.faq__block__hidden').slideUp();
  $('.faq__block span').text('+');
  if (crr.hasClass('is-active')) {  
    $('.faq__block').removeClass('is-active');
    return false;
  }
  $('.faq__block').removeClass('is-active');
  crr.find('.faq__block__hidden').slideDown();
  crr.addClass('is-active');
  crr.find('span').text('_');
}

$('.faq__block').slice(0, 4).show();

$('#loadmore').on('click', function() {
  
  if ($('.faq__block:hidden').length === 0) {
    $('.faq__block').slice(4, 10).fadeToggle();
  } else{
    $('.faq__block:hidden').slice(0, 4).fadeToggle();
  }
  $(this).text(function(i, text) {
    return text === 'показать еще вопросы' ? 'скрыть' : 'показать еще вопросы';
  });
});
