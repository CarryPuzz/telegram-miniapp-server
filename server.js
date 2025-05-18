const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = {};

app.post("/api/start", (req, res) => {
  const { telegram_id } = req.body;
  if (!users[telegram_id]) users[telegram_id] = 0;
  res.json({ balance: users[telegram_id] });
});

app.post("/api/complete-task", (req, res) => {
  const { telegram_id, task_id } = req.body;
  users[telegram_id] = (users[telegram_id] || 0) + 0.4;
  res.json({ newBalance: users[telegram_id] });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});