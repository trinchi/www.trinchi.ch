$(document).on('ready', () => {

    $(window).on('scroll', () => {
        if($(window).scrollTop() > 200) {
            $('.header').addClass('header-scrolled');
        } else {
            $('.header').removeClass('header-scrolled');
        }
    });

});