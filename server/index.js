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
import window from 'global/window';

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
import { IMAGES_URL, SEO, TWITTER_HANDLE } from '../src/constants';

const app = express();
const PORT = process.env.PORT || 8003;
let adsbygoogle = [];
let googletag = {};

googletag = window.googletag || {};
googletag.cmd = googletag.cmd || [];

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
        {helmet.title.toComponent()}
        <title> Mixtape Madness | {SEO.title} </title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="msapplication-TileColor" content="#ffa019" />
        <meta name="msapplication-TileImage" content={`${IMAGES_URL}/assets/images/favicons/ms-icon-144x144.png`} />
        <meta name="theme-color" content="#ffa019" />
        <meta name="twitter:creator" content={`${TWITTER_HANDLE}`} />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta property="og:locale" content="en_UK" />
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        <link rel="apple-touch-icon" sizes="180x180" href={`${IMAGES_URL}/assets/images/favicons/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${IMAGES_URL}/assets/images/favicons/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${IMAGES_URL}/assets/images/favicons/favicon-16x16.png`} />
        <link rel="apple-touch-icon" sizes="57x57" href={`${IMAGES_URL}/assets/images/favicons/apple-icon-57x57.png`} />
        <link rel="apple-touch-icon" sizes="60x60" href={`${IMAGES_URL}/assets/images/favicons/apple-icon-60x60.png`} />
        <link rel="apple-touch-icon" sizes="72x72" href={`${IMAGES_URL}/assets/images/favicons/apple-icon-72x72.png`} />
        <link rel="apple-touch-icon" sizes="76x76" href={`${IMAGES_URL}/assets/images/favicons/apple-icon-76x76.png`} />
        <link rel="apple-touch-icon" sizes="114x114" href={`${IMAGES_URL}/assets/images/favicons/apple-icon-114x114.png`} />
        <link rel="apple-touch-icon" sizes="120x120" href={`${IMAGES_URL}/assets/images/favicons/apple-icon-120x120.png`} />
        <link rel="apple-touch-icon" sizes="144x144" href={`${IMAGES_URL}/assets/images/favicons/apple-icon-144x144.png`} />
        <link rel="apple-touch-icon" sizes="152x152" href={`${IMAGES_URL}/assets/images/favicons/apple-icon-152x152.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${IMAGES_URL}/assets/images/favicons/apple-icon-180x180.png`} />
        <link rel="icon" type="image/png" sizes="192x192" href={`${IMAGES_URL}/assets/images/favicons/android-icon-192x192.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${IMAGES_URL}/assets/images/favicons/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="96x96" href={`${IMAGES_URL}/assets/images/favicons/favicon-96x96.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${IMAGES_URL}/assets/images/favicons/favicon-16x16.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${IMAGES_URL}/assets/images/favicons/favicon.ico`} />
        <link rel="manifest" href={`${IMAGES_URL}/assets/images/favicons/manifest.json`} />
        <link rel="mask-icon" href={`${IMAGES_URL}/assets/images/favicons/safari-pinned-tab.svg`} color="#ff9600" />
        <link href="/bundle.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
        <script async type="text/javascript" src="//platform-api.sharethis.com/js/sharethis.js#property=5c64bf387056550011c4a0bc&product=inline-share-buttons" />
        {styleTags}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          charSet="UTF-8"
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(cache.extract()).replace(/</g, '\\u003c')};`,
          }}
        />
        <script src="/bundle.js" charSet="UTF-8" async />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script async src="https://www.googletagservices.com/tag/js/gpt.js" />

        <script dangerouslySetInnerHTML={{
          __html: `${JSON.stringify(
            googletag.cmd.push(() => {
              googletag.defineSlot('/29554951/MPU_Homepage', [300, 250], 'div-gpt-ad-1550448838929-0').addService(googletag.pubads());
              googletag.pubads().enableSingleRequest();
              googletag.pubads().collapseEmptyDivs();
              googletag.enableServices();
            }),
          )};`,
        }}
        />
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
