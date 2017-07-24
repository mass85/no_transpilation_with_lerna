const path = require('path');
const express = require('express');
const app = express();

app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(4000, function () {
  console.log('app listening on port 4000!')
});
