// Inicializamos Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true, // Hacer que el carrusel se repita
    slidesPerView: 1, // Mostrar una diapositiva a la vez
    spaceBetween: 10, // Espacio entre las diapositivas
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
