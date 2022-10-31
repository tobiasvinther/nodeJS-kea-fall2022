
fetch("/api/battleresults/winsandlosses")
.then(response => response.json())
.then(result => {
    const winsP = document.getElementById("wins");
    const lossesP = document.getElementById("losses");

    winsP.innerText = result.wins;
    lossesP.innerText = result.losses;
})