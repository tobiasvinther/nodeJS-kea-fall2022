<script>
    export let child;
    export let onTellIloveYou;
    export let onAlwaysSayHi;
    export let parentName;

    import { fridgeMessageStore } from "../../store/fridgeBulletinStore.js";
    let fridgeMessage = "";

    function handleWriteMessage() {
        //update tager imod en callback function
        fridgeMessageStore.update((currentMessage) => {
            return currentMessage + `${fridgeMessage}`;
        });
        console.log(fridgeMessage);
        fridgeMessage = "";
    }
</script>

<div class:bright-kid={child.brightKid} class={child.blackSheep || "not-a-blacksheep"}> <!--if value is true, get this class-->
    <p>{child.name}</p>

    <input placeholder="Write a message" bind:value={fridgeMessage} />
    <button on:click={handleWriteMessage}>Write a message</button>
    <br /><br />

    <button on:click={onAlwaysSayHi}>Greet</button>
    <button on:click={onTellIloveYou(`I love you, ${parentName}`)}
        >Whisper in your parent's ear</button>
    <div>{fridgeMessage}</div>
</div>

<style>
    .bright-kid {
        border: solid 2px yellow;
    }

    .ultra-blacksheep {
        background-color: black;
    }
    .medium-blacksheep {
        background-color: grey;
    }
    .not-a-blacksheep {
        background-color: aquamarine;
    }
</style>
