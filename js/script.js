//**VARIABLES */

const userInput = document.getElementById("user-input");
const buttonCheck = document.getElementById("check-btn");
const buttonClear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");



/*FUNCIONES Y EVENTOS */

const checkInputValid = () =>{
    if(!userInput.value){
        alert("Please provide a phone number");
    }
}





buttonCheck.addEventListener("click", ()=>{
    checkInputValid();
    const regexValid = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    if(regexValid.test(userInput.value)){
        console.log("Valid US number:" + userInput.value);
    }else{
        console.log("Invalid US number:" + userInput.value)
    }
})