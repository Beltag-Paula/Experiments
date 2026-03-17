const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 8000;

const db = new sqlite3.Database("botKeyPhrases.db", (err) => {
  if (err) console.error(`Error opening db ${err.message}`);
  else console.log(`Db connected sucessfully`);
});

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS phrases (id INTEGER PRIMARY KEY AUTOINCREMENT, userKey TEXT, botPhrase TEXT)",
  );
});

app.use(express.json());
app.use(express.static("public"));

//two posts will be needed, one to retrieve the keyPhrase from user so it can match with the bot's for reply
//the second post is for user to add new keys and new phrases

app.post("/api/v1/addPhrase", (request, response) => {
  const { userKey, botPhrase } = request.body;

  db.run(
    "INSERT INTO phrases (userKey, botPhrase) VALUES (?, ?)",
    [userKey, botPhrase],
    (err) => {
      if (err) {
        return response.status(500).json({
          message: `Error adding key and phrase into db ${err.message}`,
        });
      }

      response.json({
        message: `Key and phrase added sucessfully`,
        userKey,
        botPhrase,
      });
    },
  );
});

app.post("/api/v1/chat", (request, response) => {
  const userInput = request.body.userInput;

  if (!userInput) {
    return response.status(400).json({ message: "Invalid userInput" });
  }

  db.get(
    "SELECT botPhrase FROM phrases WHERE userKey = ?",
    [userInput],
    (err, row) => {
      if (err) {
          return response.status(500).json({ message: `Database error` });
      }

      if (row) {
        console.log("Found:", row.botPhrase);
        response.status(200).json({ botPhrase: row.botPhrase });
      } else {
        response.status(404).json({ message: "No matching phrase found" });
      }
    },
  );
});


app.get("/api/v1/phrases", (request,response)=>{
    db.all("SELECT * FROM phrases",
        [],
        (err,rows)=>{
            if(err){
                return response.status(500).json({ message: `Database error` });
            }

            if(rows.length === 0){
                return response.status(404).json({message: "Empty database"})
            }
            else{
                        response
                          .status(200)
                          .json({rows});
            }
        }
    );
})
app.listen(PORT, () => {
  console.log(`Server is servering at: localhost:${PORT}`);
});
