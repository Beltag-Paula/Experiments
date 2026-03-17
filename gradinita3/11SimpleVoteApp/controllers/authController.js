const { initializeDatabase } = require("../config/db");
const db = initializeDatabase();

// Register new user
exports.signup = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  db.run(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password],
    function (err) {
      if (err) {
        return res
          .status(409)
          .json({ message: err.message || "Username already exists" });
      }
      res.json({ message: "User registered successfully" });
    },
  );
};

// Login user
exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, row) => {
      if (err) {
        return res
          .status(500)
          .json({ message: err.message || "Internal server error" });
      }
      if (!row) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      // Generate JWT or set session here
      res.json({
        message: "Login successful",
        user: { id: row.id, username: row.username },
      });
    },
  );
};
