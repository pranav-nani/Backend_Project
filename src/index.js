// best way is to wrap in try catch when ever u try to call the DB_NAME
// we use iifee functions to connect the database and this is the syntax
// to use import for dotenv instead of require we have to make some changes in package.json
//     "dev": "nodemon -r dotenv/config --experimental-json-modules /index.js"  

import dotenv from "dotenv";
import mongoose from "mongoose";
import  {DB_NAME}  from "./constants.js"
import connectDB from "./db/index.js"
import app from "./app.js";


dotenv.config({
    path: "./env"
})


connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port : ${process.env.PORT}`);
    })
}).catch((error) =>{
    console.log(error)
})
//1st approach
/*
import express from "express"
const app = express();

;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR: ",error)
        })
        app.listen(process.env.PORT, ()=>{
            console.log("listening on : ",process.env.PORT)
        })
    }catch(error){
        console.error("Error: ",error)
        throw err
    }
})()

*/