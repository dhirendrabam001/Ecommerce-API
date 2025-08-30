const express = require("express");
const Router = express.Router();
const { addToCart } = require("../controllers/cartController");

Router.post("/addcart", addToCart);

module.exports = Router;
