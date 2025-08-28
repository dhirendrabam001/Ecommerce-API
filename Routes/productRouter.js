const express = require("express");
const {
  productRequest,
  getAllProduct,
  getById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const Router = express.Router();

Router.post("/add", productRequest);
Router.get("/getAll", getAllProduct);
Router.get("/findbyuser/:id", getById);
Router.put("/update/:id", updateProduct);
Router.delete("/delete/:id", deleteProduct);

module.exports = Router;
