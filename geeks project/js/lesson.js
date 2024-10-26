//Phone checker
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

// Tab slider
const tapContentBlocks = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabParent = document.querySelector('.tab_content_items');
let currentIndex = 0;
let timerId;

const hideTabContent = () => {
    tapContentBlocks.forEach((item) => {
        item.style.display = 'none';
    });
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    tapContentBlocks[index].style.display = 'block';
    tabItems[index].classList.add('tab_content_item_active');
};

const startAutoSlide = () => {
    timerId = setTimeout(function autoSwitch() {
        currentIndex = (currentIndex + 1) % tapContentBlocks.length;
        hideTabContent();
        showTabContent(currentIndex);
        timerId = setTimeout(autoSwitch, 3000);
    }, 3000);
};

const stopAutoSlide = () => {
    clearTimeout(timerId);
};

// Начальная настройка вкладок
hideTabContent();
showTabContent(0);
startAutoSlide();

// Обработчик для кликов по вкладкам
tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((item, index) => {
            if (event.target === item) {
                stopAutoSlide();
                hideTabContent();
                showTabContent(index);
                currentIndex = index;
                startAutoSlide();
            }
        });
    }
};

// Асинхронная функция для получения данных
const fetchData = async () => {
    try {
        const response = await fetch('../data/persons.json');

        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
};

// Вызов функции для получения данных
fetchData();



//Card
const card = document.querySelector('.card');
const prevButton = document.querySelector('#btn-prev');
const nextButton = document.querySelector('#btn-next');

let cardId = 1;

const fetchCard = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

        if (!response.ok) {
            throw new Error('Ошибка загрузки карточки');
        }

        const data = await response.json();
        const { title, completed } = data;

        card.innerHTML = `
            <p>${title}</p>
            
        `;
    } catch (error) {
        console.error('Ошибка:', error.message);
        card.innerHTML = `<p>Не удалось загрузить карточку.</p>`;
    }
};

fetchCard(cardId);

nextButton.onclick = () => {
    cardId = cardId < 200 ? cardId + 1 : 1;
    fetchCard(cardId);
};

prevButton.onclick = () => {
    cardId = cardId > 1 ? cardId - 1 : 200;
    fetchCard(cardId);
};

// Запрос всех данных из posts для примера
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.error('Ошибка загрузки постов:', error));


//TIME
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

// // EMAIL
// const gmail_input = document.querySelector('#gmail_input')
// const gmail_button = document.querySelector('#gmail_button')
// const gmail_result = document.querySelector('#gmail_result')
//
// const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
//
// gmail_button.onclick = () => {
//     if (regExp.test(gmail_input.value)) {
//         gmail_result.innerHTML = 'That is ok👍'
//         gmail_result.style.color = 'green'
//     } else {
//         gmail_result.innerHTML = 'Try again🤗'
//         gmail_result.style.color = 'red'
//     }
// }

