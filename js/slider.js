const swipers = new Swiper(".what-you-get", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 25,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    1380: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 2.3,
      spaceBetween: 25,
    },
    1000: {
      slidesPerView: 2.1,
      spaceBetween: 25,
    },
    767: {
      slidesPerView: 1.5,
    },
    520: {
      slidesPerView: 1.3,
    },
    400: {
      slidesPerView: 1.2,
    },
    320: {
      slidesPerView: 1.1,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: false,
  },
});
if (window.matchMedia("(max-width: 1199px)").matches) {
  const swiper = new Swiper(".myfacilities", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    spaceBetween: 15,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      991: {
        slidesPerView: 2.5,
        spaceBetween: 25,
      },
      767: {
        slidesPerView: 3,
      },

      400: {
        slidesPerView: 1.5,
      },
      320: {
        slidesPerView: 1.3,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: false,
    },
  });
  const swiperss = new Swiper(".asseenonSwiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 5,
    spaceBetween: 15,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      767: {
        slidesPerView: 4,
      },

      400: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2.5,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: false,
    },
  });
}
const swiper = new Swiper(".banner", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
