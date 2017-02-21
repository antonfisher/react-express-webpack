const express = require('express');
const compression = require('compression');
const {publicPath, clientBuildPath} = require('../../../config/application.config');

module.exports = function setup(app) {
  app.use(compression());
  app.use(publicPath, express.static(clientBuildPath));
};
