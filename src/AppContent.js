import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Menu from 'components/menu'
import Home from 'pages/home'
import BlogPage from 'pages/blogPage'
import AboutUs from 'pages/aboutUs'
// import AuthorPage from 'pages/authorPage'
import Blog from 'pages/blog'
import EventPage from 'pages/eventPage'
import Search from 'components/search'
import Music from 'pages/music'
import MusicProfilePage from 'pages/musicProfilePage'
import TeamPage from 'pages/teamPage'

const AppContent = ({ searchOpened, toggleSearch, menuOpened }) => (
  <div style={{ marginTop: 120 }}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog/category/:filter" component={Blog} />
      <Route path="/blog/:category/:slug" component={BlogPage} />
      <Route path="/aboutus" component={AboutUs} />
      {/* <Route path="/author/:slug" component={AuthorPage} /> */}
      <Route path="/events" component={EventPage} />
      <Route path="/music" component={Music} />
      <Route path="/music-profile/:slug" component={MusicProfilePage} />
      <Route path="/team" component={TeamPage} />
    </Switch>
    {searchOpened && <Search toggleSearch={toggleSearch} />}
    {menuOpened && <Menu />}
  </div>
)

export default AppContent
