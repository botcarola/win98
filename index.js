console.log("hola")

// BUTTON START 

const buttonStart = document.getElementById ("button-start")
console.log(buttonStart)

const startClass = document.querySelector (".start")
console.log(startClass)
const startClassToggle = document.querySelector (".start-toggle")
console.log(startClassToggle)

const body = document.getElementById("body")

buttonStart.addEventListener("click" , () =>{
buttonStart.classList.toggle("start")
buttonStart.classList.toggle("start-toggle")
}) 


