const ele = document.getElementsByTagName("div");
for (let el of document.querySelectorAll(".div1,.div2,.div3")) {
  el.addEventListener(
    "click",
    () => {
      console.log("capturing ---", el);
    },
    true,
  );
  el.addEventListener("click", () => {
    console.log("bubbling", el);
  });
}
document.querySelector(".div6").addEventListener("click", (e) => {
  console.log("FIrst listener");
  e.stopImmediatePropagation();
});
document.querySelector(".div6").addEventListener("click", () => {
  console.log("Second listener");
});

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
});
document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
});
