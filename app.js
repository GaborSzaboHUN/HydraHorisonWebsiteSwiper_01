$('.slider-gallery-component').each(function (index) {
    const bgSwiper = new Swiper($(this).find('.swiper.is-slider-bg')[0], {
        slidesPerView: 1,
        loop: true,
        speed: 600,
        keyboard: true,
        effect: 'fade',
        allowTouchMove: false
    });

    const thumbSwiper = new Swiper($(this).find('.swiper.is-slider-thumbs')[0], {
        slidesPerView: 1,
        speed: 600,
        loop: true,
        loopedSlides: 6,
        slideToClickedSlide: true
    });

    const textSwiper = new Swiper($(this).find('.swiper.is-slider-titles')[0], {
        slidesPerView: "auto",
        speed: 600,
        loop: true,
        loopSlides: 8,
        slideToClickedSlide: true,
        mousewheel: true,
        keyboard: true,
        grabCursor: true,
        centeredSlides: true,
        slideActiveClass: 'is-active',
        slideDuplicateActiveClass: 'is-active',
        thumbs: {
            swiper: bgSwiper,
        },
        navigation: {
            nextEl: $(this).find('.swiper-next')[0],
            prevEl: $(this).find('.swiper-prev')[0],
        }
    });
});
