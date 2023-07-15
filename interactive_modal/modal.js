const openModal = document.querySelector(".click")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".modal_close")

openModal.addEventListener('click', event => {
    event.preventDefault()
    modal.classList.add("--show")
})

closeModal.addEventListener('click', event => {
    event.preventDefault()
    modal.classList.remove("--show")
})