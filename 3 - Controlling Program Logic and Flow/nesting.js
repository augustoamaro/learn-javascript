let password = 'dragonball'

if (password.length >= 6) {
    if(password.indexOf(' ') === -1) {
    console.log('Valid Password!')
    } else {
        console.log('Password is long enough, but cannot contain spaces')
    }
}
else {
    console.log("Password must be at least 6 characters")
}