const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

}, {strict: false});
// Strict are all user data can be full fill

const productModel = mongoose.model("productinfo", productSchema);

module.exports = productModel;