// const user = {
//     name: 'Saykal',
//     age: 19
// }
//
// // console.log(JSON)
//
// const button = document.querySelector('button')
//
// button.onclick = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'data.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.onload = () => {
//        const data = JSON.parse(request.response)
//         document.querySelector('.age').innerHTML = data.age;
//         document.querySelector('.name').innerHTML = data.name;
//
//     }
// }
//

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



const personalBlock = document.querySelector('.characters');


function fetchData(callback) {
    const request = new XMLHttpRequest();
    request.open('GET', 'persons.json');
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

    request.onload = () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            console.log("Полученные данные из persons.json:", data);
            callback(data);
        } else {
            console.error('Ошибка загрузки данных:', request.status);
        }
    };
}



function renderCards(persons) {
    persons.forEach((person) => {
        const personCard = document.createElement('div');
        personCard.setAttribute('class', 'person-card');

        personCard.innerHTML = `
            <div class="person-image">
                <img src="${person.photo}" alt="${person.name}">
            </div>
            <h2>${person.name}</h2>
            <p>Age: ${person.age}</p>
        `;

        personalBlock.appendChild(personCard);
    });
}

fetchData(renderCards);
