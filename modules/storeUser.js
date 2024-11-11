const LOGINDETAILS_query = "INSERT INTO LOGINDETAILS (username, password) VALUES (?, ?)"

function storeUserInDatabase(pool, uname, hashedPassword) {
    return new Promise((resolve, reject) => {
        pool.query(LOGINDETAILS_query, [uname, hashedPassword], (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve("User successfully registered.")
        })
    })
}

export default storeUserInDatabase
