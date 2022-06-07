const etchGrid= document.querySelector("#etchGrid");
let row= document.createElement("div");
let square = document.createElement("div");
let gridSquares=16;

let toggleSquare = function (gridDivs){
    //change add to toggle for removeable squares
    gridDivs.classList.add("squareEnabled");
   
}
let createGrid = function (gridSquares){
    for (let i=0;i<gridSquares;i++){
    row = document.createElement("div");
    etchGrid.appendChild(row);
    row.classList.add("row");
        for (j=0;j<gridSquares;j++){
            square = document.createElement("div");
            row.appendChild(square);
            square.classList.add("square");
        }
    }
}

let addSquareListeners = function (){
    const gridDivs = etchGrid.querySelectorAll(".square");
    gridDivs.forEach(gridDivs => {
        gridDivs.classList.add("square");
        gridDivs.addEventListener('click', () => {
            toggleSquare(gridDivs);
        })
        gridDivs.addEventListener('dragenter', () => {
            toggleSquare(gridDivs);
        })
    });
}
createGrid(gridSquares);
addSquareListeners();


/* Missing functionality:
-eraser
-change number of squares;
-color
-clear squares
*/