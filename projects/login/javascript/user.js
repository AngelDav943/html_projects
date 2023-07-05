const userlabel = document.querySelector("#username")
const passlabel = document.querySelector("#password")

const username = localStorage.getItem("user")
const password = localStorage.getItem("pass")

userlabel.innerHTML = username
passlabel.innerHTML = password