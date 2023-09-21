const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.nav__toggle');

const sliderButton = document.querySelector('.slider__button');
const slider = document.querySelector('.slider');

nav.classList.add('nav--closed');
nav.classList.remove('nav--nojs');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
});

if(sliderButton){
  sliderButton.addEventListener('click', () => {
    const stateBefore = document.querySelector('.slider--state-before');
    const stateAfter = document.querySelector('.slider--state-after');
    if (stateBefore || stateAfter) {
      slider.classList.toggle('slider--state-before');
      slider.classList.toggle('slider--state-after');
    } else {
      slider.classList.add('slider--state-after');
    }
  })
}
