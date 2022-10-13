import express from "express"
import path from "path"
import { renderPage } from "./util/templateEngine.js"
import { users, documentation } from "./database.js"
import { checkIfUserExists } from "./signupService.js"
import { tab, tabContent, editContent } from "./documentationRenderHelper.js"

const app = express()

app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


const indexPage = renderPage("/frontpage/index.html", 
{ 
    tabTitle: "Fake Website", 
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
    cssLink: `<link rel="stylesheet" href="/pages/node-documentation/node-documentation.css">`,
    content: `<div id="content" class="container d-flex">
    <div class="d-flex align-items-start mt-4">
      <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">` 
      + tab 
      + `</div><div class="tab-content" id="v-pills-tabContent">`
      + tabContent
      + "</div>"
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

app.get("/node-documentation/:id", (req, res) => {
    const id = req.params.id
    const nodeDocumentationEditPage = renderPage("/node-documentation/node-documentation-edit.html",
        {
            tabTitle: "Edit documentation",
            cssLink: "",
            content: `<textarea rows=16 class="mx-3">${editContent(id)}</textarea>`
            //content: `<div id="content" class="container d-flex justify-content-center mt-5"><textarea cols="300" rows="20">${editContent(id)}</textarea></div>`
        })
    res.send(nodeDocumentationEditPage)
})

app.patch("/node-documentation/:id", (req, res) => {
    const foundIndex = documentation.findIndex(doc => doc.id === req.params.id);
    if (foundIndex !== -1) {
        const foundDoc = documentation[foundIndex];
        const docToUpdate = { ...foundDoc, ...req.body, id: req.params.id };
        documentation[foundIndex] = docToUpdate;
        res.sendStatus(200)
    } else {
        res.status(404).send({ data: undefined, message: `No doc found by id: ${req.params.id}` });
    }
})

/*
app.get("/api/node-documentation/", (req, res) => {
    res.send(documentation)
})
*/

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