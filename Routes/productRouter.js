const express = require("express");
const {productRequest} = require("../controllers/productController");
const Router = express.Router();

Router.post("/add", productRequest);

module.exports = Router;