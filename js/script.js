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

//Validar
buttonCheck.addEventListener("click", ()=>{
    checkInputValid();
    const regexValid = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    if(!regexValid.test(userInput.value)){
        debugger
        console.log("Entra en el if");
        result.classList.toggle("hidden");
         result.innerHTML += `<p>Valid US number: ${userInput.value}</p>`
    }else{
        result.classList.toggle("hidden");
        result.innerHTML += `<p>Invalid US number:" ${userInput.value}</p>`
        
        console.log("Entra en el else");
    }
    userInput.value="";
})


