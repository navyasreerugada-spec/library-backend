const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Library Backend Running");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB connection failed");
    console.log(err.message);
  });

// start server (THIS IS CRITICAL)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});