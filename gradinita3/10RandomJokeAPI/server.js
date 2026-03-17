const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const PORT = 8000;

const db = new sqlite3.Database("./private/myJokes.db", (err) => {
  if (err) console.error(`Error creating db ${err.message}`);
  else console.log(`DB connected sucessfully`);
});

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS jokes (id INTEGER PRIMARY KEY AUTOINCREMENT, botJoke TEXT)"
)
});

app.use(express.json());
app.use(express.static("public"));

//getAllJokes we use get
app.get("/api/v1/all", (request, response) => {
  db.all("SELECT * FROM jokes", [], (err, rows) => {
    if (err) {
      return response.status(500).json({ message: 'Database error'});
    }
    if(rows.length === 0){
        return response.status(400).json({message: "Empty database"})
    }
    else{
        return response.status(200).json({rows});
    }
  });
});

//getRandomJokes:
app.get("/api/v1/random", (request,response)=>{
  const sqlInstruction = "SELECT * FROM jokes ORDER BY RANDOM() LIMIT 1";

  db.get(sqlInstruction, [], (err, row)=>{
    if(err){
      return response.status(500).json({message: "Database error"})
        }
        else{
          return response.status(200).json(row);
        }
  })
})

//addNewJoke we use post
app.post("/api/v1/add", (request, response)=>{
    const newJoke = request.body.newPhrase;

    db.run(
        "INSERT INTO jokes (botJoke) VALUES (?)",
        [newJoke],
        (err) =>{
            if(err){
                return response.status(500).json({
                    message: `Error adding ${newJoke} into db`
                })
            }

            response.status(200).json({
                message: 'New joke was addedd sucessfully',
            })
        }
    )
})

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});
