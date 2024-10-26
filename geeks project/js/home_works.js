//CHARACTERS

const chart = document.querySelector('.chart');
const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/persons.json'); // Убедитесь, что путь к JSON правильный
xhr.onload = () => {
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        response.forEach((item) => {
            const card = document.createElement('div');
            card.className = 'person-card'; // Класс для карточки
            card.innerHTML = `
                <div class="front">
                    <img class="person-image" src="${item.person_photo}" alt="Фото">
                </div>
                <div class="back">
                    <h1>${item.name}</h1>
                    <h2>${item.age}</h2>
                </div>
            `;
            chart.append(card);
        });
    } else {
        console.error('Ошибка загрузки данных:', xhr.statusText);
    }
};
xhr.send();


// SQUERE

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
    } else if (positionX >= parentWidth && positionY < parentHeight) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
    } else if (positionY >= parentHeight && positionX > 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    } setTimeout (moveBlock, 0.5)
};

moveBlock()



