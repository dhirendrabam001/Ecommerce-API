const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
    trim: true,
  },
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  items: [cartItemSchema],
});

// const cartItemModel = mongoose.model("carditems", cartItemSchema);
const cartModel = mongoose.model("cartmodel", cartSchema);

module.exports = { cartModel };
