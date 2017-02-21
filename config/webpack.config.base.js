const webpack = require('webpack');
const {publicPath, clientSourcePath, clientBuildPath} = require('./application.config');

module.exports = {
  entry: {
    app: './src/client/index.js',
    vendor: ['react', 'react-dom', 'babel-polyfill']
  },
  output: {
    publicPath,
    path: clientBuildPath,
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader?modules',
        'postcss-loader'
      ]
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].js',
      minChunks: Infinity
    })
  ],
  resolve: {
    modules: [
      clientSourcePath,
      'node_modules'
    ]
  }
};
