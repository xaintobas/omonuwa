const express = require("express");
const router = express.Router();
const app = express();

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

  // BLOG ROUTE

  { path: "/news", title: "News", layout: "./layouts/sub-layout" },

  {
    path: "/blog/beyond-the-courtroom-the-strategic-advantage",
    title:
      "Beyond the Courtroom: The Strategic Advantage of Alternative Dispute Resolution (ADR) in Nigeria",
    layout: "./layouts/blog-layout",
  },

  {
    path: "/blog/how-strong-corporate-governance-builds-resilient-businesses",
    title:
      "How Strong Corporate Governance Builds Resilient Businesses in Nigeria",
    layout: "./layouts/blog-layout",
  },

  {
    path: "/blog/navigating-the-nigerian-investment-landscape",
    title:
      "Navigating the Nigerian Investment Landscape: Key Legal Considerations for Foreign Investors",
    layout: "./layouts/blog-layout",
  },

  {
    path: "/blog/the-bedrock-of-investment-upholding-the-sanctity-of-contracts",
    title:
      "The Bedrock of Investment: Upholding the Sanctity of Contracts in Nigeria's Energy Sector",
    layout: "./layouts/blog-layout",
  },

  {
    path: "/blog/the-critical-role-of-due-diligence-in-nigerian-real-rstate",
    title:
      "The Critical Role of Due Diligence in Nigerian Real Estate Transactions",
    layout: "./layouts/blog-layout",
  },

  {
    path: "/blog/your-most-valuable-asset-why-intellectual-property",
    title:
      "Your Most Valuable Asset: Why Intellectual Property Protection is Non-Negotiable for Nigerian Businesses",
    layout: "./layouts/blog-layout",
  },

  // TEAM MEMBER ROUTES.

  { path: "/team", title: "TEAM", layout: "./layouts/sub-layout" },

  {
    path: "/team/omoruyi-a-omonuwa",
    title: "Omoruyi A. Omonuwa, SAN",
    subTitle: "Principal Partner & Senior Advocate of Nigeria",
    layout: "./layouts/team-layout",
  },

  {
    path: "/team/amina-bello",
    title: "Amina Bello",
    subTitle: "Senior Associate",
    layout: "./layouts/team-layout",
  },

  {
    path: "/team/chinedu-okoro",
    title: "Chinedu Okoro",
    subTitle: "Associate",
    layout: "./layouts/team-layout",
  },

  {
    path: "/team/dr-ifeoma-okeke",
    title: "Dr. (Mrs.) Ifeoma Okeke",
    subTitle: "Of Counsel",
    layout: "./layouts/team-layout",
  },

  // SERVICES ROUTE

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

// CONTACT ROUTE
app.post("/contact-us", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Save to database
  const sql =
    "INSERT INTO contacts (firstName, lastName, email, phone, message) VALUES (?, ?, ?, ?,  ?)";
  db.query(sql, [firstName, lastName, email, phone, message], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.send("Failed to save message.");
    }

    // Send email to Gmail
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email error:", error);
        return res.send("Message saved, but email failed.");
      }
      res.render("contact", { success: true });
      // res.send("Thank you! Your message has been sent and saved.");
    });
  });
});

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
