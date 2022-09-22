const URL = "http://localhost:8080/"

function getDate() {
    document.getElementById("date_id").innerText = "Today is:\n" + new Date().toDateString()
}

getDate()
