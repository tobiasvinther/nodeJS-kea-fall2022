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
app.get("/", (req, res) => {
    res.send( "<h1>Welcome... to the Weapons Emporium!</h1>" )
})

//GET - get all weapons
app.get("/weapons", (req, res) => {
    res.send({data: weapons})
})

//GET - get weapon by id
app.get("/weapons/:id", (req, res) => {
    const foundWeapon = weapons.find(weapon => weapon.id === parseInt(req.params.id)) //note: weapon is a reference to the object we find, not a copy. 

    if(!foundWeapon) {
        return res.status(404).send({error: "No weapon with this id exists"})
    } else {
        res.send({data: foundWeapon}) 
    }  
})

//TODO: define a route that returns the date
app.get("/date", (req, res) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    res.send({message: days[new Date().getDay()]})

})

//POST - create a weapon resource
app.post("/weapons", (req, res) => {
    console.log("POST request called for endpoint 'weapons'")
    req.body.id = incrementId()
    weapons.push(req.body)
    res.send({data: weapons})
})

//PUT - update a weapon resource
app.put("/weapons/:id", (req, res) => {
    const foundWeapon =  weapons.find(weapon => weapon.id === parseInt(req.params.id))

    if(!foundWeapon) {
        return res.status(404).send({error: "No weapon with this id exists"}) 
    } else {
       foundWeapon.name = req.body.name; 
       foundWeapon.type = req.body.type; 
    }
    
    res.send({data: foundWeapon})
})

//PATCH - update part of a weapon resource
app.patch("/weapons/:id", (req, res) => {
    /*
    const foundWeapon =  weapons.find(weapon => weapon.id === parseInt(req.params.id))

    if(!foundWeapon) {
        return res.status(404).send({error: "No weapon with this id exists"})
    }
    if(req.body.name) {
        foundWeapon.name = req.body.name; 
    }
    if(req.body.type) {
        foundWeapon.type = req.body.type; 
    }
  
    res.send({data: foundWeapon})
    */

    const requestedId = Number(req.params.id)
    const foundIndex = weapons.findIndex(weapon => weapon.id === parseInt(requestedId))

    if(foundIndex !== -1) {
        const foundWeapon = weapons[foundIndex]
        //spreading two objects like this combines them and the last object will overwrite if they have the same keys. Id is "hardcoded" here.
        const weaponToUpdate = {...foundWeapon, ...req.body, id: requestedId} 
        weapons[foundIndex] = weaponToUpdate
        res.send({data: weaponToUpdate})
    } else {
        return res.status(404).send({
            data: undefined, 
            message: `No weapon with this id exists:  ${requestedId}`})
    }

})

//DELETE - delete a weapon resource
app.delete("/weapons/:id", (req, res) => {
    /*
    const foundWeapon =  weapons.find(weapon => weapon.id === parseInt(req.params.id))

    if(!foundWeapon) {
        return res.status(404).send("No weapon with this id exists")
    } else {
        weapons = weapons.filter(weapon => weapon.id !== parseInt(req.params.id))
        console.log("Deleted:", foundWeapon)
        res.send({data: weapons}) 
    }
    */

    const requestedId = Number(req.params.id)
    const foundIndex = weapons.findIndex(weapon => weapon.id === parseInt(requestedId))

    if(foundIndex !== -1) {
        const deletedWeapon = weapons.splice(foundIndex, 1)[0]
        res.send({data: deletedWeapon}) 
    } else {
        return res.status(404).send({
            data: undefined, 
            message: `No weapon with this id exists:  ${requestedId}`})
    }
})

app.listen(port, () => console.log("Server started on port", port))