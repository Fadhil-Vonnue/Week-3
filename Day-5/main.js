import { openDrawer } from "./js/components/accordion.js";
import { onLoadSetTheme, darkModeToggle } from "./js/components/darkMode.js";
import { lightBox, trapFocus } from "./js/components/lightbox.js";
import { progressBar } from "./js/components/progressbar.js";
window.onload = (event) => {
  onLoadSetTheme(document.getElementById("dark"));
  document.getElementById("dark").addEventListener("click", (e) => {
    darkModeToggle(e);
  });
  document.querySelectorAll(".accordion-but").forEach((el) => {
    el.addEventListener("click", (e) => {
      openDrawer(
        e.currentTarget,
        e.currentTarget.parentElement.querySelector(".accordionContent"),
      );
    });
  });
  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 600) {
      document.querySelector(".backtop").style.display = "flex";
    } else {
      document.querySelector(".backtop").style.display = "none";
    }
  });

  document.querySelector(".backtop").addEventListener("click", (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const path = window.location.pathname;
  if (path.includes("team")) {
    lightBox();
    const overlay = document.getElementsByClassName("image-overlay")[0];
    trapFocus(overlay);
  }
  if (path.includes("home")) {
    progressBar();
    const callBack = (entries) => {
      const target = document.querySelectorAll(".feature");
      if (!entries[0].isIntersecting) {
        return;
      } else {
        document.querySelector(".mainheader").style.opacity = "100";
        console.log("heyyghlshgdl");
        target.forEach((el) => {
          el.classList.add("animateOnScroll");
        });
      }
    };
    const observer = new IntersectionObserver(callBack);
    observer.observe(document.querySelector(".homegrid"));
  }
};
