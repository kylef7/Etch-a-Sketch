const grid = document.querySelector(".gridContainer");
const btn = document.querySelector(".button");


for (let i = 0; i < 256; i++) {
    if (i % Math.sqrt(256) == 0) {

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


btn.addEventListener('click', askGrid);

function askGrid() {
    const gridSize = prompt("Pick the number of squares per side that you want!")
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

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


