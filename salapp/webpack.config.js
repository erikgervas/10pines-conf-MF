var path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'is-this-the-lisp-life.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "is-this-the-lisp-life.js",
    libraryTarget: 'umd',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3002
  }
};
