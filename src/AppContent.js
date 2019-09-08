import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from 'components/menu';
import Home from 'pages/home';
import BlogPage from 'pages/blogPage';
import AboutUs from 'pages/aboutUs';
import AuthorPage from 'pages/authorPage';
import Blog from 'pages/blog';
import Search from 'components/search';
import SearchResult from 'pages/searchResult/SearchResult';

import PrivacyAndPolicy from 'pages/privacyAndPolicy';
import TermsAndConditions from 'pages/termsAndConditions';
import Faq from 'pages/Faq';
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
        {/* This must be first */}
        <Route exact path={`${ROUTES.author}/:slug`} component={AuthorPage} />
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/category/:filter" component={Blog} />
        <Route strict path="/blog/:category/:slug" component={BlogPage} />
        <Route exact path="/blog" component={Home} />
        <Route exact path={ROUTES.about} component={AboutUs} />
        <Route exact path={ROUTES.contactUs} component={Contact} />
        {/* <Route path="/events" component={EventPage} /> */}
        {/* <Route path="/music-profile/:slug" component={MusicProfilePage} /> */}
        {/* <Route path="/team" component={TeamPage} /> */}
        {/* <Route path="/moremenu" component={MoreMenu} /> */}
        <Route exact path={ROUTES.termsAndConditions} component={TermsAndConditions} />
        <Route exact path={ROUTES.privacyPolicy} component={PrivacyAndPolicy} />
        <Route exact path={ROUTES.faqs} component={Faq} />
        <Route exact path="/searchresult/:category/:key" component={SearchResult} />
        {/* <Route path="/login" component={() => <SignForm type="login" />} /> */}
        {/* <Route */}
        {/* path="/register" */}
        {/* component={() => <SignForm type="register" />} */}
        {/* /> */}
        <Route exact component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
    {menuOpened && <Menu menuOpened={menuOpened} />}
    {searchOpened && (
      <Search toggleSearch={toggleSearch} searchOpened={searchOpened} />
    )}
  </React.Fragment>
);

export default AppContent;
