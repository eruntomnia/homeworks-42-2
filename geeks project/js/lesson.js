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

// tab slider

const tapContentBlocks = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
let currentIndex = 0;
let timerId;

const hideTabContent = () => {
    tapContentBlocks.forEach((item) => {
        item.style.display = 'none';
    })
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tapContentBlocks[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

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

hideTabContent()
showTabContent(0)
startAutoSlide();


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
        })
    }
}

const xhr = new XMLHttpRequest()
xhr.open('GET', '../data/persons.json')
xhr.onload = () => {
    const response = JSON.parse(xhr.response)
    console.log(response)
}
xhr.send()


// conveter

const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')

const converter = (element, targetElement) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            if (element.id === 'som') {
                targetElement.value = (element.value / data.usd).toFixed(2)
            }
            if (element.id === 'usd') {
                targetElement.value = (element.value * data.usd).toFixed(2)
            }
            if (element.value === '') {
                targetElement.value = ''
            }
        }
    }
}
converter(usdInput, somInput)
converter(somInput, usdInput)

// somInput.oninput = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', '../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//     }
// }
//
// usdInput.oninput = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', '.../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//     }
// }