import bcrypt from 'bcrypt'

function verifyPassword(connection, uname, upass) {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM LOGINDETAILS WHERE username = ?", [uname], (err, result) => {
            if (err) return reject("Error retrieving data:", err);

            const hashedPassword = result[0].password;
            resolve(bcrypt.compareSync(upass, hashedPassword));
        });
    });
}

export default verifyPassword;
