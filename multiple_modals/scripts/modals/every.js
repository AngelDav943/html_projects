const every_input = document.querySelector("#every_input")
const every_button = document.querySelector("#every_button")

const every_display = document.querySelector("#every_display")
const every_result = document.querySelector("#every_result")

let every_array = [10,5,23,7,18]
display(every_display, every_array,"every")

every_button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = every_array.every(item => {
        return item > parseInt(every_input.value);
    }).toString()
    every_result.innerHTML = '<span class="code '+result+'">' + result + '</span>'
    display(every_display, every_array, "every")
})