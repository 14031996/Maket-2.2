const swiper = new Swiper('.swiper', {   // свайпер
    // Основные настройки
    direction: 'horizontal',
    loop: true,
  
    // Пагинация
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
});

const showMoreBtn = document.querySelector('.slider-text');    // сохранение кнопки 
const brandsMore = document.querySelector('.slider-container__unvisible-brands'); // сохранение класса с брендами

showMoreBtn.addEventListener('click', ()=> {             // обработчик событий на кпопку
brandsMore.classList.toggle('visible');                   // Переключение класса с flex

    if ( brandsMore.classList.contains('visible')) {         // Проверка наличия класса 
        showMoreBtn.textContent = 'Скрыть';
        brandsMore.classList.add ('.slider-container__visible-brands');    // Добавляет класс c none
    } else  {
        showMoreBtn.textContent = 'Показать все';
    }
});