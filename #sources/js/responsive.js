// let w, h;
// w = window.outerWidth;
// h = window.outerHeight;

// function resize() {
//   adiptiveHeader("header-menu", "header-top-lang", "header-top");
//   adiptiveHeader("header-menu", "header-bottom-menu", "header-bottom__column");
// }

// function adiptiveHeader(burgerMenuClass, elementClass, returnPointClass) {
//   let burgerMenu = document.querySelector("." + burgerMenuClass);
//   let element = document.querySelector("." + elementClass);
//   let returnPoint = document.querySelector("." + returnPointClass);
// if (burgerMenu && element && returnPoint) {
//   if (w < 768) {
//     if (!element.classList.contains("done")) {
//       element.classList.add("done");
//       burgerMenu.append(element);
//     }
//   } else {
//     element = burgerMenu.querySelector("." + elementClass);
//     if (element) {
//       if (element.classList.contains("done")) {
//         element.classList.remove("done");
//         if (element.classList.contains(elementClass + "--right")) {
//           returnPoint.parentNode.lastChild.previousSibling.prepend(element);
//         } else {
//           returnPoint.prepend(element);
//         }
//       }
//     }
//   }}
// }

// window.addEventListener("resize", () => {
//   w = window.outerWidth;
//   h = window.outerHeight;
//   resize();
// });

// resize();
let wo, ho, wi, hi;
wo = window.outerWidth;
ho = window.outerHeight;
wi = window.innerWidth;
hi = window.innerHeight;

function resize() {
  // document.querySelector(".mainblock").style.minHeight = hi + "px";
}

// window.addEventListener("resize", () => {
//   wo = window.outerWidth;
//   ho = window.outerHeight;
//   wi = window.innerWidth;
//   hi = window.innerHeight;
//   resize();
// });

// resize();

const menuIcon = document.querySelector(".menu__icon");
const menu = document.querySelector(".header__menu");
const links = document.querySelectorAll(".menu-header__link");

menuIcon.addEventListener("click", () => {
  function toggleClass(c) {
    menuIcon.classList.toggle(c);
    menu.classList.toggle(c);
    [].forEach.call(links, (lnk) => {
      lnk.classList.toggle("_active");
    });
    document.body.classList.toggle("_lock");
  }
  toggleClass("_active");

  function linkCB() {
    toggleClass("_active");
    [].forEach.call(links, (l) => {
      l.removeEventListener("click", linkCB);
    });
  }

  [].forEach.call(links, (l) => {
    l.addEventListener("click", linkCB);
  });
});
