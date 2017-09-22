const {resolve} = require('path');
const express = require('express');
const compression = require('compression');

const clientBuildPath = resolve(__dirname, '..', '..', 'client');

module.exports = function setup(app) {
  app.use(compression());
  app.use('/', express.static(clientBuildPath));

  // all other requests be handled by UI itself
  app.get('*', (req, res) => res.sendFile(resolve(clientBuildPath, 'index.html')));
};
