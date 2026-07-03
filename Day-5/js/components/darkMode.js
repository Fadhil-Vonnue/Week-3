export function onLoadSetTheme(toggleElement) {
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
  toggleElement.setAttribute("aria-pressed", "false");
  if (setTheme == "dark") {
    toggleElement.checked = true;
    toggleElement.setAttribute("aria-pressed", "true");
  }
}

export function darkModeToggle(e) {
    console.log(e)
  if (e.currentTarget.ariaPressed==="false") {
    console.log("HEYY")
    document.documentElement.setAttribute("data-theme", "dark");
    e.currentTarget.setAttribute("aria-pressed", "true");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    e.currentTarget.setAttribute("aria-pressed", "false");
    localStorage.setItem("theme", "light");
  }
}
