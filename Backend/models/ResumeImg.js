const mongoose = require("mongoose");
const ResumeImg = new mongoose.Schema({
  image: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ResumeImg", ResumeImg);
