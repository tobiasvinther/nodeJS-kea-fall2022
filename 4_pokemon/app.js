import express from "express"
import path from "path"

import { renderPage, battlePage } from "./util/templateEngine.js"

//instantiate express, start a server
//we don't use require, because we use 'import'. Require was the traditional way to import
const app = express()

app.use(express.static("public")) //we allow client to access this folder

const frontpagePage = renderPage("/frontpage/frontpage.html", 
{ 
    tabTitle: "Pokemon", 
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">` 
})

const contactPage = renderPage("/contact/contact.html") //we don't specify options, because we don't need them on this page

app.get("/", (req, res) => {
    res.send(frontpagePage)
})

app.get("/battle/:pokemonName", (req, res) => {
    res.send(battlePage.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`))
});

app.get("/battle", (req, res) => {
    const randomPokemon = "pikachu"
    res.redirect(path.resolve(`battle/${randomPokemon}`))
});

app.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(result => res.send({ data: result }))
});

app.get("/contact", (req, res) => {
    res.send(contactPage)
});


const PORT = process.env.PORT || 8080;

//listen on a port
const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port)
});