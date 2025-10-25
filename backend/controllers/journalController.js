const Journal = require("../models/journalModel");

const addJournal = async (req, res) => {
  try {
    const { mood, stressLevel, note } = req.body;
    if (!mood || stressLevel === undefined) {
      return res.status(400).json({ message: "Mood and stress level are required" });
    }
    const newJournal = await Journal.create({ mood, stressLevel, note });
    res.status(201).json({ message: "Journal added successfully", data: newJournal });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const getJournals = async (req, res) => {
  try {
    const journals = await Journal.find().sort({ createdAt: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const updateJournal = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Journal.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const deleteJournal = async (req, res) => {
  try {
    const { id } = req.params;
    await Journal.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { addJournal, getJournals, updateJournal, deleteJournal };
