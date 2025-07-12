document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let errorMessage = '';

    if (!name) {
        errorMessage = 'Name is required!';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errorMessage = 'Email is required!';
    } else if (!emailRegex.test(email)) {
        errorMessage = 'Invalid email format!';
    }

    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*\d).{14,}$/;
    if (!password) {
        errorMessage = 'Password is required!';
    } else if (!passwordRegex.test(password)) {
        errorMessage = 'Password must be at least 14 characters long and include at least one letter, one number, and one unique character!';
    }

    if (errorMessage) {
        alert(errorMessage);
        return;
    }

    alert('Booking Successful!');
});
