const config = require('./config/config');
const http = require('http');
const express = require('express');
const app = express();

app.use(require('./routes'));

port = config.port;
app.listen(port, () => {
  console.log(`Server started and running on port ${port}/`);
});
