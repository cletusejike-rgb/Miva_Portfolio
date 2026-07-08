document.getElementById('custom-contact-form').addEventListener('submit', function(event) {
    // Prevent default browser form submission reloading behavior
    event.preventDefault();

    // Select input values
    const nameVal = document.getElementById('user-name').value.trim();
    const emailVal = document.getElementById('user-email').value.trim();
    const phoneVal = document.getElementById('user-phone').value.trim();
    const messageVal = document.getElementById('user-message').value.trim();

    // Select error elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const messageError = document.getElementById('message-error');
    const successMsg = document.getElementById('form-success-msg');

    // Reset error message messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    let isFormValid = true;

    // 1. Check for empty fields
    if (nameVal === "") {
        nameError.textContent = "Name field cannot be left blank.";
        isFormValid = false;
    }

    // 2. Email format validation via regular expressions
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailVal === "") {
        emailError.textContent = "Email address cannot be left blank.";
        isFormValid = false;
    } else if (!emailPattern.test(emailVal)) {
        emailError.textContent = "Please enter a valid email format (e.g., name@domain.com).";
        isFormValid = false;
    }

    // 3. Phone digits verification check
    const phonePattern = /^[0-9]+$/;
    if (phoneVal === "") {
        phoneError.textContent = "Phone number field cannot be left blank.";
        isFormValid = false;
    } else if (!phonePattern.test(phoneVal)) {
        phoneError.textContent = "Phone number must contain numeric digits only.";
        isFormValid = false;
    }

    // 4. Message field empty check
    if (messageVal === "") {
        messageError.textContent = "Message field cannot be left blank.";
        isFormValid = false;
    }

    // Final evaluation deployment trigger
    if (isFormValid) {
        successMsg.style.color = "#234e52";
        successMsg.style.backgroundColor = "#e6fffa";
        successMsg.style.padding = "10px";
        successMsg.style.marginTop = "15px";
        successMsg.style.borderRadius = "4px";
        successMsg.style.fontWeight = "bold";
        successMsg.textContent = "Success! Your submission was validated cleanly with zero mistakes.";
        
        // Optional: clear form values out on success
        document.getElementById('custom-contact-form').reset();
    }
});