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
; // let w, h;
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

var wo, ho, wi, hi;
wo = window.outerWidth;
ho = window.outerHeight;
wi = window.innerWidth;
hi = window.innerHeight;

function resize() {// document.querySelector(".mainblock").style.minHeight = hi + "px";
} // window.addEventListener("resize", () => {
//   wo = window.outerWidth;
//   ho = window.outerHeight;
//   wi = window.innerWidth;
//   hi = window.innerHeight;
//   resize();
// });
// resize();


var menuIcon = document.querySelector(".menu__icon");
var menu = document.querySelector(".header__menu");
var links = document.querySelectorAll(".menu-header__link");
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
var menuHeader = document.querySelector(".header");
var mainBlock = document.querySelector(".mainblock");
var scrolled = false; // first fullscreen parallax effect
// window.addEventListener("scroll", () => {
//   const s = pageYOffset / 2;
//   document.querySelector(
//     ".mainblock__bg"
//   ).style.transform = `translate3d(0, ${s}px, 0)`;
//   if (pageYOffset > 0) {
//     scrolled = true;
//     if (scrolled) {
//       menuHeader.style.backgroundColor = "rgba(34, 34, 34, 1)";
//       // mainBlock.style.marginTop = `${menuHeader.offsetHeight}px`;
//     }
//   } else {
//     scrolled = false;
//     // mainBlock.style.marginTop = `0px`;
//     menuHeader.style.backgroundColor = "transparent";
//   }
// });
//smooth scroll from first fullscreen to content

var gotos = document.querySelectorAll("._goto");

if (gotos) {
  [].forEach.call(gotos, function (e) {
    e.parentNode.addEventListener("click", function () {
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
} // TABS -------------------------------------------------------


var allTabs = document.querySelectorAll("._tabs");

if (allTabs) {
  [].forEach.call(allTabs, function (tab) {
    var tabItems = tab.querySelectorAll("._tabs-item");
    Array.prototype.forEach.call(tabItems, function (ti) {
      ti.addEventListener("click", function (e) {
        if (!ti.classList.contains("_active")) {
          Array.prototype.forEach.call(tabItems, function (t) {
            t.classList.remove("_active");
          });
          ti.classList.add("_active");
          var index = Array.prototype.indexOf.call(ti.parentElement.children, ti);

          if (!!~index) {
            var blocks = tab.querySelectorAll("._tabs-block");

            if (blocks) {
              Array.prototype.forEach.call(blocks, function (block) {
                block.classList.remove("_active");
              });
              blocks[index].classList.add("_active");
            }
          }
        }
      });
    });
  });
} // END TABS ---------------------------------------------------


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