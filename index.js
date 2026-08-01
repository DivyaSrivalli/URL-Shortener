import express from  'express';
import urlroutes from './routes/urlroutes.js';
import dotenv from "dotenv";
import mongoose from "mongoose";
const app=express();
app.use(express.json());
dotenv.config();

const connection = mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.error("Error connecting to MongoDB:", err));
app.use('/url',urlroutes)

app.listen(8000,()=>{
    console.log("app is running on port 8000");
})
