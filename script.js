document.addEventListener('DOMContentLoaded', () => {
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const switchToRegisterBtn = document.getElementById('switch-to-register');
    const switchToLoginBtn = document.getElementById('switch-to-login');

    if (switchToRegisterBtn) {
        switchToRegisterBtn.addEventListener('click', () => {
            loginFormContainer.classList.add('hidden');
            registerFormContainer.classList.remove('hidden');
        });
    }

    if (switchToLoginBtn) {
        switchToLoginBtn.addEventListener('click', () => {
            registerFormContainer.classList.add('hidden');
            loginFormContainer.classList.remove('hidden');
        });
    }

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const loginUsername = document.getElementById('login-username').value;
            // For a prototype, we'll store the username for the dashboard.
            localStorage.setItem('userName', loginUsername);
            localStorage.setItem('isNewUser', 'false');
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = "dashboard.html"; 
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const name = document.getElementById('register-name').value;
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const phone = document.getElementById('register-phone').value;
            const landmark = document.getElementById('register-landmark').value;

            // Store user info
            localStorage.setItem('user', JSON.stringify({ 
                name: name,
                username: username,
                email: email,
                phone: phone,
                landmark: landmark
            }));
            localStorage.setItem('isNewUser', 'true');
            localStorage.setItem('hasCompletedQuiz', 'false');
            localStorage.setItem('userName', name); // Use full name for dashboard welcome

            alert('Registration successful! Let\'s start with a quick quiz...');
            window.location.href = "quiz.html"; 
        });
    }
});