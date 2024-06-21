const router = require("express").Router()
const authController = require("./../controllers/auth.controller")

router
    .post("/register-admin", authController.registerAdmin)
    .post("/login-admin", authController.loginAdmin)
    .post("/register-user", authController.registerUser)
    .post("/login-user", authController.loginUser)
    .post("/logout-admin", authController.logoutAdmin)

module.exports = router