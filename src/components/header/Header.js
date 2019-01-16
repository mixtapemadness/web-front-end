/* eslint implicit-arrow-linebreak: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialIcons from 'components/SocialIcons';
import SearchIcon from 'resources/assets/svgComponents/Search';
import MixtapeLogo from 'resources/assets/img/mixtape-logo.png';

import headerEnhancer from './headerEnhancer';
import { BRAND_COLOURS, RESPONSIVE_BREAKPOINTS, ROUTES } from '../../constants';

const HeaderContainer = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #ffffff;
  font-size: 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  ${p => p.menuOpened && 'background-color: #ff9600'};
  box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.46);
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    height: 70px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const LeftSide = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1050px) {
    width: 100%;
    justify-content: center;
  }
  @media only screen and (max-width: 475px) {
    justify-content: space-between;
    padding: 0 20px;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  display: none;

  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.desktop}) {
    display: block;
  }
`;

const NavBar = styled.nav`
  display: none;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.desktop}) {
    display: flex;
  }
`;
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  display: none;
  color: ${props => (props.menuOpened ? '#ffffff' : '#666666')};
  transition: unset;
  margin-right: 20px;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    display: flex;
  }
`;
const Li = styled.li`
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 12px;
  font-size: 16px;
  text-transform: capitalize;
  color: ${p => p.isActive && `${BRAND_COLOURS.orange}`};
  border-bottom: ${p => p.isActive && `2px solid ${BRAND_COLOURS.orange}`};
`;

const Logo = styled.img`
  width: 60px;
  box-sizing: content-box;
  margin: 0 20px;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.desktop}) {
    margin: 0 12px 0 20px;
  }
`;

const Search = styled.div`
  width: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
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
    background-color: ${p => (p.menuOpened === true ? '#ffffff' : '#666666')};
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

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Header = ({
  // dotsMenu,
  toggleSearch,
  toggleMenu,
  menuOpened,
  location,
}) => (
  <HeaderContainer menuOpened={menuOpened}>
    <ContentContainer>
      <LeftSide>
        <Div>
          <BurgerIcon menuOpened={menuOpened} onClick={() => toggleMenu()}>
            <span />
            <span />
            <span />
            <span />
          </BurgerIcon>
        </Div>
        <Link to="/">
          <Logo src={MixtapeLogo} alt="logo" />
        </Link>
        <NavBar>
          <Ul menuOpened={menuOpened}>
            {Object.keys(ROUTES.categories).map(i => (
              <Li
                key={ROUTES.categories[i]}
                isActive={location.pathname === ROUTES.categories[i]}
              >
                <Link to={ROUTES.categories[i]}>{i}</Link>
              </Li>
            ))}
          </Ul>
        </NavBar>
        <Search onClick={() => toggleSearch()}>
          <SearchIcon width="20px" color={menuOpened ? '#ffffff' : '#666666'} />
        </Search>
      </LeftSide>
      <RightSide>
        <SocialIcons menuOpened={menuOpened} />
      </RightSide>
    </ContentContainer>
  </HeaderContainer>
);

export default headerEnhancer(Header);
