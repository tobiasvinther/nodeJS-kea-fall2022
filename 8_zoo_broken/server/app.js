import express from "express"
const app = express()

//import path from "path"
// res.sendFile()
//app.use(express.static(path.resolve("../client/dist"))) //vi server vores frontend gennem vores backend

app.use(express.json)

import cors from "cors"
app.use(cors()) //i dette tilfælde tillader vi cors for alle (usikkert)

import animalsRouter from "./routers/animalsRouter.js"
app.use(animalsRouter)

const PORT = 8080 || process.env.PORT
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})