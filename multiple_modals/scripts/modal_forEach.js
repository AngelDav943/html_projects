const forEach_button = document.querySelector("#forEach_button")
const forEach_display = document.querySelector("#forEach_display")

let forEach_array = ["manzanas", "peras", "mangos", "bananas", "kiwi", "mandarinas", "naranjas", "melon", "sandias", "maracuya"]
display(forEach_display, forEach_array)

let forEach_started = false
forEach_button.addEventListener('click', (e) => {
    e.preventDefault()
    if (forEach_started == false) {
        forEach_started = true
        let elements = forEach_display.childNodes

        for (let index = 0; index <= elements.length; index++) {
            const item = elements[index];
            setTimeout(() => {
                let last = elements[index-1]
                if (last) last.classList.remove("selected")
                if (item) item.classList.add("selected")
            }, 300 * index)
        }

        setTimeout(() => {
            forEach_started = false
        }, 300 * elements.length)
    }
})