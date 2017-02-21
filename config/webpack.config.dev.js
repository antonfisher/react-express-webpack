const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {clientSourcePath} = require('./application.config');
const baseConfig = require('./webpack.config.base');

module.exports = Object.assign({}, baseConfig, {
  entry: Object.assign({}, baseConfig.entry, {
    hotPath: 'react-hot-loader/patch',
    hotClient: 'webpack-hot-middleware/client?http://localhost:3000&reload=true'
  }),
  output: Object.assign({}, baseConfig.output, {
    hotUpdateMainFilename: 'hot-update.[hash:6].json',
    hotUpdateChunkFilename: 'hot-update.[hash:6].js'
  }),
  devtool: 'cheap-module-eval-source-map',
  plugins: baseConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(clientSourcePath, 'index.html')
    })
  ]),
});
