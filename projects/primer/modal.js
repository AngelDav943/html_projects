const openModal = document.getElementById("contact")
const modal = document.querySelector(".modal")
const closeModal = modal.querySelector("#close")

openModal.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.add("--show")
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.remove("--show")
})