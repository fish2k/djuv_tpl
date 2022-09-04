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
    });

    const inputField = $(".input-field");

    $(".input-field-element").each(function() {
        if ($(this).val().length > 0) {
            $(this).parent().addClass("show-label");
        }

        $(this).on("keyup", function() {
            if ($(this).val().length > 0) {
                $(this).parent().addClass("show-label");
            } else {
                $(this).parent().removeClass("show-label");
            }
        });
    }); 

    $(".user-edit-toggle").on("click", function() {
        $(".user-info-form").stop().slideToggle();
        $(".user-info").stop().slideToggle();
    });

    $(".operation-open").each(function() {
        $(this).on("click", function() {
            $(this).toggleClass("active");

            $(this)
                .parent().parent().parent()
                    .siblings("tr")
                        .find(".operation-details-cell").toggle();
        });
    });

    $("[name='ship_type']").each(function() {
        $(this).on("click", function() {
            let shipTypeValueClass = $(this).val();
            let shipType = $(this).parent().siblings().text();
            
            $(".ship-item").hide();
            $("." + shipTypeValueClass).show();
            $(".ship-type-selected").text(shipType)
        });
    });
    
    // USER FORM SUBMIT
    $("#user_edit_form").submit(function(e) {
        e.preventDefault();
    });
});