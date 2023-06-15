// Module--1. Express.js
const { json } = require("body-parser");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://shekharpareek:4Hfrfoo3VmWalJ1C@cluster0.hwbyaq6.mongodb.net/mydatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.listen(9000, () => {
  console.log("connecting...");
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/Home-login", (req, res) => {
  const userdetails = {};
  res.send(userdetails);
});

app.post("/Home-login/sign-in", async (req, res) => {
  const user = new user(req.body);
  console.log(req.body);
  res.send(user);
});
