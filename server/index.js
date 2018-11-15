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
import { ServerStyleSheet } from 'styled-components'
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

  const sheet = new ServerStyleSheet()

  const component = (
    // <StyleSheetManager sheet={sheet.instance}>
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
    // </StyleSheetManager>
  )

  // const styleTags = sheet.getStyleTags()
  // const styleTag = sheet.getStyleTags()
  // console.log('styleTag: ', styleTag)
  // const styleTags = sheet.getStyleElement()
  // console.log('styleTags: ', styleTags)

  // const helmet = Helmet.renderStatic()

  const Html = ({ content, styleTags, client: { cache } }) => (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Mixtape</title>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400"
          rel="stylesheet"
        />
        <link href="/bundle.css" rel="stylesheet" />

        {styleTags}
        {/* <style dangerouslySetInnerHTML={{
          __html: `
          *,
          *::before,
          *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html {
            font-family: sans-serif;
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(black, 0);
          }

          article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
              display: block;
            }

          body {
              margin: 0;
              font-family: Montserrat;
              font-size: 16px;
              font-weight: normal;
              line-height: 1.6;
              color: black;
              text-align: left;
              background-color: #fff;
          }


          hr {
              box-sizing: content-box;
              height: 0;
              overflow: visible;
            }


          a {
              color: inherit;
              text-decoration: none;
              background-color: transparent;
          }

          button {
              border-radius: 0;
          }

          input,
          button,
          select,
          optgroup,
          textarea {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
          }

          button,
          input {
            overflow: visible;
          }

          button,
          select {
            text-transform: none;
          }

          input[type="radio"],
          input[type="checkbox"] {
            box-sizing: border-box;
            padding: 0;
          }

          video {
              outline: 0 !important;
          }


          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner {
            padding: 0;
            border-style: none;
          }

          input:required {
            box-shadow: none;
          }
        `,
        }}
        /> */}
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
        <script src="/bundle.js" charSet="UTF-8" />
      </body>
    </html>
  )

  renderToStringWithData(sheet.collectStyles(component))
    .then(content => {
      const styleTags = sheet.getStyleElement()
      res.status(200)
      const html = (
        <Html content={content} client={client} styleTags={styleTags} />
      )
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
