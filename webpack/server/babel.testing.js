/* eslint import/no-extraneous-dependencies: 0 */
const { server } = require('universal-webpack/config')
const settings = require('../universal-webpack-settings')
const configuration = require('./testing')

module.exports = server(configuration, settings)
