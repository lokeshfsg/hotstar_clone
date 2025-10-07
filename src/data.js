// Example Express route for /movies/:id
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const dataPath = path.join(__dirname, 'client', 'src', 'loki.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read data' });
    const json = JSON.parse(data);
    const movie = (json.movieList || []).find(m => m.id === id);
    if (movie) {
      res.json({ movie });
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  });
});

