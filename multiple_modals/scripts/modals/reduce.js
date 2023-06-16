const reduce_button = document.querySelector("#reduce_button")
const reduce_display = document.querySelector("#reduce_display")
const reduce_result = document.querySelector("#reduce_result")

let reduce_array = [4,2,6,3,12,24,7,8,10,5]
display(reduce_display, reduce_array, "reduce")

let reduce_started = false
reduce_button.addEventListener('click', (e) => {
    e.preventDefault()
    if (reduce_started == false) {
        reduce_started = true

        reduce_array.reduce((total, value, index) => {
            let item = reduce_display.querySelector(`#reduce${index}`)
            setTimeout(() => {
                let last = reduce_display.querySelector(`#reduce${index-1}`)
                if (last) last.classList.remove("selected")
                if (item) item.classList.add("selected")
                reduce_result.innerHTML = total+value
            }, 800 * index)
            return total + value
        }, 0)

        setTimeout(() => {
            let item = reduce_display.querySelector(`#reduce${reduce_array.length-1}`)
            item.classList.remove("selected")
            reduce_started = false
        }, 800 * reduce_array.length)
    }
})