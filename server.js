const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

const databaseUrl = "warmup";
const collections = ["books"];
mongoose.connect("mongodb://localhost/warmup", {
  useNewUrlParser: true, 
  useFindAndModify: false
});

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
