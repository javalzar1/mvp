const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const createOne = require('../database/controllers/trips.js');

const path = require('path');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist')))

app.post('/trips', (req, res) => {

  // console.log(req.body)
  // res.sendStatus(200)
  createOne(req.body, (err, result) => {
    err ? res.send(err).status(500) :
      res.send(result).status(200);
  })
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})