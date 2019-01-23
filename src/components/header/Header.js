import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialIcons from 'components/SocialIcons';

import MixtapeLogo from 'resources/assets/img/mixtape-logo.png';

import headerEnhancer from './headerEnhancer';
import { RESPONSIVE_BREAKPOINTS } from '../../constants';
import IconButton from '../IconButton';
import Navigation from '../Navigation';
import './_Header.scss';

const Logo = styled.img`
  width: 60px;
  box-sizing: content-box;
  margin: 0 20px;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.desktop}) {
    margin: 0 12px 0 20px;
  }
`;


const BurgerIcon = styled.div`
  width: 23px;
  height: 16px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: ${p => (p.menuOpened ? '#ffffff' : '#666666')};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }
  span:nth-child(1) {
    top: 0;
    ${p => p.menuOpened && 'top: 18px'};
    ${p => p.menuOpened && 'width: 0%'};
    ${p => p.menuOpened && 'left: 50%'};
  }
  span:nth-child(2) {
    top: 6px;
    ${p => p.menuOpened && '-webkit-transform: rotate(45deg)'};
    ${p => p.menuOpened && '-moz-transform: rotate(45deg)'};
    ${p => p.menuOpened && '-o-transform: rotate(45deg)'};
    ${p => p.menuOpened && 'transform: rotate(45deg)'};
  }
  span:nth-child(3) {
    top: 6px;
    ${p => p.menuOpened && '-webkit-transform: rotate(-45deg)'};
    ${p => p.menuOpened && '-moz-transform: rotate(-45deg)'};
    ${p => p.menuOpened && '-o-transform: rotate(-45deg)'};
    ${p => p.menuOpened && 'transform: rotate(-45deg)'};
  }
  span:nth-child(4) {
    top: 12px;
    ${p => p.menuOpened && 'top: 18px'};
    ${p => p.menuOpened && 'width: 0%'};
    ${p => p.menuOpened && 'left: 50%'};
  }
`;

const Header = ({
  toggleSearch,
  toggleMenu,
  menuOpened,
  location,
  categories,
}) => (
  <header className={`header ${menuOpened && 'header--is-open'}`}>
    <div className="header__content">
      <div className="header__left">
        <BurgerIcon menuOpened={menuOpened} onClick={() => toggleMenu()}>
          <span />
          <span />
          <span />
          <span />
        </BurgerIcon>
        <Link to="/">
          <Logo src={MixtapeLogo} alt="Mixtape Madness logo" />
        </Link>
        <Navigation catrgories={categories} location={location} />
        <IconButton iconClassName="fas fa-search" className="header__search" onClick={toggleSearch} />
      </div>
      <div className="header__right">
        <SocialIcons menuOpened={menuOpened} />
      </div>
    </div>
  </header>
);

export default headerEnhancer(Header);
