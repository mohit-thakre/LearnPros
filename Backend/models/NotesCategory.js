const mongoose = require("mongoose");

const notesCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notes",
    },
  ],
});

module.exports = mongoose.model("NotesCategory", notesCategorySchema);
