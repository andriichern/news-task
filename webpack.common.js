const path = require('path');

module.exports = {
  target: 'web',
  entry: [
    path.join(__dirname, 'src', 'index.jsx'),
    path.join(__dirname, 'src', 'styles', 'main.scss'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'app.mjs',
    chunkFilename: '[name].mjs',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
