const container = document.getElementById('container');

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {

    //create a new square 
    const square = document.createElement('div');

    square.classList.add('square');

    //set random color if event mouseover set 
    square.addEventListener('mouseover', () => setColor(square))

    //set default color if event mouseout set 
    square.addEventListener('mouseout', () => removeColor(square)
    )


    container.appendChild(square);
}

function setColor(element) {

    //get random color array
    const color = getRandomColor()

    element.style.background = color

    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {

    //set default color element
    const color = '#1d1d1d';

    element.style.background = color

    element.style.boxShadow = `0 0 2px #000`

}

function getRandomColor() {

    return colors[Math.floor(Math.random() * colors.length)];

}