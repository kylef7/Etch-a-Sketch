const grid = document.querySelector(".gridContainer");
const btn = document.querySelector(".button");

function gridCreate(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        if (i % Math.sqrt(gridSize * gridSize) == 0) {
            const newBreak = document.createElement("div");
            newBreak.classList.add("break");
            grid.append(newBreak);
        } 
            const newDiv = document.createElement("div");
            newDiv.classList.add("divPixel");
            grid.append(newDiv);

            newDiv.addEventListener("mouseenter", darken);

            function darken() {
                newDiv.style.backgroundColor = "black";
            }
        
    }
}

gridCreate(16);

btn.addEventListener('click', askGrid);

function askGrid() {
    let gridSize = prompt("Pick the number of squares per side that you want!")
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    if (gridSize > 100) {
        gridSize = 100;
    }

    gridCreate(gridSize);
}


