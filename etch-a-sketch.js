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

const gridContainer = document.createElement("div");
      document.body.appendChild(gridContainer);
           gridContainer.style.display = "flex";
           gridContainer.style.flexDirection = "row";
           gridContainer.style.flexWrap = "wrap";
           gridContainer.style.boxSizing = "border-box";
           gridContainer.style.width = "400px";
           gridContainer.style.height = "400px";
           gridContainer.style.flexshrink = 0;
           gridContainer.style.border = "solid";
           gridContainer.style.borderColor = "green";
           gridContainer.style.justifySelf = "center";
           gridContainer.style.margin = "30px";


        
    function makeGrid(newGridNumber) {
    
        let newGridSize = newGridNumber * newGridNumber;
            for (i=1;i<=newGridSize;i++) {
                document.body.appendChild(gridContainer);
                const gridSquare = document.createElement("div");
                gridContainer.appendChild(gridSquare);
                gridSquare.className = "square";
                gridSquare.style.border = "solid 1px gray";
                gridSquare.style.flex = "1";
                gridSquare.style.boxSizing = "border-box";
                gridSquare.style.minHeight = 400 / newGridNumber + "px";
                gridSquare.style.minWidth = 400 / newGridNumber + "px";
                gridSquare.addEventListener('mouseover', () => {
                    gridSquare.style.backgroundColor = "black";
                 })
                 resetButton.addEventListener('click', () => {
                    gridSquare.style.backgroundColor = "white";
                })
                
        }};

    const newGridButton = document.createElement("button");
        document.body.appendChild(newGridButton);
            newGridButton.textContent = "Choose your grid size";
            newGridButton.style.justify = "center";
            newGridButton.style.padding = "20px";
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
                const newGridNumber = prompt("How many squares per side should your new grid have?", "(Choose a number between 1 and 100)");
                if (newGridNumber <1 || newGridNumber>100 || isNaN(newGridNumber)) {
                    alert('Your input must be a number between 1 and 100');
                } else {

                makeGrid(newGridNumber); 
                }   
            })
    
    
    const resetButton = document.createElement("button");
        document.body.appendChild(resetButton);
            resetButton.textContent = "Reset";
            resetButton.style.justify = "center";
            resetButton.style.padding = "20px";
            resetButton.style.fontFamily = "impact";
            resetButton.style.fontSize = "18px";
            resetButton.style.borderRadius = "15px";
            resetButton.addEventListener('mouseover', () => {
                resetButton.style.transform = "scale(1.1)";
            })
            resetButton.addEventListener('mouseout', () => {
                resetButton.style.transform = "";
            })
    

makeGrid(16);
