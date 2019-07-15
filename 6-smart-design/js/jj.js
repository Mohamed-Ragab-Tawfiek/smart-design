$(document).ready(function ($) {

    $('#intro a').css({
        color: '#fff',
        'text-decoration': 'none'
    });
    $('.pen').animate({
        'margin-left': '25%'
    }, 600);
    $('.col-md-7.col-xs-12').animate({
        right: '2%'
    }, 600);

    //scroll animation
    $(window).on('scroll', function () {

        //offers
        if (($(window).scrollTop()) >= 700) {
            $('#offers .offers').animate({
                'margin-top': '10px'
            });
        }
        //third
        if (($(window).scrollTop()) >= 1300) {
            $('#third .text-box').fadeIn(1500);
        }
        //fourth
        if (($(window).scrollTop()) >= 1900) {
            $('#fourth .text-box').fadeIn(2000);
        }
        //info
        if (($(window).scrollTop()) >= 2200) {
            $('#info .form-group,#info .col-xs-12').animate({
                'top': '10px'
            }, 2000);
        }
        if (($(window).scrollTop()) >= 2600) {
            $('footer .social').animate({
                'left': '0'
            }, 1000);
            $('footer p').show().animate({
                'right': '0'
            }, 1000);
            $('footer .up').show().animate({
                'bottom': '0'
            }, 1000);
        }
    });
});
