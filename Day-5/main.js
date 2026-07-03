import { onLoadSetTheme, darkModeToggle } from "./js/components/darkMode.js";
window.onload= ((event)=>{
    onLoadSetTheme(document.getElementById("dark"))
    document.getElementById("dark").addEventListener("click",(e)=>{
        darkModeToggle(e)
    })
})
