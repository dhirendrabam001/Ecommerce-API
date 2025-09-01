const { cartModel } = require("../Models/card");

const addToCart = async (req, res) => {
  try {
    const { productId, title, price, quantity } = req.body;
    if (!productId || !title || !price || !quantity) {
      return res
        .status(400)
        .json({ success: false, message: "Field are required" });
    }

    const userId = req.user._id;
    console.log("userid", userId);

    const cart = await cartModel.findById({ userId });
    console.log("cart is", cart);

    if (!cart) {
      const cart = new cartModel({ userId, items: [] });
    }

    const findIndex = cart.items.findIndex((items) => {
      return items.productId.toString() == productId;
    });
    console.log("findindex", findIndex);

    if (findIndex > -1) {
      cart.items[findIndex].quantity += quantity;
      cart.items[findIndex].price += price * quantity;
    } else {
      cart.items.push({ productId, title, price, quantity });
    }
    await cart.save();
    res
      .status(201)
      .json({ success: true, message: "Items Added to cart", cart });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Issue" });
  }
};

module.exports = { addToCart };
