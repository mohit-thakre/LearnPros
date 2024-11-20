const Razorpay = require("razorpay")
const crypto = require("crypto")
require("dotenv").config()
const Resume = require("../models/Resume")
const User = require("../models/User")
const mongoose = require("mongoose")

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
})

// Controller to create an order
exports.createOrder = async (req, res) => {
  try {
    const userId = req.user.id
    console.log(userId, "user id -")
    const { resumeId } = req.body

    // Fetch the resume details
    const resume = await Resume.findById(resumeId)
    if (!resume) {
      return res.status(404).json({ error: "Resume not found" })
    }

    const user = await User.findById(userId)
    const resumeID = new mongoose.Types.ObjectId(resume._id)
    console.log(resumeID, "asdfsd")
    console.log(user.docx.includes(resumeID), "asdfsadf")

    if (user.docx.includes(resume._id)) {
      return res.status(400).json({
        success: false,
        message: "docx already purchased",
      })
    }

    // Create Razorpay order
    const options = {
      amount: resume.price * 100,
      currency: "INR",
      receipt: `order_rcptid_${resumeId}`,
    }

    const order = await razorpay.orders.create(options)

    res.status(201).json({
      success: true,
      orderId: order.id,
      amount: options.amount,
      currency: options.currency,
      key: process.env.RAZORPAY_KEY,
    })
  } catch (error) {
    console.error("Error creating order:", error)
    res.status(500).json({ error: "Failed to create order" })
  }
}

// Controller to verify payment
exports.verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      resumeId,
    } = req.body

    const userId = req.user.id

    // Create a signature from the order_id and payment_id
    const body = razorpay_order_id + "|" + razorpay_payment_id

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body)
      .digest("hex")

    const resume = await Resume.findById(resumeId)
    if (!resume) {
      return res
        .status(404)
        .json({ success: false, message: "Resume not found" })
    }
    const user = await User.findById(userId)

    // Push the userId to the user array if not already present
    if (!user.docx.includes(resume._id)) {
      user.docx.push(resume._id)
      await user.save()
    } else {
      return res.status(400).json({
        success: false,
        message: "docx already purchased",
      })
    }

    // Verify the signature
    if (expectedSignature !== razorpay_signature) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid payment signature" })
    }

    // Fetch the resume details

    res.status(200).json({
      success: true,
      message: "Payment verified successfully and purchase recorded",
    })
  } catch (error) {
    console.error("Error verifying payment:", error)
    res.status(500).json({ error: "Payment verification failed" })
  }
}
