@@include("webp.js");
@@include("ibg.js");
@@include("responsive.js");
@@include("forms.js");

const menuHeader = document.querySelector(".header");
const mainBlock = document.querySelector(".mainblock");
let scrolled = false;

// first fullscreen parallax effect
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
const gotos = document.querySelectorAll("._goto");
if (gotos) {
  [].forEach.call(gotos, (e) => {
    e.parentNode.addEventListener("click", () => {
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
