// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)

// ooo
// const persons = [
//     {
//         name: 'Rhett' ,
//         age: 45
//     },
//     {
//         name: 'Scarlett' ,
//         age: 24
//     },
//     {
//         name: 'Melanie' ,
//         age: 26
//     },
//     {
//         name: 'Ashley' ,
//         age: 30
//     },
//     {
//         name: 'Mammy' ,
//         age: 50
//     },
//     {
//         name: 'Ellen' ,
//         age: 50
//     },
//     {
//         name: 'Gerald' ,
//         age: 70
//     },
//     {
//         name: 'India' ,
//         age: 30
//     },
// ]
//
// const personalBlock = document.querySelector('.characters');
// persons.forEach((person)) => {
//     const personCard = document.createElement('div');
//
//     personalBlock.appendChild(personCard);
// })

