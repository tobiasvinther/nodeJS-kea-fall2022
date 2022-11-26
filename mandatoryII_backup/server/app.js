import express from "express";
const app = express();
app.use(express.json());

import helmet from "helmet"
app.use(helmet())

import rateLimit from "express-rate-limit"

import cors from "cors";
app.use(cors());


let logInObject = {isLoggedIn : false,}
export {logInObject}


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

import session from "express-session"
app.use(session({
    secret: "keyboardcat",//process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } //we use http not https, so it needs to be false
  }))

import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);

import contactRouter from "./routers/contactRouter.js"
app.use(contactRouter)

import authenticateRouter from "./routers/authenticateRouter.js"
app.use(authenticateRouter)


const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));
