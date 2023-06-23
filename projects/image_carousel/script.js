const carousel = document.querySelector("#carousel")
const items = document.querySelector("#carousel").querySelectorAll(".item")

var current = 0
function update(newcurrent) {
    if ((current+newcurrent) >= 0 && (current+newcurrent) <= (items.length/2)-1) current += newcurrent
    carousel.scrollLeft = current * (carousel.scrollWidth / (items.length/2))
}