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


//  Num counter
function numCounter(selector, number, time, step) {
    const counter = document.querySelector(selector)

    let res = 0

    const allTime = Math.round(time / (number / step))

    let interval = setInterval(() => {
        res = res + step

        if (res === number) {
            clearInterval(interval)
        }
        counter.innerHTML = res
    }, allTime)
}

// ДАННАЯ ФУНКЦИЯ МОЖЕТ БЫТЬ ВЫЗВАННА НЕОГРАНИЧЕННОЕ КОЛИЧЕСВТО РАЗ

// Первый аргумент - селектор, куда будем выводить результат ( с . если класс и с # если id). ПРИМЕР: '.num1' или '#num1'
// Второй аргумент - конечное значение которое будет показано на странице
// Третий аргумент - время анмации (миллисекунды)
// Четвертый аргумен - шаг анимации ( например добавляем по 1 или по 10 или по 100)
numCounter('#num1', 15, 2000, 1)
numCounter('#num2', 120, 2000, 1)
numCounter('#num3', 10000, 3000, 100)
numCounter('#num4', 60000, 4000, 1000)