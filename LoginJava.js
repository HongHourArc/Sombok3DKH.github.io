const pwShowHide = document.querySelectorAll(".eye-icon");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const signupLink = document.querySelector(".link-signup");
const loginLink = document.querySelector(".link-login");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const passwordField = eyeIcon.previousElementSibling; // Assuming the input field is just before the eye icon
    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.classList.replace("bx-hide", "bx-show");
    } else {
      passwordField.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    }
  });
});

signupLink.addEventListener("click", (e) => {
  e.preventDefault(); // Preventing default link behavior
  loginForm.classList.toggle("show");
  signupForm.classList.toggle("hide");
});

loginLink.addEventListener("click", (e) => {
  e.preventDefault(); // Preventing default link behavior
  loginForm.classList.toggle("show");
  signupForm.classList.toggle("hide");
});
