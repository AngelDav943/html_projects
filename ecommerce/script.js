const items = [
    {
        "name": "Pizza",
        "image": "./images/pizza.png",
        "price": 10
    },
    {
        "name": "Tomato",
        "image": "./images/tomato.png",
        "price": 5
    },
    {
        "name": "Hamburger",
        "image": "./images/hamburger.png",
        "price": 15
    }
]

var cart = []

function addtoCart(index) {
    const element = items[index]
    console.log("Added", element.name)
}

const shopContainer = document.getElementById("shop");

items.forEach((element, index) => {
    shopContainer.innerHTML += `
    <article onClick="addtoCart(${index})">
        <img src="${element.image}">
        <div class="info">
            <p>${element.name}</p>
            <span class="price">$${element.price}</span>
        </div>
    </article>
    `
});