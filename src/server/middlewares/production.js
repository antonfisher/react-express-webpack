const {resolve} = require('path');
const express = require('express');
const compression = require('compression');
const {publicPath, clientBuildPath} = require('../../../config/application.config');

module.exports = function setup(app) {
  app.use(compression());
  app.use(publicPath, express.static(clientBuildPath));

  // all other requests be handled by UI itself
  app.get('*', (req, res) => res.sendFile(resolve(clientBuildPath, 'index.html')));
};
