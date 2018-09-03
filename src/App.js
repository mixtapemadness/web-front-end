import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/home'

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </div>
)

export default App
