const mongoose = require("mongoose");
const Resume = new mongoose.Schema({
  pdf: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Resume", Resume);
