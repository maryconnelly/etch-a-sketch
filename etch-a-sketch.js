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

        function makeNewGrid (newGridNumber) {

            for (i=1;i<=newGridNumber;i++) {
                const gridSquare = document.createElement("div");
                gridContainer.appendChild(gridSquare);
                gridSquare.style.boxSizing = "border-box";
                gridSquare.style.flexGrow = "1";
                //gridSquare.style.border = "solid";
                //gridSquare.style.borderColor = "pink";
                gridSquare.style.height = "25px";
                gridSquare.style.width = "24.5px";
                gridSquare.addEventListener('mouseover', () => {
                    gridSquare.style.backgroundColor = "yellow";
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
            const newGridNumber = Number(window.prompt("How many squares per side should your new grid have?", "(Choose a number between 1 and 100)"));
            makeNewGrid(newGridNumber); 
           })


const gridContainer = document.createElement("div");
document.body.appendChild(gridContainer);
gridContainer.style.display = "flex";
gridContainer.style.flexDirection = "row";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.boxSizing = "border-box";
gridContainer.style.minwidth = "950px";
gridContainer.style.height = "950px";
gridContainer.style.border = "solid";
gridContainer.style.borderColor = "green";
gridContainer.style.justifySelf = "center";
gridContainer.style.margin = "30px"


for (i=1;i<=256;i++) {
const gridSquare = document.createElement("div");
gridContainer.appendChild(gridSquare);
gridSquare.style.boxSizing = "border-box";
gridSquare.style.flexGrow = "1";
//gridSquare.style.border = "solid";
//gridSquare.style.borderColor = "pink";
gridSquare.style.minHeight = "25px";
gridSquare.style.minWidth = "25px";
gridSquare.addEventListener('mouseover', () => {
    gridSquare.style.backgroundColor = "yellow";
})
};
