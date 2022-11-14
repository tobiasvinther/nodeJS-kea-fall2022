import { Router } from "express";
const router = Router();
import db from "../database/connection_sqlite.js";

import bcrypt from "bcrypt"

//GET - get all users - disable this eventually
router.get("/api/users", async (req, res) => {
    const data = await db.all("SELECT * FROM users;");
    res.send({ data });
});

//POST - sign up new user
router.post("/api/users", async (req, res) => {
    const username = req.body.username;
    const password= req.body.password;
    if (!username) return res.status(400).send({ message: "Username name not defined" });
    if (!password) return res.status(400).send({ message: "Password name not defined" });

    const result = await db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password]);

    res.send({ changes: result.changes });
});

//POST - signin
router.post("/api/signin", async (req, res) => {
    const receivedEmail = req.body.email;
    const receivedPassword = req.body.password;
    console.log(receivedEmail)
    console.log(receivedPassword)

    if(!receivedEmail || !receivedPassword || receivedEmail === "" || receivedPassword === "") {
        res.sendStatus(401)
    }

    const result = await db.get(`SELECT * FROM users WHERE email = ?`, receivedEmail)
    console.log(result)

    const encryptedPassword = result.password
    const passwordComparison = await bcrypt.compare(receivedPassword, encryptedPassword)
    console.log(passwordComparison)

    if(passwordComparison) {
        res.sendStatus(200)
    }
    
    //res.sendStatus(401)
    
    
});

export default router;