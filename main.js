const gridContainer = document.querySelector("#grid-container");

let numOfCells = 256;
for(let i = 0;i<numOfCells;i++) {
    const singleCell = document.createElement("div");
    singleCell.textContent = "";
    singleCell.style.color = "white";
    singleCell.classList.add("bg-red")
    singleCell.background = "black";
    singleCell.addEventListener("Click", () => {
        alert("You clicked me!");
    });
    gridContainer.appendChild(singleCell);
}
