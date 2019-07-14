import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from 'components/SocialIcons';

import MixtapeLogo from 'resources/assets/svg/mm-logo.svg';

import headerEnhancer from './headerEnhancer';
import IconButton from '../IconButton';
import Navigation from '../Navigation';

const Header = ({
  toggleSearch,
  toggleMenu,
  menuOpened,
  location,
}) => (
  <header className={`header ${menuOpened ? 'header--is-open' : ''}`}>
    <div className="header__content">
      <div className="header__left">
        <button type="button" className={`burger-menu ${menuOpened ? 'burger-menu--is-open' : ''}`} onClick={() => toggleMenu()}>
          <span />
          <span />
          <span />
          <span />
        </button>
        <Link to="/" className="header__logo">
          <img src={MixtapeLogo} alt="Mixtape Madness logo" />
        </Link>
        <Navigation toggleMenu={toggleMenu} location={location} />
        <IconButton iconClassName="fas fa-search" className="header__search" onClick={toggleSearch} />
      </div>
      <div className="header__right header__social-links">
        <SocialIcons menuOpened={menuOpened} />
      </div>
    </div>
  </header>
);

export default headerEnhancer(Header);
