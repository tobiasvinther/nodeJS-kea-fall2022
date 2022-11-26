import * as dotenv from "dotenv"
dotenv.config()

import express from "express"
const app = express()
app.use(express.json())

import helmet from "helmet"
app.use(helmet())

import rateLimit from "express-rate-limit"

import cors from "cors"
app.use(cors({ credentials: true, origin: true }))

import session from "express-session"
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
		secure: false,
	 } 
  }))

let loggedInUsers = {loggedIn: []}
export {loggedInUsers}

function isAuth (req, res, next) {
	if(req.session?.isLoggedIn) {
		console.log("isAuth = true")
		next()
	} else {
		console.log("isAuth = false")
		next()
	}
}
app.use(isAuth)

//rækkefølge på rateLimits er vigtig. Hvis general ligger sidst vil den override de foregående fx
const generalRateLimiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 80, 
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(generalRateLimiter)

const authRateLimiter = rateLimit({
	windowMs: 1 * 60 * 1000,
	max: 3, 
	standardHeaders: true,
	legacyHeaders: false, 
})

app.use("/api/signin", authRateLimiter)


import usersRouter from "./routers/usersRouter.js"
app.use(usersRouter);

import contactRouter from "./routers/contactRouter.js"
app.use(contactRouter)

import authenticateRouter from "./routers/authenticateRouter.js"
app.use(authenticateRouter)


const PORT = 8080 || process.env.PORT
app.listen(PORT, () => console.log("Server is running on port", PORT))
