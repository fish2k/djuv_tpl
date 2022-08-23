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

    const shipSlider = new Swiper(".ship-slider", {
        slidesPerView: 6.8,
        spaceBetween: 25,
    })

    const accordion = $(".accordion-item");

    accordion.on("click", function() {
        accordion.removeClass("active");
        $(this).addClass("active");

        checkActiveAccordion();
    });

    const checkActiveAccordion = () => {
        accordion.each(function() {
            if ($(this).hasClass("active")) {
                accordion.find(".accordion-content").stop().slideUp(250);
                $(this).find(".accordion-content").stop().slideDown(250);
            }
        })
    }

    $(".accordion-content").on("click", e => e.stopPropagation())

    $(".accordion-plus").on("click", function(e) {
        e.stopPropagation();
        $(this).parent().parent().parent()
            .removeClass("active").find(".accordion-content").stop().slideUp();
    })

    checkActiveAccordion();

    const inputField = $(".input-field");

    $(".input-field-element").each(function() {
        if ($(this).val().length > 0) {
            $(this).parent().addClass("show-label")
        }

        $(this).on("keyup", function() {
            if ($(this).val().length > 0) {
                $(this).parent().addClass("show-label");
            } else {
                $(this).parent().removeClass("show-label");
            }
        })
    });

    $(".user-edit-toggle").on("click", function() {
        $(".user-info-form").stop().slideToggle();
        $(".user-info").stop().slideToggle();
    });
    
    // USER FORM SUBMIT
    $("#user_edit_form").submit(function(e) {
        e.preventDefault();
    })
});