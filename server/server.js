const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})