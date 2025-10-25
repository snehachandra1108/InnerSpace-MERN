import React, { useState } from "react";
import { updateJournal } from "../services/journalService";

const EditJournalForm = ({ journal, onUpdate, onCancel }) => {
  const [mood, setMood] = useState(journal.mood);
  const [stressLevel, setStressLevel] = useState(journal.stressLevel);
  const [note, setNote] = useState(journal.note);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mood || !stressLevel) {
      alert("Mood and Stress Level are required!");
      return;
    }

    try {
      await updateJournal(journal._id, {
        mood,
        stressLevel: Number(stressLevel),
        note,
      });

      onUpdate(); // refresh journal list
      onCancel(); // close edit form
    } catch (err) {
      console.error("Error updating journal:", err.response?.data || err);
      alert("Error updating journal");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
      <h3>Edit Journal</h3>

      <div>
        <label>Mood: </label>
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">Select Mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Anxious">Anxious</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Angry">Angry</option>
          <option value="Neutral">Neutral</option>
        </select>
      </div>

      <div>
        <label>Stress Level (1-10): </label>
        <input
          type="number"
          min="1"
          max="10"
          value={stressLevel}
          onChange={(e) => setStressLevel(e.target.value)}
        />
      </div>

      <div>
        <label>Note: </label>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} />
      </div>

      <button type="submit">Update</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>Cancel</button>
    </form>
  );
};

export default EditJournalForm;
