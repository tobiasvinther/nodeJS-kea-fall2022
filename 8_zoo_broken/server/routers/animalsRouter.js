import Router from "express"
const router = Router()
import db from "../database/connection_sqlite.js"

const animals = ["🙉", "🦧", "🦓"]

router.get("/api/animals", async (req, res) => {
    
    res.send({data: animals})
})

router.post("/api/animals", async (req, res) => {
    console.log(req.body)
    const latinName = req.body.latinName
    const commonName = req.body.commonName
    if(!commonName) return res.status(404).send({message: "common name not defined"})
    const data = await db.all("SELECT * FROM animals;")

    const result = await db.run(
        `
        INSERT INTO animals (latin_name, common_name) VALUES ("${latinName}", "${commonName}")
        `)

    console.log(result)
    res.send({})
})

export default router