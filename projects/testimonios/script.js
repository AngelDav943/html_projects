const testimonios = document.querySelectorAll(".testimonio")

update()
setInterval(() => {
    update();
}, 1500)


var current = 0
function update() {
    testimonios.forEach((element, index) => {
        element.style.transform = "translate("+ ( (index-current) * 600) +"px ,"+ (index * -400) +"px)"
    })
    current += 1
    if (current >= testimonios.length) current = 0
}