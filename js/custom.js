//header fixed js start
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 1) {
        $("#navigation").removeClass("navbar-fixed");
    } else {
        $("#navigation").addClass("navbar-fixed");
    }
});
//header fixed js ends

// navbar scorlling js start here
//a[href*="#"]:not([href="#"])
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
// navbar scorlling js ends here

// scrollspy js start
$('body').scrollspy({
    target: '#navbarSupportedContent'
})
// scrollspy js ends


// veno box js
$('.venobox').venobox();

//counter js start
$('.counter').counterUp({
    delay: 10,
    time: 2000
})
//counter js ends


$('.team_slide').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                slidesToShow: 2,
            }
            },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
            },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
            }
        ]
});

$('.test_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                slidesToShow: 2,
            }
            },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
            }
        ]
});


//    filter plugin
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: 1
    }
})
$('.project_menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

$('.project_menu li button').on('click', function (event) {
    $('.project_menu li button').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
})

// Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });