function getDate() {
    document.getElementById("date_id").innerText = "Today is:\n" + new Date().toDateString()
}

getDate()
