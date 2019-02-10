import device from 'current-device';
import Swiper from 'swiper';
//Open modal
$('[data-pop]').on('click', function() {
  let href = $(this).attr('href');

  if(device.mobile()) {
    href = href.replace('#','');
    location.href = href + '.html';
  }
  $(href).fadeIn();
  
  $('body').attr('data-pos', $(window).scrollTop()); 

  let worksSlider = new Swiper('.works-slider', {
    navigation: {
      nextEl: '.swiper-button-next-works',
      prevEl: '.swiper-button-prev-works',
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination-works',
      type: 'bullets',
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });
});

//Close modal
$('.pop__close').on('click', function() {
  $('body').scrollTop($('body').attr('data-pos'));
  if(device.mobile()) {
    window.history.back();
  }
  $('body').removeClass('is-active');
  $('#pop-video iframe').attr('src', '');
  $(this).closest('.pop').fadeOut();
  
});

$('.intro__video').on('click', function() {
  let href = $(this).attr('data-src');
  $('#pop-video').fadeIn();
  $('#pop-video iframe').attr('src', href);
});



 
