const app = require("express")()
const port = 8080

//weapon data
weaponList = [
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

//get all weapons
app.get("/weapons", (req, res)  => {
    res.send({ data: weaponList })
})

//get weapon by id
app.get("/weapons/:id", (req, res)  => {
    //if requested id is 0 or below or higher than weaponList's length, we know we don't have that weapon in our list
    if(req.params.id <= 0 || req.params.id > weaponList.length) {
        res.send({ 
            message : "I don't know that weapon, sadly."
        }) 
    } else {
        //respond with info on the weapon, using req.params.id to correspond to an index in the weaponsList
        res.send({ 
            id : weaponList[req.params.id -1].id,
            name : weaponList[req.params.id -1].name,
            type : weaponList[req.params.id -1].type 
        }) 
    }
    
})

app.listen(port, () => {
    console.log("Server started on port", port)
})