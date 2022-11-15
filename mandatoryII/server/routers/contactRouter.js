import { Router } from "express"
import { sendMail } from "../services/emailSender.js"

const router = Router()

router.post("/api/contact", (req, res) => {
    console.log(req.body)
    let sender = "auto@email.com"
    let textBody = req.body.text
    let name = req.body.name
    sendMail(sender, textBody, name)
    .then(result => res.send(`<a href="${result}" target="_blank">Generated email</a><br><a href="/">Home</a>`))
    .catch(console.error) 
})

export default router