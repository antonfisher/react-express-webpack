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
};
