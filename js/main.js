$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 30,
        dots:true,
        loop: true,
        nav: true,
        navigationText: ['<div class="icon-arrow-left"></div>',
            '<div class="icon-arrow-right"></div>'],
        responsive:{
            320:{
                items:1,
            },
            480:{
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }

});

});
