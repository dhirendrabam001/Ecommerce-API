const express = require("express");
const Router = express.Router();
const {registerRequest} = require("../controllers/authControllers");

Router.post("/register", registerRequest);


module.exports = Router;