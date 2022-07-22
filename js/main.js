// Owl carousel
$(document).ready(function () {
    // Находим блок с слайдами
    const owl = $('#products-slider');
    // Запускаем карусель
    owl.owlCarousel({
        items: 3,
        autoplay: true,
        speed: 900,
        autoplaySpeed: 1000,
        loop: true,
        dots: false,
        responsive: {
            320: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },

        }

    });

    // Находим кастомные кнопки Вперед / Назад
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    // Клик на кнопку Назад и прокрутка карусели
    prev.click(function () {
        owl.trigger('prev.owl.carousel')
    });
    // Клик на кнопку Вперед и прокрутка карусели
    next.click(function () {
        owl.trigger('next.owl.carousel')
    });
});


// Preloader

window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
};


// Burger Menu

const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--active');
    body.classList.toggle('_locked');
});

// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
    // Для каждой ссылки добавляем прослушку по событию "Клик"
    item.addEventListener('click', function () {
        navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
        nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
    })
})



// pop-up

let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('#popup__open');
let closePopupButton = document.querySelector('.popup__close');


openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('popup__active');
        body.classList.add('_locked');
    })
});
closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('popup__active');
    body.classList.remove('_locked');
});
document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('popup__active');
    }
});