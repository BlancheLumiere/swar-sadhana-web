require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoUri = process.env.MONGO_URI;
if (mongoUri) {
  mongoose
    .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err.message));
} else {
  console.warn("MONGO_URI is not set. Enquiries will not be stored in MongoDB.");
}

const enquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
  },
  { timestamps: true }
);

const Enquiry = mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);

// Email transport
let transporter = null;
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailTo = process.env.CONTACT_RECIPIENT || process.env.EMAIL_USER;

if (emailUser && emailPass) {
  transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
} else {
  console.warn(
    "EMAIL_USER or EMAIL_PASS not set. Enquiries will not be emailed until these are configured."
  );
}

// Serve static assets from React client build in production
const clientBuildPath = path.join(__dirname, "../client/build");
if (process.env.NODE_ENV === "production" || process.env.SERVE_CLIENT === "true") {
  app.use(express.static(clientBuildPath));
}

app.get("/", (req, res) => {
  if (process.env.NODE_ENV === "production" || process.env.SERVE_CLIENT === "true") {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  } else {
    res.send("Swar Sadhana API is running");
  }
});

app.post("/api/enquiry", async (req, res) => {
  const { name, email, phone, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    // Store in MongoDB if connected
    if (mongoUri) {
      await Enquiry.create({ name, email, phone, message });
    }

    // Send email if transport configured
    if (transporter && emailTo) {
      await transporter.sendMail({
        from: `"Swar Sadhana Website" <${emailUser}>`,
        to: emailTo,
        subject: "New Swar Sadhana Enquiry",
        text: `
New enquiry from Swar Sadhana website:

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}

Message:
${message}
        `.trim(),
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Error handling enquiry:", error.message);
    res.status(500).json({ error: "Failed to process enquiry." });
  }
});
// Wildcard route to handle React client-side routing in production
app.get("*", (req, res) => {
  if (process.env.NODE_ENV === "production" || process.env.SERVE_CLIENT === "true") {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  } else {
    res.status(404).json({ error: "Endpoint not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Swar Sadhana server listening on port ${PORT}`);
});

