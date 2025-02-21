document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const usernameInput = document.getElementById("firstname");
    const emailInput = document.getElementById("email");
    const cardNumberInput = document.getElementById("card");
    const cardPinInput = document.getElementById("pin");
    form.addEventListener("submit", function (event) {
    // Initialize an array to store error messages
    const errors = [];
    // Validation for username (minimum length of 3 characters)
    if (usernameInput.value.length < 2) {
    errors.push("Username must be at least 2 characters long.");
    }
    // Validation for email (must be a valid email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
    errors.push("Please enter a valid email address.");
    }
    // Validation for password (minimum length of 6 characters)
    if (cardNumberInput.value.length < 16 || cardNumberInput.value.length > 16) {
    errors.push("Card number must be 16 characters long.");
    }
    // Validation for password match
    if (cardPinInput.value.length < 4) {
    errors.push("Pin number is incorrect.");
    }
    // If there are errors, prevent form submission and display them
    if (errors.length > 0) {
    event.preventDefault(); // Prevent form submission
    alert(errors.join("\n")); // Display error messages in an alert
    }
    });
});