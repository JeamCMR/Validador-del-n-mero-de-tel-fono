//**VARIABLES */

const userInput = document.getElementById("user-input");
const buttonCheck = document.getElementById("check-btn");
const buttonClear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");



/*FUNCIONES Y EVENTOS */

const checkInputValid = () =>{
    debugger
    if(!userInput.value){
        alert("Please provide a phone number");
    }
}


buttonCheck.addEventListener("click", ()=>{
    checkInputValid();
})