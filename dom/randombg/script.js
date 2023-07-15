const background = document.getElementById("background")

function change() {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)

    background.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}