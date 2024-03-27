const retailSwiper = new Swiper('.productsSwiper', {

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
    // breakpoints: {
    //     480: {
    //         slidesPerView: "auto",
    //         spaceBetween: 20
    //     },
    //     768: {
    //         slidesPerView: "auto",
    //         spaceBetween: 20
    //     },
    // }
});