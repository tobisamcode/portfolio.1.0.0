const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { pageTitle: "Portfolio " });
});

router.get("/main", (req, res) => {
  res.render("main", { pageTitle: "Tobi" });
});

module.exports = router;
