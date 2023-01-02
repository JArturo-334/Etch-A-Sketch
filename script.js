let currentColor = '#000';
let grid_squares = 16;

const container = document.querySelector('#container');
const colorPicker = document.querySelector('#colorP');
const range_slider = document.querySelector("#gridRange");
const output = document.querySelector("#gridNum");
const clear_btn = document.querySelector('#clear_btn');
const eraser_btn = document.querySelector('#eraser');
output.innerText = grid_squares +' x '+ grid_squares;

window.onload = () =>{
    createGrid(grid_squares);
    range_slider.setAttribute('max', '100')
    range_slider.setAttribute('min', '2')
    range_slider.setAttribute('value', grid_squares)
}

colorPicker.oninput = (e) => setColor(e.target.value);

function setColor(chosenColor){
    currentColor = chosenColor;
}

function eraser(){
    currentColor = '#fff';
}

function createGrid(grid_size){
    container.style.setProperty('--grid-rows', grid_size);
    container.style.setProperty('--grid-cols', grid_size);
    for (let i = 0; i < grid_size * grid_size; i++){
        const div = document.createElement('div');
        div.classList.add('div_style');
        div.addEventListener('mouseover', draw)
        div.addEventListener('mousedown', draw)
        container.appendChild(div);
}}

function clearGrid(){
    container.innerHTML = '';
}


let onmouseDown = false
container.onmousedown = () => (onmouseDown = true)
container.onmouseup = () => (onmouseDown = false)

function draw(e){
    if (e.type === 'mouseover' && !onmouseDown) return
    e.target.style.backgroundColor = currentColor;
}

range_slider.oninput = function() {
    output.innerText = this.value +' x '+ this.value;
    grid_squares = this.value;
    clearGrid();
    createGrid(grid_squares);
}

eraser_btn.addEventListener('click', eraser);

clear_btn.addEventListener('click', () => {
    clearGrid();
    createGrid(grid_squares);
});
