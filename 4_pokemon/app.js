import express from "express"
import path from "path"
import pokemonRouter from "./routers/pokemonRouter.js"

import { renderPage, battlePage, injectData } from "./util/templateEngine.js"

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

const randomPokemon = ["pikachu", "slowpoke", "ditto"];
app.get("/battle", (req, res) => {
    res.redirect(`battle/${randomPokemon[Math.floor(Math.random() * randomPokemon.length)]}`)
});

app.get("/battle/:pokemonName", (req, res) => {
    const pokemonName = req.params.pokemonName
    let battlePageWithData = injectData(battlePage, {pokemonName})
    //const listOfNumbers = [1, 2, 3, 4]
    //battlePageWithData = injectData(battlePageWithData, {listOfNumbers})
    //battlePageWithData = injectData(battlePageWithData, {somethingNew: 1234})
    res.send(battlePageWithData.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`))
});
    
app.use(pokemonRouter)

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