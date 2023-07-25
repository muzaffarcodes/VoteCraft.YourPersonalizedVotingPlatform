const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// Enable CORS to allow cross-origin requests (adjust origin as needed)
app.use(cors({ origin: "http://localhost:3000" }));

// Parse incoming request bodies
app.use(bodyParser.json());

// In-memory data storage for demonstration purposes (replace with TiDB Cloud Serverless Tier)
let votes = {
  option1: 0,
  option2: 0,
  option3: 0,
};

// Handle voting request
app.post("/api/vote", (req, res) => {
  const { voteOption } = req.body;

  if (!votes.hasOwnProperty(voteOption)) {
    return res.status(400).json({ error: "Invalid vote option." });
  }

  votes[voteOption]++;
  res.status(200).json({ message: "Vote submitted successfully!" });
});

// Get current vote results
app.get("/api/results", (req, res) => {
  res.status(200).json({ votes });
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
