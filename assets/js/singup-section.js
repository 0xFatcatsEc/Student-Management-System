// Password toggle
const passwordInput = document.querySelector(".password-icon-div input");
const passwordIcon = document.querySelector(".password-icon i");

    passwordIcon.addEventListener("click", () => {
    const isPassword = passwordInput.getAttribute("type") === "password";
    passwordInput.setAttribute("type", isPassword ? "text" : "password");

    // toggle icon class
    passwordIcon.classList.toggle("fa-eye");
    passwordIcon.classList.toggle("fa-eye-slash");
});

    // Confirm Password toggle
    const confirmPasswordInput = document.querySelector(".confirm-password-icon-div input");
    const confirmPasswordIcon = document.querySelector(".confirm-password-icon i");

    confirmPasswordIcon.addEventListener("click", () => {
    const isPassword = confirmPasswordInput.getAttribute("type") === "password";
    confirmPasswordInput.setAttribute("type", isPassword ? "text" : "password");

    // toggle icon class
    confirmPasswordIcon.classList.toggle("fa-eye");
    confirmPasswordIcon.classList.toggle("fa-eye-slash");
});
