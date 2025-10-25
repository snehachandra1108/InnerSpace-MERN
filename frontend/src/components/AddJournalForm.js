import React, { useState } from "react";
import { createJournal } from "../services/journalService";

const AddJournalForm = ({ onJournalAdded }) => {
  const [mood, setMood] = useState("");
  const [stressLevel, setStressLevel] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJournal({
        mood,
        stressLevel: Number(stressLevel),
        note,
      });
      setMood("");
      setStressLevel("");
      setNote("");
      onJournalAdded();
    } catch (err) {
      console.error("Error adding journal:", err);
      alert("Error adding journal");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Mood"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Stress Level"
        value={stressLevel}
        onChange={(e) => setStressLevel(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit">Add Journal</button>
    </form>
  );
};

export default AddJournalForm;
