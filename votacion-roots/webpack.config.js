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
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: require.resolve('url-loader'),
        options: {
          publicPath: '/votacion-roots/',
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        }
      }
    ]
  }
};