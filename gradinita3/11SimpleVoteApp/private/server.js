const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const authController = require("../controllers/authController");
const pollController = require("../controllers/pollController");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

// Authentication routes
app.post("/api/v1/signup", authController.signup);
app.post("/api/v1/login", authController.login);

// Poll routes
app.post("/api/v1/submit-vote", pollController.submitVote);
app.get("/api/v1/poll-results", pollController.getPollResults);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
