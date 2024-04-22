//**VARIABLES */

const userInput = document.getElementById("user-input");
const buttonCheck = document.getElementById("check-btn");
const buttonClear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");



/*FUNCIONES Y EVENTOS */

const checkInputValid = () =>{
    if(!userInput.value || isNaN(parseInt(userInput.value))){
        alert("Please provide a phone number");
        return;
    }
    
    buttonCheakValid(userInput.value);
    userInput.value="";
}

const buttonCheakValid = (input) =>{
    debugger
    const regexValid = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    if(regexValid.test(input)){
        // console.log("Entra en el if");
        result.classList.remove("hidden");
        result.innerHTML += `<p class="valid">Valid US number:<br> ${input}</p>`
        // console.log(!regexValid.test(userInput.value));
    }
    else{
        debugger
        result.classList.remove("hidden");
        result.innerHTML += `<p class="invalid">Invalid US number:<br> ${userInput.value}</p>`
    }
} 

//Validar
buttonCheck.addEventListener("click", ()=>{
    checkInputValid();
})


