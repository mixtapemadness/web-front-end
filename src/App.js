/* eslint object-curly-newline: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint function-paren-newline: 0 */
/* eslint operator-linebreak: 0 */
import React from 'react';
import { compose, withStateHandlers, lifecycle, withHandlers } from 'recompose';
import window from 'global/window';

import Header from 'components/header';
import { CLOSE_MEGAMENU, GA_TRACKING_CODE } from 'constants';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import AppContent from './AppContent';
import getEmitter from './eventEmitter';

const eventEmitter = getEmitter();

class App extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');

    script.src =
      '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c0e4bff29290756';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    const { toggleSearch, searchOpened, menuOpened, toggleMenu } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <Helmet>
          <title>Mixtape Madness</title>
        </Helmet>
        <Header
          toggleSearch={toggleSearch}
          menuOpened={menuOpened}
          toggleMenu={toggleMenu}
        />
        <AppContent
          searchOpened={searchOpened}
          toggleSearch={toggleSearch}
          menuOpened={menuOpened}
        />
      </div>
    );
  }
}

export default compose(
  withStateHandlers(
    () => ({
      searchOpened: false,
      menuOpened: false,
    }),
    {
      toggleSearch: ({ searchOpened }) => () => ({
        searchOpened: !searchOpened,
      }),

      toggleMenu: ({ menuOpened }) => action => {
        if (action === 'close') {
          return { menuOpened: false };
        }
        return { menuOpened: !menuOpened };
      },
    },
    withHandlers({}),
  ),
  lifecycle({
    componentDidMount() {
      ReactGA.initialize(GA_TRACKING_CODE);
      ReactGA.pageview(
        window.location
          ? window.location.pathname + window.location.search
          : '',
      );
      eventEmitter.addListener(CLOSE_MEGAMENU, () =>
        this.props.toggleMenu('close'),
      );
    },
  }),
)(App);
