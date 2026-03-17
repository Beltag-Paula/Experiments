const { initializeDatabase } = require("../config/db");
const db = initializeDatabase();

// Submit vote
exports.submitVote = (req, res) => {
  const { option } = req.body;

  if (!option || !(option === "left" || option === "right")) {
    return res.status(400).json({ message: "Invalid vote option" });
  }

  let sql;
  if (option === "left") {
    sql =
      "UPDATE polls SET left_column_votes = left_column_votes + 1 WHERE id = ?";
  } else {
    sql =
      "UPDATE polls SET right_column_votes = right_column_votes + 1 WHERE id = ?";
  }

  db.run(sql, [1], function (err) {
    if (err) {
      return res
        .status(500)
        .json({ message: err.message || "Error updating votes" });
    }
    res.json({
      message: "Vote submitted successfully",
      left_column_votes: option === "left" ? this.changes + 1 : null,
      right_column_votes: option === "right" ? this.changes + 1 : null,
    });
  });
};

// Get poll results
exports.getPollResults = (req, res) => {
  db.get("SELECT * FROM polls WHERE id = ?", [1], (err, row) => {
    if (err) {
      return res
        .status(500)
        .json({ message: err.message || "Error fetching poll results" });
    }
    if (!row) {
      return res.status(404).json({ message: "Poll not found" });
    }
    res.json({
      left_column_votes: row.left_column_votes,
      right_column_votes: row.right_column_votes,
    });
  });
};
