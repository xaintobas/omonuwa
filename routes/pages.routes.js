const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // console.log("Home Page");
  res.render("index");
});

router.get("/our-firm", (req, res) => {
  res.render("our-firm");
});

router.get("/contact-us", (req, res) => {
  res.render("contact-us");
});

router.get("/our-attorneys", (req, res) => {
  res.render("our-attorneys");
});

router.get("/news", (req, res) => {
  res.render("news");
});

router.get("/gallery", (req, res) => {
  res.render("services");
});

module.exports = router;
