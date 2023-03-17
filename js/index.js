let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

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
            pixel.setAttribute('style', 'background: white');
            pixel.addEventListener('mouseover', changeBackground);
            pixel.addEventListener('mousedown', changeBackground);
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

function changeBackground(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    const background = this.style.background;
    console.log(this);
    console.log(background);
    if(background === 'white') {
        this.setAttribute('style', 'background: rgb(204, 204, 204)');
    } else if(background === 'rgb(204, 204, 204)') {
        this.setAttribute('style', 'background: rgb(170, 170, 170)');
    } else if (background === 'rgb(170, 170, 170)') {
        this.setAttribute('style', 'background: rgb(100, 100, 100)');
    } else if (background === 'rgb(100, 100, 100)') {
        this.setAttribute('style', 'background: rgb(50, 50, 50)');
    } else if (background === 'rgb(50, 50, 50)') {
        this.setAttribute('style', 'background: black');
    }
}

changeGrid()
