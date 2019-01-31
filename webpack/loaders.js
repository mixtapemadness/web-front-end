/* eslint import/no-extraneous-dependencies: 0 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

// const devMode = process.env.NODE_ENV !== 'production'

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'eslint-loader'],
    // loader: 'babel-loader',
  },
  {
    test: /\.css$/,
    loaders: [
      // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      // 'style-loader',
      // ExtractCssChunks.loader,
      // 'css-loader?importLoaders=1',

      MiniCssExtractPlugin.loader,
      'css-loader',
    ],
    exclude: ['node_modules'],
  },
  {
    test: /\.scss$/,
    loaders: [
      // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      // 'style-loader',
      // ExtractCssChunks.loader,
      // 'css-loader?importLoaders=1',
      // 'sass-loader',
      // 'postcss-loader',

      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
      'postcss-loader',
    ],
    exclude: ['node_modules'],
  },
  {
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'file-loader',
  },
  {
    test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'file-loader',
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?prefix=font/&limit=5000',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=50000&mimetype=image/svg+xml',
  },
  {
    test: /\.gif/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/gif',
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=50000&mimetype=image/jpg',
  },
  {
    test: /\.png/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=50000&mimetype=image/png',
  },
];
