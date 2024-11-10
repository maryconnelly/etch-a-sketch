const container = document.createElement("div"); 
    document.body.appendChild(container);
        container.style.border = "2px solid black";
        container.style.width = "400px";
        container.style.height = "400px";
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        container.style.boxSizing = "border-box";



for (i=0; i<256; i++) {
const square = document.createElement("div");
    container.appendChild(square);
        square.style.border = "1px solid gray";
        square.style.minWidth = "calc(100% / 16)";
        square.style.aspectRatio = "1/1";
        square.style.flex = "1";
        square.style.boxSizing = "border-box";
        //square.style.border = "1px solid gray";
}
   
