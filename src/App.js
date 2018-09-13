import React from 'react'
import { compose, withStateHandlers } from 'recompose'

import Header from 'components/header'
import AppContent from './AppContent'

const App = ({ toggleSearch, searchOpened }) => (
  <div style={{ width: '100%' }}>
    {console.log(searchOpened)}
    <Header toggleSearch={toggleSearch} />
    <AppContent searchOpened={searchOpened} toggleSearch={toggleSearch} />
  </div>
)

export default compose(
  withStateHandlers(
    () => ({
      searchOpened: false,
    }),
    {
      toggleSearch: ({ searchOpened }) => () => ({
        searchOpened: !searchOpened,
      }),
    },
  ),
)(App)
