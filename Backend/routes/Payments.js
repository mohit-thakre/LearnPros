const express = require("express")
const router = express.Router()
const { createOrder, verifyPayment } = require("../controllers/payments") // Ensure the path is correct
const { auth, isStudent } = require("../middleware/auth")

// Define routes
router.post("/create-order", auth, isStudent, createOrder)
router.post("/verify-payment", auth, isStudent, verifyPayment)

module.exports = router
