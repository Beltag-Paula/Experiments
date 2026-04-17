const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const bcrypt = require("bcryptjs");

const dbPath = path.join(__dirname, "../database/BIGCHONGUS.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {console.error("Database error: ", err.message);} 
  else {console.log("Connected to da BIGCHONGUS");}
  initializeBIGCHONGUS();
});

function initializeBIGCHONGUS() {
  db.serialize(() => {
    db.run(
      `CREATE TABLE IF NOT EXISTS users 
            (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            role TEXT DEFAULT 'normie',
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
            )
      `,
      (err) =>{if(err) console.error("Error creating the users table ", err.message)}
    );


    const adminUsername = "Darwin";
    const adminPassword = "miaumiaumiau";
    const adminPasswordHash = bcrypt.hashSync(adminPassword, 10);

    db.run(
        `INSERT OR IGNORE INTO users (id, role, username, password) VALUES (?,?,?,?)`,
        [1,"mastermind",adminUsername,adminPasswordHash],
        (err)=>{if(err) console.error("Error inserting admin: ",err.message)}
    )
  });
  return db;
}

module.exports = {db};