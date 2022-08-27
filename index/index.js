$(document).ready(function() {
    // Swiper: Slider
        new Swiper('.swiper-container', {
            loop: false,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 2,
            paginationClickable: false,
            spaceBetween: 10,
            breakpoints: {
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
            }
        });
    });
    