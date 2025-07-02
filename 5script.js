const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    direction: "horizontal",
    loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const showMoreBtn = document.querySelector(".slider-text");
const hiddenBrands = document.querySelectorAll(".slider-brands--unvisible-laptop");
showMoreBtn.addEventListener("click", function () {
  hiddenBrands.forEach((brand) => {
    brand.classList.toggle("slider-brands--unvisible-laptop");
  });
  this.textContent = this.textContent.includes("Показать")
    ? "Скрыть"
    : "Показать все";
});
