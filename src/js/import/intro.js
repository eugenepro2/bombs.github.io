new WOW().init();

$('.intro__bottom, .btn--program, .header a').click(function() {
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top}, 800);
  return false;
});




