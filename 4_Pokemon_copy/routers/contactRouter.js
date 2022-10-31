import { Router } from "express" //router is part of the express library
import { sendMail } from "../util/emailSender.js"

const router = Router()

router.post("/api/contact", (req, res) => {
    console.log(req.body)
    let sender = req.body.email
    let textBody = req.body.message
    let name = req.body.name
    sendMail(sender, textBody, name)
    .then(result => res.send(`<a href="${result}" target="_blank">Generated email</a><br><a href="/">Home</a>`))
    .catch(console.error) 
})

export default router