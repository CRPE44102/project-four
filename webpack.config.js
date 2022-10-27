const path = require('path');

module.exports = {
  entry: './src/scripts/main.js',
  mode: 'development',
  watch: true,
  experiments: {
    topLevelAwait: true,
  },
  output: {
    filename: 'scripts/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};