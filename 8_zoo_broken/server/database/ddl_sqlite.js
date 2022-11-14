import db from "./connection_sqlite.js"

const isInDeleteMpde = false //true = genopret ny database

if(isInDeleteMpde) {
    db.exec(
        `
        DROP TABLE IF EXISTS animals;
        `
    )
}

db.exec(
`CREATE TABLE IF NOT EXISTS animals (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
   	common_name VARCHAR(255) NOT NULL,
   	latin_name VARCHAR(255) NOT NULL
);
`)

//seed the database
if(isInDeleteMpde) {
    db.run(`INSERT INTO animals (common_name, latin_name)
    VALUES ("tiger", "panthera tigris")`) 
    db.run(`INSERT INTO animals (common_name, latin_name)
    VALUES ("panda", "ailropoda melanoleuca")`) 
}


