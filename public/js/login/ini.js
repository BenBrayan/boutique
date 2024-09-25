document.getElementById('showRegisterForm').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('showLoginForm').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('showForgotPasswordForm').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'block';
});

document.getElementById('showLoginFormFromForgot').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

//mostrar/ocultar logo
document.querySelectorAll('.toggle-password').forEach(item => {
    item.addEventListener('click', function () {
        // Encuentra el input relacionado con este toggle
        var passwordInput = this.parentElement.querySelector('input');
        var toggleIcon = this.querySelector('i');

        // Alterna el tipo de input entre 'password' y 'text'
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye-slash');  
            toggleIcon.classList.add('fa-eye');           
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye');        
            toggleIcon.classList.add('fa-eye-slash');     
         }
    });
});

//Validaciones Formularios

    document.addEventListener("DOMContentLoaded", function () {
        // Definir expresiones regulares
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const phoneRegex = /^\d{10}$/; // Para celular colombiano
        const maxEmailLength = 40;
        const maxNameLength = 20;
        const maxAddressLength = 20;

        // Función para mostrar mensajes de error
        function showError(input, message) {
            const errorElement = document.createElement("div");
            errorElement.classList.add("error-message");
            errorElement.style.color = "red";
            errorElement.textContent = message;
            input.parentNode.appendChild(errorElement);
        }

        // Función para limpiar errores
        function clearErrors(form) {
            const errors = form.querySelectorAll(".error-message");
            errors.forEach(error => error.remove());
        }

        // Validar formulario
        function validateForm(form) {
            clearErrors(form);
            let isValid = true;

//Validar Registro 
            // Validar email
            const emailInput = form.querySelector("input[name='correo']");
            if (emailInput) {
                if (emailInput.value.length > maxEmailLength || !emailRegex.test(emailInput.value)) {
                    showError(emailInput, "Correo inválido.");
                    isValid = false;
                }
            }

            // Validar contraseña
            const passwordInput = form.querySelector("input[name='contrasena'], input[name='nueva_contrasena']");
            if (passwordInput && !passwordRegex.test(passwordInput.value)) {
                showError(passwordInput, "Contraseña inválida. Debe tener minimo 8 caracteres, una mayúscula, una minúscula y un número.");
                isValid = false;
            }

            // Validar nombres y apellidos 
            const nameInput = form.querySelector("input[name='nombres']");
            const lastNameInput = form.querySelector("input[name='apellidos']");
            if (nameInput && nameInput.value.length > maxNameLength) {
                showError(nameInput, `Nombres inválidos.`);
                isValid = false;
            }
            if (lastNameInput && lastNameInput.value.length > maxNameLength) {
                showError(lastNameInput, `Apellido inválidos`);
                isValid = false;
            }

            // Validar dirección (solo en el formulario de registro)
            const addressInput = form.querySelector("input[name='direccion']");
            if (addressInput && addressInput.value.length > maxAddressLength) {
                showError(addressInput, `La dirección no debe exceder ${maxAddressLength} caracteres.`);
                isValid = false;
            }

            // Validar celular (solo en el formulario de registro)
            const phoneInput = form.querySelector("input[name='celular']");
            if (phoneInput && !phoneRegex.test(phoneInput.value)) {
                showError(phoneInput, "El número de celular debe tener 10 dígitos.");
                isValid = false;
            }

            // Validar repetición de contraseña (solo en olvidó contraseña)
            const repeatPasswordInput = form.querySelector("input[name='repita_contrasena']");
            if (repeatPasswordInput && repeatPasswordInput.value !== passwordInput.value) {
                showError(repeatPasswordInput, "Las contraseñas no coinciden.");
                isValid = false;
            }

            return isValid;
        }

        // Manejar envíos de formularios
        const forms = document.querySelectorAll("form");
        forms.forEach(form => {
            form.addEventListener("submit", function (event) {
                if (!validateForm(form)) {
                    event.preventDefault();
                }
            });
        });
    });
