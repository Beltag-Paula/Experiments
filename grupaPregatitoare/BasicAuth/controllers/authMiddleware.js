require("dotenv").config();

const { response } = require("express");
const { request } = require("http");
const jwt = require("jsonwebtoken");
const util = require("util");
const verifyToken = util.promisify(jwt.verify);

const SECRET_KEY = process.env.JWT_SECRET;

if(!SECRET_KEY){throw new Error("JWT_SECRET environment variable is not defined")}

exports.authenticateToken = async(request, response, next) =>{
    try{
        const authHeader = request.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if(!token){
            return response.status(401).json({
                success:false,
                message: "Authentification required"
            })
        }

        const decoded = await verifyToken(token, SECRET_KEY);
        request.user = decoded;
        next();
    }
    catch(err){
        return response.status(403).json({
            success: false,
            message: "Invalid or expired token"
        })
    }
}


exports.isAdmin = (request, response, next) =>{
    if(request.user && request.user.role === "admin") next();
    else{
        return response.status(403).json({
            success: false,
            message: "Access denied: Admin only"
        })
    }
}