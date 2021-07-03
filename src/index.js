const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send(`Nodeapp: ${Date.now()}`);
})

app.listen(3333, () => console.log('Nodeapp running'));