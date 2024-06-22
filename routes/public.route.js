const router = require("express").Router()
const publicController = require("./../controllers/public.controller")

router
    .get("/products", publicController.publicGetAllProducts)
    .get("/product/:id", publicController.publicGetProductDetails)

module.exports = router