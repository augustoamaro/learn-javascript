function isValidPassword(password, username) {
    if (password < 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        false
    }
    return true;
}

// Alternativa

function isValidPassword(password, username) {
    if (
        password < 8 ||
        password.indexOf(' ') !== -1 ||
        password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

// Alternativa 2

function isValidPassword(password, username) {
    const tooShort = password < 8
    const hasSpace = password.indexOf(' ') !== -1
    const tooSimilar = password.indexOf(username) !== -1
    if (tooShort || hasSpace || tooSimilar) return false;
    return true;
}