export function openDrawer(button, content) {
    console.log("HEYYYBROO")
  const isOpen = content.classList.toggle("isToggled");
  if (isOpen) {
    content.style.maxHeight = "500px";
    content.ariaExpanded = true;
    document.body.style.overflow = "hidden";
  } else {
    content.style.maxHeight = "0px";
    content.style.overflow="hidden"
    content.ariaExpanded = false;
    document.body.style.overflow = "visible";
  }
}

export function openDrawer1(e) {
  openDrawer(e.currentTarget, document.querySelector(".drawer"));
}
