import React, { useEffect, useState } from "react";
import { getJournals, deleteJournal, createJournal } from "../services/journalService";
import AddJournalForm from "./AddJournalForm";

const JournalList = () => {
  const [journals, setJournals] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editMood, setEditMood] = useState("");
  const [editStress, setEditStress] = useState("");
  const [editNote, setEditNote] = useState("");

  const fetchJournals = async () => {
    const res = await getJournals();
    setJournals(res.data);
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  const handleDelete = async (id) => {
    await deleteJournal(id);
    fetchJournals();
  };

  const handleEdit = (journal) => {
    setEditingId(journal._id);
    setEditMood(journal.mood);
    setEditStress(journal.stressLevel);
    setEditNote(journal.note);
  };

  const handleUpdate = async (id) => {
    await createJournal({
      mood: editMood,
      stressLevel: Number(editStress),
      note: editNote,
    });
    setEditingId(null);
    fetchJournals();
  };

  return (
    <div>
      <AddJournalForm onJournalAdded={fetchJournals} />

      {journals.map((j) => (
        <div
          key={j._id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {editingId === j._id ? (
            <div>
              <input
                value={editMood}
                onChange={(e) => setEditMood(e.target.value)}
              />
              <input
                type="number"
                value={editStress}
                onChange={(e) => setEditStress(e.target.value)}
              />
              <input
                value={editNote}
                onChange={(e) => setEditNote(e.target.value)}
              />
              <button onClick={() => handleUpdate(j._id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              <p><b>Mood:</b> {j.mood}</p>
              <p><b>Stress Level:</b> {j.stressLevel}</p>
              <p><b>Note:</b> {j.note}</p>
              <button onClick={() => handleEdit(j)}>Edit</button>
              <button onClick={() => handleDelete(j._id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JournalList;
