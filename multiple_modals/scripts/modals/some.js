const some_input = document.querySelector("#some_input")
const some_button = document.querySelector("#some_button")

const some_display = document.querySelector("#some_display")
const some_result = document.querySelector("#some_result")

let some_array = [10,5,20,3,18]
display(some_display, some_array, "some")

some_button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = some_array.some(item => {
        return item > parseInt(some_input.value);
    }).toString()
    some_result.innerHTML = '<span class="code '+result+'">' + result + '</span>'
    display(some_display, some_array, "some")
})