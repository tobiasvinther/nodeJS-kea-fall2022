<h2>Sign in</h2>
<form>
    <!--
    <label for="email">Email:</label><br />
    <input type="email" id="email-id" name="email" /><br />
    <label for="password">Password:</label><br />
    <input type="password" id="password-id" name="password" />

    <br />
    <br />
    <input type="submit" value="Submit">
    <br />
    
    <br>
    -->
    <label>
        Email <input type="text" name="dummy1" />
    </label>
    <label>
        Password <input type="text" name="dummy2" />
    </label>
    <br />
    <button on:click|preventDefault> SUBMIT </button>
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
