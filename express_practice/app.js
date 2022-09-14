const app = require('express')()
const port = 8080

app.get("/", (req, res) => {
    res.send({message : "Welcome"})
})

app.listen(port, () => {
    console.log('Started server on port', port)
})