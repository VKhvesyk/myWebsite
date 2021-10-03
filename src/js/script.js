'use strict';

window.onload = function() {
    const   preloader = document.querySelector('.preloader'),
            preloaderUp = document.querySelector('.preloader__up'),
            preloaderDown = document.querySelector('.preloader__down'),
            preloaderLeft = document.querySelector('.preloader__left'),
            preloaderRight = document.querySelector('.preloader__right'),
            preloaderText = document.querySelectorAll('.preloader__text');


        setTimeout(() => {
            preloaderLeft.style.visibility = 'visible';
            preloaderRight.style.visibility = 'visible';
            preloaderLeft.classList.add('hide-preloader-left');
            preloaderRight.classList.add('hide-preloader-right');
            preloaderLeft.style.height = '10px';
            preloaderRight.style.height = '10px';
        }, 200);

        setTimeout(() => {
            preloaderLeft.style.height = '50px';
            preloaderRight.style.height = '50px';
            preloaderLeft.classList.add('hide-grow');
            preloaderRight.classList.add('hide-grow');
        }, 1200);

        setTimeout(() => {
            preloaderText.forEach((item) => {
                item.classList.add('hide-fade-in');
                item.style.opacity = '1';
            });
        }, 2000);

        setTimeout(() => {
            preloaderUp.classList.add('hide-preloader-up');
            preloaderDown.classList.add('hide-preloader-down');
            setInterval(function() {
                preloader.classList.add('preloader-hidden');
          }, 1000);
        }, 2500);
};




const   scales = document.querySelectorAll('.scale'),
        markers = document.querySelectorAll('.scale span'); 

scales.forEach((item, index) => {
    markers[index].style.left = item.dataset.percent + '%';
});