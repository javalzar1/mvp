const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { createOne, getAll } = require('../database/controllers/trips.js');

const path = require('path');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/trips', (req, res) => {
  getAll((err, result) => {
    err ? res.send(err).status(500) :
      res.send(result).status(200);
  })
})

app.post('/trips', (req, res) => {
  createOne(req.body, (err, result) => {
    err ? res.send(err).status(500) :
      res.send(result).status(200);
  })
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})