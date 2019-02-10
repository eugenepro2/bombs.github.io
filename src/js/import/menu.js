$('.menu-button').on('click', function() {
  if ($('body').hasClass('course')) {
    Menu($('.mobile-menu'));
  } else{
    Menu($('.mobile-menu-course1'));
  }
});

$('.mobile-menu a').on('click', function() {
  if ($('body').hasClass('course')) {
    Menu($('.mobile-menu'));
  } else{
    Menu($('.mobile-menu-course1'));
  }
});



$('.mobile-menu-course').on('click', function() {
  $(this).find('ul').slideToggle();
  $(this).toggleClass('is-active');
});

function Menu(curr) {
  $('.menu-button').toggleClass('is-active');
  $('body').toggleClass('is-active');
  $('.header').toggleClass('is-active');
  curr.slideToggle();
  $('.header__logo').fadeToggle();
  curr.find('img').fadeToggle();
}
