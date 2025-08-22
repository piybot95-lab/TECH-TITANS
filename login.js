// Get the password input field and the toggle button (eye icon)
const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("togglePassword");

// When user clicks the eye icon, toggle password visibility
togglePasswordBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";

  // Switch input type between password and text
  passwordInput.type = isHidden ? "text" : "password";

  // Change the icon based on visibility
  togglePasswordBtn.className = isHidden
    ? "ri-eye-fill toggle-password"    // Show open eye if password is visible
    : "ri-eye-off-fill toggle-password"; // Show closed eye if password is hidden
});