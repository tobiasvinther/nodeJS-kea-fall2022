import { initializeScore, initializePlayers, initializeGame } from "./dartGame.js"

const URL = "http://localhost:8080/"

initializeScore(501)
initializePlayers("Simon", "Silke")

initializeGame()

function getDate() {
    document.getElementById("date_id").innerText = new Date().toDateString()
}

getDate()