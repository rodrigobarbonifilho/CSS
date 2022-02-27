const button = document.querySelector(".sidebar__button");
const test = true;

button.addEventListener("click", () => {
    button.classList.toggle("open", test);
    test = !test;
})