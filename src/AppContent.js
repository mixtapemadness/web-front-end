import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Menu from 'components/menu'
import Home from 'pages/home'
import BlogPage from 'pages/blogPage'
import AboutUs from 'pages/aboutUs'
import AuthorPage from 'pages/authorPage'
import Blog from 'pages/blog'
import EventPage from 'pages/eventPage'
import Search from 'components/search'
import Music from 'pages/music'
import MusicProfilePage from 'pages/musicProfilePage'
import TeamPage from 'pages/teamPage'
import SearchResult from 'pages/searchResult/SearchResult'
import SignForm from 'components/signForm/SignForm'
import MoreMenu from 'components/moreMenu'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 120px;
  height: ${p => (p.searchOpened ? '80vh' : 'auto')};
  overflow: ${p => (p.searchOpened ? 'hidden' : 'visible')};
  @media (max-width: 850px) {
    margin-top: 80px;
  }
`

const AppContent = ({ searchOpened, toggleSearch, menuOpened }) => (
  <React.Fragment>
    <Container searchOpened={searchOpened}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/category/:filter" component={Blog} />
        <Route path="/blog/:category/:slug" component={BlogPage} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/author/:slug" component={AuthorPage} />
        <Route path="/events" component={EventPage} />
        <Route path="/music" component={Music} />
        <Route path="/music-profile/:slug" component={MusicProfilePage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/moremenu" component={MoreMenu} />
        <Route path="/searchresult/:category/:key" component={SearchResult} />
        <Route path="/login" component={() => <SignForm type="login" />} />
        <Route
          path="/register"
          component={() => <SignForm type="register" />}
        />
      </Switch>
      {menuOpened && <Menu />}
    </Container>
    {searchOpened && (
      <Search toggleSearch={toggleSearch} searchOpened={searchOpened} />
    )}
  </React.Fragment>
)

export default AppContent
