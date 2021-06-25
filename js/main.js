$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 30,
        dots:true,
        loop: true,
        nav: true,
        navigationText: ['<div class="icon-arrow-left"></div>',
            '<div class="icon-arrow-right"></div>'],
    });
});