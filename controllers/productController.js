const productModel = require("../Models/product");

const productRequest = async (req,res) => {
    try {
        
        const product = await productModel.create(req.body);
        res.status(201).json({success: true,  message: "Project has been added successfully", productInfo: product});

    } catch (error) {
        res.status(400).json({success: false, message: "Internal Server Error"});
    }
}

module.exports = {productRequest};