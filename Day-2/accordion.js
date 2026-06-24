function showTab(e) {
//   const parent = e.target.parentElement;
//   parent.querySelectorAll("div").forEach((element) => {
//     element.style.display = "none";
//     element.ariaExpanded = "false";
//   });
//   e.target.nextElementSibling.style.display = "block";
//   e.target.nextElementSibling.ariaExpanded = "true";
 const tog = e.target.nextElementSibling.classList.toggle("vis");
  if (tog) {
    e.target.nextElementSibling.ariaExpanded = "true";
    sessionStorage.setItem("showTab", true);
  } else {
    e.target.nextElementSibling.ariaExpanded = "false";
    sessionStorage.setItem("showTab", false);
  }
}

function showBox(e) {
  const tog = e.target.nextElementSibling.classList.toggle("visible");
  if (tog) {
    e.target.nextElementSibling.ariaExpanded = "true";
    sessionStorage.setItem("showBox", true);
  } else {
    e.target.nextElementSibling.ariaExpanded = "false";
    sessionStorage.setItem("showBox", false);
  }
}
function showRatings(e) {
  let prevlabel = e.target;
  while (prevlabel.nextElementSibling !== null) {
    prevlabel = prevlabel.nextElementSibling;
    prevlabel.innerHTML = "&#9734;";
  }
  prevlabel = e.target;
  while (prevlabel == null) {
    console.log("hello");
    prevlabel.style.color = "gold";
    prevlabel.innerHTML = "&#9733;";
    prevlabel = prevlabel.previousElementSibling;
  }
}
function toggle() {
    console.log(document.querySelector(".con"))
  document.querySelector(".con").classList.toggle("vis");
  let newAriaExpanded =(document.querySelector(".con").ariaExpanded !== "true").toString();
  document.querySelector(".con").ariaExpanded = newAriaExpanded;

}
const allElements = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
console.log(allElements);
allElements.forEach((el) => {
  el.tabIndex = 0;
});
const first = 0;
const last = allElements.length - 1;
document.addEventListener("keydown", (e) => {
  let c = 0;
  for (let ele of allElements) {
    if (ele === document.activeElement) {
      if (e.key === "ArrowDown") {
        if (c === last) {
          c = first;
          allElements[c].focus();
          break;
        } else {
          allElements[++c].focus();
          break;
        }
      }
      if (e.key === "ArrowUp") {
        if (c === first) {
          c = last;
          allElements[c].focus();
          break;
        } else {
          allElements[--c].focus();
          break;
        }
      }
      if (e.key === "Home") {
        allElements[first].focus();
      }
      if (e.key === "End") {
        allElements[last].focus();
      }
     
    }
    c++;
  }
   if (e.key === "Enter") {
        console.log("heheheh")
        if (document.activeElement ===document.querySelector("#tab1") ) {
          toggle();
        }
      }
});
console.log(sessionStorage.getItem("showBox"));
if (sessionStorage.getItem("showBox") === "true") {
  document.querySelector(".content").classList.add("visible");
} else {
  document.querySelector(".content").classList.remove("visible");
}
if (sessionStorage.getItem("showTab") === "true") {
  document.querySelector(".con").classList.add("vis");
} else {
  document.querySelector(".con").classList.remove("vis");
}
