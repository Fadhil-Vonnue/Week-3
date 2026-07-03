export function progressBar(){
    const intersectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) return;
  classVisible(entries[0]);
});

document
  .querySelectorAll(".testimonial,.testimonials,.sectionheading")
  .forEach((el) => {
    intersectionObserver.observe(el);
  });
function classVisible(entry) {
  entry.target.classList.add("visible");
}
console.log(window.scrollY);
console.log(document.body.scrollHeight);
window.addEventListener("scroll", (e) => {});
function progressBar() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const prog = Math.floor((window.scrollY / maxScroll) * 100);
  document.querySelector(".progress").style.width = `${prog}%`;
  requestAnimationFrame(progressBar);
}
window.addEventListener("scroll", (e) => {
  requestAnimationFrame(progressBar);
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
}
