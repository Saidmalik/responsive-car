import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from "swiper";
import * as mainFunc from "./modules/main.js";
import mixitup from "mixitup";
import ScrollReveal from "scrollreveal";

flsFunctions.isWebp();
mainFunc.showMenu();
mainFunc.removeMenuMobile();
mainFunc.scrollHeader();
mainFunc.linkActiveFeatured();
// mainFunc.scrollActive();

const swiperPopular = new Swiper(".popular__container", {
  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  spaceBetween: 24,
  loop: true,
  slidesPerView: "auto", //shows cards related to the actual width
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

const mixerFeatured = mixitup(".featured__content", {
  selectors: {
    target: ".featured__card",
  },
  animation: {
    duration: 300,
  },
});
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});
sr.reveal(
  ".home__title, .popular__container, .features__img,  .featured__filters"
);
sr.reveal(".home__subtitle", { delay: 500 });
sr.reveal(".home__elec", { delay: 600 });
sr.reveal(".home__img", { delay: 800 });
sr.reveal(".home__car-data", {
  delay: 900,
  interval: 100,
  origin: "bottom",
});
sr.reveal(".home__button", {
  delay: 1000,
  origin: "bottom",
});
sr.reveal(".about__group, .offer__data", { origin: "left" });
sr.reveal(".about__data, .offer__img", { origin: "right" });
sr.reveal(".features__map", { delay: 600, origin: "bottom" });
sr.reveal(".features__card", { interval: 300 });
sr.reveal(".featured__card, .logos__content, .footer__content", {
  interval: 100,
});