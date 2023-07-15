const background = document.getElementById("background")
const button = document.getElementById("button")

// Funcion de cambio de color
function change() {
    var r = Math.floor(Math.random() * 255) // Asigna un color aleatorio para el valor Rojo
    var g = Math.floor(Math.random() * 255) // Asigna un color aleatorio para el valor Verde
    var b = Math.floor(Math.random() * 255) // Asigna un color aleatorio para el valor Azul

    // Convierte valores rgb a codigo hexadecimal y lo asigna al texto del boton
    button.innerText = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`

    // Actualiza el color del fondo
    background.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}