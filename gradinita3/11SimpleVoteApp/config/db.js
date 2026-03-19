const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const bcrypt = require("bcryptjs");

const dbPath = path.join(__dirname, "../private/userDB.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Database error:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
    initializeDatabase();
  }
});

function initializeDatabase() {
  db.serialize(() => {
    // Create Users Table
    db.run(
      `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'user'
      )
      `,
      (err) => {
        if (err) console.error("Error creating users table:", err.message);
      },
    );

    // Dynamically generate bcrypt hash for admin password
    const adminPlainPassword = "1234";
    const adminPasswordHash = bcrypt.hashSync(adminPlainPassword, 10);

    // Ensure admin exists
    db.run(
      `INSERT OR IGNORE INTO users (id, username, password, role) VALUES (?, ?, ?, ?)`,
      [1, "darwin@admin", adminPasswordHash, "admin"],
      (err) => {
        if (err) console.error("Error inserting admin:", err.message);
      },
    );

    // Create Polls Table
    db.run(
      `
      CREATE TABLE IF NOT EXISTS polls (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        left_column_votes INTEGER DEFAULT 0,
        right_column_votes INTEGER DEFAULT 0
      )
      `,
      (err) => {
        if (err) console.error("Error creating polls table:", err.message);
      },
    );

    // Ensure at least one poll exists
    db.run(
      `INSERT OR IGNORE INTO polls (id, left_column_votes, right_column_votes) VALUES (?, ?, ?)`,
      [1, 0, 0],
      (err) => {
        if (err) console.error("Error inserting initial poll:", err.message);
      },
    );
  });

  return db;
}

module.exports = { db };
