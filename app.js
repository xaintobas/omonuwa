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

require("dotenv").config();
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const pageroute = require("./routes/pages.routes");

// Static Files
app.use(express.static(__dirname + "/public"));

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Use express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "./layouts/main-layout"); // Not strictly necessary, 'layout.ejs' is the default

app.use("", pageroute);

app.listen(process.env.PORT, () =>
  console.log(`App running on http://localhost:${process.env.PORT}`)
);
