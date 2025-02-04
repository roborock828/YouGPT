const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenue sur YouGPt!');
});

const port = 3000;
app.listen(port, () => {
  console.log(Le serveur est en cours d'exécution sur le port ${port});
});
