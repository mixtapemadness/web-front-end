/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const webpackNodeExternals = require('webpack-node-externals')
// const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // new ExtractCssChunks(
    //   {
    //     // Options similar to the same options in webpackOptions.output
    //     // both options are optional
    //     filename: '[name].css',
    //     chunkFilename: '[id].css',
    //     hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
    //     orderWarning: true, // Disable to remove warnings about conflicting order between imports
    //     reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
    //     cssModules: true, // if you use cssModules, this can help.
    //   },
    // ),
  ],
  // plugins: [new BundleAnalyzerPlugin()],
  externals: [webpackNodeExternals()],
}
