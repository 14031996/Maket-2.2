const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const showMoreBtn = document.querySelector(".slider-text");
const brandsMore = document.querySelector(".slider-container__unvisible-brands");
showMoreBtn.addEventListener("click", () => {
    brandsMore.classList.toggle("visible");
    if (brandsMore.classList.contains("visible")) {
        showMoreBtn.textContent = "Скрыть";
        brandsMore.classList.add(".slider-container__visible-brands");
    } else {
        showMoreBtn.textContent = "Показать все";
    }
});
