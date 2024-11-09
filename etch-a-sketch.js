document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const heading = document.createElement("div");
    document.body.appendChild(heading);
        heading.textContent = "Etch-a-Sketch";
        heading.style.justifySelf = "center";
        heading.style.fontFamily = "impact";
        heading.style.fontSize = "34px";
        heading.style.padding = "20px";

const buttonContainer = document.createElement("div");
document.body.appendChild(buttonContainer);
    buttonContainer.style.display = "flex";

const newGridButton = document.createElement("button");
    buttonContainer.appendChild(newGridButton);
        newGridButton.textContent = "Grid Size";
        newGridButton.style.justify = "center";
        newGridButton.style.padding = "20px";
        newGridButton.style.margin = "10px";
        newGridButton.style.fontFamily = "impact";
        newGridButton.style.fontSize = "18px";
        newGridButton.style.borderRadius = "15px";
        newGridButton.addEventListener('mouseover', () => {
            newGridButton.style.transform = "scale(1.1)";
        })
        newGridButton.addEventListener('mouseout', () => {
            newGridButton.style.transform = "";
        })
        newGridButton.addEventListener('click', () => {
            let gridNumber = Number(window.prompt("How many squares per side should your new grid have?", "(Choose a number between 1 and 100)"));
            makeGrid(gridNumber);
        })

    const resetButton = document.createElement("button");
        buttonContainer.appendChild(resetButton);
            resetButton.textContent = "Reset";
            resetButton.style.justify = "center";
            resetButton.style.padding = "20px";
            resetButton.style.margin = "10px";
            resetButton.style.fontFamily = "impact";
            resetButton.style.fontSize = "18px";
            resetButton.style.borderRadius = "15px";
            resetButton.addEventListener('mouseover', () => {
                resetButton.style.transform = "scale(1.1)";
            })
            resetButton.addEventListener('mouseout', () => {
                resetButton.style.transform = "";
            })
           
const gridContainer = document.createElement("div");
    document.body.appendChild(gridContainer);
        gridContainer.style.display = "flex";
        gridContainer.style.flexDirection = "row";
        gridContainer.style.flexWrap = "wrap";
        gridContainer.style.boxSizing = "border-box";
        gridContainer.style.width = "500px";
        gridContainer.style.height = "500px";
        gridContainer.style.flexShrink = "0";
        gridContainer.style.flexGrow = "0";
        gridContainer.style.border = "solid, 50px";
        gridContainer.style.borderColor = "#C81D25";
        gridContainer.style.borderRadius = "25px";
        gridContainer.style.justifySelf = "center";
        gridContainer.style.margin = "30px";

    function makeGrid(gridNumber) {
        for (i=1;i<=(gridNumber * gridNumber);i++) {
            const gridSquare = document.createElement("div");
                gridContainer.appendChild(gridSquare);
                gridSquare.style.boxSizing = "border-box";
                gridSquare.style.flexGrow = "1";
                gridSquare.style.flexShrink = "0";
                gridSquare.style.border = "solid 1px";
                gridSquare.style.borderColor = "#B4B8AB";
                    gridSquare.addEventListener('mouseover', () => {
                        gridSquare.style.backgroundColor = "#5E6973";
                })  
                    resetButton.addEventListener('click', () => {   
                        gridSquare.style.backgroundColor = "white";
                })
            };

       };

    const initialGrid = document.createElement(makeGrid(16));
   // gridContainer.appendChild(initialGrid);
    
