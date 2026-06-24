let setTheme = localStorage.getItem("theme");
if (setTheme) {
  console.log("light set theme");
  document.documentElement.setAttribute("data-theme", setTheme);
} else {
  const getTheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (getTheme.matches) {
    console.log("getTheme");
    localStorage.setItem("theme", "dark");
  } else {
    console.log("light");
    localStorage.setItem("theme", "light");
  }
  setTheme = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", setTheme);
}
let toggle = 1;
document.getElementById("dark").setAttribute("aria-pressed", "false");
if (setTheme == "dark") {
  document.getElementById("dark").checked = true;
  document.getElementById("dark").setAttribute("aria-pressed", "true");
  toggle = 0;
}

document.getElementById("dark").addEventListener("click", function (e) {
  if (toggle) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("dark").setAttribute("aria-pressed", "true");
    localStorage.setItem("theme", "dark");
    toggle = 0;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("dark").setAttribute("aria-pressed", "false");
    localStorage.setItem("theme", "light");
    toggle = 1;
  }
});
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

function trapFocus(element) {
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