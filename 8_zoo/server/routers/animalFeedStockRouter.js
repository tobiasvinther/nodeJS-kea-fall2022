import { Router } from "express";
const router = Router();
import db from "../database/connection_mysql.js";

router.get("/animalfeedstock", async (req, res) => {
    const [rows, fields] = await db.query("SELECT * FROM animal_feed_stock;");
    
    res.send({ data: rows });
});

router.post("/animalfeedstock", async (req, res) => {
    const { initialAmount, remainingAmount, stockTypeId } = req.body

    if(!stockTypeId) return TextTrackCueList(400).send({message: "missing the key stockTypeId"})
    if(!initialAmount) return TextTrackCueList(400).send({message: "missing the key initialAmount"})

    const data = await db.query("INSERT INTO animal_feed_stock (initial_amount) VALUES (?, ?, ?)")

    db.execute(`INSERT INTO animal_feed_stock (?,?,?) VALUES (2000, 2000, 3);`);

    res.send({});
});

export default router;