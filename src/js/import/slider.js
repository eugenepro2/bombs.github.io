import Swiper from 'swiper';

let course1 = new Swiper('.course-1', {
  speed: 400,
  loop: true,
  pagination: {
    el: '.swiper-pagination-course',
    type: 'bullets',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
  },
});

var course2 = new Swiper('.course-2', {
  speed: 400,
  loop: true,
  pagination: {
    el: '.swiper-pagination-course',
    type: 'bullets',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
  },
});



let educationSlider = new Swiper('.education-slider', {
  navigation: {
    nextEl: '.swiper-button-next-education',
    prevEl: '.swiper-button-prev-education',
  },
  loop: true,
});


let reviewSlider = new Swiper('.review-slider', {
  direction: 'vertical',
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next-review',
    prevEl: '.swiper-button-prev-review',
  },
  loop: true,
});

let reviewSliderM = new Swiper('.review-slider-m', {
  loop: true,
  pagination: {
    el: '.swiper-pagination-review-m',
    type: 'bullets',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});


let studySlider = new Swiper('.study-slider', {
  navigation: {
    nextEl: '.swiper-button-next-study',
    prevEl: '.swiper-button-prev-study',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination-study',
    type: 'bullets',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});


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
