const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const journalRoutes = require("./routes/journalRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/journals", journalRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/mindspace", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
