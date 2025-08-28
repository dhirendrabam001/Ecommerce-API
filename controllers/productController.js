const productModel = require("../Models/product");
const { registerModel } = require("../Models/user");

const productRequest = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Project has been added successfully",
      productInfo: product,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
};

// Get all product
const getAllProduct = async (req, res) => {
  try {
    const productInfo = await productModel.find();
    if (!productInfo) {
      return res
        .status(400)
        .json({ success: false, message: "Product does not found" });
    }
    res.status(200).json({
      success: true,
      message: "The all product are fetched",
      product: productInfo,
    });
  } catch (error) {
    res.status(500).josn({ success: false, message: "Internal Server Issues" });
  }
};

// Get Product by id
const getById = async (req, res) => {
  try {
    const id = req.params.id;

    const validUser = await productModel.findById(id);

    if (!validUser) {
      return res
        .status(400)
        .json({ success: false, message: "Id does not matched" });
    }
    res
      .status(200)
      .json({ success: true, message: "User find by id", ID: validUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Issues" });
  }
};

// Updated by id
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, price, category, ram, rom } = req.body;

    const updateData = await productModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        price,
        category,
        ram,
        rom,
      },
      { new: true }
    );

    if (!updateData) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Updated data" });
    }
    res.status(200).json({
      success: true,
      message: "Product has been updated successfully",
      data: updateData,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Issue" });
  }
};

// delete product by id
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteId = await productModel.findByIdAndDelete(id);
    if (!deleteId) {
      return res
        .status(400)
        .json({ success: false, message: "Id does not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Data has been deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Issue" });
  }
};
module.exports = {
  productRequest,
  getAllProduct,
  getById,
  updateProduct,
  deleteProduct,
};
