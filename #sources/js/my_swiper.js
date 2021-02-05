const mySwiper = new Swiper(".main-slider__body", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  // autoHeight: false,
  speed: 500,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".control-main-slider__arrow--next",
    prevEl: ".control-main-slider__arrow--prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // },
  breakpoints: {
    320: {
      autoHeight: true,
    },
    768: {
      autoHeight: false,
    },
  },
});
