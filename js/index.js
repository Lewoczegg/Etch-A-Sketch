let container = document.querySelector('.container');

let slider = document.querySelector('.slider');
let sliderValue = document.querySelector('#slider-value');

const showNumber = () => {
    sliderValue.textContent = slider.value;
}

slider.addEventListener('mousemove', changeGrid);

function changeGrid() {
    showNumber();
    deleteContainerChilds();
    for(let i = 0; i < slider.value; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        for(j = 0; j < slider.value; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            line.appendChild(pixel);
        }
        container.appendChild(line);
    }
}

function deleteContainerChilds() {
    let delChild = container.lastChild;
    while(delChild) {
        container.removeChild(delChild);
        delChild = container.lastChild;
    }
}

changeGrid()
