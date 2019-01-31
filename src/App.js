import React from 'react';
import { Helmet } from 'react-helmet';

import { compose, withStateHandlers, lifecycle } from 'recompose';

import Header from 'components/header';
import { BRAND_COLOURS, CLOSE_MEGAMENU, SEO } from 'constants';
import AppContent from './AppContent';
import getEmitter from './eventEmitter';
import BlogPageMetaTags from './pages/blogPage/BlogPageMetaTags';

const eventEmitter = getEmitter();

const App = (props) => {
  const {
    toggleSearch, searchOpened, menuOpened, toggleMenu,
  } = props;

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
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
        <link rel="manifest" href="/resources/assets/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffa019" />
        <meta name="msapplication-TileImage" content="/resources/assets/favicons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffa019" />
        <link rel="mask-icon" href="/resources/assets/favicons/safari-pinned-tab.svg" color={BRAND_COLOURS.orange} />
      </Helmet>
      <BlogPageMetaTags postTitle={SEO.title} description={SEO.description} keywords={SEO.keywords} />
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
