const {db} = require("../database/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { request, response } = require("express");

const SECRET_KEY = process.env.JWT_SECRET || "humanitydoomed666";

exports.signup = async (request, response) =>{
    const {username, password} = request.body;

    if(!username || !username){
        return response.status(400).json({message: "Username & password are required"});
    }

    if(password.length<8){
        return response.status(400).json({message: "Password must be at least 8 characters long"});
    }

    try{
        const hashedPassword = await bcrypt.hash(password,10);

        db.run(
          "INSERT INTO users (role, username, password) VALUES ('user',?,?)",
          [username, hashedPassword],
          function (err) {
            if (err) {
              return response
                .status(409)
                .json({ message: "Username already taken" });
            }
            response
              .status(200)
              .json({ message: "User registered sucesfully" });
          },
        );
    }
    catch(err){console.error("Signup error ",err.message); return response.status(500).json({message: "Internal server error"});}
}

exports.login = async (request,response)=>{
    const {username, password } = request.body;

    const genericError = "Invalid username or password";

    db.get(
        "SELECT * FROM users WHERE username = ?",
        [username],
        async (err, user) =>{
            if(err){return response.status(500).json({message:"Server error"})}
        

        if(!user){
            return response.status(401).json({message:genericError})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){return response.status(401).json({message:genericError})}

        const token = jwt.sign({id: user.id, role:user.role}, SECRET_KEY,{expiresIn:"1h",algorithm:"HS256"})

        response.status(200).json({
            message:"Login sucessfull",
            token,
            role:user.role
        })
    }
    )
}