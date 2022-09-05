const app = require("express")() //import af express

//define which port to listen to, starts the server
app.listen(8080, () => {
    console.log("Server is running on port", 8080)
}) 

//route to an endpoint
app.get("/", (req, res) => {
    res.send({ message: "Welcome, my friend" })
})