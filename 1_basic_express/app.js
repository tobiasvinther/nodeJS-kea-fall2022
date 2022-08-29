const express = require("express") //import express
const app = express() //instantiation of express

//an endpoint
app.get("/", (request, response) => {
    response.send({message: "Created my first route"})
})

app.listen(8080) //define which port to listen to