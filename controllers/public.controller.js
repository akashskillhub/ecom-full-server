// publicGetAllProducts
// publicGetProductDetails
const asyncHanlder = require("express-async-handler")
const Product = require("../models/Product")

exports.publicGetAllProducts = asyncHanlder(async (req, res) => {
    const result = await Product.find({ active: true })
    // const result = await Product.find()
    res.json({ message: "Product Fetch Success", result })
})
exports.publicGetProductDetails = asyncHanlder(async (req, res) => {
    const result = await Product.findById(req.params.id)
    res.json({ message: "Product Fetch Success", result })
})