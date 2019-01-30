/* eslint react/no-danger: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/self-closing-comp: 0 */

import 'isomorphic-fetch';
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ServerStyleSheet } from 'styled-components';
import { Helmet } from 'react-helmet';
import config from '../config';
import App from '../src/App';

const app = express();
const PORT = process.env.PORT || 8003;

app.use(bodyParser.json());
app.use(express.static('dist/client'));

app.get('*', (req, res) => {
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
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  const Html = ({ content, helmet, styleTags, client: { cache } }) => (
    <html lang="en">
      <head>
        {helmet.meta.toComponent()}
        <title>Mixtape Madness | UKs Number 1 For Urban Music & Entertainment</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="keywords" content="mixtape madness, uk, urban music, mad about bars, next up, 1take" />
        <meta
          name="description"
          content="We showcase the best of British urban music by presenting Music videos, Mixtape premieres, Audios & freestyle shows such as Mad About Bars an Next Up, We are proud to have featured many great artists such as J Hus, Abra Cadabra, Potter Payper, M Huncho, Jay Silva and many more."
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link rel="apple-touch-icon" sizes="180x180" href="/resources/assets/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/resources/assets/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/resources/assets/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/resources/assets/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/resources/assets/favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/resources/assets/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/resources/assets/favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/resources/assets/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/resources/assets/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/resources/assets/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/resources/assets/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/resources/assets/favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/resources/assets/favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/resources/assets/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/resources/assets/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/resources/assets/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/resources/assets/favicons/favicon.ico" />
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
        <script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c0e4bff29290756" async />
      </body>
    </html>
  );

  renderToStringWithData(sheet.collectStyles(component))
    .then(content => {
      const styleTags = sheet.getStyleElement();
      res.status(200);
      const helmet = Helmet.renderStatic();
      const html = (
        <Html
          content={content}
          helmet={helmet}
          client={client}
          styleTags={styleTags}
        />
      );
      const renderedHtml = ReactDOMServer.renderToStaticMarkup(html);

      res.send(`<!doctype html>\n${renderedHtml}`);
      // const renderHtml = ReactDOMServer.renderToStaticMarkup(html)
      // res.send(`<!doctype html>\n${Helmet.renderStatic(renderHtml)}`)
      res.end();
    })
    .catch(e => {
      console.error('RENDERING ERROR:', e); // eslint-disable-line no-console
      res.status(500);
      res.end(`An error occurred. Stack trace:\n\n${e.stack}`);
    });
});

app.listen(PORT, () => {
  console.log(`App running ${PORT}`);
});
