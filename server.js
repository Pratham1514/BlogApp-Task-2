const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/articles");
const Article = require("./models/article");
const methodOverride = require("method-override");

const app = express();

const mongoDB = "mongodb://localhost/blogApp";
mongoose.connect(mongoDB);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

app.use("/articles", router);

app.listen(3000);
