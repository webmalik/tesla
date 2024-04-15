import Swiper from 'swiper';

import 'swiper/css';

export function menu() {
    const button = document.querySelector('.header__button');
    const close = document.querySelector('.header__menu-close');
    const menu = document.querySelector('.header__menu');

    button.addEventListener('click', () => {
        menu.classList.add('active');
        document.addEventListener('click', handleClickOutside);
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
        document.removeEventListener('click', handleClickOutside);
    });

    function handleClickOutside(event) {
        if (!menu.contains(event.target) && event.target !== button) {
            menu.classList.remove('active');
            document.removeEventListener('click', handleClickOutside);
        }
    }
}

export function timer() {
    const timerElement = document.querySelector('.banner__timer');
    let interval = parseInt(timerElement.getAttribute('data-timer'));
    let endTime;
    let now = new Date();

    if (localStorage.getItem('localTimer')) {
        endTime = new Date(localStorage.getItem('localTimer'));
    } else {
        let end = new Date(now.getTime() + interval * 60000);
        console.log(end);
        localStorage.setItem('localTimer', end);
        endTime = new Date(localStorage.getItem('localTimer'));
    }

    function pad(num, size) {
        return ('000' + num).slice(-size);
    }

    function updateTimer() {
        now = new Date();

        let timeDiff = endTime.getTime() - now.getTime();

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        timeDiff -= days * (1000 * 60 * 60 * 24);
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        timeDiff -= hours * (1000 * 60 * 60);
        const minutes = Math.floor(timeDiff / (1000 * 60));
        timeDiff -= minutes * (1000 * 60);
        const seconds = Math.floor(timeDiff / 1000);
        timeDiff -= seconds * 1000;
        const milliseconds = Math.floor(timeDiff);

        timerElement.textContent = `${pad(days, 2)}:${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`;

        setTimeout(updateTimer, 100);
    }

    updateTimer();
}

export function reviewsSlider() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 35,
        centeredSlides: true,
        initialSlide: 1,
        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 16,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
        },
    });
}
