require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const path = require("path");
const cors = require("cors");

const authController = require("../controllers/authController");
const pollController = require("../controllers/pollController");
const { authenticateToken, isAdmin } = require("../controllers/authMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.static(path.join(__dirname, "../", "public")));

// --- Routes ---

// Auth
app.post("/api/v1/signup", authController.signup);
app.post("/api/v1/login", authController.login);

// Polls (User)
app.get(
  "/api/v1/poll-results/:pollId",
  authenticateToken,
  pollController.getPollResults,
);
app.post(
  "/api/v1/submit-vote/:pollId",
  authenticateToken,
  pollController.submitVote,
);

// Polls (Admin)
app.post(
  "/api/v1/admin/create-poll",
  authenticateToken,
  isAdmin,
  pollController.createPoll,
);
app.put(
  "/api/v1/admin/update-poll/:pollId",
  authenticateToken,
  isAdmin,
  pollController.updatePoll,
);
app.delete(
  "/api/v1/admin/delete-poll/:pollId",
  authenticateToken,
  isAdmin,
  pollController.deletePoll,
);

// --- Global Error Handler ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
