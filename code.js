function showError(id, message) {
    errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.visibility = 'visible';
}

function hideError(id) {
    errorElement = document.getElementById(id);
    errorElement.style.visibility = 'hidden';
}

function isEmailValid(anEmail) {
    res = true;
    if (anEmail === null || anEmail.length === 0) {
        res = false;
        showError('emailError', "El correo electrónico no puede estar vacío");
    } else {
        hideError('emailError');
    }
    return res;
}

function isMessageValid(aMessage) {
    res = true;
    if (aMessage === null || aMessage.length == 0 || /^\s+$/.test(aMessage)) {
        res = false;
        showError('messageError', "El mensaje no puede estar vacío");
    } else {
        hideError('messageError');
    }
    return res;
}

function isUsernameValid(anUsername) {
    res = true;
    if (anUsername === null || anUsername.length == 0 || /^\s+$/.test(anUsername)) {
        res = false;
        showError('usernameError', "El nombre de usuario no puede estar vacío");
    } else {
        hideError('usernameError');
    }
    return res;
}


function validacion() {
    username = document.getElementById('username').value;
    message = document.getElementById('message').value;
    email = document.getElementById('email').value;

    isValid = true;

    if (!isUsernameValid(username)) {
        isValid = false;
    }

    if (!isEmailValid(email)){
        isValid = false;
    }

    if (!isMessageValid(message)){
        isValid = false;
    }
    
    if (isValid){
        alert("¡Mensaje enviado con éxito!");
    }

    return isValid;
}

document.getElementById('contrastToggle').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});