const carousel = document.querySelector("#carousel")
const items = document.querySelector("#carousel").querySelectorAll(".item")

var current = 0
function update(value) {
    if (current+value >= 0 && current+value < items.length) current += value
    //carousel.scrollLeft = current * (carousel.scrollWidth / (items.length))

    /*var newcurrent = current + value
    if (carousel.scrollLeft > 0 && carousel.scrollLeft < carousel.scrollWidth-1) current = newcurrent
    carousel.scrollLeft = items[current].offsetLeft*/

    //var number = carousel.scrollLeft + ((items[current].clientWidth) * value)
    var number = items[current].offsetLeft
    console.log(number)
    carousel.scrollLeft = parseInt(Math.min(Math.max(number, 0), carousel.scrollWidth))
}