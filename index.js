const express = require("express");
// const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
const fs = require("fs");
const router=require('./routes/user')
const {connectMongoDb}=require('./connection')
const {logReqRes}=require('./middlewares/index')

const app = express();
const PORT = 8000;

//connection

connectMongoDb("mongodb://localhost:27017/first_db")
  .then(() =>
    console.log("mongo connected")).catch((err) => console.log(`Error ${err}`)
  );

  

//middleware

app.use(express.urlencoded({ extended: true })); // to support

app.use(logReqRes('logs.txt'));

//routes

app.use('/users',router);

  

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
