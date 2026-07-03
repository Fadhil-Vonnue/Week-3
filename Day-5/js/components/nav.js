document.querySelector(".drawer").ariaExpanded = false;
function openDrawer() {
  const isOpen = document.querySelector(".drawer").classList.toggle("open");
  if (isOpen) {
    document.querySelector(".drawer").ariaExpanded = true;
    document.body.style.overflow = "hidden";
  } else {
    document.querySelector(".drawer").ariaExpanded = false;
    document.body.style.overflow = "visible";
  }
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".drawer").classList.remove("open");
    document.querySelector(".drawer").ariaExpanded = false;
    document.body.style.overflow = "visible";
  }
});

const drawer = document.querySelector(".drawer");

export function trapFocus(element) {
  const focusableSelectors = "a[href]";
  const focusableElements = element.querySelectorAll(focusableSelectors);

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  if (firstFocusable) firstFocusable.focus();

  element.addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  });
}
trapFocus(drawer);