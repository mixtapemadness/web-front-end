import React from 'react';
import Page from '../Page';
import { CONTACT_DETAILS } from '../../constants';

const ErrorPage = () => (
  <Page classNames="error-page">
    <h1>Sorry, this page doesnt exist :(</h1>

    <div className="error-page__icon-container">
      <i className="fas fa-exclamation-triangle" />
    </div>

    <div className="error-page__content">
      <h2>Was you looking for some music?</h2>
      <p>
        You may be looking for a mixtape or single. But unfortunately, we have
        decided to <b>stop streaming</b> free music for the meantime.
        We are currently working on bringing you something <b>BIGGER and BETTER</b> in the near future.
      </p>
      <p>But for now, we will still be bringing you some of the latest music videos, news and entertainment. So be sure to stay locked in.</p>
      <h2>Something else?</h2>
      <p>If you have any further questions, please feel free to contact us <a href={`mailto:${CONTACT_DETAILS.generalEnquires}`}>{CONTACT_DETAILS.generalEnquires}</a>.</p>
    </div>
  </Page>
);

export default ErrorPage;
