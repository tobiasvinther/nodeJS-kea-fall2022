<script>
    import { toast } from '@zerodevx/svelte-toast'

    let name = ""
    let text = ""

    function sendEmail() {
        fetch("http://localhost:8080/api/contact", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                text: text
            }),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        })
        //.then(result => console.log(result))
        .catch((error) => {
                console.log(error)
            });
        console.log("Called api/contact")
        //console.log(response.status)
        name = ""
        text = ""
        toast.push('MESSAGE SENT')
        //navigate("/", { replace: false });

}
</script>

<h2>Interface with us</h2>
<p>We desire your thoughts. Send them to us.</p>

<label>
   Name <input type="text" name="name" bind:value={name} /> 
</label>

<br>
<textarea rows=18 cols=36 bind:value={text}></textarea>
<br><br>

<button type="submit" on:click|preventDefault={sendEmail}> SUBMIT </button>

<style>
    textarea, input {
        margin-top: 1em;
        margin-top: 1em;
        font-family: 'Retro Gaming', sans-serif;
        font-size: 20px;
        border: 4px solid rgb(0, 255, 0);
        background-color: black;
        color: white;
        caret-color: rgb(0, 255, 0);
    }
    textarea:focus, input:focus {
    outline: none;
    }
</style>