let container = document.querySelector('.container');

let slider = document.querySelector('.slider');
let sliderValue = document.querySelector('#slider-value');

const showNumber = () => {
    sliderValue.textContent = slider.value;
}

slider.addEventListener('mousemove', showNumber);
