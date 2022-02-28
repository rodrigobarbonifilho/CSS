const button = document.querySelector(".sidebar__button");
const sidebar = document.querySelector(".sidebar")
let isOpen = true

button.addEventListener("click", () => {
    button.classList.toggle("sidebar__button--open", isOpen);
    sidebar.classList.toggle("sidebar--open", isOpen)
    isOpen = !isOpen;
})