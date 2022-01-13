let control = true;
const menu = document.querySelector(".div-menu-interaction");

menu.addEventListener("click", () => {
    menu.classList.toggle("close", !control);
    menu.classList.toggle("open", control);
    control = !control;
})