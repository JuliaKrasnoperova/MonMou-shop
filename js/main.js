// Owl carousel
$(document).ready(function () {
    // Находим блок с слайдами
    const owl = $('#products-slider');
    // Запускаем карусель
    owl.owlCarousel({
        items: 3,
        //autoplay: true,
        speed: 900,
        autoplaySpeed: 1000,
        loop: true,
        dots: false,
        // responsive: {
        900: {
            items: 2,

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