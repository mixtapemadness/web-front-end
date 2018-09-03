/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path')
// const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const loaders = require('../loaders')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

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
  module: {
    rules: loaders,
  },
  // plugins: [
  //   // new BundleAnalyzerPlugin(),
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, '../../src/index.html'),
  //     files: {
  //       // css: ['style.css'],
  //       js: ['bundle.js'],
  //     },
  //   }),
  // ],
}
