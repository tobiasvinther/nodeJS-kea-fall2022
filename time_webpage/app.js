import express from "express";
//import {getDate} from "./public/timeUtils.js"
const app = express();

app.use(express.static("public"));

import path from "path";


app.get("/", (req, res) => {
    //getDate()
    res.sendFile(path.resolve("public/index.html"))
    
    //note: it seems that I don't need to specify a path when frontpage html is named index
})

app.get("/pokemon", (req, res) => {
    res.send({ data: ["Slowpoke"] });
});


const port = 8080
app.listen(port, (error) => {
    console.log("Error:", error)
    console.log("Server started on port", port)
})