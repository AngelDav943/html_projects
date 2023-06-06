const openModal = document.querySelector(".click")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".modal_close")

openModal.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.add("--show")
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.remove("--show")
})