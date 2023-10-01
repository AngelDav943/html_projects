var content = ""

function inputadd(button)
{
    content = String(content) + button.id
    updateDisplay()
}

function wipe()
{
    content = ""
    updateDisplay()
}

function remove()
{
    content = String(content).slice(0, content.length-1)
    updateDisplay()
}

function calculate()
{
    console.log(content)
    content = math.evaluate(String(content))
    updateDisplay()
}

function updateDisplay()
{
    const display = document.getElementById("display")
    let result = String(content)//String(content).slice(content.length-26)
    display.innerHTML = "<p>" + result + "</p>"
}