/**
 * Created by user on 15/11/2016.
 */

$(".tt-offer-link").on({
    mouseenter: function () {
        $(this).closest('.row').find('.tt-offer-screen').attr('style', $(this).attr('data-img'));
    },
    mouseleave: function () {
    }
});