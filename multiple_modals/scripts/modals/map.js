const map_input = document.querySelector("#map_input")
const map_button = document.querySelector("#map_button")
const map_restart = document.querySelector("#map_restart")
const map_display = document.querySelector("#map_display")

function map_generate_array() {
    map_array = []
    for (let i = 1; i <= 50; i++) {
        map_array.push(i)
    }
}

let map_array = []
map_generate_array()
display(map_display, map_array, "map")

map_button.addEventListener('click', (e) => {
    e.preventDefault()
    map_array = map_array.map(item => {
        return item * parseInt(map_input.value)
    })
    display(map_display, map_array, "map")
})

map_restart.addEventListener('click', (e) => {
    map_generate_array()
    display(map_display, map_array, "map")
})