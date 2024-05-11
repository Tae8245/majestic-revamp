
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Function to handle login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            alert('Please fill out all fields.');
            return;
        }

        // Redirect to home page after successful login
        window.location.href = 'index.html';
    });

    // Function to handle social login (Google)
    const googleLogin = document.getElementById('googleLogin');
    googleLogin.addEventListener('click', function() {
        // Redirect to Google sign-in page
        window.location.href = 'https://accounts.google.com';
    });

    // Function to handle social login (Facebook)
    const facebookLogin = document.getElementById('facebookLogin');
    facebookLogin.addEventListener('click', function() {
        // Redirect to Facebook sign-in page
        window.location.href = 'https://facebook.com';
    });

    // Function to handle registration form submission (if needed)
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!fullName || !email || !password) {
                alert('Please fill out all fields.');
                return;
            }

            // Additional registration logic (e.g., AJAX request to register user)
            // Redirect to login page after successful registration
            window.location.href = 'log-in.html';
        });
    }
});




//registration form javascript
class RegistrationFormHandler {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (!this.form) {
            console.error(`Form with ID '${formId}' not found.`);
            return;
        }

        this.setupListeners();
    }

    setupListeners() {
        if (!this.form) return;

        this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
        const resetButton = this.form.querySelector('input[type="reset"]');
        if (resetButton) {
            resetButton.addEventListener('click', this.handleResetClick.bind(this));
        }
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const firstName = this.form.querySelector('#firstName').value;
        const lastName = this.form.querySelector('#lastName').value;

        // Perform form validation
        if (!firstName || !lastName) {
            this.showAlert('Please fill out all required fields.');
        } else {
            // Show a confirmation message (optional)
            this.showAlert('Your registration has been submitted successfully! Enjoy your stay! (≧∇≦)ﾉ ');

            // Redirect to index.html after successful submission
            window.location.href = 'index.html';
        }
    }

    handleResetClick(event) {
        event.preventDefault();

        const confirmReset = confirm('Are you sure you want to erase all fields?');
        if (confirmReset) {
            this.form.reset();
        }
    }

    showAlert(message) {
        alert(message);
    }
}

// Initialize the form handler when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const registrationFormHandler = new RegistrationFormHandler('registrationForm');
});

// registration form js ends here




