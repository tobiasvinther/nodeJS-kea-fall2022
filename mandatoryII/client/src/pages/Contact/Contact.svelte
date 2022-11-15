<script>
    let name = ""
    let text = ""

    async function sendEmail() {
        const response = await fetch("http://localhost:8080/api/contact", {
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
        console.log("Called api/contact")
        console.log(response.status)
        //navigate("/", { replace: false });

}
</script>

<h2>Interface with us</h2>
<p>We desire your thoughts. Record them below.</p>

<label>
   Name <input type="text" name="name" value={name} /> 
</label>

<br>
<textarea rows=18 cols=36 value={text}></textarea>
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