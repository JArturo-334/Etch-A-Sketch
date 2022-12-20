const conainer = document.querySelector('#container');

function createGrid(grid_size){
    container.style.setProperty('--grid-rows', grid_size);
    container.style.setProperty('--grid-cols', grid_size);
    for (let i = 0; i < grid_size * grid_size; i++){
        const div = document.createElement('div');
        div.classList.add('div_style');
        conainer.appendChild(div);
}}

window.onload = () =>{
    createGrid(16);
}