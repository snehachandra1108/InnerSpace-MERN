const express = require("express");
const router = express.Router();
const { addJournal, getJournals, updateJournal, deleteJournal } = require("../controllers/journalController");

router.post("/", addJournal);
router.get("/", getJournals);
router.put("/:id", updateJournal);
router.delete("/:id", deleteJournal);

module.exports = router;
