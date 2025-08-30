const express = require("express");
const checkToken = require("../Middleware/Auth");
const {
  productRequest,
  getAllProduct,
  getById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const Router = express.Router();

Router.post("/add", checkToken, productRequest);
Router.get("/getAll", checkToken, getAllProduct);
Router.get("/findbyuser/:id", checkToken, getById);
Router.put("/update/:id", checkToken, updateProduct);
Router.delete("/delete/:id", checkToken, deleteProduct);

module.exports = Router;
