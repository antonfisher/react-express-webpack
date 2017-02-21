const {resolve} = require('path');
const request = require('request');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../../config/webpack.config.dev');

const compiler = webpack(webpackConfig);

module.exports = function setup(app) {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: true
  }));

  app.use(webpackHotMiddleware(compiler));

  // fix browser history router
  app.get('*', (req, res) => {
    if (req.url !== '/' && !req.url.includes('.')) {
      request('http://localhost:3000/', (error, response, body) => res.end(body));
    } else {
      res.sendFile(resolve(compiler.outputPath, 'index.html'));
    }
  });
};
