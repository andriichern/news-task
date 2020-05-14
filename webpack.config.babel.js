import path from 'path';
import WebpackCleanupPlugin from 'webpack-cleanup-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  target: 'web',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      //   {
      //     test: /\.css$/,
      //     use: [
      //       {
      //         loader: "style-loader/url",
      //         options: { sourceMap: true },
      //       },
      //       {
      //         loader: "file-loader",
      //       },
      //     ],
      //   },
      //   {
      //     test: /\.(ico)$/,
      //     use: "file-loader?name=assets/[name].[ext]",
      //   },
    ],
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  devServer: {
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
    https: false,
  },
};
