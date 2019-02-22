const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'ball': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  performance: {
    maxEntrypointSize: 700000,
  }
};

