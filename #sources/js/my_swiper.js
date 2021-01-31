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

const myLotsSwiper = new Swiper(".lots__slide", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  speed: 800,
  // autoHeight: false,
  // slidesPerView: 1,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".lots-slider-next",
    prevEl: ".lots-slider-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // },
  breakpoints: {
    320: {
      autoHeight: true,
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      autoHeight: false,
      slidesPerView: 3,
    },
    975: {
      slidesPerView: 3,
    },
  },
});

const myQuotesSwiper = new Swiper(".slider-quotes__slider", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  speed: 800,
  effect: "fade",
  autoHeight: false,
  slidesPerView: 1,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".control-slider-quotes__circle",
    // prevEl: ".lots-slider-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // },
  breakpoints: {
    320: {
      autoHeight: true,
    },
    650: {
      autoHeight: false,
    },
  },
});
