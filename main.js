const gridContainer = document.querySelector("#grid-container");

function drawGrid(numOfCells){
    numOfCells = numOfCells**2;
    for(let i = 0;i<numOfCells;i++) {
        const singleCell = document.createElement("div");
        singleCell.textContent = "";
        singleCell.style.color = "white";
        singleCell.classList.add("bg-red")
        singleCell.background = "black";
        singleCell.addEventListener("mouseover", () => {
            singleCell.classList.add("mousedOver");
        });
        gridContainer.appendChild(singleCell);
    }
    
}
const eraser = document.querySelector("#erase");
eraser.addEventListener('click', () => {
    gridContainer.innerHTML = "";
    drawGrid(prompt("Dimension: "));
});

drawGrid(16);