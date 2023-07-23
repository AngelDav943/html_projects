const line = document.getElementById("line")
const target = document.getElementById("target")

const pointDisplay = document.getElementById("points")
var delay = 400
var points = 0;

function generate() {
    let number = Math.floor(Math.random() * 100)
    let random = ""

    if (number <= 30) {
        random = `calc(${number}% + 4em)`
    } else if (number >= 70) {
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
    var animateInfo = {duration: 1000}

    if (linepos >= targetpos && linepos <= (targetpos + targetwidth)) {
        points += 10

        pointDisplay.animate([
            { backgroundColor: "greenyellow"},
            { backgroundColor: "#292f3d"}
        ], animateInfo)

        delay = Math.max(delay - 100, 200)
        generate()
    } else {

        pointDisplay.animate([
            { backgroundColor: "red"},
            { backgroundColor: "#292f3d"}
        ], animateInfo)

        delay = Math.min(delay + 50, 700)
        points--;
    }

    pointDisplay.innerText = points
}

let vel = 20
let pos = 0
function update() {
    pos += vel
    
    if (pos >= 100 || pos <= 0) {
        vel = -vel
    }
    
    line.style.left = `calc(${pos}% - 2px)`
    line.style.transition = `all ${delay}ms linear(0 0%, 1 100%) 0s`
    setTimeout(update, delay)
}


update()
generate()
pointDisplay.innerText = points