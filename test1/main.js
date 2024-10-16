// 1
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const result = document.querySelector('#result')

const regExp = /[0-9]/

button.onclick = () => {
    if (regExp.test(input.value)) {
        result.innerHTML = 'That is ok👍'
        result.style.color = 'green'
    } else {
        result.innerHTML = 'Try again🤗'
        result.style.color = 'red'
    }
    input.value = '';
}

// // 2
const logEverySecond = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
}

logEverySecond();



// // 3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}

count();




// 4
const fourth = document.querySelector('.fourth');

fourth.onclick = () => {
    fourth.classList.toggle('active');
};

// 5
const xhr = new XMLHttpRequest();

xhr.open('GET', 'app.json');
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.statusText);
        }
    }
};