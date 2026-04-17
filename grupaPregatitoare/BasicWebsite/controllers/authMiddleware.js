require("dotenv").config();

const jwt = require("jsonwebtoken"); // Changed jqt to jwt for clarity

const SECRET_KEY = process.env.JWT_SECRET;

if (!SECRET_KEY) {
  throw new Error("JWT_SECRET environment variable is not defined");
}

exports.authenticateToken = async (request, response, next) => {
  try {
    const authHeader = request.headers["authorization"];
    // Ensure header exists before splitting to avoid undefined errors
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return response.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    // Promisifying jwt.verify is good, but you can also use jwt.verify()
    // synchronously if you don't mind the slight blocking, or use util.promisify
    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) reject(err);
        else resolve(user);
      });
    });

    request.user = decoded;
    next();
  } catch (err) {
    return response.status(403).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

exports.isAdmin = (request, response, next) => {
  // Check if user exists (set by previous middleware) and has the role
  if (request.user && request.user.role === "mastermind") {
    next();
  } else {
    return response.status(403).json({
      success: false,
      message: "Access denied: Masterminds only",
    });
  }
};
