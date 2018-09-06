import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import SearchIcon from 'resources/assets/svg/search.svg'
import DotsIcon from 'resources/assets/svg/ellipsis.svg'
import TwitterIcon from 'resources/assets/svg/twitter-logo.svg'
import FacebookIcon from 'resources/assets/svg/facebook-app-logo.svg'
import InstagramIcon from 'resources/assets/svg/instagram-logo.svg'
import YoutubeIcon from 'resources/assets/svg/youtube.svg'
import BurgerIcon from 'resources/assets/svg/burger.svg'

const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #ffffff;
  font-size: 16px;
  ${p => p.bottomBorder && 'border-bottom: 1px solid #E7E7E7'};
`
const ContentContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
const LeftSide = styled.div`
  display: flex;
  align-items: flex-end;
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
`
const Li = styled.li`
  padding-bottom: 35px;
  color: grey;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1.5px;
  border-bottom: ${props => (props.active ? '2px solid orange' : null)};
  :not(:last-child) {
    margin-right: 10px;
  }
`
const OrangeContainer = styled.div`
  display: flex;
  margin-bottom: 37px;
`
const Span = styled.span`
  color: orange;
  font-weight: 600;
  margin-left: 20px;
  letter-spacing: 1.5px;
  cursor: pointer;
`
const Logo = styled.img`
  height: 50px;
  padding-bottom: 20px;
  margin-right: 20px;
  box-sizing: content-box;
`
const Search = styled.img`
  width: 20px;
  margin-bottom: 35px;
  cursor: pointer;
`
const Dots = styled.img`
  width: 10px;
  margin-bottom: 41px;
  margin-left: 30px;
  margin-right: 10px;
  cursor: pointer;
`
const ContactUsContainer = styled.div`
  border: 1px solid orange;
  border-radius: 15px;
  margin-left: 20px;
  padding: 0px 5px;
  color: orange;
  font-weight: 600;
  letter-spacing: 1.5px;
  cursor: pointer;
`

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 38px;
  margin-left: 10px;
`
const SocialIcon = styled.img`
  height: 20px;
  margin-left: 20px;
  ${props => props.facebook && 'height: 17px'};
  ${props => props.youtube && 'height: 22px'};
  cursor: pointer;
`
const Burger = styled.img`
  width: 19px;
  margin-bottom: 36px;
  margin-right: 40px;
  cursor: pointer;
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
  padding: 20px;
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
    }
  }
`
const Join = styled.div`
  border: 1px solid #ff9d00;
  border-radius: 15px;
  cursor: pointer;
  background: transparent;
  padding: 0px 12px;
`

const Header = ({ bottomBorder }) => (
  <HeaderContainer bottomBorder={bottomBorder}>
    <ContentContainer>
      <LeftSide>
        <Burger src={BurgerIcon} alt="burger" />
        <Link to="/">
          <Logo
            src="http://www.mixtapemadness.com/assets/images/logo-full.png"
            alt="logo"
          />
        </Link>
        <NavBar>
          <Ul>
            <DropDown>
              <Li active>Music</Li>
              <DropDownContent>
                <div>
                  <span>Top 100</span>
                  <span>Top 30</span>
                  <span>Hottest</span>
                  <span>Latest</span>
                </div>
                <div>
                  <span>Trending</span>
                  <span>Hottest</span>
                  <span>Singles</span>
                  <span>Mixtapes</span>
                </div>
                <div>
                  <span>Videos</span>
                  <span>Browse</span>
                  <span>Albums</span>
                  <Join>Join MM</Join>
                </div>
              </DropDownContent>
            </DropDown>
            <DropDown>
              <Li>News</Li>
              <DropDownContent>Content</DropDownContent>
            </DropDown>
            <DropDown>
              <Li>Events</Li>
              <DropDownContent>Content</DropDownContent>
            </DropDown>
            <DropDown>
              <Li>Video</Li>
              <DropDownContent>Content</DropDownContent>
            </DropDown>
          </Ul>
        </NavBar>
        <Dots src={DotsIcon} alt="dots" />
        <Search src={SearchIcon} alt="search" />
      </LeftSide>
      <RightSide>
        <OrangeContainer>
          <Span>Upload</Span>
          <Span>Register</Span>
          <Span>Log In</Span>
          <ContactUsContainer>Contact Us</ContactUsContainer>
        </OrangeContainer>
        <SocialIconsContainer>
          <SocialIcon src={TwitterIcon} alt="twitter" />
          <SocialIcon src={FacebookIcon} facebook alt="facebook" />
          <SocialIcon src={InstagramIcon} facebook alt="insta" />
          <SocialIcon src={YoutubeIcon} youtube alt="youtube" />
        </SocialIconsContainer>
      </RightSide>
    </ContentContainer>
  </HeaderContainer>
)

export default Header
