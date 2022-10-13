import express from "express"
import path from "path"
import { renderPage } from "./util/templateEngine.js"
import { users, documentation } from "./database.js"
import { checkIfUserExists } from "./signupService.js"

const app = express()

app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


const indexPage = renderPage("/frontpage/index.html", 
{ 
    tabTitle: "Fake Website", 
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">` 
    cssLink: "" 
})

const aboutPage = renderPage("/about/about-us.html", 
{ 
    tabTitle: "About us",
    cssLink: "" 
})

const signupPage = renderPage("/signup/signup.html", 
{ 
    tabTitle: "Sign up",
    cssLink: "" 
})

const signinPage = renderPage("/signin/signin.html", 
{ 
    tabTitle: "Sign in",
    cssLink: "" 
})

const forgotPasswordPage = renderPage("/forgot-password/forgot-password.html", 
{ 
    tabTitle: "Forgot password",
    cssLink: "" 
})

const nodeDocumentationPage = renderPage("/node-documentation/node-documentation.html", 
{ 
    tabTitle: "NodeJS documentation",
    cssLink: `<link rel="stylesheet" href="/pages/node-documentation/node-documentation.css">`
})

app.get("/", (req, res) => {
    res.send(indexPage)
})

app.get("/signup", (req, res) => {
    res.send(signupPage)
})

app.get("/signin", (req, res) => {
    res.send(signinPage)
})

app.get("/about-us", (req, res) => {
    res.send(aboutPage)
})

app.get("/forgot-password", (req, res) => {
    res.send(forgotPasswordPage)
})

app.get("/node-documentation", (req, res) => {
    res.send(nodeDocumentationPage)
})

app.get("/api/node-documentation/", (req, res) => {
    res.send(documentation)
})

//POST - create new user
app.post("/signup", (req, res) => {
    console.log("POST request called")
    if(checkIfUserExists(users, req.body.email) === false) {
        users.push(req.body)
        console.log("User created")
    } else {
        console.log("User already exists")
    }
    res.send({data: users})
})

const PORT = process.env.PORT || 8080;

//listen on a port
const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port)
});