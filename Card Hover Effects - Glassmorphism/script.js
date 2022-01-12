const card = document.getElementById("card1");

function getMousePos() {
    window.addEventListener("mousemove", (e) => {
        let event = e.
    })
}

function rotateCard() {
    card.style.transform = "rotate3d(1, 1, 0, 30deg)";
}

function backToOriginalState() {
    card.style.transform = "rotate3d(0, 0, 0, 0deg)";
}