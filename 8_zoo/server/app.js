import express from "express";
const app = express();
app.use(express.json());

import helmet from "helmet"
app.use(helmet())

import rateLimit from "express-rate-limit"

import cors from "cors";
app.use(cors());

//rækkefølge på rateLimits er vigtig. Hvis general ligger sidst vil den override de foregående fx
const generalRateLimiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 80, 
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(generalRateLimiter)


import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);



const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));
