import express from "express";
import { router } from "./routes/note-route.js";
import 'dotenv/config';
// import mongoose from "mongoose";
import { dbConnection } from "./config/db.js";





const app = express()
app.use(express.json())


dbConnection();

app.use(router);
 

app.listen(4000, () => 
    console.log(`App is Running!`

    ))

