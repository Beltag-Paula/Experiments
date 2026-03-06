const express = require("express");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "public", "myText.txt");

const app = express();
const PORT = 8000;

app.use(express.static("public"));
app.use(express.json());

app.get("/quote", (request, response) => {
    fs.readFile(filePath, "utf8", (err, data)=>{
        if(err){
            console.error(err);
            return res.status(500).json({error: "Error reading file"});
        }

        try{
            const quotes = JSON.parse(data);
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            response.json({ quote: randomQuote });
        }
        catch(err){
            console.error(err);
            response.status(500).json({err: "Something went wrong with the file"})
        }
    })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
