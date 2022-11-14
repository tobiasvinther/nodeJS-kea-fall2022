<script>
    import {
        useForm,
        Hint,
        HintGroup,
        validators,
        required,
        minLength,
        email,
    } from "svelte-use-form";
    //import { passwordMatch, containNumbers } from "./customValidators"
    import { toast } from '@zerodevx/svelte-toast'

    const form = useForm();

    const requiredMessage = "This field is required";
</script>

<div class="wrapper">
<form use:form>
    <h1>Registration</h1>
    <label for="name">Name</label>
    <br />
    <input type="text" name="name" />
    <br />
    <label for="email">Email</label>
    <br />
    <input type="email" name="email" use:validators={[required, email]} />
    <HintGroup for="email">
        <Hint on="required">{requiredMessage}</Hint>
        <Hint on="email" hideWhenRequired>This must be a valid email</Hint>
    </HintGroup>
    <br />

    <label for="password">Password</label>
    <br />
    <input
        type="password"
        name="password"
        use:validators={[required, minLength(5) /*containNumbers(2)*/]}
    />
    <HintGroup for="password">
        <Hint on="required">{requiredMessage}</Hint>
        <Hint on="minLength" hideWhenRequired let:value
            >This field must have at least {value} characters.</Hint
        >
        <Hint on="containNumbers" hideWhen="minLength" let:value>
            This field must contain at least {value} numbers.
        </Hint>
    </HintGroup>
    <br />
    <label for="passwordConfirmation">Password Confirmation</label>
    <br />
    <input
        type="password"
        name="passwordConfirmation"
        use:validators={[required /*, passwordMatch*/]}
    />
    <HintGroup for="passwordConfirmation">
        <Hint on="required">{requiredMessage}</Hint>
        <Hint on="passwordMatch" hideWhenRequired>Passwords do not match</Hint>
    </HintGroup><br />
    <br />
    <button disabled={!$form.valid} on:click|preventDefault> Submit </button>
    <button on:click={() => toast.push('Hello world!')}>EMIT TOAST</button>
</form>
</div>

<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }
    .wrapper {
        padding-top: 9rem;
    }
</style>
