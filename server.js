const express = require("express");
const path = require("path");

// instantiate the app
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => res.send("Navigate to /send or /routes"));

app.get("/send", (req, res) =>
  res.sendFile(path.join(__dirname, "public/send.html"))
);

app.get("/paths", (req, res) =>
  res.sendFile(path.join(__dirname, "public/paths.html"))
);
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
