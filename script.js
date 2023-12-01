//set up 16x16 grid
/*function setUpGrid() {

    for (let i = 0; i < 16 * 16; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        grid.appendChild(gridElement);
    }
}


window.onload = () => {
    setUpGrid();
}*/

const boxes = document.querySelector('#boxes');

for (i = 0; i < 4; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    //square.setAttribute('draggable', 'false');
    square.style.color = 'blue';
    boxes.appendChild(square);
    //console.log("h");
};