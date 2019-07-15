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
import CompetitionPage from './pages/CompetitionPage';
import CompetitionTerms from './pages/CompetitionPage/CompetitionTerms';

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
        <Route path="/competition-page" component={CompetitionPage} />
        <Route path="/fifa-e-world-up-terms" component={CompetitionTerms} />
        {/* <Route path="/events" component={EventPage} /> */}
        {/* <Route path="/music-profile/:slug" component={MusicProfilePage} /> */}
        {/* <Route path="/team" component={TeamPage} /> */}
        {/* <Route path="/moremenu" component={MoreMenu} /> */}
        <Route path={ROUTES.termsAndConditions} component={TermsAndConditions} />
        <Route path={ROUTES.privacyPolicy} component={PrivacyAndPolicy} />
        <Route path={ROUTES.faqs} component={Faq} />
        <Route path="/searchresult/:category/:key" component={SearchResult} />
        {/* <Route path="/login" component={() => <SignForm type="login" />} /> */}
        {/* <Route */}
        {/* path="/register" */}
        {/* component={() => <SignForm type="register" />} */}
        {/* /> */}
        <Route component={ErrorPage} />
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
