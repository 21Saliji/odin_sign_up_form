document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('passW');
    const confirmPasswordInput = document.getElementById('passC');
    const errorElement = document.getElementById('error');

    function validatePassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password.length < 8) {
            errorElement.textContent = 'Password must be at least 8 characters long';
            return false;
        }

        if (password !== confirmPassword) {
            errorElement.textContent = 'Passwords do not match';
            return false;
        }

        errorElement.textContent = '';
        return true;
    }

    function validateForm(event) {
        if (!validatePassword()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    }

    // Validate password when form is submitted
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
});
