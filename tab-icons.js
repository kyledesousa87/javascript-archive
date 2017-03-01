/**
 * Created by Kyle De Sousa on 14/11/2016.
 */


$(document).ready(function(){
    //Tabs
    var tabFinish = 0;
    $('.tt-nav-tab-item').on('click', function () {

        document.getElementById('youtube1').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        document.getElementById('youtube2').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        document.getElementById('youtube3').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        document.getElementById('youtube4').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');

        var $t = $(this);
        if (tabFinish || $t.hasClass('active')) return false;
        tabFinish = 1;
        $t.closest('.tt-nav-tab').find('.tt-nav-tab-item').removeClass('active');
        $t.addClass('active');
        var index = $t.parent().parent().find('.tt-nav-tab-item').index(this);
        $t.parents('.tt-tab-nav-wrapper').find('.tt-tab-select select option:eq(' + index + ')').prop('selected', true);
        $t.closest('.tt-tab-wrapper').find('.tt-tab-info:visible').fadeOut(500, function () {
            var $tabActive = $t.closest('.tt-tab-wrapper').find('.tt-tab-info').eq(index);
            $tabActive.css('display', 'block').css('opacity', '0');
            tabReinit($tabActive.parents('.tt-tab-wrapper'));
            $tabActive.animate({opacity: 1});
            tabFinish = 0;
        });
    });
    $('.tt-tab-select select').on('change', function () {
        var $t = $(this);
        if (tabFinish) return false;
        tabFinish = 1;
        var index = $t.find('option').index($(this).find('option:selected'));
        $t.closest('.tt-tab-nav-wrapper').find('.tt-nav-tab-item').removeClass('active');
        $t.closest('.tt-tab-nav-wrapper').find('.tt-nav-tab-item:eq(' + index + ')').addClass('active');

        //$('.youtube').get(0).stopVideo();

        $t.closest('.tt-tab-wrapper').find('.tt-tab-info:visible').fadeOut(500, function () {
            var $tabActive = $t.closest('.tt-tab-wrapper').find('.tt-tab-info').eq(index);
            $tabActive.css('display', 'block').css('opacity', '0');
            tabReinit($tabActive.parents('.tt-tab-wrapper'));
            $tabActive.animate({opacity: 1});
            tabFinish = 0;
        });
    });

    function tabReinit($tab) {
        $tab.find('.swiper-container').each(function () {
            var thisSwiper = swipers['swiper-' + $(this).attr('id')];
            thisSwiper.update();
        });
    }



})




