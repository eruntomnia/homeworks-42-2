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


// HOMEWORK 2

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

// hm4 final

const charactersList = document.querySelector('.characters')
const xhr = new XMLHttpRequest()
xhr.open('GET', '../data/persons.json')
xhr.onload = () => {
   const response = JSON.parse(xhr.response)
    response.forEach((item) => {
        const card = document.createElement('div')
        card.className = 'person-card'
        card.innerHTML = `
            <img class="person-image" src="${item.person_photo}" alt="">
            <h1>${item.name}</h1>
            <h2>${item.age}</h2>
        `
        charactersList.append(card)
    })
}
xhr.send()

// HM4

// const persons = [
//     {
//         name: 'Rhett' ,
//         age: 45,
//         photo: 'https://images.spletnik.ru/i/9/9BtLCNtKfE/1011.jpg'
//     },
//     {
//         name: 'Scarlett' ,
//         age: 24,
//         photo: 'https://avatars.dzeninfra.ru/get-zen_doc/3518390/pub_5f82039842a69673f72b98a5_5f82ea09b1a4d95dc02b1b6c/scale_1200'
//     },
//     {
//         name: 'Melanie' ,
//         age: 26,
//         photo: 'https://avatars.dzeninfra.ru/get-zen_doc/4120502/pub_6373cdbcbdba934e54751118_6373ce6e3f9fa41e51ccd8ea/scale_1200'
//     },
//     {
//         name: 'Ashley' ,
//         age: 30,
//         photo: 'https://avatars.dzeninfra.ru/get-zen_doc/3684252/pub_6428672b17fedc0d79e1e365_642940079b20746119487a13/scale_1200'
//     },
//     {
//         name: 'Mammy' ,
//         age: 50,
//         photo: 'https://cs11.pikabu.ru/post_img/2020/09/10/7/1599738126264727480.png'
//     },
//     {
//         name: 'Bonnie Blue' ,
//         age: 5,
//         photo: 'https://avatars.dzeninfra.ru/get-zen_doc/3341818/pub_5f046759eacd26447afb6269_5f0467f9045ea325eec8af73/scale_1200'
//     },
//     {
//         name: 'Gerald' ,
//         age: 70,
//         photo: 'https://cdn-irec.r-99.com/sites/default/files/imagecache/copyright/user-images/1155602/3sV0s9YOJQlhMAkDaxyTSA.jpg'
//     },
//     {
//         name: 'Ellen' ,
//         age: 50,
//         photo: 'https://avatars.dzeninfra.ru/get-zen_doc/28845/pub_5c76a50200500800b3d6e889_5c8f49e349683300b25fe695/scale_1200'
//
//     }]
//
// const personalBlock = document.querySelector('.characters');
// const userPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzxzYv-qUlnD_w1_OS_50_RbKrrsjggPiEw&s'
// persons.forEach((person) => {
//     const personCard = document.createElement('div');
//     personCard.setAttribute('class', 'person-card')
//
//     personCard.innerHTML = `
//     <div class="person-image">
//         <img src="${person.photo}" alt="${person.name}">
//     </div>
//     <h2>${person.name}</h2>
//     <p>age: ${person.age}</p>
//     `
//
//     personalBlock.appendChild(personCard);
// })



