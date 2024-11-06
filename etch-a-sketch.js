const gridContainer = document.createElement("div");
document.body.appendChild(gridContainer);
gridContainer.style.display = "flex";
gridContainer.style.flexDirection = "row";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.boxSizing = "border-box";
gridContainer.style.width = "400px";
gridContainer.style.height = "400px";
gridContainer.style.border = "solid";
gridContainer.style.borderColor = "green";


for (i=1;i<=256;i++) {
const gridSquare = document.createElement("div");
gridContainer.appendChild(gridSquare);
gridSquare.style.boxSizing = "border-box";
gridSquare.style.flexGrow = "1";
gridSquare.style.border = "solid";
gridSquare.style.borderColor = "pink";
gridSquare.style.height = "25px";
/*gridSquare.addEventListener('mouseover', () => {
    gridSquare.style.backgroundColor = "yellow";
})*/


};
