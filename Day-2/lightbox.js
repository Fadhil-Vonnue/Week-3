const cards = document.querySelectorAll(".card");
const overlay = document.getElementsByClassName("image-overlay")[0];
var curr;
cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    overlay.style.display = "flex";
    curr = event.currentTarget;
    const image = event.currentTarget.querySelector("figure img");
    const overlayImage = overlay.querySelector("img");
    overlayImage.src = image.src;
    overlay.style.top = `${scrollY}px`;
    console.log("scrolled" + scrollY);
    document.body.style.overflow = "hidden";
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    overlay.style.display = "none";
  }
});
// function prevNext(e) {
//   console.log("hehe");
//   console.log(curr.nextElementSibling);
//   if (e.target.id == "next-but") {
//     if (curr.nextElementSibling !== null) {
//       curr = curr.nextElementSibling;
//       const image = curr.querySelector("figure img");
//       const overlayImage = overlay.querySelector("img");
//       overlayImage.src = image.src;
//     }
//   }
//   if (e.target.id == "prev-but") {
//     console.log(curr.previousElementSibling);
//     if (curr.previousElementSibling !== null) {
//       console.log("hehe");
//       curr = curr.previousElementSibling;
//       const image = curr.querySelector("figure img");
//       const overlayImage = overlay.querySelector("img");
//       overlayImage.src = image.src;
//     }
//   }
//   if (e.target.id == "exit-but") {
//     overlay.style.display = "none";
//     document.body.style.overflow = "visible";
//   }
// }
function prevMove() {
  console.log(curr.previousElementSibling);
  if (curr.previousElementSibling !== null) {
    console.log("hehe");
    curr = curr.previousElementSibling;
    const image = curr.querySelector("figure img");
    const overlayImage = overlay.querySelector("img");
    overlayImage.src = image.src;
  }
}
function nextMove() {
  if (curr.nextElementSibling !== null) {
    curr = curr.nextElementSibling;
    const image = curr.querySelector("figure img");
    const overlayImage = overlay.querySelector("img");
    overlayImage.src = image.src;
  }
}
function exitMove() {
  overlay.style.display = "none";
  document.body.style.overflow = "visible";
}
overlay.querySelectorAll("button").forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.id == "next-but") {
      nextMove();
    }
    if (e.target.id == "prev-but") {
      prevMove();
    }
    if (e.target.id == "exit-but") {
      exitMove();
    }
  });
});

function trapFocus(element) {
  const focusableSelectors = "button";
  const focusableElements = element.querySelectorAll("button");

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
trapFocus(overlay);
let touchStart, touchEnd;
overlay.addEventListener("touchstart", (e) => {
  touchStart = e.changedTouches[0].screenX;
});
overlay.addEventListener("touchend", (e) => {
  touchEnd = e.changedTouches[0].screenX;
  let touchDiff = touchEnd - touchStart;
  if (Math.abs(touchDiff) > 30) {
    if(touchDiff>0){
        prevMove()
    }
    else{
        nextMove()
    }
  }
});
