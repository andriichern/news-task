const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

process.env.NODE_ENV = 'production';

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                sourceMap: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(ico)$/,
        use: 'file-loader?name=assets/[name].[ext]',
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: false,
      favicon: path.join(__dirname, 'src', 'favicon.ico'),
      template: path.join(__dirname, 'src', 'index.html'),
      template: require('html-webpack-template'),
      appMountId: 'app',
      bodyHtmlSnippet: '<body class="mdc-typography"></body>',
      links: [
        {
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
          rel: 'preload',
          as: 'style',
        },
      ],
      scripts: [
        { src: 'app.mjs', type: 'module' },
        { src: 'vendor.mjs', type: 'module' },
      ],
      title: 'News Feed',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'initial',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
});
