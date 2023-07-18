function randomColor() {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`
}

let oned = false
function one(element) {
    element = element.parentElement

    element.style.transition = "transform 1s"
    element.style.transform = `rotate(${oned ? 0 : 360}deg)`
    oned = !oned
}

function two(element) {
    element.style.mixBlendMode = "difference"
    element = element.parentElement
    element.style.backgroundColor = randomColor()
}

let threed = false
function three(element) {
    element.style.borderRadius = threed ? "" : "5vmax"
    element.style.transition = "all 1s"
    element.style.width = threed ? "" : "100%"
    element.style.height = threed ? "" : "100%"

    threed = !threed
}

let fourd = false
function four(element) {
    element.style.transition = "font-size 1s"
    element.style.fontSize = fourd ? "" : "50%"
    fourd = !fourd
}

let fived = false
function five(element) {
    element = element.parentElement

    element.style.transition = "transform 1s"
    element.style.transform = fived ? "" : "skewY(45deg)"
    fived = !fived
}

let sixed = false
function six(element) {
    element = element.parentElement

    element.style.transition = "transform 1s"
    element.style.transform = sixed ? "" : "skewX(40deg)"
    sixed = !sixed
}