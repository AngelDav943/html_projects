const splice_button = document.querySelector("#splice_button")
const splice_restart = document.querySelector("#splice_restart")
const splice_result = document.querySelector("#splice_result")

const splice_input_start = document.querySelector("#splice_input_start")
const splice_input_end = document.querySelector("#splice_input_end")

let splice_array = [
    "Manzana", "Uva", "Piña", "Pera", "Mango", "Arándano", "Banana", "Kiwi", "Zapote", "Sandia",
    "Mandarina", "Naranja", "Tamarindo", "Melon", "Maracuya", "Fresa", "Coco", "Durazno", "Limon"
]
display(splice_result, splice_array, "splice")

splice_button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = [...splice_array].splice(splice_input_start.value, splice_input_end.value)
    display(splice_result, result, "splice")
})

splice_restart.addEventListener('click', (e) => {
    e.preventDefault()
    display(splice_result, splice_array, "splice")
})