/* eslint react/no-danger: 0 */
import 'isomorphic-fetch'
import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
// import { Helmet } from 'react-helmet'
// import fetch from 'node-fetch'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'
import { ApolloLink } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import config from '../config'
// import { errorLink } from '../src/apollo/links'
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
    // uri: 'http://localhost:8001/graphql',
    // fetch,
  })

  const client = new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  })

  const context = {}

  const component = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  )

  // const helmet = Helmet.renderStatic()

  const Html = ({ content, client: { cache } }) => (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Mixtape</title>
        {/* {helmet.meta.toString()}
        {helmet.title.toString()} */}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        {/* {content} */}
        <script
          charSet="UTF-8"
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(
              cache.extract(),
            )};`,
          }}
        />
        <script src="bundle.js" charSet="UTF-8" />
      </body>
    </html>
  )

  renderToStringWithData(component)
    .then(content => {
      res.status(200)
      const html = <Html content={content} client={client} />
      res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`)
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
