const btn = document.getElementById("btn");
const menu = document.getElementById("menu");
const menunav = document.getElementById("menunav");


btn.addEventListener("click", () => {
    alert("Botão Clicado!");
})

menu.addEventListener("click", () => {
menunav.classList.toggle("show");

})