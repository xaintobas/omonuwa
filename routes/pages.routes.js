const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Home Page");
  res.render("index");
});

router.get("/about-us", (req, res) => {
  console.log("About Page");
  res.render("about-us");
});

router.get("/contact", (req, res) => {
  console.log("Contact Page");
  res.render("contact");
});

router.get("/services", (req, res) => {
  console.log("Services Page");
  res.render("services");
});

module.exports = router;
