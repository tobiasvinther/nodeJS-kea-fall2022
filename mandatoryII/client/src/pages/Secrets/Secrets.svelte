<script>
    import { onMount } from "svelte"
    import { navigate } from "svelte-navigator"
    import { toast } from '@zerodevx/svelte-toast'

    let allowed = false
    let secretText = ""

    onMount(async () => {
        const response = await fetch("http://localhost:8080/api/authenticate", {
            method: "GET",
            credentials: "include",    
        })

        if(response.status === 401) {
            toast.push("Log in to see this page")
            navigate("/login", { replace: false })
        } else {
            allowed = true
            let responsePromise = await response.json()
            secretText = responsePromise.text
        }
	})
</script>


{#if allowed}
<h2>The SECRETS</h2>
<p>Wait... are you supposed to be here?</p>
<p class="alien">
    {secretText}
</p>
{/if}


<style>
    .alien {
        font-family: 'Alien_Hieroglyph', sans-serif;
        font-size: 80px;

    }
    @font-face {
        font-family: alien_font;
        src: url("https://dl.dafont.com/dl/?f=alien_hieroglyph");
        }
</style>