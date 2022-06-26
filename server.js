const express = require("express");
const ejs = require("ejs");
const path = require("path");
const rootDir = require("./utils/path");
const router = require("./routes/home");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
// app.get("/public", express.static("public"));

app.use("/", router);

app.use((req, res) => {
  res.render("404");
});
app.listen(3000, () => {
  console.log("server is running of port 3000...");
});
