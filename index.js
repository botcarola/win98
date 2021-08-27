console.log("hola")

// BUTTON START 

const buttonStart = document.getElementById("button-start")
const startClass = document.querySelector(".start")
const startClassToggle = document.querySelector(".start-toggle")
const boxButton = document.getElementById("box-button")
const borderNone = document.querySelector(".border-none")
const borderDotted = document.querySelector(".border-dotted")


buttonStart.addEventListener("click", () => {
    buttonStart.classList.toggle("start")
    boxButton.classList.toggle("border-none")
    buttonStart.classList.toggle("start-toggle")
    boxButton.classList.toggle("border-dotted")
})


