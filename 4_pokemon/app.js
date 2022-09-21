import express from "express"
import path from "path"

//instantiate express, start a server
//we don't use require, because we use 'import'. Require was the traditional way to import
const app = express()

app.use(express.static("public")) //we allow client to access this folder

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage.html"))
})

//listen on a port
app.listen(8080, (error) => {
    console.log(error)
    console.log("Server is running on port", 8080)
})