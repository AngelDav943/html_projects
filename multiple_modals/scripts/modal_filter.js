const filter_input = document.querySelector("#filter_input")
const filter_button = document.querySelector("#filter_button")

const filter_display = document.querySelector("#filter_display")

let filter_array = []
for (let i = 0; i <= 100; i++) {
    filter_array.push(i)
}
display(filter_display, filter_array)

filter_button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = filter_array.filter(item => {
        return item >= parseInt(filter_input.value)
    })
    display(filter_display, result)
})