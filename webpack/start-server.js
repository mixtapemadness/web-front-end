/* eslint import/no-extraneous-dependencies: 0 */
// The runner.
const startServer = require('universal-webpack/server')

// The server-side bundle path info.
const settings = require('./universal-webpack-settings')

// Only `configuration.context` and `configuration.output.path`
// parameters are used from the whole Webpack config.
const configuration = require('./server/testing')

// Run the server.
startServer(configuration, settings)
