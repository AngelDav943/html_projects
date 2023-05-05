var element = document.body;
enabled = localStorage.getItem("night");

function icon(btn) {
    if (enabled.toString() == "true") {
        btn.src = "./images/moon.png"
    } else {
        btn.src = "./images/sun.png"
    }
}

element.classList.toggle("night", enabled == "true");
icon(document.getElementsByClassName("nightbtn").item(0));
function dark(btn) {
    enabled = !enabled
    localStorage.setItem("night", enabled);
    icon(btn);
    element.classList.toggle("night", enabled);
}