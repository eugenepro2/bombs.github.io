import Lazy from 'jquery-lazy';

$('.lazy').Lazy();

$('.preloader').delay(2000).fadeOut(500);


$('.progressive-image').each(function() {

  var image = new Image();
  var previewImage = $(this).find('.loadingImage');
  var newImage = $(this).find('.overlay');

  image.onload = function() {
    newImage.css('background-image', 'url(' + image.src + ')');
    newImage.css('opacity', '1');
    previewImage.hide();
    console.log('complete');
  };

  image.src = previewImage.data('image');

});
