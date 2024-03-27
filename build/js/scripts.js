let menuBtn = document.querySelector('.menu-btn');
let menuBtnOpen = document.querySelector('.menu-btn__open');
let menuText = document.querySelector('.menu-text')
let menu = document.querySelector('.nav--left');
let menuItem = document.querySelectorAll('.nav__link--left');
let dropLang = document.querySelector('.dropdown');
let dropContent = dropLang.querySelector('.dropdown-content');
let scrollBtn = document.querySelector('.btnScrollToTop');


const btnScrollToTop = document.querySelector(".btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (window.innerWidth <= 1280 && scrollPosition >= 35) {
        document.querySelector('.header__container').classList.add('scrolled');
        document.querySelector('.header__container').style.top = '0';

        document.querySelector('.header__container').transition = 'top 0.5s ease';
    } else {
        document.querySelector('.header__container').classList.remove('scrolled');
        document.querySelector('.header__container').style.top = '';
        if (scrollPosition <= 35) {
            document.querySelector('.nav--left').style.top = '';
        }
        document.querySelector('.header__container').transition = 'top 0.5s ease';
    }
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var navLeftActive = document.querySelector('.nav--left');

    if (scrollPosition >= 35) {
        navLeftActive.style.top = '0';
    } else {
        navLeftActive.style.top = '';
    }
})


window.addEventListener('scroll', function() {
    var sections = document.getElementsByTagName('section');
    var firstSection = sections.length > 0 ? sections[0] : null;

    if (!firstSection) return;

    var firstSectionHeight = firstSection.offsetHeight;
    var burgerSpans = document.querySelectorAll('.bar');
    var burgerText = document.querySelector('.menu-btn__body--text');

    if (window.innerWidth <= 1280) {
        return;
    }

    if (window.scrollY > firstSectionHeight) {
        scrollBtn.classList.add('show');
        scrollBtn.style.background = "#000";
        scrollBtn.innerHTML.style.color = "#fff"
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



const moreIdeas = new Swiper('.moreIdeas', {

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
        // 320: {
        //     slidesPerView: 1,
        //     spaceBetween: 20
        // },
        // when window width is >= 480px
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        481: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15
        },
    }
});