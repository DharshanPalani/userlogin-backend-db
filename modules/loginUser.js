import checkUsernameExists from './checkUser.js'
import verifyPassword from './verifyPassword.js'

function loginUser(connection, uname, upass) {
    checkUsernameExists(connection, uname).then(exists => {
        if (!exists) {
            console.log("Username does not exist.")
            connection.end()
            return
        }

        verifyPassword(connection, uname, upass).then(isPasswordCorrect => {
            if (isPasswordCorrect) {
                console.log("Login successful")
            } else {
                console.log("Incorrect password")
            }
            connection.end()
        }).catch(err => {
            console.error("Error verifying password:", err)
            connection.end()
        })
    }).catch(err => {
        console.error("Error checking username existence:", err)
        connection.end()
    })
}

export default loginUser
