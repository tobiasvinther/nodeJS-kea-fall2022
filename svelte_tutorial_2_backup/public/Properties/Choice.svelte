<script>
    export let choiceText = "Placeholder choice text"
    export let goto = "/"
    export let onGoToEvent
</script>

<!--<p><b><a href={goto}>{choiceText}</a></b></p>-->
<p on:click={onGoToEvent()} on:keydown={() => {}}><b>{choiceText}</b></p>