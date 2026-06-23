document.getElementById("button").addEventListener("click", (e) => {
  document.querySelector(".overlay").style.backgroundColor = "purple";
});

const classes = document.getElementsByClassName("links");
for (let i = 0; i < classes.length; i++) {
  classes[i].addEventListener("click", () => {
    classes[i].style.backgroundColor = "red";
  });
}
const spans = document.getElementsByTagName("span");
for (let i = 0; i < spans.length; i++) {
  spans[i].style.color = "yellow";
}

document.querySelector("h1").style.color = "pink";

const element = document.querySelector(".img");
const parent = element.parentElement;
console.log(parent);

const firstChild = element.firstElementChild;
console.log(firstChild);

const lastChild = element.lastElementChild;
console.log(lastChild);

const sibling = element.nextElementSibling;
console.log(sibling);

let count = 0;
function addCard(title, body, imageUrl) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("extra3");
  newDiv.style.width="auto"
  newDiv.id="card"+0
  count++
  const newtitle = document.createElement("h2");
  newtitle.textContent = title;
  newtitle.style.color="white"
  const newimg = document.createElement("img");
  newimg.src = imageUrl;
  newimg.style.width="500px"
  const newcontent = document.createElement("div");
  newcontent.textContent = body;
  newcontent.style.color="white"
  newDiv.appendChild(newtitle);
  newDiv.appendChild(newimg);
  newDiv.appendChild(newcontent);
  const target = document.querySelector(".cardsection").appendChild(newDiv);
}
addCard("I am title", "I am body", "backg.jpg");
addCard("I am title", "I am body", "backg.jpg");
addCard("I am title", "I am body", "backg.jpg");
addCard("I am title", "I am body", "backg.jpg");
addCard("I am title", "I am body", "backg.jpg");
addCard("I am title", "I am body", "backg.jpg");

function removeCard(id){
    const card=document.getElementById(id)
    card.remove()
}
removeCard("card0")
removeCard("card0")
removeCard("card0")


function clearAllCards(){
    const parent=document.querySelector(".cardsection")
    while(parent.firstElementChild){
        parent.firstElementChild.remove()
    }
}
clearAllCards()