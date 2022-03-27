function init() {
    var nameInput = document.getElementById('name');
    nameInput.oninvalid = checkName;
    nameInput.oninput = checkName;

    var surnameInput = document.getElementById('surname');
    surnameInput.oninvalid = checkSurname;
    surnameInput.oninput = checkSurname;

    var emailInput = document.getElementById('email');
    emailInput.oninvalid = checkEmail;
    emailInput.oninput = checkEmail;

    var telephoneInput = document.getElementById('telephone');
    telephoneInput.oninvalid = checkTelephone;
    telephoneInput.oninput = checkTelephone;

}

function checkName() {
    this.setCustomValidity("");
    if (this.validity.valueMissing) {
        this.setCustomValidity('Please enter your name.');
    } else if (this.validity.patternMismatch) {
        this.setCustomValidity('A name should contain only letters.');
    }
}

function checkSurname() {
    this.setCustomValidity("");
    if (this.validity.valueMissing) {
        this.setCustomValidity('Please enter your surname.');
    } else if (this.value.length < 3) {
        this.setCustomValidity('Please enter a longer surname (3+ letters).')
    } else if (this.validity.patternMismatch) {
        this.setCustomValidity('A surname should contain only letters.');
    }
}

function checkEmail() {
    this.setCustomValidity("");
    if (this.validity.valueMissing) {
        this.setCustomValidity('Please enter your email.');
    } else if (this.validity.patternMismatch) {
        this.setCustomValidity('The email should be in the name@domain format.');
    }
}

function checkTelephone() {
    this.setCustomValidity("");
    if (this.validity.valueMissing) {
        this.setCustomValidity("Please enter your telephone.");
    } else if (this.validity.patternMismatch) {
        this.setCustomValidity("A telephone number should only have numbers.")
    }
}

function onSubmitContact() {
    var nameInput = document.getElementById('name');
    var surnameInput = document.getElementById('surname');
    var emailInput = document.getElementById('email');

    confirm('Dear ' + nameInput.value + " " + surnameInput.value + `, thank you for your submission. 
    We will contact you on the email provided: `+ emailInput.value);
}

function onSubmitSubscribe() {
    var emailInput = document.getElementById('subs');
    confirm('You have successfully subscribed to our newsletter with: ' + emailInput.value);
}