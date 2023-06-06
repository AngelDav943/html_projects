var capital = parseInt(prompt("Ingrese cantidad a invertir"))
var interes = parseInt(prompt("Ingrese interes anual (en porcentaje)"))
var años = parseInt(prompt("Ingrese cantidad a de años desde la inversion"))

for (let t = 0; t < años; t++) {
    let total = capital * interes * años
    document.write("años: "+ t +", total:"+ + total + "<br>")
}