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


//incorrect-supposedto be all square divs
for (i = 0; i < 16; i++) {
    let row = document.createElement('div');
        row.classList.add('row');
        row.style.color = 'blue';
        boxes.appendChild(row);
    for (j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        //square.setAttribute('draggable', 'false');
        square.style.color = 'blue';
        row.appendChild(square);
        //console.log("h");
    }
    

    
};