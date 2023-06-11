const find_input = document.querySelector("#find_input")
const find_button = document.querySelector("#find_button")
const find_restart = document.querySelector("#find_restart")
const find_display = document.querySelector("#find_display")

let find_array = [
    "Manzana", "Uva", "Piña", "Pera", "Mango", "Arándano", "Banana", "Kiwi", "Zapote", "Sandia",
    "Mandarina", "Naranja", "Tamarindo", "Melon", "Maracuya", "Fresa", "Coco", "Durazno", "Limon"
]

display(find_display, find_array)

find_button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = [find_array.find(item => {
        return item.toLowerCase() == find_input.value.toLowerCase()
    })]
    display(find_display, result)
})

find_restart.addEventListener('click', (e) => {
    e.preventDefault()
    display(find_display, find_array)
})