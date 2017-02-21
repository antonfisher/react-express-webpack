const {resolve} = require('path');
const http = require('http');
const express = require('express');
const {clientBuildPath} = require('../../config/application.config');

process.env.APP_PORT = process.env.APP_PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

// middlewares
if (process.env.NODE_ENV === 'development') {
  require('./middlewares/development')(app);
} else {
  require('./middlewares/production')(app);
}

http.createServer(app).listen(process.env.APP_PORT, () => {
  console.log(`HTTP server is now running on http://localhost:${process.env.APP_PORT}`);
});
