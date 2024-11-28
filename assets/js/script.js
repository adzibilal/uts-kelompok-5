document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simple validation for demonstration purposes
            if (email === 'example@gmail.com' && password === 'password') {
                alert('Login successful!');
                // Redirect to home page
                window.location.href = 'home.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                return;
            }

            // Simple registration logic for demonstration purposes
            alert('Registration successful!');
            // Redirect to login page or perform other actions
            window.location.href = 'login.html';
        });
    }
});
