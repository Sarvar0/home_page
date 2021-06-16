const hamburger_name = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_name.addEventListener("click", ()=> {
    container.classList.toggle("active");
})