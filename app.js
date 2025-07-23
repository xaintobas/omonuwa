// require("dotenv").config();
// // const ejs = require("ejs");
// // const pageroute = require("./routes/pages.routes");
// const express = require("express");
// const app = express();

// const expressLayouts = require("express-ejs-layouts");

// // middleware
// app.use(express.json());
// // app.use(express({ urlencoded: true }));

// // Static Files
// app.use(express.static(__dirname + "/public"));

// // Set EJS as the templating engine
// app.set("view engine", "ejs");

// // Use express-ejs-layouts
// app.use(expressLayouts);
// app.set("layout", "layout"); // Not strictly necessary, 'layout.ejs' is the default

// // templating
// app.set("view engine", "ejs");
// app.set("views", "public");

// app.use("", pageroute);

// app.listen(process.env.PORT, () =>
//   console.log(`App running on http://localhost:${process.env.PORT}`)
// );

// const mysql = require("mysql2");
// const nodemailer = require("nodemailer");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const pageroute = require("./routes/pages.routes");

const app = express();

// Static Files
app.use(express.static(__dirname + "/public"));

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Use express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "./layouts/main-layout"); // Not strictly necessary, 'layout.ejs' is the default

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// MySQL connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to MySQL database");
// });

// Email transporter setup
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

app.use("", pageroute);

app.listen(process.env.PORT, () =>
  console.log(`App running on http://localhost:${process.env.PORT}`)
);
