$('.review__slide').on('click', function() {
  let curr = $(this);
  let img = curr.find('img').attr('src');
  let name = curr.find('h4').text();
  let text = curr.find('p').text();
  let href = curr.find('a').attr('href');

  if(href.indexOf('vk.com') + 1) {
    $('.review__block a').text('Читать в VK');
  } else{
    $('.review__block a').text('Читать в instagram');
  }
  

  $('.review__block h3').text(name);
  $('.review__block img').attr('src', img);
  $('.review__block p').text(text);
  $('.review__block a').attr('href', href);


});



$('.review-m .review__block').each(function() {
  let href = $(this).find('a').attr('href');

  if(href.indexOf('vk.com') + 1) {
    $(this).find('a').text('Читать в VK');
  } else{
    $(this).find('a').text('Читать в instagram');
  }
});
