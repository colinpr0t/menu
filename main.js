let flag = true;

const btn = document.getElementById("MenuBtn")
const nav = document.getElementById("Menu")
const icon = document.getElementById("icon")


btn.addEventListener("click", () => {
    nav.classList.toggle("show")
    if(flag){
        icon.classList.toggle("bi-x-lg")
        !flag
    } else {
        icon.classList.toggle("bi-list")
    }
    
})