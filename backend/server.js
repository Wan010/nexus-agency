const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.get("/stats", (req, res) => {
  res.json({
    audits: 140,
    tvl: 120,
    protocols: 60,
    years: 5
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
