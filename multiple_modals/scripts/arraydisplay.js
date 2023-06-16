function display(result, array, id = "") {
    let display_array = array.map((value, index) => {
        return `<span id='${id}${index}'>${value}</span>`
    })
    result.innerHTML = display_array.join("")
}