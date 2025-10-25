const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema(
  {
    mood: { type: String, required: true },
    stressLevel: { type: Number, required: true },
    note: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Journal", journalSchema);
