import React from 'react';
import { hydrate } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { HelmetProvider } from 'react-helmet-async';
import window from 'global/window';
import document from 'global/document';

import client from './apollo';
import Router from './router';
import App from './App';

import 'resources/assets/scss/main.scss';

const supportsHistory = 'pushState' in window.history;
const helmetContext = {};

if (document && typeof document !== 'undefined') {
  hydrate(
    <HelmetProvider context={helmetContext}>
      <ApolloProvider client={client}>
        <Router forceRefresh={!supportsHistory}>
          <App />
        </Router>
      </ApolloProvider>
    </HelmetProvider>,
    document.getElementById('root'),
  );
}
