/* eslint object-curly-newline: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint indent: 0 */
/* eslint jsx-quotes: 0 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SocialIcons from 'components/SocialIcons'
import SearchIcon from 'resources/assets/svgComponents/Search'
import MixtapeLogo from 'resources/assets/img/mixtape-logo.png'

import headerEnhancer from './headerEnhancer'
import { RESPONSIVE_BREAKPOINTS } from '../../constants'

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  font-size: 16px;
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  ${p => p.menuOpened && 'background-color: #ff9600'};
  box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.46);
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    height: 70px;
  }
`

const ContentContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  font-size: 13px;
  @media only screen and (max-width: 1050px) {
    justify-content: center;
  }
`
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
`

const RightSide = styled.div`
  display: flex;
  align-items: center;
`

const NavBar = styled.nav`
  display: flex;
`
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  display: flex;
  color: ${props => (props.menuOpened ? '#ffffff' : '#666666')};
  transition: unset;
  margin-right: 10px;
  @media only screen and (max-width: 475px) {
    display: none;
  }
`
const Li = styled.li`
  font-weight: 600;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: ${props =>
    props.isActive ? '2px solid #ff9600' : '2px solid transparent'};
  :not(:last-child) {
    padding-right: 10px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 13px;
  }
`
// const Span = styled.span`
//   font-weight: 600;
//   margin-left: 20px;
//   letter-spacing: 1.5px;
//   cursor: pointer;
// `

const Logo = styled.img`
  height: 70px;
  box-sizing: content-box;
  @media only screen and (max-width: 450px) {
    height: 52px;
  }
`

const Search = styled.div`
  width: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
`

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
`

const Div = styled.div`
  display: flex;
  align-items: center;
`

const Header = ({
  // dotsMenu,
  width,
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
            <Li isActive={location.pathname === '/blog/category/news'}>
              <Link to="/blog/category/news">News</Link>
            </Li>
            <Li isActive={location.pathname === '/blog/category/events'}>
              <Link to="/blog/category/events">Events</Link>
            </Li>
            <Li isActive={location.pathname === '/blog/category/videos'}>
              <Link to="/blog/category/videos">Video</Link>
            </Li>
          </Ul>
          <Search onClick={() => toggleSearch()}>
            <SearchIcon
              width="20px"
              color={menuOpened ? '#ffffff' : '#666666'}
            />
          </Search>
        </NavBar>
      </LeftSide>
      {width > 1050 && (
        <RightSide>
          <SocialIcons menuOpened={menuOpened} />
        </RightSide>
      )}
    </ContentContainer>
  </HeaderContainer>
)

export default headerEnhancer(Header)
