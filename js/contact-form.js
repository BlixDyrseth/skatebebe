const form = document.querySelector("#contactform");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const fromValidated = document.querySelector("#validateForm");
const formButton = document.querySelector("#formButton");



function checkIfButtonIsDisabled() {

    if(checkLenght(fullName.value, 5) && checkLenght(subject.value, 15) && checkLenght(message.value, 25) && validateEmail(email.value)) {
        formButton.disabled = false;
    } else {
        fromValidated.innerHTML = "";
        formButton.disabled = true;
    }
           
}

fullName.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);
message.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);

function submitForm(event) {
    event.preventDefault();
    fromValidated.innerHTML += `<div class="validated">Message sendt!</div>`;
    form.reset();
}

form.addEventListener("submit", submitForm);


function checkLenght(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


