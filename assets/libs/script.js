$(document).ready(function() {
    $("#header").load("_header.html");
    $("#footer").load("_footer.html");

    var homeSlider = new Swiper(".home-slider", {
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
            prevEl: '.home-nav-prev',
            nextEl: '.home-nav-next',
        },
        pagination: {
            el: '.home-slider-pagination',
            clickable: true,
        }
    });

    var detailThumbsSlider = new Swiper(".product-slider-thumbnails", {
        slidesPerView: 4,
        freeMode: true,

        breakpoints: {
            0: {
                direction: "horizontal",
                spaceBetween: 15,
                autoHeight: false,
            },
            481: {
                direction: "vertical",
                spaceBetween: 30,
                autoHeight: true,
            }
        }
    });

    const detailSlider = new Swiper(".product-slider-main", {
        slidesPerView: 1,
        //loop: true,
        height: "auto",

        pagination: {
            el: ".product-slider-pagination",
        },

        thumbs: {
            swiper: detailThumbsSlider,
        }
    });

    const moreSlider = new Swiper(".more-slider", {
        slidesPerView: 4,
        spaceBetween: 30,

        navigation: {
            prevEl: ".more-nav-prev",
            nextEl: ".more-nav-next",
        }
    });
});