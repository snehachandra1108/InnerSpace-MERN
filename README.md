# InnerSpace – MERN Project

## Overview

InnerSpace is a personal journaling web application built using the MERN stack (MongoDB, Express, React, Node.js).  
It allows users to track their mood, stress levels, and daily notes, providing a simple and intuitive interface for self-reflection.

This project demonstrates:

- Full-stack MERN development
- RESTful API implementation
- CRUD operations with MongoDB
- Frontend development using React
- Proper project structure and state management

---

## Features

- **Add Journals:** Enter mood, stress level (1–10), and notes.  
- **Edit Journals:** Update existing entries inline.  
- **Delete Journals:** Remove entries you no longer need.  
- **Dynamic List:** View all journals in real time.  
- **Responsive Layout:** Works on desktop and mobile.  

---

## Tech Stack

| Layer       | Technology                  |
|------------ |---------------------------- |
| Frontend    | React.js, Axios             |
| Backend     | Node.js, Express.js         |
| Database    | MongoDB (local or Atlas)    |
| Development | VS Code, npm, Postman       |

---

## Project Structure

InnerSpace/
├─ backend/
│ ├─ controllers/
│ ├─ models/
│ ├─ routes/
│ ├─ server.js
│ └─ package.json
├─ frontend/
│ ├─ src/
│ │ ├─ components/
│ │ ├─ services/
│ │ └─ App.js
│ ├─ public/
│ └─ package.json
├─ .gitignore
└─ README.md


---

## Setup Instructions

### Backend

1. Open terminal in backend folder:

```bash
cd backend
npm install
```

2. Create a .env file with MongoDB connection:

```bash

MONGO_URI=mongodb://localhost:27017/mindspace
PORT=5000
```
3. Start the backend server:
```bash
npm run dev
```
Server runs on http://localhost:5000
Should show: Server running on port 5000 and MongoDB connected

### Frontend

1. Open terminal in frontend folder:

```bash
cd frontend
npm install
```
2. Start the React development server:

```bash
npm start
```

App runs on http://localhost:3000
Connects automatically to the backend API

## Usage:

1. Open the app in your browser.

2. Add, edit, or delete journal entries.

3. Entries are saved in MongoDB and update in real time on the frontend.

