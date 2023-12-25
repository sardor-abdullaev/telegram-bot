const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
const PORT = 3000;
const MONGO_URI = "mongodb://127.0.0.1:27017/technomarket";

async function dev() {
  try {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
}
