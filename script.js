const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showError();
    }
});

form.addEventListener('submit', function (event) {
    if (!email.validity.valid) {
        showError();

        event.preventDefault();
    }
});


function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'please provide a valid email address';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'e-mail is not formated correctly';
    } 
    
    emailError.className = 'error active';
}