// 2

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 144) {
            clearInterval(interval);
        }
    }, 1000);
}

count();

// 3
async function fetchProductTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        const products = await response.json();
        products.forEach(product => console.log(product.title));
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

fetchProductTitles();

// 4
document.getElementById("colorButtons").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        document.body.style.backgroundColor = event.target.textContent;
    }
});

// 5
const modal = document.querySelector('.lol');
const openBtn = document.querySelector('#openbtn');

const openModal = () => {
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    } else {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
};

openBtn.addEventListener('click', openModal);



// 6
let counterElement = document.getElementById('seconds');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let counter = 0;
let switchTriger = true
startButton.onclick = () => {
    let intervalId
    if (switchTriger === true) {
        intervalId = setInterval(() => {
            counter++;
            counterElement.textContent = counter;
        }, 1000);
        switchTriger = false
    }
    const stopCounter = () => {
        clearInterval(intervalId);
        switchTriger = true

    };
    const resetCounter = () => {
        stopCounter();
        counter = 0;
        counterElement.textContent = counter;
    };
    stopButton.onclick = () => stopCounter();
    resetButton.onclick =() => resetCounter();
};

// 7
document.getElementById("btnjson").addEventListener("click", fetchData);

async function fetchData() {
    try {
        const response = await fetch("app.json"); // Пример API
        if (!response.ok) throw new Error("Ошибка при получении данных");

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Ошибка:", error);
    }
}
