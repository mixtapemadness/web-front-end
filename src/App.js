import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/home'
import BlogPage from 'pages/blogPage'
import AboutUs from 'pages/aboutUs'
import AuthorPage from 'pages/authorPage'
import News from 'pages/news'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog/:type/:id" component={BlogPage} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/author" component={AuthorPage} />
      <Route path="/news" component={News} />
    </Switch>
  </div>
)

export default App
