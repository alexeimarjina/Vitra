let menuBtn = document.querySelector('.menu-btn');
let menuBtnOpen = document.querySelector('.menu-btn__open');
let menuText = document.querySelector('.menu-text')
let menu = document.querySelector('.nav--left');
let menuItem = document.querySelectorAll('.nav__link--left');
let dropLang = document.querySelector('.dropdown');
let dropContent = dropLang.querySelector('.dropdown-content');


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= 35) {
        document.querySelector('.header__container').classList.add('scrolled');
        document.querySelector('.header__container').style.top = '0';
        document.querySelector('.nav--left').style.top = '0';
    } else {
        document.querySelector('.header__container').classList.remove('scrolled');
        document.querySelector('.header__container').style.top = '';
        document.querySelector('.nav--left').style.top = '';
    }
});

window.addEventListener('scroll', function() {
    var firstSection = document.querySelector('.main-section');
    var firstSectionHeight = firstSection.offsetHeight;
    var burgerSpans = document.querySelectorAll('.bar');
    var burgerText = document.querySelector('.menu-btn__body--text');

    // Check if the width of the viewport is less than or equal to 1024
    if (window.innerWidth <= 1024) {
        return; // Exit the function if condition is met
    }

    if (window.scrollY > firstSectionHeight) {
        burgerSpans.forEach(function(span) {
            span.style.backgroundColor = '#000';
        });
        burgerText.style.color = '#000';
    } else {
        burgerSpans.forEach(function(span) {
            span.style.backgroundColor = '';
        });
        burgerText.style.color = '';
    }
});




// window.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY || window.pageYOffset;

//     if (scrollPosition >= 35) {
//         document.querySelector('.header__container').classList.add('scrolled');
//         document.querySelector('.header__container').style.top = '0';

//     } else {
//         document.querySelector('.header__container').classList.remove('scrolled');
//         document.querySelector('.header__container').style.top = '';
//     }
// });


// let splide = new Splide('.splide');
// let bar = splide.root.querySelector('.my-slider-progress-bar');

dropLang.addEventListener('click', function() {
    dropContent.classList.toggle('active');
});

menuItem.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
})


menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menuBtnOpen.classList.toggle('active');
    menuText.classList.toggle('active');
    menu.classList.toggle('active');
})

menuBtnOpen.addEventListener('click', function() {
    menuBtnOpen.classList.remove('active');
    menu.classList.remove('active');
    menuText.classList.remove('active');
    menuBtn.classList.remove('active');
});



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
    // virtual: {
    // slides: (function() {
    //     const slides = [];
    //     for (var i = 0; i < 2; i += 1) {
    //         slides.push('Slide ' + (i + 1));
    //     }
    //     return slides;
    // })(),
    // },
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

    let res = 0;
    const allTime = Math.round(time / (number / step));

    let interval = setInterval(() => {
        res = res + step;

        if (res >= number) {
            clearInterval(interval);
            res = number; // Ensure the final value is exact
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
        if (counterElement) {
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
            slidesPerView: 1
                // spaceBetween: 20
        }
    }
});
const horecaSLider = new Swiper('.horecaSlider', {

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
            slidesPerView: 1
                // spaceBetween: 20
        }
    }
    //   // Responsive breakpoints
    //   breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    // }
});
const swiper2 = new Swiper('.mySwiper2', {

    // If we need pagination
    slidesPerView: 4,
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

      // Responsive breakpoints
      breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
    }
});