const {resolve, join} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_DEV = process.env.NODE_ENV !== 'production';

const extractTextPlugin = new ExtractTextPlugin({
  filename: 'style.css',
  disable: IS_DEV
});

module.exports = {
  entry: ['./src/client/index.js'],
  output: {
    publicPath: '/',
    path: resolve(__dirname, '..', 'build', 'client'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.s?css$/,
        use: extractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {sourceMap: IS_DEV}
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: IS_DEV ? '[path]-[name]_[local]' : '[name]_[local]_[hash:5]', // [hash:base64]
                modules: true,
                sourceMap: IS_DEV
              }
            },
            {
              loader: 'sass-loader',
              options: {sourceMap: IS_DEV}
            },
            {
              loader: 'postcss-loader',
              options: {sourceMap: IS_DEV}
            }
          ]
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    extractTextPlugin,
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        if (module.resource && /^.*\.(css|scss)$/.test(module.resource)) {
          return false;
        }
        return module.context && module.context.includes('node_modules');
      }
    })
  ],
  resolve: {
    modules: ['node_modules', join('src', 'client')]
  }
};
