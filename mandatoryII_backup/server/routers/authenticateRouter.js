import { Router } from "express"
import { logInObject } from "../app.js"

const router = Router()

router.get("/api/authenticate", (req, res) => {

    console.log("Logged in:", logInObject.isLoggedIn)

    if(!logInObject.isLoggedIn) {
        console.log("You are NOT allowed")
        res.sendStatus(401)
    } else {
        console.log("You are allowed")
        res.sendStatus(200)
    }
})

export default router