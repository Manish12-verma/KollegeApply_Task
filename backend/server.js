const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./data/universities.json");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

// Simple API: list of universities
app.get("/api/universities", (req, res) => {
  const list = data.universities.map((u) => ({ id: u.id, name: u.name }));
  res.json(list);
});

// Nested JSON: full university details
app.get("/api/universities/:id", (req, res) => {
  const uni = data.universities.find((u) => u.id === req.params.id);
  if (!uni) return res.status(404).json({ error: "University not found" });
  res.json(uni);
});

// Nested JSON: fees used by modal
app.get("/api/fees/:id", (req, res) => {
  const fees = data.fees[req.params.id];
  if (!fees) return res.status(404).json({ error: "Fee structure not found" });
  res.json(fees);
});

// Optional: local lead acceptor (backup to Pipedream)
app.post("/api/leads", (req, res) => {
  const lead = req.body;
  if (!lead.fullName || !lead.email || !lead.phone) {
    return res.status(400).json({ error: "fullName, email, phone are required" });
  }
  console.log("Local lead received:", lead);
  res.json({ status: "ok", receivedAt: new Date().toISOString(), lead });
});

// Health check
app.get("/", (req, res) => {
  res.send("University Landing Backend is running ");
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
