<script>
    import {navigate} from "svelte-navigator"
    import { toast } from '@zerodevx/svelte-toast'

    import { SHOW_LOGIN } from "../../store/globals.js";

    let email = "test1@mail.com"
    let password = "Test123"

    async function signIn() {
        if(email !== "" && password !== "") {

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
            /*.catch((error) => {
                console.log(error)
            });
            */

            console.log("Called api/signin")

            if(response.status === 429) {
                console.log("Too many login attempts")
                toast.push("Too many login attempts", {
                    theme: {
                        '--toastColor': 'white',
                        '--toastBackground': 'red',
                    }    
                })

                return

            } else if(response.status !== 200) {
                console.log("Couldn't log in")
                toast.push("Wrong email or password", {
                    theme: {
                        '--toastColor': 'white',
                        '--toastBackground': 'red',  
                    }
                })

                return
            }
            toast.push("Login successful", {
                    theme: {
                        '--toastColor': 'black',
                        '--toastBackground': 'rgb(0, 255, 0)',
                    }
            })
            console.log("Login successful")
            SHOW_LOGIN.set(false)
            navigate("/", { replace: false }); 
         
        } else {
            console.log("Email or password field is empty")
            toast.push('Email/password required')
        }
           
    }
</script>

<h2>Sign in</h2>
<form>
    <label>
        Email <input type="email" name="email" id="email-id" required bind:value={email} /> 
        <span hidden>Error message</span>
    </label>
    
    <label>
        Password <input type="password" name="password" id="password-id" required bind:value={password} />
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
        width: 450px;
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
