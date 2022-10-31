import {Router} from "express";
import battleRouter from "./battleRouter.js";

/*
reduce
(accumilator, element)

[1, 2, 3, 4, 5]

0. acc = 0
1. acc = 0, element = 1, return acc + element
2. acc = 1. element = 2, return acc + element
3, acc = 3. element = 4, return acc + element
4. acc = 7, element = 5, return acc + element
Finished: 12
*/
/*
const numbers = [1, 2, 4, 5];
const sum = numbers.reduce((acc, element) => acc + element
, 0);
console.log(sum)
*/

const router = Router();

router.get("/api/battleresults/winsandlosses", (req, res) => {
    const winsandlosses = battleRouter.battleResults.reduce((acc, battleResult) => {
        battleResult.iWon? acc.wins++ : acc.losses++;
        return acc;
    }, {win: 0, losses: 0});

    res.send(winsandlosses);
})

router.get("api/battleresults/pokemonbattled", (req, res) => {

})

export default router;