document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registroForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const telefonoInput = document.getElementById('telefono');

    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    const telefonoRegex = /^\d{10}$/;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        let isValid = true;

        if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }

        if (!passwordRegex.test(passwordInput.value)) {
            passwordInput.classList.add('is-invalid');
            isValid = false;
        } else {
            passwordInput.classList.remove('is-invalid');
            passwordInput.classList.add('is-valid');
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.classList.add('is-invalid');
            isValid = false;
        } else {
            confirmPasswordInput.classList.remove('is-invalid');
            confirmPasswordInput.classList.add('is-valid');
        }

        if (!telefonoRegex.test(telefonoInput.value)) {
            telefonoInput.classList.add('is-invalid');
            isValid = false;
        } else {
            telefonoInput.classList.remove('is-invalid');
            telefonoInput.classList.add('is-valid');
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
