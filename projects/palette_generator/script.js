function rgbtohex(red,green,blue) {
    let rgb = [red, green, blue]
    let hex = [rgb[0].toString(16), rgb[1].toString(16), rgb[2].toString(16)]

    hex = hex.map(item => {
        if (item.length == 1) return "0" + item
        return item
    })

    return ("#" + hex.join('').toUpperCase())
}


function generator(base) {

}