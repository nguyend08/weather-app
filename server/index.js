const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.static(path.join(__dirname, '../build')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

