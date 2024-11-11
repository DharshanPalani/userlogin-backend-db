import mysql from 'mysql2'
import dotenv from 'dotenv'
import registerUser from './modules/registerUser.js'
import loginUser from './modules/loginUser.js'

dotenv.config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

const username = "Tempes"
const password = "123456"

registerUser(connection, username, password)
// loginUser(connection, username, password)
