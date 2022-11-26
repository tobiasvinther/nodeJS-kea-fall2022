import { Router } from "express"
import { sendMail } from "../services/emailSender.js"

const router = Router()

router.post("/api/contact", async (req, res) => {
    console.log(req.body)
    console.log("Logged in", req.session.loggedIn)
    let sender = "auto@email.com"
    let textBody = req.body.text
    let name = req.body.name
    sendMail(sender, textBody, name)
        .then(result => {
            console.log("RESULT", result)
            res.send({Link: result})
        })
        .catch(console.error) 
})

export default router