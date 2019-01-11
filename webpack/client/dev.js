/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = require('../loaders');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '9000';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'development',
  devtool: 'cheap-module-inline-source-map',
  entry: {
    bundle: ['@babel/polyfill', path.resolve(__dirname, '../../src/index.js')],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../../dist/client'),
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../../dist/client'),
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
  },
  module: {
    rules: loaders,
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/index.html'),
      files: {
        css: ['style.css'],
        js: ['bundle.js'],
      },
    }),
  ],
};
