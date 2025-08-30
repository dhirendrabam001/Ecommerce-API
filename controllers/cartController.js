const { cartModel } = require("../Models/card");

const addToCart = async (req, res) => {
  try {
    const { productId, title, price, quantity } = req.body;
    console.log("data is:", req.body);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Issue" });
  }
};

module.exports = { addToCart };
