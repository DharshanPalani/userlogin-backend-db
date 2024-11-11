function validateUserInput(uname, upass) {
    if (uname.length <= 4) {
        console.log("Username must be longer than 4 characters.")
        return false
    }
    if (upass.length <= 5) {
        console.log("Password must be longer than 8 characters.")
        return false
    }
    return true
}

export default validateUserInput