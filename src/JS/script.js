$(document).ready(function(){

    $('.slider__content__wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        autoplay: true,
        lazyLoad: 'ondemand',
        prevArrow: '<button type="button" class="slick-prev"> <span class="icon-arrow-left2 features"></span> </button>',
        nextArrow: '<button type="button" class="slick-next"> <span class="icon-arrow-right2 features"></span> </button>'
    });

});
