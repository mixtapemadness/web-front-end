/* eslint object-curly-newline: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint function-paren-newline: 0 */
import React from 'react'
import { compose, withStateHandlers, lifecycle, withHandlers } from 'recompose'

import Header from 'components/header'
import { CLOSE_MEGAMENU } from 'constants'
import ReactGA from 'react-ga'
import AppContent from './AppContent'
import getEmitter from './eventEmitter'

const eventEmitter = getEmitter()

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

      toggleMenu: ({ menuOpened }) => action => {
        if (action === 'close') {
          return { menuOpened: false }
        }
        return { menuOpened: !menuOpened }
      },
    },
    withHandlers({}),
  ),
  lifecycle({
    componentDidMount() {
      ReactGA.initialize('UA-75737603-1')
      ReactGA.pageview(window.location.pathname + window.location.search)
      eventEmitter.addListener(CLOSE_MEGAMENU, () =>
        this.props.toggleMenu('close'),
      )
    },
  }),
)(App)
