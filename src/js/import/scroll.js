import {TweenLite} from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';
import device from 'current-device';

let controller = new ScrollMagic.Controller();

if (!device.mobile()) {
  

// Главная страница Блок Курсы
  if ($('section').is('.courses')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenMax.to('.course-1', 0.5, { y: -60 }),
        TweenMax.to('.scroll--1', 0.5, { y: 200 })
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '.courses', duration: 1500})
      .setTween(tlm)
      //.addIndicators({name: 'курсы'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  // Главная страница Блок Курсы  



  // Главная страница Блок Интересное
  if ($('section').is('.courses')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenMax.to('.scroll--3', 0.5, { y: 200 }),
        TweenMax.to('.interesting__before', 0.5, { y: 80 })
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '.courses', duration: 1500, offset: 1000})
      .setTween(tlm)
      //.addIndicators({name: 'интересное'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  // Главная страница Блок Интересное



  // Главная страница Блок Результаты обучения
  if ($('section').is('.interesting')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenMax.to('.scroll--4', 0.5, { y: 200 })
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '.interesting', duration: 1500, offset: 100})
      .setTween(tlm)
      //.addIndicators({name: 'Результаты обучения'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  // Главная страница Блок Результаты обучения


  // Главная страница Блок Ты научишься
  if ($('section').is('.learn')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenMax.to('.scroll--5', 0.5, { y: 200 }),
        TweenMax.to('.education__top', 0.5, { y: 50 })
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '.learn', duration: 1000})
      .setTween(tlm)
      //.addIndicators({name: 'Ты научишься'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  // Главная страница Блок Ты научишься

  // Главная страница Блок Отзывы
  if ($('section').is('.review')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenMax.to('.review__before', 0.5, { y: -150 }),
        TweenMax.to('.faq__before', 0.5, { y: -60 }),
        TweenMax.to('.scroll--6', 0.5, { y: -200 })
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '.review', duration: 1000, offset: 400})
      .setTween(tlm)
      //.addIndicators({name: 'Отзывы'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  // Главная страница Блок Отзывы

  // Главная страница Блок Контакты
  if ($('section').is('.contact')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenMax.to('.contact__before', 0.5, { y: -70 }),
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '.contact', duration: 500, offset: 0})
      .setTween(tlm)
      //.addIndicators({name: 'Контакты'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  // Главная страница Блок Контакты

  // Страница курсов Блок Стоимость курса
  if ($('section').is('.price')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenMax.to('.scroll--price', 0.5, { y: 150 }),
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '.price', duration: 500, offset: 0})
      .setTween(tlm)
      //.addIndicators({name: 'Стоимость курса'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  // Страница курсов Блок Стоимость курса

  // Страница курсов Блок Это
  if ($('section').is('.price')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenMax.to('.scroll--this', 0.5, { y: 100 }),
        TweenMax.to('.this__image', 0.5, { y: -80 }),
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '.price', duration: 1000, offset: 500})
      .setTween(tlm)
      //.addIndicators({name: 'Стоимость курса'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  // Страница курсов Блок Это

  // Страница курсов Блок Программа
  if ($('section').is('.program')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenMax.to('.scroll--program', 0.5, { y: 200 }),
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '.program', duration: 1000, offset: 0})
      .setTween(tlm)
      //.addIndicators({name: 'Стоимость курса'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  // Страница курсов Блок Программа

  // Страница курсов Блок Учитель
  if ($('section').is('.teacher')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenMax.to('.scroll--teacher', 0.5, { y: 200 }),
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '.teacher', duration: 1000, offset: 0})
      .setTween(tlm)
      //.addIndicators({name: 'Стоимость курса'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  // Страница курсов Блок Учитель

  // Страница курсов Блок Материалы
  if ($('section').is('.material')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenMax.to('.scroll--material', 0.5, { y: 200 }),
        // TweenMax.to('.material__before', 0.5, { y: 100 }),
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '.material', duration: 1000, offset: 0})
      .setTween(tlm)
      //.addIndicators({name: 'Стоимость курса'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  // Страница курсов Блок Материалы

  // Страница курсов Блок Материалы
  if ($('section').is('.certificate')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenMax.to('.scroll--certificate', 0.5, { y: 100 })
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '.certificate', duration: 1000, offset: -200})
      .setTween(tlm)
      //.addIndicators({name: 'Стоимость курса'}) // add indicators (requires plugin)
      .addTo(controller);
  }
// Страница курсов Блок Материалы

}
