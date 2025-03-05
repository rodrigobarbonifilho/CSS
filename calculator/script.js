const keys = document.querySelectorAll("div.key");

keys.forEach(key => {
    let char = key.textContent;
    let display = document.querySelector("div.display");

    if (char == "C") {
        key.addEventListener("click", () => {
            updateDisplay("");
        })
    } else if (char == "=") {
        key.addEventListener("click", () => {
            updateDisplay(eval(display.textContent));
        })
    }

    key.addEventListener("click", () => {
        updateDisplay(char != "=" && char != "C" ? `${display.textContent}${char}` : display.textContent);
    })
})

function updateDisplay(value) {
    let display = document.querySelector("div.display");

    display.textContent = value;
}