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
