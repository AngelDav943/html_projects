const numbers = document.querySelector("#numbers")
for (let index = 1; index <= 12; index++) {
    let num = document.createElement("span")

    let angle = (Math.PI / 180) * (90 - (index * 30));
    let diameter = 425

    let x = Math.cos(angle) * (diameter / 2);
    let y = Math.sin(angle) * (diameter / 2);

    num.id = index
    num.style.transform = `translate( calc(50% - ${-x}px), calc(50% - ${y}px) ) `
    num.innerHTML = index
    numbers.appendChild(num);
}