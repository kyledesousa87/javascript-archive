/**
 * Created by Kyle De Sousa on 14/11/2016.
 */


// header navigation active state

$('nav li a').click(function(e) {
    e.preventDefault();
    $('a').removeClass('active');
    $(this).addClass('active');
});


$(".tt-offer-link").on({
    mouseenter: function () {
        $(this).closest('.row').find('.tt-offer-screen').attr('style', $(this).attr('data-img'));
    },
    mouseleave: function () {

    }
});

// drop down menu click

$(function() {
    menu = $('nav ul');

    $('#openup').on('click', function(e) {
        e.preventDefault(); menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li a').on('click', function(e) {
        var w = $(window).width(); if(w < 480 ) {
            menu.slideToggle();
        }
    });


    $('.open-menu').height($(window).height());
});
