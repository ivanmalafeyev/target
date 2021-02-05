const mySwiper = new Swiper(".item-cases__swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  slidesPerView: 1,
  // autoHeight: false,
  speed: 400,

  // Navigation arrows
  navigation: {
    nextEl: ".controls-cases__btn--next",
    prevEl: ".controls-cases__btn--prev",
  },
});
