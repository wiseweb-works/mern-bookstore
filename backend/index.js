'use strict'

const express = require("express");
const app = express();
const cors = require("cors");
require('express-async-errors')

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', '[::1]:5173'], // You can (and you need to) add your vercel/heroku URL here
    credentials: true
}))

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book Store Server is running!");
  });
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
