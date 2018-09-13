import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/home'
import BlogPage from 'pages/blogPage'
import AboutUs from 'pages/aboutUs'
import AuthorPage from 'pages/authorPage'
import News from 'pages/news'
import EventPage from 'pages/eventPage'
import Search from 'components/search'
import Menu from 'components/menu'

const AppContent = ({ searchOpened, toggleSearch, menuOpened }) => (
  <div style={{ marginTop: 120 }}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog/:type/:id" component={BlogPage} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/author" component={AuthorPage} />
      <Route path="/news" component={News} />
      <Route path="/events" component={EventPage} />
    </Switch>
    {searchOpened && <Search toggleSearch={toggleSearch} />}
    {menuOpened && <Menu />}
  </div>
)

export default AppContent
