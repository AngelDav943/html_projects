const sort_button = document.querySelector("#sort_button")
const sort_restart = document.querySelector("#sort_restart")
const sort_display = document.querySelector("#sort_display")

let sort_array = [
    "Manzana", "Uva", "Piña", "Pera", "Mango", "Arándano", "Banana", "Kiwi", "Zapote", "Sandia",
    "Mandarina", "Naranja", "Tamarindo", "Melon", "Maracuya", "Fresa", "Coco", "Durazno", "Limon"
]

display(sort_display, sort_array, "sort")

sort_button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = [...sort_array].sort()
    display(sort_display, result, "sort")
})

sort_restart.addEventListener('click', (e) => {
    e.preventDefault()
    display(sort_display, sort_array, "sort")
})