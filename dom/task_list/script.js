const taskList = document.getElementById("list")
const taskinput = document.getElementById("name")

function addTask() {
    if (!taskinput.value || taskinput.value.replaceAll(" ", "") == "") {
        alert("Input a valid")
        return
    }

    let container =  document.createElement("div")
    container.classList.add("task")

    let text = document.createElement("span")
    text.innerText = taskinput.value
    container.appendChild(text)

    let buttons = document.createElement("div")
    buttons.classList.add("buttons")
    container.appendChild(buttons)

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

    buttons.append(complete, destroy)

    taskList.appendChild(container)
    taskinput.value = ""
}

function deleteTask(element) {
    element.remove()
}

function completeTask(element) {
    element.classList.toggle("selected")
}