const signupButton = document.getElementById("btn-confirm-id").addEventListener("click", signup);

function signup() {

    fetch("/signup", {
        method: "POST",
        body: JSON.stringify({
            name: document.getElementById("field-name-id").value,
            email: document.getElementById("field-email-id").value,
            password: document.getElementById("field-password-id").value
        }),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
    })

    document.getElementById("form-id").reset()
    alert("You are signed up!")
    window.location.href = "/signin"

}