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