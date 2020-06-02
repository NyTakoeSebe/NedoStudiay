$(document).ready(function (){

  window.onscroll = function showHeader() {
    const header = $('.header');

    if(window.pageYOffset > 200){
        header.addClass('header__dark');
    } else{
        header.removeClass('header__dark');
    }
  }

});

// Scroll to anchors
(function () {

  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.header').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
              $('.header__nav').removeClass('header__nav-active');
          });
      });
  };
  scrollTo();
}());

// Burger menu

(function () {
    const burgerItem = $('.burger');
    const burgerClose = $('.header__nav-close');

    burgerItem.on('click', () => {
        $('.header__nav').addClass('header__nav-active');
    });
    
    burgerClose.on('click', () => {
        $('.header__nav').removeClass('header__nav-active');
        console.log(burgerClose)
    });
}());