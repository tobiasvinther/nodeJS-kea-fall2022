import { Router } from "express";
const router = Router();

import db from "../database/connection_sqlite.js";

import bcrypt from "bcrypt"

import { logInObject } from "../app.js"

/*
//GET - get all users - disable this eventually
router.get("/api/users", async (req, res) => {
    const data = await db.all("SELECT * FROM users;");
    res.send({ data });
});
*/

router.get('/api/logout', (req, res) => {
    req.session.loggedIn = false
    console.log(req.session)
    req.session.destroy();
    console.log(req.session)
    logInObject.isLoggedIn = false
    res.sendStatus(200)
});

//POST - sign up new user
router.post("/api/users", async (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password= req.body.password
    if (!username) return res.status(400).send({ message: "Username not defined" })
    if (!email) return res.status(400).send({ message: "Email not defined" })
    if (!password) return res.status(400).send({ message: "Password not defined" })

    const result = await db.run(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, [username, email, password])

    res.send({ changes: result.changes });
});

//POST - signin
router.post("/api/signin", async (req, res) => {
    const receivedEmail = req.body.email;
    const receivedPassword = req.body.password;
    console.log("Recieved email:", receivedEmail)
    console.log("Recieved password:", receivedPassword)

    if(!receivedEmail || !receivedPassword || receivedEmail === "" || receivedPassword === "") {
        res.sendStatus(401)
    }
    try {
        const result = await db.get(`SELECT * FROM users WHERE email = ?`, receivedEmail)
        console.log("Query:", result)

        if(result === undefined) {
            res.sendStatus(401)
            console.log("result was undefined")
        } else {
            const encryptedPassword = result.password
            const passwordComparison = await bcrypt.compare(receivedPassword, encryptedPassword)
            console.log("Password matches:", passwordComparison)

            if(passwordComparison === true) {
                //console.log("Passwords match")
                req.session.loggedIn = true
                logInObject.isLoggedIn = true
                console.log(logInObject)
                //req.session.save()
                console.log("Session:", req.session)
                res.sendStatus(200)
            } else {
                res.sendStatus(401).send("Passwords didn't match")
            }

        }

        //res.sendStatus(401)
    } catch {
        console.error();
    }

});

export default router;