// PART ONE HOMEWORK 1
const gmail_input = document.querySelector('#gmail_input')
const gmail_button = document.querySelector('#gmail_button')
const gmail_result = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

gmail_button.onclick = () => {
    if (regExp.test(gmail_input.value)) {
        gmail_result.innerHTML = 'That is ok👍'
        gmail_result.style.color = 'green'
    } else {
        gmail_result.innerHTML = 'Try again🤗'
        gmail_result.style.color = 'red'
    }
}

// PART TWO

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block img');

let positionX = 0;
let positionY = 0;

const parentWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const parentHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = () => {
    if (positionX < parentWidth && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(moveBlock);
    } else if (positionX >= parentWidth && positionY < parentHeight) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(moveBlock);
    } else if (positionY >= parentHeight && positionX > 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(moveBlock);
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(moveBlock);
    }
};

moveBlock();


// HOMEWORK 2

let counterElement = document.getElementById('seconds');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let counter = 0;
let intervalId = null;

const startCounter = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            counter++;
            counterElement.textContent = counter;
        }, 1000);
    }
};

const stopCounter = () => {
    clearInterval(intervalId);
    intervalId = null;
};

const resetCounter = () => {
    stopCounter();
    counter = 0;
    counterElement.textContent = counter;
};

startButton.addEventListener('click', startCounter);
stopButton.addEventListener('click', stopCounter);
resetButton.addEventListener('click', resetCounter);
