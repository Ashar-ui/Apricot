$('.about-us').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});
// quote 
$('.quote').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 10,
    autoplay: true,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});
// quote ends

$('.btf-5-slide').owlCarousel({
    loop: true,
    margin: 69,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            loop: false
        }
    }
})

$('.btf-5-slide-right').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    margin: 20,
    responsive: {
        0: {
            items: 1.5,
            nav: true,
        },
        600: {
            items: 1.5,
            nav: true,
        },
        1000: {
            items: 1.5,

        }
    }
});
// 4th slider 
$(document).ready(function() {

    $(".btf-8-slide").owlCarousel({
        margin: 20,
        navigation: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            600: {
                items: 1,
                dots: true,

            },
            1000: {
                items: 3,
                nav: true,
                nav: false,

            }
        }

    });

});
// nav 
$(".menu").click(function() {
    $("span").toggleClass("change");
    $(".close").slideToggle("");
});
// practice
if (screen.width < 768) {
    $('.col-right').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false

            }
        }
    })
}
// red card
if (screen.width < 992) {
    $('.cards-1').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false

            }
        }
    })
}
// cards-2 
if (screen.width < 767) {
    $('.cards-2').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false

            }
        }
    })
}
// video 
$(document).ready(function() {
    // $('#videoButton').on('click', function(ev) {
    //     $("#myVideo")[0].src += "&autoplay=1";
    //     ev.preventDefault();

    // });
    $(".video-button").click(function() {
        $(this).hide()
        $(this).parent().addClass('play')
    });
});