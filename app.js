require("dotenv").config();
const ejs = require("ejs");
const pageroute = require("./routes/pages.routes");
const express = require("express");
const app = express();

// middleware
app.use(express.json());
// app.use(express({ urlencoded: true }));
app.use(express.static(__dirname + "/public"));

// templating
app.set("view engine", "ejs");
app.set("views", "public");

app.use("", pageroute);

app.listen(process.env.PORT, () =>
  console.log(`App running on http://localhost:${process.env.PORT}`)
);
