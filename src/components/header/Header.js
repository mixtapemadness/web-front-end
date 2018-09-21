/* eslint object-curly-newline: 0 */
/* eslint implicit-arrow-linebreak: 0 */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import FacebookIcon from 'resources/assets/svgComponents/Facebook'
import TwitterIcon from 'resources/assets/svgComponents/Twitter'
import InstagramIcon from 'resources/assets/svgComponents/Instagram'
import YoutubeIcon from 'resources/assets/svgComponents/Youtube'
import DotsIcon from 'resources/assets/svgComponents/Dots'
import SearchIcon from 'resources/assets/svgComponents/Search'
import MixtapeLogo from 'resources/assets/img/mixtape-logo.png'

import headerEnhancer from './headerEnhancer'

const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #ffffff;
  font-size: 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  ${p => p.menuOpened && 'background-color: #ff9600'};
  box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.46);
`
const ContentContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media only screen and (max-width: 1050px) {
    justify-content: center;
  }
`
const LeftSide = styled.div`
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: 1050px) {
    width: 100%;
    justify-content: space-around;
  }
`

const RightSide = styled.div`
  display: flex;
  align-items: flex-end;
`

const NavBar = styled.nav`
  display: flex;
  align-items: flex-end;
`
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  display: flex;
  color: ${props => (props.menuOpened ? '#ffffff' : '#666666')};
  transition: unset;
`
const Li = styled.li`
  padding-bottom: 35px;
  font-weight: 600;
  letter-spacing: 1.5px;
  border-bottom: ${props =>
    props.isActive ? '2px solid #ff9600' : '2px solid transparent'};
  :not(:last-child) {
    padding-right: 10px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 13px;
  }
`
const OrangeContainer = styled.div`
  display: flex;
  margin-bottom: 37px;
  color: ${p => (p.menuOpened ? '#ffffff' : '#ffa019')};
`
const Span = styled.span`
  font-weight: 600;
  margin-left: 20px;
  letter-spacing: 1.5px;
  cursor: pointer;
`
const Logo = styled.img`
  height: 70px;
  padding-bottom: 10px;
  margin-right: 20px;
  box-sizing: content-box;
  @media only screen and (max-width: 450px) {
    height: 52px;
  }
`
const Search = styled.div`
  width: 20px;
  margin-bottom: 30px;
  cursor: pointer;
`
const Dots = styled.div`
  width: 10px;
  margin-bottom: 35px;
  margin-left: 30px;
  margin-right: 10px;
  cursor: pointer;
`
const ContactUsContainer = styled.div`
  border: 1px solid ${p => (p.menuOpened ? '#ffffff' : '#ffa019')};
  border-radius: 15px;
  margin-left: 20px;
  padding: 0px 5px;
  color: ${p => (p.menuOpened ? '#ffffff' : '#ffa019')};
  font-weight: 600;
  letter-spacing: 1.5px;
  cursor: pointer;
`

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  margin-left: 10px;
`
const SocialIcon = styled.a`
  height: 20px;
  margin-left: 20px;
  cursor: pointer;
`

const BurgerIcon = styled.div`
  width: 23px;
  height: 16px;
  position: relative;
  margin: 0px 40px 45px 0px;
  @media only screen and (max-width: 450px) {
    margin-right: 20px;
    margin-bottom: 35px;
  }
  @media only screen and (max-width: 350px) {
    margin-right: 5px;
    margin-left: 1px;
  }
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

const DropDown = styled.div`
  position: relative;
  div {
    display: none;
  }
  &:hover {
    div {
      display: flex;
    }
  }
`
const DropDownContent = styled.div`
  z-index: 1;
  position: absolute;
  background-color: #ffffff;
  top: 62px;
  padding: 18px 20px;
  border: 1px solid #e7e7e7;
  justify-content: space-between;
  width: 310px;
  height: 124px;
  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 13px;
    span {
      cursor: pointer;
      font-size: 14px;
      color: #333333;
    }
  }
`
const Join = styled.div`
  border: 1px solid #ff9d00;
  border-radius: 15px;
  cursor: pointer;
  background: transparent;
  padding: 0px 12px;
  justify-content: center;
  font-size: 13px;
  letter-spacing: 0.8px;
  color: #000000;
`
const DotsDropDown = styled.div`
  position: relative;
`
// const DotsDropDownContent = styled.div`
//   z-index: 1;
//   position: absolute;
//   background-color: #ffffff;
//   border: 1px solid #e7e7e7;
//   top: 53px;
//   width: 208px;
//   min-height: 278px;
//   display: ${p => (p.dotsMenu === true ? 'block' : 'none')};

//   ul {
//     list-style: none;
//     font-size: 14px;
//     color: #333333;
//     padding: 20px 0px;
//   }
//   li {
//     padding: 3px 20px;
//     :hover {
//       background-color: #f5f5f5;
//     }
//   }
//   `
// const Line = styled.div`
//   height: 1px;
//   margin: 9px 0;
//   overflow: hidden;
//   background-color: #e5e5e5;
// `
/*
  <DotsDropDownContent dotsMenu={dotsMenu}>
    <ul>
      <li>
        <Link to="/aboutus">About Us</Link>
      </li>
      <li>Legal</li>
      <li>Copyright</li>
      <li>Terms & Contitions</li>
      <Line />
      <li>Advertising</li>
      <li>Press</li>
      <li>
        <a href="https://itunes.apple.com/us/app/mixtape-madness-latest-uk-mixtapes-singles/id1090862433?mt=8&ign-mpt=uo%3D4">
          Download our IOS app
        </a>
      </li>
      <li>Download our Android app</li>
      <Line />
      <li>Contact Us</li>
    </ul>
  </DotsDropDownContent>
*/

const Div = styled.div`
  display: flex;
  align-items: flex-end;
`

const DropDownItem = styled.span`
  font-size: 13px;
  letter-spacing: 0.8px;
  color: #000000;
`

const Header = ({
  // dotsMenu,
  toggleDotsMenu,
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
          <Link to="/">
            <Logo src={MixtapeLogo} alt="logo" />
          </Link>
        </Div>
        <NavBar>
          <Ul menuOpened={menuOpened}>
            <DropDown>
              <Li isActive={location.pathname === '/music'}>
                <Link to="/music">Music</Link>
              </Li>
              <DropDownContent>
                <div>
                  <DropDownItem>Top 100</DropDownItem>
                  <DropDownItem>Top 30</DropDownItem>
                  <DropDownItem>Hottest</DropDownItem>
                  <DropDownItem>Latest</DropDownItem>
                </div>
                <div>
                  <DropDownItem>Trending</DropDownItem>
                  <DropDownItem>Hottest</DropDownItem>
                  <DropDownItem>Singles</DropDownItem>
                  <DropDownItem>Mixtapes</DropDownItem>
                </div>
                <div>
                  <DropDownItem>Videos</DropDownItem>
                  <DropDownItem>Browse</DropDownItem>
                  <DropDownItem>Albums</DropDownItem>
                  <Join>Join MM</Join>
                </div>
              </DropDownContent>
            </DropDown>
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
        </NavBar>
        {width > 1050 && (
          <Div>
            <DotsDropDown>
              <Dots onClick={() => toggleDotsMenu()}>
                <DotsIcon
                  width="10px"
                  color={menuOpened ? '#ffffff' : '#666666'}
                />
              </Dots>
            </DotsDropDown>
            <Search onClick={() => toggleSearch()}>
              <SearchIcon
                width="20px"
                color={menuOpened ? '#ffffff' : '#666666'}
              />
            </Search>
          </Div>
        )}
      </LeftSide>
      {width > 1050 && (
        <RightSide>
          <OrangeContainer menuOpened={menuOpened}>
            <Span>Upload</Span>
            <Span>
              <Link to="/register">Register</Link>
            </Span>
            <Span>
              <Link to="/login">Log In</Link>
            </Span>
            <ContactUsContainer menuOpened={menuOpened}>
              Contact Us
            </ContactUsContainer>
          </OrangeContainer>
          <SocialIconsContainer>
            <SocialIcon href="https://twitter.com/mixtapemadness">
              <TwitterIcon
                height="20px"
                color={menuOpened ? '#ffffff' : '#666666'}
              />
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/MixtapeMadnessUK/">
              <FacebookIcon
                height="17px"
                color={menuOpened ? '#ffffff' : '#666666'}
              />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/mixtapemadness/">
              <InstagramIcon
                height="17px"
                color={menuOpened ? '#ffffff' : '#666666'}
              />
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com/user/madaboutmixtapes">
              <YoutubeIcon
                height="22px"
                color={menuOpened ? '#ffffff' : '#666666'}
              />
            </SocialIcon>
          </SocialIconsContainer>
        </RightSide>
      )}
    </ContentContainer>
  </HeaderContainer>
)

export default headerEnhancer(Header)
