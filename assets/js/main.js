$(document).ready(function () {
    feather.replace()

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".navbar").addClass("fixed");
        } else {
            $(".navbar").removeClass("fixed");
        }
    });

    const scrollToTop = document.getElementById('scroll-to-top');
    let dataShow = false;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50 && !dataShow) {
            scrollToTop.setAttribute('data-show', 'true');
            dataShow = true;
        }

        if (window.scrollY <= 50 && dataShow) {
            scrollToTop.setAttribute('data-show', 'false');
            dataShow = false;
        }
    });
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    $('.owl-carousel.content-section-advantages').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.owl-carousel.content-section-website-usability').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.owl-carousel.content-section-template').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});