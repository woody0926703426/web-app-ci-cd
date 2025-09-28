const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

  res.send('Hello DevOps World!');

});

app.get('/health', (req, res) => {

  res.json({ status: 'OK', timestamp: new Date().toISOString() });

});

app.listen(port, () => {

  console.log(`App running on port ${port}`);

});