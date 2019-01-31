import React from 'react';
import { hydrate, render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import window from 'global/window';
import document from 'global/document';

import client from './apollo';
import Router from './router';
import App from './App';

import 'resources/assets/scss/main.scss';

const supportsHistory = 'pushState' in window.history;

hydrate(
  <ApolloProvider client={client}>
    <Router forceRefresh={!supportsHistory}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);

if (typeof document !== 'undefined') {
  render(
    <ApolloProvider client={client}>
      <Router forceRefresh={!supportsHistory}>
        <App />
      </Router>
    </ApolloProvider>, document.getElementById('root'),
  );
}
