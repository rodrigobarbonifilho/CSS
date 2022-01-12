const cards = document.querySelectorAll(".c-card");

cards[0].addEventListener(onmousemove, getMousePos);

function getMousePos() {
    let pos = window.event;
    let posX = pos.clientX;
    let posY = pos.clientY;

    console.log(`X: ${posX}| Y: ${posY}`)
}