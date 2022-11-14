<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../store/globals";

    let animals = []


    async function fetchAnimals() {
        const response = await fetch($BASE_URL + "/api/animals") //dollartegn gør at vi får værdien i stedet for selve store'n
        const data = await response.json()
        animals = data.data
    }

    onMount(fetchAnimals) //vi fetcher kun når komponentet mounter, dvs. det kun sker én gang
</script>

<h3>Animals</h3>

{#each animals as animal}
    <p>{animal}</p>
{/each}