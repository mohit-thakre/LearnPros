const mongoose = require("mongoose");

// Define the Courses schema
const Notes = new mongoose.Schema({
  NotesName: { type: String },
  NotesDescription: { type: String },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  NotesPdf: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "NotesCategory",
  },

  createdAt: { type: Date, default: Date.now },
});

// Export the Courses model
module.exports = mongoose.model("Notes", Notes);
