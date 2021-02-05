@@include("webp.js");
@@include("ibg.js");
@@include("my_swiper.js");
@@include("responsive.js");
@@include("forms.js");

const menuHeader = document.querySelector(".header");
// const links = document.querySelectorAll(".menu__link");

const mainBlock = document.querySelector(".mainblock");
let scrolled = false;
const blocks = [];
let current = -1;

function getBlocks() {
  [].forEach.call(links, (l) => {
    blocks.push(
      document.querySelector("." + l.getAttribute("href").split("#")[1])
    );
  });
}
getBlocks();

window.addEventListener("scroll", () => {
  scrollUpdate();
});

scrollUpdate();

function scrollUpdate() {
  if (pageYOffset > 0) {
    scrolled = true;
    if (scrolled) {
      menuHeader.classList.add("_scrolled");
      // mainBlock.style.marginTop = `${menuHeader.offsetHeight}px`;
    }
  } else {
    scrolled = false;
    // mainBlock.style.marginTop = `0px`;
    menuHeader.classList.remove("_scrolled");
  }

  const boxes = [];
  Array.prototype.forEach.call(blocks, (b) => {
    boxes.push(Math.abs(b.getBoundingClientRect().top));
  });
  const min = Math.min(...boxes);
  const i = boxes.indexOf(min);
  if (i != current || min >= 500) {
    current = -1;
    Array.prototype.forEach.call(links, (l) => {
      l.classList.remove("_current");
    });
    if (min < 500) {
      current = i;
      links[i].classList.add("_current");
      // links[i + links.length / 2].classList.add("_current");
    }
  }
}

function toggleClass(c) {
  menuIcon.classList.toggle(c);
  menu.classList.toggle(c);
  [].forEach.call(links, (lnk) => {
    lnk.classList.toggle("_active");
  });
  document.body.classList.toggle("_lock");
}

//smooth scroll from first fullscreen to content
const gotos = document.querySelectorAll("._goto");
if (gotos) {
  [].forEach.call(gotos, (e) => {
    e.parentNode.addEventListener("click", () => {
      if (menuIcon) {
        if (menuIcon.classList.contains("_active")) {
          toggleClass("_active");
        }
      }
      const link = e.getAttribute("href");
      if (link) {
        const box = document
          .querySelector("." + link.split("#")[1])
          .getBoundingClientRect();
        window.scrollTo({
          top: box.top + pageYOffset - menuHeader.offsetHeight,
          behavior: "smooth",
        });
      }
    });
  });
}

// TABS -------------------------------------------------------
const allTabs = document.querySelectorAll("._tabs");
if (allTabs) {
  [].forEach.call(allTabs, (tab) => {
    const tabItems = tab.querySelectorAll("._tabs-item");
    Array.prototype.forEach.call(tabItems, (ti) => {
      ti.addEventListener("click", (e) => {
        if (!ti.classList.contains("_active")) {
          Array.prototype.forEach.call(tabItems, (t) => {
            t.classList.remove("_active");
          });
          ti.classList.add("_active");
          const index = Array.prototype.indexOf.call(
            ti.parentElement.children,
            ti
          );
          if (!!~index) {
            const blocks = tab.querySelectorAll("._tabs-block");
            if (blocks) {
              Array.prototype.forEach.call(blocks, (block) => {
                block.classList.remove("_active");
              });
              blocks[index].classList.add("_active");
            }
          }
        }
      });
    });
  });
}
// END TABS ---------------------------------------------------

const itemCases = document.querySelectorAll(".item-cases");
[].forEach.call(itemCases, (item, i) => {
  item.style.zIndex = itemCases.length - i;
  item.style.opacity = 1 - 0.05 * i;
  item.style.left = i * 40 + "px";
  item.style.top = i * 10 + "px";
});

const bNext = document.querySelector(".controls-cases__btn--next");
const bPrev = document.querySelector(".controls-cases__btn--prev");
const sItems = document.querySelector(".cases-content__items").children;
let currentOpacity = 1;
let currentZIndex = sItems.length;
let itIndex = 0;
if (sItems) {
  if (bNext) {
    bNext.addEventListener("click", (e) => {
      // sItems[itIndex].classList.toggle("_active");
      sItems[itIndex].style.opacity = currentOpacity;
      sItems[itIndex].style.zIndex = currentZIndex;
      if (itIndex < sItems.length - 1) {
        itIndex++;
      } else {
        itIndex = 0;
      }
      // sItems[itIndex].classList.toggle("_active");
      currentOpacity = sItems[itIndex].style.opacity;
      currentZIndex = sItems[itIndex].style.zIndex;
      sItems[itIndex].style.opacity = 1;
      sItems[itIndex].style.zIndex = 100;
    });
  }
  if (bPrev) {
    bPrev.addEventListener("click", (e) => {
      // sItems[itIndex].classList.toggle("_active");
      sItems[itIndex].style.opacity = currentOpacity;
      sItems[itIndex].style.zIndex = currentZIndex;
      if (itIndex > 0) {
        itIndex--;
      } else {
        itIndex = sItems.length - 1;
      }
      // sItems[itIndex].classList.toggle("_active");
      currentOpacity = sItems[itIndex].style.opacity;
      currentZIndex = sItems[itIndex].style.zIndex;
      sItems[itIndex].style.opacity = 1;
      sItems[itIndex].style.zIndex = 100;
    });
  }

  const contentCases = document.querySelector(".content__cases");
  if (contentCases) {
    contentCases.style.marginBottom =
      +window.getComputedStyle(contentCases).marginBottom.split("px")[0] +
      (sItems.length - 1) * 10 +
      "px";
  }
  const controlsCases = document.querySelector(".controls-cases");
  if (controlsCases) {
    controlsCases.style.marginBottom = -(sItems.length - 1) * 10 + "px";
  }
}
// Spoilers
const spoilers = document.querySelectorAll("._spoilers");
if (spoilers) {
  [].forEach.call(spoilers, (el) => {
    const spoilerItems = el.querySelectorAll("._spoiler");
    [].forEach.call(spoilerItems, (spoiler) => {
      const spoilerBody = spoiler.nextElementSibling;
      spoiler.addEventListener("click", (e) => {
        spoiler.classList.toggle("_active");
        _slideToggle(spoilerBody, spoiler);
      });
    });
  });
}

const _slideUp = (target, pauseTarget = null, duration = 500) => {
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
  setTimeout(() => {
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

const _slideDown = (target, pauseTarget = null, duration = 500) => {
  if (pauseTarget) {
    pauseTarget.style.pointerEvents = "none";
  }
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") {
    display = "block";
  }

  target.style.display = display;
  let height = target.offsetHeight;
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
  setTimeout(() => {
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

const _slideToggle = (target, pauseTarget = null, duration = 500) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    if (window.getComputedStyle(target).display === "none") {
      return _slideDown(target, pauseTarget, duration);
    } else {
      return _slideUp(target, pauseTarget, duration);
    }
  }
};
