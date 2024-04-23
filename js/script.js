//**VARIABLES */

const userInput = document.getElementById("user-input");
const buttonCheck = document.getElementById("check-btn");
const buttonClear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

/*FUNCIONES Y EVENTOS */

const checkInputValid = () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
    return;
  }

  buttonCheakValid(userInput.value);
  userInput.value = "";
};

const clearButton = () => {
  result.innerHTML = "";
};

const buttonCheakValid = (input) => {
  const regexValid = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
  if (regexValid.test(input)) {
    result.classList.remove("hidden");
    result.innerHTML += `<p class="valid">Valid US number:<br> ${input}</p>`;
  } else {
    result.classList.remove("hidden");
    result.innerHTML += `<p class="invalid">Invalid US number:<br> ${userInput.value}</p>`;
  }
};

//Botton Validar
buttonCheck.addEventListener("click", () => {
  checkInputValid();
});

//Boton borrar
buttonClear.addEventListener("click", () => {
  clearButton();
});
