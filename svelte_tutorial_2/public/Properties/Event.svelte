<script>
    import EventText from "./EventText.svelte"
    import Choice from "./Choice.svelte"

    export let eventTitle = "Placeholder title"
    export let choices = []
    //export let currentEvent
</script>

<h3>{eventTitle}</h3>

<!--<p><EventText eventText={}/></p>-->

{#each choices as choice}

{/each}

