import { Router } from "express"
const router = Router()

import db from "../database/connection_sqlite.js"
import bcrypt from "bcrypt"

//GET - log out
router.get('/api/logout', (req, res) => { 
    req.session.loggedIn = false
    req.session.destroy()
    res.sendStatus(200)
})

//POST - sign up new user (not finished and implemented on frontend)
router.post("/api/users", async (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password= req.body.password
    if (!username) return res.status(400).send({ message: "Username not defined" })
    if (!email) return res.status(400).send({ message: "Email not defined" })
    if (!password) return res.status(400).send({ message: "Password not defined" })

    const result = await db.run(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, [username, email, password])

    res.send({ changes: result.changes })
})

//POST - log in
router.post("/api/login", async (req, res) => {
    const receivedEmail = req.body.email
    const receivedPassword = req.body.password

    if(!receivedEmail || !receivedPassword || receivedEmail === "" || receivedPassword === "") {
        res.sendStatus(404)
    }
    try {
        const result = await db.get(`SELECT * FROM users WHERE email = ?`, receivedEmail)

        if(result === undefined) {
            res.sendStatus(401)
        } else {
            const encryptedPassword = result.password
            const passwordComparison = await bcrypt.compare(receivedPassword, encryptedPassword)
            console.log("Password matches:", passwordComparison)

            if(passwordComparison === true) {
                req.session.isLoggedIn = true
                res.sendStatus(200)
            } else {
                res.sendStatus(401).send("Passwords didn't match")
            }

        }
        console.log("Signin route session id", req.session.id)

    } catch {
        console.error()
    }

})

export default router