const mongoose = require("mongoose");

contactusSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Contactus", contactusSchema);
