/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const webpackNodeExternals = require('webpack-node-externals')
const loaders = require('../loaders')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  name: 'server',
  target: 'node',
  mode: 'development',
  entry: {
    bundle: [
      '@babel/polyfill',
      path.resolve(__dirname, '../../server/index.js'),
    ],
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../../dist'),
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: loaders,
  },
  plugins: [new BundleAnalyzerPlugin()],
  externals: [webpackNodeExternals()],
}
