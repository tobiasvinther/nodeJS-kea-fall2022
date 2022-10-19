const signupButton = document.getElementById("btn-confirm-id").addEventListener("click", signin);

function signin() {

    fetch("/signin", {
        method: "POST",
        body: JSON.stringify({
            email: document.getElementById("field-email-id").value,
            password: document.getElementById("field-password-id").value
        }),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
    })

    //document.getElementById("form-id").reset()
    //alert("You are signed up!")
}
