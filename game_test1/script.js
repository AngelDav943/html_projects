const line = document.getElementById("line")
const target = document.getElementById("target")

const pointDisplay = document.getElementById("points")
var points = 0;

function generate() {
    let number = Math.floor(Math.random() * 100)
    let random = ""

    if (number <= 10) {
        random = `calc(${number}% + 4em)`
    } else if (number >= 90) {
        random = `calc(${number}% - 4em)`
    } else {
        random = `${number}%`
    }

    console.log(random)
    target.style.left = random
}

function trigger() {
    var targetpos = target.getClientRects()[0].x;
    var targetwidth = target.clientWidth;

    var linepos = line.getClientRects()[0].x;

    if (linepos >= targetpos && linepos <= (targetpos + targetwidth)) {
        points += 10
        generate()
    } else {
        points--;
    }

    pointDisplay.innerText = points
}

let vel = 20
let pos = 0
setInterval(function() {
    pos += vel
    
    if (pos >= 100 || pos <= 0) {
        vel = -vel
    }
    
    line.style.left = `calc(${pos}% - 2px)`
    
}, 200)

generate()
pointDisplay.innerText = points