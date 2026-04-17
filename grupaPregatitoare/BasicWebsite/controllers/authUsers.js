const { db } = require("../database/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const SECRET_KEY = process.env.JWT_SECRET || "tutulala_tarla_parla_12345";

exports.signup = async (request, response) => {
  const { username, password } = request.body;

  if (!username || !password) {
    return response
      .status(400)
      .json({ message: "Username & password are required" });
  }

  if (password.length < 8) {
    return response
      .status(400)
      .json({ message: "Password must be at least 8 characters long" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      "INSERT INTO users (role, username, password) VALUES ('normie', ?, ?)",
      [username, hashedPassword],
      function (err) {
        if (err) {
          return response
            .status(409)
            .json({ message: "Username already taken" });
        }
        response.status(200).json({ message: "User registered sucessfully" });
      },
    );
  } catch (err) {
    console.error("Sign up error ", err);
    return response.status(500).json({ message: "Internal server error " });
  }
};

exports.login = async (request, response) => {
  const { username, password } = request.body;

  const genericError = "Invalid username or password";

  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, user) => {
      if (err) {
        return response.status(500).json({ message: "Server error" });
      }

      // --- CRITICAL CHECK: Does the user even exist? ---
      if (!user) {
        return response.status(401).json({ message: genericError });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return response.status(401).json({ message: genericError });
      }

      const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, {
        expiresIn: "1h",
        algorithm: "HS256",
      });

      response.status(200).json({
        message: "Login successful",
        token,
        role: user.role,
      });
    },
  );
};
