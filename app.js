const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = requires("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const port = 3000;

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
