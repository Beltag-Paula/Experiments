const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const bcrypt = require("bcryptjs");

const dbPath = path.join(__dirname, "myDatabase.db");

const db = new sqlite3.Database(dbPath, (err)=>{
    if(err){console.error("Database error ",err.message)}
    else{console.log("Connected to the database")}
    initialize_myDatabase();
})

function initialize_myDatabase(){
    db.serialize(()=>{
        db.run(
            `
            CREATE TABLE IF NOT EXISTS users
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                role TEXT DEFAULT 'user',
                username TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL
            )
            `,
            (err) =>{if(err) console.log("Error initializing the users table")}
        );


        //make sure there is an admin!
        const adminUsername = "Darwin";
        const adminPassword = "12345678";
        const adminPasswordHash = bcrypt.hashSync(adminPassword,10);

        db.run(
            `INSERT OR IGNORE INTO users (id, role, username, password) VALUES (?,?,?,?)`,
            [1,"admin", adminUsername, adminPasswordHash],
            (err)=>{if(err){console.error("Error inserting admin ",err.message)}}
        )
    })

    return db;
}

module.exports = {db};