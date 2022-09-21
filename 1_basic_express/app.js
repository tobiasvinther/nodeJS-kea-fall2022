const express = require("express") //import express
const app = express() //instantiation of the library express

app.use(express.json())

//route to an endpoint
app.get("/", (request, response) => {
    response.send({message: "Created my first route"})
})

//req = request, res = response
//route //endpoint //callback function
app.get("/deers", (req, res) => {
    res.send({ size: "BIG" })
})

//husk at dette er en callback funktion
//path variable
app.get("/deers/:id", (req, res) => {
    //req.params er et json-objekt
    if(Number(req.params.id) === 1) {
        res.send({ name: "Bambi", OGdeer: true})
    } else {
        res.send({ errorMessage: "I don't know that deer" })
    }
    res.send({ })
})

//flere parametre på én gang
app.get("/deers/:id/:name", (req, res) => {
    console.log(req.params)
})

app.get("/cups", (req, res) => {
    res.send({ size: "varies" })
})

//query string
app.get("/actors", (req, res) => {
    console.log(req.query.name)
    res.send({
        message: "Information about the actor",
        ...req.query
    })
})

app.post("/actors", (req, res) => {
    res.send({data: req.body})
})

//define which port to listen to, starts the server
app.listen(8080, () => {
    console.log("Server is running on port", 8080)
}) 