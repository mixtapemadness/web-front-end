/* eslint object-curly-newline: 0 */

import React from 'react'
import { compose, withStateHandlers } from 'recompose'

import Header from 'components/header'
import AppContent from './AppContent'

const App = ({ toggleSearch, searchOpened, menuOpened, toggleMenu }) => (
  <div style={{ width: '100%' }}>
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
)

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
      toggleMenu: ({ menuOpened }) => () => ({
        menuOpened: !menuOpened,
      }),
    },
  ),
)(App)
