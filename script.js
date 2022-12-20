let currentColor = '#000';

const conainer = document.querySelector('#container');
const colorPicker = document.querySelector('#colorP');

colorPicker.oninput = (e) => setColor(e.target.value);

function setColor(chosenColor){
    currentColor = chosenColor;
}


function createGrid(grid_size){
    container.style.setProperty('--grid-rows', grid_size);
    container.style.setProperty('--grid-cols', grid_size);
    for (let i = 0; i < grid_size * grid_size; i++){
        const div = document.createElement('div');
        div.classList.add('div_style');
        div.addEventListener('mouseover', draw)
        div.addEventListener('mousedown', draw)
        conainer.appendChild(div);
}}

let onmouseDown = false
container.onmousedown = () => (onmouseDown = true)
container.onmouseup = () => (onmouseDown = false)

function draw(e){
    if (e.type === 'mouseover' && !onmouseDown) return
    e.target.style.backgroundColor = currentColor;
}

window.onload = () =>{
    createGrid(16);
}