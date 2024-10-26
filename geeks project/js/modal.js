// modal
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeIcon = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow =  'hidden'
    window.removeEventListener('scroll', showModalOnScroll);
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow =  ''
}

modalTrigger.onclick = () => openModal()
closeIcon.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal ) {
        closeModal()
    }
}

const showModalOnScroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 1) {
        openModal();
    }
};


window.addEventListener('scroll', showModalOnScroll);

setTimeout(() => {
    openModal();
}, 10000);

///post data

const form = document.querySelector('form')

const chatId = '@young4hua1'
const token = '7749838157:AAFhEM8rfY9AH9KY9LkbZrYF6nBbff0OR5w'
const api_url = `https://api.telegram.org/bot${token}/sendMessage`

form.onsubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    const user = {}
    formData.forEach( (item, index) => {
        user[index] = item
    })
    const {name, phone} = user
    const text = `name: ${name}\nNumber: ${phone}`

    fetch(api_url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({chat_id: chatId, text}),
    })
}

// const object = {}
// object.name = 'Lola'
// console.log(object.name)
//
