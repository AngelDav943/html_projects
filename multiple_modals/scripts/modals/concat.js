const concat_buttons = document.querySelector("#concat_buttons")
const concat_restart = document.querySelector("#concat_restart")
const concat_display = document.querySelector("#concat_display")
const concat_results = document.querySelector("#concat_results")

const concat_array1 = ["Manzana", "Uva", "Piña"]
const concat_array2 = ["Pera", "Mango", "Arándano"]
const concat_array3 = ["Mandarina", "Naranja", "Limon"]
const concat_arrays = [concat_array1, concat_array2, concat_array3]

concat_results.innerHTML = ""
concat_arrays.forEach(arr => {
    concat_results.innerHTML += "<span class='code'>" + arr.join(",") + "</span> <br>"
})

/*concat_button.addEventListener('click', (e) => {
    e.preventDefault()

})*/

concat_restart.addEventListener('click', (e) => {
    e.preventDefault()
    display(concat_display, concat_array, "concat")
    concat_result.innerHTML = ''
})