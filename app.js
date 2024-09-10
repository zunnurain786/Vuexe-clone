// backend/app.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const Routes = require("./routes/auth");

dotenv.config();

const app = express();
const port = process.env.PORT || 8076;

// MongoDB connection
const connectDB = require("./config/db");

connectDB()
  .then((e) => {
    console.log("succesfully connected to database");
  })
  .catch((e) => {
    console.log("error while connecting to database", e.message);
  });

app.use(express.json());
app.use(cors());

//static file
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("/api", Routes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
