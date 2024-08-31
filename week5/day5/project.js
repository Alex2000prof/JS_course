let selectedColor = "black";
let isDrawing = false;

const grid = document.getElementById("grid");
for (let i = 0; i < 256; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  grid.appendChild(cell);
}

const colorButtons = document.querySelectorAll(".color");
colorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    selectedColor = e.target.style.backgroundColor;
  });
});

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("mousedown", () => {
    isDrawing = true;
    cell.style.backgroundColor = selectedColor;
  });

  cell.addEventListener("mouseover", () => {
    if (isDrawing) {
      cell.style.backgroundColor = selectedColor;
    }
  });

  cell.addEventListener("mouseup", () => {
    isDrawing = false;
  });
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
});

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});
