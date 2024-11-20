const mongoose = require("mongoose")
const Resume = new mongoose.Schema({
  pdf: {
    type: String,
    require: true,
  },
  price: {
    type: String,
  },
  free: {
    type: String,
    enum: ["yes", "no"],
  },
  // purchasedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  image: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Resume", Resume)
