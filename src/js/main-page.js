const mainSwiper = new Swiper('.main-swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

document
    .querySelector('.buttons-slide1')
    .addEventListener('click', function(e) {
        e.preventDefault();
        mainSwiper.slideTo(0, 0);
    });

document
    .querySelector('.buttons-slide2')
    .addEventListener('click', function(e) {
        e.preventDefault();
        mainSwiper.slideTo(1, 0);
    });

document
    .querySelector('.buttons-slide3')
    .addEventListener('click', function(e) {
        e.preventDefault();
        mainSwiper.slideTo(2, 0);
    });
document
    .querySelector('.buttons-slide4')
    .addEventListener('click', function(e) {
        e.preventDefault();
        mainSwiper.slideTo(3, 0);
    });

// Num counter
function numCounter(selector, number, time, step) {
    const counter = document.querySelector(selector);
    if (counter.innerHTML) return;
    let res = 0;
    const allTime = Math.round(time / (number / step));

    let interval = setInterval(() => {
        res = res + step;

        if (res >= number) {
            clearInterval(interval);
            res = number;
        }
        counter.innerHTML = res;
    }, allTime);
}


function startCountersWhenVisible() {
    const countersData = [
        { selector: '#num1', number: 15, time: 2000, step: 1 },
        { selector: '#num2', number: 120, time: 2000, step: 1 },
        { selector: '#num3', number: 10000, time: 3000, step: 100 },
        { selector: '#num4', number: 60000, time: 4000, step: 1000 }
    ];

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counterId = entry.target.id;
                const counterData = countersData.find(data => data.selector === `#${counterId}`);
                if (counterData) {
                    numCounter(counterData.selector, counterData.number, counterData.time, counterData.step);
                }
            }
        });
    });

    countersData.forEach(counterData => {
        const counterElement = document.querySelector(counterData.selector);
        if (counterElement && !counterElement.innerHTML) {
            observer.observe(counterElement);
        }
    });
}
startCountersWhenVisible();

//Swipers

const retailSwiper = new Swiper('.retailSwiper', {

    // If we need pagination
    slidesPerView: "auto",
    spaceBetween: 15,
    pagination: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 20
        },
    }
});

const logisticsSwiper = new Swiper('.logisticsSwiper', {

    // If we need pagination
    slidesPerView: "auto",
    spaceBetween: 15,
    pagination: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 20
        },
    }
});

const horecaSlider = new Swiper('.horecaSlider', {

    // If we need pagination
    slidesPerView: "auto",
    spaceBetween: 15,
    pagination: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 20
        },
    }
});

const lifeSlider = new Swiper('.lifeSwiper', {

    // If we need pagination
    slidesPerView: "auto",
    spaceBetween: 15,
    pagination: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 20
        },
    }
});
