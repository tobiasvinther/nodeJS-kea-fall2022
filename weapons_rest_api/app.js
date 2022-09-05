const app = require("express")()

//weapon data
weaponsList = [
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
    res.send({ message : "Welcome to my Weapons Emporium" })
})

//get the complete list of weapons
app.get("/weapons", (req, res)  => {
    res.send({ weaponsList })
})

//get weapon by id
app.get("/weapons/:id", (req, res)  => {
    //if requested id is 0 or below or higher than weaponList's length, we know we don't have that weapon in our list
    if(req.params.id <= 0 || req.params.id > weaponsList.length) {
        res.send({ 
            message : "I don't know that weapon, sadly."
         }) 
    } else {
        //respond with info on the weapon, using req.params.id to correspond to an index in the weaponsList
        res.send({ 
            id : weaponsList[req.params.id -1].id,
            name : weaponsList[req.params.id -1].name,
            type : weaponsList[req.params.id -1].type 
        }) 
    }
    
})

app.listen(8080, () => {
    console.log("Server started on port", 8080)
})