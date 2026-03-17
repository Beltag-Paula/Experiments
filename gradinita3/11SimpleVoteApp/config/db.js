const sqlite3 = require("sqlite3").verbose();
const dbPath = "./private/userDB.db";

function initializeDatabase() {
  let db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Connected to the SQLite database`);
    }
  });

  const userSchema = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT DEFAULT 'user'
        );
    `;

  db.run(userSchema, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`The table user is created or already exists`);
    }
  });

  const pollSchema = `
        CREATE TABLE IF NOT EXISTS polls (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            left_column_votes INTEGER DEFAULT 0,
            right_column_votes INTEGER DEFAULT 0
        );
    `;

  db.run(pollSchema, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`The table poll is created or already exists`);
    }
  });

  return db;
}

module.exports = { initializeDatabase };
