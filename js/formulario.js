document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registroForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    // Expresión regular para validar la contraseña
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        let isValid = true;

        // Validar correo electrónico
        if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }

        // Validar contraseña
        if (!passwordRegex.test(passwordInput.value)) {
            passwordInput.classList.add('is-invalid');
            isValid = false;
        } else {
            passwordInput.classList.remove('is-invalid');
            passwordInput.classList.add('is-valid');
        }

        if (isValid) {
            alert('Registro completado con éxito. Gracias por registrarte.');
            form.reset();
            form.classList.remove('was-validated');
        } else {
            form.classList.add('was-validated');
        }
    }, false);
});
