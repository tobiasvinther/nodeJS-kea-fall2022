//const express = require("express") //require imports things in node
import express from "express" //here it looks up in node_modules if there's a folder called express and then looks for index.js

const app = express()
const port = 8080

//const { incrementVisitorCounter } = require("./geocitiesUtil.js") //here we tell it to look at a specific file (don't look in node_modules)

app.use(express.static("public")) //make this folder to my public/static folder, I "serve" this folder

import path from "path" //package in node

import { incrementVisitorCounter } from "./geocitiesUtil.js"

app.get("/", (req, res) => {
    console.log("Visitors since the server started", incrementVisitorCounter())
    //res.sendFile(__dirname + "/public/frontpage/frontpage.html") //remember the slash, __dirname is commonjs, not in module syntax
    res.sendFile(path.resolve("/public/frontpage/frontpage.html"))
})

app.listen(port, () => {
    console.log("Started server on port", port)
})