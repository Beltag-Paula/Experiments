const { db } = require("../config/db");

// Helper to wrap db.run in a Promise
const runQuery = (query, params = []) =>
  new Promise((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) reject(err);
      else resolve(this); // returns context (e.g., lastID)
    });
  });

// Helper to wrap db.get in a Promise
const getQuery = (query, params = []) =>
  new Promise((resolve, reject) => {
    db.get(query, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

// Submit a vote
exports.submitVote = async (req, res) => {
  try {
    const { option } = req.body;
    const { pollId } = req.params;

    if (!["left", "right"].includes(option)) {
      return res.status(400).json({ message: "Invalid vote option" });
    }

    const column =
      option === "left" ? "left_column_votes" : "right_column_votes";

    // Only allow safe column names
    if (!["left_column_votes", "right_column_votes"].includes(column)) {
      return res.status(400).json({ message: "Invalid vote column" });
    }

    await runQuery(`UPDATE polls SET ${column} = ${column} + 1 WHERE id = ?`, [
      pollId,
    ]);

    res.json({ message: "Vote submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error submitting vote" });
  }
};

// Get poll results
exports.getPollResults = async (req, res) => {
  try {
    const { pollId } = req.params;
    const row = await getQuery("SELECT * FROM polls WHERE id = ?", [pollId]);

    if (!row) return res.status(404).json({ message: "Poll not found" });

    res.json(row);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching poll results" });
  }
};

// Create a new poll
exports.createPoll = async (req, res) => {
  try {
    const result = await runQuery(
      "INSERT INTO polls (left_column_votes, right_column_votes) VALUES (0, 0)",
    );
    res.json({ message: "Poll created successfully", pollId: result.lastID });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating poll" });
  }
};

// Update poll vote counts
exports.updatePoll = async (req, res) => {
  try {
    const { pollId } = req.params;
    const { leftVotes, rightVotes } = req.body;

    if (
      typeof leftVotes !== "number" ||
      typeof rightVotes !== "number" ||
      leftVotes < 0 ||
      rightVotes < 0
    ) {
      return res.status(400).json({ message: "Invalid vote counts" });
    }

    await runQuery(
      "UPDATE polls SET left_column_votes = ?, right_column_votes = ? WHERE id = ?",
      [leftVotes, rightVotes, pollId],
    );

    res.json({ message: "Poll updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating poll" });
  }
};

// Delete a poll
exports.deletePoll = async (req, res) => {
  try {
    const { pollId } = req.params;

    await runQuery("DELETE FROM polls WHERE id = ?", [pollId]);
    res.json({ message: "Poll deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting poll" });
  }
};
