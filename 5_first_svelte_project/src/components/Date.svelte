<script>
    let date = new Date()
    let dates = [date]

    function updateDate() {
        date = new Date()
        //dates.push(date)
        //dates = dates //vi gør dette for at få siden til at reagere/opdatere, da vi skal reassigne for at svelte opdaterer
        dates = [...dates, date] //det samme som ovenstående to linjer, bare på én linje
        console.log(dates)
     
    }
</script>

<div>Current date: {date}</div>
<button on:click={updateDate}>Update date</button>
<div>{JSON.stringify(dates)}</div> <!--reactivity-->