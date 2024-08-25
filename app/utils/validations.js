export function validateUsername({ e, error }) {
    const regex = /^[a-zA-Z][a-zA-Z0-9]*$/;

    if (!e) {
        error("Username cannot be empty");
        return false;
    } else if (e.length < 4) {
        error("Username must be at least 4 characters long");
        return false;
    } else if (e.length > 20) {
        error("Username cannot be more than 20 characters long");
        return false;
    } else if (!regex.test(e)) {
        error("Username must start with a letter and contain only letters and numbers");
        return false;
    } else if (!/[a-zA-Z]/.test(e)) {
        error("Username must contain at least one letter");
        return false;
    } else {
        error(""); // Clear the error message if validation passes
        return true;
    }
}


export function validateEmail({ e, error }) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!e) {
        error("Email cannot be empty");
        return false;
    } else if (!emailRegex.test(e)) {
        error("Please enter a valid email address");
        return false;
    } else {
        error(""); // Clear the error message if validation passes
        return true;
    }
}

export function validatePassword({ e, error }) {
    const minLength = 8;
    const hasNumber = /[0-9]/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!e) {
        error("Password cannot be empty");
        return false;
    } else if (e.length < minLength) {
        error(`Password must be at least ${minLength} characters long`);
        return false;
    } else if (!hasNumber.test(e)) {
        error("Password must contain at least one number");
        return false;
    } else if (!hasUpperCase.test(e)) {
        error("Password must contain at least one uppercase letter");
        return false;
    } else if (!hasLowerCase.test(e)) {
        error("Password must contain at least one lowercase letter");
        return false;
    } else if (!hasSpecialChar.test(e)) {
        error("Password must contain at least one special character");
        return false;
    } else {
        error(""); // Clear the error message if validation passes
        return true;
    }
}

export function validateConfirmPassword({ password, confirmPassword, error }) {
    if (!confirmPassword) {
        error("Confirm password cannot be empty");
        return false;
    } else if (confirmPassword !== password) {
        error("Passwords do not match");
        return false;
    } else {
        error(""); // Clear the error message if validation passes
        return true;
    }
}

export function validateOTP({ e, error }) {
    const otpRegex = /^[0-9]{6}$/; // Assuming OTP is a 6-digit numeric code

    if (!e) {
        error("OTP cannot be empty");
        return false;
    } else if (!otpRegex.test(e)) {
        error("Please enter a valid 6-digit OTP");
        return false;
    } else {
        error(""); // Clear the error message if validation passes
        return true;
    }
}
