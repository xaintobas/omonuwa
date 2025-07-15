const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // console.log("Home Page");
  res.render("index", {
    title: "Dr. G. I. S. Omonuwa & Co. – Legal Practitioners and Advisors",
    description:
      "Legal Practitioners and Advisors Dealing with public and private business relations is easier with our professional help...",
  });
});

// router.get("/our-attorneys", (req, res) => {
//   res.render("our-attorneys", {
//     layout: "./layouts/sub-layout",
//     title: "Our Attorneys",
//   });
// });

const simplePages = [
  {
    path: "/our-firm",
    title: "Our Firm",
    layout: "./layouts/sub-layout",
  },
  {
    path: "/contact-us",
    title: "Contact Us",
    layout: "./layouts/sub-layout",
  },
  {
    path: "/our-attorneys",
    title: "Our Attorneys",
    layout: "./layouts/sub-layout",
  },
  { path: "/news", title: "News", layout: "./layouts/sub-layout" },
  {
    path: "/areas-of-practice",
    title: "Areas of Practice",
    layout: "./layouts/sub-layout",
  },
  { path: "/gallery", title: "Our Gallery", layout: "./layouts/sub-layout" },
  {
    path: "/services/employment-law",
    title: "Employment Law",
    layout: "./layouts/service-layout",
  },
  {
    path: "/services/global-lawyer",
    title: "Global Lawyer",
    layout: "./layouts/service-layout",
  },
  {
    path: "/services/justice-advocate",
    title: "Justice Advocate",
    layout: "./layouts/service-layout",
  },
  {
    path: "/services/right-defenders",
    title: "Right Defenders",
    layout: "./layouts/service-layout",
  },
  {
    path: "/services/road-accident-case",
    title: "Road Accident Case",
    layout: "./layouts/service-layout",
  },
];

simplePages.forEach((page) => {
  router.get(page.path, (req, res) => {
    const templateName = page.path.substring(1);
    res.render(templateName, {
      layout: page.layout,
      title: page.title,
    });
  });
});

// const servicePages = [
//   { path: "/services/employment-law", title: "Employment Law" },
// ];

module.exports = router;
