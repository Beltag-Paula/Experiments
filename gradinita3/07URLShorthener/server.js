const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const { nanoid } = require("nanoid");

const app = express();
const PORT = 8000;

//this to initialize sql lite
const db = new sqlite3.Database("database.db", (err) => {
  if (err) {
    console.error("Error opening database ", err.message);
  } else {
    console.log("The db was connected SUCCESFULLY");
  }
});

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS urls (id INTEGER PRIMARY KEY, originalURL TEXT, shortURL TEXT)",
  );
});

app.use(express.json());
app.use(express.static("public"));

//i need to first get the url from the input text (req body)
//check if the url is valid?? and exists in the db and we give back the shorter version to user
//if not, than we add it with an unique id, we do some magic to short the url and give back to user

//first is post than is get (basically redirect with with the calculated redirected shorted url)

app.post("/short", (request, response) => {
  let { url } = request.body;

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  db.get(
    "SELECT shortURL FROM urls WHERE originalURL = ?",
    [url],
    (err, row) => {
      if (row) {
        response.json({
          shortURL: `http://localhost:${PORT}/${row.shortURL}`,
        });
      } else {
        const shortURL = nanoid(7);

        db.run(
          `INSERT INTO urls (originalURL, shortURL) VALUES (?, ?)`,
          [url, shortURL],
          (err) => {
            if (err) {
              return response
                .status(400)
                .json({ message: `Database error: ${err}` });
            }

            response.json({
              shortURL: `http://localhost:${PORT}/${shortURL}`,
            });
          },
        );
      }
    },
  );
});

app.get("/:shortURL", (request, response) => {
  const { shortURL } = request.params;

  db.get(
    "SELECT originalURL FROM urls WHERE shortURL = ?",
    [shortURL],
    (err, row) => {
      if (row) {
        console.log(row);
        response.redirect(row.originalURL);
      } else {
        response.status(404).json({ message: "URL not found in db" });
      }
    },
  );
});

app.listen(PORT, () => {
  console.log(`Server runs on localhost:${PORT}`);
});
