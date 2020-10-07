$(document).ready(function(){

    $('.slider__content__wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        // autoplay: true,
        lazyLoad: 'ondemand',
        prevArrow: '<button type="button" class="slick-prev"> <span class="icon-arrow-left2 features"></span> </button>',
        nextArrow: '<button type="button" class="slick-next"> <span class="icon-arrow-right2 features"></span> </button>'
    });

    $('html, body').animate({ scrollTop: 0 });

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

    // открытие по кнопке и закрытие по символу модального окна

    const window_body = document.querySelector(".modal")
    const window_form = document.querySelector(".modal__window")
    const button_form = document.querySelector(".btn.btn-callback")
    const closeBtn = document.querySelector(".exit")

    button_form.onclick = function() {

        window_body.classList.add('modal_active');

        window_form.classList.add('modal__window_active');
    
        closeBtn.addEventListener('click', closingModal);

        function closingModal () {

            window_body.classList.remove('modal_active');
            window_form.classList.remove('modal__window_active');
        }

    };
        
});
