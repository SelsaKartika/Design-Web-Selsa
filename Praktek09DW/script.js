document.addEventListener("DOMContentLoaded", function () {
    // Generate Captcha Code
    function generateCaptcha() {
        const captcha = "MINJUkim2024";
        document.getElementById("captchaText").textContent = captcha;
        return captcha;
    }

    let captchaCode = generateCaptcha();

    const nameInput = document.getElementById("name");
    const nameCount = document.getElementById("nameCount");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const passwordMatch = document.getElementById("passwordMatch");
    const emailInput = document.getElementById("email");
    const captchaInput = document.getElementById("captcha");
    const form = document.getElementById("MembershipForm");

    // Update Name character count
    nameInput.addEventListener("input", function () {
        const length = nameInput.value.length;
        nameCount.textContent = `Characters: ${length}`;
    });

    // Check if password and confirm password match
    confirmPasswordInput.addEventListener("input", function () {
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordMatch.textContent = "Passwords do not match!";
            passwordMatch.style.color = "red";
        } else {
            passwordMatch.textContent = "Passwords match!";
            passwordMatch.style.color = "green";
        }
    });

    // Form submit handler
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const captchaValue = captchaInput.value.trim();

        // Validate Name
        if (!name) {
            alert("Name is required!");
            return;
        }

        // Validate Email (Simple Regex for email format)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Validate Password Strength
        if (password.length < 8) {
            alert("Password must be at least 8 characters long!");
            return;
        }

        // Validate Password Match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Validate CAPTCHA
        if (captchaValue !== captchaCode) {
            alert("Captcha is incorrect!");
            captchaCode = generateCaptcha();  // Regenerate CAPTCHA after incorrect input
            return;
        }

        alert("Membership submitted successfully!");
        form.reset(); // Reset form after successful submission
        nameCount.textContent = "Characters: 0"; // Reset name character count
        passwordMatch.textContent = ""; // Reset password match message
    });
});
