//faq
$('.program__block__header').on('click', function() {
  hidden($(this).closest('.program__block'));
});

// $('.program__block.first .program__block__header').click();

function hidden(crr) {
  $('.program__block__content').slideUp();
  if (crr.hasClass('is-active')) {  
    $('.program__block').removeClass('is-active');
    return false;
  }
  $('.program__block').removeClass('is-active');
  crr.find('.program__block__content').slideDown();
  crr.addClass('is-active');
}



$('.program__hidden').hide();
$('.program__loadmore').on('click', function() {
  $('.program__hidden').fadeToggle();
  $(this).text(function(i, text) {
    return text === 'показать все' ? 'скрыть' : 'показать все';
  });
});
