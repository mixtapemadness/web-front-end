import React, { Fragment } from 'react';

import { compose, withStateHandlers, lifecycle } from 'recompose';

import Header from 'components/header';
import { CLOSE_MEGAMENU } from 'constants';
import Advertisement from 'components/advertisement';
import AppContent from './AppContent';
import getEmitter from './eventEmitter';

const eventEmitter = getEmitter();

const App = (props) => {
  const {
    toggleSearch, searchOpened, menuOpened, toggleMenu,
  } = props;
  return (
    <Fragment>
      <Advertisement>
        <div id="div-gpt-ad-1550568793125-0" style={{ height: '1px', width: '1px' }} />

        <script dangerouslySetInnerHTML={{ __html: 'googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-1550568793125-0\'); });' }} />
      </Advertisement>
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
    </Fragment>
  );
};

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
  ),
  lifecycle({
    componentDidMount() {
      eventEmitter.addListener(CLOSE_MEGAMENU, () => this.props.toggleMenu('close'));
    },
  }),
)(App);
