import bcrypt from "bcrypt"

const saltRounds = 10 //jo højere tal, des længere tager det funktionen at hashe (positivt)
const plaintextPassword = "Test123"
const loginPassword = "Test123"
const encryptedPassword = "$2a$12$ODUC7CjdP/.chKU.NcCP3uIwO/lErx.FMuDnfXL/U9mXiwr0oiBiC"

//dette ville være sign up
const encryptedPasswordResult = await bcrypt.hash(plaintextPassword, saltRounds)
//console.log(encryptedPasswordResult)

//dette ville være log in
const passwordComparison = await bcrypt.compare(loginPassword, encryptedPassword)
console.log(passwordComparison)