/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loaders = require('../loaders');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
];

if (!process.env.SSR_MODE) {
  plugins.push(
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/index.html'),
      files: {
        css: ['client/bundle.css'],
        js: ['client/bundle.js'],
      },
    }),
  );
}

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'production',
  devtool: 'cheap-module-inline-source-map',
  entry: {
    bundle: ['@babel/polyfill', path.resolve(__dirname, '../../src/index.js')],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.png', '.gif', '.jpg', '.svg'],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../../dist/client'),
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: loaders,
  },
  plugins,
};
