const openButtons = document.querySelectorAll(".open_modal")

openButtons.forEach(item => {
    let modal = document.querySelector(".modal#" + item.id)

    if (modal) {
        let close = modal.querySelector(".modal_close")

        item.addEventListener('click', (e) => {
            e.preventDefault()
            modal.classList.add("--show")
        })

        close.addEventListener('click', (e) => {
            e.preventDefault()
            modal.classList.remove("--show")
        })
    }

    if (!modal) item.classList.add("--disabled")
})