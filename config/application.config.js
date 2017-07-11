const {resolve} = require('path');

module.exports = {
  publicPath: '/',
  clientSourcePath: resolve(__dirname, '..', 'src', 'client'),
  clientBuildPath: resolve(__dirname, '..', 'build', 'client'),
  clientBuildDevPath: resolve(__dirname, '..', 'build-dev', 'client') // to store cached dev files
};
