// import pkg from 'pg'
// import mysql from 'mysql2'
// const { Pool } = pkg

const LOGINDETAILS_checkUser = "SELECT * FROM LOGINDETAILS WHERE username = ?"

function checkUsernameExists(pool, uname) {
    return new Promise((resolve, reject) => {
        pool.query(LOGINDETAILS_checkUser, [uname], (err, result) => {
            if (err) {
                reject(err)
                return
            }
            if (result.length > 0) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })
}

export default checkUsernameExists
