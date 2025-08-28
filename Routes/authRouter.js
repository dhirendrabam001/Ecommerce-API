const express = require("express");
const Router = express.Router();
const {registerRequest, loginRequest} = require("../controllers/authControllers");

Router.post("/register", registerRequest);
Router.post("/login", loginRequest);



module.exports = Router;