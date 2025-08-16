require('dotenv').config();
const express = require("express");
const app = express();
const mongooe = require("mongoose");

const port = process.env.port || 3002 ;
const url = process.env.MONGO_URL; 

mongooe.connect(url)

app.listen(3002, ()=>{
    console.log("Server is running on port 3002");
    mongooe.connect(url);
    console.log("db connected");
});