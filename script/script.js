setInterval(() => {
  anime({
    targets: '.anime__block-el',
    scale: [{
        value: .2,
        easing: 'easeOutSine',
        duration: 500
      },
      {
        value: 1,
        easing: 'easeInOutQuad',
        duration: 1200
      }
    ],
    delay: anime.stagger(300, {
      grid: [12, 6],
      from: 'center'
    })
  });
}, 3000);

let form = document.querySelector('.from')
let str = document.querySelector('.right__subtitle-text')

form.addEventListener('click', e => {

  anime({
    targets: '.image',
    translateX: {
      value: 208,
      duration: 800
    },
    rotate: {
      value: 360,
      duration: 1800,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 1.1,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay: 250 // All properties except 'scale' inherit 250ms delay
  });

  setTimeout(() => {
    str.style.opacity = 1
    let link = form.setAttribute('href', 'https://animejs.com/documentation/#specificPropParameters')
  }, 1000);



})