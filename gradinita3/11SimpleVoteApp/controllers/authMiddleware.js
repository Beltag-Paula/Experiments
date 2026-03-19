const jwt = require("jsonwebtoken");

// Use environment variable for secret, throw error if missing
const SECRET_KEY = process.env.JWT_SECRET;
if (!SECRET_KEY) {
  throw new Error("JWT_SECRET environment variable is not defined");
}

// Middleware to authenticate JWT token
exports.authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Authentication required" });
    }

    // Verify token asynchronously
    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) reject(err);
        else resolve(user);
      });
    });

    req.user = decoded; // Attach decoded payload
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

// Middleware to check admin role
exports.isAdmin = (req, res, next) => {
  if (req.user?.role === "admin") {
    next();
  } else {
    return res
      .status(403)
      .json({ success: false, message: "Access denied: Admins only" });
  }
};
