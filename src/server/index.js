const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const {resolve} = require('path');
const setupApplicationApi = require('./middlewares/api');
const logger = require('./logger');
const {clientBuildPath} = require('../../config/application.config');

process.env.APP_PORT = process.env.APP_PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

app.use(logger.expressMiddleware);

app.use(bodyParser.json());

// apply application API
setupApplicationApi(app);

// middlewares
if (process.env.NODE_ENV === 'development') {
  require('./middlewares/development')(app);
} else {
  require('./middlewares/production')(app);
}

// all other requests be handled by UI itself
app.get('*', (req, res) => res.sendFile(resolve(clientBuildPath, 'index.html')));

http.createServer(app).listen(process.env.APP_PORT, () => {
  logger.info(`HTTP server is now running on http://localhost:${process.env.APP_PORT}`);
});
