import checkUsernameExists from './checkUser.js'
import validateUserInput from './validateInput.js'
import hashPassword from './hashPassword.js'
import storeUserInDatabase from './storeUser.js'

function registerUser(connection, uname, upass) {
    checkUsernameExists(connection, uname).then(exists => {
        if (exists) {
            console.log("Username already exists. Please choose a different username.")
            connection.end()
            return
        }

        if (!validateUserInput(uname, upass)) {
            connection.end()
            return
        }

        const hashedPassword = hashPassword(upass)
        storeUserInDatabase(connection, uname, hashedPassword).then(message => {
            console.log(message)
            connection.end()
        }).catch(err => {
            console.error("Error storing user:", err)
            connection.end()
        })
    }).catch(err => {
        console.error("Error checking username existence:", err)
        connection.end()
    })
}

export default registerUser