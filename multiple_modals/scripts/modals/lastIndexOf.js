const lastIndexOf_input = document.querySelector("#lastIndexOf_input")
const lastIndexOf_button = document.querySelector("#lastIndexOf_button")

const lastIndexOf_display = document.querySelector("#lastIndexOf_display")
const lastIndexOf_result = document.querySelector("#lastIndexOf_result")

let lastIndexOf_array = [2,3,7,3,1,5,9,5,3,0]
display(lastIndexOf_display, lastIndexOf_array, "lastIndexOf")

lastIndexOf_button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = lastIndexOf_array.lastIndexOf(parseInt(lastIndexOf_input.value))
    lastIndexOf_result.innerHTML = '<span class="code">' + result.toString() + '</span>'
    display(lastIndexOf_display, lastIndexOf_array, "lastIndexOf")
})