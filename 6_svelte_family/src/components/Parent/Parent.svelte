<script>
    import Child from "../Child/Child.svelte"
    import { fridgeMessageStore } from "../../store/fridgeBulletinStore.js";
    export let name
    export let children

    //todo create a function that is called *AwaysSayHi and make the child say hi to the parent when greeting

    //first argument is the event
    function handleTellILoveYou(message) {
        console.log(message)
    }

    function handleAlwaysSayHi() {
        console.log("Hi")
    }

    function handleEraseFridgeBulletin() {
        fridgeMessageStore.set("Write your message")
    }
</script>

<div class="erase_div" on:click={handleEraseFridgeBulletin} on:keydown={() => {}}>Erase the fridge bulletin</div>

<h1>Hi, I'm {name}!</h1>
{#each children as child}
    <!--<p>{JSON.stringify(child)}</p>-->
    <Child child={child} parentName={name} onAlwaysSayHi={handleAlwaysSayHi} onTellIloveYou={handleTellILoveYou}/> 
{/each}

<style>
    .erase_div {
        
    }
</style>


