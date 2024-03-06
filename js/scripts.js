let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav--left');
let menuItem = document.querySelectorAll('.nav__link--left');
let dropLang = document.querySelector('.dropdown');
let dropContent = dropLang.querySelector('.dropdown-content');
let splide = new Splide('.splide');
let bar = splide.root.querySelector('.my-slider-progress-bar');




dropLang.addEventListener('click', function() {
    dropContent.classList.toggle('active');
});



menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    if (menuBtn.classList.contains('active')) {
        menuBtn.style.position = "relative";
        menuBtn.style.left = "-200px";
    } else {
        menuBtn.style.left = "5px";
    }
})

dropLang.addEventListener('click', function() {
    dropLang.classList.toggle('active');
})



menuItem.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
})



splide.on('mounted move', function() {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);

    // Check if bar is not null before accessing its style property.
    if (bar) {
        bar.style.width = String(100 * rate) + '%';
    } else {
        console.log("Error: 'bar' is null");
    }
});

splide.mount();


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