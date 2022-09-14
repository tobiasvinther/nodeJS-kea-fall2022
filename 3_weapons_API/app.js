import express from "express"
import { incrementId } from "./utils.js"

const app = express()
const port = 8080

app.use(express.json())

//the "database"
let weapons = [
    {
        id: 1,
        name: "Sword",
        type: "Edged"
    },
    {
        id : 2,
        name : "Longbow",
        type : "Projectile"
    },
    {
        id : 3,
        name : "Fists of Fury",
        type : "Blunt"
    }
]

//front page
app.get("/", (req, res)  => {
    res.send( "<h1>Welcome... to the Weapons Emporium!</h1>" )
})

//GET - get all weapons
app.get("/weapons", (req, res) => {
    res.send({data: weapons})
})

//GET - get weapon by id
app.get("/weapons/:id", (req, res)  => {
    const weapon =  weapons.find(w => w.id === parseInt(req.params.id)) //note: weapon is a reference to the object we find, not a copy. 

    if(!weapon) {
        return res.status(404).send('No weapon with this id exists')
    } else {
        res.send({data: weapon}) 
    }  
})

//POST - create a weapon resource
app.post("/weapons", (req, res) => {
    console.log("POST request called for endpoint 'weapons'")
    req.body.id = incrementId()
    weapons.push(req.body)
    res.send({data: weapons})
})

//PUT - update a weapon resource
app.put('/weapons/:id',(req,res)=>{
    const weapon =  weapons.find(w => w.id === parseInt(req.params.id))

    if(!weapon) {
        return res.status(404).send('No weapon with this id exists') 
    } else {
       weapon.name = req.body.name; 
       weapon.type = req.body.type; 
    }
    
    res.send({data: weapon})
})

//PATCH - update part of a weapon resource
app.patch('/weapons/:id',(req,res)=>{
    const weapon =  weapons.find(w => w.id === parseInt(req.params.id))

    if(!weapon) {
        return res.status(404).send('No weapon with this id exists')
    }
    if(req.body.name) {
        weapon.name = req.body.name; 
    }
    if(req.body.type) {
        weapon.type = req.body.type; 
    }
  
    res.send({data: weapon})
})

//DELETE - delete a weapon resource
app.delete("/weapons/:id", (req, res)  => {
    const weapon =  weapons.find(w => w.id === parseInt(req.params.id))

    if(!weapon) {
        return res.status(404).send('No weapon with this id exists')
    } else {
        console.log("Deleted:", weapon)
        weapons = weapons.filter(w => w.id != req.params.id)
        res.send({data: weapons}) 
    }
})

app.listen(port, () => console.log("Server started on port", port))