// Get the email input field and the error span
const emailInput = document.getElementById("email");
const errorSpan = document.querySelector(".error");

// Function to hide the error message when the user starts typing
function hideErrorMessage() {
  errorSpan.style.display = "none";
}

// Listen for input events on the email input field to hide the error message
emailInput.addEventListener("input", hideErrorMessage);
