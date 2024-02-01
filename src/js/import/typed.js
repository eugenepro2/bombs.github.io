import Typed from 'typed.js';
import device from 'current-device';

//Анимация печатания текста на первом экране
if (device.mobile()) {
  if($('span').is('.typed')) {
    let typed = new Typed('.typed', {
      strings: ['characters', 'sketches'],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });
  }
  
} else{
  if($('span').is('.typed')) {
    let typed = new Typed('.typed', {
      strings: ['characters', 'architectural sketches', 'Cool postcards'],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });
  }
}

