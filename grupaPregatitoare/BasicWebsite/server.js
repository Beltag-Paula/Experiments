// 1. MUST BE FIRST: Load environment variables
require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

// 2. Import your controllers (They will now see the process.env variables)
const authUsers = require("./controllers/authUsers.js");
const {
  authenticateToken,
  isAdmin,
} = require("./controllers/authMiddleware.js");

const app = express();
const PORT = process.env.PORT || 8000;

// 3. Middleware
app.use(cors());
app.use(express.json());

// 4. Static Files
// If server.js is in the root 'BasicWebsite' folder:
app.use(express.static(path.join(__dirname, "public")));

// 5. API Routes
app.post("/api/v1/signup", authUsers.signup);
app.post("/api/v1/login", authUsers.login);

// 6. Optional: Protected Route Example
// This allows you to test if the token actually works
app.get("/api/v1/master-data", authenticateToken, isAdmin, (req, res) => {
  res.json({ secret: "The BIGCHONGUS protocol is initiated." });
});

// 7. Page Routing
// Explicitly serve index.html for the root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 8. START THE SYSTEM
app.listen(PORT, () => {
  console.log(`
    [SYSTEM ONLINE]
    URL: http://localhost:${PORT}
    DB: BIGCHONGUS READY
    `);
});
