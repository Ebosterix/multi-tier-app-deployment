const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "rootpass",
  database: "appdb"
});

function connectDB() {
  db.connect((err) => {
    if (err) {
      console.log("DB connection failed, retrying...");
      setTimeout(connectDB, 3000);
    } else {
      console.log("Connected to MySQL");
    }
  });
}
connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post("/data", (req, res) => {
  const { message } = req.body;
  db.query("INSERT INTO messages (message) VALUES (?)", [message], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ status: "Data inserted" });
  });
});

app.get("/data", (req, res) => {
  db.query("SELECT * FROM messages ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.listen(5000, () => {
  console.log("API running on port 5000");
});
