const menuIcon = document.querySelector(".menu__icon");
const menu = document.querySelector(".header__menu");
const links = document.querySelectorAll(".menu__link");

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
