import bcrypt from "bcrypt"

const saltRounds = 12 //jo højere tal, des længere tager det funktionen at hashe (positivt)
const plaintextPassword = "hunter12"
const loginPassword = "hunter12"
const encryptedPassword = "$2b$12$5gZYWjILochayp3DLRj8l.LvWgAuQBziKqBmPgjzi07RX0bK0DIQK"

//dette ville være sign up
const encryptedPasswordResult = await bcrypt.hash(plaintextPassword, saltRounds)
//console.log(encryptedPasswordResult)

//dette ville være log in
const passwordComparison = await bcrypt.compare(loginPassword, encryptedPassword)
console.log(passwordComparison)