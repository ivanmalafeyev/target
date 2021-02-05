"use strict";

function testWebP(cb) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    cb(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
var img = document.querySelectorAll("._ibg");
Array.prototype.forEach.call(img, function (value) {
  if (value.querySelector("img")) {
    value.style.backgroundImage = "url(" + value.querySelector("img").getAttribute("src") + ")";
  }
});
;
var menuIcon = document.querySelector(".menu__icon");
var menu = document.querySelector(".header__menu");
var links = document.querySelectorAll(".menu__link");
menuIcon.addEventListener("click", function () {
  function toggleClass(c) {
    menuIcon.classList.toggle(c);
    menu.classList.toggle(c);
    [].forEach.call(links, function (lnk) {
      lnk.classList.toggle("_active");
    });
    document.body.classList.toggle("_lock");
  }

  toggleClass("_active");

  function linkCB() {
    toggleClass("_active");
    [].forEach.call(links, function (l) {
      l.removeEventListener("click", linkCB);
    });
  }

  [].forEach.call(links, function (l) {
    l.addEventListener("click", linkCB);
  });
});
;
var PLACEHOLDER_OPACITY = 0.5;
var inputs = document.querySelectorAll(".input");

if (inputs) {
  [].forEach.call(inputs, function (e) {
    var dv = e.getAttribute("data-value");
    var isPlaceholder = true;
    e.isPlaceholder = isPlaceholder;

    if (dv) {
      e.style.color = "rgba(24, 24, 24, ".concat(PLACEHOLDER_OPACITY, ")");
      e.value = dv;
    }

    e.addEventListener("focus", function () {
      if (isPlaceholder) {
        e.value = "";
        isPlaceholder = false;
        e.isPlaceholder = isPlaceholder;
        e.style.color = "rgba(24, 24, 24, 1)";
      }
    });
    e.addEventListener("blur", function () {
      if (e.value === "") {
        e.value = dv;
        isPlaceholder = true;
        e.isPlaceholder = isPlaceholder;
        e.style.color = "rgba(24, 24, 24, ".concat(PLACEHOLDER_OPACITY, ")");
      }
    });
  });
}

var form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", function (e) {
    if (formValidate(form) === 0) {//
    } else {
      e.preventDefault();
    }
  });
}

function formValidate() {
  var error = 0;
  var formReq = document.querySelectorAll(".req");
  [].forEach.call(formReq, function (e) {
    formRemoveError(e);

    if (e.classList.contains("email")) {
      if (emailTest(e)) {
        formAddError(e);
        error++;
      }
    } else if (e.getAttribute("type") === "checkbox" && e.checked === false) {
      formAddError(e);
      error++;
    } else {
      if (e.value === "" || e.isPlaceholder) {
        formAddError(e);
        error++;
      }
    }
  });
  return error;
}

function formAddError(input) {
  input.parentElement.classList.add("_err");
  input.classList.add("_err");
}

function formRemoveError(input) {
  input.parentElement.classList.remove("_err");
  input.classList.remove("_err");
}

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

function digi(str) {
  return str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}

function digiAnimate(digiAnimate) {
  if (digiAnimate.length > 0) {
    [].forEach.call(digiAnimate, function (el) {
      var elTo = +el.innerHTML.replace(" ", "");

      if (!el.classList.contains("_done")) {// digiAnimateValue(el, 0, elTo, 1500);
      }
    });
  }
}

;
var mySwiper = new Swiper(".item-cases__swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  slidesPerView: 1,
  // autoHeight: false,
  speed: 400,
  // Navigation arrows
  navigation: {
    nextEl: ".controls-cases__btn--next",
    prevEl: ".controls-cases__btn--prev"
  }
});
;
var menuHeader = document.querySelector(".header"); // const links = document.querySelectorAll(".menu__link");

var scrolled = false;
var blocks = [];
var current = -1;

function getBlocks() {
  [].forEach.call(links, function (l) {
    blocks.push(document.querySelector("." + l.getAttribute("href").split("#")[1]));
  });
}

getBlocks();
window.addEventListener("scroll", function () {
  scrollUpdate();
});
scrollUpdate();

function scrollUpdate() {
  if (pageYOffset > 0) {
    scrolled = true;

    if (scrolled) {
      menuHeader.classList.add("_scrolled"); // mainBlock.style.marginTop = `${menuHeader.offsetHeight}px`;
    }
  } else {
    scrolled = false; // mainBlock.style.marginTop = `0px`;

    menuHeader.classList.remove("_scrolled");
  }

  var boxes = [];
  Array.prototype.forEach.call(blocks, function (b) {
    boxes.push(Math.abs(b.getBoundingClientRect().top));
  });
  var min = Math.min.apply(Math, boxes);
  var i = boxes.indexOf(min);

  if (i != current || min >= 500) {
    current = -1;
    Array.prototype.forEach.call(links, function (l) {
      l.classList.remove("_current");
    });

    if (min < 500) {
      current = i;
      links[i].classList.add("_current"); // links[i + links.length / 2].classList.add("_current");
    }
  }
}

function toggleClass(c) {
  menuIcon.classList.toggle(c);
  menu.classList.toggle(c);
  [].forEach.call(links, function (lnk) {
    lnk.classList.toggle("_active");
  });
  document.body.classList.toggle("_lock");
} //smooth scroll from first fullscreen to content


var gotos = document.querySelectorAll("._goto");

if (gotos) {
  [].forEach.call(gotos, function (e) {
    e.parentNode.addEventListener("click", function () {
      if (menuIcon) {
        if (menuIcon.classList.contains("_active")) {
          toggleClass("_active");
        }
      }

      var link = e.getAttribute("href");

      if (link) {
        var box = document.querySelector("." + link.split("#")[1]).getBoundingClientRect();
        window.scrollTo({
          top: box.top + pageYOffset - menuHeader.offsetHeight,
          behavior: "smooth"
        });
      }
    });
  });
}

var itemCases = document.querySelectorAll(".item-cases");
[].forEach.call(itemCases, function (item, i) {
  item.style.zIndex = itemCases.length - i;
  item.style.opacity = 1 - 0.05 * i;
  item.style.left = i * 40 + "px";
  item.style.top = i * 10 + "px";
}); // const bNext = document.querySelector(".controls-cases__btn--next");
// const bPrev = document.querySelector(".controls-cases__btn--prev");

var sItems = document.querySelector(".cases-content__items").children;
var currentOpacity = 1;
var currentZIndex = sItems.length;
var itIndex = 0;

if (sItems) {
  // if (bNext) {
  //   bNext.addEventListener("click", (e) => {
  //     // sItems[itIndex].classList.toggle("_active");
  //     sItems[itIndex].style.opacity = currentOpacity;
  //     sItems[itIndex].style.zIndex = currentZIndex;
  //     if (itIndex < sItems.length - 1) {
  //       itIndex++;
  //     } else {
  //       itIndex = 0;
  //     }
  //     // sItems[itIndex].classList.toggle("_active");
  //     currentOpacity = sItems[itIndex].style.opacity;
  //     currentZIndex = sItems[itIndex].style.zIndex;
  //     sItems[itIndex].style.opacity = 1;
  //     sItems[itIndex].style.zIndex = 100;
  //   });
  // }
  // if (bPrev) {
  //   bPrev.addEventListener("click", (e) => {
  //     // sItems[itIndex].classList.toggle("_active");
  //     sItems[itIndex].style.opacity = currentOpacity;
  //     sItems[itIndex].style.zIndex = currentZIndex;
  //     if (itIndex > 0) {
  //       itIndex--;
  //     } else {
  //       itIndex = sItems.length - 1;
  //     }
  //     // sItems[itIndex].classList.toggle("_active");
  //     currentOpacity = sItems[itIndex].style.opacity;
  //     currentZIndex = sItems[itIndex].style.zIndex;
  //     sItems[itIndex].style.opacity = 1;
  //     sItems[itIndex].style.zIndex = 100;
  //   });
  // }
  var contentCases = document.querySelector(".content__cases");

  if (contentCases && sItems) {
    contentCases.style.marginBottom = +window.getComputedStyle(contentCases).marginBottom.split("px")[0] + (sItems.length - 1) * 10 + "px";
  }

  var controlsCases = document.querySelector(".controls-cases");

  if (controlsCases && sItems) {
    controlsCases.style.marginBottom = -(sItems.length - 1) * 10 + "px";
  }
} // Spoilers


var spoilers = document.querySelectorAll("._spoilers");

if (spoilers) {
  [].forEach.call(spoilers, function (el) {
    var spoilerItems = el.querySelectorAll("._spoiler");
    [].forEach.call(spoilerItems, function (spoiler) {
      var spoilerBody = spoiler.nextElementSibling;
      spoiler.addEventListener("click", function (e) {
        spoiler.classList.toggle("_active");

        _slideToggle(spoilerBody, spoiler);
      });
    });
  });
}

var _slideUp = function _slideUp(target) {
  var pauseTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

  if (pauseTarget) {
    pauseTarget.style.pointerEvents = "none";
  }

  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  setTimeout(function () {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("transition-duration");
    target.classList.remove("_slide");

    if (pauseTarget) {
      pauseTarget.style.pointerEvents = "all";
    }
  }, duration);
};

var _slideDown = function _slideDown(target) {
  var pauseTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

  if (pauseTarget) {
    pauseTarget.style.pointerEvents = "none";
  }

  target.style.removeProperty("display");
  var display = window.getComputedStyle(target).display;

  if (display === "none") {
    display = "block";
  }

  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  setTimeout(function () {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("transition-duration");
    target.classList.remove("_slide");

    if (pauseTarget) {
      pauseTarget.style.pointerEvents = "all";
    }
  }, duration);
};

var _slideToggle = function _slideToggle(target) {
  var pauseTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");

    if (window.getComputedStyle(target).display === "none") {
      return _slideDown(target, pauseTarget, duration);
    } else {
      return _slideUp(target, pauseTarget, duration);
    }
  }
};