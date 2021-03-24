$(function(){$(".sidenav").html($(".hide-on-med-and-down").html()),$(".sidenav").sidenav(),$(".parallax").parallax()});
$(window).scroll(function() {
    let navbar = $('nav'), scroll = $(window).scrollTop();
    if (scroll > 350) {
        navbar.addClass('fixed');
        $('.scrollToTop').fadeIn();
    } else {
        navbar.removeClass('fixed');
        $('.scrollToTop').fadeOut();
    }
});