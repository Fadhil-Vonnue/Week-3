export function openDrawer(button, content) {
    console.log("HEYYYBROO")
    console.log(content)
  const isOpen = content.classList.toggle("isToggled");
  if (isOpen) {
    content.style.maxHeight = "500px";
    content.style.padding="20px"
    content.ariaExpanded = true;
    // document.body.style.overflow = "hidden";
  } else {
    content.style.maxHeight = "0px";
    content.style.padding="0px"
    content.ariaExpanded = false;
    content.style.overflow="hidden"
    // document.body.style.overflow = "visible";
  }
}

export function openDrawer1(e) {
  openDrawer(e.currentTarget, document.querySelector(".drawer"));
}
