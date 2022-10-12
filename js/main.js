const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

function openNav(){
  nav.classList.add("open-nav")
}

menu.addEventListener("click", openNav); 
//=> {
 // nav.classList.add("open-nav")}


clase.addEventListener("click", () => {
  nav.classList.remove("open-nav")
})

