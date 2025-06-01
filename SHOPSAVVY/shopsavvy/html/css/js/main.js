document.addEventListener('DOMContentLoaded', function() {
    // Show registration form when button is clicked
    const registerBtn = document.getElementById('register-btn');
    const registrationForm = document.getElementById('registration');
    
    registerBtn.addEventListener('click', function() {
        registrationForm.style.display = 'block';
        registerBtn.style.display = 'none';
        window.scrollTo({
            top: registrationForm.offsetTop - 20,
            behavior: 'smooth'
        });
    });
    
    // Handle form submission
    const userForm = document.getElementById('user-form');
    
    userForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const age = document.getElementById('age').value;
        const language = document.getElementById('language').value;
        
        // Store user data in localStorage
        localStorage.setItem('userName', name);
        localStorage.setItem('userDOB', dob);
        localStorage.setItem('userAge', age);
        localStorage.setItem('userLanguage', language);
        
        // Show success message
        alert(`Thank you, ${name}! Your preferences have been saved.`);
        registrationForm.style.display = 'none';
    });
    
    // Check if user data exists and update UI
    if(localStorage.getItem('userName')) {
        registerBtn.textContent = 'Welcome Back!';
    }
});