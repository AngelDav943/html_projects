
const menuButton = document.getElementById("menu")
const headerContainer = document.getElementById("header")
menuButton.addEventListener("click", () => {
	headerContainer.classList.toggle('open')
})