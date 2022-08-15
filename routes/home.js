const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { path: "/", pageTitle: "Portfolio " });
});

router.get("/main", (req, res) => {
  res.render("main", { path: "/main", pageTitle: "Tobi" });
});

router.get("/about", (req, res) => {
  res.render("about", { path: "/about", pageTitle: "About me" });
});

module.exports = router;
