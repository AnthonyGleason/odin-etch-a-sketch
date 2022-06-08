const etchGrid= document.querySelector("#etchGrid");
const clearGridButton = document.querySelector("#clearGridButton");
const changeGridSizeButton = document.querySelector("#changeGridSizeButton");
let gridDivs = etchGrid.querySelectorAll(".square");
let row= document.createElement("div");
let square = document.createElement("div");
let gridSquares=16;

let toggleSquare = function (gridDivs){
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

let removeGrid = function (){
    //need way to remove grid
    for (let i=0;i<gridSquares;i++){
        rowAll = etchGrid.querySelectorAll(".row");
        rowAll.forEach(rowAll => {
            rowAll.remove();
        })
    }
}

let addSquareListeners = function (){
    gridDivs = etchGrid.querySelectorAll(".square");
    gridDivs.forEach(gridDivs => {
        gridDivs.classList.add("square");
        gridDivs.addEventListener('mouseover', () => {
            toggleSquare(gridDivs);
        })
    });
}

let clearGrid = function (){
    gridDivs = etchGrid.querySelectorAll(".square");
    gridDivs.forEach(gridDivs => {
        gridDivs.classList.remove("squareEnabled");
    });
}

let changeGridSize = function(){
    removeGrid(); 
    gridSquares=prompt("Enter number of squares");
    createGrid(gridSquares);
    addSquareListeners();
}

let addButtons = function (){
    clearGridButton.addEventListener('click', () => {clearGrid()});
    changeGridSizeButton.addEventListener('click', () => {changeGridSize()});    
}
//Starts webpage with default grid
createGrid(gridSquares);
addSquareListeners();
addButtons();