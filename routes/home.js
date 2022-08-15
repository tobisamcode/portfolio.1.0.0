const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { path: "/", pageTitle: "Portfolio " });
});

router.get("/home", (req, res) => {
  res.render("main", { path: "/home", pageTitle: "Tobi" });
});

router.get("/about", (req, res) => {
  res.render("about", { path: "/about", pageTitle: "About me" });
});

router.get("/projects", (req, res) => {
  res.render("projects", { path: "/projects", pageTitle: "My projects" });
});

router.get("/blogs", (req, res) => {
  res.render("blogs", { path: "/blogs", pageTitle: "My writings" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { path: "/contact", pageTitle: "Contact me" });
});

module.exports = router;
