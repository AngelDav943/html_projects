const userinput = document.querySelector("#username")
const passinput = document.querySelector("#password")

function login() {
    localStorage.setItem("user", userinput.value)
    localStorage.setItem("pass", passinput.value)

    //document.location.href = "./access.html"
}