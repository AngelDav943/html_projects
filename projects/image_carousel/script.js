const carousel = document.querySelector("#carousel")
const items = document.querySelector("#carousel").querySelectorAll(".item")

var current = 0
function update(value) {
    //if ((current+newcurrent) >= 0 && (current+newcurrent) < (items.length)-1) current += newcurrent
    //carousel.scrollLeft = current * (carousel.scrollWidth / (items.length))

    var newcurrent = current + value
    if (newcurrent >= 0 && newcurrent < items.length) current = newcurrent
    carousel.scrollLeft = items[current].offsetLeft
}