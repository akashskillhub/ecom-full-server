const router = require("express").Router()
const adminController = require("./../controllers/admin.controller")

router
    .get("/products", adminController.getAllProducts)
    .post("/add-product", adminController.addProduct)
    .put("/update-product/:id", adminController.updateProduct)
    .delete("/delete-product/:id", adminController.deleteProduct)
    .put("/deactivate-product/:id", adminController.deactivateProduct)
    .put("/activate-product/:id", adminController.activateProduct)
    .get("/product-details/:id", adminController.getProductDetails)

    .get("/orders", adminController.getAllOrders)
    .get("/order-details/:id", adminController.getOrderDetail)
    .put("/cancel-order/:id", adminController.cancelOrder)
    .put("/update-order-status/:id", adminController.updateOrderStatus)

    .get("/users", adminController.getAllUsers)
    .get("/user-details/:id", adminController.getUserDetail)
    .put("/block-user/:id", adminController.blockUser)
    .put("/unblock-user/:id", adminController.unblockUser)
    .get("/user-orders/:id", adminController.getUserOrders)


module.exports = router