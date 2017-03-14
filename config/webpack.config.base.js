const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {publicPath, clientSourcePath, clientBuildPath} = require('./application.config');

const IS_DEV = (process.env.NODE_ENV !== 'production');

const extractTextPlugin = new ExtractTextPlugin({
  filename: 'style.css',
  disable: IS_DEV
});

module.exports = {
  entry: {
    app: './src/client/index.js',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      // 'react-actions',
      'react-router-redux',
      'react-hot-loader',
      'react-tap-event-plugin',
      'redux-logger',
      'redux-thunk',
      'babel-polyfill',
      'material-ui',
      'whatwg-fetch',
      'immutable'
    ]
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
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.s?css$/,
      use: extractTextPlugin.extract({
        fallback: {
          loader: 'style-loader',
          options: {sourceMap: IS_DEV}
        },
        use: [{
          loader: 'css-loader',
          options: {
            localIdentName: (IS_DEV ? '[path]-[name]_[local]' : '[name]_[local]_[hash:5]'), // [hash:base64]
            modules: true,
            sourceMap: IS_DEV
          }
        }, {
          loader: 'sass-loader',
          options: {sourceMap: IS_DEV}
        }, {
          loader: 'postcss-loader',
          options: {sourceMap: IS_DEV}
        }]
      })
    }]
  },
  plugins: [
    extractTextPlugin,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].js',
      minChunks: Infinity
    }),
  ],
  resolve: {
    modules: [
      clientSourcePath,
      'node_modules'
    ]
  }
};
