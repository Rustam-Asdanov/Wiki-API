const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/connection");
const articleRouter = require("./router/article_router");
// const ejs = requires("ejs");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const port = 3000;

// routes

app.use("/articles", articleRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server listen on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
