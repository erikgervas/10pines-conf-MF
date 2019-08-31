const path = require('path');

module.exports = {
  entry: './src/singleSpaEntry.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'singleSpaEntry.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};