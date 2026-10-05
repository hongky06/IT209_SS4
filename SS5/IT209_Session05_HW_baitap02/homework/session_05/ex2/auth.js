// Authentication module
function login(username, password) {
    return Boolean(username && password);
}

function logout() {
    return true;
}
