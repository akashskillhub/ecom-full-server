const asyncHanlder = require("express-async-handler")
const Product = require("../models/Product")
const { upload } = require("../utils/upload")
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})
exports.getAllProducts = asyncHanlder(async (req, res) => {
    const result = await Product.find()
    res.json({ message: "Product Fetch Success", result })
})
exports.addProduct = asyncHanlder(async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "upload error" })
        }

        const x = await cloudinary.uploader.upload(req.file.path)
        console.log(x)
        const result = await Product.create({ ...req.body, images: x.secure_url })
        res.json({ message: "Product Add Success", result })
    })
})
exports.updateProduct = asyncHanlder(async (req, res) => {
    res.json({ message: "Product Update Success" })
})
exports.deleteProduct = asyncHanlder(async (req, res) => {

    const result = await Product.findById(req.params.id)

    const str = result.images.split("/")
    const img = str[str.length - 1].split(".")[0]
    await cloudinary.uploader.destroy(img)
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: "Product Delete Success" })
})
exports.deactivateProduct = asyncHanlder(async (req, res) => {
    res.json({ message: "Product Deactivate Success" })
})
exports.activateProduct = asyncHanlder(async (req, res) => {
    res.json({ message: "Product Activate Success" })
})
exports.getProductDetails = asyncHanlder(async (req, res) => {
    res.json({ message: "Product Detail Fetch Success" })
})

// order
exports.getAllOrders = asyncHanlder(async (req, res) => {
    res.json({ message: "Order Fetch Success" })
})
exports.getOrderDetail = asyncHanlder(async (req, res) => {
    res.json({ message: "Order Detail Fetch Success" })
})
exports.cancelOrder = asyncHanlder(async (req, res) => {
    res.json({ message: "Order Cancel Success" })
})
exports.updateOrderStatus = asyncHanlder(async (req, res) => {
    res.json({ message: "Order Status Update Success" })
})

// user
exports.getAllUsers = asyncHanlder(async (req, res) => {
    res.json({ message: "Users fetch Success" })
})
exports.getUserDetail = asyncHanlder(async (req, res) => {
    res.json({ message: "Users Detail fetch Success" })
})
exports.blockUser = asyncHanlder(async (req, res) => {
    res.json({ message: "Users Block Success" })
})
exports.unblockUser = asyncHanlder(async (req, res) => {
    res.json({ message: "Users Un-Block Success" })
})
exports.getUserOrders = asyncHanlder(async (req, res) => {
    res.json({ message: "Users Order Fetch Success" })
})
