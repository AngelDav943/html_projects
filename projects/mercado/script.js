const market = [
    {
        "name":"Tomate",
        "price": 10,
        "amount":1
    },
    {
        "name":"Lechuga",
        "price": 10,
        "amount":1
    },
    {
        "name":"Manzana",
        "price": 10,
        "amount":1
    },
    {
        "name":"Pan",
        "price": 10,
        "amount":1
    },
    {
        "name":"Leche",
        "price": 10,
        "amount":1
    },
    {
        "name":"Zanahoria",
        "price": 10,
        "amount":1
    },
]
var cart = []

const marketcontainer = document.querySelector("#market")
var content = ""
for (let index = 0; index < market.length; index++) {
    const item = market[index]
    content += `<article>
        <img src="images/${item.image}" alt="${item.name}">
        <div>
            <p class="name">${item.name} <span class="price">${item.price}</span> </p>
            <input type="button" value="Buy" onclick="buy(${index})">
        </div>
    </article>`
}
marketcontainer.innerHTML = content

function displayCart() {
    const container = document.querySelector("#cart")
    var content = ""
    for (let index = 0; index < cart.length; index++) {
        const item = cart[index]
        content += `<article>
        <img src="images/${item.image}" alt="${item.name}">
        <div>
        <p class="name">${item.name} (${item.amount}) <span class="price">${item.price}</span> </p>
        <input type="button" value="-" onclick="remove(${index})">
        </div>
        </article>`
    }
    document.querySelector("aside #amount").innerHTML = "("+cart.length + (cart.length == 1 ? " item" : " items") + ")"
    document.querySelector("aside #total").innerHTML = "Total: " + cart.reduce((prev, current) => {
        return prev + (current.price * current.amount)
    }, 0)
    container.innerHTML = content
}

function buy(index) {
    if (index < 0 || index >= market.length) return
    let item = market[index]
    let overlap = cart.filter(object => {
        if (object.name == item.name) return object
    })[0]
    if (overlap) {
        overlap.amount += 1
    } else {
        cart.push(item)
    }
    displayCart()
}

function remove(index) {
    let item = cart[index]
    if (item.amount > 1) {
        item.amount = item.amount - 1
        displayCart()
        return
    }
    
    if (index >= 0 && index < cart.length) cart.splice(index, 1)
    displayCart()
}