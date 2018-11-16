/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/no-dynamic-require: 0 */
/* eslint prefer-destructuring: 0 */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const loaders = require('../loaders')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

process.env.NODE_ENV = 'testing'

// const devMode = false

const apiConfig = require('../../config/testing')

const apiUrl = apiConfig.apiUrl
const apiSocketUrl = apiConfig.apiSocketUrl
const apiGraphqlUrl = apiConfig.apiGraphqlUrl

// loaders.push({
//   test: /\.scss$/,
//   loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded' }),
//   exclude: ['node_modules'],
// })

module.exports = {
  entry: {
    bundle: ['@babel/polyfill', path.resolve(__dirname, '../../src/index.js')],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../../dist/client'),
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: loaders,
  },
  optimization: {
    // splitChunks: {
    //   chunks: 'async',
    //   minSize: 30000,
    //   minChunks: 1,
    //   maxAsyncRequests: 5,
    //   maxInitialRequests: 3,
    //   automaticNameDelimiter: '~',
    //   name: true,
    //   cacheGroups: {
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: -10,
    //     },
    //     default: {
    //       minChunks: 2,
    //       priority: -20,
    //       reuseExistingChunk: true,
    //     },
    //   },
    // },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        CONFIG: JSON.stringify('testing'),
        apiUrl: JSON.stringify(apiUrl),
        apiSocketUrl: JSON.stringify(apiSocketUrl),
        apiGraphqlUrl: JSON.stringify(apiGraphqlUrl),
      },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     screw_ie8: true,
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new ExtractTextPlugin({
    //   filename: 'style.css',
    //   allChunks: true,
    // }),
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
}
