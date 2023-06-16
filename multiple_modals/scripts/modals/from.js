const from_input = document.querySelector("#from_input")
const from_button = document.querySelector("#from_button")
const from_restart = document.querySelector("#from_restart")
const from_result = document.querySelector("#from_result")

let from_array = []
from_result.innerHTML = "<span> </span>"

from_button.addEventListener('click', (e) => {
    e.preventDefault()
    let result_array = Array.from(from_input.value)
    from_input.value = ""
    display(from_result, result_array, "from")
})

from_restart.addEventListener('click', (e) => {
    e.preventDefault()
    from_array = []
    from_result.innerHTML = "<span> </span>"
})