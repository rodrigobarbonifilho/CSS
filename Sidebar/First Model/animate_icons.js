let lis = document.querySelectorAll("li");

lis.forEach((li) => {
    li.addEventListener("click", () => {
        lis.forEach((li) => {
            li.classList.toggle("selected", false);
        })
        li.classList.toggle("selected", true);
    })
})