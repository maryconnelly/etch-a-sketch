function createGrid() {
    const container = document.querySelector(".container");

    for (i=0; i<16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.textContent = "square"; 
        square.style.backgroundColor = "yellow";
        container.appendChild(square);
}}

createGrid();

const grid = createGrid();

