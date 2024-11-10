function makeGrid(gridSize) {

const container = document.createElement("div"); 
    document.body.appendChild(container);
        container.classList.add("container");
        container.style.border = "2px solid black";
        container.style.width = "400px";
        container.style.height = "400px";
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        container.style.boxSizing = "border-box";
        container.style.margin = "20px";
        container.style.justifySelf = "center";


for (i=0; i<(gridSize**2); i++) {
const square = document.createElement("div");
    container.appendChild(square);
        square.style.border = "1px solid gray";
        square.style.minWidth = `calc(100% / ${gridSize})`;
        square.style.aspectRatio = "1/1";
        square.style.flex = "1";
        square.style.boxSizing = "border-box";
        //square.style.border = "1px solid gray";
}
}

makeGrid(100);

const buttonContainer = document.createElement("div");
    document.body.appendChild(buttonContainer);
        buttonContainer.style.display = "flex";
        buttonContainer.style.justifyContent = "center";


const newGridButton = document.createElement("button");
    buttonContainer.appendChild(newGridButton);
        newGridButton.classList.add("button");
        newGridButton.textContent = "New Grid Size";
        newGridButton.addEventListener('click', () => {
            const newGridPrompt = Number(prompt("How many squares per side will your new grid have?", "Enter a number between 1-100"));
            if (newGridPrompt < 1 || newGridPrompt > 100 || isNaN(newGridPrompt)) {
                alert("Please enter a number between 1 and 100");
            } else {
                const previousContainer = document.querySelector(".container");
                previousContainer.remove();
                makeGrid(newGridPrompt);
            }

        });
    

const resetButton = document.createElement("button");
    buttonContainer.appendChild(resetButton);
        resetButton.classList.add("button");
        resetButton.textContent = "Reset";

const rainbowButton = document.createElement("button");
    buttonContainer.appendChild(rainbowButton);
        rainbowButton.classList.add("button");
        rainbowButton.textContent = "Rainbow Mode";
    
