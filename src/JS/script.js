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
        // kingburger.removeEventListener('click');
    });

    linkClick.forEach( (piska) => {
        piska.addEventListener('click', closeMenu);
        
        function closeMenu() {
            buter.classList.toggle('menu_active');
            // piska.removeEventListener('click', closeMenu);
        };
    });

    // const features = document.querySelector(".slider")
    // features.setAttribute('id', '#sliding');


    // ОТКРЫТИЕ И ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА

    const window = document.querySelector(".modal")
    const button = document.querySelector(".btn.btn-callback")
    const closeBtn = document.querySelector(".exit")

    button.addEventListener('click', function() {

        window.classList.toggle('modal_active');
        closeBtn.addEventListener('click', closingModal);
        window.addEventListener('click', closingBywindowClick);

        function closingModal () {
            window.classList.remove('modal_active');
            closeBtn.removeEventListener('click', closingModal);
            window.removeEventListener('click', closingBywindowClick);
        }
// ниже приведен код для закрытия модалки вне ее области ( но в области остального окна с классом .modal)
        function closingBywindowClick (event) {
            if (event.target===window) {
                closingModal();
            }      
        }
    });


    // создание табов на JQUERY

    // $('div.tabloids__tabs').on('click', 'div:not(.tabloids__tabs__item_active)', function() {
    //     $(this)
    //       .addClass('tabloids__tabs__item_active').siblings().removeClass('tabloids__tabs__item_active')
    //       .closest('div.container').find('div.tabscontent__wrapper').removeClass('tabscontent__wrapper_active').eq($(this).index()).addClass('tabscontent__wrapper_active');
    // });


    // код для создания табов вручную, без применения JQUERY FRAMEWORK

    const tabloids_tabs = document.querySelectorAll(".tabloids__tabs__item");
    const tabscontent = document.querySelectorAll(".tabscontent__wrapper");

    tabloids_tabs.forEach(function(tab, index) {
        tab.addEventListener('click', () => {
            changetab(index);
        });
    });

    function changetab(index) {
        for (let item of tabloids_tabs) {
            item.classList.remove("tabloids__tabs__item_active");
        }
        tabloids_tabs[index].classList.add("tabloids__tabs__item_active");

        for (let el of tabscontent) {
            el.classList.remove("tabscontent__wrapper_active");
        }
        tabscontent[index].classList.add("tabscontent__wrapper_active");

        tab.removeEventListener("click", changetab(index));
    }


    function valideForms(form) {
        
        $(form).validate({
            rules: {
                yourname: {
                required: true,
                minlength: 2
                },
    
                email: {
                  required: true,
                  email: true
                },
    
                tel: {
                    required: true,
                    minlength: 11
                },
                
                textarea: {
                    required: true
                }        
            },
    
            messages: {
                
                yourname: {
                    minlength: jQuery.validator.format("Вы ввели недостаточно символов"),
                    required: "Введите Ваше имя!"
                },
    
                email: {
                    required: "Укажите адрес электронной почты!",
                    email: "не пропустите знак @"
                },
    
                tel: {
                    required: "Проверьте корректность данных номера телефона",
                    minlength: jQuery.validator.format("Вы ввели недостаточно цифр"),
                },
                
                textarea: {
                    required: "Кратко опишите суть Вашего запроса"
                }    
            }
        });
    };

    valideForms("#main_form");
    valideForms("#order_form form");


    jQuery(function($){
        $('input[name="tel"]').mask("+7 (999) 999-9999",{placeholder:" "});
    });

});
