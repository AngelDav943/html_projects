const imageModal = document.getElementById("imageModal")
const taskList = document.getElementById("list")
const taskinput = document.getElementById("name")

function addTask() {
    if (!taskinput.value || taskinput.value.replaceAll(" ", "") == "") {
        alert("Input a valid")
        return
    }

    let container =  document.createElement("div")
    container.classList.add("task")

    let image = document.createElement("img")
    image.src = "./images/" + taskinput.value + ".png"
    image.onclick = function() {
        displayTask(image)
    }

    let buttons = document.createElement("div")
    buttons.classList.add("buttons")

    let destroy = document.createElement('i')
    destroy.classList.add("destroy")
    destroy.onclick = function() {
        deleteTask(container)
    }

    let complete = document.createElement('i')
    complete.classList.add("complete")
    complete.onclick = function() {
        completeTask(container)
    }

    container.appendChild(image)
    buttons.append(complete, destroy)
    container.appendChild(buttons)

    taskList.appendChild(container)
    taskinput.value = ""
}

function deleteTask(element) {
    element.remove()
}

function completeTask(element) {
    element.classList.toggle("selected")
}

function displayTask(element) {
    const img = imageModal.getElementsByTagName("img")[0]
    img.src = element.src
    imageModal.classList.add("show")
}

function hideModal() {
    imageModal.classList.remove("show")
}