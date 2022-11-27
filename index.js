require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Ceci est la route /" });
});

app.get("/user", (req, res) => {
  res.json({ message: "Ceci est la route /user" });
});
app.all("*", (req, res) => {
  res.status(404).json({ error: "Page introuvable" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Le serveur a demarré sur le port : ${PORT}`);
});
