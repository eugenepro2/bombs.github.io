$('.education__tabs').on('click', function() {
  let block = $(this);

  $('.education__tabs p').slideUp();
  if (block.hasClass('is-active')) {  
    block.removeClass('is-active');
    return false;
  }

  block.removeClass('is-active');
  block.find('p').slideDown();
  block.addClass('is-active');
});


