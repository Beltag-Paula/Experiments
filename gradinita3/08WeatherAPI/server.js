const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;

const db = new sqlite3.Database("database.db", (err) => {
  if (err) {
    console.error("Error opening the fucking database", +err.message);
  } else {
    console.log("The fucking database has connected sucessfully");
  }
});

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS weatherGrades (id INTEGER PRIMARY KEY, celsius INTEGER, fahrenheit REAL, kelvin REAL)",
  );
});

app.use(express.json());
app.use(express.static("public"));

app.post("/convert", (request, response) => {
  const gradeC = Number(request.body.weatherC);

  if (isNaN(gradeC)) {
    return response.status(400).json({ message: "Invalid Celsius value" });
  }

  db.get(
    "SELECT fahrenheit, kelvin FROM weatherGrades WHERE celsius = ?",
    [gradeC],
    (err, row) => {
     if(err){
        return response.status(500).json({message: "Database error "+err.message})
     }
      if (row) {
        response.json({ fahrenheit: row.fahrenheit, kelvin: row.kelvin });
      } else {
        const fahrenheit = (gradeC * (9 / 5)) + 32;
        const kelvin = gradeC + 273.15;
        db.run(
          "INSERT INTO weatherGrades (celsius, fahrenheit, kelvin) VALUES (?, ?, ?)",
          [gradeC, fahrenheit, kelvin],
          (err) => {
            if (err) {
              return response
                .status(500)
                .json({ message: `Error adding values into database ${err.message}` });
            }

            response.json({
              fahrenheit,
              kelvin,
            });
          },
        );
      }
    },
  );
});

app.listen(PORT, () => {
  console.log(`Server is servering on port ${PORT}`);
});
