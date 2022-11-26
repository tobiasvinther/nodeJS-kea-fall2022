import dotenv from "dotenv/config"
//dotenv.config()
import express from "express"
const app = express()

import helmet from "helmet"
app.use(helmet()) //helmet returnerer en function

import rateLimit from "express-rate-limit"

import session from "express-session"
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } //we use http not https, so it needs to be false
  }))

import popcornRouter from "./routers/popcornRouter.js"
app.use(popcornRouter)

//rækkefølge på rateLimits er vigtig. Hvis general ligger sidst vil den override de foregående fx
const generalRateLimiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 80, 
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(generalRateLimiter)

const frontdoorlimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use("/frontdoor", frontdoorlimiter)


//alt middleware tager imod det samme som callback
//positionelle argumenter
//fordi den bliver sat ind som middleware er den speciel, så tager den imod request, response og next (next er en funktion)
function guidingButler(req, res, next) {
    console.log("This way, sir")
    next()
}

function ipLogger(req, res, next) {
    console.log(req.ip)
    next()
}

//setup middleware
app.use(ipLogger) //globalt, bliver kaldt af all routes. app.use tager imod middleware og kører det før selve routen
app.use("/room", guidingButler) //guiding butler kaldes som middleware på endpoints med /room

function guardMiddleWare(req, res, next) {
    //secure default
    if(req.query.name !== "Anders") {
        console.log("The guard blocks your way")
        res.send({message: "You are not Anders! Begone."})
    } else {
        console.log("The guard lets you pass")
    }
    
    req.fullname = "Anders Latif"
    next()
}

app.get("/frontdoor", guardMiddleWare, (req, res, next) => {
    res.send({message:`Please enter ${req.fullname}`})
})

app.get("/room", guidingButler, (req, res, next) => {
    //res.send({message: "You are in room 1"})
    console.log("Room 1")
    next() //look for the next route that matches this route
})

app.get("/room", guidingButler, (req, res) => {
    console.log("Room 2")
    res.send({message: "You are in room 2"})
})

//wildcard, catches everything that isn't defined as a route (but remember the order of routes)
app.get("*", (req, res) => {
    res.send(`<h1>404<br><h3>Could not find page</h3></h1>`)
})


const PORT = 8090
app.listen(PORT, () => console.log("Server is running on port", PORT))