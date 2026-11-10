const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Page d'accueil
app.get("/", (req, res) => {
  res.send("Bonjour depuis mon conteneur Docker ! 🐳");
});

// Route de "santé" : sert à vérifier que l'appli tourne
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
