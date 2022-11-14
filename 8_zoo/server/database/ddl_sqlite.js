import db from "./connection_sqlite.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
    db.exec(`
        DROP TABLE IF EXISTS users;
    `);
}

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(255),
    email VARCHAR (255),
    password VARCHAR(255)
);
`);

// seed the database
if (isInDeleteMode) {
    db.run(`INSERT INTO users (username, email, password) VALUES ("testUser1", "test1@mail.com", "$2a$12$ODUC7CjdP/.chKU.NcCP3uIwO/lErx.FMuDnfXL/U9mXiwr0oiBiC");`);
}

