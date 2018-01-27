const {resolve} = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const logger = require('../logger');
const webpackConfig = require('../../../config/webpack.config.dev');

const compiler = webpack(webpackConfig);

module.exports = function setup(app) {
  app.use(
    webpackDevMiddleware(compiler, {
      logger,
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true
      }
    })
  );

  app.use(webpackHotMiddleware(compiler));

  // all other requests be handled by UI itself
  app.get('*', (req, res) => res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html')));
};
