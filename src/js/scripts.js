let menuBtn = document.querySelector('.menu-btn');
let menuBtnOpen = document.querySelector('.menu-btn__open');
let menuText = document.querySelector('.menu-text')
let menu = document.querySelector('.nav--left');
let menuItem = document.querySelectorAll('.nav__link--left');
let dropLang = document.querySelector('.dropdown');
let dropContent = dropLang.querySelector('.dropdown-content');


window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (window.innerWidth <= 1280 && scrollPosition >= 35) {
        document.querySelector('.header__container').classList.add('scrolled');
        document.querySelector('.header__container').style.top = '0';
    } else {
        document.querySelector('.header__container').classList.remove('scrolled');
        document.querySelector('.header__container').style.top = '';
        if (scrollPosition <= 35) {
            document.querySelector('.nav--left').style.top = '';
        }
    }
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var navLeftActive = document.querySelector('.nav--left');

    if (scrollPosition >= 35) {
        navLeftActive.style.top = '0';
    }
    else{
        navLeftActive.style.top = '';
    }
})


window.addEventListener('scroll', function () {
    var sections = document.getElementsByTagName('section');
    var firstSection = sections.length > 0 ? sections[0] : null;

    if (!firstSection) return;

    var firstSectionHeight = firstSection.offsetHeight;
    var burgerSpans = document.querySelectorAll('.bar');
    var burgerText = document.querySelector('.menu-btn__body--text');

    if (window.innerWidth <= 1024) {
        return;
    }

    if (window.scrollY > firstSectionHeight) {
        burgerSpans.forEach(function (span) {
            span.style.backgroundColor = '#000';
        });
        burgerText.style.color = '#000';
    } else {
        burgerSpans.forEach(function (span) {
            span.style.backgroundColor = '';
        });
        burgerText.style.color = '';
    }
});


dropLang.addEventListener('click', function () {
    dropContent.classList.toggle('active');
});

menuItem.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
})


menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menuBtnOpen.classList.toggle('active');
    menuText.classList.toggle('active');
    menu.classList.toggle('active');
})

menuBtnOpen.addEventListener('click', function () {
    menuBtnOpen.classList.remove('active');
    menu.classList.remove('active');
    menuText.classList.remove('active');
    menuBtn.classList.remove('active');
});