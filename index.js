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

// NOTIFICATION AREA

function startTime(){
today = new Date();
h = today.getHours();
m = today.getMinutes();
m = checkTime(m);
document.getElementById('clock').innerHTML= h + ":" + m ;
t = setTimeout('startTime()',500);}
function checkTime(i)
{if (i<10) {i="0" + i;} return i;}
window.onload = function() {startTime();}
