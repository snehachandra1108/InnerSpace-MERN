import axios from "axios";

export const createJournal = (journalData) =>
  axios.post("http://localhost:5000/api/journals", journalData);

export const getJournals = () =>
  axios.get("http://localhost:5000/api/journals");

export const deleteJournal = (id) =>
  axios.delete(`http://localhost:5000/api/journals/${id}`);
