// userGetAllOrders
// userGetOrderDetails
// userUpdatePassword
// userPlaceOrder
// userCancelOrder
const asyncHanlder = require("express-async-handler")
const Order = require("../models/Order")

exports.userGetAllOrders = asyncHanlder(async (req, res) => {
    const result = await Order
        .find({ user: req.params.id })
        .sort({ createdAt: -1 })
        .populate("products.product")
    res.json({ message: "Order Fetch Success", result })
})
exports.userGetOrderDetails = asyncHanlder(async (req, res) => {
    const result = await Order.findById(req.params.id)
    res.json({ message: "Order Fetch Success", result })
})
exports.userUpdatePassword = asyncHanlder(async (req, res) => {
    res.json({ message: "Password Update Success" })
})
exports.userPlaceOrder = asyncHanlder(async (req, res) => {
    await Order.create(req.body)
    res.json({ message: "Order Place Success" })
})
exports.userCancelOrder = asyncHanlder(async (req, res) => {
    await Order.findByIdAndUpdate(req.params.id, { status: "cancel" })
    res.json({ message: "Order cancel Success" })
})