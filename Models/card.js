const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    productId: {
        typeof: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
        trim: true
    },
    title: {type: String, required: true, trim: true},
    price: {type: Number, required: true, trim: true},
    quantity: {type: Number, required: true, trim: true},

});

const cartSchema = new mongoose.Schema({
    userId: {
        typeof: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    items: [cartItemSchema]
});


// const cartItemModel = mongoose.model("carditems", cartItemSchema);
const cartModel = mongoose.model("cartmodel", cartSchema);

module.exports = {cartModel};