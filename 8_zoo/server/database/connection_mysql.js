import mysql from "mysql2/promise"

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "UderzoTheKing1!",
    database: "zoo",
})

export default connection