// добавление слайдера на Jquery 

$(document).ready(function(){

    $('.slider__content__wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        // autoplay: true,
        // dots: true,
        lazyLoad: 'ondemand',
        prevArrow: '<button type="button" class="slick-prev"> <span class="icon-arrow-left2 features"></span> </button>',
        nextArrow: '<button type="button" class="slick-next"> <span class="icon-arrow-right2 features"></span> </button>'
    });

    // $('html, body').animate({ scrollTop: 0 });

    // код открытия/закрытия бургерного меню 

    const buter = document.querySelector (".menu");
    const kingburger = document.querySelector (".header__burger");
    const linkClick = document.querySelectorAll (".menu__link");
    // вызываем массив для шести айтемов добавляя постфикс "All"
    
    // kingburger.onclick = function () {
    //     buter.classList.toggle("menu_active")
    // };

    kingburger.addEventListener('click', function() {
            buter.classList.toggle('menu_active');
    });

    linkClick.forEach( function (piska) {
        piska.addEventListener('click', function() {
            buter.classList.toggle('menu_active');
        });
    });

    // const features = document.querySelector(".slider")
    // features.setAttribute('id', '#sliding');

    // открытие и закрытие  модального окна

    const window_body = document.querySelector(".modal")
    const window_form = document.querySelector(".modal__window")
    const button_form = document.querySelector(".btn.btn-callback")
    const closeBtn = document.querySelector(".exit")

    button_form.addEventListener('click', function() {

        window_body.classList.toggle('modal_active');

        window_form.classList.toggle('modal__window_active');
    
        closeBtn.addEventListener('click', closingModal);

        function closingModal () {

            window_body.classList.remove('modal_active');
            window_form.classList.remove('modal__window_active');
        }

    });

    // создание табов на JQUERY

    $('div.tabloids__tabs').on('click', 'div:not(.tabloids__tabs__item_active)', function() {
        $(this)
          .addClass('tabloids__tabs__item_active').siblings().removeClass('tabloids__tabs__item_active')
          .closest('div.container').find('div.tabscontent__wrapper').removeClass('tabscontent__wrapper_active').eq($(this).index()).addClass('tabscontent__wrapper_active');
    });
        
});
