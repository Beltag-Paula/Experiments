const { db } = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Load JWT secret from environment
const SECRET_KEY =
  process.env.JWT_SECRET || "a_very_long_random_string_123456789";

// Signup controller
exports.signup = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      "INSERT INTO users (username, password, role) VALUES (?, ?, 'user')",
      [username, hashedPassword],
      function (err) {
        if (err) {
          return res.status(409).json({ message: "Username already taken" });
        }
        res.status(201).json({ message: "User registered successfully" });
      },
    );
  } catch (err) {
    console.error("Sign up error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Login controller
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const genericError = "Invalid username or password";

  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, user) => {
      if (err) return res.status(500).json({ message: "Server error" });

      if (!user) {
        // Use a valid dummy hash to prevent timing attacks
        await bcrypt.compare(
          "dummy_password",
          "$2b$10$C6UzMDM.H6dfI/f/IKcEeOaZq0qBz4nMZgWQ8k1b1yqFq0IxDqB36",
        );
        return res.status(401).json({ message: genericError });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ message: genericError });

      const token = jwt.sign({ userId: user.id, role: user.role }, SECRET_KEY, {
        expiresIn: "1h",
        algorithm: "HS256",
      });

      res.json({ message: "Login successful", token, role: user.role });
    },
  );
};
