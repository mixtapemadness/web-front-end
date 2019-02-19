import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from 'components/menu';
import Home from 'pages/home';
import BlogPage from 'pages/blogPage';
import AboutUs from 'pages/aboutUs';
import AuthorPage from 'pages/authorPage';
import Blog from 'pages/blog';
import Search from 'components/search';
import Music from 'pages/music';
// import MusicProfilePage from 'pages/musicProfilePage';
// import TeamPage from 'pages/teamPage';
import SearchResult from 'pages/searchResult/SearchResult';
// import SignForm from 'components/signForm/SignForm';
// import MoreMenu from 'components/moreMenu';
import PrivacyAndPolicy from 'pages/privacyAndPolicy';
import TermsAndConditions from 'pages/termsAndConditions';
import Footer from 'components/footer';
import GA from 'components/googleAnalytics';
import Contact from './pages/contact';
import { ROUTES } from './constants';
import './App.scss';
import ErrorPage from './pages/errorPage';

const AppContent = ({ searchOpened, toggleSearch, menuOpened }) => (
  <React.Fragment>
    <div className={`app ${searchOpened || menuOpened ? 'app--menu-open' : ''}`}>
      <GA.RouteTracker />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/category/:filter" component={Blog} />
        <Route path="/blog/:category/:slug" component={BlogPage} />
        <Route path="/blog" component={Home} />
        <Route path={ROUTES.about} component={AboutUs} />
        <Route path={ROUTES.contactUs} component={Contact} />
        <Route path="/author/:slug" component={AuthorPage} />
        {/* <Route path="/events" component={EventPage} /> */}
        <Route path="/test1902" component={Music} />
        {/* <Route path="/music-profile/:slug" component={MusicProfilePage} /> */}
        {/* <Route path="/team" component={TeamPage} /> */}
        {/* <Route path="/moremenu" component={MoreMenu} /> */}
        <Route path={ROUTES.termsAndConditions} component={TermsAndConditions} />
        <Route path={ROUTES.privacyPolicy} component={PrivacyAndPolicy} />
        <Route path="/searchresult/:category/:key" component={SearchResult} />
        {/* <Route path="/login" component={() => <SignForm type="login" />} /> */}
        {/* <Route */}
        {/* path="/register" */}
        {/* component={() => <SignForm type="register" />} */}
        {/* /> */}
        <Route component={ErrorPage} />
      </Switch>
      {menuOpened && <Menu />}
    </div>
    <Footer />

    {searchOpened && (
      <Search toggleSearch={toggleSearch} searchOpened={searchOpened} />
    )}
  </React.Fragment>
);

export default AppContent;
