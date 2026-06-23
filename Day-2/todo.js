document.getElementById("main-list").addEventListener("click",(e)=>{
    if(e.target.matches('input[type="checkbox"]')){
        if(e.target.checked){
            e.target.closest('li').style.textDecoration="line-through"
        }
        else{
           e.target.closest('li').style.textDecoration="none" 
        }
    }
    if(e.target.matches('button')){
        alert("deleted")
        e.target.closest('li').remove()
    }
    if(e.target.matches('span')){
        e.target.setAttribute("contenteditable","true")
    }
})
function createTask(task){
const newLi= document.createElement("li")
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
newLi.appendChild(checkbox);
const spanb = document.createElement("span");
spanb.innerText=task
newLi.appendChild(spanb);
const but1 = document.createElement("button");
but1.innerText="Delete"
newLi.appendChild(but1);
document.getElementById("main-list").appendChild(newLi) 
}

createTask("Task2")
createTask("Task3")
createTask("Task4")
createTask("Task5")
createTask("Task6")
