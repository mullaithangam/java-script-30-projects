const containerE1 = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerE1 = document.createElement("div");
    colorContainerE1.classList.add("color-container");
    containerE1.appendChild(colorContainerE1);
}


const colorContainerE1s = document.querySelectorAll(".color-container");

function generateColors() {
    colorContainerE1s.forEach((colorContainerE1) => {
        const newColorCode = randomColor();
        colorContainerE1.style.backgroundColor = "#" + newColorCode;
        colorContainerE1.textContent = "#" + newColorCode; 
    });
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}


generateColors();
