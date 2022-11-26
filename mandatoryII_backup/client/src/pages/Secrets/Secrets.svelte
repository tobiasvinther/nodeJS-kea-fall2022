<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-navigator"
    import { toast } from '@zerodevx/svelte-toast'

    let allowed = false

    onMount(async () => {
        
		//const res = await fetch(`http://localhost:8080/api/authenticate`);
		//let result = res;
        //console.log(result)
        
        const response = await fetch("http://localhost:8080/api/authenticate", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            
        })
        if(response.status === 401) {
            toast.push("Log in to see this page")
            navigate("/signin", { replace: false });  
        } else {
            //toast.push("Welcome")
            allowed = true
        }
        
        //.then(result => console.log(result))
        //.catch((error) => {
        //       console.log(error)
        //    });
	});
</script>

{#if allowed}
<h2>The SECRETS</h2>
<p>Wait... are you supposed to be here?</p>
<p class="alien">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</p>
{/if}

<style>
    .alien {
        font-family: 'Alien_Hieroglyph', sans-serif;
        
        font-size: 80px;
        /*line-height: 24px;
        font-weight: 400;*/
    }
    @font-face {
        font-family: alien_font;
        src: url("https://dl.dafont.com/dl/?f=alien_hieroglyph");
        }
</style>