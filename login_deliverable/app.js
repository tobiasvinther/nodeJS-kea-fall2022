import express from "express"
import path from "path"

const app = express()
const port = 8080

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/index.html"))
})

app.get("/signup", (req, res) => {
    res.sendFile(path.resolve("public/signup.html"))
})

app.get("/signin", (req, res) => {
    res.sendFile(path.resolve("public/signin.html"))
})

app.get("/about-us", (req, res) => {
    res.sendFile(path.resolve("public/about-us.html"))
})

app.get("/forgot-password", (req, res) => {
    res.sendFile(path.resolve("public/forgot-password.html"))
})

app.get("/node-documentation", (req, res) => {
    res.sendFile(path.resolve("public/node-documentation.html"))
})

app.listen(port, (error) => {
    console.log("Error?", error)
    console.log("Server started on", port)
})