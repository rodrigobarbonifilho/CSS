let control = true;
const menus = document.querySelectorAll(".menu");

menus.forEach(menu => {
    menu.addEventListener("click", () => {
        menu.classList.toggle("close");
        menu.classList.toggle("open");
    });
});
