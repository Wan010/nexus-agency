const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Stats API
app.get("/stats", (req, res) => {
  res.json({
    audits: 140,
    tvl: 120,
    protocols: 60,
    years: 5
  });
});

// Chat API
app.post("/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `We received: "${message}". Our team will contact you.`
  });
});

app.get("/", (_, res) => {
  res.send("Backend running");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running"));
