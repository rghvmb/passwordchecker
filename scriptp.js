function checkPassword() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    let strength = 0;
    if (password.length < 8 && password.length!=0) {
        message.textContent = 'Password must be at least 8 characters long.';
        message.className = 'length-warning';
        return;
    }
    if (password.length >= 8) {
        strength += 1;
    }
    if (password.match(/[A-Z]/)) {
        strength += 1;
    }
    if (password.match(/[0-9]/)) {
        strength += 1;
    }
    if (password.match(/[^a-zA-Z0-9]/)) {
        strength += 1;
    }

    if (strength === 0) {
        message.textContent = '';
        message.className = '';
    } else if (strength === 1) {
        message.textContent = 'Weak';
        message.className = 'weak';
    } else if (strength === 2) {
        message.textContent = 'Medium';
        message.className = 'medium';
    } else if (strength >= 3) {
        message.textContent = 'Strong';
        message.className = 'strong';
    }
}
