const title = document.getElementById("title")
const cuadro = document.querySelector(".cuadro")
const list = document.getElementById("list")

const links = document.getElementsByTagName("a")

function updat() {
    //links[0].href = "https://github.com/AngelDav943/html_projects"
    links[0].setAttribute("href", "https://github.com/AngelDav943/html_projects")
    links[0].innerHTML = "html_projects github"
    title.innerText = "Wow"

    const newbtn = document.createElement("button")
    newbtn.innerText = "wow"
    newbtn.onclick = updat
    cuadro.append(newbtn)

    cuadro.classList.toggle("selected")
}