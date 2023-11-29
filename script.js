//set up 16x16 grid
function setUpGrid() {

    for (let i = 0; i < 16 * 16; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        grid.appendChild(gridElement);
    }
}