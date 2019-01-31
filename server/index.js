/* eslint react/no-danger: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/self-closing-comp: 0 */
/* eslint no-undef: 0 */
/* eslint no-return-assign: 0 */
/* eslint no-unused-vars: 0 */

import 'isomorphic-fetch';
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet, { HelmetProvider } from 'react-helmet-async';
import window from 'global/window';
import { StaticRouter } from 'react-router';
import { ApolloProvider, renderToStringWithData, getDataFromTree } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ServerStyleSheet } from 'styled-components';
import config from '../config';
import App from '../src/App';

const app = express();
const PORT = process.env.PORT || 8003;
let adsbygoogle = [];
const helmetContext = {};

app.use(bodyParser.json());
app.use(express.static('dist/client'));

app.get('*', async (req, res) => {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        );
      });
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });
  const httpLink = createHttpLink({
    uri: config.apiGraphqlUrl,
  });

  const client = new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  });

  const context = {};

  const sheet = new ServerStyleSheet();

  const component = (
    <HelmetProvider context={helmetContext}>
      <ApolloProvider client={client}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    </HelmetProvider>
  );

  await getDataFromTree(component);

  const Html = ({ content, helmet, styleTags, client: { cache } }) => (
    <html lang="en">
      <head>
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {helmet.title.toComponent()}
        <title> </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <link href="/bundle.css" rel="stylesheet" async />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
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
        <script src="/bundle.js" charSet="UTF-8" async />
        <script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c0e4bff29290756" async />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script dangerouslySetInnerHTML={{
          __html: `${JSON.stringify(
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: 'ca-pub-9403258914718395',
              enable_page_level_ads: true,
            }),
          )};`,
        }}
        />
      </body>
    </html>
  );

  renderToStringWithData(sheet.collectStyles(component))
    .then(content => {
      const styleTags = sheet.getStyleElement();
      res.status(200);
      const { helmet } = helmetContext;
      const html = (
        <Html
          content={content}
          helmet={helmet}
          client={client}
          styleTags={styleTags}
        />
      );
      const renderedHtml = ReactDOMServer.renderToStaticMarkup(html);
      res.send(`<!DOCTYPE html>\n${renderedHtml}`);
      // const renderHtml = ReactDOMServer.renderToStaticMarkup(html);
      // res.send(`<!doctype html>\n${Helmet.renderStatic(renderHtml)}`);
      res.end();
    })
    .catch(e => {
      console.error('RENDERING ERROR:', e);
      res.status(500);
      res.end(`An error occurred. Stack trace:\n\n${e.stack}`);
    });
});

app.listen(PORT, () => {
  console.log(`App running ${PORT}`);
});
