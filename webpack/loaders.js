/* eslint import/no-extraneous-dependencies: 0 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

// const devMode = process.env.NODE_ENV !== 'production'

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.css$/,
    loaders: [
      MiniCssExtractPlugin.loader,
      'css-loader',
    ],
    exclude: ['node_modules'],
  },
  {
    test: /\.scss$/,
    loaders: [
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
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      'url-loader', {
        loader: 'image-webpack-loader',
        options: {
          enforce: 'pre',
          emitFile: false,
          mozjpeg: {
            progressive: false,
            quality: 50, // default: 65
          },
          optipng: {
            enabled: false,
            optimizationLevel: 7, // disabled by default
          },
          pngquant: {
            quality: '55-80', // '65-90' by default
            speed: 6, // 4 by default
          },
          gifsicle: {
            interlaced: false,
          },
        },
      }],
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader'],
  },
];
