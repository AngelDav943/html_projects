const includes_input = document.querySelector("#includes_input")
const includes_button = document.querySelector("#includes_button")

const includes_display = document.querySelector("#includes_display")
const includes_result = document.querySelector("#includes_result")

let includes_array = [
    'manzana', 'uva', 'piña', 'pera', 'mango', 'arándano', 'banana', 'kiwi', 'zapote', 'sandia',
    'mandarina', 'naranja', 'tamarindo', 'melon', 'maracuya', 'fresa', 'coco', 'durazno', 'limon'
]
display(includes_display, includes_array, "includes")

includes_button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = includes_array.includes(includes_input.value.toLowerCase()).toString()
    includes_result.innerHTML = '<span class="code '+result+'">' + result + '</span>'
    display(includes_display, includes_array, "includes")
})