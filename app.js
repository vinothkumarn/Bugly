const homePage = require('./components/homepage/homepage');
const config = require('./config/config');
const http = require('http');

const homePageObj = new homePage();
const homePageContent = homePageObj.index();
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(homePageContent);
});

port = config.port;
hostname = config.hostname;
server.listen(port, hostname, () => {
  console.log(`Server started and running at http://${hostname}:${port}/`);
});