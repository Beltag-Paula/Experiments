require("dotenv").config();

const express = require('express');
const path = require("path");
const cors = require("cors");


//the controllers go here (the authUsers and authMiddleware)
const authUsers = require("./controllers/authUsers.js");
const {
  authenticateToken,
  isAdmin,
} = require("./controllers/authMiddleware.js");


const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {a
  response.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/api/v1/signup", authUsers.signup);
app.post("/api/v1/login", authUsers.login);

app.get("/api/v1/master-data", authenticateToken, isAdmin, (req, res) => {
  res.json({ secret: "The BIGCHONGUS protocol is initiated." });
});


app.listen(PORT, () =>{
    console.log("localhost: "+PORT)
})