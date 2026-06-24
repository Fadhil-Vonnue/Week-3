function findCards(){
    const noresult=document.querySelector(".noresult")
    noresult.style.display="none"
    var prevQuery=""
    const query= document.getElementById("searchCard").value.toLowerCase().trim();
    let count=0
    document.querySelectorAll(".card").forEach((e)=>{
        if(e.innerText.toLowerCase().includes(query)){
            e.style.display="flex"  
            e.innerHTML=e.innerHTML.replace(/(<span class="highlight">|<\/span>)/gim, "");
            if(query!==""){
                var regQuery=new RegExp(query, 'gi');
                e.innerHTML=e.innerHTML.replaceAll(regQuery,`<span class="highlight">$&</span>`)
            }
        }
        else{
            count++
            e.style.display="none"
        }
    })
    if(count==document.querySelectorAll(".card").length){
            noresult.style.display="block"
        }
}
function debounce(){
    const id= setTimeout(
        findCards(),300)
}
document.getElementById("searchCard").addEventListener("input",()=>{
    findCards()
})