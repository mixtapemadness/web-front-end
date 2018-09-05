import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import BlogPage from './pages/blogPage'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blogpage" component={BlogPage} />
    </Switch>
  </div>
)

export default App
