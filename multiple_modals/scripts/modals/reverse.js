const reverse_button = document.querySelector("#reverse_button")
const reverse_restart = document.querySelector("#reverse_restart")
const reverse_display = document.querySelector("#reverse_display")

let reverse_base = [
    "Rojo", "Verde", "Amarillo", "Blanco", "Rosado", "Azul", "Naranja", "Morado", "Negro"
]
let reverse_array = [...reverse_base]

display(reverse_display, reverse_array, "reverse")

reverse_button.addEventListener('click', (e) => {
    e.preventDefault()
    reverse_array.reverse()
    display(reverse_display, reverse_array, "reverse")
})

reverse_restart.addEventListener('click', (e) => {
    e.preventDefault()
    reverse_array = [...reverse_base]
    display(reverse_display, reverse_array, "reverse")
})