const URL = "http://localhost:8080/"

function getDate() {
    document.getElementById("date_id").innerText = new Date().toDateString()
}

getDate()