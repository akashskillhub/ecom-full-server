const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    mrp: { type: Number, required: true },
    images: { type: String, required: true },
    active: { type: Boolean, default: false },
}, { timestamps: true })

module.exports = mongoose.model("product", productSchema)