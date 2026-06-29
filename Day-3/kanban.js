let latestID = 0;
if (localStorage.getItem("todo") !== null) {
  const par = document.getElementById("todo");
  for (let list of JSON.parse(localStorage.getItem("todo"))) {
    loadCards(list, par);
  }
}
if (localStorage.getItem("progress") !== null) {
  const par = document.getElementById("progress");
  for (let list of JSON.parse(localStorage.getItem("progress"))) {
    loadCards(list, par);
  }
}
if (localStorage.getItem("done") !== null) {
  const par = document.getElementById("done");
  for (let list of JSON.parse(localStorage.getItem("done"))) {
    loadCards(list, par);
  }
}
function loadCards(list, par) {
  const task = document.createElement("div");
  const tasktext = document.createElement("span");
  const deletebut = document.createElement("button");
  deletebut.textContent = "Delete";
  deletebut.classList.add("delete");
  latestID += 1;
  task.classList.add("task");
  task.id = list.id;
  task.draggable = true;
  tasktext.textContent = list.text;
  task.tabIndex = 0;
  task.appendChild(tasktext);
  task.appendChild(deletebut);
  par.appendChild(task);
  deleteCard();
}
document.querySelectorAll(".tasks").forEach((el) => {
  el.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log(e.target, "id heheeh");
  });
  el.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  el.addEventListener("dragenter", (e) => {
    e.preventDefault();
    el.style.backgroundColor = "lightblue";
  });
  el.addEventListener("dragleave", (e) => {
    e.preventDefault();
    el.style.backgroundColor = "white";
  });
  el.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    moveCard(e, data);
    el.style.backgroundColor = "white";
  });
});
function moveCard(e, data) {
    console.log(e,data)
  const task = document.getElementById(data);
  e.currentTarget.appendChild(task);
}

document.querySelectorAll(".addCard").forEach((el) => {
  el.addEventListener("click", (e) => {
    addCard(e.target);
  });
});
function addCard(e) {
  const task = document.createElement("div");
  const tasktext = document.createElement("span");
  const deletebut = document.createElement("button");
  deletebut.textContent = "Delete";
  deletebut.classList.add("delete");
  latestID += 1;
  const parent = e.parentElement.parentElement.querySelector(".tasks");
  let arr = [];
  if (localStorage.getItem(parent.id) !== null) {
    arr = JSON.parse(localStorage.getItem(parent.id));
  }
  const storage = { id: latestID, text: e.previousElementSibling.value };
  arr.push(storage);
  console.log();
  localStorage.setItem(parent.id, JSON.stringify(arr));
  task.classList.add("task");
  task.id = latestID;
  task.draggable = true;
  tasktext.textContent = e.previousElementSibling.value;
  task.tabIndex = 0;
  task.appendChild(tasktext);
  task.appendChild(deletebut);
  parent.appendChild(task);
  deleteCard();
}

function deleteCard() {
  document.querySelectorAll(".delete").forEach((el) => {
    el.addEventListener("click", (e) => {
      const deleteID = e.target.parentElement;
      deleteID.remove();
    });
    el.addEventListener("keydown",(e)=>{
        if(e.key===" ") e.preventDefault()
    })
  });
}
deleteCard();
const keysPressed = {};
const columns=document.querySelectorAll(".tasks")
let columnum=0
window.addEventListener("keydown", (e) => {
  keysPressed[event.key] = true;
  if (
    keysPressed[" "] &&
    keysPressed["ArrowRight"] &&
    document.activeElement.className.includes("task")) {
    const button = document.activeElement;
    if(e.key=="ArrowRight"){
        console.log("heyy")
        columns[columnum].style.backgroundColor="white"
        columnum=(columnum+1)%3
        columns[columnum].style.backgroundColor="lightblue"
    }
  }
  if (
    keysPressed[" "] &&
    keysPressed["ArrowLeft"] &&
    document.activeElement.className.includes("task")) {
    const button = document.activeElement;
    if(e.key=="ArrowLeft"){
        console.log("heyy")
        columns[columnum].style.backgroundColor="white"
        columnum=((((columnum-1)%3)+3)%3)
        columns[columnum].style.backgroundColor="lightblue"
    }
  }
});
window.addEventListener("keyup", (e) => {
    if(!document.activeElement.className.includes("task")) return
  keysPressed[event.key] = false;
    if(e.key==" "){
        console.log("heyy")
        columns[columnum].appendChild(document.activeElement)
        setStorage()
        columns[columnum].style.backgroundColor="white"
    }
  }
);

function setStorage(){
    arr=[]
    for(let col of columns){
        console.log(col.id)
        const childs= col.children
        for(let child of childs){
            const store={id:child.id,text:child.textContent.trim().slice(0,-6)}
            arr.push(store)
        }
        localStorage.setItem(col.id,JSON.stringify(arr))
        arr=[]
    }
}
