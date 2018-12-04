/* eslint react/no-danger: 0 */
/* eslint object-curly-newline: 0 */

import 'isomorphic-fetch'
import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'
import { ApolloLink } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'
import config from '../config'
import App from '../src/App'

const app = express()
const PORT = process.env.PORT || 8003

app.use(bodyParser.json())
app.use(express.static('dist/client'))

app.get('*', (req, res) => {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        )
      })
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  })
  const httpLink = createHttpLink({
    uri: config.apiGraphqlUrl,
  })

  const client = new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  })

  const context = {}

  const sheet = new ServerStyleSheet()

  const component = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  )

  const Html = ({ content, helmet, styleTags, client: { cache } }) => (
    <html lang="en">
      <head>
        {helmet.meta.toComponent()}
        {helmet.title.toString()}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400"
          rel="stylesheet"
        />
        <link href="/bundle.css" rel="stylesheet" />
        {styleTags}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          charSet="UTF-8"
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(
              cache.extract(),
            )};`,
          }}
        />
        <script src="/bundle.js" charSet="UTF-8" />
      </body>
    </html>
  )

  renderToStringWithData(sheet.collectStyles(component))
    .then(content => {
      const styleTags = sheet.getStyleElement()
      res.status(200)
      const helmet = Helmet.renderStatic()
      const html = (
        <Html
          content={content}
          helmet={helmet}
          client={client}
          styleTags={styleTags}
        />
      )
      const renderedHtml = ReactDOMServer.renderToStaticMarkup(html)

      res.send(`<!doctype html>\n${renderedHtml}`)
      // const renderHtml = ReactDOMServer.renderToStaticMarkup(html)
      // res.send(`<!doctype html>\n${Helmet.renderStatic(renderHtml)}`)
      res.end()
    })
    .catch(e => {
      console.error('RENDERING ERROR:', e) // eslint-disable-line no-console
      res.status(500)
      res.end(`An error occurred. Stack trace:\n\n${e.stack}`)
    })
})

app.listen(PORT, () => {
  console.log(`App running ${PORT}`)
})
