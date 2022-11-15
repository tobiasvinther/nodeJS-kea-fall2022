<script>

    import {navigate} from "svelte-navigator"

    let email = "test1@mail.com"
    let password = "Test123"

    async function signIn() {

        const response = await fetch("http://localhost:8080/api/signin", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        })
        console.log("Called api/signin")
        console.log(response.status)
        navigate("/", { replace: false });
        
    }
</script>

<h2>Sign in</h2>
<form>
    <label>
        Email <input type="email" name="email" id="email-id" value={email} />
    </label>
    <label>
        Password <input type="password" name="password" id="password-id" value={password} />
    </label>
    <br />
    <button type="submit" on:click|preventDefault={signIn}> SUBMIT </button>
</form>

<style>
    label {
        padding: 10px;
    }

    label {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        text-align: right;
        width: 400px;
        line-height: 36px;
        margin-bottom: 10px;
    }

    input {
        height: 30px;
        flex: 0 0 200px;
        margin-left: 10px;
        
        font-family: 'Retro Gaming', sans-serif;
        font-size: 20px;
    }
</style>
