const express = require("express");
const Router = express.Router();
const { addToCart } = require("../controllers/cartController");
const checkToken = require("../Middleware/Auth");

Router.post("/addcart", checkToken, addToCart);

module.exports = Router;
