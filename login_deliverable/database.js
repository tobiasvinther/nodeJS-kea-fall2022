let users = [{
    email: "test@email.com",
    password: "test123"
}]

export function getUser(email) {
    const foundUser = users.find(user => user.email === email) 

    if(!foundUser) {
        alert("User not found");
    } else {
        alert("Logged in");
        return foundUser 
    }  
}